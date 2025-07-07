import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Welcome to Maxellpack",
  description:
    "Maxellpack menyediakan kemasan custom berkualitas tinggi untuk berbagai kebutuhan bisnis Anda",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11310080769"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-11310080769');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-offwhite font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}

          <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <Image
                    src="/maxellpack-logo.jpeg"
                    alt="Maxellpack Logo"
                    width={180}
                    height={180}
                    className="mb-4"
                  />
                  <p className="text-gray-300">
                    Solusi kemasan berkualitas untuk berbagai kebutuhan bisnis
                    Anda. Kami menyediakan kemasan custom yang sesuai dengan
                    brand dan produk Anda.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Tautan</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-gray-300 hover:text-white">
                        Beranda
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/produk"
                        className="text-gray-300 hover:text-white"
                      >
                        Tentang Kami
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/hubungi-kami"
                        className="text-white"
                      >
                        Hubungi Kami
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
                <p>
                  © {new Date().getFullYear()} Maxellpack. All rights reserved.
                </p>
              </div>
            </div>
          </footer>

          {/* WhatsApp Button (Global) */}
          <div className="fixed bottom-6 right-6 z-50">
            <Link 
              href="https://wa.me/6281292773973?text=Halo%20Maxellpack,%20saya%20ingin%20konsultasi%20tentang%20kemasan"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                // @ts-ignore
                window.gtag('event', 'whatsapp_click', {
                  'event_category': 'Contact',
                  'event_label': 'WhatsApp Button Click',
                  'value': 1
                });
              }}
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
        </ThemeProvider>
      </body>
    </html>
  );
}
