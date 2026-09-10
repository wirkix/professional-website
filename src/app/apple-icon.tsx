import { ImageResponse } from "next/og";

// Same approach as icon.tsx at the 180x180 size iOS expects for "Add to
// Home Screen" -- see that file for the color/rationale. No pre-rounded
// corners: iOS applies its own mask on top of this.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          color: "#f0f4f8",
          fontFamily: "Arial, sans-serif",
          fontSize: 92,
          fontWeight: 700,
          letterSpacing: -3,
        }}
      >
        AW
      </div>
    ),
    { ...size }
  );
}
