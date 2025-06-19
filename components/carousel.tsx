"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    src: "/banner_4.jpg",
    alt: "Banner 4 - Maxellpack",
  },
  {
    id: 2,
    src: "/banner_5.jpeg",
    alt: "Banner 1 - Maxellpack",
  },
  {
    id: 3,
    src: "/banner_6.jpeg",
    alt: "Banner 2 - Maxellpack",
  },    

];

export function Carousel() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(next, 3000);
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <div className="relative w-full min-h-[80vh] md:h-[500px] lg:h-[600px] overflow-hidden border-2 ">
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === idx ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-contain md:object-cover"
              priority={current === idx}
            />
            <div className="absolute inset-0 bg-white/50 z-10 pointer-events-none" />
          </div>
        </div>
      ))}
      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              current === i ? "bg-white p-1.5" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
