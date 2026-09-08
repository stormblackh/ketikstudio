"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { projects, type Project } from "@/config/site";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

function ProjectDialog({ project, children }: { project: Project; children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      {/* Lembaran krem di atas situs gelap — fokus & nyaman dibaca */}
      <DialogContent
        showCloseButton={false}
        className="max-h-[88vh] overflow-y-auto rounded-2xl border-ink/10 bg-paper text-ink p-0 sm:max-w-2xl"
      >
        {/* Pembungkus tunggal: mencegah row grid kolaps karena aspect-ratio */}
        <div>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-2xl border-b border-ink/10">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
            <span className="absolute bottom-3 left-4 rounded-full bg-ink px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] text-paper uppercase">
              {project.category}
            </span>
          </div>

          <div className="px-5 py-7 sm:px-8 md:px-10">
            <div className="flex items-baseline justify-between gap-4">
              <DialogTitle className="font-display text-3xl font-medium tracking-tight md:text-4xl">
                {project.name}
              </DialogTitle>
              <span className="font-mono text-sm text-ink/50">{project.year}</span>
            </div>
            <DialogDescription className="mt-2 text-base text-ink/70">
              {project.tagline}
            </DialogDescription>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-signal px-5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                Coba demonya langsung
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="font-mono text-[11px] tracking-[0.25em] text-signal uppercase">
                  Masalah
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{project.masalah}</p>
              </div>
              <div>
                <h4 className="font-mono text-[11px] tracking-[0.25em] text-signal uppercase">
                  Solusi
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{project.solusi}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="font-mono text-[11px] tracking-[0.25em] text-signal uppercase">
                  Fitur Utama
                </h4>
                <ul className="mt-3 space-y-2">
                  {project.fitur.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ink/75">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-[11px] tracking-[0.25em] text-signal uppercase">
                  Hasil
                </h4>
                <ul className="mt-3 space-y-2">
                  {project.hasil.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-ink/75">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                      {h}
                    </li>
                  ))}
                </ul>
                <h4 className="mt-8 font-mono text-[11px] tracking-[0.25em] text-signal uppercase">
                  Teknologi
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-ink/15 px-2.5 py-1 font-mono text-[11px] tracking-wide text-ink/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-9 border-t border-ink/10 pt-4 font-mono text-[10px] leading-relaxed tracking-[0.15em] text-ink/45 uppercase">
              * Semua proyek di sini kubangun sendiri dari nol — desain, kode, sampai jadi. Tekan buka demo dan buktikan sendiri.
            </p>
          </div>
        </div>

        <DialogClose className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink/10 text-ink transition-colors hover:bg-ink hover:text-paper">
          <X className="h-4 w-4" />
          <span className="sr-only">Tutup detail proyek</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

/**
 * Grid kartu proyek + dialog studi kasus.
 * `limit` dipakai beranda untuk menampilkan sebagian saja (mis. 2 unggulan).
 * Heading section disediakan oleh halaman (PageHero/SectionHead).
 */
export function WorksGrid({ limit }: { limit?: number }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const list = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="grid gap-6 md:grid-cols-2 md:gap-7">
      {list.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.08}>
              <article
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                className={cn(
                  "group flex h-full flex-col overflow-hidden rounded-3xl border bg-card transition-all duration-300",
                  hovered === project.id
                    ? "-translate-y-1 border-paper/25 shadow-2xl shadow-black/30"
                    : "border-paper/10"
                )}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={cn(
                      "object-cover transition-transform duration-700 ease-out",
                      hovered === project.id ? "scale-[1.04]" : "scale-100"
                    )}
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-ink/85 px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-paper uppercase backdrop-blur">
                    {project.index} / {project.year}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[11px] tracking-[0.22em] uppercase">
                    <span className="text-signal-soft">{project.category}</span>
                    <span aria-hidden className="h-px w-6 bg-paper/25" />
                    <span className="text-paper/50">{project.tags[0]}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-medium tracking-tight md:text-[1.7rem]">
                    {project.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-paper/65">{project.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-paper/15 px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] text-paper/60 uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-6">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2.5">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/demo inline-flex h-10 items-center gap-2 rounded-full bg-signal px-4 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
                        >
                          Buka demo
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5" />
                        </a>
                      )}
                      <ProjectDialog project={project}>
                        <button className="group/btn inline-flex items-center gap-2 text-sm font-medium text-paper/85 transition-colors hover:text-paper">
                          <span className="link-grow">Baca studi kasus</span>
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </button>
                      </ProjectDialog>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
  );
}
