import { Section, Container, Grid, Skeleton } from "@/components/ui";

export default function ReportsLoading() {
  return (
    <Section>
      <Container>
        <div className="mb-12">
          <Skeleton className="h-12 w-80 mb-4" />
          <Skeleton className="h-6 w-[500px]" />
        </div>

        <Grid cols={3}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-lg border border-[var(--border)] bg-[var(--card)] overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-6 w-20" />
                </div>
                <Skeleton className="h-8 w-full mb-3" />
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-6 w-3/4 mb-4" />
                <div className="flex items-center gap-3 mb-4">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-28" />
                </div>
              </div>
              <div className="border-t border-[var(--border)] bg-[var(--muted)] px-6 py-4">
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
