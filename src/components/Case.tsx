import React, { useState, useEffect, useRef } from 'react';
import { useLang } from '../context/LangContext';

const getCasesData = (lang: string) => {
  if (lang === 'en') {
    return [
      {
        id: 'ajemex',
        title: 'AJE',
        titleEm: 'MEX',
        fullName: 'AJEMEX',
        desc: 'We partnered with <strong>AJEMEX</strong> to migrate their <strong>Legacy Systems</strong>, optimizing operations and empowering data-driven decision making with modern, scalable, and monitorable software. This case highlights how artificial intelligence applied to real business scenarios generates <strong>measurable profit</strong>, not just theoretical promises.',
        tags: ['Applied AI', 'Automation', 'Data Engineering', 'Big Data', 'Legacy Systems'],
        period: '2025 — Present',
        label: 'Featured Client',
        partner: 'Active Partner'
      },
      {
        id: 'emirzin',
        title: 'EMIR',
        titleEm: 'ZIN',
        fullName: 'EMIRZIN',
        desc: 'We collaborated with <strong>EMIRZIN</strong> to architect highly scalable corporate infrastructures. By modernizing their digital core, we ensured agile operational workflows and integrated systems designed for mission-critical high availability.',
        tags: ['Corporate Development', 'Cloud', 'Integrated Systems'],
        period: '2025 — Present',
        label: 'Featured Client',
        partner: 'Active Partner'
      },
      {
        id: 'efletexia',
        title: 'EFLE',
        titleEm: 'TEXIA',
        fullName: 'EFLETEXIA',
        desc: 'We support <strong>EFLETEXIA</strong> in the modernization of their corporate digital tools, delivering efficient, tailored software solutions that drive sustainable growth and provide measurable automation for their daily transactional processes.',
        tags: ['Enterprise Software', 'Optimization', 'Automation'],
        period: '2024 — Present',
        label: 'Featured Client',
        partner: 'Active Partner'
      }
    ];
  }

  // default 'es'
  return [
    {
      id: 'ajemex',
      title: 'AJE',
      titleEm: 'MEX',
      fullName: 'AJEMEX',
      desc: 'Colaboramos con <strong>AJEMEX</strong> en la compleja migración de sus <strong>Sistemas Legacy</strong>. El rediseño hacia arquitecturas modernas, escalables y monitorizables ha permitido optimizar sus flujos y potenciar la toma de decisiones basada en datos. Un caso real de Inteligencia artificial aplicada que genera <strong>ganancia medible</strong> en lugar de proyectos experimentales.',
      tags: ['IA Aplicada', 'Automatización', 'Data Engineering', 'Big Data', 'Sistemas Legacy'],
      period: '2025 — Presente',
      label: 'Cliente destacado',
      partner: 'Partner activo'
    },
    {
      id: 'emirzin',
      title: 'EMIR',
      titleEm: 'ZIN',
      fullName: 'EMIRZIN',
      desc: 'Trabajamos estrechamente con <strong>EMIRZIN</strong> en la construcción de infraestructuras corporativas con un alto nivel de escalabilidad. Hemos redefinido su ecosistema digital para asegurar flujos operativos sumamente ágiles y sistemas robustos para alta demanda.',
      tags: ['Desarrollo Corporativo', 'Cloud', 'Sistemas Integrados'],
      period: '2025 — Presente',
      label: 'Cliente destacado',
      partner: 'Partner activo'
    },
    {
      id: 'efletexia',
      title: 'EFLE',
      titleEm: 'TEXIA',
      fullName: 'EFLETEXIA',
      desc: 'Acompañamos a <strong>EFLETEXIA</strong> en la modernización intensiva de sus herramientas comerciales. Entregamos soluciones de software de precisión que impulsan directamente su curva de crecimiento y automatizan de forma cuantificable cada etapa de sus procesos transaccionales.',
      tags: ['Software Corporativo', 'Optimización', 'Automatización'],
      period: '2024 — Presente',
      label: 'Cliente destacado',
      partner: 'Partner activo'
    }
  ];
};

const sectionTexts = {
  es: {
    casos: "Casos",
    trabajamosCon: "Trabajamos con ",
    grandes: "los grandes.",
    cliente: "Cliente",
    prev: "Anterior caso",
    next: "Siguiente caso",
    view: "Ver caso"
  },
  en: {
    casos: "Cases",
    trabajamosCon: "We work with ",
    grandes: "the best.",
    cliente: "Client",
    prev: "Previous case",
    next: "Next case",
    view: "View case"
  }
};

const Case: React.FC = () => {
  const { lang } = useLang();
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const t = sectionTexts[lang as keyof typeof sectionTexts] || sectionTexts.es;
  const casesData = getCasesData(lang);

  // Reset timer helper
  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % casesData.length);
    }, 6000);
  };

  // Auto-play feature
  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [lang, casesData.length]);

  // Reset index if out of bounds on language change
  useEffect(() => {
    if (activeIndex >= casesData.length) {
      setActiveIndex(0);
    }
  }, [lang, activeIndex, casesData.length]);

  const handleNext = () => { setActiveIndex((current) => (current + 1) % casesData.length); resetTimer(); };
  const handlePrev = () => { setActiveIndex((current) => (current - 1 + casesData.length) % casesData.length); resetTimer(); };

  return (
    <section className="case" id="casos">
      <div className="container case-content reveal">
        <div className="section-head" style={{ marginBottom: '50px' }}>
          <div>
            <div className="section-eyebrow">{t.casos}</div>
            <h2 className="section-title">{t.trabajamosCon}<em>{t.grandes}</em></h2>
          </div>
        </div>

        <div className="case-grid">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Stack all cases on top of each other, only show active via opacity */}
            <div style={{ position: 'relative', minHeight: '420px' }}>
              {casesData.map((caseItem, idx) => (
                <div
                  key={caseItem.id}
                  style={{
                    position: idx === 0 ? 'relative' : 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    opacity: activeIndex === idx ? 1 : 0,
                    transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                    pointerEvents: activeIndex === idx ? 'auto' : 'none',
                    willChange: 'opacity',
                  }}
                >
                  <span className="case-label">
                    <span className="dot"></span>
                    {caseItem.label}
                  </span>
                  <h3 className="case-title">{caseItem.fullName}</h3>
                  <p className="case-desc" style={{ minHeight: '180px' }} dangerouslySetInnerHTML={{ __html: caseItem.desc }}></p>
                  <div className="case-tags">
                    {caseItem.tags.map((tag, tagIdx) => (
                      <span key={tagIdx}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Carousel navigation indicators and buttons */}
            <div style={{ marginTop: 'auto', paddingTop: '40px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button
                className="case-carousel-nav"
                onClick={handlePrev}
                style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border-strong)',
                  color: 'var(--color-fg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.2s', fontSize: '16px'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                aria-label={t.prev}
              >
                &#8592;
              </button>

              <div style={{ display: 'flex', gap: '8px' }}>
                {casesData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setActiveIndex(idx); resetTimer(); }}
                    style={{
                      width: '32px',
                      height: '4px',
                      borderRadius: '2px',
                      background: activeIndex === idx ? 'var(--color-accent)' : 'var(--color-border-strong)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background 0.3s'
                    }}
                    aria-label={`${t.view} ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                className="case-carousel-nav"
                onClick={handleNext}
                style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border-strong)',
                  color: 'var(--color-fg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.2s', fontSize: '16px'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                aria-label={t.next}
              >
                &#8594;
              </button>
            </div>
          </div>

          {/* Visual panel — also stack for crossfade, no re-mount */}
          <div style={{ position: 'relative' }}>
            {casesData.map((caseItem, idx) => (
              <div
                key={`${caseItem.id}-visual`}
                className="case-visual"
                style={{
                  position: idx === 0 ? 'relative' : 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: idx === 0 ? undefined : 0,
                  opacity: activeIndex === idx ? 1 : 0,
                  transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                  pointerEvents: activeIndex === idx ? 'auto' : 'none',
                  willChange: 'opacity',
                }}
              >
                <div className="case-visual-corner"><span className="d"></span> {caseItem.partner}</div>
                <div className="case-visual-inner">
                  <div className="big">
                    {caseItem.title}<em>{caseItem.titleEm}</em>
                  </div>
                  <div className="sub">{t.cliente} · {caseItem.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Case;
