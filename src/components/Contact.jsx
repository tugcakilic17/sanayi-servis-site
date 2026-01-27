import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Clock, Instagram, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
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
        const href = target.getAttribute('href');
        if (href === '#iletisim-telefon' || href === '#iletisim' || href === '#iletisim-harita') {
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 3000);
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
              <div className="info-card">
                <div className="info-icon">
                  <MapPin size={24} />
                </div>
                <div className="info-text">
                  <h4>Adres</h4>
                  <p>Küçük Sanayi Sitesi<br />6. Sokak No: 13<br />17100 Çanakkale Merkez/Çanakkale</p>
                </div>
              </div>
              
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
          
          <div className={`contact-map ${activeGlow === 'map' ? 'glow-active' : ''}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.5!2d26.4134!3d40.1553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b1a9c3c9c3c9c3%3A0x0!2sK%C3%BC%C3%A7%C3%BCk%20Sanayi%20Sitesi%2C%206.%20Sokak%20No%3A%2013%2C%2017100%20%C3%87anakkale!5e0!3m2!1str!2str!4v1706000000000!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Konum"
            ></iframe>
          </div>
        </div>
        
        <div className="feedback-section">
          <div className="feedback-header">
            <h3>Görüş ve Öneriler</h3>
            <p>Sizden duymak isteriz. Bize mesaj gönderin.</p>
          </div>
          
          <form className="feedback-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Ad Soyad <span className="optional">(İsteğe bağlı)</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Adınız Soyadınız"
                />
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
                />
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
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`submit-btn ${isSubmitted ? 'submitted' : ''}`}
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle size={20} />
                  <span>Gönderildi!</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Gönder</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
