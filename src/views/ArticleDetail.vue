<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Loading State -->
    <div v-if="loading" class="flex flex-col items-center justify-center min-h-[70vh]">
      <div class="w-16 h-16 border-4 border-blue-100 border-t-[#195682] rounded-full animate-spin"></div>
      <p class="mt-8 text-gray-500 font-bold tracking-widest uppercase text-xs">{{ $t('articles.loading') }}</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div class="w-24 h-24 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center mb-6">
        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
      </div>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ $t('articles.notFound') }}</h2>
      <p class="text-gray-500 mb-8 max-w-md">{{ $t('articles.notFoundDesc') }}</p>
      <router-link to="/artikel" class="px-8 py-3 bg-[#195682] text-white font-bold rounded-full hover:bg-black transition-colors">
        {{ $t('articles.backToList') }}
      </router-link>
    </div>

    <!-- Article Content -->
    <div v-else-if="article">
      <!-- Breadcrumbs Component -->
      <PageHeader 
        :title="article.title" 
        :breadcrumbs="[{ label: 'Berita', path: '/artikel' }, { label: article.category }]"
        bgImage="/assets/site/pexels-3184311.jpg"
      />

      <!-- Article Body -->
      <article class="py-16 md:py-24">
        <div class="container-custom">
          <div v-if="isPreview" class="max-w-4xl mx-auto mb-6 px-6 py-3 bg-amber-100 border border-amber-300 text-amber-800 text-sm font-bold rounded-2xl text-center">
            {{ $t('articles.previewMode') }}
          </div>
          <div class="max-w-4xl mx-auto">
            
            <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
                <!-- Main Image -->
                <div class="relative h-64 md:h-[500px] overflow-hidden">
                  <img :src="article.image" :alt="article.title" class="w-full h-full object-cover" :style="article.imagePosition ? { objectPosition: article.imagePosition } : {}">
                 <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
               </div>

                <!-- Content Inner -->
                <div class="px-5 py-8 md:px-8 md:py-16">
                   <!-- Meta Header -->
                   <div class="mx-auto max-w-[680px] flex flex-wrap items-center gap-4 mb-8 text-sm font-bold uppercase tracking-widest text-gray-400">
                    <span class="px-4 py-1.5 bg-gray-100 text-[#195682] rounded-full">{{ article.category }}</span>
                    <span>•</span>
                    <div class="flex items-center">
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {{ article.date }}
                    </div>
                  </div>

                   <!-- Actual Body Content -->
                   <div 
                     class="article-body prose prose-lg md:prose-xl max-w-none prose-headings:text-[#0b2b42] prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-[#195682] prose-img:rounded-2xl prose-img:shadow-md prose-img:mx-auto"
                     v-html="article.content"
                   ></div>

                   <!-- Share Section & Footer -->
                   <div class="mx-auto max-w-[680px] mt-16 pt-12 border-t border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                     <div class="flex items-center gap-4">
                       <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">{{ $t('common.author') }}:</span>
                       <span class="text-sm font-bold text-[#195682] uppercase">{{ article.author }}</span>
                     </div>
                     
                     <div class="flex gap-2">
                       <!-- Basic Share Buttons -->
                       <button @click="share('facebook')" class="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                         <i class="fab fa-facebook-f"></i>
                       </button>
                       <button @click="share('twitter')" class="w-10 h-10 rounded-full bg-blue-50 text-blue-400 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors">
                         <i class="fab fa-twitter"></i>
                       </button>
                       <button @click="share('whatsapp')" class="w-10 h-10 rounded-full bg-green-50 text-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors">
                         <i class="fab fa-whatsapp"></i>
                       </button>
                     </div>
                   </div>

                   <!-- Baca Juga di bawah konten: 2 section otomatis -->
                   <section v-if="relatedArticles.length" class="mx-auto max-w-[680px] mt-12">
                     <h2 class="text-sm font-extrabold tracking-widest uppercase text-[#195682] mb-4">{{ $t('articles.related') }}</h2>
                     <ul class="grid gap-3">
                       <li v-for="a in relatedArticles" :key="'rel-' + a.id" class="group flex gap-3 p-3 rounded-2xl border border-gray-100 bg-gray-50/60 hover:bg-white hover:shadow-md transition">
                         <router-link :to="`/artikel/${a.slug}`" class="shrink-0 w-20 h-20 rounded-xl overflow-hidden bg-gray-100">
                           <img :src="a.image" :alt="a.title" class="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" />
                         </router-link>
                         <div class="min-w-0 flex-1">
                           <div class="text-[11px] font-bold tracking-widest uppercase text-[#195682]/70">{{ a.category }}</div>
                           <router-link :to="`/artikel/${a.slug}`" class="text-sm font-bold leading-snug text-gray-800 hover:text-[#195682] line-clamp-2">{{ a.title }}</router-link>
                           <div class="text-xs text-gray-400 mt-1 line-clamp-1">{{ a.excerpt }}</div>
                         </div>
                       </li>
                     </ul>
                   </section>

                   <section v-if="latestArticles.length" class="mx-auto max-w-[680px] mt-8">
                     <h2 class="text-sm font-extrabold tracking-widest uppercase text-[#195682] mb-4">{{ $t('articles.latest') }}</h2>
                     <ul class="grid gap-2">
                       <li v-for="a in latestArticles" :key="'latest-' + a.id" class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition">
                         <span class="shrink-0 w-1.5 h-1.5 rounded-full bg-[#f9ac42]"></span>
                         <router-link :to="`/artikel/${a.slug}`" class="text-sm font-semibold text-gray-700 hover:text-[#195682] line-clamp-1 flex-1">{{ a.title }}</router-link>
                         <span class="shrink-0 text-xs text-gray-400">{{ a.date }}</span>
                       </li>
                     </ul>
                   </section>
                </div>
            </div>

            <!-- Back navigation -->
            <div class="mt-12 text-center">
              <router-link to="/artikel" class="inline-flex items-center text-[#195682] font-bold hover:text-[#f9ac42] transition-colors group">
                <svg class="w-5 h-5 mr-3 group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                {{ $t('articles.allNews') }}
              </router-link>
            </div>

          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import PageHeader from '../components/PageHeader.vue'
import { getArticleBySlug, getRelatedArticles, getLatestArticles } from '../composables/useArticles'
import { useArticleSchema, useBreadcrumbSchema, useItemListSchema } from '../composables/useSchema'
import { useLocale } from '../i18n'

const route = useRoute()
const { locale } = useLocale()
const props = defineProps({ preview: { type: Boolean, default: false } })
const article = ref(null)
const loading = ref(true)
const error = ref(false)
const isPreview = computed(() => props.preview || route.name === 'ArticlePreview')
const relatedArticles = computed(() => (article.value ? getRelatedArticles(article.value, 4) : []))
const latestArticles = computed(() => (article.value ? getLatestArticles(article.value.id, 4) : []))
const siteUrl = 'https://unidsoe.ac.id'

// SEO dinamis per artikel (meta Payload -> tag head)
useHead({
  title: () => article.value ? `${article.value.seoTitle || article.value.title} | Unidsoe - Universitas Dr. Soekardjo` : 'Berita & Artikel - Universitas Dr. Soekardjo',
  link: [
    {
      rel: 'canonical',
      href: () => article.value ? `${siteUrl}/artikel/${article.value.slug}` : `${siteUrl}${route.path}`,
    },
  ],
  meta: [
    {
      name: 'description',
      content: () => article.value?.seoDescription || article.value?.excerpt || 'Berita dan artikel terkini Universitas Dr. Soekardjo.'
    },
    {
      name: 'keywords',
      content: () => article.value?.tags?.length ? [...new Set([...article.value.tags, article.value.category])].join(', ') : article.value?.category || 'Berita'
    },
    // Open Graph
    {
      property: 'og:title',
      content: () => article.value?.seoTitle || article.value?.title || ''
    },
    {
      property: 'og:description',
      content: () => article.value?.seoDescription || article.value?.excerpt || ''
    },
    {
      property: 'og:image',
      content: () => article.value?.image || ''
    },
    {
      property: 'og:image:alt',
      content: () => article.value?.title || ''
    },
    {
      property: 'og:url',
      content: () => article.value ? `${siteUrl}/artikel/${article.value.slug}` : `${siteUrl}${route.path}`,
    },
    {
      property: 'og:type',
      content: 'article'
    },
    {
      property: 'og:site_name',
      content: 'Unidsoe - Universitas Dr. Soekardjo'
    },
    {
      property: 'og:locale',
      content: () => locale.value === 'en' ? 'en_US' : 'id_ID'
    },
    {
      property: 'article:published_time',
      content: () => article.value?.publishedDate || ''
    },
    {
      property: 'article:modified_time',
      content: () => article.value?.publishedDate || ''
    },
    {
      property: 'article:author',
      content: () => article.value?.author || 'Humas UNIDSOE'
    },
    {
      property: 'article:section',
      content: () => article.value?.category || ''
    },
    {
      property: 'article:tag',
      content: () => article.value?.tags?.join(', ') || ''
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: () => article.value?.seoTitle || article.value?.title || ''
    },
    {
      name: 'twitter:description',
      content: () => article.value?.seoDescription || article.value?.excerpt || ''
    },
    {
      name: 'twitter:image',
      content: () => article.value?.image || ''
    },
    {
      name: 'twitter:image:alt',
      content: () => article.value?.title || ''
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: () => {
        if (!article.value) return ''
        const base = useArticleSchema(article.value, `${siteUrl}${route.path}`)
        if (!base) return ''
        // perkaya Article: tambahkan mentions dari Baca Juga inline + related/latest untuk internal linking
        const inlineHrefs = (() => {
          try {
            const h = article.value.content || ''
            return [...h.matchAll(/href="\/artikel\/([^"]+)"/g)].map((m) => `${siteUrl}/artikel/${m[1]}`)
          } catch { return [] }
        })()
        const linkSet = new Set([...inlineHrefs, ...relatedArticles.value.map((a) => `${siteUrl}/artikel/${a.slug}`), ...latestArticles.value.map((a) => `${siteUrl}/artikel/${a.slug}`)])
        const links = [...linkSet].slice(0, 12)
        const enriched = {
          ...base,
          ...(links.length ? { mentions: links.map((u) => ({ '@type': 'Article', '@id': u, url: u })), relatedLink: links } : {}),
        }
        return JSON.stringify(enriched)
      },
    },
    {
      type: 'application/ld+json',
      innerHTML: () => {
        const c = article.value
        if (!c) return ''
        return JSON.stringify(useBreadcrumbSchema([
          { name: 'Beranda', url: `${siteUrl}/` },
          { name: 'Berita', url: `${siteUrl}/artikel` },
          { name: c.category || 'Berita', url: `${siteUrl}/artikel?kategori=${c.category_slug || ''}` },
          { name: c.title, url: `${siteUrl}/artikel/${c.slug}` },
        ]))
      },
    },
    {
      type: 'application/ld+json',
      innerHTML: () => {
        if (!relatedArticles.value.length) return ''
        return JSON.stringify(useItemListSchema(relatedArticles.value.map((a) => ({ name: a.title, url: `${siteUrl}/artikel/${a.slug}`, image: a.image })), `Artikel terkait: ${article.value?.title || ''}`))
      },
    },
    {
      type: 'application/ld+json',
      innerHTML: () => {
        if (!latestArticles.value.length) return ''
        return JSON.stringify(useItemListSchema(latestArticles.value.map((a) => ({ name: a.title, url: `${siteUrl}/artikel/${a.slug}`, image: a.image })), 'Berita terbaru UNIDSOE'))
      },
    },
  ],
})

const loadArticleDetail = async (slug) => {
  try {
    loading.value = true
    if (isPreview.value) {
      // Live preview: tarik DRAF langsung dari CMS (butuh login CMS di browser yang sama
      // atau secret yang sama di VITE_PREVIEW_SECRET)
      const cmsUrl = (import.meta.env.VITE_CMS_URL || 'http://127.0.0.1:3000').replace(/\/$/, '')
      const secret = import.meta.env.VITE_PREVIEW_SECRET || ''
      const res = await fetch(`${cmsUrl}/api/preview/${slug}?secret=${encodeURIComponent(secret)}`)
      if (!res.ok) throw new Error(`Preview gagal (HTTP ${res.status}) — pastikan sudah login CMS / secret benar`)
      const item = await res.json()
      article.value = {
        ...item,
        date: item.publishedDate
          ? new Date(item.publishedDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
          : '(draf — belum ada tanggal)',
        excerpt: item.excerpt || '',
      }
    } else {
      // Data lokal hasil prebuild Payload (tanpa fetch runtime)
      const found = getArticleBySlug(slug)
      if (!found) throw new Error('Not found')
      article.value = found
    }

    error.value = false
  } catch (err) {
    console.error('Error loading article detail:', err)
    error.value = true
  } finally {
    loading.value = false
  }
}

const share = (platform) => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent(article.value?.title || '')
  let shareUrl = ''
  
  if (platform === 'facebook') shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`
  if (platform === 'twitter') shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`
  if (platform === 'whatsapp') shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`
  
  window.open(shareUrl, '_blank')
}

// Initial fetch
onMounted(() => {
  loadArticleDetail(route.params.slug)
})

// Watch for slug changes (if user clicks related links)
watch(() => route.params.slug, (newSlug) => {
  if (newSlug) loadArticleDetail(newSlug)
})
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

/* Custom shadow to give premium feel */
.shadow-xl {
  shadow-box: 0 25px 50px -12px rgba(0, 0, 0, 0.08);
}

/* Optimize images inside article body content (from CMS v-html) */
:deep(.prose img) {
  display: block;
  max-width: 100%;
  max-height: 520px;
  width: auto;
  height: auto;
  object-fit: contain;
  margin-left: auto;
  margin-right: auto;
  border-radius: 16px;
  background-color: #f8fafc;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
}

/* Lebar gambar pilihan editor */
:deep(.payload-img-w-large img) {
  max-width: 860px;
}
:deep(.payload-img-w-medium img) {
  max-width: 640px;
}
:deep(.payload-img-w-small img) {
  max-width: 400px;
}

/* Perataan gambar pilihan editor */
:deep(.payload-img) {
  margin: 2rem auto;
}
:deep(.payload-img-center) {
  max-width: 860px;
}
:deep(.payload-img-left) {
  float: left;
  width: min(46%, 380px);
  margin: 0.5rem 1.5rem 1rem 0;
}
:deep(.payload-img-right) {
  float: right;
  width: min(46%, 380px);
  margin: 0.5rem 0 1rem 1.5rem;
}
:deep(.payload-img figcaption) {
  text-align: center;
  font-size: 0.85rem;
  color: #6b7280;
  margin-top: 0.5rem;
  font-style: italic;
}
@media (max-width: 640px) {
  :deep(.payload-img-left),
  :deep(.payload-img-right) {
    float: none;
    width: 100%;
    margin: 1.5rem auto;
  }
}

/* Blok Gambar CMS (perataan + lebar dari editor) */
:deep(.payload-img) {
  margin: 2rem auto;
}
/* Output TinyMCE: <figure class="image"><img><figcaption> + align kiri/kanan/tengah */
:deep(figure.image) {
  margin: 2rem auto;
  max-width: 100%;
}
:deep(figure.image img) {
  width: 100%;
  max-height: none;
}
:deep(figure.image figcaption),
:deep(figure figcaption) {
  text-align: center;
  font-size: 0.85rem;
  color: #6b7280;
  margin-top: 0.5rem;
  font-style: italic;
}
:deep(img.img-center) {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
:deep(img.img-float-left) {
  float: left;
  width: min(46%, 380px);
  margin: 0.5rem 1.5rem 1rem 0;
}
:deep(img.img-float-right) {
  float: right;
  width: min(46%, 380px);
  margin: 0.5rem 0 1rem 1.5rem;
}
@media (max-width: 640px) {
  :deep(img.img-float-left),
  :deep(img.img-float-right) {
    float: none;
    width: 100%;
    margin: 1.5rem auto;
  }
}
:deep(.payload-img img) {
  width: 100%;
  max-height: none;
}
:deep(.payload-img-center) {
  max-width: 860px;
}
:deep(.payload-img-w-large img) {
  max-width: 860px;
}
:deep(.payload-img-w-medium img) {
  max-width: 640px;
}
:deep(.payload-img-w-small img) {
  max-width: 400px;
}
:deep(.payload-img-left) {
  float: left;
  width: min(46%, 380px);
  margin: 0.5rem 1.5rem 1rem 0;
}
:deep(.payload-img-right) {
  float: right;
  width: min(46%, 380px);
  margin: 0.5rem 0 1rem 1.5rem;
}
:deep(.payload-img figcaption) {
  text-align: center;
  font-size: 0.85rem;
  color: #6b7280;
  margin-top: 0.5rem;
  font-style: italic;
}
@media (max-width: 640px) {
  :deep(img.img-float-left),
  :deep(img.img-float-right) {
    float: none;
    width: 100%;
    margin: 1.5rem auto;
  }
}

/* Ukuran editorial: kolom teks 680px tengah, visual full-bleed 896px (lebar kartu).
   Berlaku di halaman artikel + pratinjau (satu komponen). */
:deep(.article-body p),
:deep(.article-body h1),
:deep(.article-body h2),
:deep(.article-body h3),
:deep(.article-body h4),
:deep(.article-body ul),
:deep(.article-body ol),
:deep(.article-body blockquote),
:deep(.article-body pre),
:deep(.article-body hr) {
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
}
:deep(.article-body table) {
  max-width: 100%;
}
/* Figure (caption / gambar legacy) breakout selebar kartu */
:deep(.article-body figure:not(.payload-img-left):not(.payload-img-right)) {
  max-width: none;
  margin-left: -1.25rem;
  margin-right: -1.25rem;
}
@media (min-width: 768px) {
  :deep(.article-body figure:not(.payload-img-left):not(.payload-img-right)) {
    margin-left: -2rem;
    margin-right: -2rem;
  }
}

/* Baca Juga inline — blended dengan konten, cermin style editor */
:deep(.article-body .baca-juga) {
  box-sizing: border-box;
  max-width: 680px;
  margin: 1.25rem auto;
  padding: 10px 14px;
  border-left: 4px solid #f9ac42;
  background: #fffbeb;
  border-radius: 10px;
  display: flex;
  gap: 10px;
  align-items: baseline;
  font-size: 15px;
  line-height: 1.5;
}
:deep(.article-body .baca-juga__label) {
  flex: 0 0 auto;
  font-weight: 800;
  color: #92400e;
  font-size: 13px;
  letter-spacing: .04em;
  text-transform: uppercase;
}
:deep(.article-body .baca-juga a) {
  font-weight: 700;
  color: #195682;
  text-decoration: none;
}
:deep(.article-body .baca-juga a:hover) {
  text-decoration: underline;
}
:deep(.article-body .baca-juga--multi) {
  flex-direction: column;
  align-items: stretch;
  gap: 6px;
}
:deep(.article-body .baca-juga__list) {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
:deep(.article-body .baca-juga__list li) {
  position: relative;
  padding-left: 14px;
  line-height: 1.5;
}
:deep(.article-body .baca-juga__list li::before) {
  content: "•";
  position: absolute;
  left: 0;
  color: #f9ac42;
  font-weight: 900;
}
/* 3 blok lama yang sudah terlanjur insert berturut-turut: rapatkan jadi 1 grup visual */
:deep(.article-body .baca-juga + .baca-juga) {
  margin-top: -0.75rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: none;
  padding-top: 8px;
}

/* Box link Dokumen inline — cermin style editor (aksen biru, beda dari Baca Juga) */
:deep(.article-body .doc-link) {
  box-sizing: border-box;
  max-width: 680px;
  margin: 1.25rem auto;
  padding: 10px 14px;
  border-left: 4px solid #195682;
  background: #eff6ff;
  border-radius: 10px;
  display: flex;
  gap: 10px;
  align-items: baseline;
  font-size: 15px;
  line-height: 1.5;
}
:deep(.article-body .doc-link__label) {
  flex: 0 0 auto;
  font-weight: 800;
  color: #0b2b42;
  font-size: 13px;
  letter-spacing: .04em;
  text-transform: uppercase;
}
:deep(.article-body .doc-link a) {
  font-weight: 700;
  color: #195682;
  text-decoration: none;
}
:deep(.article-body .doc-link a:hover) {
  text-decoration: underline;
}
:deep(.article-body .doc-link--multi) {
  flex-direction: column;
  align-items: stretch;
  gap: 6px;
}
:deep(.article-body .doc-link__list) {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
:deep(.article-body .doc-link__list li) {
  position: relative;
  padding-left: 14px;
  line-height: 1.5;
}
:deep(.article-body .doc-link__list li::before) {
  content: "⬇";
  position: absolute;
  left: 0;
  color: #195682;
  font-weight: 900;
  font-size: 12px;
}
:deep(.article-body .doc-link + .doc-link) {
  margin-top: -0.75rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: none;
  padding-top: 8px;
}
</style>
