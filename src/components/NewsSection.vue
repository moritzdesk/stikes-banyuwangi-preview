<template>
  <section class="py-16 md:py-24 bg-gray-50 font-sans">
    <div class="container-custom">
      <!-- Section 1: Berita, Edukasi, Opini -->
      <div class="flex flex-col md:flex-row justify-between items-end mb-12">
        <div class="max-w-2xl">
          <h2 class="text-3xl md:text-4xl font-bold text-[#195682] mb-4 text-shadow-sm">
            Berita &amp; Artikel
          </h2>
          <p class="text-gray-600 text-lg">
            Kumpulan berita terkini, artikel edukasi, dan opini dari UNIDSOE.
          </p>
        </div>
        <router-link to="/artikel" class="hidden md:inline-flex items-center text-[#f9ac42] font-extrabold hover:text-orange-600 transition-colors mt-4 md:mt-0 uppercase tracking-widest text-xs">
          Semua Artikel
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </router-link>
      </div>

      <!-- Loading for Section 1 -->
      <div v-if="loading" class="grid md:grid-cols-3 gap-8 mb-20">
        <div v-for="i in 3" :key="i" class="bg-white rounded-2xl h-80 animate-pulse shadow-sm"></div>
      </div>

      <!-- Grid for Section 1: Berita, Edukasi, Opini -->
      <div v-else-if="blogNews.length > 0" class="grid md:grid-cols-3 gap-8 mb-20">
        <article v-for="(news, index) in blogNews" :key="index" class="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden border border-gray-100 flex flex-col h-full transform hover:-translate-y-2">
          <div class="relative h-56 overflow-hidden">
            <img :src="news.image" :alt="news.title" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
            <div class="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              {{ news.category }}
            </div>
          </div>
          <div class="p-8 flex-1 flex flex-col">
            <div v-if="globalSettings.articleSettings?.showPublishDate && news.date" class="text-[10px] text-gray-400 mb-4 font-bold uppercase tracking-widest flex items-center">
              <i class="far fa-calendar-alt mr-2 text-[#f9ac42]"></i>
              {{ news.date }}
            </div>
            <h3 class="text-lg font-bold text-[#0b2b42] mb-4 group-hover:text-[#195682] transition-colors leading-tight line-clamp-2">
              {{ news.title }}
            </h3>
            <p class="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
              {{ news.excerpt }}
            </p>
            <router-link :to="`/artikel/${news.slug}`" class="inline-flex items-center text-[#195682] font-bold text-sm hover:text-[#f9ac42] transition-colors mt-auto">
              Baca Selengkapnya
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </router-link>
          </div>
        </article>
      </div>

      <!-- Empty State for Section 1 -->
      <div v-else class="py-12 bg-gray-100/50 rounded-2xl text-center border-2 border-dashed border-gray-200 mb-20">
         <p class="text-gray-400 font-bold uppercase tracking-widest text-xs">Belum ada artikel terbaru</p>
      </div>

      <!-- Section 2: Prestasi, Pengumuman, Kegiatan -->
      <div class="flex flex-col md:flex-row justify-between items-end mb-12 pt-16 border-t border-gray-200">
        <div class="max-w-2xl">
          <h2 class="text-3xl md:text-4xl font-bold text-[#195682] mb-4 text-shadow-sm">
            Informasi Kampus
          </h2>
          <p class="text-gray-600 text-lg">
            Prestasi membanggakan, pengumuman penting, dan agenda kegiatan mahasiswa.
          </p>
        </div>
        <router-link to="/artikel" class="hidden md:inline-flex items-center text-[#f9ac42] font-extrabold hover:text-orange-600 transition-colors mt-4 md:mt-0 uppercase tracking-widest text-xs">
          Lihat Semua
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </router-link>
      </div>

      <!-- Loading for Section 2 -->
      <div v-if="loading" class="grid md:grid-cols-3 gap-8">
        <div v-for="i in 3" :key="i" class="bg-white rounded-2xl h-80 animate-pulse shadow-sm"></div>
      </div>

      <!-- Grid for Section 2: Informasi Kampus -->
      <div v-else-if="campusInfo.length > 0" class="grid md:grid-cols-3 gap-8">
        <article v-for="(info, index) in campusInfo" :key="index" class="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden border border-gray-100 flex flex-col h-full transform hover:-translate-y-2">
          <div class="relative h-56 overflow-hidden">
            <img :src="info.image" :alt="info.title" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
            <div class="absolute top-4 left-4 bg-[#f9ac42] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
              {{ info.category }}
            </div>
          </div>
          <div class="p-8 flex-1 flex flex-col">
            <div v-if="globalSettings.articleSettings?.showPublishDate && info.date" class="text-[10px] text-gray-400 mb-4 font-bold uppercase tracking-widest flex items-center">
              <i class="far fa-calendar-alt mr-2 text-[#195682]"></i>
              {{ info.date }}
            </div>
            <h3 class="text-lg font-bold text-[#0b2b42] mb-4 group-hover:text-[#195682] transition-colors leading-tight line-clamp-2">
              {{ info.title }}
            </h3>
            <p class="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
              {{ info.excerpt }}
            </p>
            <router-link :to="`/artikel/${info.slug}`" class="inline-flex items-center text-[#195682] font-bold text-sm hover:text-[#f9ac42] transition-colors mt-auto">
              Baca Selengkapnya
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </router-link>
          </div>
        </article>
      </div>

      <!-- Empty State for Section 2 -->
      <div v-else class="py-12 bg-gray-100/50 rounded-2xl text-center border-2 border-dashed border-gray-200">
         <p class="text-gray-400 font-bold uppercase tracking-widest text-xs">Belum ada berita prestasi, pengumuman, atau kegiatan</p>
      </div>

      <!-- Full Portal Button -->
      <div class="text-center mt-20">
        <router-link 
          to="/artikel" 
          class="inline-flex items-center px-10 py-5 bg-[#195682] text-white font-bold rounded-full hover:bg-black transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group"
        >
          Masuk ke Portal Berita & Pengumuman
          <svg class="w-6 h-6 ml-3 group-hover:translate-x-3 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getArticlesBySlugs } from '../composables/useArticles'

const blogNews = ref([])
const campusInfo = ref([])
const loading = ref(true)

const loadNews = async () => {
  try {
    loading.value = true
    // Data lokal hasil prebuild Payload (tanpa fetch runtime).
    // Section 1: Berita, Edukasi, Opini — Section 2: Prestasi, Pengumuman, Kegiatan
    blogNews.value = getArticlesBySlugs(['berita', 'edukasi', 'opini'], 3)
    campusInfo.value = getArticlesBySlugs(['prestasi', 'pengumuman', 'kegiatan'], 3)
  } catch (error) {
    console.error('Error loading news:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadNews()
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
