# Quick Sanity Demo - 5 Menit Setup

## ⚡ Super Quick Setup (5 Menit)

### 1. Install & Login (1 menit)

```bash
npm install -g @sanity/cli
sanity login
```

### 2. Create Project (2 menit)

```bash
# Di project root
sanity init --template blog --project-id unidsoe-demo --dataset production --output-path sanity-studio
```

**Atau interactive:**
```bash
sanity init
# Pilih template: Blog
# Project name: unidsoe-demo
# Output: sanity-studio
```

### 3. Start Studio (1 menit)

```bash
cd sanity-studio
npm install
npm run dev
```

**Studio akan jalan di:** `http://localhost:3333` 🎉

---

## 🎬 Demo untuk Presentasi

### Tampilan Studio:
```
┌─────────────────────────────────────────┐
│  Unidsoe CMS                            │
├─────────────────────────────────────────┤
│  [Articles] [Program Studi] [Media]     │
├─────────────────────────────────────────┤
│                                         │
│  📝 Create New Article                  │
│  ┌───────────────────────────────────┐ │
│  │ Title: [___________________]      │ │
│  │ Category: [Dropdown]              │ │
│  │ Content: [Rich Text Editor]       │ │
│  │                                   │ │
│  │ 🖼️ Upload Image                   │ │
│  │                                   │ │
│  │ 📊 SEO Settings                   │ │
│  │   - SEO Title: [_______]         │ │
│  │   - Description: [_______]       │ │
│  │   - Keywords: [tag1, tag2]       │ │
│  │                                   │ │
│  │ [Save Draft] [Publish]           │ │
│  └───────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

### Demo Flow:
1. **Show Studio** → `http://localhost:3333`
2. **Create Article** → Input, upload, SEO
3. **Publish** → Show muncul di website

---

## 🎯 Untuk Presentasi Malam Ini

**Opsi Tercepat:**
1. Setup sekarang (5 menit)
2. Test create 1 artikel
3. Siap untuk demo malam ini

**Atau:**
- Pakai screenshots dari website Sanity
- Show video demo dari YouTube
- Explain flow tanpa live demo

---

**Setup sekarang? Atau mau saya bantu setup step-by-step?**

