import { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { ContactModal } from '../components/ContactModal';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 25c7480 (feat: integracion de carrusel dinamico, footer y FAQ)
import { Leadership } from '../components/Leadership';
import Case from '../components/Case';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
<<<<<<< HEAD
=======
>>>>>>> bbdb7be (feat: integracion de carrusel dinamico, footer y FAQ)
>>>>>>> 25c7480 (feat: integracion de carrusel dinamico, footer y FAQ)

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
<<<<<<< HEAD
        <Case />
        <Leadership />
        <FAQ />
      </main>
      <Footer />
    </main >
=======
<<<<<<< HEAD
=======
        <Case />
        <Leadership />
        <FAQ />
>>>>>>> bbdb7be (feat: integracion de carrusel dinamico, footer y FAQ)
      </main>
      <Footer />
>>>>>>> 25c7480 (feat: integracion de carrusel dinamico, footer y FAQ)
      <ContactModal open={contactOpen} onClose={closeContact} />
    </>
  );
}
