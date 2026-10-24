/**
 * Third keyword pool: sizes, budgets, permits, structure, and house types
 * that were not on the site. Run: node scripts/generate-seo-batch6.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { BRIEFS } from "./batch6-briefs.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const CATS = {
  "biet-thu": {
    images: [
      "upload/tan-co-dien/tncd-01-thumbnail.png",
      "upload/nha-pho/fanpage/fp-nha-sang-01-mat-tien.png",
      "upload/mat-tien-5m/mt5m-01-thumbnail-mat-tien.png",
    ],
    links: ["/dich-vu/thiet-ke-nha-luxury", "/kien-truc", "/bang-bao-gia"],
  },
  "nha-vuon": {
    images: [
      "upload/1t2l/1t2l-01-thumbnail.png",
      "upload/tan-co-dien/tncd-01-thumbnail.png",
      "upload/nang-tang/nt-01-thumbnail.png",
    ],
    links: ["/dich-vu/thiet-ke-nha-pho", "/dich-vu/sua-chua-cai-tao", "/lien-he"],
  },
  "kich-thuoc": {
    images: [
      "upload/mat-tien-5m/mt5m-01-thumbnail-mat-tien.png",
      "upload/1t2l/1t2l-01-thumbnail.png",
      "upload/nha-pho/fanpage/fp-nha-sang-01-mat-tien.png",
    ],
    links: ["/dich-vu/thiet-ke-nha-pho", "/tin-tuc/thiet-ke-nha-pho-mat-tien-5m", "/bang-bao-gia/thiet-ke-nha"],
  },
  "ham-mai": {
    images: [
      "upload/phan-tho/pt-01-thumbnail.png",
      "upload/tan-co-dien/tncd-01-thumbnail.png",
      "upload/tron-goi/tg-02-thi-cong.png",
    ],
    links: ["/dich-vu/thi-cong-xay-dung", "/dich-vu/thiet-ke-nha-pho", "/tin-tuc/thi-cong-ket-cau-nha-pho"],
  },
  "mat-tien": {
    images: [
      "upload/mat-tien-5m/mt5m-01-thumbnail-mat-tien.png",
      "upload/thong-gio/tgv-01-thumbnail.png",
      "upload/chong-nong/cn-01-thumbnail.png",
    ],
    links: ["/dich-vu/thiet-ke-nha-pho", "/tin-tuc/chong-nong-nha-pho", "/tin-tuc/chong-tham-nha-pho"],
  },
  "noi-that": {
    images: [
      "upload/hoan-thien-ngoai/htnn-01-thumbnail.png",
      "upload/hoan-thien-tho/ht-01-thumbnail.png",
      "upload/bao-gia/bao-gia-03-hoan-thien.png",
    ],
    links: ["/dich-vu/thiet-ke-thi-cong-noi-that", "/tin-tuc/thiet-ke-noi-that-nha-pho", "/tin-tuc/bao-gia-thi-cong-noi-that-nha-pho"],
  },
  gia: {
    images: [
      "upload/bao-gia/bao-gia-01-thumbnail-mat-tien.png",
      "upload/don-gia-m2/dgm2-01-thumbnail.png",
      "upload/bao-gia/bao-gia-06-vat-tu-du-toan.png",
    ],
    links: ["/tin-tuc/bao-gia-xay-nha-pho-2026", "/bang-bao-gia", "/tin-tuc/don-gia-xay-nha-pho-m2"],
  },
  local: {
    images: [
      "upload/quan-7/q7-01-thumbnail.png",
      "upload/quan-1/q1-01-thumbnail.png",
      "upload/thu-duc/td-01-thumbnail.png",
    ],
    links: ["/lien-he", "/dich-vu/thi-cong-xay-dung", "/tin-tuc/thi-cong-nha-pho-quan-7"],
  },
  "kinh-doanh": {
    images: [
      "upload/tron-goi/tg-01-thumbnail.png",
      "upload/mat-tien-5m/mt5m-01-thumbnail-mat-tien.png",
      "upload/phan-tho/pt-01-thumbnail.png",
    ],
    links: ["/dich-vu/thiet-ke-nha-pho", "/dich-vu/thi-cong-xay-dung", "/tin-tuc/hop-dong-thi-cong-nha-pho"],
  },
  "phap-ly": {
    images: [
      "upload/bao-gia/bao-gia-06-vat-tu-du-toan.png",
      "upload/phan-tho/pt-01-thumbnail.png",
      "upload/don-gia-m2/dgm2-01-thumbnail.png",
    ],
    links: ["/tin-tuc/giay-to-xin-giay-phep-xay-dung", "/tin-tuc/xin-giay-phep-xay-dung-nha-o-mat-bao-lau", "/lien-he"],
  },
};

const LINK_LABELS = {
  "/dich-vu/thiet-ke-nha-luxury": "thiết kế nhà luxury",
  "/kien-truc": "hồ sơ kiến trúc",
  "/bang-bao-gia": "bảng báo giá",
  "/dich-vu/thiet-ke-nha-pho": "dịch vụ thiết kế nhà phố",
  "/dich-vu/sua-chua-cai-tao": "sửa chữa cải tạo",
  "/lien-he": "trang liên hệ",
  "/tin-tuc/thiet-ke-nha-pho-mat-tien-5m": "thiết kế mặt tiền 5m",
  "/bang-bao-gia/thiet-ke-nha": "bảng giá thiết kế",
  "/dich-vu/thi-cong-xay-dung": "thi công xây dựng",
  "/tin-tuc/thi-cong-ket-cau-nha-pho": "thi công kết cấu nhà phố",
  "/tin-tuc/chong-nong-nha-pho": "chống nóng nhà phố",
  "/tin-tuc/chong-tham-nha-pho": "chống thấm nhà phố",
  "/dich-vu/thiet-ke-thi-cong-noi-that": "thiết kế thi công nội thất",
  "/tin-tuc/thiet-ke-noi-that-nha-pho": "thiết kế nội thất nhà phố",
  "/tin-tuc/bao-gia-thi-cong-noi-that-nha-pho": "báo giá thi công nội thất",
  "/tin-tuc/bao-gia-xay-nha-pho-2026": "báo giá xây nhà phố 2026",
  "/tin-tuc/don-gia-xay-nha-pho-m2": "đơn giá xây nhà theo m²",
  "/tin-tuc/thi-cong-nha-pho-quan-7": "thi công nhà phố Quận 7",
  "/tin-tuc/hop-dong-thi-cong-nha-pho": "hợp đồng thi công nhà phố",
  "/tin-tuc/giay-to-xin-giay-phep-xay-dung": "giấy tờ xin giấy phép xây dựng",
  "/tin-tuc/xin-giay-phep-xay-dung-nha-o-mat-bao-lau": "xin giấy phép xây dựng mất bao lâu",
};

const ITEMS = [
  ["thiet-ke-nha-pho-4x12", "thiết kế nhà phố 4x12", "kich-thuoc", "Lô 4x12 chỉ khoảng 48m2 một sàn. Xe máy, thang một vế và bếp phải xếp dọc, không chia hai phòng ngủ trên cùng một tầng."],
  ["thiet-ke-nha-pho-4x14", "thiết kế nhà phố 4x14", "kich-thuoc", "Thêm 2m so với lô 4x12 nên dành cho sân sau hoặc giếng cuối bếp, không nhét thêm một phòng ngủ không cửa sổ."],
  ["thiet-ke-nha-pho-4x18", "thiết kế nhà phố 4x18", "kich-thuoc", "Chiều sâu 18m trên ngang 4m đủ một giếng giữa và một khoảng bếp cuối. Vẫn không phải chỗ để ô tô."],
  ["thiet-ke-nha-pho-4x20", "thiết kế nhà phố 4x20", "kich-thuoc", "4x20 sâu bằng 5x20 nhưng hẹp hơn một mét. Gara ô tô thường không vào được; ưu tiên giếng trời và một phòng mỗi tầng."],
  ["thiet-ke-nha-pho-5x15", "thiết kế nhà phố 5x15", "kich-thuoc", "5x15 ngang vừa một xe hơi nếu chiều sâu nhường khoảng 5m phía trước. Phần ở còn lại ngắn nên bếp và giếng phải rất gọn."],
  ["thiet-ke-nha-pho-5x16", "thiết kế nhà phố 5x16", "kich-thuoc", "Một mét sâu hơn 5x15 nên dùng để lùi vệ sinh sau bếp hoặc thêm chiếu nghỉ thang, không thêm cả một phòng."],
  ["thiet-ke-nha-pho-5x18", "thiết kế nhà phố 5x18", "kich-thuoc", "5x18 là lô cân: có thể gara xe hơi, giếng giữa và bếp cuối mà phòng ngủ tầng trên vẫn còn cửa sổ."],
  ["thiet-ke-nha-pho-6x20", "thiết kế nhà phố 6x20", "kich-thuoc", "Ngang 6m sâu 20m có thể tách lối xe và lối người ở trệt. Hai phòng ngủ một tầng chỉ nên làm khi mỗi phòng có mặt thoáng."],
  ["nha-pho-lech-tang-3x12", "nhà phố lệch tầng 3x12", "kich-thuoc", "Ngang 3m không đủ hai nhịp phòng. Lệch tầng ở đây chỉ nên là vài bậc đổi cao độ quanh một thang hẹp, không phải hai khối lớn."],
  ["nha-mat-tien-7m", "nhà mặt tiền 7m", "kich-thuoc", "Mặt tiền 7m đủ gara và một phòng khách cạnh nhau, hoặc cửa kính kinh doanh cộng lối nhà riêng. Cột giữa mặt tiền là lỗi cần tránh."],
  ["nha-mat-tien-8m", "nhà mặt tiền 8m", "kich-thuoc", "Ngang 8m gần với nhà có sân bên hoặc hai phòng trước. Không nên chia đều ba phòng ngủ sát mặt tiền vì một phòng sẽ mất cửa sổ."],
  ["thiet-ke-nha-pho-mat-tien-10m", "thiết kế nhà phố mặt tiền 10m", "kich-thuoc", "Mười mét mặt tiền là nhà phố rộng hoặc mini biệt thự. Nên có sân trước hoặc lùi cổng, và một trục thang không cắt đôi phòng khách."],
  ["chi-phi-xay-nha-pho-2-tang", "chi phí xây nhà phố 2 tầng", "gia", "Hai tầng là hai sàn cộng mái và móng. Giá không bằng một nửa nhà bốn tầng trên cùng một lô, vì móng và mái vẫn phải làm đủ."],
  ["nha-pho-3-tang-1-tum", "nhà phố 3 tầng 1 tum", "kich-thuoc", "Tum trên nhà ba tầng dành cho thờ, giặt hoặc kỹ thuật. Biến tum thành phòng ngủ kín là lúc phải xem lại cách đếm tầng và cách nhiệt mái."],
  ["xay-nha-1-tret-1-lung-2-lau", "xây nhà 1 trệt 1 lửng 2 lầu giá bao nhiêu", "gia", "Lửng cộng hai lầu là nhiều cao độ trong một nhà không quá cao. Tiền lệch ở chiều cao thông thủy tầng trệt và cầu thang đổi hướng."],
  ["xay-nha-1-ty", "xây nhà 1 tỷ", "gia", "Một tỷ cần nói rõ là tiền xây hay đã gồm nội thất và cọc. Với nhà phố nhiều tầng, con số này thường chỉ kham diện tích sàn khiêm tốn và hoàn thiện phổ thông."],
  ["xay-nha-700-trieu", "xây nhà 700 triệu", "gia", "Khoảng 700 triệu sát với nhà một tầng, gác lửng hoặc cải tạo, hơn là nhà phố nhiều sàn. Cọc và vận chuyển hẻm có thể chiếm một phần lớn trước khi xây tường."],
  ["xay-nha-800-trieu", "xây nhà 800 triệu", "gia", "800 triệu thêm một ít so với 700 triệu, thường để nâng cấp mái, cửa hoặc thêm gác, không đủ để biến thành nhà bốn tầng có thang máy."],
  ["xay-nha-4-ty", "xây nhà 4 tỷ", "gia", "Bốn tỷ mở được nhà phố nhiều sàn hoặc hoàn thiện khá hơn, tùy diện tích. Hầm, đá mặt tiền và thang máy là các dòng riêng, không tự nằm trong số tổng."],
  ["xay-nha-5-ty", "xây nhà 5 tỷ", "gia", "Năm tỷ đủ cân nhắc biệt thự nhỏ hoặc nhà phố hoàn thiện khá, nếu đất không buộc móng đặc biệt. Vẫn phải chừa khoản cho phép, sân và nội thất nếu những việc đó chưa có trong bảng."],
  ["mat-do-xay-dung-nha-o-rieng-le-tphcm", "mật độ xây dựng nhà ở riêng lẻ TP.HCM", "phap-ly", "Mật độ của từng lô nằm trên thông tin quy hoạch của thửa đó, không phải một tỷ lệ dùng chung cho cả thành phố."],
  ["khoang-lui-nha-pho", "khoảng lùi nhà phố", "phap-ly", "Khoảng lùi tính từ chỉ giới đường, không tính từ hàng rào nhà bên. Lô góc và lô hẻm không cùng một khoảng."],
  ["nha-trong-hem-duoc-xay-may-tang", "nhà trong hẻm được xây mấy tầng", "phap-ly", "Số tầng trong hẻm phụ thuộc bề rộng lối vào và chỉ tiêu của khu đất. Không có một đáp án chung cho mọi hẻm ở TP.HCM."],
  ["cai-tao-nha-co-can-xin-giay-phep", "cải tạo nhà có cần xin giấy phép không", "phap-ly", "Sơn, thay thiết bị và sửa bên trong khác với đụng kết cấu, thêm sàn hoặc đổi diện tích xây. Việc có phải nộp hồ sơ hay không do cơ quan xây dựng nơi đất xác nhận."],
  ["nha-cap-4-lam-gac-co-phai-xin-phep", "nhà cấp 4 làm thêm gác có phải xin phép không", "phap-ly", "Thêm gác là thêm tải và có thể thêm tầng sử dụng. Phải hỏi trước khi cắt mái, vì gác lửng và một tầng lầu bị tính khác nhau."],
  ["tum-co-tinh-la-1-tang-khong", "tum có tính là 1 tầng không", "phap-ly", "Tum che thang khác tum kín có phòng ngủ. Cách đếm tầng do hồ sơ quy hoạch và cơ quan cấp phép của khu đất, không chốt bằng một câu trên mạng."],
  ["ban-ham-co-tinh-la-1-tang-khong", "bán hầm có tính là 1 tầng không", "phap-ly", "Bán hầm nhô lên so với vỉa hè nhiều hay ít sẽ đổi cách nhìn nhận số tầng. Cao độ này phải có trên mặt cắt trước khi đào."],
  ["chieu-cao-tang-nha-pho", "chiều cao tầng nhà phố", "kich-thuoc", "Tầng ở cần đủ thông thủy cho đà, trần và máy lạnh. Chiều cao từng tầng cộng mái còn phải nằm trong giới hạn chiều cao công trình của lô."],
  ["mong-coc-nha-pho", "móng cọc nhà phố", "ham-mai", "Cọc dùng khi đất yếu hoặc nhà cao, không phải phương án mặc định. Số cọc, dài cọc và đài cọc phải theo địa chất của chính lô."],
  ["chi-phi-ep-coc-be-tong", "chi phí ép cọc bê tông", "gia", "Giá ép cọc phụ thuộc tiết diện, chiều dài, số tim và đường vào của máy. Một báo giá thiếu những dòng này thì chưa so được."],
  ["khoan-coc-nhoi-anh-huong-nha-ben", "khoan cọc nhồi có ảnh hưởng nhà bên không", "ham-mai", "Khoan sát nhà cũ có thể rung và làm xáo đất nếu thành hố không kín. Phải lập hiện trạng nhà bên trước khi hạ máy."],
  ["chi-phi-lap-thang-may-gia-dinh", "chi phí lắp thang máy gia đình", "gia", "Tiền thang máy gồm cabin, số điểm dừng, hố pit, đà chịu và điện. Nhà chưa có giếng thì phần cắt sàn đắt hơn phần mua cabin."],
  ["cai-tao-nha-de-lap-thang-may", "cải tạo nhà để lắp thang máy", "kich-thuoc", "Giếng thang cải tạo thường lấy một góc giếng trời hoặc một phòng kho. Không cắt mất thang bộ duy nhất, và phải xem đà nào được phép khoét."],
  ["chong-tham-san-thuong", "chống thấm sân thượng", "mat-tien", "Sân thượng thấm vì đọng nước, chân tường và miệng ống. Phải tạo dốc về phễu, vuốt chân tường và có lớp bảo vệ, không chỉ quét một lượt lên gạch cũ."],
  ["chong-tham-nha-ve-sinh", "chống thấm nhà vệ sinh", "mat-tien", "Nước WC đi qua cổ ống, hộp gen và khe sàn. Chống thấm phải xong trước khi ốp lát, và phải ngâm nước kiểm tra."],
  ["xu-ly-nut-tuong-nha", "xử lý nứt tường nhà", "ham-mai", "Nứt tóc lớp tô khác nứt chạy qua cột, đà hoặc cửa. Vị trí và việc vết nứt có dài thêm quyết định vá hay phải xem kết cấu."],
  ["sut-lun-nen-nha", "sụt lún nền nhà", "ham-mai", "Nền lún thường thấy cửa kẹt, gạch bung và vết nứt chân tường. Cần phân biệt nền đắp bị lún với móng bị lún trước khi đổ bê tông đè lên."],
  ["coi-noi-them-tang-nha", "cơi nới thêm tầng nhà", "kich-thuoc", "Thêm tầng là thêm tải lên móng và cột cũ. Không có căn nào được nâng chỉ vì tường còn đứng. Phải kiểm tra kết cấu và việc có phải điều chỉnh phép."],
  ["chi-phi-phat-sinh-khi-xay-nha", "chi phí phát sinh khi xây nhà", "gia", "Phát sinh đến từ việc chưa ghi trong hợp đồng, đất khác lúc đào, hoặc gia chủ đổi vật tư. Mỗi khoản thêm cần có khối lượng trước khi làm."],
  ["nghiem-thu-nha-o-rieng-le", "nghiệm thu nhà ở riêng lẻ", "phap-ly", "Nghiệm thu với nhà thầu là biên bản từng mốc: móng, sàn, chống thấm, bàn giao. Việc nào thuộc cơ quan nhà nước thì làm theo giấy phép của căn đó."],
  ["thi-cong-nha-pho-tan-phu", "thi công nhà phố Tân Phú", "local", "Tân Phú có cả mặt tiền đường lớn và hẻm nhà cũ. Xe bê tông vào được tới đâu phải đo trước, vì nhiều tuyến phải bơm hoặc chuyển tay một đoạn."],
  ["bao-gia-xay-nha-tron-goi-quan-2", "báo giá xây nhà trọn gói Quận 2", "local", "Khu vực Quận 2 nay thuộc TP Thủ Đức, có lô thổ cư cũ và khu nền đắp. Báo giá chỉ sau khi biết cao độ đường, cống và đất có phải gia cố móng."],
  ["bao-gia-xay-nha-tron-goi-quan-4", "báo giá xây nhà trọn gói Quận 4", "local", "Quận 4 nhà sát nhau, hẻm nhỏ, một số tuyến gần kênh. Vật tư thường chuyển thủ công. Dòng vận chuyển phải có trong báo giá, không cộng miệng sau."],
  ["bao-gia-xay-nha-tron-goi-quan-6", "báo giá xây nhà trọn gói Quận 6", "local", "Quận 6 nhiều nhà trong ngõ và nhà cũ liền kề. Giá trọn gói phải tính che chắn, tường chung và lối đổ bê tông, không lấy đơn giá đường lớn."],
  ["xay-nha-quan-10", "xây nhà Quận 10", "local", "Quận 10 đông, lô hẹp, giờ tập kết khó. Xây mới hoặc cải tạo đều cần phương án đưa vật tư và bảo vệ nhà bên trước khi phá."],
  ["biet-thu-3-tang-mai-thai", "biệt thự 3 tầng mái thái", "biet-thu", "Ba tầng cộng mái thái dễ cao và nặng mặt đứng. Độ dốc mái phải tính cùng khoảng lùi, không gắn mái thái của nhà một tầng lên khối ba tầng."],
  ["biet-thu-3-tang-mai-nhat", "biệt thự 3 tầng mái nhật", "biet-thu", "Mái nhật đua rộng trên ba tầng cần vì kèo và máng đủ mưa. Mái thấp nhìn nhẹ nhưng nóng nếu không có lớp cách nhiệt."],
  ["biet-thu-3-tang-mai-bang", "biệt thự 3 tầng hiện đại mái bằng", "biet-thu", "Mái bằng ba tầng là một sàn chịu nắng và mưa. Phải có dốc ngầm, lớp cách nhiệt và lan can, không phải chỉ một mặt đứng phẳng."],
  ["biet-thu-1-tang-hien-dai", "biệt thự 1 tầng hiện đại", "biet-thu", "Một tầng trên đất rộng sống bằng hiên và sân, không bằng chiều cao. Mái và hành lang phải ngắn để phòng cuối vẫn có gió."],
  ["biet-thu-mini", "biệt thự mini", "biet-thu", "Biệt thự mini là nhà có sân và ít nhất một mặt thoáng, trên đất không quá lớn. Nếu trừ khoảng lùi còn sát ranh thì đó vẫn là nhà phố."],
  ["nha-pho-mai-bang", "nhà phố mái bằng", "ham-mai", "Mái bằng nhà phố vừa là mái vừa có thể là sân phơi. Chống thấm và cách nhiệt là việc của mái, không phải hạng mục làm khi đã dột."],
  ["nha-pho-6-tang", "nhà phố 6 tầng", "kich-thuoc", "Sáu tầng chỉ bàn sau khi lô cho phép chiều cao và số tầng. Thang bộ một mình rất mệt; giếng thang máy phải có từ móng."],
  ["nha-vuon-2-tang-mai-thai", "nhà vườn 2 tầng mái thái", "nha-vuon", "Hai tầng mái thái trên đất vườn nên để trệt mở ra hiên, lầu lùi vào trong mái. Mái không được đè lên khoảng sân cần lấy mưa và sáng."],
  ["nha-cap-4-chu-l", "nhà cấp 4 chữ L", "nha-vuon", "Chữ L tạo sân trong. Giao hai cánh mái là chỗ phải có máng, nếu không nước đổ đúng góc sân."],
  ["cai-tao-nha-cap-4-chu-l", "cải tạo nhà cấp 4 chữ L", "nha-vuon", "Nhà chữ L cũ thường thấm ở giao mái và tối ở cánh dài. Cải tạo bắt đầu từ mái và nền ẩm, chưa phải sơn mặt đứng."],
  ["chi-phi-xay-nha-cap-4-100m2", "chi phí xây nhà cấp 4 100m2", "gia", "100m2 có thể là đất hoặc sàn. Nhà cấp 4 một sàn thì mái, hiên và hàng rào chiếm tỷ lệ lớn hơn nhà nhiều tầng cùng diện tích đất."],
  ["noi-that-toi-gian-nha-nho", "nội thất tối giản cho nhà nhỏ", "noi-that", "Tối giản trong nhà nhỏ là ít đồ và nhiều chỗ cất kín, không phải phòng trống không tủ. Giường, bếp và bàn ăn phải có kích thước trước khi chọn màu."],
  ["phong-ngu-master-nha-ong", "phòng ngủ master nhà ống", "noi-that", "Master trong nhà ống là phòng có vệ sinh riêng và một khoảng tủ, thường ở tầng yên nhất. Không gọi mọi phòng có giường lớn là master."],
  ["kich-thuoc-phong-ngu-nha-pho", "kích thước phòng ngủ nhà phố", "noi-that", "Phòng ngủ nhà phố nên kê được giường, hai lối đi và cửa không đụng đầu giường. Bề ngang thông thủy dưới khoảng 3m thì chỉ nên một giường đơn hoặc giường áp tường."],
  ["kich-thuoc-cau-thang-nha-pho", "kích thước cầu thang nhà phố", "noi-that", "Thang nhà phố cần bậc vừa chân, tay vịn và chiếu nghỉ nếu đổi hướng. Bề rộng thang lấy từ phần còn lại sau khi phòng đã đủ kê giường, không ngược lại."],
  ["cau-thang-xuong-ca-nha-nho", "cầu thang xương cá cho nhà nhỏ", "noi-that", "Xương cá đỡ nặng mắt và lấy sáng sang phòng dưới. Bậc phải có mặt đứng hoặc khe an toàn nếu nhà có trẻ nhỏ, và xương thép phải tính người đi thật."],
  ["cau-thang-kinh-nha-pho", "cầu thang kính nhà phố", "noi-that", "Kính lan can phải là kính an toàn, kẹp hoặc trụ đủ dày, không phải kính thường. Lau và thay khi nứt là việc phải tính trước vì kính trong nhà ống rất dễ bẩn."],
  ["lam-chan-nang-mat-tien-nha-pho", "lam chắn nắng mặt tiền nhà phố", "mat-tien", "Lam chỉ có ích khi chắn đúng hướng nắng và vẫn cho gió. Lam kín như bức tường thì nhà tối và nóng hơn."],
  ["gach-bong-gio-mat-tien-nha-pho", "gạch bông gió mặt tiền nhà phố", "mat-tien", "Gạch bông gió lấy gió nhưng hắt mưa. Phải có máng hoặc khoảng lùi phía trong, không xây sát tủ hay đầu giường."],
  ["thiet-ke-nha-pho-cho-thue", "thiết kế nhà phố cho thuê", "kinh-doanh", "Nhà cho thuê cần từng tầng có vệ sinh, khóa và đồng hồ riêng nếu cho nhiều hộ. Cầu thang chung không đi xuyên phòng của một hộ."],
  ["cai-tao-nha-pho-thanh-van-phong", "cải tạo nhà phố thành văn phòng", "kinh-doanh", "Văn phòng cần sàn chịu tải người, nhà vệ sinh khách và lối thoát. Phòng ngủ cũ không tự thành phòng họp nếu chỉ kê bàn."],
  ["cai-tao-nha-thanh-homestay", "cải tạo nhà thành homestay", "kinh-doanh", "Homestay cần phòng ngủ tách tiếng, vệ sinh riêng hoặc khép kín, và chỗ chủ nhà không trùng lối khách. Chống ồn và PCCC phải xem theo quy mô trước khi đập tường."],
  ["do-doc-mai-ngoi", "độ dốc mái ngói", "ham-mai", "Độ dốc mái ngói phụ thuộc loại ngói và chiều dài mái. Dốc quá thấp thì nước tạt ngược; dốc quá cao thì đội chiều cao và tốn vì kèo."],
];

function cap(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function titleFor(kw) {
  const t = cap(kw);
  if (/bao nhiêu|chi phí|đơn giá|báo giá/.test(kw)) return `${t}: cách đọc dự toán trước khi ký`;
  if (kw.startsWith("thi công nhà phố") || kw.startsWith("xây nhà Quận")) return `${t}: khảo sát hiện trạng rồi mới báo giá`;
  if (/xin phép|mật độ|khoảng lùi|tính là|nghiệm thu|được xây mấy tầng|giấy phép/.test(kw)) return `${t}: điểm cần đối chiếu trên hồ sơ đất`;
  if (/thiết kế|cải tạo|cơi nới|xây |xử lý|chống |lắp thang/.test(kw)) return `${t}: phương án thực tế tại TP.HCM`;
  return `${t}: gợi ý bố trí từ Kiến trúc Minh Phú`;
}

function linkMd(href) {
  const label = LINK_LABELS[href] || href.split("/").filter(Boolean).pop().replace(/-/g, " ");
  return `[${label}](${href})`;
}

function collectExistingSlugs() {
  const slugs = new Set();
  const dataDir = path.join(root, "src/data");
  for (const file of fs.readdirSync(dataDir)) {
    if (!file.endsWith(".ts") || file === "seoArticlesBatch6.ts") continue;
    const content = fs.readFileSync(path.join(dataDir, file), "utf8");
    for (const match of content.matchAll(/href: "\/tin-tuc\/([^"]+)"/g)) slugs.add(match[1]);
  }
  return slugs;
}

function buildBody(item, related) {
  const brief = BRIEFS[item.slug];
  if (!brief?.plan || !brief?.watch || !brief?.money || !brief?.faqs || brief.faqs.length < 3) {
    throw new Error(`Brief chưa đủ cho ${item.slug}`);
  }
  const cat = CATS[item.cat];
  const links = cat.links.map(linkMd).join(", ");
  const relatedLine = related ? ` Đọc tiếp [${related.kw}](/tin-tuc/${related.slug}).` : "";
  return [
    brief.lead,
    item.note,
    { type: "h2", text: brief.planTitle },
    brief.plan,
    ...(brief.planMore ? [brief.planMore] : []),
    { type: "h2", text: brief.watchTitle },
    brief.watch,
    ...(brief.watchMore ? [brief.watchMore] : []),
    { type: "h2", text: brief.moneyTitle },
    brief.money,
    ...(brief.moneyMore ? [brief.moneyMore] : []),
    `Dự toán hoặc hồ sơ cho ${item.kw} chỉ dùng khi đã đo đất hoặc nhà hiện trạng. Việc chưa ghi thì chưa có trong giá. Xem thêm ${links}.${relatedLine}`,
    { type: "h2", text: `Câu hỏi thường gặp về ${item.kw}` },
    ...brief.faqs,
    { type: "h2", text: "Xem hiện trạng rồi hãy chốt" },
    `Gửi kích thước đất hoặc ảnh nhà qua [trang liên hệ](/lien-he) hoặc gọi 0912 166 079. Với ${item.kw}, buổi đầu để chốt cách bố trí và danh mục việc, chưa phải lúc nhận một số tổng.`,
  ];
}

function esc(value) {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

const existing = collectExistingSlugs();
const seen = new Set();
const articles = [];

for (let index = 0; index < ITEMS.length; index += 1) {
  const [slug, kw, cat, note] = ITEMS[index];
  if (!CATS[cat]) throw new Error(`Missing category ${cat}`);
  if (!BRIEFS[slug]) throw new Error(`Missing brief ${slug}`);
  if (seen.has(slug)) throw new Error(`Duplicate slug ${slug}`);
  if (existing.has(slug)) throw new Error(`Slug already published: ${slug}`);
  seen.add(slug);
  const relatedRow = ITEMS.slice(index + 1).find((row) => row[2] === cat) || ITEMS.find((row) => row[2] === cat && row[0] !== slug);
  articles.push({
    slug,
    kw,
    cat,
    note,
    title: titleFor(kw),
    body: buildBody({ slug, kw, cat, note }, relatedRow ? { slug: relatedRow[0], kw: relatedRow[1] } : null),
  });
}

let out = `/** ${articles.length} articles for keywords not yet on the site. Generated by scripts/generate-seo-batch6.mjs */\nconst m = (path: string) => \`/media/\${path}\`;\n\nexport const seoArticlesBatch6 = [\n`;

for (let index = 0; index < articles.length; index += 1) {
  const article = articles[index];
  const images = CATS[article.cat].images;
  const excerpt = BRIEFS[article.slug].lead;
  out += `  {\n`;
  out += `    title: "${esc(article.title)}",\n`;
  out += `    href: "/tin-tuc/${article.slug}",\n`;
  out += `    image: m("${images[index % images.length]}"),\n`;
  out += `    imageAlt: "${esc(cap(article.kw) + " — Kiến trúc Minh Phú")}",\n`;
  out += `    date: "24/10/2026",\n`;
  out += `    keywords: ["${esc(article.kw)}", "Kiến trúc Minh Phú", "nhà phố TP.HCM"],\n`;
  out += `    excerpt: "${esc(excerpt)}",\n`;
  out += `    body: [\n`;
  for (const block of article.body) {
    if (typeof block === "string") out += `      "${esc(block)}",\n`;
    else out += `      { type: "h2", text: "${esc(block.text)}" },\n`;
  }
  out += `    ],\n`;
  out += `    gallery: [\n`;
  images.forEach((img, imageIndex) => {
    out += `      { src: m("${img}"), alt: "${esc(article.kw + " — ảnh " + (imageIndex + 1))}" },\n`;
  });
  out += `    ],\n`;
  out += `  },\n`;
}

out += `];\n`;

const outPath = path.join(root, "src/data/seoArticlesBatch6.ts");
fs.writeFileSync(outPath, out, "utf8");
console.log(`Wrote ${articles.length} articles → ${outPath}`);
