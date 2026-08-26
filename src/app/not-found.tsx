import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Không tìm thấy trang",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <PageHero title="Không tìm thấy trang" />
      <section className="pb-16 pt-4">
        <div className="container-mp max-w-2xl text-center text-[15px] leading-7 text-[#444]">
          <p>Trang bạn tìm không tồn tại hoặc đã được chuyển đi.</p>
          <p>
            <Link className="text-[var(--color-main)] font-semibold" href="/">
              Về trang chủ
            </Link>
            {" · "}
            <Link className="text-[var(--color-main)] font-semibold" href="/lien-he">
              Liên hệ tư vấn
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
