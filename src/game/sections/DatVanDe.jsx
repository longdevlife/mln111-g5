export default function DatVanDe() {
  const elements = [
    { n: '01', t: 'Tiền đề kinh tế', s: 'Sự phân công lao động và chế độ tư hữu về tư liệu sản xuất làm xã hội phân hóa thành kẻ bóc lột và người bị bóc lột.' },
    { n: '02', t: 'Tiền đề xã hội', s: 'Mâu thuẫn giai cấp đối kháng gay gắt đến mức không thể điều hòa được. Nhà nước ra đời để các giai cấp không tiêu diệt lẫn nhau.' },
    { n: '03', t: 'Sản phẩm lịch sử', s: 'Nhà nước không phải từ bên ngoài áp đặt hay do "hợp đồng xã hội", mà nảy sinh từ chính mâu thuẫn nội tại.' },
  ];
  const practices = [
    { n: '01', t: 'Công cụ thống trị', s: 'Thực chất là bộ máy bạo lực để duy trì trật tự, bảo vệ quyền sở hữu và áp đặt ý chí giai cấp lên toàn xã hội.' },
    { n: '02', t: 'Chức năng xã hội', s: 'Quản lý việc chung và duy trì an ninh, nhưng suy cho cùng các chức năng này vẫn phục vụ lợi ích của giai cấp cầm quyền.' },
    { n: '03', t: 'Sự tha hóa quyền lực', s: 'Từ chỗ là "tôi tớ của xã hội", Nhà nước dần biến thành "chủ nhân của xã hội", tách rời và đứng trên cộng đồng.' }
  ];
  const solutions = [
    { n: 'I', t: 'Kinh tế', s: 'Lực lượng sản xuất phát triển cực cao, của cải vật chất dồi dào ("làm theo năng lực, hưởng theo nhu cầu").' },
    { n: 'II', t: 'Xã hội', s: 'Chế độ tư hữu bị xóa bỏ hoàn toàn, không còn phân chia giai cấp và đối kháng giai cấp cần phải trấn áp.' },
    { n: 'III', t: 'Con người', s: 'Phát triển toàn diện, tự giác tuân thủ các quy tắc cộng đồng mà không cần cưỡng chế.' },
    { n: 'IV', t: 'Quá trình', s: 'Nhà nước không bị "xóa bỏ" chủ quan mà tự "tiêu vong", dần đi vào giấc ngủ.' },
  ];

  const f1 = "'Playfair Display', serif";
  const f2 = "'Outfit', sans-serif";

  return (
    <section id="dat-van-de" className="relative w-full bg-[#EDE8E1] px-4 py-32 md:py-40 overflow-hidden">
      {/* Header with text reveal */}
      <div className="w-full max-w-7xl mx-auto mb-24 md:mb-32">
        <div className="gsap-reveal flex items-center gap-3 mb-6">
          <div className="h-[1px] w-12 bg-[#3D3529]/15 gsap-line-draw" />
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#7A6040]" style={{ fontFamily: f2 }}>Phần 1 & 2.1</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[#3D3529] mb-8" style={{ fontFamily: f1 }}>
          <span className="gsap-text-reveal block">Đặt Vấn Đề &</span>
          <span className="gsap-text-reveal block italic font-light text-[#7A6040]">Nguồn Gốc Nhà Nước</span>
        </h2>
        <p className="gsap-reveal text-lg text-[#7A6040] max-w-2xl leading-relaxed font-light" style={{ fontFamily: f2 }}>
          Một xã hội không còn Nhà nước — Utopia hay Khả năng hiện thực? Để trả lời, chúng ta cần thấu hiểu nguồn gốc ra đời tất yếu của Nhà nước.
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
          <span className="text-sm tracking-[0.25em] text-[#7A6040]/60 uppercase font-semibold" style={{ fontFamily: f2 }}>Bản Chất & Chức Năng</span>
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
          <h3 className="gsap-reveal text-center text-sm font-semibold tracking-[0.2em] uppercase text-[#7A6040]/50 mb-16" style={{ fontFamily: f2 }}>Tiền Đề Sự Tiêu Vong</h3>
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
