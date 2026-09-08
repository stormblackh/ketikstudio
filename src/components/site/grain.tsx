/**
 * Overlay butiran film (grain) di atas seluruh halaman —
 * memberi tekstur halus di atas tema gelap hangat.
 */
export function Grain() {
  const svg = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter><rect width="100%" height="100%" filter="url(#n)" opacity="0.55"/></svg>`
  );
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[110] opacity-[0.04] mix-blend-overlay"
      style={{ backgroundImage: `url("data:image/svg+xml,${svg}")` }}
    />
  );
}
