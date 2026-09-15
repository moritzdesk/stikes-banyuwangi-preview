<template>
  <section class="py-12 bg-white font-sans overflow-hidden">
    <div class="container-custom max-w-[1400px] mx-auto px-4">
      
      <!-- Loading State -->
      <div v-if="loading" class="h-[600px] bg-gray-100 animate-pulse rounded-2xl flex items-center justify-center">
         <p class="text-gray-400 font-bold uppercase tracking-widest text-xs">{{ $t('home.news.loadingHighlight') }}</p>
      </div>

      <!-- Outer wrapper -->
      <div v-else-if="allNews.length > 0" class="relative">
        <!-- 1 artikel: full-bleed -->
        <div v-if="allNews.length === 1 && featuredNews" class="relative overflow-hidden rounded-2xl bg-gray-900 aspect-[21/9]">
          <img
            :src="featuredNews.image"
            :alt="featuredNews.title"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div class="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-[#f9ac42] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest shadow-lg">HIGHLIGHT</span>
              <span v-if="featuredNews.category" class="bg-black/60 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest border border-white/30">{{ featuredNews.category }}</span>
            </div>
            <router-link :to="`/artikel/${featuredNews.slug}`" class="block">
              <h2 class="font-bold text-white mb-4 leading-tight text-3xl md:text-5xl hover:text-[#f9ac42] transition-colors cursor-pointer">
                {{ featuredNews.title }}
              </h2>
            </router-link>
            <div class="flex items-center text-gray-300 text-sm space-x-4 mb-4 font-bold uppercase tracking-widest text-[10px]">
              <span class="flex items-center"><i class="far fa-user mr-2 text-xs"></i> HUMAS UNIDSOE</span>
              <span class="flex items-center"><i class="far fa-clock mr-2 text-xs"></i> {{ featuredNews.date }}</span>
            </div>
            <p v-if="featuredNews.excerpt" class="text-gray-300 text-sm md:text-base line-clamp-2 max-w-3xl hidden md:block leading-relaxed">
              {{ featuredNews.excerpt }}
            </p>
          </div>
        </div>

        <!-- 2+: lead besar + list bernomor -->
        <div v-else class="grid lg:grid-cols-3 gap-6">
          <!-- Lead -->
          <router-link
            v-if="featuredNews"
            :to="`/artikel/${featuredNews.slug}`"
            class="lg:col-span-2 group relative overflow-hidden rounded-2xl bg-gray-900 min-h-[380px] lg:min-h-[520px] block"
          >
            <img
              :src="featuredNews.image"
              :alt="featuredNews.title"
              class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
            <div class="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-[#f9ac42] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest shadow-lg">HIGHLIGHT</span>
                <span v-if="featuredNews.category" class="bg-black/60 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest border border-white/30">{{ featuredNews.category }}</span>
              </div>
              <h2 class="font-bold text-white mb-4 leading-tight text-2xl md:text-4xl group-hover:text-[#f9ac42] transition-colors">
                {{ featuredNews.title }}
              </h2>
              <div class="flex items-center text-gray-300 text-sm space-x-4 mb-4 font-bold uppercase tracking-widest text-[10px]">
                <span class="flex items-center"><i class="far fa-user mr-2 text-xs"></i> HUMAS UNIDSOE</span>
                <span class="flex items-center"><i class="far fa-clock mr-2 text-xs"></i> {{ featuredNews.date }}</span>
              </div>
              <p v-if="featuredNews.excerpt" class="text-gray-300 text-sm md:text-base line-clamp-2 max-w-3xl hidden md:block leading-relaxed">
                {{ featuredNews.excerpt }}
              </p>
            </div>
          </router-link>

          <!-- List bernomor -->
          <div class="flex flex-col rounded-2xl border border-gray-100 bg-gray-50/60 overflow-hidden">
            <div class="px-6 pt-5 pb-3 text-[11px] font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100">
              {{ $t('home.news.otherHighlights') }}
            </div>
            <div class="flex-1 divide-y divide-gray-100 overflow-y-auto max-h-[420px] lg:max-h-none">
              <router-link
                v-for="(item, index) in smallNewsItems"
                :key="item.slug"
                :to="`/artikel/${item.slug}`"
                class="group flex gap-4 p-5 hover:bg-white transition-colors"
              >
                <span class="text-2xl font-black text-gray-200 group-hover:text-[#f9ac42] transition-colors leading-none pt-0.5">
                  {{ String(index + 2).padStart(2, '0') }}
                </span>
                <span class="flex-1 min-w-0">
                  <span v-if="item.category" class="inline-block text-[9px] font-bold uppercase tracking-widest text-[#195682] bg-blue-50 px-2 py-0.5 rounded-full mb-2">
                    {{ item.category }}
                  </span>
                  <span class="block font-bold text-gray-900 text-[15px] leading-snug group-hover:text-[#195682] transition-colors line-clamp-2">
                    {{ item.title }}
                  </span>
                  <span class="mt-1.5 flex items-center text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    <i class="far fa-clock mr-1.5"></i> {{ item.date }}
                  </span>
                </span>
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                  loading="lazy"
                />
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="h-[400px] flex flex-col items-center justify-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
         <svg class="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z"></path>
         </svg>
          <p class="text-gray-400 font-bold">{{ $t('home.news.empty') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { getArticlesBySlugs } from '../composables/useArticles'

const allNews = ref([])
const loading = ref(true)

const loadHighlightNews = async () => {
  try {
    loading.value = true
    // Data lokal hasil prebuild Payload (tanpa fetch runtime).
    // Hanya kategori 'highlight'
    allNews.value = getArticlesBySlugs(['highlight'], 20)
  } catch (error) {
    console.error('Error loading highlight news:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadHighlightNews()
})

const displayedNews = computed(() => {
  if (allNews.value.length === 0) return []
  // Lead + maksimal 4 pendamping (list bernomor, tanpa slider)
  return allNews.value.slice(0, 5)
})

const featuredNews = computed(() => displayedNews.value[0])
const smallNewsItems = computed(() => displayedNews.value.slice(1))
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

.container-custom {
  @apply max-w-7xl mx-auto;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
