import { Wrench, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { elektronikServices, mekanikServices } from '../data/servicesData';
import './Services.css';

const Services = () => {
  const ServiceCard = ({ service, index }) => (
    <div 
      className="service-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="service-image">
        <img src={service.image} alt={service.title} />
        <div className="service-overlay">
          <div className="service-icon">
            <service.Icon size={40} />
          </div>
        </div>
      </div>
      <div className="service-content">
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
        <Link to={`/hizmetler/${service.id}`} className="service-link">
          Detaylı Bilgi
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
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
              <ServiceCard key={service.id} service={service} index={index} />
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
            {elektronikServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
