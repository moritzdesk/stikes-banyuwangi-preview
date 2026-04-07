<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Loading State -->
    <div v-if="loading" class="flex flex-col items-center justify-center min-h-[70vh]">
      <div class="w-16 h-16 border-4 border-blue-100 border-t-[#195682] rounded-full animate-spin"></div>
      <p class="mt-8 text-gray-500 font-bold tracking-widest uppercase text-xs">Memuat Artikel...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div class="w-24 h-24 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center mb-6">
        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
      </div>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Waduh! Artikel Tidak Ditemukan</h2>
      <p class="text-gray-500 mb-8 max-w-md">Sepertinya artikel yang Anda cari tidak ada atau sudah dipindahkan.</p>
      <router-link to="/artikel" class="px-8 py-3 bg-[#195682] text-white font-bold rounded-full hover:bg-black transition-colors">
        Kembali ke Daftar Berita
      </router-link>
    </div>

    <!-- Article Content -->
    <div v-else-if="article">
      <!-- Breadcrumbs Component -->
      <PageHeader 
        :title="article.title" 
        :breadcrumbs="[{ label: 'Berita', path: '/artikel' }, { label: article.category }]"
        bgImage="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
      />

      <!-- Article Body -->
      <article class="py-16 md:py-24">
        <div class="container-custom">
          <div class="max-w-4xl mx-auto">
            
            <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
               <!-- Main Image -->
               <div class="relative h-64 md:h-[500px] overflow-hidden">
                 <img :src="article.image" :alt="article.title" class="w-full h-full object-cover">
                 <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
               </div>

               <!-- Content Inner -->
               <div class="p-8 md:p-16">
                  <!-- Meta Header -->
                  <div class="flex flex-wrap items-center gap-4 mb-8 text-sm font-bold uppercase tracking-widest text-gray-400">
                    <span class="px-4 py-1.5 bg-gray-100 text-[#195682] rounded-full">{{ article.category }}</span>
                    <span>•</span>
                    <div class="flex items-center">
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {{ article.date }}
                    </div>
                  </div>

                  <!-- Actual Body Content -->
                  <div 
                    class="prose prose-lg md:prose-xl max-w-none prose-headings:text-[#0b2b42] prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-[#195682] prose-img:rounded-3xl prose-img:shadow-lg"
                    v-html="article.content"
                  ></div>

                  <!-- Share Section & Footer -->
                  <div class="mt-16 pt-12 border-t border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div class="flex items-center gap-4">
                      <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Penulis:</span>
                      <span class="text-sm font-bold text-[#195682] uppercase">{{ article.author }}</span>
                    </div>
                    
                    <div class="flex gap-2">
                      <!-- Basic Share Buttons -->
                      <button @click="share('facebook')" class="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                        <i class="fab fa-facebook-f"></i>
                      </button>
                      <button @click="share('twitter')" class="w-10 h-10 rounded-full bg-blue-50 text-blue-400 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors">
                        <i class="fab fa-twitter"></i>
                      </button>
                      <button @click="share('whatsapp')" class="w-10 h-10 rounded-full bg-green-50 text-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors">
                        <i class="fab fa-whatsapp"></i>
                      </button>
                    </div>
                  </div>
               </div>
            </div>

            <!-- Back navigation -->
            <div class="mt-12 text-center">
              <router-link to="/artikel" class="inline-flex items-center text-[#195682] font-bold hover:text-[#f9ac42] transition-colors group">
                <svg class="w-5 h-5 mr-3 group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Semua Berita UNIDSOE
              </router-link>
            </div>

          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import PageHeader from '../components/PageHeader.vue'
import { useSEO } from '../composables/useSEO'

const route = useRoute()
const article = ref(null)
const loading = ref(true)
const error = ref(false)

const fetchArticleDetail = async (slug) => {
  try {
    loading.value = true
    const response = await fetch(`https://app-semesta.sclstudio.id/api/7484760816345a2673df2eb6c36eca74/articles/${slug}`)
    
    if (!response.ok) throw new Error('Not found')
    
    const data = await response.json()
    const item = data.data
    
    article.value = {
      title: item.title,
      slug: item.slug,
      date: item.publish_date ? new Date(item.publish_date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : '',
      image: item.image_path || item.large_image_path,
      summary: item.description,
      content: item.content || item.body || '<p>Tidak ada konten.</p>',
      category: item.category?.name || 'Berita',
      author: item.created_by?.name || 'Humas UNIDSOE'
    }

    error.value = false
  } catch (err) {
    console.error('Error fetching article detail:', err)
    error.value = true
  } finally {
    loading.value = false
  }
}

const share = (platform) => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent(article.value?.title || '')
  let shareUrl = ''
  
  if (platform === 'facebook') shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`
  if (platform === 'twitter') shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`
  if (platform === 'whatsapp') shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`
  
  window.open(shareUrl, '_blank')
}

// Initial fetch
onMounted(() => {
  fetchArticleDetail(route.params.slug)
})

// Watch for slug changes (if user clicks related links)
watch(() => route.params.slug, (newSlug) => {
  if (newSlug) fetchArticleDetail(newSlug)
})
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

/* Custom shadow to give premium feel */
.shadow-xl {
  shadow-box: 0 25px 50px -12px rgba(0, 0, 0, 0.08);
}
</style>
