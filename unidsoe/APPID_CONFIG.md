# 🔧 Configure AppId untuk Sanity Studio

## ❓ Apakah Perlu Update AppId?

### Jawaban: **Optional, tapi Recommended untuk Production**

**Status saat ini:**
- ✅ Studio sudah berfungsi tanpa appId
- ⚠️ Studio akan **auto-update** ke latest version
- ✅ Tidak ada masalah fungsional

**Kenapa configure appId?**
- ✅ **Version Control** - Kontrol versi Studio yang digunakan
- ✅ **Stability** - Tidak auto-update tanpa kontrol
- ✅ **Production Ready** - Best practice untuk production

---

## 🎯 Cara Configure AppId

### Step 1: Dapatkan AppId dari Sanity Dashboard

1. **Buka:** https://www.sanity.io/manage/project/iwtyom29/studios
2. **Login** ke Sanity account
3. **Pilih project** `unidsoe` (iwtyom29)
4. **Buka tab "Studios"**
5. **Cari studio** yang sudah di-deploy (misal: `unidsoe.sanity.studio`)
6. **Copy AppId** dari studio tersebut

**AppId format:** biasanya seperti `studio-xxxxx` atau UUID

---

### Step 2: Update sanity.cli.ts

**File: `sanity.cli.ts`**

```typescript
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'iwtyom29',
    dataset: 'production'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
    // Add appId here
    appId: 'YOUR_APP_ID_HERE', // ← Paste AppId dari dashboard
  }
})
```

**Replace `YOUR_APP_ID_HERE` dengan AppId yang didapat dari dashboard.**

---

### Step 3: Restart Dev Server

```powershell
# Stop server (Ctrl+C)
# Start lagi
npm run dev
```

**Warning seharusnya sudah hilang.**

---

## 🚨 Jika Tidak Bisa Dapatkan AppId

### Opsi 1: Abaikan Warning (OK untuk Development)

**Warning ini tidak mempengaruhi fungsi Studio:**
- ✅ Studio tetap berfungsi normal
- ✅ Agent tetap bisa digunakan
- ✅ Semua fitur tetap bekerja
- ⚠️ Hanya akan auto-update ke latest version

**Untuk development/testing:** Bisa diabaikan.

---

### Opsi 2: Disable Auto-Updates

**File: `sanity.cli.ts`**

```typescript
deployment: {
  autoUpdates: false, // ← Disable auto-updates
}
```

**Ini akan menghilangkan warning, tapi tidak recommended untuk production.**

---

## 📝 Quick Reference

### Current Config (tanpa appId):
```typescript
deployment: {
  autoUpdates: true,
}
```

### Recommended Config (dengan appId):
```typescript
deployment: {
  autoUpdates: true,
  appId: 'studio-xxxxx', // ← Add ini
}
```

---

## ✅ Checklist

- [ ] Buka Sanity Dashboard
- [ ] Dapatkan AppId dari studio yang di-deploy
- [ ] Update `sanity.cli.ts` dengan AppId
- [ ] Restart dev server
- [ ] Verify warning sudah hilang

---

## 🎯 Kesimpulan

**Untuk Demo/Presentasi:**
- ✅ **Bisa diabaikan** - Studio tetap berfungsi
- ✅ **Tidak urgent** - Bisa configure nanti

**Untuk Production:**
- ✅ **Recommended** - Configure appId untuk version control
- ✅ **Best practice** - Kontrol versi Studio

---

**Action:**
1. **Untuk sekarang:** Bisa diabaikan (tidak urgent)
2. **Nanti:** Configure appId dari dashboard saat ready

**Studio tetap berfungsi dengan baik tanpa appId!** ✅

