import Link from 'next/link';
import { Section, Container, Button } from '@/components/ui';

export default function HeroSection() {
  return (
    <Section padding="xl">
      <Container size="lg">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Decorative gradient background */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-ocean-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-bright-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 animate-fadeIn">
            Transform Healthcare Decisions with{' '}
            <span className="bg-gradient-to-r from-navy-800 via-ocean-600 to-bright-500 bg-clip-text text-transparent">
              Data-Driven Insights
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            Access comprehensive market research, expert analysis, and actionable intelligence
            to drive strategic decisions in the rapidly evolving healthcare landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
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
