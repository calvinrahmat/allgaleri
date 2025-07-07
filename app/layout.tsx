import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/whatsapp-button";

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

            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-11310080769/6XAtCJeXmvAYEIHGiJEq',
                'event_callback': callback
              });
              return false;
            }
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
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
