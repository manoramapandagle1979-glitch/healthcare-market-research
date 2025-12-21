import { notFound } from "next/navigation";
import Link from "next/link";
import { Section, Container, Badge } from "@/components/ui";
import blogs from "@/data/blogs.json";
import type { Metadata } from "next";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${blog.title} | Healthcare Insights`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const paragraphs = blog.content.split("\n\n");

  return (
    <>
      <Section className="bg-[var(--muted)]">
        <Container size="sm">
          <div className="mb-6">
            <Link
              href="/blog"
              className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors inline-flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6"/>
              </svg>
              Back to Insights
            </Link>
          </div>

          <div className="mb-6">
            <Badge variant="default">{blog.category}</Badge>
          </div>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            {blog.title}
          </h1>

          <p className="text-xl text-[var(--muted-foreground)] mb-8 leading-relaxed">
            {blog.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--muted-foreground)] pb-8 border-b border-[var(--border)]">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white font-semibold">
                {blog.author.split(" ").map(n => n[0]).join("")}
              </div>
              <span className="font-medium text-[var(--foreground)]">{blog.author}</span>
            </div>
            <span>•</span>
            <time>{blog.date}</time>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="sm">
          <article className="prose prose-lg max-w-none">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="mb-6 text-[var(--foreground)] leading-relaxed text-lg"
              >
                {paragraph}
              </p>
            ))}
          </article>

          <div className="mt-12 pt-8 border-t border-[var(--border)]">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[var(--primary)] hover:underline font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6"/>
              </svg>
              View all insights
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
