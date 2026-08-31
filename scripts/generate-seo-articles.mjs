/**
 * Generate SEO articles for remaining keywords in the 100-keyword pool.
 * Run: node scripts/generate-seo-articles.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const KEYWORDS_100 = [
  // Thiết kế 1-20
  { id: 1, kw: "thiết kế nhà phố mặt tiền 4m", cat: "thiet-ke" },
  { id: 2, kw: "thiết kế nhà phố mặt tiền 5m", cat: "thiet-ke", skip: "thiet-ke-nha-pho-mat-tien-5m" },
  { id: 3, kw: "thiết kế nhà phố 1 trệt 1 lầu", cat: "thiet-ke" },
  { id: 4, kw: "thiết kế nhà phố 1 trệt 2 lầu", cat: "thiet-ke", skip: "thiet-ke-nha-pho-1-tret-2-lau" },
  { id: 5, kw: "thiết kế nhà phố 3 tầng hiện đại", cat: "thiet-ke" },
  { id: 6, kw: "nhà phố phong cách sáng", cat: "thiet-ke", skip: "mau-nha-pho-hien-dai-2026" },
  { id: 7, kw: "thiết kế nhà phố tối ưu ánh sáng", cat: "thiet-ke" },
  { id: 8, kw: "mẫu nhà phố hiện đại 2026", cat: "thiet-ke", skip: "mau-nha-pho-hien-dai-2026" },
  { id: 9, kw: "thiết kế nhà ống hẹp", cat: "thiet-ke" },
  { id: 10, kw: "thiết kế nhà phố tân cổ điển", cat: "thiet-ke", skip: "thiet-ke-nha-pho-hien-dai-tan-co-dien" },
  { id: 11, kw: "thiết kế nhà phố có gara", cat: "thiet-ke" },
  { id: 12, kw: "thiết kế nhà phố sân thượng", cat: "thiet-ke" },
  { id: 13, kw: "thiết kế nhà phố thông tầng", cat: "thiet-ke" },
  { id: 14, kw: "đơn vị thiết kế nhà phố uy tín", cat: "thiet-ke" },
  { id: 15, kw: "thiết kế nhà phố trọn gói", cat: "thiet-ke" },
  { id: 16, kw: "phí thiết kế nhà phố bao nhiêu", cat: "thiet-ke" },
  { id: 17, kw: "thiết kế nhà phố theo ngân sách", cat: "thiet-ke" },
  { id: 18, kw: "bản vẽ nhà phố chi tiết", cat: "thiet-ke" },
  { id: 19, kw: "thiết kế nội thất nhà phố", cat: "thiet-ke" },
  { id: 20, kw: "phối cảnh 3D nhà phố", cat: "thiet-ke" },
  // Thi công 21-40
  { id: 21, kw: "thi công nhà phố trọn gói", cat: "thi-cong", skip: "thi-cong-nha-pho-tron-goi" },
  { id: 22, kw: "xây nhà phố phần thô", cat: "thi-cong" },
  { id: 23, kw: "xây nhà phố hoàn thiện", cat: "thi-cong" },
  { id: 24, kw: "thi công nhà phố đúng tiến độ", cat: "thi-cong" },
  { id: 25, kw: "đơn vị thi công nhà phố TP.HCM", cat: "thi-cong" },
  { id: 26, kw: "xây nhà phố giá minh bạch", cat: "thi-cong" },
  { id: 27, kw: "thi công nhà phố Quận 7", cat: "local", skip: "thi-cong-nha-pho-quan-7" },
  { id: 28, kw: "thi công nhà phố Quận 8", cat: "local" },
  { id: 29, kw: "thi công nhà phố Thủ Đức", cat: "local", skip: "thi-cong-nha-pho-thu-duc" },
  { id: 30, kw: "thi công nhà phố Hóc Môn", cat: "local" },
  { id: 31, kw: "thi công nhà phố Củ Chi", cat: "local" },
  { id: 32, kw: "thi công nhà phố Bình Chánh", cat: "local" },
  { id: 33, kw: "xây nhà phố 3 tầng", cat: "thi-cong" },
  { id: 34, kw: "xây nhà 1 trệt 2 lầu", cat: "thi-cong" },
  { id: 35, kw: "giám sát thi công nhà phố", cat: "thi-cong" },
  { id: 36, kw: "hợp đồng thi công nhà phố", cat: "thi-cong" },
  { id: 37, kw: "quy trình thi công nhà phố", cat: "thi-cong" },
  { id: 38, kw: "thi công kết cấu nhà phố", cat: "thi-cong" },
  { id: 39, kw: "thi công điện nước nhà phố", cat: "thi-cong" },
  { id: 40, kw: "bàn giao nhà phố trọn gói", cat: "thi-cong" },
  // Báo giá 41-55
  { id: 41, kw: "báo giá xây nhà phố 2026", cat: "bao-gia", skip: "bao-gia-xay-nha-pho-2026" },
  { id: 42, kw: "báo giá nhà phố phần thô", cat: "bao-gia", skip: "bao-gia-nha-pho-phan-tho" },
  { id: 43, kw: "báo giá nhà phố hoàn thiện", cat: "bao-gia" },
  { id: 44, kw: "đơn giá xây nhà phố m2", cat: "bao-gia", skip: "don-gia-xay-nha-pho-m2" },
  { id: 45, kw: "chi phí xây nhà phố 1 trệt 1 lầu", cat: "bao-gia" },
  { id: 46, kw: "chi phí xây nhà phố 3 tầng", cat: "bao-gia" },
  { id: 47, kw: "báo giá thiết kế nhà phố", cat: "bao-gia" },
  { id: 48, kw: "báo giá thi công nội thất nhà phố", cat: "bao-gia" },
  { id: 49, kw: "dự toán xây nhà phố", cat: "bao-gia" },
  { id: 50, kw: "xây nhà phố hết bao nhiêu tiền", cat: "bao-gia" },
  { id: 51, kw: "báo giá sửa nhà phố", cat: "bao-gia" },
  { id: 52, kw: "bảng giá xây dựng nhà phố", cat: "bao-gia" },
  { id: 53, kw: "báo giá cải tạo nhà phố", cat: "bao-gia" },
  { id: 54, kw: "báo giá nâng tầng nhà phố", cat: "bao-gia" },
  { id: 55, kw: "tư vấn báo giá xây nhà miễn phí", cat: "bao-gia" },
  // Cải tạo 56-70
  { id: 56, kw: "sửa chữa nhà phố trọn gói", cat: "cai-tao", skip: "dich-vu-sua-chua-cai-tao-tron-goi" },
  { id: 57, kw: "cải tạo nhà phố cũ", cat: "cai-tao", skip: "cai-tao-nha-pho-cu" },
  { id: 58, kw: "nâng tầng nhà phố", cat: "cai-tao", skip: "nang-tang-nha-pho" },
  { id: 59, kw: "cải tạo mặt tiền nhà phố", cat: "cai-tao" },
  { id: 60, kw: "sửa nhà bị thấm dột", cat: "cai-tao", skip: "chong-tham-nha-pho" },
  { id: 61, kw: "cải tạo nhà phố tối ánh sáng", cat: "cai-tao" },
  { id: 62, kw: "cải tạo nội thất nhà phố", cat: "cai-tao" },
  { id: 63, kw: "sửa chữa nhà phố Quận 7", cat: "local" },
  { id: 64, kw: "cải tạo nhà ống hẹp", cat: "cai-tao" },
  { id: 65, kw: "nâng cấp nhà phố hiện đại", cat: "cai-tao" },
  { id: 66, kw: "cải tạo nhà phố không phá dỡ nhiều", cat: "cai-tao" },
  { id: 67, kw: "sửa nhà vừa ở vừa thi công", cat: "cai-tao" },
  { id: 68, kw: "cải tạo bếp nhà phố", cat: "cai-tao" },
  { id: 69, kw: "cải tạo phòng ngủ nhà phố", cat: "cai-tao" },
  { id: 70, kw: "dịch vụ cải tạo nhà uy tín TP.HCM", cat: "cai-tao" },
  // Brand/local 71-85
  { id: 71, kw: "thiết kế nhà phố TP.HCM", cat: "thiet-ke" },
  { id: 72, kw: "xây nhà phố Hồ Chí Minh", cat: "thi-cong" },
  { id: 73, kw: "kiến trúc sư nhà phố TP.HCM", cat: "thiet-ke" },
  { id: 74, kw: "công ty xây nhà phố uy tín", cat: "thi-cong" },
  { id: 75, kw: "Minh Phú Building", cat: "brand" },
  { id: 76, kw: "Kiến trúc Minh Phú", cat: "brand" },
  { id: 77, kw: "thiết kế thi công nhà phố Minh Phú", cat: "brand" },
  { id: 78, kw: "xây nhà phố gần Quận 7", cat: "local" },
  { id: 79, kw: "tư vấn xây nhà phố miễn phí", cat: "brand", skip: "tu-van-xay-nha-pho-mien-phi" },
  { id: 80, kw: "khảo sát hiện trạng nhà phố", cat: "thi-cong" },
  { id: 81, kw: "đơn vị xây nhà phố có bảo hành", cat: "thi-cong" },
  { id: 82, kw: "thi công nhà phố không phát sinh", cat: "thi-cong" },
  { id: 83, kw: "thiết kế nhà phố thực tế", cat: "thiet-ke" },
  { id: 84, kw: "công ty thiết kế nhà phố TP.HCM", cat: "thiet-ke" },
  { id: 85, kw: "xây nhà phố trọn gói uy tín", cat: "thi-cong" },
  // Hoàn thiện / phụ 86-100
  { id: 86, kw: "hoàn thiện nhà đã xây thô", cat: "hoan-thien", skip: "hoan-thien-nha-da-xay-tho" },
  { id: 87, kw: "thi công nội thất nhà phố", cat: "hoan-thien" },
  { id: 88, kw: "thiết kế phòng khách nhà phố", cat: "thiet-ke" },
  { id: 89, kw: "thiết kế bếp nhà phố nhỏ", cat: "thiet-ke" },
  { id: 90, kw: "thiết kế sân thượng nhà phố", cat: "thiet-ke" },
  { id: 91, kw: "nhà phố hiện đại tối giản", cat: "thiet-ke" },
  { id: 92, kw: "nhà phố màu trắng hiện đại", cat: "thiet-ke" },
  { id: 93, kw: "xu hướng nhà phố 2026", cat: "content", skip: "xu-huong-nha-pho-2026" },
  { id: 94, kw: "kinh nghiệm xây nhà phố lần đầu", cat: "content", skip: "kinh-nghiem-xay-nha-pho" },
  { id: 95, kw: "checklist xây nhà phố", cat: "content" },
  { id: 96, kw: "chọn vật liệu xây nhà phố", cat: "content" },
  { id: 97, kw: "chống nóng nhà phố", cat: "content", skip: "chong-nong-nha-pho" },
  { id: 98, kw: "thông gió nhà phố hẹp", cat: "content", skip: "thong-gio-nha-ong-hep" },
  { id: 99, kw: "thiết kế nhà phố 2 thế hệ", cat: "thiet-ke" },
  { id: 100, kw: "liên hệ thiết kế thi công nhà phố", cat: "brand" },
];

const IMAGE_POOL = {
  "thiet-ke": [
    "upload/mat-tien-5m/mt5m-01-thumbnail-mat-tien.png",
    "upload/nha-pho/fanpage/fp-nha-sang-01-mat-tien.png",
    "upload/1t2l/1t2l-01-thumbnail.png",
    "upload/tan-co-dien/tncd-01-thumbnail.png",
  ],
  "thi-cong": [
    "upload/tron-goi/tg-01-thumbnail.png",
    "upload/tron-goi/tg-02-thi-cong.png",
    "upload/phan-tho/pt-01-thumbnail.png",
  ],
  "bao-gia": [
    "upload/bao-gia/bao-gia-01-thumbnail-mat-tien.png",
    "upload/bao-gia/bao-gia-06-vat-tu-du-toan.png",
    "upload/don-gia-m2/dgm2-01-thumbnail.png",
  ],
  "cai-tao": [
    "upload/cai-tao/ct-01-thumbnail.png",
    "upload/cai-tao/ct-02-ben-trong.png",
    "upload/sua-chua-tron-goi/sc-01-thumbnail.png",
  ],
  local: [
    "upload/quan-7/q7-01-thumbnail.png",
    "upload/quan-binh-thanh/qbt-01-thumbnail.png",
    "upload/quan-1/q1-01-thumbnail.png",
  ],
  "hoan-thien": [
    "upload/hoan-thien-tho/ht-01-thumbnail.png",
    "upload/hoan-thien-ngoai/htnn-01-thumbnail.png",
    "upload/bao-gia/bao-gia-03-hoan-thien.png",
  ],
  content: [
    "upload/xu-huong-nha-pho/xhnp-01-thumbnail.png",
    "upload/chong-nong/cn-01-thumbnail.png",
    "upload/kinh-nghiem/kn-01-thumbnail.png",
  ],
  brand: [
    "upload/bao-gia/bao-gia-01-thumbnail-mat-tien.png",
    "upload/tu-van/tv-01-thumbnail.png",
    "upload/tron-goi/tg-03-ban-giao.png",
  ],
};

const PILLAR_LINKS = {
  "thiet-ke": ["/dich-vu/thiet-ke-nha-pho", "/tin-tuc/thiet-ke-nha-pho-mat-tien-5m", "/bang-bao-gia/thiet-ke-nha"],
  "thi-cong": ["/dich-vu/thi-cong-xay-dung", "/tin-tuc/thi-cong-nha-pho-tron-goi", "/bang-bao-gia/bao-gia-tron-goi"],
  "bao-gia": ["/tin-tuc/bao-gia-xay-nha-pho-2026", "/bang-bao-gia", "/tin-tuc/don-gia-xay-nha-pho-m2"],
  "cai-tao": ["/tin-tuc/cai-tao-nha-pho-cu", "/dich-vu/sua-chua-cai-tao", "/bang-bao-gia/sua-chua-tron-goi"],
  local: ["/lien-he", "/dich-vu/thi-cong-xay-dung", "/tin-tuc/thi-cong-nha-pho-quan-7"],
  "hoan-thien": ["/tin-tuc/hoan-thien-nha-da-xay-tho", "/dich-vu/hoan-thien-nha-da-xay-tho", "/lien-he"],
  content: ["/tin-tuc/kinh-nghiem-xay-nha-pho", "/tin-tuc/xu-huong-nha-pho-2026", "/lien-he"],
  brand: ["/gioi-thieu", "/lien-he", "/tin-tuc/tu-van-xay-nha-pho-mien-phi"],
};

function slugify(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const LINK_LABELS = {
  "/dich-vu/thiet-ke-nha-pho": "dịch vụ thiết kế nhà phố",
  "/tin-tuc/thiet-ke-nha-pho-mat-tien-5m": "thiết kế mặt tiền 5m",
  "/bang-bao-gia/thiet-ke-nha": "bảng giá thiết kế",
  "/dich-vu/thi-cong-xay-dung": "dịch vụ thi công xây dựng",
  "/tin-tuc/thi-cong-nha-pho-tron-goi": "thi công trọn gói",
  "/bang-bao-gia/bao-gia-tron-goi": "báo giá trọn gói",
  "/tin-tuc/bao-gia-xay-nha-pho-2026": "báo giá xây nhà phố 2026",
  "/bang-bao-gia": "bảng báo giá",
  "/tin-tuc/don-gia-xay-nha-pho-m2": "đơn giá theo m²",
  "/tin-tuc/cai-tao-nha-pho-cu": "cải tạo nhà phố cũ",
  "/dich-vu/sua-chua-cai-tao": "dịch vụ sửa chữa cải tạo",
  "/bang-bao-gia/sua-chua-tron-goi": "báo giá sửa chữa trọn gói",
  "/lien-he": "trang liên hệ",
  "/tin-tuc/thi-cong-nha-pho-quan-7": "thi công Quận 7",
  "/tin-tuc/hoan-thien-nha-da-xay-tho": "hoàn thiện nhà thô",
  "/dich-vu/hoan-thien-nha-da-xay-tho": "dịch vụ hoàn thiện nhà thô",
  "/tin-tuc/kinh-nghiem-xay-nha-pho": "kinh nghiệm xây nhà phố",
  "/tin-tuc/xu-huong-nha-pho-2026": "xu hướng nhà phố 2026",
  "/gioi-thieu": "giới thiệu Minh Phú",
  "/tin-tuc/tu-van-xay-nha-pho-mien-phi": "tư vấn miễn phí",
};

function linkMd(path) {
  const label =
    LINK_LABELS[path] ||
    path
      .split("/")
      .filter(Boolean)
      .pop()
      .replace(/-/g, " ");
  return `[${label}](${path})`;
}

function titleCase(kw) {
  const t = kw.charAt(0).toUpperCase() + kw.slice(1);
  if (kw.includes("2026")) return `${t}: hướng dẫn & tư vấn tại TP.HCM`;
  if (kw.includes("Quận") || kw.includes("Hóc Môn") || kw.includes("Củ Chi") || kw.includes("Bình Chánh"))
    return `${t}: khảo sát hiện trạng & báo giá minh bạch`;
  if (kw.includes("báo giá") || kw.includes("chi phí") || kw.includes("đơn giá") || kw.includes("bao nhiêu"))
    return `${t}: khung tham khảo & cách đọc dự toán 2026`;
  if (kw.includes("thiết kế") || kw.includes("mẫu") || kw.includes("phối cảnh"))
    return `${t}: giải pháp thực tế cho nhà phố TP.HCM`;
  if (kw.includes("cải tạo") || kw.includes("sửa") || kw.includes("nâng"))
    return `${t}: quy trình & lưu ý khi thi công tại TP.HCM`;
  return `${t}: tư vấn chuyên sâu từ Minh Phú Building`;
}

function buildBody(kw, cat, links) {
  const [a, b, c] = links;
  const h2a = `${kw.charAt(0).toUpperCase() + kw.slice(1)} là gì và ai cần quan tâm?`;
  const h2b = `Lưu ý quan trọng khi triển khai ${kw}`;
  const h2c = `Quy trình & chi phí liên quan ${kw}`;
  const h2faq = `FAQ — ${kw}`;
  const h2k = "Kết luận — liên hệ tư vấn";

  const localNote =
    cat === "local"
      ? " Khu vực TP.HCM có đặc thù hẻm sâu, nhà liền kề và nền đất đa dạng — cần khảo sát thực địa trước khi chốt phương án."
      : "";

  return [
    `${kw.charAt(0).toUpperCase() + kw.slice(1)} là nhu cầu phổ biến của gia chủ tại TP.HCM khi muốn xây mới, cải tạo hoặc tối ưu không gian sống. Bài viết này của Minh Phú Building tổng hợp thông tin thực tế về ${kw} — giúp bạn hình dung phạm vi công việc, chi phí và cách chọn đơn vị đồng hành.${localNote}`,
    `Thay vì tìm kiếm thông tin rời rạc trên mạng, gia chủ nên nắm khung cơ bản về ${kw} trước khi nhận báo giá. Một dự toán minh bạch phải tách hạng mục, ghi rõ vật tư tham chiếu và điều kiện nghiệm thu — đặc biệt với nhà phố diện tích hẹp, thi công trong hẻm hoặc nhà cũ cần đánh giá kết cấu.`,
    { type: "h2", text: h2a },
    `${kw.charAt(0).toUpperCase() + kw.slice(1)} liên quan đến việc tối ưu công năng, chi phí và chất lượng bền vững cho nhà phố. Tùy hiện trạng lô đất, số tầng và ngân sách, phương án triển khai ${kw} có thể khác nhau — không có một công thức chung cho mọi căn nhà.`,
    `Minh Phú Building tiếp cận ${kw} từ khảo sát thực tế: đo đạc, ghi nhận kết cấu, thống nhất nhu cầu gia đình rồi mới đề xuất thiết kế hoặc dự toán. Cách làm này giúp hạn chế phát sinh và rút ngắn thời gian ra quyết định.`,
    { type: "h2", text: h2b },
    `Khi triển khai ${kw}, cần chú ý: (1) quy hoạch và pháp lý nếu thay đổi kết cấu; (2) chống thấm, điện nước an toàn; (3) tiếp cận hiện trường trong hẻm; (4) thống nhất vật tư trước khi thi công hoàn thiện.`,
    `Nhiều gia chủ gặp rủi ro khi chọn nhà thầu báo giá ${kw} quá thấp mà không tách hạng mục. Hãy yêu cầu checklist nghiệm thu từng giai đoạn và chính sách bảo hành bằng văn bản.`,
    `Tham khảo thêm ${linkMd(a)}, ${linkMd(b)} và ${linkMd(c)} để đối chiếu phạm vi dịch vụ liên quan ${kw}.`,
    { type: "h2", text: h2c },
    `Quy trình gợi ý: tiếp nhận nhu cầu → khảo sát hiện trạng → đề xuất phương án & dự toán → ký hợp đồng → thi công theo mốc → nghiệm thu → bàn giao. Với ${kw}, giai đoạn khảo sát quyết định độ chính xác của ngân sách.`,
    `Chi phí ${kw} phụ thuộc quy mô, vật liệu, điều kiện thi công và mức độ phức tạp. Dự toán tốt nêu rõ hạng mục loại trừ và phương án xử lý phát sinh — tránh tranh luận giữa gia chủ và nhà thầu.`,
    `Đối chiếu thêm quy định kỹ thuật tại [Bộ Xây dựng](https://moc.gov.vn) khi ${kw} liên quan thay đổi kết cấu hoặc nâng tầng.`,
    { type: "h2", text: h2faq },
    `${kw.charAt(0).toUpperCase() + kw.slice(1)} mất bao lâu? Tùy quy mô — từ vài tuần đến vài tháng; lịch chi tiết nên có trong hợp đồng.`,
    `Có khảo sát miễn phí không? Minh Phú Building hỗ trợ tư vấn sơ bộ ở bước đầu cho ${kw} theo hiện trạng thực tế.`,
    `Làm sao tránh phát sinh chi phí? Chốt vật tư, tách hạng mục và nghiệm thu từng giai đoạn trước khi sang bước tiếp theo.`,
    { type: "h2", text: h2k },
    `Tóm lại, ${kw} hiệu quả khi bắt đầu từ khảo sát và dự toán minh bạch. Hãy chọn đơn vị có quy trình rõ, bảo hành bằng văn bản và kinh nghiệm nhà phố tại TP.HCM.`,
    `Gửi ảnh hiện trạng và nhu cầu qua [trang liên hệ](/lien-he) hoặc gọi hotline 0912 166 079 để được tư vấn ${kw} sát thực tế.`,
  ];
}

function collectExistingSlugs() {
  const slugs = new Set();
  const dataDir = path.join(root, "src/data");
  for (const file of fs.readdirSync(dataDir)) {
    if (!file.endsWith(".ts") || file === "seoArticlesGenerated.ts") continue;
    const content = fs.readFileSync(path.join(dataDir, file), "utf8");
    for (const m of content.matchAll(/href: "\/tin-tuc\/([^"]+)"/g)) {
      slugs.add(m[1]);
    }
  }
  return slugs;
}

function pickImages(cat, id) {
  const pool = IMAGE_POOL[cat] || IMAGE_POOL["thi-cong"];
  const imgs = [pool[id % pool.length], pool[(id + 1) % pool.length], pool[(id + 2) % pool.length]];
  return [...new Set(imgs)];
}

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

const existing = collectExistingSlugs();
const articles = [];

for (const item of KEYWORDS_100) {
  const slug = item.skip || slugify(item.kw);
  if (existing.has(slug)) continue;
  if (articles.some((a) => a.slug === slug)) continue;

  const links = PILLAR_LINKS[item.cat] || PILLAR_LINKS["thi-cong"];
  const imgs = pickImages(item.cat, item.id);
  const title = titleCase(item.kw);
  const href = `/tin-tuc/${slug}`;

  articles.push({
    slug,
    title,
    href,
    kw: item.kw,
    cat: item.cat,
    imgs,
    links,
    body: buildBody(item.kw, item.cat, links),
  });
  existing.add(slug);
}

let out = `/** Auto-generated: ${articles.length} articles from 100-keyword pool. Do not edit by hand — run: node scripts/generate-seo-articles.mjs */\nconst m = (path: string) => \`/media/\${path}\`;\n\nexport const seoArticlesGenerated = [\n`;

for (const a of articles) {
  const excerpt = `${a.kw.charAt(0).toUpperCase() + a.kw.slice(1)} tại TP.HCM — tư vấn, quy trình và báo giá minh bạch. Minh Phú Building — hotline 0912 166 079.`;
  out += `  {\n`;
  out += `    title: "${esc(a.title)}",\n`;
  out += `    href: "${a.href}",\n`;
  out += `    image: m("${a.imgs[0]}"),\n`;
  out += `    imageAlt: "${esc(a.kw.charAt(0).toUpperCase() + a.kw.slice(1) + " — Minh Phú Building TP.HCM")}",\n`;
  out += `    date: "01/09/2026",\n`;
  out += `    keywords: ["${esc(a.kw)}", "nhà phố TP.HCM", "Minh Phú Building", "thiết kế thi công nhà phố", "tư vấn ${esc(a.kw)}"],\n`;
  out += `    excerpt: "${esc(excerpt)}",\n`;
  out += `    body: [\n`;
  for (const block of a.body) {
    if (typeof block === "string") {
      out += `      "${esc(block)}",\n`;
    } else {
      out += `      { type: "h2", text: "${esc(block.text)}" },\n`;
    }
  }
  out += `    ],\n`;
  out += `    gallery: [\n`;
  a.imgs.forEach((img, i) => {
    out += `      { src: m("${img}"), alt: "${esc(a.kw + " — ảnh " + (i + 1))}" },\n`;
  });
  out += `    ],\n`;
  out += `  },\n`;
}

out += `];\n`;

const outPath = path.join(root, "src/data/seoArticlesGenerated.ts");
fs.writeFileSync(outPath, out, "utf8");
console.log(`Generated ${articles.length} articles → ${outPath}`);
console.log(`Skipped existing: ${KEYWORDS_100.length - articles.length} (already published or duplicate slug)`);
