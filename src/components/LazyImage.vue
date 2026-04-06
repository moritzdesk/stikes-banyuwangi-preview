<template>
  <img
    :src="imageSrc"
    :alt="alt"
    :class="imageClass"
    :loading="loading"
    @load="onLoad"
    @error="onError"
    v-bind="$attrs"
  />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  loading: {
    type: String,
    default: 'lazy',
    validator: (value) => ['lazy', 'eager'].includes(value)
  },
  placeholder: {
    type: String,
    default: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3C/svg%3E'
  },
  imageClass: {
    type: String,
    default: ''
  }
})

const imageSrc = ref(props.placeholder)
const isLoaded = ref(false)

const onLoad = () => {
  isLoaded.value = true
}

const onError = () => {
  // Fallback jika image gagal load
  imageSrc.value = props.placeholder
}

onMounted(() => {
  // Native lazy loading untuk browser yang support
  if (props.loading === 'lazy' && 'loading' in HTMLImageElement.prototype) {
    // Browser support native lazy loading
    imageSrc.value = props.src
  } else if (props.loading === 'lazy') {
    // Fallback untuk browser yang tidak support
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          imageSrc.value = props.src
          observer.disconnect()
        }
      })
    })
    
    // Observe element setelah mounted
    const img = document.querySelector(`img[data-src="${props.src}"]`)
    if (img) {
      observer.observe(img)
    }
  } else {
    // Eager loading
    imageSrc.value = props.src
  }
})
</script>

