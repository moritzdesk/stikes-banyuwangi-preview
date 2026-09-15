<template>
  <div class="bg-gray-50 min-h-screen pb-20">
    <PageHeader
      :title="formTitle"
      :breadcrumbs="[{ label: $t('forms.crumb'), path: '/formulir' }, { label: formTitle }]"
      :bgImage="headerBg"
    />

    <div class="container-custom mt-12">
      <div class="bg-white rounded-2xl shadow-md p-8 sm:p-10 max-w-3xl mx-auto">
        <div v-if="loading" class="py-8 text-center text-gray-400 text-sm font-bold uppercase tracking-widest">
          Memuat formulir...
        </div>
        <div v-else-if="!found" class="py-8 text-center">
          <h3 class="text-xl font-bold text-gray-900 mb-2">{{ $t('forms.notFound') }}</h3>
          <router-link to="/formulir" class="text-[#195682] font-bold">← Kembali ke daftar formulir</router-link>
        </div>
        <PayloadForm v-else :formTitle="matchedTitle" submitLabel="Kirim" :key="matchedTitle" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import PageHeader from '../components/PageHeader.vue'
import PayloadForm from '../components/PayloadForm.vue'
import { slugify, fetchForms } from '../composables/useForms'

const route = useRoute()
const loading = ref(true)
const found = ref(false)
const formTitle = ref('Formulir')
const matchedTitle = ref('')
const headerBg = '/assets/site/pexels-3184291.jpg'

async function load() {
  loading.value = true
  try {
    const list = await fetchForms()
    const match = list.find((f) => slugify(f.title) === route.params.slug)
    if (match) {
      found.value = true
      formTitle.value = match.title
      matchedTitle.value = match.title
    } else {
      found.value = false
    }
  } catch {
    found.value = false
  } finally {
    loading.value = false
  }
}

onMounted(load)
watch(() => route.params.slug, load)
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>
