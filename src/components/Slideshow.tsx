"use client";

import { useEffect, useState } from "react";
import { slides } from "@/data/site";

export function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div className="slideshow">
      <div className="relative w-full aspect-[1920/843] min-h-[180px] overflow-hidden">
        {slides.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100 z-[1]" : "opacity-0 z-0"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Slideshow ${i + 1}`}
              decoding={i === 0 ? "sync" : "async"}
              fetchPriority={i === 0 ? "high" : "auto"}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Trước"
        onClick={prev}
        className="control-slideshow prev-slideshow"
        style={{ left: 20 }}
      >
        <i className="fa fa-angle-left" aria-hidden />
      </button>
      <button
        type="button"
        aria-label="Sau"
        onClick={next}
        className="control-slideshow next-slideshow"
        style={{ right: 20 }}
      >
        <i className="fa fa-angle-right" aria-hidden />
      </button>
    </div>
  );
}
