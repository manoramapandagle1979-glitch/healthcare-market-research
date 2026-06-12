import { NextResponse } from 'next/server';
import { apiFetch } from '@/lib/api/config';

export const revalidate = 3600;

const BASE_URL = 'https://www.healthcareforesights.com';
const ITEMS_PER_SITEMAP = 1000;

interface SitemapMeta {
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

export async function GET() {
  const now = new Date().toISOString();

  const [reportsTotalPages, blogsTotalPages, prTotalPages] = await Promise.all([
    getTotalPages('reports'),
    getTotalPages('blogs'),
    getTotalPages('press-releases'),
  ]);

  const entries: string[] = [
    `  <sitemap>\n    <loc>${BASE_URL}/sitemap-pages.xml</loc>\n    <lastmod>${now}</lastmod>\n  </sitemap>`,
    `  <sitemap>\n    <loc>${BASE_URL}/sitemap-consulting.xml</loc>\n    <lastmod>${now}</lastmod>\n  </sitemap>`,
    `  <sitemap>\n    <loc>${BASE_URL}/news-sitemap.xml</loc>\n    <lastmod>${now}</lastmod>\n  </sitemap>`,
  ];

  for (let i = 1; i <= reportsTotalPages; i++) {
    entries.push(`  <sitemap>\n    <loc>${BASE_URL}/sitemap-reports/${i}</loc>\n    <lastmod>${now}</lastmod>\n  </sitemap>`);
  }
  for (let i = 1; i <= blogsTotalPages; i++) {
    entries.push(`  <sitemap>\n    <loc>${BASE_URL}/sitemap-blogs/${i}</loc>\n    <lastmod>${now}</lastmod>\n  </sitemap>`);
  }
  for (let i = 1; i <= prTotalPages; i++) {
    entries.push(`  <sitemap>\n    <loc>${BASE_URL}/sitemap-press-releases/${i}</loc>\n    <lastmod>${now}</lastmod>\n  </sitemap>`);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
