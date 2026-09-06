# ACE Court Booking — Project Workbook

Sổ tay dự án ví dụ dùng xuyên suốt khóa **UI/UX Design with Figma & AI**. Tài liệu này bổ sung phần còn thiếu để dự án ACE (Figma: [ACE Design](https://www.figma.com/design/7gz2qnpMVbKCLZEPZZZy42/ACE-Design?node-id=10-2)) đi đủ chuỗi quy trình trong `so-tay-ux-figma-agent.html`:

Brief → Research → Problem → Opportunity → Feature → UX Architecture → Design System → Prototype.

Mỗi mục ghi rõ: dùng ở module nào, trạng thái (đã có trong Figma / viết mới / cần vẽ thêm). Nội dung tiếng Việt để tutor dùng khi dạy; slide tiếng Anh trích lại phần ngắn.

---

## 0. Cấu trúc Figma hiện tại (sau khi bổ sung)

**FigJam · ACE — Research & Flows:** https://www.figma.com/board/nsmASzn5WwrcPcH4u3qRZF

| Section | Nội dung | Dùng ở slide |
|---|---|---|
| 01 Brief & Master Context | Client Brief, bảng 4 cột, Master Context v0.2 (code block) | Phần 2 |
| 02 User Research | Research plan (objective, RQ, hypothesis, segment, phương pháp), script 10 câu, 5 sticky follow-up | Phần 3 |
| 03 Market & Competitors | Bảng 4 lớp đối thủ, checklist UX Flow Benchmark, 2 thẻ Opportunity Gap, reference board (sticky) | Phần 4 |
| 04 UX Architecture | Role–Permission Matrix, Use Case (code block), User Flow V1 (flowchart có decision point, nhánh lỗi) | Phần 5 |
| 04b Sitemap V1 | Cây Player · Admin · Shared | Phần 5, 6 |
| 05 Feature Strategy | Bậc thang dữ liệu, Problem Statement + 3 HMW, 6 sticky solution idea, bảng MVP, Screen Inventory | Phần 6 |

**File design · ACE Design:** https://www.figma.com/design/7gz2qnpMVbKCLZEPZZZy42/ACE-Design

| Page | Nội dung | Dùng ở slide |
|---|---|---|
| 00 Start here | README: chuỗi quy trình, link FigJam, mô tả từng page, quy ước trạng thái | Phần 1, 9 |
| 01 Design Direction (style guide) | Logo, màu, typography, pattern, spacing (bản gốc của bạn) | Phần 7 |
| 02 Wireframe | 4 wireframe lo-fi (Tra cứu, Chi tiết sân, Đặt sân, Thanh toán), mỗi cái ghi STATE cần vẽ | Phần 5, 6 |
| 03 Design System | Frame Foundations (semantic color Light/Dark, type ramp, spacing, radius, elevation) + toàn bộ component v2/*, ui/*, Admin / Sidebar | Phần 7 |
| 04 Design & Prototype | Màn hình Client + Admin (nguyên bản), prototype đã nối flow đặt sân, flow start = Trang chủ | Phần 8, 9 |

**Design System đã chỉnh:**

- Xóa collection trùng "Collection 2" (bind lại 16 node về ACE / Tokens) và collection rỗng "Collection".
- ACE / Tokens: đổi tên mode thành Value; thêm `color/status-success · warning · danger · info`, `color/ink-3`; gắn code syntax `var(--…)` cho mọi token.
- Tạo collection **ACE / Semantic** (22 token, 2 mode Light / Dark) alias về primitive: bg/page, bg/surface, bg/subtle, bg/highlight, text/primary, text/secondary, text/disabled, text/on-action, text/on-dark, border/default, border/strong, action/primary, action/primary-edge, action/secondary, slot/free, slot/selected, slot/taken, slot/closed, feedback/success, warning, danger, info.
- Text styles (Be Vietnam Pro): Display 40/48, H1 32/40, H2 24/32, H3 20/28, Body L 18/28, Body M 16/24, Body M Medium, Body S 14/20, Label 12/16 caps, Caption 12/16.
- Effect styles: Elevation/1 card, Elevation/2 popover, Elevation/3 modal.
- Component: v2/Btn mở rộng thành Variant (Primary/Secondary/Ghost) × State (Default/Hover/Pressed/Disabled/Loading); v2/Slot thêm Closed (nét đứt) và Past; v2/Field thêm Error (viền đỏ + helper) và Disabled. Mọi màu mới đều bind token.
- Chưa làm (để học viên thực hành ở Phần 7–8): bind lại các frame màn hình từ primitive sang semantic; tách Time grid, Summary bar, Court card, Booking card, Empty state, Skeleton, Toast thành component; vẽ các state còn thiếu bằng Figma Make rồi systemize.

## 1. Client Brief (Module 3)

> Nhóm chủ sân ở TP.HCM (5 cụm sân, pickleball – cầu lông – tennis) muốn làm web app để khách tự tìm sân, đặt theo giờ và thanh toán online. Chủ sân muốn có trang quản trị xem đơn đặt, doanh thu, quản lý sân. Lý do: "khách vẫn đặt qua Zalo và gọi điện, lễ tân ghi tay, hay trùng giờ". Deadline 3 tháng. Muốn "hiện đại như Airbnb".

### Phân tích 4 cột

| Đã có | Còn thiếu | Chưa rõ | Rủi ro |
|---|---|---|---|
| 5 cụm sân, 3 bộ môn; đặt theo giờ; thanh toán online; trang admin; 3 tháng; tham chiếu Airbnb | Người chơi là ai (tuổi, tần suất, chơi nhóm hay lẻ)? Số sân mỗi cụm? Hệ thống lịch hiện tại? Cổng thanh toán? Ai trực quầy? | "Thanh toán online" là đặt cọc hay trả đủ? "Trùng giờ" xảy ra ở đâu (ghi tay hay khách tự đến)? "Như Airbnb" là visual hay trải nghiệm? | Làm vì Zalo lộn xộn, chưa có mục tiêu đo được; trùng giờ cao điểm; quy tắc hủy/hoàn tiền chưa có; 3 tháng cho client + admin + thanh toán là chặt |

### "Để làm gì?" × 3

"Muốn thanh toán online" → để khách không hủy phút chót → để sân không trống 19h trong khi người khác chờ → **Nhu cầu thật: giảm no-show và giảm giờ trống ở khung cao điểm.** Thanh toán online là một cách; đặt cọc, danh sách chờ, nhắc lịch cũng là cách.

### 7 thành phần bài toán sản phẩm

1. Business model: hoa hồng theo đơn (giả thuyết, cần hỏi founder).
2. Business goal: no-show < 10%, lấp đầy cao điểm > 80% sau 6 tháng (đề xuất, cần chốt).
3. Target audience: người chơi 20–40 tuổi, chơi 1–3 lần/tuần (chính); chủ sân và lễ tân (phụ).
4. User problem: không biết sân nào trống giờ nào; phải nhắn/gọi và chờ xác nhận; đi nhóm khó chia tiền.
5. Thị trường: nhóm Zalo, gọi điện, vài app đặt sân địa phương; chuẩn trải nghiệm: Airbnb, Klook, app rạp phim.
6. Platform: web (player) + mobile web + admin desktop.
7. Constraint: 3 tháng; 1 designer + 2 dev; VietQR; tiếng Việt trước.

---

## 2. Master Context v0.2 (Module 3, dùng mọi prompt)

```
# MASTER CONTEXT — ACE Court Booking  v0.2
1. Sản phẩm: web app tìm và đặt sân thể thao theo giờ (pickleball, cầu lông, tennis); TP.HCM; giai đoạn MVP
2. Business: hoa hồng theo đơn; mục tiêu 6 tháng: no-show < 10%, lấp đầy cao điểm > 80%
3. Người dùng: người chơi 20–40, 1–3 lần/tuần (chính); chủ sân + lễ tân (phụ)
   Vấn đề chính (giả thuyết): không thấy giờ trống, phải chờ xác nhận, chia tiền nhóm bất tiện
4. Thị trường & đối thủ: nhóm Zalo, gọi điện (substitute); app đặt sân địa phương (direct); Klook/Airbnb (indirect)
5. Ràng buộc: 3 tháng; 1 designer + 2 dev; VietQR; tiếng Việt trước; brand: pine green + acid lime
6. Quyết định đã chốt:
   - 2026-09: web first, mobile web responsive, admin desktop
   - 2026-09: ô đặt theo giờ (không 30 phút); giữ chỗ 10 phút khi thanh toán
   - 2026-09: miễn phí hủy trước 12 giờ
7. Chưa biết / giả thuyết: người chơi đặt theo nhóm? cọc hay trả đủ? lễ tân có dùng tablet không?
8. Quy ước với AI: nội dung tiếng Việt; không bịa dữ liệu người dùng; không tự thêm feature; không tự chọn style ngoài token
```

---

## 3. Research Plan rút gọn (Module 3)

- **Objective:** hiểu vì sao người chơi bỏ hoặc hủy lịch phút chót, để quyết định ACE nên giữ chân bằng cơ chế nào (thanh toán trước, cọc, danh sách chờ, đặt nhóm).
- **Research questions:** (1) Người chơi quyết định đi hay không đi dựa vào gì trong ngày? (2) Ai là người đặt sân trong nhóm và tiền được chia thế nào? (3) Điều gì làm họ tin sân đã "chắc chắn" có? (4) Họ đang dùng gì để đặt và vì sao chọn cách đó?
- **Hypothesis H1:** người chơi hủy vì bạn trong nhóm bận, không phải vì sân. Nếu đúng, đa số kể về việc "thiếu người".
- **Hypothesis H2:** thanh toán trước làm người chơi ngại đặt. Nếu đúng, họ sẽ nói về cọc/hoàn tiền.
- **Segment:** A – chơi nhóm ≥ 4 người, 1+ lần/tuần; B – chơi lẻ/đôi; C – người đã hủy đặt trong 1 tháng qua. Loại: nhân viên sân.
- **Script phỏng vấn (10 câu, 30 phút):** mở đầu (bắt đầu chơi từ khi nào), lần gần nhất đặt sân từ đầu đến cuối, lần định đi mà không đi, cách chia tiền, công cụ đang dùng, một điều muốn đổi.
- **Kết quả giả định để minh họa (đánh dấu rõ là ví dụ, không phải dữ liệu thật):** 6/8 người đặt cho nhóm; 5/8 từng hủy vì thiếu người; 7/8 dùng Zalo nhắn lễ tân.

---

## 4. Competitor & Opportunity Gap (Module 3)

| Lớp | Ví dụ | Học được gì |
|---|---|---|
| Direct | App đặt sân địa phương | Chuẩn tối thiểu: lịch theo ngày, giá theo khung giờ |
| Indirect | Klook, Airbnb, app rạp phim | Pattern chọn ngày – chọn slot – tóm tắt – thanh toán; countdown giữ chỗ |
| Substitute | Nhóm Zalo, gọi điện, sổ giấy | Nhanh, có người thật xác nhận; nhưng không thấy giờ trống, dễ trùng |
| Emerging | App CLB có xếp nhóm, ranking | Nhu cầu chơi nhóm, tìm bạn chơi |

**UX Flow Benchmark (flow đặt sân):** số bước từ entry đến thành công; thông tin phải nhập; chỗ phải quyết định; xử lý slot đầy/trùng; feedback sau đặt; pattern (date strip, grid, bottom sheet, sticky summary).

**Opportunity Gap #1 – Đặt nhóm, chia tiền:** 6/8 đặt cho nhóm (nhu cầu) + mọi đối thủ đặt như một cá nhân trả đủ (gap) + ACE đã có "Sân nhóm" trên trang chủ và VietQR cho phép nhiều mã (why us). Trạng thái: cần kiểm chứng bằng phỏng vấn thật.

**Opportunity Gap #2 – Chắc chắn có sân:** người chơi thiếu tin vào xác nhận miệng (nhu cầu) + substitute không có bằng chứng (gap) + ACE có mã đặt sân + QR check-in (why us).

---

## 5. UX Architecture (Module 4)

### 5.1 User Role Matrix

| Role | Xem lịch | Đặt sân | Hủy | Check-in | Giá / sân | Báo cáo |
|---|---|---|---|---|---|---|
| Player | ✓ | ✓ | của mình, trước 12h | – | – | – |
| Court staff (lễ tân) | ✓ | thay khách vãng lai | ✓ | ✓ | – | – |
| Owner / Admin | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

Hệ quả: use case "Đặt sân" có hai entry point (player tự đặt trên web/mobile; lễ tân đặt thay trên admin).

### 5.2 Use Case: Đặt sân theo giờ

```
Use case:      Đặt sân theo giờ
Actor:         Player
Precondition:  Đã đăng nhập; sân mở cửa ngày đã chọn
Trigger:       Chạm ô giờ trống trong lưới
Happy path:
  1. Hệ thống tô lime ô đã chọn, cập nhật thanh tóm tắt (sân, giờ, tổng + VAT)
  2. Player chạm "Tiếp tục thanh toán"
  3. Hệ thống giữ chỗ 10 phút, hiển thị màn Thanh toán (liên hệ, phương thức, QR)
  4. Player quét VietQR → hệ thống xác nhận → Modal "Đặt sân thành công" + mã ACE-xxxx
Alternative:
  A1. Ô vừa bị người khác đặt → chuyển xám, toast "Khung giờ vừa có người đặt", gợi ý giờ trống kế
  A2. Chọn 2 sân khác nhau → hỏi giữ sân nào
  A3. Chọn "Thanh toán tại sân" → giữ chỗ 30 phút, trạng thái Chờ thanh toán
Error:
  E1. Hết 10 phút chưa thanh toán → nhả chỗ, giữ lựa chọn, cho thử lại
  E2. Mất mạng khi xác nhận → thông báo + thử lại, không tạo đơn trùng
  E3. Thanh toán thất bại → giữ chỗ, cho đổi phương thức
Postcondition: Chỗ được giữ; lễ tân và admin thấy trong Đơn đặt
Exit points:   Modal thành công / Đặt chỗ của tôi / Chi tiết sân
```

Use case kèm theo (viết ngắn): **Hủy đặt sân** (trước 12h hoàn 100%; sau 12h không hoàn; lễ tân hủy thay có ghi lý do), **Vào danh sách chờ** (Phase 2), **Đặt sân nhóm chia tiền** (Phase 2), **Check-in bằng mã** (staff).

### 5.3 Task Flow và User Flow V1

Task flow: Tìm sân → Chi tiết sân → Chọn ngày → Chọn ô giờ → Tiếp tục → Thanh toán → Thành công.

User flow V1 (decision point in đậm):
- Chọn ô giờ → **còn trống?** không → A1.
- Tiếp tục → **cùng một sân?** không → A2.
- Thanh toán → **phương thức?** QR / ví / thẻ / tại sân (A3).
- Chờ QR → **thanh toán trong 10 phút?** không → E1; **thành công?** không → E3.
- **Có mạng?** không → E2.

Missing case đã lọc từ prompt AI (giữ vì có thật): sân đóng đột xuất (mưa, sân ngoài trời) → admin block slot + thông báo hoàn tiền; khách đặt 2 giờ liền nhưng ô giữa vừa bị đặt; lễ tân đặt thay không có số điện thoại khách; khung giờ qua nửa đêm.

### 5.4 Sitemap V1

- **Player:** Trang chủ · Tìm sân (Khám phá, Tra cứu kết quả) · Chi tiết sân · Đặt sân (Chọn ngày, Lưới giờ, Dịch vụ) · Thanh toán · Thành công · Đặt chỗ của tôi (Sắp tới, Đã qua, Đã hủy) · Tài khoản · Đăng nhập / Đăng ký.
- **Admin:** Đăng nhập quản trị · Tổng quan · Người dùng · Đơn đặt (danh sách, chi tiết, hủy/đổi) · Doanh thu · Sân (giờ mở, giá theo khung, block slot).
- **Shared:** Header, Footer, Modal xác nhận, Toast.

### 5.5 Feature Inventory và MVP

| Feature | Loại | Role | Dependency / Data | Empty state | Error | Bucket |
|---|---|---|---|---|---|---|
| Tìm sân + lọc bộ môn/khu vực | Core | Player | Dữ liệu sân, vị trí | "Chưa có sân ở khu vực này" | Mất mạng | MVP |
| Chi tiết sân + giá theo khung | Core | Player | Bảng giá theo giờ | – | – | MVP |
| Lưới giờ + chọn nhiều ô | Core | Player | Lịch đặt realtime | "Ngày này chưa mở" | Slot vừa bị đặt | MVP |
| Thanh toán VietQR / ví / thẻ / tại sân | Core | Player | Cổng thanh toán, giữ chỗ 10' | – | Timeout, thất bại | MVP |
| Thành công + mã check-in | Core | Player | Mã đặt sân | – | – | MVP |
| Đặt chỗ của tôi + hủy | Supporting | Player | Quy tắc hủy 12h | "Chưa có lịch nào" | Quá hạn hủy | MVP |
| Admin: Đơn đặt, Sân, Doanh thu | Admin | Admin/Staff | Cùng dữ liệu | "Chưa có đơn hôm nay" | – | MVP |
| Thông báo nhắc lịch | System | Player | SMS/Zalo OA | – | Gửi thất bại | MVP (tối thiểu) |
| Danh sách chờ khi slot đầy | Supporting | Player | Hàng đợi + thông báo | – | – | Phase 2 |
| Đặt nhóm, chia tiền | Core (P2) | Player | Nhiều mã QR, invite link | – | Bạn không trả | Phase 2 |
| Đánh giá sân | Supporting | Player | – | – | – | Phase 2 |
| Điểm thưởng, ranking, chat | – | – | – | – | – | Not now (không có dữ liệu) |

### 5.6 Screen Inventory (đầu vào Module 5 và 6)

| Màn | Platform | Role | Flow | State cần có | Component chính | Figma |
|---|---|---|---|---|---|---|
| Trang chủ | Web, Mobile | Player | Entry | Default | Hero search, Sport card, Court card | Có |
| Tra cứu · Kết quả | Web, Mobile | Player | Tìm sân | Loading, Empty, Results, Error | Search bar, Filter chip, Court card | Có Default |
| Chi tiết sân | Web, Mobile | Player | Tìm sân | Default, Hết giờ trống hôm nay | Gallery, Amenity chip, Court list, Price table, CTA card | Có Default |
| Đặt sân | Web, Mobile | Player | Đặt sân | Loading, Default, Selected, Slot taken, Closed, Offline | Date strip, Slot tile, Time grid, Legend, Add-on card, Summary bar | Có Default + Selected |
| Thanh toán | Web, Mobile | Player | Đặt sân | Default, QR waiting, Timeout, Failed | Input, Radio card, QR panel, Order summary, Coupon | Có Default |
| Thành công | Web, Mobile | Player | Đặt sân | Success | Modal, Booking code, QR | Có |
| Đặt chỗ của tôi | Web, Mobile | Player | Quản lý | Upcoming, Past, Cancelled, Empty | Tabs, Booking card, Status badge, Cancel dialog | Có Default |
| Hồ sơ | Web, Mobile | Player | Tài khoản | Default, Editing, Error | Input, Avatar, Button | Có |
| Đăng nhập / Đăng ký | Web, Mobile | Player | Tài khoản | Default, Error, Loading | Input, Button, Social button | Có |
| Admin · Tổng quan | Desktop | Admin | Quản trị | Loading, Default | Stat card, Bar chart, Table, Badge | Có |
| Admin · Đơn đặt | Desktop | Admin/Staff | Quản trị | Loading, Table, Empty, Filter active, Detail drawer | Table, Filter, Badge, Drawer | Có Default |
| Admin · Sân | Desktop | Admin | Quản trị | Default, Block slot dialog | Table, Time grid (admin), Dialog | Có Default |

---

## 6. Design Direction (Module 5)

- **Product personality:** năng lượng, đáng tin, nhanh gọn. Tránh: doanh nghiệp, rối, lạnh.
- **Audience & platform:** người chơi 20–40 trên mobile/web; admin desktop.
- **Brand:** pine green + acid lime trên nền paper; logo chữ A trong vòng tròn lime.
- **References:** Airbnb (date picker, sticky summary), Klook (slot theo khung giờ), Nike (typography đậm) – lấy bố cục và nhịp, không lấy màu.
- **Accessibility:** chữ/nền ≥ 4.5:1 (lưu ý chữ trắng trên lime không đạt → dùng ink trên lime); vùng chạm ≥ 44px; trạng thái ô giờ không chỉ bằng màu (thêm viền/gạch/nhãn); hỗ trợ text scaling.
- **Guideline cho Agent:** không tạo màu/spacing ngoài token; không tạo component ngoài Component Inventory; không đổi tên; mọi giá trị bind variable; báo cáo trước khi sửa.

### 6.1 Token

**Primitive (giữ tên hiện có trong file, bổ sung):**

| Token | Giá trị |
|---|---|
| color/ink | #0e2a1e |
| color/ink-2 | #47584c |
| color/pine | #1c5e3c |
| color/accent-acid-lime | #c9ff49 |
| color/accent-lime-edge | #93c226 |
| color/tint-green | #e9f1ea |
| color/tint-lime | #f4fbdf |
| color/paper | #f7f7f2 |
| color/surface | #ffffff |
| color/rule | #e4e4dc |
| color/status-success | #2f7d4f (đề xuất) |
| color/status-warning | #d97b1f (đề xuất) |
| color/status-danger | #c93b3b (đề xuất) |
| color/status-info | #2c6fb5 (đề xuất) |
| space/xs · sm · md · lg · xl · 2xl | 4 · 8 · 16 · 24 · 32 · 48 |
| radius/tile · input · card · pill | 8 · 12 · 16 · 999 |

**Semantic (tạo mới, 2 mode Light/Dark):**

| Semantic | Light → | Dark → (đề xuất) |
|---|---|---|
| color/bg/page | paper | ink |
| color/bg/surface | surface | #14332a |
| color/text/primary | ink | paper |
| color/text/secondary | ink-2 | #a9b8ae |
| color/border/default | rule | #2a4a3c |
| color/action/primary | accent-acid-lime | accent-acid-lime |
| color/action/primary-text | ink | ink |
| color/action/secondary | pine | tint-green |
| color/slot/free | surface | #14332a |
| color/slot/selected | accent-acid-lime | accent-acid-lime |
| color/slot/taken | rule | #2a4a3c |
| color/feedback/success · warning · danger · info | status-* | status-* (sáng hơn 1 bậc) |

**Typography:** 1 font sans (hiện tại), scale Display 40/48 · H1 32/40 · H2 24/32 · H3 20/28 · Body L 18/28 · Body M 16/24 · Body S 14/20 · Label 12/16 caps · Caption 12/16.

**Grid:** Mobile 4 cột / margin 16 / gutter 16; Tablet 8 cột / margin 24; Desktop 12 cột / margin 32, container max 1200; breakpoint 375 / 768 / 1024 / 1440.

### 6.2 Component Inventory (Atomic)

- **Atoms:** Button (Type Primary/Secondary/Ghost × Size S/M/L × State Default/Hover/Pressed/Disabled/Loading; Boolean icon-leading/trailing), Input (Default/Focus/Error/Disabled), Chip (Default/Selected), Badge (Success/Warning/Danger/Info), Slot tile (Free/Selected/Taken/Closed/Past), Icon, Avatar, Radio.
- **Molecules:** Date strip item (day + status dot), Search bar (input + button), Price row, Legend, Add-on card, Radio card (phương thức thanh toán), Stat card (admin).
- **Organisms:** Time grid (court row × slot tiles), Court card, Summary bar (sticky), Order summary, QR panel, Booking card, Header, Footer, Admin sidebar, Admin table, Modal, Toast, Empty state, Skeleton.
- **Templates:** Booking page, Payment page, Admin list page.

### 6.3 Naming Convention

```
Component:  Category / Component / Property=Value
            Action / Button / Type=Primary, Size=M, State=Default
            Booking / SlotTile / State=Selected
            Feedback / Badge / Status=Success
Frame:      [Platform] / [Flow] / [Screen] / [State]
            Web / Booking / Time grid / Slot taken
            Mobile / Booking / Time grid / Default
            Admin / Bookings / List / Empty
Layer:      theo vai trò: label, icon-leading, price, status
Variable:   color/action/primary   space/md   radius/card
```

---

## 7. Master Prompt cho Figma Make (Module 6)

```
1. Product direction: ACE là web app đặt sân thể thao theo giờ tại TP.HCM cho người chơi 20–40,
   giải quyết việc không thấy giờ trống và phải chờ xác nhận qua Zalo. Mục tiêu: giảm no-show,
   lấp đầy khung cao điểm.
2. Users & business rules: Player đặt/hủy của mình; hủy miễn phí trước 12 giờ; giữ chỗ 10 phút khi
   thanh toán QR, 30 phút khi thanh toán tại sân; mỗi ô = 1 giờ; giá theo khung Sáng/Chiều/Tối.
3. Feature scope (MVP): tìm sân + lọc, chi tiết sân, lưới giờ, thanh toán (QR/ví/thẻ/tại sân),
   thành công + mã, đặt chỗ của tôi + hủy. Không làm: đặt nhóm, danh sách chờ, đánh giá, điểm thưởng.
4. Sitemap & flow: (dán Sitemap V1 và User Flow V1 mục 5.3–5.4)
5. Nội dung thật: Lotus Sports Club – 12 Quốc Hương, Thảo Điền, 3 sân pickleball; giá 80.000đ sáng,
   100.000đ chiều, 150.000đ tối; The Dinker, Mango Court Club, Saigon Badminton House, Rocket Club 7.
6. Visual direction: năng lượng, đáng tin, nhanh; nền paper #f7f7f2; ink #0e2a1e; pine #1c5e3c;
   action lime #c9ff49 với chữ ink; radius card 16, input 12, tile 8; mật độ thoáng; 1 font sans.
7. Edge cases & states: (dán đoạn state cho từng màn theo Screen Inventory 5.6; ví dụ màn Đặt sân
   trong slide "Example: Part 7 For ACE")
8. Không được: thêm feature ngoài scope; đổi tên sản phẩm; ảnh stock vô nghĩa; lorem ipsum.
```

Sau khi có prototype: đi qua User Flow V1 với checklist (navigation, validate, state nút, 4 state mỗi màn); ghi thiếu sót; sửa bằng prompt bổ sung từng mục.

---

## 8. Cấu trúc file Figma và trạng thái (Module 6)

Đề xuất tổ chức lại file "ACE Design" (dự án nhỏ, một file):

| Page | Nội dung |
|---|---|
| 00 Brief & Context | Client Brief, Master Context, 4 cột, 7 thành phần |
| 01 Research | Research plan, script, affinity map (FigJam link), competitor matrix, opportunity gap |
| 02 Flows | Role matrix, use case, task flow, user flow V1, sitemap V1 (FigJam hoặc frame) |
| 03 Design System | Foundations (variables, text styles, effects, grids), Components theo Atomic |
| 04 Design – Web | Section theo flow: Tìm sân / Đặt sân / Tài khoản; frame theo [State] |
| 05 Design – Mobile | Như trên |
| 06 Design – Admin | Section theo module: Tổng quan / Đơn đặt / Sân / Doanh thu / Người dùng |
| 07 Prototype | Flow prototype nối từ 04–06 |
| 08 Archive | Bản cũ (v1 components, frame Deprecated) |

Trạng thái: mỗi section gắn nhãn Exploration → WIP → Review → Ready for Dev → Deprecated. Dev chỉ nhìn Ready for Dev.

---

## 9. Việc cần làm thêm trong Figma (checklist cho tutor)

**Foundations**
- [ ] Tạo collection Semantic (bảng 6.1) với mode Light/Dark; bind các frame hiện có sang semantic.
- [ ] Bổ sung space/xs–2xl, color/status-*; text styles theo scale.
- [ ] Layout grid style cho Mobile 375, Desktop 1440, Admin 1440.

**Components**
- [ ] Button: đủ Type × Size × State (hiện thiếu Hover/Pressed/Loading).
- [ ] Input: Focus/Error/Disabled; Slot tile: Free/Selected/Taken/Closed/Past; Badge: 4 status.
- [ ] Tách Time grid, Summary bar, Court card, Booking card, Empty state, Skeleton, Toast thành component.
- [ ] Đặt tên theo convention 6.3; đổi tên layer `Frame 123`.

**Screens còn thiếu (theo Screen Inventory 5.6)**
- [ ] Tra cứu: Loading (skeleton), Empty ("Chưa có sân ở khu vực này"), Error.
- [ ] Đặt sân: Loading, Slot taken (toast + gợi ý), Closed day, Offline.
- [ ] Thanh toán: QR waiting (countdown), Timeout (nhả chỗ), Failed (đổi phương thức).
- [ ] Đặt chỗ của tôi: Empty, Cancelled tab, dialog Hủy đặt (trước/sau 12h).
- [ ] Admin · Đơn đặt: Empty, Detail drawer, Hủy thay khách (ghi lý do).
- [ ] Admin · Sân: dialog Block slot (mưa/sự cố) + thông báo hoàn tiền.
- [ ] Phase 2 (khám phá, không ưu tiên): Danh sách chờ, Đặt nhóm chia tiền (invite link + nhiều QR).

**Flows & docs**
- [ ] Vẽ User Flow V1 và Sitemap V1 trong FigJam (hoặc page 02 Flows).
- [ ] Annotate hành vi không nhìn thấy: giữ chỗ 10 phút, validate số điện thoại, thứ tự focus.
- [ ] Chuyển frame hoàn chỉnh vào section Ready for Dev.

---

## 10. Chuỗi artifact: tạo ở đâu, dùng ở đâu

| Artifact | Tạo ở | Dùng ở |
|---|---|---|
| Master Context | Module 3 | Mọi prompt; Master Prompt (M6) |
| Product Direction Brief | Module 3 | Research plan, Design Direction (M5), Master Prompt (M6) |
| Research questions, hypothesis, interview notes | Module 3 | Kiểm tra hypothesis, opportunity (M4) |
| Competitor matrix, flow benchmark, opportunity gap | Module 3 | Problem statement, MVP (M4) |
| Role matrix, use case, user flow V1, sitemap V1 | Module 4 | Screen inventory, Master Prompt, file structure |
| MVP scope, screen inventory | Module 4 | Component inventory (M5), states trong Master Prompt (M6) |
| Design Direction, token, component inventory, naming | Module 5 | Systemize (M6), file architecture (M6) |
| Prototype, editable screens rebuilt, ready-for-dev | Module 6 | Handoff |
