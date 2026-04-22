import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import { LangProvider } from './context/LangContext';
import { Home } from './pages/Home';
import { CursorGlow } from './components/CursorGlow';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.08, // Efecto de inercia y suavidad perfecto
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <LangProvider>
      <CursorGlow />
      <Home />
    </LangProvider>
  );
}

export default App;
