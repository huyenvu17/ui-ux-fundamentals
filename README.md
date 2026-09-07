# Thiết kế UI/UX — Slide khóa học

Bộ slide dạy thiết kế UI/UX căn bản cho developer (tiếng Việt), gồm 7 phần / ~80 slide:
Phần 1 nền tảng UI/UX → Phần 2–6 quy trình 6 bước (Brief → Nghiên cứu → Khách hàng → Mô tả sản phẩm → Thiết kế → Present) → Phần 7 kết hợp với AI.

Repo chứa 2 project độc lập:

| Thư mục | Nội dung | Công nghệ |
|---|---|---|
| root (`index.html`, `src/`, `styles.css`) | Slide deck | Vanilla JS, không cần build |
| `project/overlay/` | App thực hành "Overlay" (practice club cho designer) | Next.js 16 + React 19 + Tailwind 4 |

## Chạy slide deck

Deck dùng ES module nên cần một static server (mở file trực tiếp sẽ bị chặn CORS):

```bash
npx serve .
# hoặc: python -m http.server 8000
```

Rồi mở http://localhost:3000 (hoặc :8000). Điều hướng bằng nút ‹ ›, phím mũi tên, hoặc nút **Mục lục** để nhảy tới từng phần.

## Chạy test

Test kiểm tra cấu trúc nội dung slide (7 phần đúng thứ tự, không nhắc sản phẩm cụ thể, quy tắc cover/divider...):

```bash
npm test
```

## Chạy app Overlay

```bash
cd project/overlay
npm install
npm run dev
```

Mở http://localhost:3000.

## Cấu trúc slide deck

- `src/presentation-data.js` — toàn bộ nội dung slide dạng data (sửa nội dung ở đây)
- `src/app.js` — render slide theo `kind` (cover, divider, prompt, checklist, quiz…)
- `src/deck-state.js` / `src/deck-outline.js` — điều hướng và mục lục
- `src/illustrations.js` — 11 hình minh họa SVG tự vẽ
- `docs/module-scope.md` — scope giảng dạy từng phần (**cập nhật scope trước, rồi mới nén vào slide**)
- `docs/course-plan-v2.md` — lịch sử phát triển deck qua các bản v2→v6
- `docs/ace-project-workbook.md` + `assets/ace/` — bộ demo ACE Court Booking dành riêng cho tutor, không xuất hiện trong slide
