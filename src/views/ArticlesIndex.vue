<template>
  <div class="min-h-screen bg-gray-50">
    <PageHeader 
      title="Berita & Artikel" 
      :breadcrumbs="[{ label: 'Artikel' }]"
      bgImage="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    />

    <section class="py-16">
      <div class="container-custom">
        <!-- Filter Categories -->
        <div class="flex flex-wrap gap-3 mb-12 justify-center">
          <button 
            @click="selectedCategory = 'all'"
            :class="selectedCategory === 'all' 
              ? 'bg-[#195682] text-white shadow-lg' 
              : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'"
            class="px-8 py-3 rounded-full font-bold transition-all duration-300"
          >
            Semua
          </button>
          <button 
            v-for="category in categories"
            :key="category.slug"
            @click="selectedCategory = category.slug"
            :class="selectedCategory === category.slug 
              ? 'bg-[#f9ac42] text-white shadow-lg' 
              : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'"
            class="px-8 py-3 rounded-full font-bold transition-all duration-300 uppercase text-xs tracking-wider"
          >
            {{ category.name }}
          </button>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="i in 6" :key="i" class="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 animate-pulse">
            <div class="bg-gray-200 h-48 rounded-2xl mb-4"></div>
            <div class="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div class="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div class="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>

        <!-- Articles Grid -->
        <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="article in filteredArticles"
            :key="article.slug"
            class="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 border border-gray-100 flex flex-col h-full"
          >
            <!-- Article Image -->
            <div class="relative h-56 overflow-hidden">
              <img :src="article.image" :alt="article.title" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div class="absolute top-4 left-4">
                <span class="px-4 py-1.5 bg-[#f9ac42] text-white text-[10px] font-bold rounded-full uppercase tracking-widest shadow-sm">
                  {{ article.category }}
                </span>
              </div>
            </div>
            
            <!-- Article Content -->
            <div class="p-6 flex-1 flex flex-col">
              <div class="flex items-center text-sm text-gray-400 mb-4 font-medium">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                {{ article.date }}
              </div>
              <h3 class="text-xl font-bold text-[#0b2b42] mb-4 group-hover:text-[#195682] transition-colors line-clamp-2 leading-tight">
                {{ article.title }}
              </h3>
              <p class="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                {{ article.excerpt }}
              </p>
              
              <div class="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                <span class="text-xs font-bold text-[#195682] uppercase tracking-wider">{{ article.author }}</span>
                <router-link 
                  :to="`/artikel/${article.slug}`"
                  class="text-[#f9ac42] hover:text-orange-600 font-bold text-sm flex items-center group/link"
                >
                  Baca
                  <svg class="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </router-link>
              </div>
            </div>
          </article>
        </div>

        <!-- Empty State -->
        <div v-if="!loading && filteredArticles.length === 0" class="text-center py-20">
          <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 2v6h6"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Belum Ada Artikel</h3>
          <p class="text-gray-500">Tidak ada artikel di kategori ini untuk saat ini.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import { useSEO } from '../composables/useSEO'

// SEO Meta Tags
useSEO({
  title: 'Berita & Artikel Terkini - Universitas Dr. Soekardjo',
  description: 'Dapatkan informasi terbaru mengenai kegiatan kampus, prestasi mahasiswa, jurnal penelitian, dan pengumuman resmi dari Universitas Dr. Soekardjo Banyuwangi.',
  type: 'website'
})

const articles = ref([])
const categories = ref([])
const selectedCategory = ref('all')
const loading = ref(true)

const fetchArticles = async () => {
  try {
    const response = await fetch('https://app-semesta.sclstudio.id/api/7484760816345a2673df2eb6c36eca74/categories/all/articles')
    const data = await response.json()
    // Correct mapping for Semesta API structure
    articles.value = (data.data || []).map(item => ({
      title: item.title,
      slug: item.slug,
      date: item.publish_date ? new Date(item.publish_date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : '',
      image: item.image_path || item.large_image_path,
      excerpt: item.description,
      category: item.category?.name || 'Berita',
      category_slug: item.category?.slug || '',
      author: item.created_by?.name || 'Humas UNIDSOE'
    }))
  } catch (error) {
    console.error('Error fetching articles:', error)
  }
}

const fetchCategories = async () => {
  try {
    const response = await fetch('https://app-semesta.sclstudio.id/api/7484760816345a2673df2eb6c36eca74/categories')
    const data = await response.json()
    categories.value = data.data || []
  } catch (error) {
    console.error('Error fetching categories:', error)
  }
}

onMounted(async () => {
  loading.value = true
  await Promise.all([fetchArticles(), fetchCategories()])
  loading.value = false
})

const filteredArticles = computed(() => {
  if (selectedCategory.value === 'all') {
    return articles.value
  }
  return articles.value.filter(article => article.category_slug === selectedCategory.value)
})
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

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
