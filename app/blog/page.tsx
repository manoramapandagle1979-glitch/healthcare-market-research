import { Section, Container, Grid } from "@/components/ui";
import { BlogCard } from "@/components/blog/BlogCard";
import blogs from "@/data/blogs.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Insights & Analysis | Blog",
  description: "Expert insights, analysis, and updates on healthcare market trends, innovations, and industry developments from our team of healthcare specialists.",
};

export default function BlogPage() {
  return (
    <Section>
      <Container>
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Insights & Analysis</h1>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl">
            Expert perspectives on healthcare market trends, emerging technologies, and industry transformations.
          </p>
        </div>

        <Grid cols={3}>
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              slug={blog.slug}
              title={blog.title}
              excerpt={blog.excerpt}
              category={blog.category}
              author={blog.author}
              date={blog.date}
              readTime={blog.readTime}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
