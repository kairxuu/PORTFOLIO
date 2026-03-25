import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Alexandre Keolasy — Portfolio BTS SIO SLAM";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1D1D1F",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Gradient blob */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
          }}
        />

        {/* Initials badge */}
        <div
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            background: "#fff",
            color: "#1D1D1F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: "700",
            marginBottom: "32px",
          }}
        >
          AK
        </div>

        <div
          style={{
            fontSize: "72px",
            fontWeight: "800",
            color: "#fff",
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            marginBottom: "20px",
          }}
        >
          Alexandre Keolasy
        </div>

        <div
          style={{
            fontSize: "28px",
            color: "rgba(255,255,255,0.55)",
            fontWeight: "300",
            letterSpacing: "-0.01em",
          }}
        >
          Étudiant BTS SIO SLAM · Développeur Web
        </div>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "40px",
          }}
        >
          {["Next.js", "TypeScript", "C#", "SQL"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 20px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.7)",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
