# 🎬 Demo Agent Actions - Quick Start

## ✅ Yang Sudah Disiapkan

1. ✅ **@sanity/client** - Sudah terinstall
2. ✅ **tsx** - Sudah terinstall (untuk run TypeScript)
3. ✅ **Script demo** - `scripts/generate-post.ts`
4. ✅ **Schema ID** - `_.schemas.unidsoe-cms`

---

## 🚀 Quick Start (3 Langkah)

### Step 1: Get API Token

1. **Buka:** https://sanity.io/manage/project/iwtyom29/api
2. **Klik "Add API token"**
3. **Set:**
   - Name: `Agent Actions Demo`
   - Permission: **Editor** (read/write)
4. **Copy token**

---

### Step 2: Set Environment Variable

**PowerShell:**
```powershell
$env:SANITY_API_TOKEN="your-token-here"
```

**Bash:**
```bash
export SANITY_API_TOKEN="your-token-here"
```

---

### Step 3: Run Script

```powershell
# Dengan default topic
npm run generate:post

# Atau dengan custom topic
npx tsx scripts/generate-post.ts "Prestasi Mahasiswa Unidsoe"
```

---

## 📝 Example Usage

### Generate Post dengan Default Topic
```powershell
npm run generate:post
```

### Generate Post dengan Custom Topic
```powershell
npx tsx scripts/generate-post.ts "Workshop Kesehatan Masyarakat"
```

### Generate Post dengan Topik Lain
```powershell
npx tsx scripts/generate-post.ts "Program Studi Keperawatan"
```

---

## 🎯 Untuk Demo Presentasi

### Flow Demo (5 Menit):

1. **Show Script** (1 menit)
   - Buka `scripts/generate-post.ts`
   - Explain: "Ini script untuk generate content dengan AI"

2. **Set Token** (30 detik)
   ```powershell
   $env:SANITY_API_TOKEN="your-token"
   ```

3. **Run Script** (1 menit)
   ```powershell
   npm run generate:post
   ```

4. **Show Result** (1 menit)
   - Show generated post di terminal
   - Explain: "AI sudah generate title, body, excerpt"

5. **Check di Studio** (1.5 menit)
   - Buka Sanity Studio
   - Show post yang baru di-generate
   - Explain: "Content sudah tersimpan di CMS"

---

## 📊 Expected Output

```
🤖 Generating post with Agent Actions...
📝 Topic: Prestasi Mahasiswa dalam Bidang Kesehatan
⏳ Please wait...

✅ Post generated successfully!

📄 Generated Document:
──────────────────────────────────────────────────
{
  "_id": "drafts.xxxxx",
  "_type": "post",
  "title": "Prestasi Gemilang Mahasiswa Unidsoe...",
  "body": [...],
  ...
}
──────────────────────────────────────────────────
```

---

## 🔧 Troubleshooting

### Error: "SANITY_API_TOKEN not set"
→ Set environment variable:
```powershell
$env:SANITY_API_TOKEN="your-token"
```

### Error: "Invalid token"
→ Pastikan token memiliki **Editor** permission

### Error: "Schema not found"
→ Deploy schema:
```powershell
npx sanity schema deploy
```

---

## ✅ Checklist Demo

- [ ] API token sudah dibuat (Editor permission)
- [ ] Environment variable sudah di-set
- [ ] Script sudah di-test
- [ ] Result sudah di-verify di Studio
- [ ] Demo flow sudah dipersiapkan

---

## 🎯 Tips untuk Demo

1. **Prepare token dulu** - Jangan lupa set token sebelum demo
2. **Test script** - Pastikan script jalan sebelum presentasi
3. **Prepare topics** - Siapkan 2-3 topik menarik untuk demo
4. **Show Studio** - Setelah generate, buka Studio untuk show result

---

**Script siap untuk demo!** 🚀

