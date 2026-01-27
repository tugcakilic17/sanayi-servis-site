import { Award, Users, Clock, Wrench } from 'lucide-react';
import './About.css';

const About = () => {
  const stats = [
    { icon: <Award size={32} />, value: '20+', label: 'Yıllık Tecrübe' },
    { icon: <Users size={32} />, value: '5000+', label: 'Mutlu Müşteri' },
    { icon: <Clock size={32} />, value: '24/7', label: 'Hizmet' },
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
                <strong>20</strong>
                <span>Yıllık Tecrübe</span>
              </span>
            </div>
          </div>
          
          <div className="about-text">
            <h2 className="section-title left-aligned">
              Hakkımızda <span>Bilgi</span>
            </h2>
            
            <p className="about-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <p className="about-description">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
              in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis 
              unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <Wrench size={24} />
                </div>
                <div className="feature-text">
                  <h4>Uzman Kadro</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <Award size={24} />
                </div>
                <div className="feature-text">
                  <h4>Garantili İşçilik</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            
            <a href="#iletisim" className="btn btn-primary">
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
