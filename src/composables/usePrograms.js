/**
 * Data layer prodi — baca dari JSON hasil prebuild (data Payload CMS).
 * Sumber: src/data/programs.generated.json (dibuat oleh scripts/prebuild.mjs).
 */
import generated from '../data/programs.generated.json'

const levelMap = {
  S1: 'Sarjana (S1)',
  D3: 'Ahli Madya (D3)',
  D4: 'Sarjana Terapan (D4)',
  Profesi: 'Profesi',
}

function normalize(p) {
  return { ...p, levelLabel: levelMap[p.level] || p.level }
}

/** Semua prodi. */
export function getAllPrograms() {
  return (generated.programs || []).map(normalize)
}

/** Satu prodi by slug (untuk /program-studi/:slug). */
export function getProgramBySlug(slug) {
  const found = (generated.programs || []).find((p) => p.slug === slug)
  return found ? normalize(found) : null
}

/** Cari prodi (nama/jenjang/deskripsi). */
export function searchPrograms(query) {
  const q = (query || '').toLowerCase().trim()
  const all = getAllPrograms()
  if (!q) return all
  return all.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      (p.levelLabel || '').toLowerCase().includes(q) ||
      (p.shortDescription || '').toLowerCase().includes(q),
  )
}
