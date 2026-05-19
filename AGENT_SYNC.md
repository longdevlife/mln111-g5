# AGENT_SYNC.md — Handoff cho Codex

> **Cập nhật:** 2026-05-19 18:00 (GMT+7)
> **Tác giả cập nhật gần nhất:** Codex
> **Mục đích:** Ghi trạng thái hiện tại của module Museum để agent sau không dựa vào context cũ.

---

## Trạng thái hiện tại

Museum hiện là **first-person 3D gallery** cho tab `#exhibition`.

Nguyên tắc sản phẩm mới nhất:

- **Không dùng hướng dẫn viên.**
- **Không dùng avatar/nhân vật thuyết minh.**
- Trải nghiệm tự dẫn bằng không gian, tranh, HUD, plaque, room labels và card ghim tranh.
- Giữ phạm vi sửa trong `src/museum/` và asset texture liên quan.

---

## Cấu trúc file Museum hiện tại

```
src/museum/
├── museumData.js        # Room definitions, panel positions, JPG texture mapping, collision zones
├── MuseumPage.jsx       # Page wrapper, HUD, selected/focused panel state, pinned artwork card
├── MuseumScene.jsx      # R3F Canvas + local lighting + camera focus tracker
├── MuseumRoom.jsx       # Architecture: lobby, rooms, hallway, trims, chandelier, benches, centerpiece
├── MuseumArtwork.jsx    # Artwork frame, picture light, texture canvas, focus/selected plaque
└── MuseumPlayer.jsx     # WASD / arrow movement with AABB collision
```

Đã xóa:

- `src/museum/MuseumGuide.jsx`
- `src/museum/MuseumCarousel.jsx`
- `public/textures/guide-avatar.png`

Không thêm lại các file/asset trên nếu không có yêu cầu mới rõ ràng.

---

## Asset textures

Museum panels hiện dùng JPG nén:

```
public/textures/trang1.jpg → trang16.jpg
```

Kích thước hiện tại:

- JPG museum set: khoảng **9.64MB**
- PNG gốc `trang1.png → trang16.png`: khoảng **68.48MB**

Lưu ý: PNG gốc vẫn còn vì module `src/book/` đang dùng/preload `trang*.png`. Không xóa PNG nếu không refactor module Book.

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

1. `rawRooms`: 3 phòng, mỗi phòng có 3 wall definitions.
2. Auto-multiply: mỗi wall nhân thành 3 tranh, tổng **27 artwork panels**.
3. Texture mapping: dùng tuần tự `/textures/trangN.jpg`, N từ 1 đến 16 rồi quay vòng.
4. Title format mới: `"<title> - Tư liệu I/II/III"` thay cho `(1/3)`.
5. `museumPanels`: flat array cho `MuseumScene` render 27 `MuseumArtwork`.

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
  imageSrc,        // /textures/trangN.jpg
  roomAccent,
  roomTitle,
  roomId
}
```

---

## MuseumArtwork.jsx

Tranh hiện có:

- Khung vàng cổ điển bằng nhiều lớp `boxGeometry`.
- Canvas texture từ `panel.imageSrc`.
- Picture light nhỏ phía trên tranh.
- Plaque chỉ render khi tranh đang `focused` hoặc `selected`.
- `selected` làm tranh sáng hơn và plaque viền theo accent.
- Click tranh gọi `onSelect(panel)` để ghim tranh.

Đã bỏ:

- `near` state thừa.
- `useFrame` proximity logic trong artwork.
- Nút `Xem nội dung`.
- 27 plaque luôn hiển thị cùng lúc.

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
- Bottom-left controls: `W/A/S/D`, `Mũi tên nhìn quanh`, `Click ghim tranh`, `Esc bỏ ghim`.
- Khi click tranh: hiện card `Đang ghim tranh` ở góc phải dưới.
- `Escape`: bỏ ghim tranh.

Không render `MuseumGuide`.

---

## MuseumRoom.jsx

Components chính:

| Component | Chức năng |
|-----------|-----------|
| `useMuseumTextures()` | Load damask + marble textures, RepeatWrapping |
| `Room` | Render phòng/sảnh với floor, ceiling, walls/openings, trims, chandelier |
| `CeilingTrim` | Viền trần gỗ + brass |
| `MuseumBench` | Ghế băng ở các phòng phụ |
| `LobbyCenterpiece` | Centerpiece procedural trong sảnh, không dùng GLB |
| `MuseumChandelier` | Đèn chùm geometry local |
| `WallWithOpening` | Tường có cổng, casing, label |
| `Hallway` | Hành lang nối sảnh với phòng giữa |

Đã bỏ:

- `useGLTF("/models/globe.glb")`
- `LobbyCenterpiece` cũ không render
- các hằng `PLANT_*` orphan

Centerpiece mới:

- Bệ gỗ/brass.
- Abstract globe bằng `sphereGeometry` + `torusGeometry`.
- Brass floor inlay chỉ hướng tới các phòng.
- Label `Sơ đồ triển lãm`.

---

## MuseumScene.jsx

Không còn:

```jsx
<Environment preset="warehouse" />
```

Lý do: preset này gọi HDR từ GitHub/rawgithack, rủi ro khi demo offline/mạng yếu.

Scene hiện dùng lighting local:

- `ambientLight`
- `hemisphereLight`
- `directionalLight`
- lobby/room `spotLight`
- room accent `pointLight`
- artwork picture lights

Render order hiện tại:

```
background/fog → local lights → Sparkles →
MuseumPlayer → CameraDirectionTracker → MuseumRoom →
27× MuseumArtwork → ContactShadows
```

`CameraDirectionTracker`:

- Mỗi frame tính hướng camera.
- Chọn panel gần nhất trong 12 units và dot product > 0.8.
- Gọi `onFocusPanel(closestPanel)`.

---

## MuseumPlayer.jsx

Không đổi trong lượt mới nhất.

- WASD: di chuyển.
- ArrowLeft: nhìn sang trái. ArrowRight: nhìn sang phải.
- ArrowUp: nhìn lên. ArrowDown: nhìn xuống. Có giới hạn pitch để không lật camera.
- Camera rotation order: `YXZ` để nhìn trái/phải sau khi nhìn lên/xuống không làm màn hình bị nghiêng.
- Speed: `4.2`.
- Yaw speed: `1.5`.
- Pitch speed: `1.1`.
- Collision: AABB zones trong `WALKABLE_ZONES`.
- Wall-slide: thử X và Z độc lập.

---

## Verification mới nhất

Đã chạy:

```bash
npm run build
```

Kết quả:

- Build success.
- `657 modules transformed`.
- Không có lỗi compile.
- Vẫn còn warning chunk > 500KB do Three/R3F bundle, chưa code-split.

Đã kiểm tra bằng Playwright tại:

```text
http://localhost:5173/#exhibition
```

Kết quả:

- Console: không có runtime error.
- Network: không còn gọi HDR `rawgithack/raw.githubusercontent` cho museum environment.
- Museum panels tải `trang*.jpg`.
- Đi vào phòng bằng `W` được.
- Focus panel hoạt động.
- Click tranh mở card `Đang ghim tranh`.
- `Esc` đóng card.
- Mobile `390x844`: HUD/card không overflow.

Screenshot kiểm tra gần nhất:

```text
.playwright-cli/page-2026-05-19T10-57-23-232Z.png
```

Không dùng `view_image`.

---

## Lưu ý còn lại

1. PNG `trang*.png` vẫn được tải ở dev vì module Book import/preload texture PNG, dù đang ở tab exhibition. Đây không phải lỗi museum, nhưng nếu muốn tối ưu toàn app thì cần lazy import/code split theo tab.
2. `guideText` vẫn còn trong `museumData.js` như legacy data. Không dùng nó để hiện hướng dẫn viên. Nếu sau này cần, chỉ nên dùng như metadata/caption catalog, không phải thuyết minh nhân vật.
3. 27 panel vẫn dùng 16 ảnh lặp vòng. Nếu muốn polish nội dung, cần map ảnh đúng chủ đề thay vì tuần tự modulo.
4. Chunk production vẫn lớn khoảng 1.14MB minified. Tối ưu tiếp theo nên là dynamic import `BookPage`/`MuseumPage` theo tab.

---

## Lịch sử thay đổi gần nhất

### Session 4 — 2026-05-19 18:00 (Codex)

- Xóa hẳn `MuseumGuide.jsx`, `MuseumCarousel.jsx`, `guide-avatar.png`.
- Không dùng hướng dẫn viên/thuyết minh viên.
- Bỏ `Environment preset="warehouse"` để tránh remote HDR.
- Bỏ orphan `useGLTF`, globe GLB centerpiece cũ, plant constants.
- Thêm centerpiece procedural trong sảnh.
- Thêm brass floor inlay chỉ hướng.
- Artwork có picture light.
- Plaque chỉ hiện khi focused/selected.
- Click tranh thành cơ chế “ghim tranh”, mở catalog card nhỏ.
- Chuyển museum texture từ PNG sang JPG nén.

### Session 3 — 2026-05-19 17:00 (Antigravity/Claude)

- Thiết kế lại khung tranh vàng cổ điển.
- Xóa nút `Xem nội dung`.
- Bỏ render `MuseumGuide` khỏi `MuseumPage`.
- Dời plaque xuống dưới khung tranh.

### Session 2 — 2026-05-19 (Antigravity/Claude + Codex)

- Nhân mỗi tường thành 3 tranh, tổng 27 panel.
- Tích hợp texture `trang1.png → trang16.png`.
- Thêm bench, chandelier, trims, hallway/collision polish.

### Session 1 — 2026-05-19 (Antigravity/Claude)

- Refactor layout thành sảnh + 3 phòng nhánh.
- Viết lại data/room/scene/player museum.
- Thêm damask/marble textures.
