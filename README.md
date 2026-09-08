# Ketik. — Website Portofolio

Website portofolio untuk jasa pembuatan website (landing page, toko online,
web app). Dibangun pakai:

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4
- Sebagian komponen shadcn/ui

## Jalanin di komputer

```bash
npm install
npm run dev     # buka http://localhost:3000
```

## Edit konten

Hampir semua teks, harga, kontak, dan daftar proyek ada di satu file:

```
src/config/site.ts
```

Ganti di situ: nomor WhatsApp, email, sosmed, harga layanan, daftar karya, FAQ.

## Deploy

Project ini diset ke output `standalone`, jadi bisa langsung dideploy ke
Vercel tanpa konfigurasi tambahan — tinggal hubungkan repo GitHub.
