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
const SWIPE_THRESHOLD = 60;

export function Services() {
  const { lang } = useLang();
  const t = content[lang].services;
  const items = t.items;
  const n = items.length;

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tick, setTick] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);
  const timerRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const isDraggingRef = useRef(false);
  const isHorizontalRef = useRef<boolean | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const isTouchCarousel = useRef(
    typeof window !== 'undefined' && window.matchMedia('(max-width: 820px)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 820px)');
    const handler = (e: MediaQueryListEvent) => { isTouchCarousel.current = e.matches; };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const onMove = (e: TouchEvent) => {
      if (!isTouchCarousel.current || !isDraggingRef.current || touchStartX.current === null || touchStartY.current === null) return;
      const dx = e.touches[0].clientX - touchStartX.current;
      const dy = e.touches[0].clientY - touchStartY.current;
      if (isHorizontalRef.current === null) {
        isHorizontalRef.current = Math.abs(dx) > Math.abs(dy);
      }
      if (!isHorizontalRef.current) return;
      e.preventDefault();
      setDragDelta(dx);
    };
    stage.addEventListener('touchmove', onMove, { passive: false });
    return () => stage.removeEventListener('touchmove', onMove);
  }, []);

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

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    if (!isTouchCarousel.current) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isDraggingRef.current = true;
    isHorizontalRef.current = null;
    setPaused(true);
  }, []);

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    isDraggingRef.current = false;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    touchStartY.current = null;
    isHorizontalRef.current = null;
    if (Math.abs(dx) > SWIPE_THRESHOLD) advance(dx < 0 ? 1 : -1);
    setDragDelta(0);
    setPaused(false);
  }, [advance]);

  const onSideKey = (idx: number) => (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      jump(idx);
    }
  };

  const prevLabel = lang === 'es' ? 'Anterior' : 'Previous';
  const nextLabel = lang === 'es' ? 'Siguiente' : 'Next';
  const codeWord = lang === 'es' ? 'solucion/' : 'solution/';

  const cardWidth = stageRef.current?.offsetWidth ?? 390;
  const isDragging = dragDelta !== 0;
  const peekIdx = isDragging
    ? dragDelta < 0 ? (active + 1) % n : (active - 1 + n) % n
    : -1;
  const dragProgress = Math.min(Math.abs(dragDelta) / (cardWidth * 0.45), 1);

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

          <div
            ref={stageRef}
            className="carousel-stage"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {items.map((item, i) => {
              let d = ((i - active) % n + n) % n;
              if (d > n / 2) d -= n;
              const absD = Math.abs(d);
              const state = d === 0 ? 'is-center' : absD === 1 ? 'is-side' : 'is-hidden';
              const isCenter = d === 0;
              const isSide = absD === 1;

              let dragStyle: React.CSSProperties = {};
              if (isDragging) {
                if (isCenter) {
                  dragStyle = { transform: `translateX(${dragDelta}px)`, transition: 'none' };
                } else if (i === peekIdx) {
                  const startX = dragDelta < 0 ? cardWidth : -cardWidth;
                  dragStyle = {
                    transform: `translateX(${startX + dragDelta}px)`,
                    opacity: 0.15 + dragProgress * 0.5,
                    filter: `blur(${Math.max(0, 4 - dragProgress * 3.5)}px)`,
                    transition: 'none',
                  };
                }
              }

              return (
                <div
                  key={item.title}
                  className={`carousel-item ${state}${isCenter ? ' is-active' : ''}`}
                  style={{
                    ['--d' as string]: d,
                    ['--service-color' as string]: item.color,
                    ...dragStyle,
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
