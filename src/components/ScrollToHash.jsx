import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HEADER_OFFSET = 90;

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const hash = location.hash;
    // Contact özel hash’leri: sayfa id’si "iletisim"
    if (hash === '#iletisim-harita' || hash === '#iletisim-telefon') {
      setTimeout(() => scrollToId('iletisim'), 50);
      return;
    }

    const id = hash.replace('#', '');
    if (!id) return;
    setTimeout(() => scrollToId(id), 50);
  }, [location.hash, location.pathname]);

  return null;
}

