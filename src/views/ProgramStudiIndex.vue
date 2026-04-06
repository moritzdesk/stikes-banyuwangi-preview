<template>
  <div class="bg-gray-50 min-h-screen">
    <PageHeader 
      title="Fakultas & Program Studi" 
      :breadcrumbs="[{ label: 'Akademik', path: '/' }, { label: 'Program Studi' }]"
      bgImage="https://images.pexels.com/photos/5212687/pexels-photo-5212687.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    />

    <div class="container-custom py-16">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl font-bold text-[#0b2b42] mb-4">Pilihan Jenjang Karir Kesehatan</h2>
        <p class="text-gray-600 text-lg">
          Universitas Dr. Soekardjo Banyuwangi menyelenggarakan berbagai program studi tersertifikasi dan terakreditasi untuk mencetak tenaga kesehatan profesional yang tangguh.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Loop Programs -->
        <article 
          v-for="(program, index) in programs" 
          :key="program.slug"
          class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col border border-gray-100 group"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="relative h-56 overflow-hidden">
            <img :src="program.image" :alt="program.title" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            
            <div class="absolute top-4 left-4">
              <span class="bg-white/90 backdrop-blur-sm text-[#195682] text-xs font-bold px-3 py-1 rounded-full shadow-sm shadow-black/20">
                {{ program.level }}
              </span>
            </div>
            
            <div class="absolute top-4 right-4">
              <span class="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm shadow-black/20 flex items-center">
                Akreditasi: {{ program.accreditation }}
              </span>
            </div>

            <div class="absolute bottom-4 left-4 right-4">
              <h3 class="text-2xl font-bold text-white">{{ program.title }}</h3>
            </div>
          </div>
          
          <div class="p-6 flex-grow flex flex-col justify-between">
            <div>
              <p class="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                {{ program.description }}
              </p>
              
              <ul class="space-y-2 mb-6 text-sm">
                <li class="flex items-center text-gray-500">
                  <svg class="w-4 h-4 mr-2 text-[#f9ac42]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Masa Studi: {{ program.duration }}
                </li>
                <li class="flex items-center text-gray-500">
                  <svg class="w-4 h-4 mr-2 text-[#f9ac42]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  Gelar: {{ program.degree }}
                </li>
              </ul>
            </div>
            
            <router-link 
              :to="`/program-studi/${program.slug}`" 
              class="w-full inline-flex items-center justify-center font-bold px-4 py-2.5 bg-[#eaf4fe] text-[#195682] hover:bg-[#195682] hover:text-white rounded-lg transition-colors group-hover:shadow-md"
            >
              Lihat Profil Prodi
              <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </router-link>
          </div>
        </article>
      </div>

      <!-- CTA Bottom -->
      <div class="mt-20 bg-[#195682] rounded-3xl p-10 text-center relative overflow-hidden shadow-xl">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div class="relative z-10 w-full max-w-2xl mx-auto">
          <h3 class="text-3xl font-bold text-white mb-4">Siap Memulai Langkah Anda?</h3>
          <p class="text-blue-100 mb-8 text-lg">Pendaftaran Mahasiswa Baru Tahun Akademik 2025/2026 telah dibuka. Raih masa depan cemerlang bersama Universitas Dr. Soekardjo Banyuwangi.</p>
          <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="https://pmb.unidsoe.ac.id" target="_blank" class="px-8 py-3 bg-[#f9ac42] text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30 transform hover:-translate-y-1">
              Daftar Sekarang
            </a>
            <router-link to="/kontak" class="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#195682] transition-colors">
              Hubungi Brosur
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'

// Dummy Data for Programs
const programs = ref([
  {
    title: 'S1 Keperawatan',
    slug: 's1-keperawatan',
    level: 'Sarjana (S1)',
    accreditation: 'Baik Sekali',
    duration: '8 Semester',
    degree: 'S.Kep',
    image: 'https://images.pexels.com/photos/3328173/pexels-photo-3328173.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Program studi unggulan yang mencetak Sarjana Keperawatan berwawasan riset klinis dan komunitas, siap dilanjutkan ke jenjang Profesi Ners untuk lisensi praktik global.'
  },
  {
    title: 'Profesi Ners',
    slug: 'profesi-ners',
    level: 'Profesi',
    accreditation: 'Baik Sekali',
    duration: '2 Semester',
    degree: 'Ners (Ns)',
    image: 'https://images.pexels.com/photos/3845118/pexels-photo-3845118.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Program lanjutan pasca S1 Keperawatan berupa praktik klinik nyata di Rumah Sakit, Puskesmas, dan Komunitas demi mencapai kompetensi profesional perawat.'
  },
  {
    title: 'S1 Kebidanan',
    slug: 's1-kebidanan',
    level: 'Sarjana (S1)',
    accreditation: 'Baik',
    duration: '8 Semester',
    degree: 'S.Keb',
    image: 'https://images.pexels.com/photos/3279196/pexels-photo-3279196.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Mendidik calon bidan profesional yang handal dalam asuhan kebidanan pada kehamilan, persalinan, bayi baru lahir, balita, serta kesehatan reproduksi wanita.'
  },
  {
    title: 'Profesi Bidan',
    slug: 'profesi-bidan',
    level: 'Profesi',
    accreditation: 'Baik',
    duration: '2 Semester',
    degree: 'Bdn.',
    image: 'https://images.pexels.com/photos/6303591/pexels-photo-6303591.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Pendidikan profesi bagi lulusan S1 Kebidanan untuk mendapatkan lisensi praktik mandiri serta kompetensi paripurna dalam pelayanan keluarga berencana.'
  },
  {
    title: 'S1 Gizi',
    slug: 's1-gizi',
    level: 'Sarjana (S1)',
    accreditation: 'Baik',
    duration: '8 Semester',
    degree: 'S.Gz',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Pendidikan ahli gizi atau nutrisionis klinis yang mampu menangani masalah gizi pada individu, rumah sakit (dietisien), masyarakat, dan industri pengelolaan makanan.'
  },
  {
    title: 'D4 Teknologi Laboratorium Medis',
    slug: 'd4-tlm',
    level: 'Sarjana Terapan (D4)',
    accreditation: 'Baik',
    duration: '8 Semester',
    degree: 'S.Tr.A.K.',
    image: 'https://images.pexels.com/photos/3735957/pexels-photo-3735957.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Mencetak ATLM (Ahli Teknologi Laboratorium Medik) spesialis yang andal dalam pemeriksaan patologi klinis, mikrobiologi, biomolekuler (PCR), diagnostik di Rumah Sakit.'
  },
  {
    title: 'D3 Keperawatan',
    slug: 'd3-keperawatan',
    level: 'Ahli Madya (D3)',
    accreditation: 'Unggul',
    duration: '6 Semester',
    degree: 'Amd.Kep',
    image: 'https://images.pexels.com/photos/3952044/pexels-photo-3952044.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Program vokasi keperawatan legendaris yang memadukan teori terapan (30%) dan praktik langsung (70%). Lulusan sangat diminati oleh klinik dan rumah sakit seluruh Indonesia.'
  },
  {
    title: 'D3 Farmasi',
    slug: 'd3-farmasi',
    level: 'Ahli Madya (D3)',
    accreditation: 'Baik',
    duration: '6 Semester',
    degree: 'Amd.Far',
    image: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Membangun Tenaga Teknis Kefarmasian (TTK) yang terampil meracik obat, mengelola instalasi farmasi RS/Apotek, dan QA QC di industri obat/kosmetik.'
  }
])
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

article {
  animation: fadeIn 0.8s ease-out forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
