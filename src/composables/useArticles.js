/**
 * Data layer artikel — baca dari JSON hasil prebuild (data Payload CMS).
 * Sumber: src/data/articles.generated.json (dibuat oleh scripts/prebuild.mjs).
 * Mapping kategori tetap ikut settings.json (articleSettings) seperti sebelumnya.
 */
import generated from '../data/articles.generated.json'
import globalSettings from '../data/settings.json'

const cmsCategories = globalSettings.articleSettings?.categories || []
const wordLimit = globalSettings.articleSettings?.excerptWordLimit || 15

export function getTruncatedExcerpt(text) {
  if (!text) return ''
  const words = text.trim().split(/\s+/)
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...'
  }
  return text
}

export function displayNameFor(slug, fallback = 'Berita') {
  const found = cmsCategories.find((c) => c.slug === slug)
  return found ? found.displayName : fallback
}

/** Semua artikel (sudah urut terbaru dari prebuild). */
export function getAllArticles() {
  return (generated.articles || []).map((a) => ({
    ...a,
    excerpt: getTruncatedExcerpt(a.excerpt),
    category: displayNameFor(a.category_slug, a.category),
  }))
}

/** Satu artikel by slug (untuk /artikel/:slug). */
export function getArticleBySlug(slug) {
  const found = (generated.articles || []).find((a) => a.slug === slug)
  if (!found) return null
  return {
    ...found,
    excerpt: getTruncatedExcerpt(found.excerpt),
    category: displayNameFor(found.category_slug, found.category),
  }
}

/** Filter by daftar slug kategori + batas jumlah. */
export function getArticlesBySlugs(slugs, limit = 3) {
  return getAllArticles()
    .filter((a) => slugs.includes(a.category_slug))
    .slice(0, limit)
}

/** Kategori aktif (show:true di settings) yang punya artikel. */
export function getActiveCategories() {
  const slugsInData = new Set((generated.articles || []).map((a) => a.category_slug))
  return cmsCategories
    .filter((c) => c.show && slugsInData.has(c.slug))
    .map((c) => ({ slug: c.slug, displayName: c.displayName }))
}

/** Artikel terbaru, kecuali current (untuk section "Terbaru" di detail). */
export function getLatestArticles(excludeId, limit = 4) {
  return getAllArticles()
    .filter((a) => String(a.id) !== String(excludeId))
    .slice(0, limit)
}

/**
 * Artikel terkait: skor = kategori sama (+10) + irisan tag (+3 per tag).
 * Kalau skor seri, yang terbaru dulu. Fallback isi dari terbaru bila related < limit.
 */
export function getRelatedArticles(current, limit = 4) {
  if (!current) return []
  const curCat = current.category_slug
  const curTags = new Set((current.tags || []).map((t) => t.toLowerCase().trim()))
  const candidates = getAllArticles().filter((a) => String(a.id) !== String(current.id))
  const scored = candidates.map((a) => {
    let score = 0
    if (a.category_slug === curCat) score += 10
    const overlap = (a.tags || []).filter((t) => curTags.has(t.toLowerCase().trim())).length
    score += overlap * 3
    return { a, score }
  })
  scored.sort((x, y) => {
    if (y.score !== x.score) return y.score - x.score
    const dy = new Date(y.a.publishedDate || 0).getTime()
    const dx = new Date(x.a.publishedDate || 0).getTime()
    return dy - dx
  })
  // hanya yang ada skor (>0); bila kosong tetap fallback ke terbaru agar section tidak bolong
  const related = scored.filter((s) => s.score > 0).map((s) => s.a)
  if (related.length >= limit) return related.slice(0, limit)
  // isi sisa dari terbaru yang belum masuk
  const seen = new Set(related.map((a) => String(a.id)))
  seen.add(String(current.id))
  for (const a of getAllArticles()) {
    if (related.length >= limit) break
    if (!seen.has(String(a.id))) related.push(a)
  }
  return related.slice(0, limit)
}

/** Info siraman build (debug). */
export function getArticlesMeta() {
  return { generatedAt: generated.generatedAt, cmsUrl: generated.cmsUrl }
}
