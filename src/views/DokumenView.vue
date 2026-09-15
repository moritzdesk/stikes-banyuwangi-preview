<template>
  <div class="bg-gray-50 min-h-screen pb-20">
    <PageHeader
      :title="$t('dokumen.title')"
      :breadcrumbs="[{ label: $t('dokumen.crumb') }]"
      :bgImage="headerBg"
    />

    <div class="container-custom mt-12">
      <div class="bg-white rounded-2xl shadow-md p-8">
        <div class="flex flex-wrap gap-3 mb-8">
          <button
            @click="selectedCategory = 'all'"
            :class="selectedCategory === 'all' ? 'bg-[#195682] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
            class="px-6 py-2 rounded-full text-sm font-bold transition-colors"
          >
            {{ $t('dokumen.all') }}
          </button>
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
            :class="selectedCategory === cat ? 'bg-[#195682] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
            class="px-6 py-2 rounded-full text-sm font-bold transition-colors"
          >
            {{ cat }}
          </button>
        </div>

        <ul class="space-y-3">
          <li v-for="(doc, idx) in filteredDocs" :key="idx">
            <a :href="doc.driveUrl || doc.file" target="_blank" class="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-[#195682] hover:text-white transition-colors group">
              <div class="flex flex-col truncate pr-4">
                <span class="font-bold text-sm truncate group-hover:text-white">{{ doc.title }}</span>
                <span class="text-[10px] uppercase tracking-widest opacity-60">{{ doc.category }}<span v-if="doc.driveUrl"> • {{ $t('dokumen.driveBadge') }}</span></span>
              </div>
              <svg class="w-5 h-5 text-gray-400 group-hover:text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </a>
          </li>
          <li v-if="filteredDocs.length === 0" class="text-center py-10 text-gray-400 font-bold">
            {{ $t('dokumen.empty') }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import { getDocuments } from '../composables/useSite'

// Dokumen dari prebuild Payload (tanpa JSON statis)
const docs = getDocuments()
const selectedCategory = ref('all')
const headerBg = '/assets/site/pexels-1181675.jpg'

const categories = computed(() => [...new Set(docs.map((d) => d.category).filter(Boolean))])

const filteredDocs = computed(() => {
  const sorted = [...docs].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
  if (selectedCategory.value === 'all') return sorted
  return sorted.filter((d) => d.category === selectedCategory.value)
})
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>
