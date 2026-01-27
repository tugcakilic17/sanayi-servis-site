import Header from './components/Header';
import Hero from './components/Hero';
import CarSoftware from './components/CarSoftware';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <CarSoftware />
        <About />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
