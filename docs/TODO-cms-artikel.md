# TODO: Migrasi CMS Artikel (Semesta → Payload Mandiri)

Acuan: `PRD-cms-artikel.md`. Centang `[x]` setiap item selesai. Penanggung jawab ditulis di tiap fase.

Legenda status: ⬜ belum · 🔄 berjalan · ✅ selesai

---

## Fase 0 — Backup darurat (IT) ✅ selesai 8 Sep 2026

- [x] Export kategori (8) + indeks artikel (3) + detail per artikel via API Semesta (read-only)
- [x] Inventaris host gambar (semua di CDN Semesta) — lihat `inventaris-backup-semesta.md`
- [x] **Download 3 gambar dari CDN Semesta + verifikasi tidak corrupt** ✅ 8 Sep 2026 — tersimpan di `/tmp/semesta-backup/images/` (3 file WebP valid)

## Fase 1 — Fondasi CMS (IT) — estimasi 2–3 hari

- [x] Buat repo baru `nubuntukbangsa/unidsoe-cms` (Private, kosong) — 8 Sep 2026
- [x] Scaffold Payload di repo tersebut (Node 20.9+, Postgres) ✅ 8 Sep 2026 — blank template Payload 3.88.0, dipindah ke `unidsoe_cms/`, DB `unidsoe_cms_tmp` via compose
- [x] Konfigurasi koleksi `Users` (peran admin/editor), `Categories`, `Media`, `Articles` sesuai PRD Bagian 9 ✅ 8 Sep 2026 — tsc bersih, tabel ter-push
- [x] Branding admin: logo UNIDSOE + label Bahasa Indonesia ✅ 8 Sep 2026 — logo panjang/kotak dari web, titleSuffix, favicon, label koleksi ID
- [ ] Storage media ke Cloudflare R2 (bucket + kredensial di env, bukan di kode) — DITUNDA: tetap storage lokal (`/media`, gitignored) sampai keputusan hosting production (Cloudflare vs server kampus)
- [ ] Deploy ke hosting terpilih (menunggu keputusan Bagian 11 PRD) + domain `cms.unidsoe.ac.id` + HTTPS — ⏳ menunggu kampus; dev lokal jalan + webhook CMS siap (`NETLIFY_BUILD_HOOK_URL`)
- [x] Buat akun superadmin + 1 akun editor uji ✅ 8 Sep 2026 (+ peran dosen/kontributor dikonfigurasi)

## Fase 2 — Migrasi data (IT + Humas) — estimasi 1–2 hari

- [x] Import 8 kategori (cocokkan slug) ✅ 8 Sep 2026 — via `scripts/import-semesta.ts`, displayName ikut mapping web
- [x] Import 3 artikel via skrip (pertahankan slug identik) + tautkan cover dari R2 ✅ 8 Sep 2026 — slug identik, cover dari backup lokal (R2 menyusul, sementara storage lokal)
- [ ] Verifikasi 1-per-1 bersama Humas: judul, isi/render, gambar, kategori, tanggal, penulis, SEO
- [ ] Snapshot perbandingan sebelum (Semesta) vs sesudah (Payload) untuk 3 artikel

## Fase 3 — Alihkan website (IT) — estimasi 2–3 hari

- [x] Buat composable `useArticles()` + skrip `prebuild` (tarik Published → `articles.generated.json`, fallback ke JSON ter-commit) ✅ 8 Sep 2026 — prebuild lolos uji CMS-mati (exit 0, pakai JSON terakhir)
- [x] Refactor 5 file: `ArticlesIndex.vue`, `ArticleDetail.vue`, `NewsHighlightSection.vue`, `NewsSection.vue`, `AkademikView.vue` ✅ 8 Sep 2026 — build Netlify-style lolos, 0 referensi Semesta di bundle
- [x] Pertahankan mapping `articleSettings` (batas excerpt, tampil tanggal, displayName kategori) ✅ 8 Sep 2026
- [ ] Pasang webhook Publish → Netlify Build Hook, uji end-to-end (publish → live ≤ 5 menit) — hook CMS sudah dipasang (`NETLIFY_BUILD_HOOK_URL`), tinggal buat URL di dashboard Netlify + isi env
- [x] Hapus: endpoint + API key Semesta di kode, koleksi gateway Tina (`semesta`), `semesta_portal.json`, dummy `articles.js` ✅ 8 Sep 2026 — sumber bersih, gambar home.json dipindah lokal
- [x] Uji semua URL `/artikel/:slug` lama + uji website saat CMS dimatikan (rebuild tetap sukses) ✅ 8 Sep 2026 — 3 slug Semesta resolve, prebuild fallback OK

## Fase 4 — Serah terima & dekomisioning (IT + Pimpinan) — estimasi 1–2 hari

- [ ] Backup otomatis harian (DB + media) + 1x uji restore
- [ ] Runbook: restart, ganti password, tambah user, rollback
- [ ] SOP editor untuk Humas (cara tulis, kategori baku, ukuran cover) + sesi training ±30 menit
- [ ] Serahkan kredensial superadmin ke PIC kampus via jalur aman
- [ ] Koordinasi pencabutan akses/API key Semesta (setelah verifikasi final)
- [ ] Tandai PRD + TODO ini sebagai selesai, arsipkan

## Keputusan yang menunggu pihak kampus

- [ ] Hosting: VPS baru vs server kampus (lihat PRD Bagian 11)
- [ ] PIC pemilik akun superadmin + daftar editor Humas
- [ ] Kebijakan retensi backup (usulan: 14 hari)
