import { Star, Quote } from 'lucide-react';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    {
      name: 'Ahmet Yılmaz',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      date: '2 hafta önce',
      avatar: 'AY'
    },
    {
      name: 'Mehmet Kaya',
      rating: 5,
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
      date: '1 ay önce',
      avatar: 'MK'
    },
    {
      name: 'Fatma Demir',
      rating: 5,
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa.',
      date: '3 hafta önce',
      avatar: 'FD'
    },
    {
      name: 'Ali Öztürk',
      rating: 5,
      text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.',
      date: '1 hafta önce',
      avatar: 'AÖ'
    },
    {
      name: 'Ayşe Çelik',
      rating: 5,
      text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi.',
      date: '2 ay önce',
      avatar: 'AÇ'
    },
    {
      name: 'Mustafa Şahin',
      rating: 5,
      text: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
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
        
        <div className="google-badge">
          <div className="google-logo">
            <svg viewBox="0 0 24 24" width="32" height="32">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </div>
          <div className="google-info">
            <span className="google-text">Google Değerlendirmesi</span>
            <div className="google-rating">
              <span className="rating-value">5.0</span>
              <div className="stars">{renderStars(5)}</div>
              <span className="review-count">(127 yorum)</span>
            </div>
          </div>
        </div>
        
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
              
              <div className="review-source">
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Google'da yayınlandı</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
