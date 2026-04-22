import { Button } from './ui/Button';
import { Terminal } from './Terminal';
import { useLang } from '../context/LangContext';
import { content } from '../i18n/content';

interface HeroProps {
  onOpenContact: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  const { lang } = useLang();
  const t = content[lang].hero;

  return (
    <section className="hero-section" id="top">
      <div className="hero-bg" />
      <div className="hero-glow" />

      <div className="relative z-[2] w-full max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-[1.1fr_1fr] gap-[60px] items-center">

          <div className="flex flex-col">
            <div className="hero-tag">
              <span className="hero-tag-dot" />
              <span>{t.tag}</span>
            </div>

            <h1 className="text-[clamp(38px,5.5vw,80px)] font-semibold tracking-[-0.035em] leading-[0.98] max-w-[800px] mb-8">
              {t.titleStart}{' '}
              <span className="text-accent italic font-medium">{t.titleAccent}</span>{' '}
              <span className="text-fg-muted font-medium">{t.titleMuted}</span>
            </h1>

            <p className="text-[17px] text-fg-secondary max-w-[520px] leading-[1.55] mb-10">
              {t.sub}
            </p>

            <div className="flex gap-3 flex-wrap mb-16">
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

          <div>
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}
