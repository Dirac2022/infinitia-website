import {
  MobileIcon,
  WebIcon,
  CloudIcon,
  CodeIcon,
  ServerIcon,
  CompassIcon,
} from '../components/ui/Icons';

import { content } from '../i18n/content';

export const NAV_HREFS: { key: keyof typeof content.es.nav; href: string }[] = [
  { key: 'services', href: '#services' },
  { key: 'leadership', href: '#leadership' },
  { key: 'faq', href: '#faq' },
];

export const SERVICES = [
  {
    title: 'Apps móviles',
    desc: 'Desarrollo en iOS y Android. Desde la arquitectura inicial hasta el despliegue en las tiendas oficiales, bajo los más altos estándares empresariales.',
    tags: ['Swift', 'Kotlin', 'React Native', 'Expo'],
    color: '#6C63FF',
    icon: <MobileIcon width={20} height={20} />,
  },
  {
    title: 'Aplicaciones web',
    desc: 'Interfaces de alto desempeño enfocadas en la experiencia de usuario. Modernas arquitecturas que garantizan velocidad y disponibilidad global.',
    tags: ['Next.js', 'React', 'TypeScript', 'Vue'],
    color: '#00D4FF',
    icon: <WebIcon width={20} height={20} />,
  },
  {
    title: 'Migración a SaaS',
    desc: 'Tus productos locales hacia un modelo multi-tenant en la nube. Facturación, autenticación y observabilidad integrados. Sin interrupciones.',
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