<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Standard Page Header Component -->
    <PageHeader 
      :title="data.title" 
      :breadcrumbs="[{ label: 'PMB / Pendaftaran' }]"
      :bgImage="data.heroImage"
    />

    <!-- Main Content Area -->
    <div class="container-custom py-12">
      <!-- Welcome & Timeline Overview Card -->
      <div class="bg-white rounded-xl shadow-md p-8 border border-gray-100 mb-12 animate-fade-in-up">
        <div class="grid md:grid-cols-12 gap-8 items-center">
          <div class="md:col-span-7 space-y-4">
            <span class="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-50 text-[#195682] text-sm font-bold border border-blue-100">
              🗓️ Gelombang TA 2026/2027
            </span>
            <h2 class="text-3xl font-bold text-[#0b2b42] leading-tight">
              Mulai Langkah Sukses Masa Depan Anda Bersama UNIDSOE
            </h2>
            <p class="text-gray-600 leading-relaxed text-sm md:text-base">
              {{ data.subtitle }} Pendaftaran online dibuka secara berkala sepanjang tahun akademik. Pastikan Anda mengamankan kuota program studi pilihan Anda lebih awal.
            </p>
            <div class="p-4 bg-gray-50 rounded-xl border border-gray-200 inline-flex items-center space-x-3 mt-2">
              <div class="w-10 h-10 bg-[#f9ac42]/20 text-[#f9ac42] rounded-lg flex items-center justify-center text-xl">
                📅
              </div>
              <div>
                <div class="text-xs font-bold text-gray-400 uppercase tracking-wider">Periode Pendaftaran:</div>
                <div class="text-sm font-bold text-[#0b2b42]">{{ data.openDate }}</div>
              </div>
            </div>
          </div>
          <div class="md:col-span-5 relative group overflow-hidden rounded-xl shadow-sm">
            <img 
              :src="data.heroImage" 
              :alt="data.title" 
              class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
            />
          </div>
        </div>
      </div>

      <!-- Registration Pathways Grid -->
      <div class="mb-12">
        <div class="text-center mb-10">
          <span class="text-[#195682] font-bold uppercase tracking-wider text-sm block mb-2">Jalur Seleksi</span>
          <h2 class="text-3xl font-bold text-[#0b2b42]">Pilihan Jalur Pendaftaran</h2>
          <p class="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
            Tersedia berbagai pilihan jalur masuk yang disesuaikan dengan minat, bakat, dan kompetensi calon mahasiswa:
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            v-for="(path, index) in data.registrationPaths" 
            :key="index"
            class="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <span class="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[#195682] text-xs font-bold mb-4 border border-blue-100">
              {{ path.badge }}
            </span>
            <h3 class="text-lg font-bold text-[#0b2b42] mb-2 leading-tight">
              {{ path.name }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ path.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Registration Requirements & Step Timeline Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        <!-- Requirements Card (Left) -->
        <div class="lg:col-span-5 bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h3 class="text-xl font-bold text-[#0b2b42] mb-6 pb-3 border-b flex items-center">
            <span class="mr-2 text-xl">📄</span> Persyaratan Pendaftaran
          </h3>
          <ul class="space-y-4">
            <li 
              v-for="(req, index) in data.requirements" 
              :key="index"
              class="flex items-start space-x-3 text-gray-700 text-sm"
            >
              <svg class="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>{{ req }}</span>
            </li>
          </ul>
        </div>

        <!-- Step-by-Step Timeline (Right) -->
        <div class="lg:col-span-7 bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h3 class="text-xl font-bold text-[#0b2b42] mb-6 pb-3 border-b flex items-center">
            <span class="mr-2 text-xl">⚙️</span> Alur Alur Pendaftaran (Langkah demi Langkah)
          </h3>
          <div class="relative pl-6 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-blue-100">
            <div 
              v-for="(step, index) in data.steps" 
              :key="index"
              class="relative"
            >
              <!-- Circle indicator -->
              <div class="absolute -left-[31px] w-6 h-6 rounded-full bg-[#195682] border-4 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                {{ index + 1 }}
              </div>
              <div class="pl-2">
                <h4 class="font-bold text-[#0b2b42] text-base mb-1">{{ step.title }}</h4>
                <p class="text-gray-600 text-sm leading-relaxed">{{ step.description }}</p>
              </div>
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

        <span class="text-[#f9ac42] font-bold uppercase tracking-wider text-sm block mb-2 relative z-10">Portal Online Resmi</span>
        <h2 class="text-3xl font-bold mb-4 relative z-10 leading-tight">
          Pendaftaran Online Mahasiswa Baru TA 2026/2027
        </h2>
        <p class="text-blue-100 mb-6 max-w-lg mx-auto relative z-10 leading-relaxed font-light text-sm md:text-base">
          Proses pendaftaran sangat mudah dan cepat. Amankan kuota kursi kuliah Anda sekarang juga dengan mengisi form di bawah ini.
        </p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
          <a 
            href="https://stikesbanyuwangi.ac.id/penerimaan-mahasiswa-baru/"
            target="_blank"
            class="w-full sm:w-auto bg-[#f9ac42] hover:bg-[#e0932c] text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md text-base"
          >
            Daftar Sekarang Secara Online
          </a>
          <a 
            :href="`https://wa.me/${data.contactWhatsapp?.replace(/-/g, '')}`"
            target="_blank"
            class="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-8 rounded-xl border border-white/20 transition-all duration-300 text-base flex items-center justify-center space-x-2"
          >
            <span>💬 Hubungi Hotline PMB</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import data from '../data/infopmb.json'

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
