// Infinitia — Leadership, Team, Cases, FAQ, Footer
const { useState: useState2 } = React;

/** Derive initials from a full name */
function initials(name) {
  return name.split(' ').filter(Boolean).slice(0,2).map(w => w[0].toUpperCase()).join('');
}

/* ─── LEADERSHIP ────────────────────────────────────────────
   Owners / founders — shown BEFORE the team grid
─────────────────────────────────────────────────────────── */
window.Leadership = function Leadership({ t }) {
  return (
    <section className="section leadership-section" id="leadership" style={{ paddingTop: 60 }}>
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="section-eyebrow">{t.leadership.eyebrow}</div>
            <h2 className="section-title">
              {t.leadership.title_a} <em>{t.leadership.title_b}</em>
            </h2>
          </div>
          <p className="section-lede">{t.leadership.lede}</p>
        </div>
        <div className="leaders-grid reveal">
          {t.leadership.members.map((m, i) => (
            <div
              className={`leader-card ${i % 2 === 1 ? 'leader-card--alt' : ''}`}
              key={i}
              style={{ "--lc1": m.c1, "--lc2": m.c2 }}
            >
              <div className="leader-card-glow" />
              <div className="leader-card-header">
                <div className="leader-avatar">{m.initials}</div>
                <div>
                  <div className="leader-role">{m.role}</div>
                  <div className="leader-name">{m.name}</div>
                </div>
              </div>
              <p className="leader-bio">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── TEAM ──────────────────────────────────────────────────
   Full engineering team — shown AFTER leadership
─────────────────────────────────────────────────────────── */
window.Team = function Team({ t }) {
  return (
    <section className="section team-section" id="team" style={{ paddingTop: 48 }}>
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="section-eyebrow">{t.team.eyebrow}</div>
            <h2 className="section-title">
              {t.team.title_a} <em>{t.team.title_b}</em>
            </h2>
          </div>
          <p className="section-lede">{t.team.lede}</p>
        </div>
        <div className="team-grid reveal">
          {window.TEAM.map((m, i) => (
            <div className="member" key={i} style={{ "--member-c1": m.c1, "--member-c2": m.c2 }}>
              <div className="member-avatar">
                <div className="member-avatar-dots" />
                <span className="member-avatar-initials">{initials(m.name)}</span>
              </div>
              <div className="member-name">{m.name}</div>
              <div className="member-role">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── CASES — "Trabajamos con los grandes" ──────────────────
   Replaces the old Clients grid
─────────────────────────────────────────────────────────── */
window.Cases = function Cases({ t }) {
  const c = t.cases;
  return (
    <section className="section cases-section" id="cases" style={{ paddingTop: 60 }}>
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="section-eyebrow">{c.eyebrow}</div>
            <h2 className="section-title">
              {c.title_a} <em>{c.title_b}</em>
            </h2>
          </div>
        </div>

        <div className="case-grid reveal">
          {/* Left — text */}
          <div className="case-left">
            <div className="case-label">
              <span className="case-label-dot" />
              {c.label}
            </div>
            <h3 className="case-client-name">{c.client_name}</h3>
            <p className="case-client-desc">{c.client_desc}</p>
            <div className="case-tags">
              {c.client_tags.map((tag, i) => (
                <span className="case-tag" key={i}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Right — visual card */}
          <div className="case-visual">
            <div className="case-visual-corner">
              <span className="case-visual-dot" />
              {c.client_status}
            </div>
            <div className="case-visual-center">
              <div className="case-visual-name">
                {c.client_name.slice(0, 3)}<em>{c.client_name.slice(3)}</em>
              </div>
              <div className="case-visual-period">{c.client_period}</div>
            </div>
          </div>
        </div>

        {/* Trust bar below */}
        <div className="cases-trust reveal">
          <span className="cases-trust-label">Clientes que confían en nuestra ingeniería</span>
          <span className="cases-trust-clients">
            <strong>AJEMEX</strong>
            <span className="cases-trust-more">{c.more_label} →</span>
          </span>
        </div>
      </div>
    </section>
  );
};

/* ─── FAQ ───────────────────────────────────────────────── */
window.FAQ = function FAQ({ t }) {
  const [open, setOpen] = useState2(0);
  return (
    <section className="section" id="faq" style={{ paddingTop: 60 }}>
      <div className="container">
        <div className="section-head reveal" style={{ justifyContent: "center", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>{t.faq.eyebrow}</div>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              {t.faq.title_a} <em>{t.faq.title_b}</em>
            </h2>
          </div>
        </div>
        <div className="faq reveal">
          {t.faq.items.map((item, i) => (
            <div className={`faq-item ${open === i ? "open" : ""}`} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span>{item.q}</span>
                <span className="faq-q-icon"><Icons.Plus width={14} height={14} /></span>
              </button>
              <div className="faq-a"><div className="faq-a-inner">{item.a}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── FOOTER ─────────────────────────────────────────────── */
window.Footer = function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-mark"><InfinitiaLogo /></span>
              <span>infinitia</span>
            </div>
            <p>{t.footer.tagline}</p>
            <div className="socials">
              <a href="#" className="social" aria-label="GitHub"><Icons.Github width={16} height={16} /></a>
              <a href="#" className="social" aria-label="LinkedIn"><Icons.Linkedin width={16} height={16} /></a>
              <a href="#" className="social" aria-label="Twitter"><Icons.Twitter width={16} height={16} /></a>
              <a href="#" className="social" aria-label="Instagram"><Icons.Instagram width={16} height={16} /></a>
            </div>
          </div>
          {t.footer.cols.map((c, i) => (
            <div className="footer-col" key={i}>
              <h5>{c.title}</h5>
              <ul>
                {c.items.map((it, j) => <li key={j}><a href="#">{it}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-big">INFINITIA</div>
        <div className="footer-bottom">
          <span>{t.footer.rights}</span>
          <span>{t.footer.built}</span>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, {
  Leadership: window.Leadership,
  Team: window.Team,
  Cases: window.Cases,
  FAQ: window.FAQ,
  Footer: window.Footer,
});
