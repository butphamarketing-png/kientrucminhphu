import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/site";

export function Projects() {
  return (
    <section id="contruction">
      <div className="center">
        <div className="title-main">
          <h2>công trình thi công tiêu biểu</h2>
        </div>

        <div className="news-content contruction-content">
          {projects.map((p) => (
            <div key={p.href} className="news-item">
              <div className="news-img">
                <Link
                  href={p.href}
                  className="text-decoration-none scale-img btn-hover-img"
                  title={p.title}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={614}
                    height={702}
                    className="w-full h-auto object-cover"
                  />
                </Link>
              </div>
              <div className="news-desc">
                <h3 className="news-name">
                  <Link
                    href={p.href}
                    className="text-split text-split-2"
                    title={p.title}
                  >
                    {p.title}
                  </Link>
                </h3>
                <div className="contruction-info">
                  <p className="contruction-info-line">
                    <b>Chủ đầu tư:</b> {p.owner}
                  </p>
                  <p className="contruction-info-line">
                    <b>Địa điểm:</b> {p.location}
                  </p>
                  <p className="contruction-info-line">
                    <b>Quy mô:</b> {p.scale}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link href="/cong-trinh-tieu-bieu" className="btn-more contruction-more">
          Xem thêm
          <Image
            src="/media/assets/images/icon-btn.png"
            alt=""
            width={14}
            height={14}
          />
        </Link>
      </div>
    </section>
  );
}
