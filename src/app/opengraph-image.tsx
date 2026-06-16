import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "OmniStack — Abdelrahman Hassan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1A1915",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontFamily: "serif",
            fontSize: 14,
            fontWeight: 400,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#8B7355",
            marginBottom: 24,
          }}
        >
          Junior Frontend &amp; WordPress Developer
        </div>
        <div
          style={{
            fontFamily: "serif",
            fontSize: 64,
            fontWeight: 300,
            color: "#FAF8F5",
            lineHeight: 1.1,
            marginBottom: 32,
          }}
        >
          Abdelrahman Hassan
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: 20,
            color: "#A09485",
            maxWidth: 700,
          }}
        >
          Building modern websites with code, WordPress &amp; AI.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 80,
            right: 80,
            fontFamily: "sans-serif",
            fontSize: 16,
            color: "#8B7355",
            letterSpacing: "0.08em",
          }}
        >
          omnistack.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
