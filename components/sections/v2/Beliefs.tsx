'use client';

import Reveal from './Reveal';
import Eyebrow from './Eyebrow';
import { beliefs } from '@/lib/site-content';

/**
 * These four lines were already written — they were buried on the About
 * page below the fold. They're the most human copy on the whole site,
 * so they get the largest type on the page.
 */
export default function Beliefs() {
  return (
    <section className="py-24 lg:py-36 border-b border-ink-line">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <Reveal>
          <Eyebrow>What we believe</Eyebrow>
        </Reveal>

        <div className="mt-14 max-w-5xl">
          {beliefs.map((line, i) => (
            <Reveal key={line} delay={i * 0.08}>
              <p className="font-display text-[clamp(1.75rem,4vw,3.25rem)] leading-[1.15] tracking-[-0.015em] text-bone py-5 border-b border-ink-line">
                <span className="font-mono text-[11px] align-super text-bone-faint mr-4">
                  0{i + 1}
                </span>
                {line}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-12 text-[17px] leading-relaxed text-bone-dim max-w-2xl">
            We build for how India actually works — UPI, WhatsApp, Hindi, GST,
            and pricing that isn&apos;t a US number converted into rupees. If
            you&apos;re building elsewhere, that same attention applies to
            wherever your users are.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
