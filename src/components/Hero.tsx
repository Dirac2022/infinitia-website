import { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Terminal } from './Terminal';
import { useLang } from '../context/LangContext';
import { content } from '../i18n/content';

const Typewriter = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), 2500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 30 : 60);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, words]);

  useEffect(() => {
    const blinkTimeout = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkTimeout);
  }, []);

  return (
    <>
      {words[index].substring(0, subIndex)}
      <span className={`inline-block w-[3px] h-[0.9em] align-baseline ml-1 bg-fg-muted transition-opacity duration-100 ${blink ? 'opacity-100' : 'opacity-0'}`} />
    </>
  );
};

interface HeroProps {
  onOpenContact: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  const { lang } = useLang();
  const t = content[lang].hero;

  const words = lang === 'es' ? [
    t.titleMuted,
    "con calidad enterprise.",
    "con impacto medible.",
    "con código escalable."
  ] : [
    t.titleMuted,
    "with enterprise quality.",
    "with measurable impact.",
    "with scalable code."
  ];

  const longestWord = words.reduce((a, b) => a.length > b.length ? a : b, "");

  return (
    <section className="hero-section" id="top">
      <div className="hero-bg" />
      <div className="hero-glow" />

      <div className="relative z-[2] w-full max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 items-center lg:grid-cols-[1.1fr_1fr] lg:gap-[60px]">

          <div className="flex flex-col">
            <div className="hero-tag">
              <span className="hero-tag-dot" />
              <span>{t.tag}</span>
            </div>

            <div className="grid">
              {/* Molde invisible que ocupa el espacio de la oración más larga */}
              <h1 className="col-start-1 row-start-1 invisible select-none pointer-events-none text-[clamp(32px,5.5vw,80px)] font-semibold tracking-[-0.035em] leading-[1.0] max-w-[800px] mb-6 lg:mb-8 lg:leading-[0.98]" aria-hidden="true">
                {t.titleStart}{' '}
                <span className="italic font-medium">{t.titleAccent}</span>{' '}
                <span className="font-medium">{longestWord}</span>
              </h1>
              {/* Título real animado encima */}
              <h1 className="col-start-1 row-start-1 text-[clamp(32px,5.5vw,80px)] font-semibold tracking-[-0.035em] leading-[1.0] max-w-[800px] mb-6 lg:mb-8 lg:leading-[0.98]">
                {t.titleStart}{' '}
                <span className="text-accent italic font-medium">{t.titleAccent}</span>{' '}
                <span className="text-fg-muted font-medium">
                  <Typewriter words={words} />
                </span>
              </h1>
            </div>

            <p className="text-[15px] sm:text-[17px] text-fg-secondary max-w-[520px] leading-[1.55] mb-8 lg:mb-10">
              {t.sub}
            </p>


            <div className="flex gap-3 flex-wrap mb-10 lg:mb-16">
              <Button variant="primary" onClick={onOpenContact}>
                {t.ctaPrimary}
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t.ctaSecondary}
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}
