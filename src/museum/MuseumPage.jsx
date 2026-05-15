import { useState } from "react";

import { MuseumGuide } from "./MuseumGuide";
import { MuseumScene } from "./MuseumScene";
import { defaultArtwork } from "./museumData";

export function MuseumPage() {
  const [selectedArtwork, setSelectedArtwork] = useState(defaultArtwork);

  return (
    <main
      className="museum-entrance"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: 620,
        overflow: "hidden",
        background: "#090604",
      }}
    >
      <MuseumScene
        selectedArtwork={selectedArtwork}
        onSelectArtwork={setSelectedArtwork}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 5,
          pointerEvents: "none",
          background:
            "radial-gradient(circle at 50% 35%, transparent 0%, rgba(0,0,0,0.08) 36%, rgba(0,0,0,0.72) 100%)",
        }}
      />

      <section
        style={{
          position: "absolute",
          left: "clamp(18px, 4vw, 56px)",
          top: "clamp(92px, 13vh, 132px)",
          zIndex: 15,
          maxWidth: 440,
          color: "#fff8ed",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            color: "#c5a028",
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          Bảo tàng thử nghiệm
        </div>
        <h1
          style={{
            margin: "10px 0 14px",
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(42px, 7vw, 78px)",
            lineHeight: 0.95,
          }}
        >
          Gallery Marxist
        </h1>
        <p
          style={{
            margin: 0,
            color: "rgba(255,248,237,0.68)",
            lineHeight: 1.8,
          }}
        >
          Khung 3D placeholder cho tab Bảo Tàng. Tranh thật và visual polish sẽ
          được các bạn gửi cho anh nhé.
        </p>
      </section>

      <div
        style={{
          position: "absolute",
          left: "clamp(18px, 4vw, 56px)",
          bottom: "clamp(18px, 5vw, 48px)",
          zIndex: 16,
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          color: "rgba(255,248,237,0.72)",
          fontSize: 11,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 999,
            padding: "8px 12px",
            background: "rgba(0,0,0,0.28)",
          }}
        >
          W/A/S/D di chuyển
        </span>
        <span
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 999,
            padding: "8px 12px",
            background: "rgba(0,0,0,0.28)",
          }}
        >
          Mũi tên xoay
        </span>
        <span
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 999,
            padding: "8px 12px",
            background: "rgba(0,0,0,0.28)",
          }}
        >
          Click tranh
        </span>
      </div>

      <MuseumGuide
        selectedArtwork={selectedArtwork}
        onSelectArtwork={setSelectedArtwork}
      />
    </main>
  );
}
