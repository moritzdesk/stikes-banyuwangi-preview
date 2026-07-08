<template>
  <div class="bg-gray-50 min-h-screen font-sans">
    <!-- Page Header -->
    <PageHeader 
      title="Identitas Universitas" 
      :breadcrumbs="[{ label: 'Profil', to: '/profil' }, { label: 'Identitas' }]"
      bgImage="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    />

    <!-- Main Content -->
    <div class="container-custom py-16 -mt-10 relative z-20">
      
      <!-- 1. LOGO SECTION -->
      <section class="bg-white rounded-3xl shadow-xl overflow-hidden mb-16 border border-gray-100">
        <div class="p-8 sm:p-12 border-b border-gray-100">
          <div class="flex items-center space-x-4 mb-4">
            <span class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#195682] to-[#0b2b42] text-white flex items-center justify-center font-bold text-xl shadow-lg">
              1
            </span>
            <div>
              <h2 class="text-3xl font-extrabold text-[#0b2b42] tracking-tight">Logo Resmi UNIDSOE</h2>
              <p class="text-gray-500 text-sm">Identitas visual resmi Universitas Dr. Soekardjo Banyuwangi</p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <!-- Logo Image Display (Left) -->
          <div class="lg:col-span-5 bg-gradient-to-br from-[#0b2b42] to-[#195682] p-8 sm:p-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div class="relative z-10 bg-white p-8 rounded-3xl border border-white/20 shadow-2xl transition-transform hover:scale-105 duration-500 max-w-xs w-full">
              <img 
                :src="identitasData.logoImage" 
                alt="Logo Resmi Universitas Dr. Soekardjo" 
                class="w-full h-auto object-contain mx-auto"
                onerror="this.src='/assets/logo/logo_unidsoe_kotak.png'"
              />
            </div>
            
            <div class="mt-8 z-10 flex flex-col sm:flex-row gap-3 w-full justify-center">
              <a 
                :href="identitasData.logoImage" 
                download="Logo_UNIDSOE_2025.png" 
                target="_blank"
                class="inline-flex items-center justify-center px-5 py-3 bg-[#f9ac42] hover:bg-[#e09630] text-white font-bold text-sm rounded-xl transition-all shadow-lg transform hover:-translate-y-0.5"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Unduh Logo
              </a>
              <a 
                :href="identitasData.logoDriveUrl" 
                target="_blank"
                class="inline-flex items-center justify-center px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl transition-all border border-white/20 shadow-md transform hover:-translate-y-0.5"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                Drive Folder
              </a>
            </div>
          </div>

          <!-- Logo Philosophy & Arti (Right) -->
          <div class="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-gray-50/50">
            <h3 class="text-xl font-bold text-[#0b2b42] mb-4">Filosofi & Arti Logo</h3>
            <p class="text-gray-600 leading-relaxed mb-8">
              {{ identitasData.logoDescription }}
            </p>

            <div class="border-t border-gray-100 pt-8">
              <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Visualisasi Makna Logo</h4>
              <div class="bg-white p-4 rounded-2xl border border-gray-200/60 shadow-sm overflow-hidden group">
                <img 
                  :src="identitasData.logoPhilosophyImage" 
                  alt="Arti Logo UNIDSOE" 
                  class="w-full h-auto object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. MASCOT SECTION -->
      <section class="bg-white rounded-3xl shadow-xl overflow-hidden mb-16 border border-gray-100">
        <div class="p-8 sm:p-12 border-b border-gray-100">
          <div class="flex items-center space-x-4 mb-4">
            <span class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#f9ac42] to-orange-600 text-white flex items-center justify-center font-bold text-xl shadow-lg">
              2
            </span>
            <div>
              <h2 class="text-3xl font-extrabold text-[#0b2b42] tracking-tight">Maskot UNIDSOE ("KUMBA")</h2>
              <p class="text-gray-500 text-sm">Simbol semangat, karakter, dan filosofi generasi baru UNIDSOE</p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <!-- Mascot Image & Buttons (Left) -->
          <div class="lg:col-span-5 bg-gradient-to-br from-amber-50 to-orange-50/60 p-8 sm:p-12 flex flex-col items-center justify-center text-center border-r border-gray-100">
            <div class="relative z-10 bg-white p-6 rounded-3xl border border-orange-100 shadow-xl transition-transform hover:scale-105 duration-500 max-w-xs w-full mb-6">
              <img 
                :src="identitasData.mascotImage" 
                alt="Maskot Kumba UNIDSOE" 
                class="w-full h-auto object-contain mx-auto"
              />
            </div>

            <div class="flex flex-col sm:flex-row gap-3 w-full justify-center">
              <a 
                :href="identitasData.mascotImage" 
                download="Maskot_KUMBA_UNIDSOE.png" 
                target="_blank"
                class="inline-flex items-center justify-center px-5 py-3 bg-[#195682] hover:bg-[#0b2b42] text-white font-bold text-sm rounded-xl transition-all shadow-lg transform hover:-translate-y-0.5"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Unduh Maskot
              </a>
              <a 
                :href="identitasData.mascotDriveUrl" 
                target="_blank"
                class="inline-flex items-center justify-center px-5 py-3 bg-white hover:bg-gray-100 text-[#0b2b42] font-bold text-sm rounded-xl transition-all border border-gray-200 shadow-md transform hover:-translate-y-0.5"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                Drive Folder
              </a>
            </div>
          </div>

          <!-- Mascot Meaning & Details (Right) -->
          <div class="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white">
            <div class="mb-6">
              <span class="inline-block px-4 py-1.5 bg-orange-100 text-orange-800 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
                KUMBA
              </span>
              <h3 class="text-2xl font-extrabold text-[#0b2b42]">Filosofi Nama KUMBA</h3>
            </div>

            <!-- Acronym Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-8">
              <div class="bg-blue-50 border-t-4 border-[#195682] p-4 rounded-xl text-center">
                <span class="block text-2xl font-black text-[#195682]">K</span>
                <span class="text-xs text-gray-500 font-medium">Knowledge</span>
              </div>
              <div class="bg-orange-50 border-t-4 border-[#f9ac42] p-4 rounded-xl text-center">
                <span class="block text-2xl font-black text-[#f9ac42]">U</span>
                <span class="text-xs text-gray-500 font-medium">Unity</span>
              </div>
              <div class="bg-blue-50 border-t-4 border-[#195682] p-4 rounded-xl text-center">
                <span class="block text-2xl font-black text-[#195682]">M</span>
                <span class="text-xs text-gray-500 font-medium">Motivation</span>
              </div>
              <div class="bg-orange-50 border-t-4 border-[#f9ac42] p-4 rounded-xl text-center">
                <span class="block text-2xl font-black text-[#f9ac42]">B</span>
                <span class="text-xs text-gray-500 font-medium">Bravery</span>
              </div>
              <div class="bg-blue-50 border-t-4 border-[#195682] p-4 rounded-xl text-center">
                <span class="block text-2xl font-black text-[#195682]">A</span>
                <span class="text-xs text-gray-500 font-medium">Achievement</span>
              </div>
            </div>

            <!-- Narrative Paragraphs -->
            <div class="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Maskot <strong>"KUMBA"</strong> hadir sebagai simbol semangat dan karakter generasi UNIDSOE yang siap tumbuh, berkembang, dan memberi dampak bagi dunia. Nama KUMBA merepresentasikan nilai-nilai utama yang menjadi fondasi mahasiswa UNIDSOE: <em>Knowledge, Unity, Motivation, Bravery</em>, dan <em>Achievement</em>.
              </p>
              <p>
                KUMBA memiliki makna sebagai pribadi yang berilmu, menjunjung persatuan, penuh semangat, berani menghadapi tantangan, serta mampu meraih prestasi. Lebih dari sekadar maskot, KUMBA menjadi representasi semangat mahasiswa UNIDSOE dalam menciptakan generasi unggul yang siap mengabdi dan berkontribusi di tingkat nasional maupun global.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. MARS & HYMNE LYRICS SECTION -->
      <section class="mb-16">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <span class="px-4 py-1.5 bg-blue-50 text-[#195682] text-xs font-bold rounded-full uppercase tracking-wider mb-3 inline-block">
            Karya Seni & Lagu
          </span>
          <h2 class="text-3xl font-extrabold text-[#0b2b42]">Lagu Wajib & Mars UNIDSOE</h2>
          <p class="text-gray-500 mt-2">Dinyanyikan pada upacara akademik resmi, wisuda, dan kegiatan penting universitas.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Hymne Card -->
          <div class="bg-gradient-to-br from-[#0b2b42] to-[#123956] text-white rounded-3xl shadow-xl overflow-hidden p-8 sm:p-12 relative flex flex-col justify-between group border border-white/5">
            <!-- Floating musical icon -->
            <div class="absolute -right-6 -bottom-6 text-white/5 group-hover:scale-110 group-hover:text-white/10 transition-all duration-700 pointer-events-none">
              <svg class="w-48 h-48" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
            </div>

            <div class="relative z-10">
              <div class="flex items-center space-x-3 mb-6">
                <span class="p-2.5 bg-white/10 rounded-xl text-[#f9ac42] border border-white/10">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                  </svg>
                </span>
                <h3 class="text-2xl font-extrabold text-[#f9ac42]">{{ identitasData.hymneTitle }}</h3>
              </div>

              <!-- Creative credits block -->
              <div class="grid grid-cols-3 gap-2 bg-white/5 rounded-xl p-4 mb-6 border border-white/5 text-center text-xs text-blue-100/80">
                <div>
                  <span class="block text-[10px] text-white/40 uppercase tracking-wider">Lagu</span>
                  <span class="font-bold">{{ identitasData.hymneLagu }}</span>
                </div>
                <div class="border-x border-white/10">
                  <span class="block text-[10px] text-white/40 uppercase tracking-wider">Lirik</span>
                  <span class="font-bold">{{ identitasData.hymneLirik }}</span>
                </div>
                <div>
                  <span class="block text-[10px] text-white/40 uppercase tracking-wider">Penggubah</span>
                  <span class="font-bold">{{ identitasData.hymnePenggubah }}</span>
                </div>
              </div>
              
              <div class="text-blue-100/90 leading-relaxed font-serif text-center whitespace-pre-line py-6 px-4 bg-white/5 rounded-2xl border border-white/5 italic">
                {{ identitasData.hymneLyrics }}
              </div>
            </div>

            <div class="mt-8 text-center text-xs text-blue-200/60 font-semibold z-10 border-t border-white/10 pt-6">
              Dinyanyikan dengan tempo khidmat (Adagio)
            </div>
          </div>

          <!-- Mars Card -->
          <div class="bg-white text-gray-800 rounded-3xl shadow-xl overflow-hidden p-8 sm:p-12 relative flex flex-col justify-between group border border-gray-100">
            <!-- Floating musical icon -->
            <div class="absolute -right-6 -bottom-6 text-gray-50 group-hover:scale-110 group-hover:text-gray-100 transition-all duration-700 pointer-events-none">
              <svg class="w-48 h-48" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg>
            </div>

            <div class="relative z-10">
              <div class="flex items-center space-x-3 mb-6">
                <span class="p-2.5 bg-orange-50 rounded-xl text-[#f9ac42] border border-orange-100">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </span>
                <h3 class="text-2xl font-extrabold text-[#0b2b42]">{{ identitasData.marsTitle }}</h3>
              </div>

              <!-- Creative credits block -->
              <div class="grid grid-cols-3 gap-2 bg-gray-50 rounded-xl p-4 mb-6 border border-gray-200/60 text-center text-xs text-gray-500">
                <div>
                  <span class="block text-[10px] text-gray-400 uppercase tracking-wider">Lagu</span>
                  <span class="font-bold text-gray-700">{{ identitasData.marsLagu }}</span>
                </div>
                <div class="border-x border-gray-200">
                  <span class="block text-[10px] text-gray-400 uppercase tracking-wider">Lirik</span>
                  <span class="font-bold text-gray-700">{{ identitasData.marsLirik }}</span>
                </div>
                <div>
                  <span class="block text-[10px] text-gray-400 uppercase tracking-wider">Penggubah</span>
                  <span class="font-bold text-gray-700">{{ identitasData.marsPenggubah }}</span>
                </div>
              </div>
              
              <div class="text-gray-600 leading-relaxed font-sans text-center whitespace-pre-line py-6 px-4 bg-gray-50 rounded-2xl border border-gray-100 italic">
                {{ identitasData.marsLyrics }}
              </div>
            </div>

            <div class="mt-8 text-center text-xs text-gray-400 font-semibold z-10 border-t border-gray-100 pt-6">
              Dinyanyikan dengan penuh semangat patriotik (Marcia)
            </div>
          </div>
        </div>
      </section>

      <!-- 4. VIDEO SECTION -->
      <section v-if="identitasData.videoUrl" class="bg-[#0b2b42] text-white rounded-3xl shadow-xl p-8 sm:p-12 mb-16 relative overflow-hidden">
        <div class="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div class="relative z-10 text-center max-w-2xl mx-auto mb-10">
          <span class="px-4 py-1.5 bg-white/10 text-[#f9ac42] text-xs font-bold rounded-full uppercase tracking-wider mb-3 inline-block">
            Profil Virtual
          </span>
          <h2 class="text-3xl font-extrabold">{{ identitasData.videoTitle }}</h2>
          <p class="text-gray-300 mt-2">Saksikan profil kampus, fasilitas unggulan, dan kisah inspiratif civitas akademika Universitas Dr. Soekardjo.</p>
        </div>

        <!-- Video Frame -->
        <div class="relative rounded-2xl overflow-hidden shadow-2xl aspect-video max-w-4xl mx-auto border border-white/10 ring-4 ring-black/40 z-10">
          <iframe 
            :src="identitasData.videoUrl" 
            title="Video Profil UNIDSOE"
            class="absolute inset-0 w-full h-full"
            style="border: 0;"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          ></iframe>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import PageHeader from '../components/PageHeader.vue'
import identitasData from '../data/identitas.json'
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>
