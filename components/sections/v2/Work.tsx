'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';
import Eyebrow from './Eyebrow';
import { ownProducts, clientWork, type Project } from '@/lib/site-content';

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={index * 0.06}>
      <div className="group border-t border-ink-line">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-10 lg:py-12">
          {/* Name + kind */}
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-3 flex-wrap">
              <h3 className="font-display text-3xl sm:text-4xl text-bone leading-none">
                {project.name}
              </h3>
              {project.confidential && (
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-bone-faint border border-ink-line px-2 py-1">
                  NDA
                </span>
              )}
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-clay mt-3">
              {project.kind}
              {project.region && (
                <span className="text-bone-faint"> · {project.region}</span>
              )}
            </p>
          </div>

          {/* Summary + expandable detail */}
          <div className="lg:col-span-6">
            <p className="text-[17px] leading-relaxed text-bone-dim">
              {project.summary}
            </p>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-bone-faint hover:text-bone transition-colors"
            >
              <span
                className={`inline-block transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
              >
                +
              </span>
              {project.hardPart.label}
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pt-5 pl-4 border-l border-clay/40 text-[15px] leading-relaxed text-bone-dim max-w-2xl">
                    {project.hardPart.detail}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <ul className="flex flex-wrap gap-x-4 gap-y-1 mt-6">
              {project.stack.map((t) => (
                <li
                  key={t}
                  className="font-mono text-[11px] text-bone-faint"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* The differentiator: it's live, go check */}
          <div className="lg:col-span-2 lg:text-right">
            {project.href ? (
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-bone hover:text-clay transition-colors"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-clay opacity-60 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-clay" />
                </span>
                {project.hrefLabel}
                <span aria-hidden>↗</span>
              </Link>
            ) : (
              <p className="text-sm text-bone-faint">
                Details on request
              </p>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-24 lg:py-36 border-b border-ink-line">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <Reveal>
          <Eyebrow>Our own products</Eyebrow>
          <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-bone mt-6 max-w-3xl">
            Most studios have never had to keep something alive after
            launch. <span className="italic text-clay">We have three.</span>
          </h2>
          <p className="text-[17px] leading-relaxed text-bone-dim mt-6 max-w-xl">
            These aren&apos;t case studies we wrote about ourselves. They&apos;re
            running products with real users, and we&apos;re the ones who get
            called when they break.
          </p>
        </Reveal>

        <div className="mt-16">
          {ownProducts.map((p, i) => (
            <ProjectRow key={p.name} project={p} index={i} />
          ))}
          <div className="border-t border-ink-line" />
        </div>

        {/* Client work */}
        <Reveal>
          <div className="mt-28">
            <Eyebrow>Client work</Eyebrow>
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] tracking-[-0.02em] text-bone mt-6 max-w-3xl">
              Some of what we build, we can&apos;t show you.
            </h2>
            <p className="text-[17px] leading-relaxed text-bone-dim mt-6 max-w-xl">
              Two of our builds sit behind NDAs. Here&apos;s what we can say
              about the problems, since the problem is the interesting part
              anyway.
            </p>
          </div>
        </Reveal>

        <div className="mt-16">
          {clientWork.map((p, i) => (
            <ProjectRow key={p.name} project={p} index={i} />
          ))}
          <div className="border-t border-ink-line" />
        </div>
      </div>
    </section>
  );
}
