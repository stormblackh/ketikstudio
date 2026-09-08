import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { AboutContent } from "@/components/site/about";
import { NextCta } from "@/components/site/next-cta";

export const metadata: Metadata = {
  title: "Tentang — Ketik. | Web Developer Freelance Indonesia",
  description:
    "Ketik adalah studio satu orang: website kecil tapi rapi dan cepat. Kenali cara kerja, komitmen, dan teknologi yang dipakai sehari-hari.",
  alternates: { canonical: "/tentang" },
};

export default function TentangPage() {
  return (
    <>
      <PageHero
        no="03"
        label="Tentang"
        title={
          <>
            Kenalan dulu, biar{" "}
            <span className="font-serif italic text-signal-soft">nyaman</span>
          </>
        }
      />
      <AboutContent />
      <NextCta />
    </>
  );
}
