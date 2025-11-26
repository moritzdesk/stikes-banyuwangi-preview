<template>
  <section 
    ref="campusElement"
    class="section-padding bg-white transform transition-all duration-1000"
    :class="campusVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'"
  >
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Fasilitas Kampus Unggulan</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Laboratorium modern, fasilitas klinis, dan infrastruktur terdepan untuk mendukung pembelajaran optimal
        </p>
      </div>

      <!-- Campus Facilities Grid -->
      <div class="grid lg:grid-cols-3 gap-8 mb-16">
        <!-- Laboratorium Terpadu -->
        <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover">
          <div class="relative overflow-hidden">
            <div class="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-400 to-blue-600">
              <div class="absolute inset-0 flex items-center justify-center">
                <svg class="w-16 h-16 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
            <div class="absolute top-4 left-4">
              <span class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">LABORATORIUM</span>
            </div>
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
              <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
              Laboratorium Terpadu
            </h3>
            <p class="text-gray-600 mb-4 leading-relaxed">
              Fasilitas laboratorium modern dengan peralatan terdepan untuk praktikum 
              keperawatan, kebidanan, dan teknologi laboratorium medis.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">Fasilitas Utama</span>
              <button class="text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors">
                Lihat Detail →
              </button>
            </div>
          </div>
        </div>

        <!-- CBT Center -->
        <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover">
          <div class="relative overflow-hidden">
            <div class="aspect-w-16 aspect-h-9 bg-gradient-to-br from-green-400 to-green-600">
              <div class="absolute inset-0 flex items-center justify-center">
                <svg class="w-16 h-16 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
            <div class="absolute top-4 left-4">
              <span class="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">CBT CENTER</span>
            </div>
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
              <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
              Laboratorium CBT Center
            </h3>
            <p class="text-gray-600 mb-4 leading-relaxed">
              Pusat pembelajaran berbasis komputer dengan teknologi terdepan 
              untuk simulasi dan praktik klinis yang realistis.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">Teknologi Terdepan</span>
              <button class="text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors">
                Lihat Detail →
              </button>
            </div>
          </div>
        </div>

        <!-- Klinik STIKes -->
        <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover">
          <div class="relative overflow-hidden">
            <div class="aspect-w-16 aspect-h-9 bg-gradient-to-br from-red-400 to-red-600">
              <div class="absolute inset-0 flex items-center justify-center">
                <svg class="w-16 h-16 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
            <div class="absolute top-4 left-4">
              <span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">KLINIK</span>
            </div>
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
              <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
              Klinik STIKes Banyuwangi
            </h3>
            <p class="text-gray-600 mb-4 leading-relaxed">
              Fasilitas klinis modern dengan layanan BPJS untuk praktik klinis 
              mahasiswa dan pelayanan kesehatan masyarakat.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">Layanan BPJS</span>
              <button class="text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors">
                Lihat Detail →
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Facilities -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div class="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
          <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h4 class="font-semibold text-gray-900 mb-2">Perpustakaan</h4>
          <p class="text-sm text-gray-600">Koleksi lengkap dan digital</p>
        </div>

        <div class="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
          <div class="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h4 class="font-semibold text-gray-900 mb-2">Asrama</h4>
          <p class="text-sm text-gray-600">Akomodasi nyaman untuk mahasiswa</p>
        </div>

        <div class="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
          <div class="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h4 class="font-semibold text-gray-900 mb-2">Auditorium</h4>
          <p class="text-sm text-gray-600">Fasilitas seminar dan acara</p>
        </div>

        <div class="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
          <div class="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h4 class="font-semibold text-gray-900 mb-2">Sarana Olahraga</h4>
          <p class="text-sm text-gray-600">Fasilitas olahraga lengkap</p>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center">
        <button class="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center mx-auto group">
          <span>Jelajahi Semua Fasilitas</span>
          <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const campusElement = ref(null)
const campusVisible = ref(false)

// Intersection observer untuk campus section
useIntersectionObserver(
  campusElement,
  ([{ isIntersecting }]) => {
    campusVisible.value = isIntersecting
  },
  { threshold: 0.2 }
)
</script>
