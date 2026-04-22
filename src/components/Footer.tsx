import React from 'react';
import { useLang } from '../context/LangContext';
import { content } from '../i18n/content';

const translations = {
  es: {
    brandDesc: 'Soluciones de inteligencia artificial, software corporativo, criptografía y ciberseguridad para empresas peruanas y de la región.',
    servicios: 'Servicios',
    empresa: 'Empresa',
    e_casos: 'Casos',
    e_equipo: 'Liderazgo',
    e_faq: 'Preguntas Frecuentes',
    contacto: 'Contacto',
    loc: 'Lima, Perú',
    copyright: '© 2026 Infinit IA · Hecho en Perú',
    legal: 'Aviso legal · Privacidad · Cookies'
  },
  en: {
    brandDesc: 'Artificial intelligence solutions, enterprise software, cryptography, and cybersecurity for high-growth companies.',
    servicios: 'Services',
    empresa: 'Company',
    e_casos: 'Cases',
    e_equipo: 'Leadership',
    e_faq: 'FAQ',
    contacto: 'Contact',
    loc: 'Lima, Peru',
    copyright: '© 2026 Infinit IA · Crafted in Peru',
    legal: 'Legal Notice · Privacy · Cookies'
  }
};

export const Footer: React.FC = () => {
  const { lang } = useLang();
  const t = translations[lang as keyof typeof translations] || translations.es;
  const servicesItems = content[lang].services.items;

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.05rem', fontWeight: 700 }}>
            <span className="logo-mark" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '26px', height: '26px' }}>
              <svg viewBox="0 0 40 40">
                <defs>
                  <clipPath id="circleClipF">
                    <circle cx="20" cy="20" r="18"/>
                  </clipPath>
                  <radialGradient id="smokeBlueF" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#3b82ff" stopOpacity="1"/>
                    <stop offset="60%" stopColor="#3b82ff" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#3b82ff" stopOpacity="0"/>
                  </radialGradient>
                  <radialGradient id="smokeCyanF" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="1"/>
                    <stop offset="60%" stopColor="#22d3ee" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0"/>
                  </radialGradient>
                  <radialGradient id="smokeVioletF" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="1"/>
                    <stop offset="60%" stopColor="#a855f7" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0"/>
                  </radialGradient>
                </defs>
                <g clipPath="url(#circleClipF)">
                  <rect width="40" height="40" fill="#0A0A0F"/>
                  <circle cx="14" cy="16" r="10" fill="url(#smokeBlueF)">
                    <animate attributeName="cx" values="14;26;18;14" dur="7s" repeatCount="indefinite"/>
                    <animate attributeName="cy" values="16;24;14;16" dur="7s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="26" cy="24" r="9" fill="url(#smokeVioletF)">
                    <animate attributeName="cx" values="26;14;22;26" dur="9s" repeatCount="indefinite"/>
                    <animate attributeName="cy" values="24;18;26;24" dur="9s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="20" cy="20" r="8" fill="url(#smokeCyanF)">
                    <animate attributeName="cx" values="20;14;26;20" dur="8s" repeatCount="indefinite"/>
                    <animate attributeName="cy" values="20;26;16;20" dur="8s" repeatCount="indefinite"/>
                  </circle>
                </g>
                <circle cx="20" cy="20" r="18" fill="none" stroke="rgba(238,242,247,0.25)" strokeWidth="1"/>
              </svg>
            </span>
            <span style={{ color: 'var(--color-fg-primary)' }}>Infinit</span>
            <span style={{ color: 'var(--color-accent)', fontFamily: 'serif', fontStyle: 'italic', fontWeight: 400, marginLeft: '2px', fontSize: '1.2rem' }}>IA</span>
          </a>
          <p>{t.brandDesc}</p>
        </div>
        <div className="footer-col">
          <h4>{t.servicios}</h4>
          <ul>
            {servicesItems.map((s, idx) => (
              <li key={idx}><a href="#services">{s.title}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>{t.empresa}</h4>
          <ul>
            <li><a href="#casos">{t.e_casos}</a></li>
            <li><a href="#leadership">{t.e_equipo}</a></li>
            <li><a href="#faq">{t.e_faq}</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>{t.contacto}</h4>
          <ul>
            <li><a href="mailto:gino.janampa@infinitia.io">gino.janampa@infinitia.io</a></li>
            <li><a href="#">{t.loc}</a></li>
            <li><a href="#">LinkedIn ↗</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>{t.copyright}</span>
        <span>{t.legal}</span>
      </div>
    </footer>
  );
};
