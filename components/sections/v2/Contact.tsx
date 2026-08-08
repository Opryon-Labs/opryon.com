'use client';

import Link from 'next/link';
import Reveal from './Reveal';
import { cta } from '@/lib/site-content';

export default function Contact() {
  return (
    <section id="contact" className="py-28 lg:py-40">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <Reveal>
          <h2 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.98] tracking-[-0.02em] text-bone max-w-4xl">
            {cta.headline}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 text-lg sm:text-xl leading-relaxed text-bone-dim max-w-xl">
            {cta.body}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5">
            <Link
              href={`mailto:${cta.email}`}
              className="group font-display text-2xl sm:text-4xl text-bone hover:text-clay transition-colors duration-300"
            >
              {cta.email}
              <span className="block h-px w-full bg-ink-line group-hover:bg-clay transition-colors duration-300 mt-2" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-14 font-mono text-[11px] uppercase tracking-[0.16em] text-bone-faint">
            {cta.signature}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
