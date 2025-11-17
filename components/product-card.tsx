import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { CSSProperties } from "react";

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link?: string;
  imageClassName?: string;
  imageStyle?: CSSProperties;
}

export function ProductCard({
  title,
  description,
  imageSrc,
  link = "#",
  imageClassName,
  imageStyle,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
      <div className="relative h-64">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover ${imageClassName ?? ""}`}
          style={imageStyle}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
    </div>
  );
}
