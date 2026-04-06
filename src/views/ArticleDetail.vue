<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Loading State -->
    <div v-if="!article" class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p class="text-gray-600">Memuat artikel...</p>
      </div>
    </div>

    <!-- Article Content -->
    <div v-else>
      <!-- Schema Markup -->
      <SchemaMarkup v-if="articleSchema" :schema="articleSchema" />
      <SchemaMarkup v-if="breadcrumbSchema" :schema="breadcrumbSchema" />
      <!-- Event Schema untuk artikel dengan kategori SEMINAR/WORKSHOP -->
      <SchemaMarkup v-if="eventSchema" :schema="eventSchema" />
      
      <!-- Hero Image -->
      <div class="relative h-96 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center text-white px-4">
            <div class="mb-4">
              <span 
                :class="getCategoryColor(article.category)"
                class="px-4 py-2 rounded-full text-sm font-semibold text-white inline-block"
              >
                {{ article.category }}
              </span>
            </div>
            <h1 class="text-3xl md:text-5xl font-bold mb-4 max-w-4xl mx-auto">
              {{ article.title }}
            </h1>
            <div class="flex items-center justify-center space-x-6 text-blue-100">
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                </svg>
                {{ article.date }}
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                </svg>
                {{ article.author }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Article Body -->
      <article class="section-padding">
        <div class="container-custom">
          <div class="max-w-4xl mx-auto">
            <!-- Breadcrumbs -->
            <Breadcrumbs :items="breadcrumbItems" />
            
            <!-- Back Button -->
            <router-link 
              to="/artikel"
              class="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-8 group"
            >
              <svg class="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Kembali ke Daftar Artikel
            </router-link>

            <!-- Article Content -->
            <div class="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div 
                class="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:text-gray-700 prose-li:text-gray-700"
                v-html="article.content"
              ></div>

              <!-- Tags -->
              <div class="mt-12 pt-8 border-t border-gray-200">
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tag in article.tags"
                    :key="tag"
                    class="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold"
                  >
                    #{{ tag }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Related Articles -->
            <div class="mt-16">
              <h2 class="text-3xl font-bold text-gray-900 mb-8">Artikel Terkait</h2>
              <div class="grid md:grid-cols-3 gap-6">
                <article 
                  v-for="relatedArticle in relatedArticles"
                  :key="relatedArticle.id"
                  class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div class="relative h-40 bg-gradient-to-br from-blue-600 to-purple-600">
                    <div class="absolute top-4 left-4">
                      <span 
                        :class="getCategoryColor(relatedArticle.category)"
                        class="px-3 py-1 rounded-full text-xs font-semibold text-white"
                      >
                        {{ relatedArticle.category }}
                      </span>
                    </div>
                  </div>
                  <div class="p-6">
                    <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {{ relatedArticle.title }}
                    </h3>
                    <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                      {{ relatedArticle.excerpt }}
                    </p>
                    <router-link 
                      :to="`/artikel/${relatedArticle.id}`"
                      class="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center group/link"
                    >
                      Baca Selengkapnya
                      <svg class="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </router-link>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getArticleById, articles } from '../data/articles'
import SchemaMarkup from '../components/SchemaMarkup.vue'
import Breadcrumbs from '../components/Breadcrumbs.vue'
import { useSEO } from '../composables/useSEO'
import { useArticleSchema, useBreadcrumbSchema, useEventSchema } from '../composables/useSchema'

const route = useRoute()
const articleId = computed(() => parseInt(route.params.id))
const article = computed(() => getArticleById(articleId.value))

// SEO Meta Tags
useSEO({
  title: article.value ? article.value.title : 'Artikel - Unidsoe',
  description: article.value ? article.value.excerpt : 'Baca artikel lengkap dari Unidsoe (Universitas Dr. Soekardjo)',
  type: 'article',
  image: article.value?.image,
  keywords: article.value?.tags || []
})

// Schema Markup
const articleSchema = computed(() => useArticleSchema(article.value))
const breadcrumbSchema = computed(() => {
  if (!article.value) return null
  return useBreadcrumbSchema([
    { name: 'Beranda', url: 'https://unidsoe.ac.id/' },
    { name: 'Artikel', url: 'https://unidsoe.ac.id/artikel' },
    { name: article.value.title, url: `https://unidsoe.ac.id${route.path}` }
  ])
})

// Event Schema untuk artikel dengan kategori SEMINAR/WORKSHOP
const eventSchema = computed(() => {
  if (!article.value) return null
  const eventCategories = ['SEMINAR', 'WORKSHOP', 'KEGIATAN']
  if (eventCategories.includes(article.value.category)) {
    return useEventSchema({
      name: article.value.title,
      description: article.value.excerpt,
      startDate: article.value.date,
      endDate: article.value.date,
      image: article.value.image,
      location: {
        name: 'Unidsoe',
        address: 'Jl. Letkol Istiqlah No. 109',
        city: 'Singojuruh',
        region: 'Banyuwangi',
        postalCode: '68464'
      }
    })
  }
  return null
})

// Breadcrumbs
const breadcrumbItems = computed(() => [
  { label: 'Beranda', to: '/' },
  { label: 'Artikel', to: '/artikel' },
  ...(article.value ? [{ label: article.value.title, to: route.path }] : [])
])

const relatedArticles = computed(() => {
  if (!article.value) return []
  return articles
    .filter(a => a.id !== article.value.id && a.category === article.value.category)
    .slice(0, 3)
})

const getCategoryColor = (category) => {
  const colors = {
    'PRESTASI': 'bg-green-500',
    'KEGIATAN': 'bg-blue-500',
    'WORKSHOP': 'bg-purple-500',
    'PENGUMUMAN': 'bg-yellow-500',
    'SEMINAR': 'bg-pink-500'
  }
  return colors[category] || 'bg-gray-500'
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

