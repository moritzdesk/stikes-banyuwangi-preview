<template>
  <section class="py-16 -mt-16 relative z-20 overflow-hidden">
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10"></div>
    
    <div class="container-custom px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <!-- Main CTA Cards Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        
        <!-- Beasiswa CTA with Model Image -->
        <div class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500 via-emerald-600 to-green-700 shadow-2xl hover:shadow-green-500/50 transition-all duration-500 transform hover:scale-[1.02]">
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-10">
            <div class="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -translate-y-20 translate-x-20 animate-pulse"></div>
            <div class="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full translate-y-16 -translate-x-16 animate-pulse" style="animation-delay: 0.5s;"></div>
          </div>
          
          <!-- Shine Effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          <div class="grid md:grid-cols-2 gap-6 p-8 md:p-10 relative z-10">
            <!-- Content Side -->
            <div class="text-white">
              <!-- Badge -->
              <div class="inline-flex items-center px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-4 text-sm font-bold">
                <svg class="w-4 h-4 mr-2 animate-spin" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"></path>
                </svg>
                <span>TERBATAS!</span>
              </div>
              
              <h3 class="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">
                <span class="block">Ingin Kuliah</span>
                <span class="block text-yellow-300 drop-shadow-lg">GRATIS?</span>
              </h3>
              
              <p class="text-green-50 mb-4 leading-relaxed text-sm md:text-base">
                Dapatkan kesempatan beasiswa penuh melalui program BAKENAKES, BHC, Tahfidz, dan KIP Kuliah.
              </p>

              <!-- Stats Mini -->
              <div class="grid grid-cols-3 gap-2 mb-4 p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <div class="text-center">
                  <div class="text-xl font-bold text-yellow-300">4+</div>
                  <div class="text-xs text-green-100">Program</div>
                </div>
                <div class="text-center">
                  <div class="text-xl font-bold text-yellow-300">100%</div>
                  <div class="text-xs text-green-100">Beasiswa</div>
                </div>
                <div class="text-center">
                  <div class="text-xl font-bold text-yellow-300">∞</div>
                  <div class="text-xs text-green-100">Peluang</div>
                </div>
              </div>

              <!-- CTA Button -->
              <a href="https://pmb.unidsoe.ac.id" target="_blank" class="w-full bg-white text-green-600 font-bold py-3 px-6 rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group/btn shadow-lg">
                <span>Info Beasiswa</span>
                <svg class="w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>

            <!-- Model Image Side -->
            <div class="hidden md:flex items-end justify-center relative">
              <div class="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent rounded-2xl"></div>
              <img 
                src="/assets/model/DSCF9959.png" 
                alt="Mahasiswa STIKES" 
                class="relative z-10 h-full w-full object-cover object-top rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        <!-- PMB CTA with Model Image -->
        <div class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 transform hover:scale-[1.02]">
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-10">
            <div class="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-y-20 -translate-x-20 animate-pulse"></div>
            <div class="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-y-16 translate-x-16 animate-pulse" style="animation-delay: 0.5s;"></div>
          </div>
          
          <!-- Shine Effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          <div class="grid md:grid-cols-2 gap-6 p-8 md:p-10 relative z-10">
            <!-- Content Side -->
            <div class="text-white">
              <!-- Badge -->
              <div class="inline-flex items-center px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-4 text-sm font-bold">
                <svg class="w-4 h-4 mr-2 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                </svg>
                <span>PMB 2025</span>
              </div>
              
              <h3 class="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">
                <span class="block">Sudah Siap</span>
                <span class="block text-yellow-300 drop-shadow-lg">Untuk Kuliah?</span>
              </h3>
              
              <p class="text-blue-50 mb-4 leading-relaxed text-sm md:text-base">
                Bergabunglah dengan ribuan mahasiswa yang telah mempercayakan masa depan mereka di Universitas Dr. Soekardjo Banyuwangi.
              </p>

              <!-- Stats Mini -->
              <div class="grid grid-cols-3 gap-2 mb-4 p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <div class="text-center">
                  <div class="text-xl font-bold text-yellow-300">8+</div>
                  <div class="text-xs text-blue-100">Program</div>
                </div>
                <div class="text-center">
                  <div class="text-xl font-bold text-yellow-300">100%</div>
                  <div class="text-xs text-blue-100">Akreditasi</div>
                </div>
                <div class="text-center">
                  <div class="text-xl font-bold text-yellow-300">∞</div>
                  <div class="text-xs text-blue-100">Peluang</div>
                </div>
              </div>

              <!-- CTA Button -->
              <a href="https://pmb.unidsoe.ac.id" target="_blank" class="w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group/btn shadow-lg">
                <span>Info Pendaftaran</span>
                <svg class="w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>

            <!-- Model Image Side -->
            <div class="hidden md:flex items-end justify-center relative">
              <div class="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl"></div>
              <img 
                src="/assets/model/DSCF9968.png" 
                alt="Mahasiswa STIKES" 
                class="relative z-10 h-full w-full object-cover object-top rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Secondary Quick Access Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Biaya Kuliah Card -->
        <router-link to="/akademik" class="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#f9ac42]">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-[#58d1fd] to-[#195682] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#195682] transition-colors">Biaya Kuliah</h3>
            <p class="text-sm text-gray-600 mb-3">Informasi lengkap biaya pendidikan dan sistem pembayaran</p>
            <div class="text-[#f9ac42] font-bold flex items-center text-sm">
              Info Lengkap
              <svg class="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </router-link>

        <!-- Fasilitas Card -->
        <router-link to="/fasilitas" class="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#f9ac42]">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-[#195682] to-[#58d1fd] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#195682] transition-colors">Fasilitas Kampus</h3>
            <p class="text-sm text-gray-600 mb-3">Laboratorium modern, perpustakaan, dan fasilitas penunjang</p>
            <div class="text-[#f9ac42] font-bold flex items-center text-sm">
              Lihat Fasilitas
              <svg class="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </router-link>

        <!-- Program Studi Card -->
        <router-link to="/program-studi" class="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#f9ac42]">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-[#f9ac42] to-[#c01c0c] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#195682] transition-colors">Program Studi</h3>
            <p class="text-sm text-gray-600 mb-3">8 program studi terakreditasi dengan kurikulum terkini</p>
            <div class="text-[#f9ac42] font-bold flex items-center text-sm">
              Lihat Program
              <svg class="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
// Enhanced Quick Access Section with CTA content and model images
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>
