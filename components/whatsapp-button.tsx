'use client';

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/6281292773973?text=Halo%20Maxellpack,%20saya%20ingin%20konsultasi%20tentang%20kemasan";

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // @ts-ignore
    gtag_report_conversion(whatsappUrl);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link 
        href={whatsappUrl}
        onClick={handleClick}
      >
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
  );
} 