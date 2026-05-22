import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Opryon Labs is an engineering team based in Roorkee, India. Founded by Asmit Tyagi in 2024, we build AI-powered applications and SaaS products — GymPilot, AstraBill, and FuelPulse.',
  alternates: {
    canonical: 'https://www.opryon.com/about',
  },
  openGraph: {
    title: 'About Opryon Labs',
    description:
      'Engineering team based in Roorkee, India. Founded by Asmit Tyagi in 2024, building AI-powered apps and SaaS products.',
    url: 'https://www.opryon.com/about',
  },
};

const products = [
  {
    name: 'GymPilot',
    description: 'Gym management + WhatsApp automation for Indian fitness businesses',
    url: 'https://thegympilot.com',
    accent: '#00f0ff',
  },
  {
    name: 'AstraBill',
    description: 'Billing and expense management built for Indian SMBs',
    url: 'https://astrabill.com',
    accent: '#00ff88',
  },
  {
    name: 'FuelPulse',
    description: 'AI nutrition tracker that understands Indian food',
    url: 'https://fuelpulse.in',
    accent: '#a855f7',
  },
];

const values = [
  {
    title: 'Build to ship',
    description:
      'We believe in putting things in users\' hands fast. Perfection is the enemy of shipped. We iterate from real feedback, not hypothetical edge cases.',
  },
  {
    title: 'Quality over quantity',
    description:
      'We take on a small number of projects at a time. We\'d rather do fewer things exceptionally than many things adequately.',
  },
  {
    title: 'Honest engineering',
    description:
      'We tell clients when something is a bad idea. We use the right tool for the job, not the most impressive-sounding one. We write code other people can read.',
  },
  {
    title: 'Built for India',
    description:
      'Our products are designed for how India actually works — UPI payments, WhatsApp communication, Hindi language support, and pricing that makes sense for Indian businesses.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-neutral-dark/20 py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <p className="text-sm uppercase tracking-wider text-primary mb-4 font-mono">About</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            We are{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #00f0ff 0%, #00ff88 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Opryon Labs
            </span>
          </h1>
          <p className="text-xl text-neutral max-w-2xl leading-relaxed">
            An engineering team based in Roorkee, India. We design, build, and ship AI-powered
            applications and SaaS products. We&apos;ve been tinkering since 2024.
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-20">
        <div className="space-y-6 text-lg text-neutral leading-relaxed">
          <p>
            Opryon Labs started as a question: <em className="text-foreground">what if a small engineering team could build the kind of software that actually solves problems for Indian businesses?</em>
          </p>
          <p>
            Most enterprise software is built for Fortune 500 companies in San Francisco. It&apos;s expensive, over-engineered, and completely ignores how businesses in India actually operate — with UPI instead of credit cards, WhatsApp instead of email, and GST instead of simple sales tax.
          </p>
          <p>
            We started building products that fill those gaps. GymPilot for gym owners. AstraBill for small business billing. FuelPulse for fitness tracking with Indian food. Each one designed from scratch for the Indian context, not ported from a Western template.
          </p>
          <p>
            We also work with a small number of clients each quarter — startups and businesses that need an engineering team to build their product. If that&apos;s you,{' '}
            <Link href="mailto:info@opryon.com" className="text-primary hover:underline">
              let&apos;s talk
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Founder */}
      <div className="bg-bg-elevated border-y border-neutral-dark/20 py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs text-neutral/50 font-mono uppercase tracking-wider mb-4">
                Founder
              </p>
              <h2 className="text-3xl font-bold mb-4">Asmit Tyagi</h2>
              <p className="text-neutral leading-relaxed mb-4">
                Full-stack developer and founder of Opryon Labs. Based in Roorkee, Uttarakhand. Builds
                with Next.js, React, Node.js, and TypeScript. Interested in the intersection of AI and
                everyday product design.
              </p>
              <p className="text-neutral leading-relaxed mb-6">
                Previously worked on MERN stack projects and automation tooling before founding Opryon
                Labs in 2024 to build products for Indian businesses.
              </p>
              <Link
                href="https://asmittyagi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary border border-primary/30 hover:border-primary hover:bg-primary/5 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
              >
                Visit asmittyagi.com ↗
              </Link>
            </div>
            <div className="flex justify-center md:justify-end">
              <div
                className="w-48 h-48 rounded-2xl border border-neutral-dark/20 flex items-center justify-center"
                style={{
                  background:
                    'radial-gradient(circle at center, rgba(0, 240, 255, 0.08) 0%, transparent 70%)',
                }}
              >
                <span className="text-6xl font-bold text-primary/20 font-mono">AT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20">
        <h2 className="text-3xl font-bold mb-10">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-bg-card border border-neutral-dark/20 hover:border-primary/30 rounded-2xl p-6 transition-all duration-300 block"
            >
              <h3
                className="text-xl font-bold mb-2 transition-colors"
                style={{ color: product.accent }}
              >
                {product.name} ↗
              </h3>
              <p className="text-neutral text-sm leading-relaxed">{product.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="bg-bg-elevated border-y border-neutral-dark/20 py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl font-bold mb-12">How we operate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <div key={value.title} className="flex gap-4">
                <span className="text-primary/30 font-mono text-sm mt-1 flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-neutral text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location + Contact */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Where we are</h2>
            <p className="text-neutral leading-relaxed">
              Opryon Labs is based in{' '}
              <strong className="text-foreground">Roorkee, Uttarakhand, India</strong>. We work
              remotely with clients across India and internationally.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
            <div className="space-y-2">
              <p>
                <Link
                  href="mailto:info@opryon.com"
                  className="text-primary hover:underline font-mono"
                >
                  info@opryon.com
                </Link>
              </p>
              <p>
                <Link
                  href="https://x.com/opryonlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-mono"
                >
                  @opryonlabs on X
                </Link>
              </p>
              <p>
                <Link
                  href="https://www.linkedin.com/company/opryon-labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-mono"
                >
                  LinkedIn
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
