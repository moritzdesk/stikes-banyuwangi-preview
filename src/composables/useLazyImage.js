import { ref, onMounted } from 'vue'

export function useLazyImage(src, options = {}) {
  const {
    root = null,
    rootMargin = '50px',
    threshold = 0.1
  } = options

  const imageSrc = ref(null)
  const isLoaded = ref(false)
  const error = ref(null)

  const loadImage = () => {
    const img = new Image()
    img.onload = () => {
      imageSrc.value = src
      isLoaded.value = true
    }
    img.onerror = () => {
      error.value = new Error('Failed to load image')
    }
    img.src = src
  }

  onMounted(() => {
    // Check if browser supports native lazy loading
    if ('loading' in HTMLImageElement.prototype) {
      // Use native lazy loading
      imageSrc.value = src
      isLoaded.value = true
    } else {
      // Use Intersection Observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadImage()
              observer.disconnect()
            }
          })
        },
        {
          root,
          rootMargin,
          threshold
        }
      )

      // Observe a placeholder element
      const placeholder = document.createElement('div')
      observer.observe(placeholder)

      return () => {
        observer.disconnect()
      }
    }
  })

  return {
    imageSrc,
    isLoaded,
    error
  }
}

