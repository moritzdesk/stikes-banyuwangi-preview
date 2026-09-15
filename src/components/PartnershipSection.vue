<template>
  <section class="py-16 md:py-24 bg-white relative overflow-hidden font-sans">
    <div class="container-custom">
      <!-- Section Title & Description -->
      <div class="text-center max-w-3xl mx-auto mb-16 px-4">
        <h2 class="text-3xl md:text-4xl font-extrabold text-[#195682] mb-4">
          {{ globalSettings.associationsSettings?.sectionTitle || 'Assurance of Practice' }}
        </h2>
        <div class="w-20 h-1 bg-[#f9ac42] mx-auto mb-6"></div>
        <p class="text-lg md:text-xl text-gray-600 leading-relaxed">
          {{ globalSettings.associationsSettings?.description || 'Jaminan Lokasi Praktik Belajar Klinik. Kami bermitra dengan pemerintah daerah dan organisasi profesi untuk memastikan setiap mahasiswa mendapatkan pengalaman praktik terbaik dan kompetensi yang diakui.' }}
        </p>
      </div>

      <!-- Infinite Marquee Slideshow Container -->
      <div class="relative w-full overflow-hidden py-6">
        <!-- Fade gradient mask for smooth edges -->
        <div class="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div class="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

        <!-- Sliding Marquee Row -->
        <div class="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused] py-2">
          <!-- Set 1 -->
          <a 
            v-for="(item, idx) in associations" 
            :key="'a-' + idx" 
            :href="item.url"
            target="_blank"
            class="flex flex-col items-center justify-center p-6 bg-gray-50/50 rounded-2xl hover:bg-white hover:shadow-[0_15px_40px_rgba(25,86,130,0.08)] transition-all duration-500 border border-gray-100/70 hover:border-[#195682]/20 w-48 sm:w-56 shrink-0 group text-center cursor-pointer focus:outline-none"
          >
            <!-- SVG Logo Wrapper -->
            <div class="h-20 w-full flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
              <img v-if="item.logo" :src="item.logo" :alt="item.name" class="h-14 object-contain max-w-full" />
              <template v-else>
                <!-- Pemkab Icon -->
                <svg v-if="item.iconType === 'pemkab'" class="h-14 w-14 text-[#195682]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <!-- PPNI Icon -->
                <svg v-else-if="item.iconType === 'ppni'" class="h-14 w-14 text-[#c01c0c]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 10.5V20a2 2 0 01-2 2H7a2 2 0 01-2-2v-9.5m14 0V9a2 2 0 00-2-2h-2m4 3.5L12 3 3 10.5M3 10.5V9a2 2 0 012-2h2m10 0V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v3m8 0H7" />
                </svg>
                <!-- IBI Icon -->
                <svg v-else-if="item.iconType === 'ibi'" class="h-14 w-14 text-[#58d1fd]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.75 9.75 0 006.74-2.74L18 18m-6-9a3 3 0 11-6 0 3 3 0 016 0zm-6 9a6 6 0 0112 0v3" />
                </svg>
                <!-- PAFI Icon -->
                <svg v-else-if="item.iconType === 'pafi'" class="h-14 w-14 text-green-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <!-- IDI Icon -->
                <svg v-else-if="item.iconType === 'idi'" class="h-14 w-14 text-blue-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <!-- Kemenkes Icon -->
                <svg v-else-if="item.iconType === 'kemenkes'" class="h-14 w-14 text-teal-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <!-- Empty Placeholder Icon if neither logo nor iconType -->
                <svg v-else class="h-14 w-14 text-[#195682]/40" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-10.5h16.5M2.25 9h19.5M3 3h18M3.75 6h16.5" />
                </svg>
              </template>
            </div>
            <!-- Dynamic Name -->
            <div 
              class="mt-4 font-bold text-gray-700 group-hover:text-[#195682] text-sm md:text-base group-hover:underline transition-colors duration-300 flex items-center justify-center gap-1"
            >
              {{ item.name }}
              <svg class="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>

          <!-- Set 2 (Duplicates for seamless loop) -->
          <a 
            v-for="(item, idx) in associations" 
            :key="'b-' + idx" 
            :href="item.url"
            target="_blank"
            class="flex flex-col items-center justify-center p-6 bg-gray-50/50 rounded-2xl hover:bg-white hover:shadow-[0_15px_40px_rgba(25,86,130,0.08)] transition-all duration-500 border border-gray-100/70 hover:border-[#195682]/20 w-48 sm:w-56 shrink-0 group text-center cursor-pointer focus:outline-none"
          >
            <!-- SVG Logo Wrapper -->
            <div class="h-20 w-full flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
              <img v-if="item.logo" :src="item.logo" :alt="item.name" class="h-14 object-contain max-w-full" />
              <template v-else>
                <!-- Pemkab Icon -->
                <svg v-if="item.iconType === 'pemkab'" class="h-14 w-14 text-[#195682]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <!-- PPNI Icon -->
                <svg v-else-if="item.iconType === 'ppni'" class="h-14 w-14 text-[#c01c0c]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 10.5V20a2 2 0 01-2 2H7a2 2 0 01-2-2v-9.5m14 0V9a2 2 0 00-2-2h-2m4 3.5L12 3 3 10.5M3 10.5V9a2 2 0 012-2h2m10 0V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v3m8 0H7" />
                </svg>
                <!-- IBI Icon -->
                <svg v-else-if="item.iconType === 'ibi'" class="h-14 w-14 text-[#58d1fd]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.75 9.75 0 006.74-2.74L18 18m-6-9a3 3 0 11-6 0 3 3 0 016 0zm-6 9a6 6 0 0112 0v3" />
                </svg>
                <!-- PAFI Icon -->
                <svg v-else-if="item.iconType === 'pafi'" class="h-14 w-14 text-green-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <!-- IDI Icon -->
                <svg v-else-if="item.iconType === 'idi'" class="h-14 w-14 text-blue-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <!-- Kemenkes Icon -->
                <svg v-else-if="item.iconType === 'kemenkes'" class="h-14 w-14 text-teal-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <!-- Empty Placeholder Icon if neither logo nor iconType -->
                <svg v-else class="h-14 w-14 text-[#195682]/40" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-10.5h16.5M2.25 9h19.5M3 3h18M3.75 6h16.5" />
                </svg>
              </template>
            </div>
            <!-- Dynamic Name -->
            <div 
              class="mt-4 font-bold text-gray-700 group-hover:text-[#195682] text-sm md:text-base group-hover:underline transition-colors duration-300 flex items-center justify-center gap-1"
            >
              {{ item.name }}
              <svg class="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>
        </div>
      </div>

      <!-- Action Button -->
      <div class="mt-16 text-center">
        <router-link 
          to="/asosiasi" 
          class="inline-flex items-center text-[#195682] hover:text-[#f9ac42] font-extrabold transition-all duration-300 text-sm md:text-base tracking-wider uppercase border-b-2 border-[#195682]/20 hover:border-[#f9ac42] pb-1 group focus:outline-none"
        >
          DAFTAR ASOSIASI
          <svg class="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </router-link>
      </div>

      <!-- Mitra Kerja Sama (logo wall dari CMS) -->
      <div v-if="partners.length > 0" class="mt-20 pt-12 border-t border-gray-100">
        <p class="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
          Mitra Kerja Sama
        </p>
        <p class="text-center text-gray-500 text-sm mb-10">
          Institusi yang bermitra dengan UNIDSOE
        </p>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          <div
            v-for="(partner, idx) in partners"
            :key="idx"
            class="group bg-white border border-gray-100 rounded-2xl px-6 py-8 flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#195682]/20 transition-all duration-300 min-h-[190px]"
          >
            <div class="h-20 md:h-24 flex items-center justify-center">
              <img
                v-if="partner.logo"
                :src="partner.logo"
                :alt="partner.name"
                class="h-20 md:h-24 w-auto max-w-full object-contain drop-shadow-sm transform group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <span
                v-else
                class="w-20 h-20 rounded-2xl bg-[#195682] text-white flex items-center justify-center text-3xl font-black shadow-md"
              >
                {{ (partner.name || '?').trim().charAt(0).toUpperCase() }}
              </span>
            </div>
            <span class="font-bold text-gray-700 text-sm text-center leading-snug">{{ partner.name }}</span>
            <span v-if="partner.category" class="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              {{ partner.category }}
            </span>
          </div>
        </div>
        <div class="mt-10 text-center">
          <router-link
            to="/kerja-sama"
            class="inline-flex items-center px-8 py-3.5 bg-[#195682] text-white font-bold rounded-full hover:bg-black transition-all duration-300 text-sm tracking-wider uppercase shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group focus:outline-none"
          >
            Lihat Semua Mitra
            <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { getAssociations, getPartners } from '../composables/useSite'

// Asosiasi dari prebuild Payload (tanpa JSON statis)
const globalSettings = { associationsSettings: getAssociations() }

const associations = globalSettings.associationsSettings?.items || [
  { name: "Pemkab Banyuwangi", url: "https://banyuwangikab.go.id", iconType: "pemkab" },
  { name: "PPNI", url: "https://ppni-inna.org", iconType: "ppni" },
  { name: "IBI", url: "https://ibi.or.id", iconType: "ibi" },
  { name: "PAFI", url: "https://pafi.or.id", iconType: "pafi" }
]

// Mitra (logo wall) dari prebuild Payload — maksimal 6 di homepage, sisanya di /kerja-sama
const partners = getPartners().slice(0, 6)
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 25s linear infinite;
}
</style>