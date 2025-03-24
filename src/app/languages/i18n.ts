// Translations
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "./en.json";
import ES from "./es.json";
import FR from "./fr.json";

const englishVariants = {
  EN,
  "EN-GB": EN,
  "EN-US": EN,
  "EN-AU": EN,
  "EN-CA": EN,
  "EN-NZ": EN,
  "EN-IN": EN,
  "EN-IE": EN,
};

const resources = {
  ...englishVariants,
  ES,
  FR,
  };

export const enum Language {
  EN = "EN",
  ES = "ES",
  FR = "FR",
}

export const dropdownLanguageList = [
  {
    key: Language.EN,
    label: "English",
  },
  {
    key: Language.ES,
    label: "Spanish",
  },
  {
    key: Language.FR,
    label: "French",
  },
];

i18n.use(initReactI18next).init({
  resources,
  lng: "EN",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
