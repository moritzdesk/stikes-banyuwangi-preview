# PRD: CMS Artikel Mandiri UNIDSOE (Pengganti Semesta Platform)

- **Status:** Implementasi lokal selesai (Fase 0–3) — menunggu verifikasi Humas + keputusan hosting (Bagian 11)
- **Versi:** 1.1 — 8 September 2026 (sore)
- **Pemilik:** Tim IT UNIDSOE (moritzdesk)
- **Repo website:** `moritzdesk/stikes-banyuwangi-preview` (branch `main`, deploy Netlify)
- **Repo CMS:** `git@github.com:nubuntukbangsa/unidsoe-cms.git` (terpisah dari repo website)

---

## 1. Ringkasan eksekutif

Konten artikel/berita website UNIDSOE saat ini 100% bergantung pada Semesta Platform milik pihak ketiga (API runtime + CDN gambar + dashboard editorial). Permintaan pimpinan: bangun **CMS konten milik sendiri** untuk artikel, supaya data, gambar, dan proses editorial sepenuhnya dikuasai kampus.

Solusi yang disepakati: **Payload CMS (lisensi MIT, gratis, self-hosted)** sebagai headless CMS khusus artikel, terintegrasi ke website statis yang sudah ada melalui sinkronisasi saat build + webhook rebuild otomatis.

## 2. Latar belakang & masalah

Hasil audit teknis (September 2026):

1. **5 titik kode fetch runtime ke API Semesta** — `ArticlesIndex.vue`, `ArticleDetail.vue`, `NewsHighlightSection.vue`, `NewsSection.vue`, `AkademikView.vue`. Kalau API Semesta mati/diubah, halaman berita ikut mati.
2. **API key Semesta tertulis langsung (hardcode) di 5 file tersebut** — berisiko bocor dan sulit dirotasi.
3. **Seluruh gambar artikel numpang di CDN Semesta** (`static-assets-semesta-akamaized.sclstudio.id`). Kalau akses diputus, gambar hilang permanen.
4. **Konten hanya bisa dikelola lewat dashboard pihak ketiga** — kampus tidak memegang database artikelnya sendiri.
5. TinaCMS yang ada dinilai terlalu sederhana untuk kebutuhan editorial dan tidak terlihat profesional.

## 3. Tujuan

1. Seluruh artikel, kategori, dan gambar **disimpan di infrastruktur milik kampus**.
2. Editor (Humas) punya **dashboard admin profesional berbahasa Indonesia** dengan peran (admin/editor), draft, dan riwayat versi.
3. Alur publish tetap mudah: **tulis → Publish → otomatis live** (±2 menit), tanpa perlu tahu Git/Netlify.
4. Website tetap **cepat dan tidak bergantung pada server CMS saat diakses pengunjung** (tetap statis).
5. Nol ketergantungan pada Semesta setelah migrasi selesai (kode, gambar, dan akun dibersihkan).

## 4. Ruang lingkup

### Masuk scope (Fase 1)

- Setup Payload CMS self-hosted: koleksi `Articles`, `Categories`, `Media`, `Users` + peran admin/editor.
- Migrasi data: 8 kategori + 3 artikel + seluruh gambar dari Semesta.
- Refactor 5 file website dari fetch-runtime-Semesta menjadi data layer lokal (hasil sinkronisasi saat build).
- Webhook: Publish di CMS otomatis memicu rebuild Netlify.
- Pembersihan: hapus referensi Semesta (endpoint, API key, koleksi gateway Tina, data dummy `articles.js`).
- Dokumentasi + SOP editor + serah terima.

### Di luar scope (tidak dikerjakan sekarang)

- Migrasi konten TinaCMS lain (profil, prodi, beasiswa, dsb.) ke Payload — tetap jalan seperti sekarang, opsional Fase 2.
- Aplikasi mobile, newsletter, dan integrasi sistem akademik.
- SSO kampus (bisa ditambah nanti via lisensi Enterprise atau plugin).

## 5. Pengguna & peran

| Peran | Siapa | Hak akses |
|---|---|---|
| Superadmin | Tim IT | Semua: kelola user, koleksi, media, pengaturan, webhook |
| Editor | Humas / kontributor | Buat–edit–publish semua artikel & media, kelola kategori (tanpa hapus) |
| Dosen | Dosen internal | Tulis–edit–publish artikelnya sendiri (tercatat otomatis di `createdBy`); tanpa kelola kategori/user |
| Kontributor | Penulis eksternal | Tulis–edit draft artikelnya sendiri; publish oleh editor (ditolak sistem bila publish sendiri) |
| Pengunjung | Publik | Baca artikel di website (tidak punya akun CMS) |

## 6. Kebutuhan fungsional

| ID | Kebutuhan | Prioritas |
|---|---|---|
| FR-01 | Login admin dengan email + password, sesi aman, reset password | P0 |
| FR-02 | Peran admin vs editor sesuai Bagian 5 | P0 |
| FR-03 | CRUD artikel: judul, slug otomatis & unik, kategori (relasi), excerpt, isi rich-text (teks, heading, gambar, link, embed video), penulis, tanggal publish, tags | P0 |
| FR-04 | Status Draft / Published (+ terjadwal bila mudah) — hanya Published yang tampil di website | P0 |
| FR-05 | CRUD kategori dengan `slug` teknis + `displayName` tampilan (kompatibel dengan mapping `articleSettings` yang sudah ada) | P0 |
| FR-06 | Media library: upload gambar (validasi tipe/ukuran), kompresi otomatis, simpan ke object storage, URL stabil | P0 |
| FR-07 | Field SEO per artikel: meta title + meta description (data ini sudah ada di Semesta dan wajib ikut migrasi) | P0 |
| FR-08 | Riwayat versi tiap artikel (kembalikan ke versi lama) | P0 |
| FR-09 | Webhook otomatis ke Netlify setiap ada Publish/Update/Hapus → rebuild → live | P0 |
| FR-10 | Label admin Bahasa Indonesia + logo UNIDSOE | P1 |
| FR-11 | Pratinjau (preview) draf artikel sebelum publish | P1 |
| FR-12 | Pencarian & filter di daftar artikel admin | P1 |
| FR-13 | Slug lama Semesta tetap hidup (tidak ada link rusak setelah migrasi) | P0 |

## 7. Kebutuhan non-fungsional

| ID | Kebutuhan | Target |
|---|---|---|
| NFR-01 | Website tetap bisa diakses penuh walau server CMS down (data artikel ikut di-build) | 100% decoupled saat runtime |
| NFR-02 | Waktu publish → live | ≤ 5 menit (target ±2 menit) |
| NFR-03 | Backup otomatis database + file media | Harian, retensi 14 hari, uji restore 1x |
| NFR-04 | Keamanan | HTTPS wajib, secret di environment variable (tidak di kode), tidak ada API key di repo website |
| NFR-05 | Performa build website | Total build Netlify ≤ 5 menit |
| NFR-06 | Uptime CMS | Best-effort ≥ 99% (jam kerja editorial tidak terganggu) |

## 8. Arsitektur

```
 [Payload CMS]  repo: unidsoe-cms (terpisah)
   cms.unidsoe.ac.id
   VPS/server + Postgres + R2 (gambar)
        │ publish / update / hapus
        ▼  webhook (afterChange hook → POST)
 [Netlify Build Hook]
        │  npm run prebuild → tarik artikel Published → articles.generated.json
        ▼  vite build → dist → live
 [Website statis]  repo: stikes-banyuwangi-preview
   5 halaman/komponen baca dari data layer lokal (composable useArticles)
   + fallback ke JSON terakhir yang ter-commit bila CMS tidak terjangkau saat build
```

Keputusan desain inti:

1. **Repo terpisah** — siklus rilis CMS dan website berbeda.
2. **Sinkronisasi saat build, bukan fetch runtime** — website tetap statis/cepat dan kebal terhadap CMS down. Ini sekaligus memperbaiki kerapuhan pola Semesta sekarang.
3. **Gambar di storage lokal CMS (`/media`, gitignored) untuk tahap dev.** Opsi awal R2 (Cloudflare, gratis 10 GB) DITUNDA sampai keputusan hosting (VPS vs server kampus) — storage Payload berbasis *adapter* (env-driven), sehingga nantinya bisa dipindah ke R2 / disk server / MinIO / S3 hanya dengan ganti konfigurasi + sinkronisasi file, tanpa mengubah kode koleksi maupun API.
4. **Fallback berlapis** — hasil sinkronisasi di-commit sebagai JSON; kalau CMS tidak terjangkau saat build, website tetap ter-build dengan data terakhir.

## 9. Model data

### 9.1 Koleksi `Articles`

| Field | Tipe | Wajib | Keterangan |
|---|---|---|---|
| title | text | Ya | Judul artikel |
| slug | text (unik, auto) | Ya | Dipertahankan dari Semesta (lihat FR-13) |
| category | relasi → Categories | Ya | Satu artikel satu kategori |
| excerpt | textarea | Ya | Ringkasan kartu + `getTruncatedExcerpt` |
| content | richText (Lexical) | Ya | Isi penuh; migrasi dari HTML Semesta |
| cover | relasi → Media | Ya | Pengganti `image_path`/`large_image_path` |
| author | text | Tidak | Default "Humas UNIDSOE" |
| publishedDate | date | Ya | Pengganti `publish_date` |
| tags | text (list) | Tidak | |
| seoTitle | text | Tidak | Dari `seo_meta_title` — disimpan di `meta.title` (SEO plugin) |
| seoDescription | textarea | Tidak | Dari `seo_meta_description` — disimpan di `meta.description` (SEO plugin) |
| status | draft / published | Ya | Default draft; plus terjadwal via `schedulePublish` |

### 9.2 Koleksi `Categories` — `name`, `slug` (unik), `description`
### 9.3 Koleksi `Media` — file gambar + alt text + ukuran turunan otomatis
### 9.4 Koleksi `Users` — nama, email, password (hash), peran (admin/editor)

### 9.5 Pemetaan field Semesta → Payload

| Semesta | Payload | Catatan |
|---|---|---|
| title | title | Langsung |
| slug | slug | Wajib dipertahankan identik |
| description | excerpt | Dipangkas sesuai batas kata `articleSettings.excerptWordLimit` |
| content/body (HTML) | content (Lexical) | Konversi HTML → Lexical, verifikasi manual per artikel |
| category.slug/name | category (relasi) | Cocokkan via slug |
| image_path/large_image_path | cover (Media) | Download dari CDN → upload ke R2 |
| author / created_by.name | author | Default "Humas UNIDSOE" bila kosong |
| publish_date | publishedDate | Konversi ke ISO date |
| tags | tags | Langsung |
| seo_meta_title/description | meta.title/meta.description (SEO plugin) | Via skrip `migrate-seo.ts`; field manual dihapus agar tidak dobel |

## 10. Migrasi

**Inventaris hasil backup 8 September 2026** (detail: `inventaris-backup-semesta.md`): 8 kategori (`blog, kegiatan, pengumuman, highlight, prestasi, berita, opini, edukasi`), 3 artikel + detail penuh, 3 gambar di CDN Semesta. Script backup: read-only, sudah sukses 100%.

Langkah migrasi:

1. Download & verifikasi 3 gambar dari CDN Semesta (pending — segera).
2. Scaffold Payload + koleksi sesuai Bagian 9 (pending).
3. Import kategori (8) → import artikel (3) via skrip (Payload Local API), pertahankan slug (pending).
4. Upload gambar ke R2 + tautkan sebagai cover (pending).
5. Verifikasi 1-per-1: judul, isi/render, gambar, kategori, tanggal, SEO, slug (pending).
6. Refactor website + alihkan ke data baru, lalu hapus semua jejak Semesta (pending).
7. Rotasi/bersihkan API key Semesta dari riwayat kerja (koordinasi — key pernah tertulis di kode).

## 11. Keputusan hosting — PENDING

| Aspek | VPS baru | Server kampus |
|---|---|---|
| Biaya | ±$6–12/bulan (2 vCPU/4 GB) | Gratis (aset ada) |
| Kontrol | Penuh (root, Docker, backup) | Berbagi — perlu koordinasi akses & port |
| Isolasi | CMS terpisah dari sistem lain | Satu mesin dengan layanan lain (risiko rebutan resource) |
| Operasional | Tim IT pegang penuh | Bergantung admin server kampus untuk akses infra |
| Kebutuhan dua-duanya | Docker, Postgres, reverse proxy + SSL (Caddy/Nginx), backup harian, domain `cms.unidsoe.ac.id` | Sama |

Rekomendasi teknis: VPS baru untuk isolasi dan kecepatan eksekusi, kecuali server kampus sudah punya Docker + alokasi resource jelas + PIC backup. **Keputusan: menunggu pihak kampus.**

## 12. Tahapan & estimasi

| Fase | Isi | Estimasi | Status |
|---|---|---|---|
| 0 | Backup metadata + download gambar Semesta | 0,5 hari | ✅ Selesai (8 Sep 2026) |
| 1 | Download & amankan gambar + scaffold Payload + koleksi + branding + peran + plugin | 2–3 hari | ✅ Selesai lokal (8 Sep 2026, sore) — sisa deploy production |
| 2 | Import data + verifikasi isi | 1–2 hari | 🔄 Import selesai, verifikasi Humas pending |
| 3 | Refactor website + webhook build + hapus Semesta | 2–3 hari | ✅ Selesai lokal (8 Sep 2026, sore) — uji webhook e2e pending URL hook |
| 4 | Hardening, backup, SOP, serah terima, dekomisioning | 1–2 hari | ⬜ Belum |

Total estimasi: **±1,5–2 minggu** (di luar waktu tunggu keputusan hosting).

## 13. Risiko & mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Akses Semesta diputus sebelum migrasi selesai | Konten & gambar hilang permanen | Backup metadata sudah selesai; download gambar segera (prioritas tertinggi) |
| API key Semesta bocor (pernah di kode) | Penyalahgunaan kuota/akses | Setelah migrasi: cabut key di sisi Semesta; jangan tampilkan key di dokumen/chat |
| Downtime VPS/server CMS | Editor tidak bisa publish sementara | Website tetap live (data ikut di-build); backup harian + runbook restart |
| Perbedaan render HTML Semesta vs Lexical | Tampilan isi artikel berubah | Verifikasi manual 3 artikel + snapshot sebelum/sesudah |
| Slug berubah | Link lama rusak, SEO turun | FR-13: slug dipertahankan identik + uji semua URL lama |

## 14. Kriteria penerimaan

- [ ] 8 kategori + 3 artikel tampil di website dari CMS baru, isi/gambar/tanggal/SEO identik dengan versi Semesta.
- [ ] Seluruh URL `/artikel/:slug` lama tetap hidup tanpa redirect rusak.
- [ ] Editor Humas bisa tulis → publish → live ≤ 5 menit tanpa bantuan IT.
- [ ] Tidak ada lagi string `semesta`/`sclstudio` + API key di kode website.
- [ ] Website tetap tampil normal saat server CMS dimatikan (uji: stop CMS, rebuild, cek halaman berita).
- [ ] Backup harian CMS berjalan + 1x uji restore berhasil.
- [ ] SOP editor + akses admin diserahterimakan.

## 15. Lampiran

- Endpoint Semesta yang dipakai sekarang (catatan: API key disensor, lihat kode hanya bila perlu):
  - `GET /api/<key>/categories` ; `GET /api/<key>/categories/all/articles` ; `GET /api/<key>/articles/:slug`
- File website yang memanggil Semesta (5): `src/views/ArticlesIndex.vue`, `src/views/ArticleDetail.vue`, `src/components/NewsHighlightSection.vue`, `src/components/NewsSection.vue`, `src/views/AkademikView.vue`
- Mapping kategori: `src/data/settings.json` → `articleSettings.categories`
- Referensi: Payload CMS docs (payloadcms.com/docs) — lisensi MIT, Node.js 20.9+, database Postgres/MongoDB/SQLite, REST + GraphQL otomatis.
