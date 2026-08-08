import type { Metadata } from 'next';
import Header from '@/components/sections/v2/Header';
import Work from '@/components/sections/v2/Work';
import Contact from '@/components/sections/v2/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'Products built and run by Opryon Labs — GymPilot, AstraBill, FuelPulse — plus client work under NDA in fleet compliance and document automation.',
  alternates: {
    canonical: 'https://www.opryon.com/work',
  },
  openGraph: {
    title: 'Our Work | Opryon Labs',
    description:
      'Products built and run by Opryon Labs — GymPilot, AstraBill, FuelPulse, and client work under NDA.',
    url: 'https://www.opryon.com/work',
  },
};

export default function WorkPage() {
  return (
    <div className="grain bg-ink text-bone">
      <Header />
      <main>
        {/* Hero */}
        <div className="border-b border-ink-line pt-40 pb-16 md:pt-48 md:pb-20">
          <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-faint mb-6">
              Our work
            </p>
            <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-[-0.02em] text-bone mb-8">
              Products we&apos;ve <span className="italic text-clay">shipped</span>.
            </h1>
            <p className="text-lg sm:text-xl text-bone-dim max-w-2xl leading-relaxed">
              From idea to production — real products solving real problems for real people in
              India and beyond.
            </p>
          </div>
        </div>

        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
