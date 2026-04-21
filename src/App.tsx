import { LangProvider } from './context/LangContext';
import { Home } from './pages/Home';

function App() {
  return (
    <LangProvider>
      <Home />
    </LangProvider>
  );
}

export default App;
