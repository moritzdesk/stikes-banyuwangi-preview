<template>
  <footer class="bg-[#0b2b42] text-white py-16 font-sans">
    <div class="container-custom px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="grid md:grid-cols-5 gap-8">
        <!-- Logo & Description -->
        <div class="md:col-span-2">
          <div class="flex items-center mb-6">
             <img src="/assets/logo/logo_unidsoe_kotak.png" alt="Universitas Dr. Soekardjo Banyuwangi" class="h-12 w-auto mr-3 brightness-0 invert" onerror="this.src='https://via.placeholder.com/50?text=STIKES'"/>
            <div>
              <h3 class="text-xl font-bold">Universitas Dr. Soekardjo Banyuwangi</h3>
              <p class="text-gray-400 text-sm">Sekolah Tinggi Ilmu Kesehatan Banyuwangi</p>
            </div>
          </div>
          <p class="text-gray-300 leading-relaxed mb-6">
            Institusi pendidikan tinggi kesehatan yang berkomitmen menghasilkan tenaga kesehatan profesional berkualitas, berakhlak mulia, dan berdaya saing global.
          </p>
          <div class="flex space-x-4">
            <a href="https://www.instagram.com/unidsoe" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-[#195682] rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 transition-all duration-300" title="Instagram">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.facebook.com/stikesbwi" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-[#195682] rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors" title="Facebook">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.youtube.com/@unidsoeofficial" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-[#195682] rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors" title="YouTube">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@unidsoe" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-[#195682] rounded-lg flex items-center justify-center hover:bg-black transition-colors" title="TikTok">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
            </a>
            <a href="https://www.threads.com/@unidsoe" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-[#195682] rounded-lg flex items-center justify-center hover:bg-black transition-colors" title="Threads">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.63 1.745-1.6.042-3.167-.614-4.294-1.818-1.17-1.248-1.847-3.06-1.903-5.1-.055-2.014.488-3.77 1.55-5.086 1.073-1.33 2.583-2.08 4.259-2.115 1.677-.033 3.213.72 4.322 2.121.878 1.11 1.379 2.51 1.43 4.005h-.007c.005.065.01.13.015.195.06.74.113 1.393-.123 2.088-.21.616-.624 1.163-1.196 1.584-.65.476-1.484.693-2.496.654-1.072-.042-2.055-.564-2.768-1.471-.784-.995-1.138-2.289-1.027-3.742.055-.734.228-1.418.512-2.033.384-.828.933-1.515 1.636-2.047.703-.533 1.524-.817 2.444-.858 2.16-.096 4.146 1.43 4.427 4.157.022.21.033.424.03.64-.007.5-.042.997-.104 1.488.049.07.096.141.142.212 1.21 1.863 1.22 3.84.026 5.89-.873 1.498-2.273 2.536-4.168 3.08-1.036.298-2.14.448-3.278.445z"/></svg>
            </a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-bold mb-6 text-[#f9ac42]">Menu Utama</h4>
          <ul class="space-y-3 font-medium">
            <li><router-link to="/profil" class="text-gray-300 hover:text-[#58d1fd] transition-colors">Tentang Kami</router-link></li>
            <li><router-link to="/program-studi" class="text-gray-300 hover:text-[#58d1fd] transition-colors">Program Studi</router-link></li>
            <li><router-link to="/fasilitas" class="text-gray-300 hover:text-[#58d1fd] transition-colors">Fasilitas Kampus</router-link></li>
            <li><router-link to="/kerja-sama" class="text-gray-300 hover:text-[#58d1fd] transition-colors">Kerja Sama</router-link></li>
            <li><router-link to="/akademik" class="text-gray-300 hover:text-[#58d1fd] transition-colors">Akademik</router-link></li>
            <li><a :href="settings.contact.pmbLink" target="_blank" class="text-gray-300 hover:text-[#58d1fd] transition-colors">PMB 2025</a></li>
          </ul>
        </div>
        
        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-bold mb-6 text-[#f9ac42]">Kontak Kami</h4>
          <div class="space-y-4">
            <div class="flex items-start">
              <svg class="w-6 h-6 text-[#58d1fd] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <div>
                <p class="text-gray-300">{{ settings.contact.address }}</p>
              </div>
            </div>
            <div class="flex items-center">
               <svg class="w-6 h-6 text-[#58d1fd] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <span class="text-gray-300">{{ settings.contact.email }}</span>
            </div>
            <div class="flex items-center">
               <svg class="w-6 h-6 text-[#58d1fd] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <span class="text-gray-300">{{ settings.contact.phone }}</span>
            </div>
          </div>
        </div>
        
        <!-- Google Maps -->
        <div>
          <h4 class="text-lg font-bold mb-6 text-[#f9ac42]">Lokasi Kampus</h4>
          <div class="rounded-xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.8376!2d114.3695!3d-8.2195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMTMnMTAuMiJTIDExNMKwMjInMTAuMiJF!5e0!3m2!1sen!2sid!4v1234567890" 
              width="100%" 
              height="200" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              class="grayscale hover:grayscale-0 transition-all duration-300"
            ></iframe>
          </div>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <p class="text-gray-400">
          © 2025 Universitas Dr. Soekardjo Banyuwangi. All Rights Reserved.
        </p>
        <div class="flex items-center space-x-6 mt-4 md:mt-0">
          <a href="#" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import settings from '../data/settings.json'
</script>
