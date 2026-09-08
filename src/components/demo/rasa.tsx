"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Clock,
  MapPin,
  Phone,
  ArrowRight,
  ArrowUpRight,
  Check,
  MessageCircle,
} from "lucide-react";

/* ============================================================
   RASA — situs demo restoran.
   Menu per kategori, cerita brand, dan form reservasi yang
   menyusun pesan otomatis ke WhatsApp (persis fitur yang
   ditawarkan ke pelanggan jasa web).
   ============================================================ */

type Menu = { nama: string; desc: string; harga: number };

const MENU: Record<string, Menu[]> = {
  Makanan: [
    { nama: "Nasi Goreng Kampung", desc: "Bumbu ulek, telur mata sapi, kerupuk singkong", harga: 28000 },
    { nama: "Sate Ayam Madura", desc: "10 tusuk, saus kacang racikan sendiri, lontong", harga: 35000 },
    { nama: "Soto Daging Sapi", desc: "Kuah bening rempah, perkedel, sambal rawit", harga: 30000 },
    { nama: "Gudeg Telur", desc: "Nangka muda dimasak semalaman, krecek, ayam kampung", harga: 25000 },
    { nama: "Mie Goreng Jawa", desc: "Mie manual, sawi, ayam, kecap manis rumahan", harga: 27000 },
  ],
  Minuman: [
    { nama: "Es Kelapa Muda", desc: "Kelapa utuh, gula aren cair, pandan", harga: 18000 },
    { nama: "Kopi Tubruk", desc: "Biji single origin Gayo, diseduh panas", harga: 12000 },
    { nama: "Es Jeruk Peras", desc: "Jeruk peras murni, tanpa sirup", harga: 14000 },
    { nama: "Wedang Uwuh", desc: "Jahe, kayu secang, cengkeh — hangat menghangatkan", harga: 15000 },
  ],
  Kudapan: [
    { nama: "Pisang Goreng Keju", desc: "Pisang tanduk, keju parut, susu kental manis", harga: 18000 },
    { nama: "Tahu Cabe Garam", desc: "Tahu goreng renyah, saus cabe garam pedas", harga: 15000 },
    { nama: "Risoles Mayo", desc: "Isi smoked beef, telur, mayo rumahan", harga: 20000 },
    { nama: "Ubi Bakar", desc: "Ubi ungu bakar, topping butter gula merah", harga: 12000 },
  ],
};

const SIGNATURE = [
  {
    img: "/demo/rasa/dish-1.png",
    alt: "Nasi goreng kampung dengan telur mata sapi di piring keramik",
    nama: "Nasi Goreng Kampung",
    harga: 28000,
  },
  {
    img: "/demo/rasa/dish-2.png",
    alt: "Sate ayam madura dengan saus kacang dan lontong",
    nama: "Sate Ayam Madura",
    harga: 35000,
  },
  {
    img: "/demo/rasa/dish-3.png",
    alt: "Es kelapa muda dengan gula aren dalam gelas tinggi",
    nama: "Es Kelapa Muda",
    harga: 18000,
  },
];

const JAM = ["11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"];

const rp = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);

export function RasaSite() {
  const [tab, setTab] = useState<keyof typeof MENU>("Makanan");
  const [terkirim, setTerkirim] = useState<string | null>(null);

  function reservasi(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const pesan = [
      `Halo RASA! Saya mau reservasi meja.`,
      ``,
      `Nama: ${f.get("nama")}`,
      `No. HP: ${f.get("hp")}`,
      `Tanggal: ${f.get("tanggal")}`,
      `Jam: ${f.get("jam")}`,
      `Jumlah orang: ${f.get("orang")} orang`,
      f.get("catatan") ? `Catatan: ${f.get("catatan")}` : null,
    ]
      .filter((x) => x !== null)
      .join("\n");
    const link = `https://wa.me/6281234567890?text=${encodeURIComponent(pesan)}`;
    window.open(link, "_blank", "noopener,noreferrer");
    setTerkirim(link);
  }

  return (
    <div className="min-h-screen bg-[#F7F2E9] text-[#26221A]">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-[#26221A]/10 bg-[#F7F2E9]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a
            href="#atas"
            className="text-2xl font-semibold tracking-[0.24em]"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            RASA
          </a>
          <nav className="hidden items-center gap-8 text-sm text-[#26221A]/70 md:flex" aria-label="Navigasi utama">
            <a className="transition-colors hover:text-[#26221A]" href="#menu">Menu</a>
            <a className="transition-colors hover:text-[#26221A]" href="#cerita">Cerita</a>
            <a className="transition-colors hover:text-[#26221A]" href="#lokasi">Lokasi</a>
          </nav>
          <a
            href="#reservasi"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#3E5C46] px-5 text-sm font-medium text-[#F7F2E9] transition-transform hover:-translate-y-0.5"
          >
            Reservasi
          </a>
        </div>
      </header>

      <main id="atas">
        {/* Hero full-bleed */}
        <section className="relative flex min-h-[78vh] items-end overflow-hidden">
          <Image
            src="/demo/rasa/hero.png"
            alt="Hidangan masakan Indonesia tersaji di meja kayu, dilihat dari atas"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#26221A]/85 via-[#26221A]/35 to-[#26221A]/10" />
          <div className="relative mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6">
            <p className="text-[11px] font-medium tracking-[0.3em] text-[#F7F2E9]/80 uppercase">
              Dapur rumahan · Sejak 2019
            </p>
            <h1
              className="mt-4 max-w-2xl text-4xl leading-[1.05] font-medium tracking-tight text-[#F7F2E9] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Masakan rumahan, disajikan sepenuh hati.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#F7F2E9]/80">
              Resep keluarga yang dimasak tiap pagi dari bahan pasar. Datang untuk
              makan siang, tinggal lama untuk ngoceh di teras.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#menu"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-[#F7F2E9] px-6 text-sm font-medium text-[#26221A] transition-transform hover:-translate-y-0.5"
              >
                Lihat menu
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#reservasi"
                className="inline-flex h-12 items-center rounded-full border border-[#F7F2E9]/40 px-6 text-sm font-medium text-[#F7F2E9] transition-colors hover:border-[#F7F2E9]"
              >
                Reservasi meja
              </a>
            </div>
          </div>
        </section>

        {/* Strip kepercayaan */}
        <section className="border-b border-[#26221A]/10">
          <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-[#26221A]/10 px-4 sm:px-6">
            {[
              { big: "4,9/5", small: "rating dari 1.200+ tamu" },
              { big: "2 jam", small: "rata-rata kunjungan makan" },
              { big: "12+", small: "menu andalan musiman" },
            ].map((s) => (
              <div key={s.big} className="px-2 py-8 text-center sm:px-6">
                <p
                  className="text-2xl font-medium sm:text-3xl"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  {s.big}
                </p>
                <p className="mt-1 text-[11px] leading-snug text-[#26221A]/55 sm:text-xs">{s.small}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Signature */}
        <section id="menu" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6">
          <h2
            className="text-3xl font-medium tracking-tight sm:text-4xl"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Paling dicari
          </h2>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#26221A]/60">
            Tiga menu yang hampir tidak pernah gagal membuat orang kembali.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {SIGNATURE.map((m) => (
              <article key={m.nama} className="group overflow-hidden rounded-2xl bg-white/70 ring-1 ring-[#26221A]/5">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={m.img}
                    alt={m.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex items-center justify-between p-4">
                  <h3 className="text-sm font-medium sm:text-base">{m.nama}</h3>
                  <span className="text-sm font-medium text-[#3E5C46]">{rp(m.harga)}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Menu lengkap per kategori */}
          <div className="mt-14">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Kategori menu">
              {(Object.keys(MENU) as (keyof typeof MENU)[]).map((k) => (
                <button
                  key={k}
                  role="tab"
                  aria-selected={tab === k}
                  onClick={() => setTab(k)}
                  className={`h-11 rounded-full border px-5 text-sm transition-colors ${
                    tab === k
                      ? "border-[#3E5C46] bg-[#3E5C46] text-[#F7F2E9]"
                      : "border-[#26221A]/20 text-[#26221A]/70 hover:border-[#3E5C46]/60"
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>
            <ul className="mt-6 grid gap-x-12 gap-y-5 md:grid-cols-2">
              {MENU[tab].map((m) => (
                <li key={m.nama} className="border-b border-dashed border-[#26221A]/15 pb-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-medium">{m.nama}</h3>
                    <span className="shrink-0 font-medium text-[#3E5C46]">{rp(m.harga)}</span>
                  </div>
                  <p className="mt-1 text-sm text-[#26221A]/60">{m.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Cerita */}
        <section id="cerita" className="scroll-mt-20 border-y border-[#26221A]/10 bg-[#3E5C46] text-[#F7F2E9]">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/demo/rasa/interior.png"
                alt="Interior restoran dengan meja kayu dan lampu gantung rotan yang hangat"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[11px] font-medium tracking-[0.3em] text-[#F7F2E9]/70 uppercase">
                Cerita kami
              </p>
              <h2
                className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Berawal dari dapur rumah ibu.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-[#F7F2E9]/80">
                Tahun 2019, ibu mulai menjual nasi goreng di depan rumah — satu
                gerobak, enam kursi plastik. Yang berubah cuma tempatnya; rasanya
                kami jaga persis sama. Bumbu masih diulek tiap pagi, sayur masih
                datang dari pasar dua gang dari sini.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#F7F2E9]/80">
                Sekarang ruangannya lebih layak, tapi aturannya tidak berubah:
                masak seperti untuk keluarga sendiri.
              </p>
            </div>
          </div>
        </section>

        {/* Lokasi & jam */}
        <section id="lokasi" className="mx-auto grid max-w-6xl scroll-mt-20 gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
          <div>
            <h2
              className="text-3xl font-medium tracking-tight sm:text-4xl"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Mampir, ya.
            </h2>
            <div className="mt-6 space-y-5 text-sm">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#3E5C46]" />
                <p className="leading-relaxed text-[#26221A]/75">
                  Jl. Kenanga No. 12, Yogyakarta
                  <br />
                  <span className="text-[#26221A]/50">Parkir motor & mobil tersedia</span>
                </p>
              </div>
              <div className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#3E5C46]" />
                <p className="leading-relaxed text-[#26221A]/75">
                  Selasa–Minggu, 11.00–21.30
                  <br />
                  <span className="text-[#26221A]/50">Senang tutup (khusus istirahat dapur)</span>
                </p>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#3E5C46]" />
                <p className="leading-relaxed text-[#26221A]/75">
                  0812-3456-7890
                  <br />
                  <span className="text-[#26221A]/50">Pesan antar area terdekat tersedia</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex min-h-56 flex-col items-center justify-center rounded-3xl border border-dashed border-[#26221A]/20 bg-white/50 p-8 text-center">
            <MapPin className="h-8 w-8 text-[#3E5C46]" />
            <p className="mt-3 text-sm font-medium">Peta lokasi</p>
            <p className="mt-1 max-w-xs text-xs leading-relaxed text-[#26221A]/55">
              Di situs asli, peta interaktif Google Maps tertanam di sini — pengunjung
              bisa langsung menekan rute.
            </p>
          </div>
        </section>

        {/* Reservasi */}
        <section id="reservasi" className="scroll-mt-20 bg-[#26221A] py-16 text-[#F7F2E9]">
          <div className="mx-auto max-w-2xl px-4 sm:px-6">
            <h2
              className="text-center text-3xl font-medium tracking-tight sm:text-4xl"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Reservasi meja
            </h2>
            <p className="mx-auto mt-3 max-w-md text-center text-sm leading-relaxed text-[#F7F2E9]/70">
              Isi form di bawah — detail reservasi otomatis tersusun rapi dan
              langsung terkirim ke WhatsApp kami. Tanpa aplikasi, tanpa antre.
            </p>

            {terkirim ? (
              <div className="mt-10 rounded-3xl border border-[#F7F2E9]/15 bg-[#F7F2E9]/5 p-8 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#3E5C46]/40 text-[#F7F2E9]">
                  <Check className="h-7 w-7" />
                </span>
                <h3 className="mt-4 text-xl font-medium">Detail reservasi kamu siap dikirim</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#F7F2E9]/70">
                  WhatsApp sudah terbuka dengan pesan yang tersusun otomatis. Kalau
                  tidak terbuka, tekan tombol di bawah.
                </p>
                <a
                  href={terkirim}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-[#F7F2E9] px-6 text-sm font-medium text-[#26221A] transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  Buka WhatsApp
                </a>
                <div>
                  <button
                    onClick={() => setTerkirim(null)}
                    className="mt-4 h-11 text-sm text-[#F7F2E9]/60 transition-colors hover:text-[#F7F2E9]"
                  >
                    Buat reservasi lain
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={reservasi} className="mt-10 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="rs-nama" className="text-xs tracking-[0.16em] text-[#F7F2E9]/60 uppercase">
                    Nama
                  </label>
                  <input
                    id="rs-nama"
                    name="nama"
                    required
                    placeholder="Nama kamu"
                    className="mt-1.5 h-12 w-full rounded-xl border border-[#F7F2E9]/20 bg-[#F7F2E9]/5 px-4 text-sm text-[#F7F2E9] placeholder:text-[#F7F2E9]/35 outline-none focus:border-[#F7F2E9]/60"
                  />
                </div>
                <div>
                  <label htmlFor="rs-hp" className="text-xs tracking-[0.16em] text-[#F7F2E9]/60 uppercase">
                    No. WhatsApp
                  </label>
                  <input
                    id="rs-hp"
                    name="hp"
                    required
                    inputMode="tel"
                    placeholder="08xxxxxxxxxx"
                    className="mt-1.5 h-12 w-full rounded-xl border border-[#F7F2E9]/20 bg-[#F7F2E9]/5 px-4 text-sm text-[#F7F2E9] placeholder:text-[#F7F2E9]/35 outline-none focus:border-[#F7F2E9]/60"
                  />
                </div>
                <div>
                  <label htmlFor="rs-tanggal" className="text-xs tracking-[0.16em] text-[#F7F2E9]/60 uppercase">
                    Tanggal
                  </label>
                  <input
                    id="rs-tanggal"
                    name="tanggal"
                    type="date"
                    required
                    className="mt-1.5 h-12 w-full rounded-xl border border-[#F7F2E9]/20 bg-[#F7F2E9]/5 px-4 text-sm text-[#F7F2E9] outline-none focus:border-[#F7F2E9]/60"
                  />
                </div>
                <div>
                  <label htmlFor="rs-jam" className="text-xs tracking-[0.16em] text-[#F7F2E9]/60 uppercase">
                    Jam datang
                  </label>
                  <select
                    id="rs-jam"
                    name="jam"
                    required
                    defaultValue="18:00"
                    className="mt-1.5 h-12 w-full rounded-xl border border-[#F7F2E9]/20 bg-[#F7F2E9]/5 px-4 text-sm text-[#F7F2E9] outline-none focus:border-[#F7F2E9]/60"
                  >
                    {JAM.map((j) => (
                      <option key={j} value={j} className="text-[#26221A]">
                        {j} WIB
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="rs-orang" className="text-xs tracking-[0.16em] text-[#F7F2E9]/60 uppercase">
                    Jumlah orang
                  </label>
                  <select
                    id="rs-orang"
                    name="orang"
                    required
                    defaultValue="2"
                    className="mt-1.5 h-12 w-full rounded-xl border border-[#F7F2E9]/20 bg-[#F7F2E9]/5 px-4 text-sm text-[#F7F2E9] outline-none focus:border-[#F7F2E9]/60"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                      <option key={n} value={n} className="text-[#26221A]">
                        {n} orang
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="rs-catatan" className="text-xs tracking-[0.16em] text-[#F7F2E9]/60 uppercase">
                    Catatan (opsional)
                  </label>
                  <input
                    id="rs-catatan"
                    name="catatan"
                    placeholder="Ulang tahun, kursi bayi, dsb."
                    className="mt-1.5 h-12 w-full rounded-xl border border-[#F7F2E9]/20 bg-[#F7F2E9]/5 px-4 text-sm text-[#F7F2E9] placeholder:text-[#F7F2E9]/35 outline-none focus:border-[#F7F2E9]/60"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-[#3E5C46] py-4 text-sm font-medium text-[#F7F2E9] transition-transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Kirim reservasi via WhatsApp
                  </button>
                  <p className="mt-3 text-center text-xs text-[#F7F2E9]/45">
                    Form ini benar-benar berfungsi — percayakan pada demonya.
                  </p>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1D1A14] text-[#F7F2E9]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              className="text-3xl font-semibold tracking-[0.24em]"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              RASA
            </p>
            <p className="mt-2 max-w-sm text-sm text-[#F7F2E9]/60">
              Masakan rumahan Indonesia, dimasak dari bahan pasar tiap pagi.
            </p>
          </div>
          <div className="text-sm text-[#F7F2E9]/60">
            <a href="#menu" className="block transition-colors hover:text-[#F7F2E9]">Menu</a>
            <a href="#lokasi" className="mt-2 block transition-colors hover:text-[#F7F2E9]">Lokasi & jam</a>
            <a href="#reservasi" className="mt-2 block transition-colors hover:text-[#F7F2E9]">Reservasi</a>
          </div>
        </div>
        <div className="border-t border-[#F7F2E9]/10">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 text-[11px] tracking-[0.16em] text-[#F7F2E9]/45 uppercase sm:px-6">
            <span>© 2026 RASA — situs demo</span>
            <a
              href="/"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[#F7F2E9]"
            >
              Dirancang & dibangun oleh Ketik.
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
