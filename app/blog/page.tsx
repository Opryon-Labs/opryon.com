import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, formatDate } from '@/lib/blog';
import Header from '@/components/sections/v2/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Engineering notes, case studies, and product stories from Opryon Labs. Read how we built GymPilot, our take on Next.js, and AI for Indian SMBs.',
  alternates: {
    canonical: 'https://www.opryon.com/blog',
  },
  openGraph: {
    title: 'Blog | Opryon Labs',
    description: 'Engineering notes, case studies, and product stories from Opryon Labs.',
    url: 'https://www.opryon.com/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="grain bg-ink text-bone">
      <Header />
      <main>
        {/* Hero */}
        <div className="border-b border-ink-line pt-40 pb-16 md:pt-48 md:pb-20">
          <div className="max-w-3xl mx-auto px-6 sm:px-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-faint mb-6">
              Blog
            </p>
            <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-[-0.02em] text-bone mb-8">
              Engineering notes.
            </h1>
            <p className="text-lg sm:text-xl text-bone-dim max-w-2xl leading-relaxed">
              Case studies, product stories, and engineering deep-dives from the Opryon Labs team.
            </p>
          </div>
        </div>

        {/* Posts */}
        <div className="max-w-3xl mx-auto px-6 sm:px-10 py-16 lg:py-20">
          {posts.map((post) => (
            <article key={post.slug} className="border-t border-ink-line py-10 group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-clay">
                    {post.category}
                  </span>
                  <span className="text-bone-faint text-xs font-mono">
                    {formatDate(post.date)} · {post.readTime}
                  </span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-bone group-hover:text-clay transition-colors duration-300 mb-3 leading-tight">
                  {post.title}
                </h2>
                <p className="text-bone-dim leading-relaxed mb-4">{post.description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-bone group-hover:text-clay font-medium transition-colors duration-300">
                    Read article
                  </span>
                  <span className="text-bone group-hover:text-clay transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-bone-faint font-mono border border-ink-line px-2 py-0.5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
          <div className="border-t border-ink-line" />
        </div>

        {/* Footer CTA */}
        <div className="border-t border-ink-line py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
            <p className="text-bone-dim mb-4">Want to work with us?</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-bone border border-ink-line hover:border-clay hover:text-clay px-6 py-3 transition-colors duration-300"
            >
              See what we build ↗
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
