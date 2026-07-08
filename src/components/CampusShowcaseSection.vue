<template>
  <section class="py-16 md:py-24 bg-gray-900 text-white relative font-sans overflow-hidden">
    <!-- Dark overlay/pattern -->
    <div class="absolute inset-0 bg-[#0b2b42]/90"></div>
    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

    <div class="container-custom relative z-10">
      <div class="flex flex-col md:flex-row justify-between items-end mb-12">
        <div class="max-w-2xl">
          <span class="text-[#f9ac42] font-bold tracking-wider uppercase text-sm mb-2 block">Fasilitas Kampus</span>
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-4">
            Lingkungan Belajar Modern
          </h2>
          <p class="text-gray-300 text-lg">
            Jelajahi fasilitas pendidikan kesehatan berstandar nasional yang mendukung proses pembelajaran praktik dan teori.
          </p>
        </div>

      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] md:h-[500px]">
        <!-- Large Item -->
        <div class="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl cursor-pointer">
          <img src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Gedung Utama" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute bottom-0 left-0 p-6 translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 class="text-xl font-bold text-white mb-1">Gedung Perkuliahan Terpadu</h3>
            <p class="text-gray-300 text-sm opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">Ruang kelas nyaman ber-AC dengan multimedia lengkap</p>
          </div>
        </div>

        <!-- Small Item 1 -->
        <div class="relative group overflow-hidden rounded-xl cursor-pointer">
          <img src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Laboratorium" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
           <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute bottom-0 left-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 class="text-lg font-bold text-white">Laboratorium Keperawatan</h3>
          </div>
        </div>

        <!-- Small Item 2 -->
        <div class="relative group overflow-hidden rounded-xl cursor-pointer">
          <img src="https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Perpustakaan" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
           <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute bottom-0 left-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 class="text-lg font-bold text-white">Perpustakaan Digital</h3>
          </div>
        </div>

        <!-- Wide Item (spanning 2 cols on bottom right) -->
        <div class="md:col-span-2 relative group overflow-hidden rounded-xl cursor-pointer">
          <img src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Auditorium" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
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
