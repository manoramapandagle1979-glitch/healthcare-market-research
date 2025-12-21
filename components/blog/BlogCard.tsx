import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, Badge } from "@/components/ui";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export function BlogCard({
  slug,
  title,
  excerpt,
  category,
  author,
  date,
  readTime,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <Card hover className="h-full">
        <CardHeader>
          <div className="mb-3">
            <Badge variant="default">{category}</Badge>
          </div>
          <CardTitle className="line-clamp-2">{title}</CardTitle>
          <CardDescription className="line-clamp-3 mt-2">
            {excerpt}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center justify-between text-sm text-[var(--muted-foreground)]">
          <span className="font-medium">{author}</span>
          <div className="flex items-center gap-2">
            <span>{readTime}</span>
            <span>•</span>
            <time>{date}</time>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
