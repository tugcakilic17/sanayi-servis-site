import { useEffect, useMemo, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

import { allServices, elektronikServices, mekanikServices } from '../data/servicesData';
import './ServicesDetailPage.css';

export default function ServicesDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mekanikOpen, setMekanikOpen] = useState(true);
  const [elektronikOpen, setElektronikOpen] = useState(true);

  useEffect(() => {
    if (!id) {
      navigate('/hizmetler/motor-genel-onarim', { replace: true });
      return;
    }

    // Eski linkleri yeni başlığa yönlendir
    const aliases = {
      'universal-torna': 'torna-tesviye-islemleri',
      'matkap-islemleri': 'torna-tesviye-islemleri',
      'pres-islemleri': 'torna-tesviye-islemleri',
    };

    if (aliases[id]) {
      navigate(`/hizmetler/${aliases[id]}`, { replace: true });
      return;
    }

    // Geçersiz id gelirse varsayılan sayfaya al
    const exists = allServices.some((s) => s.id === id);
    if (!exists) {
      navigate('/hizmetler/motor-genel-onarim', { replace: true });
    }
  }, [id, navigate]);

  // Sayfa açıldığında veya hizmet değiştiğinde sayfanın üstüne yumuşak scroll
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 50);
    
    return () => clearTimeout(timer);
  }, [id]);

  const selected = useMemo(() => {
    const found = allServices.find((s) => s.id === id);
    return found ?? mekanikServices[0];
  }, [id]);

  const SelectedIcon = selected.Icon;

  return (
    <section className="services-detail-page">
      <div className="container services-detail-layout">
        <aside className="services-detail-sidebar">
          <div className="services-detail-sidebar-inner">
            <div className="services-detail-group">
              <button 
                className={`services-detail-group-title ${mekanikOpen ? 'open' : ''}`}
                onClick={() => setMekanikOpen(!mekanikOpen)}
                aria-expanded={mekanikOpen}
              >
                <span>Mekanik Hizmetlerimiz</span>
                <ChevronDown className="services-detail-chevron" size={20} strokeWidth={2.5} />
              </button>
              <div className={`services-detail-list ${mekanikOpen ? 'open' : ''}`}>
                {mekanikServices.map((s) => (
                  <NavLink
                    key={s.id}
                    to={`/hizmetler/${s.id}`}
                    className={({ isActive }) =>
                      `services-detail-item ${isActive ? 'active' : ''}`
                    }
                  >
                    {s.title}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="services-detail-group">
              <button 
                className={`services-detail-group-title ${elektronikOpen ? 'open' : ''}`}
                onClick={() => setElektronikOpen(!elektronikOpen)}
                aria-expanded={elektronikOpen}
              >
                <span>Elektronik & Yazılım Hizmetlerimiz</span>
                <ChevronDown className="services-detail-chevron" size={20} strokeWidth={2.5} />
              </button>
              <div className={`services-detail-list ${elektronikOpen ? 'open' : ''}`}>
                {elektronikServices.map((s) => (
                  <NavLink
                    key={s.id}
                    to={`/hizmetler/${s.id}`}
                    className={({ isActive }) =>
                      `services-detail-item ${isActive ? 'active' : ''}`
                    }
                  >
                    {s.title}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <article className="services-detail-content">
          <header className="services-detail-hero">
            <div className="services-detail-hero-bg">
              <img src={selected.image} alt={selected.title} />
              <div className="services-detail-hero-overlay" />
            </div>
            <div className="services-detail-hero-content">
              <div className="services-detail-hero-icon">
                <SelectedIcon size={22} />
              </div>
              <h1 className="services-detail-title">{selected.title}</h1>
              <p className="services-detail-subtitle">{selected.description}</p>
            </div>
          </header>

          <div className="services-detail-body">
            <h2 className="services-detail-section-title">Detaylı Açıklama</h2>
            {selected.detailsIntro ? (
              <div className="services-detail-intro">{selected.detailsIntro}</div>
            ) : null}
            <div className="services-detail-text">
              {selected.details.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

