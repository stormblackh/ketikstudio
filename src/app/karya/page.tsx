import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { WorksGrid } from "@/components/site/works";
import { NextCta } from "@/components/site/next-cta";

export const metadata: Metadata = {
  title: "Karya — Ketik. | Studi Kasus Pembuatan Website",
  description:
    "Studi kasus lengkap: toko online fashion, dashboard analitik SaaS, website restoran, dan sistem e-ticket event. Masalah, solusi, fitur, dan hasil terukur.",
  alternates: { canonical: "/karya" },
};

export default function KaryaPage() {
  return (
    <>
      <PageHero
        no="01"
        label="Portofolio"
        title={
          <>
            Bukan janji, ini{" "}
            <span className="font-serif italic text-signal-soft">hasil kerjaku</span>
          </>
        }
        intro="Semua proyek di bawah kugerjakan sendiri, dari riset, desain, sampai kodenya. Klik salah satu untuk lihat cara kerjaku: masalahnya apa, bagaimana dipecahkan, dan hasilnya seperti apa."
      />
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <WorksGrid />
        </div>
      </section>
      <NextCta />
    </>
  );
}
