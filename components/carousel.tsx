"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    src: "/placeholder.svg?height=600&width=1200",
    alt: "Pabrik Maxellpack",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=600&width=1200",
    alt: "Produk Custom",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=600&width=1200",
    alt: "Solusi Kemasan",
  },
]

export function Carousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1))
  const next = () => setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1))

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0">
            <Image src={slide.src || "/placeholder.svg"} alt={slide.alt} fill className="object-cover" priority />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="p-1 rounded-full shadow bg-lavender/80 text-gray-800 hover:bg-lavender">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={next} className="p-1 rounded-full shadow bg-lavender/80 text-gray-800 hover:bg-lavender">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
                transition-all w-2 h-2 bg-white rounded-full
                ${current === i ? "p-1.5" : "bg-opacity-50"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
