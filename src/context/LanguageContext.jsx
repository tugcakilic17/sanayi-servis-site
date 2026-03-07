import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const SOURCE_LANGUAGE = 'tr';
const DEFAULT_LANGUAGE = 'tr';
const STORAGE_KEY = 'site-language';
const SCRIPT_ID = 'google-translate-script';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
  { code: 'de', label: 'Deutsch' },
  { code: 'ar', label: 'العربية' },
  { code: 'fr', label: 'Français' },
  { code: 'it', label: 'Italiano' },
  { code: 'zh-CN', label: '中文' },
  { code: 'ja', label: '日本語' },
  { code: 'uk', label: 'Українська' },
  { code: 'tr', label: 'Türkçe' },
  { code: 'es', label: 'Español' },
  { code: 'bg', label: 'Български' },
  { code: 'ro', label: 'Română' },
  { code: 'pl', label: 'Polski' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'cs', label: 'Čeština' },
  { code: 'pt', label: 'Português' },
];

const LanguageContext = createContext(null);

const getInitialLanguage = () => {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;

  const savedLanguage = localStorage.getItem(STORAGE_KEY);
  const isValidSavedLanguage = languages.some((lang) => lang.code === savedLanguage);
  const initialLanguage = isValidSavedLanguage ? savedLanguage : DEFAULT_LANGUAGE;

  localStorage.setItem(STORAGE_KEY, initialLanguage);
  setTranslateCookie(initialLanguage);
  return initialLanguage;
};

const setTranslateCookie = (targetLanguage) => {
  const cookieValue = `/tr/${targetLanguage}`;
  document.cookie = `googtrans=${cookieValue}; path=/; max-age=31536000`;

  const hostname = window.location.hostname;
  const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';
  if (hostname && !isLocalhost) {
    document.cookie = `googtrans=${cookieValue}; path=/; domain=${hostname}; max-age=31536000`;
  }
};

const triggerTranslate = (targetLanguage) => {
  const combo = document.querySelector('.goog-te-combo');
  if (!combo) return false;

  if (combo.value !== targetLanguage) {
    combo.value = targetLanguage;
    combo.dispatchEvent(new Event('change'));
  }

  return true;
};

export function LanguageProvider({ children }) {
  const [selectedLanguage, setSelectedLanguage] = useState(getInitialLanguage);
  const [isWidgetReady, setIsWidgetReady] = useState(false);

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;

      new window.google.translate.TranslateElement(
        {
          pageLanguage: SOURCE_LANGUAGE,
          includedLanguages: languages.map((lang) => lang.code).join(','),
          autoDisplay: false,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );

      setIsWidgetReady(true);
    };

    if (window.google?.translate?.TranslateElement) {
      window.googleTranslateElementInit();
      return undefined;
    }

    const existingScript = document.getElementById(SCRIPT_ID);
    if (existingScript) return undefined;

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      window.googleTranslateElementInit = undefined;
    };
  }, []);

  useEffect(() => {
    if (!isWidgetReady) return undefined;

    setTranslateCookie(selectedLanguage);
    let attempts = 0;

    const intervalId = window.setInterval(() => {
      attempts += 1;
      const done = triggerTranslate(selectedLanguage);
      if (done || attempts > 20) {
        window.clearInterval(intervalId);
      }
    }, 150);

    return () => window.clearInterval(intervalId);
  }, [isWidgetReady, selectedLanguage]);

  const changeLanguage = useCallback((languageCode) => {
    const exists = languages.some((language) => language.code === languageCode);
    if (!exists) return;
    if (languageCode === selectedLanguage) return;

    setSelectedLanguage(languageCode);
    localStorage.setItem(STORAGE_KEY, languageCode);
    setTranslateCookie(languageCode);
    const translatedImmediately = triggerTranslate(languageCode);

    // Fallback: bazı tarayıcı/ortamlarda widget tetiklemesi atlanabiliyor.
    // Cookie set edildiği için sayfa yenileme ile çeviri kesin uygulanır.
    if (!translatedImmediately) {
      window.location.reload();
    }
  }, [selectedLanguage]);

  const value = useMemo(
    () => ({
      selectedLanguage,
      changeLanguage,
      languages,
    }),
    [selectedLanguage, changeLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      <div id="google_translate_element" className="google-translate-hidden" aria-hidden="true" />
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
