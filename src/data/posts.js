/**
 * ============================================================
 * BLOG POSTS — Sumber Konten Artikel
 * ============================================================
 *
 * Cara menambah postingan baru (untuk SEO):
 *   1. Tambah object baru di array `posts` di bawah.
 *   2. WAJIB unique: `slug` (jadi URL: /blog/<slug>).
 *   3. `publishedAt` format ISO: "YYYY-MM-DD".
 *   4. `body` mendukung markdown sederhana via newline (paragraf dipisah \n\n).
 *      Tambah subheading dengan prefix "## " di awal paragraf.
 *   5. Set `draft: true` untuk menyembunyikan dari list (default false).
 *   6. Letakkan thumbnail cover di /public/images/blog/ lalu reference
 *      "/images/blog/<file>.webp". Rekomendasi ukuran: 1200×675 (16:9), <150KB.
 *
 * Sitemap & RSS akan otomatis include semua post yang `draft !== true`.
 * Schema.org BlogPosting JSON-LD juga di-generate otomatis per post.
 */

export const posts = [
  {
    slug: "memulai-perjalanan-ilycode",
    title: "Memulai Perjalanan ILY Code: Dari Mimpi Sederhana Jadi Tim Kreatif",
    excerpt:
      "Cerita di balik berdirinya ILY Code, mengapa kami percaya teknologi harus terasa manusiawi, dan bagaimana setiap baris kode bisa membuat seseorang tersenyum.",
    body: `ILY Code lahir dari satu pertanyaan sederhana: bagaimana kalau teknologi tidak hanya berfungsi, tapi juga membuat orang tersenyum?

Pertanyaan itu awalnya muncul di sela-sela ngoding malam hari, saat seorang mahasiswa yang kami bantu akhirnya berhasil menjalankan sistem skripsinya untuk pertama kali. Dia tertawa lega, lalu bilang "akhirnya!" dengan nada yang masih kami ingat sampai sekarang. Di situ kami sadar — kode bukan cuma soal logika, tapi tentang momen di mana seseorang bernapas lega karena bebannya hilang.

## Dari Satu Mahasiswa ke Satu Komunitas

Awalnya kami hanya tim kecil yang membantu mahasiswa menyelesaikan tugas akhir. Satu proyek, lalu dua, lalu lima. Tidak ada strategi marketing yang rumit — cukup dari mulut ke mulut. Satu mahasiswa yang kami bantu rekomendasikan ke teman sekelasnya, dan seterusnya. Dari kampus satu, kami mulai dikenal di kampus lain, di kota lain, bahkan di luar pulau.

Yang membuat kami bertahan bukan skill teknis saja, tapi cara kami mendampingi. Kami tidak cuma ngoding lalu serahkan file. Kami duduk bareng, jelaskan logikanya, biarkan mereka paham sampai siap presentasi di depan dosen. Banyak dari mereka bilang: "Aku nggak cuma selesai skripsi, aku juga jadi paham coding." Itu yang bikin kami paham — kami bukan tukang bikin, kami partner belajar.

## Titik Balik: Dari Freelance ke Tim Kreatif

Setelah beberapa tahun, kebutuhan klien mulai berubah. Bukan cuma mahasiswa dengan skripsi — tapi pelaku UMKM yang butuh website, kreator konten yang mau bikin platform sendiri, pondok pesantren yang mau hadir online, sampai perusahaan yang butuh sistem ERP custom.

Kami sadar ini bukan lagi sekadar freelance. Kami butuh jadi tim yang lebih terstruktur, dengan produk yang jelas. Dari situ lahir tiga layanan utama kami: IlyCorp untuk website company profile, IlySchool untuk website sekolah yang terjangkau, dan IlyProject untuk partner ngoding mahasiswa dan developer independen.

Tapi meskipun struktur berubah, prinsip intinya tetap sama: teknologi harus terasa manusiawi.

## Apa Artinya "Teknologi yang Membuat Tersenyum"?

Kalimat ini bukan slogan marketing. Bagi kami, ini punya arti praktis dalam tiga hal.

Pertama, produk yang kami bangun harus benar-benar menyelesaikan masalah — bukan cuma terlihat keren. Website sekolah yang kami buat harus mudah di-update oleh guru yang bahkan tidak paham HTML. ERP yang kami kembangkan harus bikin tim operasional kerja lebih ringan, bukan malah jadi beban baru.

Kedua, kami percaya komunikasi yang jujur. Kalau timeline terlalu ketat, kami bilang dari awal. Kalau ide klien secara teknis kurang feasible, kami kasih alternatif, bukan asal iya-iya. Kalau ada bug yang kami temukan sebelum klien sadar, kami laporkan dan perbaiki tanpa drama.

Ketiga, kami menjaga hubungan setelah project selesai. Banyak klien kami yang masih chat setahun kemudian sekadar untuk tanya-tanya teknis, atau bahkan cuma sharing progress bisnisnya. Buat kami, itu indikator keberhasilan yang lebih nyata daripada jumlah project yang rilis.

## Yang Kami Pelajari dari Perjalanan Ini

Ada tiga pelajaran besar yang kami bawa dari tahun-tahun awal ini.

Klien paling berharga adalah yang paling butuh didengar, bukan yang paling besar budget-nya. Mahasiswa dengan skripsi 500 ribu bisa jadi lebih loyal dan lebih sering merekomendasikan kami daripada klien korporat yang sekali bayar lalu hilang.

Simplicity menang atas kompleksitas. Website yang loading cepat dan mudah di-update jauh lebih impactful daripada website penuh animasi yang bikin bingung pengunjung.

Tim yang kecil tapi care, lebih kuat dari tim besar yang kejar target. Kami tidak pernah mau tumbuh terlalu cepat. Setiap anggota tim yang bergabung harus paham bahwa di ILY Code, proses sama pentingnya dengan hasil.

## Mimpi Kami Ke Depan

Kami tidak ingin jadi agency digital terbesar di Indonesia. Kami ingin jadi tempat di mana ide-ide kecil yang sering diabaikan — seperti warung makan tetangga yang butuh menu online, atau guru SD yang mau publikasi kegiatan sekolahnya — bisa diwujudkan tanpa beban biaya yang menakutkan.

Kami juga ingin terus jadi partner belajar bagi mahasiswa Indonesia. Semakin banyak mahasiswa yang kami bantu, semakin banyak calon developer masa depan yang membawa nilai-nilai yang sama: bikin teknologi yang manusiawi, yang membuat orang tersenyum.

## Punya Ide? Ceritakan.

Kalau kamu sampai di titik ini, artinya kamu mungkin lagi mikir sesuatu. Entah mau bikin website buat usaha kecilmu, entah lagi pusing skripsi, entah cuma penasaran "kira-kira ini bisa dibikin nggak ya?"

Jangan ragu untuk cerita. Kami di sini bukan cuma untuk jualan jasa — kami di sini untuk dengar idemu dulu, lalu kasih masukan jujur apakah layak diwujudkan sekarang atau tunggu waktu yang lebih tepat.

Karena di ujung hari, ILY Code bukan soal berapa banyak project yang rilis. Tapi berapa banyak orang yang pulang dengan senyum karena idenya akhirnya jadi nyata.`,
    coverImage: "/images/blog/memulai-perjalanan-ilycode.webp",
    category: "Cerita Kami",
    tags: ["story", "company", "visi"],
    author: "Tim ILY Code",
    publishedAt: "2025-01-15",
    readingTime: 6,
    draft: false,
  },
  {
    slug: "tips-memilih-stack-skripsi-mahasiswa",
    title: "Tips Memilih Stack Teknologi untuk Skripsi Mahasiswa Informatika",
    excerpt:
      "Bingung pilih stack untuk skripsi? Panduan praktis memilih bahasa, framework, dan database yang sesuai dengan judul, deadline, dan kapasitas belajar kamu.",
    body: `Skripsi sering jadi titik balik mahasiswa Informatika: pertama kali bikin sistem dari nol, tanpa tutorial yang hand-holding. Dan seringkali, keputusan pertama yang bikin progress mandek berminggu-minggu bukan soal algoritma — tapi soal pilihan stack yang kurang tepat.

Kami sudah mendampingi ratusan mahasiswa lewat IlyProject, dan pola yang kami lihat terus berulang: ada yang baru 2 minggu sebelum sidang masih ganti framework karena ternyata terlalu sulit, ada yang sudah bayar hosting tapi akhirnya deploy-nya error karena stack-nya nggak support, ada yang dosennya tidak paham teknologinya jadi review berjalan lambat.

Artikel ini kami tulis bukan untuk bilang "pakai stack X saja", tapi untuk kasih kerangka berpikir biar kamu bisa pilih sendiri dengan percaya diri.

## 1. Sesuaikan dengan Topik Skripsi

Ini prinsip paling dasar yang sering diabaikan. Bukan semua stack cocok untuk semua topik.

Sistem Informasi umum (CRUD, dashboard, manajemen data) — PHP Native, Laravel, atau CodeIgniter masih sangat relevan. Banyak referensi lokal, banyak dosen yang familiar, dan hosting-nya murah. Jangan gengsi pakai teknologi "lawas" kalau topikmu memang fit di situ.

Machine Learning atau Data Science — Python dengan Flask atau Django jauh lebih natural. Library-nya (scikit-learn, TensorFlow, PyTorch) semua di ekosistem Python. Memaksa pakai Node.js untuk skripsi ML cuma bikin kerjaanmu dua kali lipat.

Aplikasi Mobile — Flutter sekarang jadi pilihan paling rasional untuk mahasiswa. Satu codebase untuk Android dan iOS, dokumentasi lengkap, komunitas Indonesia aktif. React Native oke kalau kamu sudah kuat di JavaScript, tapi Flutter biasanya lebih cepat dipelajari dari nol.

Web App modern dengan real-time feature — React atau Vue di frontend, dengan Node.js atau Go di backend. Hindari ini kalau skripsimu sederhana — kompleksitas deploy dan state management-nya terlalu besar untuk effort yang sebanding.

IoT atau Sistem Embedded — biasanya sudah ditentukan oleh hardware-nya (Arduino C/C++, Python untuk Raspberry Pi). Kalau butuh dashboard web, kombinasikan dengan Flask yang ringan.

## 2. Pertimbangkan Deadline & Kapasitas Belajar

Deadline skripsi biasanya ketat — rata-rata 3-6 bulan dari judul disetujui sampai sidang. Waktu sebanyak itu kelihatannya banyak, tapi kenyataannya akan terbagi untuk: riset literatur, coding, testing, penulisan laporan, revisi dari dosen, dan persiapan sidang.

Jadi saat pilih stack, jujur ke diri sendiri: berapa lama waktu yang kamu butuhkan untuk belajar stack ini sampai produktif?

Kalau kamu sudah pegang JavaScript 1 tahun, Next.js mungkin bisa kamu pahami dalam seminggu. Tapi kalau kamu baru pertama kali kenal JavaScript, jangan langsung lompat ke Next.js cuma karena kelihatan modern. Mulai dari React biasa dulu.

Rumus kasar: ambil stack yang kamu butuh maksimal 2-3 minggu untuk produktif, sisanya fokus ke algoritma atau logic skripsimu. Jangan habiskan bulan pertama cuma untuk belajar framework.

## 3. Faktor Dosen Pembimbing

Ini faktor yang paling sering diabaikan tapi paling krusial. Dosen pembimbing adalah orang yang akan review kode kamu. Kalau dia tidak familiar dengan stack-nya, ada dua kemungkinan.

Skenario baik: dosen kamu terbuka dan belajar bareng kamu. Ini kesempatan emas, tapi jarang terjadi.

Skenario realistis: review berjalan lambat, feedback-nya generic, revisi jadi tidak fokus di masalah teknis inti tapi di hal-hal permukaan. Ini bukan salah dosen — mereka punya banyak mahasiswa bimbingan dengan topik beragam.

Solusinya: pilih stack yang dosen pembimbingmu minimal paham konsepnya, meskipun bukan expert. Kalau dosenmu background PHP, Laravel masuk akal. Kalau background-nya Python, jangan lawan arus.

Kalau kamu terlanjur pilih stack yang dosenmu tidak paham, setidaknya dokumentasikan setiap keputusan teknis secara rinci. Siapkan diri untuk lebih banyak menjelaskan saat bimbingan.

## 4. Red Flags yang Harus Dihindari

Berdasarkan pengalaman kami mendampingi mahasiswa, ini pattern yang sering bikin skripsi mandek.

Trap "stack hype" — pilih framework yang lagi viral di Twitter atau YouTube cuma karena kelihatan keren. Biasanya tutorial masih sedikit, komunitas kecil, dan kalau error debugging-nya susah karena belum banyak yang share solusi.

Over-engineering — pakai microservices untuk sistem sederhana, pakai Docker untuk aplikasi 1 halaman, pakai Kubernetes untuk skripsi. Semua ini menambah kompleksitas tanpa justifikasi akademis.

Database misalignment — pakai MongoDB untuk data yang jelas-jelas relational, atau pakai MySQL untuk data semi-structured yang banyak nested. Pilih database berdasarkan struktur data, bukan karena "NoSQL lagi tren".

Deployment afterthought — baru kepikiran hosting seminggu sebelum sidang. Padahal beberapa stack (terutama yang butuh server Node.js atau Python dengan library berat) tidak bisa di-host di shared hosting biasa.

## 5. Checklist Praktis Sebelum Finalisasi

Sebelum kamu commit ke stack pilihan, coba jawab pertanyaan-pertanyaan ini.

Apakah tutorial untuk stack ini tersedia dalam bahasa Indonesia atau bahasa yang kamu kuasai? Bisakah kamu deploy stack ini di hosting gratis atau murah (Vercel, Netlify, shared hosting)? Apakah ada minimal 3 skripsi sebelumnya di kampusmu yang pakai stack serupa (untuk referensi format penulisan)? Apakah kamu bisa menyelesaikan satu fitur CRUD lengkap dalam 1 hari dengan stack ini? Kalau hari ini hardware atau laptop kamu rusak, apakah environment-nya mudah di-setup ulang di mesin baru?

Kalau ada 2 atau lebih pertanyaan yang jawabannya "tidak yakin" atau "tidak", reconsider pilihan kamu.

## Penutup: Stack Hanya Alat

Satu hal yang sering dilupakan: stack hanya alat. Yang dinilai dosen penguji bukan "wah ini pakai Next.js" atau "keren pakai microservices", tapi apakah sistem yang kamu bangun benar-benar menyelesaikan masalah yang kamu angkat di judul.

Banyak skripsi dengan stack sederhana (PHP Native + MySQL + Bootstrap) yang lolos sidang dengan nilai A karena logika algoritmanya kuat. Banyak skripsi dengan stack modern tapi algoritmanya dangkal yang revisi berkali-kali.

Kalau kamu masih bingung atau butuh second opinion untuk pilihan stack skripsimu, kami di IlyProject siap diskusi gratis. Kami bukan jualan stack tertentu — kami akan kasih masukan jujur berdasarkan topik, deadline, dan kapasitas kamu.`,
    coverImage: "/images/blog/tips-memilih-stack-skripsi-mahasiswa.webp",
    category: "Tutorial",
    tags: ["skripsi", "mahasiswa", "tutorial", "tips"],
    author: "Tim ILY Code",
    publishedAt: "2025-02-10",
    readingTime: 7,
    draft: false,
  },
  {
    slug: "kenapa-website-company-profile-masih-penting-2025",
    title: "Kenapa Website Company Profile Masih Penting di 2025?",
    excerpt:
      "Era media sosial bukan berarti website mati. Justru sebaliknya — website company profile jadi 'rumah digital' yang membuat brand kamu terlihat profesional dan bisa dipercaya.",
    body: `"Ngapain bikin website? Kan sekarang semua orang di Instagram dan TikTok."

Ini kalimat yang paling sering kami dengar dari calon klien saat diskusi. Dan kami paham kenapa — medsos memang lebih mudah, lebih murah, dan kelihatan lebih "hidup" karena ada interaksi real-time. Tapi ada satu hal yang sering diabaikan: medsos bukan rumah, medsos adalah tempat sewaan.

Di 2025, ketika lanskap digital semakin kompleks dan algoritma semakin tidak bisa diprediksi, website company profile justru jadi pondasi yang tidak bisa digantikan. Artikel ini akan jelaskan kenapa.

## 1. Website Adalah Aset, Medsos Adalah Sewa

Pahami analogi ini dulu: Instagram, TikTok, Facebook — semuanya adalah platform yang kamu "sewa" dengan konten. Kamu tidak memiliki followermu, kamu tidak memiliki konten-kontenmu dalam arti legal sepenuhnya, dan kamu tidak memiliki kontrol atas siapa yang melihat postinganmu.

Kalau algoritma berubah besok, reach kamu bisa drop 70% dalam semalam. Kalau akunmu kena banned karena satu laporan salah, semua konten dan follower yang kamu bangun bertahun-tahun hilang tanpa jaminan bisa dipulihkan. Kalau platform-nya tutup (ingat Path? Friendster?), kamu harus mulai dari nol di platform baru.

Website adalah aset yang kamu miliki sepenuhnya. Domain-nya atas namamu, hosting-nya kamu pilih, kontennya kamu kontrol. Satu-satunya "algoritma" yang bisa pengaruhi adalah Google — dan Google justru memberi reward untuk konsistensi dan kualitas, bukan untuk viralitas semata.

## 2. Consumer Behavior: Orang Indonesia Makin Sering Googling

Ada shift perilaku konsumen yang sering tidak disadari pelaku usaha kecil. Orang Indonesia sekarang googling sebelum percaya.

Kamu punya toko, seseorang lihat Instagram-mu, mereka tertarik. Apa yang mereka lakukan? 8 dari 10 kemungkinan: mereka googling nama brand-mu dulu sebelum beli atau pesan. Mereka cari review, mereka cek apakah usahamu "nyata" atau cuma akun medsos dadakan.

Kalau saat mereka googling brand-mu hanya muncul akun Instagram — kepercayaan turun. Brand kamu terlihat "belum serius". Tapi kalau muncul website dengan informasi jelas, portofolio, kontak resmi, dan mungkin beberapa artikel? Kepercayaan naik drastis, bahkan sebelum mereka baca detailnya.

Data internal dari beberapa UMKM yang kami bantu menunjukkan: setelah punya website, conversion rate dari medsos ke pembelian naik rata-rata 30-50%. Bukan karena website-nya magis, tapi karena hilang satu ganjalan psikologis: "apakah brand ini beneran ada?"

## 3. SEO: Investment yang Mengakar Tahunan

Ini yang paling sering diremehkan. Konten di medsos punya umur efektif rata-rata 48 jam sebelum tenggelam di feed. Konten di website yang teroptimasi bisa mendatangkan pengunjung berbulan-bulan, bahkan bertahun-tahun setelah dipublish.

Artikel yang ditulis hari ini, kalau kualitasnya bagus dan relevan dengan pencarian orang, bisa rangking di Google dan terus membawa traffic organik tanpa kamu harus promosi lagi. Ini yang disebut "compound effect" dalam SEO.

Contoh nyata: ILY Code punya artikel yang kami publish akhir 2024 tentang tips website untuk UMKM. Sampai awal 2025, artikel itu masih jadi sumber traffic terbesar kedua setelah homepage. Tidak ada biaya iklan, tidak ada promosi berbayar — cuma karena artikelnya muncul di halaman pertama Google untuk beberapa keyword relevan.

Medsos tidak bisa melakukan ini. Konten Instagram dari 2022 tidak akan muncul saat orang searching di 2025.

## 4. Kredibilitas: Domain Profesional vs Username Gratis

Ini hal kecil tapi penting. Bandingkan dua kartu nama: yang pertama tertulis "IG: @usahakreatif_jaya | TikTok: @usahakreatif_jaya_official", dan yang kedua tertulis "Email: info@usahakreatif.id | Web: usahakreatif.id".

Yang kedua terlihat jauh lebih profesional, lebih permanen, lebih bisa dipercaya. Ini bukan soal teknologi — ini soal persepsi.

Untuk bisnis B2B, website dengan domain sendiri bahkan sering jadi syarat minimum. Banyak perusahaan besar punya SOP internal yang melarang kerja sama dengan vendor yang tidak punya website resmi. Kalau target market-mu termasuk bisnis menengah-besar, tidak punya website berarti kehilangan peluang besar.

## 5. Mitos vs Fakta tentang Website di 2025

Mitos: "Website itu mahal dan ribet." Faktanya, website modern bisa dibangun dengan biaya mulai 100 ribu setahun (sudah termasuk hosting dan domain, seperti IlySchool). Yang bikin mahal biasanya adalah custom development berlebihan yang tidak dibutuhkan.

Mitos: "Website butuh admin teknis khusus." Faktanya, website modern punya CMS yang bisa di-update semudah posting di medsos. Owner bisa update konten sendiri tanpa perlu kontak developer.

Mitos: "Orang sekarang tidak buka website, semuanya di aplikasi." Faktanya, Google masih dapat 8+ miliar pencarian per hari. Tidak semua orang download aplikasi, tapi hampir semua pengguna smartphone buka browser minimal sekali sehari.

Mitos: "Cukup punya landing page di bio link medsos." Faktanya, landing page gratis (Linktree, Carrd) tidak terindeks Google dengan baik, tidak bisa custom sepenuhnya, dan tidak bisa jadi aset SEO. Ini solusi darurat, bukan permanen.

## 6. Fitur Wajib untuk Website 2025

Kalau kamu sudah yakin untuk bikin website, pastikan minimal punya fitur-fitur ini.

Mobile-first design — 70%+ pengunjung akan akses dari HP. Website yang cuma bagus di desktop akan langsung ditinggal. Loading cepat — target di bawah 3 detik. Setiap detik tambahan berarti 20% pengunjung drop. SEO basic — meta tag lengkap, sitemap, struktur heading yang benar. Kontak yang jelas — minimal WhatsApp direct link dan alamat email profesional. Konten yang hidup — bukan cuma "About Us" yang statis, minimal ada blog atau section update. SSL atau HTTPS — Chrome sekarang mark website tanpa HTTPS sebagai "Not Secure", game over kalau ini tidak ada.

Semua fitur di atas sudah jadi standar, bukan fitur premium. Kalau ada developer yang bilang itu "tambahan biaya", cari developer lain.

## Penutup: Website Bukan Gantinya Medsos, Tapi Pondasinya

Kami tidak bilang medsos tidak penting. Medsos adalah saluran engagement yang luar biasa. Tapi medsos tanpa website adalah rumah tanpa fondasi — kelihatan meriah, tapi rentan runtuh saat angin besar datang.

Website + medsos = strategi digital yang sustainable. Medsos untuk reach dan engagement, website untuk kredibilitas dan SEO jangka panjang.

Kalau kamu lagi mikir bikin website tapi masih ragu soal biaya atau kompleksitas, ILY Code punya IlyCorp (website company profile UMKM & PT, dibuat sesuai kebutuhan — mulai dari konsultasi gratis) dan IlySchool (100 ribu/tahun untuk website sekolah). Kami bangun dari nol dengan semua fitur wajib 2025 di atas — tanpa embel-embel biaya tersembunyi.

Diskusi dulu yuk — tidak harus langsung bayar. Kasih tau kebutuhanmu, kami bantu petakan.`,
    coverImage: "/images/blog/kenapa-website-company-profile-masih-penting-2025.webp",
    category: "Insight",
    tags: ["seo", "website", "bisnis", "marketing"],
    author: "Tim ILY Code",
    publishedAt: "2025-03-05",
    readingTime: 7,
    draft: false,
  },
];

export const categories = [
  "Semua",
  "Cerita Kami",
  "Tutorial",
  "Insight",
  "Update Produk",
];

export const getPublishedPosts = () =>
  posts
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

export const getPostBySlug = (slug) =>
  posts.find((p) => p.slug === slug && !p.draft);
