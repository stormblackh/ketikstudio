import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: false,
  // Jangan bocorkan teknologi server lewat header X-Powered-By
  poweredByHeader: false,
  async headers() {
    return [
      {
        // Aset ber-hash: aman di-cache selamanya (nama file berubah tiap deploy)
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Gambar karya: cache 1 hari + revalidate latar belakang,
        // jadi kunjungan berulang instan dan CDN yang menyerap beban
        source: "/work/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        // Font: jarang berubah, cache panjang
        source: "/:all*(svg|woff2)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=2592000" },
        ],
      },
    ];
  },
};

export default nextConfig;
