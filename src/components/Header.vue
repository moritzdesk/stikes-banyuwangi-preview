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
          <a :href="settings.contact.pmbLink" target="_blank" class="font-bold hover:text-[#f9ac42] transition-colors">PMB 2025</a>
        </div>
      </div>
    </div>

    <!-- Main Navigation -->
    <nav class="container-custom mt-6 md:mt-4 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="flex items-center group">
        <div class="relative">
          <img src="/assets/logo/logo_unidsoe_panjang.png" alt="Universitas Dr. Soekardjo Banyuwangi" class="h-10 md:h-12 w-auto object-contain transition-all duration-300" :class="[isScrolled ? 'scale-90' : 'scale-100']" />
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
            </ul>
          </div>
        </div>

        <!-- Fakultas & Program Studi -->
        <div class="relative group">
          <router-link to="/program-studi" class="nav-item flex items-center">
            Fakultas & Program Studi
            <svg class="w-3 h-3 ml-1 transform group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </router-link>
          <div class="mega-menu w-64">
            <ul class="p-4 space-y-2">
              <li><router-link to="/program-studi/s1-keperawatan" class="nav-link-sub font-semibold text-[#195682]">S1 Keperawatan <span class="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded ml-2">Baik Sekali</span></router-link></li>
              <li><router-link to="/program-studi/profesi-ners" class="nav-link-sub">Profesi Ners</router-link></li>
              <li><router-link to="/program-studi/s1-kebidanan" class="nav-link-sub">S1 Kebidanan</router-link></li>
              <li><router-link to="/program-studi/profesi-bidan" class="nav-link-sub">Profesi Bidan</router-link></li>
              <li><router-link to="/program-studi/s1-gizi" class="nav-link-sub">S1 Gizi</router-link></li>
              <li><router-link to="/program-studi/d4-tlm" class="nav-link-sub">D4 Teknologi Lab. Medis</router-link></li>
              <li><router-link to="/program-studi/d3-keperawatan" class="nav-link-sub">D3 Keperawatan</router-link></li>
              <li><router-link to="/program-studi/d3-farmasi" class="nav-link-sub">D3 Farmasi</router-link></li>
            </ul>
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
              <li><a href="https://siakad.unidsoe.ac.id" target="_blank" class="nav-link-sub">Sistem Informasi Akademik</a></li>
              <li><a href="https://elearning.unidsoe.ac.id" target="_blank" class="nav-link-sub">E-Learning</a></li>
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
      class="xl:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 max-h-[80vh] overflow-y-auto"
    >
      <div class="p-4 space-y-4">
        <router-link @click="isMobileMenuOpen = false" to="/" class="block py-2 text-gray-800 font-medium border-b border-gray-100">Beranda</router-link>
        
        <div class="space-y-2">
          <div class="font-bold text-[#195682] uppercase text-xs tracking-wider">Tentang Kami</div>
          <router-link @click="isMobileMenuOpen = false" to="/profil" class="block pl-4 py-1 text-sm text-gray-600">Selayang Pandang</router-link>
          <router-link @click="isMobileMenuOpen = false" to="/profil" class="block pl-4 py-1 text-sm text-gray-600">Pimpinan</router-link>
        </div>

        <div class="space-y-2">
          <div class="font-bold text-[#195682] uppercase text-xs tracking-wider">Program Studi</div>
          <router-link @click="isMobileMenuOpen = false" to="/program-studi/s1-keperawatan" class="block pl-4 py-1 text-sm text-gray-600">S1 Keperawatan</router-link>
          <router-link @click="isMobileMenuOpen = false" to="/program-studi/s1-kebidanan" class="block pl-4 py-1 text-sm text-gray-600">S1 Kebidanan</router-link>
          <router-link @click="isMobileMenuOpen = false" to="/program-studi/s1-gizi" class="block pl-4 py-1 text-sm text-gray-600">S1 Gizi</router-link>
          <router-link @click="isMobileMenuOpen = false" to="/program-studi/d4-tlm" class="block pl-4 py-1 text-sm text-gray-600">D4 TLM</router-link>
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
  @apply absolute top-full left-0 bg-white shadow-xl rounded-b-xl border-t-2 border-[#195682] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50;
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
</style>