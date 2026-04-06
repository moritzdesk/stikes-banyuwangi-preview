<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Header with dynamic title -->
    <PageHeader 
      v-if="programData"
      :title="programData.title" 
      :breadcrumbs="[{ label: 'Akademik', path: '/' }, { label: 'Program Studi', path: '/program-studi' }, { label: programData.title }]"
      :bgImage="programData.image"
    />

    <div class="container-custom py-16" v-if="programData">
      
      <!-- Top Info Card -->
      <div class="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-12 flex flex-col md:flex-row gap-10 items-center transform -translate-y-24 relative z-20 mx-4 lg:mx-0">
        <div class="w-full md:w-1/3 flex justify-center">
          <div class="w-48 h-48 bg-gradient-to-br from-[#195682] to-[#0b2b42] rounded-full flex items-center justify-center text-white shadow-xl shadow-blue-900/30 border-8 border-white p-6 text-center">
            <h2 class="text-3xl font-black leading-tight">{{ programData.level }} <br> <span class="text-lg font-medium text-[#f9ac42] uppercase tracking-widest">{{ programData.title.replace(programData.level, '').trim() }}</span></h2>
          </div>
        </div>
        <div class="w-full md:w-2/3">
          <h2 class="text-2xl md:text-4xl font-bold text-[#0b2b42] mb-4">Profil Singkat Program Studi</h2>
          <p class="text-gray-600 text-lg leading-relaxed mb-6">
            {{ programData.shortDescription }}
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-blue-50 p-4 rounded-xl text-center">
              <span class="block text-gray-500 text-xs font-bold uppercase mb-1">Akreditasi</span>
              <span class="block text-[#195682] font-black text-lg">{{ programData.accreditation }}</span>
            </div>
            <div class="bg-orange-50 p-4 rounded-xl text-center">
              <span class="block text-gray-500 text-xs font-bold uppercase mb-1">Gelar Lulusan</span>
              <span class="block text-[#f9ac42] font-black text-lg">{{ programData.degree }}</span>
            </div>
            <div class="bg-blue-50 p-4 rounded-xl text-center">
              <span class="block text-gray-500 text-xs font-bold uppercase mb-1">Masa Studi</span>
              <span class="block text-[#195682] font-black text-lg">{{ programData.duration }}</span>
            </div>
            <div class="bg-orange-50 p-4 rounded-xl text-center">
              <span class="block text-gray-500 text-xs font-bold uppercase mb-1">Sertifikasi</span>
              <span class="block text-[#f9ac42] font-black text-lg">STR / Kompetensi</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content Tabs -->
      <div class="flex flex-col lg:flex-row gap-12">
        <main class="w-full lg:w-2/3">
          <div class="bg-white rounded-2xl shadow-md overflow-hidden">
            <!-- Tabs Header -->
            <div class="flex border-b overflow-x-auto hide-scrollbar bg-gray-50">
              <button 
                v-for="tab in ['kompetensi', 'prospek', 'fasilitas']" 
                :key="tab"
                @click="activeTab = tab"
                class="px-8 py-5 text-sm font-bold uppercase whitespace-nowrap transition-colors border-b-4 relative"
                :class="activeTab === tab ? 'text-[#195682] border-[#f9ac42] bg-white' : 'text-gray-500 border-transparent hover:text-gray-800'"
              >
                {{ tab === 'kompetensi' ? 'Kompetensi Kelulusan' : tab === 'prospek' ? 'Prospek Karir' : 'Fasilitas Penunjang' }}
              </button>
            </div>

            <!-- Tab Content -->
            <div class="p-8">
              <div v-if="activeTab === 'kompetensi'" class="animate-fade-in-up prose max-w-none text-gray-700">
                <h3 class="text-2xl font-bold text-[#0b2b42] mb-4">Target Kompetensi Lulusan</h3>
                <div v-html="programData.competence.replace(/\n-/g, '<br>-').replace(/\n/g, '<br>')"></div>
              </div>

              <div v-if="activeTab === 'prospek'" class="animate-fade-in-up prose max-w-none text-gray-700">
                <h3 class="text-2xl font-bold text-[#0b2b42] mb-4">Peluang Karir</h3>
                <div v-html="programData.prospects.replace(/\n-/g, '<br>-').replace(/\n/g, '<br>')"></div>
              </div>

              <div v-if="activeTab === 'fasilitas'" class="animate-fade-in-up prose max-w-none text-gray-700">
                <h3 class="text-2xl font-bold text-[#0b2b42] mb-4">Laboratorium Mini Hospital</h3>
                <p>Kami memiliki *Mini Hospital* berstandar nasional untuk memastikan *skill lab* mahasiswa diasah maksimal tanpa resiko fatal terhadap pasien di fase belajar fundamental.</p>
                <div class="grid grid-cols-2 gap-4 mt-4">
                  <img src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400" class="rounded-xl w-full h-32 object-cover object-top" />
                  <img src="https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=400" class="rounded-xl w-full h-32 object-cover object-top" />
                </div>
              </div>
            </div>
          </div>
        </main>

        <!-- Sidebar Requirements -->
        <aside class="w-full lg:w-1/3">
          <div class="bg-gradient-to-br from-[#195682] to-[#041c2e] rounded-2xl shadow-xl p-8 text-white sticky top-24">
            <h3 class="text-2xl font-bold mb-6 text-[#f9ac42]">Syarat Pendaftaran</h3>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start">
                <svg class="w-6 h-6 mr-3 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Lulusan SMA/MA/SMK Kesehatan/Sederajat Semua Jurusan*</span>
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 mr-3 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Tinggi Badan min: Laki-laki 155cm, Perempuan 150cm</span>
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 mr-3 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Berbadan Sehat, Tidak Buta Warna Parsial/Total</span>
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 mr-3 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Membawa Fotokopi Ijazah / SKL / Rapor & KTP / KK.</span>
              </li>
            </ul>
            <div class="pt-6 border-t border-white/20">
              <p class="text-sm text-blue-200 mb-4">*Cek kelengkapan syarat spesifik prodi di panitia PMB.</p>
              <a href="https://pmb.unidsoe.ac.id" target="_blank" class="block w-full text-center bg-[#f9ac42] hover:bg-orange-500 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-orange-500/30">
                Daftar PMB Sekarang
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div> <!-- Close container-custom from line 11 -->

    <div v-else class="container-custom py-32 text-center">
      <h2 class="text-3xl font-bold text-[#0b2b42] mb-4">Data Program Studi Belum Dilengkapi</h2>
      <p class="text-gray-600 mb-8">Maaf, program studi yang Anda tuju belum memiliki data yang dikonfigurasi melalui sistem CMS.</p>
      <router-link to="/program-studi" class="px-6 py-3 bg-[#195682] text-white font-bold rounded-lg hover:bg-[#0b2b42]">Kembali ke Daftar Prodi</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue' // Changed from manual var to normal import, Vite will handle
import { useRoute } from 'vue-router'
import PageHeader from '../components/PageHeader.vue'

const route = useRoute()
const slug = computed(() => route.params.slug || 'program-studi')

// Load all JSON files dynamically from Vite
const modules = import.meta.glob('../data/programs/*.json', { eager: true, import: 'default' })

const programData = computed(() => {
  const path = `../data/programs/${slug.value}.json`
  return modules[path] || null
})

const activeTab = ref('kompetensi')

// Reset tab when changing route
watch(slug, () => {
    activeTab.value = 'kompetensi'
})
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.animate-fade-in-up {
  animation: fadeInUp 0.4s ease-out forwards;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
