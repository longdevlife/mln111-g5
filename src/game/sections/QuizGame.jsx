import React, { useState } from 'react';

const QUESTIONS = [
  {
    question: "Tồn tại xã hội là gì?",
    options: [
      "Toàn bộ đời sống tinh thần của xã hội",
      "Toàn bộ sinh hoạt vật chất và những điều kiện sinh hoạt vật chất của xã hội",
      "Các quan hệ chính trị, pháp luật của xã hội",
      "Toàn bộ các quy luật vận động của tự nhiên"
    ],
    correct: 1,
    explanation: "Tồn tại xã hội dùng để chỉ toàn bộ sinh hoạt vật chất và những điều kiện sinh hoạt vật chất của xã hội trong những giai đoạn lịch sử nhất định."
  },
  {
    question: "Yếu tố nào giữ vai trò quyết định, trực tiếp nhất trong tồn tại xã hội?",
    options: [
      "Điều kiện địa lý",
      "Mật độ dân số",
      "Phương thức sản xuất vật chất",
      "Môi trường sinh thái"
    ],
    correct: 2,
    explanation: "Phương thức sản xuất vật chất là yếu tố cơ bản nhất, quyết định sự tồn tại và phát triển của xã hội."
  },
  {
    question: "Mối quan hệ giữa tồn tại xã hội (TTXH) và ý thức xã hội (YTXH) là gì?",
    options: [
      "YTXH quyết định TTXH",
      "TTXH và YTXH không liên quan",
      "TTXH quyết định YTXH, YTXH có tính độc lập tương đối",
      "TTXH phản ánh YTXH một cách thụ động"
    ],
    correct: 2,
    explanation: "Chủ nghĩa duy vật lịch sử khẳng định TTXH quyết định YTXH, nhưng YTXH cũng có tính độc lập tương đối và tác động trở lại."
  },
  {
    question: "Yếu tố nào sau đây KHÔNG thuộc về tồn tại xã hội?",
    options: [
      "Điều kiện tự nhiên",
      "Dân số và mật độ dân số",
      "Hệ tư tưởng và tâm lý xã hội",
      "Phương thức sản xuất"
    ],
    correct: 2,
    explanation: "Hệ tư tưởng và tâm lý xã hội thuộc về Ý thức xã hội, không phải Tồn tại xã hội."
  }
];

export default function QuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const f1 = "'Playfair Display', serif";
  const f2 = "'Outfit', sans-serif";

  const handleOptionClick = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === QUESTIONS[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < QUESTIONS.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const q = QUESTIONS[currentQuestion];
  const progress = ((currentQuestion) / QUESTIONS.length) * 100;

  return (
    <section id="quiz" className="relative w-full bg-[#E5E0D8] px-4 py-32 md:py-40 overflow-hidden">
      {/* Header */}
      <div className="w-full max-w-5xl mx-auto mb-16 relative z-10 text-center">
        <div className="reveal flex items-center justify-center gap-3 mb-6">
          <div className="h-[1px] w-12 bg-[#3D3529]/15" />
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C5A028]" style={{ fontFamily: f2 }}>
            Khảo Nghiệm Tri Thức
          </span>
          <div className="h-[1px] w-12 bg-[#3D3529]/15" />
        </div>
        <h2 className="reveal delay-1 text-4xl md:text-6xl font-bold tracking-tight text-[#3D3529] mb-6" style={{ fontFamily: f1 }}>
          Triết Học <span className="italic font-light text-[#7A6040]">Thực Hành</span>
        </h2>
      </div>

      {/* Quiz Card */}
      <div className="w-full max-w-4xl mx-auto reveal delay-2">
        <div className="bg-white/50 rounded-[20px] border border-[#3D3529]/5 overflow-hidden min-h-[500px] flex flex-col">

          {showResult ? (
            <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-[#C5A028]/10 flex items-center justify-center mb-8">
                <span className="text-[#C5A028] text-3xl font-bold" style={{ fontFamily: f1 }}>{score}</span>
              </div>
              <h3 className="text-4xl font-bold mb-4 text-[#3D3529]" style={{ fontFamily: f1 }}>Kết Quả Khảo Sát</h3>
              <p className="text-[#7A6040] text-lg font-light mb-8" style={{ fontFamily: f2 }}>
                Bạn đã hoàn thành với <strong className="text-[#C5A028] font-bold">{score}/{QUESTIONS.length}</strong> câu trả lời chính xác.
              </p>
              <div className="px-8 py-3 bg-[#EDE8E1] rounded-full border border-[#3D3529]/5 mb-10">
                <span className="text-[#3D3529] font-semibold text-sm tracking-widest uppercase" style={{ fontFamily: f2 }}>
                  {score === QUESTIONS.length ? "Tiến sĩ Triết học" : score >= 2 ? "Học giả Ưu tú" : "Cần nghiên cứu thêm"}
                </span>
              </div>
              <button
                onClick={restartQuiz}
                className="px-8 py-3 bg-[#3D3529] text-[#EDE8E1] font-semibold tracking-[0.08em] uppercase text-xs rounded-full transition-all duration-500 hover:bg-[#C5A028] hover:-translate-y-0.5"
                style={{ fontFamily: f2 }}
              >
                Thực Hiện Lại
              </button>
            </div>
          ) : (
            <div className="flex-1 flex flex-col">
              {/* Progress */}
              <div className="w-full h-1 bg-[#3D3529]/5">
                <div
                  className="h-full bg-[#C5A028] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="p-10 md:p-14 flex-1 flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A6040]/50 mb-6 block" style={{ fontFamily: f2 }}>
                  Câu hỏi {currentQuestion + 1} / {QUESTIONS.length}
                </span>

                <h3 className="text-2xl md:text-3xl font-bold text-[#3D3529] mb-10 leading-relaxed" style={{ fontFamily: f1 }}>
                  {q.question}
                </h3>

                <div className="grid grid-cols-1 gap-4 mb-10 flex-1 content-start">
                  {q.options.map((option, index) => {
                    let btnClass = "relative w-full text-left p-5 rounded-[16px] border transition-all duration-500 flex items-center gap-5 group ";
                    let iconClass = "w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm shrink-0 transition-colors duration-500 ";

                    if (isAnswered) {
                      if (index === q.correct) {
                        btnClass += "bg-emerald-50 border-emerald-200 text-emerald-900";
                        iconClass += "bg-emerald-500 text-white";
                      } else if (index === selectedOption) {
                        btnClass += "bg-rose-50 border-rose-200 text-rose-900";
                        iconClass += "bg-rose-500 text-white";
                      } else {
                        btnClass += "bg-white/30 border-[#3D3529]/5 text-[#3D3529]/40 opacity-50";
                        iconClass += "bg-[#3D3529]/5 text-[#3D3529]/40";
                      }
                    } else {
                      btnClass += "bg-white/60 border-[#3D3529]/8 text-[#3D3529] hover:border-[#C5A028] hover:shadow-sm hover:-translate-y-0.5";
                      iconClass += "bg-[#EDE8E1] text-[#7A6040] group-hover:bg-[#C5A028] group-hover:text-white";
                    }

                    return (
                      <button key={index} className={btnClass} onClick={() => handleOptionClick(index)} disabled={isAnswered}>
                        <div className={iconClass}>{String.fromCharCode(65 + index)}</div>
                        <span className="text-base font-light leading-relaxed" style={{ fontFamily: f2 }}>{option}</span>
                      </button>
                    );
                  })}
                </div>

                {isAnswered && (
                  <div className="mt-auto">
                    <div className={`p-5 rounded-[16px] mb-8 border ${selectedOption === q.correct ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-200'}`}>
                      <p className="text-[#3D3529]/80 leading-relaxed font-light text-sm" style={{ fontFamily: f2 }}>
                        <strong className={`font-bold mr-2 ${selectedOption === q.correct ? 'text-emerald-600' : 'text-rose-600'}`}>
                          {selectedOption === q.correct ? "Chính xác!" : "Chưa đúng!"}
                        </strong>
                        {q.explanation}
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <button
                        onClick={handleNext}
                        className="px-8 py-3 bg-[#3D3529] text-[#EDE8E1] font-semibold tracking-[0.08em] uppercase text-xs rounded-full transition-all duration-500 hover:bg-[#C5A028] hover:-translate-y-0.5"
                        style={{ fontFamily: f2 }}
                      >
                        {currentQuestion === QUESTIONS.length - 1 ? "Xem Kết Quả" : "Câu Tiếp Theo"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
