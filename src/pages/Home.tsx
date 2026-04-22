import { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { ContactModal } from '../components/ContactModal';
import { Leadership } from '../components/Leadership';

export function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  return (
    <>
      <Header onOpenContact={openContact} />
      <main>
        <Hero onOpenContact={openContact} />
        <Services />
        <Leadership />
      </main>
      <ContactModal open={contactOpen} onClose={closeContact} />
    </>
  );
}
