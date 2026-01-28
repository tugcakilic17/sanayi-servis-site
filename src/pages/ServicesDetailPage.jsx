import { useEffect, useMemo, useRef } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

import { allServices, elektronikServices, mekanikServices } from '../data/servicesData';
import './ServicesDetailPage.css';

export default function ServicesDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const contentRef = useRef(null);

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

  // Mobilde hizmet değiştiğinde içerik kısmına scroll
  useEffect(() => {
    const isMobile = window.innerWidth <= 1024;
    if (isMobile && contentRef.current) {
      const headerOffset = 100;
      const elementPosition = contentRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
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
              <div className="services-detail-group-title">Mekanik Hizmetlerimiz</div>
              <div className="services-detail-list">
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
              <div className="services-detail-group-title">Elektronik & Yazılım Hizmetlerimiz</div>
              <div className="services-detail-list">
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

        <article className="services-detail-content" ref={contentRef}>
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

