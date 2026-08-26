"use client";

import Image from "next/image";
import { useRef } from "react";
import { IconChevronLeft, IconChevronRight } from "@/components/Icons";
import { benefits } from "@/data/site";

export function Benefits() {
  const scroller = useRef<HTMLDivElement>(null);

  return (
    <section id="benefit">
      <div className="center relative">
        <div
          ref={scroller}
          className="benefit-list d-flex flex-wrap justify-content-between"
          style={{ gap: "24px 70px" }}
        >
          {benefits.map((item) => (
            <article key={item.title} className="benefit-item" style={{ flex: "1 1 140px", maxWidth: 200 }}>
              <div className="benefit-img">
                <span className="scale-img">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
                  />
                </span>
              </div>
              <div className="benefit-desc">
                <h3 className="benefit-name">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          aria-label="Trước"
          className="benefit-nav benefit-nav-prev"
          onClick={() => scroller.current?.scrollBy({ left: -260, behavior: "smooth" })}
        >
          <IconChevronLeft size={18} />
        </button>
        <button
          type="button"
          aria-label="Sau"
          className="benefit-nav benefit-nav-next"
          onClick={() => scroller.current?.scrollBy({ left: 260, behavior: "smooth" })}
        >
          <IconChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
