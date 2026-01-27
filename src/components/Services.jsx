import { Wrench, Cog, Settings, Gauge, Cpu, Zap, Car, Shield, Clock, CircleDot, Disc, Activity, Radio, RotateCcw, Search, RefreshCw } from 'lucide-react';
import diagnostikImg from '../assets/diagnostik.jpg';
import './Services.css';

const Services = () => {
  const mekanikServices = [
    {
      icon: <Wrench size={40} />,
      title: 'Motor & Genel Onarım',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80'
    },
    {
      icon: <Clock size={40} />,
      title: 'Periyodik Bakım',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400&q=80'
    },
    {
      icon: <Cog size={40} />,
      title: 'Şanzıman Bakım',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      image: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=400&q=80'
    },
    {
      icon: <CircleDot size={40} />,
      title: 'Universal Torna',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80'
    },
    {
      icon: <Settings size={40} />,
      title: 'Matkap İşlemleri',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80'
    },
    {
      icon: <Car size={40} />,
      title: 'Yakıt Sistemi Temizliği',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80'
    },
    {
      icon: <Activity size={40} />,
      title: 'Pres İşlemleri',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=400&q=80'
    },
    {
      icon: <Disc size={40} />,
      title: 'Kampana & Disk Tornası',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80'
    }
  ];

  const yazilimServices = [
    {
      icon: <Cpu size={40} />,
      title: 'Chiptuning',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80'
    },
    {
      icon: <Shield size={40} />,
      title: 'EGR/DPF Çözümleri',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=400&q=80'
    },
    {
      icon: <Radio size={40} />,
      title: 'Start/Stop Sistemi Çözümleri',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=400&q=80'
    },
    {
      icon: <Gauge size={40} />,
      title: 'Performans Artışı',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80'
    },
    {
      icon: <Zap size={40} />,
      title: 'Elektrik Sistemleri',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      image: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=400&q=80'
    },
    {
      icon: <RotateCcw size={40} />,
      title: 'Şanzıman Yazılımı',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      image: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=400&q=80'
    },
    {
      icon: <Search size={40} />,
      title: 'Diyagnostik Arıza Tespit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      image: diagnostikImg
    },
    {
      icon: <RefreshCw size={40} />,
      title: 'Rejenerasyon İşlemleri',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80'
    }
  ];

  const ServiceCard = ({ service, index }) => (
    <div 
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
  );

  return (
    <section id="hizmetler" className="services section">
      <div className="container">
        <h2 className="section-title">
          Hizmetlerimiz <span>Neler</span>
        </h2>
        
        {/* Mekanik Hizmetler */}
        <div className="services-category">
          <h3 className="category-title">
            <Wrench size={28} />
            <span>Mekanik Hizmetlerimiz</span>
          </h3>
          <div className="services-grid">
            {mekanikServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
        
        {/* Yazılım Hizmetleri */}
        <div className="services-category">
          <h3 className="category-title">
            <Zap size={28} />
            <span>Elektronik Hizmetlerimiz</span>
          </h3>
          <div className="services-grid">
            {yazilimServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
