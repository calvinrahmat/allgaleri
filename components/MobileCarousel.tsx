"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const mobileBanners = [
  { src: "/banner_1_mobile.png", alt: "Banner 1 Mobile" },
  { src: "/banner_2_mobile.png", alt: "Banner 2 Mobile" },
  { src: "/banner_3_mobile.png", alt: "Banner 3 Mobile" },
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
    <div className="w-full h-full absolute inset-0 z-0 pt-32">
      <Image
        src={mobileBanners[index].src}
        alt={mobileBanners[index].alt}
        fill
        className="object-cover transition-all duration-700"
        priority
      />
    </div>
  );
} 