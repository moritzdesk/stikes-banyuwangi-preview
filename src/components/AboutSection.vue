<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="container-custom px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left: Image -->
        <div class="relative animate-fade-in">
          <div class="absolute -inset-4 bg-gradient-to-r from-[#195682] to-[#58d1fd] rounded-3xl blur-2xl opacity-20"></div>
          <div class="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              :src="about.image" 
              alt="Kampus Universitas Dr. Soekardjo Banyuwangi" 
              class="w-full h-[400px] md:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#195682]/50 to-transparent"></div>
          </div>
        </div>

        <!-- Right: Content -->
        <div class="space-y-6">
          <div>
            <span class="text-[#f9ac42] font-bold tracking-wider uppercase text-sm mb-2 block">{{ about.badge }}</span>
            <h2 class="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              {{ about.title }}
            </h2>
          </div>
          
          <div class="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
            <p>
              {{ about.paragraph1 }}
            </p>
            <p>
              {{ about.paragraph2 }}
            </p>
            <p v-if="about.quote" class="font-semibold italic text-[#195682] border-l-4 border-[#f9ac42] pl-4 py-1">
              {{ about.quote }}
            </p>
          </div>

          <!-- Key Points Grid -->
          <div class="grid grid-cols-2 gap-6 pt-4 border-t border-gray-100">
            <div v-for="(point, idx) in about.points" :key="idx" class="flex items-start">
              <div class="w-10 h-10 bg-blue-50 text-[#195682] rounded-lg flex items-center justify-center mr-3 shrink-0 text-xl">
                <i v-if="isHgiIcon(point.icon)" :class="`hgi-icon hgi-${point.icon}`"></i>
                <span v-else>{{ point.icon }}</span>
              </div>
              <div>
                <div class="font-bold text-gray-900">{{ point.title }}</div>
                <div class="text-xs text-gray-500">{{ point.subtitle }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { getHomeAbout } from '../composables/useSite'

// Section Tentang Kami dari prebuild Payload (tanpa konten statis)
const about = getHomeAbout()

const isHgiIcon = (v) => typeof v === 'string' && /^[a-z0-9-]+$/.test(v)
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>
