# 🤖 AGENT_SYNC.MD — Đồng bộ hóa trạng thái cho các AI Agents (Codex, Gemini, v.v.)

> **Cập nhật lần cuối:** 2026-05-22
> **Mục đích:** Ghi lại chi tiết tất cả các thay đổi lớn gần đây để các AI agent khác tiếp quản dự án có thể nắm bắt trạng thái tức thì và duy trì tính nhất quán.

---

## 1. CÁC THAY ĐỔI VỀ PHÂN HỆ "BẢO TÀNG 3D" (MUSEUM)

### 🔄 Đổi tên Phân hệ và Đồng bộ ID Routing
* **Yêu cầu:** Người dùng muốn đổi tên phân hệ **"Triển Lãm 3D"** thành **"Bảo tàng"**.
* **Các thay đổi đã thực hiện:**
  * **Router chính (`src/App.jsx`):**
    * Đổi nhãn tab từ `"Triển Lãm 3D"` thành `"Bảo tàng"`.
    * Đồng bộ hóa `id` tab từ `exhibition` thành `museum`.
    * Cập nhật component render: `{activeTab === "museum" && <MuseumPage />}`.
  * **Menu Điều Hướng (`src/game/sections/Navbar.jsx`):**
    * Cập nhật URL trong menu từ `#exhibition` thành `#museum`, nhãn tương ứng thành `'Bảo tàng'`.
    * Thay đổi toàn bộ logic kiểm tra và đồng bộ trạng thái `activeTab` từ `exhibition` sang `museum`.
  * **Giao diện Bảo tàng (`src/museum/MuseumPage.jsx` & `src/museum/MuseumRoom.jsx`):**
    * Tiêu đề sảnh mặc định đổi thành `"Bảo tàng Nhà nước pháp quyền"` thay vì `"Triển lãm Nhà nước pháp quyền"`.
    * Biển chỉ dẫn 3D tại sảnh chính đổi thành `"Sơ đồ bảo tàng"` thay vì `"Sơ đồ triển lãm"`.

### 🛠️ Sửa lỗi crash trắng màn hình trong phân hệ 3D
* **Vấn đề:** Khi truy cập tab Bảo tàng (trước đó là Triển Lãm 3D), màn hình bị crash trắng hoàn toàn.
* **Nguyên nhân:** Thiếu hai tệp texture nền quan trọng là `damask-pattern.png` và `marble-floor.png` trong thư mục `public/textures/`. Canvas 3D của React Three Fiber (R3F) không thể tải texture nên ném lỗi runtime làm sập Canvas.
* **Khắc phục:** Đã khôi phục thành công 2 file ảnh này từ phân vùng backup của hệ thống và sao chép an toàn vào [public/textures/](file:///d:/Ky8-FPT/mln111-g5/public/textures/). Lỗi crash đã được giải quyết triệt để.

---

## 2. CÁC THAY ĐỔI VỀ NỘI DUNG VÀ TÀI NGUYÊN (MEDIA)

### 📖 Đồng bộ ảnh Tạp chí (Sách 3D - `src/book/`)
* **Nội dung:** Người dùng đã cập nhật 22 trang ảnh mới cho Tạp chí.
* **Các thay đổi đã thực hiện:**
  * Đồng bộ toàn bộ 22 ảnh Tạp chí mới (`trang 1.png` đến `trang 20.png`, `bìa đầu.png`, `bìa cuối.png`) trong thư mục [public/textures/](file:///d:/Ky8-FPT/mln111-g5/public/textures/).
  * Cấu hình và lập bản đồ lật trang mượt mà cho 11 trang đôi của Tạp chí trong [UI.jsx](file:///d:/Ky8-FPT/mln111-g5/src/book/UI.jsx).

### 🖋️ Cập nhật Nội dung Thuyết minh mới
* **Lý thuyết & Thực tiễn (Tab Mở Đầu):**
  * Cập nhật nội dung thuyết minh mới về chính sách nhân đạo của Đảng và Nhà nước, cụ thể là sự kiện **Đặc xá Quốc khánh 2/9/2025** (xem xét hơn 10.000 hồ sơ) và vụ án **"Chuyến bay giải cứu"** (giảm nhẹ hình phạt cho các bị cáo khắc phục hậu quả).
  * Các file đã cập nhật: [CoSoLyThuyet.jsx](file:///d:/Ky8-FPT/mln111-g5/src/game/sections/CoSoLyThuyet.jsx) và [Summary.jsx](file:///d:/Ky8-FPT/mln111-g5/src/game/sections/Summary.jsx).
* **Nội dung ghim tranh trong Bảo tàng:**
  * Đồng bộ tương ứng các đoạn thuyết minh mới này vào phần `guideText` của `room3-center` (Đặc xá & Khoan hồng) và `room3-right` (Giá trị vận dụng) của Phòng 3 (Pháp quyền nhân nghĩa) trong tệp cấu hình dữ liệu 3D [museumData.js](file:///d:/Ky8-FPT/mln111-g5/src/museum/museumData.js).

---

## 3. KẾT QUẢ KIỂM THỬ VÀ TRẠNG THÁI HIỆN TẠI
* **Trạng thái Build:** Chạy lệnh `npm run build` thành công 100% không lỗi. Tất cả các assets (bao gồm hình ảnh tiếng Việt có dấu) được Vite đóng gói hoàn hảo.
* **Độ ổn định:** Phân hệ Bảo tàng 3D hoạt động mượt mà, ghim tranh hoạt động tốt, không còn lỗi sập Canvas.
* **Routing:** Hash routing hoạt động chính xác với các đường dẫn:
  * `#intro` (Mở Đầu)
  * `#book` (Tạp chí)
  * `#museum` (Bảo tàng)
  * `#ai` (AI Usage)

---

> 💡 **Ghi chú dành cho AI Agent tiếp theo:**
> - Khi thực hiện các lệnh shell trên môi trường Windows này, vui lòng sử dụng cấu trúc pipe (ví dụ: `Get-Content <file> | cmd //c` hoặc `echo "<lệnh>" | cmd //c`) để tránh việc `cmd //c` bị treo do sai lệch xử lý đối số của PowerShell.
> - Tuyệt đối tuân thủ rule phản hồi bằng tiếng Việt và không dùng alert().
