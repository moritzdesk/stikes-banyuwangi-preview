<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Schema Markup -->
    <SchemaMarkup :schema="breadcrumbSchema" />
    
    <!-- Header Section -->
    <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div class="container-custom">
        <div class="text-center">
          <div class="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-full mb-6">
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            BERITA & ARTIKEL
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Informasi Terkini & Prestasi Membanggakan
          </h1>
          <p class="text-xl text-blue-100 max-w-3xl mx-auto">
            Dapatkan informasi terbaru tentang prestasi, kegiatan, penelitian, dan pengumuman penting 
            dari civitas akademika Unidsoe (Universitas Dr. Soekardjo)
          </p>
        </div>
      </div>
    </div>

    <!-- Articles Section -->
    <section class="section-padding">
      <div class="container-custom">
        <!-- Breadcrumbs -->
        <Breadcrumbs :items="breadcrumbItems" />
        <!-- Filter Categories -->
        <div class="flex flex-wrap gap-3 mb-12 justify-center">
          <button 
            @click="selectedCategory = 'all'"
            :class="selectedCategory === 'all' 
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
              : 'bg-white text-gray-700 hover:bg-gray-100'"
            class="px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg"
          >
            Semua
          </button>
          <button 
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="selectedCategory === category 
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
              : 'bg-white text-gray-700 hover:bg-gray-100'"
            class="px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg"
          >
            {{ category }}
          </button>
        </div>

        <!-- Articles Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="article in filteredArticles"
            :key="article.id"
            class="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2"
          >
            <!-- Article Image -->
            <div class="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
              <div class="absolute top-4 left-4">
                <span 
                  :class="getCategoryColor(article.category)"
                  class="px-3 py-1 rounded-full text-sm font-semibold text-white"
                >
                  {{ article.category }}
                </span>
              </div>
            </div>
            
            <!-- Article Content -->
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-3">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                </svg>
                {{ article.date }}
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                {{ article.title }}
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                {{ article.excerpt }}
              </p>
              <div class="flex items-center justify-between">
                <div class="flex items-center text-blue-600 font-semibold text-sm">
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                  </svg>
                  {{ article.author }}
                </div>
                <router-link 
                  :to="`/artikel/${article.id}`"
                  class="text-blue-600 hover:text-blue-700 font-semibold flex items-center group"
                >
                  Baca Selengkapnya
                  <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </router-link>
              </div>
            </div>
          </article>
        </div>

        <!-- Empty State -->
        <div v-if="filteredArticles.length === 0" class="text-center py-16">
          <svg class="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          <p class="text-gray-500 text-lg">Tidak ada artikel dalam kategori ini</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { articles } from '../data/articles'
import SchemaMarkup from '../components/SchemaMarkup.vue'
import Breadcrumbs from '../components/Breadcrumbs.vue'
import { useSEO } from '../composables/useSEO'
import { useBreadcrumbSchema } from '../composables/useSchema'

// SEO Meta Tags
useSEO({
  title: 'Berita & Artikel - Unidsoe',
  description: 'Dapatkan informasi terbaru tentang prestasi, kegiatan, penelitian, dan pengumuman penting dari civitas akademika Unidsoe (Universitas Dr. Soekardjo)',
  type: 'website'
})

// Breadcrumbs
const breadcrumbItems = [
  { label: 'Beranda', to: '/' },
  { label: 'Artikel', to: '/artikel' }
]

const breadcrumbSchema = useBreadcrumbSchema([
  { name: 'Beranda', url: 'https://unidsoe.ac.id/' },
  { name: 'Artikel', url: 'https://unidsoe.ac.id/artikel' }
])

const selectedCategory = ref('all')

const categories = computed(() => {
  const cats = [...new Set(articles.map(article => article.category))]
  return cats.sort()
})

const filteredArticles = computed(() => {
  if (selectedCategory.value === 'all') {
    return articles
  }
  return articles.filter(article => article.category === selectedCategory.value)
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
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

