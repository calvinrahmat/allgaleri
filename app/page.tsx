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

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Section 1: Welcome Banner */}
      <section className="relative w-full min-h-screen">
        {/* Mobile: static image */}
        <div className="block md:hidden w-full h-full absolute inset-0 z-0">
          <Image
            src="/banner_1.png"
            alt="Banner 1 - Maxellpack"
            fill
            className="object-contain"
            priority
          />
        </div>
        {/* Desktop: carousel */}
        <div className="hidden md:block w-full h-full absolute inset-0 z-0">
          <Carousel />
        </div>
        {/* White overlay */}
        <div className="absolute inset-0 flex flex-col justify-center p-4  text-white z-20 items-center text-center md:items-start md:text-left max-w-xl md:max-w-2xl lg:max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Solusi Kemasan Berkualitas untuk Bisnis Anda
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Maxellpack menyediakan kemasan custom berkualitas tinggi untuk
            berbagai kebutuhan bisnis Anda
          </p>
          <Link href="/hubungi-kami">
            <Button className="bg-indigo hover:bg-indigo/90 text-gray-800 font-medium px-6 py-3 rounded-lg">
              Hubungi Kami <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* Section 2.5: Permasalahan Customer */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="flex-shrink-0 w-full lg:w-1/3 flex justify-center mb-8 lg:mb-0">
            <Image
              src="/woman.png"
              alt="Customer thinking"
              width={300}
              height={400}
              className="object-contain"
              priority
            />
          </div>
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-bold text-center lg:text-left mb-12 text-gray-800">
              Permasalahan yang Sering Dihadapi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-cream p-6 rounded-lg shadow-md">
                <div className="text-indigo mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Kemasan Tidak Tahan Lama
                </h3>
                <p className="text-gray-600">
                  Kemasan yang mudah rusak dan tidak tahan terhadap kondisi
                  pengiriman yang beragam.
                </p>
              </div>
              <div className="bg-cream p-6 rounded-lg shadow-md">
                <div className="text-indigo mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Waktu Produksi Lama
                </h3>
                <p className="text-gray-600">
                  Proses produksi yang memakan waktu lama dan tidak sesuai
                  dengan timeline bisnis.
                </p>
              </div>
              <div className="bg-cream p-6 rounded-lg shadow-md">
                <div className="text-indigo mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Kualitas Tidak Konsisten
                </h3>
                <p className="text-gray-600">
                  Kualitas kemasan yang tidak konsisten antar batch produksi.
                </p>
              </div>
            </div>
            <div className="mt-12 text-center lg:text-left">
              <Link href="/hubungi-kami">
                <Button className="bg-indigo hover:bg-indigo/90 text-gray-800 font-medium px-6 py-3 rounded-lg">
                  Konsultasi Masalah Anda{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Portofolio Proyek */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Portofolio Proyek
          </h2>
          <PortfolioGallery />
          <div className="text-center mt-10">
            <Link href="/portofolio">
              <Button
                variant="outline"
                className="border-indigo text-gray-700 hover:bg-lavender"
              >
                Lihat Semua Portofolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Alur Pemesanan */}
      <section className="py-16 px-4 bg-lime">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Alur Pemesanan
          </h2>
          <OrderProcess />
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
          <Button className="bg-green-500 hover:bg-green-600 h-14 w-14 rounded-full flex items-center justify-center shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </Button>
        </Link>
      </div>
    </main>
  );
}
