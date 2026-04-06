# 🚀 Deploy Studio untuk Agent Access

## ⚡ Quick Fix (2 Menit)

### Step 1: Deploy Studio

**Jalankan command ini di terminal:**

```bash
cd unidsoe
npx sanity deploy
```

**Akan muncul prompt:**
```
? Studio hostname (<value>.sanity.studio):
```

**Input hostname yang diinginkan, contoh:**
- `unidsoe` → akan jadi `unidsoe.sanity.studio`
- `unidsoe-cms` → akan jadi `unidsoe-cms.sanity.studio`
- `unidsoe-studio` → akan jadi `unidsoe-studio.sanity.studio`

**Rekomendasi:** `unidsoe` (paling simple)

**Setelah input, tekan Enter.**

---

### Step 2: Tunggu Deploy Selesai

**Deploy akan:**
- ✅ Upload Studio ke Sanity Cloud
- ✅ Upload semua schemas
- ✅ Generate Studio URL

**Waktu:** ~1-2 menit

---

### Step 3: Verify Agent Access

**Setelah deploy selesai:**

1. **Buka Studio URL** yang diberikan (misal: `https://unidsoe.sanity.studio`)
2. **Login** ke Studio
3. **Coba akses Agent** - seharusnya sudah bisa!

**Atau:**
1. Buka https://sanity.io/manage
2. Pilih project `unidsoe`
3. Check Agent access

---

## ✅ Checklist:

- [x] Sanity version >= 3.88.1 ✅ (4.19.0)
- [x] Project sudah ada ✅ (`iwtyom29`)
- [x] Sudah login ✅
- [ ] **Studio sudah di-deploy** ← **Lakukan ini sekarang!**
- [ ] **Schemas sudah ter-upload** ← Akan otomatis setelah deploy
- [ ] **Agent access sudah bisa** ← Test setelah deploy

---

## 🎯 Command yang Perlu Dijalankan:

```bash
cd c:\useFolder\titip\work\moritzdesk\moritzdesk\stikes_banyuwangi\unidsoe
npx sanity deploy
```

**Input hostname:** `unidsoe` (atau sesuai keinginan)

**Tunggu deploy selesai, lalu test Agent!** 🚀

---

## 🚨 Jika Ada Error:

### Error: "Hostname already taken"
→ Coba hostname lain, misal: `unidsoe-cms`, `unidsoe-studio`, dll

### Error: "Not logged in"
→ Run: `npx sanity login`

### Error: "Project not found"
→ Pastikan project ID benar di `sanity.config.ts`

---

**Jalankan `npx sanity deploy` sekarang!** ⚡

