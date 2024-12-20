import React, { useState, useEffect } from "react";
import { TranslationContext } from "../contexts/TranslationContext";

// Function to load JSON files dynamically
const loadTranslations = async (lang) => {
  try {
    const response = await import(`../translation/locales/${lang}.json`);
    return response.default || response;
  } catch (error) {
    console.error(`Error loading ${lang} translations:`, error);
    return {}; // Return an empty object if error occurs
  }
};

const TranslationProvider = ({ children }) => {
  const [translations, setTranslations] = useState({});
  const [language, setLanguage] = useState("en"); // Default to English

  // Load translations once on mount and when language changes
  useEffect(() => {
    const fetchTranslations = async () => {
      const loadedTranslations = await loadTranslations(language);
      setTranslations(loadedTranslations);
    };
    fetchTranslations();
  }, [language]); // Trigger effect when language changes

  // Function to switch languages
  const switchLanguage = () => {
    if (language === "en") {
      setLanguage("sk");
    } else {
      setLanguage("en");
    }
  };

  const handlerMap = {
    switchLanguage,
    t: translations,
	language
  };
  return (
    <TranslationContext.Provider value={handlerMap}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationProvider;
