import {
  MobileIcon,
  WebIcon,
  CloudIcon,
  CodeIcon,
  ServerIcon,
  CompassIcon,
} from '../components/ui/Icons';


export const NAV_LINKS = [
  { label: 'Servicios',  href: '#services' },
  { label: 'Proceso',    href: '#process' },
  { label: 'Equipo',    href: '#team' },
  { label: 'FAQ',       href: '#faq' },
  { label: 'Contacto',     href: '#contact' }
];

export const SERVICES = [
  {
    title: 'Apps móviles',
    desc: 'iOS y Android nativo o React Native. Desde la arquitectura inicial hasta publicación en las stores con calidad enterprise.',
    tags: ['Swift', 'Kotlin', 'React Native', 'Expo'],
    color: '#6C63FF',
    icon: <MobileIcon width={20} height={20} />,
  },
  {
    title: 'Aplicaciones web',
    desc: 'Interfaces rápidas y accesibles con React, Next.js y Vue. SSR, edge y tiempo real cuando hace falta.',
    tags: ['Next.js', 'React', 'TypeScript', 'Vue'],
    color: '#00D4FF',
    icon: <WebIcon width={20} height={20} />,
  },
  {
    title: 'Migración a SaaS',
    desc: 'Llevamos productos on-premise a multi-tenant en la nube, con billing, auth y observabilidad incluidos. Sin caídas.',
    tags: ['AWS', 'Multi-tenant', 'Stripe', 'Auth0'],
    color: '#00E5A0',
    icon: <CloudIcon width={20} height={20} />,
  },
  {
    title: 'Software a medida',
    desc: 'Sistemas internos, dashboards operativos y herramientas de back-office hechas alrededor de tu flujo real.',
    tags: ['Backend', 'APIs', 'Dashboards', 'ETL'],
    color: '#F472B6',
    icon: <CodeIcon width={20} height={20} />,
  },
  {
    title: 'DevOps e infraestructura',
    desc: 'CI/CD, IaC con Terraform, observabilidad y contención de costos en AWS, GCP y Cloudflare.',
    tags: ['Terraform', 'Docker', 'K8s', 'GitHub Actions'],
    color: '#FFB800',
    icon: <ServerIcon width={20} height={20} />,
  },
  {
    title: 'Consultoría técnica',
    desc: 'Auditamos código, definimos arquitectura y acompañamos a equipos existentes en decisiones críticas de negocio.',
    tags: ['Arquitectura', 'Auditoría', 'Roadmaps'],
    color: '#A78BFA',
    icon: <CompassIcon width={20} height={20} />,
  },
];