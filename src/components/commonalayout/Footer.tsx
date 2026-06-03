import Image from "next/image";
import Link from "next/link";

const exploreLinks = [
  { label: "News", href: "/" },
  { label: "Agenda", href: "/agenda" },
  { label: "Database", href: "/stripdatabase" },
  { label: "Online Strip Beurs", href: "/onlinestripbeurs" },
  { label: "Info", href: "/info" },
];

  // const communityLinks = [
  //   { label: "Newsletter", href: "#" },
  //   { label: "Contact", href: "#" },
  //   { label: "Online APP", href: "#" },
  // ];

export default function Footer() {
  return (
    <footer className="mt-12 border-t-4 border-foreground border-dashed bg-[#e9e9a3]">
      <div className="container mx-auto px-4 py-12">
        <div className="flex gap-8 justify-around items-top w-full">
          {/* Brand */}
          <div className="space-y-4">
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
            <p className="text-sm text-gray-700 leading-relaxed max-w-xs">
              Your number one source for the latest comic news, artist
              interviews, and a massive community-driven database. Built for the
              fans, by the fans.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-comic text-lg mb-4 text-gray-900">EXPLORE</h4>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-700 hover:text-red-600 hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          {/* <div>
            <h4 className="font-comic text-lg mb-4 text-gray-900">COMMUNITY</h4>
            <ul className="space-y-2">
              {communityLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-700 hover:text-red-600 hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        <div className="mt-12 pt-6 border-t-2 border-black/20 text-center">
          <p className="text-xs text-gray-600">
            © 2024 Comic Plaza. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
