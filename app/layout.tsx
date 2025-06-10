import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Welcome to Maxellpack",
  description:
    "Innovative packaging solutions tailored to your business",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
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
                        href="/tentang-kami"
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
        </ThemeProvider>
      </body>
    </html>
  );
}
