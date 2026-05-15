import { useState, useEffect } from "react";
import { museumArtworks } from "./museumData";

export function MuseumGuide({ selectedArtwork, onSelectArtwork }) {
  const [typedText, setTypedText] = useState("");
  const artwork = selectedArtwork;

  useEffect(() => {
    setTypedText("");
    if (!artwork) return;

    let i = 0;
    const text = artwork.guideText;
    const interval = setInterval(() => {
      setTypedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 25);

    return () => clearInterval(interval);
  }, [artwork]);

  return (
    <aside
      className={`museum-presenter ${artwork ? "active" : ""}`}
      style={{
        position: "absolute",
        right: "clamp(18px, 4vw, 56px)",
        bottom: "clamp(18px, 5vw, 52px)",
        zIndex: 20,
        width: "min(400px, calc(100vw - 36px))",
        color: "#fff8ed",
        pointerEvents: "auto",
      }}
    >
      <div
        style={{
          border: "1px solid rgba(245, 213, 152, 0.22)",
          borderRadius: 18,
          background: "linear-gradient(145deg, rgba(18, 12, 8, 0.9), rgba(49, 32, 21, 0.82))",
          boxShadow: "0 26px 80px rgba(0,0,0,0.42)",
          padding: "24px 28px",
          backdropFilter: "blur(18px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <div style={{
            width: 42, height: 42, borderRadius: "50%", background: "#C5A028", 
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: "bold", fontSize: 20, color: "#2c1a0e",
            boxShadow: "0 0 15px rgba(197, 160, 40, 0.4)"
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
          <div>
            <div style={{ color: "#c5a028", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}>
              Hướng dẫn viên
            </div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16 }}>Vladimir Lenin</div>
          </div>
          <button 
            type="button"
            onClick={() => onSelectArtwork(null)}
            style={{ marginLeft: "auto", background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", padding: 4 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <h2 style={{ margin: "16px 0 8px", fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3.5vw, 32px)", lineHeight: 1.1 }}>
          {artwork ? artwork.title : "Chọn một bức tranh"}
        </h2>
        <p style={{ margin: "0 0 16px", color: artwork?.accent || "rgba(255,248,237,0.68)", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em" }}>
          {artwork?.subtitle}
        </p>

        <div className="museum-presenter-scroll" style={{ maxHeight: "30vh", overflowY: "auto", paddingRight: 8, margin: "0 -8px 0 0" }}>
          <p style={{ margin: 0, color: "rgba(255,248,237,0.86)", lineHeight: 1.75, fontSize: 15, minHeight: 80 }}>
            {typedText}
            {typedText.length < (artwork?.guideText?.length || 0) && (
              <span style={{ display: "inline-block", width: 6, height: 16, background: "#c5a028", marginLeft: 4, animation: "blink 1s step-end infinite" }} />
            )}
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 24, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {museumArtworks.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectArtwork(item)}
              style={{
                border: item.id === artwork?.id ? `1px solid ${item.accent}` : "1px solid rgba(255,255,255,0.12)",
                borderRadius: 999,
                background: item.id === artwork?.id ? "rgba(197,160,40,0.14)" : "rgba(255,255,255,0.05)",
                color: item.id === artwork?.id ? "#fff" : "rgba(255,255,255,0.6)",
                cursor: "pointer",
                fontSize: 11,
                padding: "8px 14px",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blink { 50% { opacity: 0; } }
      `}} />
    </aside>
  );
}
