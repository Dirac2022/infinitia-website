import { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { useLang } from '../context/LangContext';
import { content, type Lang } from '../i18n/content';

import { NAV_HREFS } from '../constants';

function Logo() {
  return (
    <svg viewBox="0 0 32 32" fill="none" width={24} height={24} aria-hidden="true">
      <path
        d="M6 16c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6Zm14 0c0-3.3 2.7-6 6-6"
        stroke="url(#logo-g1)"
        strokeWidth={2.4}
        strokeLinecap="round"
      />
      <path
        d="M20 16c0 3.3 2.7 6 6 6"
        stroke="url(#logo-g2)"
        strokeWidth={2.4}
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="logo-g1" x1="6" y1="10" x2="26" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6C63FF" />
          <stop offset="1" stopColor="#00D4FF" />
        </linearGradient>
        <linearGradient id="logo-g2" x1="20" y1="16" x2="26" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00D4FF" />
          <stop offset="1" stopColor="#00E5A0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

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
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
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
