export default function TonTaiXaHoi() {
  const elements = [
    { n: '01', t: 'Điều Kiện Tự Nhiên', s: 'Toàn bộ những điều kiện vật chất tự nhiên tạo thành điều kiện khách quan cho sự sinh tồn. Giới tự nhiên được ví như "thân thể vô cơ" của con người.' },
    { n: '02', t: 'Điều Kiện Dân Số', s: 'Bao gồm số lượng, cơ cấu, mật độ phân bố. Ví dụ: Cấu trúc cư dân lúa nước Việt Nam tạo nên tổ chức làng xã ổn định.' },
    { n: '03', t: 'Phương Thức Sản Xuất', s: 'Yếu tố cơ bản nhất quy định sự sinh tồn. Bao gồm mặt vật chất – kĩ thuật và mặt kinh tế - xã hội.' },
  ];
  const practices = [
    { n: '01', t: 'Dịch Chuyển Quản Trị', s: 'Chính phủ số chuyển dịch từ cai trị hành chính sang nền tảng hỗ trợ.' },
    { n: '02', t: 'Năng Lực Tự Quản', s: 'Các cộng đồng vận hành dựa trên đồng thuận, ý thức tự giác.' },
    { n: '03', t: 'Giới Hạn Tất Yếu', s: 'Nhà nước vẫn đóng vai trò trọng tài bảo vệ trật tự trước nguy cơ an ninh toàn cầu.' }
  ];
  const solutions = [
    { n: 'I', t: 'Nhận Thức', s: 'Nhà nước mang tính lịch sử, không vĩnh cửu.' },
    { n: 'II', t: 'Phục Vụ', s: 'Hướng quản lý tới hỗ trợ và kiến tạo xã hội.' },
    { n: 'III', t: 'Tự Quản', s: 'Khuyến khích hội đoàn tự giải quyết nội bộ.' },
    { n: 'IV', t: 'Tự Giác', s: 'Biến tuân thủ quy tắc thành nhu cầu tự nhiên.' },
  ];

  const f1 = "'Playfair Display', serif";
  const f2 = "'Outfit', sans-serif";

  return (
    <section id="ton-tai" className="relative w-full bg-[#EDE8E1] px-4 py-32 md:py-40 overflow-hidden">
      {/* Header with text reveal */}
      <div className="w-full max-w-7xl mx-auto mb-24 md:mb-32">
        <div className="gsap-reveal flex items-center gap-3 mb-6">
          <div className="h-[1px] w-12 bg-[#3D3529]/15 gsap-line-draw" />
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#7A6040]" style={{ fontFamily: f2 }}>Phần 3.4.1</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[#3D3529] mb-8" style={{ fontFamily: f1 }}>
          <span className="gsap-text-reveal block">Tồn Tại</span>
          <span className="gsap-text-reveal block italic font-light text-[#7A6040]">Xã Hội</span>
        </h2>
        <p className="gsap-reveal text-lg text-[#7A6040] max-w-2xl leading-relaxed font-light" style={{ fontFamily: f2 }}>
          Khái niệm dùng để chỉ toàn bộ những sinh hoạt vật chất và điều kiện sinh hoạt vật chất của xã hội trong những giai đoạn lịch sử nhất định.
        </p>
      </div>

      {/* 3 Core Elements — Progressive Stagger */}
      <div className="w-full max-w-7xl mx-auto gsap-stagger-parent grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-32">
        {elements.map((item) => (
          <div key={item.n} className="gsap-stagger-child card-tilt group">
            <div className="h-full p-8 md:p-10 bg-white/50 rounded-[20px] border border-[#3D3529]/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(61,53,41,0.08)]">
              <span className="gsap-counter text-4xl font-light text-[#C5A028] mb-6 block" style={{ fontFamily: f1 }} data-target={parseInt(item.n)}>{item.n}</span>
              <h4 className="text-xl font-bold text-[#3D3529] mb-4" style={{ fontFamily: f1 }}>{item.t}</h4>
              <p className="text-[#7A6040] text-base leading-relaxed font-light" style={{ fontFamily: f2 }}>{item.s}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Practical Application — Stagger from different directions */}
      <div className="w-full max-w-7xl mx-auto mb-32">
        <div className="gsap-reveal flex items-center justify-center gap-4 mb-16">
          <div className="h-[1px] w-12 bg-[#3D3529]/15 gsap-line-draw" />
          <span className="text-sm tracking-[0.25em] text-[#7A6040]/60 uppercase font-semibold" style={{ fontFamily: f2 }}>Thực Tiễn Vận Dụng</span>
          <div className="h-[1px] w-12 bg-[#3D3529]/15 gsap-line-draw" />
        </div>
        <div className="gsap-stagger-parent grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {practices.map((item) => (
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

      {/* Bottom Summary */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="gsap-scale-in bg-white/50 rounded-[20px] border border-[#3D3529]/5 p-10 md:p-16">
          <h3 className="gsap-reveal text-center text-sm font-semibold tracking-[0.2em] uppercase text-[#7A6040]/50 mb-16" style={{ fontFamily: f2 }}>Giải Pháp & Bài Học</h3>
          <div className="gsap-stagger-parent grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {solutions.map((item) => (
              <div key={item.t} className="gsap-stagger-child flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-[#EDE8E1] flex items-center justify-center mb-6 border border-[#3D3529]/10 transition-all duration-500 group-hover:bg-[#C5A028] group-hover:border-[#C5A028]">
                  <span className="text-[#C5A028] text-lg font-bold group-hover:text-white transition-colors duration-500" style={{ fontFamily: f1 }}>{item.n}</span>
                </div>
                <h4 className="text-lg font-bold text-[#3D3529] mb-3" style={{ fontFamily: f1 }}>{item.t}</h4>
                <p className="text-[#7A6040] text-sm font-light leading-relaxed" style={{ fontFamily: f2 }}>{item.s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
