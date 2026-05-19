# 🚀 Panduan Deployment & Alur Pengelolaan Konten (CMS)
## Universitas Dirgantara Sukarno-Oesman (UNIDSOE)

Dokumen ini berisi panduan lengkap untuk melakukan deployment website UNIDSOE (Vue 3 + Vite + TinaCMS) ke server produksi (**Shared Hosting** atau **VPS**) serta alur pengelolaan konten yang aman bagi admin/staf kampus.

---

## 🏗️ 1. Arsitektur Website & Keamanan
Website ini menggunakan pendekatan modern **Jamstack / Static Site Generation (SSG)**:
* **Frontend:** Vue 3 & Vite dikompilasi menjadi file HTML/CSS/JS statis murni di dalam folder `dist/`.
* **CMS (TinaCMS):** Merupakan Git-backed CMS. Artinya, semua tulisan, visi-misi, pendaftaran, dan majalah disimpan dalam bentuk berkas data lokal (`.json` dan `.md`) di dalam repositori kode Anda, **bukan di database MySQL konvensional**.
* **Keamanan:** Situs online live di produksi bersifat **Read-Only** (tidak ada celah database untuk diserang SQL Injection), menjadikannya **100% kebal retas**.

---

## 🔄 2. Alur Pengelolaan Konten (Pilih Salah Satu)

Anda dapat memilih satu dari dua cara berikut untuk mengelola konten website setelah online:

### Opsi A: Edit Konten di Lokal ➔ Push Git (Sangat Direkomendasikan & 100% Gratis)
Cara ini adalah yang paling aman karena halaman CMS online benar-benar terkunci sepenuhnya.

1. **Jalankan Editor Lokal:** Admin membuka terminal di komputernya lalu menjalankan `npm run dev`.
2. **Edit Visual:** Buka browser di alamat `http://localhost:5173/admin` untuk mengelola artikel, visi-misi, pendaftaran, dan majalah secara interaktif.
3. **Simpan & Kirim:** Setelah selesai mengedit, lakukan `git commit` dan `git push` perubahan tersebut ke repositori GitHub.
4. **Update Otomatis:** Perubahan baru di GitHub akan otomatis memicu proses kompilasi ulang (build) dan memperbarui server online dalam hitungan detik.

---

### Opsi B: Edit Konten Online Langsung (Lewat TinaCloud)
Jika Anda ingin staf kampus dapat langsung login dan mengedit melalui alamat `https://unidsoe.ac.id/admin` secara online tanpa perlu menyentuh terminal:

1. **Daftar TinaCloud:** Buat akun gratis di **[Tina.io](https://tina.io/)**.
2. **Hubungkan GitHub:** Sambungkan repositori GitHub Anda di dasbor TinaCloud.
3. **Konfigurasi Server:** Dapatkan **Client ID** dan **Token** dari TinaCloud, lalu pasang sebagai Environment Variables di server hosting/Netlify Anda:
   * `NEXT_PUBLIC_TINA_CLIENT_ID`
   * `TINA_TOKEN`
4. **Login & Edit:** Staf masuk ke halaman `/admin` online, login menggunakan email terdaftar, lalu mengedit konten. Setiap tombol **Save** diklik, TinaCloud akan otomatis membuat *commit* baru ke GitHub Anda secara otomatis di latar belakang untuk memicu pembaruan situs!

---

## 📦 3. Panduan Deploy ke Shared Hosting (cPanel)

Shared Hosting tidak memiliki sistem aktif untuk menjalankan Node.js secara terus-menerus. Jadi, kita melakukan build di lokal terlebih dahulu.

### Langkah-Langkah:
1. Jalankan perintah kompilasi di laptop Anda:
   ```bash
   npm run build
   ```
2. Sistem akan menghasilkan folder bernama **`dist/`** di direktori utama Anda.
3. Kompres folder `dist/` tersebut menjadi berkas **`dist.zip`**.
4. Masuk ke cPanel UNIDSOE ➔ buka **File Manager** ➔ masuk ke direktori utama **`public_html`**.
5. Unggah berkas `dist.zip` Anda ke sana, lalu lakukan **Extract**.

### ⚠️ Konfigurasi Wajib: Mencegah Eror 404 saat Refresh Halaman
Karena ini adalah Single Page Application (SPA), server Apache di Shared Hosting harus dikonfigurasi agar tidak menampilkan eror 404 ketika pengguna me-refresh halaman sub-menu.
* Buat berkas baru bernama **`.htaccess`** di dalam folder `public_html` Anda, lalu isi dengan konfigurasi berikut:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 🖥️ 4. Panduan Deploy ke VPS (Nginx / Linux Server)

VPS memberikan kontrol penuh sehingga proses build dapat langsung berjalan di dalam server menggunakan bantuan Git.

### Langkah-Langkah:
1. Hubungkan VPS Anda melalui SSH.
2. Clone repositori proyek Anda dari GitHub ke folder server (misal `/var/www/stikes_banyuwangi`).
3. Masuk ke folder proyek, pasang dependensi dan lakukan build:
   ```bash
   npm install
   npm run build
   ```
4. Folder `/var/www/stikes_banyuwangi/dist` adalah direktori target yang akan disajikan ke publik.

### ⚙️ Konfigurasi Web Server Nginx
Buat berkas konfigurasi Nginx untuk situs baru Anda di `/etc/nginx/sites-available/unidsoe` dan pastikan konfigurasi `try_files` terpasang agar navigasi berjalan dengan lancar:

```nginx
server {
    listen 80;
    server_name unidsoe.ac.id www.unidsoe.ac.id;

    # Folder kompilasi utama
    root /var/www/stikes_banyuwangi/dist;
    index index.html;

    # Penanganan Router Vue (SPA)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Keamanan Tambahan
    location ~ /\.(?!well-known) {
        deny all;
    }

    # Caching Aset Statis untuk Performa Super Cepat
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|otf)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}
```

Aktifkan konfigurasi dengan membuat tautan simbolis (*symbolic link*) lalu restart Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/unidsoe /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## 🔒 5. Ringkasan Keamanan & Rekomendasi Alur Kerja

| Fitur | Menggunakan Cara Lokal + GitHub (A) | Menggunakan TinaCloud Online (B) |
| :--- | :--- | :--- |
| **Keamanan Server** | **100% Kebal** (Tidak ada akses tulis online). | **Sangat Aman** (Terproteksi autentikasi OAuth). |
| **Biaya** | **100% Gratis** selamanya. | **Gratis** (Hingga 2 editor, selebihnya berbayar). |
| **Ketergantungan API**| Mandiri tanpa pihak ketiga. | Membutuhkan API TinaCloud terhubung. |
| **Kemudahan Editor** | Membutuhkan git push/taruh file. | Klik tombol login di web langsung. |

> **Rekomendasi Terbaik:** Mulailah dengan **Opsi A** (Edit di lokal & push). Cara ini sepenuhnya gratis, tanpa registrasi pihak ketiga, sangat cepat, dan dijamin bebas dari segala bentuk serangan siber karena website Anda murni disajikan sebagai file statis yang super ringan!
