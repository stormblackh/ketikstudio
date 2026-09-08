/**
 * ============================================================
 *  KONFIGURASI SITUS — EDIT FILE INI DULU SEBELUM PUBLIKASI!
 * ============================================================
 * Semua teks, kontak, harga, dan data project ada di sini.
 * Ganti bagian bertanda ⚠️ WAJIB dengan data asli kamu.
 */

export const site = {
  // ⚠️ WAJIB GANTI: nomor WhatsApp format internasional tanpa "+" dan tanpa spasi
  whatsapp: "6281234567890",
  // Sementara pakai email pribadi. Target berikutnya: beli ketikstudio.com (±Rp150–200rb/th)
  // lalu ganti ke halo@ketikstudio.com via Zoho Mail (gratis) biar makin profesional.
  email: "cpngh3771@gmail.com",
  // Nama brand studio: "Ketik" — dari pekerjaan inti membangun web: mengetik.
  // Riset 2026: tidak ada jasa web/studio terkenal bernama "Ketik"; domain ketikstudio.com tersedia (±Rp150–200rb/th).
  // Titik di akhir ("Ketik.") dipakai sebagai tanda tangan visual warna aksen.
  // Deploy: pakai Vercel gratis dulu (jadi ketikstudio.vercel.app) — beli domain belakangan kalau sudah jalan.
  brand: "Ketik",
  brandSuffix: ".",
  role: "Web Developer Freelance",
  location: "Indonesia · Remote-friendly",
  // URL publik situs — dipakai untuk metadata SEO & sitemap. Ganti setelah deploy/beli domain.
  url: "https://ketikstudio.vercel.app",
  // ⚠️ Klaim handle @ketikstudio di Instagram SEKARANG (gratis, sebelum diambil orang)
  socials: [
    { label: "Instagram", href: "https://instagram.com/ketikstudio" },
    { label: "GitHub", href: "https://github.com/stormblackh" },
  ],
  nav: [
    { label: "Karya", href: "/karya" },
    { label: "Layanan", href: "/layanan" },
    { label: "Tentang", href: "/tentang" },
    { label: "FAQ", href: "/faq" },
    { label: "Kontak", href: "/kontak" },
  ],
};

export const waLink = (text = "Halo! Aku mau diskusi soal pembuatan website.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

/* ------------------------------------------------ PORTOFOLIO / PROJECT */

export type Project = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  category: string;
  tags: string[];
  year: string;
  image: string;
  imageAlt: string;
  masalah: string;
  solusi: string;
  fitur: string[];
  stack: string[];
  hasil: string[];
  // Kalau project-nya live & bisa dicoba, isi URL-nya — kartu otomatis dapat tombol "Buka demo"
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: "tes-ketik",
    index: "01",
    name: "TES KETIK",
    tagline:
      "Tes kecepatan mengetik di browser: kata ID/EN, statistik WPM, leaderboard. Yang ini bukan mockup — coba langsung.",
    category: "Demo Interaktif",
    tags: ["Web App", "Interaktif", "Keyboard-first"],
    year: "2026",
    image: "/work/work-ketik-typing.png",
    imageAlt:
      "Tampilan aplikasi tes kecepatan mengetik dengan latar krem, headline besar, dan pilihan durasi 15/30/60 detik",
    masalah:
      "Mau mengukur kecepatan mengetik, tool yang paling banyak dipakai itu bahasa Inggris semua. Buat yang kesehariannya ngetik bahasa Indonesia, angka hasilnya jadi kurang nyambung — kosakatanya beda, ritmenya beda, jadi terasa kurang adil.",
    solusi:
      "Aplikasi web tes mengetik dengan kata bahasa Indonesia (dan Inggris juga bisa). Timer baru jalan di ketikan pertama, jadi tidak ada momen 'siap-siap' yang bikin grogi. Begitu tes selesai, langsung keluar statistik WPM, akurasi, dan konsistensi — ada leaderboard buat pemicu biar makin rajin latihan.",
    fitur: [
      "Tiga durasi (15/30/60 detik) plus mode jumlah kata 10/25/50",
      "Kata bahasa Indonesia & Inggris, lengkap dengan mode tanda baca",
      "Mode kutipan untuk latihan mengetik kalimat panjang",
      "Statistik WPM, akurasi, dan konsistensi",
      "Leaderboard",
      "Penuh shortcut keyboard: Tab tes baru, Esc ulangi kata",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    hasil: [
      "Live dan bisa dicoba langsung dari tombol di atas",
      "Tanpa login — buka halaman, mulai mengetik",
      "Semua proses berjalan di browser, tetap lancar dibuka dari HP",
    ],
    liveUrl: "https://ketikapp.vercel.app",
  },
  {
    id: "lumina",
    index: "02",
    name: "LUMINA STUDIO",
    tagline: "Toko online untuk brand fashion lokal — katalog, keranjang, sampai checkout. Coba sendiri.",
    category: "E-Commerce",
    tags: ["Toko Online", "Keranjang", "UI Design"],
    year: "2026",
    image: "/work/work-lumina-editorial.png",
    imageAlt: "Tampilan toko online fashion LUMINA dengan nuansa krem dan aksen oranye",
    masalah:
      "Template toko online rata-rata terlihat sama dan berat dibuka. Brief-nya: pengalaman belanja yang terasa seperti brand editorial — foto besar, tipografi kuat, dan alur keranjang ke checkout yang sesingkat mungkin — tetap mulus dibuka dari HP.",
    solusi:
      "Kubangun toko online lengkap dari nol: katalog dengan filter kategori, keranjang yang bisa diatur, dan checkout dengan pilihan metode pembayaran. Semua tombolnya hidup — tekan, isi, dan selesaikan pesanan untuk merasakan alurnya sendiri.",
    fitur: [
      "Katalog produk dengan filter kategori",
      "Keranjang: ubah jumlah, hapus item, subtotal otomatis",
      "Alur checkout 3 langkah dengan pilihan pembayaran",
      "Nomor pesanan otomatis + halaman konfirmasi",
      "Desain editorial yang mobile-first",
      "Siap disambungkan payment gateway sungguhan (Midtrans / QRIS)",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React State", "Vercel"],
    hasil: [
      "Keranjang dan checkout bisa dicoba langsung dari tombol di atas",
      "Seluruh alur belanja selesai dalam beberapa ketukan — tanpa reload halaman",
      "Kode siap dikembangkan jadi toko sungguhan lengkap dengan pembayaran",
    ],
    liveUrl: "/demo/lumina",
  },
  {
    id: "rasa",
    index: "03",
    name: "RASA",
    tagline: "Website restoran dengan menu digital dan reservasi yang masuk langsung ke WhatsApp admin.",
    category: "Company Profile",
    tags: ["Landing Page", "UMKM", "Reservasi"],
    year: "2026",
    image: "/work/work-rasa.png",
    imageAlt: "Foto kuliner nasi goreng dan sate disajikan di piring terracotta dari atas",
    masalah:
      "Reservasi lewat DM Instagram sering tercewat: pesan masuk di tengah ribuan notifikasi, catatannya tidak rapi, dan tamu menunggu lama untuk konfirmasi. Brief-nya: satu halaman yang menampilkan menu menggugah selera dan menuntun reservasi selesai dalam satu menit.",
    solusi:
      "Landing page hangat bergaya editorial: menu per kategori dengan highlight signature, cerita dapur, info lokasi, dan form reservasi yang menyusun pesan WhatsApp otomatis — rapi, konsisten, tanpa aplikasi tambahan. Isi form-nya dan lihat sendiri pesan yang siap terkirim.",
    fitur: [
      "Menu digital per kategori + highlight signature",
      "Form reservasi: tanggal, jam, jumlah orang, catatan",
      "Pesan WhatsApp tersusun otomatis — tinggal kirim",
      "Info lokasi, jam buka, dan kontak",
      "Siap dipasangkan Google Business untuk SEO lokal",
      "Satu halaman ringan, nyaman dibuka dari HP",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp API", "Vercel"],
    hasil: [
      "Reservasi bisa diuji sekarang juga — form-nya benar-benar berfungsi",
      "Tanpa biaya bulanan aplikasi reservasi",
      "Admin menerima detail reservasi yang seragam — tidak ada lagi DM yang tercewat",
    ],
    liveUrl: "/demo/rasa",
  },
  {
    id: "nusa",
    index: "04",
    name: "NUSA",
    tagline: "Dashboard analitik dengan grafik interaktif — datanya contoh, interaksinya nyata.",
    category: "Web App",
    tags: ["Dashboard", "Grafik SVG", "Interaktif"],
    year: "2026",
    image: "/work/work-nusa.png",
    imageAlt: "Tampilan dashboard analitik NUSA dengan grafik amber pada panel gelap",
    masalah:
      "Laporan mingguan yang disusun manual dari beberapa spreadsheet memakan berjam-jam dan cepat basi. Brief-nya: satu dashboard yang menyatukan angka penting — tren, perbandingan kategori, daftar transaksi — dalam tampilan yang nyaman dipandang seharian.",
    solusi:
      "Dashboard analitik dengan kartu statistik, grafik tren yang bisa diganti per periode (7/30/90 hari), perbandingan penjualan per kategori, dan tabel transaksi dengan pencarian langsung. Grafiknya kugambar dengan SVG murni — tanpa library chart — supaya ringan dan cepat dimuat.",
    fitur: [
      "Kartu statistik dengan indikator naik / turun",
      "Grafik tren pendapatan per periode (7/30/90 hari)",
      "Grafik penjualan per kategori",
      "Tabel transaksi dengan pencarian langsung",
      "Grafik SVG murni tanpa library — sangat ringan",
      "Navigasi responsif: sidebar di desktop, pill di HP",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "SVG Charts", "Vercel"],
    hasil: [
      "Filter periode dan pencarian transaksi bisa dicoba langsung",
      "Tampilan gelap yang nyaman di mata, responsif sampai layar HP",
      "Struktur data siap disambungkan ke API / database sungguhan",
    ],
    liveUrl: "/demo/nusa",
  },
];

/* ------------------------------------------------ LAYANAN */

export type Service = {
  index: string;
  title: string;
  short: string;
  desc: string;
  includes: string[];
  price: string;
  duration: string;
};

export const services: Service[] = [
  {
    index: "01",
    title: "Landing Page & Company Profile",
    short: "Halaman yang dirancang untuk meyakinkan dan mengubah pengunjung jadi pelanggan.",
    desc: "Cocok untuk UMKM, penyedia jasa, dan personal branding. Setiap section punya satu tugas: membuat pengunjung percaya lalu menghubungimu. Ringan dibuka, rapi di semua ukuran layar, dan gampang ditemukan di Google.",
    includes: [
      "Desain custom dari nol — bukan template",
      "Mobile-first & optimalisasi kecepatan",
      "SEO dasar + Google Analytics",
      "Form / tombol terhubung WhatsApp",
      "Bantuan setup domain & hosting",
    ],
    price: "mulai Rp750 rb",
    duration: "1–3 minggu",
  },
  {
    index: "02",
    title: "Toko Online",
    short: "Jualan langsung dari website sendiri — tanpa komisi marketplace.",
    desc: "Katalog produk, keranjang, checkout, dan pembayaran online dalam satu paket. Semua data pelanggan dan pesanan jadi milikmu. Dashboard sederhana membuat kamu bisa memantau penjualan tanpa harus jadi programmer.",
    includes: [
      "Katalog produk + filter & pencarian",
      "Keranjang & checkout terintegrasi",
      "Payment gateway (QRIS / VA / e-wallet)",
      "Dashboard pesanan untuk pemilik toko",
      "Pelatihan singkat pengelolaan toko",
    ],
    price: "mulai Rp2 jt",
    duration: "3–6 minggu",
  },
  {
    index: "03",
    title: "Web App & Sistem Full-Stack",
    short: "Sistem internal, dashboard, booking, sampai produk SaaS — dibangun utuh.",
    desc: "Punya ide aplikasi web atau sistem untuk internal perusahaan? Aku bangun dari database sampai tampilan: autentikasi, peran pengguna, laporan, dan dashboard. Stack modern yang rapi, terdokumentasi, dan siap dikembangkan lebih jauh.",
    includes: [
      "Diskusi kebutuhan & perancangan skema data",
      "Autentikasi, role & hak akses",
      "Dashboard, laporan & export data",
      "Database + API yang scalable",
      "Dokumentasi teknis & serah terima kode",
    ],
    price: "mulai Rp4 jt",
    duration: "sesuai scope",
  },
  {
    index: "04",
    title: "Perawatan & Optimasi",
    short: "Website sudah ada tapi bermasalah atau lambat? Aku bereskan dan rawat.",
    desc: "Perbaikan bug, peningkatan kecepatan, SEO teknis, sampai update konten rutin. Cocok untuk website yang sudah berjalan tapi mulai terbengkalai, supaya yang sudah kamu bayar tidak mubazir.",
    includes: [
      "Audit kondisi website (kecepatan & SEO teknis)",
      "Perbaikan bug & kompatibilitas",
      "Optimalisasi Core Web Vitals",
      "Update konten & backup rutin",
      "Laporan kondisi bulanan",
    ],
    price: "mulai Rp200 rb/bln",
    duration: "berjalan",
  },
];

/* ------------------------------------------------ PROSES */

export const processSteps = [
  {
    index: "01",
    title: "Ngobrol Dulu",
    desc: "Ceritakan kebutuhanmu, gratis dan tanpa tekanan. Dari situ kupetakan scope, perkiraan waktu, dan biayanya di depan.",
  },
  {
    index: "02",
    title: "Riset & Desain",
    desc: "Kuriset kompetitor lalu rancang desain yang khas untuk brand-mu. Kamu nilai dulu, revisi sampai yakin, baru lanjut ke kode.",
  },
  {
    index: "03",
    title: "Development",
    desc: "Kode kutulis rapi, cepat, dan responsif. Kamu menerima link preview yang bisa dibuka kapan saja, jadi tidak ada kejutan di akhir.",
  },
  {
    index: "04",
    title: "Launch & Dukungan",
    desc: "Deploy ke server, setup domain, dan garansi perbaikan bug 30 hari. Setelah rilis, aku tetap tersedia untuk perawatan berkala.",
  },
];

/* ------------------------------------------------ FAQ */

export const faqs = [
  {
    q: "Berapa lama pengerjaan satu website?",
    a: "Landing page umumnya 1–3 minggu, toko online 3–6 minggu, dan web app tergantung kompleksitas (biasanya 4–8 minggu). Timeline final kita sepakati bersama sebelum proyek dimulai, dan kamu selalu bisa melihat progres lewat link preview yang kuberikan.",
  },
  {
    q: "Berapa biayanya, dan bagaimana skema pembayarannya?",
    a: "Harga mulai seperti tertera di bagian layanan — final menyesuaikan kebutuhan. Biasanya 50% di awal (DP), 50% saat serah terima. Untuk proyek besar pembayaran bisa dipecah per milestone. Tidak ada biaya tersembunyi.",
  },
  {
    q: "Apakah aku bisa minta revisi desain?",
    a: "Tentu. Di tahap desain kamu boleh revisi sampai 2 putaran secara gratis — cukup untuk memastikan arah desain sesuai seleramu. Revisi besar di luar scope awal akan kudiskusikan terbuka dulu biayanya.",
  },
  {
    q: "Apakah source code-nya jadi milikku?",
    a: "Ya, 100%. Setelah pelunasan, seluruh kode dan aset diserahkan ke kamu — termasuk akses repository, domain, dan hosting. Tidak ada ketergantungan jangka panjang padaku kalau suatu saat ingin dikelola orang lain.",
  },
  {
    q: "Bagaimana dengan domain, hosting, dan pemeliharaan?",
    a: "Aku bantu urus dari nol: rekomendasi penyedia domain/hosting yang sesuai budget, setup lengkap, sampai SSL. Setelah rilis tersedia paket maintenance bulanan kalau kamu tidak mau repot mengelola sendiri.",
  },
  {
    q: "Kamu menerima proyek dari luar kota / luar negeri?",
    a: "Terima. Semua proses bisa berjalan penuh online via WhatsApp, Google Meet, atau email. Kalau mau kenalan dulu sebelum mulai, video call singkat juga bisa kok.",
  },
];

/* ------------------------------------------------ TENTANG */

export const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Prisma",
  "PostgreSQL",
  "SQLite",
  "NextAuth",
  "Figma",
  "Git",
];

export const commitments = [
  { big: "<24 jam", small: "Respons pesan, dicek rutin pagi & malam" },
  { big: "100%", small: "Source code & aset jadi milikmu" },
  { big: "2x", small: "Putaran revisi desain gratis" },
  { big: "30 hari", small: "Garansi perbaikan bug setelah rilis" },
];
