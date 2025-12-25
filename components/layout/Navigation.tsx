"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import categories from "@/data/categories.json";
import MegaMenu from "./MegaMenu";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-3 md:space-x-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`text-sm font-medium transition-colors hover:text-[var(--primary)] whitespace-nowrap ${
            pathname === item.href
              ? "text-[var(--primary)]"
              : "text-[var(--muted-foreground)]"
          }`}
        >
          {item.name}
        </Link>
      ))}
      <MegaMenu
        categories={categories}
        isActive={pathname.startsWith("/reports")}
      />
    </nav>
  );
}
