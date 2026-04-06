<template>
  <div class="bg-gray-50 min-h-screen">
    <PageHeader 
      title="Hubungi Kami" 
      :breadcrumbs="[{ label: 'Kontak' }]"
      bgImage="https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    />

    <div class="container-custom py-16 -mt-10 relative z-20">
      
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Informasi Kontak -->
        <aside class="w-full lg:w-1/3 flex flex-col gap-6">
          <div class="bg-[#195682] rounded-2xl p-8 text-white shadow-xl">
            <h3 class="text-2xl font-bold text-[#f9ac42] mb-6">Informasi Kampus</h3>
            
            <div class="space-y-6">
              <div class="flex items-start">
                 <svg class="w-6 h-6 text-[#f9ac42] mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                 <div>
                   <p class="font-bold mb-1">Alamat Utama</p>
                   <p class="text-blue-100 text-sm leading-relaxed">{{ settings.contact.address }}</p>
                 </div>
              </div>
              
              <div class="flex items-start border-t border-white/20 pt-6">
                 <svg class="w-6 h-6 text-[#f9ac42] mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                 <div>
                   <p class="font-bold mb-1">Telepon (Hunting)</p>
                   <p class="text-blue-100 text-sm">{{ settings.contact.phone }}</p>
                 </div>
              </div>
              
              <div class="flex items-start border-t border-white/20 pt-6">
                 <svg class="w-6 h-6 text-[#f9ac42] mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                 <div>
                   <p class="font-bold mb-1">Email Resmi</p>
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
              <li class="flex justify-between"><span>Senin - Kamis:</span> <span class="font-semibold text-gray-800">08:00 - 15:00 WIB</span></li>
              <li class="flex justify-between"><span>Jumat:</span> <span class="font-semibold text-gray-800">08:00 - 14:00 WIB</span></li>
              <li class="flex justify-between"><span>Sabtu, Minggu & Libur Nasional:</span> <span class="font-semibold text-red-500">Tutup</span></li>
            </ul>
          </div>
        </aside>

        <!-- Form Kritik Saran (Mock) -->
        <main class="w-full lg:w-2/3">
          <div class="bg-white rounded-2xl shadow-md p-8 sm:p-10 h-full">
            <h2 class="text-2xl font-bold text-[#0b2b42] mb-2">Punya pertanyaan untuk kami?</h2>
            <p class="text-gray-500 mb-8 border-b pb-6">Silakan isi formulir di bawah ini, admin Humas & Promosi kami akan merespons melalui email yang Anda daftarkan.</p>
            
            <form @submit.prevent="submitForm">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-2">Nama Lengkap <span class="text-red-500">*</span></label>
                  <input type="text" class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#195682]/50 focus:border-[#195682] transition-colors" placeholder="Cth: Budi Santoso" required>
                </div>
                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-2">Email Aktif <span class="text-red-500">*</span></label>
                  <input type="email" class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#195682]/50 focus:border-[#195682] transition-colors" placeholder="Cth: budi@gmail.com" required>
                </div>
              </div>
              
              <div class="mb-6">
                <label class="block text-sm font-bold text-gray-700 mb-2">Subjek Pertanyaan</label>
                <select class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#195682]/50 focus:border-[#195682] transition-colors">
                  <option>Informasi Pendaftaran (PMB)</option>
                  <option>Informasi Akademik Mahasiswa</option>
                  <option>Kerja Sama / MoU</option>
                  <option>Legalitas Ijazah / Alumni</option>
                  <option>Lainnya</option>
                </select>
              </div>
              
              <div class="mb-8">
                <label class="block text-sm font-bold text-gray-700 mb-2">Pesan Anda <span class="text-red-500">*</span></label>
                <textarea rows="5" class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#195682]/50 focus:border-[#195682] transition-colors" placeholder="Tuliskan pesan atau keluhan secara detail..." required></textarea>
              </div>
              
              <button type="submit" class="w-full md:w-auto px-8 py-4 bg-[#f9ac42] hover:bg-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-1 inline-flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                Kirim Pesan Sekarang
              </button>
            </form>
          </div>
        </main>
      </div>
      
      <!-- Peta Besar -->
      <div class="mt-12 bg-white rounded-2xl shadow-md p-4 h-[500px] border border-gray-100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.8376!2d114.3695!3d-8.2195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMTMnMTAuMiJTIDExNMKwMjInMTAuMiJF!5e0!3m2!1sen!2sid!4v1234567890" 
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
import settings from '../data/settings.json'

const submitForm = () => {
  alert('Formulir mock: Pesan Dummy berhasil dikirim!')
}
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>
