export const museumRooms = [
  {
    id: "constitutional-legal",
    title: "Nhà nước hợp hiến, hợp pháp",
    shortTitle: "Hợp hiến, hợp pháp",
    accent: "#C5272D",
    position: [0, 0, 0],
    walls: [
      {
        id: "room1-left",
        type: "theory",
        wall: "left",
        title: "Cơ sở lý thuyết",
        heading: "Vận hành theo pháp luật",
        guideText: "Hồ Chí Minh sớm nhận thức vai trò của Hiến pháp; yêu cầu bình đẳng pháp lý, xóa bỏ tòa án áp bức, thay sắc lệnh bằng đạo luật; Nhà nước phải tổ chức và vận hành theo pháp luật.",
        position: [-7.85, 3, 0],
        rotation: [0, Math.PI / 2, 0]
      },
      {
        id: "room1-center",
        type: "practice",
        wall: "center",
        title: "Liên hệ thực tiễn",
        heading: "Tính Hợp Hiến & Uy Tín",
        guideText: "Tổng tuyển cử, Quốc hội, tính hợp hiến của bộ máy nhà nước; Bầu cử Quốc hội khóa XVI có 864 người ứng cử, xác nhận 500 đại biểu. Việt Nam tái đắc cử Hội đồng Nhân quyền LHQ.",
        position: [0, 3, -7.85],
        rotation: [0, 0, 0]
      },
      {
        id: "room1-right",
        type: "application",
        wall: "right",
        title: "Giá trị vận dụng",
        heading: "Nền tảng chính danh",
        guideText: "Quyền lực nhà nước chỉ chính danh khi xuất phát từ nhân dân; tạo nền tảng ổn định chính trị và tư cách pháp lý để hội nhập quốc tế (CPTPP, EVFTA, FDI).",
        position: [7.85, 3, 0],
        rotation: [0, -Math.PI / 2, 0]
      }
    ]
  },
  {
    id: "law-supremacy",
    title: "Nhà nước thượng tôn pháp luật",
    shortTitle: "Thượng tôn pháp luật",
    accent: "#C5A028",
    position: [0, 0, -20],
    walls: [
      {
        id: "room2-left",
        type: "theory",
        wall: "left",
        title: "Cơ sở lý thuyết",
        heading: "Quản lý bằng pháp luật",
        guideText: "Quản lý bằng pháp luật là ưu tiên hàng đầu; Hồ Chí Minh lãnh đạo soạn thảo Hiến pháp, ký ban hành luật/sắc lệnh; luật phải được thi hành nghiêm.",
        position: [-7.85, 3, -20],
        rotation: [0, Math.PI / 2, 0]
      },
      {
        id: "room2-center",
        type: "practice",
        wall: "center",
        title: "Liên hệ thực tiễn",
        heading: "Đại án Vạn Thịnh Phát",
        guideText: "Đại án Vạn Thịnh Phát, xử lý nồng độ cồn (Nghị định 168), tinh thần “không có vùng cấm, không có ngoại lệ”.",
        position: [0, 3, -27.85],
        rotation: [0, 0, 0]
      },
      {
        id: "room2-right",
        type: "application",
        wall: "right",
        title: "Giá trị vận dụng",
        heading: "Công bằng, bình đẳng",
        guideText: "Bảo đảm công bằng, bình đẳng trước pháp luật; kiểm soát quyền lực; phòng chống tham nhũng; củng cố niềm tin của nhân dân.",
        position: [7.85, 3, -20],
        rotation: [0, -Math.PI / 2, 0]
      }
    ]
  },
  {
    id: "humanistic-rule",
    title: "Pháp quyền nhân nghĩa",
    shortTitle: "Pháp quyền nhân nghĩa",
    accent: "#6F8F4E",
    position: [0, 0, -40],
    walls: [
      {
        id: "room3-left",
        type: "theory",
        wall: "left",
        title: "Cơ sở lý thuyết",
        heading: "Pháp luật vì con người",
        guideText: "Pháp luật không chỉ để cai trị mà phải vì con người; tiếp cận quyền con người toàn diện; nghiêm minh nhưng nhân văn.",
        position: [-7.85, 3, -40],
        rotation: [0, Math.PI / 2, 0]
      },
      {
        id: "room3-center",
        type: "practice",
        wall: "center",
        title: "Liên hệ thực tiễn",
        heading: "Chính sách hỗ trợ",
        guideText: "Chính sách hỗ trợ COVID-19 (Quyết định 23/2021/QĐ-TTg), vaccine miễn phí, ưu tiên nhóm nguy cơ cao, các chính sách vì dân.",
        position: [0, 3, -47.85],
        rotation: [0, 0, 0]
      },
      {
        id: "room3-right",
        type: "application",
        wall: "right",
        title: "Giá trị vận dụng",
        heading: "Quyền con người",
        guideText: "Bảo đảm quyền con người và công bằng xã hội; pháp luật là công cụ phục vụ và phát triển con người toàn diện.",
        position: [7.85, 3, -40],
        rotation: [0, -Math.PI / 2, 0]
      }
    ]
  }
];

export const museumPanels = museumRooms.flatMap((room) =>
  room.walls.map((wall) => ({ ...wall, roomAccent: room.accent, roomTitle: room.title, roomId: room.id }))
);

export const defaultPanel = museumPanels.find((panel) => panel.id === "room1-center");
