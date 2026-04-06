<template>
  <section class="py-16 md:py-24 bg-white relative overflow-hidden font-sans">
    <div class="container-custom">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-[#195682] mb-4">
          Assurance of Practice
        </h2>
        <div class="w-20 h-1 bg-[#f9ac42] mx-auto mb-6"></div>
        <p class="text-xl text-gray-600 leading-relaxed">
          <span class="font-semibold text-[#0b2b42]">Jaminan Lokasi Praktik Belajar Klinik.</span> Kami bermitra dengan pemerintah daerah dan organisasi profesi untuk memastikan setiap mahasiswa mendapatkan pengalaman praktik terbaik dan kompetensi yang diakui.
        </p>
      </div>

      <!-- Partners Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">
        <!-- Logo 1: Pemkab -->
        <div class="group flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100">
             <!-- Placeholder since specific logo file is not confirmed -->
             <div class="h-20 w-full flex items-center justify-center text-[#195682] opacity-80 group-hover:opacity-100 transition-opacity">
                <svg class="h-16 w-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.5L19.5 19H4.5L12 5.5z"/></svg>
             </div>
             <p class="mt-4 text-center font-bold text-gray-700 group-hover:text-[#195682] text-sm md:text-base">Pemkab Banyuwangi</p>
        </div>

        <!-- Logo 2: PPNI -->
        <div class="group flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100">
             <div class="h-20 w-full flex items-center justify-center text-[#c01c0c] opacity-80 group-hover:opacity-100 transition-opacity">
                <svg class="h-16 w-16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-4H8v-2h2V7h2v4h2v2h-2v4z"/></svg> 
             </div>
            <p class="mt-4 text-center font-bold text-gray-700 group-hover:text-[#c01c0c] text-sm md:text-base">PPNI</p>
        </div>

        <!-- Logo 3: IBI -->
        <div class="group flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100">
            <div class="h-20 w-full flex items-center justify-center text-[#58d1fd] opacity-80 group-hover:opacity-100 transition-opacity">
               <svg class="h-16 w-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
            </div>
            <p class="mt-4 text-center font-bold text-gray-700 group-hover:text-[#58d1fd] text-sm md:text-base">IBI</p>
        </div>

        <!-- Logo 4: PAFI / Pharmacy -->
         <div class="group flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100">
            <div class="h-20 w-full flex items-center justify-center text-green-600 opacity-80 group-hover:opacity-100 transition-opacity">
                <svg class="h-16 w-16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/></svg>
            </div>
            <p class="mt-4 text-center font-bold text-gray-700 group-hover:text-green-600 text-sm md:text-base">PAFI</p>
        </div>
      </div>

      <div class="mt-16 text-center">
        <a href="#" class="inline-flex items-center text-[#195682] font-bold hover:text-blue-800 transition-colors border-b-2 border-transparent hover:border-[#195682] pb-1">
          Lihat Seluruh Mitra Kerja Sama
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>