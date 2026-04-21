// Infinitia — Hero, Nav, Services, Process, Stats, Terminal sections
const { useState, useEffect, useRef } = React;

/* ─── TERMINAL WIDGET ─────────────────────────────────────── */
window.TerminalWidget = function TerminalWidget() {
  const bodyRef = useRef(null);

  const termLines = [
    { t: 500,  html: '<span class="term-prompt">$</span> <span class="term-cmd">infinitia deploy --client new-project</span>' },
    { t: 800,  html: '<span class="term-out">→ Iniciando entorno seguro...</span>' },
    { t: 400,  html: '<span class="term-out">→ Stack: <span class="term-key">React</span> · <span class="term-key">Node</span> · <span class="term-key">Docker</span></span>' },
    { t: 500,  html: '<span class="term-out"><span class="term-ok">✓</span> Conexión · <span class="term-val">prod-01.infinitia.io</span></span>' },
    { t: 800,  html: '<span class="term-prompt">$</span> <span class="term-cmd">pipeline run --env production</span>' },
    { t: 600,  html: '<span class="term-out"><span class="term-key">[01/06]</span> Build ................. <span class="term-ok">OK</span></span>' },
    { t: 250,  html: '<span class="term-out"><span class="term-key">[02/06]</span> Tests ................. <span class="term-ok">OK</span></span>' },
    { t: 250,  html: '<span class="term-out"><span class="term-key">[03/06]</span> Security scan ......... <span class="term-ok">OK</span></span>' },
    { t: 250,  html: '<span class="term-out"><span class="term-key">[04/06]</span> Infrastructure (IaC) .. <span class="term-ok">OK</span></span>' },
    { t: 250,  html: '<span class="term-out"><span class="term-key">[05/06]</span> Deploy to cloud ........ <span class="term-ok">OK</span></span>' },
    { t: 250,  html: '<span class="term-out"><span class="term-key">[06/06]</span> Monitoring active ...... <span class="term-ok">OK</span></span>' },
    { t: 700,  html: '<span class="term-out"><span class="term-warn">▲</span> Sistema operando al <span class="term-val">99.9%</span> uptime</span>' },
    { t: 500,  html: '<span class="term-prompt">$</span> <span class="term-cmd">status</span>' },
    { t: 400,  html: '<span class="term-out"><span class="term-ok">●</span> Listo para escalar.</span>' },
    { t: 500,  html: '<span class="term-prompt">$</span> <span class="term-cursor-el"></span>' },
  ];

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    let timers = [];
    let loopTimer;

    function run() {
      el.innerHTML = '';
      let delay = 200;
      termLines.forEach((line) => {
        delay += line.t;
        const t = setTimeout(() => {
          const div = document.createElement('div');
          div.className = 'term-line';
          div.innerHTML = line.html;
          el.appendChild(div);
          if (el.scrollHeight > el.clientHeight) el.scrollTop = el.scrollHeight;
        }, delay);
        timers.push(t);
      });
      loopTimer = setTimeout(run, delay + 4000);
    }

    run();
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(loopTimer);
    };
  }, []);

  return (
    <div className="terminal">
      <div className="terminal-header">
        <span className="term-dot red" />
        <span className="term-dot yellow" />
        <span className="term-dot green" />
        <span className="terminal-title">
          <span className="live-dot" />
          infinitia ~ deploy
        </span>
      </div>
      <div className="terminal-body" ref={bodyRef} />
    </div>
  );
};

/* ─── NAV ─────────────────────────────────────────────────── */
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
          <a href="#leadership">{t.nav.leadership}</a>
          <a href="#team">{t.nav.team}</a>
          <a href="#cases">{t.nav.cases}</a>
          <a href="#faq">{t.nav.faq}</a>
        </div>
        <div className="nav-right">
          <div className="lang-toggle" role="group" aria-label="Language">
            <button className={lang === "es" ? "active" : ""} onClick={() => setLang("es")}>ES</button>
            <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
          </div>
          <a href="mailto:hola@infinitia.io" className="btn btn-primary" style={{ padding: "10px 16px", fontSize: 13 }}>
            {t.nav.cta} <Icons.Arrow className="btn-arrow" width={14} height={14} />
          </a>
        </div>
      </div>
    </nav>
  );
};

/* ─── HERO ────────────────────────────────────────────────── */
window.Hero = function Hero({ t }) {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" />
      <div className="hero-glow" />
      <div className="container hero-inner">
        <div className="hero-left">
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
            <a href="mailto:hola@infinitia.io" className="btn btn-primary">
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
        <div className="reveal in">
          <TerminalWidget />
        </div>
      </div>
    </section>
  );
};

/* ─── SERVICES (new card design) ─────────────────────────── */
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
              <div
                className={`service service-card service--${s.theme || 'default'}`}
                key={i}
                style={{ "--service-color": s.color }}
              >
                <div className="service-card-glow" />
                <div className="service-ix">/ 0{i + 1}</div>
                <div className="service-icon">
                  <Icon width={20} height={20} />
                </div>
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

/* ─── PROCESS ─────────────────────────────────────────────── */
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

/* ─── STATS ───────────────────────────────────────────────── */
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

Object.assign(window, {
  TerminalWidget: window.TerminalWidget,
  Nav: window.Nav,
  Hero: window.Hero,
  Services: window.Services,
  Process: window.Process,
  Stats: window.Stats,
});
