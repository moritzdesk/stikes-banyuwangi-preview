# 🔑 Setup API Token untuk Agent Actions

## ✅ Token Sudah Diterima!

**Token Anda:**
```
skyrIPWW8egzpluLt04BkNALDspwHNaUWFQefkLbycUdgdexfbfXkCiIL9OxY1rGHzmTHDziZZI3nUSQMpThEMJ08fIIh2ruZD9Oy9xk3YrNDqpkXdta9lU6uRPVXuwO4XhOBHnCC6eno2Qva41GB2Y6Nu6AarQfLy2aFl3LbHJUdzDpsWKZ
```

---

## 🚀 Quick Setup (2 Cara)

### Method 1: Environment Variable (PowerShell)

```powershell
$env:SANITY_API_TOKEN="skyrIPWW8egzpluLt04BkNALDspwHNaUWFQefkLbycUdgdexfbfXkCiIL9OxY1rGHzmTHDziZZI3nUSQMpThEMJ08fIIh2ruZD9Oy9xk3YrNDqpkXdta9lU6uRPVXuwO4XhOBHnCC6eno2Qva41GB2Y6Nu6AarQfLy2aFl3LbHJUdzDpsWKZ"
```

**Lalu run script:**
```powershell
npm run generate:post
```

---

### Method 2: .env.local File (Recommended)

**Buat file `.env.local` di folder `unidsoe`:**

**PowerShell:**
```powershell
@"
SANITY_API_TOKEN=skyrIPWW8egzpluLt04BkNALDspwHNaUWFQefkLbycUdgdexfbfXkCiIL9OxY1rGHzmTHDziZZI3nUSQMpThEMJ08fIIh2ruZD9Oy9xk3YrNDqpkXdta9lU6uRPVXuwO4XhOBHnCC6eno2Qva41GB2Y6Nu6AarQfLy2aFl3LbHJUdzDpsWKZ
"@ | Out-File -FilePath .env.local -Encoding utf8
```

**Atau manual:**
1. Buat file `.env.local` di folder `unidsoe`
2. Isi dengan:
   ```
   SANITY_API_TOKEN=skyrIPWW8egzpluLt04BkNALDspwHNaUWFQefkLbycUdgdexfbfXkCiIL9OxY1rGHzmTHDziZZI3nUSQMpThEMJ08fIIh2ruZD9Oy9xk3YrNDqpkXdta9lU6uRPVXuwO4XhOBHnCC6eno2Qva41GB2Y6Nu6AarQfLy2aFl3LbHJUdzDpsWKZ
   ```
3. Save file

**Lalu run script:**
```powershell
npm run generate:post
```

---

## ✅ Verify Setup

**Test apakah token sudah ter-set:**

```powershell
# PowerShell
echo $env:SANITY_API_TOKEN

# Atau test dengan script
npm run generate:post
```

---

## 🔒 Security Notes

- ✅ **.env.local sudah di-ignore** - Tidak akan di-commit ke git
- ✅ **Token aman** - Hanya tersimpan lokal
- ⚠️ **Jangan share token** - Jangan commit ke public repo

---

## 🚀 Ready to Use!

**Setelah token di-set, langsung bisa run:**

```powershell
# Generate post dengan default topic
npm run generate:post

# Generate post dengan custom topic
npx tsx scripts/generate-post.ts "Prestasi Mahasiswa"
```

---

**Token sudah siap digunakan!** 🎉

