# Dokumen CMS Artikel Mandiri UNIDSOE

Kumpulan dokumen perencanaan penggantian Semesta Platform dengan CMS milik sendiri (Payload CMS, self-hosted).

| Dokumen | Isi |
|---|---|
| [PRD-cms-artikel.md](./PRD-cms-artikel.md) | Product Requirements Document: latar belakang, tujuan, kebutuhan fungsional & non-fungsional, arsitektur, model data, migrasi, risiko, kriteria penerimaan |
| [TODO-cms-artikel.md](./TODO-cms-artikel.md) | Daftar kerja per fase dengan checkbox, estimasi, dan penanggung jawab |
| [inventaris-backup-semesta.md](./inventaris-backup-semesta.md) | Hasil backup/export konten Semesta (8 September 2026): 8 kategori, 3 artikel |

Status ringkas (8 Sep 2026, sore): **Fase 0–3 selesai di lokal.** CMS Payload hidup (koleksi Users/Categories/Articles/Media + search/redirects/SEO/form/import-export, peran admin–editor–dosen–kontributor, i18n ID, scheduled publish, trash), 8 kategori + 3 artikel termigrasi (slug identik), website sudah narik dari Payload via prebuild (0 jejak Semesta di kode). Sisa: verifikasi Humas, webhook Netlify end-to-end (tunggu URL hook + hosting production), Fase 4.

## Struktur workspace lokal

```
~/Development/unidsoe/
├── unidsoe_web/   → repo moritzdesk/stikes-banyuwangi-preview (website, deploy Netlify)
└── unidsoe_cms/   → repo nubuntukbangsa/unidsoe-cms (Payload CMS, deploy VPS/server)
```

Masing-masing folder adalah git repo mandiri dengan remote GitHub sendiri-sendiri. Buka folder `unidsoe/` di editor untuk melihat keduanya sekaligus.
