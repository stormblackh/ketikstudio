import type { Metadata, Viewport } from "next";
import { NusaSite } from "@/components/demo/nusa";

export const metadata: Metadata = {
  title: "NUSA — Dashboard Analitik",
  description:
    "Dashboard analitik dengan kartu statistik, grafik tren interaktif, dan tabel transaksi. Situs demo.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#0C1220",
};

export default function NusaPage() {
  return <NusaSite />;
}
