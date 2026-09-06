<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Header with dynamic title -->
    <PageHeader 
      v-if="programData"
      :title="programData.title" 
      :breadcrumbs="[{ label: 'Akademik', path: '/' }, { label: 'Program Studi', path: '/program-studi' }, { label: programData.title }]"
      :bgImage="programData.image"
    />

    <div class="container-custom py-16" v-if="programData">
      
      <!-- ============ Top Info Card ============ -->
      <div class="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-10">
        <div class="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div class="flex-shrink-0">
            <div class="w-36 h-36 md:w-44 md:h-44 bg-gradient-to-br from-[#195682] to-[#0b2b42] rounded-full flex items-center justify-center text-white shadow-xl shadow-blue-900/30 border-8 border-[#f9ac42]/20 p-5 text-center">
              <h2 class="text-2xl md:text-3xl font-black leading-tight">{{ programData.level }} <br> <span class="text-sm md:text-base font-medium text-[#f9ac42] uppercase tracking-widest">{{ programData.title.replace(programData.level, '').trim() }}</span></h2>
            </div>
          </div>
          <div class="w-full">
            <div class="flex items-center gap-3 mb-3 flex-wrap">
              <h2 class="text-2xl md:text-4xl font-bold text-[#0b2b42]">Profil Program Studi</h2>
              <span class="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[#195682] text-xs font-bold uppercase tracking-wide">{{ programData.accreditation }}</span>
            </div>
            <template v-if="asList(programData.profilProgramStudi || programData.shortDescription).length > 0">
              <ul class="space-y-2.5 mb-6">
                <li v-for="(item, index) in asList(programData.profilProgramStudi || programData.shortDescription)" :key="index" class="flex items-start text-gray-600 text-lg leading-relaxed">
                  <span class="text-[#f9ac42] font-bold mr-2.5 mt-1">•</span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </template>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="bg-blue-50 p-4 rounded-xl text-center">
                <span class="block text-gray-500 text-xs font-bold uppercase mb-1">Akreditasi</span>
                <span class="block text-[#195682] font-black text-lg">{{ programData.accreditation }}</span>
              </div>
              <div class="bg-orange-50 p-4 rounded-xl text-center">
                <span class="block text-gray-500 text-xs font-bold uppercase mb-1">Gelar Lulusan</span>
                <span class="block text-[#f9ac42] font-black text-lg">{{ programData.degree }}</span>
              </div>
              <div class="bg-blue-50 p-4 rounded-xl text-center">
                <span class="block text-gray-500 text-xs font-bold uppercase mb-1">Masa Studi</span>
                <span class="block text-[#195682] font-black text-lg">{{ programData.duration }}</span>
              </div>
              <div class="bg-orange-50 p-4 rounded-xl text-center">
                <span class="block text-gray-500 text-xs font-bold uppercase mb-1">Fakultas</span>
                <span class="block text-[#f9ac42] font-black text-lg">{{ programData.faculty }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ============ Visi & Misi ============ -->
      <section v-if="programData.visi" class="mb-10">
        <div class="flex items-center gap-3 mb-6">
          <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#195682] to-[#0b2b42] text-white flex-shrink-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
          </span>
          <h3 class="text-2xl md:text-3xl font-bold text-[#0b2b42]">Visi &amp; Misi</h3>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="bg-white rounded-2xl shadow-md p-8 border-l-4 border-[#f9ac42]">
            <h4 class="text-lg font-bold text-[#195682] mb-4 flex items-center gap-2">
              <span class="text-[#f9ac42]">◆</span> Visi
            </h4>
            <p class="text-gray-600 leading-relaxed">{{ programData.visi }}</p>
          </div>
          <div class="bg-white rounded-2xl shadow-md p-8">
            <h4 class="text-lg font-bold text-[#195682] mb-4 flex items-center gap-2">
              <span class="text-[#f9ac42]">◆</span> Misi
            </h4>
            <ul class="space-y-3">
              <li v-for="(misi, index) in asList(programData.misi)" :key="index" class="flex items-start text-gray-600 leading-relaxed">
                <span class="flex-shrink-0 w-6 h-6 rounded-full bg-[#195682] text-white text-xs font-bold flex items-center justify-center mr-3 mt-0.5">{{ index + 1 }}</span>
                <span>{{ misi }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ============ Keunggulan ============ -->
      <section v-if="programData.keunggulan" class="mb-10">
        <div class="flex items-center gap-3 mb-6">
          <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#f9ac42] to-[#f07f13] text-white flex-shrink-0">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.363 1.118l1.287 3.957c.3.922-.755 1.688-1.539 1.118l-3.366-2.447a1 1 0 00-1.176 0l-3.366 2.447c-.784.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.363-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z"></path></svg>
          </span>
          <h3 class="text-2xl md:text-3xl font-bold text-[#0b2b42]">Keunggulan Program Studi</h3>
        </div>
        <div class="bg-gradient-to-r from-[#195682] to-[#0b2b42] rounded-2xl shadow-lg p-8 md:p-10 text-white">
          <div class="space-y-4">
            <p v-if="typeof programData.keunggulan === 'string'" class="text-blue-100 leading-relaxed text-lg">{{ programData.keunggulan }}</p>
            <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div v-for="(unggulan, index) in programData.keunggulan" :key="index" class="flex items-start bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                <span class="text-[#f9ac42] mr-3 flex-shrink-0 mt-0.5">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.363 1.118l1.287 3.957c.3.922-.755 1.688-1.539 1.118l-3.366-2.447a1 1 0 00-1.176 0l-3.366 2.447c-.784.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.363-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z"></path></svg>
                </span>
                <span class="text-blue-100 leading-relaxed">{{ unggulan }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ============ Main Tabs ============ -->
      <div class="bg-white rounded-2xl shadow-md overflow-hidden mb-10">
        <div class="flex border-b overflow-x-auto hide-scrollbar bg-gray-50">
          <button 
            v-for="tab in ['kompetensi', 'prospek', 'fasilitas']" 
            :key="tab"
            @click="activeTab = tab"
            class="px-8 py-5 text-sm font-bold uppercase whitespace-nowrap transition-colors border-b-4 relative"
            :class="activeTab === tab ? 'text-[#195682] border-[#f9ac42] bg-white' : 'text-gray-500 border-transparent hover:text-gray-800'"
          >
            {{ tab === 'kompetensi' ? 'Kompetensi Kelulusan' : tab === 'prospek' ? 'Prospek Karir' : 'Fasilitas Penunjang' }}
          </button>
        </div>

        <div class="p-8 md:p-10">
          <div v-if="activeTab === 'kompetensi'" class="animate-fade-in-up">
            <h3 class="text-2xl font-bold text-[#0b2b42] mb-4 flex items-center gap-2">
              <span class="w-8 h-8 rounded-lg bg-blue-50 text-[#195682] flex items-center justify-center"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></span>
              Target Kompetensi Lulusan
            </h3>
            <div v-if="programData.competence" class="prose max-w-none text-gray-700 leading-relaxed" v-html="programData.competence.replace(/\n-/g, '<br>-').replace(/\n/g, '<br>')"></div>
            <div v-else class="text-gray-500">Kompetensi akan segera diupdate.</div>
          </div>

          <div v-if="activeTab === 'prospek'" class="animate-fade-in-up">
            <h3 class="text-2xl font-bold text-[#0b2b42] mb-4 flex items-center gap-2">
              <span class="w-8 h-8 rounded-lg bg-orange-50 text-[#f9ac42] flex items-center justify-center"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg></span>
              Peluang Karir
            </h3>
            <div v-if="programData.prospects" class="prose max-w-none text-gray-700 leading-relaxed" v-html="programData.prospects.replace(/\n-/g, '<br>-').replace(/\n/g, '<br>')"></div>
            <div v-else-if="programData.prospekKerja" class="space-y-3">
              <div v-for="(prospek, index) in programData.prospekKerja" :key="index" class="text-gray-700">
                <p class="font-semibold text-[#195682]">{{ prospek }}</p>
              </div>
            </div>
            <div v-else class="text-gray-500">Informasi prospek karir akan segera diupdate.</div>
          </div>

          <div v-if="activeTab === 'fasilitas'" class="animate-fade-in-up">
            <h3 class="text-2xl font-bold text-[#0b2b42] mb-4 flex items-center gap-2">
              <span class="w-8 h-8 rounded-lg bg-blue-50 text-[#195682] flex items-center justify-center"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H9a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2z"></path></svg></span>
              Sarana Akademik
            </h3>
            <div v-if="asList(programData.saranaAkademik).length > 0">
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div v-for="(fasilitas, index) in asList(programData.saranaAkademik)" :key="index" class="bg-blue-50 p-4 rounded-xl flex items-start">
                  <svg class="w-6 h-6 text-[#195682] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H9a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2z"></path></svg>
                  <span class="text-gray-700">{{ fasilitas }}</span>
                </div>
              </div>
            </div>
            <div v-else class="text-gray-500">Informasi sarana akan segera diupdate.</div>
          </div>
        </div>
      </div>

      <!-- ============ Persiapan Kerja ============ -->
      <section class="bg-white rounded-2xl shadow-md p-8 md:p-10 mb-10" v-if="programData.praktikLapangan || asList(programData.jejaringKemitraan).length > 0">
        <div class="flex items-center gap-3 mb-8">
          <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-[#195682] flex-shrink-0"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></span>
          <h3 class="text-2xl md:text-3xl font-bold text-[#0b2b42]">Persiapan Kerja</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-if="programData.praktikLapangan">
            <h4 class="font-bold text-[#195682] text-sm uppercase tracking-wider mb-3">Praktik Lapangan</h4>
            <p class="text-gray-600 leading-relaxed">{{ programData.praktikLapangan }}</p>
          </div>
          <div v-if="asList(programData.jejaringKemitraan).length > 0">
            <h4 class="font-bold text-[#195682] text-sm uppercase tracking-wider mb-3">Jejaring Kemitraan</h4>
            <ul class="space-y-2.5">
              <li v-for="(mitra, index) in asList(programData.jejaringKemitraan)" :key="index" class="flex items-start text-gray-600">
                <svg class="w-5 h-5 text-[#f9ac42] mr-2.5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 16v1a2 2 0 01-2 2h-1"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 10a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                {{ mitra }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ============ Profil Lulusan ============ -->
      <section class="bg-white rounded-2xl shadow-md p-8 md:p-10 mb-10" v-if="programData.profilLulusan">
        <div class="flex items-center gap-3 mb-8">
          <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-50 text-[#f9ac42] flex-shrink-0"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></span>
          <h3 class="text-2xl md:text-3xl font-bold text-[#0b2b42]">Profil Lulusan</h3>
        </div>
        <div class="space-y-4">
          <template v-for="(group, index) in profilGroups(programData.profilLulusan)" :key="index">
            <!-- Paragraf panjang -->
            <p v-if="group.type === 'body'" class="text-gray-600 leading-relaxed">{{ group.text }}</p>
            <!-- Kalimat pengantar -->
            <p v-else-if="group.type === 'lead'" class="font-semibold text-[#0b2b42]">{{ group.text }}</p>
            <!-- Judul bernomor (mis. "1. Perusahaan Jasa Logistik") -->
            <div v-else-if="group.type === 'numbered'" class="flex items-start gap-3">
              <span class="flex items-center justify-center w-7 h-7 rounded-lg bg-[#195682] text-white text-sm font-bold flex-shrink-0 mt-0.5">{{ group.num }}</span>
              <p class="text-gray-700 font-medium pt-1">{{ group.title }}</p>
            </div>
            <!-- Judul profesi/posisi pendek → chip -->
            <div v-else-if="group.type === 'chips'" class="flex flex-wrap gap-2">
              <span v-for="(chip, ci) in group.items" :key="ci" class="inline-flex items-center bg-blue-50 border border-blue-100 text-[#195682] text-sm font-medium px-3.5 py-1.5 rounded-full">{{ chip }}</span>
            </div>
          </template>
        </div>
      </section>

      <!-- ============ Syarat Pendaftaran + CTA ============ -->
      <div class="bg-gradient-to-br from-[#195682] to-[#041c2e] rounded-2xl shadow-xl p-8 md:p-10 text-white mb-10">
        <div class="flex flex-col lg:flex-row items-start lg:items-center gap-8">
          <div class="flex-1">
            <h3 class="text-2xl font-bold mb-6 text-[#f9ac42]">Syarat Pendaftaran</h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <li class="flex items-start">
                <svg class="w-6 h-6 mr-3 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Lulusan SMA/MA/SMK Kesehatan/Sederajat Semua Jurusan*</span>
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 mr-3 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Tinggi Badan min: Laki-laki 155cm, Perempuan 150cm</span>
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 mr-3 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Berbadan Sehat, Tidak Buta Warna Parsial/Total</span>
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 mr-3 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Membawa Fotokopi Ijazah / SKL / Rapor &amp; KTP / KK.</span>
              </li>
            </ul>
          </div>
          <div class="flex-shrink-0 w-full lg:w-72 text-center lg:text-left border-t lg:border-t-0 lg:border-l border-white/20 pt-6 lg:pt-0 lg:pl-8">
            <p class="text-sm text-blue-200 mb-4">*Cek kelengkapan syarat spesifik prodi di panitia PMB.</p>
            <a href="https://pmb.unidsoe.ac.id" target="_blank" class="block w-full text-center bg-[#f9ac42] hover:bg-orange-500 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-orange-500/30">
              Daftar PMB Sekarang
            </a>
          </div>
        </div>
      </div>

      <!-- ============ Karier Alumni ============ -->
      <div class="bg-white rounded-2xl shadow-md p-8 mb-10" v-if="programData.karierAlumni && programData.karierAlumni.length > 0">
        <div class="flex items-center gap-3 mb-6">
          <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#195682] to-[#58d1fd] text-white flex-shrink-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </span>
          <h3 class="text-2xl font-bold text-[#0b2b42]">Karier Alumni Kami</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(alumni, index) in programData.karierAlumni" :key="index" class="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
            <div class="flex items-center mb-2">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#195682] to-[#58d1fd] text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">
                {{ (alumni.name || alumni.position || 'A').charAt(0) }}
              </div>
              <div>
                <h4 class="font-bold text-[#0b2b42] text-sm leading-tight">{{ alumni.name || alumni.position }}</h4>
                <p v-if="alumni.name && alumni.position" class="text-xs text-[#195682] font-semibold">{{ alumni.position }}</p>
              </div>
            </div>
            <p v-if="alumni.place" class="text-sm text-gray-500 flex items-center">
              <svg class="w-4 h-4 mr-1.5 text-[#f9ac42]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H9a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2z"></path></svg>
              {{ alumni.place }}
            </p>
          </div>
        </div>
      </div>

      <!-- ============ FAQ Accordion ============ -->
      <div class="bg-white rounded-2xl shadow-md p-8 md:p-10" v-if="programData.faq && programData.faq.length > 0">
        <div class="flex items-center gap-3 mb-2">
          <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#f9ac42] to-[#f07f13] text-white flex-shrink-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </span>
          <h3 class="text-2xl md:text-3xl font-bold text-[#0b2b42]">Pertanyaan Umum (FAQ)</h3>
        </div>
        <p class="text-gray-500 mb-6 pl-14">Klik pertanyaan untuk melihat jawaban.</p>
        <div class="space-y-3">
          <div 
            v-for="(item, index) in programData.faq" 
            :key="index"
            class="rounded-xl border transition-all overflow-hidden"
            :class="openFaq === index ? 'border-[#f9ac42]/60 bg-orange-50/30 shadow-md' : 'border-gray-100 bg-gray-50/60 hover:border-[#f9ac42]/40'"
          >
            <button 
              @click="toggleFaq(index)"
              class="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
              :aria-expanded="openFaq === index"
            >
              <span class="font-semibold text-[#0b2b42] leading-snug">{{ item.question }}</span>
              <span 
                class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                :class="openFaq === index ? 'bg-[#f9ac42] text-white rotate-45' : 'bg-[#195682] text-white'"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"></path></svg>
              </span>
            </button>
            <div 
              class="grid transition-all duration-300 ease-in-out"
              :class="openFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
            >
              <div class="overflow-hidden">
                <p class="px-5 pb-5 text-gray-600 leading-relaxed">{{ item.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div> <!-- Close container-custom -->

    <div v-else class="container-custom py-32 text-center">
      <h2 class="text-3xl font-bold text-[#0b2b42] mb-4">Data Program Studi Belum Dilengkapi</h2>
      <p class="text-gray-600 mb-8">Maaf, program studi yang Anda tuju belum memiliki data yang dikonfigurasi melalui sistem CMS.</p>
      <router-link to="/program-studi" class="px-6 py-3 bg-[#195682] text-white font-bold rounded-lg hover:bg-[#0b2b42]">Kembali ke Daftar Prodi</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import PageHeader from '../components/PageHeader.vue'

const route = useRoute()
const slug = computed(() => route.params.slug || 'program-studi')

// Load all JSON files dynamically from Vite recursively to support sub-folders
const modules = import.meta.glob('../data/programs/**/*.json', { eager: true, import: 'default' })

const programData = computed(() => {
  const pathEnding = `/${slug.value}.json`
  const foundPath = Object.keys(modules).find(key => key.endsWith(pathEnding))
  return foundPath ? modules[foundPath] : null
})

const activeTab = ref('kompetensi')
const openFaq = ref(null)

// Normalize a value to an array (accepts array or string with newlines)
const asList = (v) => {
  if (Array.isArray(v)) return v
  if (typeof v === 'string' && v.trim()) {
    return v.split(/\n+/).map(s => s.trim()).filter(Boolean)
  }
  return []
}

const isArray = (v) => Array.isArray(v)

// Klasifikasikan tiap baris profilLulusan lalu kelompokkan chip yang berurutan.
// Teks TIDAK diubah sama sekali — hanya menentukan cara tampil per baris.
const profilBlocks = (v) => {
  const lines = Array.isArray(v) ? v : asList(v)
  return lines.filter(l => l && String(l).trim()).map(raw => {
    const line = String(raw).trim()
    const numbered = line.match(/^(\d{1,2})\.\s+(.+)$/)
    if (numbered) return { type: 'numbered', num: numbered[1], title: numbered[2] }
    if (line.length <= 55) return line.endsWith(':') ? { type: 'lead', text: line } : { type: 'chip', text: line }
    return { type: 'body', text: line }
  })
}

const profilGroups = (v) => {
  const groups = []
  for (const b of profilBlocks(v)) {
    const last = groups[groups.length - 1]
    if (b.type === 'chip' && last && last.type === 'chips') last.items.push(b.text)
    else if (b.type === 'chip') groups.push({ type: 'chips', items: [b.text] })
    else groups.push(b)
  }
  return groups
}

const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index
}

// Reset state when changing route
watch(slug, () => {
  activeTab.value = 'kompetensi'
  openFaq.value = null
})
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.animate-fade-in-up {
  animation: fadeInUp 0.4s ease-out forwards;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>