<template>
  <section 
    ref="newsElement"
    class="section-padding bg-gradient-to-b from-gray-50 to-white transform transition-all duration-1000"
    :class="newsVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'"
  >
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-full mb-6">
          <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          BERITA & PRESTASI
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Informasi Terkini & Prestasi Membanggakan
        </h2>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
          Dapatkan informasi terbaru tentang prestasi, kegiatan, penelitian, dan pengumuman penting 
          dari civitas akademika STIKes Banyuwangi
        </p>
        <router-link 
          to="/artikel"
          class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Lihat Semua Artikel
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </router-link>
      </div>

      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Main News -->
        <div class="lg:col-span-2">
          <!-- Featured Article -->
          <div class="bg-white rounded-3xl shadow-xl overflow-hidden mb-8 group hover:shadow-2xl transition-all duration-500">
            <div class="relative h-64 md:h-80 bg-gradient-to-br from-blue-600 to-purple-600">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center text-white">
                  <svg class="w-16 h-16 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 class="text-2xl font-bold">10 Proposal PKM Lolos Pendanaan</h3>
                  <p class="text-sm opacity-80">Prestasi Mahasiswa T.A. 2025</p>
                </div>
              </div>
              <div class="absolute top-4 left-4">
                <span class="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">PRESTASI</span>
              </div>
            </div>
            <div class="p-8">
              <div class="flex items-center text-sm text-gray-500 mb-4">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                </svg>
                15 Januari 2025
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                10 Proposal PKM Mahasiswa STIKes Banyuwangi Lolos Pendanaan
              </h3>
              <p class="text-gray-600 leading-relaxed mb-6">
                Sepuluh proposal Program Kreativitas Mahasiswa (PKM) dari STIKes Banyuwangi berhasil lolos pendanaan 
                dalam seleksi nasional. Prestasi ini menunjukkan kualitas penelitian dan inovasi mahasiswa yang terus meningkat.
              </p>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="flex items-center text-blue-600 font-semibold">
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                    </svg>
                    Mahasiswa
                  </div>
                  <div class="flex items-center text-green-600 font-semibold">
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    Prestasi
                  </div>
                </div>
                <router-link 
                  to="/artikel/1"
                  class="text-blue-600 hover:text-blue-700 font-semibold flex items-center group"
                >
                  Baca Selengkapnya
                  <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </router-link>
              </div>
            </div>
          </div>

          <!-- News Grid -->
          <div class="grid md:grid-cols-2 gap-6">
            <!-- News 1 -->
            <div 
              class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 group transform"
              :class="newsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
              style="transition-delay: 200ms;"
            >
              <div class="flex items-center text-sm text-gray-500 mb-3">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                </svg>
                12 Januari 2025
              </div>
              <h4 class="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Gelar KKN 2025: Pengabdian Masyarakat
              </h4>
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                Mahasiswa STIKes Banyuwangi melaksanakan Kuliah Kerja Nyata (KKN) dengan fokus pada peningkatan kesehatan masyarakat.
              </p>
              <div class="flex items-center justify-between">
                <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">KEGIATAN</span>
                <router-link 
                  to="/artikel/2"
                  class="text-blue-600 hover:text-blue-700 text-sm font-semibold"
                >
                  Baca →
                </router-link>
              </div>
            </div>

            <!-- News 2 -->
            <div 
              class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 group transform"
              :class="newsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
              style="transition-delay: 400ms;"
            >
              <div class="flex items-center text-sm text-gray-500 mb-3">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                </svg>
                10 Januari 2025
              </div>
              <h4 class="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Workshop Penelitian Kesehatan
              </h4>
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                Dosen dan mahasiswa mengikuti workshop metodologi penelitian kesehatan untuk meningkatkan kualitas riset.
              </p>
              <div class="flex items-center justify-between">
                <span class="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">WORKSHOP</span>
                <router-link 
                  to="/artikel/3"
                  class="text-blue-600 hover:text-blue-700 text-sm font-semibold"
                >
                  Baca →
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-8">
          <!-- Quick Stats -->
          <div 
            class="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white transform transition-all duration-500"
            :class="newsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
            style="transition-delay: 600ms;"
          >
            <h3 class="text-xl font-bold mb-4">Prestasi Terkini</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-blue-100">PKM Lolos</span>
                <span class="text-2xl font-bold">10</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-blue-100">Penelitian Aktif</span>
                <span class="text-2xl font-bold">25</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-blue-100">Publikasi</span>
                <span class="text-2xl font-bold">15</span>
              </div>
            </div>
          </div>

          <!-- Recent News -->
          <div 
            class="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-500"
            :class="newsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
            style="transition-delay: 800ms;"
          >
            <h3 class="text-xl font-bold text-gray-900 mb-4">Berita Terbaru</h3>
            <div class="space-y-4">
              <div class="border-l-4 border-blue-500 pl-4">
                <h4 class="font-semibold text-gray-900 text-sm mb-1">Penerimaan Mahasiswa Baru 2025</h4>
                <p class="text-xs text-gray-500">8 Jan 2025</p>
              </div>
              <div class="border-l-4 border-green-500 pl-4">
                <h4 class="font-semibold text-gray-900 text-sm mb-1">Akreditasi Program Studi</h4>
                <p class="text-xs text-gray-500">5 Jan 2025</p>
              </div>
              <div class="border-l-4 border-purple-500 pl-4">
                <h4 class="font-semibold text-gray-900 text-sm mb-1">Seminar Kesehatan Masyarakat</h4>
                <p class="text-xs text-gray-500">3 Jan 2025</p>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <div 
            class="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 text-white text-center transform transition-all duration-500"
            :class="newsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
            style="transition-delay: 1000ms;"
          >
            <h3 class="text-lg font-bold mb-2">Ikuti Perkembangan</h3>
            <p class="text-sm mb-4">Dapatkan notifikasi berita terbaru</p>
            <button class="bg-white text-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const newsElement = ref(null)
const newsVisible = ref(false)

// Intersection observer untuk news section
useIntersectionObserver(
  newsElement,
  ([{ isIntersecting }]) => {
    newsVisible.value = isIntersecting
  },
  { threshold: 0.2 }
)
</script>
