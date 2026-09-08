"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { services, waLink } from "@/config/site";
import { Reveal } from "./reveal";

/** Grid kartu layanan & harga — heading disediakan halaman. */
export function ServicesGrid() {
  return (
    <section className="bg-paper py-20 text-ink md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {services.map((s, i) => (
            <Reveal key={s.index} delay={(i % 2) * 0.08} className="h-full">
              <article className="flex h-full flex-col rounded-3xl border border-ink/10 bg-[#f7f3e9] p-6 transition-colors duration-300 hover:border-ink/25 md:p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-sm text-signal">{s.index}</span>
                  <span className="font-mono text-[10px] tracking-[0.18em] text-ink/45 uppercase">
                    {s.duration}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-medium tracking-tight md:text-[1.65rem]">
                  {s.title}
                </h3>
                <p className="mt-1.5 font-serif text-base italic text-ink/60">{s.short}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">{s.desc}</p>

                <ul className="mt-6 mb-8 space-y-2.5">
                  {s.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2.5 text-sm text-ink/75">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
                      {inc}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-ink/10 pt-5">
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.18em] text-ink/45 uppercase">
                      Investasi
                    </div>
                    <div className="mt-1 font-display text-2xl font-medium tracking-tight">
                      {s.price}
                    </div>
                  </div>
                  <a
                    href={waLink(
                      `Halo! Aku tertarik dengan layanan "${s.title}". Bisa dibahas lebih lanjut?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-signal"
                  >
                    Minta penawaran
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
