let search = [
    {
        title: "1	Kriptotahlil so’ziga berilgan to’g’ri tavsifni toping?	“Maxfiy” kodlarni buzish fani va sanati",
    },
    {
        title: "2	Kriptografiya so’ziga berilgan to’g’ri tavsifni toping?	“Maxfiy” kodlarni yaratish fani va sanati",
     },
     {
        title: "3	Kriptologiya so’ziga berilgan to’g’ri tavsifni toping ?	“Maxfiy “ kodlarni yaratish va buzish fani san’ati",
     },
     {
        title: "4	Tarmoqdagi kompyuterlarga kabel orqali ulangan markaziy xabdan (tugun) iborat topologiya bu?	Yulduz",
     },
     {
        title: "5	Parollar 8 xonali uzunlikka va har bir xonasi uchun 64 ta turli belgilar bo’lishi mumkin bo’lgan jami parollar soni nechta?	648",
     },
     {
        title: "6	Parolga asoslangan autentifikatsiya usuliga qaratilgan hujumlarni ko’rsating.	Parollar lug’atidan foydalanish asosida hujum, yelka orqali qarash",
     },
     {
        title: "7	Modul arifmetikasida mod 7 bo’yicha 5 soniga teskari bo’lgan sonni toping?	3",
     },
     {
        title: "8	Qaysi zaxiralash turida ma’lumotni qayta tiklash tezkor, biroq, jarayon sekin va ma’lumotni saqlash uchun ko’p xotira hajmi talab etiladi?	To'liq zaxiralashda",
     },
     {
        title: "9	Eng zaif va simsiz tarmoq protokolini ko’rsating?	WEP",
     },
     {
        title: "10	Biror mantiqiy shartni tekshiruvchi trigger va foydali yuklamadan iborat zararli dastur turi bu?	Mantiqiy bombalar",
     },
     {
        title: "11	Quyidagi xususiyatlardan qaysi biri elektron raqamli imzo tomonidan ta’minlanadi?	Axborot butunligini va rad etishdan himoyalash",
     },
     {
        title: "12	Seans sathidagi VPN qaysi protokol asosida quriladi?	TLS",
     },
     {
        title: "13	RAID 0 texnologiyasining vazifasi - …	Diskni navbatlanishi",
     },
     {
        title: "14	Qaysi bilim sohasi foydalanilayotgan tizim yoki axborot xavfsizligini ta’minlovchi dasturiy ta’minotlarni ishlab chiqish va foydalanish jarayoniga e’tibor qaratadi?	Dasturiy ta’minotlar xavfsizligi",
     },
     {
        title: "15	Markaziy xab yoki tugun orqali tarmoqlashgan holda boshqarish qaysi tarmoq topologiyasida amalga oshiriladi?	Yulduz",
     },
     {
        title: "16	Agar A5/1 shifrlash algoritmida kiritilgan ochiq matn uzunligi 256 bitga teng bo’lsa, shifrmatn uzunligi necha bit bo’ladi?	256",
     },
     {
        title: "17	Modul arifmetikasida mod 7 bo’yicha 3 soniga teskari bo’lgan sonni toping?	5",
     },
     {
        title: "18	A5/1 oqimli shifrlash algoritmida maj(0,1,0) ga teng bo’lsa, qaysi registorlar siljiydi?	x,z",
     },
     {
        title: "19	Zaxira nusxalash manzillarini ko’rsating.	ichki, tashqi va bulutli zaxiralash",
     },
     {
        title: "20	Risklarga qarshi zudlikda chora ko’rish zarur, Riskni yetarlicha past darajagacha tushurish uchun nazoratlash vositalarini aniqlash va o’rnatish kerak. Mazkur harakatlar riskning qaysi darajasi uchun?	Yuqori",
     },
     {
        title: "21	RSA algoritmida p=7, q=5 bo’lsa, N sonidan kichik va u bilan o’zaro tub bo’lgan sonlar miqdorini ko’rsating?	N=(p-1)*(q-1)24",
     },
     {
        title: "22	Blokli simmetrik shifrlashda shifrmatndagi bir bitning o’zgarishi deshifrlangan matndagi necha bitning o’zgarishiga olib keladi?	1",
     },
     {
        title: "23	Kompyuter viruslarining tarqalish usullarini ko’rsating.	Ma’lumot saqlovchilari, internetdan yuklab olish va elektron pochta orqali",
     },
     {
        title: "24	Agar d – ochiq kalit, e – shaxsiy kalit, H – xabar, X() – xesh funksiya bo’lsa, Sign() – imzolash funksiyasi uchun asosiy parametrlariga asoslangan ko’rinishni ko’rsating.	Sign(X(H),e)",
     },
     {
        title: "25	Ichki yoki tashqi majburiyatlar natijasida tahdid yoki hodisalarni yuzaga kelishi, yo’qotilishi yoki boshqa salbiy ta’sir  ko’rsatishi mumkin bo’lgan voqea bu?	Risk",
     },
     {
        title: "26	RSA algoritmida p=7, q=5 bo’lsa, N sonidan kichik va u bilan o’zaro tub bo’lgan sonlar miqdorini ko’rsating.	N=(p-1)*(q-1)24",
     },
     {
        title: "27	Parollarni saqlashda nega shifrlashning o’rniga xeshlash funksiyasidan foydalaniladi?	Shifrlashda kalitni saqlash zaryriyat mavjud",
     },
     {
        title: "28	Modul arifmetikasida mod 11 bo’yicha 3 soniga teskari bo’lgan sonni toping.	4",
     },
     {
        title: "29	Foydalanishni boshqarishning qaysi usulida asosiy g’oya tizimning ishlash logikasini tashkilotdagi kadrlar vazifasiga yaqinlashtirishga harakat qilinadi?	RBAC",
     },
     {
        title: "30	5 XOR 6 = X.  Natijani hisoblang.	(2 lik sanoq sistemasiga o’tkazib, XOR amali bajariladi va natija 10 lik sanoq sistemasiga qaytariladi.)    Natija: 3",
     },
     {
        title: "31	Diskdagi barcha ma’lumotlarni (master boot record, (MBR) bilan) yoki MBR siz shifrlashni amalga oshiradi. Gap qaysi shifrlash usuli haqida bormoqda?	Diskni Shifrlash",
     },
     {
        title: "32	RSA algoritmida p=7, q=5, e=5 ga teng bo’lsa, shaxsiy kalitni hisoblang.	5",
     },
     {
        title: "33	Axborotni qaysi xususiyatlari ochiq kalitli shifrlar yordamida ta’minlanadi?	Konfidensiallik, butunlik va foydalanuvchanlik",
     },
     {
        title: "34	RSA algoritmida ochiq kalit e=5, N=35 ga teng bo’lsa, M=2 ga teng ochiq matnni shifrlash natijasini ko’rsating.	32",
     },
     {
        title: "35	legitimate code if hour is 7 p.m: crash_computer( ) legimate code   ushbu mantiqiy kod qaysi zararli dasturiy vositaga tegishli Mantiqiy bomba",
     },
     {
        title: "36	Quyidagi talabalardan qaysi biri xesh funksiyasiga tegishli emas.	Bir tomonlama funksiya bo’lmasligi kerak",
     },
     {
        title: "37	Ob’ektning eng cheklangan imtiyoz turini ko’rsating.	Private-Faqat o’zi Public-Hamma uchun     Protected-Voris klaslar uchun",
     },
     {
        title: "38	Ochiq kalitli kriptotizmda ma’lumotga imzo qo’yish qaysi kalit yordamida amalga oshiriladi?	Yuboruvchining Shaxsiy kaliti",
     },
     {
        title: "39	Qaysi tarmoq himoya vositasi tarmoq manzili, idintifikatorlar, interfeys manzili, port nomeri va boshqa parametrlar yordamida filtrlashni amalga oshiradi?	Tarmoqlararo ekran",
     },
     {
        title: "40	RAID 3 texnologiyasining vazifasi - …	Diskni navbatlanishi va xatolikni nazoratlash",
     },
     {
        title: "41	Turli psixologik usullar va firbgarlik amaliyotining to’plami bo’lib, uning maqsadi firibgarlik yo’li bilan shaxs to’g’risida maxfiy ma’lumotlarni olishdan iborat. Gap nima haqida bormoqda?	Ijtimoiy injineriya",
     },
     {
        title: "42	Agar biror xesh funksiyaga kiruvchi ma’lumot uzunligi 512 bit bo’lganda, chiquvchi qiymat 128 bitga teng bo’lsa, shu funksiyaga 1024 bit ma’lumot kiritilganida chiqish biti necha bitga teng bo’ladi?	128",
     },
     {
        title: "43	A5/1 shifrlash algoritmida registrlar siljiganidan keyingi holat: x18=1, y21=1 va x22=1 ga teng bo’lsa, hosil bo’lgan psevdotasodifiy qiymatini ko’rsating.	Javob :1",
     },
     {
        title: "44	Himoya mexanizmini aylanib o’tib tizimga ruxsatsiz kirish imkonini beruvchi zararli dastur turi bu?	Backdoors",
     },
     {
        title: "45	Faqat ma’lumotga nisbatan o’zgarish yuz berganda zaxiralashni amalga oshiruvchi usuli bu?	O’sib boruvchi zaxiralash",
     },
     {
        title: "46	Quyidagi atamalardan qaysi biri faqat simmetrik blokli shifrlarga xos?	Blok uzunligi",
     },
     {
        title: "47	Modul arifmetikasida mod 11 bo’yicha 5 soniga teskari bo’lgan sonni toping.	1/5mod11=x    Qaysi sonni 5 ga ko’paytirib 11 ga bo’lsak qoldiq 1 bo’ladi   Natija:9",
     },
     {
        title: "48	A5/1 shifrlash algoritmida registrlar siljiganidan keyingi holat: x18=0, y21=0 va x22=0 ga teng bo’lsa, hosil bo’lgan psevdotasodifiy qiymatini ko’rsating.	Xor amali orqali ishlanadi   0+0+0=0 Javob:0",
     },
     {
        title: "49	Ma’lumotlarni zaxira nusxalash nima uchun potensial tahdidlarni paydo bo’lish ehtimolini oshiradi?	Tahdidchi uchun nishon ko’payadi",
     },
     {
        title: "50	Qaysi turdagi shifrlash vositasida barcha kriptografik parametrlar kompyuterning ishtirokisiz generatsiya qilinadi?	Dasturiy ",
     },
     {
        title: "51	Paketlarni snniferlash, portlarni skanerlash va Ping buyrug’ini yuborish hujumlari qaysi hujumlar toifasiga kiradi?	Razvedka hujumlari",
     },
     {
        title: "52	RSA algoritmida p=5, q=11, e=7 ga teng bo’lsa, shaxsiy kalitni hisoblang?	N=(p-1)(q-1)ed=1modN23",
     },
     {
        title: "53	2 XOR 6 = ? Natijani aniqlang.	4",
     },
     {
        title: "54	Jumlani to’ldiring. … - muhim bo’lgan axborot nusxalash yoki saqlash jarayoni bo’lib, bu ma’lumot yo’qolgan vaqtda qayta tiklash imkoniyatini beradi.	Ma’lumotlarni zaxira nusxalash",
     },
     {
        title: "55	Shifrlash va deshifrlashda turli kalitlardan foydalanuvchi shifrlar bu - 	Ochiq kalitli shifrlar",
     },
     {
        title: "56	Xavfsizlik bo’shlig’i bo’lib, turli foydalanuvchilarni audentifikatsiyalash usullarini aylanib o’tib hujumchiga tizimga kirish imkoniyatini taqdim etadi. Gap nima haqida bormoqda?	Zaiflik",
     },
     {
        title: "57	RSA algoritmida p=3, q=5 bo’lsa, N sonidan kichik va u bilan o’zaro tub bo’lgan sonlar miqdorini ko’rsating.	8",
     },
     {
        title: "58	Axborot xavfsizligiga tahdid bu?	Aktivga zarar yetkazishi mumkin bo’lgan istalmagan hodisa",
     },
     {
        title: "59	Ruxsatsiz foydalanish, qo’pol kuch hujumi, imtiyozni orttirish, o’rtaga turgan odam hujumi kabilar qaysi tarmoq xavfsizligiga kiritilgan hujumlar oilasiga tegishli?	Kirish hujumlari",
     },
     {
        title: "60	Paketlarni snifferlash,portlarni skanerlash va Ping buyrug’ini yuborish hujumlari qaysi  hujumlar toifasiga kiradi ?	Razvedka hujumlari",
     },
     {
        title: "61	RSA algoritmida p=5,q=13,e=7 ga teng bo’lsa shaxsiy kalitni hisoblang ?	N=(p-1)(q-1)  e*d=1modN  Shaxsiy kalit=d, Natija=7",
     },
     {
        title: "62	RSA algoritmida p=7,q=11,e=7 ga teng bo’lsa shaxsiy kalitni hisoblang ?	N=(p-1)(q-1) e*d=1modN    Shaxsiy kalit=d, Natija=43",
     },
     {
        title: "63	RSA algoritmida p=5,q=11,e=7 ga teng bo’lsa shaxsiy kalitni hisoblang ?	N=(p-1)(q-1)   e*d=1modN  Shaxsiy kalit=d, Natija=23",
     },
     {
        title: "64	Asosiy fayl tizimining ustida joylashgan kriptografik fayl tizimida foydalanadi .Gap qaysi shifrlash xususida bormoqda	Fayllarni shifrlash",
     },
     {
        title: "65	Asosiy maqsad ma’lumotni maxfiyligini ta’minlash bo’lgan jarayonni ko’rsating 	Shifrlash",
     },
     {
        title: "66	Qaysi bilim sohasi tashkil etuvchilar o’rtasidagi  aloqani himoyalshga e’tibor qaratib o’zida fizik va Amantiqiy ulanishni birlashtiradi 	Aloqa xavfsizligi",
     },
     {
        title: "67	Fodalanuvchi parollarni bazada qanday ko’rinishda saqlayi ?	Xeshlangan ko’rinishda",
     },
     {
        title: "68	Foydalanuvchi yoki subektni haqiqiyligini tekshirish jarayoni bu  	Autenfikatsiya ",
     },
     {
        title: "69	Qaysi funksiya matnli fayllar bilan ishlashda mavjud put(joylashish) pozitsiyasini ifodalaydigan streampost turdagi qiymatni qaytaradi ?	Tellp()",
     },
     {
        title: "70	Marketing maqsadida yoki reklamani namoiysh qilish uchun foydalanuvchini ko’rish rejimini kuzatib boruvchi zararli dastur turi bu ?	Adware",
     },
     {
        title: "71	Xavfsizlik siyosatilarining afzaliklari keltirilgan qatorni ko’rsating ? 	1)Risklarni kamaytiradi 2)Kuchaytirilgan ma’lumot va tarmoq xavfsizlini ta’minlaydi  3)Qurilmalardan foydalanish va ma’lumotlar transferining monitoringlanishi va nazoratlanishini ta’minlaydi    Javob:Barcha javoblar to’g’ri",
     },
     {
        title: "72	Ma’lumotni to’liq qayta tiklash  qachon samarali amalga oshiriladi ?	Saqlagichda ma’lumot qayta yozilmagan bo’lsa",
     },
     {
        title: "73	Agar e-ochiq kalit,d-shaxsiy kalit,M-xabar,H()-xesh funksiya bo’lsa,Sign()-imzolash funksiyasi uchun asosiy parametrlariga asoslangan ko’rinishni ko’rsating ?	Sign(H(M),d) H-Xesh funksiya M-habar  d-shaxsiy kalit",
     },
     {
        title: "74	Tokenga asoslangan autenfikatsiya usuliga qaratilgan hujumlarni ko’rasating ?	Fizik og’irlash ,mobil qurilmalarda zararli dasturdan foydalanishga asoslangan hujumlar",
     },
     {
        title: "75	Riskning qaysi  darajasida risk ta’sirini kamaytirish uchun profilaktika choralarini ko’rish talab etiladi ?    Quyi",
     },
     {
        title: "76	Ochiq kalitli shifrlash algoritmida ma’lumotni shifrlab yuborish qaysi kalit yordamida amalga oshiriladi ? 	Qabul qiluvchining ochiq kaliti",
     },
     {
        title: "77	Qanday tahdidlar passiv hisoblanadi ?	Amalga oshishida axborot strukturasi va mazmunida hech narsani o’zgartirmaydigan tahdidlar",
     },
     {
        title: "78	Tashkilot axborot aktivlarini va binolaridan foydalanishni kuzatish ,qaydlash va nazoratlashgan yordam beruvchi xavfsizlik turi ?	Fizik xavfisizlik",
     },
     {
        title: "79	VPNni OSI modelining “Ishchi sathlari”ga ko’ra turlari keltirilgan qatorni aniqlang ?	Kanal sathidagi VPN Tarmoq sathidagi  VPN   Seans Sathadagi VPN",
     },
     {
        title: "80	Tashkilotni himoylash maqsadida amalga oshirilgan xavfsizlik nazoratini tavsiflovchi yuqori sathli hujjat yoki hujjatlar to’plami bu ?	Xavfiszlik siyosati ",
     },
     {
        title: "81	Juda ahamyatli emas , lekin kelajakda yuzaga kelishi mumkin bo’lgan muommolarni ko’rsatish mumkin bo’lgan voqealar Windows OTda qanday hodisa sifatida qayd etiladi ?	Ogohlantirish",
     },
     {
        title: "82	“Kompilyator” foydalanvching imtiyoziga ko’ra ish ko’rish o’rniga o’zining imtiyoziga asosan ish ko’rishi “klassik xavfisizlik sohasida nima deb yuritiladi?	Tartibsiz Yordamchi muammosi",
     },
     {
        title: "83	Qaysi nazorat usuli axborotni fizik himoyalashda inson faktorini mujassamlashtirgan ?	Ma’muriy nazoratlash",
     },
     {
        title: "84	Qaysi holatni normal va qaysi holatni normal bo’lmagan deb topish va ushbu ikki holat orasidagi farqni anilashga asoslanadi.Ushbu xususiyat zararli ddasturiy vositalarni aniqlashning qaysi usuliga tegishli ?	Anomaliyaga asoslangan",
     },
     {
        title: "85	Ichki tarmoq foydalanuvchilarni tashqi tarmoqqa bo’lgan murojaatlarini chegaralash qaysi himoya vositasining vazifasi hisoblanadi 	Tarmoqlararo Ekran",
     },
     {
        title: "86	Resursni va harakatni kim bajaryotgani to’grisida holatlar “AGAR ,U HOLDA” dan tashkil topgan qoidalarga asoslanadi.Gap qaysi foydalanishini boshqarish usuli haqida bormoqda ?	ABAC",
     },
     {
        title: "87	Faqat simsiz tarmoqlarga xos bo’lgan zaiflikni ko’rsating ?	Nazoratlanmaydigan hududni har doim mavjudligi",
     },
     {
        title: "88	Tashqi ma’lumotlarni bazaga yuklashda qanday kengaytmali fayl formatidan foydalansa bo’ladi ?	Bu savol bizga emas",
     },
     {
        title: "89	username = read_username ( ) password=read_password() if username is '133t h4ckOr': return ALLOW LOGIN if username and passwordare valid: return ALLOW LOGIN else: return DENY LOGIN Ushbu mantiqiy kod zararli dasturiy vositaga tegishli?	Backdoors",
     },
     {
        title: "90	TCP/IP modelidagi transport sathi OSI modelidagi qaysi sathlariga mos keladi ?	Transport sathi",
     },
     {
        title: "91	Elektron axborot saqlovchilardan qayta foydalanishli ma’lumotlarni yo’q qilish usullari orasidan eng ishonchlisini aniqlang 	Takroriy qayta yozish",
     },
     {
        title: "92	Qaysi himoya vositasi mavjud IP-paketni to’liq shifrlab ,unga yangi IP sarlavha beradi ?	Virtual private Network(VPN)",
     },
     {
        title: "93	Tarmoq sathidagi VPN qasi protokol asosida quriladi ?	IPSec",
     },
     {
        title: "94	Eng kam vaqtda ma’lumotni tiklash imkoniyatiga ega usul bu ?	To’liq zaxirlash",
     },
     {
        title: "95	Biba modelida birinchi ob'ektning ishonchlilik darajasi 1(01) ga, ikkinchi ob'ektning ishonchlilik darajasi '(02) ga va uchinchi ob'ektning ishonchlilik darajasi 1(03) teng bo'lsa, u holda ushbu uchta ob'ektdan iborat bo'lgan to'rtinchi ob'ektning ishonchlilik darajasi nimaga  teng bo'ladi? Bu yerda, 1(01)>1(02)> 1(03).	I(O3)",
     },
     {
        title: "96	Qaysi himoya vositasi tomonlarni autenfikatsiyalash imkoniyatini beradi ?	Virtual Private Network",
     },
     {
        title: "97	A5/1 algoritmidagi X register uzunligi nechiga teng  ?	19",
     },
     {
        title: "98	A5/1 algoritmidagi Y register uzunligi nechiga teng  ?	22",
     },
     {
        title: "99	A5/1 algoritmidagi Z register uzunligi nechiga teng  ?	23",
     },
     {
        title: "100	Kriptotizimning to’liq xavfsiz bo’lishi Kerxgofs prinsipiga ko’ra qaysi kattalikning nomalum bo’lishga asoslanadi ?	Kalit",
     },
     {
        title: "101	Tarmoqlararo ekran vositasi OSI modelining  funksional sathlari bo'yicha qanday turlarga  bo'linadi?	Paket filterlari - tarmoq sathida  ishlaydi;  Ekspert paketi filterlari -  transport sahida ishlaydi;  Ilova proksilari - ilova sathida ishlaydi.",
     },
     {
        title: "102	Tizim tomonidan foydalanuvchilarga imtiyozlar berish jarayoni bu ?	Avtorizatsiya",
     },
     {
        title: "103	Bir xil bardoshlikka ega bo’lganida quyidagi algoritmlardan qaysi birida kalit uzunligi  eng katta bo’ladi ?	RSA",
     },
     {
        title: "104	Diskni shifrlash usuliga xos bo’lgan xususiyatlarni belgilang 	Deyarli barcha narsa,almashtirish maydoni(swap space),vaqtinchalik fayllar,shifrlanadi.",
     },
     {
        title: "105	Paket filteri turdagi tarmoqlaro ekran vositasi nima asosida tekshirishni amalga oshiradi?	Tarmoq Sathi parametrlari asosida",
     },
     {
        title: "106	Ushbu hujumda qurbonni shubhalanmasligi uchun tegishli tayyorgarlik ko'riladi: tugulgan kun, INN. passport raqami yoki hisob   raqamining oxirgi belgilari kabi ma'lumotlar topiladi. Gap qaysi ijtimoiy injineriya turi haqida bormoqda?	Phishing",
     },
     {
        title: "107	Yo’q qilish usullari orasidan ekologik jihatdan ma’qullamaydiganva maxsusjoy talab qiladigan usul qaysi ?	Yoqish",
     },
     {
        title: "108	Trafik orqali axborotni to’plashga harakat qilish razvedka hujumining qaysi turida amalga oshiriladi?	Passiv",
     },
     {
        title: "109	Qaysi turdagi shifrlash vositasida shifrlash jarayonida boshqa dasturlar kabi kompyuter resursidan foydalanadi ?	Dasturiy",
     },
     {
        title: "110	Zahira nushalash strategiyasi rejasi  nimadan boshlanadi ?	Tashkilot missiyasi uchun zarur axborotni aniqlashdan ",
     },
     {
        title: "111	Zudlik bilan chora ko’rish talab etilmasada, qisqa  vaqtda qarshi harakatlarni qo'llash zarur; Riskni  yetarlicha past darajagacha tushirish uchun  imkoni boricha nazoratni amalga oshirish kerak.  Mazkur harakatlar riskning qaysi darajasi    uchun?	O’rta",
     },
     {
        title: "112	Elektron raqamli imzo keltirilgandan qaysi xususiyatni ta’minlamaydi ?	Konfidensialikni",
     },
     {
        title: "113	Tashqi tarmoqdagi foydalanuvchilardan ichki tarmoq resurslarni himolayalash qaysi himoya vositasining vazifa hisoblanadi ?	Tamoqlaro ekran ",
     },
     {
        title: "114	Autenfikatsiya faktori yo’qolgan taqdirda qayta tiklash qaysi usul uchun eng arzon ?	Biror nimani bilishga(parolga asoslangan)  asoslangan",
     },
     {
        title: "115	Modul arifmetikasida mod9 bo’yicha 4 soniga teskari bo’lgan sonni toping ?	                Ishlash usuli: 1/4 *mod9=x 4x =1mod 9 ikkala tomonni modlaymiz  4xmod9=1  Endi javobdan kelamiz qaysi birini 4 ga kupaytirib 9 ga bulsak qoldiq 1 boladi bu 7",
     },
     {
        title: "116	Foydalanuvchining tizimiga muvaffaqiyatli urunishi  Windiws OTda qanday audit hodisasi sifatida qayd etiladi ?	Muvaffaqiyatli audit",
     },
     {
        title: "117	RSA algoritmida ochiq kalite=7 ,N=35 ga teng bo’lsa ,M=2 ga teng ochiq matinni shifrlash natijasini ko’rsating 	Shifrlash C=MemodN Deshifrlash M=CdmodN  C=27mod35=23",
     },
     {
        title: "118	Hujumchi algoritm(shifrlash algoritmi) haqida barcha ma’lumotlarni bilgan taqdirda ham kalitsiz ochiq matinni tiklashning imkoni bo’lmasligi zarur.Bu qanday tamoil ?	Kerxofs prinsipi",
     },
     {
        title: "119	Parolga asoslangan autenfikatsiya usulining asosiy kamchiligini ko’rsating ?	Esda saqlash zaruriyati ",
     },
     {
        title: "120	Jumlani to’ldiring .Autenfikatsiya tizimlari asoslanishga ko’ra ….. turga bo’linadi ?	3",
     },
     {
        title: "121	Plastik kartadan to’lovni amalga oshirishda mavjud autenfikatsiya usuli qaysi sinfga tegishli ?	Ikki faktorli autenfikatsiya",
     },
     {
        title: "122	Qaysi chora tadbirlar virusdan zararlanish holatini kamaytiradi ?	1.Faqat litseziyali dasturiy ta’minotdan foydalanish  2.Kompyuterni zamonaviy antivirus dasturiy vositasi bilan ta’minlash va uni  doimiy yangilab boorish   3.Boshqa kompyuterda yozib olingan ma’lumotlarni o’qishdan oldin har bir saqlagichni antivirus tekshiruvidan o’tkazish  Javob :Barcha javob to’g’ri",
     },
     {
        title: "123	Xavfsizlik siyosatlarining afzalliklari keltirilgan qatorni ko'rsating?	1.Kuchaytirilgan malumot va tarmoq xavfsizligini ta'minlaydi.  2.Qurilmalardan foydalanish va ma'lumotlar transferining monitoringlanishi va nazoratlanishi ta’minlaydi.  3.Riskiarni kamaytiradi.   Javob:Barcha javoblar to’g’ri",
     },
     {
        title: "124	Elektron raqamli imzoni ochiq kalitli kriptotizmdagi asoslanishining sababi  nimada ?	Ularda 2 ta kalitdan foydalanishi",
     },
     {
        title: "125	Kanal sathidagi VPN qaysi protokollar asosida quriladi ?	L2F,L2TP VA PPTP",
     },
     {
        title: "126	RSA algoritmida F(N) funksiya nimani ko’rsatadi ?	N sonidan kichik va u bilan o’zaro tub sonlar miqdorini ko’rsatadi ",
     },
     {
        title: "127	Subyekt.Lavozimi=Vrach & muhit.vaqt >=8:00 & muhit.vaqt <=18:00.Bu shart foydalanuvchini boshqarish usuliga misol bo’ladi ?	ABAC",
     },
     {
        title: "128	Tarmoqda har bir kompyuter yoki tugun  markaziy tugunga individual boglangan  bo'ladi. Gap qaysi topologiya haqida bormoqda?	Yulduz",
     },
     {
        title: "129	Jumlani to’ldiring.Simli va Simsiz tarmoqlar orasidagi asosiy farq …?	Tarmoq chetki nuqtalari orasidagi mutlaqo nazoratlanmaydigan xudud mavjudligi",
     },
     {
        title: "130	Ma’lumot shifrlansa natijasi ….bo’ladi 	shifrmatn",
     },
     {
        title: "131	Tarmoqning tuzilishini aniqlab,tarmoqning  mantiqiy va fizik joylashuvini hisoblaydi.Gap nima haqida bormoqda ?	Topologiya ",
     },
     {
        title: "132	Yaratishda biror matematik muammoga asoslanuvchi shifrlashalgoritmini  ko’rsating 	Ochiq kalitli shifrlash",
     },
     {
        title: "133	(bob,-),(alias,rw),(sem,rw),(buxgalteriyaga oid dastur,rw).Ushbu qoida quyidagilardan qaysi biriga tegishli ?	Foydalanishni boshqarish ro’yhati yoki ACL",
     },
     {
        title: "134	Ma’lumotlarni yo’qotish yoki funksionallikni yo’qotish kabi muhim muommoni ko’rsatadigan voqealar Windows OTda qanday  hodisa sifatida qayd etiladi ?	Xatolik",
     },
     {
        title: "135	Quyidagilardan qaysi biri tarmoqxavfsizligi muammolariga sabab bo’lmaydi ?	Routerlardan foydalanmaslik",
     },
     {
        title: "136	Eng kam xarajatli zaxira nusxalash manzilini ko’rsating ?	Ichki zaxiralash",
     },
     {
        title: "137	Belgilangan sharoitlarda tahdidning manbalarga potensial zara yetkazilishini kutish bu ?	Risk",
     },
     {
        title: "138	Resurslardan foydalanish usuliga ko’ra kompyuter viruslari qanday turlarga bo’linadi  ?	Virus-parazitlar va virus-chervlar ",
     },
     {
        title: "139	Tizimning turli resurslariga foydalanishni cheklash uchun foydalanuvchi qoidalar to’plami haqidagi barcha narsalar bu ?	Avtorizatsiya",
     },
     {
        title: "140	Faqat foydalanishni boshqarish usullari keltirilgan javobni ko’rsating  ?	DAC,MAC",
     },
     {
        title: "141	Foydalanuvchini haqiqiyligini tekshirish jarayoni bu ?	Autenfikatsiya",
     },
     {
        title: "142	Hajmi bo'yicha eng kichik hisoblangan tarmoq turi bu- ?	PAN",
     },
     {
        title: "143	Agar ob'ektning xavfsizlik darajasi  sub'ektning xavfsizlik darajasidan  kichik yoki teng bo’lsa, u holda O'qish  uchun ruxsat beriladi. Ushbu qoida  qaysi foydalanishni boshqarish  usuliga tegishli.	MAC",
     },
     {
        title: "144	Qaysi zaxira nusxalash vositasi oddiy kompyuterlarda foydalanish uchun qo’shimcha apparat va dasturiy vositani talab qiladi ?	Lentali disklar ",
     },
     {
        title: "145	9soni bilan o’zaro tub bo’lgan sonlarni ko’rsating 	10,8",
     },
     {
        title: "146	Qaysi himoya vositasi yetkazilgan axborotning butunligini tekshiradi ?	Virtual Private Network",
     },
     {
        title: "147	Bell-Lapadula modelida birinchi ob'ektning  xavfsizlik darajasi L(OI) ga, ikkinchi  ob'ektning xavfsizlik darajasi L(02) ga va  uchinchi ob'ektning xavfsizlik darajasi L(03)  teng bo'lsa, u holda ushbu uchta ob'ektdan  iborat bo'lgan to'rtinchi ob'ektning xavfsizlik  darajasi nimaga teng bolladi? Bu yerda,  L(OI) <L(O2)<L(03).	L(O3)",
     },
     {
        title: "148	Yong’inga qarshi tizimlarni aktiv chora turiga quyidagilardan qaysilari kiradi ?	Yong’inni aniqlash va bartaraf etish ",
     },
     {
        title: "149	Bir biriga osonlik bilan ma’lumot va resrslarni taqsimlash uchun ulangan kompyuter gruhi bu ?	Kompyuter tarmog’i",
     },
     {
        title: "150	OSI modelining quyi sathi bu ?	Fizik sath",
     },
     {
        title: "151	Jumlani to’ldiring.Ma’lumotni uzatishda kriptografik himoya….	Konfidensiallik va butunlikni ta’minlaydi ",
     },
     {
        title: "152	Foydalanuvchini (yoki biror tomonni) tizimidanfoydalanish uchun ruxsati mavjudligini aniqlashjarayoni bu ?	Avtorizatsiya",
     },
     {
        title: "153	….-ushbu zaxiralash usuli tizim ishlamay turganda yoki foydalauvchi tomonidan boshqarilmagan vaqtda amalga oshiriladi .Ushbu usul zaxiralashning xavfsiz usuli hisoblanib,ma’lumotninusxalash vaxfidan himoyalaydi ?	Sovuq zaxiralash",
     },
     {
        title: "154	Har qanday vaziyatda biror bir hodisani yuzaga kelish ehtimoli qo’shilsa 	Risk paydo bo’ladi ",
     },
     {
        title: "155	Jumlani to’ldiring.Axborot vaxfsizligiga bo’ladigan ……. Tahdidlari maqsadli(atayin) tahdidlar deb ataladi 	Foydalanuvchilar va xizmat ko’rsatuvchi hodimlarning hatoliklari ",
     },
     {
        title: "156	Yaratishda psevdotasodifiy sonlar generatoriga  asoslanuvchi kriptografik shifrlash usuli bu ?	Simmetik oqimli",
     },
     {
        title: "157	Axborot xavfisizligida zaiflik bu?	Tahdidga sabab bo’luvchi tashkilot aktivi yoki boshqaruv tizimidagi nuqson",
     },
     {
        title: "158	Jumlani to’ldiring.Hujumchi kabi fikrlash ….. kerak	Ma’lumot,axborot va tizimdan foydalansih uchun ",
     },
     {
        title: "159	Mijozlar,foydalanuvchilar va tashkiotlarda mavjud bo’lgan biror xizmatni cheklashga urunuvchi hujum bu?	Hizmatdan vos kechishga undash hujumi DDos ",
     },
     {
        title: "160	Foydalanishni boshqarish matritsani ustunlar bo’yicha bo’linsa …hosil bo’ladi	Foydalanishni boshqarish ro’yhati yoki ACL",
     },
     {
        title: "161	ERI da rad etish jarayoni-….	Foydalanuvchi (A) foydalanuvchi (B)ga haqiqatdan ham ma’lumot jo’natgan bo’lib ,uzatilgan ma’lumotni rad etishi mumkin",
     },
     {
        title: "162	Agar biz 01 ob'ektning butunligiga ishonsak,  biroq 02 ob'ektning butunligiga ishonmasak,  u holda ob'ekt O ikkita 01 va 02  ob'ektlardan yaratilgan bo'lsa, u holda  ob'ekt O ning butunligiga ishonmaymiz. Bu  qaysi modelni anglatadi?	Biba modelini",
     },
     {
        title: "163	Quyidagi muammolardan qaysi biri simmetrik kriptotizimlarga xos ?	Kalitni taqsimlash zaruriyati",
     },
     {
        title: "164	Faktorlash muammosi asosidayaratilgan assimetrik shifrlash usuli ?	RSA",
     },
     {
        title: "165	Qaysi biometrik parameter eng yuqori universallik xususiytga ega ?	Yuz tuzilishi",
     },
     {
        title: "166	Foydalanuvchi shaxsiy xabarlarni  alohida shifrlashni unutgan vaqtlarda juda qo’l  keladi.Gap qaysi shifrlash xususida bormoqda ? 	Diskni shifrlash",
     },
     {
        title: "167	Deshifrlash uchun kalit va … kerak bo’ladi ?	Shifrmatn",
     },
     {
        title: "168	Parolga xos bo’lmagan xususiyatni ko’rsating ?	Faqat pechat qiluvchi belgilarni qabul qiladi ",
     },
     {
        title: "169	Razvedka hujumlari bu ?	Asosiy hujumlarni oson amalga oshirish uchun tashkilot va tarmoq haqidagi  axborotni to’plashni maqsad qiladi ",
     },
     {
        title: "170	Qaysi xususiyatlar RAID texnalogiyasiga xos emas	Shaxsiy kompyuterda foydalanish ",
     },
     {
        title: "171	Risk ta’sirini kamaytirsh uchun profilaktika choralarini ko’rish zarur.Mazkur harakatlar riskning qaysi darajasi uchun ?	Quyi",
     },
     {
        title: "172	Biror narsani bilishga asoslngan autenfikatsiya deyilganda quyidagilardan qaysila tushinildi 	Pin,Parol",
     },
     {
        title: "173	Axborotni mavjudligini yashirish bilan shug’illanuvchi fan sohasi bu-?	Stenaganofiya",
     },
     {
        title: "174	Elektron ma’lumotlarni yo’q qilishda maxsus qurilma ichida joylashtirilgan saqlagichning xususiyatlari o’zgartiriladigan usul bu ?	Magnitsizlantirish ",
     },
     {
        title: "175	C=P XOR K- bir martali bloknotda shifrlash funksiyasi bo'lsa, unga mos deshifrlash funksiyasini koirsating? Bu yerda, P ochiq matn, K kalit va C - shifrmatn.	P=CxorK",
     },
     {
        title: "176	Eng yuqori dasturlash tilini ko’rsating ?	Java",
     },
     {
        title: "177	Internetdagi firibgarlikning bir turi bo'lib,  uning maqsadi foydalanuvchining maxfiy  ma'lumotlaridan, login/parol, foydalanish  imkoniyatiga ega bo'lish. Gap qaysi ijtimoiy injineriya yo'nalishi haqida bormoqda?	Phishing",
     },
     {
        title: "178	Quyidagi talablardan qaysi biri xesh funksiyaga tegishli emas 	Bir tomonlama funksiya bo’lmasligi kerak",
     },
     {
        title: "179	Rad etishdan himoyalashda ochiq kalitli kriptotizmlarning qaysi xususiyati muhim hisoblanadi .	Ochiq kalitni saqlash zaruriyati mavjud emasligi ",
     },
     {
        title: "180	Virus aniq bo’lgan xususiyatlarni aniq ajratilgan holatda eng katta samaradorlikga ega zararli dasturni aniqlashusulini ko’rsating	Signaturaga asoslangan usul",
     },
     {
        title: "181	O’zini  yaxshi va foydali dasturiy vosita sifatida ko’rsatuvchi zararli dastur turi bu ?	Troyan otlari ",
     },
     {
        title: "182	RSA algoritmidagi ochiq va shaxsiy kalitlar uchun qanday munosabat  o’rinli ?	Ochiq va Shaxsiy kalitlar  mod(p-1)(q-1) bo’yicha o’zaro  teskari",
     },
     {
        title: "183	Biba modelida birinchi ob'ektning ishonchlilik darajasi 1(01) ga va ikkinchi ob'ektning  ishonchlilik darajasi 1(02) ga teng boilsa, ushbu ikkita ob'ektdan iborat bo'lgan uchinchi  ob'ektning ishonchlilik darajasi nimaga teng boiladi? Bu yerda, 1(01)>1(02).	I(O2)",
     },
     {
        title: "184	Quyidagi ta'rif Windows OTdagi qaysi  hodisani tavsiflaydi? Ma'lumotni  yo'qotish yoki funksionallikni yoqotish   kabi muhim muammoni ko'rsatadigan  voqea. Masalan, agar xizmat ishga  tushirish paytida yuklana olmasa  hodisasi qayd etiladi.	Xatolik",
     },
     {
        title: "185	Yaxlitlikni ta’minlash bu-?	Ruxsatsiz yozishdan himoyalash",
     },
     {
        title: "186	Tokenga asoslangan autenfikatsiya uslining asosiya kamchiligini ayting  ?	Doimo xavfsiz saqlab olib yurish zaruriyati",
     },
     {
        title: "187	Qaysi biometrik parametrning universallik(biometrik parametrlarni barcha foydalanuvchilardan bo’lishi) darajasi eng katta ?	Yuz tasviri",
     },
     {
        title: "188	Odatda mavjud bo’lgan IP-paket to’liq shifrlanib, unga yangi IP sarlavha beriladi .Ushbuamal qaysi himoya vositasida amalga oshiriladi ?	Virtual Shaxsiy tarmoq",
     },
     {
        title: "189	“Yelka orqalab qarash” hujumi qaysi turdagi autenfikatsiya usuliga qaratilgan ?	Parolga asoslangan autenfikatsiya",
     },
     {
        title: "190	Operatsion tizimlarda keng qo’lanuvchi foydalanishni boshqarish usuli bu ?	DAC",
     },
     {
        title: "191	TCP/IP modelining ilova sathi OSI modelining qaysi sathilarga mos keladi ?	Ilova,taqdimot va seans",
     },
     {
        title: "192	Yaratilishi uchun faktorlash muammosiga asoslangan ochiq kalitli shifrlash algoritmi  nomini ko’rsating ?	RSA",
     },
     {
        title: "193	64 ta belgidan iborat Sezar shifrlash uslulida kalitni bilmasdan turib nechta urinishda ochiq matnni aniqlash mumkin ?	63",
     },
     {
        title: "194	Shaxsiy simsiz tarmoqlar qo’llanish sohasini belgilang	Tashqi qurilmalar kabellarining o’rnida",
     },
     {
        title: "195	Axborotni foydalanuvchiga qulay tarzda taqdim etish uchun……amalga oshiriladi .	Kodlash",
     },
     {
        title: "196	Tizimli fiklash…..uchun kerak.	Kafolatlangan ammalarni ta’minlash",
     },
     {
        title: "197	Parolga”tuz” qo’shib xeshlashdan maqsad ?	Tahdidchi ishini oshirish",
     },
     {
        title: "198	Ma’lumotni zaxira nusxalash strategiyasi nimadan boshlanadi ?	Zarur axborotni tanlashdan",
     },
     {
        title: "199	DNS serverlari tarmoqda qanday vazifani amalga oshiradi ?	Xos nomlari va internet nomlarini IP manzillarga o’zgartirish va teskrisini amalga oshiradi",
     },
     {
        title: "200	Ikki kalitli kriptotizim bu - 	Ochiq kalitli kriptotizm",
     },
     {
        title: "201	Tarmoqdagi barcha tugunlarni o’zaro bog’laydi .Gap qaysi topologiya haqida bormoqda ?	Halqa",
     },
     {
        title: "202	VPNning texnik amalga oshirilishiga ko’ra turlari keltirilganqatorni aniqlang?	Marshuritizatorlar ko’rinishidagiVPN;tarmoqlararo ekran ko’rinishidagi VPN;dasturiy ko’rinishidagi VPN;Maxsus shifrlash protsessoriga ega apparat vosita ko’rinishidagi VPN;",
     },
     {
        title: "203	Quyidagilardan qaysilari tarmoq topologiyalari hisoblanadi ?	Halqa,yulduz,shina,daraxt",
     },
     {
        title: "204	Jumlani to'ldiring.Parol kalitdan ....farq qiladi	Tasodifiylik darajasi bilan",
     },
     {
        title: "205	Portlarni va operatsion tizimni skanerlash razverdka hujumlarining qaysi turida amalga oshiriladi ?	Aktiv",
     },
     {
        title: "206	VPNning texnik amalga oshirishga ko’ra turlari keltirilgan qatorni aniqlang ?	Korporativ tarmoq ichidagi VPN,masofadan foydalanuvchi VPN,korparativ tarmoqlararo",
     },
     {
        title: "207	Elektron raqamli imzo muolajalarini ko’rsating	Imzoni shakillantirish va imzoni tekshirish",
     },
     {
        title: "208	Qurbon kompyuterdagi ma’lumotni shifrlab,uni deshifrlash uchun to’lovni amalga oshirishni talabqiluvchi zararli dastur bu -?	Ransomware",
     },
     {
        title: "209	Agar ob’ektning xavfsizlik darajasi sub’ektning xavfsizlik darajasidan kichik yoki teng bo’lsa,u holda o’qish uchun ruxsat beriladi.Ushbu qoida qaysi boshqarish usuliga tegishli	MAC",
     },
     {
        title: "210	Antivirus dasturiy vositalari zararli dasturlarga qarshi to’liq himoyani ta’minlaydi olmasligining asosiy sababini ko’rsating?	Paydo bo’lyotgan zararli dasturiy vositalar soni ko’pligi",
     },
     {
        title: "211	…..-ma’lumotlarni zaxira nusxalashning mazkur usuli amalga keng tarqalgan bo’lib , dinamik yoki aktiv zaxira nusxalash usuli deb ham ataladi.ushbu boshqarayotgan vaqtda ham zaxira nusxalash jarayoni davom etiriladi.	Issiq zaxiralsh",
     },
     {
        title: "212	Jumlani to’ldiring.Denial of service (DOS) hujumi axborotni …..xususiyatni buzushga qaratilgan.	Foydalanuvchanlik",
     },
     {
        title: "213	Kiberetika bu-?	Kompyuterlar bilan bog’liq falsafiy soha bo’lib ,foydalanuvchilarning xatti-xarakati ,kompyuterlar nimaga dasturlashtirilganligi va umuman insonlar ",
     },
     {
        title: "214	Yong’inga qarshi kurashishning aktiv usuli to’g’ri ko’rsatilgan javobni toping ?	Tutunni aniqlovcjilar,alangani aniqlovchilar va issiqlik aniqlovchilar",
     },
     {
        title: "215	Kriptografiya so’ziga berilgan to’g’ri tavsifni toping?	Maxfiy shifrlarni yaratish fani va sanati",
     },
     {
        title: "216	Quyidagilardan qaysi biri har ikkala tomonning haqiqiyligini tekshirish jarayonini ifodalaydi ?	Ko’p faktorli autenfikatsiya ",
     },
     {
        title: "217	Jumlani to’ldiring.Kriptografik himoy axborotning ….xususiyatini ta’minlamaydi.  Autenfikatsiya",
     },
     {
        title: "218	Qaysi biometrik eng yuqori takrorlanmas xususiyatga ega?	Ko’z qorachig’i",
     },
     {
        title: "219	WEP,WPA,WPA2 protokollari qaysi simsiz texnalogiyada ishlatilgan?	Wi-Fi",
     },
     {
        title: "220	Agar foydalanuvchi tarmoq drayveriga kirishga harakat qilsa va u muvaffaqiyatsiz bo’lsa, u Windows OTda qanday audit hodisasi sifatida qayd etiladi ?	Muvaffaqiyatsiz audit",
     },
     {
        title: "221	Faraz qilaylik tizimdagi barcha fayllarni xeshlab, xesh qiymatlari xavfsiz manzilga saqlangan bo'lsin. U holda vaqti-vaqti bilan  ushbu faylning xesh qiymatlari qaytadan xeshlanadi va dastlabki holatdagilari bilan taqqoslanadi. Agar faylning bir yoki bir nechta bitlari o'zgarishga uchragan bollsa, u holda xesh qiymatlar bir-biriga mos kelmaydi va natijada uni virus tomonidan zararlangan deb qarash mumkin. Bu zararli dasturiy vositalarni aniqlashning qaysi usuliga misol   bo'ladi?	O’zgarishni aniqlashga asoslangan",
     },
     {
        title: "222	RAID 1 texnalogiyasining vazifasi-	Diskni akslantirish",
     },
     {
        title: "223	1.Agar ob’ektning xavfsizlik darajasi sub’ektning xavfsizlik darajsidan kichik bo’lsa,u holda yozishga ruxsat beradi.  2.Agar sub’ektning xavfsizlik darajasi ob’ektning xavfsizlik darajasida bo’lsa,u holda o’qishga ruxsat beriladi.Ushbu qoidalar axborotni qaysi xususiyatlarni ta’minlshga qaratilgan 	Butunlikni",
     },
     {
        title: "224	ERI da niqoblash (imitatsiya) jarayoni-….	Uchinchi foydalanuvchi(V) Foydalanuvchi(B)ga foydalanuvchi (A) nomidan ma’lumot jo’natadi ",
     },
     {
        title: "225	Zaxira nusxalash vositalarini tanlashda nimalarga e’tibor berish talab etiladi ?	Foydalanuvchanlik,qulaylik,narx",
     },
     {
        title: "226	Shaxsnikimdir deb davo qilish jarayoni bu ?	Idenfikatsiya",
     },
     {
        title: "227	Har bir obyekt uchun foydalanish ruxsatini belgilash o’rniga ,rol uchun obyektlardan foydlanish ruxsatini ko’rsatish amalga oshiriladi.Gap qaysi foydlanishni boshqarish usuli haqida bormoqda?	RBAC",
     },
     {
        title: "228	Axborot saqlagich vositalaridan qayta foydlanish xususiyatini saqlab qolgan holda axborotni yo’q qilish usuli qaysi ?	Bir necha marta takroran yozish va maxsus dasturlar yordamida saqlagichni tozalash",
     },
     {
        title: "229	Ma’lumotdan zudlik bilan foydalanishni ta’minlaydi;Kam xarajatlik;Tiklashdagi tezkorlik;Ushbu xususiyat qaysi zaxira nusxalash manziliga tegishli?	Ichki(onsite) zaxiralash",
     },
     {
        title: "230	Elektron raqamli imzo qandayaxborotni o’z ichiga olmaydi ?	Imzo kalitli ta’sirning tugashi muddati ",
     },
     {
        title: "231	TCP/IP modelidagi kanal sathi OSI modelidagi qaysi sathlariga mos keladi ?	Fizik va kanal",
     },
     {
        title: "232	Axborotni qaysi xususiyatlari simmetrik shifrlar yordamida ta’minlanadi?	Konfidensiallik va butunlik",
     },
     {
        title: "233	Ichki Hisoblash tizimlari orasidagi aloqani ularning ichki tuzilmaviy va texnalogik asosidan qat’iy nazar muvaffaqiyatli o’rnatuvchi asos bu ?	Tarmoq modeli",
     },
     {
        title: "234	RSA algoritmida shifrlash ifodasini toping	C=(M^e)modN",
     },
     {
        title: "235	RSA algoritmida deshifrlash ifodasini toping	M=(C^d)modN",
     },
     {
        title: "236	Faqat ob’ektning egasi tomonidan foydalanishga mos bo’lgan mantiqiy foydalanish usulini ko’rsating ?	Diskretsion foydalanishni boshqarish ",
     },
     {
        title: "237	GSM tarmog’ida ovozli so’zlashuvlarni shifrlash algoritmi bu ?	A5/1",
     },
     {
        title: "238	Turli xil psixologik usullar va fribgarlik amaliyotining to’plami bo’lib ,uning maqsadi fribgarlik yo’li bilan shaxs to’g’risida maxfiy ma’lumotlarni olishdan iborat .Gap nima haqida bormoqda ?	Ijtimoiy injineriya",
     },
     {
        title: "239	Ochiq matn va shifrmatndagi belgilarning shastotalari qaysi akslantirishda o’zgarmaydi.	O’rniga qo’yish",
     },
     {
        title: "240	Foydalanuvchi tomonidan kiritilgan taqiqlangan so’rovni qaysi himoya vositasi yordamida nazoratlash mumkin.	Tarmoqlararo Ekran",
     },
     {
        title: "241	Voqea sodir bo’lishi ehtimoli va ushbu hodisaning axborot texnalogiyalari aktivlariga ta’siri bu ?	Risk",
     },
     {
        title: "242	Nima uchun antivirus vositalari to’liq himoyani ta’minlamaydi ?	1.Antivirus dasturi rootkit tipidagi zararli dasturlarni aniqlashda foydasi tegmasligi mumkin 2.Yangi virus uchun vaksinani tayyorlash yetarlicha ko’p vaqt olishi 3.Antivirus ishlab chiquvchilar yangi virus uchun namunaviy fayllar yaratguncha virus ishlab chiquvchilar tomonidan katta hajmdagi yangi viruslar yaratiladi   To’g’ri javob:Barcha javoblar to’g’ri",
     },
     {
        title: "243	Tarmoq xavfsizligini buzlishi biznes faoliyatiga qanday ta'sir qiladi	Biznes faoliyatining buzlishi,huquqiy javobgarlikka sababchi bo’ladi.",
     },
     {
        title: "244	Quyidagilarning qaysi biri tabiiy tahdidlarga misol bo’la oladi ?	Toshqinlar,yong’in,zilzila",
     },
     {
        title: "245	Tarmoqlarro ekran vositasi foydalanilgan texnologiyasi bo’yicha qanday turlarga bo’linadi ?	Protokol holatini nazoratlash;vositachi moduli yordamida(proksi)",
     },
     {
        title: "246	Raund tushunchasi quyidagi qaysi shifr turlariga tegishli ?	Simmetrik blokli",
     },
     {
        title: "247	Quyidagi qaysi hujum azvedka hujumlari turiga kirmaydi ?	DDos",
     },
     {
        title: "248	Subyekt identifikatorini tizimga yoki talab qilgan subyektga taqdim etish jarayoni bu ?	Idenfikatsiya",
     },
     {
        title: "249	Ochiq tarmoq yordamida himoyalangan tarmoqni qurish imkoniyatiga  ega hioya vositasi bu ?	Virtual Private Network",
     },
     {
        title: "250	Eng quyi dasturlash tilini ko’rsating ?	Assambler",
     },
     {
        title: "251	Jumlani to’ldiring.Agar axborotning og’irlanishi moddiy va ma’naviy boyliklarning yo’qotilishiga olib kelsa.	Jinoyat sifatida baholanadi",
     },
     {
        title: "252	Tarmoq xavfsizligini buzlishi biznes faoliyatiga qanday ta’sir qiladi ?	Biznes faoliyatining buzlishi,huquqiy javobgarlikka sababchi bo’ldi",
     },
     {
        title: "253	Subyektlar va obyektlarni klassifikatsiyalashga asoslangan foydalanishni boshqarish usuli bu ?	MAC",
     },
     {
        title: "254	Qaysi xususiyatlar RAID texnalogiyasiga xos emas ?	Shaxsiy kompyuterda foydalanish mumkin",
     },
     {
        title: "255	Seans sathdagi VPN qaysi protocol asosida quriladi ?	TLS",
     },
     {
        title: "256	Jumlani to’ldiring…….sohasi tashkil etuvchilar xavfsizligi,aloqa xavfsizligi va dasturiy ta’minotlar xavfsizligidan iborat.	Tizim xavfsizligi",
     },
     {
        title: "257	www.PayPai.com manzili www.PayPal.com manzili sifatida yuboriladi.Bu qaysi turdagi hujumga misol bo’ladi ?	Phishing",
     },
     {
        title: "258	AGAR talabgor boshqaruvchi bo’lsa,U HOLDA maxfiy ma’lumotni o’qish/yozish huquqi berilsin.Bu qaysi foydalanishni boshqarish usuliga misol bo’ladi ?	ABAC",
     },
     {
        title: "259	…..-ushbu zaxiralashda tarmoqqa bog’lanish amalga oshiriladi.Ushbu zaxiralashda,tizim yangilanishi davomiy yangilashni qabul qilish uhun ulanadi.	Iliq zaxiralash",
     },
     {
        title: "260	Qaysi  akslantirish ochiq matn belgilarining o’rni biror qoidaga ko’ra o’zaro almashtirilib,shifr matn hosil qilinadi?	O’rin almashtirish",
     },
     {
        title: "261	Signaturaga(antivirus aloqador bo’lgan) bu-?	Fayldan topilgan bitlar qatori ",
     },
     {
        title: "262	Qanday sabablar dasturiy ta’minotni funksional yaroqsiz xolatga keltiradi ?	Kompyuter tizimidagi uzulishlar,dasturchilar xatosi,dasturiy ta’minotdagi xatoliklar",
     },
     {
        title: "263	Quyidagilardan qaysi  biri rad etishdan himoyni ta’minlaydi .	Elektron raqamli imzo tizimi",
     },
     {
        title: "264	Ma’lumotni shifrlash va deshifrlashda yagona kalitdan foydalanuvchi tizim bu-?	Simmetrik kriptotizm",
     },
     {
        title: "265	Xavfsiz bo’shlig’i bo’lbturli foydalanuvchilarni autenfikatsiyalash usullarini aylanib o’tib hujumchiga tizimga kirish imkoniyatini taqdim etadi.Gap nima haqida bormoqda ?	Zaiflik",
     },
     {
        title: "266	Xizmatdan vos kechishga qaratilgan hujum bu ?	Foydalanuvchilarga va tashkilotda mavjuda mavjuda bo’lgan biror xizmatni cheklashga urinadi !",
     },
     {
        title: "267	Qaysi akslantirishda ochiq matndagi belgilarning takrorlanish chastotasi shifrmatndagi belgilardan ham bir xil bo’ladi ?	Bir alifboli o’rniga qo’yish",
     },
     {
        title: "268	Elektron raqamli imzo qanday qilib qo’yilgan imzoni rad eta olmaslikni ta’minlaydi ?	Shaxsiy kalitdan foydalanib imzo qo’yilgan bois",
     },
     {
        title: "269	Quyidagilardan qaysi biri to’liq kimpyuter topologiyalarini ifodalamaydi .	LAN,GAN,OSI",
     },
     {
        title: "270	Maxfiy xabarni soxta xabar ichiga berkitish oraqli aloqani yashirish bilan shug’ullanuvchi fan sohasi ?	Stegonografiya",
     },
     {
        title: "271	IP manzilni domen nomlariga yoki aksincha almashtirishni amalga oshiruvchi xizmat bu -?	DNS",
     },
     {
        title: "272	Asosan disk ishlab chiquvchilar tomonidan taklif etiladi .Gap qaysi shifrlash usuli xususida bormoqda ?	Diskni Shifrlash ",
     },
     {
        title: "273	Jumlani to’ldiring.Tarmoqlararo ekranning vazifasi……	Ishonchli va ishonchsiz tarmoqlar orasida ma’lumotlarga kirishni boshqarish",
     },
     {
        title: "274	Konfidensiallikni ta’minlash bu-?	Ruxsat etilmagan “o’qishdan”himoyalash",
     },
     {
        title: "275	Tizimlarni,tarmoqlarni va dasturlarni raqamli hujumlardan himoyalash amaliyoti bu 	Kiberxavfsizlik",
     },
     {
        title: "276	….umumiy tarmoqni ichki va tashqi qismlarga ajratib himoyalash imkonini beradi.	Tarmoqlararo ekran",
     },
     {
        title: "277	Shifrlash va deshifrlash turli kalitlardan foydalanuvchi shifrlar bu- 	Ochiq kalitli shifrlar",
     },
     {
        title: "278	Autentifikatsiya faktorini yo’qolgan taqdirda qayta tiklash qaysi usul uchun eng arzon ?	Biror nimani bilishga asoslangan ",
     },
     {
        title: "279	Faqat ma’lumotni butunligini ta’minlovchi kriptotizmni ko’rsating 	1.Elektron raqamli imzo tizimlari 2.Ochiq kalitli kriptografik tizimlar 3.MAC(Xabarlarni autenfikatsiya kodlari) tizimlari     To’g’ri javob:Barcha javoblar to’g’ri",
     },
     {
        title: "280	Zaxirlashni amalga oshirishda inson ishtirokini talab etadi; Tabiy ofatlarga yoki o’g’irlashga moyil.Ushbu xususiyat qaysi zaxira nusxalash manziliga tegishli ?	Ichki(onsite) zaxirlash ",
     },
     {
        title: "281	Foydalanuvchini (yoki biror tomonni) tizimdan foydalanish uchun ruxsati mavjudligini aniqlash jarayoni bu?	Avtorazatsiya",
     },
     {
        title: "282	Elektron ma’lumotni yo’q qilishning eng xavfsiz usulini ko’rsating ?	Takroriy qayta yozish",
     },
     {
        title: "283	Kriptologiya so’ziga berilgan to’g’ri tavsifni toping ?	“Maxfiy “ kodlarni yaratish va buzish fani san’ati",
     },
     {
        title: "284	Ochiq matn uzunligiga teng bo’lgan psevdotasodigiy ketma-ketlikni talab qiluvchi 	Simmetrik oqimli",
     },
     {
        title: "285	Biba modeli axborotni qaysi xususiyatini ta’minlashni maqsad qiladi ?	Butunlik",
     },
     {
        title: "286	Paydo bo’lishi tasodifiy, qasddan yoki boshqa harakatning ta’sirida bo’lishi mumkin bo’lgan hodisa bu ?	Tahdid",
     },
     {
        title: "287	Axborotni foydalanuvchanligini buzishga qaratilgan tahdidlar bu?	DDOS tahdidlar",
     },
     {
        title: "288	Tarmoqdagi barcha kompyuter va tugunlar bir-biri bilan o’zaro bog’langan bo’ladi .	Mesh",
     },
     {
        title: "289	Xavfsizlik siyosati xususiyatlari keltirilgan qatorni ko’rsating ?	1.Qisaqa va aniq, foydalanuvchan bo’luvchi  2.Tushunarli bo’lishi,amaliy bo’lishi 3.Iqtisodiy asoslangan bo’lishi, barqaror bo’lishi   To’g’ri javob :Barcha Javoblar to’g’ri",
     },
     {
        title: "290	Bell-Lapadula modeli axborotni qaysi xususiyatini ta’minlash maqsda qiladi ?	Konfidensiallik",
     },
     {
        title: "291	Internetdagi firbgarlikning bir turi bo’lib,uning maqsadli foydalanuvchining maxfiy ma’lumotlaridan ,login/parol,foydalanish imkoniyatiga ega bo’lish. Gap qaysi ijtimoiy injineriya yo’nalishi haqida bormoqda ?	Phishing",
     },
     {
        title: "292	Foydalanuvchi shaxsiy xabarni alohida shifrlashni unutgan vaqtlarda juda qo’l keladi.Gap qaysi shifrlash usuli xususida bormoqda ?	Diskni shifrlash",
     },
     {
        title: "293	2 lik sanoq tizimida 11011 soniga 11010 sonini 2 modul bo’yicha qo’shing?	Xor amalida Ishlanadi  11011+11010=00001",
     },
     {
        title: "294	Ma’lumotni mavjudligini yashirishda….	Steganografik algoritmdan foydalaniladi",
     },
     {
        title: "295	1 va 2 – jahon urushi davriga oid shifrlarni ko’rsating?	Zimmeramann telegram, Enigma shifri",
     },
     {
        title: "296	Qaysi biometrik parameter eng yuqori takrorlanmaslik xususiyatiga ega ?	Ko’z qorachig’i",
     },
     {
        title: "297	Jumlani to’ldiring.Simmetrik  shifrlash algoritmlari ochiq ma’lumotdan foydalanish tartibiga ko’ra…	Blokli va Oqimli turlarga bo’linadi",
     },
     {
        title: "298	Agar simmetrik kalitning uzunligi 64 bit bo’lsa, jami bo’lishi mumkin bo’lgan kalitlar soni nechta ?	264",
     },
     {
        title: "299	….kriptografik shifrlash algoritmlari blokli va oqimli turlarga ajratiladi .	Simmetrik",
     },
     {
        title: "300	Axborotni shifrlashdan maqsad nima 	Maxfiy xabar mazmunini yashirish",
     },
     {
        title: "301	Faolashish prinsipiga ko’ra kompyuter viruslar qanday turlarga bo’linadi ?	Rezident va norezident",
     },
     {
        title: "302	Xodimlarga faqat ruxsat etilgan saytlardan foydalanishga imkon beruvchi himoya vositasi bu ?	Tarmoqlararo ekran",
     },
     {
        title: "303	Sub’ekt .lavozimi=Vrach & muhit.vaqt >=8:00 & muhit.vaqt <= 18:00.Ushbu keltirilgan  shart qaysi foydalanishni boshqarish usuliga tegishli.	Atributga asoslangan foydalanuvchini boshqarish",
     },
     {
        title: "304	(OT,rx),(buxgalteriyaga oid dastur,rx),(buxgalteriyaga oid ma’lumot,r).Ushbu qoida quyidagilardan qaysi  biriga tegishli.	Imtiyozlar ro’yhati yoki C-list",
     },
     {
        title: "305	Windows OTda mavjud hodisa turlarini ko’rsating ?	1.Muvaffaqiyatli audit 2.Xatolik,axborot 3.Ogohlantirish,muvaffaqiyatli audit  To’g’ri javob:Barcha javoblar to’g’ri",
     },
     {
        title: "306	Sotsial injineriyaga asoslangan hujumlar qaysi turdagi autentifikatsiya usuliga qaratilgan	Parolga asoslangan autentifikatsiya",
     },
     {
        title: "307	Zararli dasturiy vositalarga qarshi foydalanuvchi dasturiy vosita bu ?	Antivirus",
     },
     {
        title: "308	Kiberjinoyatchilik bu -?	Kompyuter yoki boshqa qurilmalarga qarshi qilingan yoki kompyuter",
     },
     {
        title: "309	Jumlani to’ldiring….texnalogiyasi lokal simsiz tarmoqlarga tegishli.	Wi-Fi",
     },
     {
        title: "310	Tarmoq modellarini ko’rsating ?	OSI,TCP/IP",
     },
     {
        title: "311	Axborot xavfsizligida risk bu ?	Manbaga zarar keltiradigan ichki yoki tashqi zaiflik ta’sirida tahdid qilish ehtimoli.",
     },
     {
        title: "312	Yo’qolgan holatda almashtirish qaysi turdagi autenfikatsiya usuli uchun eng arzon.	Parolga asoslangan autenfikatsiya",
     },
     {
        title: "313	Internet tarmog’idagi obro’sizlantirilgan kompyuterlar bu-?	Botnet",
     },
     {
        title: "314	Xesh funksiyalarda kolliziya hodisasi bu ?	Ikki turli matnlarning xesh qiymatlarini bir xil bo’lishi ",
     },
     {
        title: "315	Qaysi bilim sohasi katta tizimlarda integralllashgan tashkil etuvchilarni loyihalash,sotib olish,testlash,analiz qilish va texnik xizmat ko’rsatishga e’tibor qaratadi ?	Tashkil etuvchi xavfsizligi",
     },
     {
        title: "316	Mazkur zararli dasturiy ta’minot qurbon kompyuterida mavjud qimmatli fayllarni shifrlaydi yoki qulflab qo’yib, to’lov amalga oshirilishini talab qiladi.Ushbu xususiyat qaysi zararli dasturiy vositaga tegishli ?	Ransomware",
     },
     {
        title: "317	Qalbakilashtirish hujumi qaysi  turdagi autenfikatsiya usuliga qaratilgan ?	Biometrik autenfikatsiya",
     },
     {
        title: "318	Kirish hujumlari bu ?	Turli texnalogiyalarda foydalangan holda tarmoqqa kirishga harakat qiladi .",
     },
     {
        title: "319	OSI tarmoq modeli nechta sathdan iborat ?	1.ilova 2.Taqdimot 3.Seans 4.Transport 5.Tarmoq 6.Kanal 7.Fizik  Jaob:7",
     },
     {
        title: "320	TCP/IP modeli nechta sathdan iborat ?	1.Ilova 2.Transport 3.Tarmoq 4.Kanal  Javob:4",
     },
     {
        title: "321	Ilova modeli ----	1.Ilova 2.Taqdimot   3.Seans",
     },
     {
        title: "322	Transport----	Transport",
     },
     {
        title: "323	Tarmoq---	Tarmoq ",
     },
     {
        title: "324	Kanal----	1.Kanal  2.Fizik",
     },
     {
        title: "325	A5/1 shifri bu-?	Oqimli shifr",
     },
     {
        title: "326	64 bitli kalitni talab qiluvchi oqimli shifrlash algoritmini ko’rsating ?	A5/1",
     },
     {
        title: "327	Tizimdagi shaxsiy obyektlarni himoyalash uchun o’rinli foydalanishni boshqarish usuli bu ?	DAC",
     },
     {
        title: "328	Ochiq matn qismlarini takroriy shifrlovchi algoritmlar bu -	Blokli shifrlar",
     },
     {
        title: "329	  A5/1 oqimli shifrlash algoritmining bir siklida kamida nechta registr siljiydi?	2",
     },
     {
        title: "330	Jumlani to’ldiring…..Kompyuter davriga tegishli shifrlarga misol bo’la oladi.	DES,AES",
     },
     {
        title: "331	Simli lokal tarmoq texnalogiyasini ko’rsating ?	Ethernet",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
     {
        title: "",
     },
]