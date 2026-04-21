// Infinitia — Team, Clients, FAQ, Contact, Footer
const { useState: useState2 } = React;

window.Team = function Team({ t }) {
  return (
    <section className="section" id="team" style={{ paddingTop: 60 }}>
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

window.Clients = function Clients({ t }) {
  return (
    <section className="clients reveal" aria-label="Clients">
      <div className="container">
        <div className="clients-title">{t.clients.title}</div>
        <div className="clients-grid">
          {window.CLIENTS.map((c, i) => (
            <div className="client" key={i}>
              <div className="client-logo">
                <span style={{ fontSize: 20, color: "var(--accent-primary)" }}>{c.glyph}</span>
                <span>{c.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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

window.Contact = function Contact({ t }) {
  const [form, setForm] = useState2({ name: "", email: "", company: "", role: "", interest: t.contact.form.interests[0], message: "" });
  const [sent, setSent] = useState2(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="section" id="contact" style={{ paddingTop: 60 }}>
      <div className="container">
        <div className="contact-wrap">
          <div className="contact-left reveal">
            <div className="section-eyebrow">{t.contact.eyebrow}</div>
            <h2 className="title">
              {t.contact.title_a} <em>{t.contact.title_accent}</em> {t.contact.title_b}
            </h2>
            <p className="sub">{t.contact.sub}</p>
            <div className="contact-details">
              {t.contact.details.map((d, i) => (
                <div className="contact-detail" key={i}>
                  <span className="k">{d.k}</span>
                  <span className="v">{d.v}</span>
                </div>
              ))}
            </div>
          </div>

          <form className="form reveal" onSubmit={onSubmit}>
            {!sent ? (
              <>
                <div className="form-title">{t.contact.form.title}</div>
                <div className="form-sub">{t.contact.form.sub}</div>

                <div className="field-row">
                  <div className="field">
                    <label>{t.contact.form.name}</label>
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={t.contact.form.name_ph} />
                  </div>
                  <div className="field">
                    <label>{t.contact.form.email}</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder={t.contact.form.email_ph} />
                  </div>
                </div>

                <div className="field-row">
                  <div className="field">
                    <label>{t.contact.form.company}</label>
                    <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder={t.contact.form.company_ph} />
                  </div>
                  <div className="field">
                    <label>{t.contact.form.role}</label>
                    <input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} placeholder={t.contact.form.role_ph} />
                  </div>
                </div>

                <div className="field">
                  <label>{t.contact.form.interest}</label>
                  <div className="chip-row">
                    {t.contact.form.interests.map((it) => (
                      <button type="button" key={it}
                        className={`chip ${form.interest === it ? "active" : ""}`}
                        onClick={() => setForm({ ...form, interest: it })}>
                        {it}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="field">
                  <label>{t.contact.form.message}</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder={t.contact.form.message_ph} rows={3} />
                </div>

                <button type="submit" className="form-submit">
                  {t.contact.form.submit} <Icons.Arrow width={14} height={14} />
                </button>
              </>
            ) : (
              <div className="form-success">
                <div className="form-success-mark"><Icons.Check width={22} height={22} strokeWidth={2.2} /></div>
                <h4>{t.contact.form.success_title}</h4>
                <p>{t.contact.form.success_sub}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

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

Object.assign(window, { Team: window.Team, Clients: window.Clients, FAQ: window.FAQ, Contact: window.Contact, Footer: window.Footer });
