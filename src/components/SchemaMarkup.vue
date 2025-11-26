<template>
  <component :is="'script'" type="application/ld+json" v-html="jsonLd" />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  schema: {
    type: Object,
    required: true
  }
})

const jsonLd = computed(() => {
  return JSON.stringify(props.schema, null, 2)
})
</script>

