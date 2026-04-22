export default function GiaiPhap() {
  const f1 = "'Playfair Display', serif";
  const f2 = "'Outfit', sans-serif";

  const features = [
    { n: '01', t: 'Hoàn thiện thể chế', s: 'Xây dựng nhà nước pháp quyền XHCN vững mạnh, mọi công dân bình đẳng trước pháp luật.' },
    { n: '02', t: 'Mở rộng dân chủ', s: 'Kiên quyết chống quan liêu, tham nhũng; đảm bảo quyền làm chủ thực sự của người dân.' },
    { n: '03', t: 'Chuyển đổi số', s: 'Áp dụng công nghệ vào quản trị quốc gia, tăng cường tính công khai và minh bạch.' },
  ];

  const stats = [
    { num: '3', label: 'Giải pháp cốt lõi' },
    { num: '1', label: 'Mục tiêu tối thượng' },
    { num: '4.0', label: 'Kỷ nguyên chuyển đổi số' },
    { num: '91', label: 'Năm Liên Xô sụp đổ' },
  ];

  return (
    <section id="giai-phap" className="relative w-full bg-[#EDE8E1] px-4 py-32 md:py-40 overflow-hidden">
      {/* Header */}
      <div className="w-full max-w-7xl mx-auto mb-24 md:mb-32">
        <div className="gsap-reveal flex items-center gap-3 mb-6">
          <div className="h-[1px] w-12 bg-[#3D3529]/15 gsap-line-draw" />
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#7A6040]" style={{ fontFamily: f2 }}>Phần 4</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[#3D3529] mb-8" style={{ fontFamily: f1 }}>
          <span className="gsap-text-reveal block">Giải Pháp &</span>
          <span className="gsap-text-reveal block italic font-light text-[#7A6040]">Bài Học</span>
        </h2>
        <p className="gsap-reveal text-lg text-[#7A6040] max-w-2xl leading-relaxed font-light" style={{ fontFamily: f2 }}>
          Quản lý Nhà nước không chỉ là một nhiệm vụ hành chính mà là nghệ thuật duy trì sự phát triển bền vững của xã hội, rút ra từ những bài học lịch sử sâu sắc.
        </p>
      </div>

      {/* Bento Grid — Entrance from opposite sides */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-32 auto-rows-fr">
        {/* Card 1 — Large, slide from left */}
        <div className="gsap-slide-left md:col-span-2 card-tilt group">
          <div className="h-full p-8 md:p-12 bg-white/50 rounded-[20px] border border-[#3D3529]/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(61,53,41,0.08)]">
            <h3 className="text-3xl font-bold text-[#3D3529] mb-6" style={{ fontFamily: f1 }}>Thực tiễn Việt Nam</h3>
            <p className="text-[#7A6040] text-base md:text-lg leading-relaxed font-light mb-8" style={{ fontFamily: f2 }}>
              Việt Nam đang nỗ lực xây dựng <strong>Nhà nước pháp quyền XHCN</strong> của Nhân dân, do Nhân dân, vì Nhân dân. Đây là nền tảng để tiến tới một xã hội lý tưởng.
            </p>
            <div className="gsap-stagger-parent grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="gsap-stagger-child p-5 bg-[#EDE8E1] rounded-[16px]">
                <h4 className="font-bold text-[#3D3529] mb-2" style={{ fontFamily: f1 }}>Luật pháp</h4>
                <p className="text-[#7A6040] text-sm font-light" style={{ fontFamily: f2 }}>Sửa đổi, bổ sung Hiến pháp, luật hóa các cam kết quốc tế.</p>
              </div>
              <div className="gsap-stagger-child p-5 bg-[#EDE8E1] rounded-[16px]">
                <h4 className="font-bold text-[#3D3529] mb-2" style={{ fontFamily: f1 }}>Phục vụ</h4>
                <p className="text-[#7A6040] text-sm font-light" style={{ fontFamily: f2 }}>Cải cách hành chính, lấy sự hài lòng của người dân làm thước đo.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 — Small Dark, slide from right */}
        <div className="gsap-slide-right md:col-span-1 card-tilt group">
          <div className="h-full p-8 md:p-10 bg-[#3D3529] rounded-[20px] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(61,53,41,0.2)]">
            <h3 className="text-2xl md:text-3xl font-bold text-[#EDE8E1] mb-6" style={{ fontFamily: f1 }}>Mục tiêu tối thượng</h3>
            <p className="text-[#EDE8E1]/70 text-base leading-relaxed font-light" style={{ fontFamily: f2 }}>
              Dân giàu, nước mạnh, dân chủ, công bằng, văn minh – tạo tiền đề cho sự "tiêu vong" của chức năng trấn áp bạo lực trong tương lai.
            </p>
          </div>
        </div>
      </div>

      {/* 3 Biểu hiện — Progressive stagger */}
      <div className="w-full max-w-7xl mx-auto mb-32">
        <div className="gsap-reveal flex items-center justify-center gap-4 mb-16">
          <div className="h-[1px] w-12 bg-[#3D3529]/15 gsap-line-draw" />
          <span className="text-sm tracking-[0.25em] text-[#7A6040]/60 uppercase font-semibold" style={{ fontFamily: f2 }}>03 Giải Pháp Trọng Tâm</span>
          <div className="h-[1px] w-12 bg-[#3D3529]/15 gsap-line-draw" />
        </div>
        <div className="gsap-stagger-parent grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
          <h3 className="gsap-reveal text-center text-sm font-semibold tracking-[0.2em] uppercase text-[#7A6040]/50 mb-16" style={{ fontFamily: f2 }}>Bài Học Lịch Sử</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <div className="gsap-slide-left flex flex-col justify-center">
              <h4 className="text-3xl font-bold text-[#3D3529] mb-6" style={{ fontFamily: f1 }}>Sự Sụp Đổ Của Liên Xô</h4>
              <p className="text-[#7A6040] text-base leading-relaxed font-light mb-8" style={{ fontFamily: f2 }}>
                Sự sụp đổ của mô hình Xô Viết không phải là sự phá sản của chủ nghĩa Mác-Lênin, mà là do sự giáo điều, quan liêu, và xa rời quần chúng của bộ máy lãnh đạo.
              </p>
              <div className="space-y-4">
                {['Không được giáo điều, rập khuôn.', 'Lấy sự ủng hộ của nhân dân làm gốc.', 'Phải liên tục đổi mới để thích ứng.'].map(text => (
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
