"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-4 py-4">
      <div className="max-w-7xl mx-auto flex justify-between  items-center">
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-xl">
          Pedia
        </Link>

        {/* Menu */}
        <ul className="flex gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`
                    text-white 
                    font-medium 
                    relative
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-0.5
                    after:w-full
                    after:bg-white
                    after:scale-x-0
                    after:origin-left
                    after:transition-transform
                    hover:after:scale-x-100
                    ${isActive ? "after:scale-x-100" : ""}
                  `}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
