# 💻 PowerShell Commands untuk Sanity Studio

## 🔧 Common Commands (Windows PowerShell)

### Clear Cache

**❌ Linux/Mac (tidak work di PowerShell):**
```bash
rm -rf node_modules/.cache
```

**✅ PowerShell (Windows) - Method 1 (Paling Aman):**
```powershell
Get-ChildItem node_modules -Filter .cache -ErrorAction SilentlyContinue | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
```

**✅ PowerShell (Windows) - Method 2:**
```powershell
if (Test-Path "node_modules\.cache") {
    Remove-Item "node_modules\.cache" -Recurse -Force
}
```

**✅ PowerShell (Windows) - Method 3 (Simple):**
```powershell
Remove-Item "node_modules\.cache" -Recurse -Force -ErrorAction SilentlyContinue
```

---

### Install Dependencies

**✅ PowerShell:**
```powershell
npm install
```

---

### Start Dev Server

**✅ PowerShell:**
```powershell
npm run dev
```

---

### Deploy Studio

**✅ PowerShell:**
```powershell
npm run deploy
```

**Atau:**
```powershell
npx sanity deploy
```

---

### Login ke Sanity

**✅ PowerShell:**
```powershell
npx sanity login
```

---

### List Projects

**✅ PowerShell:**
```powershell
npx sanity projects list
```

---

### Check Sanity Version

**✅ PowerShell:**
```powershell
npm list sanity
```

---

## 🔄 Quick Reference: Linux/Mac vs PowerShell

| Linux/Mac | PowerShell (Windows) |
|-----------|---------------------|
| `rm -rf folder` | `Remove-Item -Recurse -Force folder` |
| `rm folder` | `Remove-Item folder` |
| `mkdir folder` | `New-Item -ItemType Directory folder` |
| `ls` | `Get-ChildItem` atau `ls` (alias) |
| `cd folder` | `cd folder` (sama) |
| `cat file` | `Get-Content file` atau `cat` (alias) |

---

## 🚀 Quick Commands untuk Sanity

### Clear Cache & Restart
```powershell
# Clear cache
Remove-Item -Recurse -Force node_modules\.cache -ErrorAction SilentlyContinue

# Restart dev server
npm run dev
```

### Full Clean & Reinstall
```powershell
# Remove node_modules
Remove-Item -Recurse -Force node_modules

# Remove package-lock
Remove-Item package-lock.json -ErrorAction SilentlyContinue

# Reinstall
npm install
```

### Check & Fix
```powershell
# Check version
npm list sanity

# Check projects
npx sanity projects list

# Login
npx sanity login
```

---

## ✅ Tips

1. **Path Separator:** Gunakan `\` atau `/` (PowerShell support both)
2. **Force Flag:** `-Force` untuk force delete
3. **Recurse:** `-Recurse` untuk delete folder dan isinya
4. **ErrorAction:** `-ErrorAction SilentlyContinue` untuk ignore error jika file tidak ada

---

**Gunakan command PowerShell untuk Windows!** 💻

