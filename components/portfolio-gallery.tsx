import Image from "next/image"

const portfolioItems = [
  {
    id: 1,
    title: "Kemasan Makanan Premium",
    client: "Food Company",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "Kardus Custom E-commerce",
    client: "Online Shop",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Kemasan Kosmetik",
    client: "Beauty Brand",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    title: "Kemasan Gift Box",
    client: "Gift Shop",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function PortfolioGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {portfolioItems.map((item) => (
        <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-md">
          <div className="relative h-64">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm text-gray-200">Client: {item.client}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
