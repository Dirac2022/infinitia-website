import { LangProvider } from './context/LangContext';
import { Home } from './pages/Home';
import { CursorGlow } from './components/CursorGlow';

function App() {
  return (
    <LangProvider>
      <CursorGlow />
      <Home />
    </LangProvider>
  );
}

export default App;
