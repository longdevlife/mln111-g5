# 🔄 AGENT_SYNC.md — Handoff cho Codex

> **Cập nhật:** 2026-05-19
> **Tác giả:** Antigravity (Claude)
> **Mục đích:** Codex đọc file này để biết những gì đã thay đổi và cần check lỗi

---

## 📌 THAY ĐỔI GẦN NHẤT: Museum Upgrade (Sảnh + 3 Phòng)

### Tóm tắt
Refactor hoàn toàn module `src/museum/` từ **hành lang dọc 3 phòng nối tiếp** sang **sảnh trung tâm + 3 phòng nhánh (Trái/Giữa/Phải)** với texture tường damask và sàn marble.

### Files đã thay đổi

| File | Mức độ | Mô tả |
|------|--------|-------|
| `src/museum/museumData.js` | **REWRITE** | Layout mới: tọa độ phòng, panel positions/rotations, WALKABLE_ZONES collision boxes |
| `src/museum/MuseumRoom.jsx` | **REWRITE** | Component Room (4 tường + texture), WallWithOpening (archway), Hallway, useMuseumTextures |
| `src/museum/MuseumScene.jsx` | **REWRITE** | Camera start tại sảnh, per-room accent lights, expanded fog/sparkles |
| `src/museum/MuseumPlayer.jsx` | **REWRITE** | Multi-zone AABB collision thay vì single bounding box |
| `public/textures/damask-pattern.png` | **NEW** | Texture hoa văn damask vàng nhạt cho tường |
| `public/textures/marble-floor.png` | **NEW** | Texture sàn đá marble vàng ấm |

### Files AG không thay đổi ở bước refactor đầu
- `src/museum/MuseumArtwork.jsx` — logic hiển thị tranh
- `src/museum/MuseumGuide.jsx` — thuyết minh viên ảo
- `src/museum/MuseumCarousel.jsx` — carousel fallback
- `src/museum/MuseumPage.jsx` — page wrapper lúc đầu, sau đó Codex đã chỉnh overlay sảnh/focus

---

## 🏗 KIẾN TRÚC MỚI

### Layout (Top-Down View)
```
                     ┌──────────────┐
                     │  PHÒNG GIỮA  │  (0, 0, -19)
                     │  Thượng tôn  │  12×10
                     │  pháp luật   │
                     └──────┬───────┘
                            │ hallway
   ┌────────────┐    ┌──────┴───────┐    ┌────────────┐
   │ PHÒNG TRÁI │────│    SẢNH      │────│ PHÒNG PHẢI │
   │ (-16,0,2)  │    │   (0,0,0)    │    │ (16,0,2)   │
   │ Hợp hiến   │    │   20×14      │    │ PQ nhân    │
   │ 12×10      │    │   Camera ↑   │    │ nghĩa 12×10│
   └────────────┘    └──────────────┘    └────────────┘
```

### Mỗi phòng có 3 artwork panels:
- **Tường trái/cuối** → Cơ sở lý thuyết
- **Tường giữa (sâu nhất)** → Liên hệ thực tiễn
- **Tường phải** → Giá trị vận dụng

---

## ⚠️ CẦN CODEX CHECK

### 1. Runtime Errors
- [ ] Texture loading (`useTexture`) có hoạt động không? File path: `/textures/damask-pattern.png` và `/textures/marble-floor.png`
- [ ] `texture.clone()` trong `MuseumRoom.jsx` — có thể gây warning về "cannot clone texture before it's loaded"
- [ ] `THREE.RepeatWrapping` set trước khi texture load xong?

### 2. Collision Detection (`MuseumPlayer.jsx`)
- [ ] WALKABLE_ZONES trong `museumData.js` có overlap đúng giữa sảnh ↔ hành lang ↔ phòng không?
- [ ] Player có bị kẹt ở cửa nối giữa sảnh và phòng không?
- [ ] Wall-sliding (try X/Z independently) có smooth không?

### 3. Panel Positions (`museumData.js`)
- [ ] 9 panels (3 rooms × 3 walls) có đúng vị trí trên tường tương ứng không?
- [ ] Panel rotation có quay đúng hướng (mặt panel facing vào phòng) không?
- [ ] CameraDirectionTracker (`MuseumScene.jsx`) có detect đúng panel gần nhất không?

### 4. Layout Geometry (`MuseumRoom.jsx`)
- [ ] Cổng vòm (WallWithOpening) có khớp giữa sảnh và hành lang không? (openW=4, openH=4.5)
- [ ] Hành lang (Hallway) tính toán `length` có chính xác không? Công thức hiện tại dựa trên khoảng cách giữa 2 room centers trừ đi half-widths
- [ ] Sàn, trần, tường có bị gap/overlap không?

### 5. Performance
- [ ] Texture clone cho mỗi Room — có nên share texture thay vì clone?
- [ ] Tổng mesh count có quá nhiều không? (estimate ~50-60 meshes)

---

## 📝 THAY ĐỔI TRƯỚC ĐÓ (Magazine Tab)

### `src/book/UI.jsx`
- Xóa masthead header cũ → thay bằng **editorial edge branding** (chữ dọc 2 bên, issue stamp góc trái, tiêu điểm góc phải, page indicator góc dưới trái)
- Bottom nav island giờ dùng `position: absolute` thay vì flex layout
- Font sizes đã tăng lên cho dễ đọc (12px vertical text, 22px tiêu điểm, text-6xl page number)

### `src/book/IntroScreen.jsx`
- Xóa emoji/icon trang trí
- CTA button clean, professional tone

---

## 🔧 BUILD STATUS

```
✓ npm run build — SUCCESS (658 modules, exit code 0)
```

## ✅ Codex fix/review — 2026-05-19

- Đã sửa trạng thái mở đầu của museum: overlay mặc định là **Sảnh trung tâm**, không còn tự nhận Phòng trái khi vừa vào.
- Đã remap panel Phòng trái/Phòng phải theo hướng người xem bước vào phòng:
  - Tường trái → Cơ sở lý thuyết
  - Tường giữa/sâu nhất → Liên hệ thực tiễn
  - Tường phải → Giá trị vận dụng
- Đã chỉnh `WALKABLE_ZONES` để side rooms chỉ nối với sảnh qua doorway zone, tránh đi xuyên tường ở mép trái/phải.
- Đã thêm label/signage cho các cổng trong `MuseumRoom.jsx`.
- Đã memo hóa texture clone trong `MuseumRoom.jsx` để giảm clone texture lặp lại khi render.
- Đã sửa `CameraDirectionTracker` để clear focus về sảnh khi camera không còn nhìn vào panel nào.

### Verification

- One-off layout invariant assertion: PASS.
- `npm run build`: PASS.
- Browser smoke test `http://localhost:5173/#exhibition`: PASS, canvas render được, overlay sảnh đúng, door labels xuất hiện, không có console warning.

## ✅ Codex visual polish — 2026-05-19

- Đã sửa hallway giữa bằng cách tính theo mép tường lobby/phòng giữa, không còn để vách hallway lấn ngược vào sảnh.
- Đã đổi cổng từ khung accent một màu sang lớp dark walnut + antique brass để giống museum hơn.
- Đã tint sàn marble sang vàng ấm hơn bằng material color, không thêm texture mới.
- Đã thêm viền trần và chandelier primitive nhẹ cho sảnh/3 phòng, không thêm dependency hay GLB.
- Đã đổi trần từ đen sang nâu ấm tối và làm viền trần dày hơn để tránh lỗi nét vàng đứt đoạn.
- Đã thêm cây chậu 3D procedural ở sảnh bằng primitive geometry, không tải model ngoài.
- Đã thêm `occlude` cho các `Html` label trong museum để chữ không hiện xuyên qua tường.
- Đã bỏ label mặt sau của cổng phòng để tránh chồng chữ/xuyên chữ khi nhìn từ sảnh vào phòng.

### Verification cần chạy sau polish

- One-off layout invariant assertion.
- `npm run build`.
- Browser smoke test `http://localhost:5173/#exhibition` kiểm tra cổng giữa, sàn, trần, đèn và console.
