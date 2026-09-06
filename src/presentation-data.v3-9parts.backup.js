export const course = {
  title: "Thiết kế UI/UX với Figma & AI",
  subtitle: "Lộ trình 9 phần cho developer: nhìn lại nền tảng, rồi đi đủ chuỗi Brief → Research → Problem → Flow → Design System → Prototype trên chính sản phẩm của bạn.",
  totalModules: 9,
  sessionDurationMinutes: 90,
  rhythmMinutes: {
    theory: 20,
    demo: 20,
    workshop: 35,
    critique: 15
  },
  tutor: {
    name: "Huyen Vu",
    role: "Software Engineer"
  },
  project: {
    name: "ACE Court Booking",
    figmaUrl: "https://www.figma.com/design/7gz2qnpMVbKCLZEPZZZy42/ACE-Design?node-id=10-2"
  }
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
  "figma-canvas": "canvas",
  "figma-logo": "poster",
  "figma-workspace": "canvas",
  "fidelity-lab": "comparison",
  "goal-grid": "center",
  "girl-avatar": "artifact",
  image: "image",
  "module-map": "center",
  "mood-wall": "wide",
  none: "content-only",
  "practice-system": "center",
  "problem-flow": "wide",
  "process-rail": "rail",
  "product-journey": "cover",
  "risk-map": "artifact",
  "session-timeline": "artifact",
  "three-phases": "wide",
  "tool-dock": "center",
  "two-columns": "comparison",
  "user-flow": "wide",
  "ux-map": "wide",
  hero: "poster",
  layers: "canvas",
  prototype: "rail",
  style: "poster",
  typography: "poster"
};

const slide = (kind, title, eyebrow, points, visual = "none", extras = {}) => ({
  kind,
  title,
  eyebrow,
  points,
  visual,
  layout: extras.layout ?? layoutByVisual[visual] ?? "split",
  ...extras
});

// Ảnh chụp màn hình ACE
const ace = (file, alt) => ({ visual: "image", layout: "image", image: `assets/ace/${file}`, imageAlt: alt });

// Slide "Soi thành phẩm": áp khái niệm vừa học lên file Figma học viên đang có
const soi = (title, points, note) => slide("audit", title, "Soi thành phẩm của bạn", points, "none", { layout: "content-only", note });

const outputs = (title, points) => slide("checklist", title, "Tick khi hoàn thành", points, "none", { layout: "content-only" });

const quiz = (points) => slide("quiz", "Tự kiểm tra", "Trả lời trước khi sang phần sau", points, "none", { layout: "content-only" });

export const sessions = [
  {
    number: 1,
    title: "Nhìn lại và định hướng",
    focus: "Ôn nhanh nền tảng đã học, định vị thành phẩm đang có trên chuỗi quy trình, và hiểu vì sao ý tưởng thiết kế đến từ quy trình chứ không từ cảm hứng.",
    demo: makeDemo(
      "Mở file Figma ACE, đi một lượt flow đặt sân, chấm theo checklist 12 khái niệm UI/UX; sau đó lập bảng artifact đã có / còn thiếu của ACE.",
      "Bảng 'đã có / còn thiếu' cho dự án của từng học viên và Master Context v0.1 đầu tiên.",
      "Mở file của bạn. Màn hình nào bạn tự tin nhất? Vì sao? Màn hình nào bạn không biết nên làm gì tiếp?"
    ),
    slides: [
      slide("cover", "Thiết kế UI/UX với Figma & AI", "Phần 1 · Nhìn lại và định hướng", [], "product-journey", {
        footer: "Huyen Vu "
      }),
      slide("theory", "Bạn đang ở đâu", "Sau 4 phần đã học", [
        "Đã học: UI/UX thiết yếu, design process, Figma cơ bản.",
        "Đã có: một file Figma với các màn hình chính.",
        "Đang gặp: <b>mất hướng, chưa có ý tưởng thiết kế</b> tiếp theo.",
        "Lý do thường gặp: vẽ màn hình trước khi có brief, research và flow.",
        "Ý tưởng không đến từ cảm hứng. Ý tưởng đến từ quy trình."
      ], "risk-map"),
      slide("theory", "Ôn nhanh: 12 khái niệm UI/UX", "Checklist dùng lại cho mọi màn hình", [], "none", {
        layout: "content-only",
        table: {
          head: ["Khái niệm", "Câu hỏi kiểm tra", "Trên ACE"],
          rows: [
            ["Signifier", "Nhìn là biết chỗ nào bấm được?", "Ô lime = đang chọn, ô xám = đã đặt"],
            ["Visual hierarchy", "Đọc thứ nhất, thứ hai, thứ ba là gì?", "Tiêu đề → ô tìm kiếm → thẻ bộ môn"],
            ["Grid & spacing", "Có bám lưới 4pt và cột không?", "Thẻ kết quả thẳng hàng mọi dòng"],
            ["White space", "Khoảng trống có nhóm nội dung không?", "Mỗi thẻ thanh toán là một quyết định"],
            ["Typography", "Mỗi cỡ chữ có một vai trò không?", "Giá to đậm, đơn vị nhỏ"],
            ["Color", "Mỗi màu trả lời được 'vì sao ở đây'?", "Lime chỉ dùng cho hành động chính"],
            ["States", "Button, input, ô giờ có đủ trạng thái?", "Free / Selected / Taken / Closed"],
            ["Motion & feedback", "Hành động xong có xác nhận không?", "Chọn ô → thanh tổng tiền cập nhật"],
            ["Overlay", "Chữ trên ảnh còn đọc được không?", "Gradient tối dưới tên bộ môn"],
            ["Style name", "Gọi tên được phong cách để đi tìm tham khảo?", "Minimal, một màu nhấn acid"]
          ]
        }
      }),
      slide("theory", "Chuỗi quy trình xuyên suốt", "Đầu ra bước này là đầu vào bước sau", [
        "Brief → Research → Problem → Opportunity → Feature → UX Architecture → Design System → Prototype.",
        "Bỏ một bước sẽ hụt nguyên liệu cho bước kế tiếp.",
        "Thành phẩm của bạn đang đứng ở bước cuối mà thiếu các bước đầu. Đó là lý do mất hướng.",
        "Khóa này đi lại từng bước, áp lên chính file bạn đã có."
      ], "design-loop"),
      slide("theory", "Lộ trình 9 phần", "Bám theo 8 buổi của sổ tay", [], "none", {
        layout: "content-only",
        table: {
          head: ["Phần", "Chủ đề", "Trọng tâm"],
          rows: [
            ["1", "Nhìn lại và định hướng", "Ôn nền tảng, định vị thành phẩm, Master Context"],
            ["2", "Quy trình UI/UX với AI", "Phân tích Brief, hiểu khách hàng, AI Workflow Map"],
            ["3", "User Research & Interview", "Objective, research question, hypothesis, phỏng vấn"],
            ["4", "Market & Competitive Research", "Đối thủ, UX pattern, Opportunity Gap, tìm tham khảo"],
            ["5", "UX Architecture", "Role, Use Case, Task Flow, User Flow, Sitemap"],
            ["6", "Research → Feature Strategy", "Insight, Problem, HMW, Feature Inventory, MVP, Screen Inventory"],
            ["7", "Design System với Figma Agent", "Design Direction, Token, Component, audit"],
            ["8", "Figma Make × Figma Agent", "Master Prompt, prototype, systemize"],
            ["9", "Đa nền tảng & quản lý file", "Platform, layout, cấu trúc file, handoff, luyện tập"]
          ]
        }
      }),
      slide("theory", "AI đứng ở đâu trong quy trình", "AI mở rộng và thu gọn, bạn quyết định", [], "none", {
        layout: "content-only",
        columns: [
          { title: "Giao AI", items: ["Input rõ, output kiểm tra nhanh.", "Tóm tắt transcript, đổi tên layer, liệt kê đối thủ."] },
          { title: "Làm cùng AI", items: ["Cần phán đoán, AI mở góc nhìn.", "Phân tích brief, draft user flow, tìm missing case."] },
          { title: "Tự làm", items: ["Gắn trách nhiệm hoặc cần tiếp xúc thực tế.", "Phỏng vấn người thật, chọn MVP, ký handoff."] }
        ],
        note: "AI giỏi mở rộng (sinh nhiều lựa chọn) và thu gọn (tóm tắt, phân loại). AI kém ở quyết định, vì quyết định cần bối cảnh thật mà AI không có."
      }),
      slide("example", "Dự án mẫu: ACE Court Booking", "ACE đi trước một bước, bạn làm y hệt trên file của bạn", [
        "ACE — đặt sân pickleball, cầu lông, tennis theo giờ tại TP.HCM.",
        "Đã có trong Figma: web app cho người chơi, bản mobile, admin dashboard.",
        "Giống bạn: có màn hình đẹp, nhưng chưa có brief, research, flow, token.",
        "Mỗi phần, ACE được bổ sung một artifact. Bạn bổ sung artifact đó cho dự án mình."
      ], "image", { ...ace("home.png", "Trang chủ ACE"), note: "Research và flow của ACE nằm trong FigJam <b>ACE — Research & Flows</b>; wireframe, design system và prototype nằm trong file design <b>ACE Design</b> (page 00 Start here có link và hướng dẫn)." }),
      slide("theory", "Một buổi diễn ra thế nào", "90 phút", [
        "20 phút — khái niệm và framework cốt lõi.",
        "20 phút — demo trực tiếp bằng AI, Figma Agent hoặc Figma Make trên ACE.",
        "35 phút — workshop trên dự án của bạn.",
        "15 phút — critique: sửa cách tư duy, cải thiện prompt."
      ], "session-timeline"),
      slide("prompt", "Master Context", "Bộ nhớ của dự án, dán vào mọi prompt", [
        "Mục 6 và 7 thay đổi nhiều nhất và quan trọng nhất. Cập nhật sau mỗi buổi."
      ], "none", {
        layout: "content-only",
        code: `# MASTER CONTEXT — [Tên dự án của bạn]  v0.1
1. Sản phẩm: mô tả một câu, loại sản phẩm, platform dự kiến, giai đoạn
2. Business: business model, business goal 6–12 tháng, chỉ số thành công
3. Người dùng: nhóm chính, nhóm phụ, vấn đề chính (giả thuyết)
4. Thị trường & đối thủ đã biết
5. Ràng buộc: kỹ thuật, ngân sách/thời gian, pháp lý, brand
6. Quyết định đã chốt (ngày + quyết định + lý do)
7. Điều CHƯA biết / giả thuyết chưa kiểm chứng
8. Quy ước với AI: ngôn ngữ, format, điều AI không được làm
   (bịa dữ liệu người dùng, tự thêm feature, tự chọn style)`
      }),
      soi("Định vị thành phẩm của bạn", [
        "Liệt kê mọi màn hình đã vẽ. Mỗi màn: nó phục vụ nhiệm vụ gì của ai?",
        "Lập bảng artifact: Brief · Research · Problem · Flow · Sitemap · Token · Component · Prototype. Đánh dấu đã có / còn thiếu.",
        "Chấm 3 màn hình theo checklist 12 khái niệm. Ghi điểm yếu lặp lại.",
        "Viết Master Context v0.1. Mục 7 (chưa biết) càng dài càng tốt."
      ], "Kết quả thường thấy: cột 'còn thiếu' gần như đầy. Đó không phải thất bại, đó là bản đồ cho 8 phần tiếp theo."),
      outputs("Đầu ra trước Phần 2", [
        "Bảng artifact đã có / còn thiếu của dự án.",
        "Checklist 12 khái niệm chấm cho 3 màn hình.",
        "Master Context v0.1."
      ])
    ]
  },
  {
    number: 2,
    title: "Quy trình UI/UX với AI",
    focus: "Hiểu quy trình làm sản phẩm có AI hỗ trợ, phân tích đúng yêu cầu khách hàng và xác định hướng giải pháp trước khi vẽ tiếp.",
    demo: makeDemo(
      "Dán Client Brief của ACE vào AI theo khung 4 cột, gạch bỏ suy diễn không căn cứ, viết Product Direction Brief cho ACE.",
      "Product Direction Brief và danh sách rủi ro / thông tin thiếu cho dự án của từng học viên.",
      "Viết lại sản phẩm bạn đã vẽ dưới dạng một client brief 5 dòng. Rồi hỏi AI: brief này thiếu gì?"
    ),
    slides: [
      slide("cover", "Quy trình UI/UX với AI", "Phần 2 · Sổ tay buổi 1", [
        "Khách hàng nói theo giải pháp. Người dùng kể theo câu chuyện.",
        "Việc của bạn: tìm nhu cầu thật trước khi vẽ."
      ], "problem-flow", { goal: "Hiểu quy trình có AI, phân tích Brief theo 4 cột, viết Product Direction Brief và chọn 2–3 hướng giải pháp để đưa vào research." }),
      slide("theory", "Khái niệm cần nắm", "Bốn từ của phần này", [
        "<b>Client Brief</b> — yêu cầu ban đầu của khách; thường nói về giải pháp họ muốn hơn là vấn đề họ có.",
        "<b>Master Context</b> — một tài liệu ngữ cảnh duy nhất, dán vào mọi prompt để AI nhất quán.",
        "<b>Product Direction Brief</b> — bản định hướng bạn viết sau khi phân tích brief: mục tiêu, người dùng, phạm vi, constraint, rủi ro, kế hoạch research.",
        "<b>AI Workflow Map</b> — việc nào giao AI, việc nào làm cùng AI, việc nào tự làm."
      ]),
      slide("theory", "Quy trình có AI không bỏ bước nào", "Chèn AI vào đúng chỗ AI mạnh", [], "none", {
        layout: "content-only",
        columns: [
          { title: "AI tăng tốc", items: ["Liệt kê thông tin thiếu, câu hỏi cần hỏi.", "Draft script, tag transcript, gom affinity.", "Sinh nhiều phương án, tìm missing case.", "Xây foundation, audit file Figma.", "Sinh prototype từ prompt."] },
          { title: "Bạn chịu trách nhiệm", items: ["Câu hỏi nào đáng hỏi, rủi ro nào thật.", "Ai là người dùng thật; không bịa dữ liệu.", "Vấn đề nào đáng giải, feature nào vào MVP.", "Design direction, guideline cho Agent.", "Đánh giá UX của thứ AI tạo ra."] }
        ],
        note: "Điểm nghẽn quen thuộc của quy trình truyền thống: research tốn thời gian nên bị cắt; tổng hợp thủ công mất nhiều ngày; UI lặp pattern; Design System xây tay dễ lệch. AI giải quyết đúng các chỗ này."
      }),
      slide("example", "Client Brief của ACE", "Khách hàng đã nói gì", [
        "Nhóm chủ sân ở TP.HCM (5 cụm sân, 3 bộ môn) muốn làm web app.",
        "Người chơi tự tìm sân, đặt theo giờ, thanh toán online.",
        "Chủ sân muốn trang quản trị xem đơn đặt, doanh thu, quản lý sân.",
        "Lý do: 'khách vẫn đặt qua Zalo và gọi điện, lễ tân ghi tay, hay trùng giờ'.",
        "Deadline 3 tháng. Muốn 'hiện đại như Airbnb'."
      ], "image", ace("explore.png", "Màn Khám phá của ACE")),
      slide("theory", "Bốn cột phân tích Brief", "Xếp từng câu vào một cột", [], "none", {
        layout: "content-only",
        table: {
          head: ["Đã có", "Còn thiếu", "Chưa rõ", "Rủi ro"],
          rows: [[
            "5 cụm sân, 3 bộ môn; đặt theo giờ; thanh toán online; admin; 3 tháng; tham chiếu Airbnb.",
            "Người chơi là ai, chơi nhóm hay lẻ? Số sân mỗi cụm? Hệ thống lịch hiện tại? Cổng thanh toán?",
            "'Thanh toán online' là cọc hay trả đủ? 'Trùng giờ' xảy ra ở đâu? 'Như Airbnb' là visual hay trải nghiệm?",
            "Làm vì Zalo lộn xộn, chưa có mục tiêu đo được; trùng giờ cao điểm; chưa có quy tắc hủy/hoàn; 3 tháng là chặt."
          ]]
        },
        note: "Mỗi rủi ro phải trích được câu nào trong brief dẫn đến nó. 'Cạnh tranh cao' là rủi ro chung cho mọi sản phẩm, không đưa vào."
      }),
      slide("theory", "Hỏi 'để làm gì?' ba lần", "Yêu cầu khách khác nhu cầu thật", [
        "Khách: 'Muốn thanh toán online.' — để làm gì?",
        "'Để khách không hủy phút chót.' — để làm gì?",
        "'Để sân không trống lúc 19h trong khi người khác chờ.' — để làm gì?",
        "<b>Nhu cầu thật: giảm no-show và giảm giờ trống ở khung cao điểm.</b>",
        "Thanh toán online là một cách. Đặt cọc, danh sách chờ, nhắc lịch cũng là cách. Mở rộng phương án ở Phần 6."
      ], "problem-flow"),
      slide("theory", "Bảy thành phần của bài toán sản phẩm", "Ô nào trống hoặc là giả thuyết thì đưa vào Master Context mục 7", [
        "1. <b>Business Model</b> — kiếm tiền bằng gì. ACE: hoa hồng theo đơn (giả thuyết).",
        "2. <b>Business Goal</b> — app phải thay đổi con số nào. ACE: no-show, tỉ lệ lấp đầy.",
        "3. <b>Target Audience</b> — ai dùng chính, ai dùng phụ, ai trả tiền, ai quyết định.",
        "4. <b>User Problem</b> — người dùng đang khó gì hôm nay, khi chưa có app.",
        "5. <b>Thị trường</b> — quy mô, đối thủ, chuẩn trải nghiệm đã quen.",
        "6. <b>Platform</b> — mobile, web, hay cả hai; có phần cho staff không.",
        "7. <b>Constraint</b> — thời gian, ngân sách, kỹ thuật, pháp lý, brand."
      ], "none", {
        layout: "content-only",
        note: "Business Goal và User Problem là hai ô hay bỏ trống nhất và quyết định cả khóa: không có Business Goal thì Phần 6 không ưu tiên được feature; không có User Problem thì Phần 3 không biết hỏi gì."
      }),
      slide("theory", "Stakeholder cần phỏng vấn", "Research về business, làm ngay tuần này", [], "none", {
        layout: "content-only",
        table: {
          head: ["Stakeholder", "Họ biết điều brief không nói", "Câu hỏi ví dụ (ACE)"],
          rows: [
            ["Founder / chủ sân", "Mục tiêu thật, ngân sách, điều họ sợ", "'Nếu app thành công, 6 tháng sau con số nào thay đổi?'"],
            ["Vận hành / lễ tân", "Quy trình hiện tại, chỗ đang tắc", "'Khách đặt sân bằng cách nào? Chỗ nào phải xử lý tay?'"],
            ["Marketing", "Khách đến từ đâu, kỳ vọng gì", "'Người chơi mới biết đến sân qua kênh nào?'"],
            ["Kỹ thuật", "Hệ thống, dữ liệu, giới hạn", "'Lịch sân, đơn đặt đang lưu ở đâu? Có API không?'"]
          ]
        },
        note: "Phỏng vấn stakeholder là research về business. Phỏng vấn người dùng (Phần 3) là research về hành vi."
      }),
      slide("theory", "Đánh giá một hướng giải pháp", "Chấm sơ bộ 1–5, chọn 2–3 hướng đưa vào research", [
        "<b>User Value</b> — giải quyết vấn đề thật, người dùng chịu đổi hành vi không.",
        "<b>Business Value</b> — tác động trực tiếp đến Business Goal.",
        "<b>Feasibility</b> — làm được trong constraint.",
        "<b>Market Context</b> — tạo khác biệt hay chỉ bắt kịp chuẩn tối thiểu.",
        "Trend hay nhu cầu lâu dài? Bỏ tính năng này, người dùng có mất một việc họ vẫn phải làm không?"
      ], "goal-grid"),
      slide("prompt", "Prompt: phân tích Brief với AI", "Khung prompt dùng cho cả khóa", [], "none", {
        layout: "content-only",
        code: `[Vai trò]   Bạn là UX Strategist…
[Ngữ cảnh]  (dán Master Context) + (dán Client Brief nguyên văn)
[Nhiệm vụ]  1. Phân tích 4 cột Đã có / Còn thiếu / Chưa rõ / Rủi ro
            2. Mỗi mục thiếu → 1 câu hỏi cụ thể + hỏi stakeholder nào
            3. Mỗi yêu cầu → nhu cầu thật có thể có (ghi rõ là giả thuyết)
            4. 3 Research Direction + 3–5 Solution Direction khác nhau
[Định dạng] Bảng cho 1–2, bullet cho 3–4, tiếng Việt
[Ràng buộc] Không bịa số liệu; mỗi rủi ro phải trích câu trong brief;
            đánh dấu chỗ nào là suy luận của bạn`,
        note: "AI không được khẳng định người dùng cần gì khi chưa có dữ liệu, không chọn giải pháp cuối, không bịa số liệu thị trường."
      }),
      soi("Viết lại brief cho sản phẩm bạn đã vẽ", [
        "Viết Client Brief 5 dòng cho chính sản phẩm của bạn, như thể khách hàng đưa cho bạn.",
        "Chạy prompt 4 cột. Gạch bỏ chỗ AI suy diễn không căn cứ, gắn nhãn 'giả thuyết' cho phần còn lại.",
        "Với mỗi màn hình đã vẽ: nó phục vụ yêu cầu nào trong brief? Màn nào không trả lời được → ghi vào 'chưa rõ vì sao có'.",
        "Viết Product Direction Brief: tóm tắt; business goal đo được; người dùng; bảng yêu cầu ↔ nhu cầu thật; platform; phạm vi sơ bộ; constraint; rủi ro; điều chưa biết; 2–3 hướng giải pháp chưa chốt."
      ], "Lỗi hay gặp: Business Goal kiểu 'tăng trải nghiệm' (không đo được); cột nhu cầu thật chép lại yêu cầu bằng từ khác; chỉ có một hướng giải pháp và trùng với thứ bạn đã vẽ."),
      outputs("Đầu ra trước Phần 3", [
        "Product Direction Brief.",
        "Project Risk & Missing Information List.",
        "UX Research Plan sơ bộ.",
        "AI Workflow Map và Master Context v0.1 đã cập nhật."
      ]),
      quiz([
        "Vì sao Master Context quan trọng hơn bất kỳ prompt đơn lẻ nào? <b>Vì mọi prompt dựa vào cùng một ngữ cảnh; ngữ cảnh lệch thì kết quả lệch giữa các lần.</b>",
        "AI liệt kê rủi ro 'cạnh tranh cao'. Đưa vào brief không? <b>Chưa. Rủi ro phải trích được câu trong brief.</b>",
        "Điền đủ 7 thành phần ngay sau buổi đầu là tốt hay xấu? <b>Đáng ngờ. Thường là bạn tự lấp bằng giả định.</b>"
      ])
    ]
  },
  {
    number: 3,
    title: "User Research & Interview",
    focus: "Xác định đúng điều cần nghiên cứu, xây câu hỏi phỏng vấn và chuyển dữ liệu thu được thành findings và insights có giá trị.",
    demo: makeDemo(
      "Từ Product Direction Brief của ACE, viết Research Objective, 4 Research Questions, 2 Hypothesis, tiêu chí chọn người và script 10 câu; phỏng vấn thử một học viên 10 phút.",
      "Research Plan, Research Questions, Hypothesis, Participant Criteria và Interview Script cho dự án của từng học viên.",
      "Feature nào trong file Figma của bạn được vẽ vì bạn 'cho là người dùng cần'? Viết nó thành một hypothesis kiểm chứng được."
    ),
    slides: [
      slide("cover", "User Research & Interview", "Phần 3 · Sổ tay buổi 2", [
        "Không phỏng vấn 'người dùng nói chung'.",
        "Hỏi về lần gần nhất, không hỏi 'thường thì'."
      ], "hero", { goal: "Xác định đúng điều cần nghiên cứu, xây câu hỏi phỏng vấn trung lập và biết cách chuyển dữ liệu thành findings, insights." }),
      slide("theory", "Năm khái niệm cốt lõi", "Xếp thành chuỗi từ trước đến sau research", [
        "<b>Research Objective</b> — cần tìm hiểu điều gì, để phục vụ quyết định nào. ACE: hiểu vì sao người chơi hủy phút chót, để chọn cơ chế giữ chân.",
        "<b>Research Questions</b> — vấn đề cụ thể cần trả lời; không phải câu sẽ hỏi trực tiếp.",
        "<b>Hypothesis</b> — nhận định tin có thể đúng, viết dạng có thể bị bác bỏ.",
        "<b>Research Findings</b> — điều dữ liệu cho thấy, có số. '6/8 người đặt sân cho nhóm.'",
        "<b>User Insights</b> — vì sao. 'Đặt sân là quyết định của nhóm, nhưng mọi app đặt như một cá nhân.'"
      ], "data-ladder", { note: "Khóa học không tách riêng Assumption. Mọi điều bạn 'cho là đúng' đều phải viết thành hypothesis kiểm chứng được." }),
      slide("example", "Từ Objective đến Questions", "ACE", [
        "<b>Objective:</b> hiểu vì sao người chơi bỏ hoặc hủy lịch phút chót, để quyết định ACE giữ chân bằng cơ chế nào.",
        "<b>RQ1:</b> Người chơi quyết định đi hay không đi dựa vào yếu tố gì trong ngày?",
        "<b>RQ2:</b> Ai là người đặt sân trong nhóm và tiền được chia thế nào?",
        "<b>RQ3:</b> Điều gì làm họ tin sân đã 'chắc chắn' có?",
        "<b>H1:</b> Người chơi hủy vì bạn trong nhóm bận, không phải vì sân. Nếu đúng, đa số kể về việc 'thiếu người'.",
        "Kiểm tra: có câu trả lời cho mọi RQ thì quyết định có đưa ra được không? Nếu không, thiếu câu hỏi."
      ], "image", ace("my-bookings.png", "Màn Đặt chỗ của tôi")),
      slide("theory", "Segment và tiêu chí chọn người", "Chia theo hành vi, không theo nhân khẩu học", [
        "<b>Segment A</b> — chơi nhóm từ 4 người, 1+ lần/tuần (nhóm quyết định chính).",
        "<b>Segment B</b> — chơi lẻ hoặc đôi (để so sánh điều gì khác biệt).",
        "<b>Segment C</b> — người đã hủy đặt trong 1 tháng qua (khó tiếp cận nhất, giá trị nhất).",
        "<b>Tiêu chí loại:</b> nhân viên sân, người quen thân của team."
      ], "ux-map"),
      slide("theory", "Chọn phương pháp", "Giai đoạn này: User Interview", [], "none", {
        layout: "content-only",
        table: {
          head: ["Phương pháp", "Dùng khi", "Không dùng khi"],
          rows: [
            ["User Interview", "Cần hiểu vì sao, bối cảnh, động cơ; chưa có sản phẩm", "Cần con số đại diện cho số đông"],
            ["Survey", "Đã biết cần đo gì; kiểm tra tần suất trên nhiều người", "Chưa biết người dùng nghĩ gì (câu hỏi sẽ sai)"],
            ["Usability Test", "Đã có prototype hoặc sản phẩm đối thủ để quan sát", "Đang khám phá vấn đề"]
          ]
        }
      }),
      slide("theory", "Interview Script: mở, trung lập, không dẫn dắt", "10–15 câu, 30–45 phút", [
        "<b>Mở đầu (2 câu):</b> 'Bạn bắt đầu chơi ở đây từ khi nào, vì sao?'",
        "<b>Hành vi gần nhất (3–4 câu):</b> 'Kể cho tôi lần gần nhất bạn đặt sân, từ lúc rủ bạn đến lúc ra về.'",
        "<b>Khó khăn và cách xoay xở (3–4 câu):</b> 'Có lần nào định đi mà không đi? Chuyện gì xảy ra?'",
        "<b>Bối cảnh xung quanh (2 câu):</b> người khác, công cụ, thời gian.",
        "<b>Kết (1–2 câu):</b> 'Nếu được đổi một điều ở sân này, bạn đổi gì?'"
      ]),
      slide("theory", "Câu dẫn dắt và câu trung lập", "Học thuộc 5 câu follow-up", [], "none", {
        layout: "content-only",
        table: {
          head: ["Dẫn dắt (tránh)", "Trung lập (dùng)"],
          rows: [
            ["'Bạn có thấy thanh toán online sẽ hữu ích không?'", "'Lần gần nhất bạn đặt sân bằng cách nào? Có gì đáng nhớ?'"],
            ["'Đặt qua Zalo chắc phiền lắm nhỉ?'", "'Bạn nhắn cho ai, chờ bao lâu, rồi chuyện gì xảy ra?'"],
            ["'Bạn thích app kiểu Airbnb chứ?'", "'Bạn đang dùng app hay công cụ nào quanh việc chơi? Mở lúc nào?'"]
          ]
        },
        note: "Follow-up: 'Rồi sao nữa?' — 'Lúc đó bạn làm gì?' — 'Vì sao chọn cách đó?' — 'Cho ví dụ cụ thể?' — 'Lần đó khác gì lần khác?'. Khi người ta nói 'tôi thường…', kéo về 'lần gần nhất…'."
      }),
      slide("prompt", "AI trong research: hai quy tắc cứng", "Ghi chép, gỡ băng, tag, gom affinity", [
        "<b>Phân biệt dữ liệu người dùng cung cấp với kết luận AI suy diễn.</b> AI viết 'người dùng cảm thấy…' → yêu cầu trích câu gốc.",
        "<b>Không dùng AI tạo người dùng giả hay bịa kết quả phỏng vấn.</b> Persona AI sinh ra chỉ dùng để nháp câu hỏi."
      ], "none", {
        layout: "content-only",
        code: `Prompt tag transcript:
"Đây là transcript phỏng vấn #3 (Segment A). Với mỗi đoạn có ý nghĩa,
 tạo một dòng: [trích dẫn nguyên văn] | [chủ đề] | [hành vi / động cơ / khó khăn / bối cảnh].
 Không diễn giải, không rút kết luận. Không gộp hai câu nói thành một."`
      }),
      soi("Feature nào trong file của bạn là giả định?", [
        "Mở file Figma. Với mỗi feature đã vẽ, hỏi: tôi biết người dùng cần nó nhờ đâu?",
        "Feature không có nguồn → viết thành hypothesis: 'Chúng tôi tin [nhóm] cần [feature] vì [lý do]. Nếu đúng, phỏng vấn sẽ cho thấy [dấu hiệu].'",
        "Viết Research Objective, 3–6 Research Questions, Participant Criteria và script 10–15 câu.",
        "Phỏng vấn chéo với bạn cùng lớp 10 phút: nghe câu nào dẫn dắt, câu nào đóng."
      ], "Bài tập bắt buộc: thực hiện tối thiểu 2–3 cuộc phỏng vấn thật trước Phần 6. Không có dữ liệu này, Phần 6 không tổng hợp được."),
      outputs("Đầu ra", [
        "Research Plan.",
        "Research Questions và Hypothesis.",
        "Participant Criteria.",
        "User Interview Script.",
        "Interview Notes và Initial Insight Board (sau khi phỏng vấn)."
      ]),
      quiz([
        "Research Question có phải câu bạn sẽ hỏi người dùng không? <b>Không. RQ là điều cần biết; câu phỏng vấn là cách lấy dữ liệu để trả lời nó.</b>",
        "Finding và Insight khác nhau ở đâu? <b>Finding đếm được; Insight giải thích vì sao và phải bám vào finding.</b>",
        "Dùng AI tạo 5 persona rồi rút insight có được không? <b>Không. Persona AI không phải người dùng của bạn.</b>"
      ])
    ]
  },
  {
    number: 4,
    title: "Market & Competitive Research",
    focus: "Hiểu bối cảnh thị trường, nhận diện đối thủ phù hợp, tìm khoảng trống cơ hội, và biến việc nhìn đối thủ thành nguồn ý tưởng thiết kế có tên gọi.",
    demo: makeDemo(
      "Chọn 4 đối thủ của ACE theo 4 lớp, benchmark flow đặt sân trên từng đối thủ, viết 3 Opportunity Gap và một reference board có tên style.",
      "Competitive Research Matrix, UX Flow Benchmark và 3 Opportunity Gap cho dự án của từng học viên.",
      "Người dùng của bạn đang dùng gì để làm việc đó hôm nay, khi chưa có app của bạn? Đó là đối thủ thật."
    ),
    slides: [
      slide("cover", "Market & Competitive Research", "Phần 4 · Sổ tay buổi 3", [
        "Không sao chép feature hay UI.",
        "Tìm khoảng trống cơ hội, và tìm luôn ý tưởng thiết kế."
      ], "ux-map", { goal: "Nhận diện đúng đối thủ, benchmark một core flow, viết Opportunity Gap có căn cứ, và lập reference board để hết mất hướng về visual." }),
      slide("theory", "Bốn loại nghiên cứu hay bị gọi chung", "Trả lời bốn câu hỏi khác nhau", [], "none", {
        layout: "content-only",
        table: {
          head: ["Loại", "Trả lời câu hỏi", "Đầu ra"],
          rows: [
            ["Market Research", "Thị trường lớn bao nhiêu, đi đâu, ai mua, mua vì gì", "Market Map, phân khúc, xu hướng"],
            ["Competitor Research", "Đối thủ là ai, định vị gì, kiếm tiền cách nào", "Competitive Research Matrix"],
            ["Competitive UX Analysis", "Đối thủ giải Core Flow thế nào, người dùng vướng ở đâu", "UX Flow Benchmark"],
            ["Feature Comparison", "Ai có tính năng gì", "Bảng feature — nhưng số lượng không phải tiêu chí"]
          ]
        }
      }),
      slide("example", "Bốn lớp đối thủ của ACE", "Người dùng so bạn với mọi thứ họ đang dùng", [
        "<b>Direct</b> — app đặt sân địa phương khác.",
        "<b>Indirect</b> — Klook, Airbnb, app rạp phim: cùng việc 'chọn slot rồi trả tiền'.",
        "<b>Substitute</b> — nhóm Zalo, gọi điện, sổ giấy. Đây là thứ người chơi đang thực sự dùng.",
        "<b>Emerging</b> — app CLB có xếp nhóm, ranking.",
        "Chọn 3–5 để phân tích sâu: ít nhất 1 direct, 1 indirect được nhắc trong phỏng vấn, 1 substitute."
      ], "image", ace("search.png", "Màn Tra cứu kết quả của ACE")),
      slide("theory", "Nội dung phân tích cho mỗi đối thủ", "Ghi bằng chứng, không ghi cảm nhận", [
        "<b>Business:</b> Target Audience, Positioning, Value Proposition, Business Model, Pricing.",
        "<b>Tăng trưởng:</b> Acquisition (lấy người dùng từ đâu) và Retention (giữ họ bằng gì).",
        "<b>Sản phẩm:</b> Core Features, Supporting Features, điểm khác biệt.",
        "<b>Trải nghiệm:</b> các flow trọng tâm, điểm mạnh, UX Friction, Accessibility Issue.",
        "<b>Cơ hội:</b> khác biệt hóa ở đâu, nhu cầu nào chưa được đáp ứng.",
        "Ô 'điểm yếu' phải là điều quan sát được hoặc người dùng phàn nàn, không phải 'UI xấu'."
      ]),
      slide("theory", "UX Flow Benchmark", "Chọn một Core Flow, đi qua nó trên từng đối thủ", [
        "1. Số bước và số màn từ entry point đến thành công.",
        "2. Thông tin phải nhập, thông tin hệ thống tự điền.",
        "3. Chỗ người dùng phải quyết định (chọn giờ, chọn sân, xác nhận).",
        "4. Cách xử lý slot đầy, trùng giờ, hủy muộn (Alternative / Error Path).",
        "5. Feedback sau khi hoàn thành: xác nhận, nhắc, thêm vào lịch.",
        "6. Pattern được dùng: calendar, list, filter chip, bottom sheet, sticky summary…",
        "Đặt các flow cạnh nhau: thấy chuẩn tối thiểu (phải đạt) và chỗ ai cũng làm dở (cơ hội)."
      ], "user-flow"),
      slide("theory", "Opportunity Gap: ba phần", "Nhu cầu + bằng chứng đối thủ chưa giải + vì sao bạn làm được", [
        "<b>Nhu cầu:</b> 6/8 người chơi đặt cho nhóm và chia tiền (từ phỏng vấn).",
        "<b>Gap:</b> mọi đối thủ đặt như một cá nhân trả đủ tiền (từ benchmark).",
        "<b>Why us:</b> ACE đã có 'Sân nhóm' trên trang chủ; VietQR cho phép nhiều mã.",
        "Gap không nối được với dữ liệu phỏng vấn → đánh dấu 'cần kiểm chứng', không bỏ.",
        "Feature Comparison chỉ để trả lời: tính năng nào là chuẩn ngành bắt buộc, tính năng nào không ai làm dù người dùng cần."
      ], "problem-flow"),
      slide("theory", "Từ benchmark đến ý tưởng thiết kế", "Hết mất hướng: reference board có tên", [
        "Khi benchmark, chụp lại màn hình làm tốt và ghi <b>pattern</b> + <b>tên style</b> bên cạnh.",
        "Tên style là chìa khóa tìm kiếm: 'minimal booking calendar', 'sticky summary bar', 'bento dashboard'.",
        "Nguồn: Mobbin (app thật), Dribbble, Behance, Awwwards, Pinterest.",
        "Reference board = 5–8 màn, mỗi màn ghi rõ lấy gì (bố cục / màu / motion), không lấy gì.",
        "Ý tưởng thiết kế = remix có chủ đích: bố cục từ A, nhịp màu từ B, pattern slot từ C."
      ], "mood-wall"),
      slide("prompt", "Sử dụng AI có kiểm soát", "Ba việc bạn phải tự kiểm: thời điểm, nguồn, dữ kiện vs suy luận", [], "none", {
        layout: "content-only",
        code: `Prompt tổng hợp đối thủ:
"Với đối thủ X, tổng hợp theo 5 nhóm: Business, Tăng trưởng, Sản phẩm, Trải nghiệm, Cơ hội.
 Mỗi câu gắn nhãn [dữ kiện – nguồn, ngày] hoặc [suy luận] hoặc [đề xuất].
 Không được viết câu nào về điểm mạnh/yếu mà không có nguồn hoặc ghi rõ là suy luận."`,
        note: "Số liệu 3 năm trước có thể sai hoàn toàn. Link không mở được thì coi như không có. Review người dùng thật đứng trên bài blog tổng hợp."
      }),
      soi("Đặt file của bạn cạnh đối thủ", [
        "Chọn 3–5 đối thủ theo 4 lớp; substitute bắt buộc có.",
        "Benchmark core flow của bạn trên từng đối thủ và trên chính file Figma của bạn. Bạn thiếu bước nào so với chuẩn tối thiểu?",
        "Viết tối thiểu 3 Opportunity Gap theo ba phần.",
        "Lập reference board 5–8 màn có tên pattern và style. Đây là hướng visual cho các phần sau."
      ], "Nếu sau khi benchmark, file của bạn giống hệt một đối thủ, đó là tín hiệu bạn đã chép giải pháp thay vì giải vấn đề."),
      outputs("Đầu ra", [
        "Market Map.",
        "Competitive Research Matrix.",
        "Feature Comparison.",
        "UX Flow Benchmark.",
        "Opportunity Gap List.",
        "Reference board có tên style."
      ]),
      quiz([
        "Vì sao nhóm Zalo, sổ giấy đáng phân tích như một đối thủ? <b>Vì đó là thứ người dùng đang thực sự dùng, và nó thắng mọi app ở một điểm nào đó.</b>",
        "Opportunity Gap chỉ dựa trên 'đối thủ chưa có tính năng X' có đủ không? <b>Không. Cần cả nhu cầu có bằng chứng và điều kiện để bạn làm được.</b>"
      ])
    ]
  },
  {
    number: 5,
    title: "UX Architecture",
    focus: "Chuyển hiểu biết về người dùng thành cấu trúc sản phẩm, nhiệm vụ và luồng tương tác rõ ràng: Role, Use Case, Task Flow, User Flow, Sitemap.",
    demo: makeDemo(
      "Viết use case 'Đặt sân theo giờ' của ACE, mở rộng thành user flow có decision point, chạy prompt missing case và lọc case thật.",
      "Role Matrix, Use Case, Task Flow, User Flow V0 và Sitemap V0 cho dự án của từng học viên.",
      "Lấy màn hình bạn đã vẽ. Lần ngược: nó thuộc use case nào? Nếu không trả lời được, màn đó chưa nên tồn tại."
    ),
    slides: [
      slide("cover", "UX Architecture", "Phần 5 · Sổ tay buổi 4", [
        "Từ 'người dùng cần gì' đến 'có những màn nào'.",
        "Developer: đây là phần bạn sẽ thấy quen tay."
      ], "hero", { goal: "Xây User Role Matrix, Use Case đủ Happy / Alternative / Error, Task Flow, User Flow có Decision Point và Sitemap V0." }),
      slide("theory", "Sáu artifact, sáu câu hỏi", "Mỗi artifact trả lời một điều khác nhau", [], "none", {
        layout: "content-only",
        table: {
          head: ["Artifact", "Câu hỏi cần trả lời", "ACE"],
          rows: [
            ["User Story", "Người dùng muốn làm gì và vì sao?", "Là người chơi, tôi muốn thấy giờ trống tối nay để chơi sau giờ làm."],
            ["Use Case", "Người dùng và hệ thống tương tác thế nào?", "Đặt sân: chọn sân → chọn giờ → thanh toán → xác nhận."],
            ["Task Flow", "Một nhiệm vụ gồm những bước nào?", "Các bước tuyến tính để đặt 1 sân, không nhánh."],
            ["User Flow", "Có thể đi qua những nhánh và trạng thái nào?", "Slot vừa bị đặt, hết giờ giữ chỗ, thanh toán lỗi, mất mạng."],
            ["User Journey", "Trải nghiệm và cảm xúc theo thời gian?", "Từ 'thứ Sáu đi chơi không' đến check-in ở sân."],
            ["Sitemap", "Nội dung và chức năng tổ chức thành khu vực nào?", "Trang chủ / Tìm sân / Chi tiết / Đặt sân / Của tôi / Tài khoản."]
          ]
        },
        note: "Task Flow là đường thẳng cho một nhiệm vụ. User Flow có Decision Point (người dùng chọn) và System Response (hệ thống phản hồi) tạo ra nhánh."
      }),
      slide("theory", "User Roles và Role–Permission Matrix", "Ai dùng, mục tiêu gì, quyền gì, bối cảnh nào", [
        "<b>Player</b> — tìm, đặt, trả tiền, hủy đơn của mình. Điện thoại, vài lần/tuần.",
        "<b>Lễ tân</b> — check-in, đặt thay khách vãng lai, block slot. Tablet tại quầy.",
        "<b>Chủ sân / Admin</b> — giá, sân, doanh thu. Máy tính, hàng ngày.",
        "Ma trận: hàng là role, cột là hành động, ô là quyền (xem / tạo / sửa / hủy / duyệt).",
        "'Đặt sân' có hai role thực hiện → hai entry point cho cùng một use case."
      ], "ace-roles"),
      slide("prompt", "Viết Use Case", "Câu đơn, mỗi bước một hành động", [], "none", {
        layout: "content-only",
        code: `Use Case:       Đặt sân theo giờ
Actor:          Player
Precondition:   Đã đăng nhập; sân mở cửa ngày đã chọn
Trigger:        Chạm ô giờ trống trong lưới
Happy Path:
  1. Hệ thống tô lime ô đã chọn, cập nhật thanh tóm tắt (sân, giờ, tổng + VAT)
  2. Player chạm "Tiếp tục thanh toán"
  3. Hệ thống giữ chỗ 10 phút, hiển thị màn Thanh toán
  4. Player quét VietQR → Modal "Đặt sân thành công" + mã ACE-xxxx
Alternative Path:
  A1. Ô vừa bị người khác đặt → chuyển xám, toast, gợi ý giờ trống kế
  A2. Chọn 2 sân khác nhau → hỏi giữ sân nào
Error Path:
  E1. Hết 10 phút chưa thanh toán → nhả chỗ, giữ lựa chọn, cho thử lại
  E2. Mất mạng khi xác nhận → thông báo + thử lại, không tạo đơn trùng
Postcondition:  Chỗ được giữ; lễ tân và admin thấy trong Đơn đặt
Exit Point:     Modal thành công / Đặt chỗ của tôi / Chi tiết sân`,
        note: "Use Case Scenario là một lần đi cụ thể với một người và bối cảnh cụ thể: 'Lan, 25 tuổi, đặt sân 18:00 lúc đang trên xe bus'. Scenario lộ ra điều use case bỏ sót: một tay, mạng yếu, vội."
      }),
      slide("theory", "Năm điểm của mọi flow", "Vẽ đủ cả năm", [
        "<b>Entry Point</b> — kết quả tìm kiếm, trang sân, push notification, lễ tân đặt thay.",
        "<b>Happy Path</b> — đường ngắn nhất đến mục tiêu.",
        "<b>Alternative Path</b> — vẫn đến mục tiêu bằng đường khác (slot đầy → danh sách chờ).",
        "<b>Error Path</b> — không đến được; phải nói rõ vì sao và làm gì tiếp.",
        "<b>Exit Point</b> — kết thúc ở đâu, với trạng thái nào."
      ], "user-flow"),
      slide("theory", "Task Flow rồi User Flow", "Thêm hình thoi", [
        "Task Flow trước: các bước tuyến tính, không nhánh.",
        "Chắc Happy Path rồi mới thêm <b>Decision Point</b> (hình thoi) và <b>System Response</b>.",
        "Mỗi hình thoi phải có ít nhất hai đường ra được vẽ hết.",
        "Hình thoi một đường ra = missing case."
      ], "ace-flow"),
      slide("prompt", "Prompt tìm Missing Case", "Prompt giá trị nhất phần này", [], "none", {
        layout: "content-only",
        code: `"Đây là User Flow 'Đặt sân theo giờ' (dán mô tả từng bước).
 1. Với mỗi bước, liệt kê mọi lý do khiến bước đó thất bại hoặc rẽ nhánh
    (dữ liệu, quyền, trạng thái hệ thống, hành vi người dùng, thiết bị).
 2. Đánh dấu trường hợp nào flow hiện tại CHƯA xử lý.
 3. Đóng vai lễ tân đã làm 5 năm: tình huống nào ngoài đời hay xảy ra mà flow này bỏ qua?
 Không đề xuất giải pháp, chỉ liệt kê trường hợp."`,
        note: "Kết quả phải được bạn lọc: giữ case có thật theo business rule (biết từ phỏng vấn stakeholder), bỏ case AI tưởng tượng. ACE giữ: sân đóng đột xuất vì mưa; khách đặt 2 giờ liền nhưng ô giữa vừa bị đặt; lễ tân đặt thay không có số điện thoại."
      }),
      slide("theory", "Sitemap V0", "Gom theo cách người dùng nghĩ, không theo database", [
        "Viết mọi màn hình / chức năng xuất hiện trong use case lên card. Nhóm chúng. Đặt tên nhóm bằng từ người dùng dùng.",
        "Player: Trang chủ · Tìm sân · Chi tiết sân · Đặt sân · Thanh toán · Đặt chỗ của tôi · Tài khoản.",
        "Admin: Tổng quan · Người dùng · Đơn đặt · Doanh thu · Sân.",
        "Nhiều role: mỗi role một sitemap hoặc một nhánh riêng; phần dùng chung đánh dấu rõ."
      ], "ace-sitemap", { note: "Sitemap và User Flow ở đây là V0. Sau khi chốt Feature Inventory và MVP ở Phần 6, cập nhật lên V1. Đừng tô màu, đừng làm đẹp V0." }),
      soi("Lần ngược từ màn hình về use case", [
        "Liệt kê role thật của sản phẩm bạn; lập Role–Permission Matrix.",
        "Với mỗi màn đã vẽ: nó thuộc use case nào, ở bước nào? Màn không có use case → ghi 'chờ Phần 6 quyết'.",
        "Viết đầy đủ một use case cho core flow: Happy / Alternative / Error. Đối chiếu file: bạn đã vẽ nhánh nào? Thường chỉ có Happy Path.",
        "Vẽ Task Flow → User Flow có hình thoi → Sitemap V0. Chạy prompt missing case, thêm case có thật."
      ], "Đây là bước khiến nhiều học viên 'sáng ra': số màn hình còn thiếu (state lỗi, slot đầy, hết giờ giữ chỗ) thường nhiều hơn số màn đã vẽ."),
      outputs("Đầu ra", [
        "User Role Matrix.",
        "Use Case List (một use case viết đầy đủ).",
        "Task Flow.",
        "User Flow V0.",
        "Sitemap V0."
      ]),
      quiz([
        "Alternative Path và Error Path khác nhau ở điểm nào? <b>Alternative vẫn đến mục tiêu bằng đường khác; Error không đến được nên phải nói rõ vì sao và đưa lối ra.</b>",
        "Một Decision Point chỉ vẽ một đường ra có sao không? <b>Có. Hoặc nó không cần có, hoặc bạn đang thiếu nhánh.</b>",
        "Vì sao chưa nên hoàn thiện Sitemap ở phần này? <b>Vì phạm vi feature chưa chốt; Phần 6 sẽ loại và thêm feature.</b>"
      ])
    ]
  },
  {
    number: 6,
    title: "Research → Feature Strategy",
    focus: "Chuyển dữ liệu nghiên cứu thành Opportunity, Feature Hypothesis, Feature Inventory và phạm vi MVP có lý do rõ ràng; cập nhật UX Architecture lên V1 và lập Screen Inventory.",
    demo: makeDemo(
      "Gom card phỏng vấn ACE thành affinity map, kiểm tra 2 hypothesis, viết Problem Statement và 3 HMW, sinh nhiều phương án, lập Feature Inventory và chốt MVP.",
      "Research Synthesis Board, Problem & Opportunity Map, Feature Inventory, MVP Scope, Sitemap V1, User Flow V1 và Screen Inventory cho dự án của từng học viên.",
      "Mang đến: transcript 2–3 phỏng vấn, Competitive Matrix và Opportunity Gap, UX Architecture V0. Thiếu một thứ là phần này không chạy được."
    ),
    slides: [
      slide("cover", "Research → Feature Strategy", "Phần 6 · Sổ tay buổi 5", [
        "Phần nặng nhất về tư duy.",
        "Đây là nơi ý tưởng thiết kế thật sự được sinh ra."
      ], "data-ladder", { goal: "Tổng hợp research, kiểm tra hypothesis, viết Problem Statement và HMW, sinh nhiều phương án, chốt MVP có lý do, và lập Screen Inventory kèm state." }),
      slide("theory", "Bậc thang dữ liệu", "Lỗi phổ biến: nhảy từ Raw Data lên Solution", [], "none", {
        layout: "content-only",
        table: {
          head: ["Bậc", "Là gì", "ACE"],
          rows: [
            ["Raw Data", "Câu nói nguyên văn, hành vi quan sát được", "'Tuần đó hai đứa bận, tụi tôi bỏ luôn.'"],
            ["Observation", "Ghi nhận một hiện tượng, chưa gộp", "Người này bỏ buổi khi bạn trong nhóm bận."],
            ["Finding", "Pattern lặp trên nhiều người, có số", "5/8 người chơi nhóm từng hủy vì thiếu người."],
            ["Insight", "Vì sao, nhu cầu phía sau", "Đi chơi là quyết định của nhóm; một người đặt phải gánh cả nhóm."],
            ["Problem", "Khoảng cách giữa điều cần và điều có", "Không có cách nào để cả nhóm cùng xác nhận và chia tiền một chỗ."],
            ["Opportunity", "Vùng tạo giá trị cho người dùng và doanh nghiệp", "Biến một lần đặt sân thành cam kết của cả nhóm."]
          ]
        }
      }),
      slide("theory", "Affinity Mapping", "Bốn bước, AI gom lần đầu rất nhanh", [
        "1. Mỗi câu nói / quan sát có ý nghĩa → một card, kèm mã người (P1, P2…) và segment.",
        "2. Gom card giống nhau; đặt tên cụm bằng một câu đầy đủ, không phải một từ.",
        "3. Đếm số người khác nhau trong mỗi cụm. Cụm 1 người là observation, cụm nhiều người là finding.",
        "4. Gộp thêm Competitive Research: đối thủ giải quyết cụm này chưa? tốt không?",
        "Sau khi AI gom: mở card đọc câu gốc, tách cụm gom nhầm, bỏ kết luận AI tự thêm vào tên cụm."
      ]),
      slide("prompt", "Prompt gom Affinity Map", "AI gom lần đầu, bạn kiểm tra từng cụm", [], "none", {
        layout: "content-only",
        code: `"Đây là 60 card từ 3 phỏng vấn (mỗi card: [trích dẫn] | [mã người P1–P3] | [segment]).
 1. Gom card thành cụm theo chủ đề. Tên cụm là một câu đầy đủ, không phải một từ.
 2. Với mỗi cụm: đếm số NGƯỜI khác nhau (không đếm số card). Cụm 1 người → ghi 'observation'.
 3. Không thêm kết luận nào vào tên cụm. Không diễn giải trích dẫn.
 4. Liệt kê card không xếp được vào cụm nào."`,
        note: "Sau khi AI gom: mở từng cụm đọc câu gốc, tách cụm gom nhầm, và kiểm tra tên cụm không chứa kết luận AI tự thêm."
      }),
      slide("example", "Kiểm tra Hypothesis", "Ba trạng thái; bị bác bỏ là kết quả tốt", [
        "<b>Được ủng hộ</b> — có finding rõ. <b>Chưa đủ bằng chứng</b> — 1–2 người hoặc chưa hỏi đúng. <b>Bị bác bỏ</b> — dữ liệu nói ngược.",
        "H1 'Người chơi hủy vì bạn trong nhóm bận' → <b>được ủng hộ</b>: 5/8 kể về việc thiếu người.",
        "H2 'Thanh toán trước làm người chơi ngại đặt' → <b>chưa đủ bằng chứng</b>: 2/8 nhắc, cả hai là người chơi lẻ.",
        "Hypothesis bị bác bỏ tiết kiệm cho bạn một feature vô ích."
      ], "image", ace("payment.png", "Màn Thanh toán của ACE")),
      slide("theory", "Từ Insight đến Opportunity", "Chuỗi bảy bước", [
        "Evidence → Finding → Insight → Problem Statement → How Might We → Opportunity → Solution Idea.",
        "<b>Problem Statement:</b> [Người chơi nhóm] cần [cả nhóm cùng xác nhận và chia tiền] vì [đi chơi là quyết định của nhóm], nhưng hiện tại [một người đặt rồi đi đòi tiền từng người], dẫn đến [hủy muộn và sân trống giờ cao điểm].",
        "<b>HMW:</b> Làm sao để 4 người bạn xác nhận một lịch trong một phút? Làm sao để hủy giống như để cả nhóm chờ?",
        "<b>Solution Ideas (nhiều, chưa chọn):</b> chia tiền theo QR từng người; link mời; giữ chỗ nhóm; cọc tại sân; nhắc theo nhóm."
      ], "problem-flow", { note: "Quy tắc: tạo nhiều phương án cho mỗi HMW trước khi chọn. Phương án đầu tiên thường là phương án khách đã đề xuất trong brief, hoặc là thứ bạn đã vẽ." }),
      slide("theory", "Feature Inventory", "Nơi feature 'nhỏ' lộ ra là lớn", [
        "<b>Feature Hypothesis:</b> 'Nếu làm [feature] cho [role], thì [hành vi thay đổi], đo bằng [chỉ số].'",
        "<b>Phân loại theo:</b> User Role, Platform, Journey Stage (trước / trong / sau buổi chơi), Product Domain.",
        "<b>Loại:</b> Core, Supporting, Admin, System (thông báo, đồng bộ), Integration (thanh toán, lịch).",
        "<b>Yêu cầu đi kèm:</b> Dependency, Permission, Notification, Data, Empty State, Error-handling.",
        "'Chia tiền nhóm' cần: khái niệm nhóm, ai được mời, empty state khi chưa ai trả, dữ liệu QR từng người."
      ]),
      slide("theory", "Ưu tiên tính năng", "Một phương pháp chính, một để kiểm tra chéo", [], "none", {
        layout: "content-only",
        table: {
          head: ["Phương pháp", "Cách dùng", "Hợp khi"],
          rows: [
            ["MoSCoW", "Must / Should / Could / Won't (lần này)", "Cần chốt nhanh với stakeholder, ít feature"],
            ["Impact–Effort", "Ma trận 2×2: tác động cao – nỗ lực thấp làm trước", "Cần hình ảnh trực quan để thảo luận"],
            ["RICE (cơ bản)", "(Reach × Impact × Confidence) / Effort", "Có ước lượng số người dùng và độ tin cậy"],
            ["UV × BV × Complexity", "Chấm User Value, Business Value 1–5; chia cho Complexity", "Muốn gắn với 4 tiêu chí từ Phần 2"]
          ]
        },
        note: "Mỗi feature trong MVP phải trỏ được về một Problem Statement và một Hypothesis được ủng hộ. Feature không trỏ được thì không vào MVP dù khách yêu cầu — ghi vào Not Now với lý do bằng dữ liệu."
      }),
      slide("example", "Phạm vi MVP của ACE", "MVP · Phase 2 · Not Now", [], "none", {
        layout: "content-only",
        table: {
          head: ["Nhóm", "Feature", "Lý do"],
          rows: [
            ["MVP", "Tìm sân + lọc, chi tiết sân, lưới giờ, thanh toán VietQR, thành công + mã check-in, đặt chỗ của tôi + hủy, admin đơn đặt", "Mỗi feature trỏ về vấn đề no-show / giờ trống"],
            ["Phase 2", "Đặt nhóm chia tiền, danh sách chờ khi slot đầy, đánh giá sân", "Insight mạnh, cần thêm dữ liệu và tích hợp thanh toán"],
            ["Not Now", "Điểm thưởng, ranking, chat", "Không có bằng chứng trong phỏng vấn; 3 tháng không đủ"]
          ]
        }
      }),
      slide("theory", "Cập nhật UX Architecture lên V1 và Screen Inventory", "Đầu vào trực tiếp của Phần 7 và 8", [], "none", {
        layout: "content-only",
        table: {
          head: ["Màn", "Role", "State cần có", "Component chính"],
          rows: [
            ["Tra cứu kết quả", "Player", "Loading, Empty, Results, Error", "Search bar, Filter chip, Court card"],
            ["Đặt sân", "Player", "Loading, Default, Selected, Slot taken, Closed, Offline", "Date strip, Slot tile, Time grid, Summary bar"],
            ["Thanh toán", "Player", "Default, QR waiting, Timeout, Failed", "Radio card, QR panel, Order summary"],
            ["Đặt chỗ của tôi", "Player", "Upcoming, Past, Cancelled, Empty", "Tabs, Booking card, Status badge"],
            ["Admin · Đơn đặt", "Admin", "Loading, Table, Empty, Filter active", "Table, Badge, Date filter"]
          ]
        },
        note: "Cập nhật Use Case theo MVP; bỏ use case của feature Not Now. Sitemap V1, User Flow V1 bổ sung System State (loading, empty, success, error, offline) cho từng màn. Màn chỉ có một state là màn chưa nghĩ kỹ."
      }),
      soi("Chốt lại file của bạn theo dữ liệu", [
        "Affinity map từ 2–3 phỏng vấn thật. Gán trạng thái cho từng hypothesis ở Phần 3.",
        "Viết Problem Statement và 3 HMW. Sinh ít nhất 5 phương án cho mỗi HMW trước khi nhìn lại file.",
        "Lập Feature Inventory. Xếp mọi feature đã vẽ và feature mới vào MVP / Phase 2 / Not Now với lý do.",
        "Màn hình đã vẽ nhưng thuộc Not Now → chuyển vào Archive. Không xóa, nhưng không làm tiếp.",
        "Cập nhật Sitemap V1, User Flow V1, và lập Screen Inventory kèm state cho toàn bộ màn MVP."
      ], "Ý tưởng thiết kế bạn đang thiếu nằm ở bước HMW → nhiều phương án. Khi có 15 phương án cho 3 HMW, bạn sẽ hết mất hướng."),
      outputs("Đầu ra", [
        "Research Synthesis Board.",
        "Problem & Opportunity Map.",
        "Feature Inventory.",
        "Feature Prioritization Matrix.",
        "MVP Scope.",
        "Sitemap V1, User Flow V1 và Screen Inventory."
      ]),
      quiz([
        "Khách yêu cầu feature X nhưng dữ liệu không ủng hộ. Làm gì? <b>Đưa vào Not Now kèm lý do bằng dữ liệu và đề xuất cách kiểm chứng lại.</b>",
        "Vì sao Screen Inventory cần cột state? <b>Vì Design System cần biết component nào cần state gì, và Figma Make phải sinh đủ Loading, Empty, Success, Error.</b>",
        "Một feature 'nhỏ' có 5 dependency và 3 integration. Điều đó nói gì? <b>Nó không nhỏ. Tách phiên bản tối thiểu cho MVP, phần còn lại sang Phase 2.</b>"
      ])
    ]
  },
  {
    number: 7,
    title: "Design System với Figma Agent",
    focus: "Dùng Figma Agent xây Design System có cấu trúc nhanh hơn, vẫn đảm bảo Variables, Auto Layout, Component Properties, Variants và khả năng mở rộng.",
    demo: makeDemo(
      "Viết Design Direction cho ACE, để Agent tạo Primitive + Semantic collection từ bảng token, xây Button và Slot tile với variants, chạy audit lên file ACE hiện có.",
      "Foundation Library, bộ component tối thiểu theo Atomic, naming convention, và một màn hình dựng hoàn toàn từ instance cho dự án của từng học viên.",
      "Mở file của bạn. Đếm số màu hex khác nhau đang dùng. Con số đó là lý do bạn cần token."
    ),
    slides: [
      slide("cover", "Design System với Figma Agent", "Phần 7 · Sổ tay buổi 6", [
        "Token là variable. Component là function có props. Auto layout là flexbox.",
        "Bạn đã biết những thứ này, chỉ chưa gọi đúng tên trong Figma."
      ], "figma-logo", { goal: "Chuẩn bị Design Direction, xây Foundations và Component Inventory từ Screen Inventory, chuẩn hóa component, và dùng Agent để audit và scale." }),
      slide("theory", "Khái niệm cần nắm", "Bốn từ của phần này", [
        "<b>Primitive Token</b> — giá trị thô, tên trung lập: <code>pine = #1c5e3c</code>. <b>Semantic Token</b> — tên theo ý nghĩa, trỏ về primitive: <code>color/action/primary → acid-lime</code>.",
        "<b>Variables và Modes</b> — variable là token bind được vào property; mode là tập giá trị thay thế (Light/Dark, Mobile/Desktop).",
        "<b>Atomic Design</b> — Atoms → Molecules → Organisms → Templates.",
        "<b>Component Properties</b> — Boolean (hiện/ẩn icon), Text (nhãn), Instance Swap (đổi icon), Variant (Type, Size, State)."
      ]),
      slide("theory", "Design Direction trước khi gõ prompt", "Agent làm rất nhanh; bạn chưa quyết thì nó quyết thay", [
        "<b>Product Personality:</b> ACE 'năng lượng, đáng tin, nhanh gọn'; tránh 'doanh nghiệp, rối, lạnh'.",
        "<b>Target Audience, Platform, Brand:</b> lấy từ Master Context; màu/logo/font có sẵn của khách.",
        "<b>Visual Direction và References:</b> reference board từ Phần 4, mỗi tham chiếu ghi lấy gì, không lấy gì.",
        "<b>Accessibility:</b> tương phản chữ ≥ 4.5:1 (chữ trắng trên lime không đạt → dùng ink), vùng chạm 44px, không truyền nghĩa chỉ bằng màu.",
        "<b>Guideline cho Agent:</b> không tạo màu/spacing ngoài token; không tạo component ngoài inventory; không đổi tên; mọi giá trị bind variable."
      ], "mood-wall"),
      slide("example", "Token của ACE, lấy thẳng từ file", "Primitive và Semantic", [
        "File hiện có một lớp: ink, pine, acid-lime, tint-green, paper, rule; radius tile 8 / input 12 / card 16 / pill; space/md 16.",
        "Việc cần làm: thêm collection <b>Semantic</b> trỏ về primitive, 2 mode Light/Dark.",
        "Ví dụ: <code>color/slot/selected → acid-lime</code>, <code>color/text/primary → ink</code>, <code>color/bg/page → paper</code>.",
        "Đổi brand chỉ đổi primitive; đổi cách dùng chỉ đổi semantic. Giống <code>--color-action: var(--lime-500)</code> trong CSS."
      ], "ace-palette"),
      slide("theory", "Xây Foundations: bạn quyết, Agent làm", "Năm bảng", [], "none", {
        layout: "content-only",
        table: {
          head: ["Foundation", "Bạn quyết định", "Agent thực hiện"],
          rows: [
            ["Color", "Palette primitive; bảng semantic: background, surface, text, border, action, feedback", "Collection Primitive và Semantic, bind semantic → primitive, mode Light/Dark"],
            ["Typography", "Tối đa 2 font; scale Display, H1–H3, Body L/M/S, Label, Caption", "Text style, gắn variable cho size / line-height"],
            ["Spacing", "Thang 4pt: 4, 8, 12, 16, 24, 32, 48, 64", "Variable spacing cho padding / gap mọi component"],
            ["Radius, Border, Shadow", "3–4 bậc radius theo cấp component; 2–3 bậc elevation", "Variable và effect style"],
            ["Grid & Breakpoint", "Mobile 4 cột / margin 16; tablet 8; desktop 12; 375 / 768 / 1024 / 1440", "Layout grid style theo frame chuẩn"]
          ]
        }
      }),
      slide("prompt", "Prompt xây foundation", "Đưa bảng, không đưa cảm hứng", [], "none", {
        layout: "content-only",
        code: `"Dựa trên Design Direction (dán) và bảng token (dán), tạo:
 1. Collection 'Primitive': color, spacing, radius theo đúng tên và giá trị trong bảng.
 2. Collection 'Semantic': mỗi token trỏ về primitive tương ứng; 2 mode Light/Dark.
 3. Text styles theo scale đã cho.
 Không tạo token nào không có trong bảng. Báo lại danh sách đã tạo để tôi đối chiếu."`
      }),
      slide("theory", "Component Inventory từ Screen Inventory", "Chỉ xây thứ có trong màn MVP", [
        "<b>Atoms</b> — Button, Input, Badge, Chip, Slot tile, Icon, Avatar, Radio.",
        "<b>Molecules</b> — Date strip item, Search bar, Price row, Radio card, Stat card.",
        "<b>Organisms</b> — Time grid, Court card, Summary bar, Order summary, Booking card, Admin table, Modal, Toast, Empty state, Skeleton.",
        "<b>Templates</b> — Booking page, Payment page, Admin list page.",
        "Chỉ Slot tile và Time grid là component riêng của ACE; còn lại là component chung tái dùng ở màn khác."
      ], "atomic-stack"),
      slide("theory", "Chuẩn hóa component", "Auto Layout, Variants, Naming, Description", [
        "<b>Auto Layout:</b> mọi component. Hug cho nội dung tự co, Fill để chiếm hết container, Min/Max width cho chữ dài.",
        "<b>Variants, Sizes, States:</b> Button = Type (Primary/Secondary/Ghost) × Size (S/M/L) × State (Default/Hover/Pressed/Disabled/Loading) + Boolean icon + Text label.",
        "<b>Content Flexibility:</b> chịu được nội dung dài gấp đôi, không icon, đổi chiều rộng container.",
        "<b>Description:</b> khi nào dùng, khi nào không, component thay thế."
      ], "image", ace("button-variants.png", "Bộ variant Button của ACE")),
      slide("prompt", "Naming Convention", "Một quy tắc duy nhất", [
        "Layer bên trong đặt tên theo vai trò: <code>label</code>, <code>icon-leading</code>. Không để <code>Frame 123</code>."
      ], "none", {
        layout: "content-only",
        code: `Component:  Category / Component / Property=Value
            Action / Button / Type=Primary, Size=M, State=Default
            Booking / SlotTile / State=Selected
Frame:      [Platform] / [Flow] / [Màn] / [State]
            Web / Đặt sân / Lưới giờ / Slot đầy
            Mobile / Đặt sân / Lưới giờ / Default
Variable:   color/action/primary   space/md   radius/card`
      }),
      slide("prompt", "Agent audit: báo cáo trước, sửa sau", "Phần Agent tạo giá trị lớn nhất so với làm tay", [], "none", {
        layout: "content-only",
        code: `"Quét toàn bộ page 'Components'. Lập báo cáo theo 5 mục:
 (1) fill/stroke/text dùng giá trị thô thay vì variable — liệt kê layer và giá trị;
 (2) style trùng nhau về giá trị nhưng khác tên;
 (3) component thiếu Auto Layout hoặc có kích thước cố định;
 (4) variant set thiếu state so với bảng chuẩn (Default/Hover/Pressed/Disabled/Loading/Error);
 (5) cặp màu chữ–nền dưới 4.5:1.
 Chỉ báo cáo, chưa sửa. Tôi sẽ duyệt rồi yêu cầu sửa từng mục."`,
        note: "Agent sửa hàng loạt rất nhanh, và sửa sai cũng hàng loạt. Duyệt báo cáo, rồi ra lệnh sửa theo từng mục để kiểm tra được."
      }),
      soi("Chạy audit lên file của bạn", [
        "Viết Design Direction một trang từ reference board Phần 4 và Master Context.",
        "Lập bảng token từ màu / spacing / radius đang dùng trong file. Gom về thang 4pt và tối đa 6–8 màu chính.",
        "Để Agent tạo Primitive + Semantic. Bind lại các frame hiện có sang semantic.",
        "Chạy prompt audit lên page component hiện tại. Duyệt báo cáo, sửa từng mục.",
        "Dựng lại một màn MVP hoàn toàn từ Component Instances, không có layer rời."
      ], "Kết quả audit thường thấy trên file học viên: 20+ màu hex, spacing 13/15/17, button không có state Disabled. Đó là danh sách việc của bạn tuần này."),
      outputs("Đầu ra", [
        "Foundation Library (Variables, Text Styles, Effects, Grid).",
        "Atomic Components: Atoms, Molecules, Organisms.",
        "Component Variants và States.",
        "Naming Convention.",
        "Design System Documentation cơ bản.",
        "Một màn hình xây hoàn toàn bằng Component Instances."
      ]),
      quiz([
        "Vì sao cần cả Primitive và Semantic thay vì một lớp? <b>Hai lớp tách hai loại thay đổi: brand đổi ở primitive, cách dùng đổi ở semantic; Dark mode chỉ là một mode khác.</b>",
        "Agent tạo 'Card Promo' đẹp nhưng không có trong Screen Inventory. Giữ không? <b>Không. Xóa và ghi vào 'ý tưởng Phase 2'.</b>",
        "Auto Layout tương đương gì trong code? <b>Flexbox: direction, gap, padding, hug và fill.</b>"
      ])
    ]
  },
  {
    number: 8,
    title: "Figma Make × Figma Agent",
    focus: "Tạo Functional Prototype bằng Figma Make từ Master Prompt, chuyển sang Figma Design, rồi dùng Figma Agent tái cấu trúc thành UI có Component và Design System.",
    demo: makeDemo(
      "Ghép Master Prompt của ACE từ các artifact, sinh flow đặt sân trong Figma Make, Copy Design màn Đặt sân sang Figma Design, chạy prompt systemize với Agent.",
      "Prototype chạy được, bộ editable screens xếp theo flow và state, các màn còn thiếu được sinh và hệ thống hóa cho dự án của từng học viên.",
      "Chọn một màn trong Screen Inventory. Viết 4 state của nó thành một đoạn văn với nội dung thật, không lorem ipsum."
    ),
    slides: [
      slide("cover", "Figma Make × Figma Agent", "Phần 8 · Sổ tay buổi 7", [
        "Toàn bộ research đi vào một Master Prompt.",
        "Design System Phần 7 được áp lên kết quả."
      ], "three-phases", { goal: "Sinh prototype bằng Figma Make từ Master Prompt, mang các state quan trọng sang Figma Design, và systemize bằng Figma Agent." }),
      slide("theory", "Ba pha, đúng thứ tự", "Make → Design → Systemize", [
        "<b>Pha 1</b> — UX Architecture → Figma Make: prototype từ Master Prompt.",
        "<b>Pha 2</b> — Figma Make → Figma Design: Copy Design các state quan trọng thành editable layers.",
        "<b>Pha 3</b> — Figma Agent: rename, auto layout, variables, component.",
        "Bỏ pha 3 thì bạn có một demo, không phải một sản phẩm bảo trì được."
      ], "three-phases"),
      slide("theory", "Cấu trúc Master Prompt", "Tám phần, có nội dung thật", [
        "1. <b>Product Direction</b> — một đoạn từ Product Direction Brief.",
        "2. <b>Target Users và Business Rules</b> — 'hủy trước 12 giờ mới hoàn', 'giữ chỗ 10 phút'.",
        "3. <b>Feature scope</b> — chỉ MVP, theo Feature Inventory.",
        "4. <b>Sitemap V1 và User Flow V1</b> — điều hướng chính, flow trọng tâm với Happy/Alternative/Error.",
        "5. <b>Content thật</b> — tên sân thật, khung giờ thật, giá có nghĩa. Không lorem ipsum.",
        "6. <b>Visual Direction</b> — từ Design Direction: personality, palette, font, radius, mật độ.",
        "7. <b>Edge Cases và System States</b> — Loading, Empty, Success, Error cho từng màn trong Screen Inventory.",
        "8. <b>Điều không được làm</b> — không thêm feature ngoài scope, không tự đặt tên khác, không ảnh stock vô nghĩa."
      ]),
      slide("prompt", "Ví dụ đoạn 7 của Master Prompt (ACE)", "State viết thành lời", [], "none", {
        layout: "content-only",
        code: `"Màn Đặt sân có 5 trạng thái:
 (a) Loading: skeleton date strip + 3 hàng lưới;
 (b) Default: date strip theo tuần, lưới ô giờ theo sân;
     ô trống trắng, ô đang chọn lime #c9ff49, ô đã đặt xám, ô không mở nét đứt;
 (c) Slot đầy: ô vừa chạm đã có người đặt → chuyển xám,
     toast 'Khung giờ vừa có người đặt', gợi ý giờ trống kế;
 (d) Offline: banner + 'Thử lại', giữ lựa chọn;
 (e) Summary bar: dính đáy, hiện sân, chip từng giờ, tổng + VAT,
     nút 'Tiếp tục thanh toán' disabled cho đến khi chọn ít nhất một ô."`
      }),
      slide("checklist", "Kiểm tra prototype", "Đi qua từng flow trong User Flow V1", [
        "Navigation đúng sitemap?",
        "Form validate và báo lỗi inline?",
        "Button có state Loading / Disabled?",
        "Có đủ Loading, Empty, Success, Error cho mỗi màn?",
        "Ghi mọi thiếu sót thành danh sách; sửa bằng prompt bổ sung từng mục, không viết lại từ đầu."
      ], "none", { layout: "content-only" }),
      slide("theory", "Figma Make → Figma Design", "Chỉ mang sang thứ quan trọng", [
        "Chọn state cần mang: mỗi màn trong Screen Inventory ở trạng thái chính + 1–2 trạng thái khác (Empty, Error).",
        "Dùng <b>Copy Design</b> để chuyển preview thành Editable Layers.",
        "Sắp xếp theo flow và state: mỗi flow một hàng, state xếp dọc dưới màn gốc, đặt vào Section theo convention.",
        "Phần copy là <b>Snapshot</b>: không giữ Interaction, không tự gắn Design System, không đồng bộ ngược."
      ], "figma-canvas", { note: "Sau khi copy, Figma Design là source of truth cho UI. Figma Make chỉ còn là bản chạy để tham chiếu hoặc test." }),
      slide("prompt", "Systemize bằng Figma Agent", "Sáu bước, từng màn một", [
        "Rename layer và tổ chức hierarchy → Auto Layout + Variables → nhận diện Repeated Patterns → Variants/Properties → thay bằng Component Instances → redesign bằng Design System."
      ], "none", {
        layout: "content-only",
        code: `"Trong frame 'Web / Đặt sân / Lưới giờ / Default':
 1. Liệt kê các nhóm layer lặp lại và số lần lặp. Chưa sửa.
 2. Với mỗi nhóm, kiểm tra Library 'ACE DS' có component tương ứng không;
    nếu có → thay bằng instance và map text; nếu không → đề xuất tên và property theo convention
    'Category / Component / Property=Value'.
 3. Thay mọi màu, spacing, chữ dùng giá trị thô bằng variable/style gần nhất; báo các giá trị
    không map được để tôi quyết định."`
      }),
      soi("Sinh màn còn thiếu, rồi hệ thống hóa cả file", [
        "Ghép Master Prompt của bạn từ đầu ra Phần 2–7.",
        "Dùng Figma Make sinh <b>các màn và state còn thiếu</b> theo Screen Inventory (Empty, Error, Loading, Slot đầy…), không sinh lại màn đã tốt.",
        "Copy Design màn chính + 1 state lỗi sang Figma Design. Chạy prompt systemize.",
        "Áp cùng prompt systemize lên các màn cũ của bạn: chúng cũng là layer phẳng, giá trị thô.",
        "Kết thúc: mọi màn MVP đều là instance + variable."
      ], "Học viên hay muốn 'sinh lại toàn bộ cho đẹp'. Đừng. Bạn đã có màn hình; thứ thiếu là state, nhánh lỗi và tính hệ thống."),
      outputs("Đầu ra", [
        "Một Functional Prototype trong Figma Make.",
        "Một bộ Editable Screens trong Figma Design, xếp theo flow và trạng thái.",
        "Các màn hình được rebuild bằng Components.",
        "Prototype được cập nhật theo Design System."
      ]),
      quiz([
        "Prototype Figma Make chạy tốt và đẹp. Có cần chuyển sang Figma Design và systemize không? <b>Cần. Prototype là bằng chứng ý tưởng chạy được, không phải tài liệu handoff có component để mở rộng.</b>",
        "Sau khi Copy Design, bạn sửa UI trong Figma Design. Prototype trong Make có cập nhật không? <b>Không. Snapshot một chiều.</b>"
      ])
    ]
  },
  {
    number: 9,
    title: "Đa nền tảng & quản lý file",
    focus: "Xác định đúng Platform cần xây, tổ chức File, Pages, Sections, Components, Layouts và trạng thái thiết kế theo quy mô dự án; bàn giao cho dev và giữ nhịp luyện tập.",
    demo: makeDemo(
      "Từ Role Matrix của ACE suy ra Platform Map (player web, mobile, admin), chốt grid và breakpoint, tổ chức lại file ACE theo page / section / status.",
      "Platform Map, Responsive Strategy, Figma File Architecture, Naming Convention và Design Status Workflow cho dự án của từng học viên.",
      "Dev hỏi 'màn nào là bản cuối?'. Bạn trả lời được trong 10 giây không?"
    ),
    slides: [
      slide("cover", "Đa nền tảng & quản lý file", "Phần 9 · Sổ tay buổi 8", [
        "Một Design System, nhiều bề mặt.",
        "File gọn thì dev không hỏi 'bản nào là cuối'."
      ], "layers", { goal: "Chọn và phân chia platform theo bối cảnh dùng, quyết định layout cho từng platform, tổ chức file và trạng thái thiết kế, bàn giao sạch." }),
      slide("theory", "Các loại platform", "Mỗi loại mang bối cảnh dùng khác nhau", [
        "<b>Mobile / Tablet App</b> — dùng ngắn, thường xuyên, một tay.",
        "<b>Mobile Web / Responsive Website</b> — không cần cài, đến từ link, phiên ngắn.",
        "<b>Web Application / Desktop Dashboard</b> — phiên dài, nhiều dữ liệu, bàn phím + chuột.",
        "<b>Landing Page</b> — thuyết phục và chuyển đổi.",
        "<b>Merchant Portal / Internal Tool / Super Admin</b> — người dùng được đào tạo, ưu tiên hiệu suất.",
        "Chọn theo: User Context, Device, Usage Frequency, Task Complexity, Data Density — không theo thói quen 'làm app mobile'."
      ]),
      slide("example", "ACE: từ 'một web app' thành ba bề mặt", "Role Matrix quyết định platform", [
        "<b>Player Web + Mobile</b> — phiên ngắn, một tay, đặt sân và xem lịch; 12 cột / 4 cột.",
        "<b>Staff Tablet</b> — check-in và đặt thay tại quầy (tạm dùng admin responsive trong MVP).",
        "<b>Admin Dashboard</b> — máy tính, dữ liệu dày, sidebar, bảng full-width.",
        "Tất cả dùng chung một <b>Shared Design System</b>. MVP 3 tháng: Player Web + Mobile + Admin Đơn đặt."
      ], "image", ace("admin.png", "Admin dashboard của ACE")),
      slide("theory", "Layout theo từng platform", "Cần quyết định gì", [], "none", {
        layout: "content-only",
        table: {
          head: ["Chủ đề", "Cần quyết định"],
          rows: [
            ["Grid", "Mobile 4 cột / margin 16 / gutter 16; Tablet 8 cột / margin 24; Desktop 12 cột / margin 32–80 hoặc container cố định"],
            ["Responsive vs Adaptive", "Responsive: một layout co giãn. Adaptive: vài layout cố định theo breakpoint. Dashboard dày thường adaptive"],
            ["Breakpoint", "3–4 mốc (375 / 768 / 1024 / 1440) và điều gì thay đổi ở mỗi mốc: số cột, điều hướng, mật độ"],
            ["Containers", "Fixed, Fluid, Max-width (1200–1440 cho nội dung đọc)"],
            ["Điều hướng", "Mobile: bottom tab. Web app: sidebar nhiều module, top nav ít module"],
            ["Responsive của Component", "Mỗi component ghi rõ: Fill, Fixed, hay đổi biến thể theo breakpoint (Card ngang → dọc)"]
          ]
        }
      }),
      slide("theory", "Quản lý canvas và trạng thái thiết kế", "Chia theo module, flow, role, platform, release — không theo ngày", [
        "Dùng <b>Sections</b> để nhóm; tránh xếp toàn bộ màn thành một hàng ngang vô tận.",
        "Frame: <code>[Platform] / [Flow] / [Màn] / [State]</code> → <code>Mobile / Đặt sân / Lưới giờ / Slot đầy</code>.",
        "Trạng thái: <b>Exploration → WIP → Review → Ready for Dev → Deprecated → Archive</b>.",
        "Dev chỉ nhìn Ready for Dev."
      ], "layers"),
      slide("theory", "Cấu trúc file theo quy mô", "Tách khi có nhóm khác nhau sửa cùng lúc, hoặc nhịp thay đổi khác nhau", [], "none", {
        layout: "content-only",
        table: {
          head: ["Quy mô", "Cấu trúc đề xuất"],
          rows: [
            ["Dự án nhỏ (ACE bây giờ)", "FigJam: 01 Brief · 02 Research · 03 Market · 04 UX Architecture · 04b Sitemap · 05 Feature Strategy. File design: 00 Start here · 01 Design Direction · 02 Wireframe · 03 Design System · 04 Design & Prototype · Assets"],
            ["Dự án vừa", "Tách file UX Research và file Design System; file Design dùng library"],
            ["Dự án lớn", "Tách Foundation Library, Component Library, file theo Platform, theo Product Domain, Documentation"],
            ["Nhiều user role", "Tách Customer, Merchant, Admin và một Shared Library"],
            ["Nhiều platform", "Tách Mobile, Web, Dashboard và một Cross-platform Library"]
          ]
        }
      }),
      slide("prompt", "Prompt tổ chức lại file bằng Figma Agent", "Báo cáo trước, di chuyển sau", [], "none", {
        layout: "content-only",
        code: `"Quét toàn bộ file. Lập báo cáo:
 1. Liệt kê mọi top-level frame: tên hiện tại, kích thước, page đang nằm.
 2. Đề xuất tên mới theo convention '[Platform] / [Flow] / [Màn] / [State]'
    và Section đích (theo flow) cho từng frame. Frame không xác định được flow → cột 'cần hỏi'.
 3. Đánh dấu frame trùng nhau (cùng màn, khác bản) để tôi chọn bản giữ lại.
 Chưa đổi tên, chưa di chuyển. Tôi duyệt rồi yêu cầu thực hiện theo từng Section."`,
        note: "Đổi tên và di chuyển hàng loạt là thao tác khó hoàn tác. Luôn để Agent báo cáo trước."
      }),
      slide("checklist", "Ready-for-Development Checklist", "Governance và handoff", [
        "Đủ state: loading, empty, error, success.",
        "Đủ breakpoint sẽ ship.",
        "Mọi giá trị bind token; text thật, không lorem ipsum.",
        "Annotation cho hành vi không nhìn thấy: validation, thứ tự focus, animation.",
        "Link đến use case và user flow.",
        "Naming Convention, Version Management, Component Ownership: một tài liệu, mọi người theo."
      ], "none", { layout: "content-only" }),
      slide("theory", "Từ Figma sang code", "Developer đã biết mapping này", [], "none", {
        layout: "content-only",
        table: {
          head: ["Figma", "Code"],
          rows: [
            ["Variable collection Primitive / Semantic", "CSS custom properties, theme file"],
            ["Text style", "Typography scale, utility class"],
            ["Component + variants + props", "React / Vue component với props"],
            ["Auto layout (hug, fill, gap)", "Flexbox / grid"],
            ["Frame theo state", "Nhánh loading / empty / error trong view"],
            ["Section Ready for Dev", "Ticket có link, acceptance criteria"]
          ]
        }
      }),
      slide("theory", "Chuỗi artifact: tạo ở đâu, dùng ở đâu", "Đầu ra phần này là đầu vào phần nào", [], "none", {
        layout: "content-only",
        table: {
          head: ["Artifact", "Tạo ở", "Dùng ở"],
          rows: [
            ["Master Context", "Phần 1", "Mọi phần; Master Prompt (8)"],
            ["Product Direction Brief", "Phần 2", "Research Plan (3), Design Direction (7), Master Prompt (8)"],
            ["Research Questions & Hypothesis, Interview Notes", "Phần 3", "Kiểm tra hypothesis, Affinity (6)"],
            ["Opportunity Gap, UX Flow Benchmark, Reference board", "Phần 4", "Opportunity (6), User Flow (5), Design Direction (7)"],
            ["Role Matrix, Use Case, Sitemap / User Flow V0", "Phần 5", "Feature Inventory (6), Platform Map (9)"],
            ["MVP Scope, Screen Inventory", "Phần 6", "Component Inventory (7), System States trong Master Prompt (8)"],
            ["Design Direction, Foundation, Naming", "Phần 7", "Visual Direction (8), Shared Library, File Architecture (9)"],
            ["Editable Screens rebuilt", "Phần 8", "Sắp xếp theo Section & Status (9)"]
          ]
        }
      }),
      soi("Tổ chức lại file của bạn", [
        "Từ Role Matrix suy ra Platform Map. Chốt grid, breakpoint và điều hướng cho từng platform.",
        "Tạo page theo cấu trúc dự án nhỏ. Chuyển artifact Phần 1–6 vào page Brief / Research / Flows.",
        "Đặt lại tên frame theo convention. Nhóm bằng Section theo flow và state.",
        "Gắn trạng thái. Chỉ frame qua Ready-for-Dev checklist mới vào section Ready for Dev.",
        "Bản cũ trước khóa → Archive. Không xóa."
      ], "Thước đo cuối cùng: đưa file cho một developer khác, họ tìm được 'màn đặt sân, trạng thái slot đầy, bản mobile' trong 30 giây."),
      outputs("Đầu ra", [
        "Platform Map.",
        "Responsive Strategy.",
        "Figma File Architecture.",
        "Page & Section Structure.",
        "Naming Convention.",
        "Design Status Workflow."
      ]),
      slide("theory", "Luyện tập sau khóa", "Giữ vòng lặp chạy", [
        "Mỗi tuần: lưu 3 màn tham khảo, ghi tên pattern và style.",
        "Mỗi dự án mới: Brief → Master Context → Flow → Screen Inventory trước khi vẽ UI.",
        "Hỏi AI để mở rộng phương án và audit. Tự quyết định.",
        "Nuôi một Design System cá nhân và dùng lại.",
        "Cập nhật Master Context sau mỗi quyết định."
      ], "practice-system"),
      slide("quiz", "Ba câu hỏi kiểm tra mọi kết quả AI", "Kết khóa", [
        "Câu này đến từ dữ liệu nào? Trích được không?",
        "Nếu bỏ câu này, quyết định của tôi có đổi không? Nếu không, nó là trang trí.",
        "AI có đang chọn thay tôi không? Nếu có, tôi đã quyết chưa?"
      ], "none", { layout: "content-only", footer: "Huyen Vu " })
    ]
  }
];
