<template>
  <div class="bg-gray-50 min-h-screen">
    <PageHeader 
      title="Profil STIKES" 
      :breadcrumbs="[{ label: 'Tentang Kami', path: '/profil' }, { label: activeTabLabel }]"
      bgImage="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    />

    <div class="container-custom py-12">
      <div class="flex flex-col md:flex-row gap-8">
        
        <!-- Sidebar Navigation -->
        <aside class="w-full md:w-1/4">
          <div class="bg-white rounded-xl shadow-md p-6 sticky top-24">
            <h3 class="text-xl font-bold text-[#195682] mb-6 border-b pb-3">Menu Profil</h3>
            <ul class="space-y-2">
              <li v-for="tab in tabs" :key="tab.id">
                <button 
                  @click="activeTab = tab.id"
                  class="w-full text-left px-4 py-3 rounded-lg transition-all font-medium flex justify-between items-center"
                  :class="activeTab === tab.id ? 'bg-[#195682] text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'"
                >
                  {{ tab.label }}
                  <svg v-if="activeTab === tab.id" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
              </li>
            </ul>
          </div>
        </aside>

        <!-- Main Content Area -->
        <main class="w-full md:w-3/4 space-y-8">
          
          <!-- Sejarah -->
          <section v-if="activeTab === 'sejarah'" class="bg-white rounded-xl shadow-md p-8 animate-fade-in-up">
            <h2 class="text-3xl font-bold text-[#0b2b42] mb-6">Sejarah Universitas Dr. Soekardjo Banyuwangi</h2>
            <div class="prose max-w-none text-gray-700 space-y-4">
              <img src="https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=800" class="w-full h-64 object-cover rounded-xl mb-6 shadow-sm" alt="Gedung Lama" />
              <div v-html="profilData.sejarah.replace(/\n\n/g, '<br><br>')" class="leading-relaxed"></div>
              <div class="bg-blue-50 border-l-4 border-[#195682] p-4 my-6 italic text-gray-700">
                "Bertekad menjadi sentra pendidikan tenaga kesehatan yang berakhlak mulia, berjiwa entrepreneur, dan kompeten secara global."
              </div>
            </div>
          </section>

          <!-- Visi Misi -->
          <section v-if="activeTab === 'visi-misi'" class="bg-white rounded-xl shadow-md p-8 animate-fade-in-up">
            <h2 class="text-3xl font-bold text-[#0b2b42] mb-8 text-center">Visi & Misi</h2>
            
            <div class="bg-gradient-to-br from-[#195682] to-[#0b2b42] rounded-2xl p-8 mb-10 text-white shadow-lg text-center transform transition-transform hover:scale-[1.02]">
              <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-[#f9ac42] mb-4 shadow-md">
                 <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-[#f9ac42]">V I S I</h3>
              <p class="text-xl font-medium leading-relaxed">
                "{{ profilData.visi }}"
              </p>
            </div>

            <h3 class="text-2xl font-bold text-[#0b2b42] mb-6 flex items-center">
              <span class="w-8 h-8 rounded-lg bg-[#f9ac42] text-white flex items-center justify-center mr-3 text-lg">M</span> ISI
            </h3>
            <ul class="space-y-4">
              <li v-for="(misiItem, index) in profilData.misi" :key="index" class="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <span class="flex-shrink-0 w-8 h-8 rounded-full bg-[#195682] text-white flex items-center justify-center font-bold mr-4">{{ index + 1 }}</span>
                <p class="text-gray-700 leading-relaxed mt-1">{{ misiItem }}</p>
              </li>
            </ul>
          </section>

          <!-- Struktur Organisasi -->
          <section v-if="activeTab === 'struktur'" class="bg-white rounded-xl shadow-md p-8 animate-fade-in-up">
            <h2 class="text-3xl font-bold text-[#0b2b42] mb-6">Struktur Organisasi</h2>
            <p class="text-gray-600 mb-8">Bagan struktural fungsional kepemimpinan di lingkungan Universitas Dr. Soekardjo Banyuwangi.</p>
            
            <div class="relative rounded-2xl overflow-hidden border-2 border-gray-100 bg-gray-50 p-4 group cursor-zoom-in">
              <img src="https://images.pexels.com/photos/7414925/pexels-photo-7414925.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Bagan Struktur Organisasi" class="w-full h-auto object-contain max-h-[600px] mix-blend-multiply opacity-80" />
              
              <!-- Placeholder overlay since real structural chart isn't available yet -->
              <div class="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span class="bg-[#195682] text-white px-6 py-3 rounded-full font-bold shadow-lg">Lihat Ukuran Penuh (Coming Soon)</span>
              </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div class="border border-gray-200 rounded-xl p-6 hover:border-[#f9ac42] hover:shadow-md transition-all">
                <h4 class="font-bold text-lg text-[#195682] mb-2">Pimpinan Institusi</h4>
                <ul class="text-gray-600 space-y-2 text-sm">
                  <li><span class="font-semibold text-gray-800">Ketua:</span> Dr. H. DR (HC) Ners. Soetomo, S.Kep., M.Kes</li>
                  <li><span class="font-semibold text-gray-800">Wakil Ketua 1:</span> Ns. Budi Santoso, M.Kep</li>
                  <li><span class="font-semibold text-gray-800">Wakil Ketua 2:</span> Hj. Siti Robiah, SST., M.Kes</li>
                </ul>
              </div>
              <div class="border border-gray-200 rounded-xl p-6 hover:border-[#f9ac42] hover:shadow-md transition-all">
                <h4 class="font-bold text-lg text-[#195682] mb-2">Biro & Lembaga</h4>
                <ul class="text-gray-600 space-y-2 text-sm">
                  <li><span class="font-semibold text-gray-800">Biro Akademik:</span> Ahmad Fauzi, S.Kom., M.TI</li>
                  <li><span class="font-semibold text-gray-800">LPPM:</span> Dr. dr. Hermawan, M.Epid</li>
                  <li><span class="font-semibold text-gray-800">LPM:</span> Rina Wati, S.Kep., M.Kep</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Sambutan -->
          <section v-if="activeTab === 'sambutan'" class="bg-white rounded-xl shadow-md p-8 animate-fade-in-up">
            <h2 class="text-3xl font-bold text-[#0b2b42] mb-8">Sambutan Ketua</h2>
            
            <div class="flex flex-col lg:flex-row gap-8 items-start">
              <div class="w-full lg:w-1/3 flex-shrink-0">
                <div class="rounded-xl overflow-hidden shadow-lg border-4 border-white mb-4">
                  <img :src="profilData.fotoKetua" alt="Ketua" class="w-full h-auto object-cover aspect-[3/4]" />
                </div>
                <div class="text-center">
                  <h4 class="font-bold text-lg text-gray-900">{{ profilData.namaKetua }}</h4>
                  <p class="text-sm text-[#f9ac42] font-semibold">Ketua Universitas Dr. Soekardjo Banyuwangi</p>
                </div>
              </div>
              
              <div class="w-full lg:w-2/3">
                <div class="prose max-w-none text-gray-700 space-y-4">
                  <p class="font-bold text-xl text-[#195682] italic mb-6">"Selamat Datang di Kampus Terkemuka"</p>
                  
                  <div v-html="profilData.sambutan.replace(/\n\n/g, '<br><br>')" class="leading-relaxed"></div>
                  
                  <!-- Signature Mockup -->
                  <div class="mt-8 pt-6 border-t border-gray-100">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Signature_of_John_Hancock.svg" alt="Tanda Tangan" class="h-16 opacity-50 mb-2" />
                    <p class="font-bold text-gray-900 uppercase">{{ profilData.namaKetua }}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref as vueRef, computed as vueComputed } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import profilData from '../data/profil.json'

// Avoid 'import' conflict, use explicit vue ref
const activeTab = vueRef('sejarah')

const tabs = [
  { id: 'sejarah', label: 'Sejarah & Profil' },
  { id: 'visi-misi', label: 'Visi & Misi' },
  { id: 'struktur', label: 'Struktur Organisasi' },
  { id: 'sambutan', label: 'Sambutan Ketua' }
]

const activeTabLabel = vueComputed(() => {
  const tab = tabs.find(t => t.id === activeTab.value)
  return tab ? tab.label : ''
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
