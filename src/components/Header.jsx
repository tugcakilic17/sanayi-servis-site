import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
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

  const navLinks = [
    { href: '#anasayfa', label: 'Anasayfa' },
    { href: '#yazilim', label: 'Araç Yazılım' },
    { href: '#hakkimizda', label: 'Hakkımızda' },
    { href: '#hizmetler', label: 'Hizmetler' },
    { href: '#yorumlar', label: 'Yorumlar' },
    { href: '#iletisim', label: 'İletişim' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-top">
        <div className="container header-top-content">
          <div className="header-contact">
            <a href="tel:+905551234567">
              <Phone size={14} />
              <span>+90 555 123 45 67</span>
            </a>
            <a href="tel:+905559876543">
              <Phone size={14} />
              <span>+90 555 987 65 43</span>
            </a>
          </div>
          <div className="header-address">
            <MapPin size={14} />
            <span>Lorem İpsum Sanayi Sitesi No:123, İstanbul</span>
          </div>
        </div>
      </div>
      
      <nav className="navbar">
        <div className="container navbar-content">
          <a href="#anasayfa" className="logo">
            <span className="logo-text">AUTO</span>
            <span className="logo-accent">TECH</span>
          </a>
          
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
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
          
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
