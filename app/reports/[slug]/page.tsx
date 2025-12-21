import { notFound } from "next/navigation";
import reports from "@/data/reports.json";
import { Breadcrumb, Badge, Card, CardContent } from "@/components/ui";
import { TableOfContents } from "@/components/reports/TableOfContents";
import { CTAPanel } from "@/components/reports/CTAPanel";
import { MarketSizeChart } from "@/components/reports/MarketSizeChart";
import { SegmentationChart } from "@/components/reports/SegmentationChart";

export async function generateStaticParams() {
  return reports.map((report) => ({
    slug: report.slug,
  }));
}

interface Report {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  price: string;
  region: string;
  year: string;
  reportType: string;
  pages: number;
  reportCode?: string;
  baseYear?: string;
  forecastPeriod?: string;
  marketSize2024?: string;
  marketSize2032?: string;
  cagr?: string;
  overview?: string;
  keyFindings?: string[];
  segmentation?: {
    byType?: Array<{ name: string; share: string; description?: string }>;
    byApplication?: Array<{ name: string; share: string }>;
    byEndUser?: Array<{ name: string; share: string }>;
    byRegion?: Array<{ name: string; share: string; cagr?: string }>;
  };
  keyPlayers?: Array<{ name: string; marketShare: string; headquarters: string }>;
  tableOfContents?: Array<{ id: string; title: string; level: number }>;
}

export default async function ReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const report = reports.find((r) => r.slug === slug) as Report | undefined;

  if (!report) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Reports', href: '/reports' },
    { label: report.title },
  ];

  const hasFullContent = report.tableOfContents && report.overview;

  return (
    <div className="bg-[var(--background)]">
      <div className="border-b border-[var(--border)] bg-[var(--card)]">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {hasFullContent && report.tableOfContents && (
            <aside className="hidden lg:block lg:col-span-3">
              <TableOfContents items={report.tableOfContents} />
            </aside>
          )}

          <main className={hasFullContent ? "lg:col-span-6" : "lg:col-span-9"}>
            <article>
              <header className="mb-8 pb-8 border-b border-[var(--border)]">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="default">{report.category}</Badge>
                  <Badge variant="outline">{report.region}</Badge>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
                  {report.title}
                </h1>

                <p className="text-xl text-[var(--muted-foreground)] mb-6">
                  {report.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-[var(--muted-foreground)] mb-1">Report Code</p>
                    <p className="font-semibold text-[var(--foreground)]">
                      {report.reportCode || `HC-${report.id}`}
                    </p>
                  </div>
                  <div>
                    <p className="text-[var(--muted-foreground)] mb-1">Published</p>
                    <p className="font-semibold text-[var(--foreground)]">{report.date}</p>
                  </div>
                  <div>
                    <p className="text-[var(--muted-foreground)] mb-1">Pages</p>
                    <p className="font-semibold text-[var(--foreground)]">{report.pages}</p>
                  </div>
                  <div>
                    <p className="text-[var(--muted-foreground)] mb-1">Format</p>
                    <p className="font-semibold text-[var(--foreground)]">PDF, Excel</p>
                  </div>
                </div>
              </header>

              {hasFullContent ? (
                <>
                  <section id="overview" className="mb-12 scroll-mt-24">
                    <h2 className="text-3xl font-bold text-[var(--foreground)] mb-6">
                      Market Overview
                    </h2>
                    <div className="prose prose-lg max-w-none text-[var(--muted-foreground)]">
                      <p>{report.overview}</p>
                    </div>

                    {report.keyFindings && report.keyFindings.length > 0 && (
                      <Card className="mt-8 border-[var(--primary)]/20 bg-[var(--muted)]">
                        <CardContent className="p-6">
                          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">
                            Key Findings
                          </h3>
                          <ul className="space-y-3">
                            {report.keyFindings.map((finding, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <svg
                                  className="w-5 h-5 text-[var(--primary)] mt-1 flex-shrink-0"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <span className="text-[var(--foreground)]">{finding}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    )}
                  </section>

                  {report.marketSize2024 && report.marketSize2032 && report.cagr && (
                    <section id="market-size" className="mb-12 scroll-mt-24">
                      <h2 className="text-3xl font-bold text-[var(--foreground)] mb-6">
                        Market Size & Forecast
                      </h2>
                      <p className="text-[var(--muted-foreground)] mb-8">
                        The market is projected to grow from {report.marketSize2024} in{' '}
                        {report.baseYear || '2024'} to {report.marketSize2032} by{' '}
                        {report.forecastPeriod?.split('-')[1] || '2032'}, at a CAGR of{' '}
                        {report.cagr} during the forecast period.
                      </p>
                      <MarketSizeChart
                        marketSize2024={report.marketSize2024}
                        marketSize2032={report.marketSize2032}
                        cagr={report.cagr}
                      />
                    </section>
                  )}

                  {report.segmentation && (
                    <section id="segmentation" className="mb-12 scroll-mt-24">
                      <h2 className="text-3xl font-bold text-[var(--foreground)] mb-6">
                        Market Segmentation
                      </h2>
                      <div className="space-y-8">
                        {report.segmentation.byType && (
                          <div id="seg-type" className="scroll-mt-24">
                            <SegmentationChart
                              title="By Service Type"
                              segments={report.segmentation.byType}
                            />
                          </div>
                        )}

                        {report.segmentation.byApplication && (
                          <div id="seg-application" className="scroll-mt-24">
                            <SegmentationChart
                              title="By Application"
                              segments={report.segmentation.byApplication}
                            />
                          </div>
                        )}

                        {report.segmentation.byEndUser && (
                          <div id="seg-end-user" className="scroll-mt-24">
                            <SegmentationChart
                              title="By End User"
                              segments={report.segmentation.byEndUser}
                            />
                          </div>
                        )}

                        {report.segmentation.byRegion && (
                          <div id="seg-region" className="scroll-mt-24">
                            <SegmentationChart
                              title="By Region"
                              segments={report.segmentation.byRegion}
                            />
                          </div>
                        )}
                      </div>
                    </section>
                  )}

                  <section id="competitive" className="mb-12 scroll-mt-24">
                    <h2 className="text-3xl font-bold text-[var(--foreground)] mb-6">
                      Competitive Landscape
                    </h2>
                    <p className="text-[var(--muted-foreground)] mb-8">
                      The market is characterized by intense competition among established players
                      and emerging companies. Strategic partnerships, mergers and acquisitions, and
                      product innovation are key strategies employed by market participants.
                    </p>

                    {report.keyPlayers && report.keyPlayers.length > 0 && (
                      <div id="key-players" className="scroll-mt-24">
                        <h3 className="text-xl font-semibold text-[var(--foreground)] mb-6">
                          Key Market Players
                        </h3>
                        <div className="grid gap-4">
                          {report.keyPlayers.map((player, index) => (
                            <Card key={index} className="hover:shadow-md transition-shadow">
                              <CardContent className="">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <h4 className="font-semibold text-[var(--foreground)] text-lg mb-2">
                                      {player.name}
                                    </h4>
                                    <p className="text-sm text-[var(--muted-foreground)]">
                                      Headquarters: {player.headquarters}
                                    </p>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-xs text-[var(--muted-foreground)] mb-1">
                                      Market Share
                                    </p>
                                    <p className="text-2xl font-bold text-[var(--primary)]">
                                      {player.marketShare}
                                    </p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}
                  </section>

                  <section id="drivers" className="mb-12 scroll-mt-24">
                    <h2 className="text-3xl font-bold text-[var(--foreground)] mb-6">
                      Market Drivers & Opportunities
                    </h2>
                    <div className="prose prose-lg max-w-none text-[var(--muted-foreground)]">
                      <ul className="space-y-3">
                        <li>Increasing adoption of digital health technologies</li>
                        <li>Growing investment in healthcare infrastructure</li>
                        <li>Favorable government policies and reimbursement frameworks</li>
                        <li>Rising healthcare expenditure in emerging markets</li>
                        <li>Technological advancements and innovation</li>
                      </ul>
                    </div>
                  </section>

                  <section id="challenges" className="mb-12 scroll-mt-24">
                    <h2 className="text-3xl font-bold text-[var(--foreground)] mb-6">
                      Challenges & Restraints
                    </h2>
                    <div className="prose prose-lg max-w-none text-[var(--muted-foreground)]">
                      <ul className="space-y-3">
                        <li>Data privacy and security concerns</li>
                        <li>Regulatory compliance complexity</li>
                        <li>High initial implementation costs</li>
                        <li>Integration challenges with legacy systems</li>
                        <li>Limited digital literacy in certain regions</li>
                      </ul>
                    </div>
                  </section>
                </>
              ) : (
                <section className="prose prose-lg max-w-none">
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
                </section>
              )}
            </article>
          </main>

          <aside className={hasFullContent ? "lg:col-span-3" : "lg:col-span-3"}>
            <div className="sticky top-24">
              <CTAPanel price={report.price} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
