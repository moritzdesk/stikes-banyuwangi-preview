# Schema Implementation Guide - STIKES Banyuwangi

Dokumentasi lengkap implementasi semua Advanced Schema Types yang telah dibuat.

## 📋 Daftar Schema yang Sudah Diimplementasikan

### ✅ Basic Schema Types
1. **Organization Schema** - `useOrganizationSchema()`
2. **WebSite Schema** - `useWebSiteSchema()`
3. **BreadcrumbList Schema** - `useBreadcrumbSchema(items)`
4. **Article Schema** - `useArticleSchema(article)`
5. **LocalBusiness Schema** - `useLocalBusinessSchema()`

### ✅ Advanced Schema Types
1. **Course Schema** - `useCourseSchema(course)`
2. **Event Schema** - `useEventSchema(event)` ✅ **IMPLEMENTASI**
3. **Person Schema** - `usePersonSchema(person)` ✅ **IMPLEMENTASI**
4. **FAQPage Schema** - `useFAQPageSchema(faqs)` ✅ **IMPLEMENTASI**
5. **HowTo Schema** - `useHowToSchema(howTo)` ✅ **IMPLEMENTASI**
6. **VideoObject Schema** - `useVideoObjectSchema(video)` ✅ **FUNCTION READY**
7. **Review Schema** - `useReviewSchema(reviews)` ✅ **IMPLEMENTASI**
8. **EducationalOrganization Schema** - Sudah termasuk di Organization Schema

---

## 🎯 Contoh Implementasi

### 1. Event Schema

**Lokasi:** `src/views/ArticleDetail.vue`

**Penggunaan:**
- Otomatis ditambahkan untuk artikel dengan kategori `SEMINAR`, `WORKSHOP`, atau `KEGIATAN`
- Schema akan muncul di halaman detail artikel yang sesuai

**Contoh Data:**
```javascript
{
  name: 'Seminar Kesehatan Masyarakat',
  description: 'Seminar tentang kesehatan masyarakat...',
  startDate: '3 Januari 2025',
  endDate: '3 Januari 2025',
  image: 'https://...',
  location: {
    name: 'STIKES Banyuwangi',
    address: 'Jl. Letkol Istiqlah No. 109',
    city: 'Singojuruh',
    region: 'Banyuwangi',
    postalCode: '68464'
  }
}
```

**Artikel yang Menggunakan:**
- Artikel ID 3: "Workshop Penelitian Kesehatan" (WORKSHOP)
- Artikel ID 6: "Seminar Kesehatan Masyarakat" (SEMINAR)

---

### 2. Person Schema

**Lokasi:** `src/components/LeadershipSection.vue`

**Penggunaan:**
- Schema untuk Ketua STIKES Banyuwangi (DR. H. Soekardjo)
- Otomatis ditambahkan di section Leadership

**Contoh Data:**
```javascript
{
  name: 'DR. H. Soekardjo',
  jobTitle: 'Ketua STIKES Banyuwangi',
  description: 'Ketua STIKES Banyuwangi yang berkomitmen...',
  email: 'ketua@stikesbanyuwangi.ac.id'
}
```

**Cara Menambah Person Lain:**
Tambahkan di `LeadershipSection.vue`:
```javascript
const personSchema2 = computed(() => usePersonSchema({
  name: 'Nama Person',
  jobTitle: 'Jabatan',
  description: 'Deskripsi...',
  email: 'email@example.com'
}))
```

---

### 3. FAQPage Schema

**Lokasi:** `src/components/FAQSection.vue`

**Penggunaan:**
- Komponen FAQ dengan accordion
- Schema otomatis di-generate dari data FAQ

**Contoh Data:**
```javascript
const faqs = [
  {
    question: 'Apa saja program studi yang tersedia?',
    answer: '<p>STIKES Banyuwangi menawarkan...</p>'
  },
  // ... lebih banyak FAQ
]
```

**Cara Menggunakan:**
Tambahkan di halaman yang diinginkan:
```vue
<template>
  <FAQSection />
</template>

<script setup>
import FAQSection from '../components/FAQSection.vue'
</script>
```

**FAQ yang Tersedia:**
1. Program studi yang tersedia
2. Cara mendaftar sebagai mahasiswa baru
3. Akreditasi STIKES Banyuwangi
4. Program beasiswa
5. Lokasi kampus
6. Fasilitas kampus

---

### 4. HowTo Schema

**Lokasi:** `src/components/HowToGuide.vue` + `src/data/howTo.js`

**Penggunaan:**
- Komponen untuk menampilkan panduan langkah-langkah
- Data tersedia di `src/data/howTo.js`

**Contoh Data:**
```javascript
import { howToPendaftaran } from '../data/howTo'

// Di komponen:
<HowToGuide :howToData="howToPendaftaran" />
```

**Panduan yang Tersedia:**
1. **Cara Mendaftar sebagai Mahasiswa Baru** (`howToPendaftaran`)
   - 6 langkah lengkap
   - Durasi: 30 menit
   - Biaya: Gratis

2. **Cara Mengajukan Beasiswa** (`howToBeasiswa`)
   - 5 langkah lengkap
   - Durasi: 1 jam
   - Biaya: Gratis

**Cara Menggunakan:**
```vue
<template>
  <HowToGuide :howToData="howToPendaftaran" />
</template>

<script setup>
import HowToGuide from '../components/HowToGuide.vue'
import { howToPendaftaran } from '../data/howTo'
</script>
```

---

### 5. Review Schema

**Lokasi:** `src/components/LeadershipSection.vue`

**Penggunaan:**
- Schema untuk testimoni/review di Leadership Section
- Otomatis di-generate dari array reviews

**Contoh Data:**
```javascript
const reviews = [
  {
    author: 'Erk Toga',
    text: 'Prestasi Stikes, adalah Hasil Eksistensi...',
    rating: 5,
    date: '2024-01-15'
  },
  // ... lebih banyak review
]
```

**Review yang Tersedia:**
1. Erk Toga - "Prestasi Stikes, adalah Hasil Eksistensi dari Proses yang Telah Dilalui"
2. Ir. H. Suhartoyo, SH, M.Si - "Sudah saatnya Stikes menjadi Institut"
3. dr. Juwana - "Terima Kasih, Saya Bangga Menjadi Bagian dari Stikes Banyuwangi"

---

### 6. VideoObject Schema

**Lokasi:** `src/composables/useSchema.js`

**Status:** Function ready, tinggal digunakan saat ada video content

**Cara Menggunakan:**
```javascript
import { useVideoObjectSchema } from '../composables/useSchema'

const videoSchema = computed(() => useVideoObjectSchema({
  name: 'Video Title',
  description: 'Video description...',
  thumbnailUrl: 'https://...',
  uploadDate: '2025-01-20',
  duration: 'PT10M', // 10 menit
  contentUrl: 'https://...',
  embedUrl: 'https://...'
}))
```

**Contoh Implementasi:**
Tambahkan di komponen yang menampilkan video:
```vue
<template>
  <SchemaMarkup v-if="videoSchema" :schema="videoSchema" />
  <!-- Video player -->
</template>
```

---

## 📁 File Structure

```
src/
├── composables/
│   └── useSchema.js          # Semua schema functions
├── components/
│   ├── SchemaMarkup.vue      # Component untuk render JSON-LD
│   ├── FAQSection.vue        # FAQ component dengan FAQPage schema
│   ├── HowToGuide.vue         # HowTo component dengan HowTo schema
│   └── LeadershipSection.vue  # Person & Review schema
├── views/
│   └── ArticleDetail.vue     # Article & Event schema
└── data/
    └── howTo.js               # Data untuk HowTo guides
```

---

## 🧪 Testing Schema

### Google Rich Results Test
1. Buka: https://search.google.com/test/rich-results
2. Masukkan URL halaman yang ingin di-test
3. Atau paste HTML yang mengandung schema

### Schema Markup Validator
1. Buka: https://validator.schema.org/
2. Paste JSON-LD schema
3. Validasi struktur schema

---

## 📝 Best Practices

1. **Selalu gunakan computed()** untuk schema yang dynamic
2. **Gunakan SchemaMarkup component** untuk render JSON-LD
3. **Validasi schema** sebelum deploy menggunakan Google Rich Results Test
4. **Update schema** jika ada perubahan struktur data
5. **Gunakan format yang benar** untuk date, duration, dll

---

## 🔄 Cara Menambah Schema Baru

1. **Tambahkan function** di `src/composables/useSchema.js`
2. **Import function** di komponen yang membutuhkan
3. **Generate schema** menggunakan computed()
4. **Render schema** menggunakan `<SchemaMarkup :schema="..." />`
5. **Test schema** menggunakan Google Rich Results Test

---

## ✅ Checklist Implementasi

- [x] Event Schema - Implementasi di ArticleDetail
- [x] Person Schema - Implementasi di LeadershipSection
- [x] FAQPage Schema - Komponen FAQSection
- [x] HowTo Schema - Komponen HowToGuide + data
- [x] Review Schema - Implementasi di LeadershipSection
- [x] VideoObject Schema - Function ready
- [x] Course Schema - Function ready
- [x] Semua Basic Schema - Sudah diimplementasikan

---

**Last Updated:** 20 Januari 2025
**Status:** ✅ Semua Advanced Schema Types sudah diimplementasikan dengan contoh lengkap!

