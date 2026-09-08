"use client";

import { useMemo, useState } from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
  Search,
  TrendingUp,
  TrendingDown,
  Compass,
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";

/* ============================================================
   NUSA — demo dashboard analitik.
   Kartu statistik, grafik SVG (tanpa library chart), filter
   periode, dan tabel transaksi dengan pencarian langsung.
   Data adalah contoh; interaksinya nyata.
   ============================================================ */

const PERIODE = [
  { id: "7", label: "7 hari" },
  { id: "30", label: "30 hari" },
  { id: "90", label: "90 hari" },
] as const;
type PeriodeId = (typeof PERIODE)[number]["id"];

/* --- data pendapatan (juta rupiah), deterministik agar stabil --- */
const DATA_PENDAPATAN: Record<PeriodeId, number[]> = {
  "7": [42, 55, 38, 61, 70, 58, 74],
  "30": Array.from({ length: 30 }, (_, i) =>
    Math.round((44 + 22 * Math.sin(i / 4.1) + i * 0.75) * 10) / 10
  ),
  "90": Array.from({ length: 90 }, (_, i) =>
    Math.round((38 + 18 * Math.sin(i / 11) + i * 0.28) * 10) / 10
  ),
};

const KATEGORI_PENJUALAN = [
  { nama: "Fashion", nilai: 86 },
  { nama: "Elektronik", nilai: 72 },
  { nama: "Kriya", nilai: 54 },
  { nama: "Kuliner", nilai: 41 },
  { nama: "Skincare", nilai: 33 },
];

type Status = "Selesai" | "Diproses" | "Dibatalkan";
type Transaksi = {
  id: string;
  pelanggan: string;
  produk: string;
  tanggal: string;
  status: Status;
  total: number;
};

const TRANSAKSI: Transaksi[] = [
  { id: "TRX-2043", pelanggan: "Sari Wulandari", produk: "Paket Kriya Bulanan", tanggal: "8 Sep", status: "Selesai", total: 1249000 },
  { id: "TRX-2042", pelanggan: "Bima Prasetyo", produk: "Kaos Oversize — 2 pcs", tanggal: "8 Sep", status: "Diproses", total: 258000 },
  { id: "TRX-2041", pelanggan: "Anisa Rahma", produk: "Speaker Aktif Mini", tanggal: "7 Sep", status: "Selesai", total: 749000 },
  { id: "TRX-2040", pelanggan: "Dimas Anggara", produk: "Sneakers Canvas", tanggal: "7 Sep", status: "Selesai", total: 512000 },
  { id: "TRX-2039", pelanggan: "Lina Marlina", produk: "Skincare Set Basic", tanggal: "6 Sep", status: "Dibatalkan", total: 385000 },
  { id: "TRX-2038", pelanggan: "Yoga Saputra", produk: "Jaket Korduroi", tanggal: "6 Sep", status: "Selesai", total: 459000 },
  { id: "TRX-2037", pelanggan: "Fitri Handayani", produk: "Tote Bag Kanvas — 3 pcs", tanggal: "5 Sep", status: "Diproses", total: 447000 },
  { id: "TRX-2036", pelanggan: "Rizky Fadillah", produk: "Kopi Gayo 250gr", tanggal: "5 Sep", status: "Selesai", total: 96000 },
  { id: "TRX-2035", pelanggan: "Maya Puspita", produk: "Lampu Meja Kayu", tanggal: "4 Sep", status: "Selesai", total: 685000 },
];

const NAV = [
  { id: "ringkasan", label: "Ringkasan", icon: LayoutDashboard },
  { id: "produk", label: "Produk", icon: Package },
  { id: "pesanan", label: "Pesanan", icon: ShoppingCart },
  { id: "pelanggan", label: "Pelanggan", icon: Users },
  { id: "pengaturan", label: "Pengaturan", icon: Settings },
] as const;
type NavId = (typeof NAV)[number]["id"];

const rp = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);

/* ---------- grafik garis (SVG murni) ---------- */
function GrafikGaris({ data }: { data: number[] }) {
  const W = 600;
  const H = 210;
  const P = 8;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;
  const x = (i: number) => P + (i * (W - 2 * P)) / (data.length - 1);
  const y = (v: number) => H - P - ((v - min) / span) * (H - 2 * P);
  const garis = data.map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const area = `${garis} L${x(data.length - 1).toFixed(1)},${H - P} L${x(0).toFixed(1)},${H - P} Z`;
  const titik = [
    { i: 0, v: data[0] },
    { i: data.length - 1, v: data[data.length - 1] },
  ];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-52 w-full" role="img" aria-label="Grafik tren pendapatan">
      <defs>
        <linearGradient id="nusagrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5A623" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#F5A623" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((f) => (
        <line
          key={f}
          x1={P}
          x2={W - P}
          y1={P + f * (H - 2 * P)}
          y2={P + f * (H - 2 * P)}
          stroke="#26324E"
          strokeDasharray="3 5"
          strokeWidth="1"
        />
      ))}
      <path d={area} fill="url(#nusagrad)" />
      <path
        d={garis}
        fill="none"
        stroke="#F5A623"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      {titik.map((t) => (
        <circle key={t.i} cx={x(t.i)} cy={y(t.v)} r="3.5" fill="#F5A623" stroke="#0C1220" strokeWidth="2" />
      ))}
    </svg>
  );
}

export function NusaSite() {
  const [nav, setNav] = useState<NavId>("ringkasan");
  const [periode, setPeriode] = useState<PeriodeId>("30");
  const [cari, setCari] = useState("");

  const data = DATA_PENDAPATAN[periode];
  const naik = data[data.length - 1] >= data[0];

  const tabel = useMemo(() => {
    const q = cari.trim().toLowerCase();
    if (!q) return TRANSAKSI;
    return TRANSAKSI.filter((t) =>
      [t.id, t.pelanggan, t.produk].some((f) => f.toLowerCase().includes(q))
    );
  }, [cari]);

  const statusStyle: Record<Status, string> = {
    Selesai: "bg-emerald-400/10 text-emerald-300 ring-emerald-400/20",
    Diproses: "bg-amber-400/10 text-amber-300 ring-amber-400/20",
    Dibatalkan: "bg-rose-400/10 text-rose-300 ring-rose-400/20",
  };

  const maxKat = Math.max(...KATEGORI_PENJUALAN.map((k) => k.nilai));

  return (
    <div className="flex min-h-screen bg-[#0C1220] text-[#E7ECF6]">
      {/* ================= Sidebar (desktop) ================= */}
      <aside className="hidden w-60 shrink-0 flex-col border-r border-[#1D2946] bg-[#0E1526] lg:flex">
        <div className="flex items-center gap-2.5 px-5 py-5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F5A623]/15 text-[#F5A623]">
            <Compass className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold tracking-[0.22em]">NUSA</p>
            <p className="text-[10px] tracking-[0.18em] text-[#8B96AD] uppercase">Analitik</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1 px-3" aria-label="Navigasi dashboard">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => setNav(n.id)}
              aria-current={nav === n.id ? "page" : undefined}
              className={`flex h-11 w-full items-center gap-3 rounded-xl px-3.5 text-sm transition-colors ${
                nav === n.id
                  ? "bg-[#F5A623]/10 font-medium text-[#F5A623]"
                  : "text-[#8B96AD] hover:bg-[#F5A623]/5 hover:text-[#E7ECF6]"
              }`}
            >
              <n.icon className="h-4.5 w-4.5" />
              {n.label}
            </button>
          ))}
        </nav>
        <div className="border-t border-[#1D2946] px-5 py-4">
          <p className="text-[10px] leading-relaxed tracking-[0.14em] text-[#5B6680] uppercase">
            Data contoh untuk demo
          </p>
          <a
            href="/"
            className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#8B96AD] transition-colors hover:text-[#F5A623]"
          >
            Dibangun oleh Ketik.
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </aside>

      {/* ================= Konten utama ================= */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-20 border-b border-[#1D2946] bg-[#0C1220]/90 backdrop-blur">
          <div className="flex flex-wrap items-center gap-3 px-4 py-3.5 sm:px-6">
            {/* Logo versi mobile */}
            <div className="flex items-center gap-2 lg:hidden">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F5A623]/15 text-[#F5A623]">
                <Compass className="h-4.5 w-4.5" />
              </span>
              <p className="text-sm font-semibold tracking-[0.2em]">NUSA</p>
            </div>
            <div className="relative min-w-0 flex-1 sm:max-w-xs">
              <Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[#5B6680]" />
              <input
                value={cari}
                onChange={(e) => setCari(e.target.value)}
                placeholder="Cari transaksi..."
                aria-label="Cari transaksi"
                className="h-10 w-full rounded-xl border border-[#1D2946] bg-[#0E1526] pr-4 pl-10 text-sm placeholder:text-[#5B6680] outline-none focus:border-[#F5A623]/50"
              />
            </div>
            <div className="ml-auto flex items-center gap-3">
              <div className="flex rounded-xl border border-[#1D2946] bg-[#0E1526] p-1" role="tablist" aria-label="Pilih periode">
                {PERIODE.map((p) => (
                  <button
                    key={p.id}
                    role="tab"
                    aria-selected={periode === p.id}
                    onClick={() => setPeriode(p.id)}
                    className={`h-8 rounded-lg px-3 text-xs transition-colors ${
                      periode === p.id
                        ? "bg-[#F5A623] font-medium text-[#0C1220]"
                        : "text-[#8B96AD] hover:text-[#E7ECF6]"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5A623]/15 text-xs font-semibold text-[#F5A623]"
                title="Admin Demo"
              >
                AD
              </span>
            </div>
          </div>
          {/* Nav pills versi mobile */}
          <nav className="flex gap-1 overflow-x-auto px-4 pb-3 lg:hidden" aria-label="Navigasi dashboard">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => setNav(n.id)}
                className={`flex h-9 shrink-0 items-center gap-2 rounded-full px-3.5 text-xs transition-colors ${
                  nav === n.id
                    ? "bg-[#F5A623]/10 font-medium text-[#F5A623]"
                    : "text-[#8B96AD] hover:text-[#E7ECF6]"
                }`}
              >
                <n.icon className="h-3.5 w-3.5" />
                {n.label}
              </button>
            ))}
          </nav>
        </header>

        <main className="flex-1 px-4 py-6 sm:px-6">
          {nav === "ringkasan" ? (
            <>
              {/* Kartu statistik */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
                {[
                  { label: "Pendapatan", nilai: "Rp84,2jt", delta: "+12,4%", naik: true },
                  { label: "Pesanan", nilai: "1.284", delta: "+8,1%", naik: true },
                  { label: "Pengunjung", nilai: "42.150", delta: "+23,6%", naik: true },
                  { label: "Konversi", nilai: "3,04%", delta: "-0,4%", naik: false },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl border border-[#1D2946] bg-[#0E1526] p-4 sm:p-5">
                    <p className="text-[11px] tracking-[0.14em] text-[#8B96AD] uppercase">{s.label}</p>
                    <p className="mt-2 text-xl font-semibold sm:text-2xl">{s.nilai}</p>
                    <p
                      className={`mt-1.5 inline-flex items-center gap-1 text-xs font-medium ${
                        s.naik ? "text-emerald-300" : "text-rose-300"
                      }`}
                    >
                      {s.naik ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                      {s.delta}
                      <span className="font-normal text-[#5B6680]">vs periode lalu</span>
                    </p>
                  </div>
                ))}
              </div>

              {/* Grafik garis */}
              <section className="mt-4 rounded-2xl border border-[#1D2946] bg-[#0E1526] p-4 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h2 className="text-sm font-medium sm:text-base">Tren pendapatan</h2>
                    <p className="mt-0.5 text-xs text-[#8B96AD]">
                      {periode} hari terakhir · dalam juta rupiah
                    </p>
                  </div>
                  <p className="font-mono text-xs text-[#8B96AD]">
                    puncak{" "}
                    <span className="font-semibold text-[#F5A623]">
                      Rp{Math.max(...data).toFixed(1)}jt
                    </span>
                  </p>
                </div>
                <div className="mt-4">
                  <GrafikGaris data={data} />
                </div>
                <div className="flex justify-between font-mono text-[10px] text-[#5B6680]">
                  <span>awal periode</span>
                  <span>hari ini</span>
                </div>
              </section>

              {/* Bar chart + tabel */}
              <div className="mt-4 grid gap-4 xl:grid-cols-5">
                <section className="rounded-2xl border border-[#1D2946] bg-[#0E1526] p-4 sm:p-6 xl:col-span-2">
                  <h2 className="text-sm font-medium sm:text-base">Penjualan per kategori</h2>
                  <p className="mt-0.5 text-xs text-[#8B96AD]">30 hari terakhir · indeks relatif</p>
                  <ul className="mt-5 space-y-4">
                    {KATEGORI_PENJUALAN.map((k) => (
                      <li key={k.nama}>
                        <div className="flex items-baseline justify-between text-sm">
                          <span className="text-[#E7ECF6]/85">{k.nama}</span>
                          <span className="font-mono text-xs text-[#8B96AD]">{k.nilai}</span>
                        </div>
                        <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-[#1D2946]">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#F5A623]/70 to-[#F5A623]"
                            style={{ width: `${(k.nilai / maxKat) * 100}%` }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="min-w-0 rounded-2xl border border-[#1D2946] bg-[#0E1526] p-4 sm:p-6 xl:col-span-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h2 className="text-sm font-medium sm:text-base">Transaksi terbaru</h2>
                    <p className="text-xs text-[#8B96AD]">
                      {tabel.length} dari {TRANSAKSI.length} transaksi
                    </p>
                  </div>
                  <div className="mt-4 -mx-2 overflow-x-auto px-2">
                    <table className="w-full min-w-[520px] text-left text-sm">
                      <thead>
                        <tr className="text-[11px] tracking-[0.12em] text-[#5B6680] uppercase">
                          <th className="pb-2 font-medium">ID</th>
                          <th className="pb-2 font-medium">Pelanggan</th>
                          <th className="pb-2 font-medium">Status</th>
                          <th className="pb-2 text-right font-medium">Total</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#1D2946]">
                        {tabel.map((t) => (
                          <tr key={t.id} className="group">
                            <td className="py-3 font-mono text-xs text-[#8B96AD]">{t.id}</td>
                            <td className="py-3">
                              <p className="font-medium">{t.pelanggan}</p>
                              <p className="text-xs text-[#8B96AD]">{t.produk}</p>
                            </td>
                            <td className="py-3">
                              <span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ring-inset ${statusStyle[t.status]}`}>
                                {t.status}
                              </span>
                            </td>
                            <td className="py-3 text-right font-medium">{rp(t.total)}</td>
                          </tr>
                        ))}
                        {tabel.length === 0 && (
                          <tr>
                            <td colSpan={4} className="py-10 text-center text-sm text-[#8B96AD]">
                              Tidak ada transaksi yang cocok dengan &quot;{cari}&quot;.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>

              <p className="mt-6 rounded-2xl border border-dashed border-[#1D2946] px-4 py-3 text-center text-xs leading-relaxed text-[#5B6680]">
                Angka di dashboard ini adalah data contoh — tapi filter periode,
                pencarian, dan semua interaksinya berjalan nyata.
              </p>
            </>
          ) : (() => {
            const navAktif = NAV.find((n) => n.id === nav);
            const Icon = navAktif?.icon;
            /* ---- halaman nav lain: tidak termasuk demo ---- */
            return (
            <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5A623]/10 text-[#F5A623]">
                {Icon ? <Icon className="h-6 w-6" /> : null}
              </span>
              <h2 className="mt-4 text-lg font-medium">
                Halaman &quot;{navAktif?.label}&quot; tidak termasuk dalam demo
              </h2>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#8B96AD]">
                Demo ini fokus menunjukkan halaman Ringkasan: kartu statistik,
                grafik interaktif, dan tabel transaksi. Halaman lain dibangun
                mengikuti pola yang sama.
              </p>
              <button
                onClick={() => setNav("ringkasan")}
                className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-[#F5A623] px-5 text-sm font-medium text-[#0C1220] transition-transform hover:-translate-y-0.5"
              >
                <ArrowLeft className="h-4 w-4" />
                Kembali ke Ringkasan
              </button>
            </div>
            );
          })()}
        </main>
      </div>
    </div>
  );
}
