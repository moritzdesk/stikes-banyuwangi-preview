<template>
  <!-- Hero Carousel Section -->
  <section ref="heroElement" class="relative h-screen overflow-hidden font-sans hero-curved">
    <!-- Full Background Carousel -->
    <div class="absolute inset-0 z-0">
      <div 
        v-for="(slide, index) in homeData.slides" 
        :key="index"
        class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        :class="currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'"
      >
        <div 
          class="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[10000ms]" 
          :class="currentSlide === index ? 'scale-100' : 'scale-110'" 
          :style="`background-image: url('${slide.image}'); background-color: #195682;`"
        ></div>
        <!-- UII-style Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-r from-[#0b2b42]/90 via-[#195682]/70 to-transparent"></div>
        
        <div class="absolute inset-0 flex items-center">
          <div class="container-custom px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl animate-slide-up" v-if="currentSlide === index">
              <span 
                class="inline-block py-1 px-3 rounded-full text-white text-sm font-bold mb-4 tracking-wider uppercase"
                :style="`background-color: ${slide.tagBgColor || '#f9ac42'};`"
              >
                {{ slide.tag }}
              </span>
              <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" v-html="slide.headline">
              </h1>
              <p class="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                {{ slide.subheadline }}
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <a 
                  v-if="slide.isExternal"
                  :href="slide.buttonLink" 
                  target="_blank" 
                  class="px-8 py-4 bg-[#f9ac42] hover:bg-orange-600 text-white rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg text-center"
                >
                  {{ slide.buttonText }}
                </a>
                <router-link 
                  v-else
                  :to="slide.buttonLink || '/'" 
                  class="px-8 py-4 bg-[#f9ac42] hover:bg-orange-600 text-white rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg text-center"
                >
                  {{ slide.buttonText }}
                </router-link>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Carousel Controls (UII Style: Minimalist dots) -->
    <div 
      v-if="homeData.slides && homeData.slides.length > 1"
      class="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4"
    >
      <button 
        v-for="(slide, index) in homeData.slides" 
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import homeData from '../data/home.json'

const currentSlide = ref(0)
const totalSlides = computed(() => homeData.slides?.length || 0)
let slideInterval

const nextSlide = () => {
  if (totalSlides.value > 0) {
    currentSlide.value = (currentSlide.value + 1) % totalSlides.value
  }
}

const setSlide = (index) => {
  currentSlide.value = index
  resetInterval()
}

const startInterval = () => {
  if (totalSlides.value > 1) {
    slideInterval = setInterval(nextSlide, 6000)
  }
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
