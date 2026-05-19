<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Page Header component -->
    <PageHeader 
      title="Asosiasi & Mitra Praktik" 
      :breadcrumbs="[{ label: 'Asosiasi & Mitra' }]"
      bgImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
    />

    <!-- Main Content Area -->
    <div class="container-custom py-12">
      <!-- Intro Card -->
      <div class="bg-white rounded-xl shadow-md p-8 md:p-10 border border-gray-100 grid md:grid-cols-12 gap-8 items-center mb-12 animate-fade-in-up">
        <div class="md:col-span-5 relative group overflow-hidden rounded-xl shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80" 
            alt="Kolaborasi Universitas Dr. Soekardjo" 
            class="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
          />
        </div>
        <div class="md:col-span-7 space-y-4">
          <span class="text-[#f9ac42] font-bold uppercase tracking-wider text-sm block">Jejaring Karir & Praktik</span>
          <h2 class="text-3xl font-bold text-[#0b2b42] leading-tight">
            Membangun Masa Depan Melalui Kolaborasi Unggul
          </h2>
          <p class="text-gray-600 leading-relaxed">
            Stikes Banyuwangi bangga menjalin kemitraan yang kuat dengan berbagai organisasi profesi nasional, lembaga pemerintahan, dan instansi kesehatan utama. Melalui kolaborasi strategis ini, kami memastikan bahwa kurikulum akademik kami selalu selaras dengan perkembangan industri nyata, mempermudah akses praktik kerja lapangan, dan membuka peluang karir emas yang luas bagi seluruh wisudawan dan wisudawati kami.
          </p>
          <div class="flex flex-wrap gap-3 pt-2">
            <span class="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-[#195682] text-sm font-semibold border border-blue-100">
              🤝 Mitra Rumah Sakit Terakreditasi
            </span>
            <span class="inline-flex items-center px-4 py-1.5 rounded-full bg-green-50 text-green-800 text-sm font-semibold border border-green-100">
              🏆 Kerjasama Organisasi Profesi Resmi
            </span>
          </div>
        </div>
      </div>

      <!-- Associations Grid -->
      <div class="mb-12">
        <div class="text-center mb-10">
          <span class="text-[#195682] font-bold uppercase tracking-wider text-sm block mb-2">Mitra Resmi</span>
          <h2 class="text-3xl font-bold text-[#0b2b42]">
            Daftar Asosiasi Pendidikan & Praktik
          </h2>
          <p class="text-gray-500 mt-2 max-w-2xl mx-auto text-sm md:text-base">
            Jejaring asosiasi profesi dan mitra institusi kesehatan resmi yang berkolaborasi penuh dengan universitas:
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a 
            v-for="(item, index) in associations" 
            :key="index"
            :href="item.url"
            target="_blank"
            class="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 border border-gray-100 flex flex-col justify-between cursor-pointer"
          >
            <div>
              <!-- Icon/Logo Wrapper -->
              <div class="flex items-center space-x-4 mb-6">
                <div class="p-3 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-colors duration-300 w-16 h-16 flex items-center justify-center shrink-0">
                  <img v-if="item.logo" :src="item.logo" :alt="item.name" class="h-10 w-10 object-contain" />
                  <template v-else>
                    <!-- Pemkab Icon -->
                    <svg v-if="item.iconType === 'pemkab'" class="h-10 w-10 text-[#195682]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    <!-- PPNI Icon -->
                    <svg v-else-if="item.iconType === 'ppni'" class="h-10 w-10 text-[#c01c0c]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 10.5V20a2 2 0 01-2 2H7a2 2 0 01-2-2v-9.5m14 0V9a2 2 0 00-2-2h-2m4 3.5L12 3 3 10.5M3 10.5V9a2 2 0 012-2h2m10 0V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v3m8 0H7" />
                    </svg>
                    <!-- IBI Icon -->
                    <svg v-else-if="item.iconType === 'ibi'" class="h-10 w-10 text-[#58d1fd]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.75 9.75 0 006.74-2.74L18 18m-6-9a3 3 0 11-6 0 3 3 0 016 0zm-6 9a6 6 0 0112 0v3" />
                    </svg>
                    <!-- PAFI Icon -->
                    <svg v-else-if="item.iconType === 'pafi'" class="h-10 w-10 text-green-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <!-- IDI Icon -->
                    <svg v-else-if="item.iconType === 'idi'" class="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <!-- Kemenkes Icon -->
                    <svg v-else-if="item.iconType === 'kemenkes'" class="h-10 w-10 text-teal-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <!-- Empty Placeholder Icon if neither logo nor iconType -->
                    <svg v-else class="h-10 w-10 text-[#195682]/40" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-10.5h16.5M2.25 9h19.5M3 3h18M3.75 6h16.5" />
                    </svg>
                  </template>
                </div>
                <h3 class="text-xl font-bold text-[#0b2b42] group-hover:text-[#195682] transition-colors duration-300">
                  {{ item.name }}
                </h3>
              </div>

              <!-- Partnership details description -->
              <p class="text-gray-500 text-sm md:text-base leading-relaxed mb-6">
                {{ item.desc || 'Kolaborasi dan kemitraan strategis dalam penyediaan sarana pembelajaran, standardisasi kompetensi lulusan, dan pendampingan klinis.' }}
              </p>
            </div>

            <!-- Learn More Action Link -->
            <div class="flex items-center text-[#195682] font-bold text-sm group-hover:text-[#f9ac42] transition-colors duration-300 mt-auto">
              Kunjungi Situs Resmi
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import globalSettings from '../data/settings.json'

const associations = globalSettings.associationsSettings?.items || [
  { name: "Pemkab Banyuwangi", url: "https://banyuwangikab.go.id", iconType: "pemkab", desc: "Kemitraan strategis dalam penyediaan sarana rumah sakit daerah dan pusat kesehatan masyarakat di seluruh Kabupaten Banyuwangi." },
  { name: "PPNI", url: "https://ppni-inna.org", iconType: "ppni", desc: "Persatuan Perawat Nasional Indonesia. Kerjasama standardisasi kompetensi lulusan keperawatan secara nasional." },
  { name: "IBI", url: "https://ibi.or.id", iconType: "ibi", desc: "Ikatan Bidan Indonesia. Pengawasan dan akreditasi praktik belajar klinik kebidanan untuk jaminan kompetensi profesi." },
  { name: "PAFI", url: "https://pafi.or.id", iconType: "pafi", desc: "Persatuan Ahli Farmasi Indonesia. Kolaborasi penempatan praktik kerja lapangan kefarmasian di apotek dan instalasi farmasi." }
]

onMounted(() => {
  document.title = "Daftar Asosiasi & Mitra Praktik | Universitas Dr. Soekardjo"
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
