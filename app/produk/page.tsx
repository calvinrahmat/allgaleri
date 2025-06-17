import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import products from "../../data/products.json";

// Define the Product type based on the JSON structure
interface Product {
  slug: string;
  name: string;
  images: string[];
  suitableFor: string;
  description: string;
  details: string;
}

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
            {(products as Product[]).map((product) => (
              <Link key={product.slug} href={`/produk/${product.slug}`}>
                <Card className="bg-gray-50 shadow-md border-0 cursor-pointer hover:shadow-lg transition">
                  <CardContent className="pt-6 flex flex-col items-center">
                    <Image src={product.images[0]} alt={product.name} width={160} height={120} className="mb-4 rounded" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-center">{product.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
