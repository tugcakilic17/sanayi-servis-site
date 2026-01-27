import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, ChevronUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#anasayfa" className="footer-logo">
              <span className="logo-text">AUTO</span>
              <span className="logo-accent">TECH</span>
            </a>
            <p className="footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="Youtube"><Youtube size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Hızlı Linkler</h4>
            <ul>
              <li><a href="#anasayfa">Anasayfa</a></li>
              <li><a href="#yazilim">Araç Yazılım</a></li>
              <li><a href="#hakkimizda">Hakkımızda</a></li>
              <li><a href="#hizmetler">Hizmetler</a></li>
              <li><a href="#yorumlar">Yorumlar</a></li>
              <li><a href="#iletisim">İletişim</a></li>
            </ul>
          </div>
          
          <div className="footer-services">
            <h4>Hizmetlerimiz</h4>
            <ul>
              <li><a href="#hizmetler">Chip Tuning</a></li>
              <li><a href="#hizmetler">Motor Bakım</a></li>
              <li><a href="#hizmetler">ECU Yazılım</a></li>
              <li><a href="#hizmetler">Performans Artışı</a></li>
              <li><a href="#hizmetler">DPF/EGR Çözümleri</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>İletişim</h4>
            <div className="contact-item">
              <MapPin size={18} />
              <span>Lorem İpsum Sanayi Sitesi No: 123, İstanbul</span>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <span>+90 555 123 45 67</span>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <span>+90 555 987 65 43</span>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <span>info@autotech.com</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 AutoTech. Tüm hakları saklıdır.</p>
          <button className="scroll-top" onClick={scrollToTop} aria-label="Yukarı çık">
            <ChevronUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
