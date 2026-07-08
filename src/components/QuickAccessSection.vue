<template>
  <section class="py-16 -mt-16 relative z-20 overflow-hidden">
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10"></div>
    
    <div class="container-custom px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <!-- Smart Search Box Section -->
      <div class="max-w-3xl mx-auto mb-12 relative z-50 animate-fade-in-up">
        <div class="text-center mb-6">
          <span class="text-[#195682] font-extrabold tracking-wider uppercase text-xs mb-2 bg-blue-50 px-4 py-2 rounded-full inline-block border border-blue-100 shadow-sm animate-pulse-subtle">
            🔍 Pencarian Pintar
          </span>
          <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2">
            Temukan Layanan & Informasi Kampus
          </h2>
          <p class="text-gray-500 text-sm mt-1">
            Ketik kata kunci untuk mencari program studi, nama rektor, beasiswa, sejarah, atau kontak kami.
          </p>
        </div>

        <!-- Input Bar with Premium Shadow & Focus Effects -->
        <div 
          class="relative transition-all duration-500 rounded-3xl bg-white p-2 border-2"
          :class="isFocused ? 'ring-4 ring-[#195682]/10 border-[#195682] shadow-2xl scale-[1.01]' : 'border-gray-200/70 shadow-lg'"
        >
          <div class="flex items-center">
            <div class="pl-4 pr-2 text-gray-400">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input 
              v-model="searchQuery"
              @focus="isFocused = true"
              @blur="handleBlur"
              @keydown="handleKeyDown"
              type="text"
              placeholder="Cari: Rektor, Keperawatan, Beasiswa, Lab, Sejarah..."
              class="w-full py-3 px-2 bg-transparent border-0 outline-none focus:outline-none focus:ring-0 text-gray-700 font-medium placeholder-gray-400 text-base md:text-lg"
            />
            <button 
              v-if="searchQuery"
              @click="searchQuery = ''"
              class="p-2 text-gray-400 hover:text-gray-600 transition-colors mr-2 rounded-full hover:bg-gray-100 outline-none focus:outline-none"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <button 
              @click="handleEnter"
              class="bg-[#195682] hover:bg-[#f9ac42] text-white font-bold px-7 py-3.5 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#f9ac42]/20 transform active:scale-95 text-sm md:text-base whitespace-nowrap outline-none focus:outline-none"
            >
              Cari
            </button>
          </div>
        </div>

        <!-- Autocomplete Suggestions Dropdown -->
        <transition name="fade">
          <div 
            v-if="isFocused && (searchQuery || filteredResults.length > 0)" 
            class="absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[999]"
          >
            <!-- Suggestions List -->
            <div v-if="filteredResults.length > 0" class="max-h-[350px] overflow-y-auto divide-y divide-gray-50">
              <div class="px-4 py-2 bg-gray-50/50 text-xs font-bold text-gray-400 uppercase tracking-wider">Hasil Pencarian</div>
              <button 
                v-for="(item, index) in filteredResults" 
                :key="index"
                @mousedown="navigate(item)"
                @mouseenter="activeIndex = index"
                class="w-full text-left px-5 py-3.5 flex items-center justify-between transition-all duration-300 group border-l-4"
                :class="activeIndex === index ? 'bg-gradient-to-r from-blue-50/70 via-indigo-50/30 to-transparent border-[#195682]' : 'border-transparent hover:bg-blue-50/40'"
              >
                <div class="flex items-center space-x-3">
                  <span class="text-xl transition-transform duration-300 group-hover:scale-125">{{ getIconByCategory(item.category) }}</span>
                  <div>
                    <div class="font-bold text-gray-800 group-hover:text-[#195682] transition-colors">{{ item.text }}</div>
                    <div class="text-xs text-gray-400 mt-0.5">Dapatkan info lengkap tentang {{ item.text }}</div>
                  </div>
                </div>
                <div class="flex items-center space-x-2">
                  <span 
                    class="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider transition-all duration-300"
                    :class="getBadgeClass(item.category)"
                  >
                    {{ item.category }}
                  </span>
                  <svg class="w-4 h-4 text-gray-300 group-hover:text-[#195682] group-hover:translate-x-1.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </button>
            </div>

            <!-- Empty State -->
            <div v-else class="p-6">
              <div class="text-center py-4">
                <span class="text-3xl">🔍</span>
                <p class="text-gray-500 font-medium mt-2">Tidak menemukan hasil untuk "{{ searchQuery }}"</p>
                <p class="text-xs text-gray-400 mt-1">Coba kata kunci lain seperti "rektor", "beasiswa", atau prodi pilihan Anda</p>
              </div>
            </div>

            <!-- Popular Suggestions (always shown at bottom when query is empty) -->
            <div v-if="!searchQuery" class="bg-gray-50/50 p-4 border-t border-gray-100">
              <div class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Pencarian Populer</div>
              <div class="flex flex-wrap gap-2">
                <button 
                  v-for="(pop, idx) in popularSearches" 
                  :key="idx"
                  @mousedown="searchQuery = pop"
                  class="px-4 py-2 bg-white border border-gray-200 hover:border-[#195682] hover:bg-[#195682] hover:text-white rounded-full text-xs font-semibold text-gray-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
                >
                  🔥 {{ pop }}
                </button>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- Main CTA Cards Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        
        <!-- Beasiswa CTA with Model Image -->
        <div class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500 via-emerald-600 to-green-700 shadow-2xl hover:shadow-[0_20px_50px_rgba(16,185,129,0.35)] transition-all duration-700 transform hover:-translate-y-2 hover:scale-[1.01]">
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-10">
            <div class="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -translate-y-20 translate-x-20 animate-pulse-slow"></div>
            <div class="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full translate-y-16 -translate-x-16 animate-pulse-slow" style="animation-delay: 2s;"></div>
          </div>
          
          <!-- Shine Effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-out"></div>
          
          <div class="grid md:grid-cols-2 gap-6 p-8 md:p-10 relative z-10">
            <!-- Content Side -->
            <div class="text-white flex flex-col justify-between">
              <div>
                <!-- Badge -->
                <div class="inline-flex items-center px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-5 text-xs font-black tracking-wider">
                  <svg class="w-3.5 h-3.5 mr-2 animate-spin" fill="currentColor" viewBox="0 0 20 20" style="animation-duration: 3s">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"></path>
                  </svg>
                  <span>TERBATAS!</span>
                </div>
                
                <h3 class="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">
                  <span class="block">Ingin Kuliah</span>
                  <span class="block text-yellow-300 drop-shadow-md">GRATIS?</span>
                </h3>
                
                <p class="text-green-50/90 mb-5 leading-relaxed text-sm md:text-base">
                  Dapatkan kesempatan beasiswa menarik melalui program Tahfidz Qur’an, BHC, BAKENAKES,
                  BISKO, dan masih banyak lainnya.
                </p>
              </div>

              <!-- Stats Mini -->
              <div class="grid grid-cols-3 gap-2 mb-6 p-3 bg-white/10 group-hover:bg-white/15 backdrop-blur-sm rounded-2xl transition-all duration-500 border border-white/5">
                <div class="text-center">
                  <div class="text-xl font-black text-yellow-300 transition-transform duration-500 group-hover:scale-110">4+</div>
                  <div class="text-[10px] uppercase font-bold text-green-100">Program</div>
                </div>
                <div class="text-center border-x border-white/10">
                  <div class="text-xl font-black text-yellow-300 transition-transform duration-500 group-hover:scale-110">100%</div>
                  <div class="text-[10px] uppercase font-bold text-green-100">Beasiswa</div>
                </div>
                <div class="text-center">
                  <div class="text-xl font-black text-yellow-300 transition-transform duration-500 group-hover:scale-110">∞</div>
                  <div class="text-[10px] uppercase font-bold text-green-100">Peluang</div>
                </div>
              </div>

              <!-- CTA Buttons -->
              <div class="flex flex-col sm:flex-row gap-3">
                <router-link to="/beasiswa" class="flex-1 bg-white text-green-700 font-bold py-3 px-4 rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:scale-[1.03] active:scale-98 flex items-center justify-center group/btn shadow-lg text-sm">
                  <span>Info Beasiswa</span>
                  <svg class="w-4 h-4 ml-1.5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </router-link>
                <a href="https://stikesbanyuwangi.ac.id/beasiswa/" target="_blank" class="flex-1 bg-green-700/30 hover:bg-green-700/50 text-white font-semibold py-3 px-4 rounded-xl border border-white/20 transition-all duration-300 transform hover:scale-[1.03] flex items-center justify-center text-sm">
                  <span>Referensi Resmi</span>
                  <svg class="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Model Image Side -->
            <div class="hidden md:flex items-end justify-center relative overflow-hidden rounded-2xl">
              <div class="absolute inset-0 bg-gradient-to-t from-green-950/60 via-green-950/10 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80"></div>
              <img 
                src="/assets/model/DSCF9959.png" 
                alt="Mahasiswa STIKES" 
                class="relative z-0 h-full w-full object-cover object-top rounded-2xl transform group-hover:scale-108 group-hover:rotate-1 transition-all duration-700 ease-out"
              />
            </div>
          </div>
        </div>

        <!-- PMB CTA with Model Image -->
        <div class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 shadow-2xl hover:shadow-[0_20px_50px_rgba(99,102,241,0.35)] transition-all duration-700 transform hover:-translate-y-2 hover:scale-[1.01]">
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-10">
            <div class="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-y-20 -translate-x-20 animate-pulse-slow"></div>
            <div class="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-y-16 translate-x-16 animate-pulse-slow" style="animation-delay: 2s;"></div>
          </div>
          
          <!-- Shine Effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-out"></div>
          
          <div class="grid md:grid-cols-2 gap-6 p-8 md:p-10 relative z-10">
            <!-- Content Side -->
            <div class="text-white flex flex-col justify-between">
              <div>
                <!-- Badge -->
                <div class="inline-flex items-center px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-5 text-xs font-black tracking-wider">
                  <svg class="w-3.5 h-3.5 mr-2 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                  </svg>
                  <span>PMB 2026/2027</span>
                </div>
                
                <h3 class="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">
                  <span class="block">Sudah Siap</span>
                  <span class="block text-yellow-300 drop-shadow-md">Untuk Kuliah?</span>
                </h3>
                
                <p class="text-blue-50/90 mb-5 leading-relaxed text-sm md:text-base">
                  Bergabunglah dengan ribuan mahasiswa yang telah mempercayakan masa depan mereka di Universitas Dr. Soekardjo.
                </p>
              </div>

              <!-- Stats Mini -->
              <div class="grid grid-cols-3 gap-2 mb-6 p-3 bg-white/10 group-hover:bg-white/15 backdrop-blur-sm rounded-2xl transition-all duration-500 border border-white/5">
                <div class="text-center">
                  <div class="text-xl font-black text-yellow-300 transition-transform duration-500 group-hover:scale-110">8+</div>
                  <div class="text-[10px] uppercase font-bold text-blue-100">Program</div>
                </div>
                <div class="text-center border-x border-white/10">
                  <div class="text-xl font-black text-yellow-300 transition-transform duration-500 group-hover:scale-110">100%</div>
                  <div class="text-[10px] uppercase font-bold text-blue-100">Akreditasi</div>
                </div>
                <div class="text-center">
                  <div class="text-xl font-black text-yellow-300 transition-transform duration-500 group-hover:scale-110">∞</div>
                  <div class="text-[10px] uppercase font-bold text-blue-100">Peluang</div>
                </div>
              </div>

              <!-- CTA Buttons -->
              <div class="flex flex-col sm:flex-row gap-3">
                <router-link to="/infopmb" class="flex-1 bg-white text-blue-600 font-bold py-3 px-4 rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-[1.03] active:scale-98 flex items-center justify-center group/btn shadow-lg text-sm">
                  <span>Info Pendaftaran</span>
                  <svg class="w-4 h-4 ml-1.5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </router-link>
                <a href="https://stikesbanyuwangi.ac.id/penerimaan-mahasiswa-baru/" target="_blank" class="flex-1 bg-blue-700/30 hover:bg-blue-700/50 text-white font-semibold py-3 px-4 rounded-xl border border-white/20 transition-all duration-300 transform hover:scale-[1.03] flex items-center justify-center text-sm">
                  <span>Referensi Resmi</span>
                  <svg class="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Model Image Side -->
            <div class="hidden md:flex items-end justify-center relative overflow-hidden rounded-2xl">
              <div class="absolute inset-0 bg-gradient-to-t from-purple-950/60 via-purple-950/10 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80"></div>
              <img 
                src="/assets/model/DSCF9968.png" 
                alt="Mahasiswa STIKES" 
                class="relative z-0 h-full w-full object-cover object-top rounded-2xl transform group-hover:scale-108 group-hover:rotate-1 transition-all duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Secondary Quick Access Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Program Studi Card -->
        <a href="https://stikesbanyuwangi.ac.id/prodipmb/" target="_blank" class="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#f9ac42]">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-[#f9ac42] to-[#c01c0c] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#195682] transition-colors">Program Studi</h3>
            <p class="text-sm text-gray-600 mb-3">11 program studi terakreditasi dengan kurikulum terkini</p>
            <div class="text-[#f9ac42] font-bold flex items-center text-sm">
              Lihat Program
              <svg class="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </a>

        <!-- Fasilitas Card -->
        <router-link to="/fasilitas" class="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#f9ac42]">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-[#195682] to-[#58d1fd] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#195682] transition-colors">Fasilitas Kampus</h3>
            <p class="text-sm text-gray-600 mb-3">Laboratorium modern, perpustakaan, dan fasilitas penunjang</p>
            <div class="text-[#f9ac42] font-bold flex items-center text-sm">
              Lihat Fasilitas
              <svg class="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </router-link>

        <!-- Sistem Akademik Card -->
        <a href="https://unidsoe.siakadcloud.com/gate/login" target="_blank" class="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#f9ac42]">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-[#58d1fd] to-[#195682] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#195682] transition-colors">Sistem Akademik</h3>
            <p class="text-sm text-gray-600 mb-3">Portal akademik terpadu mahasiswa, dosen, dan staf universitas</p>
            <div class="text-[#f9ac42] font-bold flex items-center text-sm">
              Login Portal
              <svg class="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { watch } from 'vue'
import settings from '../data/settings.json'

const router = useRouter()
const searchQuery = ref('')
const isFocused = ref(false)
const activeIndex = ref(-1)

const levelCategoryMap = {
  'Profesi': 'Profesi'
}

const programModules = import.meta.glob('../data/programs/**/*.json', { eager: true, import: 'default' })

const baseSearchItems = [
  // Pimpinan & Rektor
  { text: 'Struktur Organisasi (Rektor DR. H. Soekardjo)', path: '/profil?tab=struktur', category: 'Profil', tags: ['rektor', 'pimpinan', 'struktur', 'organisasi', 'ketua', 'soekardjo', 'pendiri', 'pengurus'] },
  { text: 'Sambutan Ketua Yayasan / Rektor', path: '/profil?tab=sambutan', category: 'Profil', tags: ['sambutan', 'pidato', 'rektor', 'ketua', 'soekardjo'] },
  { text: 'Visi & Misi Universitas', path: '/profil?tab=visi-misi', category: 'Profil', tags: ['visi', 'misi', 'tujuan', 'target', 'unidsoe'] },
  { text: 'Sejarah & Profil Universitas', path: '/profil?tab=sejarah', category: 'Profil', tags: ['sejarah', 'profil', 'tentang', 'asal-usul', 'stikes', 'transformasi'] },

  // Beasiswa & Biaya
  { text: 'Program Beasiswa Kuliah', path: '/beasiswa', category: 'Layanan', tags: ['beasiswa', 'kip', 'tahfidz', 'bhc', 'gratis', 'potongan', 'spp'] },
  { text: 'Referensi Pendaftaran PMB', path: 'https://stikesbanyuwangi.ac.id/penerimaan-mahasiswa-baru/', isExternal: true, category: 'PMB', tags: ['referensi', 'pendaftaran', 'pmb', 'formulir', 'syarat', 'biaya'] },

  // Fasilitas
  { text: 'Fasilitas & Lab Kampus', path: '/fasilitas', category: 'Fasilitas', tags: ['fasilitas', 'lab', 'laboratorium', 'perpustakaan', 'ruang', 'asrama', 'kelas'] },

  // Kontak & Kerja Sama
  { text: 'Kontak & Lokasi Kampus', path: '/kontak', category: 'Kontak', tags: ['kontak', 'alamat', 'telepon', 'email', 'peta', 'lokasi', 'banyuwangi'] },
  { text: 'Kerja Sama & Kemitraan', path: '/kerja-sama', category: 'Kemitraan', tags: ['kerjasama', 'mitra', 'kerja', 'rumahsakit', 'vps', 'instansi'] }
]

const programSearchItems = computed(() => {
  return Object.keys(programModules).map(key => {
    const data = programModules[key]
    const slug = key.split('/').pop().replace('.json', '')
    const category = levelCategoryMap[data.level] || 'Program Studi'
    const titleWords = data.title.toLowerCase().split(/\s+/)
    const tags = [...titleWords, slug.replace(/-/g, ' '), data.faculty?.toLowerCase() || '']
    return {
      text: data.title,
      path: `/program-studi/${slug}`,
      category,
      tags
    }
  })
})

const searchItems = computed(() => [...baseSearchItems, ...programSearchItems.value])

const popularSearches = ['Rektor Soekardjo', 'Keperawatan', 'Beasiswa KIP', 'PMB 2026', 'Fasilitas Lab']

const filteredResults = computed(() => {
  if (!searchQuery.value) return []
  const query = searchQuery.value.toLowerCase().trim()
  
  return searchItems.value.filter(item => {
    return (
      item.text.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.tags.some(tag => tag.toLowerCase().includes(query))
    )
  })
})

// Reset active index when query results change
watch(filteredResults, () => {
  activeIndex.value = -1
})

const getIconByCategory = (category) => {
  switch (category) {
    case 'Program Studi': return '🎓'
    case 'Profesi': return '🩺'
    case 'Profil': return '🏛️'
    case 'Layanan': return '💰'
    case 'PMB': return '📝'
    case 'Fasilitas': return '🏢'
    case 'Kontak': return '📞'
    case 'Kemitraan': return '🤝'
    default: return '🔍'
  }
}

const getBadgeClass = (category) => {
  switch (category) {
    case 'Program Studi': return 'bg-blue-50 text-blue-600 border border-blue-100'
    case 'Profesi': return 'bg-teal-50 text-teal-600 border border-teal-100'
    case 'Profil': return 'bg-purple-50 text-purple-600 border border-purple-100'
    case 'Layanan': return 'bg-green-50 text-green-600 border border-green-100'
    case 'PMB': return 'bg-yellow-50 text-amber-600 border border-amber-100'
    case 'Fasilitas': return 'bg-indigo-50 text-indigo-600 border border-indigo-100'
    case 'Kontak': return 'bg-pink-50 text-pink-600 border border-pink-100'
    case 'Kemitraan': return 'bg-orange-50 text-orange-600 border border-orange-100'
    default: return 'bg-gray-50 text-gray-600 border border-gray-100'
  }
}

const navigate = (item) => {
  isFocused.value = false
  if (item.isExternal) {
    window.open(item.path, '_blank')
  } else {
    router.push(item.path)
  }
}

const handleBlur = () => {
  setTimeout(() => {
    isFocused.value = false
  }, 200)
}

const handleEnter = () => {
  if (filteredResults.value.length > 0) {
    navigate(filteredResults.value[0])
  }
}

const handleKeyDown = (e) => {
  if (filteredResults.value.length === 0) return
  
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    activeIndex.value = (activeIndex.value + 1) % filteredResults.value.length
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    activeIndex.value = (activeIndex.value - 1 + filteredResults.value.length) % filteredResults.value.length
  } else if (e.key === 'Enter') {
    e.preventDefault()
    if (activeIndex.value >= 0 && activeIndex.value < filteredResults.value.length) {
      navigate(filteredResults.value[activeIndex.value])
    } else {
      handleEnter()
    }
  } else if (e.key === 'Escape') {
    isFocused.value = false
  }
}
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@keyframes pulseSubtle {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.92; transform: scale(1.02); }
}

.animate-pulse-subtle {
  animation: pulseSubtle 3s infinite ease-in-out;
}
</style>
