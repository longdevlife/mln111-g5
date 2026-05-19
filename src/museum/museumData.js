/**
 * Museum Data — Sảnh trung tâm + 3 phòng nhánh (Trái / Giữa / Phải)
 *
 * Layout (top-down, z- is "forward/north"):
 *
 *                    ┌──────────────┐
 *                    │  PHÒNG GIỮA  │  z = -14 to -24
 *                    │  (center)    │
 *                    └──────┬───────┘
 *                           │
 *   ┌────────────┐   ┌──────┴───────┐   ┌────────────┐
 *   │ PHÒNG TRÁI │───│    SẢNH      │───│ PHÒNG PHẢI │
 *   │ x = -16    │   │  (lobby)     │   │  x = +16   │
 *   └────────────┘   └──────────────┘   └────────────┘
 *                     Camera starts here
 */

// Room dimensions
export const LOBBY_SIZE = { w: 20, d: 14, h: 6 };
export const ROOM_SIZE = { w: 12, d: 10, h: 6 };
export const HALLWAY_W = 4; // corridor width connecting rooms

// Room center positions
export const LOBBY_POS = [0, 0, 0];
export const ROOM_LEFT_POS = [-16, 0, 0];
export const ROOM_CENTER_POS = [0, 0, -19];
export const ROOM_RIGHT_POS = [16, 0, 0];

export const museumRooms = [
  {
    id: "constitutional-legal",
    title: "Nhà nước hợp hiến, hợp pháp",
    shortTitle: "Hợp hiến, hợp pháp",
    accent: "#C5272D",
    position: ROOM_LEFT_POS,
    direction: "left",
    walls: [
      {
        id: "room1-left",
        type: "theory",
        wall: "left",
        title: "Cơ sở lý thuyết",
        heading: "Vận hành theo pháp luật",
        guideText: "Hồ Chí Minh sớm nhận thức vai trò của Hiến pháp; yêu cầu bình đẳng pháp lý, xóa bỏ tòa án áp bức, thay sắc lệnh bằng đạo luật; Nhà nước phải tổ chức và vận hành theo pháp luật.",
        // visitor-left wall when entering from the lobby (south wall, facing -z)
        position: [-16, 3, 4.9],
        rotation: [0, Math.PI, 0]
      },
      {
        id: "room1-center",
        type: "practice",
        wall: "center",
        title: "Liên hệ thực tiễn",
        heading: "Tính Hợp Hiến & Uy Tín",
        guideText: "Tổng tuyển cử, Quốc hội, tính hợp hiến của bộ máy nhà nước; Bầu cử Quốc hội khóa XVI có 864 người ứng cử, xác nhận 500 đại biểu. Việt Nam tái đắc cử Hội đồng Nhân quyền LHQ.",
        // back wall of left room (west wall, facing +x)
        position: [-21.9, 3, 0],
        rotation: [0, Math.PI / 2, 0]
      },
      {
        id: "room1-right",
        type: "application",
        wall: "right",
        title: "Giá trị vận dụng",
        heading: "Nền tảng chính danh",
        guideText: "Quyền lực nhà nước chỉ chính danh khi xuất phát từ nhân dân; tạo nền tảng ổn định chính trị và tư cách pháp lý để hội nhập quốc tế (CPTPP, EVFTA, FDI).",
        // visitor-right wall when entering from the lobby (north wall, facing +z)
        position: [-16, 3, -4.9],
        rotation: [0, 0, 0]
      }
    ]
  },
  {
    id: "law-supremacy",
    title: "Nhà nước thượng tôn pháp luật",
    shortTitle: "Thượng tôn pháp luật",
    accent: "#C5A028",
    position: ROOM_CENTER_POS,
    direction: "center",
    walls: [
      {
        id: "room2-left",
        type: "theory",
        wall: "left",
        title: "Cơ sở lý thuyết",
        heading: "Quản lý bằng pháp luật",
        guideText: "Quản lý bằng pháp luật là ưu tiên hàng đầu; Hồ Chí Minh lãnh đạo soạn thảo Hiến pháp, ký ban hành luật/sắc lệnh; luật phải được thi hành nghiêm.",
        // left wall of center room (facing +x)
        position: [-5.9, 3, -19],
        rotation: [0, Math.PI / 2, 0]
      },
      {
        id: "room2-center",
        type: "practice",
        wall: "center",
        title: "Liên hệ thực tiễn",
        heading: "Đại án Vạn Thịnh Phát",
        guideText: "Đại án Vạn Thịnh Phát, xử lý nồng độ cồn (Nghị định 168), tinh thần 'không có vùng cấm, không có ngoại lệ'.",
        // back wall of center room (facing +z)
        position: [0, 3, -23.9],
        rotation: [0, 0, 0]
      },
      {
        id: "room2-right",
        type: "application",
        wall: "right",
        title: "Giá trị vận dụng",
        heading: "Công bằng, bình đẳng",
        guideText: "Bảo đảm công bằng, bình đẳng trước pháp luật; kiểm soát quyền lực; phòng chống tham nhũng; củng cố niềm tin của nhân dân.",
        // right wall of center room (facing -x)
        position: [5.9, 3, -19],
        rotation: [0, -Math.PI / 2, 0]
      }
    ]
  },
  {
    id: "humanistic-rule",
    title: "Pháp quyền nhân nghĩa",
    shortTitle: "Pháp quyền nhân nghĩa",
    accent: "#6F8F4E",
    position: ROOM_RIGHT_POS,
    direction: "right",
    walls: [
      {
        id: "room3-left",
        type: "theory",
        wall: "left",
        title: "Cơ sở lý thuyết",
        heading: "Pháp luật vì con người",
        guideText: "Pháp luật không chỉ để cai trị mà phải vì con người; tiếp cận quyền con người toàn diện; nghiêm minh nhưng nhân văn.",
        // visitor-left wall when entering from the lobby (north wall, facing +z)
        position: [16, 3, -4.9],
        rotation: [0, 0, 0]
      },
      {
        id: "room3-center",
        type: "practice",
        wall: "center",
        title: "Liên hệ thực tiễn",
        heading: "Chính sách hỗ trợ",
        guideText: "Chính sách hỗ trợ COVID-19 (Quyết định 23/2021/QĐ-TTg), vaccine miễn phí, ưu tiên nhóm nguy cơ cao, các chính sách vì dân.",
        // back wall of right room (east wall, facing -x)
        position: [21.9, 3, 0],
        rotation: [0, -Math.PI / 2, 0]
      },
      {
        id: "room3-right",
        type: "application",
        wall: "right",
        title: "Giá trị vận dụng",
        heading: "Quyền con người",
        guideText: "Bảo đảm quyền con người và công bằng xã hội; pháp luật là công cụ phục vụ và phát triển con người toàn diện.",
        // visitor-right wall when entering from the lobby (south wall, facing -z)
        position: [16, 3, 4.9],
        rotation: [0, Math.PI, 0]
      }
    ]
  }
];

export const museumPanels = museumRooms.flatMap((room) =>
  room.walls.map((wall) => ({ ...wall, roomAccent: room.accent, roomTitle: room.title, roomId: room.id }))
);

export const defaultPanel = null;

/**
 * Collision zones — array of AABB boxes {minX, maxX, minZ, maxZ}
 * Player can move freely inside these zones.
 */
export const WALKABLE_ZONES = [
  // Lobby, inset from wall edges so side rooms only connect through door zones.
  { minX: -9.2, maxX: 9.2, minZ: -6.6, maxZ: 6.6 },
  // Left doorway.
  { minX: -10.8, maxX: -9.2, minZ: -1.8, maxZ: 1.8 },
  // Left room.
  { minX: -21.2, maxX: -10.8, minZ: -4.6, maxZ: 4.6 },
  // Center hallway.
  { minX: -1.8, maxX: 1.8, minZ: -14.4, maxZ: -6.4 },
  // Center room (12 wide × 10 deep, centered at 0, -19)
  { minX: -5.6, maxX: 5.6, minZ: -23.6, maxZ: -14.4 },
  // Right doorway.
  { minX: 9.2, maxX: 10.8, minZ: -1.8, maxZ: 1.8 },
  // Right room.
  { minX: 10.8, maxX: 21.2, minZ: -4.6, maxZ: 4.6 },
];
