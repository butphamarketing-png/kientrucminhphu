"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { houseDesigns, houseTabs } from "@/data/site";

export function HouseDesign() {
  const [tab, setTab] = useState("all");
  const items = useMemo(
    () => houseDesigns.filter((h) => h.tabs.includes(tab)),
    [tab],
  );

  return (
    <section id="house-design">
      <div className="center">
        <div className="title-main">
          <h2>Mẫu nhà phố biệt thự đẹp</h2>
        </div>

        <div className="house-design-list">
          {houseTabs.map((t) => (
            <h3
              key={t.id}
              className={`house-design-click${tab === t.id ? " active" : ""}`}
              onClick={() => setTab(t.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setTab(t.id);
              }}
            >
              {t.label}
            </h3>
          ))}
        </div>

        <div className="house-design-paging news-content">
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
                <h3 className="news-name">
                  <Link
                    href={item.href}
                    className="text-split text-split-2"
                    title={item.title}
                  >
                    {item.title}
                  </Link>
                </h3>
              </div>
            </div>
          ))}
        </div>

        <Link href="/kien-truc" className="btn-more house-design-btn">
          Xem tất cả
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
