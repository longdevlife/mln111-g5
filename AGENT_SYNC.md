# AGENT_SYNC.md — Handoff cho Codex

> **Cập nhật:** 2026-05-19 23:10 (GMT+7)
> **Tác giả cập nhật gần nhất:** Antigravity/Claude
> **Mục đích:** Ghi trạng thái hiện tại của module Museum để agent sau không dựa vào context cũ.

---

## Trạng thái hiện tại

Museum hiện là **first-person 3D gallery** cho tab `#exhibition`.

Nguyên tắc sản phẩm mới nhất:

- **Không dùng hướng dẫn viên.**
- **Không dùng avatar/nhân vật thuyết minh.**
- Trải nghiệm tự dẫn bằng không gian, tranh, plaque, room labels và card ghim tranh.
- Giữ phạm vi sửa trong `src/museum/` và asset texture liên quan.

---

## Cấu trúc file Museum hiện tại

```
src/museum/
├── museumData.js        # Room definitions, panel positions, phân bổ PNG texture thực tế theo thư mục, collision zones
├── MuseumPage.jsx       # Page wrapper, HUD, selected/focused panel state, pinned artwork card
├── MuseumScene.jsx      # R3F Canvas + ambient lighting mạnh + camera focus tracker
├── MuseumRoom.jsx       # Architecture: sáng sủa hơn, lobby, rooms, hallway, trims, chandelier, benches, centerpiece
├── MuseumArtwork.jsx    # Artwork frame, texture canvas chuẩn độ sâu, focus/selected plaque (luôn hiện mờ hoặc sáng)
└── MuseumPlayer.jsx     # WASD / arrow movement with AABB collision
```

Đã xóa:

- `src/museum/MuseumGuide.jsx`
- `src/museum/MuseumCarousel.jsx`
- `public/textures/guide-avatar.png`
- HUD hướng dẫn di chuyển (WASD/Arrows) ở góc dưới bên trái màn hình.

Không thêm lại các file/asset trên nếu không có yêu cầu mới rõ ràng.

---

## Asset textures

Museum panels hiện lấy ảnh trực tiếp từ thư mục `public/museum/`:

```
public/museum/nhanuochophienhopphap/ (5 ảnh)
public/museum/nhanuocthuongtonphapluat/ (4 ảnh)
public/museum/phapquyennhannghia/ (3 ảnh)
```

Lưu ý: Các ảnh đã được phân bổ đích danh cho từng bức tường, không còn dùng cơ chế lặp vòng `trang1.png -> trang16.png` nữa.

Textures kiến trúc:

```
damask-pattern.png
marble-floor.png
```

---

## Layout 3D

```
                     ┌──────────────┐
                     │  PHÒNG GIỮA  │  center: (0, 0, -19)
                     │ Thượng tôn   │  size: 12w × 10d × 6h
                     │ pháp luật    │  accent: #C5A028
                     └──────┬───────┘
                            │ hallway (4w, axis=z)
   ┌────────────┐    ┌──────┴───────┐    ┌────────────┐
   │ PHÒNG TRÁI │────│    SẢNH      │────│ PHÒNG PHẢI │
   │ (-16,0,0)  │    │   (0,0,0)    │    │ (16,0,0)   │
   │ Hợp hiến   │    │ centerpiece  │    │ Nhân nghĩa │
   │ #C5272D    │    │ camera start │    │ #6F8F4E    │
   └────────────┘    └──────────────┘    └────────────┘
```

Camera start: `[0, 2.65, 5]`

Player height lock: `y = 2.65`

---

## Data flow

Trong `museumData.js`:

1. `rawRooms`: 3 phòng, mỗi phòng có định nghĩa mảng `images` trực tiếp cho từng tường.
2. Tự động tính toán vị trí: dựa trên số lượng ảnh của mỗi tường (1 hoặc 2 ảnh), tự động chia khoảng cách (spacing) và dàn đều căn giữa tường.
3. Texture mapping: lấy đúng đường dẫn ảnh PNG tương ứng từ thư mục.
4. Title format mới: `"<title> - Tư liệu I/II/III"` (nếu tường có nhiều tranh).
5. `museumPanels`: flat array cho `MuseumScene` render tổng cộng **12 `MuseumArtwork`**.

Mỗi panel có dạng chính:

```js
{
  id,
  title,
  heading,
  guideText,       // legacy content data, hiện không dùng làm guide
  sequenceLabel,
  position,
  rotation,
  imageSrc,        // /museum/[room]/[tên ảnh].png
  roomAccent,
  roomTitle,
  roomId
}
```

---

## MuseumArtwork.jsx

Tranh hiện có:

- Khung vàng cổ điển bằng nhiều lớp `boxGeometry`.
- Canvas texture được kéo nhô lên `z=0.042` để không bị lấp sau viền vàng.
- Đèn rọi (pointLight) đã được giảm cường độ tối đa để tránh bị đốm đỏ/vàng lóa mắt.
- Canvas không còn phát sáng emissive.
- Plaque tên tranh.
- `selected` làm plaque viền theo accent.
- Click tranh gọi `onSelect(panel)` để ghim tranh.

Đã bỏ:

- `near` state thừa.
- `useFrame` proximity logic trong artwork.
- Nút `Xem nội dung`.
- Vật thể lưới (mesh) giả làm đèn rọi tranh.

---

## MuseumPage.jsx

State:

```jsx
const [selectedPanel, setSelectedPanel] = useState(null);
const [focusedPanel, setFocusedPanel] = useState(defaultPanel);
const displayPanel = selectedPanel || focusedPanel;
```

HUD:

- Top-left: phòng hiện tại, title và heading của panel đang focus/ghim.
- Bottom-center: indicator cho Lobby + 3 rooms.
- Khi click tranh: hiện card `Đang ghim tranh` ở góc phải dưới.
- `Escape`: bỏ ghim tranh.

Đã bỏ:
- Render `MuseumGuide`.
- Thanh hướng dẫn các nút bấm `W/A/S/D`, `Mũi tên nhìn quanh`, `Click ghim tranh`, `Esc bỏ ghim` để giao diện gọn gàng hơn.

---

## MuseumRoom.jsx

Components chính:

| Component | Chức năng |
|-----------|-----------|
| `useMuseumTextures()` | Load damask + marble textures, RepeatWrapping |
| `Room` | Render phòng/sảnh với floor, ceiling (màu sáng hơn), walls/openings, trims, chandelier |
| `CeilingTrim` | Viền trần gỗ + brass |
| `MuseumBench` | Ghế băng ở các phòng phụ |
| `LobbyCenterpiece` | Centerpiece procedural trong sảnh, không dùng GLB |
| `MuseumChandelier` | Đèn chùm geometry local |
| `WallWithOpening` | Tường có cổng, casing, label |
| `Hallway` | Hành lang nối sảnh với phòng giữa |

Vật liệu (Materials) đã được giảm độ nhám (roughness) và tăng độ sáng để không gian lộng lẫy và phản xạ ánh sáng tốt hơn.

---

## MuseumScene.jsx

Không còn `Environment preset="warehouse"`.
Scene hiện dùng lighting local được tăng cường mạnh mẽ:

- `ambientLight` cường độ 0.9
- `hemisphereLight` cường độ 0.9 (màu trời xanh nhạt, đất vàng ấm)
- `directionalLight`
- lobby/room `spotLight` (tông màu trắng kem/ấm tinh tế thay vì vàng khè)
- Sương mù (fog) được đẩy ra xa hơn để không gian mở rộng.

Render order hiện tại:

```
background/fog → local lights → Sparkles →
MuseumPlayer → CameraDirectionTracker → MuseumRoom →
12× MuseumArtwork → ContactShadows
```

`CameraDirectionTracker`:

- Mỗi frame tính hướng camera.
- Chọn panel gần nhất trong 12 units và dot product > 0.8.
- Gọi `onFocusPanel(closestPanel)`.

---

## Verification mới nhất

Kết quả:

- Museum panels tải ảnh chuẩn từ folder `public/museum/`.
- Ánh sáng ngập tràn, sáng sủa, kiến trúc hiện rõ hoa văn Damask.
- Ảnh trong tranh không còn bị lấp đằng sau khung vàng.
- Các vết sáng đỏ/chói trên khung đã bị xóa bỏ.
- Không còn HUD rườm rà dưới đáy màn hình.

---

## Lưu ý còn lại

1. PNG `trang*.png` ở gốc public/textures vẫn còn dùng ở module Book `src/book/`.
2. `guideText` vẫn còn trong `museumData.js` như legacy data. Không dùng nó để hiện hướng dẫn viên.

---

## Lịch sử thay đổi gần nhất

### Session 5 — 2026-05-19 tối (Antigravity/Claude)

- Map ảnh trực tiếp từ thư mục `public/museum/[tên_phòng]/` thay vì dùng ảnh dummy.
- Tự động chia lại khoảng cách tranh dựa trên số lượng ảnh thực tế của từng tường. Tổng 12 bức.
- Xóa UI HUD hướng dẫn W/A/S/D cho gọn gàng.
- Sửa lỗi z-index làm tranh bị chìm vào trong khung.
- Tăng sáng cực mạnh cho toàn bộ phòng, giảm độ nhám, dời đèn làm chói tranh.

### Session 4 — 2026-05-19 18:00 (Codex)

- Xóa hẳn `MuseumGuide.jsx`, `MuseumCarousel.jsx`, `guide-avatar.png`.
- Không dùng hướng dẫn viên/thuyết minh viên.
- Bỏ `Environment preset="warehouse"` để tránh remote HDR.

### Session 3 — 2026-05-19 17:00 (Antigravity/Claude)

- Thiết kế lại khung tranh vàng cổ điển.
- Xóa nút `Xem nội dung`.
- Bỏ render `MuseumGuide` khỏi `MuseumPage`.
- Dời plaque xuống dưới khung tranh.

### Session 2 — 2026-05-19 (Antigravity/Claude + Codex)

- Nhân mỗi tường thành tranh.
- Tích hợp texture.
- Thêm bench, chandelier, trims, hallway/collision polish.

### Session 1 — 2026-05-19 (Antigravity/Claude)

- Refactor layout thành sảnh + 3 phòng nhánh.
- Viết lại data/room/scene/player museum.
- Thêm damask/marble textures.
