# 💬 Agent Actions Prompt - Demo Guide

## 📚 Berdasarkan Dokumentasi Resmi

**Link:** https://www.sanity.io/docs/agent-actions/prompt-quickstart

---

## 🔍 Apa itu Prompt?

**Prompt** adalah Agent Action yang:
- ✅ **Return text/JSON** - Tidak create/edit documents
- ✅ **Perfect untuk:** Ide generation, suggestions, analysis
- ✅ **Flexible** - Bisa digunakan untuk berbagai use case
- ✅ **No side effects** - Hanya return response, tidak modify data

**Perbedaan dengan Generate:**
- **Generate:** Create/edit documents
- **Prompt:** Hanya return text/JSON (tidak modify documents)

---

## 🚀 Quick Start

### Run Demo Script

```powershell
# Run semua examples
npm run prompt:demo

# Atau dengan custom prompt
npx tsx scripts/prompt-demo.ts "Your custom prompt here"
```

---

## 📝 Examples yang Tersedia

### Example 1: Simple Prompt - Get Ideas

```typescript
const response = await client.agent.action.prompt({
  instruction: `Give me some ideas for a blog post 
    about health sciences education for Unidsoe.`
});
```

**Use case:** Generate ideas, suggestions, brainstorming

---

### Example 2: Prompt with Document Context

```typescript
const response = await client.agent.action.prompt({
  instruction: `Based on this document, suggest meta descriptions.`,
  instructionParams: {
    background: {
      type: 'document',
      documentId: '<document-id>'
    }
  }
});
```

**Use case:** Analysis, suggestions based on existing content

---

### Example 3: Prompt with JSON Output

```typescript
const response = await client.agent.action.prompt({
  instruction: `Give me blog post ideas in JSON format...`,
  format: 'json'
});
```

**Use case:** Structured data, API responses, data processing

---

### Example 4: Prompt with Temperature

```typescript
const response = await client.agent.action.prompt({
  instruction: `Generate creative social media posts.`,
  temperature: '0.8' // 0-1, higher = more variety
});
```

**Use case:** Creative content, diverse ideas

---

## 🎯 Use Cases untuk Unidsoe

### 1. Generate Blog Post Ideas
```typescript
await client.agent.action.prompt({
  instruction: `Give me 10 blog post ideas for Unidsoe university 
    about health sciences, student achievements, and campus life.`
});
```

### 2. Suggest SEO Keywords
```typescript
await client.agent.action.prompt({
  instruction: `Suggest 20 SEO keywords for a blog post about 
    "Keperawatan" (Nursing) program at Unidsoe.`,
  format: 'json'
});
```

### 3. Generate Social Media Captions
```typescript
await client.agent.action.prompt({
  instruction: `Create 5 engaging Instagram captions for a post 
    about student achievement at Unidsoe.`,
  temperature: '0.7'
});
```

### 4. Analyze Content
```typescript
await client.agent.action.prompt({
  instruction: `Analyze this article and suggest improvements 
    for better SEO and readability.`,
  instructionParams: {
    content: {
      type: 'document',
      documentId: '<article-id>'
    }
  }
});
```

---

## 🎬 Untuk Demo Presentasi

### Flow Demo (3 Menit):

1. **Show Script** (30 detik)
   - Buka `scripts/prompt-demo.ts`
   - Explain: "Ini untuk generate ideas & suggestions"

2. **Run Example 1** (1 menit)
   ```powershell
   npm run prompt:demo
   ```
   - Show: Blog post ideas generated

3. **Run Example 3** (1 menit)
   - Show: JSON output dengan structured data
   - Explain: "Bisa dapat structured data untuk processing"

4. **Custom Prompt** (30 detik)
   ```powershell
   npx tsx scripts/prompt-demo.ts "Generate 5 social media post ideas"
   ```
   - Show: Custom prompt result

---

## 📊 Comparison: Prompt vs Generate

| Feature | Prompt | Generate |
|---------|--------|----------|
| **Output** | Text/JSON | Document |
| **Modify Data** | ❌ No | ✅ Yes |
| **Use Case** | Ideas, Analysis | Content Creation |
| **Side Effects** | None | Creates/Updates docs |

---

## ✅ Checklist

- [x] Script demo sudah dibuat ✅
- [x] Examples lengkap ✅
- [x] NPM script sudah ditambahkan ✅
- [ ] **Test script** ← Test sekarang
- [ ] **Prepare demo flow** ← Siapkan untuk presentasi

---

## 🚀 Quick Commands

```powershell
# Run all examples
npm run prompt:demo

# Custom prompt
npx tsx scripts/prompt-demo.ts "Your prompt here"

# With document context (need document ID)
# Edit script to add documentId
```

---

## 📚 Documentation

- **Prompt Quickstart:** https://www.sanity.io/docs/agent-actions/prompt-quickstart
- **Agent Actions Overview:** https://www.sanity.io/docs/agent-actions

---

**Prompt perfect untuk generate ideas & suggestions tanpa modify documents!** 🚀

