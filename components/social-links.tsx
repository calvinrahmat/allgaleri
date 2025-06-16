import Link from "next/link";
import { Button } from "@/components/ui/button";

const socialMedia = [
  {
    id: 1,
    name: "Instagram",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    url: "https://instagram.com/maxellpack",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    hoverColor: "hover:bg-purple-500",
  },
  {
    id: 2,
    name: "TikTok",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12.75 2a.75.75 0 0 1 .75.75v13.5a3.75 3.75 0 1 1-3.75-3.75.75.75 0 0 1 0 1.5 2.25 2.25 0 1 0 2.25 2.25V2.75A.75.75 0 0 1 12.75 2zm4.5 1.5a.75.75 0 0 1 .75.75c0 2.485 2.015 4.5 4.5 4.5a.75.75 0 0 1 0 1.5 6 6 0 0 1-6-6 .75.75 0 0 1 .75-.75z" />
      </svg>
    ),
    url: "https://www.tiktok.com/@maxellpack?_t=ZS-8xF21OPHFth&_r=1",
    color: "bg-black",
    hoverColor: "hover:bg-gray-800",
  },
  {
    id: 4,
    name: "YouTube",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
      </svg>
    ),
    url: "https://www.youtube.com/embed/cP-3ZILDYAk?si=5bGAjXTKxnsz2Wm_",
    color: "bg-red-600",
    hoverColor: "hover:bg-red-500",
  },
];

const ecommerce = [
  {
    id: 1,
    name: "Tokopedia",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
      </svg>
    ),
    url: "https://tokopedia.com/maxellpack",
    color: "bg-green-600",
    hoverColor: "hover:bg-green-500",
  },
  {
    id: 2,
    name: "Shopee",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
      </svg>
    ),
    url: "https://shopee.co.id/maxellpack",
    color: "bg-orange-600",
    hoverColor: "hover:bg-orange-500",
  },
];

export function SocialLinks() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Media Sosial
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socialMedia.map((social) => (
            <Link
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className={`w-full text-white ${social.color} ${social.hoverColor}`}
              >
                <span className="mr-2">{social.icon}</span>
                {social.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">E-Commerce</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ecommerce.map((shop) => (
            <Link
              key={shop.id}
              href={shop.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className={`w-full text-white ${shop.color} ${shop.hoverColor}`}
              >
                <span className="mr-2">{shop.icon}</span>
                {shop.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
