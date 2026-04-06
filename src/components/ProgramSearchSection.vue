<template>
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="container-custom px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <span class="text-[#f9ac42] font-bold tracking-wider uppercase text-sm mb-2 block">Program Studi</span>
        <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Fakultas & Program Studi
        </h2>
        <p class="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
          Temukan program studi yang sesuai dengan minat dan passion kamu
        </p>

        <!-- Search Bar -->
        <div class="max-w-2xl mx-auto relative">
          <input 
            v-model="searchQuery"
            type="text"
            placeholder="Cari program studi (contoh: Keperawatan, Gizi, Farmasi)..."
            class="w-full px-6 py-4 pr-12 rounded-full border-2 border-gray-200 focus:border-[#195682] focus:outline-none text-gray-700 shadow-lg"
          />
          <svg class="w-6 h-6 text-gray-400 absolute right-6 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>

        <!-- Results Count -->
        <p v-if="searchQuery" class="text-sm text-gray-500 mt-4">
          Ditemukan {{ filteredPrograms.length }} dari {{ programs.length }} program studi
        </p>
      </div>

      <!-- Programs Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <router-link 
          v-for="program in filteredPrograms" 
          :key="program.slug"
          :to="`/program-studi/${program.slug}`"
          class="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#195682] cursor-pointer block"
        >
          <!-- Icon -->
          <div class="w-16 h-16 bg-gradient-to-br from-[#195682] to-[#58d1fd] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </div>

          <!-- Program Name -->
          <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#195682] transition-colors">
            {{ program.name }}
          </h3>

          <!-- Degree Level -->
          <p class="text-sm text-gray-500 mb-3">{{ program.level }}</p>

          <!-- Accreditation Badge (if available) -->
          <div v-if="program.accreditation" class="mb-4">
            <span 
              class="inline-block px-3 py-1 rounded-full text-xs font-bold"
              :class="program.accreditation === 'Baik Sekali' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'"
            >
              {{ program.accreditation }}
            </span>
          </div>

          <!-- Description -->
          <p class="text-sm text-gray-600 mb-4 line-clamp-2">
            {{ program.description }}
          </p>

          <!-- CTA -->
          <div class="flex items-center text-[#f9ac42] font-bold text-sm group-hover:text-[#195682]">
            Lihat Detail
            <svg class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </router-link>
      </div>

      <!-- No Results -->
      <div v-if="filteredPrograms.length === 0" class="text-center py-12">
        <svg class="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <p class="text-gray-500 text-lg">Tidak ada program studi yang sesuai dengan pencarian</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')
const modules = import.meta.glob('../data/programs/*.json', { eager: true, import: 'default' })

const programs = computed(() => {
  return Object.keys(modules).map(key => {
    const slug = key.split('/').pop().replace('.json', '')
    const data = modules[key]
    return {
      slug,
      name: data.title || '',
      level: data.level || '',
      description: data.shortDescription || '',
      accreditation: data.accreditation || null
    }
  })
})

const filteredPrograms = computed(() => {
  if (!searchQuery.value) {
    return programs.value
  }
  
  const query = searchQuery.value.toLowerCase()
  return programs.value.filter(program => 
    program.name.toLowerCase().includes(query) ||
    program.level.toLowerCase().includes(query) ||
    program.description.toLowerCase().includes(query)
  )
})
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
