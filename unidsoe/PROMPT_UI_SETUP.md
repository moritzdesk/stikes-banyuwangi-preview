# 💬 Prompt UI Setup - Menggunakan Prompt via UI

## ✅ Komponen Sudah Dibuat!

**2 Komponen untuk Prompt UI:**
1. ✅ **PromptInput** - Untuk digunakan di field
2. ✅ **PromptTool** - Untuk digunakan sebagai tool di Studio

---

## 🚀 Setup Prompt UI

### Step 1: Set API Token di Browser

**Saat pertama kali menggunakan Prompt UI:**

1. **Buka Studio** di `http://localhost:3333`
2. **Buka Browser Console** (F12)
3. **Run command ini:**
   ```javascript
   localStorage.setItem('sanity_api_token', 'skyrIPWW8egzpluLt04BkNALDspwHNaUWFQefkLbycUdgdexfbfXkCiIL9OxY1rGHzmTHDziZZI3nUSQMpThEMJ08fIIh2ruZD9Oy9xk3YrNDqpkXdta9lU6uRPVXuwO4XhOBHnCC6eno2Qva41GB2Y6Nu6AarQfLy2aFl3LbHJUdzDpsWKZ');
   ```
4. **Refresh page** - Token sudah tersimpan

**Atau buat script helper:**

**File: `scripts/set-token.html`** (buka di browser)
```html
<!DOCTYPE html>
<html>
<head>
  <title>Set Sanity API Token</title>
</head>
<body>
  <h1>Set Sanity API Token</h1>
  <button onclick="setToken()">Set Token</button>
  <script>
    function setToken() {
      const token = 'skyrIPWW8egzpluLt04BkNALDspwHNaUWFQefkLbycUdgdexfbfXkCiIL9OxY1rGHzmTHDziZZI3nUSQMpThEMJ08fIIh2ruZD9Oy9xk3YrNDqpkXdta9lU6uRPVXuwO4XhOBHnCC6eno2Qva41GB2Y6Nu6AarQfLy2aFl3LbHJUdzDpsWKZ';
      localStorage.setItem('sanity_api_token', token);
      alert('Token set! Now refresh Sanity Studio.');
    }
  </script>
</body>
</html>
```

---

### Step 2: Restart Dev Server

```powershell
# Stop server (Ctrl+C)
# Start lagi
npm run dev
```

---

### Step 3: Gunakan Prompt UI

**Cara 1: Via Field (Sudah ditambahkan ke Post schema)**

1. **Buka Studio:** `http://localhost:3333`
2. **Create/Edit Post**
3. **Scroll ke field "💬 AI Ideas & Suggestions"**
4. **Input prompt** di textarea
5. **Klik "🚀 Generate"**
6. **Result akan muncul** - Klik "📋 Use This Result" untuk fill field

**Cara 2: Via Custom Tool (Coming soon)**

---

## 🎨 Fitur Prompt UI

**PromptInput Component:**
- ✅ Input prompt text
- ✅ Generate response
- ✅ Auto-fill result ke field
- ✅ Error handling
- ✅ Loading state

**PromptTool Component:**
- ✅ Full-featured prompt interface
- ✅ Format selection (Text/JSON)
- ✅ Temperature control
- ✅ Copy to clipboard
- ✅ Use cases examples

---

## 📝 Example Prompts

### Generate Ideas
```
Give me 5 blog post ideas for Unidsoe university about health sciences education
```

### Suggest Keywords
```
Suggest 20 SEO keywords for a blog post about "Keperawatan" (Nursing) program
```

### Social Media
```
Create 5 engaging Instagram captions for a post about student achievement
```

### Analysis
```
Analyze this content and suggest improvements for better SEO
```

---

## 🎯 Untuk Demo Presentasi

### Flow Demo (3 Menit):

1. **Show Field** (30 detik)
   - Buka Post document
   - Show field "💬 AI Ideas & Suggestions"
   - Explain: "Ini custom field dengan AI Prompt"

2. **Generate Ideas** (1.5 menit)
   - Input: "Give me 5 blog post ideas for Unidsoe"
   - Klik "🚀 Generate"
   - Show result
   - Klik "📋 Use This Result"

3. **Show Result** (1 menit)
   - Result sudah ter-fill di field
   - Explain: "AI sudah generate ideas, bisa langsung digunakan"

---

## 🚨 Troubleshooting

### Error: "API token not found"

**Solusi:**
1. Buka Browser Console (F12)
2. Run: `localStorage.setItem('sanity_api_token', 'your-token')`
3. Refresh page

### Component Tidak Muncul

**Check:**
1. Restart dev server
2. Hard refresh browser (Ctrl+Shift+R)
3. Check browser console untuk error

### Token Tidak Tersimpan

**Solusi:**
- Pastikan menggunakan browser yang support localStorage
- Check browser settings (tidak block localStorage)
- Try Incognito mode

---

## ✅ Checklist

- [x] PromptInput component dibuat ✅
- [x] PromptTool component dibuat ✅
- [x] Field ditambahkan ke Post schema ✅
- [ ] **Set token di browser** ← Lakukan ini
- [ ] **Restart dev server** ← Lakukan ini
- [ ] **Test Prompt UI** ← Test sekarang

---

## 🎯 Next Steps

1. **Set token di browser:**
   ```javascript
   // Di browser console (F12)
   localStorage.setItem('sanity_api_token', 'your-token');
   ```

2. **Restart dev server:**
   ```powershell
   npm run dev
   ```

3. **Test di Studio:**
   - Buka Post document
   - Scroll ke field "💬 AI Ideas & Suggestions"
   - Input prompt & generate!

---

**Prompt UI siap untuk demo!** 🚀

