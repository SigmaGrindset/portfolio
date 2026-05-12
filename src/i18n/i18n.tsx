import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import hr from './hr.json';
import en from './en.json';

export type Locale = 'hr' | 'en';

const dictionaries = { hr, en } as const;
type Dict = typeof hr;

type I18nContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
  t: Dict;
};

const I18nContext = createContext<I18nContextValue | null>(null);
const STORAGE_KEY = 'portfolio-locale';

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'hr';
  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (stored === 'hr' || stored === 'en') return stored;
  return navigator.language.startsWith('hr') ? 'hr' : 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale: setLocaleState,
      toggle: () => setLocaleState((p) => (p === 'hr' ? 'en' : 'hr')),
      t: dictionaries[locale],
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useTranslation must be used within I18nProvider');
  return ctx;
}

export type Loc = { hr: string; en: string };

/**
 * Hook returning a function that picks a localized string from a Loc object.
 * Usage: const l = useL(); l({ hr: 'Pozdrav', en: 'Hello' })
 */
export function useL() {
  const { locale } = useTranslation();
  return (s: Loc) => s[locale];
}
