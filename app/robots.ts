import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: [''],
      },
    ],
    sitemap: [
      'https://www.healthcareforesights.com/sitemap.xml',
      'https://www.healthcareforesights.com/sitemap-pages.xml',
      'https://www.healthcareforesights.com/sitemap-consulting.xml',
      'https://www.healthcareforesights.com/news-sitemap.xml',
      'https://www.healthcareforesights.com/sitemap-reports-1.xml',
      'https://www.healthcareforesights.com/sitemap-blogs-1.xml',
      'https://www.healthcareforesights.com/sitemap-press-releases-1.xml',
    ],
  };
}
