<template>
  <section class="py-16 md:py-24 bg-[#195682] text-white relative overflow-hidden font-sans">
    <!-- Background pattern -->
    <div class="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" stroke="white" stroke-width="20"/>
        </svg>
    </div>
    
    <div class="container-custom relative z-10">
      <div class="flex flex-col md:flex-row gap-12 items-center">
        <!-- Text Content -->
        <div class="md:w-1/2">
            <span class="inline-block py-1 px-3 rounded-full bg-[#58d1fd]/20 text-[#58d1fd] text-sm font-bold mb-6 tracking-wider uppercase">
                Kata Alumni
            </span>
          <h2 class="text-3xl md:text-5xl font-bold mb-6 leading-tight">
             Cerita Sukses Alumni Universitas Dr. Soekardjo Banyuwangi
          </h2>
          <p class="text-blue-100 text-lg mb-8 leading-relaxed">
            Lebih dari 1000 alumni telah bekerja di berbagai fasilitas kesehatan pemerintah dan swasta di seluruh Indonesia. Dengar apa kata mereka tentang pengalaman belajar di sini.
          </p>
          <div class="flex gap-4">
               <button @click="prevTestimonial" class="p-4 rounded-full border border-white/30 hover:bg-white hover:text-[#195682] transition-all">
                   <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
               </button>
               <button @click="nextTestimonial" class="p-4 rounded-full border border-white/30 hover:bg-white hover:text-[#195682] transition-all">
                   <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
               </button>
          </div>
        </div>

        <!-- Testimonial Card -->
        <div class="md:w-1/2 w-full">
            <div class="relative bg-white text-gray-900 rounded-2xl p-8 md:p-10 shadow-2xl">
                <!-- Quote Icon -->
                <div class="absolute -top-6 -right-6 w-16 h-16 bg-[#f9ac42] rounded-full flex items-center justify-center shadow-lg">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19C19.5523 16 20 15.5523 20 15V9C20 8.44772 19.5523 8 19 8H15C14.4477 8 14 7.55228 14 7V3H19C21.2091 3 23 4.79086 23 7V15C23 18.3137 20.3137 21 17 21H14.017ZM5.01691 21L5.01691 18C5.01691 16.8954 5.91234 16 7.01691 16H10C10.5523 16 11 15.5523 11 15V9C11 8.44772 10.5523 8 10 8H6C5.44772 8 5 7.55228 5 7V3H10C12.2091 3 14 4.79086 14 7V15C14 18.3137 11.3137 21 8 21H5.01691Z"/></svg>
                </div>

                <div class="min-h-[200px] flex flex-col justify-between">
                    <p class="text-xl md:text-2xl font-medium text-gray-700 mb-8 italic">
                        "{{ currentTestimonial.quote }}"
                    </p>
                    
                    <div class="flex items-center gap-4">
                        <img :src="currentTestimonial.avatar" :alt="currentTestimonial.name" class="w-16 h-16 rounded-full object-cover border-2 border-gray-200">
                        <div>
                            <h4 class="font-bold text-lg text-[#195682]">{{ currentTestimonial.name }}</h4>
                            <p class="text-sm text-gray-500">{{ currentTestimonial.job }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>

    <!-- View All Button -->
    <div class="text-center mt-12">
      <router-link 
        to="/testimoni" 
        class="inline-flex items-center px-8 py-4 bg-white text-[#195682] font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 group"
      >
        Lihat Semua Testimoni
        <svg class="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import settings from '../data/settings.json'

const testimonials = settings.testimonials

const currentIndex = ref(0)
const currentTestimonial = computed(() => testimonials[currentIndex.value] || {})

const nextTestimonial = () => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const prevTestimonial = () => {
    currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
}
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>
