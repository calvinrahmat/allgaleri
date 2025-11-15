"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const logos = [
  { src: "/clients/client-1.png", alt: "Client 1" },
  { src: "/clients/client-2.png", alt: "Client 2" },
  { src: "/clients/client-3.png", alt: "Client 3" },
  { src: "/clients/client-4.png", alt: "Client 4" },
  { src: "/clients/client-5.png", alt: "Client 5" },
  { src: "/clients/client-6.png", alt: "Client 6" }
];

export function HeroLogosMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [repeat, setRepeat] = useState(2);

  useEffect(() => {
    function updateRepeat() {
      if (containerRef.current && rowRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const rowWidth = rowRef.current.scrollWidth;
        // Repeat enough times to fill at least 2x the container width
        const minWidth = containerWidth * 2;
        const times = Math.ceil(minWidth / rowWidth);
        setRepeat(times < 2 ? 2 : times);
      }
    }
    updateRepeat();
    window.addEventListener("resize", updateRepeat);
    return () => window.removeEventListener("resize", updateRepeat);
  }, []);

  // Render the logos once to measure, then repeat as needed
  return (
    <div ref={containerRef} className="overflow-hidden py-6 bg-transparent w-full">
      {/* Hidden row for measuring */}
      <div ref={rowRef} className="marquee-measure" style={{ position: 'absolute', visibility: 'hidden', pointerEvents: 'none', height: 0, overflow: 'hidden' }}>
        {logos.map((logo, idx) => (
          <div key={idx} className="inline-block flex items-center justify-center h-12">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={70}
              height={40}
              className="object-contain grayscale opacity-80 hover:opacity-100 transition"
              priority={idx < logos.length}
            />
          </div>
        ))}
      </div>
      {/* Animated row */}
      <div className="marquee-inner">
        {Array(repeat).fill(null).flatMap(() => logos).map((logo, idx) => (
          <div key={idx} className="inline-block flex items-center justify-center h-12">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={70}
              height={40}
              className="object-contain grayscale opacity-80 hover:opacity-100 transition"
              priority={idx < logos.length}
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        .marquee-inner {
          display: flex;
          
          gap: 2rem;
          width: max-content;
          animation: marquee 200s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
