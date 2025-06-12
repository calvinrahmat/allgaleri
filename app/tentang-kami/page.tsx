import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function TentangKami() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-lavender py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6 text-gray-800">
              Tentang Maxellpack
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Maxellpack adalah perusahaan yang berfokus pada pembuatan kemasan
              custom berkualitas tinggi untuk berbagai kebutuhan bisnis. Dengan
              pengalaman bertahun-tahun, kami telah menjadi mitra terpercaya
              bagi banyak brand ternama di Indonesia.
            </p>
            <Link href="/hubungi-kami">
              <Button className="bg-indigo hover:bg-indigo/90 text-white">
                Hubungi Kami
              </Button>
            </Link>
          </div>
          
        </div>
      </section>

      {/* Section 1: Video */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Cerita Kami
              </h2>
              <p className="text-gray-700 mb-4">
                Didirikan pada tahun 2010, Maxellpack telah berkembang menjadi
                salah satu produsen kemasan terkemuka di Indonesia. Kami memulai
                perjalanan kami dengan visi sederhana: menyediakan solusi
                kemasan berkualitas tinggi yang membantu bisnis berkembang.
              </p>
              <p className="text-gray-700">
                Dengan tim yang berpengalaman dan fasilitas produksi modern,
                kami berkomitmen untuk memberikan layanan terbaik dan produk
                berkualitas tinggi kepada setiap klien kami.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Mengapa Maxellpack */}
      <section className="py-16 px-4 bg-lime">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Mengapa Memilih Maxellpack?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md border-0">
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <span className="h-8 w-8 flex items-center justify-center rounded-full bg-indigo text-white font-bold mr-3">1</span>
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
                  <span className="h-8 w-8 flex items-center justify-center rounded-full bg-indigo text-white font-bold mr-3">2</span>
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
                  <span className="h-8 w-8 flex items-center justify-center rounded-full bg-indigo text-white font-bold mr-3">3</span>
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
                  <span className="h-8 w-8 flex items-center justify-center rounded-full bg-indigo text-white font-bold mr-3">4</span>
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
                  <span className="h-8 w-8 flex items-center justify-center rounded-full bg-indigo text-white font-bold mr-3">5</span>
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
                  <span className="h-8 w-8 flex items-center justify-center rounded-full bg-indigo text-white font-bold mr-3">6</span>
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
                  <span className="h-8 w-8 flex items-center justify-center rounded-full bg-indigo text-white font-bold mr-3">7</span>
                  <h3 className="text-xl font-semibold text-gray-800">Fast Response dan Free Konsultasi</h3>
                </div>
                <p className="text-gray-600">
                  Tim kami siap bantu hitung kebutuhan, pilih bahan, dan rekomendasi ukuran terbaik. Gratis!
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md border-0">
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <span className="h-8 w-8 flex items-center justify-center rounded-full bg-indigo text-white font-bold mr-3">8</span>
                  <h3 className="text-xl font-semibold text-gray-800">Sudah dipercaya ratusan Brand Local</h3>
                </div>
                <p className="text-gray-600">
                  Dari UMKM sampai Brand Besar sudah pakai Maxellpack untuk memperkuat citra produk mereka melalui kemasan yang berkualitas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: USP */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Keunggulan Kami
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <CheckCircle className="h-6 w-6 text-indigo mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    Desain Custom
                  </h3>
                  <p className="text-gray-600">
                    Tim desain kami akan membantu Anda menciptakan kemasan yang
                    sesuai dengan brand dan kebutuhan produk Anda.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <CheckCircle className="h-6 w-6 text-indigo mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    Bahan Berkualitas
                  </h3>
                  <p className="text-gray-600">
                    Kami hanya menggunakan bahan berkualitas tinggi untuk
                    memastikan kemasan Anda tahan lama dan aman.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <CheckCircle className="h-6 w-6 text-indigo mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    Harga Kompetitif
                  </h3>
                  <p className="text-gray-600">
                    Kami menawarkan harga yang kompetitif tanpa mengorbankan
                    kualitas produk dan layanan.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <CheckCircle className="h-6 w-6 text-indigo mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    Ramah Lingkungan
                  </h3>
                  <p className="text-gray-600">
                    Kami berkomitmen untuk menggunakan bahan dan proses produksi
                    yang ramah lingkungan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
