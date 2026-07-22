import { MetadataRoute } from 'next';
import { SITE_CONFIG, PROGRAMS } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  // Base routes
  const routes = ['', '/tentang', '/program', '/gallery', '/kontak'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic program routes
  const programRoutes = PROGRAMS.map((program) => ({
    url: `${baseUrl}/program/${program.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...programRoutes];
}
