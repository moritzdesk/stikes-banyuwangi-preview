# 🚀 Menggunakan Sanity Agent di Localhost

## ✅ Jawaban: **YA, Agent Bisa Digunakan di Localhost!**

Agent akan otomatis tersedia di localhost setelah:
- ✅ Studio sudah di-deploy (sudah dilakukan)
- ✅ Schemas sudah ter-upload (sudah dilakukan)
- ✅ Early access sudah aktif (sudah ada)

---

## 🎯 Cara Menggunakan Agent di Localhost

### Step 1: Start Local Studio

**Jalankan command ini:**

```bash
cd unidsoe
npm run dev
```

**Atau:**
```bash
npm start
```

**Studio akan jalan di:** `http://localhost:3333`

---

### Step 2: Buka Studio di Browser

**Buka:** `http://localhost:3333`

**Login** dengan akun Sanity Anda (jika belum login)

---

### Step 3: Akses Agent

**Di Studio localhost:**
1. **Buka document** (Post, Author, Category, dll)
2. **Cari icon/button Agent** di editor
3. **Klik Agent** untuk membuka AI features
4. **Agent akan connect** ke Sanity Cloud untuk AI processing

---

## 🔍 Di Mana Agent Muncul?

**Agent biasanya muncul di:**
- ✅ **Rich Text Editor** - Icon AI di toolbar
- ✅ **Field Input** - Button "Generate with AI" di field tertentu
- ✅ **Document Actions** - Menu "AI Assist" di document toolbar
- ✅ **Sidebar** - Panel Agent untuk content generation

**Lokasi tepat tergantung versi Sanity dan konfigurasi.**

---

## 🎨 Fitur Agent yang Tersedia

**Setelah Agent aktif, Anda bisa:**
- ✅ **Generate Content** - Generate artikel dari prompt
- ✅ **Optimize Content** - Improve konten yang sudah ada
- ✅ **Suggest Keywords** - AI suggest keywords untuk SEO
- ✅ **Auto-generate Meta** - Generate meta description
- ✅ **Content Rewriting** - Rewrite konten dengan gaya berbeda
- ✅ **Translate** - Translate konten ke bahasa lain

---

## ⚙️ Konfigurasi (Opsional)

**Jika Agent tidak muncul, check:**

### 1. Pastikan Project ID Benar

**File: `sanity.config.ts`**
```typescript
projectId: 'iwtyom29', // ← Pastikan ini benar
```

### 2. Pastikan Sudah Login

```bash
npx sanity login
```

### 3. Check Agent Access di Sanity Dashboard

1. Buka https://sanity.io/manage
2. Pilih project `unidsoe`
3. Check apakah Agent sudah enabled

### 4. Restart Dev Server

```bash
# Stop server (Ctrl+C)
# Start lagi
npm run dev
```

---

## 🚨 Troubleshooting

### Agent Tidak Muncul di Localhost

**Solusi 1: Clear Cache**
```bash
# Stop server
# Hapus cache
rm -rf node_modules/.cache
# Start lagi
npm run dev
```

**Solusi 2: Check Browser Console**
- Buka Developer Tools (F12)
- Check Console untuk error
- Check Network tab untuk API calls

**Solusi 3: Verify Deployment**
```bash
npx sanity projects list
# Pastikan project muncul
```

**Solusi 4: Re-deploy Studio**
```bash
npm run deploy
```

---

## 📝 Quick Start

**Untuk mulai menggunakan Agent di localhost:**

```bash
# 1. Start local studio
cd unidsoe
npm run dev

# 2. Buka browser
# http://localhost:3333

# 3. Login (jika perlu)
# 4. Buka document
# 5. Cari Agent button/icon
# 6. Klik dan mulai generate!
```

---

## ✅ Checklist

- [x] Studio sudah di-deploy ✅
- [x] Schemas sudah ter-upload ✅
- [x] Early access sudah aktif ✅
- [ ] **Start local studio** ← Lakukan ini
- [ ] **Test Agent di localhost** ← Test sekarang

---

## 🎯 Summary

**Agent BISA digunakan di localhost!**

**Cara:**
1. Run `npm run dev`
2. Buka `http://localhost:3333`
3. Agent akan otomatis tersedia
4. AI processing tetap via Sanity Cloud (tidak perlu setup OpenAI sendiri)

**Keuntungan:**
- ✅ Development di localhost
- ✅ Agent features tetap tersedia
- ✅ Real-time sync dengan Sanity Cloud
- ✅ Tidak perlu setup tambahan

---

**Jalankan `npm run dev` dan test Agent sekarang!** 🚀

