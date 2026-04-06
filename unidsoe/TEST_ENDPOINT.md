# 🧪 Test Agent Actions Endpoint

## ✅ Dataset yang Benar

**Dataset:** `production` ✅ (bukan `iwtyom29`)

**Verify:**
```powershell
npx sanity dataset list
# Output: production
```

---

## 🔍 Format Endpoint yang Benar

**Untuk Prompt Action:**
```
https://{projectId}.api.sanity.io/vX/data/actions/{projectId}/{dataset}/prompt
```

**Contoh:**
```
https://iwtyom29.api.sanity.io/vX/data/actions/iwtyom29/production/prompt
```

---

## 🧪 Test di Browser Console

**Buka browser console (F12) dan test:**

```javascript
const PROJECT_ID = 'iwtyom29';
const DATASET = 'production';
const TOKEN = 'your-token-here';

fetch(`https://${PROJECT_ID}.api.sanity.io/vX/data/actions/${PROJECT_ID}/${DATASET}/prompt`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${TOKEN}`,
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

## ✅ Checklist

- [x] PROJECT_ID: `iwtyom29` ✅
- [x] DATASET: `production` ✅ (bukan `iwtyom29`)
- [x] Endpoint format sudah benar ✅
- [ ] **Test endpoint** ← Test sekarang

---

**Pastikan DATASET = 'production', bukan 'iwtyom29'!** ✅

