import { Section, Container } from '@/components/ui';
import Image from 'next/image';

interface Partner {
  name: string;
  id: string;
  logo: string;
}

const partners: Partner[] = [
  { id: 'abb', name: 'ABB', logo: '/assets/logos/ABB.png' },
  { id: 'kiwa', name: 'Kiwa', logo: '/assets/logos/Kiwa.png' },
  { id: 'ina-life', name: 'INA Life', logo: '/assets/logos/INALife.png' },
  { id: 'bcg', name: 'Boston Consulting Group', logo: '/assets/logos/BCG.png' },
  { id: 'pwc', name: 'PwC', logo: '/assets/logos/PWC.png' },
  { id: 'honeywell', name: 'Honeywell', logo: '/assets/logos/Honeywell.png' },
  { id: 'sk-inc', name: 'SK Inc', logo: '/assets/logos/Sk-Inc-2.png' },
  { id: 'nestle', name: 'Nestlé Professional', logo: '/assets/logos/Nestle-Professional.png' },
  { id: 'amd', name: 'AMD', logo: '/assets/logos/AMD.png' },
];

export default function TrustedPartnersSection() {
  // Duplicate partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <Section background="card" padding="lg">
      <Container size="xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
              Trusted Partners
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
              Collaborating with industry leaders to deliver exceptional insights
            </p>
          </div>

          <div className="relative overflow-hidden py-4">
            {/* Gradient fade effects on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--card)] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--card)] to-transparent z-10 pointer-events-none"></div>

            <div className="flex animate-scroll-horizontal gap-8">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 w-[180px] h-[200px] flex items-center justify-center p-6 bg-white rounded-xl"
                >
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={160}
                    height={80}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
