import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--muted)]">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">About</h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              Healthcare Market Research provides comprehensive insights and analysis
              for the healthcare industry.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/reports"
                  className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                >
                  Research Reports
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              Email: info@healthcareresearch.com
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--border)] pt-8 text-center text-sm text-[var(--muted-foreground)]">
          <p>&copy; {currentYear} Healthcare Market Research. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
