export default function CoSoLyThuyet() {
  const f1 = "'Playfair Display', serif";
  const f2 = "'Outfit', sans-serif";

  const characteristics = [
    { t: 'Tất yếu khách quan', i: '01' }, { t: 'Tự tiêu vong', i: '02' },
    { t: 'Quá trình lâu dài', i: '03' }, { t: 'Tự giác tuân thủ', i: '04' },
  ];

  return (
    <section id="co-so-ly-thuyet" className="relative w-full bg-[#E5E0D8] px-4 py-32 md:py-40 overflow-hidden">
      {/* Header */}
      <div className="w-full max-w-7xl mx-auto mb-24 md:mb-32">
        <div className="gsap-reveal flex items-center gap-3 mb-6">
          <div className="h-[1px] w-12 bg-[#3D3529]/15 gsap-line-draw" />
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#7A6040]" style={{ fontFamily: f2 }}>Phần 2.3 & 3</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[#3D3529] mb-8" style={{ fontFamily: f1 }}>
          <span className="gsap-text-reveal block">Cơ Sở</span>
          <span className="gsap-text-reveal block italic font-light text-[#7A6040]">Lý Thuyết</span>
        </h2>
        <p className="gsap-reveal text-lg text-[#7A6040] max-w-2xl leading-relaxed font-light" style={{ fontFamily: f2 }}>
          Sự tiêu vong của Nhà nước không phải là một ý muốn chủ quan, mà là một tất yếu lịch sử được các nhà kinh điển Mác-Lênin chỉ rõ dựa trên những quy luật khách quan.
        </p>
      </div>

      {/* 2 Levels — Scale-in cards */}
      <div className="w-full max-w-7xl mx-auto mb-32">
        <div className="gsap-reveal flex items-center gap-4 mb-16">
          <span className="text-sm tracking-[0.25em] text-[#7A6040]/60 uppercase font-semibold" style={{ fontFamily: f2 }}>Các Nhà Tư Tưởng</span>
          <div className="h-[1px] flex-1 bg-[#3D3529]/10 gsap-line-draw" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Mác & Ăngghen */}
          <div className="gsap-slide-left card-tilt group">
            <div className="h-full p-8 md:p-10 bg-white/50 rounded-[20px] border border-[#3D3529]/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(61,53,41,0.08)]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#7A6040]/50 mb-6 block font-semibold" style={{ fontFamily: f2 }}>Tư tưởng nền tảng</span>
              <h3 className="text-3xl font-bold text-[#3D3529] mb-3" style={{ fontFamily: f1 }}>C. Mác & Ph. Ăngghen</h3>
              <span className="text-[#C5A028] text-sm font-medium mb-6 block italic" style={{ fontFamily: f1 }}>Xóa bỏ tư hữu</span>
              <p className="text-[#7A6040] text-base leading-relaxed font-light mb-8" style={{ fontFamily: f2 }}>
                Xóa bỏ tư hữu về tư liệu sản xuất là điều kiện tiên quyết. Khi nguồn gốc của sự phân chia giai cấp bị xóa bỏ, bộ máy áp bức bóc lột cũng trở nên thừa thãi.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Tư hữu', 'Đấu tranh giai cấp', 'Tất yếu', 'Vật chất'].map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs text-[#7A6040] bg-[#EDE8E1] rounded-full border border-[#3D3529]/5" style={{ fontFamily: f2 }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Lênin */}
          <div className="gsap-slide-right card-tilt group">
            <div className="h-full p-8 md:p-10 bg-[#3D3529] rounded-[20px] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(61,53,41,0.2)]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A028]/80 mb-6 block font-semibold" style={{ fontFamily: f2 }}>Sự phát triển thực tiễn</span>
              <h3 className="text-3xl font-bold text-[#EDE8E1] mb-3" style={{ fontFamily: f1 }}>V.I. Lênin</h3>
              <span className="text-[#C5A028] text-sm font-medium mb-6 block italic" style={{ fontFamily: f1 }}>Nhà nước chuyên chính vô sản</span>
              <p className="text-[#EDE8E1]/70 text-base leading-relaxed font-light mb-8" style={{ fontFamily: f2 }}>
                Lênin phát triển học thuyết bằng khái niệm "nửa nhà nước" – không còn là bộ máy đàn áp của thiểu số với đa số, mà là công cụ của đa số để thủ tiêu mọi giai cấp.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Bước quá độ', 'Nửa nhà nước', 'Đa số', 'Tiêu vong'].map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs text-[#C5A028] bg-[#C5A028]/10 rounded-full border border-[#C5A028]/20">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Characteristics — Domino stagger effect */}
      <div className="w-full max-w-7xl mx-auto mb-32">
        <div className="gsap-reveal flex items-center justify-center gap-4 mb-16">
          <div className="h-[1px] w-12 bg-[#3D3529]/15 gsap-line-draw" />
          <span className="text-sm tracking-[0.25em] text-[#7A6040]/60 uppercase font-semibold" style={{ fontFamily: f2 }}>Quy Luật Tiêu Vong</span>
          <div className="h-[1px] w-12 bg-[#3D3529]/15 gsap-line-draw" />
        </div>
        <div className="gsap-stagger-parent grid grid-cols-2 md:grid-cols-4 gap-4">
          {characteristics.map((item) => (
            <div key={item.t} className="gsap-stagger-child card-tilt flex flex-col items-center justify-center p-6 bg-white/50 rounded-[16px] border border-[#3D3529]/5 hover:bg-white hover:shadow-sm transition-all duration-300 group">
              <span className="text-lg font-light text-[#C5A028] mb-2" style={{ fontFamily: f1 }}>{item.i}</span>
              <span className="text-[#3D3529] text-sm font-medium text-center" style={{ fontFamily: f2 }}>{item.t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Class Nature — Bento entrance */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="gsap-reveal flex items-center gap-4 mb-16">
          <span className="text-sm tracking-[0.25em] text-[#7A6040]/60 uppercase font-semibold" style={{ fontFamily: f2 }}>Bản Chất Bước Quá Độ</span>
          <div className="h-[1px] flex-1 bg-[#3D3529]/10 gsap-line-draw" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <div className="gsap-slide-left md:col-span-7 card-tilt">
            <div className="h-full p-8 md:p-10 bg-white/50 rounded-[20px] border border-[#3D3529]/5">
              <h3 className="text-3xl font-bold text-[#3D3529] mb-6" style={{ fontFamily: f1 }}>Nhà nước kiểu mới</h3>
              <p className="text-[#7A6040] text-base leading-relaxed font-light mb-8" style={{ fontFamily: f2 }}>
                Giai cấp vô sản nắm quyền không phải để duy trì sự áp bức, mà để tạo ra những điều kiện vật chất và tinh thần nhằm xóa bỏ hoàn toàn sự phân chia giai cấp trong xã hội.
              </p>
              <div className="pl-6 border-l-2 border-[#C5A028]">
                <p className="gsap-quote-highlight text-[#3D3529]/90 italic font-medium" style={{ 
                  fontFamily: f1,
                  backgroundImage: 'linear-gradient(to right, rgba(197,160,40,0.12), rgba(197,160,40,0.12))',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 100%',
                  backgroundPosition: '0 0',
                  padding: '0.2em 0',
                }}>
                  "Nhà nước không bị thủ tiêu, nó tự tiêu vong." — Ph. Ăngghen
                </p>
              </div>
            </div>
          </div>
          <div className="gsap-slide-right md:col-span-5 card-tilt">
            <div className="h-full p-8 md:p-10 bg-[#C5A028] rounded-[20px]">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ fontFamily: f1 }}>Quá trình tự nhiên</h3>
              <p className="text-white/90 text-base leading-relaxed font-light" style={{ fontFamily: f2 }}>
                Khi thói quen tuân thủ các quy tắc sống chung trở thành bản năng, khi của cải vật chất tuôn trào dồi dào, bộ máy cưỡng chế đặc biệt sẽ tự động "đi vào viện bảo tàng đồ cổ".
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
