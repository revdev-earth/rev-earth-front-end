import i18next from "i18next"
import Backend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

import english from "./english"
import spanish from "./spanish"
import deutsch from "./deutsch"

// configuración de i18next
i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },

    debug: true,

    fallbackLng: ["es", "de", "en", "??"],

    resources: {
      en: {
        translation: english
      },
      es: {
        translation: spanish
      },
      de: {
        translation: deutsch
      }
    }
  })

export type LanguagesEsperados = "es" | "de" | "en"

// guarda el idioma actual en localStorage
const saveLanguageToLocalStorage = (language: LanguagesEsperados) => {
  localStorage.setItem("language", language)
}

// obtiene el idioma guardado en localStorage
const getLanguageFromLocalStorage = () => {
  return localStorage.getItem("language")
}

// detecta el idioma del navegador y lo usa como idioma predeterminado
i18next.on("languageDetection", () => {
  const savedLanguage = getLanguageFromLocalStorage()
  if (savedLanguage) {
    i18next.changeLanguage(savedLanguage)
  }
})

// obtiene el idioma actual de i18next
const currentLanguage = i18next.language

// si no hay un idioma guardado en localStorage, utiliza el idioma predeterminado de i18next
if (!getLanguageFromLocalStorage()) {
  saveLanguageToLocalStorage(currentLanguage as LanguagesEsperados)
}

// cambia el idioma manualmente y lo guarda en localStorage
export const changeLanguage = (language: LanguagesEsperados) => {
  i18next.changeLanguage(language)
  saveLanguageToLocalStorage(language)
}

// ejemplo de uso de la función changeLanguage
// changeLanguage("es")
