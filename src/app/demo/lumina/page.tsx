import type { Metadata, Viewport } from "next";
import { LuminaSite } from "@/components/demo/lumina";

export const metadata: Metadata = {
  title: "LUMINA — Koleksi 2026",
  description:
    "Pakaian esensial dari linen dan katun alami, dijahit lokal. Situs demo toko online.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#F6F1E8",
};

export default function LuminaPage() {
  return <LuminaSite />;
}
