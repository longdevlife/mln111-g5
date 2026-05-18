import { atom, useAtom } from "jotai";
import { useEffect } from "react";

// ── State atoms ──
export const pageAtom = atom(0);
export const viewModeAtom = atom("showcase"); // "showcase" | "reading"

export const pages = [
  { front: "Bia dau", back: "trang1" },
  { front: "trang2", back: "trang3" },
  { front: "trang4", back: "trang5" },
  { front: "trang6", back: "trang7" },
  { front: "trang8", back: "trang9" },
  { front: "trang10", back: "trang11" },
  { front: "trang12", back: "trang13" },
  { front: "trang14", back: "trang15" },
  { front: "trang16", back: "Bia dau" }, // Bìa sau - tạm dùng Bia dau, sẽ thay sau
];

const pageLabels = [
  "Bìa",
  "Trang 2",
  "Trang 3",
  "Trang 4",
  "Trang 5",
  "Trang 6",
  "Trang 7",
  "Trang 8",
  "Trang 9",
  "Bìa sau",
];

const pageTitles = [
  null,
  "Trang 2",
  "Trang 3",
  "Trang 4",
  "Trang 5",
  "Trang 6",
  "Trang 7",
  "Trang 8",
  "Trang 9",
  null,
];

/* ── SVG Icons ── */
const MagazineIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>
);

const CubeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

/* ── Small decorative SVGs ── */
const TeaCupMini = () => (
  <svg className="mag-decor mag-decor-tea" width="40" height="40" viewBox="0 0 64 64" fill="none">
    <rect x="16" y="20" width="24" height="32" rx="2" fill="#E8F4E8" stroke="#8B7355" strokeWidth="1.2" opacity="0.5"/>
    <rect x="17" y="24" width="22" height="27" rx="1" fill="#C9A86C" opacity="0.3"/>
    <rect x="20" y="26" width="7" height="6" rx="1" fill="white" opacity="0.4"/>
    <rect x="29" y="30" width="6" height="5" rx="1" fill="white" opacity="0.3"/>
    <line x1="32" y1="14" x2="28" y2="40" stroke="#C5272D" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

const ChairMini = () => (
  <svg className="mag-decor mag-decor-chair" width="36" height="36" viewBox="0 0 56 56" fill="none">
    <path d="M10 24 H46 L44 32 H12 Z" fill="#2E8B57" opacity="0.4"/>
    <path d="M12 24 L14 8 H42 L44 24" fill="#2E8B57" opacity="0.35"/>
    <line x1="14" y1="32" x2="12" y2="50" stroke="#1a5c38" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
    <line x1="42" y1="32" x2="44" y2="50" stroke="#1a5c38" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
  </svg>
);

const SmokeMini = () => (
  <svg className="mag-decor mag-decor-smoke" width="20" height="36" viewBox="0 0 30 50" fill="none">
    <path className="mag-smoke mag-smoke-1" d="M15 45 Q12 35 16 28 Q20 20 14 12 Q10 5 15 0" stroke="#FAFAF8" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.15"/>
    <path className="mag-smoke mag-smoke-2" d="M18 44 Q22 36 17 30 Q12 24 18 16 Q22 10 17 4" stroke="#FAFAF8" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.1"/>
  </svg>
);

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);
  const [viewMode, setViewMode] = useAtom(viewModeAtom);

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play().catch(() => {});
  }, [page]);

  const totalPages = pages.length + 1; // includes "bia sau"
  const progress = ((page) / (totalPages - 1)) * 100;
  const currentTitle = pageTitles[page] || null;

  return (
    <>
      {/* Noise + Vignette overlays */}
      <div className="noise-overlay" />
      <div className="vignette-overlay" />

      {/* ── Decorative Vietnamese elements ── */}
      <div className="fixed z-[5] pointer-events-none" style={{ bottom: '90px', left: '24px' }}>
        <TeaCupMini />
      </div>
      <div className="fixed z-[5] pointer-events-none" style={{ bottom: '80px', left: '72px' }}>
        <ChairMini />
      </div>
      <div className="fixed z-[5] pointer-events-none" style={{ top: '80px', right: '24px' }}>
        <SmokeMini />
      </div>

      <main className="pointer-events-none select-none z-10 fixed inset-0 flex justify-between flex-col">
        {/* ── Header — Magazine Masthead ── */}
        <div className="pointer-events-auto px-8 pt-5">
          {/* Top rule line */}
          <div className="w-full h-[1px] mb-3" style={{ background: 'rgba(250,250,248,0.1)' }} />
          
          <div className="flex items-center justify-between">
            {/* Left: Masthead */}
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <h1
                  className="text-sm font-bold tracking-[0.2em] uppercase"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#C5272D' }}
                >
                  Tạp Chí Pháp Quyền
                </h1>
                <p className="tracking-[0.15em] uppercase" style={{ color: '#8B7355', fontSize: '9px', fontFamily: "'Inter', sans-serif" }}>
                  Nhà nước pháp quyền nhân nghĩa
                </p>
              </div>
            </div>

            {/* Center: Page info */}
            <div className="flex items-center gap-4">
              {currentTitle && (
                <div className="page-eyebrow hidden md:block">
                  <span className="accent">{String(page).padStart(2, '0')}</span>
                  <span style={{ margin: '0 6px', opacity: 0.3 }}>|</span>
                  {currentTitle}
                </div>
              )}
            </div>

            {/* Right: Issue info */}
            <div className="text-right hidden sm:flex items-center gap-2">
              <span className="text-[9px] tracking-[0.2em] uppercase" style={{ color: '#8B7355', fontFamily: "'Inter', sans-serif" }}>
                Kỳ 1
              </span>
              <span style={{ color: '#C5272D', fontSize: '6px' }}>●</span>
              <span className="text-[9px] tracking-[0.2em] uppercase" style={{ color: '#8B7355', fontFamily: "'Inter', sans-serif" }}>
                05/2026
              </span>
            </div>
          </div>

          {/* Bottom rule line */}
          <div className="w-full h-[1px] mt-3" style={{ background: 'rgba(250,250,248,0.06)' }} />
        </div>

        {/* ── Side Navigation Arrows ── */}
        <div className="pointer-events-auto flex items-center justify-between px-4 absolute top-1/2 left-0 right-0 -translate-y-1/2">
          <button
            className="view-toggle"
            style={{
              padding: '10px',
              opacity: page > 0 ? 1 : 0.3,
              pointerEvents: page > 0 ? 'auto' : 'none',
            }}
            onClick={() => setPage(Math.max(0, page - 1))}
          >
            <ChevronLeft />
          </button>
          <button
            className="view-toggle"
            style={{
              padding: '10px',
              opacity: page < totalPages - 1 ? 1 : 0.3,
              pointerEvents: page < totalPages - 1 ? 'auto' : 'none',
            }}
            onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
          >
            <ChevronRight />
          </button>
        </div>

        {/* ── Bottom: Floating Nav Island ── */}
        <div className="w-full pointer-events-auto flex justify-center pb-6">
          <div className="book-nav rounded-full px-2 py-2 flex flex-col items-center gap-0" style={{ maxWidth: '90vw' }}>

            {/* Nav buttons */}
            <div className="flex items-center gap-1 overflow-x-auto px-1">
              {[...pages].map((_, index) => (
                <button
                  key={index}
                  className={`book-nav-btn shrink-0 ${index === page ? 'active' : ''}`}
                  onClick={() => setPage(index)}
                >
                  {pageLabels[index]}
                </button>
              ))}
              <button
                className={`book-nav-btn shrink-0 ${page === pages.length ? 'active' : ''}`}
                onClick={() => setPage(pages.length)}
              >
                {pageLabels[pages.length]}
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* ── View Mode Toggle (fixed bottom-right) ── */}
      <button
        className={`view-toggle fixed z-20 ${viewMode === 'reading' ? 'active' : ''}`}
        style={{ bottom: '100px', right: '32px' }}
        onClick={() => setViewMode(viewMode === 'showcase' ? 'reading' : 'showcase')}
      >
        {viewMode === 'showcase' ? <MagazineIcon /> : <CubeIcon />}
        <span>{viewMode === 'showcase' ? 'Đọc tạp chí' : '3D View'}</span>
      </button>
    </>
  );
};
