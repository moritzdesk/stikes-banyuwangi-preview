<template>
  <div class="bg-gray-50 min-h-screen">
    <PageHeader 
      title="Hubungi Kami" 
      :breadcrumbs="[{ label: 'Kontak' }]"
      bgImage="/assets/site/pexels-8867431.jpg"
    />

    <div class="container-custom py-16 -mt-10 relative z-20">
      
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Informasi Kontak -->
        <aside class="w-full lg:w-1/3 flex flex-col gap-6">
          <div class="bg-[#195682] rounded-2xl p-8 text-white shadow-xl">
            <h3 class="text-2xl font-bold text-[#f9ac42] mb-6">{{ $t('kontak.campusInfo') }}</h3>
            
            <div class="space-y-6">
              <div class="flex items-start">
                 <svg class="w-6 h-6 text-[#f9ac42] mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                 <div>
                   <p class="font-bold mb-1">{{ $t('kontak.mainAddress') }}</p>
                   <p class="text-blue-100 text-sm leading-relaxed">{{ settings.contact.address }}</p>
                 </div>
              </div>
              
              <div class="flex items-start border-t border-white/20 pt-6">
                 <svg class="w-6 h-6 text-[#f9ac42] mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                 <div>
                   <p class="font-bold mb-1">{{ $t('kontak.huntingPhone') }}</p>
                   <p class="text-blue-100 text-sm">{{ settings.contact.phone }}</p>
                 </div>
              </div>
              
              <div class="flex items-start border-t border-white/20 pt-6">
                 <svg class="w-6 h-6 text-[#f9ac42] mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                 <div>
                   <p class="font-bold mb-1">{{ $t('kontak.officialEmail') }}</p>
                   <p class="text-blue-100 text-sm">{{ settings.contact.email }}</p>
                 </div>
              </div>
            </div>
          </div>
          
          <!-- Jam Operasional -->
          <div class="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h3 class="font-bold text-[#0b2b42] mb-4 flex items-center">
              <svg class="w-5 h-5 text-[#f9ac42] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Jam Kerja Administrasi
            </h3>
            <ul class="text-sm text-gray-600 space-y-2">
              <li class="flex justify-between"><span>{{ $t('kontak.monThu') }}:</span> <span class="font-semibold text-gray-800">08:00 - 15:00 WIB</span></li>
              <li class="flex justify-between"><span>{{ $t('kontak.friday') }}:</span> <span class="font-semibold text-gray-800">08:00 - 14:00 WIB</span></li>
              <li class="flex justify-between"><span>{{ $t('kontak.weekend') }}:</span> <span class="font-semibold text-red-500">{{ $t('kontak.formClose') }}</span></li>
            </ul>
          </div>
        </aside>

        <!-- Form Kritik Saran (Payload CMS) -->
        <main class="w-full lg:w-2/3">
          <div class="bg-white rounded-2xl shadow-md p-8 sm:p-10 h-full">
            <h2 class="text-2xl font-bold text-[#0b2b42] mb-2">{{ $t('kontak.formTitle') }}</h2>
            <p class="text-gray-500 mb-8 border-b pb-6">{{ $t('kontak.formDesc') }}</p>

            <PayloadForm formTitle="Kritik & Saran" submitLabel="Kirim Pesan Sekarang" />
          </div>
        </main>
      </div>
      
      <!-- Peta Besar -->
      <div class="mt-12 bg-white rounded-2xl shadow-md p-4 h-[500px] border border-gray-100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.834771239857!2d114.3575275!3d-8.2064118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd145395a7b1b69%3A0x5be904a98d74cbb6!2sKampus+STIKes+Banyuwangi!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
          width="100%" 
          height="100%" 
          style="border:0; border-radius: 0.75rem;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  </div>
</template>

<script setup>
import PageHeader from '../components/PageHeader.vue'
import PayloadForm from '../components/PayloadForm.vue'
import { getContact } from '../composables/useSite'

// Kontak dari prebuild Payload (tanpa JSON statis)
const settings = { contact: getContact() }
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>
