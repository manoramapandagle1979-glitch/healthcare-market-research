import Link from 'next/link';
import { Grid, Card, CardHeader, CardTitle, CardDescription, Badge } from '@/components/ui';

interface RelatedReport {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  price: string;
}

interface RelatedReportsProps {
  reports: RelatedReport[];
}

export default function RelatedReports({ reports }: RelatedReportsProps) {
  if (!reports || reports.length === 0) {
    return null;
  }

  return (
    <section id="related-reports" className="mb-16 scroll-mt-24 bg-[var(--muted)] px-8 py-12 rounded-lg">
      <div className="max-w-4xl mb-10">
        <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
          Related Reports
        </h2>
        <p className="text-lg text-[var(--muted-foreground)]">
          Explore additional research reports that complement this analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => (
          <Link
            key={report.id}
            href={`/reports/${report.slug}`}
            className="block group"
          >
            <Card className="h-full hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border border-[var(--border)] bg-[var(--background)]">
              <CardHeader className="space-y-4 p-7" style={{height: '100%', justifyContent: 'space-between'}}>
                <Badge variant="default" className="w-fit text-xs">
                  {report.category}
                </Badge>

                <CardTitle className="text-lg leading-snug group-hover:text-[var(--primary)] transition-colors min-h-[3.5rem]">
                  {report.title}
                </CardTitle>

                <div className="space-y-3 pt-2">
                  <CardDescription className="text-sm flex items-center gap-2">
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {report.date}
                  </CardDescription>

                  <div className="text-lg font-semibold text-[var(--primary)]">
                    {report.price}
                  </div>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
