import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  title: string
  description: string
  imageSrc: string
  link?: string
}

export function ProductCard({ title, description, imageSrc, link = "#" }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
      <div className="relative h-48">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={link}>
          <Button variant="outline" className="w-full border-indigo text-gray-700 hover:bg-lavender">
            Lihat Detail
          </Button>
        </Link>
      </div>
    </div>
  )
}
