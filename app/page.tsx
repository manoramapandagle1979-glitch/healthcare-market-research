import { Suspense } from 'react';
import type { Metadata } from 'next';
import {
  HeroSection,
  FeaturedReportsSection,
  IndustryCategoriesSection,
  StatsSection,
  TestimonialsSection,
  CTASection,
  StatsSectionSkeleton,
  TestimonialsSectionSkeleton,
} from '@/components/home';

export const metadata: Metadata = {
  title: "Home",
  description: "Access comprehensive healthcare research reports covering digital health, pharmaceuticals, medical devices, biotechnology, and emerging healthcare technologies. Data-driven insights for strategic decision-making.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedReportsSection />
      <IndustryCategoriesSection />

      <Suspense fallback={<StatsSectionSkeleton />}>
        <StatsSection />
      </Suspense>

      <Suspense fallback={<TestimonialsSectionSkeleton />}>
        <TestimonialsSection />
      </Suspense>

      <CTASection />
    </>
  );
}
