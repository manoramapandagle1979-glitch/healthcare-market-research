import { NextResponse } from 'next/server';
import { getBlogs } from '@/lib/api/blogs';

export const revalidate = 3600;

const BASE_URL = 'https://www.healthcareforesights.com';
const ITEMS_PER_PAGE = 1000;

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ page: string }> }
) {
  const { page } = await params;
  const pageNum = parseInt(page, 10);

  if (isNaN(pageNum) || pageNum < 1) {
    return new NextResponse('Not found', { status: 404 });
  }

  try {
    const res = await getBlogs({ status: 'published', page: pageNum, limit: ITEMS_PER_PAGE });

    if (!res.success || !res.data?.length) {
      return new NextResponse('Not found', { status: 404 });
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${res.data
  .map(
    (blog) => `  <url>
    <loc>${BASE_URL}/blog/${blog.slug}</loc>
    <lastmod>${new Date(blog.publishDate || blog.updatedAt || Date.now()).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch {
    return new NextResponse('Error generating sitemap', { status: 500 });
  }
}
