"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

/**
 * Reveal saat elemen masuk viewport — pengganti framer-motion `whileInView`.
 * Murni IntersectionObserver + transisi CSS (.reveal di globals.css),
 * biaya bundle ±0 KB dibanding ±50KB kalau pakai library animasi.
 */
export function Reveal({ children, className, delay = 0, y = 32, once = true }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Browser tanpa IntersectionObserver: langsung tampilkan, jangan sampai
    // konten hilang selamanya (resiliensi > animasi). Tulis atribut langsung
    // ke DOM agar tidak memicu render berantai saat mount.
    if (typeof IntersectionObserver === "undefined") {
      el.dataset.shown = "true";
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            if (once) io.disconnect();
          } else if (!once) {
            setShown(false);
          }
        }
      },
      { rootMargin: "-60px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`reveal${className ? ` ${className}` : ""}`}
      data-shown={shown ? "true" : "false"}
      style={{ "--reveal-delay": `${delay}ms`, "--reveal-y": `${y}px` } as CSSProperties}
    >
      {children}
    </div>
  );
}
