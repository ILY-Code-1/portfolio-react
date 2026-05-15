import { siteConfig } from "@/data/siteConfig";
import { getPublishedPosts } from "@/data/posts";

export default function sitemap() {
  const base = siteConfig.url;
  const now = new Date().toISOString();

  const staticRoutes = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/proyek`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/produk/ilycorp`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/produk/ilyproject`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const posts = getPublishedPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.updatedAt || post.publishedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...posts];
}
