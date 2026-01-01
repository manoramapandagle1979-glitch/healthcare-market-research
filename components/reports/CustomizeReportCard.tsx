import React from 'react';
import Link from 'next/link';
import { Card, CardContent, Button } from '@/components/ui';

interface CustomizeReportCardProps {
  reportTitle?: string;
  className?: string;
}

export const CustomizeReportCard = React.forwardRef<HTMLDivElement, CustomizeReportCardProps>(
  ({ reportTitle, className }, ref) => {
    return (
      <Card ref={ref} className={className}>
        <CardContent className="space-y-4" style={{ border: 'none' }}>
          <h3 className="text-lg font-bold">
            Need a Tailored Report?
          </h3>

          <p className="text-sm">
            Customize this report to your needs — add regions, segments, or data points, with 20% free customization.
          </p>

          <Link href={`/request-sample${reportTitle ? `?report=${encodeURIComponent(reportTitle)}&customize=true` : '?customize=true'}`}>
            <Button
              variant="outline"
              className="w-full mt-4"
              size="lg"
            >
              Customize This Report
            </Button>
          </Link>
        </CardContent>
      </Card>
    );
  }
);

CustomizeReportCard.displayName = 'CustomizeReportCard';
