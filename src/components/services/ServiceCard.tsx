import { type ServiceCardProps } from '../../types/types';

export function ServiceCard({ index, title, desc, tags, color, icon }: ServiceCardProps) {
  return (
    <div
      className="service-card"
      style={{ '--service-color': color } as React.CSSProperties}
    >
      <div className="service-card-glow" />
      <div className="service-ix">/ 0{index + 1}</div>
      <div className="service-icon">{icon}</div>
      <div className="service-title">{title}</div>
      <div className="service-desc">{desc}</div>
      <div className="service-tags">
        {tags.map((tag) => (
          <span key={tag} className="service-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}
