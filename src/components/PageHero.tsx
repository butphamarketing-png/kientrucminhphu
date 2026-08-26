import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export function PageHero({
  title,
  crumbs,
  showHeading = true,
  canonicalPath,
}: {
  title: string;
  crumbs?: { label: string; href?: string }[];
  showHeading?: boolean;
  /** Đường dẫn trang hiện tại cho schema breadcrumb */
  canonicalPath?: string;
}) {
  const items = crumbs ?? [{ label: title, href: canonicalPath }];

  const jsonCrumbs = items.map((c) => ({
    name: c.label,
    path: c.href,
  }));

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(jsonCrumbs)} />
      <nav className="breadCrumbs" aria-label="Đường dẫn">
        <div className="center">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Trang chủ</Link>
            </li>
            {items.map((c, idx) => {
              const isLast = idx === items.length - 1;
              return (
                <li
                  key={`${c.label}-${idx}`}
                  className={`breadcrumb-item${isLast ? " active" : ""}`}
                >
                  {c.href && !isLast ? (
                    <Link href={c.href}>{c.label}</Link>
                  ) : (
                    <span>{c.label}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
      {showHeading ? (
        <div className="center" style={{ paddingTop: 32, paddingBottom: 8 }}>
          <div className="title-main" style={{ marginBottom: 0 }}>
            <h1>{title}</h1>
          </div>
        </div>
      ) : null}
    </>
  );
}
