<template>
  <div class="bg-gray-50 min-h-screen">
    <PageHeader 
      title="Kerja Sama & Kemitraan" 
      :breadcrumbs="[{ label: 'Kerja Sama' }]"
      bgImage="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    />

    <div class="container-custom py-16">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl font-bold text-[#0b2b42] mb-4">Membangun Jejaring Global</h2>
        <p class="text-gray-600 text-lg">
          Demi merealisasikan Tri Dharma Perguruan Tinggi yang kompetitif, Universitas Dr. Soekardjo Banyuwangi tak henti menjalin MoU dan MoA di level Regional, Nasional, hingga Internasional dengan institusi kesehatan elit.
        </p>
      </div>

      <!-- Kategori Mitra -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <!-- Rumah Sakit Dalam Negeri -->
        <div class="bg-white rounded-2xl shadow-md p-8 border-l-4 border-[#195682]">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#195682] mr-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            </div>
            <h3 class="text-2xl font-bold text-[#0b2b42]">Rumah Sakit Vertikal & Daerah (Lokal Nasional)</h3>
          </div>
          <p class="text-gray-600 mb-6">Penempatan lahan praktik klinis, magang interprofessional education (IPE), serta rekrutmen lulusan prioritas.</p>
          <ul class="space-y-3">
            <li v-for="(mitra, idx) in nasionalPartners" :key="idx" class="flex items-center text-sm font-semibold text-gray-700">
              <span class="w-2 h-2 rounded-full bg-green-500 mr-3"></span> {{ mitra.name }}
            </li>
          </ul>
        </div>

        <!-- Lembaga Internasional -->
        <div class="bg-white rounded-2xl shadow-md p-8 border-l-4 border-[#f9ac42]">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-[#f9ac42] mr-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 class="text-2xl font-bold text-[#0b2b42]">Institusi Global (Mancanegara)</h3>
          </div>
          <p class="text-gray-600 mb-6">Penyaluran tenaga kerja (Caregiver/Kangoshi), program *student exchange*, dan riset jurnal afiliatif luar negeri.</p>
          <ul class="space-y-3">
            <li v-for="(mitra, idx) in internasionalPartners" :key="idx" class="flex items-center text-sm font-semibold text-gray-700">
              <span class="w-2 h-2 rounded-full bg-blue-500 mr-3"></span> {{ mitra.name }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Banner CTA Kemitraan -->
      <div class="bg-gradient-to-r from-[#195682] to-[#041c2e] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between text-white shadow-xl relative overflow-hidden">
        <div class="absolute right-0 top-0 opacity-10">
          <svg class="w-64 h-64 -mt-10 -mr-10" fill="currentColor" viewBox="0 0 24 24"><path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        </div>
        
        <div class="md:w-2/3 mb-8 md:mb-0 relative z-10">
          <h3 class="text-2xl md:text-3xl font-bold mb-4">Ingin menjalin kerjasama instansi dengan kami?</h3>
          <p class="text-blue-200">Biro Humas & Kemitraan Universitas Dr. Soekardjo Banyuwangi dengan senang hati membuka peluang kolaborasi tri dharma dan rekrutmen industri (Campus Hiring).</p>
        </div>
        
        <div class="md:w-1/3 flex justify-end relative z-10">
          <router-link to="/kontak" class="px-8 py-4 bg-[#f9ac42] hover:bg-orange-500 text-white shadow-lg shadow-orange-500/30 rounded-xl font-bold transition-all transform hover:-translate-y-1">
            Hubungi Biro Kemitraan
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import settings from '../data/settings.json'

const nasionalPartners = computed(() => {
  return settings.partners.filter(p => p.category === 'Nasional')
})

const internasionalPartners = computed(() => {
  return settings.partners.filter(p => p.category === 'Internasional')
})
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>
