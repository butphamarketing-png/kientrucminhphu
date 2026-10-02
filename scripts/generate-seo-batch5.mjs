/**
 * Write the second 100-keyword article pool.
 * Run: node scripts/generate-seo-batch5.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { BRIEFS } from "./batch5-briefs.mjs";

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
    decide:
      "Với biệt thự, việc đầu tiên là đặt khối nhà trên đất: sân trước, lối xe, phòng khách nhìn ra vườn và phòng ngủ lùi về phía yên tĩnh. Số tầng và kiểu mái chỉ chốt sau khi hướng nắng và khoảng lùi đã rõ.",
  },
  "nha-vuon": {
    images: [
      "upload/1t2l/1t2l-01-thumbnail.png",
      "upload/tan-co-dien/tncd-01-thumbnail.png",
      "upload/nang-tang/nt-01-thumbnail.png",
    ],
    links: ["/dich-vu/thiet-ke-nha-pho", "/dich-vu/sua-chua-cai-tao", "/lien-he"],
    decide:
      "Nhà vườn và nhà cấp 4 sống thoáng nhờ sân và mái, nhưng vẫn cần phòng thờ, bếp và chỗ để xe không cắt ngang hướng gió. Nhà cũ muốn nâng tầng thì phải kiểm tra móng và cột trước khi đụng tới mái.",
  },
  "kich-thuoc": {
    images: [
      "upload/mat-tien-5m/mt5m-01-thumbnail-mat-tien.png",
      "upload/1t2l/1t2l-01-thumbnail.png",
      "upload/nha-pho/fanpage/fp-nha-sang-01-mat-tien.png",
    ],
    links: ["/dich-vu/thiet-ke-nha-pho", "/tin-tuc/thiet-ke-nha-pho-mat-tien-5m", "/bang-bao-gia/thiet-ke-nha"],
    decide:
      "Nhà phố hẹp thắng ở cách xếp thang, giếng trời và phòng ngủ theo từng tầng, không phải ở việc nhồi thêm diện tích. Mặt tiền, chiều sâu lô và số tầng quyết định gara, tum và chỗ kinh doanh có làm được hay không.",
  },
  "ham-mai": {
    images: [
      "upload/phan-tho/pt-01-thumbnail.png",
      "upload/tan-co-dien/tncd-01-thumbnail.png",
      "upload/tron-goi/tg-02-thi-cong.png",
    ],
    links: ["/dich-vu/thi-cong-xay-dung", "/dich-vu/thiet-ke-nha-pho", "/tin-tuc/thi-cong-ket-cau-nha-pho"],
    decide:
      "Tầng hầm, lệch tầng và mái đều đụng kết cấu cùng thoát nước. Phải chốt cao độ, độ dốc và chống thấm trên bản vẽ trước khi đào đất hoặc lợp mái, nếu không sửa sau này rất tốn.",
  },
  "mat-tien": {
    images: [
      "upload/mat-tien-5m/mt5m-01-thumbnail-mat-tien.png",
      "upload/thong-gio/tgv-01-thumbnail.png",
      "upload/chong-nong/cn-01-thumbnail.png",
    ],
    links: ["/dich-vu/thiet-ke-nha-pho", "/tin-tuc/chong-nong-nha-pho", "/tin-tuc/thiet-ke-nha-pho-mat-tien-5m"],
    decide:
      "Mặt tiền, giếng trời, ban công và phòng thờ quyết định nhà ống có sáng và mát hay không. Vị trí ô trống, vật liệu ốp và hướng nắng phải thống nhất với mặt bằng, không chọn màu rồi mới tính cửa.",
  },
  "noi-that": {
    images: [
      "upload/hoan-thien-ngoai/htnn-01-thumbnail.png",
      "upload/hoan-thien-tho/ht-01-thumbnail.png",
      "upload/bao-gia/bao-gia-03-hoan-thien.png",
    ],
    links: ["/dich-vu/thiet-ke-thi-cong-noi-that", "/tin-tuc/thiet-ke-noi-that-nha-pho", "/tin-tuc/bao-gia-thi-cong-noi-that-nha-pho"],
    decide:
      "Nội thất nhà phố nên bám trục thang và giếng trời có sẵn. Phong cách chỉ là lớp hoàn thiện; kích thước bếp, bàn thờ, tủ và lối đi mới quyết định nhà có ở được lâu hay không.",
  },
  gia: {
    images: [
      "upload/bao-gia/bao-gia-01-thumbnail-mat-tien.png",
      "upload/don-gia-m2/dgm2-01-thumbnail.png",
      "upload/bao-gia/bao-gia-06-vat-tu-du-toan.png",
    ],
    links: ["/tin-tuc/bao-gia-xay-nha-pho-2026", "/bang-bao-gia", "/tin-tuc/don-gia-xay-nha-pho-m2"],
    decide:
      "Một con số trên mét vuông chưa phải dự toán. Phải tách phần thô, hoàn thiện, nhân công và hạng mục loại trừ, rồi mới so với ngân sách. Giấy phép và bảo hành cũng cần nằm trong cùng bộ hồ sơ, không để miệng hứa.",
  },
  local: {
    images: [
      "upload/quan-7/q7-01-thumbnail.png",
      "upload/quan-1/q1-01-thumbnail.png",
      "upload/thu-duc/td-01-thumbnail.png",
    ],
    links: ["/lien-he", "/dich-vu/thi-cong-xay-dung", "/tin-tuc/thi-cong-nha-pho-quan-7"],
    decide:
      "Mỗi quận khác nhau ở hẻm, nền đất và cách tập kết vật tư. Báo giá chỉ sát khi đã đo hiện trạng tại chỗ, không dùng đơn giá một quận để áp cho quận khác.",
  },
  "kinh-doanh": {
    images: [
      "upload/tron-goi/tg-01-thumbnail.png",
      "upload/mat-tien-5m/mt5m-01-thumbnail-mat-tien.png",
      "upload/phan-tho/pt-01-thumbnail.png",
    ],
    links: ["/dich-vu/thiet-ke-nha-pho", "/dich-vu/thi-cong-xay-dung", "/tin-tuc/hop-dong-thi-cong-nha-pho"],
    decide:
      "Nhà ở kết hợp kinh doanh cần tách lối khách và lối gia đình, tính tải sàn tầng trệt và cửa mặt tiền ngay từ kết cấu. Hợp đồng phải ghi rõ phần thiết kế nào đã gồm trong gói thi công.",
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
  "/dich-vu/thiet-ke-thi-cong-noi-that": "thiết kế thi công nội thất",
  "/tin-tuc/thiet-ke-noi-that-nha-pho": "thiết kế nội thất nhà phố",
  "/tin-tuc/bao-gia-thi-cong-noi-that-nha-pho": "báo giá thi công nội thất",
  "/tin-tuc/bao-gia-xay-nha-pho-2026": "báo giá xây nhà phố 2026",
  "/tin-tuc/don-gia-xay-nha-pho-m2": "đơn giá xây nhà theo m²",
  "/tin-tuc/thi-cong-nha-pho-quan-7": "thi công nhà phố Quận 7",
  "/tin-tuc/hop-dong-thi-cong-nha-pho": "hợp đồng thi công nhà phố",
};

/** slug, keyword, category, one concrete point that is unique to this query */
const ITEMS = [
  ["thiet-ke-biet-thu-nha-vuon", "thiết kế biệt thự nhà vườn", "biet-thu", "Biệt thự nhà vườn nên để phòng khách và bếp nhìn ra sân, phòng ngủ khuất nắng tây, và chừa lối xe không cắt ngang vườn. Mái hiên đủ rộng để mưa TP.HCM không tạt vào cửa."],
  ["thiet-ke-biet-thu-song-lap", "thiết kế biệt thự song lập", "biet-thu", "Song lập có một mặt tường chung nên phòng ngủ và vệ sinh không nên áp vào vách đó nếu muốn yên tĩnh. Mặt thoáng còn lại dùng cho cửa sổ, ban công và sân riêng từng căn."],
  ["thiet-ke-biet-thu-2-tang-hien-dai", "thiết kế biệt thự 2 tầng hiện đại", "biet-thu", "Biệt thự 2 tầng hiện đại thường để sinh hoạt ở trệt và ngủ ở lầu. Mái bằng hoặc mái dốc thấp cần tính chống nóng và thoát nước, không chỉ làm mặt đứng phẳng."],
  ["thiet-ke-biet-thu-san-vuon", "thiết kế biệt thự sân vườn", "biet-thu", "Sân vườn phải có cao độ thoát nước và không thấp hơn nền nhà. Nên chừa sân trước để xe, sân sau hoặc bên hông để giặt phơi và cây, tránh trồng sát móng."],
  ["xay-biet-thu-tron-goi-tphcm", "xây biệt thự trọn gói TP.HCM", "biet-thu", "Gói trọn gói biệt thự tại TP.HCM nên tách móng, khung, mái, sân, cổng và hoàn thiện. Phần cảnh quan, hồ và nội thất rời thường để ngoài gói nếu chưa chốt thiết kế."],
  ["xay-biet-thu-bao-nhieu-tien", "xây biệt thự bao nhiêu tiền", "biet-thu", "Tiền xây biệt thự phụ thuộc diện tích sàn, kiểu mái, tầng hầm và cấp hoàn thiện, không phụ thuộc mỗi câu biệt thự. Hãy xin dự toán theo hạng mục rồi mới so tổng."],
  ["xay-biet-thu-nha-vuon-gia-bao-nhieu", "xây biệt thự nhà vườn giá bao nhiêu", "biet-thu", "Giá biệt thự nhà vườn gồm cả sân, cổng, tường rào và hệ thống thoát nước vườn, không chỉ khối nhà. Hai căn cùng diện tích sàn có thể lệch nhau rất nhiều vì phần sân."],
  ["chi-phi-xay-biet-thu-2-tang", "chi phí xây biệt thự 2 tầng", "biet-thu", "Chi phí biệt thự 2 tầng nên tính theo mét sàn xây dựng cộng mái, sân và hàng rào. Mái thái hoặc mái nhật đội thêm kèo và ngói so với mái bằng."],
  ["chi-phi-xay-biet-thu-100m2", "chi phí xây biệt thự 100m2", "biet-thu", "100m2 có thể là diện tích đất hoặc diện tích sàn. Cần hỏi rõ trước khi nghe một đơn giá, vì biệt thự 100m2 sàn trên đất rộng vẫn phát sinh sân và móng."],
  ["chi-phi-xay-biet-thu-tan-co-dien", "chi phí xây biệt thự tân cổ điển", "biet-thu", "Tân cổ điển tốn ở phào, cột, mái và đá ốp mặt đứng hơn là ở phần thô. Dự toán phải ghi cấp phào và loại ngói, nếu không báo giá thấp sẽ đội khi làm mặt tiền."],
  ["biet-thu-tan-co-dien-2-tang", "biệt thự tân cổ điển 2 tầng", "biet-thu", "Mẫu 2 tầng tân cổ điển cân đối khi mái và cột cùng một nhịp, không gắn phào dày lên khối nhà hiện đại. Cửa và ban công nên thẳng hàng trục cột."],
  ["biet-thu-tan-co-dien-mai-thai", "biệt thự tân cổ điển mái thái", "biet-thu", "Mái thái hợp khối tân cổ điển vì độ dốc tạo bóng và che nắng. Cần tính diềm mái, sê-nô và chống thấm chỗ giao mái với tường, nhất là mái giật cấp."],
  ["biet-thu-hien-dai-mai-nhat", "biệt thự hiện đại mái nhật", "biet-thu", "Mái nhật độ dốc thấp, đua rộng, hợp mặt đứng hiện đại. Vì kèo và máng nước phải đủ thoát mưa lớn; mái đua dài mà máng nhỏ sẽ tràn vào tường."],
  ["biet-thu-hien-dai-san-vuon", "biệt thự hiện đại sân vườn", "biet-thu", "Khối hiện đại và sân vườn đi cùng khi cửa kính không quay thẳng nắng tây và có mái đua hoặc cây chắn. Sàn sân nên khác cao độ nền nhà để nước không chảy ngược."],
  ["biet-thu-hien-dai-2-tang", "biệt thự hiện đại 2 tầng", "biet-thu", "Hai tầng đủ cho một gia đình nếu trệt là khách, bếp, vệ sinh và một phòng ngủ ông bà, lầu là các phòng ngủ còn lại. Thang đặt giữa nhà để khỏi cắt sân."],
  ["thiet-ke-nha-phong-cach-luxury", "thiết kế nhà phong cách luxury", "biet-thu", "Luxury ở vật liệu, ánh sáng và tỷ lệ, không phải ở việc gắn thật nhiều chi tiết. Nên chọn ít vật liệu nhưng đồng bộ: đá, gỗ, kim loại và một màu sơn chủ đạo."],

  ["nha-vuon-cap-4-mai-nhat", "nhà vườn cấp 4 mái nhật", "nha-vuon", "Mái nhật trên nhà cấp 4 tạo hiên rộng cho sân. Vì độ dốc thấp, ngói và máng phải tính mưa lớn; không để mái đè lên khoảng sân mà không có lối thoát."],
  ["nha-vuon-cap-4-mai-thai", "nhà vườn cấp 4 mái thái", "nha-vuon", "Mái thái nhà vườn cấp 4 cao và thoáng, hợp đất rộng. Nên kiểm tra chiều cao mái so với quy hoạch khu vực trước khi chốt độ dốc."],
  ["nha-vuon-cap-4-3-phong-ngu", "nhà vườn cấp 4 3 phòng ngủ", "nha-vuon", "Ba phòng ngủ trên một tầng cần hành lang ngắn và mỗi phòng có cửa sổ ra sân hoặc giếng. Bếp và vệ sinh không nên kẹp giữa các phòng ngủ."],
  ["thiet-ke-nha-cap-4-mai-thai", "thiết kế nhà cấp 4 mái thái", "nha-vuon", "Mặt bằng nhà cấp 4 mái thái nên trải theo chiều đất, phòng khách đầu hướng tốt, bếp cuối gió. Mái chữ U hoặc chữ L phải xử lý máng ở giao mái."],
  ["thiet-ke-nha-cap-4-san-vuon", "thiết kế nhà cấp 4 sân vườn", "nha-vuon", "Sân vườn của nhà cấp 4 là không gian ở, không chỉ là đất thừa. Nên có hiên, chỗ ngồi và lối từ bếp ra sân mà không băng qua phòng khách."],
  ["thiet-ke-nha-cap-4-co-phong-tho", "thiết kế nhà cấp 4 có phòng thờ", "nha-vuon", "Phòng thờ nhà cấp 4 nên đặt trang trọng, yên, không đối cửa vệ sinh hay bếp. Nếu đất hẹp, có thể làm gian thờ cuối nhà, vẫn tách khỏi chỗ sinh hoạt ồn."],
  ["thiet-ke-nha-cap-4-co-gac-lung", "thiết kế nhà cấp 4 có gác lửng", "nha-vuon", "Gác lửng thêm chỗ ngủ hoặc kho mà không thành tầng đầy đủ. Cần chừa chiều cao thông thủy phía dưới, cầu thang không cắt bếp, và kiểm tra có phải xin phép hay không."],
  ["cai-tao-nha-cap-4-cu", "cải tạo nhà cấp 4 cũ", "nha-vuon", "Nhà cấp 4 cũ cần xem móng, mái tôn hoặc mái ngói, tường nứt và nền ẩm trước khi sơn mới. Có căn chỉ cần chống thấm và làm lại mái; có căn phải gia cố kết cấu."],
  ["cai-tao-nha-cap-4-thanh-gac-lung", "cải tạo nhà cấp 4 thành gác lửng", "nha-vuon", "Thêm gác lửng nghĩa là thêm tải lên tường và móng cũ. Phải kiểm tra tường chịu lực và chiều cao hiện trạng; không phải nhà cấp 4 nào cũng nâng được sàn lửng an toàn."],
  ["chi-phi-nang-tang-nha-cap-4", "chi phí nâng tầng nhà cấp 4", "nha-vuon", "Chi phí nâng tầng gồm gia cố móng, cột, dầm, sàn mới, mái và hoàn thiện tầng mới. Nếu móng cũ không đủ, khoản gia cố có thể lớn hơn phần xây tường."],

  ["nha-pho-4-tang-hien-dai", "nhà phố 4 tầng hiện đại", "kich-thuoc", "Bốn tầng hiện đại nên chia rõ: trệt để xe hoặc kinh doanh, tầng 2 khách và bếp, hai tầng trên là ngủ. Tum chỉ nên làm khi cần thờ hoặc sân phơi, không phải tầng ở chui."],
  ["nha-pho-4-tang-co-thang-may", "nhà phố 4 tầng có thang máy", "kich-thuoc", "Thang máy trong nhà 4 tầng cần hố pit, giếng thang và phòng máy hoặc thang không phòng máy. Vị trí giếng phải chốt trên mặt bằng trước khi đổ móng, vì sửa sau rất khó."],
  ["nha-pho-4-tang-mat-tien-5m", "nhà phố 4 tầng mặt tiền 5m", "kich-thuoc", "Mặt tiền 5m đủ một gara xe hơi nếu chiều sâu lô cho phép, nhưng thang và giếng trời phải xếp cùng trục để không nuốt phòng ngủ. Bốn tầng trên nền 5m cần tính tum và mật độ."],
  ["nha-pho-4-tang-5x20", "nhà phố 4 tầng 5x20", "kich-thuoc", "Lô 5x20 đủ sâu để có gara, giếng trời giữa nhà và bếp cuối. Bốn tầng nên để một khoảng thông tầng hoặc giếng, nếu không các phòng giữa nhà sẽ tối."],
  ["nha-pho-4-tang-1-tum", "nhà phố 4 tầng 1 tum", "kich-thuoc", "Tum dùng cho thờ, kho hoặc sân phơi, không nên biến thành phòng ngủ chật và nóng. Mái tum cần cách nhiệt và cửa thoát hiểm hoặc lối lên rõ ràng."],
  ["nha-pho-5-tang-hien-dai", "nhà phố 5 tầng hiện đại", "kich-thuoc", "Năm tầng là nhà cao trong hẻm hoặc mặt tiền hẹp. Cần xem chỉ giới, khoảng lùi và khả năng thang bộ cộng thang máy. Tải móng và chống thấm sân thượng quan trọng hơn mặt đứng."],
  ["nha-pho-5-tang-co-thang-may", "nhà phố 5 tầng có thang máy", "kich-thuoc", "Với 5 tầng, thang máy là nhu cầu đi lại thật, không phải tiện ích trang trí. Giếng thang chiếm một nhịp mặt bằng; các phòng còn lại phải vẫn đủ rộng cho giường."],
  ["nha-pho-1-tret-3-lau", "nhà phố 1 trệt 3 lầu", "kich-thuoc", "Một trệt ba lầu là bốn sàn sử dụng. Nên xếp ông bà hoặc phòng khách ở tầng thấp, phòng ngủ con ở trên, và tính tum riêng nếu cần thờ. Cầu thang một vế hay hai vế tùy bề ngang."],
  ["nha-pho-1-tret-4-lau", "nhà phố 1 trệt 4 lầu", "kich-thuoc", "Một trệt bốn lầu đã là nhà cao. Trước khi vẽ mặt đứng, cần đối chiếu số tầng được phép và phương án thang. Không nên hứa đủ phòng ngủ trên mọi tầng nếu mặt tiền dưới 4m."],
  ["nha-pho-1-tret-1-lung-3-lau", "nhà phố 1 trệt 1 lửng 3 lầu", "kich-thuoc", "Tầng lửng thêm không gian kinh doanh hoặc để xe mà chiều cao trệt phải đủ thông thủy. Lửng thấp sẽ bí; lửng cao có thể bị tính tầng tùy quy định khu đất."],
  ["thiet-ke-nha-pho-5x20", "thiết kế nhà phố 5x20", "kich-thuoc", "Nhà 5x20 nên chia ba khoảng: trước để xe hoặc khách, giữa giếng trời và thang, sau là bếp. Không kéo phòng ngủ xuyên suốt 20m vì phía sau sẽ thiếu sáng nếu không có sân sau."],
  ["nha-pho-5x20-3-tang", "nhà phố 5x20 3 tầng", "kich-thuoc", "Ba tầng trên đất 5x20 thường đủ một gara, phòng khách, bếp và ba phòng ngủ nếu thang gọn. Nên chừa ô giếng khoảng giữa thay vì đẩy hết công năng ra sát mặt tiền."],
  ["nha-pho-5x20-co-gara", "nhà phố 5x20 có gara", "kich-thuoc", "Gara trong nhà 5x20 lấy khoảng 4 đến 5m chiều sâu nếu xe hơi. Cửa cuốn, dốc nước và trần gara thấp hơn sàn tầng trên; phòng khách lùi lại sau gara hoặc lên tầng."],
  ["thiet-ke-nha-pho-4x15", "thiết kế nhà phố 4x15", "kich-thuoc", "Bề ngang 4m khó để gara xe hơi. Ưu tiên xe máy, cầu thang một vế và một giếng trời. Mỗi tầng chỉ nên một hoặc hai phòng ngủ, không chia nhiều phòng nhỏ thiếu cửa sổ."],
  ["thiet-ke-nha-pho-4x16", "thiết kế nhà phố 4x16", "kich-thuoc", "Thêm một mét chiều sâu so với lô 4x15 giúp lùi bếp hoặc thêm vệ sinh. Vẫn không nên ép gara ô tô. Thang đặt sát một bên để phòng bên kia đủ rộng kê giường."],
  ["nha-pho-mat-tien-6m-hien-dai", "nhà phố mặt tiền 6m hiện đại", "kich-thuoc", "Mặt tiền 6m thoáng hơn 4–5m: có thể gara và một phòng khách cạnh nhau, hoặc cửa kính lớn. Mặt đứng hiện đại nên có mái đua hoặc lam che nắng, không để kính trần hướng tây."],
  ["nha-pho-mat-tien-6m-co-gara", "nhà phố mặt tiền 6m có gara", "kich-thuoc", "Ngang 6m có thể một gara và lối vào nhà riêng, hoặc gara thông với phòng khách nếu muốn rộng. Cửa gara và cửa đi nên tách để bụi xe không vào chỗ ngồi."],
  ["thiet-ke-nha-pho-mat-tien-3m", "thiết kế nhà phố mặt tiền 3m", "kich-thuoc", "Nhà 3m chỉ nên một nhịp phòng và thang hẹp hoặc thang xương. Giếng trời cuối hoặc giữa nhà là cách lấy sáng chính. Không chia đôi mặt tiền bằng tường đặc."],
  ["nha-pho-2-mat-tien-hien-dai", "nhà phố 2 mặt tiền hiện đại", "kich-thuoc", "Hai mặt tiền là lợi thế gió và sáng, nhưng cũng là hai mặt nắng và ồn. Nên mở mặt nhìn công viên hoặc hướng tốt, và che mặt đường lớn bằng lam hoặc lùi cửa sổ."],
  ["nha-pho-2-mat-tien-kinh-doanh", "nhà phố 2 mặt tiền kinh doanh", "kich-thuoc", "Góc hai mặt tiền hợp cửa hàng ở trệt, biển hiệu và lối vào rõ. Tầng trên vẫn là nhà ở nên cầu thang gia đình nên tách khỏi quầy, không bắt khách đi xuyên phòng ngủ."],

  ["thiet-ke-nha-pho-co-tang-ham-de-xe", "thiết kế nhà phố có tầng hầm để xe", "ham-mai", "Hầm để xe cần dốc vừa đủ, hố thu nước và chống thấm vách. Không phải hẻm nào cũng cho phép dốc ra lộ giới; phải đo cao độ vỉa hè trước khi vẽ hầm."],
  ["nha-pho-co-tang-ban-ham", "nhà phố có tầng bán hầm", "ham-mai", "Bán hầm cao hơn hầm kín, dễ lấy sáng và đỡ ẩm, thường dùng để xe hoặc kinh doanh. Cao độ sàn bán hầm so với vỉa hè phải khớp cửa và dốc, tránh ngập khi mưa."],
  ["nha-pho-mat-tien-6m-co-tang-ham", "nhà phố mặt tiền 6m có tầng hầm", "ham-mai", "Ngang 6m đủ một làn dốc và chỗ xoay nếu chiều sâu tốt. Cột hầm không được chặn cửa xe. Chống thấm đáy và vách là hạng mục bắt buộc, không phải phần phát sinh."],
  ["thiet-ke-nha-pho-lech-tang", "thiết kế nhà phố lệch tầng", "ham-mai", "Lệch tầng tạo lệch cao độ để lấy sáng và tách không gian, nhưng cầu thang và dầm phức tạp hơn nhà thẳng tầng. Chỉ nên làm khi bề ngang đủ và gia chủ chấp nhận nhiều bậc thang ngắn."],
  ["nha-pho-lech-tang-5x20", "nhà phố lệch tầng 5x20", "ham-mai", "Đất 5x20 đủ sâu để lệch khối trước và khối sau quanh giếng trời. Khối sau có thể cao hơn để bếp và phòng ngủ thoáng. Cần mặt cắt đứng, không chỉ mặt bằng từng sàn."],
  ["ket-cau-nha-pho-lech-tang", "kết cấu nhà phố lệch tầng", "ham-mai", "Kết cấu lệch tầng có dầm gãy cao độ và sàn không liên tục. Hồ sơ phải có mặt cắt và thống kê thép rõ; thi công phải đổ đúng cao độ, không để thợ đoán tại hiện trường."],
  ["nha-pho-mai-thai-3-tang", "nhà phố mái thái 3 tầng", "ham-mai", "Mái thái trên nhà 3 tầng tạo bóng cho tầng trên và che tường. Độ dốc, ngói và sê-nô phải tính cùng mặt đứng, nếu không mái sẽ đội chiều cao vượt ý muốn."],
  ["nha-pho-mai-thai-hien-dai", "nhà phố mái thái hiện đại", "ham-mai", "Mái thái hiện đại giữ độ dốc nhưng bỏ bớt phù điêu. Tường phẳng, cửa lớn và một màu chủ đạo giúp mái không bị nặng. Vẫn phải có máng và chống thấm chân mái."],
  ["nha-pho-mai-nhat-3-tang", "nhà phố mái nhật 3 tầng", "ham-mai", "Mái nhật ba tầng đua rộng, nhìn thấp và hiện đại. Vì kèo và trần mái cần cách nhiệt vì độ dốc nhỏ, nắng dễ nung hơn mái thái dốc."],
  ["nha-pho-hien-dai-mai-nhat", "nhà phố hiện đại mái nhật", "ham-mai", "Khối nhà phẳng đi với mái nhật khi diềm mái thẳng và đồng màu. Không trộn mái nhật với quá nhiều phào cổ. Ô cửa dưới mái đua được che nắng tốt hơn."],
  ["nha-pho-mai-mansard", "nhà phố mái mansard", "ham-mai", "Mái mansard có phần đứng và phần dốc, tạo tầng áp mái. Cần cửa mái hoặc cửa sổ đứng để phòng dưới mái không tối, và xử lý thấm ở chỗ gãy mái."],
  ["tang-tum-nha-pho", "tầng tum nhà phố", "ham-mai", "Tum không phải tầng ở đầy đủ. Nên dùng cho thờ, kỹ thuật, giặt phơi. Nếu tum kín và có phòng ngủ, cần xem lại giấy phép và cách nhiệt mái."],

  ["gieng-troi-giua-nha-ong", "giếng trời giữa nhà ống", "mat-tien", "Giếng giữa nhà kéo sáng xuống phòng khách và bếp, đồng thời là chỗ thông gió. Kích thước ô trống phải đủ, có mái kính hoặc lam, và thoát nước đáy giếng khi mưa tạt."],
  ["gieng-troi-cuoi-nha-ong", "giếng trời cuối nhà ống", "mat-tien", "Giếng cuối nhà giúp bếp và phòng sau không tối. Nên kết hợp sân sau nhỏ hoặc giàn cây, và không đặt vệ sinh chắn hết khoảng sáng."],
  ["kich-thuoc-gieng-troi-nha-ong", "kích thước giếng trời nhà ống", "mat-tien", "Ô giếng quá nhỏ chỉ là khe, quá lớn thì mưa và nóng. Với nhà ngang 4–5m, một ô giữa nhà khoảng hơn một mét mỗi chiều thường dùng được; số chính xác phải đo trên mặt bằng."],
  ["phong-thuy-gieng-troi-nha-ong", "phong thủy giếng trời nhà ống", "mat-tien", "Về bố trí, giếng trời nên thoáng, sạch, không để máy giặt hay đồ phế ngay đáy. Tránh cửa vệ sinh mở thẳng vào giếng. Ánh sáng và gió đi xuống mới là phần nhà sử dụng được mỗi ngày."],
  ["thiet-ke-phong-tho-nha-ong", "thiết kế phòng thờ nhà ống", "mat-tien", "Phòng thờ nhà ống thường ở tầng trên hoặc tum để yên tĩnh. Bàn thờ không đối cửa vệ sinh, có cửa sổ hoặc thông gió nhẹ, và chiều cao phòng đủ để không bị đà đè."],
  ["thiet-ke-phong-tho-tren-tum", "thiết kế phòng thờ trên tum", "mat-tien", "Tum là chỗ thờ phổ biến vì tách khỏi phòng ngủ. Cần cách nhiệt mái, trần cao vừa đủ và lối lên riêng, không biến tum thành kho đồ chắn bàn thờ."],
  ["phong-khach-thong-tang-nha-pho", "phòng khách thông tầng nhà phố", "mat-tien", "Phòng khách thông tầng cao và sang nhưng nóng nếu không có lam hoặc giếng kèm. Nên thông một khoảng, không thông suốt cả nhà kẻo mất phòng ngủ tầng trên."],
  ["thiet-ke-mat-tien-nha-pho-hien-dai", "thiết kế mặt tiền nhà phố hiện đại", "mat-tien", "Mặt tiền hiện đại gồm mảng tường, cửa và một vài đường ngang dọc, không cần nhiều chỉ. Màu trung tính, cửa nhôm kính và lam che nắng thường đủ để nhà sáng mà không chói."],
  ["thiet-ke-mat-tien-nha-pho-huong-tay", "thiết kế mặt tiền nhà phố hướng tây", "mat-tien", "Nhà hướng tây cần ô văng, lam, cây hoặc mảng đặc che nắng chiều. Không nên làm kính lớn không che. Màu sáng và tường cách nhiệt giúp phòng sát mặt tiền đỡ nóng."],
  ["da-op-mat-tien-nha-pho", "đá ốp mặt tiền nhà phố", "mat-tien", "Đá ốp nên chọn loại ngoài trời, ít thấm, mạch keo chịu mưa. Không ốp kín những chỗ cần thoát nhiệt hoặc che hết cửa sổ. Một mảng đá nhấn đủ, phần còn lại là sơn."],
  ["phoi-mau-son-ngoai-that-nha-ong", "phối màu sơn ngoại thất nhà ống", "mat-tien", "Nhà ống đứng cạnh nhà khác nên dùng hai đến ba màu: một màu tường, một màu nhấn mảng cửa hoặc lam, một màu chân tường dễ chùi. Tránh quá nhiều màu trên mặt tiền hẹp."],
  ["thiet-ke-ban-cong-nha-pho", "thiết kế ban công nhà phố", "mat-tien", "Ban công cần chiều sâu đủ dùng, lan can đúng chiều cao và thoát nước riêng, không chảy xuống đầu cửa sổ tầng dưới. Hướng nắng thì thêm lam hoặc cây, đừng để sàn trống hứng mưa tạt vào phòng."],

  ["thiet-ke-noi-that-nha-pho-phong-cach-indochine", "thiết kế nội thất nhà phố phong cách indochine", "noi-that", "Indochine trong nhà phố dùng gỗ, mây, màu ấm và cửa chớp, nhưng phải chừa lối đi vì nhà ống vốn hẹp. Không sao chép phòng khách biệt thự vào căn 4m."],
  ["thiet-ke-noi-that-nha-pho-japandi", "thiết kế nội thất nhà phố japandi", "noi-that", "Japandi hợp nhà phố vì ít đồ, màu gỗ nhạt và tủ âm. Nên giấu đồ trong tủ cao sát trần, để lối thang và giếng trời trống."],
  ["thiet-ke-thi-cong-noi-that-indochine", "thiết kế thi công nội thất indochine", "noi-that", "Thi công Indochine cần thống nhất gỗ, sơn và đèn trên một bản vẽ, rồi sản xuất theo kích thước đo tại nhà. Làm tủ trước khi sơn hoàn thiện để khớp mạch."],
  ["thiet-ke-noi-that-nha-pho-4-tang", "thiết kế nội thất nhà phố 4 tầng", "noi-that", "Nội thất bốn tầng nên khác nhau theo chức năng: trệt bền và dễ chùi, tầng khách ấm, tầng ngủ yên, tum gọn. Không lặp một bộ sofa cho mọi tầng."],
  ["thiet-ke-ban-tho-trong-phong-khach-nha-ong", "thiết kế bàn thờ trong phòng khách nhà ống", "noi-that", "Nếu chưa có phòng thờ riêng, bàn thờ trong phòng khách phải có mảng tường riêng, cao hơn tầm ngồi và không quay vào vệ sinh. Nên có đèn và khoảng trống phía trước, không kê kệ ti vi sát bàn thờ."],
  ["chi-phi-hoan-thien-nha-pho-theo-m2", "chi phí hoàn thiện nhà phố theo m2", "noi-that", "Đơn giá hoàn thiện theo m2 chỉ là khung. Gạch, cửa, thiết bị vệ sinh và trần thay đổi là tổng tiền đổi. Hãy xin bảng hạng mục cho đúng diện tích sàn cần ốp, sơn và lắp."],

  ["don-gia-xay-dung-tphcm-2026", "đơn giá xây dựng TP.HCM 2026", "gia", "Đơn giá 2026 tại TP.HCM nên hỏi theo phần thô và trọn gói, kèm mốc vật tư. Giá một mét sàn không gồm nội thất rời, cọc nếu đất yếu, hay phí ngoài hàng rào."],
  ["don-gia-xay-dung-tron-goi-tphcm", "đơn giá xây dựng trọn gói TP.HCM", "gia", "Trọn gói gồm những gì phải được liệt kê: kết cấu, xây tô, chống thấm, điện nước, cửa, sơn, thiết bị cơ bản. Thiếu dòng nào trong hợp đồng thì đó chưa nằm trong đơn giá."],
  ["don-gia-nhan-cong-xay-dung-tphcm-2026", "đơn giá nhân công xây dựng TP.HCM 2026", "gia", "Nhân công là tiền công, chưa phải vật tư. So giá nhân công phải cùng một định mức: xây, tô, coppha, cốt thép. Giá rẻ mà không có đội ngũ cố định dễ đứt đoạn giữa chừng."],
  ["xay-nha-tron-goi-2-ty", "xây nhà trọn gói 2 tỷ", "gia", "Ngân sách khoảng 2 tỷ nên chốt diện tích sàn và cấp hoàn thiện trước. Nhà mặt tiền nhỏ, ít tầng, hoàn thiện phổ thông dễ nằm trong khung hơn biệt thự có hầm và đá ốp."],
  ["xay-nha-3-tang-voi-2-ty", "xây nhà 3 tầng với 2 tỷ", "gia", "Ba tầng với khoảng 2 tỷ phụ thuộc diện tích mỗi sàn và đất có phải ép cọc hay không. Hãy tính tổng sàn rồi đối chiếu đơn giá trọn gói, đừng chia đều 2 tỷ cho ba tầng mà quên móng và mái."],
  ["xay-nha-tam-3-ty", "xây nhà tầm 3 tỷ", "gia", "Tầm 3 tỷ mở được phương án nhà phố nhiều tầng hoặc hoàn thiện khá hơn, tùy đất. Vẫn nên giữ một khoản dự phòng cho phát sinh pháp lý, cọc và vật tư khi giá đổi."],
  ["xay-nha-1-5-ty", "xây nhà 1,5 tỷ", "gia", "Khoảng 1,5 tỷ hợp nhà diện tích vừa, ít tầng hoặc cải tạo lớn, nếu hoàn thiện ở mức phổ thông. Cần nói rõ 1,5 tỷ là phần xây hay đã gồm nội thất."],
  ["xin-giay-phep-xay-dung-nha-o-mat-bao-lau", "xin giấy phép xây dựng nhà ở mất bao lâu", "gia", "Thời gian cấp phép phụ thuộc hồ sơ đủ hay phải bổ sung và từng quận, không có một mốc chung cho mọi căn. Nên chuẩn bị bản vẽ và giấy đất trước, rồi theo hướng dẫn của cơ quan xây dựng địa phương."],
  ["giay-to-xin-giay-phep-xay-dung", "giấy tờ xin giấy phép xây dựng", "gia", "Bộ hồ sơ thường xoay quanh đơn, giấy tờ đất và bản vẽ. Danh mục cụ thể do nơi nhận hồ sơ xác nhận. Minh Phú chuẩn bị phần bản vẽ; gia chủ đối chiếu giấy đất với quận, phường."],
  ["chi-phi-xin-giay-phep-xay-dung", "chi phí xin giấy phép xây dựng", "gia", "Chi phí thường gồm lập hồ sơ, bản vẽ và các khoản theo quy định tại thời điểm nộp. Không nên trả khoản không có biên nhận. Hãy hỏi rõ phí nhà nước và phí dịch vụ là hai dòng khác nhau."],
  ["xay-nha-mua-mua-co-tot-khong", "xây nhà mùa mưa có tốt không", "gia", "Mùa mưa vẫn xây được nếu che chắn, thoát nước hố móng và không đổ bê tông lúc mưa lớn. Tiến độ dễ chậm hơn mùa khô. Không để cốt thép và xi măng phơi mưa."],
  ["thoi-gian-bao-hanh-cong-trinh-nha-o", "thời gian bảo hành công trình nhà ở", "gia", "Thời hạn bảo hành phải ghi trong hợp đồng theo hạng mục: kết cấu, chống thấm, hoàn thiện. Nên giữ biên bản bàn giao và số điện thoại người nhận bảo hành, không chỉ một câu hứa miệng."],

  ["thi-cong-nha-pho-tan-binh", "thi công nhà phố Tân Bình", "local", "Tân Bình nhiều nhà trong hẻm và nhà cũ liền kề. Cần khảo sát lối vào xe vật tư, tường chung và nền trước khi chốt móng. Báo giá gửi sau khi đo tại phường, không gửi đại một đơn giá."],
  ["thi-cong-nha-pho-nha-be", "thi công nhà phố Nhà Bè", "local", "Nhà Bè có đất ven sông và nền yếu ở một số khu. Phương án móng, cọc và nền đắp phải theo hiện trạng từng lô, không dùng móng nhà phố nội thành để áp xuống."],
  ["thi-cong-nha-pho-binh-tan", "thi công nhà phố Bình Tân", "local", "Bình Tân nhiều lô mới và hẻm đang hoàn thiện. Nên kiểm tra cao độ đường, cống và chỉ giới trước khi đặt nền, để cửa và sân không thấp hơn mặt đường sau này."],
  ["thi-cong-nha-pho-quan-12", "thi công nhà phố Quận 12", "local", "Quận 12 có cả nhà phố trong khu dân cư và đất sâu. Khảo sát phải ghi được xe bê tông vào tới đâu. Nếu phải bơm xa hoặc chuyển vật tư thủ công, dự toán phải có dòng đó."],
  ["thi-cong-nha-pho-phu-nhuan", "thi công nhà phố Phú Nhuận", "local", "Phú Nhuận nhà cao, hẻm nhỏ, sát công trình lân cận. Thi công cần phương án chống rung, che chắn và giờ tập kết. Cải tạo hoặc xây mới đều phải xem tường chung."],
  ["thi-cong-nha-pho-quan-3", "thi công nhà phố Quận 3", "local", "Quận 3 nhiều nhà cũ trong ngõ hẹp. Vật tư thường phải chuyển thủ công một đoạn. Dự toán và tiến độ phải tính điều này, cùng phương án gia cố nếu cải tạo nhà hiện hữu."],

  ["thiet-ke-nha-pho-ket-hop-kinh-doanh", "thiết kế nhà phố kết hợp kinh doanh", "kinh-doanh", "Tầng trệt dành cho cửa hàng hoặc văn phòng, các tầng trên là nhà ở. Cầu thang gia đình và vệ sinh khách nên tách. Tải sàn trệt và biển hiệu phải có trong hồ sơ kết cấu."],
  ["nha-ong-3-tang-ket-hop-kinh-doanh", "nhà ống 3 tầng kết hợp kinh doanh", "kinh-doanh", "Ba tầng đủ một sàn kinh doanh và hai sàn ở. Mặt tiền trệt mở cửa, hai tầng trên vẫn cần giếng trời vì phía sau dễ bị sàn kinh doanh che sáng."],
  ["nha-pho-tang-1-de-kinh-doanh", "nhà phố tầng 1 để kinh doanh", "kinh-doanh", "Tầng 1 kinh doanh cần trần cao hơn chỗ ở, cửa rộng và nền dễ lau. Chỗ để xe gia đình không nên chiếm hết lối khách. Ống nước và điện của quán đi riêng để sau này sửa không đục nhà trên."],
  ["thi-cong-mong-bang-nha-pho", "thi công móng băng nhà phố", "kinh-doanh", "Móng băng chỉ dùng khi đất và tải trọng cho phép. Nhà cao tầng hoặc đất yếu có thể cần cọc. Không tự chọn móng băng vì thấy nhà bên làm vậy; phải có hồ sơ và hiện trạng đất của chính lô."],
  ["hop-dong-thiet-ke-thi-cong-tron-goi", "hợp đồng thiết kế thi công trọn gói", "kinh-doanh", "Hợp đồng thiết kế thi công phải ghi phạm vi bản vẽ, hạng mục xây, vật tư tham chiếu, tiến độ, cách tính phát sinh và bảo hành. Thiếu một trong các mục đó thì chưa phải trọn gói."],
  ["cua-nhom-kinh-mat-tien-nha-pho", "cửa nhôm kính mặt tiền nhà phố", "kinh-doanh", "Cửa nhôm kính mặt tiền nên chọn hệ có cầu cách nhiệt hoặc kính phù hợp hướng nắng, kèm ray và khóa chắc. Kích thước ô lớn phải có bản vẽ, không để xưởng đo rồi mới biết vướng đà."],
];

function cap(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function titleFor(kw) {
  const t = cap(kw);
  if (/bao nhiêu|chi phí|đơn giá/.test(kw)) return `${t}: cách đọc dự toán trước khi ký`;
  if (kw.startsWith("thi công nhà phố")) return `${t}: khảo sát hiện trạng rồi mới báo giá`;
  if (/thiết kế|cải tạo|nâng tầng|xây /.test(kw)) return `${t}: phương án thực tế tại TP.HCM`;
  if (/giấy phép|giấy tờ|bảo hành|mùa mưa|hợp đồng/.test(kw)) return `${t}: điểm cần ghi trong hồ sơ`;
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
    if (!file.endsWith(".ts") || file === "seoArticlesBatch5.ts") continue;
    const content = fs.readFileSync(path.join(dataDir, file), "utf8");
    for (const match of content.matchAll(/href: "\/tin-tuc\/([^"]+)"/g)) slugs.add(match[1]);
  }
  return slugs;
}

function buildBody(item, relatedHref) {
  const brief = BRIEFS[item.slug];
  if (!brief?.plan || !brief?.watch || !brief?.money || !brief?.faqs || brief.faqs.length < 3) {
    throw new Error(`Brief chưa đủ cho ${item.slug}`);
  }
  const cat = CATS[item.cat];
  const kw = item.kw;
  const links = cat.links.map(linkMd).join(", ");
  const related = relatedHref ? ` Đọc tiếp [${relatedHref.kw}](/tin-tuc/${relatedHref.slug}).` : "";
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
    `Dự toán ${kw} chỉ dùng để ký khi đã đo đất hoặc nhà hiện trạng và đã tách hạng mục. Phần chưa ghi trong hợp đồng thì chưa có trong giá. Xem thêm ${links}.${related}`,
    { type: "h2", text: `Câu hỏi thường gặp về ${kw}` },
    ...brief.faqs,
    { type: "h2", text: "Xem hiện trạng rồi hãy chốt" },
    `Gửi kích thước đất hoặc ảnh nhà qua [trang liên hệ](/lien-he) hoặc gọi 0912 166 079. Với ${kw}, buổi đầu để chốt cách bố trí và danh mục việc, chưa phải lúc nhận một số tổng.`,
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
  if (seen.has(slug)) throw new Error(`Duplicate slug ${slug}`);
  if (existing.has(slug)) throw new Error(`Slug already published: ${slug}`);
  seen.add(slug);
  const related = ITEMS[(index + 1) % ITEMS.length];
  const relatedItem =
    related[2] === cat ? { slug: related[0], kw: related[1] } : ITEMS.find((row) => row[2] === cat && row[0] !== slug);
  articles.push({
    slug,
    kw,
    cat,
    note,
    title: titleFor(kw),
    body: buildBody({ slug, kw, cat, note }, relatedItem ? { slug: relatedItem[0] || relatedItem.slug, kw: relatedItem[1] || relatedItem.kw } : null),
  });
}

if (articles.length !== 100) {
  throw new Error(`Expected 100 articles, got ${articles.length}`);
}

let out = `/** 100 articles for the second keyword pool. Generated by scripts/generate-seo-batch5.mjs */\nconst m = (path: string) => \`/media/\${path}\`;\n\nexport const seoArticlesBatch5 = [\n`;

for (let index = 0; index < articles.length; index += 1) {
  const article = articles[index];
  const images = CATS[article.cat].images;
  const excerpt = BRIEFS[article.slug].lead;
  out += `  {\n`;
  out += `    title: "${esc(article.title)}",\n`;
  out += `    href: "/tin-tuc/${article.slug}",\n`;
  out += `    image: m("${images[index % images.length]}"),\n`;
  out += `    imageAlt: "${esc(cap(article.kw) + " — Kiến trúc Minh Phú")}",\n`;
  out += `    date: "02/10/2026",\n`;
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

const outPath = path.join(root, "src/data/seoArticlesBatch5.ts");
fs.writeFileSync(outPath, out, "utf8");

console.log(`Wrote ${articles.length} articles → ${outPath}`);
