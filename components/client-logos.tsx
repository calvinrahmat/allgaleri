import Image from "next/image"

const clients = [
  { id: 1, name: "Client 1", logo: "/placeholder.svg?height=100&width=200" },
  { id: 2, name: "Client 2", logo: "/placeholder.svg?height=100&width=200" },
  { id: 3, name: "Client 3", logo: "/placeholder.svg?height=100&width=200" },
  { id: 4, name: "Client 4", logo: "/placeholder.svg?height=100&width=200" },
  { id: 5, name: "Client 5", logo: "/placeholder.svg?height=100&width=200" },
  { id: 6, name: "Client 6", logo: "/placeholder.svg?height=100&width=200" },
  { id: 7, name: "Client 7", logo: "/placeholder.svg?height=100&width=200" },
  { id: 8, name: "Client 8", logo: "/placeholder.svg?height=100&width=200" },
]

export function ClientLogos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {clients.map((client) => (
        <div key={client.id} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
          <Image
            src={client.logo || "/placeholder.svg"}
            alt={client.name}
            width={150}
            height={75}
            className="object-contain h-16"
          />
        </div>
      ))}
    </div>
  )
}
