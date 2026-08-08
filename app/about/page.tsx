import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/sections/v2/Header';
import Footer from '@/components/Footer';

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
  },
  {
    name: 'AstraBill',
    description: 'Billing and expense management built for Indian SMBs',
    url: 'https://astrabill.com',
  },
  {
    name: 'FuelPulse',
    description: 'AI nutrition tracker that understands Indian food',
    url: 'https://fuelpulse.in',
  },
];

const values = [
  {
    n: '01',
    title: 'Build to ship',
    description:
      "We believe in putting things in users' hands fast. Perfection is the enemy of shipped. We iterate from real feedback, not hypothetical edge cases.",
  },
  {
    n: '02',
    title: 'Quality over quantity',
    description:
      "We take on a small number of projects at a time. We'd rather do fewer things exceptionally than many things adequately.",
  },
  {
    n: '03',
    title: 'Honest engineering',
    description:
      'We tell clients when something is a bad idea. We use the right tool for the job, not the most impressive-sounding one. We write code other people can read.',
  },
  {
    n: '04',
    title: 'Built for India',
    description:
      'Our products are designed for how India actually works — UPI payments, WhatsApp communication, Hindi language support, and pricing that makes sense for Indian businesses.',
  },
];

export default function AboutPage() {
  return (
    <div className="grain bg-ink text-bone">
      <Header />
      <main>
        {/* Hero */}
        <div className="border-b border-ink-line pt-40 pb-20 md:pt-48 md:pb-28">
          <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-faint mb-6">
              About
            </p>
            <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-[-0.02em] text-bone mb-8">
              We are <span className="italic text-clay">Opryon Labs</span>.
            </h1>
            <p className="text-lg sm:text-xl text-bone-dim max-w-2xl leading-relaxed">
              An engineering team based in Roorkee, India. We design, build, and ship AI-powered
              applications and SaaS products. We&apos;ve been tinkering since 2024.
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="max-w-3xl mx-auto px-6 sm:px-10 py-20 lg:py-28">
          <div className="space-y-6 text-lg text-bone-dim leading-relaxed">
            <p>
              Opryon Labs started as a question:{' '}
              <em className="text-bone not-italic font-medium">
                what if a small engineering team could build the kind of software that actually
                solves problems for Indian businesses?
              </em>
            </p>
            <p>
              Most enterprise software is built for Fortune 500 companies in San Francisco. It&apos;s
              expensive, over-engineered, and completely ignores how businesses in India actually
              operate — with UPI instead of credit cards, WhatsApp instead of email, and GST
              instead of simple sales tax.
            </p>
            <p>
              We started building products that fill those gaps. GymPilot for gym owners.
              AstraBill for small business billing. FuelPulse for fitness tracking with Indian
              food. Each one designed from scratch for the Indian context, not ported from a
              Western template.
            </p>
            <p>
              We also work with a small number of clients each quarter — startups and businesses
              that need an engineering team to build their product. If that&apos;s you,{' '}
              <Link href="mailto:info@opryon.com" className="text-clay hover:underline">
                let&apos;s talk
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Founder */}
        <div className="bg-ink-raised border-y border-ink-line py-16 lg:py-24">
          <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-faint mb-4">
                  Founder
                </p>
                <h2 className="font-display text-3xl sm:text-4xl text-bone mb-4">Asmit Tyagi</h2>
                <p className="text-bone-dim leading-relaxed mb-4">
                  Full-stack developer and founder of Opryon Labs. Based in Roorkee, Uttarakhand.
                  Builds with Next.js, React, Node.js, and TypeScript. Interested in the
                  intersection of AI and everyday product design.
                </p>
                <p className="text-bone-dim leading-relaxed mb-6">
                  Previously worked on MERN stack projects and automation tooling before founding
                  Opryon Labs in 2024 to build products for Indian businesses.
                </p>
                <Link
                  href="https://asmittyagi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-bone border border-ink-line hover:border-clay hover:text-clay px-5 py-2.5 transition-colors duration-300"
                >
                  Visit asmittyagi.com ↗
                </Link>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="w-48 h-48 border border-ink-line flex items-center justify-center bg-ink">
                  <span className="font-display text-6xl text-clay/30">AT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-faint mb-6">
            Our products
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-line border border-ink-line">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-ink hover:bg-ink-raised p-6 sm:p-8 transition-colors duration-300 block"
              >
                <h3 className="font-display text-2xl text-bone group-hover:text-clay transition-colors duration-300 mb-2">
                  {product.name} ↗
                </h3>
                <p className="text-bone-dim text-sm leading-relaxed">{product.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="bg-ink-raised border-y border-ink-line py-20 lg:py-28">
          <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-faint mb-10">
              How we operate
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="grid grid-cols-[auto_1fr] gap-6 py-8 border-t border-ink-line"
                >
                  <span className="font-mono text-[11px] text-bone-faint pt-1.5">{value.n}</span>
                  <div>
                    <h3 className="text-lg text-bone mb-2">{value.title}</h3>
                    <p className="text-bone-dim text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Location + Contact */}
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl text-bone mb-4">Where we are</h2>
              <p className="text-bone-dim leading-relaxed">
                Opryon Labs is based in{' '}
                <strong className="text-bone font-medium">Roorkee, Uttarakhand, India</strong>. We
                work remotely with clients across India and internationally.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-bone mb-4">Get in touch</h2>
              <div className="space-y-2">
                <p>
                  <Link
                    href="mailto:info@opryon.com"
                    className="text-clay hover:underline font-mono text-sm"
                  >
                    info@opryon.com
                  </Link>
                </p>
                <p>
                  <Link
                    href="https://x.com/opryonlabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-clay hover:underline font-mono text-sm"
                  >
                    @opryonlabs on X
                  </Link>
                </p>
                <p>
                  <Link
                    href="https://www.linkedin.com/company/opryon-labs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-clay hover:underline font-mono text-sm"
                  >
                    LinkedIn
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
