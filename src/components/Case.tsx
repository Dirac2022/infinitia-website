import React, { useState, useEffect } from 'react';
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

  const t = sectionTexts[lang as keyof typeof sectionTexts] || sectionTexts.es;
  const casesData = getCasesData(lang);

  // Auto-play feature
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % casesData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [lang]); // add lang as dependency in case casesData.length changes or just to be safe

  // Reset index if out of bounds on language change
  useEffect(() => {
    if (activeIndex >= casesData.length) {
      setActiveIndex(0);
    }
  }, [lang, activeIndex, casesData.length]);

  const handleNext = () => setActiveIndex((current) => (current + 1) % casesData.length);
  const handlePrev = () => setActiveIndex((current) => (current - 1 + casesData.length) % casesData.length);

  const activeCase = casesData[activeIndex] || casesData[0];

  return (
    <section className="case" id="casos">
      <div className="case-content reveal">
        <div className="section-head" style={{ marginBottom: '50px' }}>
          <div className="section-num">{t.casos}</div>
          <div><h2 className="section-title">{t.trabajamosCon}<em>{t.grandes}</em></h2></div>
        </div>

        <div className="case-grid">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div key={activeCase.id} style={{ animation: 'fade-in-up 1.2s cubic-bezier(0.22, 1, 0.36, 1) both' }}>
              <span className="case-label">
                <span className="dot"></span>
                {activeCase.label}
              </span>
              <h3 className="case-title">{activeCase.fullName}</h3>
              <p className="case-desc" style={{ height: '220px' }} dangerouslySetInnerHTML={{ __html: activeCase.desc }}></p>
              <div className="case-tags">
                {activeCase.tags.map((tag, idx) => (
                  <span key={idx}>{tag}</span>
                ))}
              </div>
            </div>
            
            {/* Carousel navigation indicators and buttons */}
            <div style={{ marginTop: 'auto', paddingTop: '40px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button 
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
                    onClick={() => setActiveIndex(idx)}
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

          <div className="case-visual" key={`${activeCase.id}-visual`} style={{ animation: 'fade-in-up 1.2s cubic-bezier(0.22, 1, 0.36, 1) both 0.2s' }}>
            <div className="case-visual-corner"><span className="d"></span> {activeCase.partner}</div>
            <div className="case-visual-inner">
              <div className="big">
                {activeCase.title}<em>{activeCase.titleEm}</em>
              </div>
              <div className="sub">{t.cliente} · {activeCase.period}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Case;
