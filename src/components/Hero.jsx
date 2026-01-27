import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80',
      title: 'Profesyonel Araç Servisi',
      subtitle: 'Uzman kadromuzla aracınız güvende'
    },
    {
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80',
      title: 'Araç Yazılım Hizmetleri',
      subtitle: 'Chip tuning ve ECU yazılım çözümleri'
    },
    {
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1920&q=80',
      title: 'Motor Bakım & Onarım',
      subtitle: '1957\'den bugüne tecrübemizle hizmetinizdeyiz'
    },
    {
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=80',
      title: 'Performans Artışı',
      subtitle: 'Aracınızın potansiyelini ortaya çıkarın'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="anasayfa" className="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay"></div>
        </div>
      ))}
      
      <div className="hero-content">
        <div className="container">
          <h1 className="hero-title">
            {slides[currentSlide].title}
          </h1>
          <p className="hero-subtitle">
            {slides[currentSlide].subtitle}
          </p>
          <div className="hero-buttons">
            <a href="#iletisim-telefon" className="btn btn-primary">
              Randevu Al
            </a>
            <a href="#hizmetler" className="btn btn-outline">
              Hizmetlerimiz
            </a>
          </div>
        </div>
      </div>
      
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Slide ${index + 1}`}
          >
            <span className="dot-inner"></span>
          </button>
        ))}
      </div>
      
      <a href="#yazilim" className="hero-scroll">
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
