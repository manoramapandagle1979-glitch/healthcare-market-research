import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 via-ocean-600 to-ocean-500 text-white font-bold text-lg shadow-primary transform group-hover:scale-105 transition-transform duration-200">
            HR
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-navy-800 via-ocean-600 to-ocean-500 bg-clip-text text-transparent">Healthcare Research</span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
