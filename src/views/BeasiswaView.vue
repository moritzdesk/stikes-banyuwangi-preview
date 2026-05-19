<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Standard Page Header Component -->
    <PageHeader 
      :title="data.title" 
      :breadcrumbs="[{ label: 'Beasiswa' }]"
      :bgImage="data.heroImage"
    />

    <!-- Main Content Area -->
    <div class="container-custom py-12">
      <!-- Intro Section Card -->
      <div class="bg-white rounded-xl shadow-md p-8 md:p-10 border border-gray-100 grid md:grid-cols-12 gap-8 items-center mb-12 animate-fade-in-up">
        <div class="md:col-span-5 relative group overflow-hidden rounded-xl shadow-sm">
          <img 
            :src="data.heroImage" 
            :alt="data.title" 
            class="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
          />
        </div>
        <div class="md:col-span-7 space-y-4">
          <span class="text-[#f9ac42] font-bold uppercase tracking-wider text-sm block">Komitmen Pendidikan</span>
          <h2 class="text-3xl font-bold text-[#0b2b42] leading-tight">
            {{ data.introTitle }}
          </h2>
          <p class="text-gray-600 leading-relaxed">
            {{ data.introText }}
          </p>
          <div class="flex flex-wrap gap-3 pt-2">
            <span class="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-[#195682] text-sm font-semibold border border-blue-100">
              ⚡ Kuliah Bebas SPP 100%
            </span>
            <span class="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-50 text-orange-800 text-sm font-semibold border border-orange-100">
              🌟 Kuota Beasiswa Melimpah
            </span>
          </div>
        </div>
      </div>

      <!-- Scholarships Section -->
      <div class="mb-12">
        <div class="text-center mb-10">
          <span class="text-[#195682] font-bold uppercase tracking-wider text-sm block mb-2">Program Unggulan</span>
          <h2 class="text-3xl font-bold text-[#0b2b42]">
            Pilihan Skema Beasiswa Tersedia
          </h2>
          <p class="text-gray-500 mt-2 max-w-2xl mx-auto text-sm md:text-base">
            Silakan telusuri kualifikasi, cakupan biaya, dan manfaat masing-masing skema beasiswa di bawah ini:
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(scholarship, index) in data.scholarships" 
            :key="index"
            class="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <!-- Header with Icon -->
              <div class="flex items-center space-x-4 mb-4">
                <div class="w-12 h-12 bg-blue-50 text-[#195682] rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {{ scholarship.icon }}
                </div>
                <h3 class="text-lg font-bold text-[#0b2b42] group-hover:text-[#195682] transition-colors leading-tight">
                  {{ scholarship.name }}
                </h3>
              </div>

              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                {{ scholarship.description }}
              </p>

              <!-- Benefits List -->
              <div class="border-t border-gray-100 pt-4 space-y-2">
                <span class="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Manfaat & Cakupan:</span>
                <div 
                  v-for="(benefit, bIdx) in scholarship.benefits" 
                  :key="bIdx"
                  class="flex items-start space-x-2 text-gray-700 text-xs md:text-sm"
                >
                  <svg class="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>{{ benefit }}</span>
                </div>
              </div>
            </div>

            <!-- Footer Button -->
            <div class="mt-6 border-t border-gray-100 pt-4">
              <a 
                :href="scholarship.link || 'https://stikesbanyuwangi.ac.id/penerimaan-mahasiswa-baru/'"
                target="_blank"
                class="w-full text-center py-2.5 px-4 bg-gray-50 text-gray-700 group-hover:bg-[#195682] group-hover:text-white font-bold rounded-xl text-sm transition-all duration-300 flex items-center justify-center space-x-1.5"
              >
                <span>Daftar Sekarang</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom PMB Action Card -->
      <div class="bg-gradient-to-br from-[#195682] to-[#0b2b42] rounded-2xl p-8 md:p-10 text-white shadow-lg relative overflow-hidden text-center max-w-3xl mx-auto border border-gray-800">
        <!-- SVG Accent -->
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-20 translate-x-20"></div>
          <div class="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-20 -translate-x-20"></div>
        </div>

        <span class="text-[#f9ac42] font-bold uppercase tracking-wider text-sm block mb-2 relative z-10">Penerimaan Mahasiswa Baru</span>
        <h2 class="text-3xl font-bold mb-4 relative z-10 leading-tight">
          Segera Daftarkan Diri Anda Sebelum Kuota Terpenuhi!
        </h2>
        <p class="text-blue-100 mb-6 max-w-lg mx-auto relative z-10 leading-relaxed font-light text-sm md:text-base">
          Kuota penerimaan beasiswa sangat terbatas untuk setiap program studi. Amankan kursi perkuliahan Anda sekarang juga.
        </p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
          <a 
            href="https://stikesbanyuwangi.ac.id/penerimaan-mahasiswa-baru/"
            target="_blank"
            class="w-full sm:w-auto bg-[#f9ac42] hover:bg-[#e0932c] text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md text-base"
          >
            Daftar PMB Sekarang
          </a>
          <router-link 
            to="/kontak"
            class="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-8 rounded-xl border border-white/20 transition-all duration-300 text-base"
          >
            Konsultasi Beasiswa
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import data from '../data/beasiswa.json'

onMounted(() => {
  document.title = `${data.title} | Universitas Dr. Soekardjo`
})
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
