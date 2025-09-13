import i18n from "i18next";
import { useCounter } from 'react-use'; // Option B
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

// Language configurations
const languages = {
  en: { nativeName: 'English', dir: 'ltr' },
  hi: { nativeName: 'हिन्दी', dir: 'ltr' },
  kn: { nativeName: 'ಕನ್ನಡ', dir: 'ltr' },
  mr: { nativeName: 'मराठी', dir: 'ltr' }
};

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: Object.keys(languages),
    
    ns: [
      "common", 
      "hero", 
      "about", 
      "events", 
      "projects", 
      "highlights", 
      "footer",
      "navigation",
      "errors"
    ],
    defaultNS: "common",
    
    detection: {
      order: ['querystring', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'sessionStorage'],
      excludeCacheFor: ['cimode']
    },
    
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
      requestOptions: {
        cache: 'default',
        credentials: 'same-origin'
      }
    },
    
    interpolation: { 
      escapeValue: false,
      format: (value, format, lng) => {
        if (format === 'uppercase') return value.toUpperCase();
        if (format === 'lowercase') return value.toLowerCase();
        return value;
      }
    },
    
    react: {
      useSuspense: true,
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i']
    },
    
    debug: import.meta.env.DEV,
    
    load: 'languageOnly',
    cleanCode: true,
    
    // Custom functions
    parseMissingKeyHandler: (key) => {
      if (import.meta.env.DEV) {
        console.warn(`Missing translation key: ${key}`);
      }
      return key;
    }
  });

// Add direction support
i18n.on('languageChanged', (lng) => {
  const language = languages[lng as keyof typeof languages];
  document.documentElement.setAttribute('dir', language?.dir || 'ltr');
  document.documentElement.setAttribute('lang', lng);
});

// Export language configurations
export { languages };
export default i18n;
