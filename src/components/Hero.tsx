import { Button } from './ui/Button';
import { Terminal } from './Terminal';

export function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-bg" />
      <div className="hero-glow" />

      <div className="relative z-[2] w-full max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-[1.1fr_1fr] gap-[60px] items-center">

          {/* Left */}
          <div className="flex flex-col">
            <div className="hero-tag">
              <span className="hero-tag-dot" />
              <span>Disponibles para nuevos proyectos</span>
            </div>

            <h1 className="text-[clamp(38px,5.5vw,80px)] font-semibold tracking-[-0.035em] leading-[0.98] max-w-[800px] mb-8">
              Desarrollamos{' '}
              <span className="text-accent italic font-medium">software a medida</span>{' '}
              <span className="text-fg-muted font-medium">con inteligencia</span>
              <br />
              <span className="text-fg-muted font-medium">de negocio.</span>
            </h1>

            <p className="text-[17px] text-fg-secondary max-w-[520px] leading-[1.55] mb-10">
              Somos un equipo de software enfocado en plataformas web , app moviles y soluciones de inteligencia de negocio. Del prototipo al deployd , con la disciplina de un equipo interno.
            </p>

            <div className="flex gap-3 flex-wrap mb-20">
              <Button
                variant="primary"
                onClick={() => { window.location.href = 'mailto:hola@infinitia.io'; }}
              >
                Agendar reunion →
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ver servicios
              </Button>
            </div>
          </div>

          {/* Right — Terminal */}
          <div>
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}
