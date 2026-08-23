import Image from "next/image";
import Link from "next/link";
import { intro } from "@/data/site";

export function Intro() {
  return (
    <section id="intro">
      <div className="center d-flex flex-wrap justify-content-between align-items-center">
        <div className="intro-left">
          <p className="intro-short">Welcome to</p>
          <h2 className="intro-title">{intro.title}</h2>
          <div className="intro-desc">
            {intro.paragraphs.map((p, i) => (
              <span key={p.slice(0, 32)}>
                {i > 0 ? <br /> : null}
                {p}
              </span>
            ))}
          </div>
          <Link href={intro.href} className="btn-more intro-btn">
            Xem thêm
            <Image
              src="/media/assets/images/icon-btn.png"
              alt=""
              width={14}
              height={14}
            />
          </Link>
        </div>
        <div className="intro-right scale-img">
          <Image
            src={intro.image}
            alt={intro.title}
            width={706}
            height={706}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
