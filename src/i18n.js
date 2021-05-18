import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  se: {
    translation: {
      'appTitle': "FALSKA<span id='question'>?</span>NYHETER"
    }
  },

  en: {
    translation: {
      'appTitle': "FAKE<span id='question'>?</span>NEWS"
    }
  }
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