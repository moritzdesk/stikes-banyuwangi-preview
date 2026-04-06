# Evaluasi CMS untuk Universitas Dr. Soekardjo Banyuwangi

## 📋 Kebutuhan Proyek

- **Tech Stack**: Vue.js 3 + Vite (Static Site)
- **Kebutuhan**: CMS untuk manajemen konten artikel/berita
- **Prioritas**: Fast & Robust Development
- **Budget**: Free/Open Source
- **Fitur Khusus**: **AI Content Generation** & **Keyword Research** ⭐

---

## 🔍 Evaluasi LeadCMS

### ✅ Kelebihan LeadCMS

1. **Free & Open Source** - Gratis dan open source
2. **Headless CMS** - Cocok untuk Vue.js (REST API)
3. **AI-Powered** - Fitur AI untuk assist content creation
4. **CRM Features** - Bonus fitur CRM terintegrasi
5. **Modern Stack** - .NET/C# backend dengan PostgreSQL

### ❌ Kekurangan untuk Kebutuhan Anda

1. **Kompleksitas Setup** ⚠️
   - Memerlukan Docker & Docker Compose
   - Perlu setup PostgreSQL database
   - Backend .NET/C# (overkill untuk kebutuhan sederhana)
   - Setup lebih kompleks dari kebutuhan

2. **Development Speed** ⚠️
   - Tidak "fast development" karena perlu setup infrastructure
   - Perlu konfigurasi database, Docker, dll
   - Lebih cocok untuk enterprise/project besar

3. **Overkill untuk Use Case** ⚠️
   - Fitur CRM tidak diperlukan untuk website institusi
   - Backend .NET terlalu berat untuk simple content management
   - Lebih cocok untuk aplikasi yang butuh CRM + CMS

### 🤖 AI Features LeadCMS

- ✅ **AI Plugin untuk OpenAI** - Built-in AI content generation
- ✅ **Content Assistance** - AI membantu generate konten
- ⚠️ **Keyword Research** - Tidak disebutkan secara eksplisit di docs

### 🎯 Kesimpulan LeadCMS

**TIDAK FIT** untuk kebutuhan Anda karena:
- Terlalu kompleks untuk fast development
- Setup infrastructure yang berat
- Overkill untuk kebutuhan simple content management
- **TAPI**: Punya AI features yang menarik, sayangnya setup terlalu kompleks

---

## 🚀 Rekomendasi CMS Alternatif (Free)

### 1. **Strapi + AI Plugins** ⭐⭐⭐⭐⭐ (REKOMENDASI UTAMA)

**Kenapa Cocok:**
- ✅ **100% Free & Open Source**
- ✅ **Super Fast Setup** - `npx create-strapi-app` langsung jalan
- ✅ **Node.js** - Familiar dengan ecosystem JavaScript
- ✅ **REST API & GraphQL** - Flexible untuk Vue.js
- ✅ **Admin Panel** - Beautiful & intuitive
- ✅ **Content Types Builder** - Visual, no coding needed
- ✅ **Media Library** - Built-in image/file management
- ✅ **Role & Permissions** - Multi-user support
- ✅ **i18n Support** - Multi-language ready

**🤖 AI Features:**
- ✅ **OpenAI Plugin** - Community plugin untuk OpenAI integration
- ✅ **AI Content Generation** - Generate konten dengan GPT
- ✅ **Custom AI Hooks** - Bisa buat custom AI hooks untuk keyword research
- ✅ **Plugin Ecosystem** - Banyak plugin AI tersedia di marketplace

**Setup Time:** 5-10 menit
**Deployment:** Bisa self-host atau pakai Strapi Cloud (free tier)

**Installation:**
```bash
npx create-strapi-app@latest my-project --quickstart
```

**AI Plugin Setup:**
```bash
npm install strapi-plugin-open-ai
# atau
npm install strapi-plugin-ai-content-generator
```

**Integration dengan Vue.js:**
```javascript
// Simple fetch dari Strapi API
const response = await fetch('http://localhost:1337/api/articles?populate=*')
const data = await response.json()
```

**Link:** https://strapi.io/

---

### 2. **Directus** ⭐⭐⭐⭐⭐ (REKOMENDASI ALTERNATIF)

**Kenapa Cocok:**
- ✅ **100% Free & Open Source**
- ✅ **Database Agnostic** - Bisa pakai PostgreSQL, MySQL, SQLite
- ✅ **Auto-generate API** - Otomatis generate API dari database
- ✅ **Real-time** - WebSocket support
- ✅ **File Storage** - Support S3, Google Cloud, dll
- ✅ **Role-based Access** - Advanced permissions
- ✅ **SQLite Mode** - Bisa pakai SQLite untuk development (no setup!)

**Setup Time:** 5 menit (dengan SQLite)
**Best For:** Developer yang suka kontrol penuh

**Installation:**
```bash
npx create-directus-project@latest my-project
```

**Link:** https://directus.io/

---

### 3. **Sanity + AI** ⭐⭐⭐⭐⭐ (REKOMENDASI AI TERBAIK!)

**Kenapa Cocok:**
- ✅ **Free Tier** - Generous free tier (10GB assets, unlimited documents)
- ✅ **Super Fast** - CDN-backed, sangat cepat
- ✅ **Real-time** - Live updates
- ✅ **Great DX** - Developer experience sangat baik
- ✅ **Vue.js SDK** - Official Vue.js support
- ✅ **Portable Text** - Rich text editor yang powerful

**🤖 AI Features (EXCELLENT!):**
- ✅ **Sanity AI** - Built-in AI features untuk content generation
- ✅ **OpenAI Integration** - Native OpenAI integration
- ✅ **AI Content Assist** - AI membantu generate & optimize konten
- ✅ **Custom AI Functions** - Bisa buat custom AI functions
- ✅ **AI Plugins** - Marketplace dengan banyak AI plugins
- ✅ **Keyword Research Tools** - Bisa integrate dengan tools seperti Ahrefs/SEMrush API

**Setup Time:** 3 menit
**Best For:** Fast development dengan cloud hosting + AI features

**Installation:**
```bash
npm install -g @sanity/cli
sanity init
```

**AI Integration:**
```javascript
// Sanity AI dalam Studio
import {defineField} from 'sanity'

export default {
  name: 'article',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      // AI bisa generate title dari content
    })
  ]
}
```

**Link:** https://www.sanity.io/

**Note:** Free tier cukup untuk kebanyakan project, tapi ada limit untuk assets. **AI features sangat powerful!**

---

### 4. **Payload CMS + AI** ⭐⭐⭐⭐ (Modern TypeScript)

**Kenapa Cocok:**
- ✅ **100% Free & Open Source**
- ✅ **TypeScript** - Type-safe, modern
- ✅ **Code-first** - Define content types dengan code
- ✅ **Self-hosted** - Full control
- ✅ **REST & GraphQL** - Both APIs available
- ✅ **Local API** - Bisa import langsung di code

**🤖 AI Features:**
- ✅ **Custom Hooks** - Bisa buat AI hooks dengan OpenAI SDK
- ✅ **TypeScript Support** - Type-safe AI integration
- ✅ **Flexible** - Full control untuk implement AI features

**Setup Time:** 10 menit
**Best For:** Developer yang suka TypeScript & code-first approach

**Installation:**
```bash
npx create-payload-app@latest my-project
```

**AI Integration Example:**
```typescript
import { CollectionConfig } from 'payload/types'
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export const Articles: CollectionConfig = {
  hooks: {
    beforeChange: [
      async ({ data }) => {
        // AI generate content
        const completion = await openai.chat.completions.create({
          model: "gpt-4",
          messages: [{ role: "user", content: data.title }]
        })
        return { ...data, aiContent: completion.choices[0].message.content }
      }
    ]
  }
}
```

**Link:** https://payloadcms.com/

---

### 5. **Contentful** ⭐⭐⭐ (Cloud-based)

**Kenapa Cocok:**
- ✅ **Free Tier** - 25,000 API calls/month
- ✅ **Very Fast** - CDN-backed
- ✅ **Great UI** - Admin panel sangat baik
- ✅ **Vue.js SDK** - Official SDK

**Setup Time:** 5 menit
**Best For:** Team yang butuh managed service

**Link:** https://www.contentful.com/

**Note:** Free tier terbatas, tapi cukup untuk development & small projects.

---

### 6. **Markdown Files + Git** ⭐⭐⭐ (Simplest)

**Kenapa Cocok:**
- ✅ **100% Free** - No cost at all
- ✅ **Super Fast** - No setup needed
- ✅ **Version Control** - Git untuk versioning
- ✅ **Simple** - File-based, mudah di-manage

**Setup Time:** 0 menit (sudah ada!)
**Best For:** Simple content, small team

**Contoh:**
```
content/
  articles/
    2025-01-15-prestasi-pkm.md
    2025-01-12-kkn-2025.md
```

**Tools untuk enhance:**
- **TinaCMS** - Git-based CMS dengan visual editor
- **Forestry** - Git-based CMS (sekarang TinaCMS)

---

## 🤖 Implementasi AI Content Generation & Keyword Research

### Opsi 1: Sanity AI (Paling Mudah)

**Setup AI di Sanity:**

1. **Install Sanity AI Plugin:**
```bash
npm install @sanity/ai-assist
```

2. **Configure di sanity.config.ts:**
```typescript
import {defineConfig} from 'sanity'
import {aiAssist} from '@sanity/ai-assist'

export default defineConfig({
  plugins: [
    aiAssist({
      apiKey: process.env.OPENAI_API_KEY,
    })
  ],
  // ... rest of config
})
```

3. **Gunakan di Content Type:**
```typescript
// schema/article.ts
export default {
  name: 'article',
  fields: [
    {
      name: 'title',
      type: 'string',
      // AI bisa generate title
    },
    {
      name: 'content',
      type: 'text',
      // AI bisa generate & optimize content
    },
    {
      name: 'keywords',
      type: 'array',
      of: [{type: 'string'}],
      // AI bisa suggest keywords
    }
  ]
}
```

**Keyword Research Integration:**
```typescript
// Custom function untuk keyword research
async function getKeywordsFromGoogle(keyword: string) {
  // Integrate dengan Google Keyword Planner API
  // atau Ubersuggest API
}
```

---

### Opsi 2: Strapi + OpenAI Plugin

**Setup AI di Strapi:**

1. **Install Plugin:**
```bash
npm install strapi-plugin-open-ai
# atau
npm install strapi-plugin-ai-content-generator
```

2. **Configure di config/plugins.js:**
```javascript
module.exports = {
  'open-ai': {
    enabled: true,
    config: {
      apiKey: process.env.OPENAI_API_KEY,
      model: 'gpt-4',
    }
  }
}
```

3. **Buat Custom Service untuk Keyword Research:**
```javascript
// src/api/article/services/article.js
module.exports = {
  async generateWithAI(title) {
    const openai = strapi.plugins['open-ai'].services.openai
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a content writer for a health sciences college website."
        },
        {
          role: "user",
          content: `Generate SEO-optimized content for: ${title}`
        }
      ]
    })
    
    return completion.choices[0].message.content
  },
  
  async researchKeywords(topic) {
    // Integrate dengan keyword research API
    // Contoh: Ubersuggest, Google Keyword Planner, dll
    const response = await fetch(`https://api.ubersuggest.com/v1/keywords?keyword=${topic}`)
    return response.json()
  }
}
```

---

### Opsi 3: Custom Integration (Universal)

**Untuk semua CMS, bisa buat custom integration:**

```javascript
// utils/ai-content-generator.js
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

// Generate content dengan AI
export async function generateContent(prompt, options = {}) {
  const completion = await openai.chat.completions.create({
    model: options.model || "gpt-4",
    messages: [
      {
        role: "system",
        content: "You are an expert content writer specializing in SEO-optimized articles for educational institutions."
      },
      {
        role: "user",
        content: prompt
      }
    ],
    temperature: options.temperature || 0.7,
    max_tokens: options.maxTokens || 2000
  })
  
  return completion.choices[0].message.content
}

// Keyword research dengan multiple sources
export async function researchKeywords(keyword) {
  const results = {
    google: null,
    ubersuggest: null,
    trends: null
  }
  
  // Google Keyword Planner (perlu setup)
  // results.google = await getGoogleKeywords(keyword)
  
  // Ubersuggest (ada free tier)
  // results.ubersuggest = await getUbersuggestKeywords(keyword)
  
  // Google Trends
  // results.trends = await getGoogleTrends(keyword)
  
  return results
}

// Generate SEO-optimized article
export async function generateSEOArticle(topic, keywords = []) {
  const prompt = `
    Write a comprehensive, SEO-optimized article about: ${topic}
    
    Requirements:
    - Include these keywords naturally: ${keywords.join(', ')}
    - Minimum 1000 words
    - Include H2 and H3 headings
    - Write for Indonesian audience
    - Focus on health sciences education
    - Include relevant examples and data
  `
  
  return await generateContent(prompt, {
    maxTokens: 3000
  })
}
```

**Usage di Vue.js:**
```javascript
// composables/useAIContent.js
import { generateSEOArticle, researchKeywords } from '@/utils/ai-content-generator'

export function useAIContent() {
  const generateArticle = async (topic) => {
    // 1. Research keywords
    const keywords = await researchKeywords(topic)
    
    // 2. Generate content
    const content = await generateSEOArticle(topic, keywords)
    
    return { content, keywords }
  }
  
  return { generateArticle }
}
```

---

### Tools untuk Keyword Research

**Free Options:**
1. **Google Keyword Planner** - Free (perlu Google Ads account)
2. **Google Trends** - 100% Free
3. **Ubersuggest** - Free tier (3 searches/day)
4. **Answer The Public** - Free tier (2 searches/day)
5. **Keyword Surfer** - Free Chrome extension

**Paid Options (Powerful):**
1. **Ahrefs** - $99/month (industry standard)
2. **SEMrush** - $119/month
3. **Moz** - $99/month

**Custom Script:**
```javascript
// utils/keyword-research.js
export async function getKeywordSuggestions(keyword) {
  // Scrape Google Autocomplete (hati-hati dengan ToS!)
  const response = await fetch(
    `https://www.google.com/complete/search?client=firefox&q=${encodeURIComponent(keyword)}`
  )
  const data = await response.json()
  return data[1].map(item => item[0])
}
```

---

## 🔍 SEO Readiness: Organic SEO & SEO AI

### SEO Organic (Traditional SEO)

**Fitur yang Diperlukan:**
- ✅ Meta tags management (title, description, OG tags)
- ✅ URL structure & slugs
- ✅ Sitemap generation
- ✅ Robots.txt management
- ✅ Canonical URLs
- ✅ Schema markup support
- ✅ Image alt text & optimization
- ✅ Mobile optimization
- ✅ Performance optimization

### SEO AI (AI Search Optimization)

**Fitur yang Diperlukan:**
- ✅ Structured data (Schema.org)
- ✅ Semantic HTML support
- ✅ Clean, readable content structure
- ✅ Entity recognition support
- ✅ FAQ & HowTo schema
- ✅ Rich snippets support
- ✅ Natural language content structure

---

### Evaluasi SEO untuk Setiap CMS

#### 1. **Sanity** ⭐⭐⭐⭐⭐ (EXCELLENT untuk SEO!)

**SEO Organic:**
- ✅ **Meta Tags** - Full control via Portable Text & custom fields
- ✅ **URL Slugs** - Custom slug generation
- ✅ **Sitemap** - Generate via API atau custom script
- ✅ **Robots.txt** - Handle di frontend
- ✅ **Canonical URLs** - Full control
- ✅ **Image Optimization** - Built-in image transformation API
- ✅ **Mobile** - Content-agnostic, frontend handle
- ✅ **Performance** - CDN-backed, super fast

**SEO AI:**
- ✅ **Schema Markup** - Full support, bisa generate JSON-LD dari content
- ✅ **Structured Data** - Portable Text bisa render semantic HTML
- ✅ **Entity Recognition** - Bisa tag entities di content
- ✅ **Rich Snippets** - Support semua schema types
- ✅ **Clean Structure** - Content terstruktur dengan baik

**Implementation:**
```typescript
// schema/article.ts
export default {
  name: 'article',
  fields: [
    {
      name: 'seo',
      type: 'object',
      fields: [
        {name: 'title', type: 'string'},
        {name: 'description', type: 'text'},
        {name: 'keywords', type: 'array', of: [{type: 'string'}]},
        {name: 'ogImage', type: 'image'},
      ]
    },
    {
      name: 'schema',
      type: 'object',
      fields: [
        {name: 'articleType', type: 'string'},
        {name: 'author', type: 'reference', to: [{type: 'author'}]},
        {name: 'datePublished', type: 'datetime'},
      ]
    }
  ]
}
```

**Rating:** ⭐⭐⭐⭐⭐ (5/5) - **READY untuk SEO Organic & SEO AI**

---

#### 2. **Strapi** ⭐⭐⭐⭐ (VERY GOOD untuk SEO)

**SEO Organic:**
- ✅ **Meta Tags** - Custom fields untuk SEO
- ✅ **URL Slugs** - Built-in slug field
- ✅ **Sitemap** - Plugin tersedia (`strapi-plugin-sitemap`)
- ✅ **Robots.txt** - Handle di frontend atau plugin
- ✅ **Canonical URLs** - Full control
- ✅ **Image Optimization** - Built-in image processing
- ✅ **Mobile** - Content-agnostic
- ✅ **Performance** - Self-hosted, kontrol penuh

**SEO AI:**
- ✅ **Schema Markup** - Bisa generate via custom fields
- ✅ **Structured Data** - Support JSON-LD generation
- ✅ **Rich Snippets** - Support semua schema types
- ⚠️ **Entity Recognition** - Perlu custom implementation

**Implementation:**
```javascript
// api/article/content-types/article/schema.json
{
  "attributes": {
    "seo": {
      "type": "component",
      "repeatable": false,
      "component": "shared.seo"
    },
    "schema": {
      "type": "json"
    }
  }
}
```

**Rating:** ⭐⭐⭐⭐ (4/5) - **READY untuk SEO Organic & SEO AI**

---

#### 3. **Directus** ⭐⭐⭐⭐ (VERY GOOD untuk SEO)

**SEO Organic:**
- ✅ **Meta Tags** - Custom fields untuk SEO
- ✅ **URL Slugs** - Auto-generate atau custom
- ✅ **Sitemap** - Generate via API
- ✅ **Robots.txt** - Handle di frontend
- ✅ **Canonical URLs** - Full control
- ✅ **Image Optimization** - Built-in transformations
- ✅ **Mobile** - Content-agnostic
- ✅ **Performance** - Database-optimized

**SEO AI:**
- ✅ **Schema Markup** - Support JSON fields untuk schema
- ✅ **Structured Data** - Full support
- ✅ **Rich Snippets** - Support semua types
- ⚠️ **Entity Recognition** - Perlu custom

**Rating:** ⭐⭐⭐⭐ (4/5) - **READY untuk SEO Organic & SEO AI**

---

#### 4. **Payload CMS** ⭐⭐⭐⭐⭐ (EXCELLENT untuk SEO)

**SEO Organic:**
- ✅ **Meta Tags** - TypeScript fields untuk SEO
- ✅ **URL Slugs** - Built-in slug field
- ✅ **Sitemap** - Generate via hooks
- ✅ **Robots.txt** - Handle di frontend
- ✅ **Canonical URLs** - Full control
- ✅ **Image Optimization** - Built-in processing
- ✅ **Mobile** - Content-agnostic
- ✅ **Performance** - TypeScript-optimized

**SEO AI:**
- ✅ **Schema Markup** - Type-safe schema generation
- ✅ **Structured Data** - Excellent support
- ✅ **Rich Snippets** - Full support
- ✅ **Entity Recognition** - Bisa implement dengan TypeScript

**Rating:** ⭐⭐⭐⭐⭐ (5/5) - **READY untuk SEO Organic & SEO AI**

---

#### 5. **Contentful** ⭐⭐⭐⭐ (GOOD untuk SEO)

**SEO Organic:**
- ✅ **Meta Tags** - Content model untuk SEO
- ✅ **URL Slugs** - Custom slug field
- ✅ **Sitemap** - Generate via API
- ✅ **Robots.txt** - Handle di frontend
- ✅ **Canonical URLs** - Full control
- ✅ **Image Optimization** - Built-in transformations
- ✅ **Mobile** - Content-agnostic
- ✅ **Performance** - CDN-backed

**SEO AI:**
- ✅ **Schema Markup** - Support JSON fields
- ✅ **Structured Data** - Good support
- ✅ **Rich Snippets** - Support semua types
- ⚠️ **Entity Recognition** - Limited

**Rating:** ⭐⭐⭐⭐ (4/5) - **READY untuk SEO Organic & SEO AI**

---

#### 6. **LeadCMS** ⭐⭐⭐ (MODERATE untuk SEO)

**SEO Organic:**
- ✅ **Meta Tags** - Support custom fields
- ✅ **URL Slugs** - Built-in
- ⚠️ **Sitemap** - Perlu custom implementation
- ⚠️ **Robots.txt** - Perlu custom
- ✅ **Canonical URLs** - Support
- ⚠️ **Image Optimization** - Perlu setup
- ✅ **Mobile** - Content-agnostic
- ⚠️ **Performance** - .NET stack, perlu optimasi

**SEO AI:**
- ⚠️ **Schema Markup** - Perlu custom implementation
- ⚠️ **Structured Data** - Limited support
- ⚠️ **Rich Snippets** - Perlu setup manual
- ❌ **Entity Recognition** - Tidak ada built-in

**Rating:** ⭐⭐⭐ (3/5) - **PARTIALLY READY** - Perlu lebih banyak setup manual

---

## 📝 Implementasi SEO di CMS

### Sanity: Setup SEO Fields

**1. Buat SEO Schema:**
```typescript
// schemas/seo.ts
export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'SEO Title',
      type: 'string',
      description: 'Title untuk search engines (50-60 karakter)',
      validation: Rule => Rule.max(60).warning('Title terlalu panjang')
    },
    {
      name: 'description',
      title: 'SEO Description',
      type: 'text',
      description: 'Meta description (150-160 karakter)',
      validation: Rule => Rule.max(160).warning('Description terlalu panjang')
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Keywords untuk SEO'
    },
    {
      name: 'ogImage',
      title: 'OG Image',
      type: 'image',
      description: 'Image untuk social media sharing'
    },
    {
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'Canonical URL untuk mencegah duplicate content'
    },
    {
      name: 'noindex',
      title: 'No Index',
      type: 'boolean',
      description: 'Prevent search engines from indexing'
    }
  ]
}
```

**2. Tambahkan ke Article Schema:**
```typescript
// schemas/article.ts
export default {
  name: 'article',
  fields: [
    // ... other fields
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO Settings'
    },
    {
      name: 'schema',
      type: 'object',
      title: 'Schema Markup',
      fields: [
        {name: 'articleType', type: 'string'},
        {name: 'author', type: 'reference', to: [{type: 'author'}]},
        {name: 'datePublished', type: 'datetime'},
        {name: 'dateModified', type: 'datetime'},
      ]
    }
  ]
}
```

**3. Generate JSON-LD di Vue.js:**
```javascript
// composables/useSanitySEO.js
import { useSanityQuery } from '@nuxtjs/sanity'

export function useSanitySEO(article) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.seo?.description,
    image: article.seo?.ogImage?.asset?.url,
    datePublished: article.schema?.datePublished,
    dateModified: article.schema?.dateModified,
    author: {
      '@type': 'Person',
      name: article.author?.name
    }
  }
  
  return {
    meta: {
      title: article.seo?.title || article.title,
      description: article.seo?.description,
      ogImage: article.seo?.ogImage?.asset?.url,
      keywords: article.seo?.keywords?.join(', ')
    },
    schema
  }
}
```

---

### Strapi: Setup SEO Fields

**1. Buat SEO Component:**
```json
// src/components/shared/seo.json
{
  "collectionName": "components_shared_seos",
  "info": {
    "name": "seo",
    "icon": "search"
  },
  "options": {},
  "attributes": {
    "title": {
      "type": "string",
      "maxLength": 60
    },
    "description": {
      "type": "text",
      "maxLength": 160
    },
    "keywords": {
      "type": "json"
    },
    "ogImage": {
      "type": "media",
      "multiple": false,
      "required": false,
      "allowedTypes": ["images"]
    },
    "canonicalUrl": {
      "type": "string"
    },
    "noindex": {
      "type": "boolean",
      "default": false
    }
  }
}
```

**2. Tambahkan ke Article Content Type:**
```json
// src/api/article/content-types/article/schema.json
{
  "attributes": {
    "seo": {
      "type": "component",
      "repeatable": false,
      "component": "shared.seo"
    }
  }
}
```

**3. Generate Sitemap (Plugin):**
```bash
npm install strapi-plugin-sitemap
```

---

### Payload CMS: Setup SEO Fields

**1. Buat SEO Field:**
```typescript
// src/collections/Articles.ts
import { CollectionConfig } from 'payload/types'

export const Articles: CollectionConfig = {
  slug: 'articles',
  fields: [
    // ... other fields
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          maxLength: 60,
          admin: {
            description: 'SEO Title (50-60 karakter)'
          }
        },
        {
          name: 'description',
          type: 'textarea',
          maxLength: 160,
          admin: {
            description: 'Meta Description (150-160 karakter)'
          }
        },
        {
          name: 'keywords',
          type: 'array',
          fields: [
            {name: 'keyword', type: 'text'}
          ]
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media'
        }
      ]
    }
  ]
}
```

**2. Generate Schema Markup:**
```typescript
// hooks/afterRead.ts
export const generateSchema = async ({ doc }) => {
  return {
    ...doc,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: doc.title,
      description: doc.seo?.description,
      // ... rest of schema
    }
  }
}
```

---

## 📊 Perbandingan Cepat (Dengan Fokus AI & SEO)

| CMS | Setup Time | Complexity | Free Tier | Vue.js Support | **AI Features** | **Keyword Research** | **SEO Organic** | **SEO AI** | Best For |
|-----|-----------|------------|-----------|----------------|-----------------|---------------------|-----------------|------------|----------|
| **Strapi** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ✅ 100% | ✅ Excellent | ⭐⭐⭐⭐ Plugin | ⭐⭐⭐ Custom | ⭐⭐⭐⭐ **GOOD** | ⭐⭐⭐⭐ **GOOD** | **REKOMENDASI** |
| **Directus** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ✅ 100% | ✅ Excellent | ⭐⭐⭐ Custom | ⭐⭐⭐ Custom | ⭐⭐⭐⭐ **GOOD** | ⭐⭐⭐⭐ **GOOD** | Advanced needs |
| **Sanity** | ⭐⭐⭐⭐⭐ | ⭐⭐ | ✅ Generous | ✅ Excellent | ⭐⭐⭐⭐⭐ **BEST!** | ⭐⭐⭐⭐ **BEST!** | ⭐⭐⭐⭐⭐ **BEST!** | ⭐⭐⭐⭐⭐ **BEST!** | **AI+SEO** ⭐ |
| **Payload** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ✅ 100% | ✅ Good | ⭐⭐⭐⭐ Custom | ⭐⭐⭐ Custom | ⭐⭐⭐⭐⭐ **EXCELLENT** | ⭐⭐⭐⭐⭐ **EXCELLENT** | TypeScript lovers |
| **Contentful** | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⚠️ Limited | ✅ Excellent | ⭐⭐⭐⭐ Good | ⭐⭐⭐ Limited | ⭐⭐⭐⭐ **GOOD** | ⭐⭐⭐⭐ **GOOD** | Managed service |
| **LeadCMS** | ⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ 100% | ✅ Good | ⭐⭐⭐⭐ Built-in | ⭐⭐ Limited | ⭐⭐⭐ **MODERATE** | ⭐⭐⭐ **MODERATE** | Enterprise |

---

## 🎯 Rekomendasi Final (Dengan Fokus AI + SEO)

### Untuk Fast & Robust Development + AI Content Generation + SEO:

**1. Sanity** ⭐⭐⭐⭐⭐ (REKOMENDASI TERBAIK - AI + SEO!)
- ✅ **AI Features Terbaik** - Built-in AI yang sangat powerful
- ✅ **SEO Organic** - ⭐⭐⭐⭐⭐ Excellent support
- ✅ **SEO AI** - ⭐⭐⭐⭐⭐ Best-in-class untuk structured data
- ✅ **Keyword Research** - Bisa integrate dengan tools SEO
- ✅ **Setup Super Cepat** - 3 menit langsung jalan
- ✅ **Cloud-managed** - No infrastructure setup
- ✅ **Free Tier Generous** - Cukup untuk development
- ✅ **Real-time** - Live updates
- ✅ **Vue.js SDK** - Official support
- ✅ **Image Optimization** - Built-in transformations
- ✅ **Schema Markup** - Full support untuk semua schema types
- ⚠️ **Note**: Perlu OpenAI API key (bisa pakai free tier OpenAI)

**2. Strapi + AI Plugins** ⭐⭐⭐⭐ (Self-hosted dengan AI + SEO)
- ✅ **100% Free** - Self-hosted, full control
- ✅ **AI Plugins** - Banyak plugin AI tersedia
- ✅ **SEO Organic** - ⭐⭐⭐⭐ Very good support
- ✅ **SEO AI** - ⭐⭐⭐⭐ Good support untuk schema markup
- ✅ **Setup Cepat** - 5-10 menit
- ✅ **Flexible** - Bisa custom AI hooks
- ✅ **Community Besar** - Banyak resources
- ✅ **Sitemap Plugin** - Tersedia plugin untuk sitemap
- ⚠️ **Note**: Perlu setup AI plugins sendiri

**3. Payload CMS + Custom AI** ⭐⭐⭐⭐⭐ (TypeScript + AI + SEO)
- ✅ **TypeScript** - Type-safe AI integration
- ✅ **SEO Organic** - ⭐⭐⭐⭐⭐ Excellent support
- ✅ **SEO AI** - ⭐⭐⭐⭐⭐ Excellent untuk structured data
- ✅ **Full Control** - Custom AI implementation
- ✅ **Code-first** - Define AI logic dengan code
- ✅ **Schema Generation** - Type-safe schema markup
- ⚠️ **Note**: Perlu coding untuk AI features

### Untuk Keyword Research Khusus:

**Semua CMS di atas bisa integrate dengan:**
- ✅ **Google Keyword Planner API** (via custom integration)
- ✅ **Ahrefs API** (paid, tapi powerful)
- ✅ **SEMrush API** (paid)
- ✅ **Ubersuggest API** (ada free tier)
- ✅ **Custom Script** - Buat script sendiri untuk keyword research

**Atau pakai tools terpisah:**
- **Google Keyword Planner** (Free)
- **Google Trends** (Free)
- **Answer The Public** (Free tier)
- **Ubersuggest** (Free tier)

---

## 🚀 Next Steps (Dengan AI Features)

### Opsi 1: Sanity (Rekomendasi untuk AI)

1. **Setup Sanity** - `sanity init` (3 menit)
2. **Setup OpenAI API Key** - Dapatkan dari https://platform.openai.com
3. **Install AI Plugin** - Setup AI features di Sanity Studio
4. **Buat Content Type** - Articles dengan AI fields
5. **Integrate dengan Vue.js** - Pakai Sanity Vue.js SDK
6. **Setup Keyword Research** - Integrate dengan Google Keyword Planner atau tools lain

### Opsi 2: Strapi + AI

1. **Setup Strapi** - `npx create-strapi-app` (5 menit)
2. **Install AI Plugin** - `npm install strapi-plugin-open-ai`
3. **Configure OpenAI** - Setup API key di Strapi config
4. **Buat Content Type** - Articles dengan AI hooks
5. **Integrate dengan Vue.js** - Fetch dari Strapi API
6. **Deploy** - Self-host atau pakai Strapi Cloud

### Setup Keyword Research

**Untuk semua CMS, bisa buat custom integration:**

```javascript
// Contoh: Keyword Research Function
async function getKeywordSuggestions(keyword) {
  // Option 1: Google Keyword Planner API (perlu setup)
  // Option 2: Ubersuggest API (ada free tier)
  // Option 3: Custom script dengan web scraping (hati-hati dengan ToS)
  
  const response = await fetch(`https://api.keywordtool.io/v2/search/suggestions/google?keyword=${keyword}`)
  return response.json()
}
```

---

## 📝 Catatan Penting

### AI Content Generation:
- ✅ **Sanity** punya AI features terbaik secara built-in
- ✅ **Strapi** punya ecosystem plugin AI yang besar
- ✅ **Semua CMS** bisa integrate dengan OpenAI API (perlu API key)
- ⚠️ **OpenAI API** - Ada cost per request (tapi ada free tier $5)

### Keyword Research:
- ✅ **Tidak ada CMS** yang punya keyword research built-in yang sempurna
- ✅ **Solusi**: Integrate dengan external tools (Google Keyword Planner, Ubersuggest, dll)
- ✅ **Custom Script**: Bisa buat script sendiri untuk keyword research
- ✅ **API Integration**: Semua CMS bisa integrate dengan keyword research APIs

### Rekomendasi Final (Dengan SEO):
- 🥇 **Sanity** - AI features terbaik + SEO excellent + cloud-managed
- 🥈 **Payload** - TypeScript + SEO excellent + custom AI
- 🥉 **Strapi** - Self-hosted + SEO good + AI plugins

### Cost Estimate:
- **CMS**: 100% Free (self-hosted) atau Free tier (cloud)
- **OpenAI API**: ~$0.002 per 1K tokens (ada free tier $5)
- **Keyword Research Tools**: 
  - Google Keyword Planner: Free
  - Ubersuggest: Free tier available
  - Ahrefs/SEMrush: Paid (tapi powerful)

---

## 🎯 TL;DR - Rekomendasi untuk AI + SEO

### 🥇 Pilihan Terbaik: **Sanity**

**Kenapa?**
- ✅ Built-in AI features yang paling powerful
- ✅ **SEO Organic: ⭐⭐⭐⭐⭐** - Excellent support
- ✅ **SEO AI: ⭐⭐⭐⭐⭐** - Best-in-class untuk structured data
- ✅ Setup super cepat (3 menit)
- ✅ Cloud-managed (no infrastructure)
- ✅ Free tier generous
- ✅ Vue.js SDK official
- ✅ Real-time updates
- ✅ Image optimization built-in
- ✅ Schema markup full support

**Yang Perlu:**
- OpenAI API key (free tier $5 cukup untuk testing)
- Setup AI plugin di Sanity Studio
- Configure SEO fields di content schema

---

### 🥈 Alternatif: **Payload CMS** (TypeScript + SEO)

**Kenapa?**
- ✅ **SEO Organic: ⭐⭐⭐⭐⭐** - Excellent
- ✅ **SEO AI: ⭐⭐⭐⭐⭐** - Excellent
- ✅ TypeScript (type-safe)
- ✅ Full control
- ✅ 100% free

**Yang Perlu:**
- Setup Payload sendiri
- Coding untuk AI features
- Manage infrastructure sendiri

### 🥉 Alternatif: **Strapi + AI Plugins**

**Kenapa?**
- ✅ **SEO Organic: ⭐⭐⭐⭐** - Very good
- ✅ **SEO AI: ⭐⭐⭐⭐** - Good
- ✅ Self-hosted (full control)
- ✅ Banyak AI plugins tersedia
- ✅ Community besar
- ✅ 100% free

**Yang Perlu:**
- Setup Strapi sendiri
- Install & configure AI plugins
- Manage infrastructure sendiri

---

### 💡 Keyword Research Strategy

**Tidak ada CMS yang punya keyword research built-in sempurna**, jadi solusinya:

1. **Pakai Tools Free:**
   - Google Keyword Planner (Free)
   - Google Trends (Free)
   - Ubersuggest Free tier

2. **Integrate dengan API:**
   - Buat custom integration di CMS
   - Pakai Ubersuggest API (free tier)
   - Atau Google Keyword Planner API

3. **Custom Script:**
   - Buat script sendiri untuk keyword research
   - Combine multiple sources
   - Integrate dengan CMS via hooks/plugins

---

### 💰 Cost Breakdown

| Item | Cost | Notes |
|------|------|-------|
| **Sanity** | Free | Free tier cukup untuk development |
| **Strapi** | Free | Self-hosted, 100% free |
| **OpenAI API** | ~$0.002/1K tokens | Free tier $5 untuk testing |
| **Keyword Research** | Free | Google tools free |
| **Total (Development)** | **~$5/month** | Hanya untuk OpenAI API |

---

### ✅ Quick Start Checklist

**Untuk Sanity (Rekomendasi - AI + SEO):**
- [ ] Daftar di https://sanity.io (free)
- [ ] Dapatkan OpenAI API key di https://platform.openai.com
- [ ] Setup Sanity project: `sanity init`
- [ ] Install AI plugin: `npm install @sanity/ai-assist`
- [ ] Configure AI di sanity.config.ts
- [ ] **Buat SEO schema** - Setup SEO fields (title, description, keywords, OG image)
- [ ] **Buat content type untuk Articles** - Include SEO fields
- [ ] **Setup Schema Markup** - JSON-LD untuk structured data
- [ ] Test AI content generation
- [ ] Setup keyword research integration
- [ ] **Test SEO** - Verify meta tags, schema markup
- [ ] Integrate dengan Vue.js project

**Estimasi Waktu:** 45-90 menit untuk setup lengkap (termasuk SEO)

---

**Last Updated:** 2025-01-20

