# Kế hoạch tái cấu trúc slide: UI/UX Design with Figma & AI (v2)

Tài liệu này ghi lại kế hoạch gom và sắp xếp lại bộ slide `ui-ux-beginner` theo hướng của
`so-tay-ux-figma-agent.html`, với ví dụ xuyên suốt là dự án **ACE Court Booking** (Figma: ACE Design).

## 1. Mục tiêu

- Giữ nền tảng cũ (See it → Name it) vì học viên là developer chưa có kinh nghiệm thiết kế.
- Bổ sung quy trình thiết kế có AI hỗ trợ từ sổ tay (Brief → Research → Flow → Design System → Prototype),
  nhưng rút gọn từ 8 buổi xuống 4 module quy trình, mỗi khái niệm chỉ giữ phần "đủ dùng".
- Mọi ví dụ lấy từ ACE Court Booking; học viên làm song song trên dự án của mình.
- Thông tin cố định: tutor **Huyen Vu**, **Software Engineer**.

## 2. Cấu trúc mới: 6 module

| # | Module | Câu chuyện | Gốc nội dung |
|---|--------|-----------|--------------|
| 1 | Introduction | Đây là ai, học gì, dự án ACE là gì, AI đứng ở đâu | Slide cũ M1 + Sổ tay Tổng quan, Buổi 1 (AI Workflow Map) |
| 2 | UI/UX Fundamentals | See it, name it: đọc màn hình ACE theo từng khái niệm | Slide cũ M2 (giữ nguyên xương sống, đổi ví dụ) |
| 3 | Understand the Problem | Brief → Master Context → Research nhẹ → Competitor → Opportunity | Sổ tay Buổi 1, 2, 3 (rút gọn) |
| 4 | Structure the Product | Role → Use Case → User Flow → Sitemap → MVP → Screen Inventory | Sổ tay Buổi 4, 5 |
| 5 | Figma & Design System | Figma cơ bản + Token + Component + Figma Agent | Slide cũ M4 + Sổ tay Buổi 6 |
| 6 | Prototype With AI & Ship | Master Prompt → Figma Make → Systemize → File → Handoff → Practice | Sổ tay Buổi 7, 8 + slide cũ "How to practice" |

Module 3 (Design Process cũ) được hoà vào module 3, 4 và 6 mới; vòng lặp "idea → sketch → wireframe → prototype → test"
vẫn xuất hiện nhưng gắn với artifact cụ thể (use case, flow, prototype) thay vì đứng riêng.

## 3. Định dạng slide mới (theo tinh thần sổ tay)

Mỗi module quy trình (3–6) đi theo một nhịp cố định:

1. Cover + mục tiêu.
2. Khái niệm cần nắm (ngắn, 3–5 dòng).
3. Nội dung chính, mỗi slide một ý, có ví dụ ACE ngay bên cạnh.
4. Slide **Prompt** (khung prompt dùng được ngay).
5. Slide **Workshop** (làm gì trong buổi) + **Outputs** (checklist đầu ra).
6. Slide **Self-check** (câu hỏi tự kiểm tra).

Kỹ thuật: `presentation-data.js` có thêm các loại slide `example`, `prompt`, `checklist`, `practice`, `quiz`
và các trường `code`, `table`, `columns`, `note`, `image`. Ảnh màn hình ACE nằm ở `assets/ace/`.

## 4. Dự án ACE: bổ sung để hoàn chỉnh flow

Figma hiện có: Trang chủ, Đăng nhập/Đăng ký, Khám phá, Tra cứu, Chi tiết sân, Đặt sân (web + mobile),
Thanh toán, Modal thành công, Hồ sơ, Đặt chỗ của tôi, Admin (6 màn), bộ component v2.

Phần còn thiếu theo quy trình sổ tay được viết trong `docs/ace-project-workbook.md`:
Client Brief, Master Context, phân tích brief, research plan, competitor matrix, opportunity gap,
role matrix, use case, user flow, sitemap V1, feature inventory + MVP, screen inventory kèm state,
design direction, token, component inventory, naming, master prompt, cấu trúc file, và danh sách
frame cần vẽ thêm trong Figma (Empty/Error/Loading, hủy đặt, danh sách chờ, đặt sân nhóm).

## 5. Thứ tự thực hiện

1. Viết `docs/course-plan-v2.md` (file này).
2. Viết lại `src/presentation-data.js` theo 6 module.
3. Mở rộng `src/app.js` và `styles.css` cho các loại slide và visual mới.
4. Viết lại `docs/module-scope.md` cho 6 module.
5. Viết `docs/ace-project-workbook.md`.
6. Cập nhật `tests/presentation.test.mjs`, chạy `node --test`, chụp màn hình kiểm tra.

## 6. Cập nhật v3 (tiếng Việt, bám sổ tay 8 buổi)

- Slide chuyển sang tiếng Việt, giữ thuật ngữ Anh. Cấu trúc 9 phần: Phần 1 "Nhìn lại và định hướng" + 8 phần bám 1:1 với 8 buổi của sổ tay. Mỗi phần có slide "Soi thành phẩm của bạn" để học viên áp khái niệm lên file Figma đang có.
- Bỏ slide giới thiệu tutor; tên tutor chỉ nằm ở footer bìa và slide kết.
- Figma: tạo FigJam "ACE — Research & Flows" (6 section) và chỉnh file "ACE Design" (page 00 Start here, 01 Design Direction, 02 Wireframe, 03 Design System, 04 Design & Prototype; semantic tokens Light/Dark; text/effect styles; variant Button/Slot/Field; prototype nối flow). Chi tiết ở `docs/ace-project-workbook.md` mục 0.

## 7. Cập nhật v4 (dàn ý chốt)

- 7 phần, 80 slide: Phần 1 Nền tảng UI/UX (UI/UX là gì → tư duy thiết kế → chuỗi 6 bước → công cụ thị giác) · Phần 2–6 đi đúng 6 bước Brief → Research → Brainstorm → Wireframe → Prototype → Demo · Phần 7 Kết hợp với AI (toàn bộ prompt, Figma Agent, Figma Make).
- Bỏ hoàn toàn khung "đã có / còn thiếu", "soi thành phẩm". Mỗi phần kết bằng Thực hành và Đầu ra; Thực hành có dòng "Kết hợp với AI: xem 7.x".
- Mục lục nhóm slide theo mục nhỏ (1.1, 1.2…). Thuật ngữ lạ dịch dễ hiểu (signifier → dấu hiệu tương tác), đặt sau khi học thành phần và trạng thái.

## 8. Cập nhật v5 (không nhắc sản phẩm, hình SVG)

- Tên khóa: "UI/UX căn bản". Slide không nhắc ACE hay sản phẩm cụ thể nào; ví dụ chung (app đặt lịch, giao đồ ăn, ngân hàng).
- Hình minh họa: 11 SVG tự vẽ trong `src/illustrations.js` (grid, hierarchy, palette, components, states, signifier, brief, gap, wireframe, tokens, prototype, outputs). Không còn ảnh chụp màn hình; thư mục `assets/ace/` không còn được slide dùng.
- Bộ demo ACE (FigJam, file Figma, `docs/ace-project-workbook.md`) giữ làm tài liệu riêng của tutor.

## 9. Cập nhật v6 (tên "Thiết kế UI/UX", Phần 1 viết lại, khung dẫn đường)

- Tên khóa: "Thiết kế UI/UX". Tên phần: Nền tảng UI/UX · Phân tích yêu cầu · Nghiên cứu người dùng và thị trường · Từ dữ liệu đến ý tưởng · Cấu trúc và khung màn hình · Dựng và trình bày bản thiết kế · Kết hợp với AI.
- Phần 1 gồm đúng 7 khối: UI/UX là gì, vì sao cần, sản phẩm của UI/UX, tư duy thiết kế, nguyên tắc UX, tâm lý thiết kế, cơ sở thiết kế giao diện UI (20 slide). Thêm SVG: nhà hàng, ba con số, mẫu F, bốn định luật.
- Khung dẫn đường: bìa mỗi phần có dải 7 phần + agenda mục nhỏ; mỗi slide có dải tiến độ mục và số trang toàn khóa; căn trái toàn bộ; ô nội dung bo góc 16 thay vì pill; menu thu gọn theo phần.

## 10. Nhật ký v7 (2026-09-05)

- Thêm bìa khóa học "Thiết kế UI/UX" ở slide 1 (mục tiêu khóa, đối tượng, mục lục 7 phần, footer tutor). Bìa Phần 1 đổi tiêu đề thành "Nền tảng UI/UX" như các phần khác. Tổng 85 slide.
- Mục lục: phần đang xem cũng thu gọn được (trước đây luôn mở); trạng thái mở/đóng do người dùng chọn được nhớ trong phiên.

## 11. Nhật ký v8 (2026-09-05)

- Bìa khóa học chỉ còn tên "Thiết kế UI/UX", hình SVG "course" và footer tutor. Mục lục 7 phần tách thành slide 2 (kind "toc").
- Bìa mỗi phần rút gọn: nhãn phần, tên, một câu mục tiêu, danh sách mục con, hình. Bỏ các dòng bullet và dải 7 phần.
- Nhấn logo/tên khóa ở giữa header để về trang đầu. Tổng 86 slide.

## 12. Nhật ký v9 (2026-09-05)

- Phần 1 sắp lại: 1.4 Tư duy thiết kế gộp luôn hai slide tâm lý (mẫu F, bốn định luật) thành "nghĩ như người dùng"; 1.5 Quy trình thiết kế tách riêng (sáu bước sáu đầu ra + bảng nối với tư duy thiết kế và các phần của khóa); 1.6 Nguyên tắc UX; 1.7 Cơ sở UI. Không còn mục "Tâm lý thiết kế". Tổng 87 slide.

## 13. Nhật ký v10 (2026-09-05)

- Phần 1 rà lại nội dung: tiêu đề ghi chung theo tên mục (slide đầu mỗi mục lấy đúng tên mục, các slide sau dùng tên ngắn: Mẫu đọc chữ F, Bố cục, Thứ bậc, Chữ, Màu...). UI luôn đứng trước UX. Câu chốt in đậm ở cuối mỗi slide. Bỏ câu nói về khóa học.
- Slide 1.1 thứ hai: bỏ tiêu đề, hình SVG màn hình app giao đồ ăn ở giữa, chú thích đường kẻ thành phần UI bên trái và hành trình UX bên phải (bố cục "figure").
- Sửa bố cục poster (slide Chữ) không còn lấn cột chữ.

## 14. Nhật ký v11 (2026-09-06)

- Hai slide tâm lý (mẫu F, bốn định luật) chuyển từ 1.4 sang mở đầu 1.6 Nguyên tắc UX, làm "vì sao" cho năm nguyên tắc. 1.4 còn một slide vòng 5 bước. Sơ đồ quy trình không tô ô nào. Define và Test diễn giải lại cho chuẩn.

## 15. Nhật ký v12 (2026-09-06)

- Bìa mục tự sinh: mỗi mục con (1.1, 1.5, 1.6, 1.7, 2.x...) có từ hai slide trở lên được chèn một slide chỉ có nhãn "Phần n · Mục x.y" và tên mục, không hình (kind "divider", sinh ở cuối presentation-data.js). Mục một slide không chèn để khỏi lặp tiêu đề. 17 bìa mục, tổng 104 slide.
- Vì bìa mục đã mang tên mục, slide đầu của 1.1 và 1.5 đổi tiêu đề thành "UI là gì, UX là gì" và "Quy trình thiết kế".

## 16. Nhật ký v13 (2026-09-06)

- 1.7 mở rộng từ 10 lên 16 slide, đối chiếu Material 3: Kiểu chữ (bảng serif/sans-serif/monospace/display + SVG typefaces), Chọn font thế nào, Thang chữ theo Material 3 (bảng Display/Headline/Title/Body/Label), Ví dụ thang chữ trên màn hình (figure typeExample), Các vai trò màu (bảng 9 dòng theo M3), Chọn màu thế nào (SVG tonal: màu nguồn → 13 sắc độ → vai trò), Ví dụ vai trò màu trên màn hình (figure colorExample), Bo góc và độ nổi (SVG shape). Trạng thái thêm focused/selected; Accessibility ghi 44pt HIG và 48dp M3 kèm nguồn; checklist 9 câu.
- 1.2: "3 giây" đổi thành 0,05 giây (Lindgaard 2006) vì con số cũ không có nguồn. Tổng 110 slide.

## 17. Nhật ký v14 (2026-09-06)

- Gộp 1.6 Nguyên tắc UX vào 1.4 Tư duy thiết kế (Tư duy thiết kế → thị giác người dùng → định luật tâm lý → Nguyên tắc UX). 1.7 Cơ sở thiết kế giao diện UI thành 1.6. Phần 1 còn sáu mục.

## 18. Nhật ký v15 (2026-09-06)

- 6.7 Bàn giao bỏ slide "Tổ chức file", chỉ giữ Ready-for-Dev checklist. Tổng 108 slide.
- 1.6 Cơ sở UI: đổi thuật ngữ Border và Shadow, Affordance và Feedback; slide Quy ước theo nền tảng sang bố cục hai cột với SVG ba khung có nhãn; bảng và ghi chú tăng cỡ chữ; slide Màu sắc rút còn ba cột.
- Khung ứng dụng khóa đúng một màn hình trên desktop và vòng co đo đáy nội dung thật, sửa lỗi cắt slide ở màn 1366×768.

## 19. Nhật ký v16 (2026-09-06)

- Phần 2–7 rà theo format Phần 1: slide đầu mỗi mục lấy tên mục làm tiêu đề, slide sau tên ngắn; tên mục dùng thuật ngữ (Phân tích 4 cột, Affinity mapping, Problem Statement, Feature Inventory và MVP, Role và Use case, User Flow, Sitemap và Screen Inventory, Wireframe, Figma cơ bản, Prototype, Naming, Foundation); câu chốt in đậm; ghi chú viết như lời giảng. Phần 5 gộp 5.3 vào 5.2 User Flow, còn 4 mục. Footer slide cuối khôi phục "Huyen Vu". Tổng 109 slide.
- FigJam: xóa 13 connector mồ côi ở cấp trang, thay đường tự nối E2 bằng ô lỗi riêng.

## 20. Nhật ký v17 (2026-09-06)

- Quy trình đổi thành 6 bước theo tài liệu build2own: Brief → Nghiên cứu thị trường → Khách hàng và điểm khác biệt → Mô tả sản phẩm → Thiết kế → Demo. Mục 1.5 và chuỗi six-steps cập nhật theo.
- Phần 2–6 đổi tên (Phân tích brief, Nghiên cứu thị trường, Khách hàng và điểm khác biệt, Mô tả sản phẩm, Thiết kế và trình bày) và mỗi phần chỉ còn bìa + "Đề bài" (hai đoạn dẫn, danh sách thứ bắt buộc phải có, ô nhắc tư duy) + "Kết quả cần nộp" (ba mục đánh số, dòng trỏ prompt AI). Lý thuyết chung nằm trong danh sách thứ cần có. Bỏ bìa mục con, Thực hành và Đầu ra riêng. Tổng 62 slide.
- Slide Đề bài bố cục hai cột trên desktop: dẫn + ô nhắc bên trái, danh sách bên phải.

## 21. Nhật ký v18 (2026-09-06)

- Phần 2–6: bỏ slide "Kết quả cần nộp" và các câu "không cần viết dài / trình bày đẹp / vẽ ngay". Mỗi phần là bìa + Đề bài + một hình minh họa bảng làm việc (briefBoard, marketBoard, directionCard, specBoard, designBoard) kèm hai dòng đọc hình và dòng trỏ prompt AI.

## 22. Nhật ký v19 (2026-09-06)

- 1.5 Quy trình thiết kế: bỏ slide "Xem lại quy trình"; sơ đồ đổi thành bản đồ dòng thời gian màu (SVG processMap) sáu bước, icon xen kẽ trên dưới, nhãn Bước 01–06 và đầu ra mỗi bước. Bước cuối đổi tên Demo → Present ở mọi chỗ. Tổng 60 slide.

## 23. Nhật ký v20 (2026-09-06)

- Sơ đồ quy trình (processMap) vẽ lại theo ngôn ngữ deck: một tông tím tăng sắc độ, nút trắng viền tím, icon nét mảnh, nhãn mono BƯỚC 01–06.
- Bìa Phần 2–6 dùng lại bản đồ với bước hiện tại tô đậm và nhãn "Bạn ở đây" (processMap1–5, Phần 6 sáng cả bước 5 và 6); dưới bản đồ là câu mục tiêu của phần; bỏ danh sách mục con trên bìa các phần này.

## 24. Nhật ký v21 (2026-09-06)

- Phần 7 viết lại theo khuôn mới: bìa roadmap (không tô bước), 7.1 Đề bài "AI làm gì trong quy trình" (giao AI / làm cùng AI / tự làm + bộ công cụ cần có), 7.2 Master Context và Khung prompt, 7.3 bảng Prompt theo sáu bước mới + ba slide prompt mẫu, 7.4 Figma Agent và Figma Make (gộp ba pha vào một slide), 7.5 Kiểm tra kết quả AI. Không còn bìa mục con. Tổng 57 slide.

- Bìa Phần 7 chỉ còn nhãn và tiêu đề (không roadmap, không mục tiêu, không danh sách mục con; cờ noAgenda).

- Slide Đề bài (Phần 2–7): câu "Quan trọng là…" tách khỏi đoạn dẫn thành ô "Trọng tâm" riêng ở cột trái; cột phải có tiêu đề nhỏ kiểu "Bảng phân tích cần có" trên danh sách.
