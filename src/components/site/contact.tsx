"use client";

import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { site, waLink } from "@/config/site";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

/**
 * Section kontak. `asPage` = dipakai sebagai halaman /kontak
 * (padding atas lebih besar karena tidak ada PageHero di atasnya).
 */
export function Contact({ asPage = false }: { asPage?: boolean }) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        asPage ? "pt-32 pb-20 md:pt-44 md:pb-28" : "scroll-mt-24 py-20 md:py-28"
      )}
    >
      {/* Cahaya hangat halus di kiri bawah */}
      <div
        aria-hidden
        className="warm-glow pointer-events-none absolute bottom-[-40%] left-[-10%] h-[560px] w-[560px] rounded-full"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] text-paper/60 uppercase md:text-xs">
            <span className="text-signal-soft">06</span>
            <span aria-hidden className="h-px w-10 bg-paper/30" />
            <span>Kontak</span>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-4xl font-display text-[11.5vw] leading-[1.05] font-medium tracking-[-0.01em] sm:text-6xl lg:text-[5rem]">
            Semua mulai dari{" "}
            <span className="font-serif italic text-signal-soft">ngobrol</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/70 md:text-lg">
            Ceritakan rencanamu, sekecil apa pun. Dari sana kubantu petakan solusi dan perkiraan
            biayanya. Santai saja, belum ada komitmen apa-apa di tahap ini.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:max-w-3xl">
          <Reveal delay={0.2}>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between gap-6 rounded-3xl border border-paper/20 p-6 transition-colors hover:bg-paper hover:text-ink md:p-7"
            >
              <div className="flex items-center justify-between">
                <MessageCircle className="h-6 w-6" />
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div>
                <div className="font-display text-xl font-medium tracking-tight">WhatsApp</div>
                <div className="mt-1 font-mono text-xs tracking-[0.1em] opacity-75">
                  Paling cepat, respons &lt; 24 jam
                </div>
              </div>
            </a>
          </Reveal>
          <Reveal delay={0.26}>
            <a
              href={`mailto:${site.email}`}
              className="group flex h-full flex-col justify-between gap-6 rounded-3xl border border-paper/20 p-6 transition-colors hover:bg-paper hover:text-ink md:p-7"
            >
              <div className="flex items-center justify-between">
                <Mail className="h-6 w-6" />
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div>
                <div className="font-display text-xl font-medium tracking-tight">Email</div>
                <div className="mt-1 font-mono text-xs tracking-[0.1em] opacity-75 break-all">
                  {site.email}
                </div>
              </div>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[11px] tracking-[0.18em] text-paper/60 uppercase">
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" />
              {site.location}
            </span>
            <span className="flex items-center gap-2">
              <span className="animate-blink inline-block h-1.5 w-1.5 rounded-full bg-signal-soft" />
              Slot bulan ini: masih ada
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
