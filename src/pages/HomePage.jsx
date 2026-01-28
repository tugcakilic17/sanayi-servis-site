import Hero from '../components/Hero';
import CarSoftware from '../components/CarSoftware';
import About from '../components/About';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CarSoftware />
      <About />
      <Services />
      <Reviews />
      <Contact />
    </>
  );
}

