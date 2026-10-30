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
const PROGRAMS_FILE = path.join(__dirname, '..', 'src', 'data', 'programs.generated.json')
const SITE_FILE = path.join(__dirname, '..', 'src', 'data', 'site.generated.json')
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

// Media Payload disalin ke public/media -> URL jadi relatif /media/<file> agar
// build production tidak bergantung pada server CMS (127.0.0.1:3000).
function absUrl(url) {
  if (!url) return ''
  // Path media CMS -> relatif ke /media/<file> (sudah disalin ke public/media)
  if (url.startsWith('/api/media/file/')) {
    return `/media/${url.slice('/api/media/file/'.length)}`
  }
  if (/^https?:\/\//.test(url)) {
    // URL media absolut lama dari CMS -> ubah ke /media/<file>
    const m = url.match(/\/api\/media\/file\/(.+)$/)
    if (m) return `/media/${m[1]}`
    return url
  }
  return `${CMS_URL}${url.startsWith('/') ? '' : '/'}${url}`
}

// URL media di dalam HTML -> relatif /media/<file> (media sudah disalin ke public/media)
function absolutizeMediaUrls(html) {
  if (!html || typeof html !== 'string') return html || ''
  // Normalisasi sisa URL relatif dokumen lama (../../../api/media/...) dulu
  const normalized = html.replace(/(?:\.\.\/)+(api\/media\/)/g, '/$1')
  // URL absolut lama dari CMS
  const withoutAbs = normalized.replace(
    /((?:src|srcset|href)=["'])(?:https?:\/\/[^"']*)?\/api\/media\/file\/([^"']*)/g,
    `$1/media/$2`,
  )
  // URL relatif /api/media/file/...
  return withoutAbs.replace(
    /((?:src|srcset|href)=["'])\/api\/media\/file\/([^"']*)/g,
    `$1/media/$2`,
  )
}

function coverImage(cover) {
  if (!cover || typeof cover !== 'object') return ''
  const sizes = cover.sizes || {}
  return absUrl(sizes?.card?.url || sizes?.thumbnail?.url || cover.url || '')
}

function coverPosition(cover) {
  if (!cover || typeof cover !== 'object') return ''
  const x = cover.focalX ?? 50
  const y = cover.focalY ?? 50
  return `${x}% ${y}%`
}

function formatDateID(iso) {
  if (!iso) return ''
  try {
    return new Date(iso).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
  } catch {
    return ''
  }
}

async function fetchGlobal(slug) {
  const res = await fetch(`${CMS_URL}/api/globals/${slug}?depth=2`)
  if (!res.ok) throw new Error(`HTTP ${res.status} untuk globals/${slug}`)
  return res.json()
}

function mediaImage(file) {
  if (!file) return ''
  if (typeof file === 'string') return absUrl(file)
  if (typeof file === 'object') {
    const sizes = file.sizes || {}
    return absUrl(sizes?.card?.url || sizes?.thumbnail?.url || file.url || '')
  }
  return ''
}

async function main() {
  console.log(`[prebuild] CMS: ${CMS_URL}`)
  const [articles, categories, programs, home, homeCta, tentangKami, profil, identitas, beasiswa, infoPmb, magazines, siteContact, siteAchievements, siteAssociations, siteFacilities, sitePartners, siteTestimonials, documents] = await Promise.all([
    fetchAll(`${CMS_URL}/api/articles`, { sort: '-publishedDate' }),
    fetchAll(`${CMS_URL}/api/categories`, { sort: 'displayName' }),
    fetchAll(`${CMS_URL}/api/programs`, { sort: 'title', limit: '100' }),
    fetchGlobal('home'),
    fetchGlobal('home-cta'),
    fetchGlobal('tentang-kami'),
    fetchGlobal('profil'),
    fetchGlobal('identitas'),
    fetchGlobal('beasiswa'),
    fetchGlobal('info-pmb'),
    fetchGlobal('magazines'),
    fetchGlobal('site-contact'),
    fetchGlobal('site-achievements'),
    fetchGlobal('site-associations'),
    fetchGlobal('site-facilities'),
    fetchGlobal('site-partners'),
    fetchGlobal('site-testimonials'),
    fetchAll(`${CMS_URL}/api/documents`, { sort: '-date', limit: '100' }),
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
        // Titik fokus cover (diatur di Media library) agar portrait tidak kepotong sembarang
        imagePosition: coverPosition(a.cover),
        excerpt: a.excerpt || '',
        content: absolutizeMediaUrls(a.content_html || a.content || ''),
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

  const programsPayload = {
    generatedAt: payload.generatedAt,
    cmsUrl: CMS_URL,
    programs: programs.map((p) => ({
      id: p.id,
      title: p.title,
      slug: p.slug,
      faculty: p.faculty,
      level: p.level,
      degree: p.degree || '',
      accreditation: p.accreditation || '',
      duration: p.duration || '',
      // image bisa relasi Media (objek) atau path lama (string)
      image: typeof p.image === 'object' ? mediaImage(p.image) : p.image || '',
      shortDescription: p.shortDescription || '',
      profilProgramStudi: p.profilProgramStudi || '',
      visi: p.visi || '',
      misi: p.misi || [],
      tujuan: p.tujuan || [],
      keunggulan: p.keunggulan || '',
      pembelajaran: p.pembelajaran || '',
      masaStudiDetail: p.masaStudiDetail || '',
      saranaAkademik: p.saranaAkademik || '',
      praktikLapangan: p.praktikLapangan || '',
      profilLulusan: p.profilLulusan || '',
      jejaringKemitraan: p.jejaringKemitraan || [],
      competence: p.competence || '',
      prospects: p.prospects || '',
      prospekKerja: p.prospekKerja || '',
      karierAlumni: p.karierAlumni || [],
      faq: p.faq || [],
    })),
  }
  fs.writeFileSync(PROGRAMS_FILE, JSON.stringify(programsPayload, null, 2))
  console.log(`[prebuild] OK: ${programsPayload.programs.length} prodi -> ${PROGRAMS_FILE}`)

  const sitePayload = {
    generatedAt: payload.generatedAt,
    cmsUrl: CMS_URL,
    home: { slides: home.slides || [] },
    profil: {
      sejarah: profil.sejarah || '',
      visi: profil.visi || '',
      misi: profil.misi || [],
      tujuan: profil.tujuan || [],
      sasaran: profil.sasaran || [],
      namaKetua: profil.namaKetua || '',
      sambutan: profil.sambutan || '',
      // fotoKetua bisa relasi Media (objek) atau path lama (string)
      fotoKetua: typeof profil.fotoKetua === 'object' ? mediaImage(profil.fotoKetua) : profil.fotoKetua || '',
    },
    identitas: { ...identitas },
  }
  // 3 gambar identitas bisa relasi Media (objek) atau path lama (string)
  for (const k of ['logoImage', 'logoPhilosophyImage', 'mascotImage']) {
    const v = sitePayload.identitas[k]
    if (v && typeof v === 'object') sitePayload.identitas[k] = mediaImage(v)
  }
  delete sitePayload.identitas.id
  delete sitePayload.identitas.createdAt
  delete sitePayload.identitas.updatedAt
  sitePayload.beasiswa = {
    title: beasiswa.title,
    subtitle: beasiswa.subtitle || '',
    // hero bisa relasi Media (objek) atau path lama (string)
    heroImage: typeof beasiswa.heroImage === 'object' ? mediaImage(beasiswa.heroImage) : beasiswa.heroImage || '',
    introTitle: beasiswa.introTitle || '',
    introText: beasiswa.introText || '',
    scholarships: beasiswa.scholarships || [],
  }
  // Slide hero: image bisa relasi Media (objek) atau path lama (string)
  if (Array.isArray(sitePayload.home.slides)) {
    sitePayload.home.slides = sitePayload.home.slides.map((s) => ({
      ...s,
      image: typeof s.image === 'object' ? mediaImage(s.image) : s.image,
    }))
  }
  // Section Tentang Kami: global sendiri (tentang-kami)
  const homeAbout = tentangKami || {}
  sitePayload.home.about = {
    badge: homeAbout.badge || 'Tentang Kami',
    title: homeAbout.title || '',
    image: typeof homeAbout.image === 'object' ? mediaImage(homeAbout.image) : homeAbout.image || '',
    paragraph1: homeAbout.paragraph1 || '',
    paragraph2: homeAbout.paragraph2 || '',
    quote: homeAbout.quote || '',
    points: homeAbout.points || [],
  }
  // Kartu CTA: global sendiri (home-cta)
  sitePayload.home.cta = (homeCta.cards || []).map((c) => ({
    variant: c.variant || 'hijau',
    badge: c.badge || '',
    titleLine1: c.titleLine1 || '',
    titleLine2: c.titleLine2 || '',
    description: c.description || '',
    stats: c.stats || [],
    primaryText: c.primaryText || '',
    primaryLink: c.primaryLink || '',
    secondaryText: c.secondaryText || '',
    secondaryLink: c.secondaryLink || '',
    image: typeof c.image === 'object' ? mediaImage(c.image) : c.image || '',
  }))
  sitePayload.infoPmb = {
    title: infoPmb.title,
    subtitle: infoPmb.subtitle || '',
    // hero bisa relasi Media (objek) atau path lama (string)
    heroImage: typeof infoPmb.heroImage === 'object' ? mediaImage(infoPmb.heroImage) : infoPmb.heroImage || '',
    openDate: infoPmb.openDate || '',
    contactPhone: infoPmb.contactPhone || '',
    contactWhatsapp: infoPmb.contactWhatsapp || '',
    requirements: infoPmb.requirements || [],
    steps: infoPmb.steps || [],
    registrationPaths: infoPmb.registrationPaths || [],
  }
  sitePayload.magazines = {
    title: magazines.title,
    subtitle: magazines.subtitle || '',
    // cover + pdf bisa relasi Media (objek) atau path lama (string)
    magazines: (magazines.magazines || []).map((m) => ({
      id: m.magazineId,
      title: m.title,
      edition: m.edition || '',
      date: m.date || '',
      cover: typeof m.cover === 'object' ? mediaImage(m.cover) : m.cover || '',
      pdfUrl: typeof m.pdfUrl === 'object' ? mediaImage(m.pdfUrl) : m.pdfUrl || '',
    })),
  }
  sitePayload.documents = documents.map((d) => ({
    title: d.title,
    category: d.category,
    // file bisa relasi Media (objek) atau path lama (string)
    file: typeof d.file === 'object' ? mediaImage(d.file) : d.file || '',
    // link Google Drive (Opsi A) — diprioritaskan web dibanding upload
    driveUrl: typeof d.driveUrl === 'string' ? d.driveUrl.trim() : '',
    date: d.date || '',
  }))
  // siteSettings dirakit dari 6 global pecahan (bentuk JSON tetap sama untuk web)
  sitePayload.siteSettings = {
    contact: {
      phone: siteContact.phone || '',
      email: siteContact.email || '',
      address: siteContact.address || '',
      pmbLink: siteContact.pmbLink || '',
    },
    achievements: {
      sectionTitle: siteAchievements.sectionTitle || '',
      items: siteAchievements.items || [],
    },
    associations: {
      sectionTitle: siteAssociations.sectionTitle || '',
      description: siteAssociations.description || '',
      items: siteAssociations.items || [],
    },
    // gambar bisa relasi Media (objek) atau path lama (string)
    facilities: (siteFacilities.items || []).map((f) => ({
      ...f,
      image: typeof f.image === 'object' ? mediaImage(f.image) : f.image || '',
    })),
    partners: (sitePartners.items || []).map((p) => ({
      ...p,
      logo: typeof p.logo === 'object' ? mediaImage(p.logo) : p.logo || '',
    })),
    testimonials: (siteTestimonials.items || []).map((t) => ({
      ...t,
      avatar: typeof t.avatar === 'object' ? mediaImage(t.avatar) : t.avatar || '',
    })),
  }
  fs.writeFileSync(SITE_FILE, JSON.stringify(sitePayload, null, 2))
  console.log(`[prebuild] OK: site (home/profil/identitas/beasiswa/pmb/magazines/dokumen) -> ${SITE_FILE}`)

  // Sitemap dinamis: artikel + program + halaman statis + kategori
  const SITE_URL = 'https://unidsoe.ac.id'
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml')
  const escXml = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
  const fmtDate = (iso) => {
    if (!iso) return new Date().toISOString().slice(0, 10)
    try { return new Date(iso).toISOString().slice(0, 10) } catch { return new Date().toISOString().slice(0, 10) }
  }
  const urls = []
  const add = (loc, lastmod, changefreq, priority, extra) => urls.push({ loc, lastmod, changefreq, priority, extra })
  add(`${SITE_URL}/`, fmtDate(payload.generatedAt), 'weekly', '1.0')
  add(`${SITE_URL}/artikel`, fmtDate(payload.generatedAt), 'daily', '0.9')
  for (const c of payload.categories) add(`${SITE_URL}/artikel?kategori=${c.slug}`, fmtDate(payload.generatedAt), 'weekly', '0.7')
  for (const a of payload.articles) {
    const lastmod = fmtDate(a.publishedDate || payload.generatedAt)
    const img = a.image ? `\n    <image:image><image:loc>${escXml(a.image)}</image:loc><image:title>${escXml(a.title)}</image:title></image:image>` : ''
    add(`${SITE_URL}/artikel/${a.slug}`, lastmod, 'monthly', '0.8', img)
  }
  for (const p of programsPayload.programs) add(`${SITE_URL}/program-studi/${p.slug}`, fmtDate(payload.generatedAt), 'monthly', '0.7')
  for (const loc of ['/profil', '/identitas', '/majalah', '/beasiswa', '/infopmb', '/asosiasi', '/fasilitas', '/kerja-sama', '/kontak', '/dokumen']) {
    add(`${SITE_URL}${loc}`, fmtDate(payload.generatedAt), 'monthly', '0.6')
  }
  const sitemapXml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n` +
    urls.map((u) => `  <url><loc>${escXml(u.loc)}</loc><lastmod>${u.lastmod}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority>${u.extra || ''}</url>`).join('\n') +
    `\n</urlset>\n`
  fs.writeFileSync(sitemapPath, sitemapXml)
  console.log(`[prebuild] OK: sitemap (${urls.length} URLs) -> ${sitemapPath}`)
}

main().catch((err) => {
  console.error(`[prebuild] GAGAL (${err.message}) — memakai JSON terakhir yang ter-commit.`)
  if (!fs.existsSync(OUT_FILE)) {
    console.error('[prebuild] Tidak ada fallback JSON. Build dibatalkan.')
    process.exit(1)
  }
  process.exit(0)
})
