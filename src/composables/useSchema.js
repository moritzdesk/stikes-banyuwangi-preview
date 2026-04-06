import { computed } from 'vue'
import { useRoute } from 'vue-router'

const siteUrl = 'https://unidsoe.ac.id' // Update dengan domain actual

export function useOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Unidsoe',
    alternateName: 'Universitas Dr. Soekardjo',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'Unidsoe (Universitas Dr. Soekardjo) adalah institusi pendidikan tinggi kesehatan yang berkomitmen menghasilkan tenaga kesehatan profesional berkualitas dengan akreditasi institusi "Baik" dan program studi S1 Keperawatan terakreditasi "Baik Sekali".',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Letkol Istiqlah No. 109',
      addressLocality: 'Singojuruh',
      addressRegion: 'Banyuwangi',
      postalCode: '68464',
      addressCountry: 'ID'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+62-333-424-123',
      contactType: 'Customer Service',
      email: 'info@unidsoe.ac.id'
    },
    sameAs: [
      // Social media links jika ada
    ],
    accreditation: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Accreditation',
      recognizedBy: {
        '@type': 'Organization',
        name: 'BAN-PT'
      }
    }
  }
}

export function useArticleSchema(article) {
  if (!article) return null
  
  const route = useRoute()

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.image || `${siteUrl}/og-image.jpg`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Person',
      name: article.author || 'Unidsoe'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Unidsoe',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}${route.path}`
    },
    articleSection: article.category,
    keywords: article.tags?.join(', ') || ''
  }
}

export function useBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

export function useCourseSchema(course) {
  if (!course) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Unidsoe',
      url: siteUrl
    },
    educationalCredentialAwarded: course.degree || 'Sarjana',
    courseCode: course.code,
    accreditation: course.accreditation ? {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Accreditation',
      recognizedBy: {
        '@type': 'Organization',
        name: 'BAN-PT'
      }
    } : undefined
  }
}

export function useWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Unidsoe',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }
}

export function useLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Unidsoe',
    alternateName: 'Universitas Dr. Soekardjo',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/og-image.jpg`,
    description: 'Unidsoe (Universitas Dr. Soekardjo) adalah institusi pendidikan tinggi kesehatan yang berkomitmen menghasilkan tenaga kesehatan profesional berkualitas dengan akreditasi institusi "Baik" dan program studi S1 Keperawatan terakreditasi "Baik Sekali".',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Letkol Istiqlah No. 109',
      addressLocality: 'Singojuruh',
      addressRegion: 'Banyuwangi',
      postalCode: '68464',
      addressCountry: 'ID'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-8.2195',
      longitude: '114.3694'
    },
    telephone: '+62-333-424-123',
    email: 'info@unidsoe.ac.id',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '08:00',
      closes: '16:00'
    },
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: 'Banyuwangi'
    }
  }
}

/**
 * Event Schema - Untuk acara/event seperti seminar, workshop, dll
 * @param {Object} event - Event data
 * @returns {Object|null} Event schema
 */
export function useEventSchema(event) {
  if (!event) return null

  const route = useRoute()

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name || event.title,
    description: event.description || event.excerpt,
    startDate: event.startDate || event.date,
    endDate: event.endDate || event.date,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: event.location?.name || 'Unidsoe',
      address: {
        '@type': 'PostalAddress',
        streetAddress: event.location?.address || 'Jl. Letkol Istiqlah No. 109',
        addressLocality: event.location?.city || 'Singojuruh',
        addressRegion: event.location?.region || 'Banyuwangi',
        postalCode: event.location?.postalCode || '68464',
        addressCountry: 'ID'
      }
    },
    organizer: {
      '@type': 'Organization',
      name: 'Unidsoe',
      url: siteUrl
    },
    image: event.image || `${siteUrl}/og-image.jpg`,
    url: event.url || `${siteUrl}${route.path}`,
    offers: event.offers ? {
      '@type': 'Offer',
      price: event.offers.price || '0',
      priceCurrency: event.offers.currency || 'IDR',
      availability: event.offers.availability || 'https://schema.org/InStock',
      url: event.offers.url || `${siteUrl}${route.path}`
    } : undefined
  }
}

/**
 * Person Schema - Untuk pimpinan/dosen/staff
 * @param {Object} person - Person data
 * @returns {Object|null} Person schema
 */
export function usePersonSchema(person) {
  if (!person) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.jobTitle || person.position,
    worksFor: {
      '@type': 'EducationalOrganization',
      name: 'Unidsoe',
      url: siteUrl
    },
    description: person.description || person.bio,
    image: person.image || `${siteUrl}/logo.png`,
    email: person.email,
    telephone: person.telephone,
    address: person.address ? {
      '@type': 'PostalAddress',
      ...person.address
    } : undefined,
    alumniOf: person.alumniOf ? person.alumniOf.map(org => ({
      '@type': 'EducationalOrganization',
      name: org
    })) : undefined,
    award: person.awards || undefined,
    knowsAbout: person.expertise || undefined
  }
}

/**
 * FAQPage Schema - Untuk FAQ section
 * @param {Array} faqs - Array of FAQ objects {question, answer}
 * @returns {Object|null} FAQPage schema
 */
export function useFAQPageSchema(faqs) {
  if (!faqs || faqs.length === 0) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

/**
 * HowTo Schema - Untuk panduan/langkah-langkah
 * @param {Object} howTo - HowTo data
 * @returns {Object|null} HowTo schema
 */
export function useHowToSchema(howTo) {
  if (!howTo) return null

  const route = useRoute()

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name || howTo.title,
    description: howTo.description,
    image: howTo.image || `${siteUrl}/og-image.jpg`,
    totalTime: howTo.totalTime, // Format: PT1H30M (1 hour 30 minutes)
    estimatedCost: howTo.estimatedCost ? {
      '@type': 'MonetaryAmount',
      currency: howTo.estimatedCost.currency || 'IDR',
      value: howTo.estimatedCost.value
    } : undefined,
    tool: howTo.tools?.map(tool => ({
      '@type': 'HowToTool',
      name: tool
    })) || undefined,
    supply: howTo.supplies?.map(supply => ({
      '@type': 'HowToSupply',
      name: supply
    })) || undefined,
    step: howTo.steps?.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name || step.title,
      text: step.text || step.description,
      image: step.image,
      url: step.url || `${siteUrl}${route.path}#step-${index + 1}`
    })) || []
  }
}

/**
 * VideoObject Schema - Untuk video content
 * @param {Object} video - Video data
 * @returns {Object|null} VideoObject schema
 */
export function useVideoObjectSchema(video) {
  if (!video) return null

  const route = useRoute()

  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name || video.title,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl || video.thumbnail || `${siteUrl}/og-image.jpg`,
    uploadDate: video.uploadDate || video.date,
    duration: video.duration, // Format: PT1H30M (1 hour 30 minutes)
    contentUrl: video.contentUrl || video.url,
    embedUrl: video.embedUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Unidsoe',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`
      }
    }
  }
}

/**
 * Review Schema - Untuk testimoni/review
 * @param {Object|Array} reviews - Review data (single review or array of reviews)
 * @returns {Object|Array|null} Review schema
 */
export function useReviewSchema(reviews) {
  if (!reviews) return null

  // If single review object
  if (!Array.isArray(reviews)) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Review',
      itemReviewed: {
        '@type': 'EducationalOrganization',
        name: 'Unidsoe',
        url: siteUrl
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: reviews.rating || 5,
        bestRating: reviews.bestRating || 5,
        worstRating: reviews.worstRating || 1
      },
      author: {
        '@type': 'Person',
        name: reviews.author || reviews.name
      },
      reviewBody: reviews.reviewBody || reviews.text || reviews.comment,
      datePublished: reviews.datePublished || reviews.date
    }
  }

  // If array of reviews
  return reviews.map(review => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'EducationalOrganization',
      name: 'Unidsoe',
      url: siteUrl
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating || 5,
      bestRating: review.bestRating || 5,
      worstRating: review.worstRating || 1
    },
    author: {
      '@type': 'Person',
      name: review.author || review.name
    },
    reviewBody: review.reviewBody || review.text || review.comment,
    datePublished: review.datePublished || review.date
  }))
}

