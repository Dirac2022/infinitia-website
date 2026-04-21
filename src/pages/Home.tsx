import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
    </>
  );
}
