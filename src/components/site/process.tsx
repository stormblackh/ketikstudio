import { processSteps } from "@/config/site";
import { Reveal } from "./reveal";

/** Grid 4 langkah kerja — dipakai di halaman /layanan (tanpa nomor section). */
export function ProcessGrid() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <Reveal>
            <div className="mb-5 flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] text-paper/60 uppercase md:text-xs">
              <span aria-hidden className="h-px w-10 bg-paper/30" />
              <span>Cara kerja</span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-4xl leading-[1.08] font-medium tracking-[-0.01em] sm:text-5xl md:text-[3.4rem]">
              Proses yang{" "}
              <span className="font-serif italic text-signal-soft">tenang</span>, tanpa drama
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((step, i) => (
            <Reveal key={step.index} delay={i * 0.08} className="h-full">
              <div className="group h-full rounded-3xl border border-paper/10 bg-card p-6 transition-colors duration-300 hover:border-paper/25 md:p-7">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-5xl font-light italic text-signal-soft/90 md:text-[3.4rem]">
                    {step.index}
                  </span>
                  <span
                    aria-hidden
                    className="h-2 w-2 rounded-full bg-signal-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
                <h3 className="mt-7 font-display text-xl font-medium tracking-tight md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/65">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
