import { notFound } from "next/navigation";
import reports from "@/data/reports.json";

export async function generateStaticParams() {
  return reports.map((report) => ({
    slug: report.slug,
  }));
}

export default async function ReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const report = reports.find((r) => r.slug === slug);

  if (!report) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <article className="mx-auto max-w-4xl">
        <div className="mb-8">
          <div className="mb-4 text-sm text-[var(--primary)]">{report.category}</div>
          <h1 className="mb-4 text-4xl font-bold">{report.title}</h1>
          <div className="text-[var(--muted-foreground)]">{report.date}</div>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg">{report.description}</p>

          <h2>Executive Summary</h2>
          <p>
            This report provides comprehensive analysis of the {report.category.toLowerCase()}
            sector in the healthcare industry. Our research covers market trends, key players,
            growth opportunities, and strategic recommendations.
          </p>

          <h2>Key Findings</h2>
          <ul>
            <li>Market size and growth projections</li>
            <li>Competitive landscape analysis</li>
            <li>Regulatory environment overview</li>
            <li>Technology trends and innovations</li>
          </ul>

          <h2>Market Overview</h2>
          <p>
            The healthcare market continues to evolve with new technologies, changing
            regulations, and shifting patient demographics. This section provides detailed
            insights into current market conditions.
          </p>

          <h2>Conclusion</h2>
          <p>
            Based on our analysis, we identify several key opportunities for stakeholders
            in the {report.category.toLowerCase()} sector.
          </p>
        </div>
      </article>
    </div>
  );
}
