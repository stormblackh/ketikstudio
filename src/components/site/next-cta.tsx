import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";

/**
 * Ajakan penutup di dasar setiap halaman — mengarahkan ke /kontak.
 * Satu-satunya langkah yang ingin kami minta dari pengunjung: ngobrol dulu.
 */
export function NextCta() {
  return (
    <section className="pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-paper/12 bg-card p-8 md:p-12">
            <div
              aria-hidden
              className="warm-glow pointer-events-none absolute -top-32 right-[-10%] h-[380px] w-[380px] rounded-full"
            />
            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div>
                <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
                  Ada proyek yang mau{" "}
                  <span className="font-serif italic text-signal-soft">dimulai</span>?
                </h2>
                <p className="mt-3 max-w-md leading-relaxed text-paper/65">
                  Ceritakan sekilas saja; nanti kubantu urutkan langkahnya beserta perkiraan
                  biayanya. Gratis, belum ada komitmen apa-apa.
                </p>
              </div>
              <Link
                href="/kontak"
                className="group inline-flex h-13 shrink-0 items-center gap-2 rounded-full bg-paper px-7 text-sm font-medium text-ink transition-colors hover:bg-signal-soft"
              >
                Ngobrol dulu, gratis
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
