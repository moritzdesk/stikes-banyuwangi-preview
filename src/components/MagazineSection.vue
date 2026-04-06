<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="container-custom px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <span class="text-[#f9ac42] font-bold tracking-wider uppercase text-sm mb-2 block">Majalah Kampus</span>
        <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Majalah UNIDSOE
        </h2>
        <p class="text-gray-600 text-lg max-w-3xl mx-auto">
          Baca edisi terbaru majalah kampus kami yang penuh dengan artikel inspiratif, prestasi mahasiswa, dan informasi terkini
        </p>
      </div>

      <!-- Magazine Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div 
          v-for="magazine in magazines" 
          :key="magazine.id"
          @click="openMagazine(magazine)"
          class="group cursor-pointer"
        >
          <!-- Magazine Cover -->
          <div class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-[#195682] to-[#0b2b42]">
            <!-- Cover Image Placeholder -->
            <div class="aspect-[3/4] relative">
              <img 
                v-if="magazine.cover"
                :src="magazine.cover" 
                :alt="magazine.title"
                class="w-full h-full object-cover"
                @error="handleImageError"
              />
              <div v-else class="w-full h-full flex flex-col items-center justify-center text-white p-6">
                <svg class="w-16 h-16 mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
                <h3 class="text-lg font-bold text-center mb-2">{{ magazine.title }}</h3>
                <p class="text-sm opacity-80">{{ magazine.edition }}</p>
              </div>
              
              <!-- Hover Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <div class="text-white text-center">
                  <svg class="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                  </svg>
                  <p class="font-bold">Baca Majalah</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Magazine Info -->
          <div class="mt-4 text-center">
            <h4 class="font-bold text-gray-900 mb-1">{{ magazine.title }}</h4>
            <p class="text-sm text-gray-600">{{ magazine.edition }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ magazine.date }}</p>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <div class="text-center">
        <router-link 
          to="/artikel" 
          class="inline-flex items-center px-8 py-4 bg-[#195682] text-white font-bold rounded-full hover:bg-[#0b2b42] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 group"
        >
          Lihat Semua Majalah
          <svg class="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </router-link>
      </div>
    </div>

    <!-- Magazine Modal/Viewer -->
    <Teleport to="body">
      <div 
        v-if="selectedMagazine"
        @click="closeMagazine"
        class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
      >
        <div 
          @click.stop
          class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-scale-in"
        >
          <!-- Modal Header -->
          <div class="bg-[#195682] text-white p-6 flex justify-between items-center">
            <div>
              <h3 class="text-2xl font-bold">{{ selectedMagazine.title }}</h3>
              <p class="text-sm opacity-90">{{ selectedMagazine.edition }} - {{ selectedMagazine.date }}</p>
            </div>
            <button 
              @click="closeMagazine"
              class="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Modal Content -->
          <div class="p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
            <div class="text-center">
              <div class="bg-gradient-to-br from-[#195682] to-[#0b2b42] rounded-xl p-12 mb-6">
                <svg class="w-24 h-24 text-white mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
                <p class="text-white text-lg">Flipbook viewer akan ditampilkan di sini</p>
                <p class="text-white/70 text-sm mt-2">Integrasi dengan library flipbook seperti turn.js atau PDF.js</p>
              </div>

              <!-- Action Buttons -->
              <div class="flex gap-4 justify-center">
                <a 
                  :href="selectedMagazine.pdfUrl || '#'"
                  target="_blank"
                  class="inline-flex items-center px-6 py-3 bg-[#195682] text-white font-bold rounded-full hover:bg-[#0b2b42] transition-colors"
                >
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  Download PDF
                </a>
                <button 
                  @click="closeMagazine"
                  class="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-800 font-bold rounded-full hover:bg-gray-300 transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const selectedMagazine = ref(null)

const magazines = ref([
  {
    id: 1,
    title: 'UNIDSOE Magazine',
    edition: 'Edisi Januari 2025',
    date: 'Januari 2025',
    cover: null, // Placeholder - will be replaced with actual image
    pdfUrl: '/assets/magazines/unidsoe-jan-2025.pdf'
  },
  {
    id: 2,
    title: 'UNIDSOE Magazine',
    edition: 'Edisi Desember 2024',
    date: 'Desember 2024',
    cover: null,
    pdfUrl: '/assets/magazines/unidsoe-dec-2024.pdf'
  },
  {
    id: 3,
    title: 'UNIDSOE Magazine',
    edition: 'Edisi November 2024',
    date: 'November 2024',
    cover: null,
    pdfUrl: '/assets/magazines/unidsoe-nov-2024.pdf'
  },
  {
    id: 4,
    title: 'UNIDSOE Magazine',
    edition: 'Edisi Oktober 2024',
    date: 'Oktober 2024',
    cover: null,
    pdfUrl: '/assets/magazines/unidsoe-oct-2024.pdf'
  }
])

const openMagazine = (magazine) => {
  selectedMagazine.value = magazine
  document.body.style.overflow = 'hidden'
}

const closeMagazine = () => {
  selectedMagazine.value = null
  document.body.style.overflow = 'auto'
}

const handleImageError = (e) => {
  e.target.style.display = 'none'
}
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}

.animate-scale-in {
  animation: scaleIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
