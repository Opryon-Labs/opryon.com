'use client';

import Reveal from './Reveal';
import Eyebrow from './Eyebrow';
import { fit } from '@/lib/site-content';

/**
 * Self-qualification block.
 *
 * The "no" column is the entire point. A "who we're for" list on its own
 * is flattery — nobody self-selects out of "you value quality". The list
 * of people we turn away is what makes the first list believable.
 */
export default function FitCheck() {
  return (
    <section className="py-24 lg:py-36 border-b border-ink-line">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <Reveal>
          <Eyebrow>Before you email us</Eyebrow>
          <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-bone mt-6 max-w-3xl">
            We&apos;re not right for everyone.{' '}
            <span className="italic text-clay">Here&apos;s how to tell.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px mt-16 bg-ink-line border border-ink-line">
          {/* Yes */}
          <Reveal className="bg-ink p-8 sm:p-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-clay">
              Probably a good fit
            </p>
            <ul className="mt-8 space-y-6">
              {fit.yes.map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="text-clay mt-0.5 shrink-0" aria-hidden>
                    ✓
                  </span>
                  <span className="text-[17px] leading-relaxed text-bone">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* No */}
          <Reveal delay={0.1} className="bg-ink p-8 sm:p-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-bone-faint">
              Probably not
            </p>
            <ul className="mt-8 space-y-6">
              {fit.no.map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="text-bone-faint mt-0.5 shrink-0" aria-hidden>
                    ✕
                  </span>
                  <span className="text-[17px] leading-relaxed text-bone-dim">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <p className="mt-10 text-[15px] text-bone-faint max-w-xl">
            If you&apos;re in the right-hand column, no hard feelings — we&apos;d
            rather you know now than four weeks in.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
