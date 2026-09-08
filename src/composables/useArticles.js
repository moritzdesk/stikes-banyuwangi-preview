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

/** Info siraman build (debug). */
export function getArticlesMeta() {
  return { generatedAt: generated.generatedAt, cmsUrl: generated.cmsUrl }
}
