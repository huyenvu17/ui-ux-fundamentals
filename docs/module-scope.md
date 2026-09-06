# Thiết kế UI/UX — Module Scope (v6)

Tài liệu scope cho bộ slide 7 phần. Slide giữ ngắn; tài liệu này giữ ý đồ giảng dạy và giới hạn demo. Muốn thêm nội dung: cập nhật scope trước, rồi nén thành một slide trong `src/presentation-data.js`.

Cố định: tutor **Huyen Vu**, **Software Engineer** (chỉ ở footer bìa và slide kết). Slide không nhắc đến sản phẩm cụ thể nào; ví dụ đều chung (app đặt lịch, app giao đồ ăn) và hình minh họa là SVG tự vẽ trong `src/illustrations.js`. Bộ demo ACE của tutor (FigJam + file Figma) nằm riêng ở `docs/ace-project-workbook.md`, không xuất hiện trong slide.

## Mục tiêu khóa

Hiểu kiến thức UI/UX cơ bản, có tư duy thiết kế, hiểu quy trình làm ra một bản thiết kế. Phần cuối là kết hợp với AI để tăng tốc từng bước.

## Xương sống

Kiến thức trước, AI sau. Phần 1 dạy nền tảng và tư duy; Phần 2–6 đi đúng 6 bước Brief → Research → Brainstorm → Wireframe → Prototype → Demo; Phần 7 gom mọi việc liên quan AI. Nội dung lấy từ sổ tay "UX & Figma Agent Essential" nhưng không bám cấu trúc 8 buổi: sổ tay buổi 1 → Phần 2; buổi 2 + 3 → Phần 3; buổi 5 → Phần 4; buổi 4 → Phần 5; buổi 6 + 7 + 8 → Phần 6; các mục "Dùng AI", Agent, Make → Phần 7.

## Nguyên tắc nội dung

- Tiếng Việt, giữ thuật ngữ Anh thông dụng. Thuật ngữ lạ dịch ra nghĩa dễ hiểu (signifier → dấu hiệu tương tác).
- Mỗi phần chia mục nhỏ (1.1, 1.2…); mỗi mục 1–2 slide, một ý một slide, 4–6 dòng.
- Đi từ dễ đến khó: UI/UX là gì → tư duy → quy trình → công cụ thị giác.
- Mỗi phần kết bằng Thực hành trong buổi và Đầu ra. Thực hành có dòng "Kết hợp với AI: xem 7.x".
- Không nhắc sản phẩm cụ thể; ví dụ chung, ngắn, đặt cạnh khái niệm. Hình minh họa: SVG tự vẽ, nguồn miễn phí nếu cần (unDraw, Lucide), không dùng ảnh chụp sản phẩm.

## Module 1: Nền tảng UI/UX

### Teaching Purpose
Bảy khối đúng như người mới cần: UI/UX là gì, vì sao cần, sản phẩm của UI/UX, tư duy thiết kế (gồm tâm lý người dùng và nguyên tắc UX), quy trình thiết kế 6 bước, cơ sở thiết kế giao diện UI. Kết bằng checklist đọc màn hình. Không thêm slide "hook", trước/sau hay bài tập; phần này cần đủ và gọn.

### Beginner Takeaways
- UX là trải nghiệm, UI là giao diện; sản phẩm cần cả hai.
- Ý tưởng thiết kế đến từ vòng lặp Empathize → Test, không từ cảm hứng.
- Vẽ một màn là vẽ đủ trạng thái; Cách tương tác hay phản hồi cần đồng nhất ở các màn hình, tăng độ nhận diện và trải nghiệm.

### Theory Scope
- 1.1 UI/UX là gì (định nghĩa, UI trước UX; màn hình app gọi đồ ăn có chú thích thành phần UI và hành trình UX, kèm ẩn dụ nhà hàng). 1.2 Vì sao cần UI/UX (3 con số). 1.3 Sản phẩm của UI/UX. 1.4 Tư duy thiết kế (vòng 5 bước; người dùng quét không đọc; Hick, Fitts, Miller, Jakob; 5 nguyên tắc UX rút từ Nielsen). 1.5 Quy trình thiết kế (bản đồ 6 bước dạng dòng thời gian màu, mỗi bước một đầu ra; bước cuối là Present). 1.6 Cơ sở thiết kế giao diện UI (đối chiếu Material 3): bố cục; thứ bậc; chữ (kiểu chữ serif/sans-serif/monospace, chọn font, thang chữ M3, ví dụ trên màn hình); màu (bảng vai trò màu M3, chọn màu từ màu nguồn và sắc độ, ví dụ trên màn hình); border và shadow (bo góc, elevation); thành phần; trạng thái; affordance và feedback (dấu hiệu tương tác, phản hồi); quy ước nền tảng; accessibility (WCAG, HIG, M3); checklist đọc màn hình 9 câu.

### Slide Content Plan
- 27 slide (kể cả 4 bìa mục tự sinh cho 1.1, 1.5, 1.6, 1.7): bìa khóa học "Thiết kế UI/UX" (chỉ tên và hình SVG, footer tutor), slide Mục lục 7 phần, rồi 21 slide theo đúng mục trên; bìa mỗi phần chỉ có tên, một câu mục tiêu và các mục con.

### Demo Scope
Đọc màn hình chính của một app quen thuộc bằng checklist 8 câu.

### Update Notes
Không mở đầu bằng thuật ngữ lạ. Phong cách và tham khảo chuyển sang 6.2 Design Direction, nơi nó được dùng.

## Module 2: Phân tích brief

### Teaching Purpose
Đọc brief, tách đã biết / còn thiếu, tìm nhu cầu thật, biết hỏi ai, viết Product Direction Brief.

### Beginner Takeaways
- Brief nói giải pháp; hỏi "để làm gì" ba lần để tới nhu cầu.
- Rủi ro phải trích được câu trong brief.
- Điền đủ 7 ô ngay là đáng ngờ.

### Theory Scope
- Ba slide: bìa; Đề bài (hai đoạn dẫn, bảng phân tích cần có: 4 cột, 7 thành phần, 'để làm gì' ba lần, người cần hỏi; ô nhắc); hình minh họa bảng làm việc bước 1 (brief → 4 cột → 'để làm gì').

### Slide Content Plan
- Bìa, 6 mục, Thực hành, Đầu ra (9 slide).

### Demo Scope
Phân tích brief mẫu theo 4 cột, viết Product Direction Brief.

### Update Notes
Prompt phân tích brief nằm ở 7.3, không chen vào đây.

## Module 3: Nghiên cứu thị trường

### Teaching Purpose
Gom user research và market research thành một phần ngắn: 5 khái niệm, phỏng vấn, đối thủ 4 lớp, benchmark, opportunity gap.

### Beginner Takeaways
- Research question khác câu phỏng vấn; hỏi về lần gần nhất.
- Substitute là đối thủ thật.
- Opportunity gap = nhu cầu + gap + vì sao bạn làm được.

### Theory Scope
- Ba slide: bìa; Đề bài (Market Research cần có: tổng quan, đối thủ bốn lớp, pricing, teardown, 3–6 phỏng vấn, Market Gap Matrix; ô nhắc); hình minh họa bước 2 (bảng đối thủ, phỏng vấn, Gap Matrix).

### Slide Content Plan
- Bìa, 7 slide nội dung, Thực hành, Đầu ra (10 slide).

### Demo Scope
Research plan mẫu, phỏng vấn thử, benchmark 2 app.

### Update Notes
Bài tập bắt buộc: 2–3 phỏng vấn thật trước Phần 4.

## Module 4: Khách hàng và điểm khác biệt

### Teaching Purpose
Biến ghi chép thành vấn đề, nghĩ nhiều phương án, chọn MVP. Đây là nơi sinh ra ý tưởng thiết kế.

### Beginner Takeaways
- Không nhảy từ raw data lên giải pháp.
- Nhiều phương án cho mỗi HMW trước khi chọn.
- Feature vào MVP phải trỏ về Problem Statement.

### Theory Scope
- Ba slide: bìa; Đề bài (Product Direction cần có: ICP, Problem Statement, giá dự kiến, USP, vì sao chọn bạn; ô nhắc); hình minh họa Product Direction một trang và bảng 'vì sao chọn bạn'.

### Slide Content Plan
- Bìa, 6 slide nội dung, Thực hành, Đầu ra (9 slide).

### Demo Scope
Affinity map mẫu, Problem Statement, HMW, phương án, MVP.

### Update Notes
Đây là buổi 5 của sổ tay, đặt trước UX Architecture để đi một lần thay vì V0 rồi V1.

## Module 5: Mô tả sản phẩm

### Teaching Purpose
Role, use case, năm điểm của flow, task flow → user flow, sitemap và screen inventory kèm trạng thái, wireframe, low-fi vs high-fi.

### Beginner Takeaways
- Hình thoi một đường ra là if không có else.
- Screen inventory kèm trạng thái là danh sách việc cho hai bước sau.
- Làm high-fi sớm thì tiếc công, không dám sửa cấu trúc.

### Theory Scope
- Ba slide: bìa; Đề bài (Product Spec cần có: user story, tính năng user/admin với MVP scope, flow năm điểm, sitemap và screen inventory, sơ đồ kiến trúc nếu đủ; ô nhắc); hình minh họa Product Spec (user story → feature → flow → screen inventory).

### Slide Content Plan
- Bìa, 8 slide nội dung, Thực hành, Đầu ra (11 slide).

### Demo Scope
Use case và user flow mẫu, screen inventory, wireframe màn đặt lịch.

### Update Notes
Wireframe minh họa là SVG tự vẽ; không dùng ảnh chụp sản phẩm.

## Module 6: Thiết kế và trình bày

### Teaching Purpose
Gói gọn tool: Figma vừa đủ, Design Direction, token, component, dựng UI và nối prototype, trình bày, bàn giao.

### Beginner Takeaways
- Auto layout là flexbox; token là CSS variable; component là hàm có props.
- Trình bày theo thứ tự đã làm: vấn đề → người dùng → giải pháp → flow → bấm thử.
- Dev chỉ nhìn Ready for Dev.

### Theory Scope
- Ba slide: bìa; Đề bài (bản thiết kế cần có: wireframe, Design Direction, Design System, prototype, demo 5 phút, Ready for Dev; ô nhắc); hình minh họa wireframe → design system → prototype → demo.

### Slide Content Plan
- Bìa, 10 slide nội dung, Thực hành, Đầu ra (13 slide).

### Demo Scope
Trong một file Figma mẫu: foundations, component, dựng màn đặt lịch, nối prototype, trình bày 5 phút.

### Update Notes
Không biến thành sách hướng dẫn Figma. Đa nền tảng chỉ một dòng trong 6.7; chi tiết ở workbook.

## Module 7: Kết hợp với AI

### Teaching Purpose
Gom toàn bộ nội dung AI của sổ tay: nguyên tắc, Master Context, khung prompt, prompt theo bước 1–4, Figma Agent, Figma Make, ba câu hỏi kiểm tra.

### Beginner Takeaways
- AI mở rộng và thu gọn; bạn quyết định.
- Master Context giữ AI nhất quán.
- Báo cáo trước, sửa sau.

### Theory Scope
- Bìa roadmap; 7.1 AI làm gì trong quy trình (Đề bài: giao AI / làm cùng AI / tự làm; bộ công cụ cần có); 7.2 Master Context, Khung prompt; 7.3 Prompt theo bước (bảng 6 bước + prompt Bước 1, Bước 2, Bước 3–4); 7.4 Figma Agent, Figma Make; 7.5 Kiểm tra kết quả AI.

### Slide Content Plan
- Bìa và 10 slide (11 slide); slide cuối mang footer tutor.

### Demo Scope
Chạy ba prompt trên tài liệu mẫu và lọc kết quả cùng nhau.

### Update Notes
Tên phần là "Kết hợp với AI", không dùng chữ "Bổ sung".
