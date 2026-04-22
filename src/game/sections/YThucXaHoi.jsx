export default function YThucXaHoi() {
  const f1 = "'Playfair Display', serif";
  const f2 = "'Outfit', sans-serif";

  const forms = [
    { t: 'Chính trị', i: '01' }, { t: 'Pháp quyền', i: '02' },
    { t: 'Đạo đức', i: '03' }, { t: 'Thẩm mỹ', i: '04' },
    { t: 'Tôn giáo', i: '05' }, { t: 'Khoa học', i: '06' },
    { t: 'Triết học', i: '07' },
  ];

  return (
    <section id="y-thuc" className="relative w-full bg-[#E5E0D8] px-4 py-32 md:py-40 overflow-hidden">
      {/* Header */}
      <div className="w-full max-w-7xl mx-auto mb-24 md:mb-32">
        <div className="gsap-reveal flex items-center gap-3 mb-6">
          <div className="h-[1px] w-12 bg-[#3D3529]/15 gsap-line-draw" />
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#7A6040]" style={{ fontFamily: f2 }}>Phần 3.4.2</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[#3D3529] mb-8" style={{ fontFamily: f1 }}>
          <span className="gsap-text-reveal block">Ý Thức</span>
          <span className="gsap-text-reveal block italic font-light text-[#7A6040]">Xã Hội</span>
        </h2>
        <p className="gsap-reveal text-lg text-[#7A6040] max-w-2xl leading-relaxed font-light" style={{ fontFamily: f2 }}>
          Khái niệm triết học chỉ các mặt, các bộ phận khác nhau của lĩnh vực tinh thần xã hội, nảy sinh từ tồn tại xã hội và phản ánh tồn tại xã hội.
        </p>
      </div>

      {/* 2 Levels — Scale-in cards */}
      <div className="w-full max-w-7xl mx-auto mb-32">
        <div className="gsap-reveal flex items-center gap-4 mb-16">
          <span className="text-sm tracking-[0.25em] text-[#7A6040]/60 uppercase font-semibold" style={{ fontFamily: f2 }}>Trình Độ Phản Ánh</span>
          <div className="h-[1px] flex-1 bg-[#3D3529]/10 gsap-line-draw" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Tâm lý */}
          <div className="gsap-slide-left card-tilt group">
            <div className="h-full p-8 md:p-10 bg-white/50 rounded-[20px] border border-[#3D3529]/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(61,53,41,0.08)]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#7A6040]/50 mb-6 block font-semibold" style={{ fontFamily: f2 }}>Cấp độ 1 — Thấp hơn</span>
              <h3 className="text-3xl font-bold text-[#3D3529] mb-3" style={{ fontFamily: f1 }}>Tâm Lý Xã Hội</h3>
              <span className="text-[#C5A028] text-sm font-medium mb-6 block italic" style={{ fontFamily: f1 }}>Ý thức thông thường</span>
              <p className="text-[#7A6040] text-base leading-relaxed font-light mb-8" style={{ fontFamily: f2 }}>
                Phản ánh <strong>trực tiếp và tự phát</strong> điều kiện sinh hoạt hằng ngày. Mang tính phong phú, lây lan, phản ánh tâm lý dân tộc.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Tình cảm', 'Tâm trạng', 'Phong tục', 'Truyền thống', 'Tự phát'].map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs text-[#7A6040] bg-[#EDE8E1] rounded-full border border-[#3D3529]/5" style={{ fontFamily: f2 }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Hệ tư tưởng */}
          <div className="gsap-slide-right card-tilt group">
            <div className="h-full p-8 md:p-10 bg-[#3D3529] rounded-[20px] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(61,53,41,0.2)]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A028]/80 mb-6 block font-semibold" style={{ fontFamily: f2 }}>Cấp độ 2 — Cao hơn</span>
              <h3 className="text-3xl font-bold text-[#EDE8E1] mb-3" style={{ fontFamily: f1 }}>Hệ Tư Tưởng</h3>
              <span className="text-[#C5A028] text-sm font-medium mb-6 block italic" style={{ fontFamily: f1 }}>Ý thức lý luận</span>
              <p className="text-[#EDE8E1]/70 text-base leading-relaxed font-light mb-8" style={{ fontFamily: f2 }}>
                Giai đoạn phát triển cao, tư tưởng được <strong>khái quát hóa, hệ thống hóa</strong> thành lý thuyết, học thuyết bởi các nhà tư tưởng.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Lý luận', 'Học thuyết', 'Hệ thống hóa', 'Tự giác'].map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs text-[#C5A028] bg-[#C5A028]/10 rounded-full border border-[#C5A028]/20">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7 Forms — Domino stagger effect */}
      <div className="w-full max-w-7xl mx-auto mb-32">
        <div className="gsap-reveal flex items-center justify-center gap-4 mb-16">
          <div className="h-[1px] w-12 bg-[#3D3529]/15 gsap-line-draw" />
          <span className="text-sm tracking-[0.25em] text-[#7A6040]/60 uppercase font-semibold" style={{ fontFamily: f2 }}>07 Hình Thái Ý Thức</span>
          <div className="h-[1px] w-12 bg-[#3D3529]/15 gsap-line-draw" />
        </div>
        <div className="gsap-stagger-parent grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {forms.map((item) => (
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
          <span className="text-sm tracking-[0.25em] text-[#7A6040]/60 uppercase font-semibold" style={{ fontFamily: f2 }}>Tính Giai Cấp</span>
          <div className="h-[1px] flex-1 bg-[#3D3529]/10 gsap-line-draw" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <div className="gsap-slide-left md:col-span-7 card-tilt">
            <div className="h-full p-8 md:p-10 bg-white/50 rounded-[20px] border border-[#3D3529]/5">
              <h3 className="text-3xl font-bold text-[#3D3529] mb-6" style={{ fontFamily: f1 }}>Tư Tưởng Thống Trị</h3>
              <p className="text-[#7A6040] text-base leading-relaxed font-light mb-8" style={{ fontFamily: f2 }}>
                Trong xã hội có giai cấp, tư tưởng thống trị là tư tưởng của giai cấp thống trị – giai cấp nắm phương tiện sản xuất vật chất cũng đồng thời nắm phương tiện sản xuất tinh thần.
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
                  "Những tư tưởng thống trị của một thời đại bao giờ cũng chỉ là những tư tưởng của giai cấp thống trị." — C. Mác & Ph. Ăngghen
                </p>
              </div>
            </div>
          </div>
          <div className="gsap-slide-right md:col-span-5 card-tilt">
            <div className="h-full p-8 md:p-10 bg-[#C5A028] rounded-[20px]">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ fontFamily: f1 }}>Tư Tưởng Bị Trị</h3>
              <p className="text-white/90 text-base leading-relaxed font-light" style={{ fontFamily: f2 }}>
                Thường là sự phản kháng nhằm lật đổ chế độ bóc lột. Giai cấp công nhân xây dựng hệ tư tưởng Mác – Lênin làm vũ khí lý luận sắc bén.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
