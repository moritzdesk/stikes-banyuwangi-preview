<template>
  <div class="bg-gray-50 min-h-screen">
    <PageHeader 
      :title="$t('profil.title')" 
      :breadcrumbs="[{ label: $t('profil.crumbAbout'), path: '/profil' }, { label: activeTabLabel }]"
      bgImage="/assets/site/pexels-1181675.jpg"
    />

    <div class="container-custom py-12">
      <div class="flex flex-col md:flex-row gap-8">
        
        <!-- Sidebar Navigation -->
        <aside class="w-full md:w-1/4">
          <div class="bg-white rounded-xl shadow-md p-6 sticky top-24">
            <h3 class="text-xl font-bold text-[#195682] mb-6 border-b pb-3">{{ $t('profil.menuTitle') }}</h3>
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
              <li>
                <router-link 
                  to="/identitas"
                  class="w-full text-left px-4 py-3 rounded-lg transition-all font-medium flex justify-between items-center text-gray-600 hover:bg-gray-100"
                >
                  {{ $t('nav.identity') }}
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </router-link>
              </li>
            </ul>
          </div>
        </aside>

        <!-- Main Content Area -->
        <main class="w-full md:w-3/4 space-y-8">
          
          <!-- Sejarah -->
          <section v-if="activeTab === 'sejarah'" class="bg-white rounded-xl shadow-md p-8 animate-fade-in-up">
            <h2 class="text-3xl font-bold text-[#0b2b42] mb-6">{{ $t('profil.historyTitle') }}</h2>
            <div class="prose max-w-none text-gray-700 space-y-4">
              <img src="/assets/uploads/gerbang-depan.jpeg" class="w-full h-auto object-contain rounded-xl mb-6 shadow-sm" alt="Gerbang Depan Universitas Dr. Soekardjo" />
              <div v-html="renderRichText(profilData.sejarah)" class="leading-relaxed"></div>
              <div class="bg-blue-50 border-l-4 border-[#195682] p-4 my-6 italic text-gray-700">
                "We Create Graduates Who Serve The World."
              </div>
            </div>
          </section>

          <!-- Visi Misi -->
          <section v-if="activeTab === 'visi-misi'" class="bg-white rounded-xl shadow-md p-8 animate-fade-in-up">
            <h2 class="text-3xl font-bold text-[#0b2b42] mb-8 text-center">{{ $t('profil.visionTitle') }}</h2>
            
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
              <span class="w-8 h-8 rounded-lg bg-[#f9ac42] text-white flex items-center justify-center mr-3 text-lg">M</span> {{ $t('profil.missionTitle').slice(1) }}
            </h3>
            <ul class="space-y-4">
              <li v-for="(misiItem, index) in profilData.misi" :key="index" class="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <span class="flex-shrink-0 w-8 h-8 rounded-full bg-[#195682] text-white flex items-center justify-center font-bold mr-4">{{ index + 1 }}</span>
                <p class="text-gray-700 leading-relaxed mt-1">{{ misiItem }}</p>
              </li>
            </ul>

            <template v-if="profilData.tujuan && profilData.tujuan.length">
              <h3 class="text-2xl font-bold text-[#0b2b42] mb-2 mt-12 flex items-center">
                <span class="w-8 h-8 rounded-lg bg-[#f9ac42] text-white flex items-center justify-center mr-3 text-lg">T</span> TUJUAN
              </h3>
              <div class="space-y-8 mt-6">
                <div v-for="(t, ti) in profilData.tujuan" :key="'t'+ti" class="border border-gray-200 rounded-xl p-6">
                  <h4 class="font-bold text-lg text-[#195682] mb-3">{{ t.bidang }}</h4>
                  <ul class="space-y-2">
                    <li v-for="(p, pi) in t.poin" :key="'tp'+pi" class="flex items-start text-gray-700 leading-relaxed">
                      <span class="flex-shrink-0 w-6 h-6 rounded-full bg-[#195682] text-white flex items-center justify-center font-bold mr-3 text-xs">{{ pi + 1 }}</span>
                      <span>{{ p }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </template>

            <template v-if="profilData.sasaran && profilData.sasaran.length">
              <h3 class="text-2xl font-bold text-[#0b2b42] mb-2 mt-12 flex items-center">
                <span class="w-8 h-8 rounded-lg bg-[#f9ac42] text-white flex items-center justify-center mr-3 text-lg">S</span> SASARAN
              </h3>
              <div class="space-y-8 mt-6">
                <div v-for="(s, si) in profilData.sasaran" :key="'s'+si" class="border border-gray-200 rounded-xl p-6">
                  <h4 class="font-bold text-lg text-[#195682] mb-3">{{ s.bidang }}</h4>
                  <ul class="space-y-2">
                    <li v-for="(p, pi) in s.poin" :key="'sp'+pi" class="flex items-start text-gray-700 leading-relaxed">
                      <span class="flex-shrink-0 w-6 h-6 rounded-full bg-[#195682] text-white flex items-center justify-center font-bold mr-3 text-xs">{{ pi + 1 }}</span>
                      <span>{{ p }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </template>
          </section>

          <!-- Struktur Organisasi -->
          <section v-if="activeTab === 'struktur'" class="bg-white rounded-xl shadow-md p-8 animate-fade-in-up">
            <h2 class="text-3xl font-bold text-[#0b2b42] mb-6">Struktur Organisasi</h2>
            <p class="text-gray-600 mb-8">Bagan struktural fungsional kepemimpinan di lingkungan Universitas Dr. Soekardjo Banyuwangi.</p>
            
            <div class="relative rounded-2xl overflow-hidden border-2 border-gray-100 bg-gray-50 p-4 group cursor-zoom-in">
              <img src="/assets/site/struktur-organisasi.jpeg" alt="Bagan Struktur Organisasi" class="w-full h-auto object-contain max-h-[600px]" />
            </div>

            <div class="mt-10">
              <h4 class="font-bold text-xl text-[#195682] mb-6">KETERANGAN UNIT/BIRO</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span class="flex-shrink-0 w-12 rounded-lg bg-[#195682] text-white text-center font-bold text-sm px-2 py-1 mr-3">BKM</span>
                  <p class="text-gray-700 leading-relaxed mt-1">BIRO KEMAHASISWAAN</p>
                </div>
                <div class="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span class="flex-shrink-0 w-12 rounded-lg bg-[#195682] text-white text-center font-bold text-sm px-2 py-1 mr-3">BDI</span>
                  <p class="text-gray-700 leading-relaxed mt-1">BIRO DATA DAN INFORMASI</p>
                </div>
                <div class="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span class="flex-shrink-0 w-12 rounded-lg bg-[#195682] text-white text-center font-bold text-sm px-2 py-1 mr-3">BHK</span>
                  <p class="text-gray-700 leading-relaxed mt-1">BIRO HUMAS DAN KERJASAMA</p>
                </div>
                <div class="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span class="flex-shrink-0 w-12 rounded-lg bg-[#195682] text-white text-center font-bold text-sm px-2 py-1 mr-3">PMB</span>
                  <p class="text-gray-700 leading-relaxed mt-1">PENERIMAAN MAHASISWA BARU</p>
                </div>
                <div class="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span class="flex-shrink-0 w-12 rounded-lg bg-[#195682] text-white text-center font-bold text-sm px-2 py-1 mr-3">PPM</span>
                  <p class="text-gray-700 leading-relaxed mt-1">PUSAT PENJAMIN MUTU</p>
                </div>
                <div class="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span class="flex-shrink-0 w-12 rounded-lg bg-[#195682] text-white text-center font-bold text-sm px-2 py-1 mr-3">PPPM</span>
                  <p class="text-gray-700 leading-relaxed mt-1">PUSAT PENELITIAN DAN PENGABDIAN MASYARAKAT</p>
                </div>
                <div class="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span class="flex-shrink-0 w-12 rounded-lg bg-[#195682] text-white text-center font-bold text-sm px-2 py-1 mr-3">BAUM</span>
                  <p class="text-gray-700 leading-relaxed mt-1">BIRO UMUM</p>
                </div>
                <div class="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span class="flex-shrink-0 w-12 rounded-lg bg-[#195682] text-white text-center font-bold text-sm px-2 py-1 mr-3">BAKEU</span>
                  <p class="text-gray-700 leading-relaxed mt-1">BIRO ADMINISTRASI KEUANGAN</p>
                </div>
                <div class="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span class="flex-shrink-0 w-12 rounded-lg bg-[#195682] text-white text-center font-bold text-sm px-2 py-1 mr-3">BAKEP</span>
                  <p class="text-gray-700 leading-relaxed mt-1">BIRO ADMINISTRASI KEPEGAWAIAN</p>
                </div>
                <div class="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span class="flex-shrink-0 w-12 rounded-lg bg-[#195682] text-white text-center font-bold text-sm px-2 py-1 mr-3">BAAK</span>
                  <p class="text-gray-700 leading-relaxed mt-1">BIRO ADMINISTRASI AKADEMIK</p>
                </div>
                <div class="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span class="flex-shrink-0 w-12 rounded-lg bg-[#195682] text-white text-center font-bold text-sm px-2 py-1 mr-3">PPK</span>
                  <p class="text-gray-700 leading-relaxed mt-1">PUSAT PENGEMBANGAN KURIKULUM</p>
                </div>
                <div class="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span class="flex-shrink-0 w-12 rounded-lg bg-[#195682] text-white text-center font-bold text-sm px-2 py-1 mr-3">PPPU</span>
                  <p class="text-gray-700 leading-relaxed mt-1">PUSAT PERENCANAAN DAN PENGEMBANGAN UNIVERSITAS</p>
                </div>
              </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div class="border border-gray-200 rounded-xl p-6 hover:border-[#f9ac42] hover:shadow-md transition-all">
                <h4 class="font-bold text-lg text-[#195682] mb-2">Pimpinan Institusi</h4>
                <ul class="text-gray-600 space-y-2 text-sm">
                  <li><span class="font-semibold text-gray-800">Rektor:</span> Dr. Drs. H. Soekardjo, S.Kep., MM., MBA</li>
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
            <h2 class="text-3xl font-bold text-[#0b2b42] mb-8">{{ $t('profil.greetingTitle') }}</h2>
            
            <div class="flex flex-col lg:flex-row gap-8 items-start">
              <div class="w-full lg:w-1/3 flex-shrink-0">
                <div class="rounded-xl overflow-hidden shadow-lg border-4 border-white mb-4">
                  <img :src="profilData.fotoKetua" alt="Rektor" class="w-full h-auto object-cover aspect-[3/4]" />
                </div>
                <div class="text-center">
                  <h4 class="font-bold text-lg text-gray-900">{{ profilData.namaKetua }}</h4>
                  <p class="text-sm text-[#f9ac42] font-semibold">{{ $t('profil.rectorOf') }}</p>
                </div>
              </div>
              
              <div class="w-full lg:w-2/3">
                <div class="prose max-w-none text-gray-700 space-y-4">
                  <p class="font-bold text-xl text-[#195682] italic mb-6">{{ $t('profil.greetingQuote') }}</p>
                  
                  <div v-html="renderRichText(profilData.sambutan)" class="leading-relaxed"></div>
                  
                  <div class="mt-8 pt-6 border-t border-gray-100">
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
import { ref as vueRef, computed as vueComputed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import PageHeader from '../components/PageHeader.vue'
import { getProfil } from '../composables/useSite'

// Data lokal hasil prebuild Payload (tanpa JSON statis)
const profilData = getProfil()

// Render sejarah/sambutan: HTML dari TinyMCE langsung, plain text lama fallback \n\n -> <br><br>
function renderRichText(text) {
  if (!text) return ''
  if (/<[a-z][\s\S]*>/i.test(text)) return text
  return text.replace(/\n\n/g, '<br><br>')
}

const route = useRoute()
const { t } = useI18n()
const activeTab = vueRef('sejarah')

const tabs = vueComputed(() => [
  { id: 'sejarah', label: t('profil.tabHistory') },
  { id: 'visi-misi', label: t('profil.tabVision') },
  { id: 'struktur', label: t('profil.tabStructure') },
  { id: 'sambutan', label: t('profil.tabGreeting') },
])

const updateTabFromQuery = () => {
  const queryTab = route.query.tab
  if (queryTab && tabs.value.some(t => t.id === queryTab)) {
    activeTab.value = queryTab
  }
}

onMounted(() => {
  updateTabFromQuery()
})

watch(() => route.query.tab, () => {
  updateTabFromQuery()
})

const activeTabLabel = vueComputed(() => {
  const tab = tabs.value.find(t => t.id === activeTab.value)
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
