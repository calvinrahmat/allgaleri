import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const portfolioItems = [
  {
    id: 1,
    title: "Kardus Industri",
    client: "Nippon Paint",
    image: "/portofolio-1.png",
  },
  {
    id: 2,
    title: "Kardus Custom E-commerce",
    client: "DeClip",
    image: "/portofolio-2.png",
  },
  {
    id: 3,
    title: "Kemasan Kosmetik",
    client: "Zeodda",
    image: "/portofolio-3.png",
  },
  {
    id: 4,
    title: "Kemasan Merchandise",
    client: "Bank INA",
    image: "/portofolio-4.png",
  },
];

export function PortfolioGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {portfolioItems.map((item) => (
        <Dialog key={item.id}>
          <DialogTrigger asChild>
            <Card className="w-full bg-white shadow-md border-0 cursor-pointer hover:shadow-lg transition rounded-xl overflow-hidden">
              <div className="w-full aspect-[1/1] relative">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover w-full h-full rounded-t-xl"
                />
              </div>
              <CardContent className="p-6 flex flex-col items-start gap-2">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-left text-lg leading-relaxed">Client: {item.client}</p>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="max-w-2xl flex flex-col items-center">
            <DialogTitle>{item.title}</DialogTitle>
            <div className="w-full aspect-[1/1] relative">
              <Zoom>
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-contain rounded-lg bg-white"
                  priority
                />
              </Zoom>
            </div>
            <div className="mt-4 w-full text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Client: {item.client}</p>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
