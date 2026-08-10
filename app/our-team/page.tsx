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
import { getAuthors, isApiError } from "@/lib/api";

export const metadata: Metadata = {
  title: "Our Team | Healthcare Foresights",
  description:
    "Meet the analysts and consultants behind Healthcare Foresights' market research — specialists in digital health, pharmaceuticals, and medical devices.",
  keywords: ["healthcare foresights team", "healthcare research analysts", "healthcare consultants"],
  alternates: {
    canonical: "/our-team",
  },
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter((word) => word.length > 0)
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// IDs 2 ("Author 1") and 3 ("Test User 1") are leftover seed/test rows in the
// authors table, not real team members — exclude until cleaned up in the DB.
const TEST_AUTHOR_IDS = new Set([2, 3]);

export default async function OurTeamPage() {
  const response = await getAuthors({ limit: 100 });
  const authors = isApiError(response)
    ? []
    : response.data.filter((a) => !TEST_AUTHOR_IDS.has(a.id));

  return (
    <>
      <Section padding="lg" background="muted">
        <Container size="lg">
          <div className="text-center space-y-4">
            <Badge variant="primary" size="md">
              Our Team
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              The Analysts Behind Our Research
            </h1>
            <p className="text-lg text-[var(--muted-foreground)] max-w-3xl mx-auto">
              A multidisciplinary team of consultants and analysts combining clinical, technical,
              and market expertise to deliver research healthcare organizations can act on.
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="xl">
        <Container size="xl">
          <Grid cols={3} gap="lg">
            {authors.map((member) => (
              <Card key={member.id} className="h-full">
                <CardContent className="pt-6 space-y-4 flex flex-col h-full">
                  <div className="flex items-center gap-4">
                    {member.imageUrl ? (
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        width={56}
                        height={56}
                        className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-lg font-semibold flex-shrink-0">
                        {getInitials(member.name)}
                      </div>
                    )}
                    <div>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      {member.role && (
                        <CardDescription className="text-sm font-medium">
                          {member.role}
                        </CardDescription>
                      )}
                    </div>
                  </div>

                  {member.bio && (
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed whitespace-pre-line line-clamp-5">
                      {member.bio}
                    </p>
                  )}

                  {member.linkedinUrl && (
                    <Link
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--primary)] hover:underline mt-auto pt-2"
                    >
                      View LinkedIn Profile
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section background="muted" padding="xl">
        <Container size="md">
          <Card className="border-l-4 border-l-[var(--primary)]">
            <CardContent className="py-8">
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold">Want to Work With Our Team?</h2>
                <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
                  Connect with our analysts for a custom research engagement or a walkthrough of
                  our published reports.
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
