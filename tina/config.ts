import React from "react";
import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io in production
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  
  media: {
    tina: {
      mediaRoot: "assets/uploads",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      // -----------------------------------------------
      // SEMESTA AI GATEWAY
      // -----------------------------------------------
      {
        name: "semesta",
        label: "🚀 Semesta AI Gateway",
        path: "src/data",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "semesta",
        },
        fields: [
          {
            type: "string",
            name: "semestaUrl",
            label: "URL Semesta AI",
            required: true,
          },
          {
            type: "string",
            name: "gatewayButton",
            label: "Akses Semesta AI",
            ui: {
              component: (props: any) => {
                const url = props.tinaForm?.values?.semestaUrl || "https://platform-semesta.sclstudio.id/auth/login";
                return React.createElement(
                  "div",
                  { style: { padding: "16px", background: "#f8fafc", borderRadius: "12px", border: "1px solid #e2e8f0", marginTop: "12px", textAlign: "center" } },
                  React.createElement(
                    "p",
                    { style: { fontSize: "13px", color: "#64748b", marginBottom: "12px", lineHeight: "1.5" } },
                    "Semesta AI adalah platform pengeditan konten bertenaga AI untuk mengoptimalkan tulisan Anda secara cerdas. Klik tombol di bawah ini untuk membuka platform Semesta AI di tab baru."
                  ),
                  React.createElement(
                    "a",
                    {
                      href: url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "12px 24px",
                        background: "linear-gradient(135deg, #195682 0%, #0b2b42 100%)",
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "14px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        boxShadow: "0 4px 6px -1px rgba(25, 86, 130, 0.2)",
                        transition: "all 0.2s"
                      }
                    },
                    "🚀 Buka Semesta AI Sekarang"
                  )
                );
              }
            }
          }
        ]
      },
      // -----------------------------------------------
      // HOMEPAGE SETTINGS
      // -----------------------------------------------
      {
        name: "home",
        label: "Halaman Utama (Home)",
        path: "src/data",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "home",
        },
        fields: [
          {
            type: "object",
            name: "slides",
            label: "Slide Hero Carousel",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.tag ? `${item.tag}: ${item.headline?.replace(/<[^>]*>/g, '') || ''}` : "Slide Baru",
              }),
            },
            fields: [
              {
                type: "string",
                name: "tag",
                label: "Label Tag (Kecil di Atas)",
                required: true,
              },
              {
                type: "string",
                name: "tagBgColor",
                label: "Warna Background Tag",
                options: [
                  { label: "Kuning (Default)", value: "#f9ac42" },
                  { label: "Merah (Prestasi)", value: "#c01c0c" },
                  { label: "Biru Kampus", value: "#195682" },
                  { label: "Gelap", value: "#0b2b42" }
                ],
              },
              {
                type: "string",
                name: "headline",
                label: "Headline Utama (Bisa HTML <br/>)",
                required: true,
              },
              {
                type: "string",
                name: "subheadline",
                label: "Sub-headline (Deskripsi)",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "image",
                name: "image",
                label: "Gambar Background",
              },
              {
                type: "string",
                name: "buttonText",
                label: "Teks Tombol CTA",
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Link Tombol",
              },
              {
                type: "boolean",
                name: "isExternal",
                label: "Link Eksternal? (Buka di Tab Baru)",
              }
            ],
          },
        ],
      },

      // -----------------------------------------------
      // PROFIL UNIVERSITAS
      // -----------------------------------------------
      {
        name: "profil",
        label: "Profil Kampus",
        path: "src/data",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "profil",
        },
        fields: [
          {
            type: "string",
            name: "sejarah",
            label: "Sejarah Panjang Kampus",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "visi",
            label: "Visi Institusi",
          },
          {
            type: "string",
            name: "misi",
            label: "Misi Institusi",
            list: true,
          },
          {
            type: "string",
            name: "namaKetua",
            label: "Nama Ketua STIKES",
          },
          {
            type: "string",
            name: "sambutan",
            label: "Sambutan Ketua",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "fotoKetua",
            label: "Foto Ketua",
          },
        ],
      },
      
      // -----------------------------------------------
      // IDENTITAS KAMPUS
      // -----------------------------------------------
      {
        name: "identitas",
        label: "Identitas Kampus (Logo, Mars & Video)",
        path: "src/data",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "identitas",
        },
        fields: [
          {
            type: "string",
            name: "logoTitle",
            label: "Judul Bagian Logo",
          },
          {
            type: "string",
            name: "logoDescription",
            label: "Deskripsi/Filosofi Logo",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "logoImage",
            label: "Gambar Logo Resmi",
          },
          {
            type: "string",
            name: "videoTitle",
            label: "Judul Bagian Video",
          },
          {
            type: "string",
            name: "videoUrl",
            label: "URL Embed Video Profil (YouTube Embed URL)",
          },
          {
            type: "string",
            name: "hymneTitle",
            label: "Judul Lagu Hymne",
          },
          {
            type: "string",
            name: "hymneLyrics",
            label: "Lirik Lagu Hymne",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "marsTitle",
            label: "Judul Lagu Mars",
          },
          {
            type: "string",
            name: "marsLyrics",
            label: "Lirik Lagu Mars",
            ui: {
              component: "textarea",
            },
          },
        ],
      },

      // -----------------------------------------------
      // PENGATURAN GLOBAL & KONTAK
      // -----------------------------------------------
      {
        name: "settings",
        label: "Pengaturan Global",
        path: "src/data",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "settings",
        },
        fields: [
          {
            type: "object",
            name: "articleSettings",
            label: "⚙️ Pengaturan Portal Artikel & Berita",
            fields: [
              {
                type: "string",
                name: "sectionTitle",
                label: "Judul Section Artikel di Homepage",
                required: true,
              },
              {
                type: "number",
                name: "excerptWordLimit",
                label: "Batas Jumlah Kata Deskripsi Artikel (Excerpt)",
                required: true,
              },
              {
                type: "boolean",
                name: "showPublishDate",
                label: "Tampilkan Tanggal Rilis Artikel?",
              },
              {
                type: "object",
                name: "categories",
                label: "Daftar Pemetaan Kategori dari CMS Semesta",
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item?.slug ? `${item.slug.toUpperCase()} ➔ ${item.displayName || item.slug}` : "Kategori Baru",
                  }),
                },
                fields: [
                  {
                    type: "string",
                    name: "slug",
                    label: "Slug Kategori di Semesta (Contoh: blog, opini, agenda)",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "displayName",
                    label: "Nama Tampilan Kategori di Website (Contoh: Edukasi)",
                    required: true,
                  },
                  {
                    type: "boolean",
                    name: "show",
                    label: "Tampilkan Kategori Ini di Website?",
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "achievementsSettings",
            label: "🏆 Pengaturan Sertifikasi & Prestasi Unggul",
            fields: [
              {
                type: "string",
                name: "sectionTitle",
                label: "Judul Section Prestasi",
                required: true,
              },
              {
                type: "object",
                name: "items",
                label: "Daftar Prestasi (Max 3)",
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item?.category ? `${item.category} - ${item.title}` : "Prestasi Baru",
                  }),
                },
                fields: [
                  {
                    type: "string",
                    name: "category",
                    label: "Kategori (Contoh: Regional, Nasional, Internasional)",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Judul Prestasi",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "icon",
                    label: "Ikon FontAwesome (Contoh: fas fa-trophy)",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Deskripsi Singkat",
                    required: true,
                    ui: {
                      component: "textarea",
                    }
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "associationsSettings",
            label: "🤝 Pengaturan Asosiasi & Mitra (Assurance of Practice)",
            fields: [
              {
                type: "string",
                name: "sectionTitle",
                label: "Judul Section Asosiasi",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Deskripsi Jaminan Praktik",
                required: true,
                ui: {
                  component: "textarea",
                }
              },
              {
                type: "object",
                name: "items",
                label: "Daftar Asosiasi/Mitra",
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item?.name ? item.name : "Asosiasi Baru",
                  }),
                },
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Nama Asosiasi",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "url",
                    label: "Link Website Resmi Asosiasi",
                    required: true,
                  },
                  {
                    type: "image",
                    name: "logo",
                    label: "Logo Asosiasi Kustom (Opsional)",
                  },
                  {
                    type: "string",
                    name: "iconType",
                    label: "Tipe Ikon/Logo Bawaan (Hanya jika tidak ada Logo Kustom)",
                    options: [
                      { value: "pemkab", label: "Pemerintah Kabupaten" },
                      { value: "ppni", label: "PPNI (Persatuan Perawat)" },
                      { value: "ibi", label: "IBI (Ikatan Bidan)" },
                      { value: "pafi", label: "PAFI (Ahli Farmasi)" },
                      { value: "idi", label: "IDI (Ikatan Dokter)" },
                      { value: "kemenkes", label: "Kemenkes RI" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "contact",
            label: "Kontak & Informasi Utama",
            fields: [
              { type: "string", name: "phone", label: "Nomor Telepon" },
              { type: "string", name: "email", label: "Email Utama" },
              { type: "string", name: "address", label: "Alamat Lengkap", ui: { component: "textarea" } },
              { type: "string", name: "pmbLink", label: "Link Pendaftaran (PMB)" },
            ],
          },
          {
            type: "object",
            name: "facilities",
            label: "Galeri Fasilitas Kampus",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.name || "Fasilitas Baru",
              }),
            },
            fields: [
              { type: "string", name: "name", label: "Nama Fasilitas" },
              { type: "string", name: "description", label: "Deskripsi", ui: { component: "textarea" } },
              { type: "string", name: "category", label: "Kategori" },
              { type: "image", name: "image", label: "Foto Fasilitas" },
            ],
          },
          {
            type: "object",
            name: "partners",
            label: "Mitra & Kerja Sama",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.name || "Mitra Baru",
              }),
            },
            fields: [
              { type: "string", name: "name", label: "Nama Institusi" },
              {
                type: "string",
                name: "category",
                label: "Kategori Kerja Sama",
                options: ["Nasional", "Internasional"],
              },
              { type: "image", name: "logo", label: "Logo Mitra" },
            ],
          },
          {
            type: "object",
            name: "testimonials",
            label: "Testimoni Alumni",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.name || "Testimoni Baru",
              }),
            },
            fields: [
              { type: "string", name: "name", label: "Nama Alumni" },
              { type: "string", name: "job", label: "Pekerjaan / Tempat Kerja" },
              { type: "string", name: "quote", label: "Pesan / Kutipan", ui: { component: "textarea" } },
              { type: "image", name: "avatar", label: "Foto Profil" },
            ],
          },
        ],
      },

      // -----------------------------------------------
      // DOKUMEN & FORMULIR (Dynamic JSON Files)
      // -----------------------------------------------
      {
        name: "documents",
        label: "📄 Berkas & Dokumen",
        path: "src/data/documents",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Judul Berkas",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Kategori Dokumen",
            options: ["Akademik", "Kemahasiswaan", "Umum", "SDM"],
            required: true,
          },
          {
            type: "image",
            name: "file",
            label: "Upload File (PDF / Doc)",
          },
          {
            type: "datetime",
            name: "date",
            label: "Tanggal Berkas",
          },
        ],
      },

      // -----------------------------------------------
      // PROGRAM STUDI (Dynamic JSON Files)
      // -----------------------------------------------
      {
        name: "programs",
        label: "🎓 Program Studi",
        path: "src/data/programs",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Nama Program Studi",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "faculty",
            label: "Fakultas",
            options: [
              { label: "Fakultas Ilmu Sosial dan Teknologi (FISTEK)", value: "FISTEK" },
              { label: "Fakultas Kesehatan (FKES)", value: "FKES" }
            ],
            required: true,
          },
          {
            type: "string",
            name: "level",
            label: "Jenjang",
            options: ["S1", "D4", "D3", "Profesi"],
            required: true,
          },
          {
            type: "string",
            name: "degree",
            label: "Gelar Lulusan",
          },
          {
            type: "string",
            name: "accreditation",
            label: "Akreditasi",
          },
          {
            type: "string",
            name: "duration",
            label: "Masa Studi",
          },
          {
            type: "image",
            name: "image",
            label: "Banner Gambar Prodi",
          },
          {
            type: "string",
            name: "shortDescription",
            label: "Deskripsi Singkat",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "competence",
            label: "Kompetensi Lulusan",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "prospects",
            label: "Prospek Karir",
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        name: "beasiswa",
        label: "🪙 Halaman Beasiswa",
        path: "src/data",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "beasiswa",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Judul Utama Halaman",
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Sub-judul",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "heroImage",
            label: "Gambar Hero/Intro",
          },
          {
            type: "string",
            name: "introTitle",
            label: "Judul Pengantar Komitmen",
          },
          {
            type: "string",
            name: "introText",
            label: "Isi Paragraf Pengantar",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "scholarships",
            label: "Daftar Program Beasiswa",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.name ? `${item.icon || '🎓'} ${item.name}` : "Program Beasiswa Baru",
              }),
            },
            fields: [
              {
                type: "string",
                name: "name",
                label: "Nama Beasiswa",
                required: true,
              },
              {
                type: "string",
                name: "icon",
                label: "Emoji / Ikon",
              },
              {
                type: "string",
                name: "description",
                label: "Deskripsi Singkat",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "benefits",
                label: "Cakupan Beasiswa (List)",
                list: true,
              },
              {
                type: "string",
                name: "link",
                label: "Link Pendaftaran / Info Detail",
              }
            ]
          }
        ]
      },
      {
        name: "infopmb",
        label: "📝 Halaman Info PMB",
        path: "src/data",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "infopmb",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Judul Utama Halaman",
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Sub-judul / Deskripsi",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "heroImage",
            label: "Gambar Hero",
          },
          {
            type: "string",
            name: "openDate",
            label: "Periode Pendaftaran",
          },
          {
            type: "string",
            name: "contactPhone",
            label: "No Telepon Kontak",
          },
          {
            type: "string",
            name: "contactWhatsapp",
            label: "No WhatsApp Hotline",
          },
          {
            type: "string",
            name: "requirements",
            label: "Persyaratan Pendaftaran",
            list: true,
          },
          {
            type: "object",
            name: "steps",
            label: "Langkah / Alur Pendaftaran",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.title ? `${item.stepNumber || '•'} ${item.title}` : "Langkah Baru",
              }),
            },
            fields: [
              { type: "string", name: "stepNumber", label: "Nomor Langkah (Contoh: 01)" },
              { type: "string", name: "title", label: "Judul Langkah" },
              { type: "string", name: "description", label: "Keterangan", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "registrationPaths",
            label: "Pilihan Jalur Pendaftaran",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.name ? `[${item.badge || 'Jalur'}] ${item.name}` : "Jalur Baru",
              }),
            },
            fields: [
              { type: "string", name: "name", label: "Nama Jalur" },
              { type: "string", name: "badge", label: "Label Singkat (Badge)" },
              { type: "string", name: "description", label: "Deskripsi", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      {
        name: "magazines",
        label: "📚 Majalah & Tabloid Kampus",
        path: "src/data",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "magazines",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Judul Halaman Majalah",
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Sub-judul / Deskripsi Pendek",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "magazines",
            label: "Daftar Edisi Majalah & Tabloid",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.title ? `${item.title} (${item.edition || ''})` : "Majalah Baru",
              }),
            },
            fields: [
              {
                type: "string",
                name: "id",
                label: "ID Majalah (Unik)",
                required: true,
              },
              {
                type: "string",
                name: "title",
                label: "Judul Majalah (e.g. SMART Magazine 27)",
                required: true,
              },
              {
                type: "string",
                name: "edition",
                label: "Edisi (e.g. Edisi Ke-27)",
                required: true,
              },
              {
                type: "string",
                name: "date",
                label: "Bulan & Tahun Rilis (e.g. April 2025)",
                required: true,
              },
              {
                type: "image",
                name: "cover",
                label: "File Gambar Cover Majalah",
              },
              {
                type: "image",
                name: "pdfUrl",
                label: "File Dokumen PDF Majalah",
              }
            ]
          }
        ]
      }
    ],
  },
});
