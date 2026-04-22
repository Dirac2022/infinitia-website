import { useEffect, useState } from 'react';

export function CursorGlow() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Usamos requestAnimationFrame para máxima fluidez y cero tirones
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{
        background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(108, 99, 255, 0.04), transparent 40%)`,
        mixBlendMode: 'screen',
      }}
      aria-hidden="true"
    />
  );
}
