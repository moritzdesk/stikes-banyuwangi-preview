<template>
  <div
    v-if="user"
    class="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-2 pl-4 pr-2 py-2 rounded-full bg-[#0b2b42]/95 backdrop-blur text-white text-xs shadow-2xl border border-white/15"
  >
    <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
    <span class="font-semibold truncate max-w-[140px]">{{ user.email }}</span>
    <a
      v-if="editUrl"
      :href="editUrl"
      target="_blank"
      rel="noopener"
      class="px-3 py-1.5 rounded-full bg-[#f9ac42] text-[#0b2b42] font-bold hover:bg-orange-500 hover:text-white transition-colors whitespace-nowrap"
    >
      ✏️ Edit halaman ini
    </a>
    <a
      :href="`${cmsUrl}/admin`"
      target="_blank"
      rel="noopener"
      class="px-3 py-1.5 rounded-full bg-white/10 font-bold hover:bg-white/20 transition-colors whitespace-nowrap"
    >
      CMS
    </a>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getArticleBySlug } from '../composables/useArticles'
import { getProgramBySlug } from '../composables/usePrograms'

const cmsUrl = (import.meta.env.VITE_CMS_URL || 'http://127.0.0.1:3000').replace(/\/$/, '')
const route = useRoute()
const user = ref(null)

// Halaman statis -> global CMS yang bersangkutan
const globalMap = {
  '/': 'home',
  '/profil': 'profil',
  '/identitas': 'identitas',
  '/beasiswa': 'beasiswa',
  '/infopmb': 'info-pmb',
  '/majalah': 'magazines',
}

const editUrl = computed(() => {
  // Pratinjau draft: belum tentu ada di JSON prebuild -> cari by slug di admin
  if (route.name === 'ArticlePreview') {
    return `${cmsUrl}/admin/collections/articles?search=${encodeURIComponent(route.params.slug || '')}`
  }
  // Artikel published
  if (route.name === 'ArticleDetail') {
    const a = getArticleBySlug(route.params.slug)
    if (a?.id) return `${cmsUrl}/admin/collections/articles/${a.id}`
    return `${cmsUrl}/admin/collections/articles`
  }
  // Prodi
  if (route.name === 'ProgramStudiDetail') {
    const p = getProgramBySlug(route.params.slug)
    if (p?.id) return `${cmsUrl}/admin/collections/programs/${p.id}`
    return `${cmsUrl}/admin/collections/programs`
  }
  // Halaman statis dari globals
  const g = globalMap[route.path]
  if (g) return `${cmsUrl}/admin/globals/${g}`
  return null
})

async function checkAuth() {
  try {
    const res = await fetch(`${cmsUrl}/api/users/me`, { credentials: 'include' })
    if (!res.ok) {
      user.value = null
      return
    }
    const json = await res.json()
    user.value = json?.user || null
  } catch {
    user.value = null
  }
}

onMounted(checkAuth)
watch(() => route.fullPath, checkAuth)
</script>
