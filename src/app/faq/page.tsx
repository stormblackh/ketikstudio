import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { FaqList } from "@/components/site/faq";

export const metadata: Metadata = {
  title: "FAQ — Ketik. | Pertanyaan Sebelum Mulai Proyek",
  description:
    "Berapa lama pengerjaan? Bagaimana skema pembayaran? Siapa pemilik source code? Semua pertanyaan yang sering muncul sebelum proyek website dimulai, dijawab apa adanya.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        no="04"
        label="FAQ"
        title={
          <>
            Yang sering{" "}
            <span className="font-serif italic text-signal-soft">ditanyakan</span>
          </>
        }
      />
      <FaqList />
    </>
  );
}
