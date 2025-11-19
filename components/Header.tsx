'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const navigationLinks = [
  { name: 'Home', id: 'hero' },
  { name: 'What We Do', id: 'services' },
  { name: 'How We Do It', id: 'process' },
  { name: 'Why Choose Us', id: 'why-choose-us' },
  { name: 'Our Work', id: 'work' },
  { name: 'Contact', id: 'contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Add backdrop blur when scrolled
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(12px)']
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
    <motion.header
      className="fixed top-0 left-0 right-0 z-100 border-b border-transparent"
      style={{
        backgroundColor: headerBackground,
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 3.2 }}
    >
      <div className="max-w-screen-2xl mx-auto px-8 md:px-12 py-6 flex items-center justify-between">
        {/* Logo - Left */}
        <motion.div
          className="cursor-pointer group relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src="/logo.svg"
            alt="Opryon Labs"
            width={160}
            height={30}
            className="h-6 md:h-7 lg:h-8 w-auto transition-all group-hover:brightness-110"
            priority
          />
          {/* Subtle underline accent */}
          <motion.div
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-px bg-linear-to-r from-transparent via-primary to-transparent"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Hamburger menu - Right */}
        <motion.button
          className="flex flex-col gap-1.5 group cursor-pointer relative z-100"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <motion.span
            className="w-8 h-0.5 bg-foreground transition-all group-hover:bg-yellow-400"
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="w-8 h-0.5 bg-foreground transition-all group-hover:bg-yellow-400"
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="w-8 h-0.5 bg-foreground transition-all group-hover:bg-yellow-400"
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          />
        </motion.button>
      </div>

    </motion.header>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-90 flex items-center justify-center"
            style={{
              backgroundColor: '#0a0a0a',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-6 md:gap-8 w-full px-8 md:px-16 lg:px-24 mt-24">
              {navigationLinks.map((link, index) => {
                const isEven = index % 2 === 1; // Even position items go right
                return (
                  <motion.button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`text-xl md:text-3xl lg:text-4xl font-light hover:font-semibold relative group w-full py-4 transition-all duration-300 cursor-pointer ${
                      isEven ? 'text-right' : 'text-left'
                    }`}
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: isEven ? 50 : -50 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    {link.name}
                    {/* Full-width yellow underline - left to right on hover */}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-yellow-400 group-hover:w-full transition-all duration-500 ease-out" />
                  </motion.button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
