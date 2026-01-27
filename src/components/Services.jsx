import { Cpu, Wrench, Settings, Gauge, Cog, Zap, Car, Shield } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Cpu size={40} />,
      title: 'Chip Tuning',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80'
    },
    {
      icon: <Wrench size={40} />,
      title: 'Motor Bakım',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80'
    },
    {
      icon: <Settings size={40} />,
      title: 'ECU Yazılım',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=400&q=80'
    },
    {
      icon: <Gauge size={40} />,
      title: 'Performans Artışı',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80'
    },
    {
      icon: <Cog size={40} />,
      title: 'Şanzıman Bakım',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=400&q=80'
    },
    {
      icon: <Zap size={40} />,
      title: 'Elektrik Sistemleri',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=400&q=80'
    },
    {
      icon: <Car size={40} />,
      title: 'Genel Bakım',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400&q=80'
    },
    {
      icon: <Shield size={40} />,
      title: 'DPF/EGR Çözümleri',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=400&q=80'
    }
  ];

  return (
    <section id="hizmetler" className="services section">
      <div className="container">
        <h2 className="section-title">
          Hizmetlerimiz <span>Neler</span>
        </h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-overlay">
                  <div className="service-icon">{service.icon}</div>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href="#iletisim" className="service-link">
                  Detaylı Bilgi
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
