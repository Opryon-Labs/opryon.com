'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const links = [
  { name: 'Work', href: '/#work' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  const bg = useTransform(scrollY, [0, 80], ['rgba(10,10,11,0)', 'rgba(10,10,11,0.85)']);
  const blur = useTransform(scrollY, [0, 80], ['blur(0px)', 'blur(10px)']);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed top-0 inset-x-0 z-[100]"
        style={{ backgroundColor: bg, backdropFilter: blur, WebkitBackdropFilter: blur }}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        // No preloader any more, so the header arrives immediately.
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between">
          <Link href="/" aria-label="Opryon Labs — home" className="shrink-0">
            <Image
              src="/logo.svg"
              alt="Opryon Labs"
              width={150}
              height={28}
              className="h-6 md:h-7 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav — visible, not hidden behind a hamburger.
              Hiding navigation on desktop costs clicks and buys nothing. */}
          <nav className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                className="relative text-sm text-bone-dim hover:text-bone transition-colors duration-300 group"
              >
                {l.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-clay group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="/#contact"
              className="text-sm text-ink bg-bone hover:bg-clay transition-colors duration-300 px-5 py-2.5"
            >
              Start a project
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 relative z-[110]"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <motion.span
              className="w-7 h-px bg-bone block"
              animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="w-7 h-px bg-bone block"
              animate={open ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="w-7 h-px bg-bone block"
              animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
        <div className="rule-fade" />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] bg-ink md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col justify-center h-full px-8 gap-2">
              {[...links, { name: 'Start a project', href: '/#contact' }].map(
                (l, i) => (
                  <motion.div
                    key={l.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block font-display text-4xl text-bone py-3 border-b border-ink-line"
                    >
                      {l.name}
                    </Link>
                  </motion.div>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
