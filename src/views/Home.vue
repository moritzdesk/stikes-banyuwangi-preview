<script setup>
import HeroSection from '../components/HeroSection.vue'
import QuickAccessSection from '../components/QuickAccessSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ProgramSearchSection from '../components/ProgramSearchSection.vue'
import PartnershipSection from '../components/PartnershipSection.vue'
import NewsSection from '../components/NewsSection.vue'
import NewsHighlightSection from '../components/NewsHighlightSection.vue'
import StatsSection from '../components/StatsSection.vue'
import CampusShowcaseSection from '../components/CampusShowcaseSection.vue'
import TestimonialSection from '../components/TestimonialSection.vue'
import MagazineSection from '../components/MagazineSection.vue'
import SchemaMarkup from '../components/SchemaMarkup.vue'
import { useSEO } from '../composables/useSEO'
import { useOrganizationSchema, useWebSiteSchema, useLocalBusinessSchema } from '../composables/useSchema'

// SEO Meta Tags
useSEO({
  title: 'Universitas Dr. Soekardjo Banyuwangi - Kampus Kesehatan Berkemajuan',
  description: 'Universitas Dr. Soekardjo Banyuwangi adalah perguruan tinggi kesehatan terdepan di Jawa Timur yang menghasilkan tenaga kesehatan profesional, kompeten, dan berdaya saing global.',
  type: 'website'
})

// Schema Markup
const organizationSchema = useOrganizationSchema()
const websiteSchema = useWebSiteSchema()
const localBusinessSchema = useLocalBusinessSchema()
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Schema Markup -->
    <SchemaMarkup :schema="organizationSchema" />
    <SchemaMarkup :schema="websiteSchema" />
    <SchemaMarkup :schema="localBusinessSchema" />
    
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Quick Access Cards (PMB, Beasiswa, Biaya) -->
    <QuickAccessSection />
    
    <!-- About STIKES -->
    <AboutSection />
    
    <!-- Program Search -->
    <ProgramSearchSection />
    
    <!-- News Highlight Section (General News) -->
    <NewsHighlightSection />
    
    <!-- News & Achievements -->
    <NewsSection />
    
    <!-- Statistics & Practice Assurance -->
    <StatsSection />
    
    <!-- Campus Visual Showcase -->
    <CampusShowcaseSection />
    
    <!-- Testimonials -->
    <TestimonialSection />
    
    <!-- Magazine -->
    <MagazineSection />
    
    <!-- Partnership -->
    <PartnershipSection />
  </div>
</template>
