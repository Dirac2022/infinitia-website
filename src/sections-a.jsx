// Infinitia — Hero, Nav, Services, Process sections
const { useState, useEffect } = React;

window.Nav = function Nav({ lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", on);
    on();
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="logo">
          <span className="logo-mark"><InfinitiaLogo /></span>
          <span>infinitia</span>
        </a>
        <div className="nav-links">
          <a href="#services">{t.nav.services}</a>
          <a href="#process">{t.nav.process}</a>
          <a href="#team">{t.nav.team}</a>
          <a href="#faq">{t.nav.faq}</a>
          <a href="#contact">{t.nav.contact}</a>
        </div>
        <div className="nav-right">
          <div className="lang-toggle" role="group" aria-label="Language">
            <button className={lang === "es" ? "active" : ""} onClick={() => setLang("es")}>ES</button>
            <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
          </div>
          <a href="#contact" className="btn btn-primary" style={{ padding: "10px 16px", fontSize: 13 }}>
            {t.nav.cta} <Icons.Arrow className="btn-arrow" width={14} height={14} />
          </a>
        </div>
      </div>
    </nav>
  );
};

window.Hero = function Hero({ t }) {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" />
      <div className="hero-glow" />
      <div className="container hero-inner">
        <div className="reveal in hero-tag">
          <span className="hero-tag-dot" />
          <span>{t.hero.tag}</span>
        </div>
        <h1 className="hero-title reveal in">
          {t.hero.title_1} <span className="accent">{t.hero.title_accent}</span> <span className="muted">{t.hero.title_2}</span><br />
          {t.hero.title_3}
        </h1>
        <p className="hero-sub reveal in">{t.hero.sub}</p>
        <div className="hero-ctas reveal in">
          <a href="#contact" className="btn btn-primary">
            {t.hero.cta_primary} <Icons.Arrow className="btn-arrow" width={14} height={14} />
          </a>
          <a href="#services" className="btn btn-ghost">{t.hero.cta_secondary}</a>
        </div>
        <div className="hero-meta reveal">
          {t.hero.meta.map((m, i) => (
            <div className="hero-meta-item" key={i}>
              <div className="k">{m.k}</div>
              <div className="v">{m.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Services = function Services({ t }) {
  const icons = [Icons.Mobile, Icons.Web, Icons.Cloud, Icons.Code, Icons.Server, Icons.Compass];
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="section-eyebrow">{t.services.eyebrow}</div>
            <h2 className="section-title">
              {t.services.title_a} <em>{t.services.title_b}</em>
            </h2>
          </div>
          <p className="section-lede">{t.services.lede}</p>
        </div>
        <div className="services-grid reveal">
          {t.services.items.map((s, i) => {
            const Icon = icons[i] || Icons.Code;
            return (
              <div className="service" key={i} style={{ "--service-color": s.color }}>
                <div className="service-ix">0{i + 1} / 0{t.services.items.length}</div>
                <div className="service-icon"><Icon width={18} height={18} /></div>
                <div className="service-title">{s.title}</div>
                <div className="service-desc">{s.desc}</div>
                <div className="service-tags">
                  {s.tags.map((tag, j) => <span className="service-tag" key={j}>{tag}</span>)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

window.Process = function Process({ t }) {
  return (
    <section className="section" id="process" style={{ paddingTop: 60 }}>
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="section-eyebrow">{t.process.eyebrow}</div>
            <h2 className="section-title">
              {t.process.title_a} <em>{t.process.title_b}</em>
            </h2>
          </div>
          <p className="section-lede">{t.process.lede}</p>
        </div>
        <div className="process-list reveal">
          {t.process.steps.map((s, i) => (
            <div className="process-step" key={i}>
              <div className="num">/ 0{i + 1}</div>
              <div className="title">{s.title}</div>
              <div className="desc">{s.desc}</div>
              <div className="meta">{s.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Stats = function Stats({ t }) {
  return (
    <section className="stats reveal" aria-label="Stats">
      <div className="stats-grid">
        {t.stats.items.map((s, i) => (
          <div className="stat" key={i}>
            <div className="v">{s.v}<span className="plus">{s.plus}</span></div>
            <div className="k">{s.k}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

Object.assign(window, { Nav: window.Nav, Hero: window.Hero, Services: window.Services, Process: window.Process, Stats: window.Stats });
