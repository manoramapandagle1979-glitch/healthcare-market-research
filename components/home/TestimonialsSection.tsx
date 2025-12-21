import { Section, Container, Grid, Card, CardTitle, CardDescription, CardContent } from '@/components/ui';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Chief Medical Officer',
    company: 'Global Health Systems',
    quote: 'The depth of research and quality of insights have been instrumental in shaping our strategic initiatives. Their reports consistently deliver actionable intelligence that drives real business value.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'VP of Strategy',
    company: 'MedTech Innovations',
    quote: 'Outstanding market analysis that goes beyond surface-level data. The comprehensive coverage and expert perspectives have become essential to our decision-making process.',
  },
  {
    id: 3,
    name: 'Dr. Emily Roberts',
    role: 'Director of Research',
    company: 'BioPharma Solutions',
    quote: 'Exceptional quality and timeliness. Their research team demonstrates deep industry knowledge and provides insights that are both comprehensive and highly relevant to our needs.',
  },
];

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

export default function TestimonialsSection() {
  return (
    <Section padding="lg">
      <Container size="xl">
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
              What our clients say about our research
            </p>
          </div>

          <Grid cols={3} gap="lg">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-lg font-semibold">
                        {getInitials(testimonial.name)}
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-base">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {testimonial.role}
                      </CardDescription>
                      <CardDescription className="text-sm">
                        {testimonial.company}
                      </CardDescription>
                    </div>
                  </div>

                  <CardDescription className="text-base leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </div>
      </Container>
    </Section>
  );
}
