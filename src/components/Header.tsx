import { useState, useEffect } from 'react';
import { Button } from './ui/Button';

import { NAV_LINKS } from '../constants';

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

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-[100] py-4 transition-all duration-200',
        scrolled
          ? 'bg-canvas/80 backdrop-blur-md border-b border-border-subtle'
          : '',
      ].join(' ')}
    >
      <div className="w-full max-w-[1240px] mx-auto px-8 flex items-center justify-between gap-8">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-semibold text-fg-primary tracking-[-0.02em]"
        >
          <Logo />
          <span>infinitia</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-fg-secondary hover:text-fg-primary transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        <Button
          variant="primary"
          className="py-2.5 px-4 text-[13px]"
          onClick={() => { window.location.href = 'mailto:hola@infinitia.io'; }}
        >
          Agendar reunion →
        </Button>
      </div>
    </header>
  );
}
