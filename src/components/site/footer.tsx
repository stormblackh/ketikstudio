import Link from "next/link";
import { site } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-paper/10 bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="font-display text-3xl font-bold tracking-tight">
              {site.brand}
              <span className="text-signal-soft">{site.brandSuffix}</span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/60">
              Studio satu orang untuk website yang cepat, rapi, dan enak dipakai — dari landing
              page sampai web app full-stack.
            </p>
          </div>

          <nav aria-label="Navigasi footer" className="grid grid-cols-2 gap-x-12 gap-y-2">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="link-grow w-fit font-mono text-[11px] tracking-[0.2em] text-paper/70 uppercase transition-colors hover:text-paper"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-grow w-fit font-mono text-[11px] tracking-[0.2em] text-paper/70 uppercase transition-colors hover:text-paper"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-paper/10 pt-6 font-mono text-[10px] tracking-[0.18em] text-paper/45 uppercase md:flex-row md:items-center md:justify-between">
          <span>
            © {year} {site.brand}
            {site.brandSuffix} Semua hak dilindungi
          </span>
          <span>Dibangun dengan Next.js · TypeScript · Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
