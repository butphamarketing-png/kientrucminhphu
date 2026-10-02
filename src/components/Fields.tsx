import Image from "next/image";
import Link from "next/link";
import { fields as defaultFields } from "@/data/site";
import type { CmsServiceItem } from "@/lib/cms/types";

export function Fields({
  fields = defaultFields,
}: {
  fields?: CmsServiceItem[] | typeof defaultFields;
}) {
  return (
    <section id="field">
      <div className="center">
        <div className="title-main">
          <h2>Lĩnh vực hoạt động</h2>
        </div>
        <div className="field-content">
          {fields.map((item) => (
            <div key={item.href} className="news-item">
              <div className="news-img">
                <Link
                  href={item.href}
                  className="text-decoration-none scale-img btn-hover-img"
                  title={item.title}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={468}
                    height={447}
                    className="w-full h-auto object-cover"
                  />
                </Link>
              </div>
              <h3 className="field-name">
                <Link
                  href={item.href}
                  className="text-split text-split-1"
                  title={item.title}
                >
                  {item.title}
                </Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
