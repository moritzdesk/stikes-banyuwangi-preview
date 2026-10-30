/**
 * Data layer konten situs (hero, profil, identitas) — dari JSON hasil prebuild
 * (data Globals Payload CMS). Sumber: src/data/site.generated.json.
 */
import generated from '../data/site.generated.json'

export function getHomeSlides() {
  return generated.home?.slides || []
}

export function getHomeCta() {
  return generated.home?.cta || []
}

export function getHomeAbout() {
  return (
    generated.home?.about || { badge: '', title: '', image: '', paragraph1: '', paragraph2: '', quote: '', points: [] }
  )
}

export function getProfil() {
  return (
    generated.profil || { sejarah: '', visi: '', misi: [], tujuan: [], sasaran: [], namaKetua: '', sambutan: '', fotoKetua: '' }
  )
}

export function getIdentitas() {
  return generated.identitas || {}
}

export function getBeasiswa() {
  return generated.beasiswa || { title: '', scholarships: [] }
}

export function getInfoPmb() {
  return generated.infoPmb || { title: '', requirements: [], steps: [], registrationPaths: [] }
}

export function getMagazines() {
  return generated.magazines || { title: '', magazines: [] }
}

export function getDocuments() {
  return generated.documents || []
}

function siteSettings() {
  return generated.siteSettings || {}
}

export function getContact() {
  return siteSettings().contact || {}
}

export function getAchievements() {
  return siteSettings().achievements || { sectionTitle: '', items: [] }
}

export function getAssociations() {
  return siteSettings().associations || { sectionTitle: '', description: '', items: [] }
}

export function getFacilities() {
  return siteSettings().facilities || []
}

export function getPartners() {
  return siteSettings().partners || []
}

export function getTestimonials() {
  return siteSettings().testimonials || []
}
