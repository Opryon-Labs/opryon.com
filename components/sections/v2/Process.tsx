'use client';

import Reveal from './Reveal';
import Eyebrow from './Eyebrow';
import { process } from '@/lib/site-content';

export default function Process() {
  return (
    <section className="py-24 lg:py-36 border-b border-ink-line">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>How we work</Eyebrow>
              <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.02] tracking-[-0.02em] text-bone mt-6">
                Four stages. The last one is the one nobody else mentions.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8 lg:pl-8">
            {process.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.06}>
                <div className="grid grid-cols-[auto_1fr] gap-6 sm:gap-10 py-9 border-t border-ink-line">
                  <span className="font-mono text-[11px] text-bone-faint pt-1.5">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl text-bone leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[16px] leading-relaxed text-bone-dim max-w-2xl">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-ink-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
