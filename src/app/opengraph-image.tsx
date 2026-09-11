import { ImageResponse } from "next/og";

export const alt = "Jack Frisman — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#fafafa",
        color: "#111111",
        padding: 72,
      }}
    >
      <div
        style={{
          fontSize: 22,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#777777",
        }}
      >
        Full Stack Developer
      </div>
      <div style={{ fontSize: 64, lineHeight: 1.05, maxWidth: 900, fontWeight: 500 }}>
        Hi, I&apos;m Jack. I build beautiful software that performs as well as it looks.
      </div>
    </div>,
    size,
  );
}
