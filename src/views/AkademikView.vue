<template>
  <div class="bg-gray-50 min-h-screen pb-20">
    <PageHeader 
      title="Informasi Akademik" 
      :breadcrumbs="[{ label: 'Akademik' }]"
      bgImage="https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    />

    <div class="container-custom mt-12">
      <!-- Grid Akses Cepat Akademik -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <a href="https://siakad.unidsoe.ac.id" target="_blank" class="bg-white rounded-2xl shadow-md p-6 border-t-4 border-[#195682] hover:shadow-xl transition-all transform hover:-translate-y-2 group text-center">
          <div class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#195682] group-hover:scale-110 transition-transform">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </div>
          <h3 class="font-bold text-lg text-gray-900 mb-2">SIAKAD</h3>
          <p class="text-sm text-gray-500">Sistem Informasi Akademik Mahasiswa Terpadu.</p>
        </a>

        <a href="https://elearning.unidsoe.ac.id" target="_blank" class="bg-white rounded-2xl shadow-md p-6 border-t-4 border-[#f9ac42] hover:shadow-xl transition-all transform hover:-translate-y-2 group text-center">
          <div class="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#f9ac42] group-hover:scale-110 transition-transform">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
          </div>
          <h3 class="font-bold text-lg text-gray-900 mb-2">E-Learning</h3>
          <p class="text-sm text-gray-500">Materi daring, tugas, dan ujian CBT (Computer Based Test).</p>
        </a>

        <a href="#" class="bg-white rounded-2xl shadow-md p-6 border-t-4 border-green-500 hover:shadow-xl transition-all transform hover:-translate-y-2 group text-center">
          <div class="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500 group-hover:scale-110 transition-transform">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path></svg>
          </div>
          <h3 class="font-bold text-lg text-gray-900 mb-2">E-Library</h3>
          <p class="text-sm text-gray-500">Katalog jurnal, repository TA, dan e-book kesehatan.</p>
        </a>

        <a href="#" class="bg-white rounded-2xl shadow-md p-6 border-t-4 border-purple-500 hover:shadow-xl transition-all transform hover:-translate-y-2 group text-center">
          <div class="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-500 group-hover:scale-110 transition-transform">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          </div>
          <h3 class="font-bold text-lg text-gray-900 mb-2">Kalender</h3>
          <p class="text-sm text-gray-500">Download kalender akademik format PDF (TA Ganjil/Genap).</p>
        </a>
      </div>

      <!-- Kalender Akademik & Formulir -->
      <div class="flex flex-col lg:flex-row gap-10">
        <!-- Pengumuman Akademik -->
        <main class="w-full lg:w-2/3">
          <div class="bg-white rounded-2xl shadow-md p-8">
            <div class="flex items-center justify-between mb-8 border-b pb-4">
              <h2 class="text-2xl font-bold text-[#0b2b42]">Berita & Pengumuman Akademik</h2>
              <router-link to="/artikel" class="text-sm font-bold text-[#195682] hover:text-[#f9ac42] transition-colors">Lihat Semua →</router-link>
            </div>
            
            <div class="space-y-6">
              <!-- Item -->
              <div v-for="i in 4" :key="i" class="flex gap-4 group">
                <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#195682] to-[#0b2b42] text-white rounded-xl flex flex-col justify-center items-center shadow-md">
                  <span class="text-2xl font-black leading-none">{{ i + 10 }}</span>
                  <span class="text-xs font-medium uppercase">Sep</span>
                </div>
                <div>
                  <a href="#" class="text-lg font-bold text-gray-900 group-hover:text-[#195682] transition-colors leading-tight block mb-1">Pemberitahuan KRS dan Bimbingan Perwalian Semester Ganjil TA 2025/2026</a>
                  <p class="text-sm text-gray-500">Biro Akademik (BAA) menginformasikan jadwal perwalian dibuka mulai tanggal 15 September hingga...</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <!-- Unduh Dokumen -->
        <aside class="w-full lg:w-1/3">
          <div class="bg-white rounded-2xl shadow-md p-8">
            <h2 class="text-2xl font-bold text-[#0b2b42] mb-6 flex items-center">
              <svg class="w-6 h-6 mr-2 text-[#f9ac42]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              Pusat Unduhan
            </h2>
            
            <ul class="space-y-3">
              <li v-for="(doc, idx) in settings.downloads" :key="idx">
                <a :href="doc.file" target="_blank" class="flex items-center justify-between p-3 rounded-lg border border-gray-100 bg-gray-50 hover:bg-[#195682] hover:text-white transition-colors group">
                  <span class="font-medium text-sm text-gray-700 group-hover:text-white truncate pr-4">{{ doc.title }}</span>
                  <svg class="w-5 h-5 text-gray-400 group-hover:text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>

    </div>
  </div>
</template>

<script setup>
import PageHeader from '../components/PageHeader.vue'
import settings from '../data/settings.json'
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>
