import {
  Activity,
  Car,
  CircleDot,
  Clock,
  Cog,
  Cpu,
  Disc,
  Gauge,
  Radio,
  RefreshCw,
  RotateCcw,
  Search,
  Settings,
  Shield,
  Wrench,
  Zap,
} from 'lucide-react';

import diagnostikImg from '../assets/diagnostik.jpg';

const loremLong2 = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
];

export const mekanikServices = [
  {
    id: 'motor-genel-onarim',
    Icon: Wrench,
    title: 'Motor & Genel Onarım',
    description:
      'Araç motoru ve mekanik aksamlarında oluşan arızalara yönelik bakım, onarım ve kontrol hizmetlerini kapsayan kapsamlı mekanik servis çözümleri sunulmaktadır.',
    details: loremLong2,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80',
  },
  {
    id: 'periyodik-bakim',
    Icon: Clock,
    title: 'Periyodik Bakım',
    description:
      'Araçların düzenli kullanımına bağlı olarak ihtiyaç duyduğu temel bakım ve kontrollerin gerçekleştirildiği periyodik servis hizmetleridir.',
    details: loremLong2,
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&q=80',
  },
  {
    id: 'sanziman-bakim',
    Icon: Cog,
    title: 'Şanzıman Bakım',
    description:
      'Manuel ve otomatik şanzıman sistemlerinin sağlıklı ve sorunsuz çalışmasını destekleyen bakım ve kontrol hizmetlerini kapsar.',
    details: loremLong2,
    image: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1200&q=80',
  },
  {
    id: 'universal-torna',
    Icon: CircleDot,
    title: 'Universal Torna',
    description:
      'Universal torna tezgahı kullanılarak farklı ölçü ve parçalara yönelik hassas işleme ve düzeltme hizmetleri sunulmaktadır.',
    details: loremLong2,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80',
  },
  {
    id: 'matkap-islemleri',
    Icon: Settings,
    title: 'Matkap İşlemleri',
    description:
      'Sanayi tipi matkap ekipmanları ile metal ve benzeri parçalara yönelik delme ve işleme hizmetlerini kapsar.',
    details: loremLong2,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80',
  },
  {
    id: 'yakit-sistemi-temizligi',
    Icon: Car,
    title: 'Yakıt Sistemi Temizliği',
    description:
      'Yakıt sistemi ve enjektörlerin daha verimli çalışmasını desteklemeye yönelik temizlik ve bakım hizmetleridir.',
    details: loremLong2,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
  },
  {
    id: 'pres-islemleri',
    Icon: Activity,
    title: 'Pres İşlemleri',
    description:
      'Pres tezgahı kullanılarak mekanik parçalara yönelik şekillendirme, montaj ve düzeltme hizmetlerini kapsar.',
    details: loremLong2,
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=1200&q=80',
  },
  {
    id: 'kampana-disk-tornasi',
    Icon: Disc,
    title: 'Kampana & Disk Tornası',
    description:
      'Fren disk ve kampanalarının yüzey düzgünlüğünü sağlamaya yönelik torna ve düzeltme hizmetleridir.',
    details: loremLong2,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80',
  },
];

export const elektronikServices = [
  {
    id: 'chiptuning',
    Icon: Cpu,
    title: 'Chiptuning',
    description:
      'Araç motor yazılımlarına yönelik performans ve sürüş karakterini optimize etmeyi amaçlayan yazılım hizmetleridir.',
    details: loremLong2,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
  },
  {
    id: 'egr-dpf-cozumleri',
    Icon: Shield,
    title: 'EGR / DPF Çözümleri',
    description:
      'EGR ve DPF sistemlerinde karşılaşılan sorunlara yönelik bakım ve çözüm odaklı elektronik servis hizmetlerini kapsar.',
    details: loremLong2,
    image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=1200&q=80',
  },
  {
    id: 'start-stop-cozumleri',
    Icon: Radio,
    title: 'Start / Stop Sistemi Çözümleri',
    description:
      'Start-stop sisteminin kullanım konforunu ve motor uyumunu artırmaya yönelik çözüm hizmetleridir.',
    details: loremLong2,
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=1200&q=80',
  },
  {
    id: 'performans-artisi',
    Icon: Gauge,
    title: 'Performans Artışı',
    description:
      'Araçların güç, tork ve sürüş performansını desteklemeye yönelik yazılım ve sistem uygulamalarını kapsar.',
    details: loremLong2,
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&q=80',
  },
  {
    id: 'elektrik-sistemleri',
    Icon: Zap,
    title: 'Elektrik Sistemleri',
    description:
      'Araç üzerindeki elektrik ve elektronik donanımlara yönelik kontrol, bakım ve onarım hizmetleridir.',
    details: loremLong2,
    image: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=1200&q=80',
  },
  {
    id: 'sanziman-yazilimi',
    Icon: RotateCcw,
    title: 'Şanzıman Yazılımı',
    description:
      'Otomatik şanzıman kontrol ünitelerine yönelik yazılım düzenleme ve uyarlama hizmetlerini kapsar.',
    details: loremLong2,
    image: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1200&q=80',
  },
  {
    id: 'diyagnostik-ariza-tespit',
    Icon: Search,
    title: 'Diyagnostik Arıza Tespit',
    description:
      'Gelişmiş cihazlar aracılığıyla araç sistemlerinde oluşan arızaların tespitine yönelik hizmetlerdir.',
    details: loremLong2,
    image: diagnostikImg,
  },
  {
    id: 'rejenerasyon-islemleri',
    Icon: RefreshCw,
    title: 'Rejenerasyon İşlemleri',
    description:
      'Partikül filtresi sistemlerinin sağlıklı çalışmasını destekleyen rejenerasyon ve bakım hizmetleridir.',
    details: loremLong2,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80',
  },
];

export const allServices = [...mekanikServices, ...elektronikServices];

