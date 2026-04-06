# Setup Sanity Studio - Step by Step Guide

## 🎯 Tujuan
Setup Sanity Studio untuk demo UI CMS di presentasi malam ini.

---

## 📋 Step-by-Step Setup

### Step 1: Install Sanity CLI (2 menit)

**Buka terminal/PowerShell di project folder:**

```bash
cd c:\useFolder\titip\work\moritzdesk\moritzdesk\stikes_banyuwangi
```

**Install Sanity CLI:**
```bash
npm install -g @sanity/cli
```

**Verify installation:**
```bash
sanity --version
```

---

### Step 2: Login ke Sanity (1 menit)

**Login:**
```bash
sanity login
```

**Akan muncul browser untuk login:**
- Jika belum punya account → Klik "Sign up" (gratis)
- Jika sudah punya → Login dengan email/password
- Setelah login, kembali ke terminal

---

### Step 3: Create Sanity Project (2 menit)

**Option A: Quick Setup (Recommended)**
```bash
sanity init --template blog --project-id unidsoe-demo --dataset production --output-path sanity-studio
```

**Option B: Interactive Setup**
```bash
sanity init
```

**Pilih:**
- **Project name:** `unidsoe-demo`
- **Use default dataset:** `Yes`
- **Template:** `Blog` (untuk quick start)
- **Output path:** `sanity-studio`

---

### Step 4: Install Dependencies (1 menit)

```bash
cd sanity-studio
npm install
```

---

### Step 5: Start Sanity Studio (1 menit)

```bash
npm run dev
```

**Studio akan jalan di:** `http://localhost:3333`

**Buka browser:** `http://localhost:3333`

---

## ✅ Checklist Setup

- [ ] Sanity CLI installed
- [ ] Logged in to Sanity
- [ ] Project created
- [ ] Dependencies installed
- [ ] Studio running di `http://localhost:3333`

---

## 🎬 Test Demo

### 1. Create Test Article:
1. Buka `http://localhost:3333`
2. Klik "Create Article"
3. Input:
   - Title: "Test Artikel Unidsoe"
   - Content: "Ini adalah test artikel"
   - Upload image (optional)
4. Klik "Publish"

### 2. Verify:
- Article muncul di list
- Bisa edit & delete
- Interface responsive

---

## 🎨 Customize untuk Unidsoe (Optional)

### Update Studio Title:

**File: `sanity-studio/sanity.config.ts`**

```typescript
export default defineConfig({
  name: 'unidsoe-cms',
  title: 'Unidsoe CMS - Universitas Dr. Soekardjo',
  // ...
})
```

---

## 🚨 Troubleshooting

### Error: "Command not found: sanity"
- Pastikan npm global path ada di PATH
- Atau install lokal: `npm install @sanity/cli` (tanpa -g)

### Error: "Not logged in"
- Run: `sanity login`
- Pastikan browser terbuka untuk login

### Error: "Port 3333 already in use"
- Close aplikasi lain yang pakai port 3333
- Atau change port di `sanity.config.ts`

### Studio tidak muncul
- Check terminal untuk error
- Restart: `npm run dev`
- Clear cache: Hapus `node_modules/.vite` (jika ada)

---

## 📝 Next Steps Setelah Setup

1. **Test Create Article** - Pastikan bisa create & publish
2. **Prepare Sample Data** - Buat 2-3 artikel contoh untuk demo
3. **Test Flow** - Pastikan semua fitur jalan
4. **Siap untuk Demo** - Studio ready untuk presentasi

---

## 🎯 Untuk Presentasi

**Demo Flow (5 menit):**
1. Show Studio Interface (1 menit)
2. Create Article (2 menit)
3. Show SEO Settings (1 menit)
4. Publish & Show Result (1 menit)

---

**Ready untuk setup? Jalankan command di atas step by step!**

