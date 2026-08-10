import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Section,
  Container,
  Grid,
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  Badge,
  Button,
} from "@/components/ui";
import testimonialsData from "@/data/testimonials.json";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
}

const testimonials: Testimonial[] = testimonialsData;

// Fixed shuffle of the 146 client logos (TH1-TH146), randomized once and
// then kept stable — not re-shuffled on every request/restart.
const LOGO_ORDER = [
  95, 44, 37, 121, 48, 23, 114, 59, 22, 2, 58, 5, 86, 111, 15, 84, 47, 21, 19, 3,
  40, 105, 61, 77, 106, 75, 74, 98, 113, 116, 7, 9, 72, 137, 32, 107, 45, 69, 112, 110,
  125, 52, 18, 42, 33, 118, 139, 11, 43, 97, 63, 108, 83, 102, 145, 129, 55, 49, 91, 1,
  99, 81, 54, 126, 87, 41, 71, 26, 131, 70, 127, 36, 128, 65, 6, 92, 101, 50, 117, 51,
  135, 120, 140, 25, 46, 57, 8, 100, 78, 122, 79, 39, 144, 76, 17, 109, 93, 134, 62, 103,
  64, 133, 34, 30, 14, 35, 13, 124, 88, 119, 132, 143, 27, 138, 68, 10, 136, 66, 94, 16,
  53, 67, 130, 73, 142, 80, 31, 115, 56, 60, 141, 104, 29, 90, 123, 4, 24, 12, 38, 146,
  20, 28, 89, 82, 96, 85,
];

const CLIENT_LOGOS = LOGO_ORDER.map((n) => `/assets/images/clients/TH${n}.webp`);

export const metadata: Metadata = {
  title: "Our Clients | Healthcare Foresights",
  description:
    "Organizations across healthcare, pharmaceuticals, and industry that rely on Healthcare Foresights for market research and strategic advisory.",
  keywords: ["healthcare foresights clients", "healthcare research clients", "client testimonials"],
  alternates: {
    canonical: "/our-clients",
  },
};

export default function OurClientsPage() {
  const logos = CLIENT_LOGOS;

  return (
    <>
      <Section padding="lg" background="muted">
        <Container size="lg">
          <div className="text-center space-y-4">
            <Badge variant="primary" size="md">
              Our Clients
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Trusted by Organizations Worldwide
            </h1>
            <p className="text-lg text-[var(--muted-foreground)] max-w-3xl mx-auto">
              Healthcare providers, pharmaceutical companies, and enterprises across the globe rely
              on our research to guide strategic decisions.
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="xl">
        <Container size="xl">
          <Grid cols={6} gap="md">
            {logos.map((src) => (
              <div
                key={src}
                className="flex items-center justify-center h-24 rounded-lg border border-[var(--border)] bg-white p-4"
              >
                <Image
                  src={src}
                  alt="Client logo"
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section background="muted" padding="xl">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
              Feedback from the teams we&apos;ve worked with
            </p>
          </div>

          <Grid cols={3} gap="lg">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full">
                <CardContent className="space-y-4 flex flex-col h-full">
                  <CardDescription className="text-base leading-relaxed flex-grow">
                    &ldquo;{testimonial.quote}&rdquo;
                  </CardDescription>
                  <div className="pt-4 border-t border-[var(--border)]">
                    <CardTitle className="text-sm">{testimonial.role}</CardTitle>
                    <CardDescription className="text-sm font-medium">
                      {testimonial.company} &middot; {testimonial.location}
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section padding="xl">
        <Container size="md">
          <Card className="border-l-4 border-l-[var(--primary)]">
            <CardContent className="py-8">
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold">Become Our Next Success Story</h2>
                <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
                  Join the organizations that trust Healthcare Foresights to drive their strategic
                  initiatives.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button variant="primary" size="lg">
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="/industry">
                    <Button variant="outline" size="lg">
                      Browse Reports
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </>
  );
}
