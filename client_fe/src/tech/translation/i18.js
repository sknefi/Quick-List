import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './locales/en.json';
import sk from './locales/sk.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      sk: { translation: sk },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export const changeLanguage = (lang) => {
  i18n.changeLanguage(lang);
};

export default i18n;
