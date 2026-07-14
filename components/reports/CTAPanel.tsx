import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui';
import { Button } from '@/components/ui';
import { WHATS_INCLUDED } from '@/lib/constants';

interface CTAPanelProps {
  price: string;
  discounted_price: string;
  reportTitle?: string;
  reportSlug?: string;
  reportId?: number;
}

export const CTAPanel = React.forwardRef<HTMLDivElement, CTAPanelProps>(
  ({ price, discounted_price, reportTitle, reportSlug, reportId }, ref) => {
    return (
      <Card ref={ref}>
        <CardContent className="space-y-4">
          <div className="text-center">
            <p className="text-sm text-[var(--muted-foreground)] mb-2">
              Global User License
            </p>
            <div className="mb-2">
              {discounted_price &&
                <p className="text-lg text-[var(--muted-foreground)] line-through">
                  {price}/-
                </p>}
              <p className="text-4xl font-bold text-[var(--foreground)]">
                {discounted_price ? discounted_price : price}/-
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <Link href={reportId ? `/checkout/${reportId}` : reportSlug ? `/checkout/${reportSlug}` : '/contact'}>
              <Button className="w-full" size="lg">
                Buy Now
              </Button>
            </Link>
            <Link href={reportId ? `/request-customization?reportId=${reportId}` : `/request-customization${reportTitle ? `?report=${encodeURIComponent(reportTitle)}${reportSlug ? `&slug=${encodeURIComponent(reportSlug)}` : ''}` : ''}`}>

              <Button
                variant="outline"
                className="w-full mt-4 bg-[#E3F2FD] text-[#1565C0] hover:bg-[#BBDEFB] hover:text-[#0D47A1] border-[#90CAF9] hover:border-[#64B5F6] focus:ring-[#2196F3]"
                size="lg"
              >
                Customize This Report
              </Button>
            </Link>
          </div>

          <div className="pt-4 border-t border-[var(--border)]">
            <h4 className="text-sm font-semibold mb-3">What&apos;s Included</h4>
            <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
              {WHATS_INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    );
  }
);

CTAPanel.displayName = 'CTAPanel';
