import React from 'react';
import Link from 'next/link';
import { Card, CardContent, Button } from '@/components/ui';

interface CustomizeReportCardProps {
  reportTitle?: string;
  reportSlug?: string;
  reportId?: number;
  className?: string;
}

export const CustomizeReportCard = React.forwardRef<HTMLDivElement, CustomizeReportCardProps>(
  ({ reportTitle, reportSlug, reportId, className }, ref) => {
    return (
      <Card ref={ref} className={className}>
        <CardContent className="space-y-4" style={{ border: 'none' }}>
          <h3 className="text-lg font-bold">
            Want a Free Sample?
          </h3>

          <p className="text-sm">
            Get a free sample of this report to explore the data, methodology, and insights before you buy.
          </p>

          <Link href={reportId ? `/request-sample?reportId=${reportId}` : `/request-sample${reportTitle ? `?report=${encodeURIComponent(reportTitle)}${reportSlug ? `&slug=${encodeURIComponent(reportSlug)}` : ''}` : ''}`}>
            <Button
              className="w-full mt-4 bg-gradient-to-r from-green-900 via-green-700 to-green-600 text-white hover:from-green-950 hover:via-green-800 hover:to-green-700 focus:ring-green-600 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
              size="lg"
            >
              Request Sample
            </Button>
          </Link>
        </CardContent>
      </Card>
    );
  }
);

CustomizeReportCard.displayName = 'CustomizeReportCard';
