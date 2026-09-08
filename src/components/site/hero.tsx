"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { waLink } from "@/config/site";

const trusts = ["Respons < 24 jam", "Garansi bug 30 hari", "Source code 100% milikmu"];

export function Hero() {
  return (
    <section id="atas" className="relative overflow-hidden pt-28 pb-16 md:pt-40 md:pb-24">
      {/* Cahaya hangat halus di kanan atas */}
      <div
        aria-hidden
        className="warm-glow pointer-events-none absolute -top-48 right-[-12%] h-[620px] w-[620px] rounded-full"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Kolom teks */}
          <div className="lg:col-span-7">
            <div
              style={{ animationDelay: "0ms" }}
              className="fade-up flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] tracking-[0.25em] text-paper/60 uppercase md:text-xs"
            >
              <span className="flex items-center gap-2">
                <span className="animate-blink inline-block h-1.5 w-1.5 rounded-full bg-signal-soft" />
                Terima proyek baru
              </span>
              <span aria-hidden className="hidden h-px w-8 bg-paper/30 sm:block" />
              <span className="hidden sm:block">Web Developer Freelance — Indonesia</span>
            </div>

            <h1
              style={{ animationDelay: "0.1s" }}
              className="fade-up mt-6 font-display text-[11.5vw] leading-[1.06] font-medium tracking-[-0.01em] sm:text-6xl lg:text-[4.4rem] xl:text-[5.1rem]"
            >
              Website rapi &amp; cepat, biar bisnismu makin{" "}
              <span className="font-serif italic text-signal-soft">dipercaya</span>.
            </h1>

            <p
              style={{ animationDelay: "0.2s" }}
              className="fade-up mt-6 max-w-xl text-base leading-relaxed text-paper/70 md:text-lg"
            >
              Aku bantu UMKM dan bisnis bangun website dari nol: landing page, toko online,
              sampai aplikasi web full-stack. Kamu fokus jualan, urusan desain, kode, dan server
              kubereskan.
            </p>

            <div
              style={{ animationDelay: "0.3s" }}
              className="fade-up mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-paper px-6 text-sm font-medium text-ink transition-colors hover:bg-signal-soft md:h-13 md:px-7"
              >
                Konsultasi gratis
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link
                href="/karya"
                className="group inline-flex h-12 items-center gap-2 rounded-full border border-paper/25 px-6 text-sm font-medium text-paper transition-colors hover:border-paper md:h-13 md:px-7"
              >
                Lihat hasil kerja
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Baris kepercayaan */}
            <ul
              style={{ animationDelay: "0.4s" }}
              className="fade-up mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] tracking-[0.18em] text-paper/55 uppercase md:text-[11px]"
            >
              {trusts.map((t, i) => (
                <li key={t} className="flex items-center gap-3">
                  {i > 0 && <span aria-hidden className="h-1 w-1 rounded-full bg-paper/30" />}
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom visual */}
          <div
            style={{ animationDelay: "0.25s" }}
            className="fade-up relative lg:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-paper/10 shadow-2xl shadow-black/40 md:aspect-[16/11] lg:aspect-[4/5]">
              <Image
                src="/work/about-studio.png"
                alt="Ilustrasi satu orang developer bekerja di depan laptop di studio"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            {/* Kartu kecil melayang */}
            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-paper/10 bg-ink-2/95 px-4 py-3 shadow-xl shadow-black/30 backdrop-blur md:left-6">
              <span className="animate-blink inline-block h-2 w-2 rounded-full bg-signal-soft" />
              <div>
                <div className="text-sm font-medium">Slot tersedia bulan ini</div>
                <div className="font-mono text-[10px] tracking-[0.14em] text-paper/55 uppercase">
                  Balas pesan &lt; 24 jam
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
