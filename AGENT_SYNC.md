# Báo cáo đồng bộ cho Codex Agent
**Cập nhật lần cuối:** 2026-05-19
**Tác giả:** Antigravity (Gemini)

## 1. Mục tiêu đã thực hiện
Đã hoàn thành việc refactor module **Triển lãm 3D** (`src/museum/`) từ một phòng gallery đơn lẻ thành mô hình **bảo tàng hành lang 3 phòng nối liền**, tương ứng với 3 nội dung trọng tâm của Tư tưởng Hồ Chí Minh về Nhà nước pháp quyền.

## 2. Kiến trúc & Logic hiện tại
- **Data (`museumData.js`)**: 
  - Đã chuyển sang cấu trúc phân cấp `museumRooms` gồm 3 phòng: (1) Hợp hiến hợp pháp, (2) Thượng tôn pháp luật, (3) Pháp quyền nhân nghĩa.
  - Mỗi phòng có property `accent` (màu đặc trưng) và mảng `panels` (chứa 3 bức tường: Cơ sở lý thuyết, Liên hệ thực tiễn, Giá trị vận dụng).
  - Mảng phẳng `museumPanels` được export để dễ dàng render các tranh 3D.
- **3D Scene (`MuseumScene.jsx` & `MuseumRoom.jsx`)**:
  - `MuseumRoom` kéo dài hành lang dọc theo trục Z (chiều sâu từ `z=0` đến `z=-40`), phân cách các phòng bằng cổng vòm (Archway).
  - Đã giới hạn `ROOM_LIMIT.minZ = -48` ở `MuseumPlayer.jsx` để đi được tới cuối hành lang.
  - Component `<CameraDirectionTracker>` ở trong `MuseumScene.jsx` thực hiện track hướng nhìn (quaternion) của camera. Nó tìm `panel` ở khoảng cách gần mà camera đang hướng tới (`dot product > 0.8`), sau đó kích hoạt callback `onFocusPanel`.
- **UI & State (`MuseumPage.jsx`)**:
  - State `selectedPanel` (dùng để hiển thị popup thuyết minh khi click).
  - State `focusedPanel` (dùng cho dynamic text overlay: khi nhìn vào tranh nào, tiêu đề tranh đó hiện lên góc trái màn hình).
  - Có thêm Room Indicators (các thanh hiển thị tiến trình dọc hành lang).
- **Thuyết minh viên ảo (`MuseumGuide.jsx`)**:
  - Nhận props `selectedPanel` và `currentRoom`.
  - Avatar màu, ánh sáng, và viền popup thay đổi linh hoạt theo màu `currentRoom.accent`.
  - Các nút điều hướng nhanh phía dưới popup **chỉ map các panel của phòng hiện tại**, giúp UI gọn gàng.

## 3. Ghi chú cho Codex (Người sửa logic chính)
- Nếu bạn cần tinh chỉnh movement/collision/WASD, file cần sửa là `MuseumPlayer.jsx`.
- Logic tính toán nhận diện góc quay camera đang ở `CameraDirectionTracker` (bên trong `MuseumScene.jsx`).
- Không còn sử dụng component `MuseumCarousel.jsx`, bạn có thể phớt lờ nó.
- Tỉ lệ khung tranh 3D (`MuseumArtwork.jsx`) đang được cấu hình cứng theo dạng portrait (đứng) tỉ lệ 3:4.

## 4. Codex review - 2026-05-19
- `npm run build` pass sau refactor 3 phòng.
- Đã sửa `defaultPanel` để lấy từ `museumPanels`, tránh thiếu `roomId` / `roomAccent` ở trạng thái khởi tạo.
- Đã sửa overlay và guide dùng `heading` thay vì `subtitle`, vì data panel hiện không có field `subtitle`.
- Đã tách `focusedRoom` và `guideRoom` trong `MuseumPage.jsx`: overlay/room indicator theo panel đang nhìn, còn guide popup theo panel đang chọn.
- Đã sửa vị trí cổng vòm trong `MuseumRoom.jsx`: group room đang offset `z=-20`, nên archway phải đặt local `z=10` và `z=-10` để ra global `z=-10` và `z=-30`.
- Đã đổi HUD từ "Chuột để xoay" sang "Mũi tên xoay" vì `MuseumPlayer.jsx` hiện chỉ hỗ trợ xoay bằng ArrowLeft/ArrowRight, chưa có mouse/pointer-lock.
- Headless smoke check `#exhibition` render được canvas, 9 panel, overlay phòng, mini room indicator và HUD.
