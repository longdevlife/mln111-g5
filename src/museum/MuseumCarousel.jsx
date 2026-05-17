import { useState, useCallback } from "react";
import { museumFrames } from "./museumData";

/**
 * MuseumCarousel — Carousel 3D style (Etheron-inspired)
 * Level 1: 3 khung chủ đề (prev / active / next)
 * Level 2: 3 sub-slides per khung (Lý thuyết / Thực tiễn / Vận dụng)
 */
export function MuseumCarousel({ activeFrame, onFrameChange, activeSlide, onSlideChange }) {
  const frameIdx = museumFrames.findIndex((f) => f.id === activeFrame?.id);
  const prevIdx = (frameIdx - 1 + museumFrames.length) % museumFrames.length;
  const nextIdx = (frameIdx + 1) % museumFrames.length;

  const goTo = useCallback(
    (dir) => {
      const newIdx = dir === "prev" ? prevIdx : nextIdx;
      onFrameChange(museumFrames[newIdx]);
      onSlideChange(0);
    },
    [prevIdx, nextIdx, onFrameChange, onSlideChange]
  );

  const currentSlide = activeFrame?.slides?.[activeSlide] || activeFrame?.slides?.[0];

  return (
    <div className="museum-carousel-wrapper">
      {/* ── Carousel Track ── */}
      <div className="museum-carousel-track">
        {museumFrames.map((frame, idx) => {
          let posClass = "museum-carousel-item hidden-item";
          if (idx === frameIdx) posClass = "museum-carousel-item active-item";
          else if (idx === prevIdx) posClass = "museum-carousel-item prev-item";
          else if (idx === nextIdx) posClass = "museum-carousel-item next-item";

          const slide = frame.slides[idx === frameIdx ? activeSlide : 0];

          return (
            <div
              key={frame.id}
              className={posClass}
              onClick={() => {
                if (idx !== frameIdx) {
                  onFrameChange(frame);
                  onSlideChange(0);
                }
              }}
            >
              {/* Card content */}
              <div className="carousel-card" style={{ "--accent": frame.accent }}>
                {/* Image area */}
                <div className="carousel-card-image">
                  <div
                    className="carousel-card-image-inner"
                    style={{
                      backgroundImage: slide?.image ? `url(${slide.image})` : "none",
                      backgroundColor: frame.accent + "18",
                    }}
                  >
                    {/* Placeholder gradient when no image */}
                    {!slide?.image && (
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: `linear-gradient(135deg, ${frame.accent}30, ${frame.accent}08)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg
                          width="64"
                          height="64"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={frame.accent}
                          strokeWidth="1"
                          opacity="0.4"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Sub-slide label badge */}
                  {idx === frameIdx && (
                    <div className="carousel-slide-badge" style={{ background: frame.accent }}>
                      {slide?.label}
                    </div>
                  )}
                </div>

                {/* Text area */}
                <div className="carousel-card-body">
                  <div className="carousel-card-accent" style={{ color: frame.accent }}>
                    {frame.subtitle}
                  </div>
                  <h3 className="carousel-card-title">{frame.title}</h3>
                  {idx === frameIdx && (
                    <p className="carousel-card-desc">{slide?.description}</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Navigation Arrows ── */}
      <button className="carousel-nav-btn carousel-nav-prev" onClick={() => goTo("prev")} aria-label="Previous">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className="carousel-nav-btn carousel-nav-next" onClick={() => goTo("next")} aria-label="Next">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>

      {/* ── Sub-slide dots (Level 2) ── */}
      {activeFrame && (
        <div className="carousel-sub-dots">
          {activeFrame.slides.map((s, i) => (
            <button
              key={s.id}
              className={`carousel-sub-dot ${i === activeSlide ? "active" : ""}`}
              style={{ "--dot-accent": activeFrame.accent }}
              onClick={() => onSlideChange(i)}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}

      {/* ── Frame indicator dots (Level 1) ── */}
      <div className="carousel-frame-dots">
        {museumFrames.map((f, i) => (
          <button
            key={f.id}
            className={`carousel-frame-dot ${i === frameIdx ? "active" : ""}`}
            style={{ background: i === frameIdx ? f.accent : "rgba(255,255,255,0.2)" }}
            onClick={() => {
              onFrameChange(f);
              onSlideChange(0);
            }}
            aria-label={f.title}
          />
        ))}
      </div>
    </div>
  );
}
