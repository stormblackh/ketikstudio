import type { Metadata } from "next";
import { Contact } from "@/components/site/contact";

export const metadata: Metadata = {
  title: "Kontak — Ketik. | Diskusi Proyek Website",
  description:
    "Ceritakan rencanamu, sekecil apa pun. Hubungi via WhatsApp atau email, respons maksimal 24 jam. Konsultasi gratis tanpa komitmen.",
  alternates: { canonical: "/kontak" },
};

export default function KontakPage() {
  return <Contact asPage />;
}
