'use client';

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/6281511408638?text=Halo%20Allgaleri,%20saya%20ingin%20konsultasi%20tentang%20kemasan";

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Track WhatsApp click with Meta Pixel using standard event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact', {
        content_category: 'WhatsApp',
        content_name: 'Konsultasi Kemasan',
        content_type: 'chat_initiated',
        delivery_category: 'home_delivery',
        status: true
      });
    }
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