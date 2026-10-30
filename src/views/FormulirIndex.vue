<template>
  <div class="bg-gray-50 min-h-screen pb-20">
    <PageHeader
      :title="$t('forms.title')"
      :breadcrumbs="[{ label: $t('forms.crumb') }]"
      :bgImage="headerBg"
    />

    <div class="container-custom mt-12">
      <div v-if="loading" class="grid md:grid-cols-2 gap-6">
        <div v-for="i in 2" :key="i" class="h-40 bg-white animate-pulse rounded-2xl shadow-sm"></div>
      </div>
      <div v-else-if="forms.length > 0" class="grid md:grid-cols-2 gap-6">
        <router-link
          v-for="form in forms"
          :key="form.id"
          :to="`/formulir/${form.slug}`"
          class="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all transform hover:-translate-y-1 group border border-gray-100"
        >
          <div class="w-14 h-14 bg-blue-50 text-[#195682] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 group-hover:text-[#195682] transition-colors mb-2">
            {{ form.title }}
          </h3>
          <p class="text-sm text-gray-500">{{ form.fields.length }} kolom isian • klik untuk mengisi →</p>
        </router-link>
      </div>
      <div v-else class="bg-white rounded-2xl shadow-md p-12 text-center text-gray-400 font-bold">
        Belum ada formulir. Tambahkan dari CMS (menu Formulir → Forms).
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import { slugify, fetchForms } from '../composables/useForms'

// Daftar formulir langsung dari CMS (dinamis — form baru otomatis muncul)
const forms = ref([])
const loading = ref(true)
const headerBg = '/assets/site/pexels-3184291.jpg'

onMounted(async () => {
  try {
    const list = await fetchForms()
    forms.value = list.map((f) => ({
      id: f.id,
      title: f.title,
      slug: slugify(f.title),
      fields: f.fields || [],
    }))
  } catch (err) {
    console.error('Gagal memuat formulir:', err)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>
