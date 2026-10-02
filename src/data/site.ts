import { seoArticles, phongCachSangArticle } from "./seoArticles";

export const site = {
  name: "CÔNG TY TNHH KIẾN TRÚC MINH PHÚ",
  shortName: "Kiến trúc Minh Phú",
  tagline: "Kiến tạo không gian sống — Hoàn thiện giá trị cuộc sống",
  slogan1: "Kiến tạo không gian sống",
  slogan2: "Hoàn thiện giá trị cuộc sống",
  greeting: "KIẾN TRÚC MINH PHÚ XIN KÍNH CHÀO QUÝ KHÁCH!",
  phone: "0912 166 079",
  phoneRaw: "0912166079",
  email: "minhphubuilding2022@gmail.com",
  website: "kientrucminhphu.com",
  address1Label: "Văn phòng chính",
  address1: "71/4A Nguyễn Duy Cung, P. An Hội Tây, Hồ Chí Minh",
  address2Label: "Văn phòng họp",
  address2:
    "Tầng 27 Tháp A Tòa nhà Viettel, Số 285 CMT8, P. Hòa Hưng, TP.HCM",
  zalo: "https://zalo.me/0912166079",
  facebook: "https://www.facebook.com/congtyxaydungtrongoi",
  messenger: "https://m.me/congtyxaydungtrongoi",
  mapEmbed:
    "https://maps.google.com/maps?q=71/4A%20Nguy%E1%BB%85n%20Duy%20Cung%20H%E1%BB%93%20Ch%C3%AD%20Minh&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapDirections:
    "https://www.google.com/maps/dir/?api=1&origin=&destination=71/4A%20Nguy%E1%BB%85n%20Duy%20Cung,%20P.%20An%20H%E1%BB%99i%20T%C3%A2y,%20H%E1%BB%93%20Ch%C3%AD%20Minh",
};

export const nav = [
  {
    label: "Giới thiệu",
    href: "/gioi-thieu",
    children: [
      { label: "SỨ MỆNH", href: "/su-menh" },
      { label: "TUYỂN DỤNG", href: "/tuyen-dung" },
      { label: "VỀ CHÚNG TÔI", href: "/gioi-thieu" },
    ],
  },
  { label: "Công trình tiêu biểu", href: "/cong-trinh-tieu-bieu" },
  {
    label: "Dịch vụ",
    href: "/dich-vu",
    children: [
      { label: "THIẾT KẾ THI CÔNG NỘI THẤT", href: "/dich-vu/thiet-ke-thi-cong-noi-that" },
      { label: "THI CÔNG XÂY DỰNG", href: "/dich-vu/thi-cong-xay-dung" },
      { label: "SỬA CHỮA CẢI TẠO", href: "/dich-vu/sua-chua-cai-tao" },
    ],
  },
  {
    label: "Thư viện",
    href: "/thu-vien",
    children: [{ label: "HÌNH ẢNH", href: "/thu-vien" }],
  },
  {
    label: "Bảng báo giá",
    href: "/bang-bao-gia",
    children: [
      { label: "THIẾT KẾ NHÀ", href: "/bang-bao-gia/thiet-ke-nha" },
      { label: "BÁO GIÁ TRỌN GÓI", href: "/bang-bao-gia/bao-gia-tron-goi" },
      { label: "BÁO GIÁ PHẦN THÔ", href: "/bang-bao-gia/bao-gia-phan-tho" },
      { label: "SỬA CHỮA TRỌN GÓI", href: "/bang-bao-gia/sua-chua-tron-goi" },
      { label: "KHUYẾN MẠI", href: "/bang-bao-gia/khuyen-mai" },
    ],
  },
  {
    label: "Kiến trúc",
    href: "/kien-truc",
    children: [
      { label: "Mẫu Nội Thất Đẹp", href: "/kien-truc/mau-noi-that" },
      { label: "Mẫu Thiết Kế Biệt Thự Đẹp", href: "/kien-truc/mau-biet-thu" },
      { label: "Mẫu Thiết Kế Nhà Phố Đẹp", href: "/kien-truc/mau-nha-pho" },
    ],
  },
  { label: "Liên hệ", href: "/lien-he" },
];

const m = (path: string) => `/media/${path}`;

export const slides = [
  {
    src: m("thumbs/1920x843x1/upload/photo/chatgpt-image-000149-26-thg-4-2026-18660.png.webp"),
    alt: "Mẫu nhà phố hiện đại 3 tầng – Kiến trúc Minh Phú",
  },
  {
    src: m("thumbs/1920x843x1/upload/photo/02tret-02view02-15260.jpg.webp"),
    alt: "Không gian tầng trệt nhà phố do Minh Phú thiết kế",
  },
  {
    src: m("thumbs/1920x843x1/upload/photo/cong-ty-tnhh-thiet-ke-thi-cong-minh-phu-2-2757.png.webp"),
    alt: "Công trình thiết kế thi công của Công ty TNHH Kiến trúc Minh Phú",
  },
  {
    src: m("thumbs/1920x843x1/upload/photo/cong-ty-tnhh-thiet-ke-thi-cong-minh-phu-3-9969.png.webp"),
    alt: "Phối cảnh ngoại thất nhà phố Minh Phú Building",
  },
  {
    src: m("thumbs/1920x843x1/upload/photo/chatgpt-image-000856-26-thg-4-2026-5730.png.webp"),
    alt: "Mẫu nhà phố sang trọng thiết kế bởi Minh Phú",
  },
  {
    src: m("thumbs/1920x843x1/upload/photo/slide-1425.jpg.webp"),
    alt: "Biệt thự và nhà phố do Kiến trúc Minh Phú thực hiện",
  },
  {
    src: m("thumbs/1920x843x1/upload/photo/26-thu-phong-view-02-48112.jpg.webp"),
    alt: "Thiết kế nội thất phòng khách nhà phố Minh Phú",
  },
  {
    src: m("thumbs/1920x843x1/upload/photo/32-san-thuong-view-02-47391.jpg.webp"),
    alt: "Sân thượng nhà phố thiết kế bởi Minh Phú Building",
  },
];

export const intro = {
  title: "Kiến trúc Minh Phú",
  image: m("thumbs/706x706x1/upload/news/z7432526669705ff6e22f4df04c6d16391c92ad9f1d31d-6314.jpg.webp"),
  href: "/gioi-thieu",
  paragraphs: [
    "Minh Phú Building chuyên thiết kế, thi công và cải tạo nhà phố tại TP.HCM. Quy trình bài bản, giải pháp tối ưu công năng – chi phí, thi công đúng tiến độ.",
    "Trong bối cảnh nhà phố ngày càng đòi hỏi cao về công năng, thẩm mỹ và độ bền, Minh Phú Building mang đến giải pháp thiết kế – thi công nhà phố trọn gói với định hướng thực tế, rõ ràng và hiệu quả cho từng khách hàng.",
    "Chúng tôi không chỉ tập trung vào hình thức thiết kế mà còn chú trọng kết cấu, công năng sử dụng và chi phí đầu tư, giúp gia chủ sở hữu không gian sống phù hợp nhu cầu lâu dài.",
  ],
  get description() {
    return this.paragraphs.join(" ");
  },
};

export const benefits = [
  {
    title: "Kinh nghiệm & năng lực thực tế",
    desc: "Đội ngũ thiết kế – thi công giàu kinh nghiệm, am hiểu hiện trạng nhà phố tại TP.HCM.",
    icon: m("thumbs/96x96x2/upload/photo/tc5-53854.png.webp"),
  },
  {
    title: "Hồ sơ thiết kế rõ ràng – chi tiết",
    desc: "Bản vẽ đầy đủ, dễ triển khai, hạn chế phát sinh trong quá trình thi công.",
    icon: m("thumbs/96x96x2/upload/photo/tc4-45203.png.webp"),
  },
  {
    title: "Báo giá minh bạch – không phát sinh",
    desc: "Dự toán rõ hạng mục, vật tư và đơn giá trước khi ký hợp đồng.",
    icon: m("thumbs/96x96x2/upload/photo/tc3-39492.png.webp"),
  },
  {
    title: "Quy trình thi công chuyên nghiệp",
    desc: "Khảo sát – tư vấn – thiết kế – dự toán – thi công, kiểm soát tiến độ chặt chẽ.",
    icon: m("thumbs/96x96x2/upload/photo/tc2-15891.png.webp"),
  },
  {
    title: "Chính sách bảo hành & hậu mãi",
    desc: "Đồng hành sau bàn giao, hỗ trợ bảo trì và xử lý sự cố kịp thời.",
    icon: m("thumbs/96x96x2/upload/photo/tc1-65390.png.webp"),
  },
];

export const fields = [
  {
    title: "THIẾT KẾ NHÀ LUXURY",
    href: "/dich-vu/thiet-ke-nha-luxury",
    image: m("thumbs/468x447x1/upload/news/image2026-01-28112428195-6184.png.webp"),
  },
  {
    title: "THIẾT KẾ - THI CÔNG NỘI THẤT NHÀ Ở",
    href: "/dich-vu/thiet-ke-thi-cong-noi-that",
    image: m("thumbs/468x447x1/upload/news/image2026-01-28105230382-4264.png.webp"),
  },
  {
    title: "HOÀN THIỆN NHÀ ĐÃ XÂY THÔ",
    href: "/dich-vu/hoan-thien-nha-da-xay-tho",
    image: m("thumbs/468x447x1/upload/news/image2026-01-28104844321-5128.png.webp"),
  },
  {
    title: "THIẾT KẾ NHÀ PHỐ",
    href: "/dich-vu/thiet-ke-nha-pho",
    image: m("thumbs/468x447x1/upload/news/6193621581221115304311666815576124427485979009n-5934.jpg.webp"),
  },
  {
    title: "THI CÔNG XÂY DỰNG",
    href: "/dich-vu/thi-cong-xay-dung",
    image: m("thumbs/468x447x1/upload/news/image2026-01-28103708610-7789.png.webp"),
  },
  {
    title: "SỬA CHỮA CẢI TẠO NHÀ",
    href: "/dich-vu/sua-chua-cai-tao",
    image: m("thumbs/468x447x1/upload/news/image2026-01-28103847227-6631.png.webp"),
  },
];

export const projects = [
  {
    title: "Nhà ống hiện đại 3 tầng",
    href: "/cong-trinh-tieu-bieu/nha-ong-hien-dai-3-tang",
    image: m("watermark/product/614x702x1/upload/product/2-9185.png.webp"),
    owner: "ANH THÀNH LONG",
    location: "CỦ CHI",
    scale: "Nhà phố",
  },
  {
    title: "BIỆT THỰ CỔ ĐIỂN CAO CẤP",
    href: "/cong-trinh-tieu-bieu/biet-thu-co-dien-cao-cap",
    image: m("watermark/product/614x702x1/upload/product/lau-dai-chau-au-3-tang-9272-1140x768-8026.jpg.webp"),
    owner: "Anh Hoàng  - Chị Nhiên",
    location: "Quận 2",
    scale: "Biệt Thự",
  },
  {
    title: "Nhà vườn cấp 4",
    href: "/cong-trinh-tieu-bieu/nha-vuon-cap-4",
    image: m("watermark/product/614x702x1/upload/product/cap4-8544.jpg.webp"),
    owner: "Anh Sáng - Chị Hoa",
    location: "Quận 4",
    scale: "",
  },
  {
    title: "Nhà phố quận 9",
    href: "/cong-trinh-tieu-bieu/nha-pho-quan-9",
    image: m("watermark/product/614x702x1/upload/product/4865729321222428360741911037946288072040840866n-1876.jpg.webp"),
    owner: "Anh Việt",
    location: "Quận 9",
    scale: "Nhà phố",
  },
  {
    title: "DỰ ÁN B6.12 THE DRIVE SIDE",
    href: "/cong-trinh-tieu-bieu/du-an-b612-the-drive-side",
    image: m("watermark/product/614x702x1/upload/product/6051358721221056523031666812253147407210184540n-8246.jpg.webp"),
    owner: "Huỳnh Trần Thái Bảo",
    location: "QUẬN 7",
    scale: "",
  },
  {
    title: "Thi công xây dựng nhà phố 4 tầng nhà anh Lợi ở Quận 7",
    href: "/cong-trinh-tieu-bieu/nha-pho-4-tang-quan-7",
    image: m("watermark/product/614x702x1/upload/product/6003611331221046915531666811713918399919109964n-2143.jpg.webp"),
    owner: "Trần Xuân Lợi",
    location: "Quận 7",
    scale: "Xây nhà 4 tầng",
  },
  {
    title:
      "Thi công Dinh Thự 3 tầng mái vòm kết hợp mái mansard 9,5 x18,5m nhà anh Minh Long An",
    href: "/cong-trinh-tieu-bieu/dinh-tho-3-tang-long-an",
    image: m("watermark/product/614x702x1/upload/product/6051116851221045534991666814113331679690823845n-1-5552.jpg.webp"),
    owner: "Anh Minh",
    location: "Cần Giuộc, Tỉnh Long An.",
    scale: "Dinh Thự 3 tầng",
  },
  {
    title: "Thi công xây dựng nhà phố 1 trệt 4 lầu nhà anh Thanh Quận 8",
    href: "/cong-trinh-tieu-bieu/nha-pho-1-tret-4-lau-quan-8",
    image: m("watermark/product/614x702x1/upload/product/5997998431221019832791666815709527543347360857n-9508.jpg.webp"),
    owner: "Anh Thanh - Chị Tiên",
    location: "Quận 8, TP. HCM",
    scale: "Nhà phố 1 trệt 4 lầu",
  },
  {
    title: "Thi công xây dựng nhà phố 1 hầm 3 tầng sân thượng 5x18m chị Thuỷ Quận 7",
    href: "/cong-trinh-tieu-bieu/nha-pho-1-ham-3-tang-quan-7",
    image: m("watermark/product/614x702x1/upload/product/5986342301221018009271666815368426326397992069n-6206.jpg.webp"),
    owner: "Anh Xuân - Chị Thuỷ",
    location: "Quận 7, TP. HCM",
    scale: "1 hầm 3 tầng sân thượng",
  },
  {
    title:
      "Thiết Kế Nhà Phố Hiện Đại – Hoàn Thành Bàn Giao Nhà Anh Nguyễn Trọng Hài Tại Gia Lai",
    href: "/cong-trinh-tieu-bieu/nha-pho-hien-dai-gia-lai",
    image: m("watermark/product/614x702x1/upload/product/z7601045359529badf2ad5e876ea52c55a19e5ae122c97-5020.jpg.webp"),
    owner: "Anh: Nguyễn Trọng Hài",
    location: "Gia Lai",
    scale: "Nhà phố",
  },
  {
    title: "Nhà Phố 2 Tầng Hiện Đại",
    href: "/cong-trinh-tieu-bieu/nha-pho-2-tang-hien-dai",
    image: m("watermark/product/614x702x1/upload/product/z75974407313861a35d1a219a7bb997ebd7dbfd5d595f4-2274.jpg.webp"),
    owner: "Gia đình anh Long",
    location: "Hocmon",
    scale: "Nhà phố",
  },
  {
    title: "3D NGOẠI THẤT NHÀ 1 TRỆT 1 LẦU",
    href: "/cong-trinh-tieu-bieu/3d-ngoai-that-1-tret-1-lau",
    image: m("watermark/product/614x702x1/upload/product/6023333911221007787851666817744011981401569376n-3603.jpg.webp"),
    owner: "Anh Hùng - Chị Phượng",
    location: "Thủ Đức",
    scale: "Biệt Thự",
  },
];

export const houseTabs = [
  { id: "all", label: "Tất cả" },
  { id: "ba-tang", label: "Mẫu nhà ba tầng 2026" },
  { id: "biet-thu", label: "Mẫu biệt thự 2026" },
  { id: "nha-pho", label: "Mẫu nhà phố 2026" },
];

export const houseDesigns = [
  {
    title: "NHÀ ỐNG 3 TẦNG HIỆN ĐẠI",
    tabs: ["all", "ba-tang"],
    image: m("thumbs/354x424x1/upload/news/7-6352.png.webp"),
    href: "/kien-truc/nha-ong-3-tang-hien-dai",
  },
  {
    title: "Nhà 3 Tầng Hiện Đại",
    tabs: ["all", "ba-tang"],
    image: m("thumbs/354x424x1/upload/news/z75974438284582e15156c5499051e550a6bb7d04fd2d3-2881.jpg.webp"),
    href: "/kien-truc/nha-3-tang-hien-dai",
  },
  {
    title: "BIỆT THỰ CỔ ĐIỂN CAO CẤP",
    tabs: ["all", "biet-thu"],
    image: m("thumbs/354x424x1/upload/news/lau-dai-chau-au-3-tang-9272-1140x768-4125.jpg.webp"),
    href: "/kien-truc/biet-thu-co-dien-cao-cap",
  },
  {
    title: "MẪU NHÀ PHỐ 2 TẦNG HIỆN ĐẠI",
    tabs: ["all"],
    image: m("thumbs/354x424x1/upload/news/6160733131221096874351666811034754541182294949n-5878.jpg.webp"),
    href: "/kien-truc/mau-nha-pho-2-tang-hien-dai",
  },
  {
    title: "NHÀ SONG LẬP HIỆN ĐẠI",
    tabs: ["all", "nha-pho"],
    image: m("thumbs/354x424x1/upload/news/6039238971221048944731666811576031331311608764n-1-9384.jpg.webp"),
    href: "/kien-truc/nha-song-lap-hien-dai",
  },
  {
    title: "MẪU VILLA HIỆN ĐẠI",
    tabs: ["all", "biet-thu"],
    image: m("thumbs/354x424x1/upload/news/5981061291221018015151666816317054886046439314n-1-6621.jpg.webp"),
    href: "/kien-truc/mau-villa-hien-dai",
  },
  {
    title: "MẪU NHÀ PHỐ TÂN CỔ ĐIỂN CAO TẦNGG",
    tabs: ["all", "nha-pho"],
    image: m("thumbs/354x424x1/upload/news/6122473271221079281151666819190251464232120456n-5118.jpg.webp"),
    href: "/kien-truc/mau-nha-pho-tan-co-dien-cao-tangg",
  },
  {
    title: "MẪU NHÀ PHỐ 3 TẦNG HIỆN ĐẠI",
    tabs: ["all"],
    image: m("thumbs/354x424x1/upload/news/6089462451221072699631666811475545762601340376n-9564.jpg.webp"),
    href: "/kien-truc/mau-nha-pho-3-tang-hien-dai",
  },
  {
    title: "NHÀ PHỐ HIỆN ĐẠI 3 TẦNG",
    tabs: ["ba-tang"],
    image: m("thumbs/354x424x1/upload/news/6044035661221051114151666818799871744734185253n-9428.jpg.webp"),
    href: "/kien-truc/nha-pho-hien-dai-3-tang",
  },
  {
    title: "MẪU NHÀ PHỐ HIỆN ĐẠI 1 TRỆT 1 LẦU",
    tabs: ["nha-pho"],
    image: m("thumbs/354x424x1/upload/news/6038255571221058891291666812445675053635436870n-6774.jpg.webp"),
    href: "/kien-truc/mau-nha-pho-hien-dai-1-tret-1-lau",
  },
  {
    title: "MẪU NHÀ PHỐ TÂN CỔ ĐIỂN CAO TẦNG",
    tabs: ["nha-pho"],
    image: m("thumbs/354x424x1/upload/news/6038542591221053661571666816187729231330554130n-1-7835.jpg.webp"),
    href: "/kien-truc/mau-nha-pho-tan-co-dien-cao-tang",
  },
];

export const news = [
  {
    title: "Xây nhà chỉ với 1 tỷ 3: phương án nhà phố thực tế 2026 tại TP.HCM",
    href: "/tin-tuc/xay-nha-chi-voi-1-ty-3",
    image: m("upload/nha-pho/nha-pho-01-mat-tien.png"),
    imageAlt: "Xây nhà chỉ với 1 tỷ 3 — mẫu nhà phố gọn, công năng đủ dùng tại TP.HCM",
    date: "13/09/2026",
    keywords: [
      "xây nhà chỉ với 1 tỷ 3",
      "xây nhà 1 tỷ 3",
      "xây nhà phố 1.3 tỷ",
      "ngân sách xây nhà 1 tỷ 3",
      "xây nhà trọn gói 1 tỷ 3",
      "xây nhà phố giá rẻ TP.HCM",
    ],
    excerpt:
      "Xây nhà chỉ với 1 tỷ 3 vẫn làm được nhà phố ở được nếu chốt đúng số tầng, cấp hoàn thiện và dự phòng phát sinh. Minh Phú Building phân tích phương án thực tế 2026. Tư vấn miễn phí: 0912 166 079.",
    body: [
      "Nhiều gia chủ hỏi thẳng: xây nhà chỉ với 1 tỷ 3 thì được nhà thế nào? Câu trả lời ngắn là có — nếu 1 tỷ 3 là ngân sách thi công (chưa gồm tiền đất), và bạn chấp nhận nhà phố gọn, hoàn thiện phổ thông, mặt tiền tối giản. Bài viết này của Minh Phú Building nói rõ phạm vi làm được, hạng mục không nên cắt, và cách đọc dự toán để xây nhà chỉ với 1 tỷ 3 không bị “rẻ đầu – đội cuối”.",
      "Một tỷ ba không mua được biệt thự, cũng khó làm nhà 1 trệt 3–4 lầu hoàn thiện cao cấp tại TP.HCM. Nhưng với lô đất đã có, xây nhà chỉ với 1 tỷ 3 hoàn toàn có thể cho ra căn 1 trệt 1 lầu hoặc 1 trệt 2 lầu vừa ở, sáng và bền — miễn là thiết kế đúng công năng thay vì chạy theo chi tiết trang trí.",
      {
        type: "h2",
        text: "1 tỷ 3 xây nhà gồm những gì — và không gồm những gì?",
      },
      "Khi nói xây nhà chỉ với 1 tỷ 3, hãy chốt ngay: con số này thường là phần xây dựng. Tiền đất, lệ phí giấy phép, nội thất gỗ theo thiết kế riêng, điều hòa, smart home, rèm, giường tủ thường nằm ngoài gói. Nếu gộp hết vào 1 tỷ 3, phần xây sẽ bị cắt — rủi ro lớn nhất là chống thấm, thép và bê tông.",
      "Nên tách ngân sách thành 3 khối: (1) phần thô – kết cấu, (2) hoàn thiện cơ bản (ốp lát, sơn, cửa, vệ sinh), (3) nội thất mềm. Xây nhà chỉ với 1 tỷ 3 nên ưu tiên khối 1 và 2 đủ chuẩn, rồi chừa nội thất gỗ làm giai đoạn 2. Ở được trước, đẹp dần sau — đó là cách giữ nhà an toàn trong ngân sách hẹp.",
      "Dự phòng 10–15% (khoảng 130–200 triệu) là bắt buộc. Vậy phần “chắc chắn xây được” thường quanh 1,1–1,17 tỷ. Ai quảng cáo xây nhà chỉ với 1 tỷ 3 trọn gói “không phát sinh” mà không nêu cấp vật tư, gần như chắc chắn sẽ cắt hạng mục hoặc đội giá khi thi công.",
      {
        type: "h2",
        text: "Với 1 tỷ 3, nhà phố quy mô nào là thực tế?",
      },
      "Đơn giá tham khảo 2026 (thay đổi theo hẻm, nền đất, số tầng): phần thô khoảng 5–7 triệu/m² sàn; trọn gói phổ thông khoảng 7,5–10 triệu/m². Lấy mốc trọn gói ~8,5 triệu/m², xây nhà chỉ với 1 tỷ 3 (đã trừ dự phòng) tương ứng khoảng 130–150 m² sàn — ví dụ nhà phố 4×12m, 1 trệt 2 lầu, hoặc 5×16m, 1 trệt 1 lầu + sân thượng vừa phải.",
      "Phương án A — 1 trệt 1 lầu, mặt tiền 4–5m: tầng trệt khách – bếp – để xe máy; lầu 2 phòng ngủ + WC; sân thượng giặt phơi. Đây là kịch bản “chắc cửa” khi xây nhà chỉ với 1 tỷ 3, dễ kiểm soát chống thấm và hoàn thiện.",
      "Phương án B — 1 trệt 2 lầu, mặt tiền 4m, chiều sâu 12–14m: thêm một tầng phòng ngủ hoặc phòng thờ/làm việc. Làm được nếu mặt tiền tối giản, hạn chế đá ốp, kính lớn và phào chỉ. Phương án này sát trần ngân sách — phải khóa vật tư trước khi khởi công.",
      "Phương án C — phần thô 1 trệt 2 lầu, hoàn thiện sau: nếu muốn khung nhà lớn hơn, có thể dùng 1 tỷ 3 cho phần thô + chống thấm + điện nước chờ, rồi hoàn thiện từng tầng. Cách này hợp gia chủ cần ở sớm tầng 1 nhưng chưa đủ tiền hoàn thiện hết. Cần hợp đồng ghi rõ mốc dừng, tránh nhà “treo” mất an toàn.",
      "Không nên kỳ vọng xây nhà chỉ với 1 tỷ 3 cho biệt thự, nhà vườn rộng, hoặc nhà phố mặt tiền 6–8m hoàn thiện cao cấp. Sai kỳ vọng dẫn tới cắt kết cấu — cái giá phải trả sau 2–5 năm rất đắt.",
      {
        type: "h2",
        text: "Hạng mục giữ và hạng mục có thể tối giản",
      },
      "Không cắt: khảo sát nền, móng đúng địa chất, thép – bê tông đúng mác, chống thấm mái – WC – ban công, thoát nước, hệ thống điện an toàn. Đây là xương sống khi xây nhà chỉ với 1 tỷ 3. Tiết kiệm nhầm chỗ này là lỗ.",
      "Có thể tối giản: mặt dựng ốp đá toàn bộ, lam nhôm dày, trần thạch cao nhiều cấp, đèn trang trí, tủ bếp gỗ tự nhiên, thiết bị vệ sinh hàng hiệu. Sơn ngoại thất tốt + khối hình học rõ thường đẹp hơn mặt tiền “đắp” nhiều vật liệu đắt.",
      "Thiết kế giúp tiết kiệm thật: cầu thang gọn, hạn chế phòng quá nhỏ, liên thông khách – bếp, giếng trời hoặc ô lấy sáng thay vì điều hòa nhiều phòng. Một hồ sơ kiến trúc – kết cấu – điện nước đủ bộ còn rẻ hơn sửa sai khi đã đổ sàn. Tham khảo [thiết kế nhà phố](/dich-vu/thiet-ke-nha-pho) và [bảng giá thiết kế nhà](/bang-bao-gia/thiet-ke-nha).",
      "Nhà trong hẻm nhỏ: chi phí vận chuyển vật tư và ngày công sẽ cao hơn nhà mặt đường. Khi lập dự toán xây nhà chỉ với 1 tỷ 3, phải ghi rõ điều kiện tiếp cận xe — nếu không, 1 tỷ 3 trên giấy sẽ không đủ trên hiện trường.",
      {
        type: "h2",
        text: "Gợi ý phân bổ ngân sách 1 tỷ 3",
      },
      "Một khung phân bổ thực tế (có thể chỉnh theo lô đất): khoảng 55–65% cho phần thô và kết cấu; 25–35% hoàn thiện phổ thông; 8–12% phát sinh – chống thấm bổ sung – hoàn thiện mặt tiền vừa đủ; phần còn lại cho giấy phép, giám sát và dự phòng. Không để nội thất gỗ nuốt quá 15% khi mục tiêu là xây nhà chỉ với 1 tỷ 3 để ở được.",
      "Ví dụ minh họa (không phải báo giá chốt): nhà 4×12m, 1 trệt 1 lầu + sân thượng ~100–110 m² sàn, trọn gói phổ thông có thể nằm trong tầm 1 tỷ 3 nếu nền ổn, hẻm xe vào được, mặt tiền sơn – gạch đơn giản. Muốn thêm một tầng, phải giảm cấp hoàn thiện hoặc chấp nhận hoàn thiện sau.",
      "Đối chiếu thêm [báo giá xây nhà phố 2026](/tin-tuc/bao-gia-xay-nha-pho-2026), [báo giá nhà phố phần thô](/tin-tuc/bao-gia-nha-pho-phan-tho) và [báo giá trọn gói](/bang-bao-gia/bao-gia-tron-goi) trước khi ký. Xây nhà chỉ với 1 tỷ 3 chỉ an toàn khi bảng giá tách m², vật tư tham chiếu và hạng mục loại trừ.",
      {
        type: "h2",
        text: "Quy trình để 1 tỷ 3 không bị đội",
      },
      "Bước 1 — Chốt nhu cầu: số người ở, số phòng ngủ, để xe, có ông bà ở cùng không. Bước 2 — Khảo sát lô đất: hướng, hẻm, nhà liền kề, nền. Bước 3 — Concept mặt bằng 1–2 phương án vừa túi tiền. Bước 4 — Dự toán tách thô / hoàn thiện. Bước 5 — Khóa mẫu gạch, sơn, cửa. Bước 6 — Hợp đồng theo giai đoạn nghiệm thu. Bước 7 — Thi công và bàn giao checklist.",
      "Gia chủ nên yêu cầu lịch theo tuần, ảnh tiến độ và biên bản móng – đổ sàn – chống thấm. Thanh toán gắn nghiệm thu giúp xây nhà chỉ với 1 tỷ 3 không bị rút vốn sai lúc. Nếu muốn một đầu mối, xem [thi công nhà phố trọn gói](/tin-tuc/thi-cong-nha-pho-tron-goi) và dịch vụ [thi công xây dựng](/dich-vu/thi-cong-xay-dung).",
      "Checklist trước khởi công còn nằm ở bài [kinh nghiệm xây nhà phố lần đầu](/tin-tuc/kinh-nghiem-xay-nha-pho). Đọc xong, bạn sẽ biết 1 tỷ 3 nên “mua” kết cấu và chống thấm trước, chứ không phải mặt tiền cho đẹp ảnh.",
      {
        type: "h2",
        text: "FAQ — xây nhà chỉ với 1 tỷ 3",
      },
      "Xây nhà chỉ với 1 tỷ 3 có gồm tiền đất không? Không. 1 tỷ 3 trong bài này là ngân sách thi công trên đất đã có.",
      "Làm được mấy tầng? Phổ biến là 1 trệt 1 lầu; 1 trệt 2 lầu chỉ nên làm khi diện tích sàn vừa và hoàn thiện phổ thông.",
      "Có làm trọn gói được không? Được ở cấp phổ thông, nhà gọn, mặt tiền tối giản. Phải ghi rõ vật tư và hạng mục ngoài gói.",
      "Nhà trong hẻm nhỏ có đủ 1 tỷ 3 không? Có thể thiếu vì vận chuyển và nhân công. Cần khảo sát hiện trạng trước khi chốt giá.",
      "Có nên tự mua vật tư để tiết kiệm? Chỉ nên khi bạn có thời gian và hiểu chủng loại. Tự mua lệch quy cách dễ phát sinh nhân công — phản tác dụng khi xây nhà chỉ với 1 tỷ 3.",
      "Xin phép xây dựng có tốn thêm không? Có, lệ phí và thời gian làm hồ sơ nên tính riêng. Hồ sơ thiết kế chuẩn hỗ trợ thủ tục theo quy định; tham khảo thêm hướng dẫn kỹ thuật tại [Bộ Xây dựng](https://moc.gov.vn).",
      {
        type: "h2",
        text: "Kết luận — nhận tư vấn phương án đúng 1 tỷ 3",
      },
      "Xây nhà chỉ với 1 tỷ 3 là khả thi khi kỳ vọng đúng: nhà phố gọn, hoàn thiện đủ ở, kết cấu và chống thấm không cắt. Sai lầm lớn nhất là nhìn nhà mẫu cao cấp rồi ép giá xuống 1 tỷ 3.",
      "Nếu bạn đang có lô đất và ngân sách khoảng 1,3 tỷ, hãy gửi kích thước đất, số tầng mong muốn và ảnh hiện trạng. Minh Phú Building sẽ nói thẳng phương án nào làm được, phương án nào nên để giai đoạn 2. Liên hệ qua [trang liên hệ](/lien-he) hoặc hotline 0912 166 079.",
      "Muốn xem hình khối nhà phố thực tế, ghé [thư viện nhà phố](/thu-vien/nha-pho) và [công trình tiêu biểu](/cong-trinh-tieu-bieu) để đối chiếu phong cách vừa túi tiền trước khi chốt thiết kế.",
    ],
    gallery: [
      {
        src: m("upload/nha-pho/nha-pho-01-mat-tien.png"),
        alt: "Xây nhà chỉ với 1 tỷ 3 — mặt tiền nhà phố gọn, tối giản",
      },
      {
        src: m("upload/nha-pho/nha-pho-02-phong-khach.png"),
        alt: "Phòng khách liên thông — tối ưu công năng khi xây nhà 1 tỷ 3",
      },
      {
        src: m("upload/nha-pho/nha-pho-03-bep.png"),
        alt: "Bếp gọn cho nhà phố ngân sách 1 tỷ 3",
      },
      {
        src: m("upload/nha-pho/nha-pho-04-phong-ngu.png"),
        alt: "Phòng ngủ đủ dùng khi xây nhà chỉ với 1 tỷ 3",
      },
      {
        src: m("upload/nha-pho/nha-pho-05-san-thuong.png"),
        alt: "Sân thượng giặt phơi — hạng mục nên giữ trong gói 1 tỷ 3",
      },
      {
        src: m("upload/tron-goi/tg-02-thi-cong.png"),
        alt: "Thi công phần thô — không cắt khi xây nhà 1 tỷ 3",
      },
    ],
  },
  ...seoArticles,
  {
    title:
      "Thiết kế nhà phố mặt tiền 5m: 7 giải pháp tối ưu công năng & ánh sáng 2026",
    href: "/tin-tuc/thiet-ke-nha-pho-mat-tien-5m",
    image: m("upload/mat-tien-5m/mt5m-01-thumbnail-mat-tien.png"),
    imageAlt: "Thiết kế nhà phố mặt tiền 5m — mẫu mặt tiền hiện đại tại TP.HCM",
    date: "27/08/2026",
    keywords: [
      "thiết kế nhà phố mặt tiền 5m",
      "nhà phố mặt tiền hẹp",
      "thiết kế nhà phố 5m",
      "nhà phố 1 trệt 2 lầu mặt tiền 5m",
      "tối ưu nhà phố hẹp",
    ],
    excerpt:
      "Thiết kế nhà phố mặt tiền 5m cần tối ưu thông tầng, mặt dựng và công năng. Minh Phú Building gợi ý 7 giải pháp sáng – rộng cho lô hẹp tại TP.HCM. Tư vấn miễn phí: 0912 166 079.",
    body: [
      "Lô đất hẹp là thực tế phổ biến tại TP.HCM. Thiết kế nhà phố mặt tiền 5m nếu làm đúng sẽ vẫn sáng, thoáng và đủ phòng ngủ; làm sai dễ tối, nóng và “bí” theo chiều sâu. Bài viết này của Minh Phú Building tổng hợp nguyên tắc và 7 giải pháp thực tế để thiết kế nhà phố mặt tiền 5m đạt công năng – thẩm mỹ trong ngân sách hợp lý.",
      "Nhiều gia chủ nghĩ mặt tiền hẹp đồng nghĩa với nhà chật. Thực tế, cảm giác rộng hay hẹp phụ thuộc cách tổ chức không gian hơn là con số mét ngang. Khi thiết kế nhà phố mặt tiền 5m, ưu tiên ánh sáng tự nhiên, giảm tường ngăn và chọn nội thất đúng tỷ lệ thường mang lại trải nghiệm ở tốt hơn nhà rộng nhưng bố trí rối.",
      {
        type: "h2",
        text: "Thiết kế nhà phố mặt tiền 5m cần ưu tiên điều gì?",
      },
      "Với bề ngang khoảng 5m, mọi quyết định về cầu thang, thông tầng, kích thước cửa và bố trí bếp – WC đều ảnh hưởng trực tiếp trải nghiệm ở. Mục tiêu của thiết kế nhà phố mặt tiền 5m là: đưa ánh sáng sâu vào nhà, giảm hành lang chết, giữ chiều rộng thông thủy cho phòng chính, và tạo mặt tiền rõ khối nhìn từ phố.",
      "Gia chủ nên chốt sớm số thành viên, số phòng ngủ, có để xe trong nhà hay không, và ngân sách hoàn thiện. Những thông tin này giúp kiến trúc sư chọn phương án 1 trệt 1 lầu, 1 trệt 2 lầu hoặc cao hơn mà không vượt quỹ đất và quy định xây dựng địa phương.",
      "Ngoài ra, cần xác định hướng nhà, nhà liền kề hai bên có chắn sáng không, và chiều sâu lô đất. Lô sâu trên 16–18m đòi hỏi giếng trời hoặc ô lấy sáng giữa nhà mạnh hơn. Đây là bước “chẩn đoán” trước khi vẽ — tránh sửa lớn khi đã lên phối cảnh 3D.",
      {
        type: "h2",
        text: "7 giải pháp tối ưu khi thiết kế nhà phố mặt tiền 5m",
      },
      "1) Đặt cầu thang sát tường biên và chọn dạng thẳng hoặc chữ U gọn để giữ khoảng giữa cho phòng khách – bếp. 2) Mở thông tầng gần mặt tiền hoặc giữa nhà để ánh sáng đổ xuống các tầng. 3) Dùng cửa kính lớn + ô lấy sáng trên cao thay vì tường đặc kín. 4) Liên thông khách – bếp – ăn ở tầng trệt để cảm giác rộng hơn bề ngang thực tế.",
      "5) Hạn chế phòng quá nhỏ chia cắt bằng tường đặc; ưu tiên vách kính, tủ cao sát tường. 6) Sân thượng hoặc giếng trời phía sau giúp thông gió tự nhiên cho nhà sâu. 7) Mặt dựng thiết kế nhà phố mặt tiền 5m nên theo khối dọc rõ, màu sáng hoặc trung tính, chi tiết gỗ/kim loại vừa đủ — tránh phào chỉ dày làm mặt tiền thêm “nặng”.",
      "Khi áp dụng đồng bộ 7 giải pháp trên, nhà 5m thường “mở” rõ ở tầng trệt và sáng hơn ở các phòng giữa. Minh Phú Building hay kiểm tra lại bằng mặt cắt đứng: nếu ánh sáng và gió chưa xuyên được, sẽ điều chỉnh vị trí thông tầng trước khi chốt hồ sơ thi công.",
      {
        type: "h2",
        text: "Bố trí công năng mẫu cho nhà phố 5m",
      },
      "Phương án phổ biến: tầng trệt để xe + khách + bếp ăn; lầu 1 hai phòng ngủ hoặc một master; lầu 2 phòng thờ / phòng làm việc / phòng ngủ phụ; sân thượng giặt phơi và cây xanh. Khi thiết kế nhà phố mặt tiền 5m, WC nên đặt về phía tường kỹ thuật để đường ống ngắn, dễ bảo trì và không chiếm diện tích giữa nhà.",
      "Nếu cần nhiều phòng ngủ, có thể thu gọn phòng khách theo chiều sâu và đẩy bếp về sau, miễn là vẫn giữ hành lang ánh sáng. Minh Phú Building thường mô phỏng 2–3 phương án mặt bằng trước khi chốt, để gia chủ thấy rõ chỗ nào rộng, chỗ nào cần đánh đổi.",
      "Với gia đình trẻ ít thành viên, phương án 1 trệt 1 lầu + sân thượng thường đủ dùng và dễ kiểm soát chi phí. Gia đình đông người hoặc có nhu cầu cho thuê một tầng sẽ nghiêng về 1 trệt 2–3 lầu, nhưng phải chấp nhận cầu thang chiếm diện tích và cần thông tầng mạnh hơn.",
      {
        type: "h2",
        text: "Ánh sáng, thông gió và vật liệu cho nhà hẹp",
      },
      "Nhà mặt tiền 5m dễ tối ở giữa và cuối nhà. Giải pháp đồng bộ: kính low-e mặt tiền, giếng trời, sơn tường sáng, sàn gỗ sáng hoặc đá sáng, gương khu vực điểm nhấn. Tránh nhồi nội thất tối màu và rèm dày kín ngày. Thiết kế nhà phố mặt tiền 5m đạt điểm cao về trải nghiệm khi luồng gió từ trước – sau và từ dưới – trên được tính từ giai đoạn concept.",
      "Về kết cấu, nhà liền kề cần khảo sát tường chung, móng và khả năng thi công trong hẻm. Hồ sơ thiết kế đầy đủ (kiến trúc – kết cấu – điện nước) giúp thi công đúng bản vẽ và hạn chế phát sinh. Tham khảo thêm dịch vụ [thiết kế nhà phố](/dich-vu/thiet-ke-nha-pho) và [bảng giá thiết kế nhà](/bang-bao-gia/thiet-ke-nha).",
      "Vật liệu hoàn thiện nên chọn tông sáng – trung tính, bề mặt dễ vệ sinh. Lan can mỏng, cửa sổ đúng tỷ lệ và hệ thống đèn âm trần hỗ trợ khi trời tối sớm. Tránh mặt tiền “đóng hộp” bằng tấm đặc kín — đó là lỗi hay gặp khiến nhà hẹp càng tối.",
      {
        type: "h2",
        text: "Chi phí và quy trình thiết kế nhà phố mặt tiền 5m",
      },
      "Chi phí thiết kế nhà phố mặt tiền 5m phụ thuộc số tầng, mức độ chi tiết bản vẽ và yêu cầu phối cảnh 3D. Phí thiết kế thường chỉ là một phần nhỏ so với tổng mức đầu tư xây dựng, nhưng quyết định phần lớn công năng và khả năng kiểm soát [báo giá xây nhà phố 2026](/tin-tuc/bao-gia-xay-nha-pho-2026) về sau.",
      "Quy trình tại Minh Phú Building: khảo sát hiện trạng → concept mặt bằng & mặt đứng → chỉnh sửa theo nhu cầu → hồ sơ kỹ thuật → bàn giao và hỗ trợ khi thi công. Nếu bạn muốn một đầu mối từ thiết kế đến xây dựng, xem thêm [thi công nhà phố trọn gói](/dich-vu/thi-cong-xay-dung) và album [nhà phố mẫu 2026](/thu-vien/nha-pho-mau-2026).",
      "Gia chủ nên yêu cầu báo giá thiết kế ghi rõ sản phẩm bàn giao (mặt bằng, mặt đứng, mặt cắt, triển khai WC – bếp, phối cảnh). Hồ sơ càng rõ, dự toán xây dựng càng sát — giảm tranh luận phát sinh giữa thiết kế và nhà thầu.",
      {
        type: "h2",
        text: "FAQ — thiết kế nhà phố mặt tiền 5m",
      },
      "Thiết kế nhà phố mặt tiền 5m có làm được 1 trệt 2 lầu không? Được, nếu chiều sâu và quy định xây dựng cho phép; cần tính kỹ cầu thang và thông tầng để không bí.",
      "Nhà 5m có nên làm gara trong nhà? Có thể, nhưng sẽ chiếm chiều sâu tầng trệt. Nhiều gia chủ chọn để xe gọn phía trước và ưu tiên không gian khách – bếp liên thông.",
      "Làm sao nhà hẹp vẫn sáng? Kết hợp cửa lớn, thông tầng, giếng trời và vật liệu phản quang vừa phải — đây là phần cốt lõi khi thiết kế nhà phố mặt tiền 5m.",
      "Có cần xin phép xây dựng không? Có. Hồ sơ thiết kế chuẩn hỗ trợ thủ tục và thi công đúng pháp lý. Bạn nên nhờ đơn vị tư vấn theo địa chỉ lô đất cụ thể.",
      "Thiết kế xong có thi công luôn được không? Có. Minh Phú Building đồng bộ bản vẽ với đội thi công để hạn chế lệch giữa phối cảnh và hiện trạng thực tế.",
      {
        type: "h2",
        text: "Kết luận — nhận concept mặt tiền 5m phù hợp ngân sách",
      },
      "Thiết kế nhà phố mặt tiền 5m thành công khi ưu tiên ánh sáng, mặt bằng gọn và mặt tiền rõ khối thay vì chạy theo chi tiết trang trí. Mỗi mét ngang đều quý — hãy dùng cho công năng thật sự cần.",
      "Nếu bạn đang có lô 5m tại TP.HCM và cần thiết kế nhà phố mặt tiền 5m (kèm dự toán thô – hoàn thiện), hãy gửi kích thước đất và số thành viên gia đình. Minh Phú Building tư vấn concept miễn phí ở bước đầu. Liên hệ qua [trang liên hệ](/lien-he) hoặc hotline để được hỗ trợ.",
      "Bạn cũng có thể tham khảo xu hướng nhà hẹp đô thị qua các tài liệu quy hoạch – xây dựng công bố tại [Bộ Xây dựng](https://moc.gov.vn).",
    ],
    gallery: [
      {
        src: m("upload/mat-tien-5m/mt5m-01-thumbnail-mat-tien.png"),
        alt: "Thiết kế nhà phố mặt tiền 5m — thumbnail mặt tiền hiện đại",
      },
      {
        src: m("upload/mat-tien-5m/mt5m-02-mat-dung.png"),
        alt: "Mặt dựng nhà phố 5m tối ưu tỷ lệ đứng",
      },
      {
        src: m("upload/mat-tien-5m/mt5m-03-phong-khach.png"),
        alt: "Phòng khách thông tầng trong thiết kế nhà phố mặt tiền 5m",
      },
      {
        src: m("upload/mat-tien-5m/mt5m-04-bep-an.png"),
        alt: "Bếp ăn liên thông cho nhà phố mặt tiền hẹp 5m",
      },
      {
        src: m("upload/mat-tien-5m/mt5m-05-thong-tang.png"),
        alt: "Giếng trời và cầu thang lấy sáng nhà phố 5m",
      },
      {
        src: m("upload/mat-tien-5m/mt5m-06-phong-ngu.png"),
        alt: "Phòng ngủ tối ưu trong thiết kế nhà phố mặt tiền 5m",
      },
    ],
  },
  {
    title:
      "Báo giá xây nhà phố 2026: phần thô – hoàn thiện – trọn gói minh bạch tại TP.HCM",
    href: "/tin-tuc/bao-gia-xay-nha-pho-2026",
    image: m("upload/bao-gia/bao-gia-01-thumbnail-mat-tien.png"),
    imageAlt: "Báo giá xây nhà phố 2026 — mặt tiền nhà phố hoàn thiện tại TP.HCM",
    date: "26/08/2026",
    keywords: [
      "báo giá xây nhà phố 2026",
      "báo giá phần thô nhà phố",
      "báo giá hoàn thiện nhà phố",
      "xây nhà phố trọn gói TP.HCM",
      "đơn giá xây nhà phố",
    ],
    excerpt:
      "Báo giá xây nhà phố 2026 tại Minh Phú Building: phần thô, hoàn thiện và trọn gói minh bạch theo m². Nhận dự toán miễn phí theo hiện trạng — hotline 0912 166 079.",
    body: [
      "Trước khi ký hợp đồng, hầu hết gia chủ đều muốn nắm rõ ngân sách. Báo giá xây nhà phố 2026 giúp bạn hình dung chi phí phần thô, hoàn thiện và trọn gói theo m², đồng thời hiểu yếu tố nào làm thay đổi đơn giá. Bài viết dưới đây của Minh Phú Building tổng hợp khung tham khảo tại TP.HCM và cách nhận dự toán sát thực tế — không “giá ảo”, không bỏ sót hạng mục.",
      {
        type: "h2",
        text: "Báo giá xây nhà phố 2026 gồm những hạng mục nào?",
      },
      "Một bản báo giá xây nhà phố 2026 đầy đủ thường tách rõ ba nhóm: phần thô (kết cấu – bao che), phần hoàn thiện (vật liệu mặt nhìn thấy) và các hạng mục phát sinh hoặc tùy chọn. Khi so sánh nhà thầu, hãy yêu cầu bảng tách hạng mục thay vì chỉ một con số tổng — đó là cách tránh lệch ngân sách giữa giai đoạn móng và giai đoạn sơn, gạch, trần.",
      "Phần thô thường gồm móng, cột – dầm – sàn, tường bao, cầu thang bê tông, mái (bê tông hoặc mái tôn/khung), chống thấm sơ bộ, hệ thống ống chờ điện nước. Phần hoàn thiện gồm ốp lát, sơn nước, trần, cửa, thiết bị vệ sinh cơ bản, lan can, tay vịn và các chi tiết thẩm mỹ mặt tiền. Gói trọn gói gắn hai phần trên thành một dòng chảy thi công, do một đơn vị điều phối tiến độ và trách nhiệm bàn giao.",
      {
        type: "h2",
        text: "Phân biệt báo giá phần thô, hoàn thiện và trọn gói",
      },
      "Báo giá phần thô phù hợp khi gia chủ muốn kiểm soát giai đoạn kết cấu trước, hoặc tự chọn nhà thầu hoàn thiện riêng. Đơn giá phần thô nhà phố tại TP.HCM năm 2026 thường dao động khoảng 3,8 – 5,5 triệu đồng/m² sàn xây dựng (tùy độ sâu móng, số tầng, địa chất và cấp độ chống thấm). Con số này chỉ mang tính tham khảo; khảo sát hiện trạng mới cho ra dự toán chính xác.",
      "Báo giá hoàn thiện phụ thuộc mạnh vào vật liệu: gạch men hay granite, sơn thường hay sơn cao cấp, cửa nhôm kính hay gỗ công nghiệp. Khung tham khảo hoàn thiện nhà phố 2026 khoảng 3,5 – 7 triệu đồng/m² tùy cấp độ. Vì vậy, khi nhận báo giá xây nhà phố 2026, hãy ghi rõ thương hiệu / chủng loại vật tư chính — đây là chỗ dễ “đội giá” nếu hợp đồng mơ hồ.",
      "Báo giá xây nhà phố trọn gói gộp thô + hoàn thiện + điều phối nhân lực. Khung tham khảo trọn gói phổ thông tại TP.HCM năm 2026 khoảng 7 – 12 triệu đồng/m² tùy vật tư và độ phức tạp mặt tiền. Gói trọn gói giúp giảm rủi ro lệch tiến độ giữa các đội thầu, phù hợp gia chủ bận việc hoặc muốn một đầu mối chịu trách nhiệm đến khi bàn giao.",
      "Bạn có thể xem chi tiết từng gói trên trang [Bảng báo giá](/bang-bao-gia), gồm [báo giá phần thô](/bang-bao-gia/bao-gia-phan-tho) và [báo giá trọn gói](/bang-bao-gia/bao-gia-tron-goi).",
      {
        type: "h2",
        text: "Yếu tố làm thay đổi báo giá xây nhà phố 2026",
      },
      "Cùng một diện tích sàn, hai căn nhà phố có thể lệch nhau hàng trăm triệu đồng. Các yếu tố thường gặp: kích thước mặt tiền (4m, 5m, 6m…), số tầng và có tầng hầm hay không, nền đất yếu cần cọc / đài móng đặc biệt, nhà liền kề phải gia cố tường chung, phong cách mặt tiền phức tạp (các chi tiết phào chỉ, đá ốp, kính lớn), và yêu cầu hoàn thiện cao cấp.",
      "Ngoài ra, tiến độ thi công, điều kiện tiếp cận xe vật tư trong hẻm nhỏ, và biến động giá thép – xi măng – cát đá trong năm cũng ảnh hưởng. Vì thế báo giá xây nhà phố 2026 trên internet chỉ nên dùng để lập ngân sách sơ bộ. Dự toán chính thức cần khảo sát thực địa, đo đạc và thống nhất vật tư trước khi ký.",
      {
        type: "h2",
        text: "Cách đọc báo giá để tránh phát sinh ngoài ý muốn",
      },
      "Khi nhận bảng dự toán, kiểm tra năm nhóm: (1) diện tích tính giá theo công thức nào, (2) hạng mục nào nằm trong gói / ngoài gói, (3) chủng loại vật tư chính kèm thương hiệu tham chiếu, (4) thời gian thi công và điều kiện nghiệm thu từng giai đoạn, (5) chính sách bảo hành. Một báo giá xây nhà phố 2026 “rẻ bất thường” thường cắt giảm chống thấm, thép, hoặc đẩy nhiều hạng mục sang phát sinh.",
      "Nên yêu cầu tách rõ điện nước dân dụng, chống thấm mái – WC, cửa đi cửa sổ và lan can. Nếu bạn đang cân nhắc vừa thiết kế vừa thi công, tham khảo thêm dịch vụ [thiết kế nhà phố](/dich-vu/thiet-ke-nha-pho) và [thi công xây dựng](/dich-vu/thi-cong-xay-dung) để đồng bộ bản vẽ với dự toán.",
      {
        type: "h2",
        text: "Quy trình nhận báo giá tại Minh Phú Building",
      },
      "Minh Phú Building lập báo giá xây nhà phố 2026 theo quy trình ngắn gọn: tiếp nhận nhu cầu (diện tích, số tầng, phong cách, ngân sách mong muốn) → khảo sát hiện trạng / xem bản vẽ → đề xuất cấp độ hoàn thiện phù hợp → gửi dự toán tách hạng mục → trao đổi chỉnh sửa → ký hợp đồng và triển khai. Gia chủ được tư vấn miễn phí ở bước đầu để loại phương án vượt ngân sách sớm.",
      "Với nhà cải tạo hoặc nâng tầng, quy trình bổ sung đánh giá kết cấu hiện hữu trước khi chốt đơn giá. Trường hợp này thường không áp dụng “giá m² chung” mà tính theo khối lượng thực tế. Xem thêm hướng dẫn tại bài [cải tạo nhà phố cũ](/tin-tuc/cai-tao-nha-pho-cu) hoặc gói [sửa chữa trọn gói](/bang-bao-gia/sua-chua-tron-goi).",
      {
        type: "h2",
        text: "FAQ — câu hỏi thường gặp về báo giá xây nhà phố 2026",
      },
      "Báo giá xây nhà phố 2026 trên mạng có chính xác không? Chỉ mang tính tham khảo. Đơn giá thật phụ thuộc địa chất, số tầng, vật tư và điều kiện thi công tại lô đất của bạn.",
      "Nên chọn phần thô rồi tự hoàn thiện, hay làm trọn gói? Nếu bạn có kinh nghiệm chọn vật tư và giám sát, tách giai đoạn có thể tối ưu chi phí. Nếu muốn một đầu mối chịu trách nhiệm tiến độ và chất lượng đến bàn giao, trọn gói thường an tâm hơn.",
      "Diện tích tính giá theo m² sàn xây dựng thế nào? Thông thường tính tổng diện tích các sàn sử dụng theo quy ước trong hợp đồng (có/không tính sân thượng, mái, diện tích thông tầng). Hãy yêu cầu ghi rõ công thức ngay trên báo giá.",
      "Mất bao lâu để nhận dự toán? Sau khi có thông tin cơ bản và (nếu cần) khảo sát, Minh Phú Building thường gửi khung báo giá xây nhà phố 2026 trong thời gian nhanh để gia chủ so sánh và quyết định.",
      "Có hỗ trợ thiết kế trước khi báo giá không? Có. Hồ sơ thiết kế rõ ràng giúp dự toán sát hơn. Tham khảo [bảng giá thiết kế nhà](/bang-bao-gia/thiet-ke-nha) và album [nhà phố mẫu 2026](/thu-vien/nha-pho-mau-2026).",
      {
        type: "h2",
        text: "Kết luận — nhận dự toán sát thực tế ngay hôm nay",
      },
      "Tóm lại, báo giá xây nhà phố 2026 chỉ thực sự hữu ích khi được tách hạng mục, ghi rõ vật tư và gắn với hiện trạng công trình. Đừng quyết định chỉ vì một con số thấp nhất. Hãy đối chiếu phạm vi công việc, tiến độ và bảo hành trước khi ký.",
      "Nếu bạn cần báo giá xây nhà phố 2026 cho căn nhà phố tại TP.HCM — phần thô, hoàn thiện hoặc trọn gói — hãy gửi diện tích, số tầng và phong cách mong muốn. Đội ngũ Minh Phú Building sẽ tư vấn cấp độ phù hợp ngân sách và gửi dự toán minh bạch. Liên hệ ngay qua [trang liên hệ](/lien-he) hoặc gọi hotline để được hỗ trợ.",
      "Tham khảo thêm chuẩn xây dựng dân dụng tại [Bộ Xây dựng](https://moc.gov.vn) khi bạn muốn đối chiếu quy định kỹ thuật liên quan.",
    ],
    gallery: [
      {
        src: m("upload/bao-gia/bao-gia-01-thumbnail-mat-tien.png"),
        alt: "Báo giá xây nhà phố 2026 — mặt tiền nhà phố mẫu",
      },
      {
        src: m("upload/bao-gia/bao-gia-02-phan-tho.png"),
        alt: "Báo giá phần thô nhà phố 2026 — giai đoạn kết cấu",
      },
      {
        src: m("upload/bao-gia/bao-gia-03-hoan-thien.png"),
        alt: "Báo giá hoàn thiện nhà phố 2026 — ốp lát và sơn nước",
      },
      {
        src: m("upload/bao-gia/bao-gia-04-tron-goi.png"),
        alt: "Báo giá xây nhà phố 2026 trọn gói — công trình bàn giao",
      },
      {
        src: m("upload/bao-gia/bao-gia-05-noi-that.png"),
        alt: "Nội thất nhà phố sau hoàn thiện theo báo giá xây nhà phố 2026",
      },
      {
        src: m("upload/bao-gia/bao-gia-06-vat-tu-du-toan.png"),
        alt: "Vật tư và bản vẽ dùng để lập báo giá xây nhà phố 2026",
      },
    ],
  },
  phongCachSangArticle,
  {
    title: "THÔNG BÁO LỊCH NGHỈ TẾT NGUYÊN ĐÁN 2026",
    href: "/tin-tuc/lich-nghi-tet-2026",
    image: m("thumbs/308x151x1/upload/news/lich-nghi-tet-anh-tan-3057.jpg.webp"),
    date: "10/02/2026",
    excerpt:
      "CÔNG TY TNHH KIẾN TRÚC MINH PHÚ xin trân trọng thông báo đến Quý Khách Hàng, Quý Đối Tác về lịch nghỉ Tết Nguyên Đán 2026…",
  },
];

export const servicesDetail = [
  {
    slug: "thiet-ke-nha-luxury",
    title: "Thiết kế nhà Luxury",
    image: fields[0].image,
    summary: "Thiết kế nhà ở cao cấp, chú trọng thẩm mỹ, vật liệu và trải nghiệm không gian sống.",
  },
  {
    slug: "thiet-ke-thi-cong-noi-that",
    title: "Thiết kế – thi công nội thất nhà ở",
    image: fields[1].image,
    summary: "Giải pháp nội thất đồng bộ từ concept đến thi công hoàn thiện.",
  },
  {
    slug: "hoan-thien-nha-da-xay-tho",
    title: "Hoàn thiện nhà đã xây thô",
    image: fields[2].image,
    summary: "Hoàn thiện phần hoàn thiện, nội – ngoại thất cho nhà đã xây thô.",
  },
  {
    slug: "thiet-ke-nha-pho",
    title: "Thiết kế nhà phố",
    image: fields[3].image,
    summary: "Thiết kế nhà phố hiện đại, tân cổ điển tối ưu công năng và chi phí.",
  },
  {
    slug: "thi-cong-xay-dung",
    title: "Thi công xây dựng",
    image: fields[4].image,
    summary: "Thi công nhà phố trọn gói từ móng đến hoàn thiện, đúng tiến độ.",
  },
  {
    slug: "sua-chua-cai-tao",
    title: "Sửa chữa cải tạo nhà",
    image: fields[5].image,
    summary: "Cải tạo, sửa chữa, nâng tầng nhà phố hiện hữu tại TP.HCM.",
  },
];

export const footerSupport = [
  { label: "Hỗ trợ đặt hàng", href: "/ho-tro-dat-hang" },
  { label: "Chính sách trả hàng", href: "/chinh-sach-tra-hang" },
  { label: "Chính sách bảo hành", href: "/chinh-sach-bao-hanh" },
];

const thumb = (file: string) => m(`thumbs/354x424x1/upload/news/${file}`);

/** Bộ ảnh nhà phố phong cách sáng (web + fanpage 1:1) */
export const townhouseGallery = [
  {
    src: m("upload/nha-pho/fanpage/fp-nha-sang-01-mat-tien.png"),
    alt: "Mặt tiền nhà phố phong cách sáng",
  },
  {
    src: m("upload/nha-pho/fanpage/fp-nha-sang-02-khach.png"),
    alt: "Phòng khách sáng thoáng nhà phố",
  },
  {
    src: m("upload/nha-pho/fanpage/fp-nha-sang-03-bep.png"),
    alt: "Bếp trắng sáng nhà phố",
  },
  {
    src: m("upload/nha-pho/fanpage/fp-nha-sang-04-ngu.png"),
    alt: "Phòng ngủ sáng nhà phố",
  },
  {
    src: m("upload/nha-pho/fanpage/fp-nha-sang-05-san-thuong.png"),
    alt: "Sân thượng ban ngày nhà phố",
  },
  {
    src: m("upload/nha-pho/fanpage/fp-nha-sang-06-tong-the.png"),
    alt: "Tổng thể nhà phố trắng sáng",
  },
];

/** /thu-vien albums (from original) */
export const galleryAlbums = [
  {
    title: "NHÀ PHỐ PHONG CÁCH SÁNG",
    href: "/thu-vien/nha-pho-mau-2026",
    image: m("upload/nha-pho/fanpage/fp-nha-sang-01-mat-tien.png"),
    images: townhouseGallery.map((g) => g.src),
  },
  { title: "NHÀ ỐNG", href: "/thu-vien/nha-ong", image: thumb("4-5593.png.webp") },
  {
    title: "NHÀ PHỐ HIỆN ĐẠI",
    href: "/thu-vien/nha-pho-hien-dai",
    image: thumb("z76010453948554b5f3574bd4b14b8e2413059de3987aa-9842.jpg.webp"),
  },
  {
    title: "SÂN THƯỢNG",
    href: "/thu-vien/san-thuong",
    image: thumb("37-san-thuong-view-07-8257.jpg.webp"),
  },
  {
    title: "PHÒNG NGỦ",
    href: "/thu-vien/phong-ngu",
    image: thumb("22-phong-ngu-03-view-04-1073.jpg.webp"),
  },
  {
    title: "NHÀ PHỐ",
    href: "/thu-vien/nha-pho",
    image: thumb("6023333911221007787851666817744011981401569376n-6529.jpg.webp"),
  },
  { title: "BIỆT THỰ", href: "/thu-vien/biet-thu", image: thumb("bietthu6-3463.jpg.webp") },
  {
    title: "TẦNG TRỆT",
    href: "/thu-vien/tang-tret",
    image: thumb("08tret-02view08-7627.jpg.webp"),
  },
];

/** /bang-bao-gia cards */
export const pricingCards = [
  {
    title: "BÁO GIÁ TRỌN GÓI",
    href: "/bang-bao-gia/bao-gia-tron-goi",
    image: m(
      "watermark/product/614x702x1/upload/product/6003611331221046915531666811713918399919109964n-2143.jpg.webp",
    ),
    summary:
      "Gói thi công nhà phố trọn gói từ móng đến hoàn thiện. Báo giá minh bạch theo hạng mục, vật tư và phạm vi thi công thực tế.",
    highlights: [
      "Khảo sát hiện trạng & tư vấn phương án miễn phí",
      "Dự toán chi tiết theo hạng mục – vật tư",
      "Thi công đồng bộ, kiểm soát tiến độ rõ ràng",
      "Bảo hành & hỗ trợ sau bàn giao",
    ],
  },
  {
    title: "SỬA CHỮA TRỌN GÓI",
    href: "/bang-bao-gia/sua-chua-tron-goi",
    image: m(
      "watermark/product/614x702x1/upload/product/5986342301221018009271666815368426326397992069n-6206.jpg.webp",
    ),
    summary:
      "Dịch vụ sửa chữa – cải tạo nhà phố trọn gói: nâng tầng, cải tạo công năng, hoàn thiện nội – ngoại thất theo ngân sách.",
    highlights: [
      "Đánh giá kết cấu & hiện trạng trước khi thi công",
      "Phương án tối ưu chi phí – công năng",
      "Thi công gọn gàng, hạn chế ảnh hưởng sinh hoạt",
      "Cam kết tiến độ và chất lượng bàn giao",
    ],
  },
  {
    title: "THIẾT KẾ NHÀ",
    href: "/bang-bao-gia/thiet-ke-nha",
    image: m(
      "watermark/product/614x702x1/upload/product/z75974407313861a35d1a219a7bb997ebd7dbfd5d595f4-2274.jpg.webp",
    ),
    summary:
      "Thiết kế nhà phố, biệt thự phong cách hiện đại & tân cổ điển. Hồ sơ bản vẽ đầy đủ, dễ triển khai thi công.",
    highlights: [
      "Concept phù hợp nhu cầu & ngân sách",
      "Bản vẽ kiến trúc – kết cấu – điện nước",
      "Phối cảnh 3D trực quan",
      "Hỗ trợ điều chỉnh trước khi ký thi công",
    ],
  },
  {
    title: "BÁO GIÁ PHẦN THÔ",
    href: "/bang-bao-gia/bao-gia-phan-tho",
    image: m(
      "watermark/product/614x702x1/upload/product/5997998431221019832791666815709527543347360857n-9508.jpg.webp",
    ),
    summary:
      "Báo giá phần thô rõ ràng theo m² và hạng mục: móng, khung, sàn, tường, mái — giúp kiểm soát chi phí giai đoạn đầu.",
    highlights: [
      "Đơn giá phần thô theo cấp độ hoàn thiện",
      "Liệt kê vật tư chính rõ ràng",
      "Phù hợp nhà phố, biệt thự, nâng tầng",
      "Dễ so sánh & quyết định đầu tư",
    ],
  },
  {
    title: "KHUYẾN MẠI",
    href: "/bang-bao-gia/khuyen-mai",
    image: m(
      "watermark/product/614x702x1/upload/product/lau-dai-chau-au-3-tang-9272-1140x768-8026.jpg.webp",
    ),
    summary:
      "Ưu đãi thiết kế – thi công theo từng giai đoạn. Liên hệ hotline để nhận chương trình khuyến mại mới nhất.",
    highlights: [
      "Ưu đãi phí thiết kế khi ký thi công",
      "Hỗ trợ khảo sát & tư vấn miễn phí",
      "Quà tặng / hỗ trợ hoàn thiện theo gói",
      "Áp dụng theo điều kiện từng thời điểm",
    ],
  },
];

/** /kien-truc listing */
export const architectureList = [
  {
    title: "THIẾT KẾ DỰ ÁN DINH THỰ 3 TẦNG MÁI VÒM KẾT HỢP MÁI MANSARD",
    href: "/kien-truc/thiet-ke-du-an-dinh-thu-3-tang-mai-vom",
    image: thumb("anh-man-hinh-2026-01-28-luc-154402-4900.png.webp"),
  },
  {
    title: "THIẾT KẾ & THI CÔNG BIỆT THỰ TÂN CỔ ĐIỂN",
    href: "/kien-truc/thiet-ke-thi-cong-biet-thu-tan-co-dien",
    image: thumb("bietthu-6189.jpg.webp"),
  },
  {
    title: "THIẾT KẾ BILLIARDS CLUB",
    href: "/kien-truc/thiet-ke-billiards-club",
    image: thumb("anh-man-hinh-2026-01-28-luc-153516-8710.png.webp"),
  },
  {
    title: "THIẾT KẾ NHÀ VƯỜN HIỆN ĐẠI",
    href: "/kien-truc/thiet-ke-nha-vuon-hien-dai",
    image: thumb("anh-man-hinh-2026-01-28-luc-153139-3145.png.webp"),
  },
  {
    title: "NHÀ PHỐ 3 TẦNG HIỆN ĐẠI",
    href: "/kien-truc/nha-pho-3-tang-hien-dai",
    image: thumb("3tang-7314.jpg.webp"),
  },
  {
    title: "NHÀ PHỐ 2 TẦNG HIỆN ĐẠI",
    href: "/kien-truc/nha-pho-2-tang-hien-dai",
    image: thumb("2tang1-4883.jpg.webp"),
  },
  {
    title: "NHÀ PHỐ TÂN CỔ ĐIỂN CAO TẦNG",
    href: "/kien-truc/nha-pho-tan-co-dien-cao-tang",
    image: thumb("6193621581221115304311666815576124427485979009n-4315.jpg.webp"),
  },
  {
    title: "THIẾT KẾ BIỆT THỰ ĐẸP",
    href: "/kien-truc/thiet-ke-biet-thu-dep",
    image: thumb("6043488141221048946171666811874828721730413164n-3885.jpg.webp"),
  },
  {
    title: "NHÀ PHỐ 2 TẦNG",
    href: "/kien-truc/nha-pho-2-tang",
    image: thumb("6161113111221096874231666812339106490965559813n-3366.jpg.webp"),
  },
  {
    title: "Nhà Song Lập",
    href: "/kien-truc/nha-song-lap",
    image: thumb("6039238971221048944731666811576031331311608764n-1-8194.jpg.webp"),
  },
];

/** /dich-vu listing (original page cards) */
export const serviceList = [
  {
    title: "Sửa chữa cải tạo nhà trọn gói – Nâng cấp không gian sống",
    href: "/dich-vu/sua-chua-cai-tao-nha-tron-goi",
    image: thumb("3-5274.png.webp"),
  },
  {
    title: "Thiết kế nhà phố đẹp hiện đại – Giải pháp tối ưu không gian",
    href: "/dich-vu/thiet-ke-nha-pho-dep-hien-dai",
    image: thumb("1-1213.png.webp"),
  },
  {
    title: "THI CÔNG CẢI TẠO – SỬA CHỮA NHÀ TRỌN GÓI",
    href: "/dich-vu/thi-cong-cai-tao-sua-chua-nha-tron-goi",
    image: thumb("25-thu-phong-view-01-2002.jpg.webp"),
  },
  {
    title: "Sửa chữa biệt thự 1 trệt 3 lầu sân thượng",
    href: "/dich-vu/sua-chua-biet-thu-1-tret-3-lau",
    image: thumb("anh-man-hinh-2026-01-28-luc-144716-4515.png.webp"),
  },
  {
    title: "THIẾT KẾ THI CÔNG",
    href: "/dich-vu/thiet-ke-thi-cong",
    image: thumb("z7415817630833506dab5f9f5840604a48b05b9c43f0eb-8463.jpg.webp"),
  },
  {
    title: "THI CÔNG HOÀN THIỆN",
    href: "/dich-vu/thi-cong-hoan-thien",
    image: thumb("35-san-thuong-view-05-6442.jpg.webp"),
  },
  {
    title: "Sửa chữa nâng tầng nhà 1 trệt 2 lầu",
    href: "/dich-vu/sua-chua-nang-tang-nha-1-tret-2-lau",
    image: thumb("6172183661223001871161911031387019201812509419n-1156.jpg.webp"),
  },
  {
    title: "THI CÔNG PHẦN THÔ",
    href: "/dich-vu/thi-cong-phan-tho",
    image: thumb("33-san-thuong-view-03-8650.jpg.webp"),
  },
  {
    title: "CẢI TẠO - SỬA CHỮA NỘI THẤT",
    href: "/dich-vu/cai-tao-sua-chua-noi-that",
    image: thumb("22-phong-ngu-03-view-04-6558.jpg.webp"),
  },
  {
    title: "THI CÔNG XÂY DỰNG TRỌN GÓI",
    href: "/dich-vu/thi-cong-xay-dung-tron-goi",
    image: thumb("03tret-02view03-1827.jpg.webp"),
  },
];
