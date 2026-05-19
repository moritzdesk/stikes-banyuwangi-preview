<template>
  <div class="min-h-screen bg-gray-50 pt-24 pb-16">
    <!-- Hero Banner Section -->
    <div class="relative bg-gradient-to-br from-[#0b2b42] via-[#123e5e] to-[#195682] text-white py-16 md:py-24 overflow-hidden mb-12">
      <!-- Background Shapes -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div class="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#f9ac42] blur-3xl"></div>
      </div>
      
      <div class="container-custom px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <!-- Breadcrumbs -->
        <nav class="flex mb-6 text-sm text-gray-300 font-medium">
          <router-link to="/" class="hover:text-white transition-colors">Beranda</router-link>
          <span class="mx-2">/</span>
          <span class="text-[#f9ac42]">Majalah Kampus</span>
        </nav>
        
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          {{ initialMagazines.title || 'Majalah Kampus' }}
        </h1>
        <p class="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
          {{ initialMagazines.subtitle || 'Kumpulan edisi majalah dan tabloid kampus resmi.' }}
        </p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container-custom px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <!-- Search & Filters -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <!-- Search Input -->
        <div class="relative w-full md:w-96">
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Cari edisi majalah..."
            class="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#195682] focus:border-[#195682] transition-all"
          />
          <span class="absolute left-4 top-3.5 text-gray-400">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </span>
        </div>

        <!-- Filter / Stats Info -->
        <div class="text-sm text-gray-500 font-medium w-full md:w-auto text-center md:text-right">
          Menampilkan <span class="text-[#195682] font-bold">{{ filteredMagazines.length }}</span> Edisi Majalah
        </div>
      </div>

      <!-- Magazine Grid -->
      <div v-if="filteredMagazines.length > 0" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        <div 
          v-for="magazine in filteredMagazines" 
          :key="magazine.id"
          @click="openMagazine(magazine)"
          class="group cursor-pointer flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
        >
          <!-- Magazine Cover Container -->
          <div class="relative bg-gradient-to-br from-[#195682] to-[#0b2b42] aspect-[3/4] overflow-hidden">
            <!-- Cover Image -->
            <img 
              v-if="magazine.cover"
              :src="magazine.cover" 
              :alt="magazine.title"
              class="w-full h-full object-cover"
              @error="handleImageError"
            />
            <!-- Fallback Icon Cover -->
            <div v-else class="w-full h-full flex flex-col items-center justify-center text-white p-6 relative">
              <div class="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              
              <div class="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-[#f9ac42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 class="text-md font-bold text-center mb-1 leading-snug line-clamp-2 px-2">{{ magazine.title }}</h3>
              <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/20 text-[#f9ac42]">{{ magazine.edition }}</span>
            </div>

            <!-- Hover Overlay Action -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
              <div class="text-white text-center px-4">
                <div class="w-12 h-12 rounded-full bg-[#f9ac42] text-gray-900 flex items-center justify-center mx-auto mb-3 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
                <p class="font-bold tracking-wide text-sm">Baca Selengkapnya</p>
                <p class="text-xs text-gray-300 mt-1">Klik untuk Baca / Download</p>
              </div>
            </div>
          </div>

          <!-- Magazine Meta Info -->
          <div class="p-5 flex-grow flex flex-col justify-between border-t border-gray-50">
            <div>
              <h4 class="font-bold text-gray-900 leading-snug group-hover:text-[#195682] transition-colors line-clamp-1 mb-1">{{ magazine.title }}</h4>
              <p class="text-sm font-medium text-gray-500">{{ magazine.edition }}</p>
            </div>
            <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
              <span class="flex items-center">
                <svg class="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                {{ magazine.date }}
              </span>
              <span class="text-[#195682] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center">
                Buka
                <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
        <svg class="w-20 h-20 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
        <h3 class="text-2xl font-bold text-gray-900 mb-2">Edisi Majalah Tidak Ditemukan</h3>
        <p class="text-gray-500 max-w-md mx-auto">
          Tidak ada majalah yang cocok dengan kata pencarian "{{ searchQuery }}". Coba cari dengan kata kunci lain.
        </p>
      </div>
    </div>

    <!-- Magazine Modal/Viewer -->
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
        <div class="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
          <div class="text-center">
            <!-- Inline PDF Viewer iframe -->
            <div class="w-full h-[55vh] md:h-[60vh] bg-gray-100 rounded-xl overflow-hidden mb-6 border border-gray-200 shadow-inner">
              <iframe 
                :src="selectedMagazine.pdfUrl" 
                class="w-full h-full border-none"
                title="PDF Preview"
              ></iframe>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                :href="selectedMagazine.pdfUrl || '#'"
                target="_blank"
                class="inline-flex items-center justify-center px-8 py-4 bg-[#195682] hover:bg-[#0b2b42] text-white font-bold rounded-xl transition-all shadow-md hover:shadow-xl"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 001 1h4m-4 0a1 1 0 01-1-1V3m-1 4v10a1 1 0 001 1h3m10-11V9a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V9z"></path>
                </svg>
                Download PDF
              </a>
              <button 
                @click="closeMagazine"
                class="inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-800 font-bold rounded-xl hover:bg-gray-200 transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import initialMagazines from '../data/magazines.json'

const magazines = ref(initialMagazines.magazines || [])
const selectedMagazine = ref(null)
const searchQuery = ref('')

const filteredMagazines = computed(() => {
  if (!searchQuery.value) return magazines.value
  
  const query = searchQuery.value.toLowerCase()
  return magazines.value.filter(mag => 
    mag.title.toLowerCase().includes(query) || 
    mag.edition.toLowerCase().includes(query) ||
    mag.date.toLowerCase().includes(query)
  )
})

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
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
