import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { useLang } from '../context/LangContext';
import { content, type IconKey } from '../i18n/content';
import { MobileIcon, WebIcon, CloudIcon, CodeIcon, ServerIcon, CompassIcon } from './ui/Icons';

const ICON_LG: Record<IconKey, ReactNode> = {
  Mobile:  <MobileIcon  width={72} height={72} />,
  Web:     <WebIcon     width={72} height={72} />,
  Cloud:   <CloudIcon   width={72} height={72} />,
  Code:    <CodeIcon    width={72} height={72} />,
  Server:  <ServerIcon  width={72} height={72} />,
  Compass: <CompassIcon width={72} height={72} />,
};

const SLIDE_MS = 4000;

export function Services() {
  const { lang } = useLang();
  const t = content[lang].services;
  const items = t.items;
  const n = items.length;

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tick, setTick] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % n);
    }, SLIDE_MS);
    timerRef.current = id;
    return () => window.clearInterval(id);
  }, [paused, tick, n]);

  const advance = useCallback((delta: number) => {
    setActive((i) => (i + delta + n) % n);
    setTick((t) => t + 1);
  }, [n]);

  const jump = useCallback((idx: number) => {
    setActive(idx);
    setTick((t) => t + 1);
  }, []);

  const onSideKey = (idx: number) => (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      jump(idx);
    }
  };

  const prevLabel = lang === 'es' ? 'Anterior' : 'Previous';
  const nextLabel = lang === 'es' ? 'Siguiente' : 'Next';
  const codeWord = lang === 'es' ? 'solucion/' : 'solution/';

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">{t.eyebrow}</div>
            <h2 className="section-title">
              {t.titleA} <em>{t.titleB}</em>
            </h2>
          </div>
          <p className="section-lede">{t.lede}</p>
        </div>

        <div
          className="services-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label={t.eyebrow}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <button
            type="button"
            className="carousel-nav carousel-nav--prev"
            aria-label={prevLabel}
            onClick={() => advance(-1)}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>

          <div className="carousel-stage">
            {items.map((item, i) => {
              let d = ((i - active) % n + n) % n;
              if (d > n / 2) d -= n;
              const absD = Math.abs(d);
              const state = d === 0 ? 'is-center' : absD === 1 ? 'is-side' : 'is-hidden';
              const isCenter = d === 0;
              const isSide = absD === 1;

              return (
                <div
                  key={item.title}
                  className={`carousel-item ${state}${isCenter ? ' is-active' : ''}`}
                  style={{
                    ['--d' as string]: d,
                    ['--service-color' as string]: item.color,
                  } as React.CSSProperties}
                  onClick={isSide ? () => jump(i) : undefined}
                  onKeyDown={isSide ? onSideKey(i) : undefined}
                  role={isSide ? 'button' : undefined}
                  tabIndex={isSide ? 0 : -1}
                  aria-hidden={state === 'is-hidden' ? true : undefined}
                  aria-label={isSide ? item.title : undefined}
                >
                  <div className="carousel-card">
                    <div className="service-card-glow" />
                    <div className="carousel-card__media">
                      <div className={`service-icon service-icon--lg service-icon--${item.iconKey.toLowerCase()}`}>
                        {ICON_LG[item.iconKey]}
                        {item.iconKey === 'Code' && (
                          <span className="code-typing" aria-hidden="true">
                            <span className="code-word">{codeWord}</span>
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="carousel-card__body">
                      <div className="service-ix">/ 0{i + 1}</div>
                      <div className="service-title">{item.title}</div>
                      <div className="service-desc">{item.desc}</div>
                      <div className="service-tags">
                        {item.tags.map((tag) => (
                          <span key={tag} className="service-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            className="carousel-nav carousel-nav--next"
            aria-label={nextLabel}
            onClick={() => advance(1)}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        <div className="carousel-dots" role="tablist">
          {items.map((item, i) => (
            <button
              key={item.title}
              type="button"
              className={`carousel-dot${i === active ? ' is-active' : ''}`}
              style={{ ['--service-color' as string]: item.color } as React.CSSProperties}
              aria-label={item.title}
              aria-selected={i === active}
              onClick={() => jump(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
