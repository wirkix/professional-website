"use client";

import { useEffect, useRef, useState } from "react";

// Assumed width (px) of the embedded page's desktop layout. The iframe is
// rendered at this fixed size and then scaled down to fit its container, so
// this only affects how "zoomed in" the preview looks, not its aspect ratio.
const PREVIEW_WIDTH = 1600;
const PREVIEW_HEIGHT = (PREVIEW_WIDTH * 9) / 16;

/**
 * Renders a live, non-interactive thumbnail of another site by embedding it
 * in a scaled-down iframe. Unlike a static screenshot, this always reflects
 * whatever is currently deployed at `src` — no re-capturing needed when the
 * embedded project changes.
 */
export default function LivePreview({ src, title }: { src: string; title: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateScale = () => setScale(el.clientWidth / PREVIEW_WIDTH);
    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video overflow-hidden rounded-xl bg-brand-200"
    >
      {scale > 0 && (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 origin-top-left border-0"
          style={{
            width: `${PREVIEW_WIDTH}px`,
            height: `${PREVIEW_HEIGHT}px`,
            transform: `scale(${scale})`,
          }}
        />
      )}
    </div>
  );
}
