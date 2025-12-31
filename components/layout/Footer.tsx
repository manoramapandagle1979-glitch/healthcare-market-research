import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 via-ocean-600 to-ocean-500 text-white font-bold text-sm shadow-primary">
                HF
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-navy-800 via-ocean-600 to-ocean-500 bg-clip-text text-transparent">Healthcare Foresights</span>
            </div>
            <p className="text-sm text-slate-600">
              Comprehensive insights and analysis for the healthcare industry.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/reports"
                  className="text-slate-600 hover:text-ocean-600 transition-colors flex items-center gap-2"
                >
                  <span className="text-ocean-600">→</span> Research Reports
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-600 hover:text-ocean-600 transition-colors flex items-center gap-2"
                >
                  <span className="text-ocean-600">→</span> Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">Contact</h3>
            <p className="text-sm text-slate-600 flex items-center gap-2">
              <span className="text-ocean-600">✉️</span> info@healthcareresearch.com
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8 text-center">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Healthcare Foresights. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
