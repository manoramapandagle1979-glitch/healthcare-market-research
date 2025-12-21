'use client';

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Button } from '@/components/ui';

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
}

interface ReportCardProps {
  report: Report;
}

export default function ReportCard({ report }: ReportCardProps) {
  return (
    <Link href={`/reports/${report.slug}`} className="block h-full">
      <Card hover padding="md" className="h-full flex flex-col">
        <CardHeader>
          {/* Badge + Price Row */}
          <div className="flex items-center justify-between mb-3">
            <Badge variant="primary" size="sm">
              {report.category}
            </Badge>
            <span className="text-lg font-bold text-[var(--primary)]">
              {report.price}
            </span>
          </div>

          <CardTitle as="h3" className="mb-2">
            {report.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-grow">
          <CardDescription className="line-clamp-3 mb-4">
            {report.description}
          </CardDescription>

          {/* Metadata Row with Icons */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--muted-foreground)]">
            <div className="flex items-center gap-1.5">
              <span className="text-base">🌍</span>
              <span>{report.region}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-base">📄</span>
              <span>{report.reportType}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-base">📅</span>
              <span>{report.year}</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="border-t border-[var(--border)] pt-4 mt-4">
          <div className="flex items-center justify-between w-full">
            <span className="text-sm text-[var(--muted-foreground)]">
              {report.pages} pages
            </span>
            <Button variant="ghost" size="sm">
              View Details →
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
