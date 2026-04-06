# 🤖 Agent Actions Demo Scripts

## 📋 Setup

### Step 1: Install Dependencies

```powershell
npm install @sanity/client@latest
```

### Step 2: Get API Token

1. **Buka:** https://sanity.io/manage/project/iwtyom29/api
2. **Create new token:**
   - Name: `Agent Actions Demo`
   - Permission: **Editor** (read/write)
3. **Copy token**

### Step 3: Set Environment Variable

**PowerShell:**
```powershell
$env:SANITY_API_TOKEN="your-token-here"
```

**Bash:**
```bash
export SANITY_API_TOKEN="your-token-here"
```

**Atau create `.env` file:**
```
SANITY_API_TOKEN=your-token-here
```

---

## 🚀 Run Scripts

### Generate New Post

```powershell
# With default topic
npx tsx scripts/generate-post.ts

# With custom topic
npx tsx scripts/generate-post.ts "Topik Artikel Anda"
```

**Or with Node.js v23.6+:**
```powershell
node scripts/generate-post.ts "Topik Artikel"
```

---

## 📝 Available Scripts

### `generate-post.ts`
Generate new blog post dengan Agent Actions.

**Features:**
- ✅ Create new post document
- ✅ Generate title, body, excerpt
- ✅ Indonesian language
- ✅ SEO-friendly content

**Usage:**
```powershell
npx tsx scripts/generate-post.ts "Prestasi Mahasiswa"
```

---

## 🎯 Example Output

```
🤖 Generating post with Agent Actions...
📝 Topic: Prestasi Mahasiswa dalam Bidang Kesehatan
⏳ Please wait...

✅ Post generated successfully!

📄 Generated Document:
──────────────────────────────────────────────────
{
  "_id": "drafts.xxxxx",
  "_type": "post",
  "title": "Prestasi Gemilang Mahasiswa Unidsoe...",
  "body": [...],
  ...
}
──────────────────────────────────────────────────
```

---

## 🔧 Troubleshooting

### Error: "SANITY_API_TOKEN not set"
→ Set environment variable dengan token Anda

### Error: "Invalid token"
→ Pastikan token memiliki Editor permission

### Error: "Schema not found"
→ Run: `npx sanity schema deploy`

---

## 📚 Documentation

- **Agent Actions:** https://www.sanity.io/docs/agent-actions
- **Generate Quickstart:** https://www.sanity.io/docs/agent-actions/generate-quickstart

---

**Ready untuk demo!** 🚀

