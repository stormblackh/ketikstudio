"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  ShoppingBag,
  Plus,
  Minus,
  X,
  ArrowRight,
  ArrowUpRight,
  Check,
  Leaf,
  Scissors,
  Recycle,
} from "lucide-react";

/* ============================================================
   LUMINA — situs demo toko online fashion.
   Satu file utuh: katalog + filter, keranjang, dan alur
   checkout simulasi. Semua interaksi berjalan nyata di browser.
   ============================================================ */

type Produk = {
  id: string;
  nama: string;
  kategori: string;
  harga: number;
  img: string;
  alt: string;
};

const KATEGORI = ["Semua", "Atasan", "Luaran", "Bawahan", "Aksesoris"];

const PRODUK: Produk[] = [
  {
    id: "linen-senja",
    nama: 'Kemeja Linen "Senja"',
    kategori: "Atasan",
    harga: 289000,
    img: "/demo/lumina/p1.png",
    alt: "Kemeja linen krem di atas manekin, latar studio hangat",
  },
  {
    id: "korduroi-tanjung",
    nama: 'Jaket Korduroi "Tanjung"',
    kategori: "Luaran",
    harga: 459000,
    img: "/demo/lumina/p2.png",
    alt: "Jaket korduroi cokelat tergantung di hanger kayu",
  },
  {
    id: "rajut-rembang",
    nama: 'Sweater Rajut "Rembang"',
    kategori: "Atasan",
    harga: 329000,
    img: "/demo/lumina/p3.png",
    alt: "Sweater rajut terracotta terlipat di atas kain linen",
  },
  {
    id: "celana-pantai",
    nama: 'Celana Lebar "Pantai"',
    kategori: "Bawahan",
    harga: 319000,
    img: "/demo/lumina/p4.png",
    alt: "Celana panjang berwarna krem pada manekin",
  },
  {
    id: "tote-harbor",
    nama: 'Tote Bag Kanvas "Harbor"',
    kategori: "Aksesoris",
    harga: 149000,
    img: "/demo/lumina/p5.png",
    alt: "Tas tote kanvas warna natural berdiri di latar krem",
  },
  {
    id: "kaos-pagi",
    nama: 'Kaos Katun "Pagi"',
    kategori: "Atasan",
    harga: 129000,
    img: "/demo/lumina/p6.png",
    alt: "Tumpukan kaos katun putih terlipat rapi",
  },
];

const rp = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);

export function LuminaSite() {
  const [filter, setFilter] = useState("Semua");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [drawer, setDrawer] = useState(false);
  const [tahap, setTahap] = useState<"keranjang" | "form" | "selesai">("keranjang");
  const [baru, setBaru] = useState<string | null>(null);
  const [orderNo, setOrderNo] = useState("");

  const daftar = useMemo(
    () => (filter === "Semua" ? PRODUK : PRODUK.filter((p) => p.kategori === filter)),
    [filter]
  );

  const itemCart = useMemo(
    () =>
      Object.entries(cart)
        .map(([id, qty]) => ({ produk: PRODUK.find((p) => p.id === id)!, qty }))
        .filter((x) => x.produk && x.qty > 0),
    [cart]
  );
  const total = itemCart.reduce((s, x) => s + x.produk.harga * x.qty, 0);
  const jumlah = itemCart.reduce((s, x) => s + x.qty, 0);

  function tambah(id: string) {
    setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
    setBaru(id);
    window.setTimeout(() => setBaru((b) => (b === id ? null : b)), 1400);
  }
  function ubah(id: string, d: number) {
    setCart((c) => {
      const q = Math.max(0, (c[id] ?? 0) + d);
      const n = { ...c };
      if (q === 0) delete n[id];
      else n[id] = q;
      return n;
    });
  }

  function bayar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setOrderNo(`LMN-${Math.floor(100000 + Math.random() * 899999)}`);
    setTahap("selesai");
  }
  function reset() {
    setCart({});
    setTahap("keranjang");
    setDrawer(false);
  }

  return (
    <div className="min-h-screen bg-[#F6F1E8] text-[#211A12]">
      {/* Bar pengumuman */}
      <div className="bg-[#211A12] px-4 py-2 text-center text-[11px] tracking-[0.18em] uppercase text-[#F6F1E8]">
        Gratis pengiriman untuk pembelian di atas Rp300.000 — seluruh Indonesia
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-[#211A12]/10 bg-[#F6F1E8]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#atas" className="text-xl font-semibold tracking-[0.28em]">
            LUMINA
          </a>
          <nav className="hidden items-center gap-8 text-sm text-[#211A12]/70 md:flex" aria-label="Navigasi utama">
            <a className="transition-colors hover:text-[#211A12]" href="#koleksi">Koleksi</a>
            <a className="transition-colors hover:text-[#211A12]" href="#nilai">Cerita</a>
            <a className="transition-colors hover:text-[#211A12]" href="#koleksi">Aksesoris</a>
          </nav>
          <button
            onClick={() => {
              setDrawer(true);
              setTahap("keranjang");
            }}
            className="relative inline-flex h-11 items-center gap-2 rounded-full bg-[#211A12] px-4 text-sm font-medium text-[#F6F1E8] transition-transform hover:-translate-y-0.5"
            aria-label={`Buka keranjang, ${jumlah} item`}
          >
            <ShoppingBag className="h-4 w-4" />
            Keranjang
            {jumlah > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#B4502A] px-1 text-[10px] font-semibold text-white">
                {jumlah}
              </span>
            )}
          </button>
        </div>
      </header>

      <main id="atas">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-[11px] font-medium tracking-[0.3em] text-[#B4502A] uppercase">
              Koleksi 2026
            </p>
            <h1
              className="mt-4 text-4xl leading-[1.05] font-medium tracking-tight sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Kain yang jujur. Potongan yang awet.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#211A12]/70">
              Pakaian esensial dari linen dan katun alami, dijahit dalam jumlah
              kecil oleh penjahit lokal. Tidak ikut tren — dibuat untuk bertahun-tahun.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#koleksi"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-[#B4502A] px-6 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
              >
                Lihat koleksi
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#nilai"
                className="inline-flex h-12 items-center rounded-full border border-[#211A12]/25 px-6 text-sm font-medium transition-colors hover:border-[#211A12]"
              >
                Cerita kami
              </a>
            </div>
            <p className="mt-6 text-xs tracking-wide text-[#211A12]/50">
              Pengiriman seluruh Indonesia · Pengembalian 14 hari
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/demo/lumina/hero.png"
              alt="Model mengenakan outfit linen bernuansa earth tone di latar studio krem"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* Katalog */}
        <section id="koleksi" className="mx-auto max-w-6xl scroll-mt-20 px-4 pb-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2
              className="text-3xl font-medium tracking-tight sm:text-4xl"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Koleksi
            </h2>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter kategori produk">
              {KATEGORI.map((k) => (
                <button
                  key={k}
                  role="tab"
                  aria-selected={filter === k}
                  onClick={() => setFilter(k)}
                  className={`h-10 rounded-full border px-4 text-sm transition-colors ${
                    filter === k
                      ? "border-[#211A12] bg-[#211A12] text-[#F6F1E8]"
                      : "border-[#211A12]/20 text-[#211A12]/70 hover:border-[#211A12]/50"
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {daftar.map((p) => (
              <article key={p.id} className="group flex flex-col overflow-hidden rounded-2xl bg-white/70 shadow-sm ring-1 ring-[#211A12]/5">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <p className="text-[10px] tracking-[0.22em] text-[#211A12]/50 uppercase">
                    {p.kategori}
                  </p>
                  <h3 className="mt-1 text-sm font-medium sm:text-base">{p.nama}</h3>
                  <p className="mt-1 text-sm text-[#B4502A]">{rp(p.harga)}</p>
                  <button
                    onClick={() => tambah(p.id)}
                    className={`mt-4 inline-flex h-10 items-center justify-center gap-1.5 rounded-full text-sm font-medium transition-all ${
                      baru === p.id
                        ? "bg-[#3E6B4A] text-white"
                        : "bg-[#211A12] text-[#F6F1E8] hover:bg-[#B4502A]"
                    }`}
                  >
                    {baru === p.id ? (
                      <>
                        <Check className="h-4 w-4" /> Ditambahkan
                      </>
                    ) : (
                      <>
                        <Plus className="h-4 w-4" /> Keranjang
                      </>
                    )}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Nilai brand */}
        <section id="nilai" className="border-y border-[#211A12]/10 bg-white/50">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-3">
            {[
              {
                icon: Leaf,
                t: "Bahan alami",
                d: "Linen, katun, dan korduroi dari pemasok tersertifikasi. Nyaman di iklim tropis.",
              },
              {
                icon: Scissors,
                t: "Dijahit lokal",
                d: "Produksi jumlah kecil bersama penjahit di Bandung — fair wage, tanpa stok berlebih.",
              },
              {
                icon: Recycle,
                t: "Packaging daur ulang",
                d: "Setiap pesanan dikirim tanpa plastik sekali pakai, kemasan bisa kamu pakai ulang.",
              },
            ].map((v) => (
              <div key={v.t} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B4502A]/10 text-[#B4502A]">
                  <v.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-medium">{v.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#211A12]/65">{v.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#211A12] text-[#F6F1E8]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-2xl font-semibold tracking-[0.28em]">LUMINA</p>
            <p className="mt-2 max-w-sm text-sm text-[#F6F1E8]/60">
              Pakaian esensial dari bahan alami. Dijahit lokal, dikirim ke seluruh Indonesia.
            </p>
          </div>
          <div className="text-sm text-[#F6F1E8]/60">
            <a href="#koleksi" className="block transition-colors hover:text-[#F6F1E8]">Koleksi</a>
            <a href="#nilai" className="mt-2 block transition-colors hover:text-[#F6F1E8]">Cerita</a>
          </div>
        </div>
        <div className="border-t border-[#F6F1E8]/10">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 text-[11px] tracking-[0.16em] text-[#F6F1E8]/45 uppercase sm:px-6">
            <span>© 2026 LUMINA — situs demo</span>
            <a
              href="/"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[#F6F1E8]"
            >
              Dirancang & dibangun oleh Ketik.
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </footer>

      {/* ================= Drawer keranjang + checkout ================= */}
      {drawer && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Keranjang belanja">
          <button
            aria-label="Tutup keranjang"
            onClick={() => setDrawer(false)}
            className="absolute inset-0 bg-[#211A12]/50 backdrop-blur-sm"
          />
          <div className="absolute top-0 right-0 flex h-full w-full max-w-md flex-col bg-[#F6F1E8] shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#211A12]/10 px-5 py-4">
              <p className="font-medium tracking-[0.2em] uppercase">
                {tahap === "selesai" ? "Pesanan dibuat" : tahap === "form" ? "Pembayaran" : `Keranjang (${jumlah})`}
              </p>
              <button
                onClick={() => setDrawer(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[#211A12]/10"
                aria-label="Tutup"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* --- daftar item --- */}
            {tahap === "keranjang" && (
              <>
                <div className="flex-1 overflow-y-auto px-5 py-4">
                  {itemCart.length === 0 ? (
                    <div className="flex h-full flex-col items-center justify-center text-center">
                      <ShoppingBag className="h-10 w-10 text-[#211A12]/25" />
                      <p className="mt-4 text-sm text-[#211A12]/60">
                        Keranjang masih kosong.
                        <br />
                        Yuk pilih dari koleksi kami.
                      </p>
                      <button
                        onClick={() => setDrawer(false)}
                        className="mt-6 inline-flex h-11 items-center rounded-full bg-[#211A12] px-5 text-sm font-medium text-[#F6F1E8]"
                      >
                        Lihat koleksi
                      </button>
                    </div>
                  ) : (
                    <ul className="divide-y divide-[#211A12]/10">
                      {itemCart.map(({ produk, qty }) => (
                        <li key={produk.id} className="flex gap-4 py-4">
                          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                            <Image src={produk.img} alt={produk.alt} fill sizes="80px" className="object-cover" />
                          </div>
                          <div className="flex flex-1 flex-col">
                            <div className="flex items-start justify-between gap-2">
                              <p className="text-sm font-medium">{produk.nama}</p>
                              <button
                                onClick={() => ubah(produk.id, -qty)}
                                className="text-[#211A12]/40 transition-colors hover:text-[#B4502A]"
                                aria-label={`Hapus ${produk.nama} dari keranjang`}
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                            <p className="mt-0.5 text-sm text-[#B4502A]">{rp(produk.harga)}</p>
                            <div className="mt-auto flex items-center gap-3">
                              <div className="flex items-center rounded-full border border-[#211A12]/20">
                                <button
                                  onClick={() => ubah(produk.id, -1)}
                                  className="flex h-8 w-8 items-center justify-center"
                                  aria-label="Kurangi jumlah"
                                >
                                  <Minus className="h-3.5 w-3.5" />
                                </button>
                                <span className="w-6 text-center text-sm">{qty}</span>
                                <button
                                  onClick={() => ubah(produk.id, 1)}
                                  className="flex h-8 w-8 items-center justify-center"
                                  aria-label="Tambah jumlah"
                                >
                                  <Plus className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {itemCart.length > 0 && (
                  <div className="border-t border-[#211A12]/10 px-5 py-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#211A12]/60">Subtotal</span>
                      <span className="font-semibold">{rp(total)}</span>
                    </div>
                    <p className="mt-1 text-xs text-[#211A12]/50">
                      {total >= 300000
                        ? "Kamu dapat gratis pengiriman."
                        : `Tambah ${rp(300000 - total)} lagi untuk gratis pengiriman.`}
                    </p>
                    <button
                      onClick={() => setTahap("form")}
                      className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#B4502A] text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
                    >
                      Lanjut ke pembayaran
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </>
            )}

            {/* --- form checkout --- */}
            {tahap === "form" && (
              <form onSubmit={bayar} className="flex flex-1 flex-col overflow-y-auto px-5 py-4">
                <div className="flex-1 space-y-4">
                  <div>
                    <label htmlFor="lm-nama" className="text-xs tracking-[0.16em] text-[#211A12]/60 uppercase">
                      Nama lengkap
                    </label>
                    <input
                      id="lm-nama"
                      required
                      placeholder="Nama kamu"
                      className="mt-1.5 h-12 w-full rounded-xl border border-[#211A12]/20 bg-white/80 px-4 text-sm outline-none focus:border-[#B4502A]"
                    />
                  </div>
                  <div>
                    <label htmlFor="lm-wa" className="text-xs tracking-[0.16em] text-[#211A12]/60 uppercase">
                      Nomor WhatsApp
                    </label>
                    <input
                      id="lm-wa"
                      required
                      inputMode="tel"
                      placeholder="08xxxxxxxxxx"
                      className="mt-1.5 h-12 w-full rounded-xl border border-[#211A12]/20 bg-white/80 px-4 text-sm outline-none focus:border-[#B4502A]"
                    />
                  </div>
                  <div>
                    <label htmlFor="lm-alamat" className="text-xs tracking-[0.16em] text-[#211A12]/60 uppercase">
                      Alamat pengiriman
                    </label>
                    <textarea
                      id="lm-alamat"
                      required
                      rows={3}
                      placeholder="Jalan, kota, kode pos"
                      className="mt-1.5 w-full rounded-xl border border-[#211A12]/20 bg-white/80 px-4 py-3 text-sm outline-none focus:border-[#B4502A]"
                    />
                  </div>
                  <fieldset>
                    <legend className="text-xs tracking-[0.16em] text-[#211A12]/60 uppercase">Pembayaran</legend>
                    <div className="mt-2 grid gap-2">
                      {["Transfer Bank", "QRIS", "Bayar di tempat"].map((m, i) => (
                        <label
                          key={m}
                          className="flex h-12 cursor-pointer items-center gap-3 rounded-xl border border-[#211A12]/20 bg-white/80 px-4 text-sm has-checked:border-[#B4502A] has-checked:bg-[#B4502A]/5"
                        >
                          <input type="radio" name="bayar" value={m} defaultChecked={i === 0} className="accent-[#B4502A]" />
                          {m}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>
                <div className="border-t border-[#211A12]/10 pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#211A12]/60">Total</span>
                    <span className="font-semibold">{rp(total)}</span>
                  </div>
                  <button
                    type="submit"
                    className="mt-3 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#211A12] text-sm font-medium text-[#F6F1E8]"
                  >
                    Selesaikan pesanan
                  </button>
                  <button
                    type="button"
                    onClick={() => setTahap("keranjang")}
                    className="mt-2 h-11 w-full text-sm text-[#211A12]/60 transition-colors hover:text-[#211A12]"
                  >
                    Kembali ke keranjang
                  </button>
                </div>
              </form>
            )}

            {/* --- sukses --- */}
            {tahap === "selesai" && (
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#3E6B4A]/10 text-[#3E6B4A]">
                  <Check className="h-8 w-8" />
                </span>
                <h3 className="mt-5 text-xl font-medium">Terima kasih!</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#211A12]/65">
                  Pesanan <span className="font-semibold text-[#211A12]">{orderNo}</span> sudah kami terima.
                  Detail pengiriman akan dikirim ke WhatsApp kamu.
                </p>
                <p className="mt-3 rounded-xl bg-white/70 px-4 py-3 text-xs leading-relaxed text-[#211A12]/55">
                  Ini situs demo — pesanan adalah simulasi dan tidak ada pembayaran sungguhan.
                </p>
                <button
                  onClick={reset}
                  className="mt-6 inline-flex h-12 items-center rounded-full bg-[#B4502A] px-6 text-sm font-medium text-white"
                >
                  Lanjut belanja
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
