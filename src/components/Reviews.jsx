import { Star, Quote } from 'lucide-react';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    {
      name: 'Ahmet Yılmaz',
      rating: 5,
      text: 'Aracımın motor bakımını burada yaptırdım, çok memnun kaldım. Hem fiyatlar uygun hem de işçilik kalitesi üst düzey. Kesinlikle tavsiye ederim.',
      date: '2 hafta önce',
      avatar: 'AY'
    },
    {
      name: 'Mehmet Kaya',
      rating: 5,
      text: 'Chiptuning yaptırdım, aracımın performansı gözle görülür şekilde arttı. Yakıt tüketiminde de iyileşme oldu. Teşekkürler ekibe!',
      date: '1 ay önce',
      avatar: 'MK'
    },
    {
      name: 'Fatma Demir',
      rating: 5,
      text: 'Yıllardır aracımı buraya getiriyorum. Güvenilir, dürüst ve işinin ehli bir ekip. Her zaman memnun ayrılıyorum.',
      date: '3 hafta önce',
      avatar: 'FD'
    },
    {
      name: 'Ali Öztürk',
      rating: 5,
      text: 'Fren arızası için geldim, aynı gün içinde sorunum çözüldü. Profesyonel yaklaşımları için teşekkür ederim.',
      date: '1 hafta önce',
      avatar: 'AÖ'
    },
    {
      name: 'Ayşe Çelik',
      rating: 5,
      text: 'Periyodik bakım için tercihim her zaman burası. Detaylı bilgilendirme yapıyorlar ve gereksiz işlem yapmıyorlar.',
      date: '2 ay önce',
      avatar: 'AÇ'
    },
    {
      name: 'Mustafa Şahin',
      rating: 5,
      text: 'DPF çözümü için geldim, sorunsuz bir şekilde hallettiler. Fiyat performans olarak çok iyi, herkese tavsiye ederim.',
      date: '1 ay önce',
      avatar: 'MŞ'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={18}
        fill={i < rating ? '#FFD700' : 'transparent'}
        color={i < rating ? '#FFD700' : '#4a4a5a'}
      />
    ));
  };

  return (
    <section id="yorumlar" className="reviews section">
      <div className="container">
        <h2 className="section-title">
          Müşteri <span>Yorumları</span>
        </h2>
        
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="review-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="review-header">
                <div className="reviewer-avatar">{review.avatar}</div>
                <div className="reviewer-info">
                  <h4 className="reviewer-name">{review.name}</h4>
                  <span className="review-date">{review.date}</span>
                </div>
                <Quote className="quote-icon" size={32} />
              </div>
              
              <div className="review-stars">
                {renderStars(review.rating)}
              </div>
              
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
