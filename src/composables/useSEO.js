import { useHead } from '@unhead/vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const siteName = 'STIKES Banyuwangi'
const siteUrl = 'https://stikesbanyuwangi.ac.id' // Update dengan domain actual
const defaultImage = `${siteUrl}/og-image.jpg` // Update dengan OG image actual

export function useSEO(options = {}) {
  const route = useRoute()
  
  const {
    title,
    description,
    image = defaultImage,
    type = 'website',
    keywords = [],
    noindex = false,
    canonical
  } = options

  const fullTitle = computed(() => {
    if (title) {
      return title.includes(siteName) ? title : `${title} | ${siteName}`
    }
    return siteName
  })

  const canonicalUrl = computed(() => {
    if (canonical) return canonical
    return `${siteUrl}${route.path}`
  })

  const metaKeywords = computed(() => {
    const defaultKeywords = [
      'STIKES Banyuwangi',
      'Sekolah Tinggi Ilmu Kesehatan Banyuwangi',
      'Pendidikan Kesehatan',
      'Keperawatan',
      'Kebidanan',
      'Gizi',
      'Farmasi',
      'Banyuwangi',
      'Jawa Timur'
    ]
    return [...defaultKeywords, ...keywords].join(', ')
  })

  useHead({
    title: () => fullTitle.value,
    meta: [
      // Basic Meta
      {
        name: 'description',
        content: description || 'STIKES Banyuwangi adalah institusi pendidikan tinggi kesehatan yang berkomitmen menghasilkan tenaga kesehatan profesional berkualitas dengan akreditasi institusi "Baik" dan program studi S1 Keperawatan terakreditasi "Baik Sekali".'
      },
      {
        name: 'keywords',
        content: () => metaKeywords.value
      },
      {
        name: 'robots',
        content: noindex ? 'noindex, nofollow' : 'index, follow'
      },
      {
        name: 'author',
        content: siteName
      },
      {
        name: 'language',
        content: 'id-ID'
      },

      // Open Graph
      {
        property: 'og:title',
        content: () => fullTitle.value
      },
      {
        property: 'og:description',
        content: description || 'STIKES Banyuwangi - Sekolah Tinggi Ilmu Kesehatan Banyuwangi'
      },
      {
        property: 'og:image',
        content: image
      },
      {
        property: 'og:url',
        content: () => canonicalUrl.value
      },
      {
        property: 'og:type',
        content: type
      },
      {
        property: 'og:site_name',
        content: siteName
      },
      {
        property: 'og:locale',
        content: 'id_ID'
      },

      // Twitter Card
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:title',
        content: () => fullTitle.value
      },
      {
        name: 'twitter:description',
        content: description || 'STIKES Banyuwangi - Sekolah Tinggi Ilmu Kesehatan Banyuwangi'
      },
      {
        name: 'twitter:image',
        content: image
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: () => canonicalUrl.value
      }
    ]
  })
}

