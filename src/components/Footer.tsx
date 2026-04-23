import React from 'react';
import { useLang } from '../context/LangContext';
import { content } from '../i18n/content';
import { Logo } from './Logo';

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
              <Logo />
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
