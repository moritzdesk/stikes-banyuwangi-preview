<template>
  <!-- Hero Carousel Section -->
  <section ref="heroElement" class="relative h-screen overflow-hidden">
    <!-- Full Background Carousel -->
    <div class="absolute inset-0 z-0">
      <!-- Slide 1: Campus Building -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 transition-opacity duration-2000" :class="currentSlide === 0 ? 'opacity-100' : 'opacity-0'">
        <!-- Background Image -->
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80"></div>
        <!-- Campus Image Overlay -->
        <div class="absolute inset-0 flex items-end justify-start p-4 sm:p-6 md:p-16">
          <div class="text-left text-white/90 max-w-xs sm:max-w-sm md:max-w-2xl">
            <h3 class="text-lg sm:text-2xl md:text-4xl font-bold mb-2">Kampus Modern</h3>
            <p class="text-xs sm:text-sm md:text-xl opacity-80">Fasilitas Pendidikan Terdepan</p>
          </div>
        </div>
      </div>

      <!-- Slide 2: Laboratory -->
      <div class="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 transition-opacity duration-2000" :class="currentSlide === 1 ? 'opacity-100' : 'opacity-0'">
        <!-- Background Image -->
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-purple-700/80"></div>
        <!-- Lab Image Overlay -->
        <div class="absolute inset-0 flex items-end justify-end p-4 sm:p-6 md:p-16">
          <div class="text-right text-white/90 max-w-xs sm:max-w-sm md:max-w-2xl">
            <h3 class="text-lg sm:text-2xl md:text-4xl font-bold mb-2">Laboratorium Terpadu</h3>
            <p class="text-xs sm:text-sm md:text-xl opacity-80">Praktik Klinis Berstandar Internasional</p>
          </div>
        </div>
      </div>

    </div>

    <!-- Overlay Content -->
    <div class="absolute inset-0 z-10 flex items-center justify-center">
      <div class="text-center text-white">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span class="block gradient-text bg-gradient-to-r from-white to-blue-200">
            STIKes Banyuwangi
          </span>
        </h1>
        <p class="text-2xl md:text-3xl font-medium mb-8 animate-fade-in" style="animation-delay: 0.5s;">
          Sekolah Tinggi Ilmu Kesehatan
        </p>
        <div class="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in" style="animation-delay: 1s;">
          <span class="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
          <span class="text-lg font-semibold">Terakreditasi BAN-PT</span>
        </div>
      </div>
    </div>

    <!-- Carousel Controls -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
      <button 
        v-for="(slide, index) in 2" 
        :key="index"
        @click="currentSlide = index"
        class="w-4 h-4 rounded-full transition-all duration-300 hover:scale-125"
        :class="currentSlide === index ? 'bg-white' : 'bg-white/50'"
      ></button>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 right-8 z-20 animate-bounce">
      <div class="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>

  <!-- Hero Information Section -->
  <section 
    ref="heroInfoElement"
    class="relative py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white transform transition-all duration-1000"
    :class="heroInfoVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'"
  >
    <div class="container-custom px-6 sm:px-8 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Masa Depan Kesehatan Indonesia
            <span class="block text-blue-600">Dimulai dari Sini</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bergabunglah dengan STIKes Banyuwangi, institusi pendidikan tinggi kesehatan terdepan 
            yang berkomitmen menghasilkan tenaga profesional dan berdaya saing global.
          </p>
        </div>

        <!-- Accreditation Cards -->
        <div class="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          <!-- Institutional Accreditation -->
          <div class="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Akreditasi Institusi</h3>
            <p class="text-green-600 font-semibold text-lg mb-4">BAIK</p>
            <p class="text-gray-600 leading-relaxed">
              Terakreditasi BAN-PT dengan peringkat BAIK, menjamin kualitas pendidikan tinggi 
              yang berstandar nasional.
            </p>
          </div>

          <!-- Program Accreditation -->
          <div class="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">S1 Keperawatan</h3>
            <p class="text-emerald-600 font-semibold text-lg mb-4">BAIK SEKALI</p>
            <p class="text-gray-600 leading-relaxed">
              Program Studi S1 Keperawatan terakreditasi BAIK SEKALI, 
              menjamin kualitas lulusan yang kompeten dan profesional.
            </p>
          </div>

          <!-- Achievement -->
          <div class="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Prestasi Mahasiswa</h3>
            <p class="text-purple-600 font-semibold text-lg mb-4">10 PKM Lolos</p>
            <p class="text-gray-600 leading-relaxed">
              Sepuluh proposal Program Kreativitas Mahasiswa berhasil lolos pendanaan, 
              menunjukkan kualitas penelitian dan inovasi.
            </p>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center">
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center group">
              <span>Daftar Penerimaan Mahasiswa Baru 2025</span>
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
            <button class="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center group">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Jelajahi Program Studi</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const currentSlide = ref(0)
const isVisible = ref(false)
const heroInfoVisible = ref(false)

// Auto-rotate carousel
let carouselInterval = null

const startCarousel = () => {
  carouselInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % 2
  }, 5000) // Change slide every 5 seconds
}

const stopCarousel = () => {
  if (carouselInterval) {
    clearInterval(carouselInterval)
    carouselInterval = null
  }
}

// Intersection observer untuk pause carousel saat tidak terlihat
const heroElement = ref(null)
const heroInfoElement = ref(null)

useIntersectionObserver(
  heroElement,
  ([{ isIntersecting }]) => {
    isVisible.value = isIntersecting
    if (isIntersecting) {
      startCarousel()
    } else {
      stopCarousel()
    }
  },
  { threshold: 0.5 }
)

// Intersection observer untuk hero info section
useIntersectionObserver(
  heroInfoElement,
  ([{ isIntersecting }]) => {
    heroInfoVisible.value = isIntersecting
  },
  { threshold: 0.2 }
)

onMounted(() => {
  startCarousel()
})

onUnmounted(() => {
  stopCarousel()
})
</script>
