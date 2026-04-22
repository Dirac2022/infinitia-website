import React, { useState } from 'react';
import { useLang } from '../context/LangContext';

const faqContent = {
  es: {
    eyebrow: 'F.A.Q',
    title_a: 'Preguntas',
    title_b: 'frecuentes.',
    items: [
      {
        q: '¿Qué tipo de empresas se benefician de Infinitia?',
        a: 'Trabajamos con corporaciones orientadas al crecimiento que necesitan escalar operaciones complejas. Desde automatizar flujos mediante IA hasta asegurar cumplimiento normativo con ciberseguridad avanzada.'
      },
      {
        q: '¿Cómo gestionan la migración de sistemas legacy?',
        a: 'Trabajamos con enfoques de estrangulamiento (strangler pattern) y microservicios. Nos aseguramos de mantener una operación productiva libre de caídas mientras migramos los componentes progresivamente.'
      },
      {
        q: '¿Cuánto toma un diagnóstico técnico inicial?',
        a: 'Un primer encuentro o "discovery" toma 30 minutos sin costo. Posteriormente, una auditoría profunda de la arquitectura existente toma de 1 a 2 semanas dependiendo del tamaño del proyecto.'
      },
      {
        q: '¿Tercerizan alguna parte del desarrollo o infraestructura?',
        a: 'Sostenemos la calidad al realizar consultoría, programación, despliegues y monitoreo de ciberseguridad al 100% in-house mediante especialistas de primer nivel.'
      }
    ]
  },
  en: {
    eyebrow: 'F.A.Q',
    title_a: 'Frequently Asked',
    title_b: 'Questions.',
    items: [
      {
        q: 'What types of companies benefit from Infinitia?',
        a: 'We work with growth-oriented enterprises that need to scale complex operations. From automating workflows via AI to ensuring regulatory compliance with advanced cybersecurity.'
      },
      {
        q: 'How do you handle legacy system migrations?',
        a: 'By using strangler patterns and microservices techniques. We guarantee zero-downtime operational capability while progressively migrating components to the cloud.'
      },
      {
        q: 'How long does an initial technical diagnosis take?',
        a: 'A first discovery meeting takes 30 free minutes. Following that, an in-depth audit generally takes 1-2 weeks, where we map existing architecture to uncover high-impact opportunities.'
      },
      {
        q: 'Do you outsource any part of development or infrastructure?',
        a: 'No. All consulting, orchestration, code, deployment, and security hardening are handled 100% in-house by our top-tier experts.'
      }
    ]
  }
};

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number>(-1);
  const { lang } = useLang();
  
  const t = faqContent[lang as keyof typeof faqContent] || faqContent.es;

  return (
    <section className="section" id="faq" style={{ paddingTop: 60 }}>
      <div className="container">
        <div className="section-head reveal" style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>{t.eyebrow}</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              {t.title_a} <em>{t.title_b}</em>
            </h2>
          </div>
        </div>
        <div className="faq reveal">
          {t.items.map((item, i) => (
            <div className={`faq-item ${open === i ? 'open' : ''}`} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span>{item.q}</span>
                <span className="faq-q-icon"><PlusIcon /></span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
