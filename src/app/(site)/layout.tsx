import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Grain } from "@/components/site/grain";

/**
 * Layout khusus halaman portofolio (beranda + halaman nav).
 * Halaman /demo/* berada DI LUAR grup ini supaya tampil sebagai
 * situs mandiri — tanpa header/footer portofolio.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Jika JS dimatikan/gagal, konten reveal tetap tampil (resiliensi > animasi) */}
      <Grain />
      <Header />
      {children}
      <Footer />
    </>
  );
}
