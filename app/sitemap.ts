import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.opryon.com';

  const posts = getAllPosts();

  const blogUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-05-01'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date('2026-05-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date('2026-05-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2026-05-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-05-01'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogUrls,
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
