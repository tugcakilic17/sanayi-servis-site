import { Phone, MapPin, Instagram, ChevronUp } from 'lucide-react';
import logoImg from '../assets/logo.jpg';
import ecutunedImg from '../assets/ecutuned.png';
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
              <img src={logoImg} alt="Logo" className="footer-logo-img" />
              <span className="footer-logo-divider">/</span>
              <img src={ecutunedImg} alt="ECU Tuned" className="footer-logo-img ecutuned" />
            </a>
            <p className="footer-description">
              1957'den bu yana Çanakkale Merkez'de mekanik servis ve elektronik hizmetleri alanında 
              faaliyet gösteren firmamız, tecrübesini günümüz teknolojileriyle birleştirerek hizmet vermektedir.
            </p>
            <div className="footer-social">
              <a href="#iletisim-harita" aria-label="Konum"><MapPin size={20} /></a>
              <a href="#iletisim-telefon" aria-label="Telefon"><Phone size={20} /></a>
              <a href="https://instagram.com/starlarotoservis" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
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
              <span>Küçük Sanayi Sitesi, 6. Sokak No: 13, Çanakkale</span>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <span>+90 (533) 677 70 60</span>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <span>+90 (537) 341 17 00</span>
            </div>
            <div className="contact-item">
              <Instagram size={18} />
              <span>@starlarotoservis</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Starlar Oto Servis. Tüm hakları saklıdır.</p>
          <button className="scroll-top" onClick={scrollToTop} aria-label="Yukarı çık">
            <ChevronUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
