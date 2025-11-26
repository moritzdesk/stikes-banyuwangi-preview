<template>
  <section class="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
    <div class="container-custom">
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Scholarship CTA -->
        <div class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-green-600 p-8 text-white card-hover">
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-10">
            <div class="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
            <div class="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
          </div>
          
          <div class="relative z-10">
            <!-- Icon -->
            <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.482 0l5.25-2.25A1 1 0 0017 8.5v-2.25a1 1 0 00-.75-.97l-7-3a1 1 0 00-.5 0l-7 3a1 1 0 00-.75.97v2.25a1 1 0 00.75.97l5.25 2.25z"></path>
              </svg>
            </div>

            <!-- Content -->
            <h3 class="text-2xl font-bold mb-4">Ingin Kuliah GRATIS?</h3>
            <p class="text-green-100 mb-6 leading-relaxed">
              Dapatkan kesempatan beasiswa penuh melalui program BAKENAKES, BHC, Tahfidz, 
              dan KIP Kuliah. Wujudkan impian kuliah tanpa beban finansial.
            </p>

            <!-- Features -->
            <div class="space-y-2 mb-6">
              <div class="flex items-center text-sm">
                <svg class="w-4 h-4 text-green-200 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>Beasiswa Anggota Keluarga Tenaga Kesehatan</span>
              </div>
              <div class="flex items-center text-sm">
                <svg class="w-4 h-4 text-green-200 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>Program Tahfidz & BHC</span>
              </div>
              <div class="flex items-center text-sm">
                <svg class="w-4 h-4 text-green-200 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>KIP Kuliah & Beasiswa Prestasi</span>
              </div>
            </div>

            <!-- CTA Button -->
            <button class="w-full bg-white text-green-600 font-semibold py-3 px-6 rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
              <span>Info Beasiswa</span>
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Registration CTA -->
        <div class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white card-hover">
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-10">
            <div class="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-y-16 -translate-x-16"></div>
            <div class="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-y-12 translate-x-12"></div>
          </div>
          
          <div class="relative z-10">
            <!-- Icon -->
            <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 2a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path>
              </svg>
            </div>

            <!-- Content -->
            <h3 class="text-2xl font-bold mb-4">Sudah Siap Untuk Kuliah?</h3>
            <p class="text-blue-100 mb-6 leading-relaxed">
              Bergabunglah dengan ribuan mahasiswa yang telah mempercayakan masa depan mereka 
              di STIKes Banyuwangi. Daftar sekarang dan wujudkan impian menjadi tenaga kesehatan profesional.
            </p>

            <!-- Features -->
            <div class="space-y-2 mb-6">
              <div class="flex items-center text-sm">
                <svg class="w-4 h-4 text-blue-200 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>6 Program Studi Terakreditasi</span>
              </div>
              <div class="flex items-center text-sm">
                <svg class="w-4 h-4 text-blue-200 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>Fasilitas Laboratorium Modern</span>
              </div>
              <div class="flex items-center text-sm">
                <svg class="w-4 h-4 text-blue-200 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>Jaringan Klinis Luas</span>
              </div>
            </div>

            <!-- CTA Button -->
            <button class="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
              <span>Info Pendaftaran</span>
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
