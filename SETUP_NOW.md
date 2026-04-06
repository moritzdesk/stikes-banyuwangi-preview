# 🚀 Setup Sanity Studio - Jalankan Sekarang!

## ⚡ Quick Setup (5 Menit)

### Step 1: Login ke Sanity

**Buka terminal di project folder dan jalankan:**

```bash
cd c:\useFolder\titip\work\moritzdesk\moritzdesk\stikes_banyuwangi
npx sanity login
```

**Pilih login method:**
- **Google** (paling cepat)
- **GitHub** 
- **E-mail / password**

**Setelah login berhasil, lanjut ke Step 2.**

---

### Step 2: Create Sanity Project

**Jalankan command ini:**

```bash
npx sanity init --template blog --project-id unidsoe-demo --dataset production --output-path sanity-studio
```

**Atau interactive (lebih mudah):**
```bash
npx sanity init
```

**Pilih:**
- Project name: `unidsoe-demo`
- Use default dataset: `Yes` (tekan Enter)
- Template: `Blog` (tekan Enter)
- Output path: `sanity-studio` (tekan Enter)

---

### Step 3: Install Dependencies

```bash
cd sanity-studio
npm install
```

---

### Step 4: Start Studio

```bash
npm run dev
```

**Studio akan jalan di:** `http://localhost:3333` 🎉

**Buka browser:** `http://localhost:3333`

---

## ✅ Test Setup

1. **Buka** `http://localhost:3333`
2. **Klik** "Create Article"
3. **Input:**
   - Title: "Test Artikel Unidsoe"
   - Content: "Ini adalah test"
4. **Klik** "Publish"
5. **Verify** artikel muncul di list

---

## 🎨 Quick Customize untuk Unidsoe

**Edit file: `sanity-studio/sanity.config.ts`**

```typescript
export default defineConfig({
  name: 'unidsoe-cms',
  title: 'Unidsoe CMS - Universitas Dr. Soekardjo', // ← Update ini
  // ...
})
```

---

## 🎬 Untuk Demo Presentasi

**Studio sudah siap! Bisa demo:**
- ✅ Create article
- ✅ Upload image
- ✅ Edit content
- ✅ Publish

**URL untuk demo:** `http://localhost:3333`

---

## 🚨 Jika Ada Error

### "Not logged in"
→ Run: `npx sanity login`

### "Port 3333 already in use"
→ Close aplikasi lain atau restart terminal

### "Project not found"
→ Pastikan sudah login dan project ID benar

---

**Jalankan command di atas step by step! 🚀**

