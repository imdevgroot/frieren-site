import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Frieren: Beyond Journey's End";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0c0f 0%, #1a3a2a 50%, #0a0c0f 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            border: "1px solid rgba(201,169,110,0.2)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            border: "1px solid rgba(201,169,110,0.1)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* Rune marks */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 60,
            fontSize: 48,
            color: "rgba(201,169,110,0.3)",
          }}
        >
          ✦
        </div>
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 60,
            fontSize: 48,
            color: "rgba(201,169,110,0.3)",
          }}
        >
          ✦
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 60,
            fontSize: 32,
            color: "rgba(74,138,93,0.4)",
          }}
        >
          ◈
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 60,
            fontSize: 32,
            color: "rgba(74,138,93,0.4)",
          }}
        >
          ◈
        </div>
        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 16,
              letterSpacing: "0.4em",
              color: "#8a7fa8",
              textTransform: "uppercase",
            }}
          >
            ✦ The Epic Journey of the Elven Mage ✦
          </div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "#e8c87a",
              textShadow: "0 0 40px rgba(232,200,122,0.6)",
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            FRIEREN
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#b0a8c8",
              letterSpacing: "0.1em",
            }}
          >
            Beyond Journey&apos;s End
          </div>
          <div
            style={{
              width: 200,
              height: 2,
              background: "linear-gradient(to right, transparent, #c9a96e, transparent)",
              marginTop: 8,
            }}
          />
          <div
            style={{
              fontSize: 18,
              color: "#d4d8e0",
              opacity: 0.7,
              letterSpacing: "0.05em",
            }}
          >
            A journey beyond time...
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
