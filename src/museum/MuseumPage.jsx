import { useEffect, useState } from "react";

import { MuseumScene } from "./MuseumScene";
import { museumRooms, defaultPanel } from "./museumData";

const LOBBY_VIEW = {
  id: "lobby",
  title: "Sảnh trung tâm",
  shortTitle: "Sảnh",
  accent: "#C5A028",
};

export function MuseumPage() {
  const [selectedPanel, setSelectedPanel] = useState(null);
  const [focusedPanel, setFocusedPanel] = useState(defaultPanel);
  const displayPanel = selectedPanel || focusedPanel;

  const focusedRoom = displayPanel
    ? museumRooms.find(r => r.id === displayPanel.roomId) || null
    : null;
  const activeView = focusedRoom || LOBBY_VIEW;
  const indicators = [LOBBY_VIEW, ...museumRooms];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        setSelectedPanel(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
        focusedPanel={focusedPanel}
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
            color: activeView.accent || "#c5a028",
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            transition: "color 0.3s ease",
            fontWeight: "bold"
          }}
        >
          {focusedRoom ? `Phòng: ${focusedRoom.title}` : "Sảnh trung tâm"}
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
          {displayPanel?.title || "Triển lãm Nhà nước pháp quyền"}
        </h1>
        <p
          style={{
            margin: 0,
            color: "rgba(255,248,237,0.68)",
            lineHeight: 1.8,
            transition: "opacity 0.3s ease",
          }}
        >
          {displayPanel?.heading || "Bước vào một phòng và hướng camera về từng bức tường nội dung."}
        </p>
      </section>

      {selectedPanel && (
        <aside
          style={{
            position: "absolute",
            right: "clamp(18px, 4vw, 56px)",
            bottom: "clamp(86px, 12vh, 116px)",
            zIndex: 18,
            width: "min(360px, calc(100vw - 36px))",
            border: `1px solid ${selectedPanel.roomAccent}55`,
            borderRadius: 14,
            background: "linear-gradient(145deg, rgba(16, 10, 6, 0.9), rgba(42, 28, 18, 0.78))",
            boxShadow: "0 24px 70px rgba(0,0,0,0.46)",
            color: "#fff8ed",
            padding: "18px 20px",
            pointerEvents: "auto",
            backdropFilter: "blur(16px)",
          }}
        >
          <button
            type="button"
            onClick={() => setSelectedPanel(null)}
            aria-label="Bỏ ghim tranh"
            style={{
              position: "absolute",
              right: 12,
              top: 10,
              width: 32,
              height: 32,
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.04)",
              color: "rgba(255,248,237,0.76)",
              cursor: "pointer",
              fontSize: 20,
              lineHeight: "28px",
            }}
          >
            ×
          </button>
          <div
            style={{
              color: selectedPanel.roomAccent,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Đang ghim tranh
          </div>
          <h2
            style={{
              margin: "8px 34px 8px 0",
              fontFamily: "'Playfair Display', serif",
              fontSize: 26,
              lineHeight: 1.12,
            }}
          >
            {selectedPanel.title}
          </h2>
          <p style={{ margin: 0, color: "rgba(255,248,237,0.72)", lineHeight: 1.65, fontSize: 14 }}>
            {selectedPanel.heading}
          </p>
          <div
            style={{
              marginTop: 14,
              paddingTop: 12,
              borderTop: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,248,237,0.54)",
              fontSize: 11,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {selectedPanel.roomTitle}
          </div>
        </aside>
      )}

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
        {indicators.map((room) => (
          <div
            key={room.id}
            style={{
              width: room.id === activeView.id ? 24 : 8,
              height: 8,
              borderRadius: 4,
              background: room.id === activeView.id ? room.accent : "rgba(255,255,255,0.2)",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </main>
  );
}
