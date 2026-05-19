<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="container-custom px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left: Image -->
        <div class="relative animate-fade-in">
          <div class="absolute -inset-4 bg-gradient-to-r from-[#195682] to-[#58d1fd] rounded-3xl blur-2xl opacity-20"></div>
          <div class="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80" 
              alt="Kampus Universitas Dr. Soekardjo Banyuwangi" 
              class="w-full h-[400px] md:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#195682]/50 to-transparent"></div>
          </div>
        </div>

        <!-- Right: Content -->
        <div class="space-y-6">
          <div>
            <span class="text-[#f9ac42] font-bold tracking-wider uppercase text-sm mb-2 block">Tentang Kami</span>
            <h2 class="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Universitas Dr. Soekardjo
            </h2>
          </div>
          
          <div class="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
            <p>
              Universitas Dr. Soekardjo (UNIDSOE) merupakan transformasi dari STIKES Banyuwangi, sebuah langkah strategis untuk memperluas keilmuan dan memperkuat dampak bagi masyarakat. Berawal dari kekuatan di bidang kesehatan, UNIDSOE kini berkembang dengan mengintegrasikan ilmu kesehatan, sosial, dan teknologi dalam sistem pendidikan yang adaptif dan relevan dengan kebutuhan global.
            </p>
            <p>
              Didukung fasilitas pembelajaran yang lengkap dan modern, serta program studi terakreditasi dengan mayoritas meraih predikat Baik Sekali, UNIDSOE berkomitmen menjaga kualitas pendidikan yang unggul. Berbagai prestasi telah diraih hingga tingkat internasional, dan para alumni telah berkiprah di berbagai sektor, baik nasional maupun global.
            </p>
            <p class="font-semibold italic text-[#195682] border-l-4 border-[#f9ac42] pl-4 py-1">
              “We Create Graduates Who Serve The World” — UNIDSOE hadir untuk mencetak lulusan yang kompeten, profesional, dan siap memberi dampak nyata bagi dunia.
            </p>
          </div>

          <!-- Key Points Grid -->
          <div class="grid grid-cols-2 gap-6 pt-4 border-t border-gray-100">
            <div class="flex items-start">
              <div class="w-10 h-10 bg-blue-50 text-[#195682] rounded-lg flex items-center justify-center mr-3 shrink-0">
                🎓
              </div>
              <div>
                <div class="font-bold text-gray-900">11 Program Studi</div>
                <div class="text-xs text-gray-500">Terakreditasi</div>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-10 h-10 bg-yellow-50 text-[#f9ac42] rounded-lg flex items-center justify-center mr-3 shrink-0">
                🏆
              </div>
              <div>
                <div class="font-bold text-gray-900">100+ Prestasi</div>
                <div class="text-xs text-gray-500">Nasional & Internasional</div>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-10 h-10 bg-green-50 text-emerald-600 rounded-lg flex items-center justify-center mr-3 shrink-0">
                💰
              </div>
              <div>
                <div class="font-bold text-gray-900">Beasiswa Lengkap</div>
                <div class="text-xs text-gray-500">KIP, Yayasan, & Mitra</div>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mr-3 shrink-0">
                🌍
              </div>
              <div>
                <div class="font-bold text-gray-900">Alumni Mendunia</div>
                <div class="text-xs text-gray-500">Kiprah Nasional & Global</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// About STIKES Section - Two column layout
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>
