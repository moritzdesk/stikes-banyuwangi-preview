<template>
  <section class="py-16 md:py-24 bg-gray-50 font-sans">
    <div class="container-custom">
      <!-- Section 1: Berita (General News) -->
      <div class="flex flex-col md:flex-row justify-between items-end mb-12">
        <div class="max-w-2xl">
          <h2 class="text-3xl md:text-4xl font-bold text-[#195682] mb-4">
            Berita
          </h2>
          <p class="text-gray-600 text-lg">
            Kumpulan berita umum dan informasi terkini.
          </p>
        </div>
        <router-link to="/artikel" class="hidden md:inline-flex items-center text-[#f9ac42] font-semibold hover:text-orange-600 transition-colors mt-4 md:mt-0">
          Lihat Semua Berita
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </router-link>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mb-20">
        <article v-for="(news, index) in generalNews" :key="index" class="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden border border-gray-100 flex flex-col h-full">
          <div class="relative h-52 overflow-hidden">
            <img 
              :src="news.image" 
              :alt="news.title" 
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute top-4 left-4 bg-[#f9ac42] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              Berita
            </div>
          </div>
          <div class="p-6 flex-1 flex flex-col">
            <div class="text-sm text-gray-500 mb-3 flex items-center font-medium">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              {{ news.date }}
            </div>
            <h3 class="text-xl font-bold text-[#0b2b42] mb-3 group-hover:text-[#195682] transition-colors leading-snug">
              {{ news.title }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
              {{ news.excerpt }}
            </p>
            <router-link to="/artikel" class="inline-flex items-center text-[#195682] font-bold text-sm hover:underline mt-auto">
              Baca Selengkapnya
            </router-link>
          </div>
        </article>
      </div>

      <!-- Section 2: Informasi Unidsoe (Campus Specific) -->
      <div class="flex flex-col md:flex-row justify-between items-end mb-12 pt-16 border-t border-gray-200">
        <div class="max-w-2xl">
          <h2 class="text-3xl md:text-4xl font-bold text-[#195682] mb-4">
            Informasi Unidsoe
          </h2>
          <p class="text-gray-600 text-lg">
            Inspirasi alumni, prestasi mahasiswa, opini dosen, dan tips kesehatan dari pakar UNIDSOE.
          </p>
        </div>
        <router-link to="/artikel" class="hidden md:inline-flex items-center text-[#f9ac42] font-semibold hover:text-orange-600 transition-colors mt-4 md:mt-0">
          Lihat Semua Informasi
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </router-link>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <article v-for="(info, index) in campusInfo" :key="index" class="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden border border-gray-100 flex flex-col h-full">
          <div class="relative h-52 overflow-hidden">
            <img 
              :src="info.image" 
              :alt="info.title" 
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute top-4 left-4 bg-[#58d1fd] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              {{ info.category }}
            </div>
          </div>
          <div class="p-6 flex-1 flex flex-col">
            <div class="text-sm text-gray-500 mb-3 flex items-center font-medium">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              {{ info.date }}
            </div>
            <h3 class="text-xl font-bold text-[#0b2b42] mb-3 group-hover:text-[#195682] transition-colors leading-snug">
              {{ info.title }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
              {{ info.excerpt }}
            </p>
            <router-link to="/artikel" class="inline-flex items-center text-[#195682] font-bold text-sm hover:underline mt-auto">
              Baca Selengkapnya
            </router-link>
          </div>
        </article>
      </div>

      <div class="mt-8 text-center md:hidden">
        <router-link to="/artikel" class="inline-flex items-center text-[#f9ac42] font-semibold hover:text-orange-600 transition-colors">
          Lihat Semua Berita
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </router-link>
      </div>

      <!-- View All Button -->
      <div class="text-center mt-12">
        <router-link 
          to="/artikel" 
          class="inline-flex items-center px-8 py-4 bg-[#195682] text-white font-bold rounded-full hover:bg-[#0b2b42] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 group"
        >
          Lihat Semua Berita
          <svg class="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const generalNews = ref([
  {
    title: "Visi Al-Qur'an Menjawab Tantangan Zaman: Refleksi Akademik di Universitas Dr. Soekardjo Banyuwangi",
    date: "9 Desember 2025",
    image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Seminar nasional yang membahas integrasi nilai-nilai spiritual dalam pendidikan kesehatan modern."
  },
  {
    title: "International Day 2025: Tegaskan Komitmen sebagai Kampus Global",
    date: "5 Desember 2025",
    image: "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Perayaan budaya internasional yang menyatukan mahasiswa dari berbagai latar belakang global."
  },
  {
    title: "Semarak Milad Ke-24: Donor Darah Peduli Sesama untuk Masyarakat",
    date: "4 Desember 2025",
    image: "https://images.pexels.com/photos/6812480/pexels-photo-6812480.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Aksi kemanusiaan sebagai bentuk syukur institusi, melibatkan sivitas akademika dan masyarakat."
  }
])

const campusInfo = ref([
  {
    title: "Opini Dosen: Peran Perawat dalam Menghadapi Era Digitalisasi Kesehatan",
    date: "12 Januari 2025",
    image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Opini",
    excerpt: "Analisis mendalam mengenai adaptasi profesi kesehatan terhadap kemajuan teknologi medis masa kini."
  },
  {
    title: "Tips Sehat: Cara Menjaga Kualitas Tidur di Tengah Padatnya Aktivitas Perkuliahan",
    date: "05 Februari 2025",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Tips",
    excerpt: "Panduan praktis bagi mahasiswa untuk tetap bugar dan produktif dengan istirahat yang berkualitas."
  },
  {
    title: "Luar Biasa! 10 Proposal PKM Mahasiswa Lolos Didanai Kemdikbud Nasional",
    date: "20 Januari 2025",
    image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Prestasi",
    excerpt: "Bukti nyata kualitas riset dan inovasi mahasiswa Universitas Dr. Soekardjo Banyuwangi di kancah nasional."
  }
])
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>
