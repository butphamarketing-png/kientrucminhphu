import Image from "next/image";
import Link from "next/link";

export function ContentCardGrid({
  items,
}: {
  items: { title: string; href: string; image: string }[];
}) {
  return (
    <div className="news-content">
      {items.map((item) => (
        <div key={item.href + item.title} className="news-item">
          <div className="news-img">
            <Link
              href={item.href}
              className="text-decoration-none scale-img btn-hover-img"
              title={item.title}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={354}
                height={424}
                className="w-full h-auto object-cover"
              />
            </Link>
          </div>
          <div className="news-desc">
            <h2 className="news-name">
              <Link
                href={item.href}
                className="text-split text-split-2"
                title={item.title}
              >
                {item.title}
              </Link>
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
