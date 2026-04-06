# 🤖 Sanity Agent Actions - Setup Guide

## 📚 Berdasarkan Dokumentasi Resmi

**Link:** https://www.sanity.io/docs/agent-actions/generate-quickstart

---

## 🔍 Penjelasan: Agent Actions vs Agent UI

### Agent Actions (Programmatic API)
- ✅ **API-based** - Bisa dipanggil dari code
- ✅ **Cloud functions, webhooks, CI/CD** - Bisa digunakan di berbagai tempat
- ✅ **Generate, Translate, Transform** - Multiple action types
- ✅ **Schema-aware** - Menggunakan schema ID

### Agent UI (Studio Interface)
- ✅ **Visual interface** - Icon/button di Studio
- ✅ **User-friendly** - Untuk non-technical users
- ✅ **Built-in Studio** - Terintegrasi dengan Sanity Studio

**Keduanya menggunakan Agent yang sama, tapi akses berbeda!**

---

## 🎯 Setup Agent Actions (Programmatic)

### Prerequisites

1. **@sanity/client v7.1.0+**
   ```powershell
   npm install @sanity/client@latest
   ```

2. **Sanity CLI v3.88.0+** ✅ (sudah 4.19.0)

3. **Schema ID** - Perlu di-deploy dulu

4. **API Token** - Read/write token

---

### Step 1: Deploy Schema

**Agent Actions memerlukan schema ID:**

```powershell
# List schemas yang sudah di-deploy
npx sanity schema list

# Deploy schema (jika belum ada)
npx sanity schema deploy

# Atau deploy studio (include schema)
npx sanity deploy
```

**Copy schema ID** dari output command di atas.

**Schema ID untuk project ini:**
```
_.schemas.unidsoe-cms
```

---

### Step 2: Install @sanity/client

```powershell
npm install @sanity/client@latest
```

---

### Step 3: Create Client dengan Agent Actions

**File: `lib/sanity-agent.ts`**

```typescript
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: 'iwtyom29',
  dataset: 'production',
  apiVersion: 'vX', // Use latest version
  token: process.env.SANITY_API_TOKEN, // Read/write token
  useCdn: false, // Required for Agent Actions
});
```

---

### Step 4: Generate Content dengan Agent

**Contoh: Create New Post**

```typescript
// generate-post.ts
import { client } from './lib/sanity-agent';

async function generatePost() {
  const result = await client.agent.action.generate({
    // Schema ID dari: npx sanity schema list
    schemaId: "_.schemas.unidsoe-cms",

    // Create new post document
    targetDocument: { 
      operation: "create", 
      _type: "post" 
    },

    // Instruction untuk AI
    instruction: "Write a blog post about $topic for Unidsoe university.",

    // Parameters
    instructionParams: {
      topic: { 
        type: "constant", 
        value: "Health Sciences Education" 
      },
    },
  });

  console.log('Generated post:', result);
}

generatePost();
```

---

### Step 5: Update Existing Document

```typescript
// update-post.ts
import { client } from './lib/sanity-agent';

async function updatePost(postId: string) {
  const result = await client.agent.action.generate({
    schemaId: "_.schemas.unidsoe-cms",
    documentId: postId, // Existing document ID
    
    instruction: `
      Update the title based on the content.
      Use the information in $content to create a better title.
    `,
    
    instructionParams: {
      content: {
        type: "field",
        path: "body", // Field path in document
      },
    },
    
    target: {
      path: "title", // Target field to update
    }
  });

  console.log('Updated post:', result);
}
```

---

## 🎨 Agent Actions Types

### 1. Generate
- Create new documents
- Generate content from instructions
- **Docs:** https://www.sanity.io/docs/agent-actions/generate-quickstart

### 2. Translate
- Translate documents
- Multi-language support
- **Docs:** https://www.sanity.io/docs/agent-actions/translate-quickstart

### 3. Transform
- Transform document structure
- Convert formats
- **Docs:** https://www.sanity.io/docs/agent-actions/transform-quickstart

### 4. Prompt
- Custom prompts
- **Docs:** https://www.sanity.io/docs/agent-actions/prompt-quickstart

### 5. Patch
- Update specific fields
- **Docs:** https://www.sanity.io/docs/agent-actions/patch-quickstart

---

## 🔑 Get API Token

1. **Buka:** https://sanity.io/manage/project/iwtyom29/api
2. **Create new token**
3. **Set permissions:** Editor (read/write)
4. **Copy token**

**Add ke `.env`:**
```
SANITY_API_TOKEN=your-token-here
```

---

## 📝 Quick Start Example

**File: `scripts/generate-article.ts`**

```typescript
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: 'iwtyom29',
  dataset: 'production',
  apiVersion: 'vX',
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
});

async function generateArticle() {
  // Get schema ID first
  const schemas = await client.request({
    uri: '/schemas',
  });
  
  const schemaId = schemas[0].id; // Use first schema or find by name

  const result = await client.agent.action.generate({
    schemaId: schemaId,
    targetDocument: { 
      operation: "create", 
      _type: "post" 
    },
    instruction: `
      Write a comprehensive blog post about $topic for Unidsoe 
      (Universitas Dr. Soekardjo), a health sciences university in Indonesia.
      Include: introduction, main content, and conclusion.
    `,
    instructionParams: {
      topic: { 
        type: "constant", 
        value: "Health Sciences Career Opportunities" 
      },
    },
  });

  console.log('Generated article:', result);
  return result;
}

generateArticle();
```

---

## 🚀 Run Script

```powershell
# With Node.js v23.6+
node scripts/generate-article.ts

# Or with ts-node
npx ts-node scripts/generate-article.ts
```

---

## ✅ Checklist Setup

- [ ] Install `@sanity/client@latest`
- [ ] Deploy schema: `npx sanity schema deploy`
- [ ] Get schema ID: `npx sanity schema list`
- [ ] Create API token (Editor permission)
- [ ] Setup client dengan token
- [ ] Test generate content

---

## 🎯 Next Steps

1. **Get Schema ID** - Run `npx sanity schema list`
2. **Install Client** - `npm install @sanity/client@latest`
3. **Create Token** - Di Sanity dashboard
4. **Test Generate** - Run example script

---

## 📚 Resources

- **Generate Quickstart:** https://www.sanity.io/docs/agent-actions/generate-quickstart
- **Agent Actions Overview:** https://www.sanity.io/docs/agent-actions
- **Common Patterns:** https://www.sanity.io/docs/agent-actions/generate-common-patterns

---

**Agent Actions adalah programmatic API, berbeda dari Agent UI di Studio!** 🚀

