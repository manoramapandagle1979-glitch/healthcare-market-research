import type { Metadata } from 'next';
import reports from '@/data/reports.json';
import { ReportsListingClient } from '@/components/reports';

export const metadata: Metadata = {
  title: "Research Reports",
  description: "Browse our comprehensive collection of healthcare research reports covering telemedicine, pharmaceuticals, medical devices, AI in healthcare, biotechnology, and digital health innovations.",
};

export default function ReportsPage() {
  return <ReportsListingClient reports={reports} />;
}
