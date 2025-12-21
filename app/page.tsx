import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <section className="mb-16 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
          Healthcare Market Research
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-[var(--muted-foreground)] md:text-xl">
          Get comprehensive insights and analysis for the healthcare industry.
          Access detailed market research reports and expert analysis.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/reports"
            className="rounded-lg bg-[var(--primary)] px-6 py-3 text-white font-medium hover:bg-[var(--primary-hover)] transition-colors"
          >
            Browse Reports
          </Link>
          <Link
            href="/blog"
            className="rounded-lg border border-[var(--border)] px-6 py-3 font-medium hover:bg-[var(--muted)] transition-colors"
          >
            Read Blog
          </Link>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-3">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6">
          <h3 className="mb-3 text-xl font-semibold">In-Depth Analysis</h3>
          <p className="text-[var(--muted-foreground)]">
            Detailed market research reports covering all aspects of the healthcare
            industry.
          </p>
        </div>

        <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6">
          <h3 className="mb-3 text-xl font-semibold">Expert Insights</h3>
          <p className="text-[var(--muted-foreground)]">
            Analysis from industry experts with years of experience in healthcare
            markets.
          </p>
        </div>

        <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6">
          <h3 className="mb-3 text-xl font-semibold">Regular Updates</h3>
          <p className="text-[var(--muted-foreground)]">
            Stay informed with the latest trends and developments in healthcare.
          </p>
        </div>
      </section>
    </div>
  );
}
