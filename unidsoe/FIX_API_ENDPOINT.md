# 🔧 Fix: "Use project hostname for data requests"

## ❌ Error yang Muncul:
```
❌ Use project hostname for data requests
```

## ✅ Solusi: Update API Endpoint

**Endpoint yang salah:**
```
https://api.sanity.io/vX/data/actions/...
```

**Endpoint yang benar:**
```
https://{projectId}.api.sanity.io/vX/data/actions/...
```

---

## 🔧 Yang Sudah Diperbaiki

### 1. HTML UI (`prompt-ui.html`) ✅
**Sebelum:**
```javascript
`https://api.sanity.io/vX/data/actions/${PROJECT_ID}/${DATASET}/prompt`
```

**Sesudah:**
```javascript
`https://${PROJECT_ID}.api.sanity.io/vX/data/actions/${PROJECT_ID}/${DATASET}/prompt`
```

### 2. PromptButton Component ✅
**Sebelum:**
```javascript
`https://api.sanity.io/vX/data/actions/iwtyom29/production/prompt`
```

**Sesudah:**
```javascript
`https://iwtyom29.api.sanity.io/vX/data/actions/iwtyom29/production/prompt`
```

### 3. Scripts (prompt-demo.ts) ✅
**Menggunakan @sanity/client** - Otomatis menggunakan project hostname yang benar

---

## 🎯 Endpoint Format untuk Agent Actions

**Format yang benar:**
```
https://{projectId}.api.sanity.io/vX/data/actions/{projectId}/{dataset}/{action}
```

**Contoh untuk project ini:**
```
https://iwtyom29.api.sanity.io/vX/data/actions/iwtyom29/production/prompt
```

---

## ✅ Test

**Setelah fix:**
1. **Buka** `prompt-ui.html` di browser
2. **Input prompt** dan klik generate
3. **Error seharusnya sudah hilang**

---

## 🚨 Jika Masih Error

### Check 1: Verify Project ID
```javascript
const PROJECT_ID = 'iwtyom29'; // Pastikan benar
```

### Check 2: Check Token
- Pastikan token valid
- Pastikan token memiliki Editor permission

### Check 3: Check Network Tab
- Buka Developer Tools (F12)
- Check Network tab
- Lihat request URL dan response

---

## 📝 Quick Reference

**Correct Endpoints:**
- Prompt: `https://iwtyom29.api.sanity.io/vX/data/actions/iwtyom29/production/prompt`
- Generate: `https://iwtyom29.api.sanity.io/vX/data/actions/iwtyom29/production/generate`
- Translate: `https://iwtyom29.api.sanity.io/vX/data/actions/iwtyom29/production/translate`

**Format:**
```
https://{projectId}.api.sanity.io/vX/data/actions/{projectId}/{dataset}/{action}
```

---

**Endpoint sudah diperbaiki!** ✅

