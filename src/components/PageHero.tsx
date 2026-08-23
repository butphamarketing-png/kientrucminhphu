import Link from "next/link";

export function PageHero({
  title,
  crumbs,
}: {
  title: string;
  crumbs?: { label: string; href?: string }[];
}) {
  const items = crumbs ?? [{ label: title }];

  return (
    <>
      <div className="breadCrumbs">
        <div className="center">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Trang chủ</Link>
            </li>
            {items.map((c, idx) => {
              const isLast = idx === items.length - 1;
              return (
                <li
                  key={c.label}
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
          </ul>
        </div>
      </div>
      <div className="center" style={{ paddingTop: 32, paddingBottom: 8 }}>
        <div className="title-main" style={{ marginBottom: 0 }}>
          <h1>{title}</h1>
        </div>
      </div>
    </>
  );
}
