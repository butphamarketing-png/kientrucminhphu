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
    title:
      "NHÀ PHỐ PHONG CÁCH SÁNG 2026: MẶT TIỀN TRẮNG – KHÔNG GIAN THOÁNG SÁNG CHO GIA ĐÌNH ĐÔ THỊ",
    href: "/tin-tuc/mau-nha-pho-hien-dai-2026",
    image: m("upload/nha-pho/fanpage/fp-nha-sang-01-mat-tien.png"),
    date: "26/08/2026",
    excerpt:
      "Phong cách nhà phố sáng – tường trắng, kính lớn, nội thất tông sáng – giúp mặt tiền hẹp vẫn thoáng sáng và dễ chịu. Minh Phú Building giới thiệu bộ mẫu nhà phố phong cách sáng 2026 tối ưu ánh sáng tự nhiên và công năng tại TP.HCM.",
    body: [
      "Nhà phố phong cách sáng đang được nhiều gia chủ tại TP. Hồ Chí Minh lựa chọn vì tạo cảm giác rộng, sạch sẽ và dễ phối nội thất. Tường trắng, kính lớn, sàn gỗ sáng hoặc đá sáng giúp đón ánh sáng tự nhiên sâu vào nhà, khắc phục nhược điểm mặt tiền hẹp và chiều sâu dài.",
      "Về ngoại thất, phong cách sáng ưu tiên khối hình học rõ, mặt dựng trắng – xám nhạt, kính low-e và chi tiết gỗ sáng. Ban công xanh, lan can mỏng giúp mặt tiền cao ráo mà không rối. Ánh sáng ban ngày phản chiếu tốt giúp ngôi nhà luôn tươi mới trên phố.",
      "Về nội thất, phòng khách thông tầng – bếp ăn liên thông – phòng ngủ tông be/trắng là bộ ba không gian then chốt. Rèm voan, nội thất tối giản và ít màu đậm giúp ánh sáng lan đều. Sân thượng ban ngày trở thành nơi thư giãn, trồng cây, tăng trải nghiệm sống.",
      "Khi thiết kế nhà phố sáng, Minh Phú Building chú trọng hướng nhà, kích thước cửa sổ, khoảng thông tầng và vật liệu phản quang vừa phải để tránh chói. Báo giá được lập rõ phần thô – hoàn thiện – trọn gói, phù hợp ngân sách từng gia đình.",
      "Nếu bạn muốn nhà phố sáng thoáng, dễ ở và dễ bảo trì, hãy liên hệ hotline để được tư vấn concept theo hiện trạng lô đất thực tế.",
    ],
    gallery: [
      m("upload/nha-pho/fanpage/fp-nha-sang-01-mat-tien.png"),
      m("upload/nha-pho/fanpage/fp-nha-sang-02-khach.png"),
      m("upload/nha-pho/fanpage/fp-nha-sang-03-bep.png"),
      m("upload/nha-pho/fanpage/fp-nha-sang-04-ngu.png"),
      m("upload/nha-pho/fanpage/fp-nha-sang-05-san-thuong.png"),
      m("upload/nha-pho/fanpage/fp-nha-sang-06-tong-the.png"),
    ],
  },
  {
    title:
      "XU HƯỚNG SỬA CHỮA – CẢI TẠO NHÀ 2026: GIẢI PHÁP NÂNG CẤP KHÔNG GIAN SỐNG HIỆU QUẢ",
    href: "/tin-tuc/xu-huong-sua-chua-cai-tao-nha-2026",
    image: m("thumbs/308x151x1/upload/news/25-thu-phong-view-01-2741.jpg.webp"),
    date: "05/02/2026",
    excerpt:
      "Những năm gần đây, thị trường sửa chữa và cải tạo nhà ở tại TP. Hồ Chí Minh ghi nhận sự tăng trưởng mạnh mẽ. Sự xuống cấp của nhà ở theo thời gian cùng với nhu cầu thay đổi công năng…",
  },
  {
    title:
      "DỊCH VỤ THI CÔNG SỬA CHỮA – CẢI TẠO NHÀ TRỌN GÓI UY TÍN TẠI TP. HỒ CHÍ MINH",
    href: "/tin-tuc/dich-vu-sua-chua-cai-tao-tron-goi",
    image: m("thumbs/308x151x1/upload/news/33-san-thuong-view-03-5459.jpg.webp"),
    date: "05/02/2026",
    excerpt:
      "Trong bối cảnh đô thị TP. Hồ Chí Minh ngày càng phát triển nhanh chóng, nhu cầu thi công sửa chữa và cải tạo nhà ở đang trở thành xu hướng tất yếu của nhiều gia đình…",
  },
  {
    title:
      "DỊCH VỤ THI CÔNG XÂY DỰNG NHÀ PHỐ TRỌN GÓI – GIẢI PHÁP AN TÂM TỪ MÓNG ĐẾN HOÀN THIỆN TẠI MINH PHÚ BUILDING",
    href: "/tin-tuc/thi-cong-xay-dung-nha-pho-tron-goi",
    image: m("thumbs/308x151x1/upload/news/30-balcony-1278.jpg.webp"),
    date: "03/02/2026",
    excerpt:
      "Xây dựng nhà phố là một quá trình quan trọng, đòi hỏi sự chuẩn bị kỹ lưỡng về thiết kế, tài chính và đơn vị thi công. Trong thực tế, nhiều gia chủ gặp khó khăn khi phải làm việc với nhiều nhà thầu…",
  },
  {
    title:
      "THIẾT KẾ NHÀ PHỐ PHONG CÁCH HIỆN ĐẠI & TÂN CỔ ĐIỂN – DẤU ẤN RIÊNG CỦA MINH PHÚ BUILDING",
    href: "/tin-tuc/thiet-ke-nha-pho-hien-dai-tan-co-dien",
    image: m("thumbs/308x151x1/upload/news/biethu2-9868.jpg.webp"),
    date: "03/02/2026",
    excerpt:
      "Trong những năm gần đây, nhu cầu thiết kế nhà phố theo phong cách hiện đại và tân cổ điển ngày càng được nhiều gia chủ quan tâm. Minh Phú Building tự hào là đơn vị chuyên thiết kế nhà phố…",
  },
  {
    title:
      "HOÀN THIỆN NỘI – NGOẠI THẤT NHÀ PHỐ: TỐI ƯU KHÔNG GIAN SỐNG BỀN ĐẸP CÙNG MINH PHÚ BUILDING",
    href: "/tin-tuc/hoan-thien-noi-ngoai-that-nha-pho",
    image: m("thumbs/308x151x1/upload/news/07tret-02view07-5487.jpg.webp"),
    date: "03/02/2026",
    excerpt:
      "Trong xây dựng nhà phố, hoàn thiện nội – ngoại thất là giai đoạn quyết định diện mạo, chất lượng và trải nghiệm sống của gia chủ…",
  },
  {
    title: "THÔNG BÁO LỊCH NGHỈ TẾT NGUYÊN ĐÁN 2026",
    href: "/tin-tuc/lich-nghi-tet-2026",
    image: m("thumbs/308x151x1/upload/news/lich-nghi-tet-anh-tan-3057.jpg.webp"),
    date: "10/02/2026",
    excerpt:
      "CÔNG TY TNHH KIẾN TRÚC MINH PHÚ xin trân trọng thông báo đến Quý Khách Hàng, Quý Đối Tác về lịch nghỉ Tết Nguyên Đán 2026…",
  },
  {
    title:
      "CẢI TẠO – SỬA CHỮA – NÂNG TẦNG NHÀ PHỐ: GIẢI PHÁP TỐI ƯU KHÔNG GIAN SỐNG TẠI MINH PHÚ BUILDING",
    href: "/tin-tuc/cai-tao-sua-chua-nang-tang-nha-pho",
    image: m("thumbs/308x151x1/upload/news/28-thu-phong-view-04-5079.jpg.webp"),
    date: "03/02/2026",
    excerpt:
      "Sau nhiều năm sử dụng, không ít nhà phố tại các khu đô thị rơi vào tình trạng xuống cấp, bố trí không gian không còn phù hợp…",
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
