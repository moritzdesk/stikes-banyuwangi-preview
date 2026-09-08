# Inventaris Backup Semesta

- **Tanggal backup:** 8 September 2026
- **Metode:** skrip read-only (hanya GET, tidak mengubah apa pun di Semesta)
- **Lokasi file:** `/tmp/semesta-backup/` (di luar repo — `categories.json`, `articles-index.json`, `articles/<slug>.json`)
- **Hasil:** sukses 100%, 0 gagal

## Kategori (8)

`blog, kegiatan, pengumuman, highlight, prestasi, berita, opini, edukasi`

## Artikel (3)

| Slug | Judul | Kategori | Tanggal | Penulis |
|---|---|---|---|---|
| `mitos-atau-fakta-ai-akan-menggantikan-pekerjaan-manusia` | Mitos atau Fakta? AI akan Menggantikan Pekerjaan Manusia | edukasi | 21 Mei 2026 | Wahyu Santoso Hidayat, S.Kep., Ns., M.Biomed |
| `raih-kelulusan-gemilang-ukom-nasional-2026-profesi-bidan-tembus-100-persen` | Raih Kelulusan Gemilang UKOM Nasional 2026, Profesi Bidan Tembus 100 Persen | berita | 21 Mei 2026 | Humas Kampus |
| `rektor-unidsoe-raih-top-creativity-choice-award-2026` | Rektor UNIDSOE Raih TOP Creativity Choice Award 2026 | berita | 21 Mei 2026 | Humas Kampus |

Setiap artikel punya: deskripsi, konten HTML utuh, penulis, tanggal publish, tags, dan SEO meta title + description — semuanya wajib ikut migrasi (lihat PRD Bagian 9.5).

## Gambar (3 — PENDING download)

Seluruh gambar artikel masih di CDN Semesta (`static-assets-semesta-akamaized.sclstudio.id`). Ini item paling mendesak di TODO Fase 0: download + verifikasi sebelum akses Semesta diputus.

## Catatan keamanan

API key Semesta pernah tertulis langsung di kode website (5 file, lihat PRD Bagian 15). Setelah migrasi selesai, akses/key tersebut harus dicabut di sisi Semesta. Jangan menempel key di dokumen atau chat.
