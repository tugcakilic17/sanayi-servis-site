import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Clock, Instagram, Send, Navigation, ExternalLink } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const MAP_LAT_LNG = '40.1457698,26.4241248';
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_LAT_LNG)}`;
  const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAP_LAT_LNG)}`;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [activeGlow, setActiveGlow] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      
      if (hash === '#iletisim-telefon' || hash === '#iletisim') {
        setActiveGlow('phone');
        // Scroll to contact section
        if (sectionRef.current) {
          const yOffset = -80; // Header offset
          const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      } else if (hash === '#iletisim-harita') {
        setActiveGlow('map');
        // Scroll to contact section
        if (sectionRef.current) {
          const yOffset = -80;
          const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    };

    // Check on mount
    checkHash();

    // Listen for hash changes
    window.addEventListener('hashchange', checkHash);
    
    // Also listen for clicks on links that might change the hash
    const handleClick = (e) => {
      const target = e.target.closest('a');
      if (target) {
        const href = target.getAttribute('href') || '';
        const isContactHash =
          href === '#iletisim-telefon' ||
          href === '#iletisim' ||
          href === '#iletisim-harita' ||
          href.endsWith('/#iletisim-telefon') ||
          href.endsWith('/#iletisim') ||
          href.endsWith('/#iletisim-harita') ||
          href.endsWith('#iletisim-telefon') ||
          href.endsWith('#iletisim') ||
          href.endsWith('#iletisim-harita');

        if (isContactHash) {
          setTimeout(checkHash, 50);
        }
      }
    };
    
    document.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('hashchange', checkHash);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextErrors = {
      name: formData.name.trim() ? '' : 'Ad Soyad zorunludur.',
      phone: formData.phone.trim() ? '' : 'Telefon zorunludur.',
      message: formData.message.trim() ? '' : 'Mesaj zorunludur.',
    };

    setErrors(nextErrors);
    const hasError = Object.values(nextErrors).some(Boolean);
    if (hasError) return;

    // Form geçerliyse Formspree'ye gönder
    e.currentTarget.submit();
  };

  return (
    <section id="iletisim" className="contact section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">
          Bize <span>Ulaşın</span>
        </h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">İletişim Bilgileri</h3>
            
            <div className="info-cards">
              <a
                className="info-card address-card"
                href={mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Adresi Google Maps'te aç"
              >
                <div className="info-icon">
                  <MapPin size={24} />
                </div>
                <div className="info-text">
                  <h4>Adres</h4>
                  <p>Küçük Sanayi Sitesi<br />6. Sokak No: 13<br />17100 Çanakkale Merkez/Çanakkale</p>
                  <span className="address-open">
                    <ExternalLink size={14} />
                    <span>Google Maps’te Aç</span>
                  </span>
                </div>
              </a>
              
              <div className={`info-card phone-card ${activeGlow === 'phone' ? 'glow-active' : ''}`}>
                <div className="info-icon">
                  <Phone size={24} />
                </div>
                <div className="info-text">
                  <h4>Telefon</h4>
                  <p>
                    <a href="tel:+905336777060">+90 (533) 677 70 60</a>
                    <br />
                    <a href="tel:+905373411700">+90 (537) 341 17 00</a>
                  </p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon">
                  <Instagram size={24} />
                </div>
                <div className="info-text">
                  <h4>Instagram</h4>
                  <p><a href="https://instagram.com/starlarotoservis" target="_blank" rel="noopener noreferrer">@starlarotoservis</a></p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon">
                  <Clock size={24} />
                </div>
                <div className="info-text">
                  <h4>Çalışma Saatleri</h4>
                  <p>Pazartesi - Cumartesi<br />08:00 - 19:00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`contact-map-wrapper ${activeGlow === 'map' ? 'glow-active' : ''}`}>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.843495033104!2d26.42412477522835!3d40.145769771484396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b1a9cc08787731%3A0x891f3706f3ebf51!2sStarlar%20Otomotiv%20Servis%2C%20Bak%C4%B1m%20Hizmetleri!5e0!3m2!1str!2str!4v1769554784545!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Konum"
              ></iframe>
            </div>
            <div className="map-buttons">
              <a 
                href={mapsDirectionsUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="map-btn directions-btn"
              >
                <Navigation size={18} />
                <span>Yol Tarifi Al</span>
              </a>
              <a 
                href={mapsSearchUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="map-btn open-btn"
              >
                <ExternalLink size={18} />
                <span>Google Maps'te Aç</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="feedback-section">
          <div className="feedback-header">
            <h3>Görüş ve Öneriler</h3>
            <p>Sizden duymak isteriz. Bize mesaj gönderin.</p>
          </div>
          
          <form
            className="feedback-form"
            action="https://formspree.io/f/mdazooed"
            method="POST"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Ad Soyad</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Adınız Soyadınız"
                  required
                  aria-invalid={Boolean(errors.name)}
                  className={errors.name ? 'input-error' : undefined}
                />
                {errors.name && <small className="field-error">{errors.name}</small>}
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+90 5XX XXX XX XX"
                  required
                  aria-invalid={Boolean(errors.phone)}
                  className={errors.phone ? 'input-error' : undefined}
                />
                {errors.phone && <small className="field-error">{errors.phone}</small>}
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mesajınız</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mesajınızı buraya yazın..."
                rows="5"
                required
                aria-invalid={Boolean(errors.message)}
                className={errors.message ? 'input-error' : undefined}
              ></textarea>
              {errors.message && <small className="field-error">{errors.message}</small>}
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
            >
              <Send size={20} />
              <span>Gönder</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
