import { NextResponse } from 'next/server';
import { apiFetch } from '@/lib/api/config';

const BASE_URL = 'https://www.healthcareforesights.com';
const ITEMS_PER_SITEMAP = 1000;

interface SitemapMeta {
  page: number;
  limit: number;
  total: number;
  total_pages: number;
}

async function getTotalPages(type: 'reports' | 'blogs' | 'press-releases'): Promise<number> {
  const res = await apiFetch<unknown>(`/api/v1/sitemap/${type}?page=1&limit=${ITEMS_PER_SITEMAP}`);
  if (!res.success) return 1;
  const meta = (res as unknown as { meta?: SitemapMeta }).meta;
  if (!meta?.total) return 1;
  return Math.ceil(meta.total / ITEMS_PER_SITEMAP);
}

export const revalidate = 3600;

export async function GET() {
  const now = new Date().toISOString();

  const [reportsTotalPages, blogsTotalPages, prTotalPages] = await Promise.all([
    getTotalPages('reports'),
    getTotalPages('blogs'),
    getTotalPages('press-releases'),
  ]);

  const sitemaps: string[] = [
    `${BASE_URL}/sitemap-pages.xml`,
    `${BASE_URL}/sitemap-consulting.xml`,
    `${BASE_URL}/news-sitemap.xml`,
  ];

  for (let i = 1; i <= reportsTotalPages; i++) {
    sitemaps.push(`${BASE_URL}/sitemap-reports-${i}.xml`);
  }
  for (let i = 1; i <= blogsTotalPages; i++) {
    sitemaps.push(`${BASE_URL}/sitemap-blogs-${i}.xml`);
  }
  for (let i = 1; i <= prTotalPages; i++) {
    sitemaps.push(`${BASE_URL}/sitemap-press-releases-${i}.xml`);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (url) => `  <sitemap>
    <loc>${url}</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`
  )
  .join('\n')}
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
