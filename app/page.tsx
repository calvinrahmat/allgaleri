'use client'
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/carousel";
import { ProductCard } from "@/components/product-card";
import { SocialLinks } from "@/components/social-links";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import Image from "next/image";
import { HeroLogosMarquee } from "@/components/HeroLogosMarquee";
import { MobileCarousel } from "@/components/MobileCarousel";
import WorkflowSection from "@/workflow-section";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function Home() {
  type Product = {
    slug: string;
    name: string;
    images: string[];
    suitableFor: string;
    description: string;
    details: string;
  };

  const products: Product[] = [
    {
      slug: "kardus-standar",
      name: "Kardus Standar",
      images: ["/products/kardus-standar.png"],
      suitableFor: "Cocok untuk packaging produk custom, retail, dan pengiriman",
      description: "Kardus serbaguna dengan spesifikasi yang dapat disesuaikan untuk berbagai kebutuhan bisnis Anda.",
      details: "Kardus Standar kami menawarkan fleksibilitas dalam ukuran, desain, dan bahan, sehingga cocok untuk berbagai jenis produk. Solusi ideal untuk packaging custom, retail, dan pengiriman, dengan kualitas material yang terjamin untuk menjaga keamanan produk Anda."
    },
    {
      slug: "kardus-die-cut",
      name: "Kardus Die Cut",
      images: ["/products/kardus-die-cut.png"],
      suitableFor: "Cocok untuk packaging makanan takeaway",
      description: "Kardus dengan desain die cut yang presisi, cocok untuk kemasan makanan dan produk takeaway.",
      details: "Kardus Die Cut dirancang khusus untuk kebutuhan bisnis kuliner, memberikan tampilan menarik sekaligus menjaga higienitas makanan. Mudah dirakit, kuat, dan dapat dicetak dengan branding usaha Anda untuk meningkatkan daya tarik produk."
    },
    {
      slug: "kardus-lembaran",
      name: "Kardus Lembaran",
      images: ["/products/kardus-lembaran.png"],
      suitableFor: "Cocok untuk kemasan premium dan ramah lingkungan",
      description: "Lembaran kardus berkualitas tinggi untuk solusi kemasan premium dan ramah lingkungan.",
      details: "Kardus Lembaran kami terbuat dari bahan yang kokoh dan eco-friendly, sangat cocok untuk packaging premium, toko retail, maupun event. Dapat dicustom sesuai kebutuhan, memberikan kesan eksklusif dan mendukung citra ramah lingkungan brand Anda."
    },
    {
      slug: "kardus-custom",
      name: "Kardus Custom",
      images: ["/products/kardus-custom.png"],
      suitableFor: "Cocok untuk ekspedisi dan e-commerce",
      description: "Kardus custom yang dirancang khusus untuk kebutuhan ekspedisi dan e-commerce.",
      details: "Kardus Custom kami memberikan perlindungan maksimal untuk barang kiriman Anda. Tersedia dalam berbagai ukuran dan ketebalan, sangat cocok untuk pengiriman ekspedisi dan bisnis online. Dapat dicetak dengan logo atau desain brand Anda untuk meningkatkan profesionalisme pengiriman."
    }
  ];

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

      {/* Tentang Kami - Hero Section */}
        <section className="bg-lime py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6 text-gray-800">
              Tentang Maxellpack
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Maxellpack adalah perusahaan yang berfokus pada pembuatan kemasan custom berkualitas tinggi untuk berbagai kebutuhan bisnis. Dengan pengalaman bertahun-tahun, kami telah menjadi mitra terpercaya bagi banyak brand ternama di Indonesia.
            </p>
            <Link href="/hubungi-kami">
              <Button className="bg-indigo hover:bg-indigo/90 text-white">
                Hubungi Kami
              </Button>
            </Link>
          </div>
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/cP-3ZILDYAk?si=5bGAjXTKxnsz2Wm_"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Section 2: Produk Kami */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Produk Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                title={product.name}
                description={product.description}
                imageSrc={product.images[0]}
              />
            ))}
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

      

      {/* Mengapa Maxellpack */}
      <section className="py-16 px-4 bg-lime">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Mengapa Memilih Maxellpack?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white shadow-md border-0">
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">Custom Sesuai Kebutuhan</h3>
                </div>
                <p className="text-gray-600">
                  Ukuran, Bentuk, Desain dan Bahan bisa disesuaikan 100% dengan karakter produk dan brand kamu.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md border-0">
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">Kuat dan Aman</h3>
                </div>
                <p className="text-gray-600">
                  Bahan Berkualitas tinggi yang tahan banting, cocok untuk ekspedisi dan pengiriman antar kota bahkan luar pulau
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md border-0">
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">Tampil Lebih Profesional</h3>
                </div>
                <p className="text-gray-600">
                  Bikin pelanggan langsung percaya saat terima paket. 
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md border-0">
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">Minimum order Rendah</h3>
                </div>
                <p className="text-gray-600">
                  Mulai dari ratusan PCS saja sudah bisa produksi custom kardusmu. Cocok untuk UMKM, Dropshipper dan brand yang baru memulai bisnis
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md border-0">
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">Harga Terjangkau, Kualitas Maksimal</h3>
                </div>
                <p className="text-gray-600">
                  Kami bantu efisiensi bisnis kamu tanpa harus keliatan 'Murahan'. Hemat tanpa kompromi kualitas.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md border-0">
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">Cetak Logo dan Desain Ekslusif</h3>
                </div>
                <p className="text-gray-600">
                  Bisa request cetak nama brand/logo supaya produk kamu terlihat lebih premium dan mudah diingat.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md border-0">
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">Respon Cepat dan Gratis Konsultasi</h3>
                </div>
                <p className="text-gray-600">
                  Tim kami siap bantu hitung kebutuhan, pilih bahan, dan rekomendasi ukuran terbaik. Gratis!
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md border-0">
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">Sudah dipercaya ratusan Brand Lokal</h3>
                </div>
                <p className="text-gray-600">
                  Dari UMKM sampai Brand Besar sudah pakai Maxellpack untuk memperkuat citra produk mereka melalui kemasan yang berkualitas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Keunggulan Kami */}
      <section className="py-16 px-4 bg-lavender">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Keunggulan Kami
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex h-[180px] items-center">
              <CheckCircle className="h-8 w-8 text-indigo mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Desain Custom</h3>
                <p className="text-gray-600">Tim desain kami akan membantu Anda menciptakan kemasan yang sesuai dengan brand dan kebutuhan produk Anda.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex h-[180px] items-center">
              <CheckCircle className="h-8 w-8 text-indigo mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Bahan Berkualitas</h3>
                <p className="text-gray-600">Kami hanya menggunakan bahan berkualitas tinggi untuk memastikan kemasan Anda tahan lama dan aman.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex h-[180px] items-center">
              <CheckCircle className="h-8 w-8 text-indigo mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Harga Kompetitif</h3>
                <p className="text-gray-600">Kami menawarkan harga yang kompetitif tanpa mengorbankan kualitas produk dan layanan.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex h-[180px] items-center">
              <CheckCircle className="h-8 w-8 text-indigo mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Ramah Lingkungan</h3>
                <p className="text-gray-600">Kami berkomitmen untuk menggunakan bahan dan proses produksi yang ramah lingkungan.</p>
              </div>
            </div>
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
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">PABRIK PRODUKSI</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.23644422461!2d106.53754468161617!3d-6.232530144914096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fd0027042631%3A0x486838918ab07de8!2sPT.%20Maxell%20Sukses%20Gemilang!5e0!3m2!1sen!2sid!4v1749800026893!5m2!1sen!2sid"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Pabrik Maxellpack"
              ></iframe>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">KANTOR PUSAT</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.027745358406!2d106.7251174754024!3d-6.126968660076136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a02ab937a1c13%3A0x3d3fdd8936e09d01!2sMaxellpack!5e0!3m2!1sen!2sid!4v1749799817720!5m2!1sen!2sid"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Kantor Maxellpack"
              ></iframe>
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

    </main>
  );
}
