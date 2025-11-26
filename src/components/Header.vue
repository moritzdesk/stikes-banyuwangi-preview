<template>
  <header 
    class="bg-white/95 backdrop-blur-xl shadow-2xl sticky top-0 z-50 border-b border-gray-100/50 transition-transform duration-300"
    :class="isHeaderVisible ? 'translate-y-0' : '-translate-y-full'"
  >
    <!-- Top Bar dengan Design Compact -->
    <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 relative overflow-hidden">
      <div class="container-custom">
        <div class="flex justify-between items-center text-xs md:text-sm">
          <!-- Contact Info - Hidden on Mobile -->
          <div class="hidden md:flex items-center space-x-4">
            <span class="flex items-center group">
              <div class="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mr-2 group-hover:bg-white/30 transition-all duration-300">
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <span class="font-medium">info@stikesbanyuwangi.ac.id</span>
            </span>
            <span class="flex items-center group">
              <div class="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mr-2 group-hover:bg-white/30 transition-all duration-300">
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
              </div>
              <span class="font-medium">(0333) 424-123</span>
            </span>
          </div>
          
          <!-- Quick Links -->
          <div class="flex items-center space-x-3 md:space-x-4">
            <a href="#" class="hover:text-blue-200 transition-all duration-300 font-medium hover:scale-105 transform text-xs md:text-sm">SIAKAD</a>
            <a href="#" class="hover:text-blue-200 transition-all duration-300 font-medium hover:scale-105 transform text-xs md:text-sm">E-Learning</a>
            <a href="#" class="bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-all duration-300 font-semibold hover:scale-105 transform text-xs md:text-sm">PMB 2025</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Navigation dengan Glassmorphism -->
    <nav class="container-custom" aria-label="Main navigation">
      <div class="flex items-center justify-between py-4 md:py-6">
        <!-- Logo Saja dengan Animasi -->
        <div class="flex items-center group cursor-pointer">
          <div class="relative">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <span class="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">S</span>
            </div>
            <div class="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white animate-pulse shadow-md">
              <div class="w-full h-full bg-white/30 rounded-full animate-ping"></div>
            </div>
            <div class="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border-2 border-white animate-bounce"></div>
          </div>
        </div>

        <!-- Desktop Navigation dengan Hover Effects Modern -->
        <div class="hidden xl:flex items-center space-x-2">
          <router-link 
            to="/"
            class="relative px-6 py-3 text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 group"
          >
            <span class="relative z-10">Beranda</span>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
            <div class="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:w-3/4 group-hover:left-1/4 transition-all duration-300"></div>
          </router-link>
          
          <div class="relative group">
            <button 
              aria-haspopup="true"
              aria-expanded="false"
              aria-label="Tentang Kami menu"
              class="flex items-center px-6 py-3 text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300"
            >
              <span>Tentang Kami</span>
              <svg class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="absolute top-full left-0 w-80 bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 border border-gray-100/50">
              <div class="p-6">
                <div class="grid grid-cols-2 gap-4">
                  <a href="#" class="group/item flex items-center p-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300">
                    <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-300">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-semibold text-gray-900 group-hover/item:text-blue-600">Selayang Pandang</div>
                      <div class="text-xs text-gray-500">Profil institusi</div>
                    </div>
                  </a>
                  <a href="#" class="group/item flex items-center p-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300">
                    <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-300">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-semibold text-gray-900 group-hover/item:text-blue-600">Pimpinan</div>
                      <div class="text-xs text-gray-500">Kepemimpinan</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative group">
            <button 
              aria-haspopup="true"
              aria-expanded="false"
              aria-label="Program Studi menu"
              class="flex items-center px-6 py-3 text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300"
            >
              <span>Program Studi</span>
              <svg class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="absolute top-full left-0 w-96 bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 border border-gray-100/50">
              <div class="p-6">
                <div class="space-y-3">
                  <a href="#" class="group/item flex items-center p-4 rounded-2xl hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300 border border-green-100">
                    <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 group-hover/item:scale-110 transition-transform duration-300">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <div class="font-bold text-gray-900 group-hover/item:text-green-600">S1 Keperawatan & Profesi Ners</div>
                      <div class="text-sm text-green-600 font-semibold">✓ Akreditasi Baik Sekali</div>
                    </div>
                    <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#" class="group/item flex items-center p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300">
                    <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-300">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <div class="font-semibold text-gray-900 group-hover/item:text-blue-600">S1 Kebidanan & Profesi Bidan</div>
                    </div>
                  </a>
                  <a href="#" class="group/item flex items-center p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300">
                    <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-300">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <div class="font-semibold text-gray-900 group-hover/item:text-purple-600">S1 Gizi</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a href="#" class="relative px-6 py-3 text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 group">
            <span class="relative z-10">Fasilitas</span>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
            <div class="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:w-3/4 group-hover:left-1/4 transition-all duration-300"></div>
          </a>

          <a href="#" class="relative px-6 py-3 text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 group">
            <span class="relative z-10">Akademik</span>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
            <div class="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:w-3/4 group-hover:left-1/4 transition-all duration-300"></div>
          </a>

          <router-link 
            to="/artikel"
            class="relative px-6 py-3 text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 group"
          >
            <span class="relative z-10">Artikel</span>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
            <div class="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:w-3/4 group-hover:left-1/4 transition-all duration-300"></div>
          </router-link>

          <a href="#" class="relative px-6 py-3 text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 group">
            <span class="relative z-10">Kontak</span>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
            <div class="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:w-3/4 group-hover:left-1/4 transition-all duration-300"></div>
          </a>
        </div>

        <!-- CTA Buttons dengan Design 2025 -->
        <div class="hidden xl:flex items-center space-x-4">
          <button 
            aria-label="Search"
            class="px-6 py-3 text-gray-600 hover:text-blue-600 font-semibold transition-all duration-300 hover:scale-105 transform"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          <button 
            aria-label="Pendaftaran Mahasiswa Baru 2025"
            class="relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 transition-all duration-500 font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1"
          >
            <span class="relative z-10">PMB 2025</span>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div class="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
          </button>
        </div>

        <!-- Mobile Menu Button dengan Animation Modern -->
        <button 
          @click="toggleMobileMenu" 
          :aria-expanded="isMobileMenuOpen"
          aria-label="Toggle mobile menu"
          aria-controls="mobile-menu"
          class="xl:hidden relative p-3 rounded-2xl hover:bg-gray-100 transition-all duration-300 group"
        >
          <div class="w-6 h-6 flex flex-col justify-center items-center">
            <span class="block w-5 h-0.5 bg-gray-700 transition-all duration-300" :class="isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''"></span>
            <span class="block w-5 h-0.5 bg-gray-700 mt-1 transition-all duration-300" :class="isMobileMenuOpen ? 'opacity-0' : ''"></span>
            <span class="block w-5 h-0.5 bg-gray-700 mt-1 transition-all duration-300" :class="isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''"></span>
          </div>
        </button>
      </div>

      <!-- Mobile Navigation dengan Design Clean -->
      <div 
        id="mobile-menu"
        class="xl:hidden overflow-hidden transition-all duration-300" 
        :class="isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
        :aria-hidden="!isMobileMenuOpen"
      >
        <div class="py-4 space-y-1 bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-100/50 shadow-xl mt-2">
          <router-link to="/" class="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 font-medium">Beranda</router-link>
          <a href="#" class="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 font-medium">Tentang Kami</a>
          <a href="#" class="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 font-medium">Program Studi</a>
          <a href="#" class="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 font-medium">Fasilitas</a>
          <a href="#" class="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 font-medium">Akademik</a>
          <router-link to="/artikel" class="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 font-medium">Artikel</router-link>
          <a href="#" class="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 font-medium">Kontak</a>
          <div class="pt-3 border-t border-gray-200 mt-3">
            <button class="w-full px-4 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105">
              PMB 2025
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMobileMenuOpen = ref(false)
const isHeaderVisible = ref(true)
const lastScrollY = ref(0)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleScroll = () => {
  const currentScrollY = window.scrollY
  
  // Show header when scrolling up or at the top
  if (currentScrollY < lastScrollY.value || currentScrollY < 100) {
    isHeaderVisible.value = true
  } 
  // Hide header when scrolling down (but not at the very top)
  else if (currentScrollY > lastScrollY.value && currentScrollY > 100) {
    isHeaderVisible.value = false
  }
  
  lastScrollY.value = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>