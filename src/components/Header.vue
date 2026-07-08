<template>
  <header 
    class="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300"
    :class="[isScrolled ? 'py-2' : 'py-4']"
  >
    <!-- Top Bar (Utility Links) -->
    <div class="hidden md:block absolute top-0 w-full bg-[#195682] text-white text-xs py-1">
      <div class="container-custom flex justify-between items-center">
        <div class="flex space-x-4">
          <span><i class="fas fa-phone mr-1"></i> {{ settings.contact.phone }}</span>
          <span><i class="fas fa-envelope mr-1"></i> {{ settings.contact.email }}</span>
        </div>
        <div class="flex items-center space-x-4">
          <router-link to="/kontak" class="hover:text-blue-200">Staff</router-link>
          <router-link to="/akademik" class="hover:text-blue-200">Mahasiswa</router-link>
          <router-link to="/kontak" class="hover:text-blue-200">Alumni</router-link>
          <span class="mx-2">|</span>
          <!-- Language Switcher -->
          <div class="flex items-center space-x-2">
            <button @click="currentLang = 'id'" :class="currentLang === 'id' ? 'font-bold text-[#f9ac42]' : 'hover:text-blue-200'" class="transition-colors">ID</button>
            <span>/</span>
            <button @click="currentLang = 'en'" :class="currentLang === 'en' ? 'font-bold text-[#f9ac42]' : 'hover:text-blue-200'" class="transition-colors">EN</button>
          </div>
          <span class="mx-2">|</span>
          <a :href="settings.contact.pmbLink" target="_blank" class="font-bold hover:text-[#f9ac42] transition-colors">PMB 2026</a>
        </div>
      </div>
    </div>

    <!-- Main Navigation -->
    <nav class="container-custom mt-6 md:mt-4 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="flex items-center group">
        <div class="relative">
          <img src="/assets/logo/logo_unidsoe_panjang.png" alt="STIKES Banyuwangi" class="h-10 md:h-12 w-auto object-contain transition-all duration-300" :class="[isScrolled ? 'scale-90' : 'scale-100']" />
        </div>
      </router-link>

      <!-- Desktop Menu -->
      <div class="hidden xl:flex items-center space-x-1">
        
        <!-- Profil (Tentang Kami) -->
        <div class="relative group">
          <router-link to="/profil" class="nav-item flex items-center">
            Profil
            <svg class="w-3 h-3 ml-1 transform group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </router-link>
          <div class="mega-menu w-56">
            <ul class="p-4 space-y-2">
              <li><router-link to="/profil" class="nav-link-sub">Sejarah & Profil</router-link></li>
              <li><router-link to="/profil" class="nav-link-sub">Visi & Misi</router-link></li>
              <li><router-link to="/profil" class="nav-link-sub">Struktur Organisasi</router-link></li>
              <li><router-link to="/profil" class="nav-link-sub">Sambutan Ketua</router-link></li>
              <li><router-link to="/identitas" class="nav-link-sub">Identitas</router-link></li>
            </ul>
          </div>
        </div>

        <!-- Fakultas & Program Studi (Spacious nested Mega Menu) -->
        <div class="relative group">
          <router-link to="/program-studi" class="nav-item flex items-center">
            Fakultas & Program Studi
            <svg class="w-3 h-3 ml-1 transform group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </router-link>
          <!-- Mega Menu Container -->
          <div class="mega-menu w-[880px] lg:w-[1000px] xl:w-[1140px] grid grid-cols-12 overflow-hidden -left-48 lg:-left-64 xl:-left-96">
            
            <!-- Column 1: FISTEK (4 cols of 12) -->
            <div class="col-span-4 p-7 bg-white">
              <div class="flex items-center space-x-3 mb-5 pb-3 border-b border-gray-100">
                <span class="p-2 bg-orange-50 text-[#f9ac42] rounded-lg">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </span>
                <div>
                  <h3 class="font-bold text-[#0b2b42] text-sm uppercase tracking-wider">FISTEK</h3>
                  <p class="text-[10px] text-gray-500 font-semibold">Ilmu Sosial & Teknologi</p>
                </div>
              </div>
              
              <ul class="space-y-3">
                <li>
                  <router-link to="/program-studi/s1-sistem-informasi" class="mega-item group/item">
                    <div class="font-bold text-[13px] text-gray-800 group-hover/item:text-[#195682] transition-colors flex items-center">
                      S1 Sistem Informasi
                      <svg class="w-3 h-3 ml-1.5 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-[#195682]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </div>
                    <div class="flex items-center justify-between mt-1 text-[11px] text-gray-500">
                      <span>Gelar: S.Kom</span>
                      <span class="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-bold text-[9px]">Akreditasi Baik</span>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/program-studi/s1-manajemen-bisnis" class="mega-item group/item">
                    <div class="font-bold text-[13px] text-gray-800 group-hover/item:text-[#195682] transition-colors flex items-center">
                      S1 Manajemen Bisnis Int.
                      <svg class="w-3 h-3 ml-1.5 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-[#195682]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </div>
                    <div class="flex items-center justify-between mt-1 text-[11px] text-gray-500">
                      <span>Gelar: S.M</span>
                      <span class="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-bold text-[9px]">Akreditasi Baik</span>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/program-studi/s1-perdagangan-internasional" class="mega-item group/item">
                    <div class="font-bold text-[13px] text-gray-800 group-hover/item:text-[#195682] transition-colors flex items-center">
                      S1 Perdagangan Internasional
                      <svg class="w-3 h-3 ml-1.5 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-[#195682]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </div>
                    <div class="flex items-center justify-between mt-1 text-[11px] text-gray-500">
                      <span>Gelar: S.Bns</span>
                      <span class="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-bold text-[9px]">Akreditasi Baik</span>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
            
            <!-- Column 2: FIKES (5 cols of 12) -->
            <div class="col-span-5 p-7 bg-white border-l border-r border-gray-100">
              <div class="flex items-center space-x-3 mb-5 pb-3 border-b border-gray-100">
                <span class="p-2 bg-red-50 text-[#c01c0c] rounded-lg">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </span>
                <div>
                  <h3 class="font-bold text-[#0b2b42] text-sm uppercase tracking-wider">FIKES</h3>
                  <p class="text-[10px] text-gray-500 font-semibold">Fakultas Ilmu Kesehatan</p>
                </div>
              </div>
              
              <div class="grid grid-cols-1 gap-3 max-h-[360px] overflow-y-auto pr-2">
                <router-link to="/program-studi/s1-keperawatan" class="mega-item group/item">
                  <div class="font-bold text-[13px] text-gray-800 group-hover/item:text-[#195682] transition-colors flex items-center justify-between">
                    <span class="flex items-center">
                      S1 Keperawatan & Ners
                      <svg class="w-3 h-3 ml-1.5 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-[#195682]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </span>
                    <span class="bg-green-100 text-green-800 px-1.5 py-0.5 rounded font-bold text-[8px] uppercase tracking-wider shadow-sm">Baik Sekali</span>
                  </div>
                  <div class="text-[10px] text-gray-500 mt-1">Gelar: S.Kep & Ns. <span class="mx-1">|</span> Kurikulum Unggulan Riset Medis</div>
                </router-link>

                <router-link to="/program-studi/s1-kebidanan" class="mega-item group/item">
                  <div class="font-bold text-[13px] text-gray-800 group-hover/item:text-[#195682] transition-colors flex items-center justify-between">
                    <span class="flex items-center">
                      S1 Kebidanan & Bidan
                      <svg class="w-3 h-3 ml-1.5 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-[#195682]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </span>
                    <span class="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-bold text-[8px] uppercase tracking-wider shadow-sm">Baik</span>
                  </div>
                  <div class="text-[10px] text-gray-500 mt-1">Gelar: S.Keb & Bdn <span class="mx-1">|</span> Profesi Asuhan Persalinan Paripurna</div>
                </router-link>

                <router-link to="/program-studi/s1-gizi" class="mega-item group/item">
                  <div class="font-bold text-[13px] text-gray-800 group-hover/item:text-[#195682] transition-colors flex items-center justify-between">
                    <span class="flex items-center">
                      S1 Gizi (S.Gz)
                      <svg class="w-3 h-3 ml-1.5 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-[#195682]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </span>
                    <span class="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-bold text-[8px] uppercase tracking-wider shadow-sm">Baik</span>
                  </div>
                  <div class="text-[10px] text-gray-500 mt-1">Kurikulum Ahli Dietetik & Manajemen Pangan Sehat</div>
                </router-link>

                <router-link to="/program-studi/d4-tlm" class="mega-item group/item">
                  <div class="font-bold text-[13px] text-gray-800 group-hover/item:text-[#195682] transition-colors flex items-center justify-between">
                    <span class="flex items-center">
                      D4 Teknologi Lab. Medis
                      <svg class="w-3 h-3 ml-1.5 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-[#195682]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </span>
                    <span class="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-bold text-[8px] uppercase tracking-wider shadow-sm">Baik</span>
                  </div>
                  <div class="text-[10px] text-gray-500 mt-1">Gelar: S.Tr.Kes <span class="mx-1">|</span> Diagnosis Laboratorium & Riset Bio-Sains</div>
                </router-link>

                <router-link to="/program-studi/d3-keperawatan" class="mega-item group/item">
                  <div class="font-bold text-[13px] text-gray-800 group-hover/item:text-[#195682] transition-colors flex items-center justify-between">
                    <span class="flex items-center">
                      D3 Keperawatan
                      <svg class="w-3 h-3 ml-1.5 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-[#195682]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </span>
                    <span class="bg-green-100 text-green-800 px-1.5 py-0.5 rounded font-bold text-[8px] uppercase tracking-wider shadow-sm">Baik Sekali</span>
                  </div>
                  <div class="text-[10px] text-gray-500 mt-1">Gelar: A.Md.Kep <span class="mx-1">|</span> Vokasi Keperawatan Tangguh Siap Kerja</div>
                </router-link>

                <router-link to="/program-studi/d3-farmasi" class="mega-item group/item">
                  <div class="font-bold text-[13px] text-gray-800 group-hover/item:text-[#195682] transition-colors flex items-center justify-between">
                    <span class="flex items-center">
                      D3 Farmasi
                      <svg class="w-3 h-3 ml-1.5 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-[#195682]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </span>
                    <span class="bg-green-100 text-green-800 px-1.5 py-0.5 rounded font-bold text-[8px] uppercase tracking-wider shadow-sm">Baik Sekali</span>
                  </div>
                  <div class="text-[10px] text-gray-500 mt-1">Gelar: A.Md.Farm <span class="mx-1">|</span> Layanan Kefarmasian & Manajemen Apotek</div>
                </router-link>
              </div>
            </div>
            
            <!-- Column 3: Highlight / PMB Promotion Column (3 cols of 12) -->
            <div class="col-span-3 bg-slate-50 p-7 flex flex-col justify-between">
              <div>
                <h4 class="font-bold text-[#0b2b42] text-[11px] uppercase tracking-wider mb-4 flex items-center">
                  <svg class="w-4 h-4 mr-1.5 text-[#f9ac42]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Informasi Pendaftaran
                </h4>
                
                <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-4">
                  <div class="text-[10px] font-bold text-[#195682] uppercase mb-1">PMB T.A 2025/2026</div>
                  <p class="text-[11px] text-gray-600 leading-relaxed mb-3">Telah dibuka pendaftaran mahasiswa baru gelombang utama. Daftar secara online dengan cepat & mudah.</p>
                  <a href="https://pmb.unidsoe.ac.id" target="_blank" class="inline-flex items-center text-xs font-bold text-[#f9ac42] hover:text-orange-600 transition-colors">
                    Daftar PMB Online 
                    <svg class="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </a>
                </div>

                <div class="space-y-2">
                  <div class="flex items-center space-x-2 text-[11px] text-gray-600">
                    <svg class="w-4 h-4 text-[#195682] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    <span>Institusi Terakreditasi <b>BAIK</b></span>
                  </div>
                  <div class="flex items-center space-x-2 text-[11px] text-gray-600">
                    <svg class="w-4 h-4 text-[#195682] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                    <span>Kurikulum Standar Kompetensi</span>
                  </div>
                </div>
              </div>

              <div class="pt-4 border-t border-gray-200/50 mt-4">
                <router-link to="/program-studi" class="block w-full text-center py-2 bg-[#195682] hover:bg-[#0b2b42] text-white font-bold text-xs rounded-lg transition-colors shadow-sm">
                  Lihat Semua Prodi
                </router-link>
              </div>
            </div>
            
          </div>
        </div>

        <!-- Akademik -->
        <div class="relative group">
          <router-link to="/akademik" class="nav-item flex items-center">
            Akademik
            <svg class="w-3 h-3 ml-1 transform group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </router-link>
          <div class="mega-menu w-56">
            <ul class="p-4 space-y-2">
              <li><a href="https://unidsoe.siakadcloud.com/gate/login" target="_blank" class="nav-link-sub">Sistem Informasi Akademik</a></li>
              <li><a href="https://edlink.id/" target="_blank" class="nav-link-sub">E-Learning</a></li>
              <li><router-link to="/akademik" class="nav-link-sub">Kalender Akademik</router-link></li>
              <li><router-link to="/akademik" class="nav-link-sub">Dokumen & Formulir</router-link></li>
            </ul>
          </div>
        </div>

        <!-- Penelitian & Pengabdian -->
        <div class="relative group">
          <router-link to="/akademik" class="nav-item flex items-center">
            Penelitian & Pengabdian
            <svg class="w-3 h-3 ml-1 transform group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </router-link>
          <div class="mega-menu w-56">
            <ul class="p-4 space-y-2">
              <li><router-link to="/artikel" class="nav-link-sub">Berita & Prestasi</router-link></li>
              <li><a href="#" class="nav-link-sub">Publikasi Ilmiah</a></li>
              <li><a href="#" class="nav-link-sub">Pengabdian Masyarakat</a></li>
              <li><router-link to="/akademik" class="nav-link-sub">KKN</router-link></li>
            </ul>
          </div>
        </div>

        <!-- Layanan -->
        <div class="relative group">
          <router-link to="/fasilitas" class="nav-item flex items-center">
            Layanan
            <svg class="w-3 h-3 ml-1 transform group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </router-link>
          <div class="mega-menu w-56">
            <ul class="p-4 space-y-2">
              <li><router-link to="/fasilitas" class="nav-link-sub">Perpustakaan</router-link></li>
              <li><router-link to="/fasilitas" class="nav-link-sub">Laboratorium</router-link></li>
              <li><router-link to="/fasilitas" class="nav-link-sub">Klinik</router-link></li>
              <li><router-link to="/fasilitas" class="nav-link-sub">Beasiswa</router-link></li>
            </ul>
          </div>
        </div>

        <!-- Kontak -->
        <router-link to="/kontak" class="nav-item">Kontak</router-link>

      </div>
      <!-- CTA & Mobile Toggle -->
      <div class="flex items-center space-x-3">
        <a :href="settings.contact.pmbLink" target="_blank" class="hidden lg:inline-flex items-center justify-center px-5 py-2 text-sm font-bold text-white transition-all duration-200 bg-[#f9ac42] rounded-full hover:bg-orange-500 hover:shadow-md transform hover:-translate-y-0.5">
          PMB
        </a>
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="xl:hidden p-2 text-gray-600 rounded-md hover:bg-gray-100"
        >
          <span class="sr-only">Menu</span>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div 
      v-show="isMobileMenuOpen" 
      class="xl:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 max-h-[80vh] overflow-y-auto z-50"
    >
      <div class="p-4 space-y-4">
        <router-link @click="isMobileMenuOpen = false" to="/" class="block py-2 text-gray-800 font-medium border-b border-gray-100">Beranda</router-link>
        
        <div class="space-y-2">
          <div class="font-bold text-[#195682] uppercase text-xs tracking-wider">Tentang Kami</div>
          <router-link @click="isMobileMenuOpen = false" to="/profil" class="block pl-4 py-1 text-sm text-gray-600">Selayang Pandang</router-link>
          <router-link @click="isMobileMenuOpen = false" to="/profil" class="block pl-4 py-1 text-sm text-gray-600">Pimpinan</router-link>
          <router-link @click="isMobileMenuOpen = false" to="/identitas" class="block pl-4 py-1 text-sm text-gray-600">Identitas Kampus</router-link>
        </div>

        <!-- Mobile FISTEK -->
        <div class="space-y-2">
          <div class="font-bold text-[#195682] uppercase text-xs tracking-wider border-b pb-1">Fakultas Ilmu Sosial & Teknologi (FISTEK)</div>
          <router-link @click="isMobileMenuOpen = false" to="/program-studi/s1-sistem-informasi" class="block pl-4 py-1 text-sm text-gray-600 flex justify-between items-center">
            <span>S1 Sistem Informasi</span>
            <span class="text-[9px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-semibold uppercase">Baik</span>
          </router-link>
          <router-link @click="isMobileMenuOpen = false" to="/program-studi/s1-manajemen-bisnis" class="block pl-4 py-1 text-sm text-gray-600 flex justify-between items-center">
            <span>S1 Manajemen Bisnis Internasional</span>
            <span class="text-[9px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-semibold uppercase">Baik</span>
          </router-link>
          <router-link @click="isMobileMenuOpen = false" to="/program-studi/s1-perdagangan-internasional" class="block pl-4 py-1 text-sm text-gray-600 flex justify-between items-center">
            <span>S1 Perdagangan Internasional</span>
            <span class="text-[9px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-semibold uppercase">Baik</span>
          </router-link>
        </div>

        <!-- Mobile FIKES -->
        <div class="space-y-2">
          <div class="font-bold text-[#195682] uppercase text-xs tracking-wider border-b pb-1">Fakultas Ilmu Kesehatan (FIKES)</div>
          <router-link @click="isMobileMenuOpen = false" to="/program-studi/s1-keperawatan" class="block pl-4 py-1 text-sm text-gray-600 flex justify-between items-center">
            <span>S1 Keperawatan & Ners</span>
            <span class="text-[9px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-semibold uppercase">Baik Sekali</span>
          </router-link>
          <router-link @click="isMobileMenuOpen = false" to="/program-studi/s1-kebidanan" class="block pl-4 py-1 text-sm text-gray-600 flex justify-between items-center">
            <span>S1 Kebidanan & Bidan</span>
            <span class="text-[9px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-semibold uppercase">Baik</span>
          </router-link>
          <router-link @click="isMobileMenuOpen = false" to="/program-studi/s1-gizi" class="block pl-4 py-1 text-sm text-gray-600 flex justify-between items-center">
            <span>S1 Gizi</span>
            <span class="text-[9px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-semibold uppercase">Baik</span>
          </router-link>
          <router-link @click="isMobileMenuOpen = false" to="/program-studi/d4-tlm" class="block pl-4 py-1 text-sm text-gray-600 flex justify-between items-center">
            <span>D4 Teknologi Lab. Medis</span>
            <span class="text-[9px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-semibold uppercase">Baik</span>
          </router-link>
          <router-link @click="isMobileMenuOpen = false" to="/program-studi/d3-keperawatan" class="block pl-4 py-1 text-sm text-gray-600 flex justify-between items-center">
            <span>D3 Keperawatan</span>
            <span class="text-[9px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-semibold uppercase">Baik Sekali</span>
          </router-link>
          <router-link @click="isMobileMenuOpen = false" to="/program-studi/d3-farmasi" class="block pl-4 py-1 text-sm text-gray-600 flex justify-between items-center">
            <span>D3 Farmasi</span>
            <span class="text-[9px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-semibold uppercase">Baik Sekali</span>
          </router-link>
        </div>

        <router-link @click="isMobileMenuOpen = false" to="/fasilitas" class="block py-2 text-gray-800 font-medium border-b border-gray-100">Fasilitas</router-link>
        <router-link @click="isMobileMenuOpen = false" to="/kerja-sama" class="block py-2 text-gray-800 font-medium border-b border-gray-100">Kerja Sama</router-link>
        <router-link @click="isMobileMenuOpen = false" to="/artikel" class="block py-2 text-gray-800 font-medium border-b border-gray-100">Riset & Publikasi</router-link>
        <router-link @click="isMobileMenuOpen = false" to="/kontak" class="block py-2 text-gray-800 font-medium border-b border-gray-100">Kontak</router-link>
        
        <a :href="settings.contact.pmbLink" target="_blank" class="block w-full text-center py-3 bg-[#195682] text-white font-bold rounded-lg mt-4">
          Daftar PMB Sekarang
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import settings from '../data/settings.json'

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const currentLang = ref('id') // Default to Indonesian

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.nav-item {
  @apply px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#195682] transition-colors relative;
}

.nav-item::after {
  content: '';
  @apply absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#195682] transition-all duration-300 transform -translate-x-1/2;
}

.nav-item:hover::after,
.router-link-active.nav-item::after {
  @apply w-1/2;
}

.router-link-active.nav-item {
  @apply text-[#195682];
}

.mega-menu {
  @apply absolute top-full bg-white shadow-2xl rounded-b-2xl border-t-4 border-[#195682] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50;
}

.mega-menu-title {
  @apply font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide;
}

.mega-menu-list li {
  @apply mb-2;
}

.mega-menu-list a, .nav-link-sub {
  @apply text-sm text-gray-600 hover:text-[#195682] transition-colors block py-1;
}

.router-link-active.nav-link-sub {
  @apply text-[#195682] font-bold;
}

.mega-item {
  @apply block p-2.5 rounded-xl hover:bg-slate-50 transition-all text-left border border-transparent hover:border-slate-100;
}

.router-link-active.mega-item > div:first-child {
  color: #195682;
}
</style>