import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary)] text-white font-bold text-lg">
            HR
          </div>
          <span className="font-bold text-xl">Healthcare Research</span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
