import { useState } from "react";

import { MuseumGuide } from "./MuseumGuide";
import { MuseumScene } from "./MuseumScene";
import { museumRooms, defaultPanel } from "./museumData";

export function MuseumPage() {
  const [selectedPanel, setSelectedPanel] = useState(null);
  const [focusedPanel, setFocusedPanel] = useState(defaultPanel);

  const focusedRoom = museumRooms.find(r => r.id === focusedPanel?.roomId) || museumRooms[0];
  const guideRoom = selectedPanel
    ? museumRooms.find(r => r.id === selectedPanel.roomId) || focusedRoom
    : focusedRoom;

  const handleSelectPanel = (panel) => {
    setSelectedPanel(panel);
    if (panel) {
      setFocusedPanel(panel);
    }
  };

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
        selectedPanel={selectedPanel}
        onSelectPanel={handleSelectPanel}
        onFocusPanel={setFocusedPanel}
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
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          style={{
            color: focusedRoom.accent || "#c5a028",
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            transition: "color 0.3s ease",
            fontWeight: "bold"
          }}
        >
          Phòng: {focusedRoom.title}
        </div>
        <h1
          style={{
            margin: "10px 0 14px",
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            lineHeight: 1.05,
            transition: "all 0.3s ease",
          }}
        >
          {focusedPanel?.title || "Bảo tàng 3D"}
        </h1>
        <p
          style={{
            margin: 0,
            color: "rgba(255,248,237,0.68)",
            lineHeight: 1.8,
            transition: "opacity 0.3s ease",
          }}
        >
          {focusedPanel?.heading || "Di chuyển để xem nội dung"}
        </p>
      </section>

      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "clamp(18px, 5vw, 48px)",
          zIndex: 16,
          display: "flex",
          gap: 12,
          pointerEvents: "none",
        }}
      >
        {museumRooms.map((room) => (
          <div
            key={room.id}
            style={{
              width: room.id === focusedRoom.id ? 24 : 8,
              height: 8,
              borderRadius: 4,
              background: room.id === focusedRoom.id ? room.accent : "rgba(255,255,255,0.2)",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

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
        selectedPanel={selectedPanel}
        onSelectPanel={handleSelectPanel}
        currentRoom={guideRoom}
      />
    </main>
  );
}
