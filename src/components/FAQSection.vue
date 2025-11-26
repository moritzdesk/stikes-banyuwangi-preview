<template>
  <section class="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto">
        <!-- Schema Markup -->
        <SchemaMarkup v-if="faqSchema" :schema="faqSchema" />
        
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p class="text-xl text-gray-600">
            Temukan jawaban untuk pertanyaan umum tentang STIKES Banyuwangi
          </p>
        </div>

        <!-- FAQ Items -->
        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <button
              @click="toggleFAQ(index)"
              :aria-expanded="openFAQs[index]"
              :aria-controls="`faq-answer-${index}`"
              :id="`faq-question-${index}`"
              class="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
            >
              <h3 class="text-lg font-bold text-gray-900 pr-4">
                {{ faq.question }}
              </h3>
              <svg
                class="w-6 h-6 text-blue-600 flex-shrink-0 transition-transform"
                :class="{ 'rotate-180': openFAQs[index] }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div
              :id="`faq-answer-${index}`"
              :aria-labelledby="`faq-question-${index}`"
              role="region"
              v-show="openFAQs[index]"
              class="px-6 pb-5 text-gray-700 leading-relaxed"
              v-html="faq.answer"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import SchemaMarkup from './SchemaMarkup.vue'
import { useFAQPageSchema } from '../composables/useSchema'

const openFAQs = ref({})

const toggleFAQ = (index) => {
  openFAQs.value[index] = !openFAQs.value[index]
}

// FAQ Data
const faqs = [
  {
    question: 'Apa saja program studi yang tersedia di STIKES Banyuwangi?',
    answer: `
      <p>STIKES Banyuwangi menawarkan berbagai program studi unggulan:</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>S1 Keperawatan & Profesi Ners (Akreditasi Baik Sekali)</li>
        <li>S1 Kebidanan & Profesi Bidan</li>
        <li>S1 Gizi</li>
        <li>D4 Teknologi Laboratorium Medik</li>
        <li>D3 Keperawatan</li>
        <li>D3 Farmasi</li>
      </ul>
    `
  },
  {
    question: 'Bagaimana cara mendaftar sebagai mahasiswa baru?',
    answer: `
      <p>Pendaftaran dapat dilakukan melalui beberapa jalur:</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>Jalur Seleksi Nasional (SNBP/SNBT)</li>
        <li>Jalur Mandiri</li>
        <li>Jalur Beasiswa</li>
        <li>Jalur Prestasi</li>
      </ul>
      <p class="mt-2">Pendaftaran dapat dilakukan secara online melalui website resmi STIKES Banyuwangi atau menghubungi panitia PMB di nomor (0333) 424-123.</p>
    `
  },
  {
    question: 'Apakah STIKES Banyuwangi terakreditasi?',
    answer: `
      <p>Ya, STIKES Banyuwangi memiliki akreditasi institusi "Baik" dari BAN-PT. Program studi S1 Keperawatan juga terakreditasi "Baik Sekali" yang merupakan pencapaian tertinggi untuk program studi.</p>
    `
  },
  {
    question: 'Apakah tersedia program beasiswa?',
    answer: `
      <p>Ya, STIKES Banyuwangi menyediakan berbagai program beasiswa untuk mahasiswa, termasuk:</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>BAKENAKES</li>
        <li>BHC</li>
        <li>Tahfidz</li>
        <li>KIP Kuliah</li>
      </ul>
      <p class="mt-2">Informasi lebih lanjut dapat diperoleh melalui bagian kemahasiswaan.</p>
    `
  },
  {
    question: 'Dimana lokasi kampus STIKES Banyuwangi?',
    answer: `
      <p>Kampus STIKES Banyuwangi berlokasi di:</p>
      <p class="mt-2 font-semibold">Jl. Letkol Istiqlah No. 109<br>
      Singojuruh, Banyuwangi<br>
      Jawa Timur 68464</p>
    `
  },
  {
    question: 'Apa saja fasilitas yang tersedia di kampus?',
    answer: `
      <p>STIKES Banyuwangi dilengkapi dengan berbagai fasilitas modern:</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>Laboratorium Terpadu</li>
        <li>Laboratorium CBT Center</li>
        <li>Klinik STIKES Banyuwangi dengan layanan BPJS</li>
        <li>Perpustakaan</li>
        <li>Asrama</li>
        <li>Fasilitas penunjang lainnya</li>
      </ul>
    `
  }
]

// FAQPage Schema
const faqSchema = computed(() => useFAQPageSchema(faqs))
</script>

