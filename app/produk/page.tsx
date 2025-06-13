import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export default function Products() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Product Grid Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Produk Kami
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/produk/kardus-custom">
              <Card className="bg-gray-50 shadow-md border-0 cursor-pointer hover:shadow-lg transition">
                <CardContent className="pt-6 flex flex-col items-center">
                  <Image src="/images/product-box1.jpg" alt="Kardus Custom" width={160} height={120} className="mb-4 rounded" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Kardus Custom</h3>
                  <p className="text-gray-600 text-center">Kardus dengan ukuran, desain, dan bahan sesuai kebutuhan brand Anda.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/produk/box-makanan">
              <Card className="bg-gray-50 shadow-md border-0 cursor-pointer hover:shadow-lg transition">
                <CardContent className="pt-6 flex flex-col items-center">
                  <Image src="/images/product-box2.jpg" alt="Box Makanan" width={160} height={120} className="mb-4 rounded" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Box Makanan</h3>
                  <p className="text-gray-600 text-center">Aman untuk makanan, desain menarik, cocok untuk bisnis kuliner.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/produk/paper-bag">
              <Card className="bg-gray-50 shadow-md border-0 cursor-pointer hover:shadow-lg transition">
                <CardContent className="pt-6 flex flex-col items-center">
                  <Image src="/images/product-box3.jpg" alt="Paper Bag" width={160} height={120} className="mb-4 rounded" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Paper Bag</h3>
                  <p className="text-gray-600 text-center">Tas kertas custom untuk kemasan premium dan ramah lingkungan.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/produk/dus-pengiriman">
              <Card className="bg-gray-50 shadow-md border-0 cursor-pointer hover:shadow-lg transition">
                <CardContent className="pt-6 flex flex-col items-center">
                  <Image src="/images/product-box4.jpg" alt="Dus Pengiriman" width={160} height={120} className="mb-4 rounded" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Dus Pengiriman</h3>
                  <p className="text-gray-600 text-center">Solusi pengiriman aman dan kuat untuk ekspedisi dan e-commerce.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      
    </main>
  );
}
