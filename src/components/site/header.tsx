"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { site, waLink } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled
            ? "border-b border-paper/10 bg-ink/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-[72px] lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-2xl font-medium tracking-tight"
            aria-label={`${site.brand} — kembali ke beranda`}
          >
            {site.brand}
            <span className="text-signal-soft">{site.brandSuffix}</span>
          </Link>

          {/* Nav desktop */}
          <nav aria-label="Navigasi utama" className="hidden items-center gap-7 lg:flex">
            {site.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "link-grow text-sm transition-colors",
                    active ? "text-paper" : "text-paper/70 hover:text-paper"
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "mr-1.5 inline-block h-1 w-1 rounded-full bg-signal-soft align-middle",
                      active ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            {/* Status ketersediaan */}
            <span className="hidden items-center gap-2 rounded-full border border-paper/20 px-3.5 py-1.5 font-mono text-[10px] tracking-[0.18em] uppercase md:flex">
              <span className="animate-blink inline-block h-1.5 w-1.5 rounded-full bg-signal-soft" />
              Terima proyek
            </span>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-10 items-center gap-1.5 rounded-full bg-paper px-4 text-sm font-medium text-ink transition-colors hover:bg-signal-soft md:h-10 md:px-5"
            >
              Ngobrol
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Tombol menu mobile */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Buka menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 transition-colors hover:border-paper lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile fullscreen */}
      <div
        className={cn(
          "fixed inset-0 z-[100] flex flex-col bg-ink text-paper transition-all duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <span className="font-display text-2xl font-medium tracking-tight">
            {site.brand}
            <span className="text-signal-soft">{site.brandSuffix}</span>
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Tutup menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/25 transition-colors hover:border-paper"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav
          aria-label="Navigasi mobile"
          className="flex min-h-0 flex-1 flex-col justify-center gap-1 overflow-y-auto px-6 py-4"
        >
          {site.nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-4 border-b border-paper/10 py-4"
            >
              <span className="font-mono text-xs text-signal-soft">0{i + 1}</span>
              <span className="font-display text-4xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2">
                {item.label}
              </span>
            </Link>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-paper text-base font-medium text-ink"
          >
            Diskusi proyek <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </>
  );
}
