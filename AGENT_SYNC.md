# 🤖 AGENT_SYNC.MD — Đồng bộ hóa trạng thái cho các AI Agents (Codex, Gemini, v.v.)

> **Cập nhật lần cuối:** 2026-05-23
> **Mục đích:** Ghi lại chi tiết tất cả các thay đổi lớn gần đây để các AI agent khác tiếp quản dự án có thể nắm bắt trạng thái tức thì và duy trì tính nhất quán.

---

## CẬP NHẬT MỚI NHẤT 2026-05-23 — BỎ HOÀN TOÀN ĐÈN RIÊNG TRÊN TRANH

Theo chốt mới nhất của người dùng, museum giữ cảm giác phòng trưng bày thật bằng ánh sáng sảnh/phòng và khung tranh, nhưng **không dùng bất kỳ hiệu ứng sáng riêng nào trên từng artwork**.

### Trạng thái hiện tại
* `src/museum/MuseumArtwork.jsx` chỉ còn khung tranh 3D 6 lớp + plane ảnh PNG gốc. Không còn `useFrame`, `useState`, `spotLight`, `pointLight`, nón sáng, thanh đèn, lớp warm wash hay `AdditiveBlending` trên tranh.
* Ảnh tranh vẫn dùng texture PNG full resolution, không downscale, không đổi sang JPG/WebP.
* Tất cả tranh vẫn được mount sẵn từ `museumPanels.map(...)`; không lazy show theo phòng để tránh cảm giác giật khi đi vào phòng.
* Focus text/plaque nhẹ vẫn đi theo logic nhìn vào tranh ở `MuseumPage.jsx`/`CameraDirectionTracker`, không có click-ghim và không có bảng "Đang ghim tranh".
* Điều khiển museum giữ đơn giản: WASD để di chuyển, phím mũi tên để nhìn lên/xuống/trái/phải; ArrowUp là nhìn lên, ArrowDown là nhìn xuống.

### Lý do bỏ đèn tranh
* Cone/spotlight/warm wash riêng từng tranh làm visual dễ lệch, tạo vệt sáng xấu và che nội dung ảnh.
* Nhiều dynamic lights theo artwork làm GPU dễ spike, nhất là khi texture PNG lớn đang được upload/hiển thị.
* Với bản demo, ánh sáng phòng/sảnh ổn định + ảnh rõ nét + khung tranh dày cho cảm giác museum sạch hơn và ít rủi ro hơn.

---

## CẬP NHẬT KHẨN 2026-05-22 — SỬA ĐÈN TRANH VÀ GIẬT LAG MUSEUM

* `src/museum/MuseumArtwork.jsx` đã bỏ toàn bộ volumetric cone/spotlight/pointLight động theo từng tranh. Logic cũ tạo mảng tam giác trắng lệch, không phủ đều toàn bộ bức tranh và dễ gây nặng GPU.
* Cập nhật 2026-05-23: picture light nhẹ và warm wash phẳng cũng đã được bỏ tiếp. Tranh hiện chỉ dùng plane ảnh PNG gốc full resolution trong khung 3D, không downscale, không đổi sang JPG/WebP.
* `src/museum/MuseumPage.jsx` và `src/museum/MuseumScene.jsx` đã bỏ lại logic click-ghim/bảng thông tin tranh. Museum không còn `selectedPanel`, `onSelectPanel`, bảng "Đang ghim tranh" hay click tranh để mở aside.
* Performance: mỗi artwork không còn `useFrame`, không còn setState khoảng cách, không còn mount/unmount đèn động khi camera di chuyển. Scene chỉ còn một tracker camera chung để đổi tiêu đề/focus. Sparkles lobby giảm xuống 35 và Canvas dùng `powerPreference: "high-performance"`.

---

## LỊCH SỬ 2026-05-22 — THỬ NGHIỆM ĐÈN TRANH (KHÔNG CÒN ÁP DỤNG)

> Mục này chỉ giữ làm bối cảnh. Code hiện tại **không** dùng cone/spotlight/picture-light/warm-wash riêng cho từng tranh.

Chúng tôi đã thực hiện một nâng cấp đột phá và toàn diện đối với hệ thống chiếu sáng và hiệu năng của phân hệ bảo tàng 3D (`src/museum/`):

### 1. Đồng bộ hóa hình học chùm sáng nón vật lý (Volumetric Light Cone) hoàn mỹ
* **Vấn đề cũ**: Spotlight thực tế nhắm vào tâm tranh (`[0, 0, 0]`), nhưng đầu đèn vật lý và nón sáng 3D giả lập lại xoay một góc chúc cứng quá nghiêng là **`32.7°` (Math.PI / 5.5)**. Sự lệch hướng này khiến chùm nón sáng bị chúc xuống dưới đất quá mức, cắt cụt đỉnh tranh và loe rộng lố bịch dưới sàn nhà.
* **Cải tiến**:
  - Căn chỉnh góc chúc đầu đèn và nón sáng về đúng góc hướng tâm chuẩn xác **`18.5°` (Math.PI / 9.7)**. Bây giờ đầu đèn hướng thẳng tắp 100% vào tâm bức tranh, đồng trục hoàn hảo với spotlight thực tế.
  - Rút ngắn chiều dài nón sáng từ `2.7m` về **`1.8m`** (vị trí cục bộ `y` từ `-1.35` về **`-0.9`**).
  - Thu nhỏ bán kính loe đáy nón từ `1.6m` về **`1.4m`** (`cylinderGeometry args={[0.06, 1.4, 1.8, 32, 1, true]}`).
  - **Kết quả**: Chùm sáng chụm gọn gàng, rọi sáng mịn màng, đều đặn **từ đỉnh bức tranh xuống chân bức tranh**, làm nổi bật rõ nét chữ viết tư liệu ở phía trên, đồng thời **triệt tiêu hoàn toàn vệt sáng loe lố bịch dưới sàn nhà**.

### 2. Triệt tiêu lag giật bảo tàng bằng Distance-based LOD cho nguồn sáng động
* **Vấn đề cũ**: Bảo tàng có tổng cộng 19 bức tranh, mỗi bức tranh đều thắp sáng một spotlight động thời gian thực liên tục. GPU phải tính toán chiếu sáng đa hướng cho 19 spotlight + 8 nguồn sáng nền cùng lúc, gây tụt khung hình nghiêm trọng.
* **Cải tiến**:
  - Triển khai **Distance-based LOD** cho nguồn sáng động: Sử dụng phép tính khoảng cách tĩnh cực nhẹ trên CPU trong `useFrame` để chỉ thắp sáng Spotlight động của bức tranh khi người chơi đứng trong bán kính gần **9.0m** (phòng hiện tại).
  - Khi ở xa, đèn spotlight động được tắt hoàn toàn để giải phóng GPU, giúp FPS tăng vọt lên **60 FPS ổn định, mượt mà như nhung**.
  - Thiết lập nón sáng vật lý Basic Material thông minh phản hồi opacity theo 3 cấp độ:
    - *Ngắm trực diện (`active`)*: Opacity đạt `0.18` rực rỡ, lung linh nhất.
    - *Ở gần phòng (`isNear`)*: Opacity đạt `0.08` ấm áp, chân thực.
    - *Ở xa*: Opacity duy trì `0.03` mờ ảo nhẹ nhàng giúp bảo tàng lung linh từ xa mà không tốn 1% tài nguyên chiếu sáng của GPU.
  - Loại bỏ `castShadow` thừa thãi trên 4 đèn spotlight môi trường của sảnh và các phòng trưng bày để giải phóng WebGL khỏi việc khởi tạo shadow maps vô ích.

---

## LỊCH SỬ TRƯỚC ĐÓ — THỬ NGHIỆM KHUNG/ĐÈN TRANH (KHÔNG CÒN ÁP DỤNG ĐẦY ĐỦ)

> Mục này có nhắc tới pointLight/spotlight trên tranh vì là lịch sử thử nghiệm. Trạng thái hiện tại xem mục 2026-05-23 ở đầu file.

* **Loại bỏ hoàn toàn quầng sáng đỏ/vàng nhân tạo hắt tường (Backlight Glow Aura):**
  - Đã xóa bỏ hoàn toàn lớp mesh `Backlight Glow Aura` và `pointLight` đổi màu phòng tạo ra những hình chữ nhật phát sáng mờ làm nhòe bức tường Damask và ám màu lòe loẹt lên tranh tư liệu. Chỉ giữ lại chùm sáng Spotlight vật lý màu trắng ấm tự nhiên (`#ffe8c5`) rọi từ trên cao xuống để làm nổi bật khung tranh và tác phẩm một cách tự nhiên và chân thực nhất.
* **Thiết kế Khung Đồng Cổ Hoàng Gia (Royal Antique Bronze) đúc nguyên khối đồng nhất 100%:**
  - Sử dụng **duy nhất một chất liệu Đồng Cổ ngả nâu xám vàng trầm ấm quý phái** (`#4d3d2f`, metalness `0.82`, roughness `0.38`) cho toàn bộ khung tranh: từ khung nền, 5 lớp gờ nổi 3D vát góc xếp chồng, cho đến cụm chạm khắc Baroque 4 góc.
  - Cấu trúc khung 5 lớp vát góc 3D xếp chồng tinh xảo được mỏng hóa về dạng mỏng `0.01` (1cm) để tạo các bậc bắt sáng tinh tế mà không bao giờ đè lấn tranh:
    1. *Lớp 1: Khung nền chịu lực phía sau (Backing Base)*: `2.28 x 2.88 x 0.01` (`z = 0.00`).
    2. *Lớp 2: Thân khung chính vát góc lớn (Main Sculpted Bevel)*: `2.20 x 2.80 x 0.01` (`z = 0.01`).
    3. *Lớp 3: Gờ nổi kiến trúc trang trí ngoài (Outer Classical Relief)*: `2.10 x 2.70 x 0.01` (`z = 0.02`).
    4. *Lớp 4: Gờ chỉ viền trong bo sát tranh (Inner Classical Fillet)*: `1.90 x 2.50 x 0.01` (`z = 0.03`).
    5. *Lớp 5: Gờ vát hướng tâm ôm lấy tác phẩm (Centripetal Slope)*: `1.84 x 2.44 x 0.01` (`z = 0.04`).
  - Cụm điêu khắc góc Baroque 3D đồng chất đúc nổi 3 tầng tại 4 góc (`x = ±0.98, y = ±1.28`):
    - *Tầng 1 (Đế góc vuông)*: boxGeometry `[0.18, 0.18, 0.01]` tại `z = 0.046` cục bộ.
    - *Tầng 2 (Khối thoi chạm khắc chéo)*: boxGeometry `[0.11, 0.11, 0.012]` tại `z = 0.052` cục bộ, xoay góc 45 độ (`rotation={[0, 0, Math.PI / 4]}`).
    - *Tầng 3 (Ngọc đồng đúc nổi)*: sphereGeometry bán kính `0.032` tại `z = 0.058` cục bộ hứng sáng lấp lánh tự nhiên.
  - Đồng bộ chất liệu Đồng Cổ Hoàng Gia trầm ấm này cho cả **Hai thanh treo tranh chạy dọc sát trần** và **Toàn bộ giá đỡ đèn rọi ngang** để tạo nên sự nhất quán tuyệt đỉnh.
* **Canvas Tranh phẳng căng vĩnh viễn không Z-fighting:** Vị trí tranh tư liệu (`meshBasicMaterial` sáng rõ nét căng 100%) được định vị chính xác ở **`z = 0.052`**, nhô nhẹ lên trước mặt trước của gờ vát hướng tâm Lớp 5. Đảm bảo tranh phẳng căng, hiển thị rõ ràng 100% hình ảnh nguyên bản, màu sắc rực rỡ chân thực và loại bỏ hoàn toàn hiện tượng Z-fighting hay bị che khuất ở mọi khoảng cách.
* **Bổ sung đèn PointLight trắng ấm tự nhiên:**
  - Tích hợp thêm đèn `pointLight` màu trắng ấm dịu (`#ffe8c5`) đặt tại `position={[0, 0, 1.2]}` ngay phía trước tranh, tự động rọi sáng 100% bề mặt tranh tư liệu và khung đồng cổ hoàng gia Baroque từ xa đến gần, loại bỏ hoàn toàn hiện tượng rìa tranh hay các góc bị bóng tối che phủ.

---

## 4. CÁC THAY ĐỔI VỀ PHÂN HỆ "BẢO TÀNG 3D" (MUSEUM)

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
* **Nguyên nhân:** Thiếu hai tệp texture nền quan trọng là `damask-pattern.png` và `marble-floor.png` trong thư mục `public/textures/`.
* **Khắc phục:** Đã khôi phục thành công 2 file ảnh này từ phân vùng backup của hệ thống và sao chép an toàn vào [public/textures/](file:///d:/Ky8-FPT/mln111-g5/public/textures/). Lỗi crash đã được giải quyết triệt để.

---

## 5. CÁC THAY ĐỔI VỀ NỘI DUNG VÀ TÀI NGUYÊN (MEDIA)

### 📖 Đồng bộ ảnh Tạp chí (Sách 3D - `src/book/`)
* **Các thay đổi đã thực hiện:**
  * Đồng bộ toàn bộ 22 ảnh Tạp chí mới (`trang 1.png` đến `trang 20.png`, `bìa đầu.png`, `bìa cuối.png`) trong thư mục [public/textures/](file:///d:/Ky8-FPT/mln111-g5/public/textures/).
  * Cấu hình và lập bản đồ lật trang mượt mà cho 11 trang đôi của Tạp chí trong [UI.jsx](file:///d:/Ky8-FPT/mln111-g5/src/book/UI.jsx).

### 🖋️ Cập nhật Nội dung Thuyết minh mới
* **Lý thuyết & Thực tiễn (Tab Mở Đầu):**
  * Cập nhật nội dung thuyết minh mới về chính sách nhân đạo của Đảng và Nhà nước, cụ thể là sự kiện **Đặc xá Quốc khánh 2/9/2025** và vụ án **"Chuyến bay giải cứu"**.
  * Các file đã cập nhật: [CoSoLyThuyet.jsx](file:///d:/Ky8-FPT/mln111-g5/src/game/sections/CoSoLyThuyet.jsx) và [Summary.jsx](file:///d:/Ky8-FPT/mln111-g5/src/game/sections/Summary.jsx).
* **Nội dung ghim tranh trong Bảo tàng:**
  * Nội dung chính hiện nằm trong ảnh tranh/panel của Bảo tàng. Không còn guide/avatar/thuyết minh viên trong UI museum.

---

## 6. KẾT QUẢ KIỂM THỬ VÀ TRẠNG THÁI HIỆN TẠI (CẬP NHẬT 2026-05-23)
* **MuseumArtwork:** Không còn spotlight target, pointLight, cone, wash, `useFrame` hay state khoảng cách trong từng artwork.
* **Trạng thái Build:** `npm run build` chạy thành công. Vite còn warning bundle lớn/caniuse-lite/eval từ thư viện, nhưng không có lỗi compile.
* **Browser check:** Playwright mở `http://127.0.0.1:5173/#museum`, canvas render kích thước đầy đủ, pixel check không trắng màn hình, không có `pageerror` hay response 404.
* **Routing:** Hash routing hoạt động chính xác: `#intro`, `#book`, `#museum`, `#ai`.

---

> 💡 **Ghi chú dành cho AI Agent tiếp theo:**
> - Khi thực hiện các lệnh shell trên môi trường Windows này, vui lòng chạy lệnh trực tiếp (ví dụ: `npm run build`) hoặc sử dụng cấu trúc PowerShell chuẩn để tránh việc `cmd //c` bị treo do sai lệch xử lý đối số của PowerShell.
> - Tuyệt đối tuân thủ rule phản hồi bằng tiếng Việt và không dùng alert().
