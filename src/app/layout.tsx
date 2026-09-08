import type { Metadata, Viewport } from "next";
import { Fraunces, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { site } from "@/config/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.brand}${site.brandSuffix} — ${site.role} | Website Custom, Landing Page, Toko Online & Web App`,
  description:
    "Jasa pembuatan website untuk UMKM & bisnis: landing page, toko online, dan aplikasi web full-stack. Desain custom bukan template, respons cepat, source code 100% milik kamu.",
  keywords: [
    "jasa bikin website",
    "web developer freelance indonesia",
    "jasa landing page",
    "jasa toko online",
    "pembuatan aplikasi web",
    "website UMKM",
    "full stack developer",
  ],
  authors: [{ name: site.brand }],
  creator: site.brand,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png", sizes: "128x128" },
    ],
  },
  openGraph: {
    title: `${site.brand}${site.brandSuffix} — ${site.role}`,
    description:
      "Website custom yang cepat, rapi, dan bisa jualan. Dari landing page sampai web app full-stack.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand}${site.brandSuffix} — ${site.role}`,
    description: "Website custom yang cepat, rapi, dan bisa jualan.",
  },
};

export const viewport: Viewport = {
  themeColor: "#171310",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${space.variable} ${jetbrains.variable} antialiased bg-background text-foreground font-sans`}
      >
        {/* Jika JS dimatikan/gagal, konten reveal tetap tampil (resiliensi > animasi) */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
