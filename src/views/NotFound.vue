<template>
  <main class="min-h-screen bg-gray-50 flex items-center justify-center">
    <!-- Schema Markup -->
    <SchemaMarkup :schema="webPageSchema" />
    
    <div class="container-custom text-center px-4">
      <div class="max-w-2xl mx-auto">
        <!-- 404 Illustration -->
        <div class="mb-8">
          <div class="relative">
            <div class="text-9xl font-bold text-blue-600 opacity-20">404</div>
            <div class="absolute inset-0 flex items-center justify-center">
              <svg class="w-32 h-32 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
        </div>

        <!-- Error Message -->
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Halaman Tidak Ditemukan
        </h1>
        <p class="text-xl text-gray-600 mb-8">
          Maaf, halaman yang Anda cari tidak ditemukan atau telah dipindahkan.
        </p>

        <!-- Actions -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <router-link
            to="/"
            class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            Kembali ke Beranda
          </router-link>
          
          <router-link
            to="/artikel"
            class="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Lihat Artikel
          </router-link>
        </div>

        <!-- Helpful Links -->
        <div class="mt-12 pt-8 border-t border-gray-200">
          <p class="text-gray-500 mb-4">Atau kunjungi halaman populer:</p>
          <div class="flex flex-wrap gap-3 justify-center">
            <router-link to="/" class="text-blue-600 hover:text-blue-700 font-medium">Beranda</router-link>
            <span class="text-gray-300">•</span>
            <router-link to="/artikel" class="text-blue-600 hover:text-blue-700 font-medium">Artikel</router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import SchemaMarkup from '../components/SchemaMarkup.vue'
import { useSEO } from '../composables/useSEO'
import { computed } from 'vue'

// SEO Meta Tags
useSEO({
  title: '404 - Halaman Tidak Ditemukan',
  description: 'Halaman yang Anda cari tidak ditemukan. Kembali ke beranda STIKES Banyuwangi.',
  noindex: true
})

// WebPage Schema for 404
const webPageSchema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: '404 - Halaman Tidak Ditemukan',
  description: 'Halaman yang Anda cari tidak ditemukan',
  url: 'https://stikesbanyuwangi.ac.id/404'
}))
</script>

