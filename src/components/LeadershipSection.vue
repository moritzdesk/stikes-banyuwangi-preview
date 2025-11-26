<template>
  <section 
    ref="leadershipElement"
    class="section-padding bg-gradient-to-br from-blue-50 to-indigo-100 transform transition-all duration-1000"
    :class="leadershipVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'"
  >
    <!-- Schema Markup -->
    <SchemaMarkup v-if="personSchema" :schema="personSchema" />
    <SchemaMarkup v-for="(reviewSchema, index) in reviewSchemas" :key="index" :schema="reviewSchema" />
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Leadership Profile -->
        <div class="animate-fade-in-left">
          <div class="relative">
            <!-- Profile Image -->
            <div class="relative w-80 h-96 mx-auto lg:mx-0">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl transform rotate-3"></div>
              <div class="relative w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div class="text-center">
                    <div class="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span class="text-white text-4xl font-bold">DR</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900">DR. H. Soekardjo</h3>
                    <p class="text-blue-600 font-semibold">Ketua STIKes Banyuwangi</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Floating Elements -->
            <div class="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-float">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            
            <div class="absolute -bottom-4 -left-4 w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center animate-float" style="animation-delay: 1s;">
              <span class="text-white font-bold text-lg">A+</span>
            </div>
          </div>
        </div>

        <!-- Quote & Testimonials -->
        <div class="animate-fade-in-right">
          <!-- Main Quote -->
          <div class="mb-12">
            <div class="relative">
              <svg class="w-16 h-16 text-blue-200 mb-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <blockquote class="text-2xl lg:text-3xl font-bold text-gray-800 leading-relaxed mb-6">
                "Bersatu padu dalam melangkah, dengan daya seiring doa, tempa diri demi raih cita."
              </blockquote>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-4">
                  <span class="text-white font-bold">DR</span>
                </div>
                <div>
                  <p class="font-semibold text-gray-900">DR. H. Soekardjo</p>
                  <p class="text-gray-600">Ketua STIKes Banyuwangi</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Testimonial Cards -->
          <div class="space-y-6">
            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span class="text-white font-bold text-sm">EK</span>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-gray-900 mb-2">Erk Toga</h4>
                  <p class="text-gray-600 text-sm leading-relaxed mb-3">
                    "Prestasi Stikes, adalah Hasil Eksistensi dari Proses yang Telah Dilalui"
                  </p>
                  <button class="text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span class="text-white font-bold text-sm">SH</span>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-gray-900 mb-2">Ir. H. Suhartoyo, SH, M.Si</h4>
                  <p class="text-gray-600 text-sm leading-relaxed mb-3">
                    "Sudah saatnya Stikes menjadi Institut"
                  </p>
                  <button class="text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span class="text-white font-bold text-sm">JW</span>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-gray-900 mb-2">dr. Juwana</h4>
                  <p class="text-gray-600 text-sm leading-relaxed mb-3">
                    "Terima Kasih, Saya Bangga Menjadi Bagian dari Stikes Banyuwangi"
                  </p>
                  <button class="text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span class="text-white font-bold text-sm">AY</span>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-gray-900 mb-2">Mengenal Lebih Dekat Duta Daerah 2017</h4>
                  <p class="text-gray-600 text-sm leading-relaxed mb-3">
                    "Anggita dan Yahya Jebeng Thulk Kesehatan"
                  </p>
                  <button class="text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import SchemaMarkup from './SchemaMarkup.vue'
import { usePersonSchema, useReviewSchema } from '../composables/useSchema'

const leadershipElement = ref(null)
const leadershipVisible = ref(false)

// Intersection observer untuk leadership section
useIntersectionObserver(
  leadershipElement,
  ([{ isIntersecting }]) => {
    leadershipVisible.value = isIntersecting
  },
  { threshold: 0.2 }
)

// Person Schema untuk Ketua
const personSchema = computed(() => usePersonSchema({
  name: 'DR. H. Soekardjo',
  jobTitle: 'Ketua STIKES Banyuwangi',
  description: 'Ketua STIKES Banyuwangi yang berkomitmen dalam meningkatkan kualitas pendidikan kesehatan',
  email: 'ketua@stikesbanyuwangi.ac.id'
}))

// Review Schema untuk testimoni
const reviews = [
  {
    author: 'Erk Toga',
    text: 'Prestasi Stikes, adalah Hasil Eksistensi dari Proses yang Telah Dilalui',
    rating: 5,
    date: '2024-01-15'
  },
  {
    author: 'Ir. H. Suhartoyo, SH, M.Si',
    text: 'Sudah saatnya Stikes menjadi Institut',
    rating: 5,
    date: '2024-01-15'
  },
  {
    author: 'dr. Juwana',
    text: 'Terima Kasih, Saya Bangga Menjadi Bagian dari Stikes Banyuwangi',
    rating: 5,
    date: '2024-01-15'
  }
]

const reviewSchemas = computed(() => {
  const schemas = useReviewSchema(reviews)
  return Array.isArray(schemas) ? schemas : [schemas]
})
</script>
