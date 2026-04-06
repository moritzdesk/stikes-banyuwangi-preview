# Setup Sanity Studio untuk Demo UI CMS

## 🎯 Opsi Demo Sanity CMS

### Opsi 1: Sanity Studio Lokal (Recommended untuk Demo)
- ✅ **Run di localhost** - Bisa demo langsung di komputer
- ✅ **No internet needed** - Setelah setup, bisa offline
- ✅ **Full control** - Bisa customize sesuai kebutuhan
- ✅ **Perfect untuk presentasi** - Bisa demo langsung

### Opsi 2: Sanity Cloud Studio
- ✅ **Access dari browser** - Login ke sanity.io
- ✅ **No setup needed** - Langsung pakai
- ⚠️ **Perlu internet** - Harus online
- ⚠️ **Perlu account** - Harus daftar dulu

**Rekomendasi:** Opsi 1 (Lokal) untuk demo presentasi lebih smooth

---

## 🚀 Quick Setup Sanity Studio (15 Menit)

### Step 1: Install Sanity CLI

```bash
npm install -g @sanity/cli
```

### Step 2: Login ke Sanity

```bash
sanity login
```

**Note:** Jika belum punya account, akan auto-create saat login.

### Step 3: Create Sanity Project

```bash
# Di root project folder
cd c:\useFolder\titip\work\moritzdesk\moritzdesk\stikes_banyuwangi

# Create Sanity project
sanity init --project-id unidsoe-cms --dataset production --template blog --output-path sanity-studio
```

**Atau manual:**
```bash
sanity init
# Pilih:
# - Project name: unidsoe-cms
# - Use default dataset: Yes
# - Template: Blog (untuk quick start)
# - Output path: sanity-studio
```

### Step 4: Start Sanity Studio

```bash
cd sanity-studio
npm install
npm run dev
```

**Studio akan jalan di:** `http://localhost:3333`

---

## 📁 Struktur Project Setelah Setup

```
stikes_banyuwangi/
├── src/                    # Vue.js frontend
├── sanity-studio/          # Sanity CMS Studio (NEW)
│   ├── schemas/           # Content types
│   ├── sanity.config.ts   # Sanity config
│   └── package.json
└── package.json
```

---

## 🎨 Customize Sanity Studio untuk Unidsoe

### 1. Update Studio Title & Logo

**File: `sanity-studio/sanity.config.ts`**

```typescript
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'unidsoe-cms',
  title: 'Unidsoe CMS - Universitas Dr. Soekardjo',
  
  projectId: 'YOUR_PROJECT_ID',
  dataset: 'production',
  
  plugins: [deskTool(), visionTool()],
  
  schema: {
    types: schemaTypes,
  },
  
  // Customize Studio UI
  studio: {
    components: {
      logo: () => <div>Unidsoe</div>
    }
  }
})
```

### 2. Create Content Types untuk Unidsoe

**File: `sanity-studio/schemas/article.js`**

```javascript
export default {
  name: 'article',
  title: 'Artikel',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          {title: 'Prestasi', value: 'PRESTASI'},
          {title: 'Kegiatan', value: 'KEGIATAN'},
          {title: 'Workshop', value: 'WORKSHOP'},
          {title: 'Pengumuman', value: 'PENGUMUMAN'},
          {title: 'Seminar', value: 'SEMINAR'},
        ],
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'author',
      title: 'Penulis',
      type: 'string',
      default: 'Admin'
    },
    {
      name: 'date',
      title: 'Tanggal',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Ringkasan',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.max(200)
    },
    {
      name: 'content',
      title: 'Konten',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'image',
      title: 'Gambar Utama',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'SEO Title',
          type: 'string',
          description: 'Title untuk search engines (50-60 karakter)',
          validation: Rule => Rule.max(60)
        },
        {
          name: 'description',
          title: 'SEO Description',
          type: 'text',
          description: 'Meta description (150-160 karakter)',
          validation: Rule => Rule.max(160)
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            layout: 'tags'
          }
        },
        {
          name: 'ogImage',
          title: 'OG Image',
          type: 'image',
          description: 'Image untuk social media sharing'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image'
    }
  }
}
```

**File: `sanity-studio/schemas/programStudi.js`**

```javascript
export default {
  name: 'programStudi',
  title: 'Program Studi',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nama Program Studi',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'degree',
      title: 'Jenjang',
      type: 'string',
      options: {
        list: [
          {title: 'S1', value: 'S1'},
          {title: 'D4', value: 'D4'},
          {title: 'D3', value: 'D3'},
        ],
      }
    },
    {
      name: 'accreditation',
      title: 'Akreditasi',
      type: 'string',
      options: {
        list: [
          {title: 'Baik Sekali', value: 'BAIK_SEKALI'},
          {title: 'Baik', value: 'BAIK'},
          {title: 'C', value: 'C'},
        ],
      }
    },
    {
      name: 'description',
      title: 'Deskripsi',
      type: 'text',
      rows: 5
    },
    {
      name: 'curriculum',
      title: 'Kurikulum',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'image',
      title: 'Gambar',
      type: 'image'
    }
  ]
}
```

### 3. Register Schemas

**File: `sanity-studio/schemas/index.js`**

```javascript
import article from './article'
import programStudi from './programStudi'

export const schemaTypes = [
  article,
  programStudi,
  // Tambahkan schema lain sesuai kebutuhan
]
```

---

## 🎬 Demo Flow untuk Presentasi

### 1. **Show Sanity Studio Interface** (2 menit)
- Buka `http://localhost:3333`
- Show dashboard
- Show content types (Articles, Program Studi, dll)

### 2. **Create Article dengan AI** (3 menit)
- Klik "Create Article"
- Input title: "Workshop Kesehatan Masyarakat 2025"
- Klik "AI Generate" (jika sudah setup AI plugin)
- Show generated content
- Upload image
- Set SEO settings
- Publish

### 3. **Show Content di Website** (1 menit)
- Show article muncul di website Vue.js
- Show SEO meta tags
- Show structured data

---

## 🤖 Setup AI Features (Optional untuk Demo)

### Install AI Plugin:

```bash
cd sanity-studio
npm install @sanity/ai-assist
```

### Configure di `sanity.config.ts`:

```typescript
import {aiAssist} from '@sanity/ai-assist'

export default defineConfig({
  plugins: [
    deskTool(),
    visionTool(),
    aiAssist({
      apiKey: process.env.OPENAI_API_KEY, // Set di .env
    })
  ],
  // ...
})
```

### Create `.env` file:

```bash
# sanity-studio/.env
OPENAI_API_KEY=sk-your-key-here
```

---

## 📸 Screenshots untuk Presentasi (Alternatif)

Jika tidak sempat setup, bisa pakai screenshots dari:
- https://www.sanity.io/studio
- https://www.sanity.io/docs
- Google: "Sanity Studio interface screenshot"

---

## 🎯 Quick Demo Script (5 Menit)

### Setup (Sebelum Presentasi):
1. ✅ Install Sanity CLI
2. ✅ Create project
3. ✅ Setup content types
4. ✅ Start studio

### Demo (Saat Presentasi):
1. **Show Studio** (1 menit)
   - "Ini adalah Sanity Studio, interface untuk manage konten"
   - Show dashboard & menu

2. **Create Article** (2 menit)
   - "Staff bisa create artikel baru dengan mudah"
   - Input title, content, upload image
   - Set SEO settings
   - Publish

3. **Show Result** (1 menit)
   - "Artikel langsung muncul di website"
   - Show di browser website
   - Show SEO meta tags

4. **AI Demo** (1 menit - jika sudah setup)
   - "Dengan AI, bisa generate konten lebih cepat"
   - Show AI generate content

---

## 💡 Tips untuk Demo

### Do's:
- ✅ **Prepare dulu** - Setup sebelum presentasi
- ✅ **Have sample data** - Siapkan 2-3 artikel contoh
- ✅ **Test flow** - Pastikan semua jalan dengan baik
- ✅ **Backup plan** - Siapkan screenshots jika ada masalah

### Don'ts:
- ❌ **Jangan setup saat presentasi** - Setup dulu sebelumnya
- ❌ **Jangan pakai real data** - Pakai dummy data untuk demo
- ❌ **Jangan terlalu detail** - Keep it simple & high-level

---

## 🚨 Troubleshooting

### Error: "Project not found"
- Pastikan sudah login: `sanity login`
- Check project ID di `sanity.config.ts`

### Error: "Port 3333 already in use"
```bash
# Kill process di port 3333 atau
# Change port di vite.config.ts (jika ada)
```

### Studio tidak muncul
- Check `npm run dev` sudah jalan
- Check browser console untuk error
- Restart dev server

---

## 📝 Next Steps Setelah Demo

1. **Setup Content Types Lengkap**
   - Articles ✅
   - Program Studi ✅
   - Fasilitas Kampus
   - Kerja Sama & Kemitraan
   - Riset & Publikasi
   - Transparansi & Mutu

2. **Integrate dengan Vue.js**
   - Install Sanity client
   - Fetch data dari Sanity
   - Replace static data dengan Sanity data

3. **Setup AI Features**
   - Install AI plugin
   - Configure OpenAI API key
   - Test AI content generation

---

**Good luck dengan demo! 🚀**

