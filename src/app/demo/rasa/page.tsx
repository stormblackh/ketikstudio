import type { Metadata, Viewport } from "next";
import { RasaSite } from "@/components/demo/rasa";

export const metadata: Metadata = {
  title: "RASA — Masakan Rumahan Indonesia",
  description:
    "Menu andalan, cerita dapur, dan reservasi meja langsung via WhatsApp. Situs demo restoran.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#26221A",
};

export default function RasaPage() {
  return <RasaSite />;
}
