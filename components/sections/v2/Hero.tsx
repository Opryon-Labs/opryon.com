'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { hero, proofStrip } from '@/lib/site-content';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-[92svh] flex flex-col justify-center border-b border-ink-line pt-32 pb-16">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          {/* Left: the claim */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease }}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-faint mb-8"
            >
              {hero.eyebrow}
            </motion.p>

            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] tracking-[-0.02em] text-bone">
              {hero.headline.map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.1 + i * 0.12, ease }}
                  >
                    {i === 1 ? (
                      <>
                        Then we <span className="italic text-clay">run</span> it.
                      </>
                    ) : (
                      line
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>

          {/* Right: the payoff */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease }}
            className="lg:col-span-5 lg:pb-4"
          >
            <p className="text-lg sm:text-xl leading-relaxed text-bone-dim max-w-md">
              {hero.body}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-9">
              <Link
                href={hero.primaryCta.href}
                className="group inline-flex items-center gap-2 bg-bone text-ink px-6 py-3.5 text-sm font-medium hover:bg-clay transition-colors duration-300"
              >
                {hero.primaryCta.label}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center px-6 py-3.5 text-sm font-medium text-bone border border-ink-line hover:border-bone-faint transition-colors duration-300"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Proof strip — facts, not decoration. No invented percentages. */}
        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 mt-20 lg:mt-28 pt-10 border-t border-ink-line"
        >
          {proofStrip.map((item) => (
            <div key={item.label}>
              <dt className="font-display text-4xl sm:text-5xl text-bone leading-none">
                {item.value}
              </dt>
              <dd className="mt-3 text-[13px] leading-snug text-bone-faint max-w-[22ch]">
                {item.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
