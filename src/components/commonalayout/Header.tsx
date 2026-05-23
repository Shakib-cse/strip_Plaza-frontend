"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "NIEUWS", href: "/" },
  { label: "AGENDA", href: "/agenda" },
  { label: "STRIPDATABASE", href: "/stripdatabase" },
  { label: "ONLINESTRIPBEURS", href: "/onlinestripbeurs" },
  { label: "INFO", href: "/info" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname.startsWith("/news-details/");
    }

    if (href === "/agenda") {
      return (
        pathname === "/agenda" ||
        pathname.startsWith("/agenda/") ||
        pathname.startsWith("/agenda-details/")
      );
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav
      className="z-50 pt-6 pb-24 md:pb-12"
      style={{
        backgroundImage: `url("/icons/commonLayout/headerBg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
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
              aria-current={isActiveRoute(item.href) ? "page" : undefined}
              className="flex items-center justify-center 
        px-5 pb-4 pt-1
        font-comic text-lg 
        hover:brightness-110 focus:text-primary"
              style={{
                color: isActiveRoute(item.href)
                  ? "var(--color-primary)"
                  : "var(--color-primary-foreground)",
                backgroundImage: `url("/icons/commonLayout/navberBg.png")`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <h1 className="drop-shadow-[1px_1px_0_#000,-1px_1px_0_#000,1px_-1px_0_#000,-1px_-1px_0_#000]">
                {item.label}
              </h1>
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden comic-btn p-2 bg-white"
          aria-label={
            mobileOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`container mx-auto px-4 lg:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen
            ? "mt-4 max-h-96 opacity-100 translate-y-0"
            : "mt-0 max-h-0 opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-2 pb-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              aria-current={isActiveRoute(item.href) ? "page" : undefined}
              className="inline-flex w-fit items-center justify-center px-5 pb-4 pt-1 font-comic text-base hover:brightness-110 focus:text-primary"
              style={{
                color: isActiveRoute(item.href)
                  ? "var(--color-primary)"
                  : "var(--color-primary-foreground)",
                backgroundImage: `url("/icons/commonLayout/navberBg.png")`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <h1 className="drop-shadow-[1px_1px_0_#000,-1px_1px_0_#000,1px_-1px_0_#000,-1px_-1px_0_#000]">
                {item.label}
              </h1>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
