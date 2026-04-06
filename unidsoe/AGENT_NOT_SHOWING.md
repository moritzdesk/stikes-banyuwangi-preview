# 🔍 Troubleshooting: Agent Icon Tidak Muncul di Localhost

## ❓ Masalah: Agent Icon Tidak Muncul

**Agent seharusnya muncul otomatis setelah:**
- ✅ Studio di-deploy (sudah dilakukan)
- ✅ Early access aktif (sudah ada)
- ✅ Versi Sanity >= 3.88.1 (sudah 4.19.0)

---

## 🔍 Di Mana Agent Seharusnya Muncul?

### Lokasi Agent di Sanity Studio:

1. **Rich Text Editor Toolbar**
   - Buka document dengan field `blockContent` atau rich text
   - Agent icon biasanya di toolbar editor
   - Icon: 🤖 atau ⚡ atau AI

2. **Field Input (String/Text Fields)**
   - Buka field seperti `title`, `excerpt`, dll
   - Button "Generate with AI" atau icon AI di sebelah field

3. **Document Toolbar**
   - Di bagian atas document editor
   - Menu "AI Assist" atau icon Agent

4. **Sidebar Panel**
   - Panel khusus untuk Agent di sidebar kiri/kanan

---

## ✅ Checklist Troubleshooting

### Step 1: Verify Agent Access di Dashboard

1. **Buka:** https://sanity.io/manage/project/iwtyom29
2. **Check Agent status** - Pastikan Agent enabled
3. **Check early access** - Pastikan masih aktif

---

### Step 2: Check Browser Console

1. **Buka Studio** di `http://localhost:3333`
2. **Tekan F12** untuk buka Developer Tools
3. **Buka tab Console**
4. **Cari error** terkait Agent atau AI
5. **Screenshot error** jika ada

**Error yang mungkin muncul:**
- `Agent not available`
- `Failed to connect to Agent`
- `Agent API error`

---

### Step 3: Clear Browser Cache

**PowerShell:**
```powershell
# Clear cache browser
# Atau buka browser dalam Incognito/Private mode
```

**Atau:**
1. **Buka Studio** di browser
2. **Tekan Ctrl+Shift+R** (hard refresh)
3. **Atau buka Incognito/Private mode**

---

### Step 4: Check Network Connection

**Agent memerlukan koneksi internet:**
- ✅ Pastikan internet terhubung
- ✅ Check firewall tidak block Sanity API
- ✅ Test akses ke https://api.sanity.io

---

### Step 5: Restart Dev Server

```powershell
# Stop server (Ctrl+C)
# Start lagi
npm run dev
```

**Setelah restart:**
1. **Buka** `http://localhost:3333`
2. **Login** lagi jika perlu
3. **Buka document** (Post, Author, dll)
4. **Check Agent icon**

---

### Step 6: Check di Deployed Studio

**Agent mungkin hanya muncul di deployed studio:**

1. **Buka deployed studio:** `https://unidsoe.sanity.studio` (atau URL yang diberikan)
2. **Login** ke deployed studio
3. **Check Agent icon** di deployed studio
4. **Jika muncul di deployed tapi tidak di localhost:** Ini normal untuk early access

---

## 🚨 Kemungkinan Penyebab

### 1. Agent Hanya di Deployed Studio (Early Access)

**Kemungkinan:** Agent early access mungkin hanya tersedia di deployed studio, bukan localhost.

**Solusi:**
- ✅ Gunakan deployed studio untuk Agent
- ✅ Atau tunggu full release

---

### 2. Agent Perlu Field Khusus

**Agent mungkin hanya muncul di field tertentu:**
- ✅ Rich text fields (`blockContent`)
- ✅ String fields dengan AI enabled
- ✅ Fields dengan AI configuration

**Check schema:**
```typescript
// schemaTypes/post.ts
// Agent mungkin perlu field khusus
```

---

### 3. Browser Cache Issue

**Solusi:**
- ✅ Hard refresh (Ctrl+Shift+R)
- ✅ Clear browser cache
- ✅ Buka Incognito mode

---

### 4. Network/Firewall Issue

**Solusi:**
- ✅ Check internet connection
- ✅ Check firewall settings
- ✅ Test Sanity API access

---

## 🎯 Quick Fix Steps

### Method 1: Test di Deployed Studio

```powershell
# 1. Buka deployed studio
# https://unidsoe.sanity.studio (atau URL yang diberikan)

# 2. Login
# 3. Check Agent icon
# 4. Jika muncul, Agent hanya tersedia di deployed studio
```

### Method 2: Hard Refresh Browser

```powershell
# 1. Buka Studio di browser
# 2. Tekan Ctrl+Shift+R (hard refresh)
# 3. Check Agent icon
```

### Method 3: Clear Cache & Restart

```powershell
# 1. Stop dev server
# 2. Clear browser cache
# 3. Restart dev server
npm run dev
# 4. Buka Studio lagi
```

---

## 📝 Debug Info

**Jika Agent masih tidak muncul, collect info ini:**

1. **Browser Console Errors** (F12 → Console)
2. **Network Tab** (F12 → Network → Filter "agent" atau "ai")
3. **Sanity Version:**
   ```powershell
   npm list sanity
   ```
4. **Project ID:** `iwtyom29`
5. **AppId:** `l2hi8f8i1w9erzxz5ok3siro`

---

## ✅ Expected Behavior

**Agent seharusnya:**
- ✅ Muncul di deployed studio (pasti)
- ⚠️ Mungkin tidak muncul di localhost (early access limitation)
- ✅ Muncul di field rich text atau string dengan AI enabled

---

## 🎯 Next Steps

1. **Test di deployed studio** - Pastikan Agent muncul di sana
2. **Check browser console** - Cari error atau warning
3. **Hard refresh** - Ctrl+Shift+R
4. **Contact Sanity Support** - Jika masih tidak muncul

---

**Agent mungkin hanya tersedia di deployed studio untuk early access!** 🚀

