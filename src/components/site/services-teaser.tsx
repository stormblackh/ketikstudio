import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/config/site";
import { Reveal } from "./reveal";

/**
 * Ringkasan layanan untuk beranda: satu baris per layanan
 * (nama + harga) yang seluruhnya menuju halaman /layanan.
 */
export function ServicesTeaser() {
  return (
    <div className="border-y border-paper/10">
      {services.map((s, i) => (
        <Reveal key={s.index} delay={i * 0.05}>
          <Link
            href="/layanan"
            className="group flex items-center gap-5 border-b border-paper/10 py-6 transition-colors last:border-b-0 hover:bg-card/60 md:py-7"
          >
            <span className="font-mono text-sm text-signal-soft">{s.index}</span>
            <div className="min-w-0 flex-1">
              <div className="font-display text-xl font-medium tracking-tight md:text-2xl">
                {s.title}
              </div>
              <div className="mt-0.5 font-serif text-sm italic text-paper/55">{s.short}</div>
            </div>
            <div className="hidden text-right sm:block">
              <div className="font-mono text-[10px] tracking-[0.18em] text-paper/45 uppercase">
                Investasi
              </div>
              <div className="mt-0.5 font-display text-lg font-medium tracking-tight">
                {s.price}
              </div>
            </div>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-paper/20 transition-colors group-hover:border-paper group-hover:bg-paper group-hover:text-ink">
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
