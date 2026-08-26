import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { intro, site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Giới thiệu",
  description:
    "Giới thiệu Công ty TNHH Kiến trúc Minh Phú — đơn vị thiết kế, thi công và cải tạo nhà phố tại TP.HCM với quy trình bài bản, báo giá minh bạch.",
  path: "/gioi-thieu",
});

export default function GioiThieuPage() {
  return (
    <>
      <PageHero title="Giới thiệu" crumbs={[{ label: "Giới thiệu", href: "/gioi-thieu" }]} />
      <section className="pb-12 md:pb-16 pt-4">
        <div className="container-mp grid lg:grid-cols-2 gap-10 items-start">
          <div className="content text-[15px] leading-7 text-[#444]">
            <p className="m-0 mb-4 text-justify">{intro.paragraphs[0]}</p>
            <p className="m-0 mb-4 text-justify">{intro.paragraphs[1]}</p>
            <p className="m-0 mb-6 text-justify">{intro.paragraphs[2]}</p>

            <h3 className="text-[18px] font-bold mt-8 mb-3 text-[#3498db]">
              Dịch vụ chính tại Minh Phú Building
            </h3>
            <ul className="pl-5 space-y-2 text-[15px] text-[#333]">
              <li>
                Thiết kế nhà phố phong cách{" "}
                <strong className="text-[#3498db]">hiện đại, tân cổ điển</strong>
              </li>
              <li>
                Thi công xây dựng nhà phố{" "}
                <strong className="text-[#3498db]">trọn gói từ móng đến hoàn thiện</strong>
              </li>
              <li>Cải tạo, sửa chữa, nâng tầng nhà phố hiện hữu</li>
              <li>Hoàn thiện nội – ngoại thất, tối ưu không gian sử dụng</li>
            </ul>

            <h3 className="text-[18px] font-bold mt-8 mb-3 text-[#3498db]">
              Quy trình làm việc rõ ràng
            </h3>
            <p className="m-0 mb-4 text-justify">
              Minh Phú Building triển khai dự án theo từng bước: khảo sát hiện trạng –
              tư vấn phương án – thiết kế chi tiết – lập dự toán – thi công thực tế.
              Quy trình này giúp hạn chế phát sinh chi phí, kiểm soát tiến độ và đảm
              bảo chất lượng công trình.
            </p>

            <h3 className="text-[18px] font-bold mt-8 mb-3 text-[#3498db]">
              Lý do khách hàng lựa chọn Minh Phú Building
            </h3>
            <ul className="pl-5 space-y-2 text-[15px] text-[#333]">
              <li>Giải pháp phù hợp thực tế, không vẽ vời dư thừa</li>
              <li>Thi công đúng kỹ thuật, đảm bảo an toàn và độ bền</li>
              <li>Tiến độ rõ ràng, dễ theo dõi</li>
              <li>Hỗ trợ tư vấn xuyên suốt trước – trong – sau thi công</li>
            </ul>

            <div className="mt-10 p-5 bg-[#f7f9fb] border-l-4 border-[var(--color-main)]">
              <h3 className="m-0 mb-2 text-[16px] font-bold uppercase text-[#1c1c1c]">
                Thông tin liên hệ
              </h3>
              <p className="m-0 text-[14px] leading-7">
                <em>
                  {site.slogan1} — {site.slogan2}
                </em>
                <br />
                <strong>{site.address1Label}:</strong> {site.address1}
                <br />
                <strong>{site.address2Label}:</strong> {site.address2}
                <br />
                Hotline: {site.phone}
                <br />
                Website: {site.website}
                <br />
                Email: {site.email}
              </p>
            </div>
          </div>
          <div className="scale-img">
            <Image
              src={intro.image}
              alt={intro.title}
              width={800}
              height={800}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
