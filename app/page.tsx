'use client'
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, MessageSquare, Package, Shield, Award, DollarSign, Palette, Zap, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { SocialLinks } from "@/components/social-links";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import Image from "next/image";
import { HeroLogosMarquee } from "@/components/HeroLogosMarquee";
import WorkflowSection from "@/workflow-section";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Tabs, TabsContent } from "@/components/ui/tabs";

// Type declarations for global tracking functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
}

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
      images: ["/products/produk-3.png"],
      suitableFor: "Cocok untuk packaging produk custom, retail, dan pengiriman",
      description: "Kardus serbaguna dengan spesifikasi yang dapat disesuaikan untuk berbagai kebutuhan bisnis Anda.",
      details: "Kardus Standar kami menawarkan fleksibilitas dalam ukuran, desain, dan bahan, sehingga cocok untuk berbagai jenis produk. Solusi ideal untuk packaging custom, retail, dan pengiriman, dengan kualitas material yang terjamin untuk menjaga keamanan produk Anda."
    },
    {
      slug: "kardus-die-cut",
      name: "Kardus Die Cut",
      images: ["/products/produk-2.png"],
      suitableFor: "Cocok untuk packaging makanan takeaway",
      description: "Kardus dengan desain die cut yang presisi, cocok untuk kemasan makanan dan produk takeaway.",
      details: "Kardus Die Cut dirancang khusus untuk kebutuhan bisnis kuliner, memberikan tampilan menarik sekaligus menjaga higienitas makanan. Mudah dirakit, kuat, dan dapat dicetak dengan branding usaha Anda untuk meningkatkan daya tarik produk."
    },
    {
      slug: "kardus-lembaran",
      name: "Kardus Lembaran",
      images: ["/products/produk-1.png"],
      suitableFor: "Cocok untuk kemasan premium dan ramah lingkungan",
      description: "Lembaran kardus berkualitas tinggi untuk solusi kemasan premium dan ramah lingkungan.",
      details: "Kardus Lembaran kami terbuat dari bahan yang kokoh dan eco-friendly, sangat cocok untuk packaging premium, toko retail, maupun event. Dapat dicustom sesuai kebutuhan, memberikan kesan eksklusif dan mendukung citra ramah lingkungan brand Anda."
    },
    {
      slug: "kardus-custom",
      name: "Kardus Custom",
      images: ["/products/portofolio-1.png"],
      suitableFor: "Cocok untuk ekspedisi dan e-commerce",
      description: "Kardus custom yang dirancang khusus untuk kebutuhan ekspedisi dan e-commerce.",
      details: "Kardus Custom kami memberikan perlindungan maksimal untuk barang kiriman Anda. Tersedia dalam berbagai ukuran dan ketebalan, sangat cocok untuk pengiriman ekspedisi dan bisnis online. Dapat dicetak dengan logo atau desain brand Anda untuk meningkatkan profesionalisme pengiriman."
    }
  ];

  // Animation variants for staggered children
  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <main className="min-h-screen bg-lavender">
      {/* Section 1: Welcome Banner */}
      <section id="beranda" className="relative w-full min-h-[75vh] bg-lavender">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text content on the left */}
            <div className="flex flex-col justify-center text-center md:text-left">
              <motion.h1
                className="text-2xl md:text-5xl lg:text-7xl font-bold mb-4 text-gray-800"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                SOLUSI KEMASAN BERKUALITAS UNTUK BISNIS ANDA
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-700"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                Allgaleri menyediakan kemasan custom berkualitas tinggi untuk
                berbagai kebutuhan bisnis Anda
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                <a href="#hubungi-kami">
                  <Button className="bg-[#A1BC98] text-white font-bold px-8 py-6 rounded-lg hover:bg-[#778873]">
                    CONSULT NOW <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </a>
              </motion.div>
            </div>
            {/* Image on the right */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/about.png"
                alt="Allgaleri - Solusi Kemasan Berkualitas"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {/* Client Carousel Section */}
      <section className="bg-white flex items-center">
        <HeroLogosMarquee />
      </section>

      {/* Section 2: Produk Kami */}
      <section id="produk" className="py-16 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Produk Kami
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {products.map((product) => (
              <motion.div key={product.slug} variants={fadeInUp}>
                <ProductCard
                  title={product.name}
                  description={product.description}
                  imageSrc={product.images[0]}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     

      

      {/* Mengapa Allgaleri */}
      <section className="py-20 px-4 bg-lime">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
              Mengapa Memilih Allgaleri?
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Solusi kemasan terpercaya yang telah membantu ratusan brand meningkatkan citra produk mereka
            </p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                icon: Package,
                title: "Custom Sesuai Kebutuhan",
                description: "Ukuran, Bentuk, Desain dan Bahan bisa disesuaikan 100% dengan karakter produk dan brand kamu.",
                color: "bg-indigo-50 text-indigo-600"
              },
              {
                icon: Shield,
                title: "Kuat dan Aman",
                description: "Bahan Berkualitas tinggi yang tahan banting, cocok untuk ekspedisi dan pengiriman antar kota bahkan luar pulau",
                color: "bg-green-50 text-green-600"
              },
              {
                icon: Award,
                title: "Tampil Lebih Profesional",
                description: "Bikin pelanggan langsung percaya saat terima paket.",
                color: "bg-yellow-50 text-yellow-600"
              },
              {
                icon: TrendingUp,
                title: "Minimum order Rendah",
                description: "Mulai dari ratusan PCS saja sudah bisa produksi custom kardusmu. Cocok untuk UMKM, Dropshipper dan brand yang baru memulai bisnis",
                color: "bg-blue-50 text-blue-600"
              },
              {
                icon: DollarSign,
                title: "Harga Terjangkau, Kualitas Maksimal",
                description: "Kami bantu efisiensi bisnis kamu tanpa harus keliatan 'Murahan'. Hemat tanpa kompromi kualitas.",
                color: "bg-purple-50 text-purple-600"
              },
              {
                icon: Palette,
                title: "Cetak Logo dan Desain Ekslusif",
                description: "Bisa request cetak nama brand/logo supaya produk kamu terlihat lebih premium dan mudah diingat.",
                color: "bg-pink-50 text-pink-600"
              },
              {
                icon: Zap,
                title: "Respon Cepat dan Gratis Konsultasi",
                description: "Tim kami siap bantu hitung kebutuhan, pilih bahan, dan rekomendasi ukuran terbaik. Gratis!",
                color: "bg-orange-50 text-orange-600"
              },
              {
                icon: Users,
                title: "Sudah dipercaya ratusan Brand Lokal",
                description: "Dari UMKM sampai Brand Besar sudah pakai Allgaleri untuk memperkuat citra produk mereka melalui kemasan yang berkualitas.",
                color: "bg-teal-50 text-teal-600"
              },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div key={item.title} variants={fadeInUp}>
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border-l-4 border-indigo-500">
                    <div className="flex items-start gap-4">
                      <div className={`${item.color} p-3 rounded-lg flex-shrink-0`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Keunggulan Kami */}
      <section className="py-20 px-4 bg-lavender">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
              Keunggulan Kami
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Komitmen kami dalam memberikan yang terbaik untuk setiap kebutuhan kemasan Anda
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                number: "01",
                title: "Desain Custom",
                description: "Tim desain kami akan membantu Anda menciptakan kemasan yang sesuai dengan brand dan kebutuhan produk Anda.",
                gradient: "from-indigo-500 to-purple-600"
              },
              {
                number: "02",
                title: "Bahan Berkualitas",
                description: "Kami hanya menggunakan bahan berkualitas tinggi untuk memastikan kemasan Anda tahan lama dan aman.",
                gradient: "from-green-500 to-emerald-600"
              },
              {
                number: "03",
                title: "Harga Kompetitif",
                description: "Kami menawarkan harga yang kompetitif tanpa mengorbankan kualitas produk dan layanan.",
                gradient: "from-blue-500 to-cyan-600"
              },
              {
                number: "04",
                title: "Ramah Lingkungan",
                description: "Kami berkomitmen untuk menggunakan bahan dan proses produksi yang ramah lingkungan.",
                gradient: "from-teal-500 to-green-600"
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-10 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500`}></div>
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${item.gradient} text-white text-2xl font-bold mb-6 shadow-lg`}>
                      {item.number}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
      {/* <section className="py-16 px-4 bg-cream">
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
                title="Lokasi Pabrik Allgaleri"
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
                title="Lokasi Kantor Allgaleri"
              ></iframe>
            </div>
          </div>
          
        </div>
      </section> */}

      {/* Section 7: Social Media & E-commerce */}
      <section className="py-16 px-4 bg-lavender">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Temukan Kami
          </h2>
          <SocialLinks />
        </div>
      </section>

      {/* Section 8: Hubungi Kami */}
      <section id="hubungi-kami" className="py-20 px-4 bg-lavender border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800 tracking-tight">
            Hubungi Kami
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Kami siap membantu Anda dengan pertanyaan, permintaan penawaran, atau konsultasi tentang kebutuhan kemasan Anda.
          </p>
        </div>

        {/* Contact Tabs */}
        {/* <div className="py-16 px-4 bg-cream border-b border-gray-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 text-center">
              Hubungi Tim Kami
            </h2>
            <Tabs defaultValue="whatsapp">
              <TabsContent value="whatsapp">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="border-0 shadow-lg bg-white">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center mb-3">
                        <MessageSquare className="h-5 w-5 text-green-500 mr-2" />
                        <h3 className="font-semibold text-gray-800 text-lg">Konsultasi</h3>
                      </div>
                      <p className="text-gray-600 mb-6 text-sm flex-1">
                        Hubungi tim konsultasi kami untuk mendiskusikan kebutuhan kemasan Anda dan mendapatkan saran terbaik.
                      </p>
                      <a
                        href="https://wa.me/6281511408638?text=Halo%20Allgaleri,%20saya%20ingin%20konsultasi"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold text-base py-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="white"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          Chat via WhatsApp
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-lg bg-white">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center mb-3">
                        <MessageSquare className="h-5 w-5 text-blue-500 mr-2" />
                        <h3 className="font-semibold text-gray-800 text-lg">Order</h3>
                      </div>
                      <p className="text-gray-600 mb-6 text-sm flex-1">
                        Sudah siap untuk memesan? Hubungi tim order kami untuk memproses pesanan Anda dengan cepat.
                      </p>
                      <Button 
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-base py-2"
                        onClick={() => {
                          // Google Ads conversion tracking
                          if (typeof window !== 'undefined' && window.gtag) {
                            window.gtag('event', 'conversion', {
                              'send_to': 'AW-11310080769/6XAtCJeXmvAYEIHGiJEq',
                              'event_callback': function() {
                                window.open('https://wa.me/6281511408638?text=Halo%20Allgaleri,%20saya%20ingin%20memesan%20kardus', '_blank');
                              }
                            });
                          }

                          // Meta Ads (Facebook Pixel) tracking
                          if (typeof window !== 'undefined' && window.fbq) {
                            window.fbq('track', 'Lead', {
                              content_name: 'WhatsApp Order Button',
                              content_category: 'Contact',
                              value: 1,
                              currency: 'IDR'
                            });
                          }

                          // Fallback if tracking doesn't work
                          setTimeout(() => {
                            window.open('https://wa.me/6285171119019?text=Halo%20Allgaleri,%20saya%20ingin%20memesan%20kardus', '_blank');
                          }, 1000);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Order via WhatsApp
                      </Button>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-lg bg-white">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-purple-500 mr-2"
                        >
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                        <h3 className="font-semibold text-gray-800 text-lg">Linktree</h3>
                      </div>
                      <p className="text-gray-600 mb-6 text-sm flex-1">
                        Temukan semua link penting kami di satu tempat.
                      </p>
                      <a
                        href="https://linktr.ee/allgaleri"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold text-base py-2">
                          Kunjungi Linktree Kami
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div> */}

        {/* Contact Information
        <div className="py-16 px-4 bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 text-center">
              Informasi Kontak
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-md bg-gray-50">
                <CardContent className="p-6 flex items-start">
                  <Phone className="h-6 w-6 text-indigo-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 text-lg">Telepon</h3>
                    <p className="text-gray-600 text-base">0815-1140-8638</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section> */}

    </main>
  );
}
