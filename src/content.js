// Infinitia — i18n content
window.CONTENT = {
  es: {
    nav: {
      services: "Servicios",
      process: "Proceso",
      team: "Equipo",
      faq: "FAQ",
      contact: "Contacto",
      cta: "Agendar reunión",
    },
    hero: {
      tag: "Disponibles para nuevos proyectos Q2 2026",
      title_1: "Construimos",
      title_accent: "software",
      title_2: "donde tu negocio",
      title_3: "lo necesite.",
      sub: "Somos un equipo de ingeniería enfocado en apps móviles, plataformas web y migraciones a SaaS. Del prototipo al deploy, con la disciplina de un equipo interno.",
      cta_primary: "Agendar reunión",
      cta_secondary: "Ver servicios",
      meta: [
        { k: "Fundada", v: "2019 · Equipo distribuido" },
        { k: "Stack", v: "TypeScript · Swift · Kotlin · Go" },
        { k: "Clientes", v: "Fintech · Salud · Retail · SaaS" },
        { k: "Entregas", v: "Sprints de 2 semanas" },
      ],
    },
    services: {
      eyebrow: "Servicios",
      title_a: "Un solo equipo,",
      title_b: "toda la superficie del producto.",
      lede: "Trabajamos extremo a extremo. Diseñamos, construimos, desplegamos y sostenemos — sin derivar partes a terceros.",
      items: [
        {
          title: "Apps móviles",
          desc: "iOS y Android nativo o React Native. Desde la arquitectura inicial hasta publicación en las stores.",
          tags: ["Swift", "Kotlin", "React Native", "Expo"],
          color: "#6C63FF",
        },
        {
          title: "Aplicaciones web",
          desc: "Interfaces rápidas y accesibles con React, Next.js y Vue. SSR, edge y tiempo real cuando hace falta.",
          tags: ["Next.js", "React", "TypeScript", "Vue"],
          color: "#00D4FF",
        },
        {
          title: "Migración a SaaS",
          desc: "Llevamos productos on-premise a multi-tenant en la nube, con billing, auth y observabilidad incluidos.",
          tags: ["AWS", "Multi-tenant", "Stripe", "Auth0"],
          color: "#00E5A0",
        },
        {
          title: "Software a medida",
          desc: "Sistemas internos, dashboards operativos, herramientas de back-office hechas para tu flujo real.",
          tags: ["Backend", "APIs", "Dashboards", "ETL"],
          color: "#F472B6",
        },
        {
          title: "DevOps e infraestructura",
          desc: "CI/CD, IaC con Terraform, observabilidad y contención de costos en AWS, GCP y Cloudflare.",
          tags: ["Terraform", "Docker", "K8s", "GitHub Actions"],
          color: "#FFB800",
        },
        {
          title: "Consultoría técnica",
          desc: "Auditamos código, definimos arquitectura y acompañamos a equipos existentes en decisiones críticas.",
          tags: ["Arquitectura", "Auditoría", "Roadmaps"],
          color: "#A78BFA",
        },
      ],
    },
    process: {
      eyebrow: "Cómo trabajamos",
      title_a: "Proceso claro,",
      title_b: "sin sorpresas.",
      lede: "Un ciclo corto, iterativo y medible. Cada fase cierra con un entregable concreto que podés revisar.",
      steps: [
        {
          title: "Discovery",
          desc: "Reunión con el gerente a cargo. Entendemos el problema, el negocio, las restricciones. Salimos con un alcance acordado.",
          meta: "1 semana",
        },
        {
          title: "Diseño y arquitectura",
          desc: "Definimos stack, flujos y componentes. Entregamos prototipos navegables y un plan técnico detallado antes de escribir código.",
          meta: "2–3 semanas",
        },
        {
          title: "Desarrollo por sprints",
          desc: "Sprints de dos semanas con demo al final. Avanzás viendo el producto crecer, no un PDF de estado.",
          meta: "Iterativo",
        },
        {
          title: "QA y despliegue",
          desc: "Tests automatizados, ambiente de staging espejo de producción y despliegues revertibles con un comando.",
          meta: "Cada sprint",
        },
        {
          title: "Soporte y evolución",
          desc: "Monitoreo 24/7, SLA de respuesta, iteraciones posteriores y plan de evolución trimestral.",
          meta: "Continuo",
        },
      ],
    },
    stats: {
      items: [
        { v: "7", plus: "", k: "Años construyendo" },
        { v: "60", plus: "+", k: "Proyectos entregados" },
        { v: "18", plus: "", k: "Clientes activos" },
        { v: "99.9", plus: "%", k: "Uptime en producción" },
      ],
    },
    team: {
      eyebrow: "Equipo",
      title_a: "Diez personas,",
      title_b: "una sola responsabilidad.",
      lede: "Ingenieros, diseñadores y líderes técnicos que trabajan codo a codo con vos durante el proyecto.",
    },
    clients: {
      title: "Equipos que confiaron en nosotros",
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title_a: "Lo que la gente",
      title_b: "suele preguntar.",
      items: [
        {
          q: "¿Cómo arranca un proyecto con Infinitia?",
          a: "Agendás una reunión con el gerente a cargo. En esa primera llamada de 45 minutos evaluamos el proyecto, entendemos el contexto del negocio y salimos con un plan de discovery y un rango de inversión tentativo.",
        },
        {
          q: "¿Trabajan con startups o solo con empresas consolidadas?",
          a: "Ambos. Acompañamos desde el MVP de una startup hasta migraciones de sistemas de empresas con equipos de IT existentes. Ajustamos el alcance y la modalidad a cada etapa.",
        },
        {
          q: "¿Cuánto tarda un proyecto típico?",
          a: "Un MVP móvil o web ronda las 10–14 semanas. Una migración a SaaS depende de la complejidad: entre 3 y 9 meses. Definimos el cronograma exacto al cerrar el discovery.",
        },
        {
          q: "¿El código queda en mi poder?",
          a: "Sí, siempre. El repositorio vive en tu cuenta de GitHub o GitLab desde el día uno. Entregamos también documentación, diagramas de arquitectura y videos de handoff.",
        },
        {
          q: "¿Ofrecen mantenimiento post-lanzamiento?",
          a: "Sí. Tenemos planes de retainer mensual con SLA, monitoreo 24/7 y un pool de horas de desarrollo para iteraciones. Podés escalar o pausar el plan cuando lo necesites.",
        },
        {
          q: "¿Pueden sumarse a un equipo existente?",
          a: "Trabajamos como extensión del equipo interno con total frecuencia: squads integrados, stand-ups compartidos y herramientas de gestión en común.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title_a: "Agendá una reunión",
      title_accent: "con el gerente",
      title_b: "y evaluemos tu proyecto.",
      sub: "Una llamada de 45 minutos, sin costo. Salís con una evaluación clara del alcance, el tiempo y la inversión estimada.",
      details: [
        { k: "Email", v: "hola@infinitia.io" },
        { k: "Teléfono", v: "+54 11 5555 0142" },
        { k: "Zona horaria", v: "GMT-3 · Remoto global" },
        { k: "Respuesta", v: "Menos de 24 horas hábiles" },
      ],
      form: {
        title: "Agendar reunión",
        sub: "Completá el formulario. Te contactamos en menos de 24 horas.",
        name: "Nombre",
        name_ph: "Tu nombre completo",
        email: "Email",
        email_ph: "nombre@empresa.com",
        company: "Empresa",
        company_ph: "Nombre de la empresa",
        role: "Rol",
        role_ph: "CEO, CTO, Product...",
        interest: "¿Qué necesitás?",
        interests: ["App móvil", "Web app", "Migración SaaS", "Software a medida", "Consultoría", "Otro"],
        message: "Contanos del proyecto",
        message_ph: "Contexto, problema a resolver, timeline ideal...",
        submit: "Agendar reunión",
        success_title: "Reunión solicitada",
        success_sub: "El gerente te contactará en las próximas 24 horas hábiles para coordinar horario.",
      },
    },
    footer: {
      tagline: "Software para cada plataforma. Un equipo, de punta a punta.",
      cols: [
        {
          title: "Servicios",
          items: ["Apps móviles", "Aplicaciones web", "Migración a SaaS", "Software a medida", "DevOps", "Consultoría"],
        },
        {
          title: "Empresa",
          items: ["Equipo", "Proceso", "Clientes", "Blog"],
        },
        {
          title: "Contacto",
          items: ["hola@infinitia.io", "+54 11 5555 0142", "Buenos Aires · Remoto"],
        },
      ],
      rights: "© 2026 Infinitia — Todos los derechos reservados",
      built: "Construido con dedicación en Buenos Aires",
    },
  },
  en: {
    nav: {
      services: "Services",
      process: "Process",
      team: "Team",
      faq: "FAQ",
      contact: "Contact",
      cta: "Book a meeting",
    },
    hero: {
      tag: "Accepting new projects for Q2 2026",
      title_1: "We build",
      title_accent: "software",
      title_2: "wherever your business",
      title_3: "needs it.",
      sub: "An engineering team focused on mobile apps, web platforms and SaaS migrations. From prototype to deploy — with the discipline of an in-house team.",
      cta_primary: "Book a meeting",
      cta_secondary: "See services",
      meta: [
        { k: "Founded", v: "2019 · Distributed team" },
        { k: "Stack", v: "TypeScript · Swift · Kotlin · Go" },
        { k: "Clients", v: "Fintech · Health · Retail · SaaS" },
        { k: "Delivery", v: "Two-week sprints" },
      ],
    },
    services: {
      eyebrow: "Services",
      title_a: "One team,",
      title_b: "the whole product surface.",
      lede: "End to end. We design, build, deploy and maintain — nothing subcontracted out.",
      items: [
        {
          title: "Mobile apps",
          desc: "iOS and Android — native or React Native. From architecture to store publishing.",
          tags: ["Swift", "Kotlin", "React Native", "Expo"],
          color: "#6C63FF",
        },
        {
          title: "Web applications",
          desc: "Fast, accessible interfaces with React, Next.js and Vue. SSR, edge and realtime when needed.",
          tags: ["Next.js", "React", "TypeScript", "Vue"],
          color: "#00D4FF",
        },
        {
          title: "SaaS migration",
          desc: "We move on-premise products to multi-tenant cloud, with billing, auth and observability included.",
          tags: ["AWS", "Multi-tenant", "Stripe", "Auth0"],
          color: "#00E5A0",
        },
        {
          title: "Custom software",
          desc: "Internal systems, operational dashboards, back-office tools — built around your actual workflow.",
          tags: ["Backend", "APIs", "Dashboards", "ETL"],
          color: "#F472B6",
        },
        {
          title: "DevOps & infra",
          desc: "CI/CD, IaC with Terraform, observability and cost control on AWS, GCP and Cloudflare.",
          tags: ["Terraform", "Docker", "K8s", "GitHub Actions"],
          color: "#FFB800",
        },
        {
          title: "Technical consulting",
          desc: "We audit code, define architecture and support existing teams through critical decisions.",
          tags: ["Architecture", "Audits", "Roadmaps"],
          color: "#A78BFA",
        },
      ],
    },
    process: {
      eyebrow: "How we work",
      title_a: "Clear process,",
      title_b: "no surprises.",
      lede: "Short, iterative and measurable. Every phase ships a concrete deliverable you can review.",
      steps: [
        {
          title: "Discovery",
          desc: "A meeting with the managing partner. We map the problem, the business, the constraints — and leave with an agreed scope.",
          meta: "1 week",
        },
        {
          title: "Design & architecture",
          desc: "Stack, flows and components. You get navigable prototypes and a detailed technical plan before a line of code is written.",
          meta: "2–3 weeks",
        },
        {
          title: "Sprint development",
          desc: "Two-week sprints with a demo at the end. You watch the product grow — not a status PDF.",
          meta: "Iterative",
        },
        {
          title: "QA & deployment",
          desc: "Automated tests, a staging environment that mirrors production, and one-command rollbacks.",
          meta: "Every sprint",
        },
        {
          title: "Support & evolution",
          desc: "24/7 monitoring, response SLAs, post-launch iterations and a quarterly evolution plan.",
          meta: "Ongoing",
        },
      ],
    },
    stats: {
      items: [
        { v: "7", plus: "", k: "Years shipping" },
        { v: "60", plus: "+", k: "Projects delivered" },
        { v: "18", plus: "", k: "Active clients" },
        { v: "99.9", plus: "%", k: "Production uptime" },
      ],
    },
    team: {
      eyebrow: "Team",
      title_a: "Ten people,",
      title_b: "one shared responsibility.",
      lede: "Engineers, designers and tech leads who work side by side with you throughout the project.",
    },
    clients: {
      title: "Teams that trusted us",
    },
    faq: {
      eyebrow: "Frequently asked",
      title_a: "What people",
      title_b: "usually ask.",
      items: [
        {
          q: "How does a project start with Infinitia?",
          a: "You book a meeting with the managing partner. In that first 45-minute call we assess the project, understand the business context, and leave with a discovery plan and a tentative investment range.",
        },
        {
          q: "Do you work with startups or only established companies?",
          a: "Both. We handle everything from an early-stage MVP to system migrations for companies with existing IT teams. Scope and engagement model flex with the stage.",
        },
        {
          q: "How long does a typical project take?",
          a: "A mobile or web MVP runs 10–14 weeks. A SaaS migration depends on complexity — anywhere between 3 and 9 months. The exact timeline is set at the end of discovery.",
        },
        {
          q: "Do I own the code?",
          a: "Yes, always. The repo lives in your GitHub or GitLab account from day one. You also get documentation, architecture diagrams and handoff videos.",
        },
        {
          q: "Do you offer post-launch maintenance?",
          a: "Yes. Monthly retainer plans with SLA, 24/7 monitoring and a pool of development hours for iteration. Scale up or pause whenever you need.",
        },
        {
          q: "Can you join an existing team?",
          a: "All the time. We integrate as squads, share stand-ups and plug into your management tools.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title_a: "Book a meeting",
      title_accent: "with the partner",
      title_b: "and let's assess your project.",
      sub: "A 45-minute call at no cost. You'll leave with a clear assessment of scope, timeline and estimated investment.",
      details: [
        { k: "Email", v: "hola@infinitia.io" },
        { k: "Phone", v: "+54 11 5555 0142" },
        { k: "Timezone", v: "GMT-3 · Remote global" },
        { k: "Reply", v: "Under 24 business hours" },
      ],
      form: {
        title: "Book a meeting",
        sub: "Fill the form. We'll reach out in under 24 hours.",
        name: "Name",
        name_ph: "Your full name",
        email: "Email",
        email_ph: "name@company.com",
        company: "Company",
        company_ph: "Company name",
        role: "Role",
        role_ph: "CEO, CTO, Product...",
        interest: "What do you need?",
        interests: ["Mobile app", "Web app", "SaaS migration", "Custom software", "Consulting", "Other"],
        message: "Tell us about the project",
        message_ph: "Context, problem to solve, ideal timeline...",
        submit: "Book a meeting",
        success_title: "Meeting requested",
        success_sub: "The partner will contact you within 24 business hours to find a time.",
      },
    },
    footer: {
      tagline: "Software for every platform. One team, end to end.",
      cols: [
        {
          title: "Services",
          items: ["Mobile apps", "Web applications", "SaaS migration", "Custom software", "DevOps", "Consulting"],
        },
        {
          title: "Company",
          items: ["Team", "Process", "Clients", "Blog"],
        },
        {
          title: "Contact",
          items: ["hola@infinitia.io", "+54 11 5555 0142", "Buenos Aires · Remote"],
        },
      ],
      rights: "© 2026 Infinitia — All rights reserved",
      built: "Crafted with care in Buenos Aires",
    },
  },
};

window.TEAM = [
  { name: "María Alvarado", role: "Managing Partner",  c1: "#6C63FF", c2: "#00D4FF" },
  { name: "Diego Benítez",   role: "CTO · Architect",   c1: "#00D4FF", c2: "#00E5A0" },
  { name: "Sofía Caldera",   role: "Head of Design",    c1: "#F472B6", c2: "#A78BFA" },
  { name: "Joaquín Duarte",  role: "Lead iOS Engineer", c1: "#A78BFA", c2: "#6C63FF" },
  { name: "Elena Fernández", role: "Lead Android",      c1: "#00E5A0", c2: "#00D4FF" },
  { name: "Martín Gómez",    role: "Lead Web Engineer", c1: "#6C63FF", c2: "#F472B6" },
  { name: "Paula Herrera",   role: "DevOps Lead",       c1: "#FFB800", c2: "#F472B6" },
  { name: "Tomás Ibáñez",    role: "Backend · Platform",c1: "#00D4FF", c2: "#6C63FF" },
  { name: "Lucía Juárez",    role: "Product Manager",   c1: "#F472B6", c2: "#FFB800" },
  { name: "Rodrigo Keller",  role: "QA · Automation",   c1: "#00E5A0", c2: "#A78BFA" },
];

window.CLIENTS = [
  { name: "Nebula", glyph: "◆" },
  { name: "Arcadia", glyph: "◈" },
  { name: "Volt", glyph: "⚡" },
  { name: "Ostra", glyph: "◉" },
  { name: "Monolith", glyph: "▮" },
  { name: "Prism", glyph: "◇" },
  { name: "Linear-Q", glyph: "━" },
  { name: "Stratum", glyph: "≣" },
  { name: "Corta", glyph: "✕" },
  { name: "Hexa", glyph: "⬡" },
  { name: "Orbit", glyph: "◎" },
  { name: "Ridge", glyph: "△" },
];
