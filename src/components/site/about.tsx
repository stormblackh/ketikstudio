"use client";

import { commitments, stack } from "@/config/site";
import { Reveal } from "./reveal";

/** Narasi + commitment + stack — heading disediakan halaman. */
export function AboutContent() {
  return (
    <div className="pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Narasi */}
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <p className="font-display text-2xl leading-snug font-light text-paper/90 md:text-[1.75rem]">
                Aku developer independen di balik Ketik
                <span className="text-signal-soft">.</span> Namanya kuberi sesederhana
                pekerjaannya: mengetik, baris demi baris, sampai ide bisnismu benar-benar jadi
                website. Menuruku, yang kecil tapi rapi dan cepat itu lebih berharga daripada
                yang megah tapi lambat.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 leading-relaxed text-paper/70">
                Makanya tiap proyek kukerjakan seperti milik sendiri, dari kalimat pertama di
                landing page sampai struktur database di baliknya. Komunikasi dibuat jelas sejak
                awal, progres bisa kamu cek tiap minggu, dan kodenya kutulis rapi supaya nanti
                mudah diserahkan ke siapa saja.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 leading-relaxed text-paper/70">
                Jadi anggap saja aku bukan sekadar &quot;orang yang bikinin website&quot;, tapi
                partner teknis yang ikut mikirin bisnismu sampai ke detail.
              </p>
            </Reveal>

            {/* Commitment */}
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-paper/12 bg-paper/12">
              {commitments.map((c, i) => (
                <Reveal key={c.big} delay={0.1 + i * 0.06} className="h-full">
                  <div className="h-full bg-card p-5 md:p-6">
                    <div className="font-display text-2xl font-medium tracking-tight text-signal-soft md:text-3xl">
                      {c.big}
                    </div>
                    <div className="mt-1.5 text-xs leading-relaxed text-paper/60 md:text-sm">
                      {c.small}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Stack */}
          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="rounded-3xl border border-paper/10 bg-card p-6 md:p-8">
              <h3 className="font-mono text-[11px] tracking-[0.25em] text-paper/55 uppercase">
                Teknologi yang kutangani harian
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-paper/15 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.08em] text-paper/75 transition-colors hover:border-signal-soft hover:text-signal-soft"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-6 border-t border-paper/10 pt-5 text-sm leading-relaxed text-paper/55">
                Stack selalu disesuaikan kebutuhan proyek: bukan yang paling nge-hype, tapi yang
                teruji, awet dipakai, dan mudah dikembangkan.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
