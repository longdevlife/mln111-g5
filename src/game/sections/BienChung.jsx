export default function BienChung() {
  const f1 = "'Playfair Display', serif";
  const f2 = "'Outfit', sans-serif";

  const features = [
    { n: '01', t: 'Tính Lạc Hậu', s: 'Ý thức thường lạc hậu hơn tồn tại do sức mạnh thói quen và truyền thống.' },
    { n: '02', t: 'Vượt Trước Tồn Tại', s: 'Tư tưởng có thể dự báo tương lai, chỉ đạo thực tiễn (Mác dự báo sự sụp đổ CNTB).' },
    { n: '03', t: 'Tính Kế Thừa', s: 'Các quan điểm lý luận kế thừa tài liệu của thời đại trước. Không tri thức nào từ hư vô.' },
    { n: '04', t: 'Tương Tác Nội Tại', s: 'Các hình thái ý thức tác động qua lại. Ví dụ: Tôn giáo chi phối triết học thời Trung Cổ.' },
    { n: '05', t: 'Tác Động Trở Lại', s: 'Ý thức tiến bộ thúc đẩy xã hội phát triển, ý thức lạc hậu kìm hãm nó.' },
  ];

  const stats = [
    { num: '3', label: 'Yếu tố cơ bản của Tồn tại XH' },
    { num: '2', label: 'Cấp độ của Ý thức XH' },
    { num: '7', label: 'Hình thái Ý thức XH' },
    { num: '5', label: 'Biểu hiện độc lập tương đối' },
  ];

  return (
    <section id="bien-chung" className="relative w-full bg-[#EDE8E1] px-4 py-32 md:py-40 overflow-hidden">
      {/* Header */}
      <div className="w-full max-w-7xl mx-auto mb-24 md:mb-32">
        <div className="gsap-reveal flex items-center gap-3 mb-6">
          <div className="h-[1px] w-12 bg-[#3D3529]/15 gsap-line-draw" />
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#7A6040]" style={{ fontFamily: f2 }}>Phần 3.4.3</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[#3D3529] mb-8" style={{ fontFamily: f1 }}>
          <span className="gsap-text-reveal block">Quan Hệ</span>
          <span className="gsap-text-reveal block italic font-light text-[#7A6040]">Biện Chứng</span>
        </h2>
        <p className="gsap-reveal text-lg text-[#7A6040] max-w-2xl leading-relaxed font-light" style={{ fontFamily: f2 }}>
          Mối quan hệ biện chứng giữa Tồn tại xã hội và Ý thức xã hội – một sự quyết định mang tính nền tảng kết hợp với khả năng tác động qua lại.
        </p>
      </div>

      {/* Bento Grid — Entrance from opposite sides */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-32 auto-rows-fr">
        {/* Card 1 — Large, slide from left */}
        <div className="gsap-slide-left md:col-span-2 card-tilt group">
          <div className="h-full p-8 md:p-12 bg-white/50 rounded-[20px] border border-[#3D3529]/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(61,53,41,0.08)]">
            <h3 className="text-3xl font-bold text-[#3D3529] mb-6" style={{ fontFamily: f1 }}>Nền Tảng Quyết Định</h3>
            <p className="text-[#7A6040] text-base md:text-lg leading-relaxed font-light mb-8" style={{ fontFamily: f2 }}>
              Ý thức xã hội <strong>ra đời từ</strong> tồn tại xã hội và <strong>phản ánh</strong> nó. Tồn tại xã hội quyết định nội dung, tính chất, và xu hướng biến đổi của ý thức xã hội.
            </p>
            <div className="gsap-stagger-parent grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="gsap-stagger-child p-5 bg-[#EDE8E1] rounded-[16px]">
                <h4 className="font-bold text-[#3D3529] mb-2" style={{ fontFamily: f1 }}>Phong Kiến</h4>
                <p className="text-[#7A6040] text-sm font-light" style={{ fontFamily: f2 }}>Tư tưởng đẳng cấp, trung quân ái quốc, Nho giáo thống trị.</p>
              </div>
              <div className="gsap-stagger-child p-5 bg-[#EDE8E1] rounded-[16px]">
                <h4 className="font-bold text-[#3D3529] mb-2" style={{ fontFamily: f1 }}>Đổi Mới 1986</h4>
                <p className="text-[#7A6040] text-sm font-light" style={{ fontFamily: f2 }}>Thay đổi tư duy kinh tế từ kế hoạch hóa sang thị trường.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 — Small Dark, slide from right */}
        <div className="gsap-slide-right md:col-span-1 card-tilt group">
          <div className="h-full p-8 md:p-10 bg-[#3D3529] rounded-[20px] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(61,53,41,0.2)]">
            <h3 className="text-2xl md:text-3xl font-bold text-[#EDE8E1] mb-6" style={{ fontFamily: f1 }}>Tính Độc Lập</h3>
            <p className="text-[#EDE8E1]/70 text-base leading-relaxed font-light" style={{ fontFamily: f2 }}>
              Ý thức xã hội không phụ thuộc máy móc vào tồn tại xã hội, mà có đời sống riêng và có khả năng tác động trở lại mạnh mẽ.
            </p>
          </div>
        </div>
      </div>

      {/* 5 Biểu hiện — Progressive stagger */}
      <div className="w-full max-w-7xl mx-auto mb-32">
        <div className="gsap-reveal flex items-center justify-center gap-4 mb-16">
          <div className="h-[1px] w-12 bg-[#3D3529]/15 gsap-line-draw" />
          <span className="text-sm tracking-[0.25em] text-[#7A6040]/60 uppercase font-semibold" style={{ fontFamily: f2 }}>05 Biểu Hiện Cốt Lõi</span>
          <div className="h-[1px] w-12 bg-[#3D3529]/15 gsap-line-draw" />
        </div>
        <div className="gsap-stagger-parent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((item) => (
            <div key={item.n} className="gsap-stagger-child card-tilt group">
              <div className="h-full p-8 border-t border-[#3D3529]/10 transition-colors duration-500 group-hover:border-[#C5A028]">
                <span className="gsap-counter text-4xl font-light text-[#C5A028] mb-6 block" style={{ fontFamily: f1 }} data-target={parseInt(item.n)}>{item.n}.</span>
                <h4 className="text-xl font-bold text-[#3D3529] mb-4" style={{ fontFamily: f1 }}>{item.t}</h4>
                <p className="text-[#7A6040] text-base leading-relaxed font-light" style={{ fontFamily: f2 }}>{item.s}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Summary — Scale-in */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="gsap-scale-in bg-white/50 rounded-[20px] border border-[#3D3529]/5 p-10 md:p-16">
          <h3 className="gsap-reveal text-center text-sm font-semibold tracking-[0.2em] uppercase text-[#7A6040]/50 mb-16" style={{ fontFamily: f2 }}>Tổng Kết Chuỗi Tiết Học</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <div className="gsap-slide-left flex flex-col justify-center">
              <h4 className="text-3xl font-bold text-[#3D3529] mb-6" style={{ fontFamily: f1 }}>Ý Nghĩa Lý Luận & Thực Tiễn</h4>
              <p className="text-[#7A6040] text-base leading-relaxed font-light mb-8" style={{ fontFamily: f2 }}>
                Phép biện chứng chỉ ra: vật chất quyết định, nhưng ý thức tác động ngược lại. Khắc phục Chủ nghĩa duy vật tầm thường và Chủ nghĩa duy tâm.
              </p>
              <div className="space-y-4">
                {['Đổi mới tư duy kinh tế tại Việt Nam.', 'Phát huy bản sắc văn hóa dân tộc.', 'Đấu tranh chống tư tưởng lạc hậu.'].map(text => (
                  <div key={text} className="gsap-reveal flex items-start gap-3 text-[#7A6040] font-light" style={{ fontFamily: f2 }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5A028] mt-2 shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="gsap-stagger-parent grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="gsap-stagger-child bg-[#EDE8E1] p-6 rounded-[16px] flex flex-col items-center justify-center text-center transition-all duration-500 hover:bg-[#3D3529] group">
                  <span className="gsap-counter text-4xl font-bold text-[#C5A028] mb-2 group-hover:text-[#C5A028]" style={{ fontFamily: f1 }} data-target={parseInt(stat.num)}>{stat.num}</span>
                  <span className="text-sm font-medium text-[#7A6040] group-hover:text-[#EDE8E1]/70 transition-colors duration-500" style={{ fontFamily: f2 }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
