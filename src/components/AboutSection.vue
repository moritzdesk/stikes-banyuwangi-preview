<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="container-custom px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left: Image -->
        <div class="relative">
          <div class="absolute -inset-4 bg-gradient-to-r from-[#195682] to-[#58d1fd] rounded-3xl blur-2xl opacity-20"></div>
          <div class="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80" 
              alt="Kampus Universitas Dr. Soekardjo Banyuwangi" 
              class="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#195682]/50 to-transparent"></div>
            
            <!-- Floating Badge -->
            <div class="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
              <div class="flex items-center justify-between">
                <div>
                  <div class="text-sm text-gray-600 mb-1">Akreditasi Institusi</div>
                  <div class="text-2xl font-bold text-[#195682]">BAIK</div>
                </div>
                <div class="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Content -->
        <div>
          <span class="text-[#f9ac42] font-bold tracking-wider uppercase text-sm mb-2 block">Tentang Kami</span>
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Universitas Dr. Soekardjo Banyuwangi
          </h2>
          <p class="text-gray-600 text-lg leading-relaxed mb-4">
            Sekolah Tinggi Ilmu Kesehatan (STIKES) Banyuwangi adalah institusi pendidikan tinggi kesehatan yang berkomitmen menghasilkan tenaga kesehatan profesional berkualitas tinggi, berakhlak mulia, dan berdaya saing global.
          </p>
          <p class="text-gray-600 text-lg leading-relaxed mb-4">
            Dengan akreditasi institusi <strong class="text-[#195682]">"Baik"</strong> dan program studi S1 Keperawatan terakreditasi <strong class="text-green-600">"Baik Sekali"</strong>, kami telah mencetak ribuan alumni yang tersebar di seluruh Indonesia dan luar negeri.
          </p>
          <p class="text-gray-600 text-lg leading-relaxed mb-6">
            Didukung oleh fasilitas modern, dosen berkualifikasi tinggi, dan kerjasama dengan rumah sakit serta institusi kesehatan terkemuka, Universitas Dr. Soekardjo Banyuwangi menjadi pilihan utama untuk meraih masa depan cerah di bidang kesehatan.
          </p>

          <!-- Key Points -->
          <div class="grid grid-cols-2 gap-4 mb-8">
            <div class="flex items-start">
             <svg class="w-6 h-6 text-[#f9ac42] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <div>
                <div class="font-bold text-gray-900">11 Program Studi</div>
                <div class="text-sm text-gray-600">Terakreditasi</div>
              </div>
            </div>
            <div class="flex items-start">
              <svg class="w-6 h-6 text-[#f9ac42] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <div>
                <div class="font-bold text-gray-900">50+ Lokasi Praktik</div>
                <div class="text-sm text-gray-600">Jaminan PBK</div>
              </div>
            </div>
            <div class="flex items-start">
              <svg class="w-6 h-6 text-[#f9ac42] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <div>
                <div class="font-bold text-gray-900">Beasiswa Lengkap</div>
                <div class="text-sm text-gray-600">BAKENAKES, KIP, dll</div>
              </div>
            </div>
            <div class="flex items-start">
              <svg class="w-6 h-6 text-[#f9ac42] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <div>
                <div class="font-bold text-gray-900">Alumni Tersebar</div>
                <div class="text-sm text-gray-600">Indonesia & Luar Negeri</div>
              </div>
            </div>
          </div>

          <!-- CTA Button -->
          <router-link 
            to="/profil" 
            class="inline-flex items-center px-8 py-4 bg-[#195682] text-white font-bold rounded-full hover:bg-[#0b2b42] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 group"
          >
            Selengkapnya
            <svg class="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// About STIKES Section - Two column layout
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>
