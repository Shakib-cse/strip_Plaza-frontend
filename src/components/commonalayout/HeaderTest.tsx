"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "NEWS", href: "#news" },
  { label: "AGENDA", href: "#agenda" },
  { label: "STRIPDATABASE", href: "#database" },
  { label: "ONLINESTRIPBEURS", href: "#beurs" },
  { label: "INFO", href: "#info" },
];

export default function NavbarTest() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="relative z-50 pt-6 pb-16 md:pb-12 bg-[#EAEAEA]">
      {/* Bottom Background */}
      <div className="absolute -bottom-10 left-0 w-full h-[40px]">
        <Image
          src="/icons/commonLayout/test.png"
          alt="bottom bg"
          fill
          className="object-contain object-bottom w-full"
          priority
        />
      </div>

      <div className="relative flex items-center justify-between container mx-auto px-4">
        {/* Logo */}
        <Link href="/" className="relative group">
          <Image
            src="/icons/commonLayout/bernyLogo.png"
            alt="Strip Plaza Logo"
            width={120}
            height={60}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* CENTERED DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-3 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center justify-center 
          px-5 pb-4 pt-1
          font-comic text-lg 
          hover:brightness-110 focus:text-primary text-background"
              style={{
                backgroundImage: `url("/icons/commonLayout/navberBg.png")`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <h1 className="drop-shadow-[1px_1px_0_#000,_-1px_1px_0_#000,_1px_-1px_0_#000,_-1px_-1px_0_#000]">
                {item.label}
              </h1>
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden comic-btn p-2 bg-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
