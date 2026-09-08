import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { ServicesGrid } from "@/components/site/services";
import { ProcessGrid } from "@/components/site/process";
import { NextCta } from "@/components/site/next-cta";

export const metadata: Metadata = {
  title: "Layanan & Harga — Ketik.",
  description:
    "Landing page mulai Rp750rb, toko online mulai Rp2jt, web app full-stack mulai Rp4jt, perawatan Rp200rb/bulan. Harga transparan, desain custom, source code jadi milikmu.",
  alternates: { canonical: "/layanan" },
};

export default function LayananPage() {
  return (
    <>
      <PageHero
        no="02"
        label="Layanan & Harga"
        title={
          <>
            Harga jelas dari{" "}
            <span className="font-serif italic text-signal-soft">awal</span>
          </>
        }
        intro="Harga kutulis di depan supaya kita tidak buang waktu; angka finalnya menyesuaikan kebutuhan. Semua paket sudah termasuk diskusi awal, desain custom, dan serah terima source code lengkap."
      />
      <ServicesGrid />
      <ProcessGrid />
      <NextCta />
    </>
  );
}
