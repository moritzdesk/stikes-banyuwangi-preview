<template>
  <section class="section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
    </div>
    
    <div class="container-custom relative z-10">
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Scholarship CTA -->
        <div class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500 via-emerald-600 to-green-700 p-8 md:p-10 text-white shadow-2xl hover:shadow-green-500/50 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2">
          <!-- Animated Background Pattern -->
          <div class="absolute inset-0 opacity-20">
            <div class="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -translate-y-20 translate-x-20 animate-pulse"></div>
            <div class="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full translate-y-16 -translate-x-16 animate-pulse" style="animation-delay: 0.5s;"></div>
            <div class="absolute top-1/2 left-1/2 w-24 h-24 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" style="animation-delay: 1s;"></div>
          </div>
          
          <!-- Shine Effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          <div class="relative z-10">
            <!-- Badge -->
            <div class="inline-flex items-center px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-6 text-sm font-bold">
              <svg class="w-4 h-4 mr-2 animate-spin" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"></path>
              </svg>
              <span>TERBATAS!</span>
            </div>
            
            <!-- Icon with Glow -->
            <div class="relative mb-6">
              <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.482 0l5.25-2.25A1 1 0 0017 8.5v-2.25a1 1 0 00-.75-.97l-7-3a1 1 0 00-.5 0l-7 3a1 1 0 00-.75.97v2.25a1 1 0 00.75.97l5.25 2.25z"></path>
                </svg>
              </div>
              <div class="absolute inset-0 bg-white/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 -z-10"></div>
            </div>

            <!-- Content -->
            <h3 class="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">
              <span class="block">Ingin Kuliah</span>
              <span class="block text-yellow-300 drop-shadow-lg">GRATIS?</span>
            </h3>
            <p class="text-green-50 mb-6 leading-relaxed text-base md:text-lg">
              Dapatkan kesempatan beasiswa penuh melalui program BAKENAKES, BHC, Tahfidz, 
              dan KIP Kuliah. Wujudkan impian kuliah tanpa beban finansial.
            </p>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-4 mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div class="text-center">
                <div class="text-2xl font-bold text-yellow-300">4+</div>
                <div class="text-xs text-green-100">Program</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-yellow-300">100%</div>
                <div class="text-xs text-green-100">Beasiswa</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-yellow-300">∞</div>
                <div class="text-xs text-green-100">Kesempatan</div>
              </div>
            </div>

            <!-- Features -->
            <div class="space-y-3 mb-6">
              <div class="flex items-center text-sm bg-white/10 backdrop-blur-sm p-3 rounded-xl group/item hover:bg-white/20 transition-all duration-300">
                <div class="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform">
                  <svg class="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="font-medium">Beasiswa Anggota Keluarga Tenaga Kesehatan</span>
              </div>
              <div class="flex items-center text-sm bg-white/10 backdrop-blur-sm p-3 rounded-xl group/item hover:bg-white/20 transition-all duration-300">
                <div class="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform">
                  <svg class="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="font-medium">Program Tahfidz & BHC</span>
              </div>
              <div class="flex items-center text-sm bg-white/10 backdrop-blur-sm p-3 rounded-xl group/item hover:bg-white/20 transition-all duration-300">
                <div class="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform">
                  <svg class="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="font-medium">KIP Kuliah & Beasiswa Prestasi</span>
              </div>
            </div>

            <!-- CTA Button -->
            <button class="w-full bg-white text-green-600 font-bold py-4 px-6 rounded-2xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group shadow-xl hover:shadow-2xl">
              <span class="text-lg">Info Beasiswa</span>
              <svg class="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Registration CTA -->
        <div class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 p-8 md:p-10 text-white shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2">
          <!-- Animated Background Pattern -->
          <div class="absolute inset-0 opacity-20">
            <div class="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-y-20 -translate-x-20 animate-pulse"></div>
            <div class="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-y-16 translate-x-16 animate-pulse" style="animation-delay: 0.5s;"></div>
            <div class="absolute top-1/2 right-1/4 w-24 h-24 bg-white rounded-full animate-pulse" style="animation-delay: 1s;"></div>
          </div>
          
          <!-- Shine Effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          <div class="relative z-10">
            <!-- Badge -->
            <div class="inline-flex items-center px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-6 text-sm font-bold">
              <svg class="w-4 h-4 mr-2 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
              </svg>
              <span>PMB 2025</span>
            </div>
            
            <!-- Icon with Glow -->
            <div class="relative mb-6">
              <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 2a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="absolute inset-0 bg-white/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 -z-10"></div>
            </div>

            <!-- Content -->
            <h3 class="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">
              <span class="block">Sudah Siap</span>
              <span class="block text-yellow-300 drop-shadow-lg">Untuk Kuliah?</span>
            </h3>
            <p class="text-blue-50 mb-6 leading-relaxed text-base md:text-lg">
              Bergabunglah dengan ribuan mahasiswa yang telah mempercayakan masa depan mereka 
              di Unidsoe (Universitas Dr. Soekardjo). Daftar sekarang dan wujudkan impian menjadi tenaga kesehatan profesional.
            </p>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-4 mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div class="text-center">
                <div class="text-2xl font-bold text-yellow-300">6+</div>
                <div class="text-xs text-blue-100">Program</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-yellow-300">100%</div>
                <div class="text-xs text-blue-100">Terakreditasi</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-yellow-300">∞</div>
                <div class="text-xs text-blue-100">Peluang</div>
              </div>
            </div>

            <!-- Features -->
            <div class="space-y-3 mb-6">
              <div class="flex items-center text-sm bg-white/10 backdrop-blur-sm p-3 rounded-xl group/item hover:bg-white/20 transition-all duration-300">
                <div class="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform">
                  <svg class="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="font-medium">6 Program Studi Terakreditasi</span>
              </div>
              <div class="flex items-center text-sm bg-white/10 backdrop-blur-sm p-3 rounded-xl group/item hover:bg-white/20 transition-all duration-300">
                <div class="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform">
                  <svg class="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="font-medium">Fasilitas Laboratorium Modern</span>
              </div>
              <div class="flex items-center text-sm bg-white/10 backdrop-blur-sm p-3 rounded-xl group/item hover:bg-white/20 transition-all duration-300">
                <div class="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform">
                  <svg class="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="font-medium">Jaringan Klinis Luas</span>
              </div>
            </div>

            <!-- CTA Button -->
            <button class="w-full bg-white text-blue-600 font-bold py-4 px-6 rounded-2xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group shadow-xl hover:shadow-2xl">
              <span class="text-lg">Info Pendaftaran</span>
              <svg class="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// CTA Section component with glassmorphism effects
</script>
