import { useEffect, useMemo, useRef, useCallback } from 'react';
import { ChevronDown, Quote, Star } from 'lucide-react';
import './Reviews.css';

const Reviews = () => {
  const trackRef = useRef(null);

  const reviews = useMemo(
    () => [
      {
        name: 'Ahmet Yılmaz',
        rating: 5,
        text: 'Motor bakımı yaptırdım, valla tertemiz iş. Fiyat da uçuk değildi, sağ olsunlar.',
        date: '2 hafta önce',
        avatar: 'AY',
      },
      {
        name: 'Mehmet Kaya',
        rating: 5,
        text: 'Chiptuning yaptılar… araba resmen kendine geldi. Gaz tepkisi falan bariz.',
        date: '1 ay önce',
        avatar: 'MK',
      },
      {
        name: 'Fatma Demir',
        rating: 5,
        text: 'Yıllardır geliyorum. Gereksiz iş çıkarmıyorlar, anlatıyorlar da. İçim rahat.',
        date: '3 hafta önce',
        avatar: 'FD',
      },
      {
        name: 'Ali Öztürk',
        rating: 5,
        text: 'Fren ses yapıyodu, aynı gün hallettiler. Hızlı çözüm.',
        date: '1 hafta önce',
        avatar: 'AÖ',
      },
      {
        name: 'Ayşe Çelik',
        rating: 5,
        text: 'Periyodik bakım için hep burası. "Şunu da değişelim" diye zorlamıyorlar.',
        date: '2 ay önce',
        avatar: 'AÇ',
      },
      {
        name: 'Mustafa Şahin',
        rating: 5,
        text: 'DPF işi vardı, baya uğraştılar. Şu an uyarı yok, çekiş de düzeldi.',
        date: '1 ay önce',
        avatar: 'MŞ',
      },
      {
        name: 'Serkan Arslan',
        rating: 5,
        text: 'Diyagnostik bağladılar, arızayı direkt buldular. Parça parça deneme yok, iyi.',
        date: '5 gün önce',
        avatar: 'SA',
      },
      {
        name: 'Zeynep Koç',
        rating: 5,
        text: 'İletişim çok iyi. "Şu niye olmuş" diye sordum, tek tek anlattılar.',
        date: '3 gün önce',
        avatar: 'ZK',
      },
      {
        name: 'Emre Aksoy',
        rating: 5,
        text: 'Şanzıman bakımı sonrası geçişler yumuşadı. Baya fark etti.',
        date: '2 hafta önce',
        avatar: 'EA',
      },
      {
        name: 'Hakan Yıldız',
        rating: 4,
        text: 'Carbon clean yaptırdım, rölanti düzeldi. Biraz daha iyi çekiyo gibi.',
        date: '1 ay önce',
        avatar: 'HY',
      },
      {
        name: 'Elif Karaca',
        rating: 5,
        text: 'Disk işi sonrası titreme gitti. Fren baya toparladı.',
        date: '2 ay önce',
        avatar: 'EK',
      },
      {
        name: 'Berk Can',
        rating: 5,
        text: 'Randevu saatine uyuyorlar. Beklemedim nerdeyse.',
        date: '1 hafta önce',
        avatar: 'BC',
      },
      {
        name: 'Nazan Aydın',
        rating: 5,
        text: 'Açıklayıcılar, saygılılar. "Anlamaz" muamelesi yok, önemli.',
        date: '3 hafta önce',
        avatar: 'NA',
      },
      {
        name: 'Onur Demirtaş',
        rating: 5,
        text: 'Start stop iptali yaptırdım. Trafikte çok daha rahat, oh be.',
        date: '2 ay önce',
        avatar: 'OD',
      },
      {
        name: 'Gizem Şen',
        rating: 5,
        text: 'Genel kontrol yaptılar, "şu ileride çıkar" diye de söylediler. Güven verdi.',
        date: '1 ay önce',
        avatar: 'GŞ',
      },
      {
        name: 'Burak Uçar',
        rating: 5,
        text: 'EGR/DPF kronikti bende. Şimdilik sorun yok, lamba da yanmıyor.',
        date: '3 ay önce',
        avatar: 'BU',
      },
      {
        name: 'Seda Kılıç',
        rating: 4,
        text: 'Servis sonrası daha sessiz. Küçük bir trim sesi kaldı ama o da araçtan zaten.',
        date: '2 ay önce',
        avatar: 'SK',
      },
      {
        name: 'Mert Yalçın',
        rating: 5,
        text: 'ECU yazılım yaptılar. Ara hızlanma bariz arttı, gaza dokunuyosun gidiyo.',
        date: '4 ay önce',
        avatar: 'MY',
      },
      {
        name: 'Cemre Öz',
        rating: 5,
        text: 'Fiyat performans çok iyi. Her adımda bilgi verdiler, ne yapıyolar belli.',
        date: '3 ay önce',
        avatar: 'CÖ',
      },
      {
        name: 'İsmail Toprak',
        rating: 5,
        text: 'Usta işi. Küçük sorunu büyütmeden çözdüler, sağolsunlar.',
        date: '6 gün önce',
        avatar: 'İT',
      },
      {
        name: 'Pelin Kırca',
        rating: 5,
        text: 'Acil geldim, aynı gün araya sıkıştırdılar. Çok teşekkür ederim.',
        date: '1 hafta önce',
        avatar: 'PK',
      },
      {
        name: 'Kaan Korkmaz',
        rating: 5,
        text: 'Rejenerasyon sonrası çekiş düzeldi, tüketim de normale döndü gibi.',
        date: '2 ay önce',
        avatar: 'KK',
      },
      {
        name: 'Tuğçe Özkan',
        rating: 5,
        text: 'Dürüst esnaf. Gereksiz işlem yok, net bilgi var, seviyorum böyle.',
        date: '5 ay önce',
        avatar: 'TÖ',
      },
      {
        name: 'Yusuf Çetin',
        rating: 5,
        text: 'Bakımda her şeye baktılar. "Tamamdır" deyip geçmediler yani.',
        date: '1 ay önce',
        avatar: 'YÇ',
      },
      {
        name: 'Deniz Polat',
        rating: 5,
        text: 'Performans artışı dengeli oldu, saçma duman falan yok. Keyifli oldu.',
        date: '3 ay önce',
        avatar: 'DP',
      },
      {
        name: 'Özlem Güneş',
        rating: 5,
        text: 'Atölye düzenli, temiz. Bence bu bile çok şey anlatıyor.',
        date: '2 ay önce',
        avatar: 'ÖG',
      },
      {
        name: 'Kerem Duru',
        rating: 5,
        text: 'Torna/tesviye işi çok temiz çıktı. Parça değişmeden çözdüler, helal.',
        date: '4 ay önce',
        avatar: 'KD',
      },
      {
        name: 'Sinem Yazar',
        rating: 5,
        text: 'Telefonda da hızlı döndüler. Yazdım, hemen cevap.',
        date: '3 hafta önce',
        avatar: 'SY',
      },
      {
        name: 'Volkan Er',
        rating: 5,
        text: "Uygun fiyat, kaliteli iş. Çanakkale'de ben başka yere gitmem.",
        date: '6 ay önce',
        avatar: 'VE',
      },
      {
        name: 'Ebru Taş',
        rating: 4,
        text: 'Hızlı teslim aldım. Sonuç iyi. Bir tık daha erken olsa tam süperdi :)',
        date: '2 ay önce',
        avatar: 'ET',
      },
    ],
    []
  );

  const ROWS = 2;
  const COLS = 3;
  const CLONE_COLUMNS = COLS;

  const chunk = (arr, size) => {
    const out = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  };

  const baseColumns = useMemo(() => chunk(reviews, ROWS), [reviews]);
  const loopColumns = useMemo(() => {
    const head = baseColumns.slice(0, CLONE_COLUMNS);
    return [...baseColumns, ...head];
  }, [baseColumns]);

  const baseColCount = baseColumns.length;

  const getStepPx = useCallback(() => {
    const el = trackRef.current;
    if (!el) return 0;
    const firstCol = el.querySelector('.reviews-column');
    if (!firstCol) return 0;
    const rect = firstCol.getBoundingClientRect();
    const style = window.getComputedStyle(el);
    const gap = parseFloat(style.gap) || 30;
    return rect.width + gap;
  }, []);

  const getBoundaryPx = useCallback(() => {
    const step = getStepPx();
    return step * baseColCount;
  }, [getStepPx, baseColCount]);

  const normalizeScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const boundary = getBoundaryPx();
    if (!boundary) return;
    if (el.scrollLeft >= boundary) {
      el.scrollLeft = el.scrollLeft - boundary;
    }
  }, [getBoundaryPx]);

  const goNext = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const step = getStepPx();
    if (!step) return;
    el.scrollBy({ left: step, behavior: 'smooth' });
  }, [getStepPx]);

  const goPrev = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const step = getStepPx();
    if (!step) return;
    const boundary = getBoundaryPx();
    if (el.scrollLeft <= 1 && boundary) {
      el.scrollLeft = boundary - 1;
    }
    el.scrollBy({ left: -step, behavior: 'smooth' });
  }, [getStepPx, getBoundaryPx]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let scrollRaf = 0;
    const onScroll = () => {
      cancelAnimationFrame(scrollRaf);
      scrollRaf = requestAnimationFrame(() => normalizeScroll());
    };
    el.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(scrollRaf);
      el.removeEventListener('scroll', onScroll);
    };
  }, [normalizeScroll]);

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

        <div className="reviews-carousel" aria-label="Yorumlar kaydırıcısı">
          <button
            type="button"
            className="reviews-arrow reviews-arrow-left"
            onClick={goPrev}
            aria-label="Önceki yorumlar"
          >
            <ChevronDown size={52} strokeWidth={3} className="reviews-chevron is-left" />
          </button>

          <div className="reviews-track" ref={trackRef}>
            {loopColumns.map((col, colIndex) => (
              <div className="reviews-column" key={colIndex} aria-hidden={colIndex >= baseColCount}>
                {col.map((review, idx) => (
                  <div
                    key={`${colIndex}-${idx}`}
                    className="review-card"
                    style={{ animationDelay: `${(colIndex * ROWS + idx) * 0.03}s` }}
                  >
                    <div className="review-header">
                      <div className="reviewer-avatar">{review.avatar}</div>
                      <div className="reviewer-info">
                        <h4 className="reviewer-name">{review.name}</h4>
                        <span className="review-date">{review.date}</span>
                      </div>
                      <Quote className="quote-icon" size={32} />
                    </div>

                    <div className="review-stars">{renderStars(review.rating)}</div>

                    <p className="review-text">{review.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <button
            type="button"
            className="reviews-arrow reviews-arrow-right"
            onClick={goNext}
            aria-label="Sonraki yorumlar"
          >
            <ChevronDown size={52} strokeWidth={3} className="reviews-chevron is-right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
