"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs, waLink } from "@/config/site";
import { Reveal } from "./reveal";

/** Dua kolom: intro + tombol tanya (kiri), accordion FAQ (kanan). */
export function FaqList() {
  return (
    <section className="bg-paper py-20 text-ink md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="leading-relaxed text-ink/65">
                Pertanyaan yang biasanya muncul sebelum proyek dimulai. Kalau jawabannya belum
                ada di sini, tanya langsung saja — gratis dan santai.
              </p>
              <a
                href={waLink("Halo! Aku ada pertanyaan sebelum mulai proyek.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-11 items-center rounded-full border border-ink/25 px-5 text-sm font-medium transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                Tanya langsung
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="border-t border-ink/12">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`} className="border-b border-ink/12">
                  <AccordionTrigger className="py-5 text-left hover:no-underline md:py-6">
                    <span className="flex items-baseline gap-4 pr-4">
                      <span className="font-mono text-xs text-signal">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-lg font-medium tracking-tight sm:text-xl">
                        {f.q}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-9 leading-relaxed text-ink/70">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
