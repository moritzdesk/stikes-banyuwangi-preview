/**
 * Prebuild: tarik artikel Published + kategori dari Payload CMS,
 * tulis ke src/data/articles.generated.json (di-commit sebagai fallback).
 * Kalau CMS tidak terjangkau, build tetap lanjut dengan JSON terakhir.
 *
 * Env: CMS_URL (default http://127.0.0.1:3000)
 * Cara pakai: node scripts/prebuild.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_FILE = path.join(__dirname, '..', 'src', 'data', 'articles.generated.json')
const CMS_URL = (process.env.CMS_URL || 'http://127.0.0.1:3000').replace(/\/$/, '')

async function fetchAll(base, params = {}) {
  const out = []
  let page = 1
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const qs = new URLSearchParams({ limit: '100', page: String(page), depth: '2', ...params })
    const res = await fetch(`${base}?${qs}`)
    if (!res.ok) throw new Error(`HTTP ${res.status} untuk ${base}`)
    const data = await res.json()
    out.push(...(data.docs || []))
    if (!data.hasNextPage) break
    page = data.nextPage
  }
  return out
}

function absUrl(url) {
  if (!url) return ''
  if (/^https?:\/\//.test(url)) return url
  return `${CMS_URL}${url.startsWith('/') ? '' : '/'}${url}`
}

function coverImage(cover) {
  if (!cover || typeof cover !== 'object') return ''
  const sizes = cover.sizes || {}
  return absUrl(sizes?.card?.url || sizes?.thumbnail?.url || cover.url || '')
}

function formatDateID(iso) {
  if (!iso) return ''
  try {
    return new Date(iso).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
  } catch {
    return ''
  }
}

async function main() {
  console.log(`[prebuild] CMS: ${CMS_URL}`)
  const [articles, categories] = await Promise.all([
    fetchAll(`${CMS_URL}/api/articles`, { sort: '-publishedDate' }),
    fetchAll(`${CMS_URL}/api/categories`, { sort: 'displayName' }),
  ])

  const payload = {
    generatedAt: new Date().toISOString(),
    cmsUrl: CMS_URL,
    categories: categories.map((c) => ({
      id: c.id,
      name: c.name,
      slug: c.slug,
      displayName: c.displayName,
      description: c.description || '',
    })),
    articles: articles.map((a) => {
      const cat = a.category && typeof a.category === 'object' ? a.category : {}
      return {
        id: a.id,
        title: a.title,
        slug: a.slug,
        date: formatDateID(a.publishedDate),
        publishedDate: a.publishedDate,
        image: coverImage(a.cover),
        excerpt: a.excerpt || '',
        content: a.content_html || '',
        category: cat.displayName || cat.name || 'Berita',
        category_slug: cat.slug || 'berita',
        author: a.author || 'Humas UNIDSOE',
        tags: a.tags || [],
        seoTitle: a.meta?.title || a.title,
        seoDescription: a.meta?.description || a.excerpt || '',
      }
    }),
  }

  fs.writeFileSync(OUT_FILE, JSON.stringify(payload, null, 2))
  console.log(`[prebuild] OK: ${payload.articles.length} artikel, ${payload.categories.length} kategori -> ${OUT_FILE}`)
}

main().catch((err) => {
  console.error(`[prebuild] GAGAL (${err.message}) — memakai JSON terakhir yang ter-commit.`)
  if (!fs.existsSync(OUT_FILE)) {
    console.error('[prebuild] Tidak ada fallback JSON. Build dibatalkan.')
    process.exit(1)
  }
  process.exit(0)
})
