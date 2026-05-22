import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts, formatDate } from '@/lib/blog';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://www.opryon.com/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Opryon Labs`,
      description: post.description,
      url: `https://www.opryon.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Opryon Labs'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

function renderContent(content: string): React.ReactNode[] {
  const lines = content.trim().split('\n');
  const nodes: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) {
      i++;
      continue;
    }

    if (line.startsWith('## ')) {
      nodes.push(
        <h2 key={i} className="text-2xl md:text-3xl font-bold mt-12 mb-4 text-foreground">
          {line.replace('## ', '')}
        </h2>
      );
    } else if (line.startsWith('**') && line.endsWith('**')) {
      nodes.push(
        <p key={i} className="font-semibold text-foreground mt-6 mb-2">
          {line.replace(/\*\*/g, '')}
        </p>
      );
    } else if (line.startsWith('- ')) {
      nodes.push(
        <li key={i} className="text-neutral leading-relaxed ml-4 list-disc">
          {renderInline(line.replace('- ', ''))}
        </li>
      );
    } else {
      nodes.push(
        <p key={i} className="text-neutral leading-relaxed mb-4">
          {renderInline(line)}
        </p>
      );
    }

    i++;
  }

  return nodes;
}

function renderInline(text: string): React.ReactNode {
  // Handle [text](url) links
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const isExternal = match[2].startsWith('http') || match[2].startsWith('mailto');
    parts.push(
      <a
        key={match.index}
        href={match[2]}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="text-primary hover:underline"
      >
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const allPosts = getAllPosts().filter((p) => p.slug !== slug);
  const related = allPosts.slice(0, 2);

  // JSON-LD for the article
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Opryon Labs',
      url: 'https://www.opryon.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Opryon Labs',
      logo: 'https://www.opryon.com/logo-square.png',
    },
    url: `https://www.opryon.com/blog/${post.slug}`,
    keywords: post.tags.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-background">
        {/* Article Header */}
        <div className="border-b border-neutral-dark/20 py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6 sm:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-neutral/50 font-mono mb-8">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-neutral/30 truncate">{post.title}</span>
            </div>

            <div className="flex items-center gap-3 mb-6">
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

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-neutral leading-relaxed">{post.description}</p>

            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-neutral/50 font-mono border border-neutral-dark/20 px-2 py-0.5 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Article Body */}
        <article className="max-w-3xl mx-auto px-6 sm:px-8 py-16">
          <div className="prose-opryon">{renderContent(post.content)}</div>
        </article>

        {/* Author */}
        <div className="max-w-3xl mx-auto px-6 sm:px-8 pb-16">
          <div className="border border-neutral-dark/20 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg flex-shrink-0">
              O
            </div>
            <div>
              <p className="font-semibold text-foreground">Opryon Labs</p>
              <p className="text-neutral text-sm mt-1">
                Engineering team building AI-powered applications and web solutions. Based in Roorkee, India.{' '}
                <Link href="/" className="text-primary hover:underline">
                  See our work →
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="border-t border-neutral-dark/20 py-16">
            <div className="max-w-3xl mx-auto px-6 sm:px-8">
              <h3 className="text-xl font-bold mb-8 text-neutral/50 uppercase tracking-wider text-sm font-mono">
                More from the blog
              </h3>
              <div className="space-y-6">
                {related.map((relPost) => (
                  <Link key={relPost.slug} href={`/blog/${relPost.slug}`} className="group block">
                    <p className="text-xs text-neutral/40 font-mono mb-1">
                      {relPost.category} · {formatDate(relPost.date)}
                    </p>
                    <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {relPost.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
