import type { ReactNode } from "react";

type PageHeroProps = {
  /** Nomor section (mis. "01") — menjaga bahasa visual mono situs ini */
  no: string;
  label: string;
  title: ReactNode;
  intro?: string;
};

/**
 * Kepala halaman untuk semua route selain beranda:
 * eyebrow mono + judul display besar + intro. Memakai animasi CSS fade-up
 * (tanpa menunggu JS) dan padding atas untuk header fixed.
 */
export function PageHero({ no, label, title, intro }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-12 md:pt-44 md:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          style={{ animationDelay: "0ms" }}
          className="fade-up flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] text-paper/60 uppercase md:text-xs"
        >
          <span className="text-signal-soft">{no}</span>
          <span aria-hidden className="h-px w-10 bg-paper/30" />
          <span>{label}</span>
        </div>

        <h1
          style={{ animationDelay: "0.1s" }}
          className="fade-up mt-6 max-w-4xl font-display text-[11.5vw] leading-[1.05] font-medium tracking-[-0.01em] sm:text-6xl lg:text-[4.6rem]"
        >
          {title}
        </h1>

        {intro && (
          <p
            style={{ animationDelay: "0.2s" }}
            className="fade-up mt-6 max-w-2xl text-base leading-relaxed text-paper/70 md:text-lg"
          >
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
