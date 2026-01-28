import { ChevronDown, Wrench, Zap } from 'lucide-react';
import { useId, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { elektronikServices, mekanikServices } from '../data/servicesData';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();
  const mechanicalGridId = useId();
  const electronicGridId = useId();
  const [isMechanicalCollapsed, setIsMechanicalCollapsed] = useState(false);
  const [isElectronicCollapsed, setIsElectronicCollapsed] = useState(false);

  const ServiceCard = ({ service, index }) => (
    <div 
      className="service-card"
      style={{ animationDelay: `${index * 0.1}s` }}
      role="link"
      tabIndex={0}
      aria-label={`${service.title} detay sayfasına git`}
      onClick={() => navigate(`/hizmetler/${service.id}`)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          navigate(`/hizmetler/${service.id}`);
        }
      }}
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
        <Link
          to={`/hizmetler/${service.id}`}
          className="service-link"
          onClick={(e) => e.stopPropagation()}
        >
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
            <button
              type="button"
              className="category-toggle"
              aria-expanded={!isMechanicalCollapsed}
              aria-controls={mechanicalGridId}
              onClick={() => setIsMechanicalCollapsed((v) => !v)}
            >
              <Wrench size={28} />
              <span>Mekanik Hizmetlerimiz</span>
              <ChevronDown
                size={28}
                className={`category-chevron ${isMechanicalCollapsed ? 'is-collapsed' : ''}`}
              />
            </button>
          </h3>
          <div
            id={mechanicalGridId}
            className={`services-grid ${isMechanicalCollapsed ? 'is-collapsed' : ''}`}
          >
            {mekanikServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
        
        {/* Yazılım Hizmetleri */}
        <div className="services-category">
          <h3 className="category-title">
            <button
              type="button"
              className="category-toggle"
              aria-expanded={!isElectronicCollapsed}
              aria-controls={electronicGridId}
              onClick={() => setIsElectronicCollapsed((v) => !v)}
            >
              <Zap size={28} />
              <span>Elektronik & Yazılım Hizmetlerimiz</span>
              <ChevronDown
                size={28}
                className={`category-chevron ${isElectronicCollapsed ? 'is-collapsed' : ''}`}
              />
            </button>
          </h3>
          <div
            id={electronicGridId}
            className={`services-grid ${isElectronicCollapsed ? 'is-collapsed' : ''}`}
          >
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
