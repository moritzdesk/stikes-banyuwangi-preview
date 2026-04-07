<template>
  <section class="py-12 bg-white font-sans overflow-hidden">
    <div class="container-custom max-w-[1400px] mx-auto px-4">
      
      <!-- Loading State -->
      <div v-if="loading" class="h-[600px] bg-gray-100 animate-pulse rounded-2xl flex items-center justify-center">
         <p class="text-gray-400 font-bold uppercase tracking-widest text-xs">Memuat Highlight...</p>
      </div>

      <!-- Outer wrapper -->
      <div v-else-if="allNews.length > 0" class="relative group">
        <!-- Dynamic Layout wrapper -->
        <div 
          class="flex flex-col lg:flex-row gap-2 h-auto"
          :class="[allNews.length >= 5 ? 'lg:h-[600px]' : 'lg:h-auto']"
        >
          
          <!-- Large Featured Article (Left) -->
          <div 
            v-if="featuredNews" 
            class="relative overflow-hidden rounded-sm lg:rounded-none bg-gray-900 transition-all duration-500"
            :class="[allNews.length === 1 ? 'w-full aspect-[21/9]' : 'w-full lg:w-[60%] h-[400px] lg:h-full']"
          >
            <Transition name="fade" mode="out-in">
              <div :key="featuredNews.title" class="absolute inset-0">
                <img 
                  :src="featuredNews.image" 
                  :alt="featuredNews.title" 
                  class="w-full h-full object-cover transition-transform duration-[10000ms] hover:scale-110"
                />
              </div>
            </Transition>
            
            <!-- Dark Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            <!-- Content -->
            <div class="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-[#f9ac42] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest truncate shadow-lg">HIGHLIGHT</span>
                <span v-if="featuredNews.category" class="bg-black/60 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest border border-white/30">{{ featuredNews.category }}</span>
              </div>
              <Transition name="slide-fade" mode="out-in">
                <div :key="featuredNews.title">
                  <router-link :to="`/artikel/${featuredNews.slug}`" class="block">
                    <h2 
                      class="font-bold text-white mb-4 leading-tight hover:text-[#f9ac42] transition-colors cursor-pointer"
                      :class="[allNews.length === 1 ? 'text-3xl md:text-5xl lg:text-6xl' : 'text-2xl md:text-4xl']"
                    >
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
              </Transition>
            </div>
          </div>

          <!-- Grid of Smaller Articles (Right) - Only if more than 1 article -->
          <div 
            v-if="allNews.length > 1"
            class="grid gap-2"
            :class="[
              allNews.length >= 5 ? 'w-full lg:w-[40%] grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-full' : 'w-full lg:w-[40%] grid-cols-1'
            ]"
          >
            <div 
              v-for="(item, index) in smallNewsItems" 
              :key="item.title"
              class="relative overflow-hidden bg-gray-900"
              :class="[allNews.length >= 5 ? 'aspect-[16/10] lg:aspect-auto' : 'h-[200px] lg:flex-1']"
            >
              <Transition name="fade" mode="out-in">
                <div :key="item.title" class="absolute inset-0">
                  <img 
                    :src="item.image" 
                    :alt="item.title" 
                    class="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </Transition>
              
              <!-- Dark Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              
              <!-- Content -->
              <div class="absolute inset-0 p-4 flex flex-col justify-end">
                <div class="flex gap-2 mb-2">
                  <span class="bg-black/60 text-white text-[8px] font-bold px-1.5 py-0.5 uppercase tracking-widest border border-white/20">{{ item.category || 'Berita' }}</span>
                </div>
                <router-link :to="`/artikel/${item.slug}`" class="block mb-2">
                  <h3 class="text-white font-bold text-sm lg:text-base leading-snug hover:text-[#f9ac42] transition-colors line-clamp-2 cursor-pointer">
                    {{ item.title }}
                  </h3>
                </router-link>
                <div class="flex items-center text-gray-400 text-[10px] space-x-3 font-bold uppercase tracking-widest text-[8px]">
                  <span class="flex items-center"><i class="far fa-clock mr-1"></i> {{ item.date }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Slider Arrows - Only if more than 5 articles -->
        <template v-if="allNews.length > 5">
          <button 
            @click="prevSlide"
            class="absolute left-2 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 lg:w-12 lg:h-12 bg-black/60 text-white flex items-center justify-center rounded-sm hover:bg-[#f9ac42] transition-all opacity-0 group-hover:opacity-100 shadow-xl border border-white/10"
            aria-label="Previous News"
          >
            <svg class="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>

          <button 
            @click="nextSlide"
            class="absolute right-2 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 lg:w-12 lg:h-12 bg-black/60 text-white flex items-center justify-center rounded-sm hover:bg-[#f9ac42] transition-all opacity-0 group-hover:opacity-100 shadow-xl border border-white/10"
            aria-label="Next News"
          >
            <svg class="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </template>
      </div>

      <!-- Empty State -->
      <div v-else class="h-[400px] flex flex-col items-center justify-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
         <svg class="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z"></path>
         </svg>
         <p class="text-gray-400 font-bold">Belum ada artikel sorotan (highlight)</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const startIndex = ref(0)
const allNews = ref([])
const loading = ref(true)

const fetchHighlightNews = async () => {
  try {
    loading.value = true
    const response = await fetch('https://app-semesta.sclstudio.id/api/7484760816345a2673df2eb6c36eca74/categories/all/articles')
    const data = await response.json()
    const articles = data.data || []
    
    // Filter only those with 'highlight' category slug
    allNews.value = articles
      .filter(item => item.category?.slug === 'highlight')
      .map(item => ({
        title: item.title,
        slug: item.slug,
        date: item.publish_date ? new Date(item.publish_date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : '',
        image: item.image_path || item.large_image_path,
        excerpt: item.description,
        category: item.category?.name || 'Berita'
      }))
  } catch (error) {
    console.error('Error fetching highlight news:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchHighlightNews()
})

const displayedNews = computed(() => {
  if (allNews.value.length === 0) return []
  const items = []
  
  // Dynamic number of items to display based on availability
  // If we have less than 5, show all available ones once (no duplicates)
  if (allNews.value.length < 5) {
    return allNews.value
  }

  // If 5 or more, use the sliding logic
  for (let i = 0; i < 5; i++) {
    items.push(allNews.value[(startIndex.value + i) % allNews.value.length])
  }
  return items
})

const featuredNews = computed(() => displayedNews.value[0])
const smallNewsItems = computed(() => displayedNews.value.slice(1))

const nextSlide = () => {
  if (allNews.value.length > 5) {
    startIndex.value = (startIndex.value + 1) % allNews.value.length
  }
}

const prevSlide = () => {
  if (allNews.value.length > 5) {
    startIndex.value = (startIndex.value - 1 + allNews.value.length) % allNews.value.length
  }
}
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
