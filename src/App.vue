<template>
  <div id="app" class="min-h-screen bg-gray-50 flex flex-col">
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
    <main id="main-content" tabindex="-1" class="flex-grow">
      <router-view />
    </main>
    
    <!-- Footer -->
    <Footer />
    
    <!-- WhatsApp Widget -->
    <WhatsAppWidget />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import WhatsAppWidget from './components/WhatsAppWidget.vue'
</script>

<style>
/* Global styles are now in style.css */
</style>