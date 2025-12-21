"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Reports", href: "/reports" },
  { name: "Blog", href: "/blog" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`text-sm font-medium transition-colors hover:text-[var(--primary)] ${
            pathname === item.href
              ? "text-[var(--primary)]"
              : "text-[var(--muted-foreground)]"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
