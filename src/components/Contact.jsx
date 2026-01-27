import { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="iletisim" className="contact section">
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
                  <p>Lorem İpsum Sanayi Sitesi<br />No: 123, Blok: A<br />Kadıköy / İstanbul</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon">
                  <Phone size={24} />
                </div>
                <div className="info-text">
                  <h4>Telefon</h4>
                  <p>
                    <a href="tel:+905551234567">+90 555 123 45 67</a>
                    <br />
                    <a href="tel:+905559876543">+90 555 987 65 43</a>
                  </p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon">
                  <Mail size={24} />
                </div>
                <div className="info-text">
                  <h4>E-posta</h4>
                  <p><a href="mailto:info@autotech.com">info@autotech.com</a></p>
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
          
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6258908668147!2d29.02589731541671!3d40.98743697930268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab85d40d7ab5d%3A0x1a7b35cc33a8c6a!2sKad%C4%B1k%C3%B6y%2C%20Istanbul!5e0!3m2!1sen!2str!4v1650000000000!5m2!1sen!2str"
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
              
              <div className="form-group">
                <label htmlFor="email">E-posta</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ornek@email.com"
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
