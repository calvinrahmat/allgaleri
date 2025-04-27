import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Maxellpack - Solusi Kemasan Berkualitas",
  description: "Maxellpack menyediakan kemasan custom berkualitas tinggi untuk berbagai kebutuhan bisnis Anda",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="min-h-screen bg-offwhite font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <Link href="/" className="text-2xl font-bold text-indigo">
                      Maxellpack
                    </Link>
                  </div>
                  <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <Link
                      href="/"
                      className="border-transparent text-gray-500 hover:border-indigo hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Beranda
                    </Link>
                    <Link
                      href="/tentang-kami"
                      className="border-transparent text-gray-500 hover:border-indigo hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Tentang Kami
                    </Link>
                    <Link
                      href="/hubungi-kami"
                      className="border-transparent text-gray-500 hover:border-indigo hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Hubungi Kami
                    </Link>
                  </nav>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  <Link
                    href="/hubungi-kami"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo hover:bg-indigo/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo"
                  >
                    Hubungi Kami
                  </Link>
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
              <div className="pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  className="bg-lavender border-indigo text-indigo block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Beranda
                </Link>
                <Link
                  href="/tentang-kami"
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Tentang Kami
                </Link>
                <Link
                  href="/hubungi-kami"
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </header>

          {children}

          <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-indigo mb-4">Maxellpack</h2>
                  <p className="text-gray-300">
                    Solusi kemasan berkualitas untuk berbagai kebutuhan bisnis Anda. Kami menyediakan kemasan custom
                    yang sesuai dengan brand dan produk Anda.
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
                      <Link href="/tentang-kami" className="text-gray-300 hover:text-white">
                        Tentang Kami
                      </Link>
                    </li>
                    <li>
                      <Link href="/hubungi-kami" className="text-gray-300 hover:text-white">
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
                <p>© {new Date().getFullYear()} Maxellpack. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
