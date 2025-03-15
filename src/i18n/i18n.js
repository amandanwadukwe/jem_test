import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';
import translationAR from './locales/ar/translation.json';
import translationPT from './locales/pt/translation.json';
import translationSO from './locales/so/translation.json';
import translationES from './locales/es/translation.json';
import translationYO from './locales/yo/translation.json';

const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
  ar: { translation: translationAR },
  pt: { translation: translationPT },
  so: { translation: translationSO },
  es: { translation: translationES },
  yo: { translation: translationYO },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // Default language fallback
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'], // Preferred language detection order
      caches: ['localStorage'], // Cache the language in localStorage
    },
  });

export default i18n;
