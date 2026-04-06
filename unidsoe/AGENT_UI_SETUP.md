# 🎨 Setup Agent UI di Sanity Studio

## ✅ Plugin Sudah Terinstall!

**Plugin:** `@sanity/assist` ✅

---

## 🚀 Setup Selesai!

**Yang sudah dilakukan:**
1. ✅ Install `@sanity/assist` plugin
2. ✅ Add plugin ke `sanity.config.ts`
3. ✅ Configuration sudah siap

---

## 🎯 Cara Menggunakan Agent UI

### Step 1: Restart Dev Server

```powershell
# Stop server (Ctrl+C)
# Start lagi
npm run dev
```

### Step 2: Buka Studio

**Buka:** `http://localhost:3333`

### Step 3: Setup Token (Pertama Kali)

**Saat pertama kali buka Studio dengan AI Assist:**
1. **Buka document** (Post, Author, Category, dll)
2. **Cari icon AI** di toolbar atau field
3. **Klik icon AI** - Akan muncul prompt untuk setup token
4. **Paste token Anda:**
   ```
   skyrIPWW8egzpluLt04BkNALDspwHNaUWFQefkLbycUdgdexfbfXkCiIL9OxY1rGHzmTHDziZZI3nUSQMpThEMJ08fIIh2ruZD9Oy9xk3YrNDqpkXdta9lU6uRPVXuwO4XhOBHnCC6eno2Qva41GB2Y6Nu6AarQfLy2aFl3LbHJUdzDpsWKZ
   ```
5. **Save** - Token akan tersimpan di browser

---

## 🔍 Di Mana Agent UI Muncul?

### Lokasi Agent UI:

1. **Rich Text Editor Toolbar**
   - Buka document dengan field `body` (blockContent)
   - Icon AI akan muncul di toolbar editor
   - Klik untuk generate/optimize content

2. **String/Text Fields**
   - Buka field seperti `title`, `excerpt`
   - Icon AI atau button "Generate" di sebelah field
   - Klik untuk generate content

3. **Document Actions**
   - Di bagian atas document editor
   - Menu atau icon AI untuk document-level actions

---

## 🎨 Fitur Agent UI

**Setelah setup, Anda bisa:**
- ✅ **Generate Content** - Generate artikel dari prompt
- ✅ **Optimize Content** - Improve konten yang sudah ada
- ✅ **Rewrite Content** - Rewrite dengan gaya berbeda
- ✅ **Translate** - Translate konten ke bahasa lain
- ✅ **Suggest Keywords** - AI suggest keywords untuk SEO

---

## 🚨 Troubleshooting

### Agent Icon Tidak Muncul

**Check 1: Restart Server**
```powershell
# Stop & restart
npm run dev
```

**Check 2: Hard Refresh Browser**
- Tekan `Ctrl+Shift+R`
- Atau buka Incognito mode

**Check 3: Check Browser Console**
- Tekan F12
- Check Console untuk error
- Check Network tab untuk API calls

**Check 4: Verify Plugin**
```powershell
npm list @sanity/assist
```

---

## 📝 Configuration

**File: `sanity.config.ts`**

```typescript
import {assist} from '@sanity/assist'

export default defineConfig({
  plugins: [
    // ... other plugins
    assist({
      // Optional: Configure default behavior
    }),
  ],
})
```

---

## ✅ Checklist

- [x] Plugin `@sanity/assist` terinstall ✅
- [x] Plugin ditambahkan ke config ✅
- [ ] **Restart dev server** ← Lakukan ini
- [ ] **Buka Studio** ← Test sekarang
- [ ] **Setup token** ← Paste token saat diminta
- [ ] **Test Agent UI** ← Generate content

---

## 🎯 Next Steps

1. **Restart dev server:**
   ```powershell
   npm run dev
   ```

2. **Buka Studio:**
   ```
   http://localhost:3333
   ```

3. **Buka document Post:**
   - Create new post atau edit existing
   - Cari icon AI di toolbar atau field

4. **Setup token:**
   - Paste token saat diminta
   - Token akan tersimpan di browser

5. **Test generate:**
   - Klik icon AI
   - Input prompt: "Write a blog post about..."
   - Generate content!

---

**Agent UI siap untuk demo!** 🚀

