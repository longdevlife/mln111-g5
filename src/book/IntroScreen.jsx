import { useState } from "react";

/* ── SVG Decorations ── */
const TeaCupSVG = ({ className = "" }) => (
  <svg className={className} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Glass */}
    <rect x="16" y="20" width="24" height="32" rx="2" fill="#E8F4E8" stroke="#8B7355" strokeWidth="1.5"/>
    {/* Tea color */}
    <rect x="17" y="24" width="22" height="27" rx="1" fill="#C9A86C" opacity="0.6"/>
    {/* Ice cubes */}
    <rect x="20" y="26" width="7" height="6" rx="1" fill="white" opacity="0.7"/>
    <rect x="29" y="30" width="6" height="5" rx="1" fill="white" opacity="0.5"/>
    <rect x="22" y="35" width="5" height="5" rx="1" fill="white" opacity="0.6"/>
    {/* Straw */}
    <line x1="32" y1="14" x2="28" y2="40" stroke="#C5272D" strokeWidth="2" strokeLinecap="round"/>
    {/* Handle area - condensation drops */}
    <circle cx="22" cy="48" r="1" fill="#8B7355" opacity="0.3"/>
    <circle cx="34" cy="44" r="0.8" fill="#8B7355" opacity="0.2"/>
  </svg>
);

const PlasticChairSVG = ({ className = "" }) => (
  <svg className={className} width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Seat */}
    <path d="M10 24 H46 L44 32 H12 Z" fill="#2E8B57" stroke="#1a5c38" strokeWidth="1"/>
    {/* Back rest */}
    <path d="M12 24 L14 8 H42 L44 24" fill="#2E8B57" stroke="#1a5c38" strokeWidth="1"/>
    {/* Back rest holes */}
    <ellipse cx="28" cy="14" rx="8" ry="3" fill="#1a5c38" opacity="0.3"/>
    {/* Legs */}
    <line x1="14" y1="32" x2="12" y2="50" stroke="#1a5c38" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="42" y1="32" x2="44" y2="50" stroke="#1a5c38" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="16" y1="32" x2="15" y2="48" stroke="#1a5c38" strokeWidth="2" strokeLinecap="round"/>
    <line x1="40" y1="32" x2="41" y2="48" stroke="#1a5c38" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const SmokeSVG = ({ className = "" }) => (
  <svg className={className} width="30" height="50" viewBox="0 0 30 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="mag-smoke mag-smoke-1" d="M15 45 Q12 35 16 28 Q20 20 14 12 Q10 5 15 0" stroke="#8B7355" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.3"/>
    <path className="mag-smoke mag-smoke-2" d="M18 44 Q22 36 17 30 Q12 24 18 16 Q22 10 17 4" stroke="#8B7355" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.2"/>
  </svg>
);

const PottedPlantSVG = ({ className = "" }) => (
  <svg className={className} width="48" height="60" viewBox="0 0 48 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Pot */}
    <path d="M14 40 L12 56 H36 L34 40 Z" fill="#C5272D" opacity="0.7" stroke="#8B4513" strokeWidth="1"/>
    <rect x="11" y="38" width="26" height="4" rx="1" fill="#C5272D" opacity="0.8"/>
    {/* Stems & Leaves */}
    <path d="M24 38 Q24 28 20 20 Q16 14 22 8" stroke="#2E8B57" strokeWidth="1.5" fill="none"/>
    <path d="M24 38 Q26 30 30 24 Q34 18 28 12" stroke="#2E8B57" strokeWidth="1.5" fill="none"/>
    <ellipse cx="20" cy="18" rx="6" ry="3" fill="#2E8B57" opacity="0.7" transform="rotate(-30 20 18)"/>
    <ellipse cx="30" cy="22" rx="5" ry="2.5" fill="#3CB371" opacity="0.6" transform="rotate(25 30 22)"/>
    <ellipse cx="22" cy="10" rx="5" ry="2.5" fill="#2E8B57" opacity="0.5" transform="rotate(-15 22 10)"/>
    <ellipse cx="28" cy="14" rx="4" ry="2" fill="#3CB371" opacity="0.5" transform="rotate(10 28 14)"/>
  </svg>
);

export const IntroScreen = ({ onEnter }) => {
  const [isHiding, setIsHiding] = useState(false);

  const handleEnter = () => {
    setIsHiding(true);
    setTimeout(() => {
      onEnter();
    }, 1000);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        isHiding ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
      style={{ background: '#F5F0E8' }}
    >
      <div className="noise-overlay" />

      {/* Decorative elements */}
      <div className="absolute bottom-8 left-8 opacity-50 animate-[fadeIn_2s_ease_2s_forwards]" style={{ opacity: 0 }}>
        <TeaCupSVG />
      </div>
      <div className="absolute bottom-6 left-24 opacity-40 animate-[fadeIn_2s_ease_2.3s_forwards]" style={{ opacity: 0 }}>
        <PlasticChairSVG />
      </div>
      <div className="absolute bottom-12 right-10 opacity-40 animate-[fadeIn_2s_ease_2.5s_forwards]" style={{ opacity: 0 }}>
        <PottedPlantSVG />
      </div>
      <div className="absolute top-16 right-16 opacity-30 animate-[fadeIn_2s_ease_2.8s_forwards]" style={{ opacity: 0 }}>
        <SmokeSVG />
      </div>

      {/* Magazine Cover Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-6">
        
        {/* Issue info */}
        <div 
          className="flex items-center gap-3 mb-4 opacity-0 animate-[fadeIn_1s_ease_0.3s_forwards]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: '#8B7355' }}>Kỳ 1</span>
          <span style={{ color: '#C5272D', fontSize: '8px' }}>●</span>
          <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: '#8B7355' }}>Tháng 5/2026</span>
        </div>

        {/* Masthead — Magazine title */}
        <h1
          className="text-4xl md:text-6xl font-bold mb-2 opacity-0 animate-[slideInFromTop_1s_ease_0.5s_forwards]"
          style={{ fontFamily: "'Playfair Display', serif", color: '#C5272D', lineHeight: 1.1, letterSpacing: '0.05em' }}
        >
          TẠP CHÍ
        </h1>
        <h2
          className="text-5xl md:text-7xl font-bold mb-2 opacity-0 animate-[slideInFromTop_1s_ease_0.7s_forwards]"
          style={{ fontFamily: "'Playfair Display', serif", color: '#1A1A1A', lineHeight: 1.1 }}
        >
          PHÁP QUYỀN
        </h2>

        {/* Decorative line */}
        <div className="flex items-center gap-3 my-5 opacity-0 animate-[fadeIn_1s_ease_1s_forwards]">
          <div className="w-16 h-[1px]" style={{ background: '#C5272D' }} />
          <span style={{ color: '#C5272D', fontSize: '10px' }}>✦</span>
          <div className="w-16 h-[1px]" style={{ background: '#C5272D' }} />
        </div>

        {/* Subtitle */}
        <p
          className="tracking-[0.15em] uppercase text-xs mb-3 opacity-0 animate-[fadeIn_1s_ease_1.1s_forwards]"
          style={{ fontFamily: "'Inter', sans-serif", color: '#8B7355' }}
        >
          Tư tưởng Hồ Chí Minh về Nhà nước pháp quyền
        </p>

        {/* Tagline */}
        <p
          className="text-sm md:text-base max-w-md mx-auto leading-relaxed mb-10 opacity-0 animate-[fadeIn_1s_ease_1.3s_forwards]"
          style={{ fontFamily: "'EB Garamond', serif", color: '#5C5044', fontStyle: 'italic' }}
        >
          Hợp hiến, hợp pháp — Thượng tôn pháp luật — Đậm tính nhân nghĩa
        </p>

        {/* CTA Button */}
        <button
          onClick={handleEnter}
          className="group relative overflow-hidden rounded-full text-sm tracking-[0.1em] uppercase transition-transform hover:scale-105 active:scale-95 opacity-0 animate-[fadeIn_1s_ease_1.6s_forwards]"
          style={{ 
            fontFamily: "'Inter', sans-serif", 
            background: '#1A1A1A', 
            color: '#FEFCF6',
            padding: '14px 36px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.12)' 
          }}
        >
          <span className="relative z-10 flex items-center gap-3">
            Mở tạp chí
            <span style={{ fontSize: '16px' }}>☕</span>
          </span>
          <div className="absolute inset-0 bg-[#C5272D] translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0" />
        </button>
      </div>

      {/* Bottom hint */}
      <div className="absolute bottom-10 text-center opacity-0 animate-[fadeIn_1s_ease_2.2s_forwards]">
        <p className="text-[10px] uppercase tracking-widest" style={{ fontFamily: "'Inter', sans-serif", color: '#8B7355', opacity: 0.5 }}>
          Ngồi ghế nhựa · Uống trà đá · Đọc tạp chí
        </p>
      </div>
    </div>
  );
};
