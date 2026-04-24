import { type CSSProperties } from 'react';
import { useLang } from '../context/LangContext';
import { content } from '../i18n/content';
import ginoPhoto from '../assets/team/gino.jpeg';
import emirPhoto from '../assets/team/emir.jpeg';

const PHOTOS = [ginoPhoto, emirPhoto];

export function Leadership() {
  const { lang } = useLang();
  const t = content[lang].leadership;

  return (
    <section id="leadership" className="section">
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

        <div className="leaders-grid">
          {t.members.map((m, i) => (
            <div className="leader-card-wrap" key={m.name} style={{ '--lc1': m.c1, '--lc2': m.c2 } as CSSProperties}>
              <article className="leader-card">
                <div className="leader-photo">
                  <img src={PHOTOS[i]} alt={m.name} />
                  <div className="leader-photo-overlay" />
                </div>
                <div className="leader-content">
                  <div className="leader-role">{m.role}</div>
                  <h3 className="leader-name">{m.name}</h3>
                  <div className="leader-bio-wrapper">
                    <p className="leader-bio">{m.bio}</p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
