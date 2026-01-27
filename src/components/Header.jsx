import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import logoImg from '../assets/logo.jpg';
import ecutunedImg from '../assets/ecutuned.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '#anasayfa', label: 'Anasayfa' },
    { href: '#yazilim', label: 'Araç Yazılım' },
    { href: '#hakkimizda', label: 'Hakkımızda' },
    { href: '#hizmetler', label: 'Hizmetler' },
    { href: '#yorumlar', label: 'Yorumlar' },
    { href: '#iletisim', label: 'İletişim' },
  ];

  const Logo = () => (
    <div className="logo-images">
      <img src={logoImg} alt="Logo" className="logo-img" />
      <span className="logo-divider">/</span>
      <img src={ecutunedImg} alt="ECU Tuned" className="logo-img ecutuned" />
    </div>
  );

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-top">
        <div className="container header-top-content">
          <div className="header-contact">
            <a href="tel:+905336777060">
              <Phone size={14} />
              <span>+90 (533) 677 70 60</span>
            </a>
            <a href="tel:+905373411700">
              <Phone size={14} />
              <span>+90 (537) 341 17 00</span>
            </a>
          </div>
          <div className="header-address">
            <MapPin size={14} />
            <span>Küçük Sanayi Sitesi, 6. Sokak No: 13, Çanakkale</span>
          </div>
        </div>
      </div>
      
      <nav className="navbar">
        <div className="container navbar-content">
          <a href="#anasayfa" className="logo">
            <Logo />
          </a>
          
          {/* Mobile Menu Overlay */}
          <div 
            className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <div className="nav-menu-header">
              <a href="#anasayfa" className="logo" onClick={() => setIsMenuOpen(false)}>
                <Logo />
              </a>
              <button 
                className="menu-close"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Menüyü kapat"
              >
                <X size={28} />
              </button>
            </div>
            
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="nav-menu-footer">
              <a href="tel:+905336777060" className="menu-phone">
                <Phone size={18} />
                <span>+90 (533) 677 70 60</span>
              </a>
            </div>
          </div>
          
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menüyü aç"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
