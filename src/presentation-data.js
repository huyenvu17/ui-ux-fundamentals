export const course = {
  title: "Thiết kế UI/UX",
  subtitle: "Nền tảng UI/UX, tư duy thiết kế và quy trình 6 bước Brief → Research → Brainstorm → Wireframe → Prototype → Demo, kết hợp với AI ở phần cuối.",
  totalModules: 7,
  sessionDurationMinutes: 90,
  rhythmMinutes: {
    theory: 30,
    demo: 20,
    workshop: 30,
    critique: 10
  },
  tutor: {
    name: "Huyen Vu",
    role: "Software Engineer"
  },
  steps: ["Brief", "Nghiên cứu thị trường", "Khách hàng và điểm khác biệt", "Mô tả sản phẩm", "Thiết kế", "Present"]
};

const makeDemo = (task, output, starterPrompt) => ({ task, output, starterPrompt });

const layoutByVisual = {
  "ace-flow": "wide",
  "ace-palette": "artifact",
  "ace-roles": "artifact",
  "ace-sitemap": "wide",
  "atomic-stack": "artifact",
  "data-ladder": "artifact",
  "design-loop": "wide",
  "dt-loop": "wide",
  "six-steps": "wide",
  "research-chain": "wide",
  principles: "center",
  accessibility: "artifact",
  "feedback-note": "artifact",
  "fidelity-lab": "comparison",
  "figma-workspace": "canvas",
  "figma-logo": "poster",
  "goal-grid": "center",
  illo: "illo",
  "mood-wall": "wide",
  none: "content-only",
  "practice-system": "center",
  "problem-flow": "wide",
  "product-journey": "cover",
  "session-timeline": "artifact",
  "three-phases": "wide",
  "tool-dock": "center",
  "two-columns": "comparison",
  "user-flow": "wide",
  "ux-map": "wide",
  components: "canvas",
  hero: "poster",
  hierarchy: "center",
  layers: "canvas",
  platforms: "center",
  style: "poster",
  typography: "poster",
  grid: "center"
};

// slide(kind, "1.2", "Tư duy thiết kế", title, points, visual, extras)
const slide = (kind, section, sectionTitle, title, points, visual = "none", extras = {}) => ({
  kind,
  section,
  sectionTitle,
  eyebrow: extras.eyebrow ?? (section ? `${section} · ${sectionTitle}` : sectionTitle),
  title,
  points,
  visual,
  layout: extras.layout ?? layoutByVisual[visual] ?? "split",
  ...extras
});

const illo = (name) => ({ visual: "illo", layout: "illo", illo: name });
// Two-slide process part: "Đề bài" (what to do, what the deliverable must contain, one mindset note)
const brief = (section, title, lead, items, note, key, listTitle) => slide("task", section, "Đề bài", title, items, "none", { layout: "content-only", lead, plain: true, note, key, listTitle });
// ... and one board illustration showing what the step's output looks like, with the AI pointer
const board = (section, title, figure, points, aiRef) => slide("theory", section, "Minh họa", title, points, "none", { layout: "figure", figure, hideTitle: true, note: aiRef ? `Kết hợp với AI: xem ${aiRef}.` : undefined });

export const sessions = [
  {
    number: 1,
    title: "Nền tảng UI/UX",
    focus: "Hiểu UI/UX là gì và vì sao cần, biết người làm UI/UX tạo ra gì, học tư duy thiết kế (kể cả tâm lý người dùng), nắm quy trình 6 bước, nguyên tắc UX, rồi các công cụ cơ bản để đọc và dựng một màn hình.",
    demo: makeDemo(
      "Mở một app quen thuộc (ngân hàng, giao đồ ăn, đặt vé) và đọc màn hình chính bằng checklist 9 câu: bố cục, thứ bậc, chữ, màu, border và shadow, thành phần, trạng thái, affordance và feedback, accessibility.",
      "Một màn hình được đọc và gọi tên đầy đủ; học viên tự đọc một app khác theo cùng checklist.",
      "Mở app bạn dùng mỗi ngày. Hành động chính là gì? Điều gì làm nó dễ hay khó?"
    ),
    slides: [
      slide("cover", "", "Thiết kế UI/UX", "Thiết kế UI/UX", [], "illo", { ...illo("course"), footer: "Huyen Vu ", courseCover: true }),
      slide("toc", "", "Mục lục", "Mục lục", [], "none", { layout: "content-only", eyebrow: "Khóa học · 7 phần", toc: true }),
      slide("cover", "", "Phần 1 · Nền tảng UI/UX", "Nền tảng UI/UX", [], "hero", {
        goal: "Hiểu UI/UX là gì, học cách nghĩ của người thiết kế và các công cụ cơ bản để dựng một giao diện."
      }),
      slide("theory", "1.1", "UI/UX là gì", "UI là gì, UX là gì", [
        "<b>UI</b> (User Interface) là giao diện: bố cục, màu, chữ, nút trông thế nào và đặt ở đâu.",
        "<b>UX</b> (User Experience) là trải nghiệm: người dùng có làm được việc không, có dễ không, có tin không.",
        "<b>UI đẹp + UX xấu: đẹp nhưng không làm được việc. UX tốt + UI xấu: làm được việc nhưng không muốn dùng. Sản phẩm cần cả hai.</b>"
      ], "two-columns"),
      slide("theory", "1.1", "UI/UX là gì", "Ví dụ: app gọi đồ ăn", [
        "<b>UI</b> là thứ nhìn thấy và chạm vào ở từng bước: ô tìm kiếm, thẻ quán, nút đặt món. Như thực đơn và cái đĩa trong nhà hàng.",
        "<b>UX</b> là cả hành trình từ mở app đến nhận đồ. Như cả bữa ăn: món ngon nhưng chờ 40 phút vẫn là trải nghiệm tệ."
      ], "none", { layout: "figure", figure: "foodapp", hideTitle: true }),
      slide("theory", "1.2", "Vì sao cần UI/UX", "Vì sao cần UI/UX", [
        "Người dùng hình thành ấn tượng về một giao diện trong <b>0,05 giây</b> (Lindgaard, 2006), trước khi kịp đọc chữ nào. UI là thứ họ thấy trước tiên.",
        "Khoảng <b>70%</b> giỏ hàng bị bỏ, phần lớn vì bước thanh toán rườm rà. Đó là lỗi UX, không phải lỗi màu sắc.",
        "Sửa một lỗi thiết kế sau khi đã code đắt gấp <b>10 lần</b> so với sửa lúc còn là bản vẽ.",
        "<b>Thiết kế tốt tiết kiệm tiền và thời gian cho cả hai phía: người dùng làm xong việc nhanh, đội phát triển ít làm lại, ít bug về luồng màn hình.</b>"
      ], "illo", illo("why")),
      slide("theory", "1.3", "Sản phẩm của UI/UX", "Sản phẩm của UI/UX", [
        "<b>Màn hình UI</b> và <b>Design System</b>: bản vẽ từng màn, cùng bộ màu, chữ, thành phần dùng lại được. Phần UI.",
        "<b>User Flow</b>: người dùng đi qua những bước nào để đạt mục tiêu. Phần UX.",
        "<b>Wireframe</b>: khung màn hình chưa có màu, nối UX với UI: đặt gì ở đâu trước khi tô đẹp.",
        "<b>Prototype</b>: bản bấm thử được, để kiểm tra cả UI lẫn UX trước khi code.",      ], "illo", illo("outputs")),
      slide("theory", "1.4", "Tư duy thiết kế", "Tư duy thiết kế", [
        "<b>Empathize</b> — quan sát và hỏi trước khi vẽ: ai dùng, đang cố làm gì, kẹt ở đâu.",
        "<b>Define</b> — từ điều quan sát được, viết vấn đề thành một câu theo góc nhìn người dùng.",
        "<b>Ideate</b> — nghĩ nhiều phương án trước khi chọn. Ý đầu tiên hiếm khi là ý tốt nhất.",
        "<b>Prototype</b> — làm bản thử với ít công sức nhất.",
        "<b>Test</b> — đưa cho người dùng thật dùng thử, xem họ ngập ngừng ở đâu, rồi quay lại bước cần sửa.",
        "<b>Bắt đầu từ người dùng, không từ màn hình. Ý tưởng thiết kế đến từ vòng lặp này, không đến từ cảm hứng.</b>"
      ], "dt-loop"),
      slide("theory", "1.4", "Tư duy thiết kế", "Thị giác người dùng", [
        "Trước khi đặt nguyên tắc, cần biết người dùng hành xử thế nào. Điều đầu tiên: họ <b>quét, không đọc</b>. Mắt đi theo hình chữ F: hàng đầu, hàng hai ngắn hơn, rồi lướt dọc mép trái.",
        "Họ nhìn hình trước chữ, chữ to trước chữ nhỏ, nút trước đoạn văn.",
        "Tiêu đề và hành động chính phải nằm trong vùng mắt dừng; góc dưới phải gần như không được nhìn.",
        "<b>Viết ngắn, đặt điều quan trọng lên đầu và bên trái. Phần còn lại người dùng sẽ không đọc.</b>"
      ], "illo", illo("fpattern")),
      slide("theory", "1.4", "Tư duy thiết kế", "Định luật tâm lý", [
        "<b>Hick</b> — càng nhiều lựa chọn, quyết định càng chậm. Menu 5 mục tốt hơn 12.",
        "<b>Fitts</b> — nút càng to và càng gần tay, càng dễ bấm. Nút chính dính đáy màn điện thoại.",
        "<b>Miller</b> — người ta nhớ được 5–7 thứ một lúc. Chia form dài thành từng bước.",
        "<b>Jakob</b> — người dùng muốn sản phẩm của bạn giống thứ họ đã quen. Đừng sáng tạo lại nút quay lại.",
        "<b>Nguyên tắc UX không phải quy ước tùy ý: chúng rút ra từ cách người dùng thật sự hành xử như trên.</b>"
      ], "illo", illo("laws")),
      slide("theory", "1.4", "Tư duy thiết kế", "Nguyên tắc UX", [], "none", {
        layout: "content-only",
        table: {
          head: ["Nguyên tắc", "Câu hỏi kiểm tra", "Ví dụ"],
          rows: [
            ["Rõ ràng", "Nhìn 3 giây có biết màn này để làm gì không?", "Trang chủ app đặt vé: một tiêu đề, một ô tìm kiếm"],
            ["Nhất quán", "Cùng một việc có cùng một cách làm ở mọi màn không?", "Nút chính luôn cùng màu, cùng vị trí"],
            ["Có phản hồi", "Bấm xong có biết đã xong chưa?", "Thêm vào giỏ → biểu tượng giỏ nhảy số"],
            ["Ít thao tác", "Có bước nào bỏ được không?", "Nhớ địa chỉ giao hàng lần trước"],
            ["An toàn khi sai", "Sai thì sửa được không, có mất gì không?", "Hoàn tác sau khi xóa, xác nhận trước khi thanh toán"]
          ]
        },
        note: "Năm câu hỏi cho mọi màn hình, rút gọn từ 10 heuristics của Nielsen và từ hai slide tâm lý phía trước. Nhìn bất kỳ màn nào cũng hỏi được ngay."
      }),
      slide("theory", "1.5", "Quy trình thiết kế", "Quy trình thiết kế", [
      ], "none", { layout: "figure", figure: "processMap" }),
      slide("theory", "1.6", "Cơ sở thiết kế giao diện UI", "Bố cục", [
        "<b>Lưới</b>: điện thoại 4 cột, tablet 8 cột, desktop 12 cột (Material 3). Mọi thứ bám cột.",
        "<b>Khoảng cách</b> theo lưới 4dp, bước nhảy 8: 4, 8, 16, 24, 32. Không có 13 hay 15.",
        "<b>Khoảng trắng</b> dùng để nhóm: thứ gần nhau là cùng nhóm, không cần kẻ ô.",
        "<b>Canh thẳng hàng trước, phá lưới sau.</b>"
      ], "illo", illo("grid")),
      slide("theory", "1.6", "Cơ sở thiết kế giao diện UI", "Thứ bậc", [
        "Cái quan trọng nhất phải nổi nhất. Bốn công cụ: <b>kích thước, độ đậm, màu, vị trí</b>.",
        "Lên kế hoạch cho cái đọc thứ nhất, thứ hai, thứ ba.",
        "Một màn chỉ có một hành động chính. Hành động phụ nhỏ hơn, nhạt hơn."
      ], "illo", illo("hierarchy")),
      slide("theory", "1.6", "Cơ sở thiết kế giao diện UI", "Kiểu chữ", [], "none", {
        layout: "figure",
        figure: "typefaces",
        table: {
          head: ["Kiểu", "Nhận ra thế nào", "Dùng cho", "Ví dụ"],
          rows: [
            ["<b>Sans-serif</b> (không chân)", "Nét đều, đầu nét không có chân", "Giao diện app, web, dashboard. <b>Mặc định cho UI.</b>", "Inter, Roboto, Be Vietnam Pro"],
            ["<b>Serif</b> (có chân)", "Có chân nhỏ ở đầu nét, nét dày mỏng", "Đọc dài, báo chí, thương hiệu sang; tiêu đề khi có chủ đích", "Georgia, Merriweather, Lora"],
            ["Monospace (đơn cách)", "Mọi ký tự rộng bằng nhau", "Mã nguồn, số liệu cần thẳng cột, mã đặt chỗ", "JetBrains Mono, Roboto Mono"],
            ["Display / Script", "Trang trí, nét viết tay hoặc rất đậm", "Logo, một tiêu đề lớn. Không bao giờ dùng cho thân chữ", "Lobster, Pacifico"]
          ]
        },
      }),
      slide("theory", "1.6", "Cơ sở thiết kế giao diện UI", "Chọn font thế nào", [
        "<b>Một font sans-serif</b> cho cả app là đủ. Font thứ hai chỉ khi có lý do rõ, ví dụ tiêu đề serif cho brand.",
        "Kiểm tra trước khi chọn: <b>đủ dấu tiếng Việt</b> (ơ, ư, ậ, ễ), đủ độ đậm (400, 500, 600, 700), miễn phí trên Google Fonts.",
        "Gợi ý an toàn: <b>Inter</b> trung tính, <b>Roboto</b> mặc định của Android và Material, <b>Be Vietnam Pro</b> tiếng Việt đẹp, <b>Lexend</b> dễ đọc.",
        "Thân chữ 16px, dòng cao 24px. Chữ nhỏ nhất 11–12px. Số quan trọng to và đậm, đơn vị nhỏ.",
      ], "typography"),
      slide("theory", "1.6", "Cơ sở thiết kế giao diện UI", "Quy định Font", [], "none", {
        layout: "content-only",
        table: {
          head: ["Vai trò", "Cỡ / dòng (sp), ba mức Large · Medium · Small", "Độ đậm", "Dùng cho"],
          rows: [
            ["Display", "57/64 · 45/52 · 36/44", "400", "Số rất lớn, màn chào. Hiếm dùng trong app"],
            ["Headline", "32/40 · 28/36 · 24/32", "400", "Tiêu đề màn hình, tiêu đề mục lớn"],
            ["Title", "22/28 · 16/24 · 14/20", "400–500", "Tiêu đề app bar, tiêu đề thẻ, hộp thoại"],
            ["Body", "16/24 · 14/20 · 12/16", "400", "Nội dung chính, mô tả, đoạn văn"],
            ["Label", "14/20 · 12/16 · 11/16", "500", "Chữ trên nút, chip, tab, chú thích"]
          ]
        },
        note: "Một app nhỏ chỉ cần năm cỡ: Headline Small 24, Title Medium 16, Body Large 16, Body Medium 14, Label Large 14. <br/> Nguồn: Material 3, Typography, type scale tokens."
      }),
      slide("theory", "1.6", "Cơ sở thiết kế giao diện UI", "Ví dụ: thang chữ trên màn hình", [
        "T <b>năm cỡ</b>. Cùng vai trò thì cùng cỡ ở mọi màn.",
        "<b>Nhìn cỡ chữ là biết vai trò: to nhất là tiêu đề màn, đậm vừa là tiêu đề thẻ, nhỏ và xám là chú thích.</b>"
      ], "none", { layout: "figure", figure: "typeExample", hideTitle: true }),
      slide("theory", "1.6", "Cơ sở thiết kế giao diện UI", "Màu sắc", [], "none", {
        layout: "content-only",
        table: {
          head: ["Nhóm", "Vai trò (Material 3)", "Dùng cho"],
          rows: [
            ["<b>Primary</b> · màu chủ", "Primary · On primary · Primary container", "Nút chính, tab đang chọn; container cho chip đang chọn"],
            ["<b>Secondary</b> · màu phụ", "Secondary · Secondary container", "Nút phụ, chip lọc, thẻ ít quan trọng"],
            ["<b>Tertiary / Accent</b> · bổ trợ", "Tertiary · Tertiary container", "Nhấn tương phản, badge, nhãn khuyến mãi"],
            ["<b>Error</b> · lỗi", "Error · On error · Error container", "Ô nhập sai, thông báo lỗi, nút xóa"],
            ["<b>Surface</b> · nền", "Surface · On surface · Surface variant", "Nền màn hình và chữ chính; variant cho nền thẻ, ô nhập"],
            ["<b>Outline</b> · viền", "Outline · Outline variant", "Viền ô nhập, đường kẻ chia"],
            ["<b>Semantic</b> · ngữ nghĩa (ngoài M3)", "Success · Warning · Info", "Đã xác nhận, chờ thanh toán, thông tin"]
          ]
        },
        note: "Mỗi màu đi kèm một màu chữ 'On' để chữ đặt lên nó luôn đọc được. Bạn không cần nhớ hết: nhớ Primary, Surface, Outline, Error là dựng được phần lớn màn hình. Nguồn: Material 3, Color roles."
      }),
      slide("theory", "1.6", "Cơ sở thiết kế giao diện UI", "Chọn màu thế nào", [
        "Bắt đầu từ <b>một màu nguồn</b>: lấy từ brand. Chưa có brand thì lấy từ ngành nghề đặc trưng",
        "Từ màu nguồn sinh ra <b>các sắc độ 0–100</b>, rồi gán vai trò: Primary lấy sắc 40, Primary container 90, chữ On lấy 100 hoặc 10. Material Theme Builder làm bước này tự động.",
        "Tỉ lệ <b>60-30-10</b>: nền 60%, màu phụ và thẻ 30%, màu hành động 10%. Màu chủ hiếm mới nổi.",
        "Cặp chữ và nền phải đạt tương phản <b>4.5:1</b>. Màu ngữ nghĩa cố định: xanh lá thành công, cam chờ, đỏ lỗi.",
      ], "illo", illo("tonal")),
      slide("theory", "1.6", "Cơ sở thiết kế giao diện UI", "Ví dụ: vai trò màu trên màn hình", [
        "Cả màn hình nên chỉ có <b>một màu chủ</b> và các sắc độ của nó.",
        "<b>Nút chính là chỗ duy nhất tô đặc màu chủ. Các thành phần khác dùng sắc nhạt, viền, hoặc chữ màu.</b>"
      ], "none", { layout: "figure", figure: "colorExample", hideTitle: true }),
      slide("theory", "1.6", "Cơ sở thiết kế giao diện UI", "Border và Shadow", [
        "<b>Border</b> bo góc theo thang (Material 3): 4 · 8 · 12 · 16 · 28 · tròn hẳn. Ô nhập và chip 8, thẻ 12, hộp thoại và sheet 28, nút tròn hẳn hoặc 8.",
        "Bo lớn cho cảm giác thân thiện, tiêu dùng. Bo nhỏ cho cảm giác nghiêm túc, công cụ. <b>Một app chọn một thang</b>, không trộn.",
        "<b>Shadow</b> (elevation) có cấp 0–5: thẻ nằm cấp 1, menu và hộp thoại cấp 3. Bóng mờ và ngắn, không bóng đen đậm.",
      ], "illo", illo("shape")),
      slide("theory", "1.6", "Cơ sở thiết kế giao diện UI", "Thành phần UI", [
        "<b>Nút</b> (button), <b>ô nhập</b> (text field), <b>ô chọn</b> (radio, checkbox, chip).",
        "<b>Thẻ</b> (card), <b>danh sách</b> (list), <b>bảng</b> (table), <b>tab</b>.",
        "<b>Hộp thoại</b> (dialog), <b>thông báo nhỏ</b> (toast, M3 gọi là snackbar), <b>trạng thái trống</b> (empty state).",
        "<b>Điều hướng</b>: thanh trên (top app bar), thanh dưới (bottom tab, M3 gọi là navigation bar), thanh bên (navigation rail, sidebar).",
        "<b>Gọi đúng tên thành phần giao diện giúp chuẩn hóa trong quá trình thiết kế đến lập trình.</b>"
      ], "illo", illo("components")),
      slide("theory", "1.6", "Cơ sở thiết kế giao diện UI", "Trạng thái", [
        "Vẽ một màn là vẽ đủ trạng thái. Của thành phần (Material 3): <b>enabled, hovered, focused, pressed, selected, disabled</b>.",
        "Của ô nhập: <b>focus, error, disabled</b>. Của màn hình: <b>loading, empty, error, success</b>.",
      ], "illo", illo("states")),
      slide("theory", "1.6", "Cơ sở thiết kế giao diện UI", "Affordance và Feedback", [
        "<b>Affordance</b> — dấu hiệu cho biết bấm được: nút nổi, link gạch chân, ô có viền, mũi tên bên phải. Không cần hướng dẫn.",
        "Lịch đặt chỗ: ô trắng có viền = trống, ô xám = đã có người, ô nét đứt = không mở.",
        "<b>Feedback</b> — phản hồi sau khi bấm: đổi màu, toast, chuyển động nhẹ. Hành động nào cũng cần một câu trả lời.",
        "<b>Cách tương tác hay phản hồi cần đồng nhất ở các màn hình, tăng độ nhận diện và trải nghiệm.</b>"
      ], "illo", illo("signifier")),
      slide("theory", "1.6", "Cơ sở thiết kế giao diện UI", "Quy ước theo nền tảng", [
        "<b>Mobile</b>: một tay, thanh tab dưới, nút chính dính đáy, một việc mỗi màn.",
        "<b>Web</b>: 12 cột, thanh điều hướng trên, nhiều thông tin hơn mỗi màn.",
        "<b>Dashboard</b>: sidebar, bảng dày, phiên dài, bàn phím và chuột.",
        "<b>Người dùng đã quen gì thì theo đó: nút quay lại, ô tìm kiếm, cách chọn ngày.</b>"
      ], "illo", illo("platforms")),
      slide("theory", "1.6", "Cơ sở thiết kế giao diện UI", "Accessibility", [
        "Thiết kế cho nhiều người hơn. Chữ trên nền: tương phản tối thiểu <b>4.5:1</b>, chữ lớn và biểu tượng 3:1. Chữ trắng trên vàng chanh không đạt.",
        "Vùng chạm tối thiểu <b>44 × 44 pt</b> (Apple) hoặc <b>48 × 48 dp</b> (Material 3).",
        "Không truyền nghĩa chỉ bằng màu: ô 'không mở' vừa xám vừa nét đứt.",
        "Chữ tối thiểu 12px, thân 16px. Hỗ trợ phóng to chữ.",
      ], "accessibility", { note: "Nguồn: WCAG 2.1 mức AA, Apple Human Interface Guidelines, Material 3 Accessibility." }),
      slide("checklist", "1.6", "Cơ sở thiết kế giao diện UI", "Checklist khi thiết kế màn hình", [], "none", {
        layout: "content-only",
        table: {
          head: ["#", "Câu hỏi", "Khái niệm"],
          rows: [
            ["1", "Màn này để làm gì? Hành động chính là gì?", "Rõ ràng, thứ bậc"],
            ["2", "Mọi thứ có bám lưới và thang 4dp không?", "Bố cục"],
            ["3", "Một font, mỗi cỡ chữ một vai trò?", "Chữ"],
            ["4", "Mỗi màu có vai trò không? Màu hành động có duy nhất không?", "Màu"],
            ["5", "Border và shadow có theo một thang không?", "Border, shadow"],
            ["6", "Gọi tên được từng thành phần không?", "Thành phần UI"],
            ["7", "Đủ trạng thái chưa: loading, empty, error, success?", "Trạng thái"],
            ["8", "Nhìn là biết bấm được ở đâu? Bấm xong có phản hồi?", "Affordance, feedback"],
            ["9", "Tương phản, vùng chạm, không chỉ bằng màu?", "Accessibility"]
          ]
        },
        note: "Checklist này dùng lại ở mọi phần sau: đọc màn của người khác, kiểm tra wireframe của mình, nhận xét prototype của bạn học."
      })
    ]
  },
  {
    number: 2,
    title: "Phân tích brief",
    focus: "Đọc yêu cầu của khách hàng, tách điều đã biết khỏi điều còn thiếu, lần ngược từ giải pháp về nhu cầu thật.",
    demo: makeDemo(
      "Phân tích một client brief mẫu (app đặt lịch khám) theo 4 cột và 7 thành phần, hỏi 'để làm gì' ba lần cho yêu cầu 'thanh toán trước'.",
      "Bảng phân tích brief cho dự án của mỗi học viên.",
      "Viết sản phẩm của bạn thành một client brief 5 dòng, như thể khách hàng đưa cho bạn."
    ),
    slides: [
      slide("cover", "", "Phần 2 · Bước 1 · Brief", "Phân tích brief", [], "none", { layout: "figure", figure: "processMap1", goal: "Đọc brief của khách hàng để tách yêu cầu khỏi nhu cầu thật và ghi rõ điều chưa biết." }),
      brief("2.1", "Phân tích brief", [
        "Từ yêu cầu ban đầu của khách hàng, phân tích để hiểu rõ: khách đã nói gì, còn thiếu gì, chỗ nào hiểu được nhiều cách, và đằng sau mỗi yêu cầu là nhu cầu thật nào.",
      ], [
        "Từng câu của brief xếp vào 4 cột: <b>đã có, còn thiếu, chưa rõ, rủi ro</b>. Mỗi rủi ro chỉ được câu nào trong brief sinh ra nó.",
        "Bảy thành phần của bài toán: business model, business goal, người dùng, vấn đề của họ, thị trường, platform, ràng buộc. Ô nào không có căn cứ ghi 'giả thuyết'.",
        "Với mỗi yêu cầu chính, hỏi <b>'để làm gì?'</b> ba lần để tìm nhu cầu thật, đặt cạnh yêu cầu gốc, kèm 2–3 cách khác để đáp ứng.",
        "Danh sách người cần hỏi (founder, vận hành, marketing, kỹ thuật) và câu hỏi cho từng người."
      ], "Ví dụ: 'muốn thanh toán trước' → để bệnh nhân không bỏ lịch → để giờ đó không trống. Nhu cầu thật là giảm bỏ lịch; thanh toán trước chỉ là một cách. Đọc xong brief, chưa được vẽ.",
      "Tách được yêu cầu khách đưa khỏi nhu cầu thật, và ghi rõ điều chưa biết thay vì tự lấp bằng phỏng đoán.", "Bảng phân tích cần có"),
      board("2.2", "Minh họa: phân tích brief", "briefBoard", [
        "Đọc từ trái sang phải: brief của khách → xếp vào 4 cột và 7 thành phần → lần ngược từng yêu cầu về nhu cầu thật.",
        "<b>Ô vàng là chỗ chưa biết. Đừng lấp bằng phỏng đoán, đó là việc của bước Nghiên cứu.</b>"
      ], "7.3 (prompt phân tích brief)")
    ]
  },
  {
    number: 3,
    title: "Nghiên cứu thị trường",
    focus: "Nhìn thị trường và đối thủ đúng chỗ, hỏi người dùng thật đúng cách, để có kết luận của chính mình thay vì chép lại đối thủ.",
    demo: makeDemo(
      "Benchmark flow đặt lịch trên 2 app, phỏng vấn thử một học viên 10 phút, điền một Market Gap Matrix mẫu.",
      "Market Research, ghi chép phỏng vấn và Market Gap Matrix cho dự án của mỗi học viên.",
      "Người dùng của bạn hôm nay đang dùng gì để làm việc đó, khi chưa có app? Đó là đối thủ thật."
    ),
    slides: [
      slide("cover", "", "Phần 3 · Bước 2 · Nghiên cứu thị trường", "Nghiên cứu thị trường", [], "none", { layout: "figure", figure: "processMap2", goal: "Hiểu thị trường đang có gì, đối thủ làm thế nào, người dùng xoay xở ra sao, và chỗ nào còn trống." }),
      brief("3.1", "Nghiên cứu thị trường và đối thủ", [
        "Từ bảng phân tích brief, nghiên cứu thị trường để hiểu rõ: thị trường đang có gì, đối thủ đang làm thế nào, người dùng hôm nay xoay xở bằng gì, và chỗ nào chưa ai giải quyết tốt.",
      ], [
        "Tổng quan thị trường và các sản phẩm đang có.",
        "Đối thủ chính theo bốn lớp: <b>direct, indirect</b> (ngành khác cùng bài toán), <b>substitute</b> (Zalo, gọi điện, sổ giấy), <b>emerging</b>.",
        "Giá hoặc mô hình pricing của từng đối thủ.",
        "Teardown 2–3 đối thủ đáng chú ý: họ giải vấn đề gì, tính năng chính, đi qua một core flow thì mấy bước, xử lý hết chỗ và hủy ra sao.",
        "3–6 phỏng vấn người dùng thật: hỏi về <b>lần gần nhất</b>, không hỏi 'thường thì', không hỏi câu dẫn dắt. Ghi nguyên văn, có mã người.",
        "<b>Market Gap Matrix</b>: khoảng trống hoặc cơ hội mà các sản phẩm hiện tại chưa giải quyết tốt."
      ], "Mục tiêu không phải tìm một sản phẩm rồi làm giống lại, mà để hiểu thị trường đang có gì và còn thiếu gì. 'Đối thủ có 20 tính năng, mình phải có 21' là kết luận sai.",
      "Nghiên cứu đủ sâu và đưa ra kết luận của chính bạn, thay vì chỉ chép lại những gì đối thủ đang làm.", "Market Research cần có"),
      board("3.2", "Minh họa: nghiên cứu thị trường", "marketBoard", [
        "Bảng đối thủ và pricing đặt cạnh ghi chép phỏng vấn nguyên văn; hai nguồn này gặp nhau ở Market Gap Matrix.",
        "<b>Ô cơ hội là chỗ nhu cầu cao mà đối thủ giải kém, và phải có số từ phỏng vấn chống lưng.</b>"
      ], "7.3 (prompt tag transcript và tổng hợp đối thủ)")
    ]
  },
  {
    number: 4,
    title: "Khách hàng và điểm khác biệt",
    focus: "Từ kết quả nghiên cứu, chốt phục vụ ai, họ gặp vấn đề gì, bán ở mức giá nào và khác biệt nằm ở đâu.",
    demo: makeDemo(
      "Từ Market Research mẫu, viết ICP, Problem Statement, giá dự kiến và USP cho app đặt lịch khám.",
      "Product Direction cho dự án của mỗi học viên.",
      "Nếu bỏ sản phẩm của bạn đi, khách hàng mất gì mà đối thủ không bù được?"
    ),
    slides: [
      slide("cover", "", "Phần 4 · Bước 3 · Khách hàng và điểm khác biệt", "Khách hàng và điểm khác biệt", [], "none", { layout: "figure", figure: "processMap3", goal: "Xác định ICP, vấn đề của họ, giá dự kiến và USP thành một Product Direction." }),
      brief("4.1", "Xác định khách hàng và điểm khác biệt", [
        "Từ kết quả nghiên cứu, xác định hướng sản phẩm bạn muốn làm: phục vụ ai, họ đang gặp vấn đề gì, bán ở mức giá nào, và khác biệt nằm ở đâu.",
      ], [
        "<b>ICP</b> (Ideal Customer Profile): khách hàng bạn muốn phục vụ là ai, chia theo hành vi chứ không theo tuổi.",
        "<b>Problem Statement</b>: [nhóm người dùng] cần [nhu cầu] vì [insight], nhưng hiện tại [khoảng cách], dẫn đến [hậu quả]. Insight phải có số từ phỏng vấn.",
        "<b>Giá dự kiến</b>: bán ở mức nào, so với pricing của đối thủ.",
        "<b>USP</b> (Unique Selling Proposition): điểm khác biệt là gì, nối được với ô trống trong Market Gap Matrix.",
        "Vì sao khách nên chọn bạn thay vì giải pháp đang có, và vì sao bạn làm được."
      ], "'UI đẹp hơn' không phải khác biệt. 'Nhắc đúng buổi sáng hôm khám, qua kênh người dùng đang mở' mới là, vì đối thủ chỉ nhắn một tin trước một ngày.",
      "Tìm được một sự khác biệt rõ ràng. Đừng nhìn đối thủ rồi copy lại; dùng những gì đã nghiên cứu để tìm hướng hợp hơn với nhóm khách hàng bạn chọn.", "Product Direction cần ghi rõ"),
      board("4.2", "Minh họa: Product Direction", "directionCard", [
        "Một trang duy nhất: ICP, Problem Statement, giá dự kiến, USP. Bên phải là bảng so sánh thẳng với đối thủ.",
        "<b>Mỗi ô 'Bạn' phải khác 'Đối thủ' ở một điều người dùng thật sự kêu trong phỏng vấn.</b>"
      ], "7.3 (prompt gom affinity)")
    ]
  },
  {
    number: 5,
    title: "Mô tả sản phẩm",
    focus: "Biến hướng sản phẩm đã chốt thành mô tả đủ rõ: user story, tính năng, flow và màn hình.",
    demo: makeDemo(
      "Viết user story và feature inventory cho app đặt lịch khám, vẽ user flow 'Đặt lịch' có nhánh lỗi, lập screen inventory kèm trạng thái.",
      "Product Spec ban đầu cho dự án của mỗi học viên.",
      "Lấy một màn bạn định vẽ: nó thuộc user story nào, ở bước nào của flow? Không trả lời được thì chưa nên vẽ."
    ),
    slides: [
      slide("cover", "", "Phần 5 · Bước 4 · Mô tả sản phẩm", "Mô tả sản phẩm", [], "none", { layout: "figure", figure: "processMap4", goal: "Viết Product Spec: user story, tính năng, flow và màn hình, đủ rõ để thiết kế." }),
      brief("5.1", "Mô tả sản phẩm để chuẩn bị thiết kế", [
        "Từ hướng sản phẩm đã chốt, viết ra những thành phần chính mà sản phẩm cần có để chuẩn bị cho bước thiết kế và build.",
      ], [
        "Các <b>user story</b> chính: 'Là [ai], tôi muốn [làm gì], để [được gì]'.",
        "Tính năng người dùng cần và tính năng admin cần. Xếp <b>MVP / Phase 2 / Not now</b>, mỗi dòng có lý do trỏ về Problem Statement.",
        "Những <b>flow</b> quan trọng: entry, happy path, nhánh thay thế, nhánh lỗi, exit. Mỗi điểm quyết định ít nhất hai đường ra.",
        "<b>Sitemap và screen inventory</b>: màn nào, role nào, trạng thái cần vẽ (loading, empty, error, success).",
        "Nếu đủ thông tin, phác thêm sơ đồ kiến trúc để hiểu sản phẩm hoạt động thế nào."
      ], "Feature tưởng nhỏ hay lộ ra là lớn khi hỏi 'cần dữ liệu gì'. Màn chỉ có một trạng thái là màn chưa nghĩ kỹ.",
      "Biến những gì đã nghiên cứu thành một mô tả sản phẩm đủ rõ để người khác, và cả AI, hiểu và làm tiếp.", "Product Spec cần có"),
      board("5.2", "Minh họa: Product Spec", "specBoard", [
        "User story sinh ra tính năng; tính năng gắn nhãn MVP / Phase 2 / Not now; core flow có hình thoi và nhánh lỗi; mỗi màn kèm trạng thái.",
        "<b>Từ đây developer và AI đều đọc được sản phẩm sẽ làm gì, chưa cần một pixel nào.</b>"
      ], "7.3 (prompt tìm trường hợp thiếu)")
    ]
  },
  {
    number: 6,
    title: "Thiết kế và trình bày",
    focus: "Dựng bản thiết kế trong Figma có hệ thống, nối thành prototype bấm được, trình bày và bàn giao.",
    demo: makeDemo(
      "Trong một file Figma mẫu: wireframe màn đặt lịch, đặt token, xây nút và ô nhập đủ trạng thái, nối prototype ba màn, present 5 phút.",
      "Prototype chạy được và file Ready for Dev cho dự án của mỗi học viên.",
      "Trước khi mở Figma: bạn đã có screen inventory chưa? Chưa thì quay lại Phần 5."
    ),
    slides: [
      slide("cover", "", "Phần 6 · Bước 5–6 · Thiết kế và Present", "Thiết kế và trình bày", [], "none", { layout: "figure", figure: "processMap5", goal: "Wireframe, design system, prototype bấm được, rồi trình bày và bàn giao." }),
      brief("6.1", "Thiết kế, trình bày và bàn giao", [
        "Từ Product Spec, dựng bản thiết kế trong Figma có hệ thống: wireframe trước, rồi token và component, nối thành prototype bấm được, cuối cùng trình bày và bàn giao.",
      ], [
        "<b>Wireframe</b> 3–4 màn chính, chưa màu, hành động chính nổi nhất. Feedback bằng hai câu: 'Màn này để làm gì?' và 'Bạn sẽ bấm vào đâu trước?'",
        "<b>Design Direction</b> một trang: tính cách sản phẩm, reference board, brand, accessibility.",
        "<b>Design System</b>: token hai lớp (primitive → semantic), năm nhóm foundation theo mục 1.6, component có variant và state cho màn MVP.",
        "<b>Prototype</b> dựng từ component, đủ trạng thái, đi hết core flow kể cả nhánh lỗi.",
        "<b>Present</b> 5 phút: vấn đề → người dùng → giải pháp → flow → bấm thử. Giải thích quyết định, không giải thích màu.",
        "<b>Ready for Dev</b>: đủ trạng thái, đủ breakpoint, mọi màu và chữ dùng token, text thật, ghi chú hành vi ẩn."
      ], "Token là biến, component là hàm có props, auto layout là flexbox. Developer đã biết những thứ này, chỉ cần gọi đúng tên.",
      "Trước khi mở Figma: đã có screen inventory chưa? Chưa thì quay lại Phần 5.", "Bản thiết kế cần có"),
      board("6.2", "Minh họa: từ wireframe đến present", "designBoard", [
        "Wireframe xám → design system (token, chữ, component có variant và state) → prototype nối màn → present 5 phút theo thứ tự đã làm.",
        "<b>Cùng một màn đặt lịch đi qua bốn khâu. Cấu trúc chốt ở wireframe, màu và chữ chỉ đến sau.</b>"
      ], "7.4 (Figma Agent và Figma Make)")
    ]
  },
  {
    number: 7,
    title: "Kết hợp với AI",
    noDividers: true,
    focus: "Dùng AI tăng tốc từng bước của quy trình mà không giao quyền quyết định cho AI: Master Context, khung prompt, prompt theo bước, Figma Agent và Figma Make.",
    demo: makeDemo(
      "Chạy prompt phân tích brief trên brief mẫu, prompt tìm trường hợp thiếu trên user flow mẫu, prompt audit trên một page component; đọc và lọc kết quả cùng nhau.",
      "Master Context và bộ prompt cho dự án của mỗi học viên, đã chạy thử ít nhất ba prompt.",
      "Trước khi gõ prompt: bạn đã quyết chưa? Nếu chưa, AI sẽ quyết thay bạn."
    ),
    slides: [
      slide("cover", "", "Phần 7", "Kết hợp với AI", [], "none", { layout: "content-only", noAgenda: true }),
      brief("7.1", "AI làm gì trong quy trình", [
        "AI giỏi hai việc: mở rộng (sinh nhiều lựa chọn) và thu gọn (tóm tắt, phân loại). AI kém ở quyết định, vì quyết định cần bối cảnh thật mà AI không có: ngân sách, và những điều người dùng không nói ra.",
      ], [
        "<b>Giao AI</b>: việc có input rõ, output kiểm tra nhanh. Tóm tắt transcript, đổi tên layer, liệt kê đối thủ theo tiêu chí.",
        "<b>Làm cùng AI</b>: việc cần phán đoán, AI mở góc nhìn. Phân tích brief, draft user flow, tìm trường hợp thiếu.",
        "<b>Tự làm</b>: việc gắn trách nhiệm hoặc cần gặp người thật. Phỏng vấn người dùng, chọn MVP, present, ký bàn giao.",
        "<b>Master Context</b> dán vào mọi prompt, một <b>khung prompt</b> dùng chung, và <b>prompt riêng cho từng bước</b> của quy trình.",
        "Ba câu hỏi để kiểm tra mọi kết quả AI trước khi dùng."
      ], "AI không được khẳng định người dùng cần gì khi chưa có dữ liệu, không chọn giải pháp cuối, không bịa số liệu thị trường. Persona do AI sinh ra chỉ dùng để nháp câu hỏi.",
      "Ở mỗi bước, chia việc thành ba nhóm trước khi gõ prompt: giao AI, làm cùng AI, tự làm.", "Bộ công cụ AI của dự án cần có"),
      slide("prompt", "7.2", "Master Context và khung prompt", "Master Context", [
        "<b>Master Context</b> là bộ nhớ của dự án, dán vào mọi prompt. Mỗi lần kể ngữ cảnh khác nhau thì kết quả lệch nhau; Master Context giải quyết việc đó. Mục 6 và 7 thay đổi nhiều nhất, cập nhật sau mỗi bước."
      ], "none", {
        layout: "content-only",
        code: `# MASTER CONTEXT — [Tên dự án]  v0.1
1. Sản phẩm: một câu; loại sản phẩm; platform; giai đoạn
2. Business: mô hình kiếm tiền; goal 6–12 tháng; chỉ số
3. Người dùng (ICP): nhóm chính, nhóm phụ; vấn đề chính (giả thuyết)
4. Thị trường và đối thủ đã biết; USP dự kiến
5. Ràng buộc: kỹ thuật, thời gian, pháp lý, brand
6. Quyết định đã chốt (ngày + quyết định + lý do)
7. Chưa biết / giả thuyết chưa kiểm chứng
8. Quy ước với AI: ngôn ngữ; không bịa dữ liệu người dùng;
   không tự thêm feature; không tự chọn style`
      }),
      slide("prompt", "7.2", "Master Context và khung prompt", "Khung prompt", [
        "Một khung dùng cho cả sáu bước. Đổi phần <b>Nhiệm vụ</b> theo bước, giữ nguyên phần còn lại."
      ], "none", {
        layout: "content-only",
        code: `[Vai trò]    Bạn là …
[Ngữ cảnh]   Master Context + tài liệu của bước này
[Nhiệm vụ]   Đánh số từng việc; tách "liệt kê / báo cáo" khỏi "sửa / tạo"
[Định dạng]  Bảng / bullet; tiếng Việt
[Ràng buộc]  Không bịa; gắn nhãn [dữ kiện] / [suy luận] / [đề xuất];
             trích nguồn hoặc câu gốc; không tự thêm feature, style, token`
      }),
      slide("theory", "7.3", "Prompt theo bước", "Prompt theo bước", [], "none", {
        layout: "content-only",
        table: {
          head: ["Bước", "Giao AI hoặc làm cùng AI", "Bạn tự làm"],
          rows: [
            ["<b>1 · Brief</b>", "Phân tích 4 cột, 7 thành phần; gợi ý nhu cầu thật (giả thuyết); câu hỏi cho từng người", "Chọn nhu cầu thật để theo; đi hỏi người thật"],
            ["<b>2 · Nghiên cứu thị trường</b>", "Tag transcript phỏng vấn; tổng hợp đối thủ theo 5 nhóm có nguồn", "Phỏng vấn; chốt Market Gap Matrix"],
            ["<b>3 · Khách hàng và khác biệt</b>", "Gom card thành cụm, đếm số người; nháp Problem Statement và HMW", "Chọn ICP, giá, USP"],
            ["<b>4 · Mô tả sản phẩm</b>", "Tìm trường hợp thiếu trong flow; nháp user story từ feature", "Chốt MVP / Phase 2 / Not now"],
            ["<b>5 · Thiết kế</b>", "Figma Agent: xây foundation, audit; Figma Make: sinh màn và trạng thái còn thiếu", "Design Direction; duyệt từng thay đổi"],
            ["<b>6 · Present</b>", "Nháp dàn ý 5 phút từ Master Context", "Trình bày, nhận feedback, quyết định sửa gì"]
          ]
        },
        note: "Cột phải là chỗ AI không được thay bạn. Cột giữa luôn theo quy tắc: báo cáo trước, sửa sau."
      }),
      slide("prompt", "7.3", "Prompt theo bước", "Bước 1 · Brief", [], "none", {
        layout: "content-only",
        code: `[Vai trò]   Bạn là UX strategist.
[Ngữ cảnh]  (dán Master Context) + (dán Client Brief nguyên văn)
[Nhiệm vụ]  1. Phân tích 4 cột Đã có / Còn thiếu / Chưa rõ / Rủi ro
            2. Điền 7 thành phần; ô không có căn cứ ghi "giả thuyết"
            3. Mỗi yêu cầu → hỏi "để làm gì?" ba lần → nhu cầu thật (giả thuyết)
            4. Mỗi mục thiếu → 1 câu hỏi cụ thể + hỏi ai
[Ràng buộc] Không bịa số liệu; mỗi rủi ro phải trích câu trong brief;
            đánh dấu chỗ nào là suy luận của bạn`,
        note: "Kết quả là bản nháp để bạn đi hỏi, không phải bảng phân tích cuối. Người thật trả lời khác AI đoán là chuyện thường."
      }),
      slide("prompt", "7.3", "Prompt theo bước", "Bước 2 · Nghiên cứu thị trường", [], "none", {
        layout: "content-only",
        code: `Tag transcript:
"Đây là transcript phỏng vấn #3. Với mỗi đoạn có ý nghĩa, tạo một dòng:
 [trích dẫn nguyên văn] | [chủ đề] | [hành vi / động cơ / khó khăn / bối cảnh].
 Không diễn giải, không rút kết luận. Không gộp hai câu nói thành một."

Tổng hợp đối thủ:
"Với đối thủ X, tổng hợp theo 5 nhóm: Business, Pricing, Sản phẩm, Trải nghiệm
 (đi qua flow đặt lịch: số bước, chỗ phải quyết định), Cơ hội.
 Mỗi câu gắn nhãn [dữ kiện – nguồn, ngày] hoặc [suy luận] hoặc [đề xuất].
 Không viết câu nào về điểm mạnh / yếu mà không có nguồn."`,
        note: "Hai quy tắc cứng: AI viết 'người dùng cảm thấy…' thì yêu cầu trích câu gốc; không dùng AI tạo người dùng giả hay bịa kết quả phỏng vấn."
      }),
      slide("prompt", "7.3", "Prompt theo bước", "Bước 3 và 4 · Khách hàng, Mô tả sản phẩm", [], "none", {
        layout: "content-only",
        code: `Gom card (bước 3):
"Đây là 60 card (mỗi card: [trích dẫn] | [mã người] | [nhóm]).
 1. Gom thành cụm theo chủ đề. Tên cụm là một câu đầy đủ.
 2. Mỗi cụm: đếm số NGƯỜI khác nhau. Cụm 1 người → ghi 'observation'.
 3. Từ cụm nhiều người nhất, nháp 2 Problem Statement theo mẫu
    [nhóm] cần [nhu cầu] vì [insight], nhưng [khoảng cách], dẫn đến [hậu quả]."

Tìm trường hợp thiếu (bước 4):
"Đây là user flow 'Đặt lịch' (dán từng bước).
 1. Với mỗi bước, liệt kê mọi lý do khiến bước đó thất bại hoặc rẽ nhánh.
 2. Đánh dấu trường hợp nào flow hiện tại CHƯA xử lý.
 3. Đóng vai lễ tân 5 năm kinh nghiệm: tình huống nào ngoài đời hay xảy ra mà flow bỏ qua?
 Không đề xuất giải pháp, chỉ liệt kê."`,
        note: "Kết quả AI phải được bạn lọc: giữ trường hợp có thật theo quy tắc nghiệp vụ (biết từ khi hỏi vận hành), bỏ trường hợp AI tưởng tượng."
      }),
      slide("prompt", "7.4", "Figma Agent và Figma Make", "Figma Agent", [
        "Agent làm rất nhanh. Nếu bạn chưa quyết, nó quyết thay bạn: đưa bảng token, không đưa cảm hứng. Luôn yêu cầu <b>báo cáo trước, sửa sau</b>."
      ], "none", {
        layout: "content-only",
        code: `Xây foundation:
"Dựa trên Design Direction (dán) và bảng token (dán), tạo:
 1. Collection 'Primitive' đúng tên và giá trị trong bảng.
 2. Collection 'Semantic' trỏ về primitive; 2 mode Light / Dark.
 3. Text style theo thang đã cho. Không tạo token nào ngoài bảng. Báo lại danh sách đã tạo."

Audit:
"Quét page 'Components'. Báo cáo 5 mục: (1) màu / spacing gõ thô thay vì variable;
 (2) style trùng giá trị khác tên; (3) component thiếu auto layout hoặc cố định kích thước;
 (4) variant thiếu state; (5) cặp chữ – nền dưới 4.5:1.
 Chỉ báo cáo, chưa sửa. Tôi duyệt rồi yêu cầu sửa từng mục."`
      }),
      slide("prompt", "7.4", "Figma Agent và Figma Make", "Figma Make", [
        "Ba pha: <b>Make</b> sinh prototype chạy được từ Master Prompt → <b>Design</b> copy các trạng thái quan trọng sang Figma Design (bản copy là snapshot, không giữ tương tác) → <b>Systemize</b> để Agent đổi tên layer, áp auto layout và token. Bỏ pha 3 thì bạn có một demo, không có sản phẩm bảo trì được.",
        "Master Prompt 8 phần, nội dung thật từ Product Spec: product direction, người dùng và quy tắc nghiệp vụ, feature scope (chỉ MVP), sitemap và user flow, nội dung thật, visual direction, trạng thái từng màn, điều không được làm."
      ], "none", {
        layout: "content-only",
        code: `Ví dụ phần 7 · trạng thái từng màn:
"Màn Đặt lịch có 5 trạng thái:
 (a) Loading: skeleton dải ngày + 3 hàng khung giờ;
 (b) Default: dải ngày theo tuần, khung giờ theo bác sĩ; ô trống trắng, ô đang chọn màu chủ,
     ô đã đặt xám, ô không mở nét đứt;
 (c) Hết chỗ: ô vừa chạm đã có người → chuyển xám, toast 'Khung giờ vừa có người đặt';
 (d) Mất mạng: banner + 'Thử lại', giữ lựa chọn;
 (e) Thanh tóm tắt dính đáy: giờ đã chọn, tổng; nút 'Xác nhận' disabled khi chưa chọn ô."`
      }),
      slide("theory", "7.5", "Kiểm tra kết quả AI", "Kiểm tra kết quả AI", [
        "Ba câu hỏi cho mọi kết quả AI. Câu này đến từ dữ liệu nào? Trích được không?",
        "Nếu bỏ câu này, quyết định của tôi có đổi không? Nếu không, nó là trang trí.",
        "<b>AI có đang chọn thay tôi không? Nếu có, tôi đã quyết chưa?</b>"
      ], "none", { layout: "content-only", footer: "Huyen Vu" })
    ]
  }
];

// Section dividers: a title-only slide opens every numbered sub-section that has two or more slides,
// so moving into "1.6 · Nguyên tắc UX" does not drop straight into its first content slide.
const divider = (session, slide) => ({
  kind: "divider",
  section: slide.section,
  sectionTitle: slide.sectionTitle,
  eyebrow: `Phần ${session.number} · Mục ${slide.section}`,
  title: slide.sectionTitle,
  points: [],
  visual: "none",
  layout: "content-only",
  divider: true
});
for (const session of sessions) {
  if (session.noDividers) continue;
  const counts = {};
  for (const slide of session.slides) if (slide.section?.includes(".")) counts[slide.section] = (counts[slide.section] ?? 0) + 1;
  const slides = [];
  let last = "";
  for (const slide of session.slides) {
    if (slide.section?.includes(".") && slide.section !== last && counts[slide.section] >= 2) slides.push(divider(session, slide));
    last = slide.section ?? "";
    slides.push(slide);
  }
  session.slides = slides;
}
