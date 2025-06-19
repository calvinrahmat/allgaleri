"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const mobileBanners = [
  { src: "/banner_4.jpg", alt: "Banner 4 Mobile" },
  { src: "/banner_5.jpeg", alt: "Banner 5 Mobile" },
  { src: "/banner_6.jpeg", alt: "Banner 6 Mobile" },
];

export function MobileCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % mobileBanners.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full absolute inset-0 z-0 ">
      <div className="relative w-full h-full">
        <Image
          src={mobileBanners[index].src}
          alt={mobileBanners[index].alt}
          fill
          className="object-cover transition-all duration-700"
          priority
        />
        <div className="absolute inset-0 bg-white/50 z-10 pointer-events-none" />
      </div>
    </div>
  );
} 