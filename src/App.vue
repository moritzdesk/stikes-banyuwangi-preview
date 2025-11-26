<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <!-- Skip to main content link -->
    <a 
      href="#main-content" 
      class="sr-only focus:not-sr-only"
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
    
    <!-- Header -->
    <Header />
    
    <!-- Main Content -->
    <main id="main-content" tabindex="-1">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
</script>

<style>
/* Global styles are now in style.css */
</style>