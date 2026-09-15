import { createI18n } from 'vue-i18n'
import id from './locales/id.js'
import en from './locales/en.js'

const STORAGE_KEY = 'unidsoe-locale'

export function getInitialLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'id') return saved
  } catch { /* abaikan */ }
  return 'id'
}

export function applyLocaleMeta(locale) {
  try {
    document.documentElement.lang = locale === 'en' ? 'en' : 'id'
  } catch { /* abaikan */ }
  try {
    localStorage.setItem(STORAGE_KEY, locale)
  } catch { /* abaikan */ }
}

const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'id',
  messages: { id, en },
})

applyLocaleMeta(i18n.global.locale.value)

export function useLocale() {
  const { locale } = i18n.global
  const setLocale = (l) => {
    locale.value = l === 'en' ? 'en' : 'id'
    applyLocaleMeta(locale.value)
  }
  return { locale, setLocale }
}

export default i18n
