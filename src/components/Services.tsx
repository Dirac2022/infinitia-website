import { type ReactNode } from 'react';
import { ServiceCard } from './services/ServiceCard';
import { useLang } from '../context/LangContext';
import { content, type IconKey } from '../i18n/content';
import { MobileIcon, WebIcon, CloudIcon, CodeIcon, ServerIcon, CompassIcon } from './ui/Icons';

const ICON_MAP: Record<IconKey, ReactNode> = {
  Mobile:  <MobileIcon  width={20} height={20} />,
  Web:     <WebIcon     width={20} height={20} />,
  Cloud:   <CloudIcon   width={20} height={20} />,
  Code:    <CodeIcon    width={20} height={20} />,
  Server:  <ServerIcon  width={20} height={20} />,
  Compass: <CompassIcon width={20} height={20} />,
};

export function Services() {
  const { lang } = useLang();
  const t = content[lang].services;

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

        <div className="services-grid">
          {t.items.map((service, i) => (
            <ServiceCard
              key={service.title}
              index={i}
              title={service.title}
              desc={service.desc}
              tags={service.tags}
              color={service.color}
              icon={ICON_MAP[service.iconKey]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
