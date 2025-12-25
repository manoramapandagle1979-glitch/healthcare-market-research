import type { Metadata } from 'next';
import { Suspense } from 'react';
import reports from '@/data/reports.json';
import { ReportsListingClient } from '@/components/reports';

export const metadata: Metadata = {
  title: "Research Reports",
  description: "Browse our comprehensive collection of healthcare research reports covering telemedicine, pharmaceuticals, medical devices, AI in healthcare, biotechnology, and digital health innovations.",
};

export default function ReportsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ReportsListingClient reports={reports} />
    </Suspense>
  );
}
