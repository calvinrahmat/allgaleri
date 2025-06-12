import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    id: 1,
    description: "Hubungi admin sales kami melalui WhatsApp atau email",
    icon: (
      <img src="/alur-1.svg" alt="Admin" className="w-12 h-12 mx-auto" />
    ),
  },
  {
    id: 2,
    description: "Konsultasikan kebutuhan packaging Anda",
    icon: (
      <img src="/alur-2.svg" alt="Konsultasi" className="w-12 h-12 mx-auto" />
    ),
  },
  {
    id: 3,
    description: "Kami akan menghitung dan menginformasikan penawaran harga",
    icon: (
      <img src="/alur-3.svg" alt="Penawaran" className="w-12 h-12 mx-auto" />
    ),
  },
  {
    id: 4,
    description: "Pembuatan sampel packaging setelah penawaran harga disetujui",
    icon: (
      <img src="/alur-4.svg" alt="Sampel" className="w-12 h-12 mx-auto" />
    ),
  },
  {
    id: 5,
    description: "Setelah sampel akhir disetujui, masuk ke tahap produksi massal",
    icon: (
      <img src="/alur-5.svg" alt="Produksi" className="w-12 h-12 mx-auto" />
    ),
  },
];

export function OrderProcess() {
  return (
    <div className="w-full">
      {/* Desktop: Horizontal Stepper */}
      <div className="hidden md:flex w-full justify-between items-start relative">
        {steps.map((step, idx) => (
          <div key={step.id} className="flex-1 flex flex-col items-center relative">
            {/* Icon in circle */}
            <div className="bg-white rounded-full p-4 shadow-md flex items-center justify-center z-10 border border-gray-200">
              {step.icon}
            </div>
            {/* Dashed line to next step */}
            {idx < steps.length - 1 && (
              <div className="absolute top-1/2 right-0 w-full h-0.5 md:w-[calc(100%+32px)] md:-right-[50%] z-0 flex items-center" style={{ pointerEvents: 'none' }}>
                <div className="border-t-2 border-dashed border-gray-400 w-full"></div>
              </div>
            )}
            {/* Description */}
            <div className="mt-6 text-center text-sm md:text-base max-w-[180px] text-gray-700">
              {step.description}
            </div>
          </div>
        ))}
      </div>
      {/* Mobile: Vertical List */}
      <div className="md:hidden flex flex-col gap-8">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center gap-4">
            <div className="bg-white rounded-full p-3 shadow-md border border-gray-200">
              {step.icon}
            </div>
            <div className="text-gray-700 text-sm">{step.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
