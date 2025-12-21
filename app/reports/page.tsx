import Link from "next/link";
import reports from "@/data/reports.json";

export default function ReportsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Research Reports</h1>
        <p className="text-lg text-[var(--muted-foreground)]">
          Explore our comprehensive collection of healthcare market research reports.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reports.map((report) => (
          <Link
            key={report.id}
            href={`/reports/${report.slug}`}
            className="group rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 transition-all hover:shadow-lg hover:border-[var(--primary)]"
          >
            <div className="mb-2 text-sm text-[var(--primary)]">{report.category}</div>
            <h2 className="mb-3 text-xl font-semibold group-hover:text-[var(--primary)] transition-colors">
              {report.title}
            </h2>
            <p className="mb-4 text-[var(--muted-foreground)] line-clamp-3">
              {report.description}
            </p>
            <div className="text-sm text-[var(--muted-foreground)]">{report.date}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
