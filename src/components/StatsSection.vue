<template>
  <section class="py-16 md:py-24 bg-gradient-to-br from-[#195682] to-[#0b2b42] text-white relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-96 h-96 bg-[#58d1fd] rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#f9ac42] rounded-full blur-3xl"></div>
    </div>

    <div class="container-custom relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <span class="text-[#f9ac42] font-bold tracking-wider uppercase text-sm mb-2 block">Statistik & Keunggulan</span>
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-4">
          Komitmen Kami untuk Keunggulan
        </h2>
        <p class="text-gray-300 text-lg max-w-3xl mx-auto">
          Dipercaya ribuan mahasiswa dan mitra institusi untuk menghasilkan tenaga kesehatan profesional
        </p>
      </div>

      <!-- Stats Grid with Counter Animation -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
        <!-- Stat 1 -->
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 border border-white/20">
          <div class="text-5xl md:text-6xl font-bold text-[#58d1fd] mb-2">11</div>
          <div class="text-sm md:text-base font-medium text-gray-200">Program Studi</div>
          <div class="text-xs text-gray-400 mt-1">Terakreditasi</div>
        </div>

        <!-- Stat 2 -->
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 border border-white/20">
          <div class="text-5xl md:text-6xl font-bold text-[#f9ac42] mb-2">3000+</div>
          <div class="text-sm md:text-base font-medium text-gray-200">Mahasiswa Aktif</div>
          <div class="text-xs text-gray-400 mt-1">Dari berbagai daerah</div>
        </div>

        <!-- Stat 3 -->
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 border border-white/20">
          <div class="text-5xl md:text-6xl font-bold text-[#58d1fd] mb-2">150+</div>
          <div class="text-sm md:text-base font-medium text-gray-200">Dosen Berkualitas</div>
          <div class="text-xs text-gray-400 mt-1">S2 & S3</div>
        </div>

        <!-- Stat 4 -->
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 border border-white/20">
          <div class="text-5xl md:text-6xl font-bold text-[#f9ac42] mb-2">5000+</div>
          <div class="text-sm md:text-base font-medium text-gray-200">Alumni Sukses</div>
          <div class="text-xs text-gray-400 mt-1">Tersebar di Indonesia</div>
        </div>
      </div>

      <!-- Kerjasama Section (Updated from reference) -->
      <div class="bg-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
        <div class="text-center mb-12">
          <h3 class="text-3xl md:text-4xl font-extrabold text-[#333333] mb-2">
            Kerjasama Universitas Dr. Soekardjo Banyuwangi
          </h3>
          <p class="text-gray-500 font-medium">
            Instansi yang bekerjasama dengan Universitas Dr. Soekardjo Banyuwangi
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <!-- Counter 1 -->
          <div class="text-center group">
            <div class="text-4xl md:text-5xl font-bold text-[#c01c0c] mb-3 transform group-hover:scale-110 transition-transform duration-300">4</div>
            <div class="text-[10px] md:text-xs font-bold text-[#333333] uppercase lg:leading-[1.4] tracking-wider px-2">
              Pemerintah<br class="hidden lg:block"/>Kabupaten
            </div>
          </div>

          <!-- Counter 2 -->
          <div class="text-center group">
            <div class="text-4xl md:text-5xl font-bold text-[#c01c0c] mb-3 transform group-hover:scale-110 transition-transform duration-300">32</div>
            <div class="text-[10px] md:text-xs font-bold text-[#333333] uppercase lg:leading-[1.4] tracking-wider px-2">
              Instansi Pendidikan<br class="hidden lg:block"/>Dalam Negeri
            </div>
          </div>

          <!-- Counter 3 -->
          <div class="text-center group">
            <div class="text-4xl md:text-5xl font-bold text-[#c01c0c] mb-3 transform group-hover:scale-110 transition-transform duration-300">7</div>
            <div class="text-[10px] md:text-xs font-bold text-[#333333] uppercase lg:leading-[1.4] tracking-wider px-2">
              Instansi Pendidikan<br class="hidden lg:block"/>Luar Negeri
            </div>
          </div>

          <!-- Counter 4 -->
          <div class="text-center group">
            <div class="text-4xl md:text-5xl font-bold text-[#c01c0c] mb-3 transform group-hover:scale-110 transition-transform duration-300">46</div>
            <div class="text-[10px] md:text-xs font-bold text-[#333333] uppercase lg:leading-[1.4] tracking-wider px-2">
              Dunia<br class="hidden lg:block"/>Industri
            </div>
          </div>

          <!-- Counter 5 -->
          <div class="text-center group">
            <div class="text-4xl md:text-5xl font-bold text-[#c01c0c] mb-3 transform group-hover:scale-110 transition-transform duration-300">17</div>
            <div class="text-[10px] md:text-xs font-bold text-[#333333] uppercase lg:leading-[1.4] tracking-wider px-2">
              Instansi Pemerintahan<br class="hidden lg:block"/>/ Swasta
            </div>
          </div>

          <!-- Counter 6 -->
          <div class="text-center group">
            <div class="text-4xl md:text-5xl font-bold text-[#c01c0c] mb-3 transform group-hover:scale-110 transition-transform duration-300">5</div>
            <div class="text-[10px] md:text-xs font-bold text-[#333333] uppercase lg:leading-[1.4] tracking-wider px-2">
              Organisasi<br class="hidden lg:block"/>Profesi
            </div>
          </div>
        </div>
      </div>

      <!-- Prestigious Achievements Section (Redesigned) -->
      <div class="mt-20">
        <h4 class="text-xl md:text-2xl font-bold text-white mb-8 text-center flex items-center justify-center">
          <span class="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#f9ac42] mr-4"></span>
          🏆 Sertifikasi & Prestasi Unggul
          <span class="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#f9ac42] ml-4"></span>
        </h4>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Achievement 1: PKM -->
          <div class="group bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-[#f9ac42]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(249,172,66,0.2)] relative overflow-hidden">
            <div class="absolute -right-4 -top-4 w-24 h-24 bg-[#f9ac42] opacity-5 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
            <div class="flex items-start mb-4">
              <div class="w-12 h-12 bg-[#f9ac42] rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-orange-950/20">
                <i class="fas fa-trophy text-white text-xl"></i>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#f9ac42] uppercase tracking-[0.2em]">Nasional</span>
                <h5 class="text-white font-bold leading-tight mt-1">PKM 2024</h5>
              </div>
            </div>
            <p class="text-sm text-gray-300 leading-relaxed">
              <span class="text-white font-bold">10 Proposal Mahasiswa</span> terpilih dan lolos didanai secara nasional oleh Kemdikbudristek RI.
            </p>
          </div>

          <!-- Achievement 2: Institutional -->
          <div class="group bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-[#58d1fd]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(88,209,253,0.2)] relative overflow-hidden">
             <div class="absolute -right-4 -top-4 w-24 h-24 bg-[#58d1fd] opacity-5 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
            <div class="flex items-start mb-4">
              <div class="w-12 h-12 bg-[#58d1fd] rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-blue-950/20">
                <i class="fas fa-award text-white text-xl"></i>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#58d1fd] uppercase tracking-[0.2em]">Akreditasi</span>
                <h5 class="text-white font-bold leading-tight mt-1">Institusi Baik</h5>
              </div>
            </div>
            <p class="text-sm text-gray-300 leading-relaxed">
              Telah <span class="text-white font-bold">Terakreditasi BAN-PT</span> dengan komitmen penuh pada standar mutu pendidikan tinggi.
            </p>
          </div>

          <!-- Achievement 3: Nursing -->
          <div class="group bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(74,222,128,0.2)] relative overflow-hidden">
             <div class="absolute -right-4 -top-4 w-24 h-24 bg-green-400 opacity-5 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
            <div class="flex items-start mb-4">
              <div class="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-green-950/20">
                <i class="fas fa-star text-white text-xl"></i>
              </div>
              <div>
                <span class="text-[10px] font-bold text-green-400 uppercase tracking-[0.2em]">Program Studi</span>
                <h5 class="text-white font-bold leading-tight mt-1">Baik Sekali</h5>
              </div>
            </div>
            <p class="text-sm text-gray-300 leading-relaxed">
              <span class="text-white font-bold">S1 Keperawatan & Profesi Ners</span> meraih predikat unggul dalam kualitas pengajaran.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Enhanced Stats Section with Practice Assurance
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>
