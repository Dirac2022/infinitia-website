import { ServiceCard } from './services/ServiceCard';
import { SERVICES } from '../constants';

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">Servicios</div>
            <h2 className="section-title">
              Todo el stack tecnológico,{' '}
              <em>una sola casa.</em>
            </h2>
          </div>
          <p className="section-lede">
            Desde apps móviles hasta infraestructura cloud. Diseñamos,
            construimos, desplegamos y sostenemos — sin derivar nada a terceros.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
