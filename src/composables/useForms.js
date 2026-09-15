/**
 * Helper formulir dinamis — daftar form langsung dari CMS (runtime).
 * Form baru di CMS otomatis muncul di /formulir tanpa ubah kode.
 */

const cmsUrl = () =>
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_CMS_URL
    ? import.meta.env.VITE_CMS_URL
    : 'http://127.0.0.1:3000'
  ).replace(/\/$/, '')

export function slugify(text) {
  return (text || '')
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

let cache = null

export async function fetchForms() {
  if (cache) return cache
  const res = await fetch(`${cmsUrl()}/api/forms?limit=100&depth=0`)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const data = await res.json()
  cache = data.docs || []
  return cache
}
