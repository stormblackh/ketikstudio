import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";
import { Hero } from "@/components/site/hero";
import { WorksGrid } from "@/components/site/works";
import { ServicesTeaser } from "@/components/site/services-teaser";
import { SectionHead } from "@/components/site/section-head";
import { NextCta } from "@/components/site/next-cta";
import { Reveal } from "@/components/site/reveal";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${site.brand}${site.brandSuffix} — ${site.role}`,
  description:
    "Jasa pembuatan website: landing page, toko online, dan aplikasi web full-stack untuk UMKM & bisnis di Indonesia.",
  areaServed: "Indonesia",
  email: site.email,
  url: site.url,
  priceRange: "Rp200rb - Rp10jt",
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Web Development",
    "E-Commerce",
    "Landing Page",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />

      {/* Karya unggulan — dua studi kasus, sisanya di halaman /karya */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            no="01"
            label="Portofolio"
            title={
              <>
                Bukan janji, ini{" "}
                <span className="font-serif italic text-signal-soft">hasil kerjaku</span>
              </>
            }
          />
          <WorksGrid limit={2} />
          <Reveal>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="/karya"
                className="group inline-flex h-12 items-center gap-2 rounded-full border border-paper/25 px-6 text-sm font-medium text-paper transition-colors hover:border-paper"
              >
                Lihat semua karya
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="https://ketikapp.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-signal px-6 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                Coba demo live: tes mengetik
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Layanan — ringkasan satu baris per paket, detail di /layanan */}
      <section className="pb-4 md:pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            no="02"
            label="Layanan & Harga"
            title={
              <>
                Harga jelas dari{" "}
                <span className="font-serif italic text-signal-soft">awal</span>
              </>
            }
          />
          <ServicesTeaser />
        </div>
      </section>

      <div className="pt-16 md:pt-24">
        <NextCta />
      </div>
    </>
  );
}
