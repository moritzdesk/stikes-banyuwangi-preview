<template>
  <div class="bg-gray-50 min-h-screen pb-24">
    <PageHeader 
      :title="$t('fasilitas.title')" 
      :breadcrumbs="[{ label: $t('fasilitas.crumbServices') }, { label: $t('fasilitas.crumb') }]"
      bgImage="/assets/site/pexels-1181395.jpg"
    />

    <div class="container-custom mt-16">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl font-bold text-[#0b2b42] mb-4">{{ $t('fasilitas.heading') }}</h2>
        <p class="text-gray-600 text-lg">
          {{ $t('fasilitas.intro') }}
        </p>
      </div>



      <!-- Filter Kategori -->
      <div class="flex flex-wrap gap-3 mb-10 justify-center">
        <button
          @click="selectedCategory = 'all'"
          :class="selectedCategory === 'all' ? 'bg-[#195682] text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'"
          class="px-6 py-2.5 rounded-full font-bold transition-all duration-300 text-sm"
        >
          Semua
        </button>
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          :class="selectedCategory === cat ? 'bg-[#f9ac42] text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'"
          class="px-6 py-2.5 rounded-full font-bold transition-all duration-300 text-sm"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Facilities Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div v-for="(fas, idx) in filteredFacilities" :key="idx" class="bg-white rounded-2xl overflow-hidden shadow-lg group hover:-translate-y-2 transition-transform duration-300">
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
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import PageHeader from '../components/PageHeader.vue'
import { getFacilities } from '../composables/useSite'

// Fasilitas dari prebuild Payload (tanpa JSON statis)
const settings = { facilities: getFacilities() }

const route = useRoute()
const selectedCategory = ref(route.query.kategori || 'all')

const categories = computed(() => [
  ...new Set(settings.facilities.map((f) => f.category).filter(Boolean)),
])

const filteredFacilities = computed(() => {
  if (selectedCategory.value === 'all') return settings.facilities
  return settings.facilities.filter((f) => f.category === selectedCategory.value)
})

watch(
  () => route.query.kategori,
  (val) => {
    selectedCategory.value = val || 'all'
  },
)
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>
