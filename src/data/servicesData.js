import {
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
  Shield,
  Wrench,
  Zap,
} from 'lucide-react';

import diagnostikImg from '../assets/diagnostik.jpg';

const comingSoonDetails = [
  'Bu hizmete ait detaylı açıklama içeriği hazırlanmaktadır.',
  'İhtiyacınıza göre en doğru çözüm için bizimle iletişime geçebilirsiniz.',
];

const motorGenelOnarimDetails = [
  'Motor ve genel onarım hizmetlerimiz, aracınızın performansını ve uzun ömürlülüğünü esas alarak titizlikle yürütülmektedir. Motor mekanik aksamları, alt–üst motor bileşenleri, yakıt ve ateşleme sistemleri ile soğutma ve yağlama sistemleri detaylı şekilde kontrol edilir. Gerekli durumlarda orijinal ya da eşdeğer kaliteli parçalar kullanılarak, üretici toleranslarına uygun onarımlar gerçekleştirilir. Amaç yalnızca arızayı gidermek değil, motorun fabrika verilerine en yakın şekilde sorunsuz çalışmasını sağlamaktır.',
  'Genel onarım kapsamında ise yürüyen aksam, fren sistemi, süspansiyon, direksiyon ve şanzıman gibi hayati öneme sahip tüm parçalar profesyonel ekipmanlar ile değerlendirilir. 1957’den bu yana edindiğimiz tecrübe sayesinde, klasik araçlardan modern araçlara kadar her modelde doğru teşhis ve kalıcı çözümler sunarız. Starlar Otomotiv’de yapılan her işlem, güvenlik, dayanıklılık ve uzun vadeli kullanım önceliğiyle ele alınır.',
];

const periyodikBakimDetails = [
  'Periyodik bakım hizmetlerimiz, aracınızın güvenli, ekonomik ve sorunsuz şekilde kullanılmasını sağlamak amacıyla üretici bakım standartlarına uygun olarak gerçekleştirilir. Motor yağı ve filtreler, yakıt ve hava sistemleri, frenler, süspansiyon, kayışlar, sıvılar ve elektronik kontroller detaylı şekilde incelenir. Bakım sırasında kullanılan tüm yağ ve sarf malzemeleri, aracınızın motor tipine ve kullanım koşullarına uygun olarak seçilir.',
  'Düzenli yapılan periyodik bakım, beklenmedik arızaların ve yüksek onarım maliyetlerinin önüne geçerken, aracın performansını ve yakıt verimliliğini korur. Starlar Otomotiv olarak 1957’den bu yana edindiğimiz tecrübe ile her marka ve model araçta bilinçli bakım anlayışı sunuyoruz. Aracınız bize emanet edildiğinde, yalnızca bakımı yapılmaz; genel durumu değerlendirilir ve ileride sorun oluşturabilecek noktalar önceden tespit edilir.',
];

const sanzimanBakimDetails = [
  'Şanzıman bakım hizmetlerimiz, aracınızın güç aktarım sisteminin sağlıklı ve verimli şekilde çalışmasını sağlamak amacıyla titizlikle gerçekleştirilir. Şanzıman yağı ve genel durumu kontrol edilir, sızdırmazlık elemanları, bağlantı noktaları ve mekanik aksam detaylı şekilde incelenir. Vites geçişlerinde oluşabilecek sertlik, ses veya performans kayıplarının önüne geçmek için gerekli bakım ve ayarlamalar, üretici tavsiyeleri dikkate alınarak uygulanır.',
  'Düzenli yapılan şanzıman bakımı, sürüş konforunu artırırken ileride oluşabilecek yüksek maliyetli arızaların da önüne geçer. Starlar Otomotiv olarak, yıllara dayanan tecrübemizle her marka ve model araçta güvenilir ve bilinçli bakım anlayışı sunuyoruz. Yapılan tüm işlemler, şanzımanın uzun ömürlü, sessiz ve sorunsuz çalışmasını hedefler.',
];

const yakitSistemiTemizligiDetails = [
  'Yakıt sistemi temizliği (CarbonClean) hizmetimiz, motor içerisinde zamanla oluşan kurum ve tortuların giderilerek performans kayıplarının önüne geçilmesi amacıyla uygulanır. Bu işlem, CarbonClean yöntemi kullanılarak, motor sökülmeden ve güvenli bir şekilde gerçekleştirilir. Enjektörler, emme kanalları, yanma odası ve supap çevresinde biriken karbon kalıntıları temizlenerek motorun daha düzgün, sessiz ve verimli çalışması sağlanır.',
  'Starlar Otomotiv’de yakıt sistemi temizliği işlemleri, profesyonel Würth WIC4000 Master cihazı ile yapılmaktadır. Bu sistem sayesinde motor, fabrika değerlerine daha yakın bir çalışma karakterine kavuşur; rölanti düzensizlikleri, çekiş düşüklüğü ve yakıt tüketimindeki artış gibi problemler azaltılır. Düzenli uygulanan CarbonClean işlemi, motor ömrünü uzatırken sürüş konforunu da belirgin şekilde artırır.',
];

const kampanaDiskTornasiDetails = [
  'Kampana ve disk tornalama hizmetimiz, fren sisteminde oluşan titreşim, ses ve düzensiz frenleme problemlerini gidermek amacıyla uygulanır. Zamanla aşınan veya yüzeyi bozulan fren diskleri ve kampanalar, özel ölçüm ve kontrol işlemlerinden geçirildikten sonra tornalanarak düzgün yüzey formuna kavuşturulur. Bu işlem, fren balatalarının yüzeye doğru şekilde oturmasını sağlayarak fren performansını ve güvenliği artırır.',
  'Starlar Otomotiv’de kampana ve disk tornalama işlemleri, hassas ölçüm esasına dayalı profesyonel ekipmanlarla gerçekleştirilir. Gereksiz parça değişimlerinin önüne geçilerek hem ekonomik hem de teknik açıdan doğru çözümler sunulur. Yapılan işlemler, fren sisteminin daha dengeli, sessiz ve güvenli çalışmasını hedefler ve aracın sürüş güvenliğine doğrudan katkı sağlar.',
];

const chiptuningDetails = [
  'Chiptuning; motor kontrol ünitesi (ECU) üzerinde bulunan tüm performans, emisyon ve sürüş odaklı yazılım haritalarının araç özelinde düzenlenmesini kapsar. Bu işlemler arasında; yakıt enjeksiyon süreleri ve basınçları, turbo basınç haritaları, tork limitörleri, güç sınırları, gaz pedalı (throttle) tepkileri, devir kesici ayarları, duman limitleri, motor koruma ve sıcaklık haritaları, AFR (hava–yakıt oranı), rail basınç ayarları, boost kontrolü, overboost limitleri ve yük haritaları yer alır.',
  'Starlar Otomotiv’de chiptuning kapsamında ayrıca emisyon ve yardımcı sistemlere yönelik tüm yazılımsal işlemler uygulanır.',
  'Bunlar; EGR yazılım yönetimi, DPF yazılım yönetimi, GPF & OPF yazılım yönetimi, katalitik konvertör (CAT) kontrolü, lambda (oksijen) sensörü yönetimi, NOx sistemi, AdBlue / SCR sistemi, rejenerasyon ayarları, DTC OFF (arıza kodu görünmez hale getirme), start–stop sistemi, termostat yazılımı, hot start & cold start düzenlemeleri, hız limiti kaldırma, tork izleme (torque monitoring) ayarları, şanzıman–motor tork uyumu, fan açma sıcaklıkları ve sensör tolerans haritaları gibi işlemleri kapsar.',
  'Bunlara ek olarak; kullanım şartlarına, motor tipine ve araç altyapısına bağlı olarak ECU içerisinde bulunan ve burada tek tek sayılmayan tüm yazılımsal parametreler analiz edilir ve ihtiyaç doğrultusunda düzenlenir. Amaç; aracı sadece daha güçlü yapmak değil, daha sorunsuz, daha stabil, daha tepkili ve sürücüsünü yormayan bir hale getirmektir. Starlar Otomotiv’de chiptuning, yazılımda yapılabilen her şeyin bilinçli ve kontrollü şekilde uygulanmasıdır.',
];

const egrDpfCozumleriDetails = [
  'EGR ve DPF sistemlerinde zamanla oluşan kurum birikimi, tıkanma ve sensör kaynaklı problemler; çekiş düşüklüğü, yakıt tüketiminde artış ve sürekli arıza lambası gibi şikâyetlere yol açabilir. Bu noktada uyguladığımız EGR & DPF çözüm çalışmaları, sorunun kaynağını ortadan kaldırmaya yönelik, kalıcı ve araç odaklı bir yaklaşım sunar. Amaç, motorun nefesini rahatlatmak ve aracın günlük kullanımda daha stabil çalışmasını sağlamaktır.',
  'Starlar Otomotiv’de EGR & DPF çözümleri, klasik geçici müdahaleler yerine, motorun çalışma karakterini bozmadan daha sağlıklı bir kullanım sunacak şekilde ele alınır. Sürekli tekrarlayan arızalar ve masraflı parça değişimleri yerine, doğru yazılım ve sistem optimizasyonu ile uzun vadede daha mantıklı bir çözüm sağlanır. Bu sayede araç daha akıcı çalışır, sürüş konforu artar ve kullanıcıyı yoran kronik problemler ortadan kaldırılır.',
];

const tornaTesviyeDetails = [
  'Torna & tesviye hizmetlerimiz; matkap, torna ve pres işlemleri başta olmak üzere, metal parça işleme, ölçülendirme ve düzeltme uygulamalarını kapsar. Aşınma, darbe veya kullanım kaynaklı ölçü kaybı yaşayan parçalar, hassas ölçüm ekipmanlarıyla kontrol edilerek tolerans değerleri içinde yeniden işlenir. Bu sayede parçaların çalışma yüzeyleri düzeltilir, montaja ve kullanıma uygun hale getirilir.',
  'Starlar Otomotiv’de gerçekleştirilen torna ve tesviye işlemleri, sanayi standartları ve teknik ölçü esas alınarak uygulanır. Gereksiz parça değişimlerinin önüne geçilerek hem maliyet avantajı sağlanır hem de mevcut parçaların ömrü uzatılır. Yapılan her işlem, parçanın mekanik dayanımı ve çalışma verimi gözetilerek gerçekleştirilir.',
];

const startStopDetails = [
  'Start & Stop sistemi, özellikle turbo beslemeli araçlarda, motor ve turbo sağlığı açısından olumsuz etkilere yol açabilir. Motor durdurulduğunda yağlama da anında kesildiği için, sıcak durumda olan turbonun yağsız kalması zamanla ciddi turbo aşınmalarına ve arızalara neden olabilir. Özellikle yoğun trafikte sık sık motorun kapanması, hem mekanik yıpranmayı artırır hem de sürüş konforunu düşürür.',
  'Starlar Otomotiv’de uygulanan Start & Stop çözüm çalışmaları, motor ve turbo sisteminin daha sağlıklı çalışmasını hedefler. Ani dur-kalklarda oluşan gereksiz yük ortadan kaldırılarak, turbo ömrünün uzatılması ve motorun daha dengeli çalışması sağlanır. Sonuç olarak araç daha akıcı, daha öngörülebilir ve uzun vadede daha güvenli bir kullanım sunar.',
];

const performansArtisiDetails = [
  'Performans artışı uygulamalarımız, aracın fabrika çıkışı potansiyelini daha verimli şekilde kullanmasını sağlayarak sürüş deneyimini üst seviyeye taşımayı hedefler. Gaz tepkileri daha canlı hale gelir, ara hızlanmalar hissedilir şekilde iyileşir ve araç sürücünün komutlarına çok daha istekli cevap verir. Yapılan işlemler, motorun çalışma dengesini koruyacak şekilde planlanır ve araç karakterine uygun bir performans kazanımı sağlanır.',
  'Starlar Otomotiv’de performans artışı, sadece rakam odaklı değil; hissedilen fark odaklı ele alınır. Amaç, aracı yormadan daha keyifli, daha atak ve daha akıcı bir sürüş sunmaktır. Direksiyon başına geçtiğiniz anda fark edilen bu değişim, aracı her kullandığınızda kendini hissettirir ve sürüş keyfini bambaşka bir seviyeye taşır.',
];

const elektrikSistemleriDetails = [
  'Elektrik sistemleri kapsamında, aracın çalışmasını ve sürüş güvenliğini etkileyen temel elektrik kontrolleri ve küçük çaplı onarımlar gerçekleştirilir. Şarj, marş ve aydınlatma sistemleri başta olmak üzere, bağlantı, sigorta ve kablolama kaynaklı problemler tespit edilerek gerekli müdahaleler yapılır. Amaç, aracın elektriksel olarak sorunsuz ve güvenli şekilde çalışmasını sağlamaktır.',
  'Starlar Otomotiv’de elektrik sistemleri işlemleri, ana faaliyet alanımızı destekleyen sınırlı ve ihtiyaca yönelik uygulamalar olarak ele alınır. Geniş kapsamlı tesisat veya karmaşık elektronik işlemler yerine, aracın çalışmasını doğrudan etkileyen noktalara odaklanılarak pratik ve güvenilir çözümler sunulur.',
];

const sanzimanYazilimiDetails = [
  'Şanzıman yazılımı kapsamında, aracın sürüş karakterini olumsuz etkileyen temel yazılım kaynaklı durumlara yönelik kontrollü müdahaleler yapılır. Vites geçiş zamanları, sürüş konforunu etkileyen tepkiler ve sistem uyumu kontrol edilerek, gerekli görülen durumlarda düzenlemeler uygulanır. Amaç, şanzımanın motorla daha uyumlu ve dengeli çalışmasını sağlamaktır.',
  'Starlar Otomotiv’de şanzıman yazılımı işlemleri, ana faaliyet alanımızı destekleyen ihtiyaca yönelik uygulamalar olarak ele alınır. Kapsamlı veya agresif yazılım değişiklikleri yerine, sürüş konforunu ve sistem dengesini koruyan çözümler sunulur.',
];

const diyagnostikArizaTespitDetails = [
  'Diyagnostik arıza tespit hizmetimiz, aracın tüm elektronik ve mekanik sistemlerinin detaylı şekilde analiz edilmesini kapsar. Motor, şanzıman, ABS, ESP, airbag, konfor ve güvenlik sistemleri; marka ve modele uygun profesyonel cihazlarla taranarak arıza kodları, canlı veriler ve sistem tepkileri detaylı olarak değerlendirilir. Bu sayede arızanın kaynağı net şekilde belirlenir ve rastgele parça değişimlerinin önüne geçilir.',
  'Starlar Otomotiv’de diyagnostik arıza tespiti, sadece hata kodu okumakla sınırlı değildir. Tecrübe, teknik bilgi ve doğru yorumlama ile birlikte ele alınır. Yapılan detaylı analizler sayesinde gizli kalmış problemler ortaya çıkarılır, doğru müdahale planı oluşturulur ve araç en sağlıklı şekilde çözüme ulaştırılır.',
];

const rejenerasyonIslemleriDetails = [
  'Rejenerasyon işlemleri, egzoz filtre sistemlerinde biriken kurum ve tortuların kontrollü şekilde temizlenerek sistemin tekrar verimli çalışmasını sağlamayı amaçlar. DPF, GPF ve OPF sistemleri; araç verileri, sıcaklık değerleri ve sistem tepkileri dikkate alınarak profesyonel ekipmanlarla rejenerasyon sürecine alınır. Bu sayede çekiş düşüklüğü, artan yakıt tüketimi ve uyarı lambalarına neden olan tıkanma problemleri etkili şekilde giderilir.',
  'Starlar Otomotiv’de rejenerasyon işlemleri, rastgele veya geçici müdahalelerle değil, doğru teşhis ve kontrollü uygulama anlayışıyla gerçekleştirilir. Sistem çalışma şartları sağlanarak yapılan rejenerasyon sayesinde filtreler görevini doğru şekilde yerine getirir, araç performansı ve sürüş konforu belirgin şekilde iyileşir. Amaç, yüksek maliyetli parça değişimleri yerine, sistemin sağlıklı ve uzun ömürlü çalışmasını sağlamaktır.',
];

const gpfOpfDetails = [
  'GPF ve OPF sistemleri, benzinli araçlarda kullanılan egzoz filtreleridir ve zamanla tıkanma, rejenerasyon sorunları ve performans kayıplarına yol açabilir. Özellikle kısa mesafe ve şehir içi kullanımda bu sistemler, gaz tepkilerinde hantallık, yakıt tüketiminde artış ve arıza lambalarının yanması gibi problemlerle kendini gösterir. Uyguladığımız GPF & OPF çözüm çalışmaları, motorun daha rahat nefes almasını sağlayarak bu olumsuzlukları ortadan kaldırmayı hedefler.',
  'Starlar Otomotiv’de GPF & OPF çözümleri, dizel araçlar için değil, benzinli motorların çalışma karakteri dikkate alınarak uygulanır. Sürekli tekrar eden rejenerasyon problemleri ve yüksek maliyetli parça değişimleri yerine, daha stabil ve uzun vadeli bir kullanım sunulur. Sonuç olarak araç daha akıcı çalışır, gaz tepkileri belirgin şekilde iyileşir ve sürüş keyfi artar.',
];

const adblueNoxDetails = [
  'AdBlue ve NOx sistemleri, Euro 6 dizel araçlarda egzoz emisyonlarını kontrol etmek için birlikte çalışan SCR (Selective Catalytic Reduction) sisteminin parçalarıdır. Bu sistemlerde yaşanan pompa, enjektör, sensör veya kristalleşme kaynaklı problemler; motor arıza lambasının yanmasına, performans kısıtlamasına ve aracın sürüş modunun düşmesine neden olabilir. Uyguladığımız AdBlue & NOx çözüm çalışmaları, bu tür kronik sorunları kalıcı şekilde ortadan kaldırmayı hedefler.',
  'Starlar Otomotiv’de gerçekleştirilen AdBlue & NOx çözümleri, SCR sistemine sahip binek, hafif ticari ve ticari dizel araçlara yönelik olarak uygulanır. Sürekli tekrar eden arızalar ve yüksek maliyetli parça değişimleri yerine, daha stabil, sorunsuz ve kullanıcıyı yormayan bir kullanım sunulur. Bu sayede araç, performans kısıtlaması olmadan güvenle kullanılabilir ve günlük sürüş konforu belirgin şekilde artar.',
];

const kaynakIslemleriDetails = [
  'Kaynak işlemleri kapsamında, gerekli görülen durumlarda parça birleştirme ve küçük çaplı onarım uygulamaları yapılır. Kırık, çatlak veya sabitleme gerektiren parçalar, kontrollü ve ölçülü şekilde onarılarak tekrar kullanılabilir hale getirilir. Yapılan işlemler, parçanın formunu ve çalışma dengesini bozmayacak şekilde gerçekleştirilir.',
  'Starlar Otomotiv’de kaynak uygulamaları, ana faaliyet alanımızı destekleyen sınırlı ve ihtiyaca yönelik işlemler olarak ele alınır. Büyük çaplı imalat veya yoğun kaynak işleri yerine, mevcut parçanın güvenli şekilde görevini yapmasını sağlayacak çözümler sunulur.',
];

const dtcOffDetails = [
  'DTC OFF işlemi, araçta mevcut olan ve sistem hafızasında kayıtlı bulunan arıza kodlarının yazılımsal olarak görünmez hale getirilmesini kapsar. Bu işlem, sürekli tekrar eden ve sürüşü olumsuz etkileyen uyarıların kontrol altına alınmasını sağlar. Motor, emisyon ve konfor sistemleri detaylı şekilde analiz edilerek, hangi arıza kodlarının yazılım üzerinden yönetileceği bilinçli şekilde belirlenir.',
  'Starlar Otomotiv’de DTC OFF uygulamaları, sadece arıza lambasını söndürmeye yönelik rastgele bir işlem değildir. Sistemlerin çalışma dengesi ve güvenliği korunarak, sürücüyü gereksiz uyarılarla yoran kodlar yazılımsal olarak devre dışı bırakılır. Amaç, aracın çalışma karakterini bozmadan, daha stabil ve sorunsuz bir kullanım sağlamaktır.',
];

const termostatYazilimiDetails = [
  'Termostat yazılımı uygulamaları, motor çalışma sıcaklığının daha dengeli ve kontrollü şekilde yönetilmesini amaçlar. Mümkün olan araçlarda, motor kontrol ünitesi üzerinden termostat ve soğutma sistemi çalışma mantığı optimize edilerek, geç ısınma, ani sıcaklık dalgalanmaları ve verimsiz çalışma gibi durumların önüne geçilir. Bu sayede motor, ideal sıcaklık aralığında daha stabil şekilde çalışır.',
  'Starlar Otomotiv’de termostat yazılımı işlemleri, araç altyapısı ve motor yapısı detaylı şekilde incelendikten sonra uygulanır. Rastgele müdahaleler yerine, motor sağlığını ve uzun ömürlü kullanımı esas alan bilinçli yazılım çözümleri sunulur. Doğru sıcaklık yönetimi sayesinde motor verimi artar, mekanik yıpranma azalır ve sürüş konforu hissedilir şekilde iyileşir.',
];

const hotColdStartDetails = [
  'Hot start ve cold start, aracın sıcak ve soğuk çalıştırma davranışlarını ifade eder. Cold start, motor soğukken ilk çalıştırma anıdır; hot start ise motor çalışma sıcaklığına ulaştıktan sonra stop edilip tekrar çalıştırılması durumudur. Bazı araçlarda motor soğukken sorunsuz çalışırken, sıcakken geç çalışma veya hiç çalışmama problemi görülebilir. Bu durum genellikle yakıt basıncı, sensör verileri veya motor yazılımının sıcaklık koşullarına doğru tepki verememesiyle ilgilidir.',
  'Starlar Otomotiv’de hot start & cold start çözümleri, araç verileri detaylı şekilde analiz edilerek yazılımsal ve sistemsel olarak ele alınır. Motorun hem soğukta hem de sıcakta doğru karışım ve doğru zamanlamayla çalışması sağlanır. Sonuç olarak araç, her koşulda daha net marş alır, geç çalışma problemleri ortadan kalkar ve sürücü için güvenilir bir kullanım sunar.',
];

const vmaxOffDetails = [
  'VMAX OFF işlemi, araçta fabrika çıkışı tanımlanmış olan hız sınırlamasının motor kontrol ünitesi (ECU) üzerinden yazılımsal olarak kaldırılmasını kapsar. Bu uygulama sayesinde araç, elektronik olarak kısıtlandığı hız sınırına takılmadan, mekanik ve aerodinamik kapasitesi doğrultusunda ilerleyebilir. Yapılan işlem, motor ve şanzıman verileri dikkate alınarak kontrollü şekilde uygulanır.',
  'Starlar Otomotiv’de VMAX OFF işlemleri, yalnızca tek bir parametreyi kapatmakla sınırlı değildir. Hız limitiyle ilişkili tork, güç, devir ve güvenlik haritaları birlikte değerlendirilir ve sistem uyumu korunur. Amaç; aracı zorlamak değil, fabrika yazılımı ile konulan elektronik sınırı bilinçli şekilde ortadan kaldırmaktır. Doğru uygulanan VMAX OFF, aracın potansiyelini özgür bırakır ve sürüş karakterini tamamen değiştirir.',
];

export const mekanikServices = [
  {
    id: 'motor-genel-onarim',
    Icon: Wrench,
    title: 'Motor & Genel Onarım',
    description:
      'Araç motoru ve mekanik aksamlarında oluşan arızalara yönelik bakım, onarım ve kontrol hizmetlerini kapsayan kapsamlı mekanik servis çözümleri sunulmaktadır.',
    details: motorGenelOnarimDetails,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80',
  },
  {
    id: 'periyodik-bakim',
    Icon: Clock,
    title: 'Periyodik Bakım',
    description:
      'Araçların düzenli kullanımına bağlı olarak ihtiyaç duyduğu temel bakım ve kontrollerin gerçekleştirildiği periyodik servis hizmetleridir.',
    details: periyodikBakimDetails,
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&q=80',
  },
  {
    id: 'sanziman-bakim',
    Icon: Cog,
    title: 'Şanzıman Bakım',
    description:
      'Manuel ve otomatik şanzıman sistemlerinin sağlıklı ve sorunsuz çalışmasını destekleyen bakım ve kontrol hizmetlerini kapsar.',
    details: sanzimanBakimDetails,
    image: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1200&q=80',
  },
  {
    id: 'torna-tesviye-islemleri',
    Icon: CircleDot,
    title: 'Torna & Tesviye İşlemleri',
    description:
      'Torna & tesviye kapsamında; matkap, torna ve pres işlemleri gibi parça işleme ve düzeltme uygulamalarını kapsar.',
    details: tornaTesviyeDetails,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80',
  },
  {
    id: 'yakit-sistemi-temizligi',
    Icon: Car,
    title: 'Yakıt Sistemi Temizliği (Carbon Clean)',
    description:
      'Yakıt sistemi ve enjektörlerin daha verimli çalışmasını desteklemeye yönelik temizlik ve bakım hizmetleridir.',
    details: yakitSistemiTemizligiDetails,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
  },
  {
    id: 'kampana-disk-tornasi',
    Icon: Disc,
    title: 'Kampana & Disk Tornası',
    description:
      'Fren disk ve kampanalarının yüzey düzgünlüğünü sağlamaya yönelik torna ve düzeltme hizmetleridir.',
    details: kampanaDiskTornasiDetails,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80',
  },
  {
    id: 'kaynak-islemleri',
    Icon: Wrench,
    title: 'Kaynak İşlemleri',
    description:
      'Gerekli görülen durumlarda parça birleştirme ve küçük çaplı onarım amaçlı kaynak uygulamalarını kapsar.',
    details: kaynakIslemleriDetails,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80',
  },
];

export const elektronikServices = [
  {
    id: 'chiptuning',
    Icon: Cpu,
    title: 'Chiptuning (Tüm Motor & Sistem Yazılım Uygulamaları)',
    description:
      'Araç motor yazılımlarına yönelik performans ve sürüş karakterini optimize etmeyi amaçlayan yazılım hizmetleridir.',
    details: chiptuningDetails,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
  },
  {
    id: 'gpf-opf-cozumleri',
    Icon: Shield,
    title: 'GPF & OPF Çözüm Uygulamaları',
    description:
      'Benzinli araçlarda GPF/OPF sistemlerinde oluşan tıkanma ve rejenerasyon sorunlarına yönelik yazılımsal çözüm uygulamalarını kapsar.',
    detailsIntro: '(Benzinli Araçlar İçindir)',
    details: gpfOpfDetails,
    image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=1200&q=80',
  },
  {
    id: 'egr-dpf-cozumleri',
    Icon: Shield,
    title: 'EGR / DPF Çözümleri',
    description:
      'EGR ve DPF sistemlerinde karşılaşılan sorunlara yönelik bakım ve çözüm odaklı elektronik servis hizmetlerini kapsar.',
    detailsIntro: '(Dizel araçlar için)',
    details: egrDpfCozumleriDetails,
    image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=1200&q=80',
  },
  {
    id: 'adblue-nox-cozumleri',
    Icon: Shield,
    title: 'AdBlue & NOx Sistemi Çözüm Uygulamaları',
    description:
      'SCR sistemine sahip dizel araçlarda AdBlue/NOx kaynaklı kronik sorunlara yönelik yazılımsal çözüm uygulamalarını kapsar.',
    detailsIntro: '(SCR Sistemine Sahip Dizel Araçlar İçindir)',
    details: adblueNoxDetails,
    image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=1200&q=80',
  },
  {
    id: 'start-stop-cozumleri',
    Icon: Radio,
    title: 'Start / Stop Sistemi Çözümleri',
    description:
      'Start-stop sisteminin kullanım konforunu ve motor uyumunu artırmaya yönelik çözüm hizmetleridir.',
    details: startStopDetails,
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=1200&q=80',
  },
  {
    id: 'performans-artisi',
    Icon: Gauge,
    title: 'Performans Artışı',
    description:
      'Araçların güç, tork ve sürüş performansını desteklemeye yönelik yazılım ve sistem uygulamalarını kapsar.',
    details: performansArtisiDetails,
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&q=80',
  },
  {
    id: 'elektrik-sistemleri',
    Icon: Zap,
    title: 'Elektrik Sistemleri',
    description:
      'Araç üzerindeki elektrik ve elektronik donanımlara yönelik kontrol, bakım ve onarım hizmetleridir.',
    details: elektrikSistemleriDetails,
    image: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=1200&q=80',
  },
  {
    id: 'sanziman-yazilimi',
    Icon: RotateCcw,
    title: 'Şanzıman Yazılımı',
    description:
      'Otomatik şanzıman kontrol ünitelerine yönelik yazılım düzenleme ve uyarlama hizmetlerini kapsar.',
    details: sanzimanYazilimiDetails,
    image: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1200&q=80',
  },
  {
    id: 'diyagnostik-ariza-tespit',
    Icon: Search,
    title: 'Diyagnostik Arıza Tespit',
    description:
      'Gelişmiş cihazlar aracılığıyla araç sistemlerinde oluşan arızaların tespitine yönelik hizmetlerdir.',
    details: diyagnostikArizaTespitDetails,
    image: diagnostikImg,
  },
  {
    id: 'rejenerasyon-islemleri',
    Icon: RefreshCw,
    title: 'Rejenerasyon İşlemleri',
    description:
      'Partikül filtresi sistemlerinin sağlıklı çalışmasını destekleyen rejenerasyon ve bakım hizmetleridir.',
    details: rejenerasyonIslemleriDetails,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80',
  },
  {
    id: 'dtc-off',
    Icon: Cpu,
    title: 'DTC OFF (Yazılımsal Arıza Kodu Yönetimi)',
    description:
      'Sürekli tekrar eden uyarı ve arıza kodlarının yazılım üzerinden bilinçli şekilde yönetilmesini kapsar.',
    details: dtcOffDetails,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
  },
  {
    id: 'termostat-yazilimi',
    Icon: Cpu,
    title: 'Termostat Yazılımı',
    description:
      'Mümkün olan araçlarda motor çalışma sıcaklığını daha dengeli yönetmeye yönelik yazılımsal optimizasyonları kapsar.',
    detailsIntro: '(Mümkün Olan Araçlarda)',
    details: termostatYazilimiDetails,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
  },
  {
    id: 'hot-start-cold-start',
    Icon: Cpu,
    title: 'Hot Start & Cold Start Çözümleri',
    description:
      'Sıcak/soğuk çalıştırma davranışlarını iyileştirmeye yönelik yazılımsal ve sistemsel çözüm uygulamalarını kapsar.',
    details: hotColdStartDetails,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
  },
  {
    id: 'vmax-off',
    Icon: Gauge,
    title: 'VMAX OFF (Hız Limitör İptali)',
    description:
      'Fabrika çıkışı hız limitinin ECU üzerinden yazılımsal olarak kaldırılmasını kapsar.',
    details: vmaxOffDetails,
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&q=80',
  },
];

export const allServices = [...mekanikServices, ...elektronikServices];

