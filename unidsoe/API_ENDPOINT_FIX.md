# 🔧 Fix: API Endpoint untuk Agent Actions

## ✅ Endpoint Sudah Diperbaiki!

**Format yang benar:**
```
https://{projectId}.api.sanity.io/vX/data/actions/{projectId}/{dataset}/{action}
```

**Untuk project ini:**
```
https://iwtyom29.api.sanity.io/vX/data/actions/iwtyom29/production/prompt
```

---

## 🔧 File yang Sudah Diperbaiki

### 1. `public/prompt-ui.html` ✅
- Endpoint sudah menggunakan project hostname
- Format: `https://${PROJECT_ID}.api.sanity.io/vX/data/actions/...`

### 2. `components/PromptButton.tsx` ✅
- Endpoint sudah menggunakan project hostname
- Format: `https://iwtyom29.api.sanity.io/vX/data/actions/...`

### 3. `scripts/prompt-demo.ts` ✅
- Menggunakan `@sanity/client` - Otomatis benar
- Client handle endpoint secara otomatis

---

## 🎯 Test Endpoint

**Buka browser console dan test:**
```javascript
// Test endpoint
fetch('https://iwtyom29.api.sanity.io/vX/data/actions/iwtyom29/production/prompt', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN'
  },
  body: JSON.stringify({
    instruction: 'Test prompt'
  })
})
.then(r => r.json())
.then(console.log)
.catch(console.error)
```

---

## ✅ Status

- [x] HTML UI endpoint fixed ✅
- [x] PromptButton endpoint fixed ✅
- [x] Scripts menggunakan client (otomatis benar) ✅

**Error seharusnya sudah hilang!** 🎉

---

**Refresh browser dan test lagi!** 🚀

