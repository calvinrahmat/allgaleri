"use client";

import Image from "next/image";

const logos = [
  { src: "/clients/declip.png", alt: "Declip" },
  { src: "/clients/larocking.png", alt: "Larocking" },
  { src: "/clients/bu_nanik.jpeg", alt: "Bu Nanik" },
  { src: "/clients/omextra.png", alt: "Omextra" },
  { src: "/clients/milai.png", alt: "Milai" },
  { src: "/clients/kinza.png", alt: "Kinza" },
  { src: "/clients/xl.png", alt: "XL" },
  { src: "/clients/nippon_paint.png", alt: "Nippon Paint" },
  { src: "/clients/bank_ina.png", alt: "Bank INA" },
  { src: "/clients/kimia_farma.png", alt: "Kimia Farma" },
];

export function HeroLogosMarquee() {
  return (
    <div className="overflow-hidden py-6 bg-transparent">
      <div className="relative w-full">
        <div className="flex gap-8 animate-marquee whitespace-nowrap items-center h-12">
          {logos.concat(logos).map((logo, idx) => (
            <div
              key={idx}
              className="inline-block flex items-center justify-center h-12"
            >
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
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
