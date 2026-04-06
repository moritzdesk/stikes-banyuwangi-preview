<template>
  <section class="py-12 bg-white font-sans overflow-hidden">
    <div class="container-custom max-w-[1400px] mx-auto px-4">
      <!-- Outer wrapper for arrows -->
      <div class="relative group">
        <!-- Grid Layout: 1 Large Left, Grid of 4 Right -->
        <div class="flex flex-col lg:flex-row gap-2 h-auto lg:h-[600px]">
          
          <!-- Large Featured Article (Left) -->
          <div class="w-full lg:w-[60%] relative overflow-hidden rounded-sm lg:rounded-none bg-gray-900">
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
                <span class="bg-black/60 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest border border-white/30 truncate">Berita Kegiatan</span>
                <span class="bg-black/60 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest border border-white/30">Pilihan</span>
              </div>
              <Transition name="slide-fade" mode="out-in">
                <div :key="featuredNews.title">
                  <router-link to="/artikel" class="block">
                    <h2 class="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight hover:text-blue-300 transition-colors cursor-pointer">
                      {{ featuredNews.title }}
                    </h2>
                  </router-link>
                  <div class="flex items-center text-gray-300 text-sm space-x-4 mb-4">
                    <span class="flex items-center"><i class="far fa-user mr-2 text-xs"></i> Humas</span>
                    <span class="flex items-center"><i class="far fa-clock mr-2 text-xs"></i> {{ featuredNews.date }}</span>
                  </div>
                  <p v-if="featuredNews.excerpt" class="text-gray-300 text-sm md:text-base line-clamp-2 max-w-3xl hidden md:block">
                    {{ featuredNews.excerpt }}
                  </p>
                </div>
              </Transition>
            </div>
          </div>

          <!-- Grid of 4 Smaller Articles (Right) -->
          <div class="w-full lg:w-[40%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 h-full">
            <div 
              v-for="(item, index) in smallNewsItems" 
              :key="item.title"
              class="relative overflow-hidden aspect-[16/10] lg:aspect-auto bg-gray-900"
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
                  <span class="bg-black/60 text-white text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-widest border border-white/20">Berita Kegiatan</span>
                  <span class="bg-black/60 text-white text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-widest border border-white/20">Pilihan</span>
                </div>
                <router-link to="/artikel" class="block mb-2">
                  <h3 class="text-white font-bold text-sm lg:text-base leading-snug hover:text-blue-300 transition-colors line-clamp-2 cursor-pointer">
                    {{ item.title }}
                  </h3>
                </router-link>
                <div class="flex items-center text-gray-400 text-[10px] space-x-3">
                  <span class="flex items-center"><i class="far fa-user mr-1 text-[8px]"></i> Humas</span>
                  <span class="flex items-center"><i class="far fa-clock mr-1 text-[8px]"></i> {{ item.date }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Slider Arrows - Truly Centered Vertically and positioned on far edges -->
        <button 
          @click="prevSlide"
          class="absolute left-2 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 lg:w-12 lg:h-12 bg-black/60 text-white flex items-center justify-center rounded-sm hover:bg-black/90 transition-all opacity-0 group-hover:opacity-100 shadow-xl border border-white/10"
          aria-label="Previous News"
        >
          <svg class="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>

        <button 
          @click="nextSlide"
          class="absolute right-2 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 lg:w-12 lg:h-12 bg-black/60 text-white flex items-center justify-center rounded-sm hover:bg-black/90 transition-all opacity-0 group-hover:opacity-100 shadow-xl border border-white/10"
          aria-label="Next News"
        >
          <svg class="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const startIndex = ref(0)

const allNews = [
  {
    title: "Visi Al-Qur'an Menjawab Tantangan Zaman: Refleksi Akademik di Universitas Dr. Soekardjo Banyuwangi",
    date: "9 Desember 2025",
    image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1200",
    excerpt: "Seminar nasional yang membahas integrasi nilai-nilai spiritual dalam pendidikan kesehatan modern untuk mencetak tenaga medis yang berintegritas."
  },
  {
    title: "International Day 2025: Tegaskan Komitmen sebagai Kampus Global dan Inklusif",
    date: "5 Desember 2025",
    image: "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Perayaan budaya internasional yang menyatukan mahasiswa dari berbagai latar belakang untuk memperkuat visi kampus berwawasan global."
  },
  {
    title: "Semarak Milad Ke-24 FK UII Melalui Donor Darah Peduli Sesama",
    date: "4 Desember 2025",
    image: "https://images.pexels.com/photos/6812480/pexels-photo-6812480.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Aksi kemanusiaan sebagai bentuk syukur atas bertambahnya usia institusi, melibatkan seluruh sivitas akademika dan masyarakat."
  },
  {
    title: "FBE UII Berbagi dengan Hati: Bakti Sosial Mahasiswa di Pelosok Desa",
    date: "1 Desember 2025",
    image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Mahasiswa turun tangan langsung membantu masyarakat kurang mampu melalui pembagian sembako dan penyuluhan kesehatan dasar."
  },
  {
    title: "UII Dorong Integrasi Pendidikan Islam dan Teknologi di Student Symposium 2025",
    date: "30 November 2025",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Pertemuan mahasiswa berprestasi untuk merumuskan masa depan pendidikan yang selaras dengan kemajuan teknologi dan nilai keimanan."
  },
  {
    title: "Inovasi Alat Deteksi Dini Stunting Mahasiwa Universitas Dr. Soekardjo Banyuwangi Raih Penghargaan",
    date: "25 November 2025",
    image: "https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Gagasan kreatif dalam bidang teknologi kesehatan berhasil memenangkan kompetisi inovasi tingkat wilayah."
  }
]

const displayedNews = computed(() => {
  const items = []
  for (let i = 0; i < 5; i++) {
    items.push(allNews[(startIndex.value + i) % allNews.length])
  }
  return items
})

const featuredNews = computed(() => displayedNews.value[0])
const smallNewsItems = computed(() => displayedNews.value.slice(1))

const nextSlide = () => {
  startIndex.value = (startIndex.value + 1) % allNews.length
}

const prevSlide = () => {
  startIndex.value = (startIndex.value - 1 + allNews.length) % allNews.length
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
