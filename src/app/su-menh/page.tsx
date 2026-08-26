import { SimpleContentPage } from "@/components/SimpleContentPage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Sứ mệnh",
  description:
    "Sứ mệnh của Minh Phú Building: thiết kế & thi công nhà phố uy tín, lấy con người làm trung tâm, cam kết chất lượng – tiến độ – chi phí minh bạch.",
  path: "/su-menh",
});

export default function Page() {
  return (
    <SimpleContentPage title="Sứ mệnh" path="/su-menh">
      <p>
        Trong bối cảnh đô thị ngày càng phát triển, nhu cầu về nhà ở không chỉ dừng lại ở
        việc “xây một ngôi nhà” mà còn là{" "}
        <strong className="text-[#3498db]">
          xây dựng một không gian sống chất lượng, an toàn và phù hợp lâu dài
        </strong>
        . Thấu hiểu điều đó,{" "}
        <strong className="text-[#3498db]">Minh Phú Building</strong> ra đời với sứ mệnh
        trở thành{" "}
        <strong className="text-[#3498db]">đơn vị thiết kế & thi công nhà phố uy tín</strong>
        , mang đến những công trình có giá trị thực tiễn cao cho khách hàng.
      </p>

      <h3 className="text-[18px] font-bold text-[#3498db]">
        Sứ mệnh lấy con người làm trung tâm
      </h3>
      <p>
        Minh Phú Building xác định rõ mỗi công trình phải phục vụ đúng nhu cầu sống của
        gia chủ: công năng hợp lý, thẩm mỹ bền vững, chi phí minh bạch và tiến độ rõ ràng.
      </p>

      <h3 className="text-[18px] font-bold text-[#3498db]">Cam kết trong từng dự án</h3>
      <ul className="pl-5 space-y-2">
        <li>Tư vấn giải pháp thực tế, không dư thừa</li>
        <li>Thiết kế – thi công đồng bộ, hạn chế phát sinh</li>
        <li>Kiểm soát chất lượng và tiến độ xuyên suốt</li>
        <li>Đồng hành hỗ trợ khách hàng trước – trong – sau thi công</li>
      </ul>
    </SimpleContentPage>
  );
}
