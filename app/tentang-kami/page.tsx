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
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/factory.png"
              alt="Maxellpack Factory"
              fill
              className="object-cover"
            />
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
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Maxellpack Company Profile"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md border-0">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-lavender flex items-center justify-center mb-4">
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Kualitas Terjamin
                </h3>
                <p className="text-gray-600">
                  Kami menggunakan bahan berkualitas tinggi dan proses produksi
                  yang ketat untuk memastikan setiap produk memenuhi standar
                  kualitas tertinggi.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md border-0">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-lavender flex items-center justify-center mb-4">
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Pengiriman Tepat Waktu
                </h3>
                <p className="text-gray-600">
                  Kami memahami pentingnya ketepatan waktu dalam bisnis. Oleh
                  karena itu, kami berkomitmen untuk mengirimkan pesanan Anda
                  sesuai jadwal yang disepakati.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md border-0">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-lavender flex items-center justify-center mb-4">
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
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Layanan Pelanggan
                </h3>
                <p className="text-gray-600">
                  Tim layanan pelanggan kami siap membantu Anda dengan
                  pertanyaan, permintaan, dan dukungan yang Anda butuhkan
                  sepanjang proses kerja sama.
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
