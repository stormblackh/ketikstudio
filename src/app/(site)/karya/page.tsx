import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { WorksGrid } from "@/components/site/works";
import { NextCta } from "@/components/site/next-cta";

export const metadata: Metadata = {
  title: "Karya — Ketik. | Studi Kasus Pembuatan Website",
  description:
    "Empat proyek web yang bisa dicoba langsung: tes kecepatan mengetik, toko online fashion, website restoran dengan reservasi WhatsApp, dan dashboard analitik interaktif. Masalah, solusi, fitur, dan hasilnya.",
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
        intro="Semua proyek di bawah kugerjakan sendiri, dari desain sampai kodenya — dan semuanya bisa dicoba langsung. Tekan Buka demo untuk merasakan hasilnya, atau baca studi kasusnya buat lihat cara kerjaku."
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
