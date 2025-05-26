import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Maxellpack - Solusi Kemasan Berkualitas",
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
                  <h2 className="text-2xl font-bold text-indigo mb-4">
                    Maxellpack
                  </h2>
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
                        className="text-gray-300 hover:text-white"
                      >
                        Hubungi Kami
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Kontak</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Jl. Contoh Alamat No. 123, Jakarta Selatan</li>
                    <li>+62 812 3456 7890</li>
                    <li>info@maxellpack.com</li>
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
