"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 md:h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center cursor-pointer" aria-label="Allgaleri Home">
              <Image
                src="/logo.png"
                alt="Allgaleri Logo"
                width={64}
                height={64}
                className="rounded-full object-cover h-16 w-16 md:h-20 md:w-20"
                priority
              />
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <nav className="flex space-x-8">
              <a
                href="#beranda"
                className="border-transparent text-[#778873]  hover:border-indigo inline-flex items-center px-1 pt-1 border-b-2 font-medium"
              >
                Beranda
              </a>
              <a
                href="#produk"
                className="border-transparent text-[#778873]  hover:border-indigo inline-flex items-center px-1 pt-1 border-b-2 font-medium"
              >
                Produk
              </a>
            
            </nav>
            <a
              href="https://wa.me/6281511408638?text=Halo%20Allgaleri,%20saya%20ingin%20konsultasi%20tentang%20kemasan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent font-medium rounded-md shadow-sm text-white bg-indigo hover:bg-indigo/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo"
            >
              Hubungi Kami
            </a>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#778873]  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#beranda"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-[#778873] hover:bg-gray-50 hover:border-gray-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Beranda
            </a>
            <a
              href="#produk"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-[#778873] hover:bg-gray-50 hover:border-gray-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Produk
            </a>
            <a
              href="https://wa.me/6281511408638?text=Halo%20Allgaleri,%20saya%20ingin%20konsultasi%20tentang%20kemasan"
              target="_blank"
              rel="noopener noreferrer"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-[#778873] hover:bg-gray-50 hover:border-gray-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
