"use client";

import Image from "next/image";
import { benefits as defaultBenefits } from "@/data/site";
import type { CmsBenefit } from "@/lib/cms/types";

export function Benefits({
  benefits = defaultBenefits,
}: {
  benefits?: CmsBenefit[] | typeof defaultBenefits;
}) {
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
