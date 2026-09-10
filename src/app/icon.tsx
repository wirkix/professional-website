import { ImageResponse } from "next/og";

// Next's file-convention favicon -- picked up automatically at /icon, no
// <link rel="icon"> needed in layout.tsx's metadata. The whole site had no
// favicon.ico or icon file at all (confirmed: no public/, nothing in
// src/app matching *icon*), so browsers were falling back to a blank tab
// icon on every route, not just the one page this got noticed on.
//
// A generated "AW" monogram rather than a static exported image, on
// globals.css's own --color-accent-500 -- the same blue used for every
// link/CTA across the site (Header.tsx, project cards) -- so the tab icon
// reads as this site's actual accent color, not an arbitrary new one.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2563eb",
          borderRadius: 7,
          color: "#f0f4f8",
          fontFamily: "Arial, sans-serif",
          fontSize: 17,
          fontWeight: 700,
          letterSpacing: -0.5,
        }}
      >
        AW
      </div>
    ),
    { ...size }
  );
}
