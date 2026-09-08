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
};

export const projects: Project[] = [
  {
    id: "lumina",
    index: "01",
    name: "LUMINA STUDIO",
    tagline: "Toko online untuk brand fashion lokal — katalog cepat, checkout mulus.",
    category: "E-Commerce",
    tags: ["Toko Online", "Payment Gateway", "UI Design"],
    year: "2025",
    image: "/work/work-lumina-editorial.png",
    imageAlt: "Tampilan konsep toko online fashion LUMINA dengan nuansa krem dan aksen oranye",
    masalah:
      "Brand fashion ini selama ini jualan hanya lewat marketplace. Untung makin tipis karena potongan komisi, data pembeli tidak pernah sampai ke mereka, dan karakter brand sulit tampil beda di antara ribuan toko. Yang mereka cari: kanal jualan sendiri yang benar-benar terasa seperti brand mereka.",
    solusi:
      "Kubangun toko online dengan arah desain editorial: foto produk besar, tipografi tegas, alur belanja yang minim gangguan. Pembayaran terhubung Midtrans (QRIS, virtual account, e-wallet), dan setiap pesanan langsung tercatat di dashboard sederhana milik pemilik toko.",
    fitur: [
      "Katalog produk dengan filter kategori, ukuran, dan pencarian",
      "Halaman produk dengan galeri foto & rekomendasi",
      "Keranjang + checkout 3 langkah",
      "Integrasi Midtrans (QRIS, VA, e-wallet)",
      "Dashboard pesanan untuk pemilik toko",
      "On-page SEO & meta produk otomatis",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Midtrans", "Vercel"],
    hasil: [
      "Halaman produk termuat di bawah 1,5 detik (mobile)",
      "Alur checkout hanya 3 langkah — dibuat sesingkat mungkin supaya tingkat selesainya tinggi",
      "Data pelanggan akhirnya milik brand sendiri",
    ],
  },
  {
    id: "nusa",
    index: "02",
    name: "NUSA",
    tagline: "Dashboard analitik SaaS — laporan yang tadinya 3 jam, sekarang 5 menit.",
    category: "Web App Full-Stack",
    tags: ["Dashboard", "SaaS", "Autentikasi"],
    year: "2025",
    image: "/work/work-nusa.png",
    imageAlt: "Mockup dashboard analitik NUSA dengan grafik oranye pada panel gelap",
    masalah:
      "Data penjualan tim operasional tersebar di beberapa spreadsheet. Tiap minggu mereka menghabiskan berjam-jam menyusun laporan manual: lambat, rawan salah, dan datanya selalu basi saat paling dibutuhkan.",
    solusi:
      "Kurancang aplikasi web multi-user dengan login dan peran (admin/staff). Semua data masuk ke satu database terpusat lalu tampil sebagai grafik interaktif yang bisa difilter per periode. Laporannya bisa diekspor ke PDF/Excel untuk dibawa rapat.",
    fitur: [
      "Autentikasi + role management (admin & staff)",
      "Grafik interaktif: tren, perbandingan, dan komposisi",
      "CRUD data dengan validasi & pencarian",
      "Export laporan PDF / Excel",
      "Notifikasi aktivitas penting",
      "Responsif penuh — nyaman di HP maupun desktop",
    ],
    stack: ["Next.js", "Prisma", "PostgreSQL", "NextAuth", "Recharts", "shadcn/ui"],
    hasil: [
      "Waktu penyusunan laporan mingguan turun dari ±3 jam menjadi 5 menit",
      "Satu sumber data untuk seluruh tim — tidak ada lagi versi spreadsheet yang bentrok",
      "Akses data aman dengan pembagian peran",
    ],
  },
  {
    id: "rasa",
    index: "03",
    name: "RASA",
    tagline: "Website restoran dengan reservasi yang langsung masuk WhatsApp admin.",
    category: "Company Profile",
    tags: ["Landing Page", "UMKM", "Reservasi"],
    year: "2024",
    image: "/work/work-rasa.png",
    imageAlt: "Foto kuliner nasi goreng dan sate disajikan di piring terracotta dari atas",
    masalah:
      "Resto ini mengandalkan aplikasi pesan-antar dan Instagram. Calon tamu yang ingin pesan meja harus lewat DM, dan pesan itu sering terlewat; catatan reservasi tidak pernah rapi.",
    solusi:
      "Kubuatkan website one-page bergaya editorial: menu digital per kategori, galeri suasana, plus form reservasi yang meneruskan detail pesanan langsung ke WhatsApp admin. Tanpa aplikasi tambahan, tanpa biaya bulanan. SEO lokal membantu resto ini muncul saat orang mencari di sekitarnya.",
    fitur: [
      "Menu digital dengan kategori & highlight signature",
      "Galeri suasana dengan layout editorial",
      "Form reservasi terintegrasi WhatsApp admin",
      "Peta lokasi, jam buka, dan kontak",
      "SEO lokal + Google Business terhubung",
    ],
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    hasil: [
      "Reservasi masuk rapi via WhatsApp — tidak ada DM yang terlewat lagi",
      "Skor performa mobile 95+ di Lighthouse",
      "Biaya operasional nol: tanpa langganan aplikasi reservasi",
    ],
  },
  {
    id: "tiketin",
    index: "04",
    name: "TIKETIN",
    tagline: "Sistem e-ticket event dengan QR unik dan scan check-in di pintu.",
    category: "Web App Full-Stack",
    tags: ["Booking", "QR Code", "Dashboard"],
    year: "2024",
    image: "/work/work-tiket.png",
    imageAlt: "Dua mockup aplikasi mobile booking tiket dengan tema krem dan tombol oranye",
    masalah:
      "Panitia mengelola pendaftaran lewat formulir manual, lalu konfirmasi transfer satu per satu. Di hari H, membedakan tiket sah dan tiket palsu membuat antrean check-in melambat.",
    solusi:
      "Kubangun platform pendaftaran dari ujung ke ujung: peserta daftar, bayar, lalu menerima e-ticket QR unik lewat email. Di pintu masuk, panitia cukup scan QR dan sistem langsung memvalidasi tiket serta menandai kehadiran. Penjualan terpantau real-time dari dashboard.",
    fitur: [
      "Pendaftaran online dengan verifikasi pembayaran",
      "E-ticket QR unik anti-duplikat, dikirim otomatis",
      "Halaman scanner check-in untuk panitia",
      "Dashboard statistik penjualan & kehadiran",
      "Email konfirmasi otomatis",
    ],
    stack: ["Next.js", "Prisma", "SQLite", "NextAuth", "QRCode"],
    hasil: [
      "Check-in rata-rata di bawah 3 detik per tiket",
      "Tiket palsu praktis hilang — setiap QR hanya bisa dipakai sekali",
      "Panitia tidak lagi mencocokkan transfer manual",
    ],
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
