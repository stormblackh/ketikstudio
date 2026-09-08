import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type SectionHeadProps = {
  no: string;
  label: string;
  title: React.ReactNode;
  className?: string;
  /** true = dipakai di section gelap (default), false = di section krem/terang */
  onDark?: boolean;
};

export function SectionHead({ no, label, title, className, onDark = true }: SectionHeadProps) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <Reveal>
        <div
          className={cn(
            "mb-5 flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] uppercase md:text-xs",
            onDark ? "text-paper/60" : "text-ink/55"
          )}
        >
          <span className={onDark ? "text-signal-soft" : "text-signal"}>{no}</span>
          <span aria-hidden className={cn("h-px w-10", onDark ? "bg-paper/30" : "bg-ink/25")} />
          <span>{label}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-4xl leading-[1.08] font-medium tracking-[-0.01em] sm:text-5xl md:text-[3.4rem]">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
