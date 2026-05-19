#!/bin/bash

# Target directory (Magazines folder inside public directory of current workspace)
MAGAZINES_DIR="$(pwd)/public/assets/magazines"

# Ensure directory exists
if [ ! -d "$MAGAZINES_DIR" ]; then
  echo "Error: Directory $MAGAZINES_DIR tidak ditemukan!"
  echo "Pastikan Anda menjalankan script ini dari root directory project stikes_banyuwangi."
  exit 1
fi

echo "=============================================="
# Check if gs is installed
if ! command -v gs &> /dev/null; then
  echo "❌ Error: Ghostscript (gs) tidak ditemukan!"
  echo "Silakan install terlebih dahulu lewat brew: brew install ghostscript"
  exit 1
fi

echo "🚀 MEMULAI PROSES KOMPRESI PDF MAJALAH UNIDSOE..."
echo "Direktori Target: $MAGAZINES_DIR"
echo "=============================================="

# Loop through all PDFs in the folder
find "$MAGAZINES_DIR" -name "*.pdf" | while read -r filepath; do
  filename=$(basename "$filepath")
  
  # Skip already compressed temp files
  if [[ "$filename" == temp_* ]]; then
    continue
  fi
  
  initial_size=$(stat -f%z "$filepath")
  initial_size_mb=$(echo "scale=2; $initial_size / 1048576" | bc)
  
  # Only compress files larger than 5MB
  if (( $(echo "$initial_size < 5242880" | bc -l) )); then
    echo "⏩ Lewati $filename (Sudah kecil: ${initial_size_mb}MB)"
    continue
  fi
  
  echo "⏳ Mengompres: $filename (${initial_size_mb}MB)..."
  
  temp_output="$MAGAZINES_DIR/temp_$filename"
  
  # Ghostscript compression command (/ebook = 150 DPI, forced JPEG encoding)
  gs -q -dNOPAUSE -dBATCH -dSAFER -sDEVICE=pdfwrite \
     -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook \
     -dEmbedAllFonts=true -dSubsetFonts=true \
     -dAutoFilterColorImages=false -dColorImageFilter=/DCTEncode \
     -dAutoFilterGrayImages=false -dGrayImageFilter=/DCTEncode \
     -dColorImageDownsampleType=/Bicubic -dColorImageResolution=150 \
     -dGrayImageDownsampleType=/Bicubic -dGrayImageResolution=150 \
     -dMonoImageDownsampleType=/Bicubic -dMonoImageResolution=150 \
     -sOutputFile="$temp_output" "$filepath"
     
  if [ -f "$temp_output" ]; then
    final_size=$(stat -f%z "$temp_output")
    final_size_mb=$(echo "scale=2; $final_size / 1048576" | bc)
    
    # Verify the output is smaller and valid
    if (( $(echo "$final_size < $initial_size" | bc -l) )) && [ "$final_size" -gt 0 ]; then
      mv "$temp_output" "$filepath"
      echo "✅ Berhasil Mengompres $filename: ${initial_size_mb}MB -> ${final_size_mb}MB"
    else
      rm "$temp_output"
      echo "⚠️ Ukuran kompresi tidak lebih kecil untuk $filename, mempertahankan file asli."
    fi
  else
    echo "❌ Gagal mengompres $filename"
  fi
  echo "----------------------------------------------"
done

echo "=============================================="
echo "🎉 SEMUA PROSES KOMPRESI PDF SELESAI!"
echo "=============================================="
