<template>
  <section class="py-16 md:py-24 bg-gray-900 text-white relative font-sans overflow-hidden">
    <!-- Dark overlay/pattern -->
    <div class="absolute inset-0 bg-[#0b2b42]/90"></div>
    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

    <div class="container-custom relative z-10">
      <div class="flex flex-col md:flex-row justify-between items-end mb-12">
        <div class="max-w-2xl">
          <span class="text-[#f9ac42] font-bold tracking-wider uppercase text-sm mb-2 block">{{ $t('home.showcase.eyebrow') }}</span>
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-4">
            {{ $t('home.showcase.title') }}
          </h2>
          <p class="text-gray-300 text-lg">
            {{ $t('home.showcase.subtitle') }}
          </p>
        </div>

      </div>

      <!-- Gallery Grid (maksimal 4 dari CMS: centang "Tampilkan di homepage") -->
      <div v-if="showcase.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="(item, idx) in showcase"
          :key="idx"
          class="relative group overflow-hidden rounded-xl cursor-pointer h-[320px] md:h-[420px]"
        >
          <img :src="item.image" :alt="item.name" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-5">
            <span v-if="item.category" class="inline-block text-[9px] font-bold uppercase tracking-widest text-white bg-white/20 backdrop-blur px-2 py-0.5 rounded-full mb-2">{{ item.category }}</span>
            <h3 class="text-lg font-bold text-white leading-snug">{{ item.name }}</h3>
            <p v-if="item.description" class="text-gray-300 text-xs mt-1 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{{ item.description }}</p>
          </div>
        </div>
      </div>

      <!-- Fallback bila belum ada yang dicentang -->
      <div v-else class="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] md:h-[500px]">
        <!-- Large Item -->
        <div class="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl cursor-pointer">
          <img src="/assets/site/pexels-267885.jpg" alt="Gedung Utama" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute bottom-0 left-0 p-6 translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 class="text-xl font-bold text-white mb-1">Gedung Perkuliahan Terpadu</h3>
            <p class="text-gray-300 text-sm opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">Ruang kelas nyaman ber-AC dengan multimedia lengkap</p>
          </div>
        </div>

        <!-- Small Item 1 -->
        <div class="relative group overflow-hidden rounded-xl cursor-pointer">
          <img src="/assets/site/pexels-356040.jpg" alt="Laboratorium" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
           <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute bottom-0 left-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 class="text-lg font-bold text-white">Laboratorium Keperawatan</h3>
          </div>
        </div>

        <!-- Small Item 2 -->
        <div class="relative group overflow-hidden rounded-xl cursor-pointer">
          <img src="/assets/site/pexels-1181395.jpg" alt="Perpustakaan" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
           <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute bottom-0 left-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 class="text-lg font-bold text-white">Perpustakaan Digital</h3>
          </div>
        </div>

        <!-- Wide Item (spanning 2 cols on bottom right) -->
        <div class="md:col-span-2 relative group overflow-hidden rounded-xl cursor-pointer">
          <img src="/assets/site/pexels-207691.jpg" alt="Auditorium" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
           <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 class="text-xl font-bold text-white mb-1">Auditorium Kampus</h3>
             <p class="text-gray-300 text-sm">Kapasitas 1000 orang untuk kegiatan seminar dan wisuda</p>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>

<script setup>
import { computed } from 'vue'
import { getFacilities } from '../composables/useSite'

// Maksimal 4 fasilitas yang dicentang "Tampilkan di homepage" di CMS
const showcase = computed(() => getFacilities().filter((f) => f.showOnHomepage).slice(0, 4))
</script>
