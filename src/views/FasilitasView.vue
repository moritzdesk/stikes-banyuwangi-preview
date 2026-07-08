<template>
  <div class="bg-gray-50 min-h-screen pb-24">
    <PageHeader 
      title="Fasilitas Kampus" 
      :breadcrumbs="[{ label: 'Layanan' }, { label: 'Fasilitas' }]"
      bgImage="https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    />

    <div class="container-custom mt-16">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl font-bold text-[#0b2b42] mb-4">Lingkungan Belajar Berstandar Nasional</h2>
        <p class="text-gray-600 text-lg">
          Demi menunjang visi besar mencetak tenaga kesehatan berkompeten, Universitas Dr. Soekardjo Banyuwangi menyiapkan infrastruktur laboratorium klinis, sarana olahraga, dan penunjang mahasiswa lainnya.
        </p>
      </div>



      <!-- Facilities Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div v-for="(fas, idx) in settings.facilities" :key="idx" class="bg-white rounded-2xl overflow-hidden shadow-lg group hover:-translate-y-2 transition-transform duration-300">
          <div class="relative overflow-hidden h-64">
            <img :src="fas.image" :alt="fas.name" class="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700" />
            <div class="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-opacity"></div>
            <!-- Ribbon Category -->
            <span class="absolute top-4 right-4 bg-[#f9ac42] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              {{ fas.category }}
            </span>
          </div>
          <div class="p-6">
            <h3 class="font-bold text-xl text-[#0b2b42] mb-2">{{ fas.name }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              {{ fas.description }}
            </p>
            <span class="inline-flex items-center text-gray-400 text-sm italic">
              * Virtual Tour tersedia segera
            </span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import PageHeader from '../components/PageHeader.vue'
import settings from '../data/settings.json'
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>
