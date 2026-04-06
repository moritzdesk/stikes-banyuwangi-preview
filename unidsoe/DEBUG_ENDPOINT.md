# 🐛 Debug: Dataset Error

## ❌ Error:
```
Dataset "iwtyom29" not found for project ID "iwtyom29"
```

## ✅ Konfigurasi yang Benar:

**Project ID:** `iwtyom29` ✅  
**Dataset:** `production` ✅ (bukan `iwtyom29`)

---

## 🔍 Verify Endpoint

**Endpoint yang digunakan:**
```
https://iwtyom29.api.sanity.io/vX/data/actions/iwtyom29/production/prompt
```

**Breakdown:**
- Project ID: `iwtyom29` ✅
- Dataset: `production` ✅
- Action: `prompt` ✅

---

## 🧪 Test dengan @sanity/client (Working)

**Script `prompt-demo.ts` menggunakan client yang benar:**
```typescript
const client = createClient({
  projectId: 'iwtyom29',
  dataset: 'production', // ✅ Benar
  apiVersion: 'vX',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Ini bekerja karena client handle endpoint otomatis
await client.agent.action.prompt({ instruction: '...' });
```

---

## 🔧 Solusi: Gunakan @sanity/client di HTML

**Option 1: Load @sanity/client via CDN**

Update `prompt-ui.html` untuk menggunakan client library:

```html
<script type="module">
  import { createClient } from 'https://esm.sh/@sanity/client@latest';
  
  const client = createClient({
    projectId: 'iwtyom29',
    dataset: 'production',
    apiVersion: 'vX',
    token: localStorage.getItem('sanity_api_token'),
    useCdn: false,
  });
  
  // Use client.agent.action.prompt() instead of fetch
</script>
```

**Option 2: Fix Fetch Endpoint**

Pastikan format endpoint benar dan dataset = 'production'

---

## ✅ Quick Fix

**Pastikan di HTML:**
```javascript
const PROJECT_ID = 'iwtyom29';
const DATASET = 'production'; // ← Pastikan ini, bukan 'iwtyom29'
```

---

**Endpoint sudah benar, pastikan DATASET = 'production'!** ✅

