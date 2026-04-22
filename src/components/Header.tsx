import { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { useLang } from '../context/LangContext';
import { content, type Lang } from '../i18n/content';

import { NAV_HREFS } from '../constants';

import { Logo } from './Logo';

function LangToggle() {
  const { lang, setLang } = useLang();
  const langs: Lang[] = ['es', 'en'];

  return (
    <div className="flex font-mono text-[11px] tracking-[0.08em] border border-border-subtle rounded-md overflow-hidden">
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={[
            'px-2.5 py-1.5 uppercase transition-all duration-150 cursor-pointer',
            lang === l
              ? 'bg-node text-fg-primary'
              : 'text-fg-muted hover:text-fg-secondary',
          ].join(' ')}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

interface HeaderProps {
  onOpenContact: () => void;
}

export function Header({ onOpenContact }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const { lang } = useLang();
  const t = content[lang];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-200',
        scrolled ? 'bg-canvas/90 backdrop-blur-md border-b border-border-subtle' : '',
      ].join(' ')}
    >
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-semibold text-fg-primary tracking-[-0.02em] shrink-0"
        >
          <Logo />
          <span>infinitia</span>
        </a>

        <nav className="hidden md:flex items-center gap-12">
          {NAV_HREFS.map(({ key, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-fg-secondary hover:text-fg-primary transition-colors duration-200"
            >
              {t.nav[key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LangToggle />
          <Button
            variant="primary"
            className="py-2 px-3 text-[12px] md:py-2.5 md:px-4 md:text-[13px]"
            onClick={onOpenContact}
          >
            {t.nav.cta}
          </Button>
        </div>
      </div>
    </header>
  );
}
