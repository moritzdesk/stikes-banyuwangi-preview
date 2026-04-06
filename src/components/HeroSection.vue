<template>
  <!-- Hero Carousel Section -->
  <section ref="heroElement" class="relative h-screen overflow-hidden font-sans hero-curved">
    <!-- Full Background Carousel -->
    <div class="absolute inset-0 z-0">
      <!-- Slide 1: Accreditation Focus -->
      <div 
        class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        :class="currentSlide === 0 ? 'opacity-100' : 'opacity-0'"
      >
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[10000ms]" :class="currentSlide === 0 ? 'scale-100' : 'scale-110'" :style="`background-image: url('${homeData.heroImage}'); background-color: #195682;`"></div>
        <!-- UII-style Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-r from-[#0b2b42]/90 via-[#195682]/70 to-transparent"></div>
        
        <div class="absolute inset-0 flex items-center">
          <div class="container-custom px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl animate-slide-up">
              <span class="inline-block py-1 px-3 rounded-full bg-[#f9ac42] text-white text-sm font-bold mb-4 tracking-wider uppercase">
                Penerimaan Mahasiswa Baru 2025
              </span>
              <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" v-html="homeData.heroHeadline">
              </h1>
              <p class="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                {{ homeData.heroSubheadline }}
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <a href="https://pmb.unidsoe.ac.id" target="_blank" class="px-8 py-4 bg-[#f9ac42] hover:bg-orange-600 text-white rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg text-center">
                  {{ homeData.heroButtonText }}
                </a>
                <router-link to="/program-studi" class="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-[#195682] transition-all text-center">
                  Jelajahi Program Studi
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 2: Achievements -->
      <div 
        class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        :class="currentSlide === 1 ? 'opacity-100' : 'opacity-0'"
      >
         <!-- Fallback image or a different model image -->
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[10000ms]" :class="currentSlide === 1 ? 'scale-100' : 'scale-110'" style="background-image: url('https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop');"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-[#0b2b42]/90 via-[#195682]/70 to-transparent"></div>
        
        <div class="absolute inset-0 flex items-center">
          <div class="container-custom px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl animate-slide-up">
              <span class="inline-block py-1 px-3 rounded-full bg-[#c01c0c] text-white text-sm font-bold mb-4 tracking-wider uppercase">
                Prestasi Membanggakan
              </span>
              <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                10 Proposal PKM<br/>
                <span class="text-[#f9ac42]">Lolos Didanai Kemdikbud</span>
              </h1>
              <p class="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                Bukti nyata kualitas riset dan inovasi mahasiswa Universitas Dr. Soekardjo Banyuwangi di kancah nasional. Kembangkan potensimu bersama kami.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <router-link to="/artikel" class="px-8 py-4 bg-[#f9ac42] hover:bg-orange-600 text-white rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg text-center">
                  Lihat Prestasi Lainnya
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Carousel Controls (UII Style: Minimalist dots) -->
    <div class="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4">
      <button 
        v-for="(slide, index) in 2" 
        :key="index"
        @click="setSlide(index)"
        class="w-3 h-3 rounded-full transition-all duration-300 border border-white"
        :class="currentSlide === index ? 'bg-[#f9ac42] w-8' : 'bg-transparent hover:bg-white/50'"
        :aria-label="'Go to slide ' + (index + 1)"
      ></button>
    </div>

    <!-- Decorative Curve SVG (Bottom Left) -->
    <svg class="absolute bottom-0 left-0 z-10 hidden md:block" width="350" height="150" viewBox="0 0 350 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M0 150 L0 0 C0 100, 100 150, 350 150 Z" fill="white"/>
    </svg>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import homeData from '../data/home.json'

const currentSlide = ref(0)
const totalSlides = 2
let slideInterval

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides
}

const setSlide = (index) => {
  currentSlide.value = index
  resetInterval()
}

const startInterval = () => {
  slideInterval = setInterval(nextSlide, 6000)
}

const resetInterval = () => {
  clearInterval(slideInterval)
  startInterval()
}

onMounted(() => {
  startInterval()
})

onUnmounted(() => {
  clearInterval(slideInterval)
})
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out forwards;
}

</style>

