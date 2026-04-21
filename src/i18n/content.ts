export type Lang = 'es' | 'en';
export type IconKey = 'Mobile' | 'Web' | 'Cloud' | 'Code' | 'Server' | 'Compass';

export interface ServiceItem {
  title: string;
  desc: string;
  tags: string[];
  color: string;
  iconKey: IconKey;
}

export interface TermLine {
  t: number;
  html: string;
}

export interface Content {
  nav: {
    services: string;
    process: string;
    team: string;
    faq: string;
    contact: string;
    cta: string;
  };
  hero: {
    tag: string;
    titleStart: string;
    titleAccent: string;
    titleMuted: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaHref: string;
  };
  terminal: TermLine[];
  services: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    lede: string;
    items: ServiceItem[];
  };
}

export const content: Record<Lang, Content> = {
  es: {
    nav: {
      services: 'Servicios',
      process: 'Proceso',
      team: 'Equipo',
      faq: 'FAQ',
      contact: 'Contacto',
      cta: 'Agendar reunión',
    },
    hero: {
      tag: 'Disponibles para nuevos proyectos',
      titleStart: 'Desarrollamos',
      titleAccent: 'software a medida',
      titleMuted: 'con inteligencia de negocio.',
      sub: 'Somos un equipo de software enfocado en plataformas web, apps móviles y soluciones de inteligencia de negocio. Del prototipo al deploy, con la disciplina de un equipo interno.',
      ctaPrimary: 'Agendar reunión →',
      ctaSecondary: 'Ver servicios',
      ctaHref: 'mailto:gino.janampa@infinitia.io?subject=Agendar%20reuni%C3%B3n&body=Hola%20Gino%2C%0A%0AMe%20gustar%C3%ADa%20agendar%20una%20reuni%C3%B3n%20para%20hablar%20sobre%20un%20proyecto.%0A%0AGracias.',
    },
    terminal: [
      { t: 500, html: '<span class="term-prompt">$</span> <span class="term-cmd">infinitia deploy --client new-project</span>' },
      { t: 800, html: '<span class="term-out">→ Iniciando entorno seguro...</span>' },
      { t: 400, html: '<span class="term-out">→ Stack: <span class="term-key">React</span> · <span class="term-key">Node</span> · <span class="term-key">Docker</span></span>' },
      { t: 500, html: '<span class="term-out"><span class="term-ok">✓</span> Conexión · <span class="term-val">prod-01.infinitia.io</span></span>' },
      { t: 800, html: '<span class="term-prompt">$</span> <span class="term-cmd">pipeline run --env production</span>' },
      { t: 600, html: '<span class="term-out"><span class="term-key">[01/06]</span> Build ................. <span class="term-ok">OK</span></span>' },
      { t: 250, html: '<span class="term-out"><span class="term-key">[02/06]</span> Tests ................. <span class="term-ok">OK</span></span>' },
      { t: 250, html: '<span class="term-out"><span class="term-key">[03/06]</span> Escaneo de seguridad .. <span class="term-ok">OK</span></span>' },
      { t: 250, html: '<span class="term-out"><span class="term-key">[04/06]</span> Infraestructura (IaC) . <span class="term-ok">OK</span></span>' },
      { t: 250, html: '<span class="term-out"><span class="term-key">[05/06]</span> Deploy a la nube ....... <span class="term-ok">OK</span></span>' },
      { t: 250, html: '<span class="term-out"><span class="term-key">[06/06]</span> Monitoreo activo ....... <span class="term-ok">OK</span></span>' },
      { t: 700, html: '<span class="term-out"><span class="term-warn">▲</span> Sistema operando al <span class="term-val">99.9%</span> uptime</span>' },
      { t: 500, html: '<span class="term-prompt">$</span> <span class="term-cmd">status</span>' },
      { t: 400, html: '<span class="term-out"><span class="term-ok">●</span> Listo para escalar.</span>' },
      { t: 500, html: '<span class="term-prompt">$</span> <span class="term-cursor-el"></span>' },
    ],
    services: {
      eyebrow: 'Servicios',
      titleA: 'Todo el stack tecnológico,',
      titleB: 'una sola casa.',
      lede: 'Desde apps móviles hasta infraestructura cloud. Diseñamos, construimos, desplegamos y sostenemos — sin derivar nada a terceros.',
      items: [
        { title: 'Apps móviles',          desc: 'iOS y Android nativo o React Native. Desde la arquitectura inicial hasta publicación en las stores con calidad enterprise.',             tags: ['Swift', 'Kotlin', 'React Native', 'Expo'],          color: '#6C63FF', iconKey: 'Mobile'  },
        { title: 'Aplicaciones web',      desc: 'Interfaces rápidas y accesibles con React, Next.js y Vue. SSR, edge y tiempo real cuando hace falta.',                                 tags: ['Next.js', 'React', 'TypeScript', 'Vue'],            color: '#00D4FF', iconKey: 'Web'     },
        { title: 'Migración a SaaS',      desc: 'Llevamos productos on-premise a multi-tenant en la nube, con billing, auth y observabilidad incluidos. Sin caídas.',                  tags: ['AWS', 'Multi-tenant', 'Stripe', 'Auth0'],           color: '#00E5A0', iconKey: 'Cloud'   },
        { title: 'Software a medida',     desc: 'Sistemas internos, dashboards operativos y herramientas de back-office hechas alrededor de tu flujo real.',                          tags: ['Backend', 'APIs', 'Dashboards', 'ETL'],             color: '#F472B6', iconKey: 'Code'    },
        { title: 'DevOps e infraestructura', desc: 'CI/CD, IaC con Terraform, observabilidad y contención de costos en AWS, GCP y Cloudflare.',                                       tags: ['Terraform', 'Docker', 'K8s', 'GitHub Actions'],     color: '#FFB800', iconKey: 'Server'  },
        { title: 'Consultoría técnica',   desc: 'Auditamos código, definimos arquitectura y acompañamos a equipos existentes en decisiones críticas de negocio.',                     tags: ['Arquitectura', 'Auditoría', 'Roadmaps'],            color: '#A78BFA', iconKey: 'Compass' },
      ],
    },
  },

  en: {
    nav: {
      services: 'Services',
      process: 'Process',
      team: 'Team',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Book a meeting',
    },
    hero: {
      tag: 'Accepting new projects',
      titleStart: 'We build',
      titleAccent: 'custom software',
      titleMuted: 'with business intelligence.',
      sub: 'A software team focused on web platforms, mobile apps and business intelligence solutions. From prototype to deploy — with the discipline of an in-house team.',
      ctaPrimary: 'Book a meeting →',
      ctaSecondary: 'See services',
      ctaHref: 'mailto:gino.janampa@infinitia.io?subject=Book%20a%20meeting&body=Hi%20Gino%2C%0A%0AI%27d%20like%20to%20schedule%20a%20meeting%20to%20discuss%20a%20project.%0A%0AThanks.',
    },
    terminal: [
      { t: 500, html: '<span class="term-prompt">$</span> <span class="term-cmd">infinitia deploy --client new-project</span>' },
      { t: 800, html: '<span class="term-out">→ Starting secure environment...</span>' },
      { t: 400, html: '<span class="term-out">→ Stack: <span class="term-key">React</span> · <span class="term-key">Node</span> · <span class="term-key">Docker</span></span>' },
      { t: 500, html: '<span class="term-out"><span class="term-ok">✓</span> Connection · <span class="term-val">prod-01.infinitia.io</span></span>' },
      { t: 800, html: '<span class="term-prompt">$</span> <span class="term-cmd">pipeline run --env production</span>' },
      { t: 600, html: '<span class="term-out"><span class="term-key">[01/06]</span> Build ................. <span class="term-ok">OK</span></span>' },
      { t: 250, html: '<span class="term-out"><span class="term-key">[02/06]</span> Tests ................. <span class="term-ok">OK</span></span>' },
      { t: 250, html: '<span class="term-out"><span class="term-key">[03/06]</span> Security scan ......... <span class="term-ok">OK</span></span>' },
      { t: 250, html: '<span class="term-out"><span class="term-key">[04/06]</span> Infrastructure (IaC) .. <span class="term-ok">OK</span></span>' },
      { t: 250, html: '<span class="term-out"><span class="term-key">[05/06]</span> Deploy to cloud ........ <span class="term-ok">OK</span></span>' },
      { t: 250, html: '<span class="term-out"><span class="term-key">[06/06]</span> Monitoring active ...... <span class="term-ok">OK</span></span>' },
      { t: 700, html: '<span class="term-out"><span class="term-warn">▲</span> System running at <span class="term-val">99.9%</span> uptime</span>' },
      { t: 500, html: '<span class="term-prompt">$</span> <span class="term-cmd">status</span>' },
      { t: 400, html: '<span class="term-out"><span class="term-ok">●</span> Ready to scale.</span>' },
      { t: 500, html: '<span class="term-prompt">$</span> <span class="term-cursor-el"></span>' },
    ],
    services: {
      eyebrow: 'Services',
      titleA: 'The full technology stack,',
      titleB: 'one house.',
      lede: 'From mobile apps to cloud infrastructure. We design, build, deploy and maintain — nothing subcontracted out.',
      items: [
        { title: 'Mobile apps',          desc: 'iOS and Android — native or React Native. From architecture to store publishing with enterprise quality.',                              tags: ['Swift', 'Kotlin', 'React Native', 'Expo'],          color: '#6C63FF', iconKey: 'Mobile'  },
        { title: 'Web applications',     desc: 'Fast, accessible interfaces with React, Next.js and Vue. SSR, edge and realtime when needed.',                                         tags: ['Next.js', 'React', 'TypeScript', 'Vue'],            color: '#00D4FF', iconKey: 'Web'     },
        { title: 'SaaS migration',       desc: 'We move on-premise products to multi-tenant cloud, with billing, auth and observability. Zero downtime.',                              tags: ['AWS', 'Multi-tenant', 'Stripe', 'Auth0'],           color: '#00E5A0', iconKey: 'Cloud'   },
        { title: 'Custom software',      desc: 'Internal systems, operational dashboards, back-office tools — built around your actual workflow.',                                     tags: ['Backend', 'APIs', 'Dashboards', 'ETL'],             color: '#F472B6', iconKey: 'Code'    },
        { title: 'DevOps & infra',       desc: 'CI/CD, IaC with Terraform, observability and cost control on AWS, GCP and Cloudflare.',                                               tags: ['Terraform', 'Docker', 'K8s', 'GitHub Actions'],     color: '#FFB800', iconKey: 'Server'  },
        { title: 'Technical consulting', desc: 'We audit code, define architecture and support existing teams through critical business decisions.',                                   tags: ['Architecture', 'Audits', 'Roadmaps'],               color: '#A78BFA', iconKey: 'Compass' },
      ],
    },
  },
};
