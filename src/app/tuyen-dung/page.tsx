import { SimpleContentPage } from "@/components/SimpleContentPage";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Tuyển dụng",
  description: `Tuyển dụng tại ${site.shortName}: vị trí quản lý khối thi công xây dựng. Ứng tuyển qua ${site.email} hoặc hotline ${site.phone}.`,
  path: "/tuyen-dung",
});

export default function Page() {
  return (
    <SimpleContentPage title="Tuyển dụng">
      <h3 className="text-[18px] font-bold text-[#3498db]">
        1. VỊ TRÍ: GIÁM ĐỐC / QUẢN LÝ KHỐI THI CÔNG XÂY DỰNG
      </h3>
      <p>
        <strong className="text-[#3498db]">Mô tả công việc:</strong>
      </p>
      <ul className="pl-5 space-y-2">
        <li>
          Tư vấn giải pháp kỹ thuật, triển khai thiết kế và thi công các dự án nhà phố,
          dân dụng.
        </li>
        <li>Lập dự toán, báo giá, cân đối chi phí và kiểm soát tiến độ thi công.</li>
        <li>Quản lý, điều phối kỹ sư giám sát và đội ngũ nhân sự tại công trình.</li>
        <li>Đảm bảo chất lượng, an toàn lao động và bàn giao đúng cam kết.</li>
      </ul>

      <h3 className="text-[18px] font-bold text-[#3498db] mt-8">Cách thức ứng tuyển</h3>
      <p>
        Ứng viên gửi hồ sơ về email{" "}
        <a className="text-[var(--color-main)] font-semibold" href={`mailto:${site.email}`}>
          {site.email}
        </a>{" "}
        hoặc liên hệ hotline{" "}
        <a className="text-[var(--color-main)] font-semibold" href={`tel:${site.phoneRaw}`}>
          {site.phone}
        </a>
        .
      </p>
    </SimpleContentPage>
  );
}
