import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import se from './translations/se'
import en from './translations/en'

const resources = {
  se: se,
  en: en
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lgn: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: true, //   <---- this will do the magic
    },
  })


export default i18n