import { createContext, useContext, useState, type ReactNode } from 'react';
import { type Lang } from '../i18n/content';

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      return (localStorage.getItem('infinitia-lang') as Lang) || 'es';
    } catch {
      return 'es';
    }
  });

  const setLang = (next: Lang) => {
    setLangState(next);
    try { localStorage.setItem('infinitia-lang', next); } catch { /* noop */ }
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside LangProvider');
  return ctx;
}
