<template>
  <section 
    ref="partnershipElement"
    class="section-padding bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 relative overflow-hidden transform transition-all duration-1000"
    :class="partnershipVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-float"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>
    </div>

    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-full mb-6">
          <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
          </svg>
          JARINGAN KEMITRAAN STRATEGIS
        </div>
        <h2 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Jaminan Lokasi Praktik
          <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Klinik Terdepan
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
          Kemitraan strategis dengan institusi pemerintah dan organisasi profesi 
          menjamin kualitas praktik klinis mahasiswa di jantung Jawa Timur
        </p>

        <!-- Statistics Intro -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <!-- Stat 1 -->
          <div 
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 group transform"
            :class="partnershipVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
            style="transition-delay: 200ms;"
          >
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span class="text-white font-bold text-2xl">50+</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Fasilitas Kesehatan</h3>
              <p class="text-gray-600 text-sm">RSUD, Puskesmas, Klinik Pemerintah</p>
            </div>
          </div>

          <!-- Stat 2 -->
          <div 
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 group transform"
            :class="partnershipVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
            style="transition-delay: 400ms;"
          >
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span class="text-white font-bold text-2xl">4</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Kabupaten Mitra</h3>
              <p class="text-gray-600 text-sm">Tapal Kuda Jawa Timur</p>
            </div>
          </div>

          <!-- Stat 3 -->
          <div 
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 group transform"
            :class="partnershipVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
            style="transition-delay: 600ms;"
          >
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span class="text-white font-bold text-2xl">10+</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Rumah Sakit Swasta</h3>
              <p class="text-gray-600 text-sm">Fasilitas Modern & Terkini</p>
            </div>
          </div>

          <!-- Stat 4 -->
          <div 
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 group transform"
            :class="partnershipVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
            style="transition-delay: 800ms;"
          >
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span class="text-white font-bold text-2xl">100%</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Jaminan Praktik</h3>
              <p class="text-gray-600 text-sm">Lokasi Praktik Terjamin</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Partnership Cards with Animation -->
      <div class="space-y-16">
        <!-- Pemerintahan Daerah -->
        <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 hover:shadow-3xl transition-all duration-500 group">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Content -->
            <div class="space-y-6">
              <div class="flex items-center space-x-4">
                <div class="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-3xl font-bold text-gray-900 mb-2">Pemerintahan Daerah</h3>
                  <p class="text-blue-600 font-semibold">MoU Strategis 4 Kabupaten</p>
                </div>
              </div>
              
              <p class="text-lg text-gray-600 leading-relaxed">
                Kemitraan resmi dengan 4 kabupaten di Tapal Kuda Jawa Timur memberikan 
                akses langsung ke fasilitas kesehatan pemerintah untuk praktik klinis mahasiswa.
              </p>

              <!-- Partner List -->
              <div class="grid grid-cols-2 gap-4">
                <div class="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl">
                  <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span class="text-white font-bold text-sm">B</span>
                  </div>
                  <span class="font-semibold text-gray-900">Pemkab Banyuwangi</span>
                </div>
                <div class="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl">
                  <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span class="text-white font-bold text-sm">B</span>
                  </div>
                  <span class="font-semibold text-gray-900">Pemkab Bondowoso</span>
                </div>
                <div class="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl">
                  <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span class="text-white font-bold text-sm">S</span>
                  </div>
                  <span class="font-semibold text-gray-900">Pemkab Situbondo</span>
                </div>
                <div class="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl">
                  <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span class="text-white font-bold text-sm">L</span>
                  </div>
                  <span class="font-semibold text-gray-900">Pemkab Lumajang</span>
                </div>
              </div>
            </div>

            <!-- Visual -->
            <div class="relative">
              <div class="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                <div class="text-center">
                  <svg class="w-24 h-24 mx-auto mb-6 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                  </svg>
                  <h4 class="text-2xl font-bold mb-2">Akses Fasilitas Kesehatan</h4>
                  <p class="text-blue-100">RSUD, Puskesmas, dan Klinik Pemerintah</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Organisasi Profesi -->
        <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 hover:shadow-3xl transition-all duration-500 group">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Visual -->
            <div class="relative order-2 lg:order-1">
              <div class="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 text-white">
                <div class="text-center">
                  <svg class="w-24 h-24 mx-auto mb-6 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h4 class="text-2xl font-bold mb-2">Standar Profesional</h4>
                  <p class="text-green-100">Akreditasi & Sertifikasi Nasional</p>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="space-y-6 order-1 lg:order-2">
              <div class="flex items-center space-x-4">
                <div class="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-3xl font-bold text-gray-900 mb-2">Organisasi Profesi</h3>
                  <p class="text-green-600 font-semibold">PPNI & IBI Terakreditasi</p>
                </div>
              </div>
              
              <p class="text-lg text-gray-600 leading-relaxed">
                Kemitraan dengan PPNI (Persatuan Perawat Nasional Indonesia) dan IBI (Ikatan Bidan Indonesia) 
                menjamin kurikulum sesuai standar profesi nasional.
              </p>

              <!-- Partner List -->
              <div class="space-y-4">
                <div class="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
                  <div class="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                    <span class="text-white font-bold">PPNI</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900">Persatuan Perawat Nasional Indonesia</h4>
                    <p class="text-sm text-gray-600">Standar Profesi Keperawatan</p>
                  </div>
                </div>
                <div class="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
                  <div class="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                    <span class="text-white font-bold">IBI</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900">Ikatan Bidan Indonesia</h4>
                    <p class="text-sm text-gray-600">Standar Profesi Kebidanan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Klinis & Industri -->
        <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 hover:shadow-3xl transition-all duration-500 group">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Content -->
            <div class="space-y-6">
              <div class="flex items-center space-x-4">
                <div class="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-3xl font-bold text-gray-900 mb-2">Klinis & Industri</h3>
                  <p class="text-purple-600 font-semibold">Rumah Sakit & Industri Kesehatan</p>
                </div>
              </div>
              
              <p class="text-lg text-gray-600 leading-relaxed">
                Kemitraan dengan rumah sakit swasta dan industri kesehatan memberikan 
                pengalaman praktik di lingkungan profesional modern.
              </p>

              <!-- Partner List -->
              <div class="grid grid-cols-1 gap-4">
                <div class="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl">
                  <div class="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900">Rumah Sakit Swasta</h4>
                    <p class="text-sm text-gray-600">Fasilitas Kesehatan Modern</p>
                  </div>
                </div>
                <div class="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl">
                  <div class="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900">Industri Farmasi</h4>
                    <p class="text-sm text-gray-600">Pengalaman Industri Kesehatan</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Visual -->
            <div class="relative">
              <div class="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
                <div class="text-center">
                  <svg class="w-24 h-24 mx-auto mb-6 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"></path>
                  </svg>
                  <h4 class="text-2xl font-bold mb-2">Pengalaman Industri</h4>
                  <p class="text-purple-100">Teknologi & Praktik Terkini</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center mt-16">
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <h3 class="text-3xl md:text-4xl font-bold mb-4">Siap Menjadi Profesional Kesehatan?</h3>
          <p class="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Bergabunglah dengan STIKes Banyuwangi dan dapatkan pengalaman praktik 
            di jaringan kemitraan strategis terdepan di Jawa Timur
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors">
              Daftar Sekarang
            </button>
            <button class="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              Lihat Program Studi
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

const partnershipElement = ref(null)
const partnershipVisible = ref(false)

// Intersection observer untuk partnership section
useIntersectionObserver(
  partnershipElement,
  ([{ isIntersecting }]) => {
    partnershipVisible.value = isIntersecting
  },
  { threshold: 0.2 }
)
</script>