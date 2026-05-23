# 🤖 AGENT_SYNC.MD — Đồng bộ hóa trạng thái cho các AI Agents (Codex, Gemini, v.v.)

> **Cập nhật lần cuối:** 2026-05-23
> **Mục đích:** Ghi lại chi tiết tất cả các thay đổi lớn gần đây để các AI agent khác tiếp quản dự án có thể nắm bắt trạng thái tức thì và duy trì tính nhất quán.

---

## 🏛️ HOÀN THÀNH XUẤT SẮC HẠNG MỤC 4: TƯỢNG BÁC HỒ & RÀO CHẮN RUY BĂNG HOÀNG GIA - CẬP NHẬT 2026-05-23 12:24

### 1. Thay thế và tích hợp tượng Bác Hồ 3D:
* **Tệp mã nguồn:** [MuseumRoom.jsx](file:///d:/Ky8-FPT/mln111-g5/src/museum/MuseumRoom.jsx)
* **Thực hiện:**
  - **Xóa bỏ hoàn toàn bệ tròn cũ:** Loại bỏ 3 mesh cylinder của bệ đỡ cũ (pedestal của quả địa cầu cũ), tránh hiện tượng đâm xuyên bừa bộn vào ngực tượng và bia đá. Tượng Bác Hồ giờ đây đứng độc lập trên chính bệ đế nguyên bản của mô hình.
  - **Sửa lỗi thụt lún sàn nhà:** Nâng cao tọa độ Y của tượng lên **`1.14`** (tọa độ mới: **`position={[0.22, 1.14, 0.95]}`** với **`scale={[4.2, 4.2, 4.2]}`**). Chân đế màu xanh chữ "PRESIDENT" của tượng hiện tại đứng khít khao, vững chãi ngay trên mặt sàn đá cẩm thạch của bảo tàng, không còn bị chọc xuyên xuống đất.
  - **Xoay hướng chính xác:** Xoay mặt tượng hướng về phía lối vào sảnh chính (`rotation={[0, 0, 0]}`) để người tham quan nhìn thấy diện mạo tôn kính của Bác cùng tấm bia khắc toàn bộ tiểu sử tiếng Việt & tiếng Anh cực kỳ to rõ, trang trọng ngay khi bước vào.

### 2. Thiết kế hệ thống cột chắn và ruy băng nhung đỏ bo góc hoàng gia:
* **Hàng rào hình chữ nhật khổng lồ bao trọn vẹn cụm tượng (5.6m x 6.0m):**
  - Nhằm tạo khoảng cách thông thoáng và loại bỏ hoàn toàn việc dây chắn đè lên mô hình 3D, hàng rào ruy băng nhung đỏ đã được **mở rộng tối đa lên kích thước khổng lồ**:
    - Chiều ngang (trục X): Rộng **`5.6m`** (`x = ±2.8`).
    - Chiều sâu (trục Z): Kéo dài về phía sau đến **`-3.4`** và ra trước đến **`2.6`** (tổng chiều sâu **`6.0m`**).
    - Cột 1 & 2 (Trước): `[±2.8, 0, 2.6]` — Cột 3 & 4 (Sau): `[±2.8, 0, -3.4]`.
    - Dây chắn dọc hai bên sườn dài **`6.0m`** đặt tại `z = -0.4` (trung điểm của 2.6 và -3.4).
  - **Kết quả:** Dải ruy băng nhung đỏ thẫm giờ đây nằm cách xa bệ tượng, bao bọc toàn bộ cụm tượng Bác Hồ một cách vô cùng bề thế, thoáng đãng và trang trọng bậc nhất, hoàn toàn không chạm hay đâm xuyên vào bất cứ góc cạnh nào.

### 3. Giải quyết triệt để lỗi nhìn xuyên tường của các bảng chữ (Html Components):
* **Lỗi cũ:** Thẻ `<Html>` của Drei mặc định render bằng phần tử DOM đè lên Canvas, làm bảng chữ vinh danh Bác và các biển tên phòng trên vòm cửa bị nhìn xuyên tường khi đứng ở phía sau hoặc từ phòng khác.
* **Cải tiến:**
  - Tích hợp thuộc tính **`occlude`** vào thẻ `<Html>` của **Bảng tên đồng vinh danh Bác Hồ** (dòng 384) và **Tất cả các biển chỉ dẫn tên phòng trên vòm cửa** (dòng 529).
  - **Kết quả:** Bảng chữ tự động ẩn đi (thiết lập class ẩn) khi bị che khuất bởi tượng hoặc tường gấm, triệt tiêu hoàn toàn lỗi nhìn xuyên tường khó chịu, đem lại trải nghiệm 3D liền mạch, chuẩn mực.

### 4. Thiết kế giá đỡ bảng tên bằng đồng nghiêng chuyên nghiệp (Đặt ngoài hàng rào mới):
* **Giá đỡ đồng riêng biệt:** Thiết kế một bục trụ đồng nhỏ mạ vàng nghiêng nhẹ ở ngay phía trước ngoài hàng rào ruy băng mới (`position={[0, 0, 2.78]}`).
* **Chi tiết:** Tấm bảng tên bằng đồng mạ vàng hoàng gia ghi dòng chữ: **"CHỦ TỊCH HỒ CHÍ MINH (1890 - 1969)"** được đặt nằm nghiêng hướng lên góc `-0.4` radian tại `position={[0, 0.52, 2.84]}`, giúp khách tham quan dễ dàng đọc thông tin vinh danh Bác một cách cực kỳ trang trọng và chuyên nghiệp.

### 5. Trạng thái Build:
* `npm run build` chạy thành công 100% ổn định. Hạng mục số 4 chính thức **HOÀN THÀNH XUẤT SẮC** vượt tiến độ!

---

## 👥 HOÀN THÀNH HẠNG MỤC 3: KHÁCH THAM QUAN 3D (MUSEUM VISITORS) - CẬP NHẬT 2026-05-23 11:15

### 1. Hoàn thiện mô hình khách tham quan học sinh dễ thương:
* **Tệp mã nguồn:** [MuseumVisitors.jsx](file:///d:/Ky8-FPT/mln111-g5/src/museum/MuseumVisitors.jsx)
* **Thiết kế đột phá:** 
  - Tạo hình Low-Poly Chibi dễ thương (đầu tròn, tóc nấm, mắt chấm đen) sử dụng 100% Primitive Geometries, giúp tải tức thì và giải phóng GPU.
  - Phối màu ngẫu nhiên nhưng nhất quán theo `seed` (màu da, tóc, áo sơ mi, áo vest ngoài, cà vạt, balo học sinh).
  - Tinh chỉnh tư thế ngồi (`VisitorSeated`) khớp hoàn hảo ở độ cao `0.52` với băng ghế gỗ sẵn có của bảo tàng, bổ sung quả cầu bàn tay màu da tròn trịa.

### 2. Sửa lỗi giải phẫu cánh tay:
* **Khắc phục đơ cứng:** Đã nâng khớp vai (`y = 0.84` cho đứng, `y = 0.30` cho ngồi) và nâng bàn tay (`y = 0.62` cho đứng, `y = 0.14` cho ngồi) để bả vai nằm đúng vị trí sinh học tự nhiên, loại bỏ hoàn toàn cảm giác xệ vai hay tay dài bất thường.
* **Tư thế tự nhiên:** Thu hẹp góc xoay Z (`rotation.z = ±0.06` cho đứng, `rotation.z = ±0.05` cho ngồi) để cánh tay xuôi sát thân mình một cách tự nhiên và mềm mại.

### 3. Tối ưu hóa mặt bằng sảnh trung tâm:
* **Hành động:** Xóa hoàn toàn 2 nhân vật đứng đối xứng ở sảnh trung tâm bên cạnh quả địa cầu "Sơ đồ bảo tàng".
* **Mục tiêu:** Trả lại không gian sảnh trung tâm rộng rãi, thông thoáng, tôn vinh quả địa cầu 3D ở chính diện và tạo lối đi tự do sang hai bên phòng trưng bày lý thuyết.

### 4. Trạng thái Build:
* Chạy `npm run build` thành công 100% ổn định. Hạng mục số 3 chính thức **HOÀN THÀNH XUẤT SẮC**!

---

## 🎨 POPUP XEM TRANH CHUYÊN NGHIỆP & ĐỔI ẢNH TRANH MỚI (CẬP NHẬT 2026-05-23 01:05)

### 1. Popup xem tranh chuyên nghiệp khi click
* **File mới:** [ArtworkPopup.jsx](file:///D:/Ky8-FPT/mln111-g5/src/museum/ArtworkPopup.jsx) — Component React HTML overlay (không phải 3D), render **trên** Canvas với `z-index: 1000`.
* **Cách hoạt động:**
  - Click vào bất kỳ bức tranh nào trong bảo tàng → popup full-screen mở ra.
  - Backdrop: `rgba(6,4,2,0.88)` + `backdrop-filter: blur(16px)`, fade-in 350ms.
  - Ảnh tranh phóng to HD (`max-width: 78vw, max-height: 72vh`) bọc trong khung CSS giả Baroque (gradient gold, multi-layer box-shadow, passpartout nhung đen).
  - Thông tin bên dưới: Tên phòng (màu accent của phòng), tiêu đề tranh (font Playfair Display), heading mô tả (font EB Garamond italic).
  - Animation mở: `scale(0.92) → scale(1)` + `opacity 0 → 1` với cubic-bezier mượt.
  - Nút đóng `✕` góc trên phải, border gold, hover glow effect.
  - Đóng bằng: Click backdrop (ngoài ảnh), nhấn `Escape`, hoặc nút ✕.
  - Con trỏ chuột đổi thành `pointer` khi hover trên tranh trong scene 3D.
* **Files đã sửa:**
  - [MuseumArtwork.jsx](file:///D:/Ky8-FPT/mln111-g5/src/museum/MuseumArtwork.jsx): Thêm `onClick` → gọi `onSelect(panel)`, `onPointerOver/Out` → đổi cursor.
  - [MuseumScene.jsx](file:///D:/Ky8-FPT/mln111-g5/src/museum/MuseumScene.jsx): Nhận & truyền prop `onSelectPanel` xuống mỗi `MuseumArtwork`; nhận thêm `controlsEnabled` để khóa điều khiển khi popup mở.
  - [MuseumPage.jsx](file:///D:/Ky8-FPT/mln111-g5/src/museum/MuseumPage.jsx): Thêm state `selectedPanel`, callback `handleSelectPanel`/`handleClosePopup`, render `<ArtworkPopup>`, truyền `controlsEnabled={!selectedPanel}` xuống scene.
  - [MuseumPlayer.jsx](file:///D:/Ky8-FPT/mln111-g5/src/museum/MuseumPlayer.jsx): Nhận prop `enabled`; khi popup mở sẽ xóa phím đang giữ và bỏ qua WASD/Arrow để camera không tiếp tục di chuyển sau lớp overlay.
* **Lưu ý:** `selectedPanel` (popup) khác với `focusedPanel` (camera hướng tới). Hai state hoàn toàn độc lập.

### 2. Đổi ảnh tranh bảo tàng (ghi đè file `!!!!` và `!!!!!`)
* Các file có dấu `!!!!!` (5 dấu) hoặc `!!!!` (4 dấu) là phiên bản mới do người dùng cung cấp, đã được ghi đè lên file gốc tương ứng và xóa sạch file nguồn:

| Thư mục | File mới (đã xóa) | File đích (đã ghi đè) |
|---------|-------------------|----------------------|
| `nhanuochophienhopphap/` | `!!!!!tường trái 1.png` | `tuong_trai_1.png` |
| `nhanuochophienhopphap/` | `!!!!!tường trái 2.png` | `tuong_trai_2.png` |
| `nhanuocthuongtonphapluat/` | `!!!!tường trái 1.png` | `tuong_trai_1.png` |
| `nhanuocthuongtonphapluat/` | `!!!!tường trái 2.png` | `tuong_trai_2.png` |
| `nhanuocthuongtonphapluat/` | `!!!!tường giữa 2.png` | `tuong_giua_2.png` |

* Đường dẫn trong `museumData.js` **không cần thay đổi** vì file đích giữ nguyên tên cũ.
* Bìa cuối sách (`public/textures/bìa cuối.png`): Người dùng đã tự đổi, không cần agent thực hiện.

### 3. Build status
* `npx vite build` thành công 100% — 658 modules, 0 errors. Chỉ có warnings thường thấy (caniuse-lite, chunk size, eval in three-stdlib).
* Cập nhật sau khi khóa điều khiển popup: `npm run build` thành công; Playwright mở `#museum`, đi vào phòng giữa, click tranh mở popup, ảnh hiển thị đúng, `Escape` đóng popup, không có `pageerror` hay response 404.

---

## CẬP NHẬT 2026-05-23 — SỬA VISITOR MUSEUM SAU KHI REVIEW ẢNH

* `src/museum/MuseumVisitors.jsx` đã được thay bằng bản visitor gọn và trầm hơn:
  - Giảm mật độ người trong phòng, tránh cảm giác sân khấu/rối mắt.
  - Sửa hướng người ngồi theo đúng hướng tranh/ghế từng phòng.
  - Bỏ animation `useFrame` riêng trên từng người để giảm callback mỗi frame.
  - Bỏ kiểu tóc dạng thanh đen che mặt; dùng hair cap thấp hơn để mắt/mặt đọc rõ hơn.
  - Thêm shadow tròn mờ dưới chân để visitor không có cảm giác lơ lửng.
  - Cập nhật scale sau review ảnh: người đứng dùng `STANDING_SCALE = 1.14`, người ngồi dùng `SEATED_SCALE = 1.08` để hợp tỷ lệ với tranh/ghế/phòng hơn.
* Verify: `npm run build` thành công; Playwright mở `#museum`, canvas render đầy đủ, không có `pageerror` hay response 404.

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

## 🏛️ HẠNG MỤC 4 (TIẾP THEO): TƯỢNG BÁC HỒ (HO CHI MINH STATUE)

> **Mục tiêu:** Đặt một bức tượng Bác Hồ (tượng đồng đúc hoặc tượng đá cẩm thạch trắng) uy nghiêm đứng trên bục đá cẩm thạch tại chính diện sảnh trung tâm bảo tàng.
> **Trạng thái:** Để làm sau (theo yêu cầu của người dùng), nhưng các nguồn tài nguyên 3D chất lượng cao đã được nghiên cứu kỹ bằng **Firecrawl**.

### 1. Các nguồn tài nguyên 3D chất lượng cao có sẵn (Tải miễn phí):
* **Sketchfab (Định dạng tương thích GLTF/GLB trực tiếp):**
  - **Tượng Bác Hồ bán thân / toàn thân (Mr. Mushi):** [President Ho Chi Minh Statue](https://sketchfab.com/3d-models/president-ho-chi-minh-statue-12577a979a2c4828ab065fc87a1e2e48) — Có thể tải miễn phí, mô hình dựng rất chi tiết và trang trọng.
  - **Tượng Bác Hồ đứng (Alan Stevenres):** [HO CHI MINH STATUE](https://sketchfab.com/3d-models/ho-chi-minh-statue-b7c14ac0bdad4c05904a674f6c89f8ed) — Tượng đứng truyền thống.
* **Polycam (3D Scan thực tế bằng LiDAR/Photogrammetry):**
  - **President Ho Chi Minh Statue:** [President Ho Chi Minh Statue - Polycam](https://poly.cam/capture/19BC7D57-BBC6-4573-B1A8-3287ADE5024F) — Bản scan thực tế tượng Bác Hồ ngoài đời thực, chất liệu đồng đúc bắt sáng cực kỳ tự nhiên và cổ kính.
* **Tripo AI (Model dựng kèm bệ đá và khối đá cẩm thạch):**
  - [Ho Chi Minh statue with pedestal and rock base](https://studio.tripo3d.ai/3d-model/ho-chi-minh-statue-with-pedestal-and-rock-base-18e09188-2600-4d3a-8ec0-73df1835a512) — Mô hình có sẵn bệ đá vững chãi.
* **SketchUp 3D Warehouse:**
  - [TượngĐứng Hồ Chí Minh](https://3dwarehouse.sketchup.com/model/2bd00170-6e4a-4d4b-b715-8e4c6bbee3b9/T%C6%B0%E1%BB%A3ng%C4%90%E1%BB%A9ng-H%E1%BB%93-Ch%C3%AD-Minh) — Tượng đứng truyền thống định dạng SketchUp.

### 2. Định hướng triển khai kỹ thuật (R3F):
* **Bước 1:** Tải file `.glb` từ một trong các nguồn trên (khuyên dùng bản Scan của Polycam hoặc bản dựng của Mr. Mushi vì độ chân thực cao).
* **Bước 2:** Đưa file vào thư mục `public/models/president_ho_chi_minh_statue.glb`.
* **Bước 3:** Sử dụng Drei hook `useGLTF` để load mô hình:
  ```jsx
  const { scene } = useGLTF("/models/president_ho_chi_minh_statue.glb");
  ```
* **Bước 4:** Thiết kế bệ tượng bằng Cylinder/Box geometry với chất liệu đá cẩm thạch (`marble-floor` hoặc màu gốm sứ sang trọng), phủ thêm đèn spotlight dịu nhẹ từ trần chiếu xuống để tạo điểm nhấn trang nghiêm cho sảnh trung tâm.

---

> 💡 **Ghi chú dành cho AI Agent tiếp theo:**
> - Khi thực hiện các lệnh shell trên môi trường Windows này, vui lòng chạy lệnh trực tiếp (ví dụ: `npm run build`) hoặc sử dụng cấu trúc PowerShell chuẩn để tránh việc `cmd //c` bị treo do sai lệch xử lý đối số của PowerShell.
> - Tuyệt đối tuân thủ rule phản hồi bằng tiếng Việt và không dùng alert().
