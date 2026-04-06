# 🤖 Plugin AI untuk Sanity CMS - Info Lengkap

## 📊 Opsi Plugin AI untuk Content Generation

### 1. **Sanity AI Assist** (Built-in Sanity) ⭐⭐⭐⭐⭐

**Status:** Built-in feature dari Sanity  
**Harga:** 
- ✅ **Free Tier:** Tidak tersedia di free tier
- 💰 **Growth Plan:** $15 per user per bulan
- 📦 **Include:** 
  - AI content generation
  - AI content optimization
  - AI keyword suggestions
  - Up to 50 users
  - Public/private datasets

**Fitur:**
- ✅ Generate artikel dari prompt
- ✅ Optimize konten yang sudah ada
- ✅ Suggest keywords
- ✅ Auto-generate meta descriptions
- ✅ Content rewriting

**Link:** https://www.sanity.io/pricing

---

### 2. **Insanity Agent** (Third-party Plugin) ⭐⭐⭐⭐

**Status:** Plugin third-party  
**Harga:**
- ✅ **Free Tier:** 1 posting gratis per hari
- 💰 **Paid Plans:** Mulai dari $X per bulan (untuk unlimited)

**Fitur:**
- ✅ AI content generation
- ✅ Brand voice training
- ✅ Smart scheduling
- ✅ Seamless Sanity integration

**Link:** https://www.insanity.sh/

---

### 3. **Terradium Fusion** (Third-party Plugin) ⭐⭐⭐

**Status:** Plugin third-party  
**Harga:**
- 💰 **$19 per bulan:**
  - 270 "Electrons" (~90 artikel)
  - Up to 3 Sanity projects
  - All AI agents (SEO, writer, content improvement)

**Fitur:**
- ✅ Automated content publishing
- ✅ SEO optimization
- ✅ Content improvement
- ✅ Multiple Sanity projects

**Link:** https://www.terradium.io/

---

### 4. **Custom OpenAI Integration** (DIY) ⭐⭐⭐⭐⭐ (REKOMENDASI!)

**Status:** Custom integration (bisa buat sendiri)  
**Harga:**
- ✅ **OpenAI Free Tier:** $5 credit gratis (cukup untuk testing)
- 💰 **OpenAI Pay-as-you-go:** 
  - ~$0.002 per 1K tokens (sangat murah!)
  - GPT-3.5 Turbo: ~$0.0015 per 1K tokens
  - GPT-4: ~$0.03 per 1K tokens

**Estimasi Cost:**
- **1 artikel (~1000 words):** ~$0.01-0.03
- **100 artikel/bulan:** ~$1-3 per bulan
- **Sangat affordable!**

**Fitur (Custom):**
- ✅ Full control
- ✅ Custom prompts
- ✅ Brand voice customization
- ✅ Keyword integration
- ✅ SEO optimization

**Setup:**
```bash
npm install openai
```

**Link:** https://platform.openai.com/

---

## 💡 Rekomendasi untuk Unidsoe

### **Opsi 1: Custom OpenAI Integration** (Paling Recommended!)

**Kenapa?**
- ✅ **Paling murah** - Pay-as-you-go, sangat affordable
- ✅ **Full control** - Bisa customize sesuai kebutuhan
- ✅ **Flexible** - Bisa integrate dengan keyword research
- ✅ **Scalable** - Bisa upgrade ke GPT-4 jika perlu
- ✅ **Free tier** - Ada $5 credit gratis untuk testing

**Setup Time:** 1-2 jam  
**Monthly Cost:** ~$1-5 (tergantung usage)

---

### **Opsi 2: Sanity AI Assist** (Jika Budget Cukup)

**Kenapa?**
- ✅ **Built-in** - Tidak perlu setup tambahan
- ✅ **User-friendly** - Interface sudah terintegrasi
- ✅ **Support** - Ada support dari Sanity team

**Setup Time:** 5 menit (hanya perlu upgrade plan)  
**Monthly Cost:** $15/user

---

### **Opsi 3: Insanity Agent** (Free Tier Cukup?)

**Kenapa?**
- ✅ **Free tier** - 1 posting/hari gratis
- ✅ **Easy setup** - Plugin ready-to-use

**Setup Time:** 10 menit  
**Monthly Cost:** Free (jika 1 posting/hari cukup) atau $X untuk unlimited

---

## 🚀 Quick Setup: Custom OpenAI Integration

### Step 1: Dapatkan OpenAI API Key

1. Daftar di https://platform.openai.com/
2. Dapatkan $5 credit gratis
3. Buat API key di https://platform.openai.com/api-keys

### Step 2: Install OpenAI SDK

```bash
cd unidsoe
npm install openai
```

### Step 3: Setup Environment Variable

**File: `.env.local`**
```
OPENAI_API_KEY=sk-...
```

### Step 4: Buat Custom Input Component

**File: `components/AIContentGenerator.tsx`**

```typescript
import {useState} from 'react'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export function AIContentGenerator({onGenerate}) {
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)

  async function generateContent() {
    setLoading(true)
    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a content writer for Unidsoe (Universitas Dr. Soekardjo), a health sciences university in Indonesia. Write SEO-optimized, professional content in Indonesian.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 2000,
      })

      const generatedContent = completion.choices[0].message.content
      onGenerate(generatedContent)
    } catch (error) {
      console.error('Error generating content:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Masukkan topik atau prompt untuk generate konten..."
      />
      <button onClick={generateContent} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Content'}
      </button>
    </div>
  )
}
```

### Step 5: Integrate ke Sanity Schema

**File: `schemaTypes/post.ts`**

```typescript
import {defineField, defineType} from 'sanity'
import {AIContentGenerator} from '../components/AIContentGenerator'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      components: {
        input: (props) => (
          <div>
            {props.renderDefault(props)}
            <AIContentGenerator
              onGenerate={(content) => {
                // Auto-fill title
                props.onChange(content)
              }}
            />
          </div>
        ),
      },
    }),
    // ... other fields
  ],
})
```

---

## 📊 Cost Comparison

| Plugin | Setup Cost | Monthly Cost | Free Tier | Best For |
|--------|-----------|--------------|-----------|----------|
| **Custom OpenAI** | Free | $1-5 | ✅ $5 credit | Small-medium projects |
| **Sanity AI Assist** | Free | $15/user | ❌ | Teams, built-in |
| **Insanity Agent** | Free | Free-$X | ✅ 1/day | Testing |
| **Terradium Fusion** | Free | $19 | ❌ | Multiple projects |

---

## 🎯 Kesimpulan

**Untuk Unidsoe, saya rekomendasikan:**

1. **Start dengan Custom OpenAI Integration** (Free tier $5)
   - Test dulu dengan free credit
   - Cost sangat affordable ($1-5/bulan)
   - Full control & flexible

2. **Upgrade ke Sanity AI Assist** (jika perlu)
   - Jika team besar (>3 users)
   - Jika butuh built-in support
   - Budget $15/user/month

**Action Plan:**
- ✅ Setup Custom OpenAI Integration (1-2 jam)
- ✅ Test dengan free $5 credit
- ✅ Monitor usage & cost
- ✅ Upgrade jika perlu

---

**Ready untuk setup Custom OpenAI Integration?** 🚀

