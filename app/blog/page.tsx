import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, formatDate } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Engineering notes, case studies, and product stories from Opryon Labs. Read how we built GymPilot, our take on Next.js 15, and AI for Indian SMBs.',
  alternates: {
    canonical: 'https://www.opryon.com/blog',
  },
  openGraph: {
    title: 'Blog | Opryon Labs',
    description:
      'Engineering notes, case studies, and product stories from Opryon Labs.',
    url: 'https://www.opryon.com/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-neutral-dark/20 py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <p className="text-sm uppercase tracking-wider text-primary mb-4 font-mono">Blog</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Engineering Notes
          </h1>
          <p className="text-xl text-neutral max-w-2xl">
            Case studies, product stories, and engineering deep-dives from the Opryon Labs team.
          </p>
        </div>
      </div>

      {/* Posts */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16">
        <div className="space-y-0 divide-y divide-neutral-dark/20">
          {posts.map((post) => (
            <article key={post.slug} className="py-10 group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded text-primary"
                    style={{ background: 'rgba(0, 240, 255, 0.08)' }}
                  >
                    {post.category}
                  </span>
                  <span className="text-neutral/50 text-xs font-mono">
                    {formatDate(post.date)} · {post.readTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-neutral leading-relaxed mb-4">{post.description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-primary font-medium group-hover:underline">
                    Read article
                  </span>
                  <span className="text-primary transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-neutral/50 font-mono border border-neutral-dark/20 px-2 py-0.5 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="border-t border-neutral-dark/20 py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-neutral mb-4">Want to work with us?</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary border border-primary/30 hover:border-primary hover:bg-primary/5 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
          >
            See what we build ↗
          </Link>
        </div>
      </div>
    </div>
  );
}
