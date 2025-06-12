import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/carousel";
import { ClientLogos } from "@/components/client-logos";
import { ProductCard } from "@/components/product-card";
import { OrderProcess } from "@/components/order-process";
import { SocialLinks } from "@/components/social-links";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import Image from "next/image";
import { HeroLogosMarquee } from "@/components/HeroLogosMarquee";
import { MobileCarousel } from "@/components/MobileCarousel";
import WorkflowSection from "@/workflow-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-lavender">
      {/* Section 1: Welcome Banner */}
      <section className="relative w-full min-h-[75vh]">
        {/* Mobile: auto-rotating carousel */}
        <div className="block md:hidden w-full h-full absolute inset-0 z-0 ">
          <MobileCarousel />
        </div>
        {/* Desktop: carousel */}
        <div className="hidden md:block inset-0 z-0 ">
          <Carousel />
        </div>
        {/* White overlay */}
        <div className="absolute inset-0 md:pl-14 flex flex-col justify-start md:pt-40 p-4 text-[#5453E3] z-20 items-center text-center md:items-start md:text-left max-w-xl md:max-w-2xl lg:max-w-3xl">
          <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold mb-4">
            SOLUSI KEMASAN BERKUALITAS UNTUK BISNIS ANDA
          </h1>
          <p className="md:text-xl lg:text-2xl mb-8">
            Maxellpack menyediakan kemasan custom berkualitas tinggi untuk
            berbagai kebutuhan bisnis Anda
          </p>
          <Link href="/hubungi-kami">
            <Button className="bg-[#EFF187] text-[#5453E3] font-bold px-8 py-6 rounded-lg hover:bg-[#EFF187]">
              CONSULT NOW <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
      {/* Client Carousel Section */}
      <section className="bg-white flex items-center">
        <HeroLogosMarquee />
      </section>

      {/* Section 2: Produk Kami */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Produk Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              title="Kardus Custom"
              description="Kardus custom dengan berbagai ukuran dan desain sesuai kebutuhan"
              imageSrc="/box_4.png"
            />
            <ProductCard
              title="Kemasan Makanan"
              description="Kemasan makanan food grade yang aman dan menarik"
              imageSrc="/box_10.png"
            />
            <ProductCard
              title="Kemasan Retail"
              description="Kemasan retail yang eye-catching untuk meningkatkan nilai produk"
              imageSrc="/box_3.png"
            />
          </div>
        </div>
      </section>

      {/* Section 2.5: Permasalahan Customer (Visual) */}
      <section className="relative py-16 px-4 bg-white flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          PERMASALAHAN CUSTOMER
        </h2>
        <div className="relative w-full max-w-3xl h-[400px] flex items-center justify-center">
          {/* SVG Container for Arrows - Hidden on Mobile */}
          <svg className="absolute inset-0 w-full h-full hidden md:block" style={{ zIndex: 5 }}>
            {/* Dashed lines with circles at the end */}
            {/* Top Left */}
            <line x1="120" y1="120" x2="220" y2="143" stroke="#5453E3" strokeWidth="2" strokeDasharray="8,6" className="animated-dash" />
            <circle cx="225" cy="144" r="8" fill="#5453E3" className="animated-circle" />
            {/* Middle Left */}
            <line x1="120" y1="200" x2="220" y2="200" stroke="#5453E3" strokeWidth="2" strokeDasharray="8,6" className="animated-dash" />
            <circle cx="220" cy="200" r="8" fill="#5453E3" className="animated-circle" />
            {/* Bottom Left */}
            <line x1="120" y1="300" x2="200" y2="260" stroke="#5453E3" strokeWidth="2" strokeDasharray="8,6" className="animated-dash" />
            <circle cx="200" cy="260" r="8" fill="#5453E3" className="animated-circle" />
            {/* Top Right */}
            <line x1="620" y1="120" x2="514" y2="152" stroke="#5453E3" strokeWidth="2" strokeDasharray="8,6" className="animated-dash" />
            <circle cx="510" cy="152" r="8" fill="#5453E3" className="animated-circle" />
            {/* Middle Right */}
            <line x1="620" y1="200" x2="520" y2="200" stroke="#5453E3" strokeWidth="2" strokeDasharray="8,6" className="animated-dash" />
            <circle cx="510" cy="200" r="8" fill="#5453E3" className="animated-circle" />
            {/* Bottom Right */}
            <line x1="610" y1="290" x2="520" y2="260" stroke="#5453E3" strokeWidth="2" strokeDasharray="8,6" className="animated-dash" />
            <circle cx="510" cy="257" r="8" fill="#5453E3" className="animated-circle" />
          </svg>

          {/* Central Illustration */}
          <img
            src="/woman.png"
            alt="Customer Problem"
            className="absolute left-1/2 top-1/3 w-[120%] h-[120%] object-contain -translate-x-1/2 -translate-y-1/2 z-10"
          />

          {/* Problem Points - Desktop Only */}
          <div className="hidden md:block">
            {/* Top Left */}
            <div className="absolute left-[-25px] top-[90px] w-40 text-center">
              <div className="font-medium">Kualitas Kardus Kurang Bagus</div>
            </div>
            {/* Middle Left */}
            <div className="absolute left-[-40px] top-1/2 w-40 text-center -translate-y-1/2">
              <div className="font-medium">Ukuran Tidak Sesuai Kebutuhan</div>
            </div>
            {/* Bottom Left */}
            <div className="absolute left-[-40px] bottom-16 w-40 text-center">
              <div className="font-medium">Desain dan Cetakan Kurang Menarik</div>
            </div>
            {/* Top Right */}
            <div className="absolute right-[-2px] top-[90px] w-40 text-center">
              <div className="font-medium">Sulit Dirakit atau Dilipat</div>
            </div>
            {/* Middle Right */}
            <div className="absolute right-[1px] top-1/2 w-40 text-center -translate-y-1/2">
              <div className="font-medium">Harga Tidak Kompetitif</div>
            </div>
            {/* Bottom Right */}
            <div className="absolute right-[-50px] bottom-[80px] w-56 text-center">
              <div className="font-medium">Pengiriman Lambat atau Kardus Rusak saat Dikirim</div>
            </div>
          </div>
        </div>

        {/* Mobile Problem List */}
        <div className="md:hidden w-full max-w-md  space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full bg-[#5453E3]"></div>
            <div className="font-medium">Kualitas Kardus Kurang Bagus</div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full bg-[#5453E3]"></div>
            <div className="font-medium">Ukuran Tidak Sesuai Kebutuhan</div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full bg-[#5453E3]"></div>
            <div className="font-medium">Desain dan Cetakan Kurang Menarik</div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full bg-[#5453E3]"></div>
            <div className="font-medium">Sulit Dirakit atau Dilipat</div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full bg-[#5453E3]"></div>
            <div className="font-medium">Harga Tidak Kompetitif</div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full bg-[#5453E3]"></div>
            <div className="font-medium">Pengiriman Lambat atau Kardus Rusak saat Dikirim</div>
          </div>
        </div>

      
      </section>

      {/* Section 4: Portofolio Proyek */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Portofolio
          </h2>
          <PortfolioGallery />
          
        </div>
      </section>

      {/* Section 5: Alur Pemesanan */}
      <section className="py-16 px-4 bg-lime">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Alur Pemesanan
          </h2>
          <WorkflowSection />
        </div>
      </section>

      {/* Section 6: Lokasi Kami */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Lokasi Kami
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.035313943259!2d106.72282017903063!3d-6.125950244213389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d54d05fd783%3A0xe9d6031cf3d04ca!2sPT%20MAXELL%20PETROASIA%20INDONESIA!5e0!3m2!1sen!2sid!4v1748506343752!5m2!1sen!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Lokasi Maxellpack"
            ></iframe>
          </div>
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start mb-4">
              <MapPin className="h-5 w-5 text-indigo mr-2 mt-1" />
              <p className="text-gray-700">
                Jl. Kencana Raya No.C1 No.5 Jakarta
              </p>
            </div>
            <div className="flex items-start mb-4">
              <Phone className="h-5 w-5 text-indigo mr-2 mt-1" />
              <p className="text-gray-700">+62 812 3456 7890</p>
            </div>
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-indigo mr-2 mt-1" />
              <p className="text-gray-700">info@maxellpack.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Social Media & E-commerce */}
      <section className="py-16 px-4 bg-lavender">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Temukan Kami
          </h2>
          <SocialLinks />
        </div>
      </section>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link href="https://wa.me/6281234567890?text=Halo%20Maxellpack,%20saya%20ingin%20konsultasi%20tentang%20kemasan">
          <Button className="bg-white hover:bg-white/90 h-14 w-14 md:h-20 md:w-20 rounded-full flex items-center justify-center shadow-lg p-0">
            <Image
              src="/whatsapp.svg"
              alt="WhatsApp"
              width={32}
              height={32}
              className="md:w-12 md:h-12"
            />
          </Button>
        </Link>
      </div>

      
    </main>
  );
}
