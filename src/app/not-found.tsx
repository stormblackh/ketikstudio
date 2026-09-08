import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[72vh] flex-col items-center justify-center px-4 pt-24 pb-16 text-center">
      <div className="fade-up font-mono text-[11px] tracking-[0.3em] text-signal-soft uppercase md:text-xs">
        404 — Halaman tidak ditemukan
      </div>
      <h1
        style={{ animationDelay: "0.1s" }}
        className="fade-up mt-6 font-display text-[18vw] leading-[1.02] font-medium tracking-[-0.01em] sm:text-7xl md:text-8xl"
      >
        Salah{" "}
        <span className="font-serif italic text-signal-soft">alamat</span>.
      </h1>
      <p
        style={{ animationDelay: "0.2s" }}
        className="fade-up mt-6 max-w-md leading-relaxed text-paper/65"
      >
        Halaman yang kamu cari tidak ada atau sudah dipindah. Yuk kembali ke jalur yang
        benar — semua dimulai dari beranda.
      </p>
      <Link
        href="/"
        style={{ animationDelay: "0.3s" }}
        className="fade-up group mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-paper px-6 text-sm font-medium text-ink transition-colors hover:bg-signal-soft"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        Kembali ke beranda
      </Link>
    </section>
  );
}
