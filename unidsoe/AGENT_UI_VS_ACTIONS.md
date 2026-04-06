# 🔍 Perbedaan: Agent UI vs Agent Actions

## 📊 Perbandingan

### Agent UI (Studio Interface) 🎨
**Yang Anda cari icon-nya di Studio:**

- ✅ **Visual Interface** - Icon/button di Sanity Studio
- ✅ **User-friendly** - Untuk non-technical users
- ✅ **Built-in Studio** - Terintegrasi langsung di Studio
- ✅ **Click & Generate** - Generate content dengan klik button
- ⚠️ **Early Access** - Mungkin hanya tersedia di deployed studio

**Lokasi:**
- Rich text editor toolbar
- Field input buttons
- Document actions menu

**Status:** Icon belum muncul di localhost (mungkin early access limitation)

---

### Agent Actions (Programmatic API) 💻
**Dari dokumentasi:** https://www.sanity.io/docs/agent-actions/generate-quickstart

- ✅ **API-based** - Bisa dipanggil dari code
- ✅ **Programmatic** - Generate dari scripts, webhooks, CI/CD
- ✅ **Full Control** - Custom instructions & parameters
- ✅ **Always Available** - Tidak tergantung UI

**Cara Pakai:**
```typescript
await client.agent.action.generate({
  schemaId: "_.schemas.unidsoe-cms",
  targetDocument: { operation: "create", _type: "post" },
  instruction: "Write a blog post about $topic",
  instructionParams: {
    topic: { type: "constant", value: "Health Sciences" }
  }
});
```

**Status:** ✅ Bisa digunakan sekarang!

---

## 🎯 Rekomendasi

### Untuk Demo/Presentasi:
**Gunakan Agent Actions (Programmatic):**
- ✅ **Lebih reliable** - Tidak tergantung UI
- ✅ **Lebih powerful** - Full control
- ✅ **Bisa demo** - Create script untuk generate content
- ✅ **Always works** - Tidak ada early access limitation

### Untuk End Users:
**Tunggu Agent UI:**
- ⏳ **Tunggu full release** - Early access mungkin terbatas
- ⏳ **Atau gunakan deployed studio** - Agent UI mungkin hanya di deployed

---

## 🚀 Quick Start: Agent Actions

### Step 1: Install Client

```powershell
npm install @sanity/client@latest
```

### Step 2: Get API Token

1. Buka: https://sanity.io/manage/project/iwtyom29/api
2. Create token (Editor permission)
3. Copy token

### Step 3: Create Script

**File: `scripts/generate-post.ts`**

```typescript
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: 'iwtyom29',
  dataset: 'production',
  apiVersion: 'vX',
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
});

async function generatePost() {
  const result = await client.agent.action.generate({
    schemaId: "_.schemas.unidsoe-cms",
    targetDocument: { 
      operation: "create", 
      _type: "post" 
    },
    instruction: `
      Write a blog post about $topic for Unidsoe 
      (Universitas Dr. Soekardjo).
      Include: title, excerpt, and body content.
    `,
    instructionParams: {
      topic: { 
        type: "constant", 
        value: "Health Sciences Education" 
      },
    },
  });

  console.log('Generated post:', result);
  return result;
}

generatePost();
```

### Step 4: Run Script

```powershell
# Set token
$env:SANITY_API_TOKEN="your-token-here"

# Run script
node scripts/generate-post.ts
```

---

## ✅ Summary

| Feature | Agent UI | Agent Actions |
|---------|---------|---------------|
| **Interface** | Visual (Studio) | Programmatic (API) |
| **Access** | Early access (limited) | ✅ Available now |
| **Use Case** | End users | Developers |
| **Setup** | Auto (if available) | Need code |
| **Control** | Limited | Full control |

---

## 🎯 Untuk Demo Malam Ini

**Rekomendasi: Gunakan Agent Actions!**

1. ✅ **Lebih reliable** - Tidak tergantung UI
2. ✅ **Bisa demo** - Create script untuk generate content
3. ✅ **Impressive** - Show programmatic AI integration
4. ✅ **Always works** - Tidak ada limitation

**Buat script demo yang generate content dengan Agent Actions!** 🚀

---

**Agent Actions siap digunakan sekarang, tidak perlu tunggu UI!** ✅

