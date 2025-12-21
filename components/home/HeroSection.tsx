import Link from 'next/link';
import { Section, Container, Button } from '@/components/ui';

export default function HeroSection() {
  return (
    <Section padding="xl">
      <Container size="lg">
        <div className="flex flex-col items-center text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--foreground)]">
            Transform Healthcare Decisions with Data-Driven Insights
          </h1>

          <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-3xl">
            Access comprehensive market research, expert analysis, and actionable intelligence
            to drive strategic decisions in the rapidly evolving healthcare landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/reports">
              <Button variant="primary" size="lg">
                View Reports
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
