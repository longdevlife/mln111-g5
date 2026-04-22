import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import TonTai from './sections/TonTaiXaHoi';
import YThuc from './sections/YThucXaHoi';
import BienChung from './sections/BienChung';
import LeninPresenter from './sections/LeninPresenter';
import useGsapAnimations from '../hooks/useGsapAnimations';
import useScrollReveal from '../hooks/useScrollReveal';

export const GamePage = () => {
  // Use both: GSAP for rich animations, fallback for any remaining .reveal elements
  useGsapAnimations();
  useScrollReveal();

  return (
    <div className="theory-page-container" style={{ width: '100%', minHeight: '100vh', scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <style>{`.theory-page-container::-webkit-scrollbar { display: none; }`}</style>
      
      {/* Lenin Presenter — sticky guide through theory sections */}
      <LeninPresenter />
      
      <Hero />
      <TonTai />
      <YThuc />
      <BienChung />

      <section id="kahoot" className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-[#FDFBF7] px-4 py-24 overflow-hidden">
        
        {/* Ambient Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-tr from-[#C5272D]/5 to-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto">
          
          {/* Eyebrow Tag */}
          <div className="gsap-reveal flex items-center gap-3 mb-8">
            <div className="h-[1px] w-8 bg-[#C5272D]/40" />
            <span className="rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] font-medium bg-[#C5272D]/5 text-[#C5272D] ring-1 ring-[#C5272D]/20">
              Khảo Nghiệm Tương Tác
            </span>
            <div className="h-[1px] w-8 bg-[#C5272D]/40" />
          </div>
          
          {/* Heading Section */}
          <div className="gsap-reveal text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1A1A1A] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Thử Thách <span className="italic font-light text-[#D4AF37]">Kahoot!</span>
            </h2>
            <p className="text-lg md:text-xl text-[#8B8680] max-w-2xl mx-auto leading-relaxed font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
              Trải nghiệm góc nhìn mới về sự tiêu vong của Nhà nước qua lăng kính tương tác. Quét mã QR hoặc nhấn nút tham gia để bắt đầu.
            </p>
          </div>

          {/* Double-Bezel Card Container */}
          <div className="gsap-scale-in group relative">
            {/* Magnetic Outer Shell */}
            <div className="p-2 md:p-3 bg-white/40 backdrop-blur-2xl ring-1 ring-black/5 rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.05)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-2 hover:shadow-[0_48px_80px_-12px_rgba(0,0,0,0.08)]">
              
              {/* Inner Core */}
              <div className="relative overflow-hidden bg-white rounded-[calc(2.5rem-0.5rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,1),inset_0_0_0_1px_rgba(0,0,0,0.02)] p-8 md:p-12 flex flex-col items-center">
                
                {/* Subtle noise texture on inner core */}
                <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

                <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 bg-[#FDFBF7] rounded-[1.5rem] border border-black/5 flex flex-col items-center justify-center mb-10 overflow-hidden group-hover:scale-[1.02] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                   {/* Modern QR Graphic Placeholder */}
                   <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #8B8680 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                   <div className="absolute inset-4 border border-dashed border-[#8B8680]/30 rounded-xl" />
                   <div className="relative z-10 w-16 h-16 bg-white shadow-sm rounded-lg flex items-center justify-center mb-4 ring-1 ring-black/5">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5272D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <rect x="7" y="7" width="3" height="3"></rect>
                        <rect x="14" y="7" width="3" height="3"></rect>
                        <rect x="7" y="14" width="3" height="3"></rect>
                        <rect x="14" y="14" width="3" height="3"></rect>
                      </svg>
                   </div>
                   <p className="relative z-10 text-[#8B8680] text-xs uppercase tracking-[0.2em] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Scan Me
                   </p>
                </div>

                {/* Button-in-Button Architecture */}
                <button className="magnetic-btn group/btn relative flex items-center gap-6 px-2 py-2 pr-8 bg-[#1A1A1A] text-white rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#0A0A0A] active:scale-[0.98] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_32px_-8px_rgba(0,0,0,0.4)]">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/btn:translate-x-1 group-hover/btn:scale-[1.05] group-hover/btn:bg-white/20">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                  <span className="font-semibold tracking-wide text-sm uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Tham gia ngay</span>
                </button>
                
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
