"use client";

import Image from "next/image";
import { benefits } from "@/data/site";

export function Benefits() {
  return (
    <section id="benefit">
      <div className="center">
        <div className="benefit-list">
          {benefits.map((item) => (
            <article key={item.title} className="benefit-item">
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
      </div>
    </section>
  );
}
