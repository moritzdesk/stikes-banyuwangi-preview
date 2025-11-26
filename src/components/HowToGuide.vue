<template>
  <section class="section-padding bg-gradient-to-br from-gray-50 to-green-50">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto">
        <!-- Schema Markup -->
        <SchemaMarkup v-if="howToSchema" :schema="howToSchema" />
        
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {{ howToData.name }}
          </h2>
          <p class="text-xl text-gray-600 mb-4">
            {{ howToData.description }}
          </p>
          <div class="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <span v-if="howToData.totalTime" class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
              </svg>
              {{ formatDuration(howToData.totalTime) }}
            </span>
            <span v-if="howToData.estimatedCost" class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path>
              </svg>
              {{ formatCost(howToData.estimatedCost) }}
            </span>
          </div>
        </div>

        <!-- Steps -->
        <div class="space-y-6">
          <div
            v-for="(step, index) in howToData.steps"
            :key="index"
            :id="`step-${index + 1}`"
            class="bg-white rounded-2xl shadow-lg p-6 md:p-8"
          >
            <div class="flex items-start">
              <!-- Step Number -->
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                {{ index + 1 }}
              </div>
              
              <!-- Step Content -->
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-gray-900 mb-3">
                  {{ step.name || step.title }}
                </h3>
                <div class="text-gray-700 leading-relaxed" v-html="step.text || step.description"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import SchemaMarkup from './SchemaMarkup.vue'
import { useHowToSchema } from '../composables/useSchema'

const props = defineProps({
  howToData: {
    type: Object,
    required: true
  }
})

// HowTo Schema
const howToSchema = computed(() => useHowToSchema(props.howToData))

// Format duration (PT1H30M -> 1 jam 30 menit)
const formatDuration = (duration) => {
  if (!duration) return ''
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?/)
  if (!match) return duration
  
  const hours = match[1] ? parseInt(match[1]) : 0
  const minutes = match[2] ? parseInt(match[2]) : 0
  
  if (hours > 0 && minutes > 0) {
    return `${hours} jam ${minutes} menit`
  } else if (hours > 0) {
    return `${hours} jam`
  } else if (minutes > 0) {
    return `${minutes} menit`
  }
  return duration
}

// Format cost
const formatCost = (cost) => {
  if (!cost) return 'Gratis'
  if (cost.value === '0' || cost.value === 0) return 'Gratis'
  return `Rp ${parseInt(cost.value).toLocaleString('id-ID')}`
}
</script>

