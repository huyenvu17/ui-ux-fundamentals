// Original inline SVG illustrations for the deck (no external images, no product screenshots).
// Palette: purple accent line-art on soft surfaces, matching the deck theme.

const A = "#9333ea"; // accent
const A2 = "#d8b4fe"; // accent light
const INK = "#221635";
const MUTED = "#6d6580";
const SOFT = "rgba(147, 51, 234, 0.10)";
const SOFT2 = "rgba(147, 51, 234, 0.05)";
const OK = "#3e7c59";
const WARN = "#c98a1f";
const ERR = "#c93b3b";

const svg = (body, w = 360, h = 240) =>
  `<svg class="illo" viewBox="0 0 ${w} ${h}" width="100%" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;

const rect = (x, y, w, h, extra = "") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" ${extra}/>`;
const text = (x, y, t, size = 12, extra = "") => `<text x="${x}" y="${y}" font-family="Geist, sans-serif" font-size="${size}" fill="${INK}" ${extra}>${t}</text>`;
const label = (x, y, t) => text(x, y, t, 10, `fill="${MUTED}" font-family="Geist Mono, monospace" font-weight="700"`);

export const illustrations = {
  // Course cover: centered phone with framed UI/UX type, floating widgets and soft gradient blobs
  course: svg(`
    <defs>
      <linearGradient id="covB1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a855f7"/><stop offset="1" stop-color="#ec4899"/></linearGradient>
      <linearGradient id="covB2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7c3aed"/><stop offset="1" stop-color="#c084fc"/></linearGradient>
    </defs>
    <path d="M258 22 c 26 -16 58 -4 60 16 c 2 20 -24 34 -46 28 c -22 -6 -36 -30 -14 -44 Z" fill="url(#covB1)" opacity="0.30"/>
    <path d="M50 238 c 24 -14 54 -2 56 18 c 2 20 -22 34 -44 28 c -22 -6 -32 -32 -12 -46 Z" fill="url(#covB2)" opacity="0.30"/>
    <path d="M406 158 c 16 -10 36 -2 38 12 c 2 14 -14 24 -30 20 c -16 -4 -22 -22 -8 -32 Z" fill="url(#covB1)" opacity="0.25"/>
    <line x1="72" y1="26" x2="72" y2="252" stroke="${A2}" stroke-dasharray="2 6" stroke-width="1.5"/>
    <rect x="32" y="36" width="80" height="70" rx="16" fill="#fff" stroke="${A2}" stroke-width="1.5"/>
    <path d="M50 90 A 22 22 0 0 1 94 90" stroke="${SOFT}" stroke-width="8" fill="none" stroke-linecap="round"/>
    <path d="M50 90 A 22 22 0 0 1 84 71" stroke="url(#covB1)" stroke-width="8" fill="none" stroke-linecap="round"/>
    <line x1="72" y1="90" x2="83" y2="74" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>
    <circle cx="72" cy="90" r="3" fill="${INK}"/>
    <text x="72" y="101" text-anchor="middle" font-family="Geist, sans-serif" font-size="8" font-weight="700" fill="${MUTED}">Hiệu năng</text>
    <circle cx="52" cy="136" r="14" fill="#fff" stroke="${A2}" stroke-width="1.5"/>
    <circle cx="52" cy="136" r="4.5" fill="none" stroke="${A}" stroke-width="1.8"/>
    ${[0, 45, 90, 135, 180, 225, 270, 315].map((d) => `<line x1="${52 + 7 * Math.cos((d * Math.PI) / 180)}" y1="${136 + 7 * Math.sin((d * Math.PI) / 180)}" x2="${52 + 9.5 * Math.cos((d * Math.PI) / 180)}" y2="${136 + 9.5 * Math.sin((d * Math.PI) / 180)}" stroke="${A}" stroke-width="1.8" stroke-linecap="round"/>`).join("")}
    <circle cx="92" cy="136" r="14" fill="#fff" stroke="${A2}" stroke-width="1.5"/>
    <circle cx="92" cy="136" r="6.5" fill="none" stroke="${A}" stroke-width="1.8"/>
    <path d="M92 132 v4.5 h3.5" stroke="${A}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <circle cx="52" cy="176" r="14" fill="#fff" stroke="${A2}" stroke-width="1.5"/>
    <path d="M45.5 177 l6.5 -6.5 l6.5 6.5 M47 176 v6.5 h10 v-6.5" stroke="${A}" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="92" cy="176" r="14" fill="#fff" stroke="${A2}" stroke-width="1.5"/>
    <circle cx="92" cy="172.5" r="3.5" fill="none" stroke="${A}" stroke-width="1.8"/>
    <path d="M85.5 183 c 2.5 -4.5 10.5 -4.5 13 0" stroke="${A}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <circle cx="52" cy="216" r="13" fill="url(#covB1)"/>
    <path d="M52 209 l2.5 4.5 l4.5 2.5 l-4.5 2.5 l-2.5 4.5 l-2.5 -4.5 l-4.5 -2.5 l4.5 -2.5 z" fill="#fff"/>
    <rect x="168" y="22" width="124" height="240" rx="22" fill="#fff" stroke="${A}" stroke-width="2.5"/>
    <rect x="178" y="42" width="104" height="202" rx="12" fill="${SOFT2}"/>
    <rect x="210" y="30" width="40" height="6" rx="3" fill="${SOFT}"/>
    <rect x="196" y="64" width="68" height="76" fill="none" stroke="${A}" stroke-width="1.5"/>
    <text x="230" y="96" text-anchor="middle" font-family="Geist, sans-serif" font-size="26" font-weight="800" fill="${INK}">UI</text>
    <text x="230" y="128" text-anchor="middle" font-family="Geist, sans-serif" font-size="26" font-weight="800" fill="${INK}">UX</text>
    <text x="230" y="162" text-anchor="middle" font-family="Geist, sans-serif" font-size="9" font-weight="500" fill="${MUTED}">Thiết kế giao diện</text>
    ${[222, 230, 238].map((x) => `<circle cx="${x}" cy="176" r="2" fill="${A2}"/>`).join("")}
    <rect x="196" y="194" width="68" height="20" rx="10" fill="url(#covB1)"/>
    <text x="230" y="207" text-anchor="middle" font-family="Geist, sans-serif" font-size="8" font-weight="700" fill="#fff">Bắt đầu</text>
    <rect x="214" y="248" width="32" height="4" rx="2" fill="${A2}"/>
    <rect x="312" y="36" width="28" height="118" rx="14" fill="#fff" stroke="${A2}" stroke-width="1.5"/>
    <rect x="322" y="50" width="8" height="8" rx="2" fill="none" stroke="${A}" stroke-width="1.6"/>
    <circle cx="326" cy="82" r="9" fill="url(#covB1)"/>
    <circle cx="326" cy="79.5" r="2.5" fill="#fff"/>
    <path d="M321.5 86.5 c 2 -3.5 7 -3.5 9 0" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <circle cx="326" cy="110" r="3.5" fill="none" stroke="${A}" stroke-width="1.6"/>
    <circle cx="326" cy="138" r="3.5" fill="${A2}"/>
    <rect x="356" y="36" width="16" height="118" rx="8" fill="#fff" stroke="${A2}" stroke-width="1.5"/>
    <line x1="364" y1="46" x2="364" y2="144" stroke="${SOFT}" stroke-width="4" stroke-linecap="round"/>
    <line x1="364" y1="46" x2="364" y2="84" stroke="url(#covB2)" stroke-width="4" stroke-linecap="round"/>
    <circle cx="364" cy="84" r="8" fill="#fff" stroke="${A}" stroke-width="2"/>
    ${[320, 342, 364].map((x) => `<circle cx="${x}" cy="172" r="7" fill="#fff" stroke="${A2}" stroke-width="1.5"/><circle cx="${x}" cy="172" r="2" fill="${A}"/>`).join("")}
    <rect x="312" y="190" width="126" height="68" rx="14" fill="#fff" stroke="${A2}" stroke-width="1.5"/>
    <circle cx="336" cy="218" r="13" fill="none" stroke="${SOFT}" stroke-width="3.5"/>
    <path d="M336 205 A 13 13 0 0 1 348 222" stroke="url(#covB1)" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <circle cx="336" cy="218" r="8" fill="${SOFT}"/>
    <circle cx="336" cy="215.5" r="2.8" fill="${A}"/>
    <path d="M331.5 222.5 c 2 -3.5 7 -3.5 9 0" stroke="${A}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <rect x="356" y="204" width="56" height="7" rx="3.5" fill="${INK}" opacity="0.85"/>
    <rect x="356" y="217" width="44" height="5" rx="2.5" fill="${SOFT}"/>
    <rect x="356" y="227" width="50" height="5" rx="2.5" fill="${SOFT}" opacity="0.6"/>
    ${[356, 364, 372, 380, 388].map((x) => `<circle cx="${x}" cy="245" r="2" fill="${WARN}"/>`).join("")}
    <path d="M148 44 l3 6 l6 3 l-6 3 l-3 6 l-3 -6 l-6 -3 l6 -3 z" fill="${A}"/>
    <path d="M300 262 l2.5 5 l5 2.5 l-5 2.5 l-2.5 5 l-2.5 -5 l-5 -2.5 l5 -2.5 z" fill="${A2}"/>
  `, 460, 300),

  // 1.1 Food-delivery screen: UI parts called out on the left, UX journey on the right
  foodapp: (() => {
    const ui = (y, t, ty) => `<line x1="262" y1="${y}" x2="298" y2="${ty ?? y}" stroke="${A}" stroke-width="1.5"/><circle cx="298" cy="${ty ?? y}" r="3" fill="${A}"/><text x="254" y="${y + 4}" text-anchor="end" font-family="Geist, sans-serif" font-size="11" font-weight="700" fill="${INK}">${t}</text>`;
    const ux = (fy, y, t, n) => `<line x1="462" y1="${fy}" x2="518" y2="${y + 17}" stroke="${OK}" stroke-width="1.5" stroke-dasharray="4 3"/><circle cx="462" cy="${fy}" r="3" fill="${OK}"/><rect x="518" y="${y}" width="212" height="34" rx="10" fill="#fff" stroke="${OK}"/><text x="530" y="${y + 22}" font-family="Geist, sans-serif" font-size="11" font-weight="700" fill="${INK}"><tspan fill="${OK}">${n}</tspan>  ${t}</text>`;
    return svg(`
      <text x="20" y="18" font-family="Geist, sans-serif" font-size="12" font-weight="800" fill="${A}">UI — thứ nhìn thấy và chạm vào</text>
      <text x="518" y="18" font-family="Geist, sans-serif" font-size="12" font-weight="800" fill="${OK}">UX — cả hành trình</text>
      <rect x="290" y="28" width="180" height="262" rx="20" fill="#fff" stroke="${A}" stroke-width="2"/>
      <text x="304" y="50" font-family="Geist, sans-serif" font-size="11" font-weight="800" fill="${INK}">Giao đồ ăn</text>
      <text x="304" y="62" font-family="Geist, sans-serif" font-size="8" fill="${MUTED}">Giao đến: Quận 1 ▾</text>
      <rect x="304" y="70" width="152" height="20" rx="10" fill="${SOFT}" stroke="${A2}"/>
      <text x="314" y="83" font-family="Geist, sans-serif" font-size="8" fill="${MUTED}">Tìm món, quán…</text>
      <rect x="304" y="98" width="40" height="14" rx="7" fill="${A}"/><text x="324" y="108" text-anchor="middle" font-family="Geist, sans-serif" font-size="8" font-weight="700" fill="#fff">Cơm</text>
      <rect x="348" y="98" width="48" height="14" rx="7" fill="${SOFT}"/><text x="372" y="108" text-anchor="middle" font-family="Geist, sans-serif" font-size="8" fill="${INK}">Bún phở</text>
      <rect x="400" y="98" width="48" height="14" rx="7" fill="${SOFT}"/><text x="424" y="108" text-anchor="middle" font-family="Geist, sans-serif" font-size="8" fill="${INK}">Trà sữa</text>
      <rect x="304" y="120" width="152" height="92" rx="10" fill="#fff" stroke="${A2}"/>
      <rect x="310" y="126" width="140" height="42" rx="6" fill="${A2}" opacity="0.55"/>
      <circle cx="380" cy="147" r="10" fill="#fff" opacity="0.9"/>
      <text x="310" y="184" font-family="Geist, sans-serif" font-size="9" font-weight="800" fill="${INK}">Cơm tấm Sài Gòn</text>
      <text x="310" y="198" font-family="Geist, sans-serif" font-size="8" fill="${MUTED}">4.8 ★ · 20 phút · phí ship 15k</text>
      <rect x="304" y="222" width="152" height="24" rx="12" fill="${A}"/>
      <text x="380" y="238" text-anchor="middle" font-family="Geist, sans-serif" font-size="9" font-weight="800" fill="#fff">Đặt món · 45.000đ</text>
      <line x1="290" y1="258" x2="470" y2="258" stroke="${A2}"/>
      ${[322, 360, 398, 436].map((x, i) => `<circle cx="${x}" cy="${274}" r="5" fill="${i === 0 ? A : SOFT}"/>`).join("")}
      ${ui(50, "Thanh trên (header)")}
      ${ui(80, "Ô tìm kiếm")}
      ${ui(105, "Chip lọc")}
      ${ui(166, "Thẻ (card)")}
      ${ui(234, "Nút chính")}
      ${ui(274, "Thanh tab dưới")}
      ${ux(80, 40, "Tìm quán", "1")}
      ${ux(166, 96, "Chọn món", "2")}
      ${ux(234, 152, "Thanh toán", "3")}
      <rect x="518" y="208" width="212" height="34" rx="10" fill="#fff" stroke="${OK}"/><text x="530" y="230" font-family="Geist, sans-serif" font-size="11" font-weight="700" fill="${INK}"><tspan fill="${OK}">4</tspan>  Chờ giao, đánh giá</text>
      ${[74, 130, 186].map((y) => `<path d="M624 ${y} v10 m-4 -4 l4 4 l4 -4" stroke="${OK}" stroke-width="1.5" fill="none"/>`).join("")}
      <text x="518" y="270" font-family="Geist, sans-serif" font-size="10" fill="${MUTED}">Một bước kẹt là cả trải nghiệm hỏng,</text>
      <text x="518" y="284" font-family="Geist, sans-serif" font-size="10" fill="${MUTED}">dù từng màn hình đều đẹp.</text>
    `, 760, 300);
  })(),

  // 1.7 Typefaces: serif vs sans-serif vs monospace, sans highlighted as the UI default
  typefaces: svg(`
    ${[["Georgia, 'Times New Roman', serif", "SERIF · CÓ CHÂN", "Đọc dài, báo, brand sang", false], ["Geist, Inter, Roboto, sans-serif", "SANS-SERIF · KHÔNG CHÂN", "Mặc định cho giao diện", true], ["'Geist Mono', Consolas, monospace", "MONOSPACE · ĐƠN CÁCH", "Mã, số liệu, mã đặt chỗ", false]].map(([ff, l1, l2, hi], i) => `
      ${rect(20 + i * 240, 16, 220, 150, `fill="${hi ? SOFT : "#fff"}" stroke="${hi ? A : A2}" stroke-width="${hi ? 2 : 1}"`)}
      <text x="${130 + i * 240}" y="84" text-anchor="middle" font-family="${ff}" font-size="54" font-weight="700" fill="${INK}">Aa</text>
      <text x="${130 + i * 240}" y="112" text-anchor="middle" font-family="${ff}" font-size="13" fill="${INK}">Đặt lịch khám · 09:30</text>
      <text x="${130 + i * 240}" y="136" text-anchor="middle" font-family="Geist Mono, monospace" font-size="10" font-weight="700" fill="${hi ? A : MUTED}">${l1}</text>
      <text x="${130 + i * 240}" y="154" text-anchor="middle" font-family="Geist, sans-serif" font-size="11" fill="${INK}">${l2}</text>
    `).join("")}
    ${label(20, 190, "UI DÙNG SANS-SERIF. SERIF CHỈ KHI CÓ CHỦ ĐÍCH.")}
  `, 740, 200),

  // 1.7 Tonal palette: one source colour → tones 0–100 → roles
  tonal: (() => {
    const tones = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 100];
    const col = (t) => `hsl(272, 65%, ${t}%)`;
    const x = (t) => 84 + tones.indexOf(t) * 23;
    const roles = [[40, "Primary", "Nút chính, tab đang chọn"], [100, "On primary", "Chữ trên nút chính"], [90, "Primary container", "Chip đang chọn, nền nhấn nhẹ"], [10, "On primary container", "Chữ trên nền nhấn nhẹ"]];
    return svg(`
      <circle cx="42" cy="52" r="20" fill="${col(40)}"/>
      ${text(42, 88, "Màu nguồn", 9, `text-anchor="middle" fill="${MUTED}"`)}
      <path d="M66 52 h12" stroke="${A}" stroke-width="2"/><path d="M74 47 l6 5 l-6 5" stroke="${A}" stroke-width="2" fill="none"/>
      ${tones.map((t) => `<rect x="${x(t)}" y="34" width="22" height="36" fill="${col(t)}" stroke="${t >= 90 ? A2 : "none"}"/><text x="${x(t) + 11}" y="84" text-anchor="middle" font-family="Geist Mono, monospace" font-size="8" fill="${MUTED}">${t}</text>`).join("")}
      ${roles.map(([t, name, use], i) => `
        <line x1="${x(t) + 11}" y1="70" x2="${x(t) + 11}" y2="${96 + i * 4}" stroke="${A2}" stroke-dasharray="2 2"/>
        <rect x="20" y="${100 + i * 32}" width="26" height="20" rx="4" fill="${col(t)}" stroke="${A2}"/>
        ${text(54, 114 + i * 32, name, 11, `font-weight="700"`)}
        ${text(190, 114 + i * 32, use, 10, `fill="${MUTED}"`)}
      `).join("")}
      ${label(20, 232, "MỘT MÀU NGUỒN → 13 SẮC ĐỘ → GÁN VAI TRÒ")}
    `);
  })(),

  // 1.7 Shape scale and elevation
  shape: svg(`
    <defs>
      <filter id="sh1" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#221635" flood-opacity="0.16"/></filter>
      <filter id="sh3" x="-20%" y="-20%" width="140%" height="180%"><feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#221635" flood-opacity="0.22"/></filter>
    </defs>
    ${[[4, "4 · XS"], [8, "8 · S"], [12, "12 · M"], [16, "16 · L"], [28, "28 · XL"]].map(([r, l], i) => `<rect x="${20 + i * 60}" y="24" width="52" height="52" rx="${r}" fill="${SOFT}" stroke="${A}"/><text x="${46 + i * 60}" y="94" text-anchor="middle" font-family="Geist Mono, monospace" font-size="9" font-weight="700" fill="${MUTED}">${l}</text>`).join("")}
    <rect x="320" y="34" width="52" height="32" rx="16" fill="${A}"/><text x="346" y="94" text-anchor="middle" font-family="Geist Mono, monospace" font-size="9" font-weight="700" fill="${MUTED}">FULL</text>
    <rect x="20" y="120" width="150" height="70" rx="12" fill="#fff" stroke="${A2}" filter="url(#sh1)"/>
    ${text(34, 146, "Thẻ", 12, `font-weight="700"`)} ${text(34, 164, "Cấp 1 · bóng mờ, ngắn", 10, `fill="${MUTED}"`)}
    <rect x="200" y="112" width="170" height="86" rx="28" fill="#fff" stroke="${A2}" filter="url(#sh3)"/>
    ${text(218, 142, "Hộp thoại", 12, `font-weight="700"`)} ${text(218, 160, "Cấp 3 · bóng rộng hơn", 10, `fill="${MUTED}"`)} ${text(218, 178, "bo 28", 10, `fill="${MUTED}"`)}
    ${label(20, 226, "BORDER THEO THANG · SHADOW THEO CẤP · MỘT APP MỘT THANG")}
  `, 390, 240),

  // 1.7 Type scale on a real screen (booking app), roles called out on the left, the scale on the right
  typeExample: (() => {
    const call = (y, t, ty) => `<line x1="262" y1="${y}" x2="298" y2="${ty ?? y}" stroke="${A}" stroke-width="1.5"/><circle cx="298" cy="${ty ?? y}" r="3" fill="${A}"/><text x="254" y="${y + 4}" text-anchor="end" font-family="Geist, sans-serif" font-size="11" font-weight="700" fill="${INK}">${t}</text>`;
    const scale = [["Display", 22, "57 · 45 · 36"], ["Headline", 17, "32 · 28 · 24"], ["Title", 14, "22 · 16 · 14"], ["Body", 12, "16 · 14 · 12"], ["Label", 10, "14 · 12 · 11"]];
    return svg(`
      <text x="20" y="18" font-family="Geist, sans-serif" font-size="12" font-weight="800" fill="${A}">Vai trò · cỡ/dòng (sp)</text>
      <text x="518" y="18" font-family="Geist, sans-serif" font-size="12" font-weight="800" fill="${A}">Thang chữ Material 3</text>
      <rect x="290" y="28" width="180" height="262" rx="20" fill="#fff" stroke="${A}" stroke-width="2"/>
      <text x="304" y="52" font-family="Geist, sans-serif" font-size="11" font-weight="700" fill="${INK}">Đặt lịch khám</text>
      <text x="304" y="80" font-family="Geist, sans-serif" font-size="12" font-weight="800" fill="${INK}">Chọn bác sĩ</text>
      <rect x="304" y="90" width="58" height="14" rx="7" fill="${A}"/><text x="333" y="100" text-anchor="middle" font-family="Geist, sans-serif" font-size="7" font-weight="700" fill="#fff">Nội tổng quát</text>
      <rect x="366" y="90" width="28" height="14" rx="7" fill="${SOFT}"/><text x="380" y="100" text-anchor="middle" font-family="Geist, sans-serif" font-size="7" font-weight="700" fill="${INK}">Nhi</text>
      <rect x="304" y="114" width="152" height="90" rx="10" fill="#fff" stroke="${A2}"/>
      <circle cx="324" cy="136" r="12" fill="${A2}"/>
      <text x="342" y="133" font-family="Geist, sans-serif" font-size="8" font-weight="700" fill="${INK}">BS. Nguyễn An</text>
      <text x="342" y="145" font-family="Geist, sans-serif" font-size="7" fill="${INK}">Khám tổng quát · 15 năm</text>
      <text x="312" y="168" font-family="Geist, sans-serif" font-size="7" fill="${INK}">Lịch gần nhất: Thứ Ba, 09:30. Phòng 204,</text>
      <text x="312" y="178" font-family="Geist, sans-serif" font-size="7" fill="${INK}">tầng 2. Mang theo sổ khám cũ nếu có.</text>
      <text x="312" y="195" font-family="Geist, sans-serif" font-size="6" fill="${MUTED}">Còn 3 chỗ hôm nay</text>
      <rect x="304" y="222" width="152" height="24" rx="12" fill="${A}"/>
      <text x="380" y="238" text-anchor="middle" font-family="Geist, sans-serif" font-size="7" font-weight="700" fill="#fff">Đặt lịch</text>
      <text x="380" y="262" text-anchor="middle" font-family="Geist, sans-serif" font-size="5.5" fill="${MUTED}">Miễn phí hủy trước 12 giờ</text>
      ${call(48, "Title Large · 22/28")}
      ${call(76, "Headline Small · 24/32")}
      ${call(97, "Label Large · 14/20")}
      ${call(130, "Title Medium · 16/24")}
      ${call(172, "Body Medium · 14/20")}
      ${call(193, "Body Small · 12/16")}
      ${call(234, "Label Large · 14/20")}
      ${call(260, "Label Small · 11/16")}
      ${scale.map(([name, size, sizes], i) => `<text x="518" y="${56 + i * 40}" font-family="Geist, sans-serif" font-size="${size}" font-weight="${i < 3 ? 700 : 500}" fill="${INK}">${name}</text><text x="640" y="${56 + i * 40}" font-family="Geist Mono, monospace" font-size="10" fill="${MUTED}">${sizes}</text><line x1="518" y1="${64 + i * 40}" x2="730" y2="${64 + i * 40}" stroke="${A2}" stroke-dasharray="2 3"/>`).join("")}
      <text x="518" y="268" font-family="Geist, sans-serif" font-size="10" fill="${MUTED}">Tám chỗ chữ, năm cỡ. Cùng vai trò thì</text>
      <text x="518" y="282" font-family="Geist, sans-serif" font-size="10" fill="${MUTED}">cùng cỡ ở mọi màn.</text>
    `, 760, 300);
  })(),

  // 1.7 Colour roles on the same screen, legend on the right
  colorExample: (() => {
    const P = "#7c3aed", SC = "#e9dff5", OSC = "#463461", ACC = "#0d7a83", ACCC = "#c9ece9", SV = "#f3eef9", OUT = "#9a8fb0";
    const call = (y, t, ty) => `<line x1="262" y1="${y}" x2="298" y2="${ty ?? y}" stroke="${A}" stroke-width="1.5"/><circle cx="298" cy="${ty ?? y}" r="3" fill="${A}"/><text x="254" y="${y + 4}" text-anchor="end" font-family="Geist, sans-serif" font-size="11" font-weight="700" fill="${INK}">${t}</text>`;
    const legend = [
      [P, "Primary · màu chủ", "nút chính, tab đang chọn"],
      [SC, "Secondary · màu phụ", "chip lọc, nút phụ"],
      [ACC, "Accent · điểm nhấn", "badge, khuyến mãi · dưới 10%"],
      [INK, "Text · chữ", "nhạt dần theo vai trò"],
      [SV, "Background · nền", "nền màn, nền thẻ, viền"],
      [ERR, "State · trạng thái", "đỏ lỗi · xanh ok · cam chờ"]
    ];
    return svg(`
      <text x="20" y="18" font-family="Geist, sans-serif" font-size="12" font-weight="800" fill="${A}">Vai trò màu trên màn hình</text>
      <text x="518" y="18" font-family="Geist, sans-serif" font-size="12" font-weight="800" fill="${A}">6 nhóm màu</text>
      <rect x="290" y="28" width="180" height="262" rx="20" fill="#fff" stroke="${A}" stroke-width="2"/>
      <text x="304" y="52" font-family="Geist, sans-serif" font-size="11" font-weight="700" fill="${INK}">Xác nhận lịch</text>
      <rect x="304" y="62" width="152" height="72" rx="10" fill="${SV}"/>
      <text x="314" y="80" font-family="Geist, sans-serif" font-size="8" font-weight="700" fill="${INK}">BS. Nguyễn An · Thứ Ba 09:30</text>
      <rect x="314" y="90" width="66" height="14" rx="7" fill="${SC}"/><text x="347" y="100" text-anchor="middle" font-family="Geist, sans-serif" font-size="7" font-weight="700" fill="${OSC}">Nội tổng quát</text>
      <rect x="314" y="110" width="88" height="14" rx="7" fill="${ACCC}"/><text x="358" y="120" text-anchor="middle" font-family="Geist, sans-serif" font-size="7" font-weight="700" fill="${ACC}">−10% khung giờ sáng</text>
      <text x="304" y="156" font-family="Geist, sans-serif" font-size="7" fill="${MUTED}">Email nhận nhắc lịch</text>
      <rect x="304" y="162" width="152" height="22" rx="6" fill="#fff" stroke="${ERR}" stroke-width="1.5"/>
      <text x="312" y="176" font-family="Geist, sans-serif" font-size="8" fill="${INK}">an.nguyen@</text>
      <text x="304" y="196" font-family="Geist, sans-serif" font-size="6.5" fill="${ERR}">Email chưa đúng định dạng</text>
      <rect x="304" y="212" width="152" height="22" rx="11" fill="${P}"/>
      <text x="380" y="226" text-anchor="middle" font-family="Geist, sans-serif" font-size="7.5" font-weight="700" fill="#fff">Xác nhận đặt lịch</text>
      <rect x="304" y="242" width="152" height="20" rx="10" fill="#fff" stroke="${OUT}"/>
      <text x="380" y="255" text-anchor="middle" font-family="Geist, sans-serif" font-size="7" font-weight="700" fill="${OSC}">Gọi phòng khám</text>
      ${call(48, "Text · chữ chính")}
      ${call(70, "Background · nền thẻ")}
      ${call(97, "Secondary · chip lọc")}
      ${call(117, "Accent · nhãn khuyến mãi")}
      ${call(173, "State · báo lỗi")}
      ${call(223, "Primary · nút chính")}
      ${legend.map(([c, name, use], i) => `<rect x="518" y="${34 + i * 34}" width="22" height="16" rx="4" fill="${c}" stroke="${A2}"/><text x="550" y="${46 + i * 34}" font-family="Geist, sans-serif" font-size="10.5" font-weight="700" fill="${INK}">${name}</text><text x="550" y="${58 + i * 34}" font-family="Geist, sans-serif" font-size="9.5" fill="${MUTED}">${use}</text>`).join("")}
      <text x="518" y="282" font-family="Geist, sans-serif" font-size="10" fill="${MUTED}">Một màu nguồn sinh ra Primary, Secondary và nền.</text>
      <text x="518" y="294" font-family="Geist, sans-serif" font-size="10" fill="${MUTED}">Accent là màu đối lập. State cố định ở mọi app.</text>
    `, 760, 300);
  })(),

  // 1.6 Platform conventions: phone, web page, dashboard, each with its own navigation habits
  platforms: svg(`
    <rect x="20" y="30" width="80" height="170" rx="14" fill="#fff" stroke="${A}" stroke-width="2"/>
    <rect x="30" y="44" width="60" height="10" rx="5" fill="${SOFT}"/>
    <rect x="30" y="62" width="60" height="70" rx="8" fill="${SOFT2}" stroke="${A2}"/>
    <rect x="30" y="140" width="60" height="16" rx="8" fill="${A}"/>
    <line x1="20" y1="170" x2="100" y2="170" stroke="${A2}"/>
    ${[36, 52, 68, 84].map((x, i) => `<circle cx="${x}" cy="185" r="4" fill="${i === 0 ? A : SOFT}"/>`).join("")}
    ${label(20, 222, "MOBILE")}
    <rect x="118" y="30" width="118" height="170" rx="10" fill="#fff" stroke="${A}" stroke-width="2"/>
    <rect x="118" y="30" width="118" height="22" rx="10" fill="${SOFT}"/>
    ${[126, 150, 174].map((x) => `<rect x="${x}" y="37" width="18" height="8" rx="4" fill="${A2}"/>`).join("")}
    <rect x="204" y="36" width="24" height="10" rx="5" fill="${A}"/>
    ${Array.from({ length: 6 }, (_, i) => `<rect x="${126 + i * 17}" y="62" width="13" height="128" fill="${SOFT2}"/>`).join("")}
    <rect x="126" y="66" width="102" height="34" rx="6" fill="${SOFT}" stroke="${A2}"/>
    <rect x="126" y="108" width="48" height="60" rx="6" fill="#fff" stroke="${A2}"/>
    <rect x="180" y="108" width="48" height="60" rx="6" fill="#fff" stroke="${A2}"/>
    ${label(118, 222, "WEB · 12 CỘT")}
    <rect x="254" y="30" width="96" height="170" rx="10" fill="#fff" stroke="${A}" stroke-width="2"/>
    <rect x="254" y="30" width="26" height="170" rx="10" fill="${SOFT}"/>
    ${[48, 64, 80, 96].map((y, i) => `<rect x="260" y="${y}" width="14" height="8" rx="4" fill="${i === 1 ? A : A2}"/>`).join("")}
    ${Array.from({ length: 7 }, (_, i) => `<rect x="288" y="${44 + i * 20}" width="54" height="12" rx="3" fill="${i === 0 ? SOFT : SOFT2}" stroke="${A2}" stroke-width="0.6"/>`).join("")}
    ${label(254, 222, "DASHBOARD")}
  `),

  // ---- Process step boards (wide figures, 760×300) ----
  // shared mini helpers for the boards
  ...(() => {
    const T = (x, y, t, size = 9, extra = "") => `<text x="${x}" y="${y}" font-family="Geist, sans-serif" font-size="${size}" fill="${INK}" ${extra}>${t}</text>`;
    const H = (x, y, t) => `<text x="${x}" y="${y}" font-family="Geist, sans-serif" font-size="12" font-weight="800" fill="${A}">${t}</text>`;
    const panel = (x, y, w, h, title) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="#fff" stroke="${A2}"/>${title ? H(x + 2, y - 6, title) : ""}`;
    const board = (body) => svg(`<g transform="translate(0,12)">${body}</g>`, 760, 312);
    const sticky = (x, y, w, h, t, fill = "#fdf3c4") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="${fill}" stroke="rgba(0,0,0,0.06)"/><foreignObject x="${x + 5}" y="${y + 4}" width="${w - 10}" height="${h - 8}"><div xmlns="http://www.w3.org/1999/xhtml" style="font:8.5px/1.25 Geist,sans-serif;color:${INK}">${t}</div></foreignObject>`;
    const arrow = (x1, y1, x2, y2, color = A) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="1.5"/><path d="M${x2 - 6} ${y2 - 4} L${x2} ${y2} L${x2 - 6} ${y2 + 4}" stroke="${color}" stroke-width="1.5" fill="none"/>`;
    const box = (x, y, w, h, t, fill = "#fff", stroke = A, bold = false, color = INK) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="${fill}" stroke="${stroke}"/><text x="${x + w / 2}" y="${y + h / 2 + 3.5}" text-anchor="middle" font-family="Geist, sans-serif" font-size="9" font-weight="${bold ? 700 : 500}" fill="${color}">${t}</text>`;
    const tag = (x, y, t, fill = A, color = "#fff") => `<rect x="${x}" y="${y}" width="${t.length * 5.2 + 12}" height="14" rx="7" fill="${fill}"/><text x="${x + (t.length * 5.2 + 12) / 2}" y="${y + 10}" text-anchor="middle" font-family="Geist, sans-serif" font-size="8" font-weight="700" fill="${color}">${t}</text>`;
    const cap = (t) => `<text x="20" y="292" font-family="Geist, sans-serif" font-size="10" fill="${MUTED}">${t}</text>`;

    return {
      // Bước 1 · Brief: client brief → 4-column board → "để làm gì?" chain
      briefBoard: board(`
        ${panel(20, 20, 150, 200, "Client Brief")}
        ${[40, 56, 72, 88, 104, 120, 136].map((y, i) => `<rect x="32" y="${y}" width="${[120, 100, 126, 90, 110, 70, 100][i]}" height="7" rx="3.5" fill="${[SOFT, SOFT, "#fde68a", SOFT, "#fecaca", SOFT, SOFT][i]}"/>`).join("")}
        ${T(32, 175, "“Muốn thanh toán trước.", 8.5, `font-style="italic"`)}
        ${T(32, 187, "Lễ tân quá tải, hay trùng giờ.", 8.5, `font-style="italic"`)}
        ${T(32, 199, "Làm trong 3 tháng.”", 8.5, `font-style="italic"`)}
        ${arrow(172, 120, 196, 120)}
        ${panel(200, 20, 330, 200, "Bảng phân tích 4 cột")}
        ${[["Đã có", "#ddd6fe"], ["Còn thiếu", "#e0e7ff"], ["Chưa rõ", "#fde68a"], ["Rủi ro", "#fecaca"]].map(([t, c], i) => `<rect x="${212 + i * 79}" y="32" width="72" height="16" rx="4" fill="${c}"/><text x="${248 + i * 79}" y="43" text-anchor="middle" font-family="Geist, sans-serif" font-size="8.5" font-weight="700" fill="${INK}">${t}</text>`).join("")}
        ${sticky(212, 54, 72, 40, "Đặt lịch, nhắc lịch, thanh toán trước", "#f5f3ff")}
        ${sticky(212, 100, 72, 34, "Deadline 3 tháng", "#f5f3ff")}
        ${sticky(291, 54, 72, 40, "Bệnh nhân là ai? Bao nhiêu bác sĩ?", "#eef2ff")}
        ${sticky(291, 100, 72, 40, "Lịch đang lưu ở đâu?", "#eef2ff")}
        ${sticky(370, 54, 72, 46, "'Thanh toán trước' là cọc hay trả đủ?", "#fef9c3")}
        ${sticky(370, 106, 72, 34, "'Gọn như app ngân hàng'?", "#fef9c3")}
        ${sticky(449, 54, 72, 46, "Chưa có mục tiêu đo được", "#fee2e2")}
        ${sticky(449, 106, 72, 40, "Chưa có quy tắc hủy", "#fee2e2")}
        ${T(212, 165, "7 thành phần:", 8.5, `font-weight="700"`)}
        ${[["Business model", 212, 172], ["Goal", 303, 172], ["Người dùng", 342, 172], ["Vấn đề", 412, 172], ["Thị trường", 212, 190], ["Platform", 282, 190], ["Ràng buộc", 342, 190]].map(([t, x, y]) => tag(x, y, t, t === "Goal" || t === "Vấn đề" ? "#fde68a" : SOFT, INK)).join("")}
        ${T(212, 214, "Ô vàng = còn trống → giả thuyết, việc cho bước Nghiên cứu", 8.5, `fill="${MUTED}"`)}
        ${panel(550, 20, 190, 200, "Hỏi 'để làm gì?'")}
        ${box(562, 40, 166, 26, "Muốn thanh toán trước", "#fff", A2)}
        ${arrow(645, 66, 645, 80)} ${T(652, 76, "để làm gì?", 8, `fill="${MUTED}"`)}
        ${box(562, 82, 166, 26, "Để bệnh nhân không bỏ lịch", "#fff", A2)}
        ${arrow(645, 108, 645, 122)} ${T(652, 118, "để làm gì?", 8, `fill="${MUTED}"`)}
        ${box(562, 124, 166, 26, "Để giờ khám không trống", "#fff", A2)}
        ${arrow(645, 150, 645, 164)}
        ${box(562, 166, 166, 30, "Nhu cầu thật: giảm bỏ lịch", SOFT, A, true, A)}
        ${T(562, 212, "Cách khác: nhắc lịch, đặt cọc, danh sách chờ", 8.5, `fill="${MUTED}"`)}
        ${cap("Đầu ra bước 1: bảng phân tích brief và bảng yêu cầu ↔ nhu cầu thật.")}
      `),

      // Bước 2 · Nghiên cứu thị trường: competitor table, interview notes, gap matrix
      marketBoard: board(`
        ${panel(20, 20, 300, 200, "Đối thủ và pricing")}
        ${[["", "Giá", "Bước đặt", "Nhắc lịch", "Đổi lịch"], ["App A (direct)", "99k/tháng", "6", "1 tin, trước 1 ngày", "Gọi"], ["App B (indirect)", "Miễn phí", "4", "1 tin, trước 1 ngày", "In-app"], ["Zalo / gọi điện", "0", "gọi 2–3 lần", "Không", "Gọi lại"]].map((row, r) => row.map((c, i) => `<text x="${32 + [0, 88, 138, 186, 254][i]}" y="${44 + r * 22}" font-family="Geist, sans-serif" font-size="8.5" font-weight="${r === 0 || i === 0 ? 700 : 400}" fill="${r === 0 ? MUTED : INK}">${c}</text>`).join("") + (r > 0 ? `<line x1="30" y1="${50 + r * 22}" x2="310" y2="${50 + r * 22}" stroke="${SOFT}"/>` : "")).join("")}
        ${T(32, 138, "Teardown App A · flow đặt lịch: 6 bước, 2 lần nhập lại thông tin,", 8.5)}
        ${T(32, 150, "hết chỗ mới báo ở bước cuối. Pattern: calendar + list.", 8.5)}
        ${tag(32, 164, "substitute mới là đối thủ thật", "#fde68a", INK)}
        ${T(32, 198, "Substitute = thứ người dùng đang thật sự dùng hôm nay", 8.5, `fill="${MUTED}"`)}
        ${panel(340, 20, 170, 200, "Phỏng vấn 3–6 người")}
        ${sticky(352, 36, 146, 40, "P1: “Hôm đó tôi quên mất, đến chiều mới nhớ.”")}
        ${sticky(352, 82, 146, 40, "P2: “Tin nhắn hôm trước, sáng hôm sau đã quên.”")}
        ${sticky(352, 128, 146, 40, "P4: “Muốn đổi giờ mà phải gọi, thôi bỏ luôn.”")}
        ${T(352, 190, "5/8 người bỏ lịch vì quên", 9, `font-weight="700"`)}
        ${T(352, 204, "Finding có số, không phải cảm nhận", 8.5, `fill="${MUTED}"`)}
        ${panel(530, 20, 210, 200, "Market Gap Matrix")}
        <line x1="600" y1="40" x2="600" y2="200" stroke="${A2}"/><line x1="545" y1="120" x2="730" y2="120" stroke="${A2}"/>
        ${T(548, 36, "Đối thủ giải kém", 7.5, `fill="${MUTED}"`)} ${T(608, 36, "Đối thủ giải tốt", 7.5, `fill="${MUTED}"`)}
        <text x="540" y="80" font-family="Geist, sans-serif" font-size="7.5" fill="${MUTED}" transform="rotate(-90 540 80)">Nhu cầu cao</text>
        <text x="540" y="165" font-family="Geist, sans-serif" font-size="7.5" fill="${MUTED}" transform="rotate(-90 540 165)">Nhu cầu thấp</text>
        <rect x="548" y="46" width="48" height="70" rx="6" fill="${SOFT}" stroke="${A}" stroke-width="1.5"/>
        ${T(553, 62, "Nhắc đúng", 8, `font-weight="700" fill="${A}"`)} ${T(553, 73, "lúc, đổi", 8, `font-weight="700" fill="${A}"`)} ${T(553, 84, "lịch 1 chạm", 8, `font-weight="700" fill="${A}"`)}
        ${T(553, 104, "← cơ hội", 8, `fill="${A}"`)}
        ${sticky(606, 50, 66, 30, "Tìm và đặt lịch", "#f5f3ff")} ${sticky(606, 86, 66, 26, "Thanh toán", "#f5f3ff")}
        ${sticky(548, 130, 48, 30, "Điểm thưởng", "#f5f3ff")} ${sticky(606, 130, 66, 26, "Chat", "#f5f3ff")}
        ${cap("Đầu ra bước 2: Market Research, ghi chép phỏng vấn, Market Gap Matrix.")}
      `),

      // Bước 3 · Khách hàng và điểm khác biệt: one-page Product Direction + "vì sao chọn bạn"
      directionCard: board(`
        ${panel(20, 20, 440, 250, "Product Direction · một trang")}
        ${[["ICP", "Bệnh nhân khám định kỳ, 30–55 tuổi, đặt lịch qua điện thoại, dùng Zalo hằng ngày."], ["Problem Statement", "Bệnh nhân định kỳ cần được nhắc đúng lúc, vì họ quên chứ không ngại đi; hiện chỉ có một tin nhắn trước một ngày, dẫn đến bỏ lịch và giờ trống."], ["Giá dự kiến", "Miễn phí cho bệnh nhân; phòng khám trả theo tháng, thấp hơn App A."], ["USP", "Nhắc đúng buổi sáng hôm khám qua Zalo, đổi lịch một chạm, không cần gọi."]].map(([k, v], i) => `${tag(32, 36 + i * 54, k, i === 3 ? A : SOFT, i === 3 ? "#fff" : INK)}<foreignObject x="32" y="${52 + i * 54}" width="416" height="44"><div xmlns="http://www.w3.org/1999/xhtml" style="font:9.5px/1.35 Geist,sans-serif;color:${INK}">${v}</div></foreignObject>`).join("")}
        ${T(32, 262, "Mỗi câu trỏ về một dòng phỏng vấn hoặc benchmark", 8.5, `fill="${MUTED}"`)}
        ${panel(480, 20, 260, 250, "Vì sao chọn bạn")}
        ${T(492, 44, "Đối thủ", 9, `font-weight="700" fill="${MUTED}"`)} ${T(620, 44, "Bạn", 9, `font-weight="700" fill="${A}"`)}
        <line x1="612" y1="34" x2="612" y2="250" stroke="${A2}" stroke-dasharray="3 3"/>
        ${[["1 tin nhắn trước 1 ngày", "Nhắc sáng hôm khám"], ["Đổi lịch phải gọi", "Đổi lịch 1 chạm"], ["Nhắc qua SMS", "Qua Zalo đang mở"], ["6 bước đặt", "3 bước đặt"]].map(([a, b], i) => `${box(492, 54 + i * 44, 110, 32, a, "#fff", A2)}${box(620, 54 + i * 44, 110, 32, b, SOFT, A, true, A)}`).join("")}
        ${T(492, 246, "Khác biệt phải nối được với ô trống trong Gap Matrix", 8.5, `fill="${MUTED}"`)}
        ${cap("Đầu ra bước 3: Product Direction (ICP, Problem Statement, giá, USP).")}
      `),

      // Bước 4 · Mô tả sản phẩm: user story → feature inventory → flow → screen inventory
      specBoard: board(`
        ${panel(20, 20, 170, 250, "User story")}
        ${sticky(32, 38, 146, 52, "Là <b>bệnh nhân</b>, tôi muốn <b>đặt lịch trong 3 bước</b>, để <b>không phải gọi điện</b>.", "#f5f3ff")}
        ${sticky(32, 98, 146, 52, "Là <b>bệnh nhân</b>, tôi muốn <b>được nhắc sáng hôm khám</b>, để <b>không quên</b>.", "#f5f3ff")}
        ${sticky(32, 158, 146, 52, "Là <b>lễ tân</b>, tôi muốn <b>thấy lịch cả ngày</b>, để <b>không trùng giờ</b>.", "#f5f3ff")}
        ${arrow(192, 145, 206, 145)}
        ${panel(210, 20, 190, 250, "Feature Inventory")}
        ${[["Tìm và đặt lịch", "MVP"], ["Nhắc sáng hôm khám", "MVP"], ["Đổi lịch 1 chạm", "MVP"], ["Lịch của tôi", "MVP"], ["Admin xem lịch", "MVP"], ["Thanh toán trước", "Phase 2"], ["Danh sách chờ", "Phase 2"], ["Điểm thưởng", "Not now"]].map(([f, t], i) => `${T(222, 46 + i * 24, f, 9)}${tag(322, 36 + i * 24, t, t === "MVP" ? A : t === "Phase 2" ? "#fde68a" : "#e5e7eb", t === "MVP" ? "#fff" : INK)}`).join("")}
        ${T(222, 254, "Mỗi dòng MVP trỏ về Problem Statement", 8, `fill="${MUTED}"`)}
        ${arrow(402, 145, 416, 145)}
        ${panel(420, 20, 320, 250, "Flow và Screen Inventory")}
        ${box(432, 40, 62, 24, "Tìm", "#fff", A2)} ${arrow(494, 52, 508, 52)}
        ${box(508, 40, 62, 24, "Chọn giờ", "#fff", A2)} ${arrow(570, 52, 584, 52)}
        <path d="M614 36 L644 52 L614 68 L584 52 Z" fill="#fff" stroke="${A}"/><text x="614" y="55" text-anchor="middle" font-family="Geist, sans-serif" font-size="7.5" fill="${INK}">Còn chỗ?</text>
        ${arrow(644, 52, 664, 52)} ${box(664, 40, 66, 24, "Xác nhận", SOFT, A, true, A)}
        ${arrow(614, 68, 614, 84)} ${box(584, 84, 60, 22, "Gợi ý giờ kế", "#fee2e2", ERR, false, ERR)} ${T(650, 98, "nhánh lỗi", 7.5, `fill="${MUTED}"`)}
        ${[["Màn", "Role", "Trạng thái"], ["Tìm · kết quả", "Khách", "loading · empty · results"], ["Đặt lịch", "Khách", "default · hết chỗ · mất mạng"], ["Xác nhận", "Khách", "chờ · thành công · lỗi"], ["Lịch của tôi", "Khách", "sắp tới · đã qua · trống"], ["Lịch ngày", "Lễ tân", "bảng · đang lọc · trống"]].map((row, r) => row.map((c, i) => `<text x="${432 + [0, 90, 140][i]}" y="${132 + r * 20}" font-family="Geist, sans-serif" font-size="8.5" font-weight="${r === 0 ? 700 : 400}" fill="${r === 0 ? MUTED : INK}">${c}</text>`).join("") + (r > 0 ? `<line x1="430" y1="${138 + r * 20}" x2="730" y2="${138 + r * 20}" stroke="${SOFT}"/>` : "")).join("")}
        ${T(432, 258, "Màn chỉ có một trạng thái là màn chưa nghĩ kỹ", 8, `fill="${MUTED}"`)}
        ${cap("Đầu ra bước 4: Product Spec — user story, feature inventory, flow, screen inventory.")}
      `),

      // Bước 5–6 · Thiết kế và Demo: wireframe → design system → prototype → demo
      designBoard: board(`
        ${panel(20, 20, 160, 250, "Wireframe")}
        <rect x="40" y="40" width="120" height="200" rx="12" fill="#fff" stroke="${MUTED}"/>
        ${[[50, 52, 60, 10], [50, 70, 100, 30], [50, 108, 100, 44], [50, 160, 100, 44], [50, 214, 100, 18]].map(([x, y, w, h]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="#e5e7eb"/>`).join("")}
        ${T(58, 94, "Chọn ngày", 7.5, `fill="${MUTED}"`)} ${T(58, 134, "Khung giờ", 7.5, `fill="${MUTED}"`)} ${T(58, 186, "Tóm tắt", 7.5, `fill="${MUTED}"`)} ${T(78, 226, "Đặt lịch", 7.5, `fill="${MUTED}"`)}
        ${arrow(182, 145, 196, 145)}
        ${panel(200, 20, 170, 250, "Design System")}
        ${T(212, 42, "Token", 8.5, `font-weight="700"`)}
        ${["#7c3aed", "#e9d5ff", "#221635", "#f3eef9", "#3e7c59", "#c93b3b"].map((c, i) => `<rect x="${212 + i * 24}" y="48" width="20" height="16" rx="4" fill="${c}" stroke="${A2}"/>`).join("")}
        ${T(212, 78, "primary · container · on-surface · surface", 7, `fill="${MUTED}"`)}
        ${T(212, 100, "Chữ", 8.5, `font-weight="700"`)} ${T(212, 116, "Headline 24 · Title 16 · Body 14 · Label 14", 7.5, `fill="${MUTED}"`)}
        ${T(212, 138, "Component · Button", 8.5, `font-weight="700"`)}
        ${box(212, 146, 68, 22, "Primary", A, A, true, "#fff")} ${box(288, 146, 68, 22, "Secondary", "#fff", A, true, A)}
        ${box(212, 174, 68, 22, "Disabled", "#e5e7eb", "#e5e7eb", true, MUTED)} ${box(288, 174, 68, 22, "Loading…", A2, A2, true, INK)}
        ${T(212, 216, "variant × state = 1 component", 7.5, `fill="${MUTED}"`)}
        ${T(212, 232, "auto layout = flexbox", 7.5, `fill="${MUTED}"`)}
        ${arrow(372, 145, 386, 145)}
        ${panel(390, 20, 170, 250, "Prototype")}
        <rect x="410" y="40" width="120" height="200" rx="12" fill="#fff" stroke="${A}" stroke-width="1.5"/>
        ${T(420, 58, "Đặt lịch khám", 8.5, `font-weight="800"`)}
        ${[0, 1, 2, 3, 4].map((i) => `<rect x="${420 + i * 20}" y="66" width="16" height="16" rx="4" fill="${i === 2 ? A : SOFT}"/>`).join("")}
        ${[[0, 0, SOFT], [1, 0, A], [2, 0, "#e5e7eb"], [0, 1, SOFT], [1, 1, SOFT], [2, 1, SOFT]].map(([c, r, f]) => `<rect x="${420 + c * 34}" y="${92 + r * 24}" width="30" height="18" rx="4" fill="${f}"/>`).join("")}
        <rect x="420" y="150" width="100" height="34" rx="6" fill="${SOFT}"/> ${T(426, 164, "Thứ Ba 09:30", 7.5, `font-weight="700"`)} ${T(426, 176, "BS. Nguyễn An · 200.000đ", 7)}
        <rect x="420" y="208" width="100" height="20" rx="10" fill="${A}"/><text x="470" y="221" text-anchor="middle" font-family="Geist, sans-serif" font-size="8" font-weight="700" fill="#fff">Xác nhận</text>
        <path d="M520 218 C 545 218, 545 130, 530 100" stroke="${OK}" stroke-width="1.5" fill="none" stroke-dasharray="3 3"/>
        ${T(414, 256, "nút → màn Thành công", 7.5, `fill="${OK}"`)}
        ${arrow(562, 145, 576, 145)}
        ${panel(580, 20, 160, 250, "Present 5 phút")}
        ${[["Vấn đề", "1 câu"], ["Người dùng", "insight có số"], ["Giải pháp", "MVP"], ["Flow", "kể cả nhánh lỗi"], ["Bấm thử", "prototype"]].map(([k, v], i) => `${box(592, 38 + i * 30, 22, 22, String(i + 1), A, A, true, "#fff")}${T(620, 48 + i * 30, k, 9, `font-weight="700"`)}${T(620, 58 + i * 30, v, 7.5, `fill="${MUTED}"`)}`).join("")}
        ${sticky(592, 196, 136, 34, "Feedback: “Màn này để làm gì?” “Bấm vào đâu trước?”")}
        ${T(592, 246, "Ghi lại, không tranh luận", 8, `fill="${MUTED}"`)}
        ${cap("Đầu ra bước 5–6: prototype chạy được, bản present, file Ready for Dev.")}
      `)
    };
  })(),

  // 1.5 Design process map in the deck's own language: one purple hue ramping up, white line-art nodes
  ...(() => {
    const steps = [
      ["Brief", "Bảng phân tích brief, nhu cầu thật"],
      ["Nghiên cứu thị trường", "Market Research, Gap Matrix"],
      ["Khách hàng và khác biệt", "Product Direction: ICP, USP"],
      ["Mô tả sản phẩm", "Product Spec: story, flow, màn"],
      ["Thiết kế", "Wireframe → design system → prototype"],
      ["Present", "Trình bày, feedback, Ready for Dev"]
    ];
    const tones = [90, 82, 73, 64, 55, 46].map((l) => `hsl(272, 65%, ${l}%)`);
    const st = `fill="none" stroke="${A}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"`;
    const icons = [
      `<rect x="-8" y="-11" width="16" height="22" rx="3" ${st}/><line x1="-4" y1="-4" x2="4" y2="-4" ${st}/><line x1="-4" y1="1" x2="4" y2="1" ${st}/><line x1="-4" y1="6" x2="0" y2="6" ${st}/>`,
      `<circle cx="-3" cy="-3" r="7.5" ${st}/><line x1="3" y1="3" x2="10" y2="10" ${st}/>`,
      `<circle cx="-2" cy="-6" r="5" ${st}/><path d="M-12 11 c0 -7 5 -10 10 -10 s10 3 10 10" ${st}/><path d="M9 -11 l1.6 3.2 3.4 .4 -2.5 2.4 .7 3.4 -3.2 -1.7 -3.2 1.7 .7 -3.4 -2.5 -2.4 3.4 -.4z" ${st}/>`,
      `<rect x="-11" y="-10" width="6" height="6" rx="1.5" ${st}/><rect x="-11" y="2" width="6" height="6" rx="1.5" ${st}/><line x1="-1" y1="-7" x2="10" y2="-7" ${st}/><line x1="-1" y1="5" x2="10" y2="5" ${st}/><path d="M-10 -7 l1.6 1.6 3 -3.2" ${st}/>`,
      `<rect x="-11" y="-9" width="22" height="15" rx="2.5" ${st}/><line x1="-5" y1="11" x2="5" y2="11" ${st}/><line x1="0" y1="6" x2="0" y2="11" ${st}/><path d="M-4 1 l6 -6 2.5 2.5 -6 6 -3.2 .7z" ${st}/>`,
      `<rect x="-11" y="-10" width="22" height="14" rx="2" ${st}/><line x1="0" y1="4" x2="0" y2="9" ${st}/><line x1="-5" y1="12" x2="5" y2="12" ${st}/><path d="M-2.5 -7 l6.5 4 -6.5 4z" ${st}/>`
    ];
    const x0 = 40, segW = 113.3, barY = 140, barH = 18;
    const build = (active) => {
    const dim = active.length > 0;
    const isOn = (i) => active.includes(i);
    const body = steps.map(([name, out], i) => {
      const on = isOn(i), faded = dim && !on;
      const inkC = faded ? "#b8b0c6" : INK, mutedC = faded ? "#c9c2d6" : MUTED, ringC = faded ? A2 : A;
      const cx = x0 + segW * (i + 0.5);
      const above = i % 2 === 0;
      const cy = above ? 66 : 240;
      const link = `<line x1="${cx}" y1="${above ? cy + 30 : barY + barH}" x2="${cx}" y2="${above ? barY : cy - 30}" stroke="${A2}" stroke-width="1.5" stroke-dasharray="3 3"/>`;
      const node = on
        ? `<circle cx="${cx}" cy="${cy}" r="36" fill="${SOFT}"/><circle cx="${cx}" cy="${cy}" r="30" fill="${A}"/><g transform="translate(${cx} ${cy})">${icons[i].replace(/stroke="#9333ea"/g, 'stroke="#fff"')}</g><rect x="${cx - 30}" y="${above ? cy - 60 : cy + 40}" width="60" height="16" rx="8" fill="${INK}"/><text x="${cx}" y="${above ? cy - 49 : cy + 51}" text-anchor="middle" font-family="Geist, sans-serif" font-size="8.5" font-weight="700" fill="#fff">Bạn ở đây</text>`
        : `<circle cx="${cx}" cy="${cy}" r="30" fill="#fff" stroke="${ringC}" stroke-width="2"/><circle cx="${cx}" cy="${cy}" r="24" fill="${SOFT2}"/><g transform="translate(${cx} ${cy})" opacity="${faded ? 0.45 : 1}">${icons[i]}</g>`;
      const tick = `<circle cx="${cx}" cy="${barY + barH / 2}" r="${on ? 5 : 4}" fill="${on ? A : "#fff"}" stroke="${on ? "#fff" : ringC}" stroke-width="1.5"/>`;
      const label = `<text x="${cx}" y="${above ? barY + 38 : barY - 12}" text-anchor="middle" font-family="Geist Mono, monospace" font-size="9" font-weight="700" fill="${faded ? A2 : A}">BƯỚC 0${i + 1}</text>`;
      const nameY = above ? barY + 56 : 58;
      const title = `<foreignObject x="${cx - 56}" y="${nameY - 12}" width="112" height="30"><div xmlns="http://www.w3.org/1999/xhtml" style="font:700 10.5px/1.2 Geist,sans-serif;color:${inkC};text-align:center">${name}</div></foreignObject>`;
      const outY = above ? nameY + 20 : 80;
      const output = `<foreignObject x="${cx - 56}" y="${outY}" width="112" height="30"><div xmlns="http://www.w3.org/1999/xhtml" style="font:8.5px/1.25 Geist,sans-serif;color:${mutedC};text-align:center">${out}</div></foreignObject>`;
      return link + node + tick + label + title + output;
    }).join("");
    const clipId = `barclip-${active.join("") || "all"}`;
    return svg(`
      <clipPath id="${clipId}"><rect x="${x0}" y="${barY}" width="${segW * 6}" height="${barH}" rx="9"/></clipPath>
      <g clip-path="url(#${clipId})">${tones.map((c, i) => `<rect x="${x0 + segW * i}" y="${barY}" width="${segW + 0.5}" height="${barH}" fill="${dim && !isOn(i) ? SOFT : c}"/>`).join("")}</g>
      <rect x="${x0}" y="${barY}" width="${segW * 6}" height="${barH}" rx="9" fill="none" stroke="${A2}"/>
      ${body}
    `, 760, 300);
    };
    return { processMap: build([]), processMap1: build([0]), processMap2: build([1]), processMap3: build([2]), processMap4: build([3]), processMap5: build([4, 5]) };
  })(),

  // 1.5 Layout: 12-column grid with content blocks snapping to it
  grid: svg(`
    ${Array.from({ length: 12 }, (_, i) => `<rect x="${20 + i * 27}" y="20" width="21" height="200" fill="${SOFT2}"/>`).join("")}
    ${rect(20, 28, 320, 40, `fill="${SOFT}" stroke="${A}"`)}
    ${rect(20, 84, 156, 90, `fill="${SOFT}" stroke="${A}"`)}
    ${rect(184, 84, 156, 90, `fill="${SOFT}" stroke="${A}"`)}
    ${rect(20, 190, 102, 28, `fill="${A2}" stroke="${A}"`)}
    ${label(24, 15, "12 CỘT · 4PT")}
    ${text(30, 53, "Tiêu đề bám cột", 13, `font-weight="700"`)}
    ${text(30, 110, "Khối 6 cột", 12)} ${text(194, 110, "Khối 6 cột", 12)}
    <line x1="176" y1="84" x2="184" y2="84" stroke="${A}" stroke-width="2"/>
    ${label(182, 80, "16")}
  `),

  // 1.6 Hierarchy: big, medium, small reads
  hierarchy: svg(`
    ${rect(20, 20, 320, 200, `fill="${SOFT2}" stroke="${A2}"`)}
    <text x="40" y="78" font-family="Geist, sans-serif" font-size="34" font-weight="800" fill="${INK}">Đọc thứ nhất</text>
    <text x="40" y="112" font-family="Geist, sans-serif" font-size="18" font-weight="600" fill="${INK}">Đọc thứ hai</text>
    <text x="40" y="140" font-family="Geist, sans-serif" font-size="13" fill="${MUTED}">Đọc thứ ba: chi tiết, chú thích, điều kiện.</text>
    ${rect(40, 162, 132, 36, `fill="${A}"`)}
    <text x="106" y="185" text-anchor="middle" font-family="Geist, sans-serif" font-size="13" font-weight="700" fill="#fff">Hành động chính</text>
    ${rect(184, 162, 100, 36, `fill="none" stroke="${A2}"`)}
    <text x="234" y="185" text-anchor="middle" font-family="Geist, sans-serif" font-size="13" fill="${MUTED}">Phụ</text>
  `),

  // 1.8 Color: 60-30-10 and semantic colors
  palette: svg(`
    ${rect(20, 20, 320, 60, `fill="#f8f7f3" stroke="${A2}"`)} ${label(28, 36, "60% NỀN")}
    ${rect(20, 90, 200, 60, `fill="${INK}"`)} <text x="28" y="107" font-family="Geist Mono" font-size="10" font-weight="700" fill="#fff">30% PHỤ</text>
    ${rect(230, 90, 110, 60, `fill="${A}"`)} <text x="238" y="107" font-family="Geist Mono" font-size="10" font-weight="700" fill="#fff">10% HÀNH ĐỘNG</text>
    ${[["Thành công", OK], ["Đang chờ", WARN], ["Lỗi", ERR], ["Thông tin", "#2c6fb5"]].map(([t, c], i) => `${rect(20 + i * 82, 166, 74, 44, `fill="${c}"`)}<text x="${57 + i * 82}" y="192" text-anchor="middle" font-family="Geist" font-size="11" font-weight="700" fill="#fff">${t}</text>`).join("")}
    ${label(20, 230, "MÀU CÓ NGHĨA")}
  `),

  // 1.9 Common UI components
  components: svg(`
    ${rect(20, 20, 150, 36, `fill="${A}"`)} <text x="95" y="43" text-anchor="middle" font-family="Geist" font-size="13" font-weight="700" fill="#fff">Nút</text>
    ${rect(190, 20, 150, 36, `fill="#fff" stroke="${A2}"`)} <text x="202" y="43" font-family="Geist" font-size="12" fill="${MUTED}">Ô nhập…</text>
    ${rect(20, 70, 150, 90, `fill="#fff" stroke="${A2}"`)} ${rect(30, 80, 130, 44, `fill="${SOFT}"`)} <text x="30" y="146" font-family="Geist" font-size="12" font-weight="700" fill="${INK}">Thẻ (card)</text>
    ${[0, 1, 2].map((i) => `${rect(190, 70 + i * 30, 150, 24, `fill="${SOFT2}" stroke="${A2}"`)}<text x="200" y="${87 + i * 30}" font-family="Geist" font-size="11" fill="${INK}">Mục danh sách ${i + 1}</text>`).join("")}
    ${rect(20, 176, 150, 40, `fill="${INK}"`)} <text x="95" y="200" text-anchor="middle" font-family="Geist" font-size="12" fill="#fff">Toast: Đã lưu ✓</text>
    ${[0, 1, 2].map((i) => `<rect x="${190 + i * 50}" y="176" width="46" height="40" rx="8" fill="${i === 0 ? A2 : SOFT2}"/><circle cx="${213 + i * 50}" cy="192" r="5" fill="${i === 0 ? A : MUTED}"/><rect x="${203 + i * 50}" y="203" width="20" height="4" rx="2" fill="${i === 0 ? A : MUTED}"/>`).join("")}
    ${label(190, 230, "BOTTOM TAB")}
  `),

  // 1.10 States: a button in five states + screen states
  states: svg(`
    ${[["Default", A, "#fff", 1], ["Hover", "#7e22ce", "#fff", 1], ["Pressed", "#581c87", "#fff", 1], ["Disabled", A, "#fff", 0.35], ["Loading", A, "#fff", 0.8]].map(([t, bg, fg, op], i) => `<g opacity="${op}"><rect x="20" y="${18 + i * 34}" width="130" height="28" rx="14" fill="${bg}"/><text x="85" y="${36 + i * 34}" text-anchor="middle" font-family="Geist" font-size="12" font-weight="700" fill="${fg}">${t === "Loading" ? "Đang xử lý…" : "Đặt lịch"}</text></g><text x="160" y="${36 + i * 34}" font-family="Geist Mono" font-size="10" font-weight="700" fill="${MUTED}">${t.toUpperCase()}</text>`).join("")}
    ${[["Loading", SOFT], ["Empty", SOFT2], ["Error", "#fdecec"], ["Success", "#e9f1ea"]].map(([t, c], i) => `${rect(230, 18 + i * 48, 110, 40, `fill="${c}" stroke="${A2}"`)}<text x="285" y="${43 + i * 48}" text-anchor="middle" font-family="Geist" font-size="11" font-weight="700" fill="${INK}">${t}</text>`).join("")}
    ${label(230, 230, "TRẠNG THÁI MÀN")}
  `),

  // 1.11 Signifiers and feedback: what looks tappable, and the response
  signifier: svg(`
    ${rect(20, 24, 140, 40, `fill="${A}"`)} <text x="90" y="49" text-anchor="middle" font-family="Geist" font-size="13" font-weight="700" fill="#fff">Nút nổi</text>
    <text x="180" y="49" font-family="Geist" font-size="13" fill="${A}" text-decoration="underline">Link gạch chân</text>
    ${rect(20, 80, 140, 40, `fill="#fff" stroke="${A}" stroke-width="2"`)} <text x="32" y="105" font-family="Geist" font-size="12" fill="${MUTED}">Ô có viền</text>
    ${rect(180, 80, 160, 40, `fill="#fff" stroke="${A2}"`)} <text x="192" y="105" font-family="Geist" font-size="12" fill="${INK}">Mục có mũi tên</text> <text x="318" y="106" font-family="Geist" font-size="16" fill="${A}">›</text>
    <path d="M60 150 l-6 28 l10 -8 l6 12 l6 -3 l-6 -12 l12 -2 z" fill="${INK}"/>
    ${rect(90, 148, 250, 40, `fill="${INK}"`)} <text x="215" y="173" text-anchor="middle" font-family="Geist" font-size="12" fill="#fff">Phản hồi: đổi màu · toast · chuyển động nhẹ</text>
    ${label(20, 226, "NHÌN LÀ BIẾT BẤM ĐƯỢC · BẤM XONG LÀ BIẾT ĐÃ XONG")}
  `),

  // 2.1 Brief: a document with highlighted lines sorted into four columns
  brief: svg(`
    ${rect(20, 20, 130, 200, `fill="#fff" stroke="${A2}"`)}
    ${[0, 1, 2, 3, 4, 5, 6].map((i) => `<rect x="32" y="${40 + i * 24}" width="${[100, 80, 90, 70, 95, 60, 85][i]}" height="10" rx="5" fill="${[A2, SOFT, A2, "#fde68a", SOFT, "#fecaca", A2][i]}"/>`).join("")}
    ${label(32, 32, "CLIENT BRIEF")}
    ${[["Đã có", A2], ["Còn thiếu", SOFT], ["Chưa rõ", "#fde68a"], ["Rủi ro", "#fecaca"]].map(([t, c], i) => `${rect(170, 24 + i * 50, 170, 40, `fill="${c}" stroke="${A2}"`)}<text x="182" y="49 ${""}" font-family="Geist" font-size="12" font-weight="700" fill="${INK}" transform="translate(0 ${i * 50})">${t}</text>`).join("")}
    <path d="M150 60 C 160 60, 160 44, 170 44" stroke="${A}" fill="none" stroke-width="1.5"/>
    <path d="M150 120 C 160 120, 160 144, 170 144" stroke="${A}" fill="none" stroke-width="1.5"/>
  `),

  // 3.5 Opportunity gap: need ∩ competitor gap ∩ our ability
  gap: svg(`
    <circle cx="140" cy="110" r="78" fill="${SOFT}" stroke="${A}"/>
    <circle cx="220" cy="110" r="78" fill="${SOFT}" stroke="${A}"/>
    <circle cx="180" cy="168" r="60" fill="${SOFT}" stroke="${A}"/>
    <text x="96" y="90" font-family="Geist" font-size="12" font-weight="700" fill="${INK}">Nhu cầu</text>
    <text x="96" y="106" font-family="Geist" font-size="10" fill="${MUTED}">có bằng chứng</text>
    <text x="222" y="90" font-family="Geist" font-size="12" font-weight="700" fill="${INK}">Đối thủ</text>
    <text x="222" y="106" font-family="Geist" font-size="10" fill="${MUTED}">chưa giải</text>
    <text x="150" y="212" font-family="Geist" font-size="12" font-weight="700" fill="${INK}">Bạn làm được</text>
    <circle cx="180" cy="128" r="16" fill="${A}"/>
    <text x="180" y="132" text-anchor="middle" font-family="Geist" font-size="10" font-weight="800" fill="#fff">GAP</text>
  `),

  // 5.5 Wireframe: grey boxes with labels
  wireframe: svg(`
    ${rect(20, 20, 320, 200, `fill="#fff" stroke="${MUTED}"`)}
    ${rect(32, 32, 296, 26, `fill="#eeeeea" stroke="#cfcfc8"`)} <text x="40" y="49" font-family="Geist" font-size="10" fill="${MUTED}">Header</text>
    ${rect(32, 68, 190, 80, `fill="#eeeeea" stroke="#cfcfc8" stroke-dasharray="4 3"`)} <text x="112" y="112" text-anchor="middle" font-family="Geist" font-size="10" fill="${MUTED}">Ảnh</text>
    ${rect(232, 68, 96, 22, `fill="#eeeeea" stroke="#cfcfc8"`)} ${rect(232, 98, 96, 22, `fill="#eeeeea" stroke="#cfcfc8"`)} ${rect(232, 128, 96, 20, `fill="#d9d9d3" stroke="#cfcfc8"`)}
    <text x="280" y="142" text-anchor="middle" font-family="Geist" font-size="9" fill="${INK}">Nút chính</text>
    ${rect(32, 158, 296, 50, `fill="#eeeeea" stroke="#cfcfc8"`)} <text x="40" y="180" font-family="Geist" font-size="10" fill="${MUTED}">Danh sách · STATE: loading / empty / error</text>
  `),

  // 6.3 Tokens: primitive → semantic → component
  tokens: svg(`
    ${label(20, 16, "PRIMITIVE")} ${label(150, 16, "SEMANTIC")} ${label(280, 16, "COMPONENT")}
    ${[["purple-600", A], ["purple-200", A2], ["gray-900", INK], ["gray-100", "#eeeaf5"]].map(([t, c], i) => `<rect x="20" y="${28 + i * 46}" width="20" height="20" rx="5" fill="${c}"/><text x="46" y="${43 + i * 46}" font-family="Geist Mono" font-size="9" fill="${INK}">${t}</text>`).join("")}
    ${[["action/primary", 0], ["bg/highlight", 1], ["text/primary", 2], ["bg/surface", 3]].map(([t, i]) => `<text x="150" y="${43 + i * 46}" font-family="Geist Mono" font-size="9" fill="${INK}">${t}</text><path d="M118 ${38 + i * 46} L 146 ${38 + i * 46}" stroke="${A}" stroke-width="1.5" marker-end="url(#arr)"/>`).join("")}
    <defs><marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="${A}"/></marker></defs>
    ${rect(280, 28, 60, 30, `fill="${A}"`)} <text x="310" y="47" text-anchor="middle" font-family="Geist" font-size="10" font-weight="700" fill="#fff">Nút</text>
    ${rect(280, 120, 60, 44, `fill="#eeeaf5" stroke="${A2}"`)} <text x="310" y="146" text-anchor="middle" font-family="Geist" font-size="10" fill="${INK}">Thẻ</text>
    <path d="M232 38 L 276 40" stroke="${A}" stroke-width="1.5" marker-end="url(#arr)"/>
    <path d="M232 176 L 276 150" stroke="${A}" stroke-width="1.5" marker-end="url(#arr)"/>
    ${label(20, 226, "ĐỔI BRAND → SỬA PRIMITIVE · ĐỔI CÁCH DÙNG → SỬA SEMANTIC")}
  `),

  // 6.5 Prototype: three screens connected by arrows, with an error branch
  prototype: svg(`
    <defs><marker id="arr2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="${A}"/></marker></defs>
    ${[0, 1, 2].map((i) => `${rect(20 + i * 120, 30, 90, 150, `fill="#fff" stroke="${A2}"`)}${rect(30 + i * 120, 40, 70, 16, `fill="${SOFT}"`)}${rect(30 + i * 120, 64, 70, 60, `fill="${SOFT2}"`)}${rect(30 + i * 120, 150, 70, 20, `fill="${i === 2 ? OK : A}"`)}`).join("")}
    <path d="M110 105 L 136 105" stroke="${A}" stroke-width="2" marker-end="url(#arr2)"/>
    <path d="M230 105 L 256 105" stroke="${A}" stroke-width="2" marker-end="url(#arr2)"/>
    <path d="M185 180 C 185 210, 120 210, 65 210 C 40 210, 40 200, 40 180" stroke="${ERR}" stroke-width="1.5" fill="none" stroke-dasharray="4 3" marker-end="url(#arr2)"/>
    <text x="110" y="226" text-anchor="middle" font-family="Geist Mono" font-size="9" font-weight="700" fill="${ERR}">NHÁNH LỖI → QUAY LẠI</text>
    ${label(20, 22, "MÀN 1")} ${label(140, 22, "MÀN 2")} ${label(260, 22, "THÀNH CÔNG")}
  `),

  // 1.1b What a designer produces: flow → wireframe → UI → prototype
  outputs: svg(`
    ${[["Flow", 0], ["Wireframe", 1], ["UI", 2], ["Prototype", 3]].map(([t, i]) => `${rect(20 + i * 84, 60, 70, 100, `fill="${i === 2 ? SOFT : "#fff"}" stroke="${A2}"`)}<text x="${55 + i * 84}" y="184" text-anchor="middle" font-family="Geist Mono" font-size="9" font-weight="700" fill="${MUTED}">${t.toUpperCase()}</text>`).join("")}
    <circle cx="40" cy="85" r="7" fill="${A}"/><circle cx="70" cy="110" r="7" fill="${A}"/><circle cx="40" cy="135" r="7" fill="${A2}"/>
    <path d="M40 92 L 70 103 M70 117 L 40 128" stroke="${A}" stroke-width="1.5"/>
    ${rect(112, 70, 50, 16, `fill="#eee" stroke="#ccc"`)} ${rect(112, 92, 50, 36, `fill="#eee" stroke="#ccc" stroke-dasharray="3 2"`)} ${rect(112, 136, 50, 14, `fill="#ddd"`)}
    ${rect(196, 70, 50, 16, `fill="${A2}"`)} ${rect(196, 92, 50, 36, `fill="${SOFT}"`)} ${rect(196, 136, 50, 14, `fill="${A}"`)}
    ${rect(280, 70, 50, 80, `fill="#fff" stroke="${A}"`)} <path d="M300 100 l-4 18 l6 -5 l4 8 l4 -2 l-4 -8 l8 -1 z" fill="${INK}"/>
    ${[0, 1, 2].map((i) => `<path d="M${92 + i * 84} 110 L ${104 + i * 84} 110" stroke="${A}" stroke-width="2"/>`).join("")}
  `)
  ,
  // 1.1b Restaurant metaphor: UX = whole meal journey, UI = menu and plate
  restaurant: svg(`
    ${[["Đặt bàn", 0], ["Chờ", 1], ["Gọi món", 2], ["Ăn", 3], ["Thanh toán", 4]].map(([t, i]) => `<circle cx="${40 + i * 70}" cy="60" r="18" fill="${i === 2 ? A : SOFT}" stroke="${A}"/><text x="${40 + i * 70}" y="96" text-anchor="middle" font-family="Geist" font-size="10" font-weight="700" fill="${INK}">${t}</text>${i < 4 ? `<line x1="${58 + i * 70}" y1="60" x2="${92 + i * 70}" y2="60" stroke="${A}" stroke-width="2"/>` : ""}`).join("")}
    ${label(20, 22, "UX = CẢ BỮA ĂN")}
    ${rect(60, 124, 110, 90, `fill="#fff" stroke="${A2}"`)} ${text(72, 146, "THỰC ĐƠN", 9, `fill="${MUTED}" font-weight="700"`)} ${[0, 1, 2, 3].map((i) => `<rect x="72" y="${154 + i * 13}" width="${[70, 50, 66, 40][i]}" height="6" rx="3" fill="${SOFT}"/>`).join("")}
    <circle cx="240" cy="169" r="42" fill="#fff" stroke="${A2}"/><circle cx="240" cy="169" r="26" fill="${SOFT}"/><circle cx="234" cy="164" r="7" fill="${A}"/><circle cx="250" cy="174" r="5" fill="${A2}"/>
    ${label(190, 226, "UI = THỰC ĐƠN VÀ CÁI ĐĨA")}
  `),

  // 1.2 Why UI/UX matters: three big numbers
  why: svg(`
    ${[["0,05 giây", "để người dùng có ấn tượng đầu về giao diện"], ["×10", "chi phí sửa sau khi code so với lúc vẽ"], ["70%", "giỏ hàng bị bỏ vì thanh toán rườm rà"]].map(([n, t], i) => `${rect(20 + i * 110, 40, 100, 160, `fill="${i === 1 ? SOFT : "#fff"}" stroke="${A2}"`)}<text x="${70 + i * 110}" y="100" text-anchor="middle" font-family="Geist" font-size="26" font-weight="800" fill="${A}">${n}</text><foreignObject x="${28 + i * 110}" y="112" width="84" height="80"><div xmlns="http://www.w3.org/1999/xhtml" style="font:11px/1.35 Geist,sans-serif;color:${INK};text-align:center">${t}</div></foreignObject>`).join("")}
    ${label(20, 226, "UX KHÔNG PHẢI TRANG TRÍ. UX LÀ TIỀN VÀ THỜI GIAN.")}
  `),

  // 1.6a F-pattern: users scan, they don't read
  fpattern: svg(`
    ${rect(20, 20, 320, 200, `fill="#fff" stroke="${A2}"`)}
    ${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<rect x="36" y="${40 + i * 22}" width="${[280, 220, 200, 120, 160, 90, 140, 80][i]}" height="10" rx="5" fill="${SOFT2}"/>`).join("")}
    <rect x="36" y="40" width="280" height="10" rx="5" fill="${A}" opacity="0.85"/>
    <rect x="36" y="84" width="200" height="10" rx="5" fill="${A}" opacity="0.6"/>
    <rect x="36" y="40" width="40" height="164" rx="5" fill="${A}" opacity="0.35"/>
    ${text(250, 120, "vùng không", 10, `fill="${MUTED}"`)} ${text(250, 134, "được đọc", 10, `fill="${MUTED}"`)}
    ${label(20, 232, "MẪU F: ĐẬM = MẮT DỪNG LÂU")}
  `),

  // 1.6b Four laws of design psychology
  laws: svg(`
    ${rect(20, 20, 150, 90, `fill="#fff" stroke="${A2}"`)} ${text(30, 40, "Hick", 12, `font-weight="800"`)} ${[0, 1, 2].map((i) => `<rect x="${30 + i * 44}" y="52" width="38" height="16" rx="8" fill="${i === 0 ? A : SOFT}"/>`).join("")} ${text(30, 96, "Ít lựa chọn → quyết nhanh", 10, `fill="${MUTED}"`)}
    ${rect(190, 20, 150, 90, `fill="#fff" stroke="${A2}"`)} ${text(200, 40, "Fitts", 12, `font-weight="800"`)} <rect x="200" y="50" width="90" height="26" rx="13" fill="${A}"/><rect x="300" y="56" width="28" height="14" rx="7" fill="${SOFT}"/> ${text(200, 96, "Nút to, gần tay → dễ bấm", 10, `fill="${MUTED}"`)}
    ${rect(20, 130, 150, 90, `fill="#fff" stroke="${A2}"`)} ${text(30, 150, "Miller", 12, `font-weight="800"`)} ${[0, 1, 2, 3, 4, 5, 6].map((i) => `<circle cx="${40 + i * 20}" cy="172" r="7" fill="${i < 5 ? A2 : SOFT}"/>`).join("")} ${text(30, 206, "Nhớ được 5–7 thứ một lúc", 10, `fill="${MUTED}"`)}
    ${rect(190, 130, 150, 90, `fill="#fff" stroke="${A2}"`)} ${text(200, 150, "Jakob", 12, `font-weight="800"`)} <rect x="200" y="160" width="60" height="40" rx="6" fill="${SOFT}" stroke="${A2}"/><rect x="268" y="160" width="60" height="40" rx="6" fill="${SOFT}" stroke="${A2}"/><rect x="206" y="166" width="20" height="5" rx="2" fill="${A}"/><rect x="274" y="166" width="20" height="5" rx="2" fill="${A}"/> ${text(200, 216, "Giống thứ đã quen", 10, `fill="${MUTED}"`)}
  `)

};

export function illustration(name) {
  return illustrations[name] ?? "";
}
