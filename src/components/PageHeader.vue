<template>
  <div class="relative bg-[#195682] overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
    <!-- Background Pattern/Image -->
    <div 
      class="absolute inset-0 opacity-20 bg-cover bg-center"
      :style="bgImage ? `background-image: url('${bgImage}')` : 'background-image: url(\'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop\')'"
    ></div>
    
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-[#0b2b42] to-transparent opacity-80"></div>
    
    <div class="container-custom relative z-10">
      <h1 class="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
        {{ title }}
      </h1>
      
      <!-- Breadcrumbs -->
      <nav class="flex text-sm text-gray-300 font-medium" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <router-link to="/" class="hover:text-white transition-colors flex items-center">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Beranda
            </router-link>
          </li>
          <li v-for="(crumb, index) in breadcrumbs" :key="index">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
              </svg>
              <router-link v-if="crumb.path" :to="crumb.path" class="ml-1 md:ml-2 hover:text-white transition-colors">
                {{ crumb.label }}
              </router-link>
              <span v-else class="ml-1 md:ml-2 text-gray-100 font-semibold">
                {{ crumb.label }}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  breadcrumbs: {
    type: Array,
    required: true,
    // Example: [{ label: 'Profil', path: '/profil' }, { label: 'Sejarah' }]
  },
  bgImage: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
