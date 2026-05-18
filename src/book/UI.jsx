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

      {/* ── Decorative Vietnamese elements (emoji) ── */}
      <div className="fixed z-[5] pointer-events-none mag-decor mag-decor-tea" style={{ bottom: '100px', left: '28px', fontSize: '28px', opacity: 0.4, filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.15))' }}>
        🍵
      </div>
      <div className="fixed z-[5] pointer-events-none mag-decor mag-decor-chair" style={{ bottom: '88px', right: '28px', fontSize: '24px', opacity: 0.35, filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.12))' }}>
        🪴
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
