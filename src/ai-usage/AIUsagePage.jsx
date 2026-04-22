import React from 'react';

const TOOLS = [
  {
    name: 'NotebookLM',
    purpose: 'Tóm tắt slide giáo trình của trường thành các từ khóa, ý chính.',
    human: 'Đối chiếu với giáo trình gốc. Biên tập lại thành câu thoại ngắn gọn. Tự biên soạn lại câu hỏi quiz để đảm bảo độ khó.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
    )
  },
  {
    name: 'Antigravity',
    purpose: 'Gợi ý cú pháp, viết nhanh boilerplate code trong lúc lập trình.',
    human: 'Review toàn bộ logic. Cấu hình các thông số Three.js, xử lý các lỗi tương tác (click, hover, state).',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    )
  },
  {
    name: 'Tencent 3D',
    purpose: 'Tạo file 3D thô (base mesh) cho các vật thể trong môi trường.',
    human: 'Giảm dung lượng lưới (optimize mesh), gắn texture và cấu hình hiệu ứng ánh sáng trên web.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
    )
  },
  {
    name: 'Gemini',
    purpose: 'Tạo hình ảnh 2D, texture bề mặt (VD: vân gỗ, kim loại).',
    human: 'Dùng Photoshop cắt nền, chỉnh màu đồng bộ với thiết kế UI tổng thể của dự án.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    )
  }
];

export const AIUsagePage = () => {
  return (
    <div className="w-full min-h-screen bg-[#0d0705] text-[#ede6d6] pt-32 pb-24 px-6 md:px-12 relative overflow-y-auto flex justify-center">
      
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#1a120d] to-transparent opacity-50 pointer-events-none"></div>

      <div className="max-w-[1000px] w-full relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 animate-in fade-in slide-in-from-top-4">
          <span className="section-label text-[#c9922a] mb-4 tracking-[0.2em] block uppercase font-['Inter'] text-xs font-semibold">Phụ Lục Đặc Biệt</span>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium tracking-wide mb-6">Báo Cáo Ứng Dụng AI</h1>
          <div className="w-24 h-[1px] bg-[#c9922a] mx-auto opacity-40"></div>
          <p className="mt-6 text-[#a39481] font-['Inter'] font-light max-w-2xl mx-auto leading-relaxed">
            Minh bạch. Liêm chính học thuật. Trách nhiệm tuyệt đối. Báo cáo này định rõ ranh giới giữa sự hỗ trợ của Trí tuệ Nhân tạo và dấu ấn tri thức của con người trong toàn bộ vòng đời phát triển dự án.
          </p>
        </div>

        {/* Cột chính */}
        <div className="grid grid-cols-1 gap-12">
          
          {/* Part 1: Cam Kết Liêm Chính */}
          <section className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[20px] p-8 md:p-12 hover:bg-[rgba(255,255,255,0.03)] transition-colors">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-[#c9922a] block">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </span>
              <h2 className="font-['Playfair_Display'] text-2xl tracking-wider" style={{ fontVariantNumeric: "lining-nums" }}>1. Cam Kết Liêm Chính & Trách Nhiệm</h2>
            </div>
            <div className="mb-8 pl-11">
              <span className="text-[#a39481] text-xs font-['Inter'] italic tracking-wide">(Đáp ứng mục 4.2 & 4.4)</span>
            </div>
            <div className="space-y-6 font-['Inter'] font-light text-[#b8a996] leading-relaxed">
              <div className="flex flex-col gap-2">
                <h3 className="text-[#ede6d6] font-medium tracking-widest text-[11px] uppercase opacity-80">Cam kết cốt lõi</h3>
                <p>Nhóm khẳng định AI chỉ đóng vai trò là trợ lý hỗ trợ xử lý dữ liệu thô. <strong className="text-[#c9922a] font-normal">Không để AI làm thay hoàn toàn.</strong> Sinh viên là người trực tiếp xây dựng logic, thiết kế kiến trúc và quyết định nội dung của sản phẩm cuối cùng.</p>
              </div>
              <div className="w-full h-[1px] bg-[rgba(255,255,255,0.05)] my-2"></div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#ede6d6] font-medium tracking-widest text-[11px] uppercase opacity-80">Kiểm chứng thông tin</h3>
                <p>Mọi nội dung do AI sinh ra (đặc biệt là tóm tắt lý luận chính trị) đều được đối chiếu trực tiếp với <strong className="text-[#ede6d6] font-normal">Giáo trình LLCT chính thống</strong> của trường. Nhóm chịu trách nhiệm 100% về độ chính xác của thông tin.</p>
              </div>
              <div className="w-full h-[1px] bg-[rgba(255,255,255,0.05)] my-2"></div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#ede6d6] font-medium tracking-widest text-[11px] uppercase opacity-80">Phân định rõ ràng</h3>
                <p>AI tạo ra tài nguyên thô (model 3D, text, ảnh). Sinh viên chịu trách nhiệm chỉnh sửa (optimize mesh 3D, cắt gọt nội dung, fix bug code) để tích hợp vào website.</p>
              </div>
            </div>
          </section>

          {/* Part 2: Ứng dụng Sáng tạo */}
          <section className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[20px] p-8 md:p-12 hover:bg-[rgba(255,255,255,0.03)] transition-colors">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-[#c9922a] block">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              </span>
              <h2 className="font-['Playfair_Display'] text-2xl tracking-wider" style={{ fontVariantNumeric: "lining-nums" }}>2. Ứng Dụng Sáng Tạo</h2>
            </div>
            <div className="mb-8 pl-11">
              <span className="text-[#a39481] text-xs font-['Inter'] italic tracking-wide">(Đáp ứng mục 4.3)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-['Inter'] font-light text-[#b8a996] leading-relaxed">
              <div>
                <h3 className="text-[#ede6d6] font-medium tracking-widest text-[11px] uppercase opacity-80 mb-3 border-b border-[rgba(255,255,255,0.1)] pb-2 block">Tóm tắt & Kịch bản</h3>
                <p className="text-sm">Dùng AI rút gọn giáo trình đồ sộ thành key-points. Nhóm dựa vào dàn ý đó để <strong>tự viết kịch bản tương tác</strong> và biên soạn bộ câu hỏi trắc nghiệm (quiz).</p>
              </div>
              <div>
                <h3 className="text-[#ede6d6] font-medium tracking-widest text-[11px] uppercase opacity-80 mb-3 border-b border-[rgba(255,255,255,0.1)] pb-2 block">Tài nguyên 3D gốc</h3>
                <p className="text-sm">Tự sinh model 3D thô bằng AI (không copy trên mạng). Sau đó, sinh viên tự tay thêm texture, chỉnh sửa ánh sáng để đưa vào môi trường web (Three.js).</p>
              </div>
              <div>
                <h3 className="text-[#ede6d6] font-medium tracking-widest text-[11px] uppercase opacity-80 mb-3 border-b border-[rgba(255,255,255,0.1)] pb-2 block">Pair-Programming</h3>
                <p className="text-sm">AI gợi ý các đoạn code lặp lại (boilerplate). Nhóm nắm giữ phần thiết kế kiến trúc, xử lý luồng dữ liệu (state management) và sửa lỗi logic.</p>
              </div>
            </div>
          </section>

          {/* Part 3: Tool Breakdown */}
          <section className="pt-8">
            <div className="flex flex-col items-center gap-1 mb-10 text-center">
              <h2 className="font-['Playfair_Display'] text-3xl tracking-wider" style={{ fontVariantNumeric: "lining-nums" }}>3. Bảng Phân Định Công Cụ AI</h2>
              <span className="text-[#a39481] text-xs font-['Inter'] italic tracking-wide mt-2">(Đáp ứng mục 4.1)</span>
            </div>

            <div className="space-y-6">
              {TOOLS.map((tool, idx) => (
                <div key={idx} className="bg-[rgba(255,255,255,0.015)] border border-[rgba(255,255,255,0.04)] rounded-[16px] p-6 transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon & Name */}
                    <div className="md:w-1/4 flex flex-col items-center md:items-start text-center md:text-left md:border-r border-[rgba(255,255,255,0.05)] pr-4">
                      <div className="text-[#c9922a] bg-[rgba(201,146,42,0.1)] p-3 rounded-full mb-3 inline-block border border-[rgba(201,146,42,0.2)]">
                        {tool.icon}
                      </div>
                      <h3 className="font-['Playfair_Display'] text-xl text-[#ede6d6] tracking-wide">{tool.name}</h3>
                    </div>
                    {/* Details */}
                    <div className="md:w-3/4 flex flex-col sm:flex-row gap-6 font-['Inter'] font-light">
                      <div className="sm:w-1/2 bg-[rgba(0,0,0,0.2)] rounded-[12px] p-5 border border-[rgba(255,255,255,0.02)]">
                        <span className="text-[#7a6040] text-[10px] uppercase tracking-widest font-medium block mb-3">Vai trò của AI (Input thô)</span>
                        <p className="text-[#a39481] text-sm leading-relaxed">{tool.purpose}</p>
                      </div>
                      <div className="sm:w-1/2 bg-[rgba(201,146,42,0.05)] rounded-[12px] p-5 border border-[rgba(201,146,42,0.1)]">
                        <span className="text-[#c9922a] text-[10px] uppercase tracking-widest font-medium block mb-3 flex items-center gap-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                          Sinh viên xử lý (Hoàn thiện)
                        </span>
                        <p className="text-[#ede6d6] text-sm leading-relaxed">{tool.human}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Part 4: Minh chứng Prompt */}
          <section className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[20px] p-8 md:p-12 hover:bg-[rgba(255,255,255,0.03)] transition-colors mt-8">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[#c9922a] block">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </span>
              <h2 className="font-['Playfair_Display'] text-2xl tracking-wider" style={{ fontVariantNumeric: "lining-nums" }}>4. Minh Chứng Sử Dụng Prompt</h2>
            </div>

            <div className="space-y-12 font-['Inter']">
              {/* Prompt 1 */}
              <div>
                <h3 className="text-[#ede6d6] font-medium text-lg tracking-wide mb-4 font-['Playfair_Display']">II. Cơ sở lý thuyết</h3>
                <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.05)] rounded-lg p-4 mb-6">
                  <span className="text-[#c9922a] text-xs font-semibold uppercase tracking-wider block mb-2">Prompt:</span>
                  <p className="text-[#b8a996] text-sm leading-relaxed italic">
                    "Hãy từ giáo trình MLN111.pdf đưa ra nội dung phân tích cho phần Cơ sở lý thuyết: Trình bày quan niệm của chủ nghĩa duy vật lịch sử về Nhà nước như một sản phẩm của những điều kiện kinh tế – xã hội nhất định, gắn với sự xuất hiện của giai cấp và mâu thuẫn giai cấp, đồng thời làm rõ xu hướng tiêu vong của Nhà nước trong những điều kiện lịch sử cụ thể."
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-xl shadow-black/50">
                  <img src="/images/prompt1.jpg" alt="Đoạn chat cơ sở lý thuyết" className="w-full object-cover" />
                </div>
              </div>

              <div className="w-full h-[1px] bg-[rgba(255,255,255,0.05)]"></div>

              {/* Prompt 2 */}
              <div>
                <h3 className="text-[#ede6d6] font-medium text-lg tracking-wide mb-4 font-['Playfair_Display']">III. Cơ sở vận dụng</h3>
                <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.05)] rounded-lg p-4 mb-6">
                  <span className="text-[#c9922a] text-xs font-semibold uppercase tracking-wider block mb-2">Prompt:</span>
                  <p className="text-[#b8a996] text-sm leading-relaxed italic">
                    "Nhập vai chuyên gia Triết học, hãy phân tích chủ đề 'Xã hội không Nhà nước: Utopia hay hiện thực?' tập trung cụ thể vào Cơ sở vận dụng tại mục III.1 Giáo trình MLN 2019 qua việc đối chiếu: Chính phủ số như một hạ tầng dịch vụ, các mô hình tự quản cộng đồng làm tiền đề hiện thực, và các rủi ro an ninh phi truyền thống làm giới hạn khiến Nhà nước chưa thể biến mất; hãy trình bày thành một tin nhắn liền mạch với ngôn ngữ so sánh gần gũi cho lớp đa ngành, có cài mã trích dẫn [ID] và tổng hợp danh mục Reference cuối bài."
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-xl shadow-black/50">
                  <img src="/images/prompt2.png" alt="Đoạn chat cơ sở vận dụng" className="w-full object-cover" />
                </div>
              </div>

              <div className="w-full h-[1px] bg-[rgba(255,255,255,0.05)]"></div>

              {/* Prompt 3 */}
              <div>
                <h3 className="text-[#ede6d6] font-medium text-lg tracking-wide mb-4 font-['Playfair_Display']">IV. Giải pháp/ Bài học</h3>
                <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.05)] rounded-lg p-4 mb-6">
                  <span className="text-[#c9922a] text-xs font-semibold uppercase tracking-wider block mb-2">Prompt:</span>
                  <p className="text-[#b8a996] text-sm leading-relaxed italic">
                    "Role: Chuyên gia Duy vật lịch sử & Khoa học chính trị. Task: Viết mục 'Giải pháp & Bài học thực tiễn' tiểu luận: 'Sự tiêu vong Nhà nước: Lý luận & Thực tiễn'.Cấu trúc (5 điểm a-e): Lý luận cốt lõi (Chương 3 Triết học MLN) vs. Bài học thực tiễn (Xã hội hiện đại). Key themes: Tính lịch sử Nhà nước; Dịch chuyển cưỡng chế -&gt; phục vụ; Tự quản cộng đồng; Đạo đức & Công dân toàn cầu. Format: Văn phong học thuật. Trích dẫn [X] trong bài. References: Giáo trình Bộ GD&ĐT, Lênin, và nguồn quốc tế (World Bank/UNESCO/Putnam/Rosenau). Language: Tiếng Việt."
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-xl shadow-black/50">
                  <img src="/images/prompt3.png" alt="Đoạn chat giải pháp bài học" className="w-full object-cover" />
                </div>
              </div>

            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
