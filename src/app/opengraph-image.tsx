import { ImageResponse } from "next/og";

export const alt =
  "Muhammad Uzair Rizwan — Independent web developer building websites that bring you customers.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          padding: "0 96px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#3b82f6",
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          <span
            style={{
              width: 12,
              height: 24,
              borderRadius: 4,
              backgroundColor: "#3b82f6",
            }}
          />
          <span>Independent web developer</span>
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginTop: 32,
            maxWidth: 900,
          }}
        >
          Websites that bring you customers.
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            color: "#9ca3af",
            fontSize: 28,
            marginTop: 28,
          }}
        >
          <span>Web design</span>
          <span>Lead capture</span>
          <span>Retention automation</span>
        </div>
      </div>
    ),
    { ...size }
  );
}