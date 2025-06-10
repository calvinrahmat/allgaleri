"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center cursor-pointer" aria-label="Maxellpack Home">
              <Image
                src="/maxellpack-logo.jpeg"
                alt="Maxellpack Logo"
                width={60}
                height={24}
                className="object-contain h-6 w-auto md:h-8"
                priority
              />
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <nav className="flex space-x-8">
              <Link
                href="/"
                className="border-transparent text-[#5453E3]  hover:border-indigo inline-flex items-center px-1 pt-1 border-b-2 font-medium"
              >
                Beranda
              </Link>
              <Link
                href="/tentang-kami"
                className="border-transparent text-[#5453E3]  hover:border-indigo inline-flex items-center px-1 pt-1 border-b-2 font-medium"
              >
                Tentang Kami
              </Link>
            
            </nav>
            <Link
              href="/hubungi-kami"
              className="inline-flex items-center px-4 py-2 border border-transparent font-medium rounded-md shadow-sm text-white bg-indigo hover:bg-indigo/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo"
            >
              Hubungi Kami
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#5453E3]  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo"
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
            <Link
              href="/"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive("/")
                  ? "bg-lavender border-indigo text-indigo"
                  : "border-transparent text-[#5453E3] hover:bg-gray-50 hover:border-gray-300"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="/tentang-kami"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive("/tentang-kami")
                  ? "bg-lavender border-indigo text-indigo"
                  : "border-transparent text-[#5453E3] hover:bg-gray-50 hover:border-gray-300"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tentang Kami
            </Link>
            <Link
              href="/hubungi-kami"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive("/hubungi-kami")
                  ? "bg-lavender border-indigo text-indigo"
                  : "border-transparent text-[#5453E3] hover:bg-gray-50 hover:border-gray-300"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
