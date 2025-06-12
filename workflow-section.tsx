export default function WorkflowSection() {
  return (
    <section className="py-8 px-4 bg-lime">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-4">
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:flex justify-between items-start relative">
            {/* Connecting Line */}
            <div className="absolute" style={{ top: '3.5rem', left: '6rem', right: '6rem', height: '0.5rem' }}>
              <div className="w-full border-t-2 border-dotted border-gray-400 z-0"></div>
            </div>
            {/* Step 1 */}
            <div className="flex flex-col items-center flex-1 relative z-10 max-w-48">
              <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200 relative" style={{ minHeight: '7rem' }}>
                <span className="absolute -top-2 -left-2 w-8 h-8 bg-[#5453E3] text-white rounded-full flex items-center justify-center font-bold text-lg border-2 border-[#5453E3] shadow">1</span>
                <img src="/ICON_HUBUNGI_ADMIN.png" alt="Hubungi Admin" className="w-30 h-30" />
              </div>
              <div className="w-0.5 h-16 border-l-2 border-dotted border-gray-400 my-2"></div>
              <h3 className="text-sm font-medium text-gray-800 leading-tight text-center mt-2">Hubungi admin sales kami melalui WhatsApp</h3>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center flex-1 relative z-10 max-w-48">
              <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200 relative" style={{ minHeight: '7rem' }}>
                <span className="absolute -top-2 -left-2 w-8 h-8 bg-[#5453E3] text-white rounded-full flex items-center justify-center font-bold text-lg border-2 border-[#5453E3] shadow">2</span>
                <img src="/ICON_CONSULT.png" alt="Konsultasi" className="w-30 h-30" />
              </div>
              <div className="w-0.5 h-16 border-l-2 border-dotted border-gray-400 my-2"></div>
              <h3 className="text-sm font-medium text-gray-800 leading-tight text-center mt-2">Konsultasikan kebutuhan packaging Anda</h3>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center flex-1 relative z-10 max-w-48">
              <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200 relative" style={{ minHeight: '7rem' }}>
                <span className="absolute -top-2 -left-2 w-8 h-8 bg-[#5453E3] text-white rounded-full flex items-center justify-center font-bold text-lg border-2 border-[#5453E3] shadow">3</span>
                <img src="/ICON_QUOTATION.png" alt="Quotation" className="w-30 h-30" />
              </div>
              <div className="w-0.5 h-16 border-l-2 border-dotted border-gray-400 my-2"></div>
              <h3 className="text-sm font-medium text-gray-800 leading-tight text-center mt-2">Kami akan menghitung dan menginformasikan penawaran harga</h3>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center flex-1 relative z-10 max-w-48">
              <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200 relative" style={{ minHeight: '7rem' }}>
                <span className="absolute -top-2 -left-2 w-8 h-8 bg-[#5453E3] text-white rounded-full flex items-center justify-center font-bold text-lg border-2 border-[#5453E3] shadow">4</span>
                <img src="/ICON_SAMPLE.png" alt="Sample" className="w-30 h-30" />
              </div>
              <div className="w-0.5 h-16 border-l-2 border-dotted border-gray-400 my-2"></div>
              <h3 className="text-sm font-medium text-gray-800 leading-tight text-center mt-2">Pembuatan sampel packaging setelah penawaran harga disetujui</h3>
            </div>
            {/* Step 5 */}
            <div className="flex flex-col items-center flex-1 relative z-10 max-w-48">
              <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200 relative" style={{ minHeight: '7rem' }}>
                <span className="absolute -top-2 -left-2 w-8 h-8 bg-[#5453E3] text-white rounded-full flex items-center justify-center font-bold text-lg border-2 border-[#5453E3] shadow">5</span>
                <img src="/ICON_PRODUKSI.png" alt="Produksi" className="w-30 h-30" />
              </div>
              <div className="w-0.5 h-16 border-l-2 border-dotted border-gray-400 my-2"></div>
              <h3 className="text-sm font-medium text-gray-800 leading-tight text-center mt-2">Setelah sample akhir disetujui, masuk ke tahap produksi massal</h3>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {/* Step 1 */}
            <div className="flex items-start space-x-4 relative mt-8">
              <div className="flex-shrink-0 relative">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200 relative">
                  <span className="absolute -top-2 -left-2 w-6 h-6 bg-[#5453E3] text-white rounded-full flex items-center justify-center font-bold text-base">1</span>
                  <img src="/ICON_HUBUNGI_ADMIN.png" alt="Hubungi Admin" className="w-30 h-30" />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-0.5 h-8 border-l-2 border-dotted border-gray-400"></div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-base font-medium text-gray-800 leading-tight">Hubungi admin sales kami melalui WhatsApp</h3>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex items-start space-x-4 relative">
              <div className="flex-shrink-0 relative">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200 relative">
                  <span className="absolute -top-2 -left-2 w-6 h-6 bg-[#5453E3] text-white rounded-full flex items-center justify-center font-bold text-base">2</span>
                  <img src="/ICON_CONSULT.png" alt="Konsultasi" className="w-30 h-30" />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-0.5 h-8 border-l-2 border-dotted border-gray-400"></div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-base font-medium text-gray-800 leading-tight">Konsultasikan kebutuhan packaging Anda</h3>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex items-start space-x-4 relative">
              <div className="flex-shrink-0 relative">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200 relative">
                  <span className="absolute -top-2 -left-2 w-6 h-6 bg-[#5453E3] text-white rounded-full flex items-center justify-center font-bold text-base">3</span>
                  <img src="/ICON_QUOTATION.png" alt="Quotation" className="w-30 h-30" />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-0.5 h-8 border-l-2 border-dotted border-gray-400"></div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-base font-medium text-gray-800 leading-tight">Kami akan menghitung dan menginformasikan penawaran harga</h3>
              </div>
            </div>
            {/* Step 4 */}
            <div className="flex items-start space-x-4 relative">
              <div className="flex-shrink-0 relative">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200 relative">
                  <span className="absolute -top-2 -left-2 w-6 h-6 bg-[#5453E3] text-white rounded-full flex items-center justify-center font-bold text-base">4</span>
                  <img src="/ICON_SAMPLE.png" alt="Sample" className="w-30 h-30" />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-0.5 h-8 border-l-2 border-dotted border-gray-400"></div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-base font-medium text-gray-800 leading-tight">Pembuatan sampel packaging setelah penawaran harga disetujui</h3>
              </div>
            </div>
            {/* Step 5 */}
            <div className="flex items-start space-x-4 relative">
              <div className="flex-shrink-0 relative">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200 relative">
                  <span className="absolute -top-2 -left-2 w-6 h-6 bg-[#5453E3] text-white rounded-full flex items-center justify-center font-bold text-base">5</span>
                  <img src="/ICON_PRODUKSI.png" alt="Produksi" className="w-30 h-30" />
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-base font-medium text-gray-800 leading-tight">Setelah sample akhir disetujui, masuk ke tahap produksi massal</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
