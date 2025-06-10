import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    id: 1,
    title: "Hubungi Admin Sales Kami",
    description: "Diskusikan kebutuhan kemasan Anda dengan tim kami",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-indigo"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Konsultasikan Kebutuhan Anda",
    description: "Tim desain kami akan membuat desain sesuai kebutuhan Anda",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-purple-500"
      >
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Quotation Proses (Perhitungan untuk Penawaran Harga)",
    description: "Anda menyetujui desain dan spesifikasi kemasan",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-green-500"
      >
        <polyline points="9 11 12 14 22 4"></polyline>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Pembuatan Sampel Setelah Penawaran Harga Disetujui",
    description: "Kami memproduksi kemasan sesuai dengan spesifikasi yang disetujui",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-500"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Setelah Sampel Disetujui, Melakukan Pembayaran DP",
    description: "Kami mengirimkan pesanan Anda tepat waktu",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-orange-500"
      >
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
      </svg>
    ),
  },
  {
    id: 6,
    title: "Produksi Massal Berlangsung Selama 10-15 Hari Kerja",
    description: "Proses produksi massal berlangsung selama 10-15 hari kerja",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-red-500"
      >
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
  },
]

export function OrderProcess() {
  return (
    <div className="relative">
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
      <div className="space-y-12 relative">
        {steps.map((step, index) => (
          <div key={step.id} className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
            <div className="md:w-1/2"></div>
            <div className="flex items-center justify-center">
              <div className="bg-white rounded-full p-3 shadow-md z-10">{step.icon}</div>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
