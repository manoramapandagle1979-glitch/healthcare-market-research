"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Navigation from "./Navigation";
import { SearchBar } from "@/components/ui";

export default function Header() {
  const pathname = usePathname();
  const isHomeOrReportListPage = pathname === "/" || pathname === "/reports";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 gap-2 md:gap-4">
        <Link href="/" className="flex items-center space-x-2 md:space-x-3 group flex-shrink-0">
          <div className="flex h-9 w-9 md:h-11 md:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 via-ocean-600 to-ocean-500 text-white font-bold text-base md:text-lg shadow-primary transform group-hover:scale-105 transition-transform duration-200">
            HR
          </div>
          <span className="font-bold text-base md:text-xl bg-gradient-to-r from-navy-800 via-ocean-600 to-ocean-500 bg-clip-text text-transparent hidden sm:inline">Healthcare Research</span>
          <span className="font-bold text-base bg-gradient-to-r from-navy-800 via-ocean-600 to-ocean-500 bg-clip-text text-transparent sm:hidden">HC Research</span>
        </Link>

        {/* Search Bar - Only show on non-homepage */}
        {!isHomeOrReportListPage && (
          <div className="hidden lg:flex flex-1 max-w-md mx-4 min-w-0">
            <SearchBar
              variant="header"
              placeholder="Search reports..."
              className="w-full"
            />
          </div>
        )}

        <Navigation />
      </div>
    </header>
  );
}
