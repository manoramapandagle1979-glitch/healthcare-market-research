import Link from "next/link";
import blogs from "@/data/blogs.json";

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Blog</h1>
        <p className="text-lg text-[var(--muted-foreground)]">
          Insights, updates, and analysis from our healthcare experts.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6"
          >
            <div className="mb-2 text-sm text-[var(--primary)]">{blog.category}</div>
            <h2 className="mb-3 text-xl font-semibold">
              <Link
                href={`/blog/${blog.slug}`}
                className="hover:text-[var(--primary)] transition-colors"
              >
                {blog.title}
              </Link>
            </h2>
            <p className="mb-4 text-[var(--muted-foreground)] line-clamp-3">
              {blog.excerpt}
            </p>
            <div className="flex items-center justify-between text-sm text-[var(--muted-foreground)]">
              <span>{blog.author}</span>
              <span>{blog.date}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
