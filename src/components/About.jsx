import { Award, Users, Wrench } from 'lucide-react';
import './About.css';

const About = () => {
  const stats = [
    { icon: <Award size={32} />, value: '60+', label: 'Yıllık Tecrübe' },
    { icon: <Users size={32} />, value: '2500+', label: 'Mutlu Müşteri' },
    { icon: <Wrench size={32} />, value: '10000+', label: 'Tamamlanan İş' },
  ];

  return (
    <section id="hakkimizda" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80" 
              alt="Servis"
            />
            <div className="about-image-overlay">
              <span className="experience-badge">
                <strong>60+</strong>
                <span>Yıllık Tecrübe</span>
              </span>
            </div>
          </div>
          
          <div className="about-text">
            <h2 className="section-title left-aligned">
              Servisimiz <span>Hakkında</span>
            </h2>
            
            <p className="about-description">
              1957'den bu yana Çanakkale Merkez'de mekanik servis alanında faaliyet gösteren firmamız, 
              otomotiv sektöründeki tecrübesini günümüz teknolojileriyle birleştirerek hizmet vermektedir. 
              Kurulduğumuz günden bu yana araç bakım ve onarım hizmetlerinde kalite, güven ve müşteri 
              memnuniyetini ön planda tutmaktayız.
            </p>
            
            <p className="about-description">
              Gelişen otomotiv teknolojilerine uyum sağlayarak hizmet yelpazemizi sürekli genişletiyor, 
              chiptuning hizmetini de bünyemize katarak müşterilerimize daha kapsamlı çözümler sunmaya 
              devam ediyoruz.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <Users size={24} />
                </div>
                <div className="feature-text">
                  <h4>Uzman Kadro</h4>
                  <p>Alanında deneyimli ve eğitimli ekibimizle profesyonel hizmet sunuyoruz.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <Award size={24} />
                </div>
                <div className="feature-text">
                  <h4>Kaliteli İşçilik</h4>
                  <p>Tüm işlemlerimizde yüksek kalite standartlarını esas alıyoruz.</p>
                </div>
              </div>
            </div>
            
            <a href="#iletisim-telefon" className="btn btn-primary">
              Bize Ulaşın
            </a>
          </div>
        </div>
        
        <div className="about-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
