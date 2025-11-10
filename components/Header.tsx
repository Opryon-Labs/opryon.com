'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function Header() {
  const { scrollY } = useScroll();

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

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent"
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
          className="cursor-pointer group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-foreground relative text-center">
            <div className="text-2xl md:text-3xl font-bold tracking-[0.15em] leading-none">
              OPRYON
            </div>
            <div className="text-xs md:text-sm font-light tracking-[0.3em] text-neutral mt-1 transition-colors group-hover:text-primary">
              LABS
            </div>
            {/* Subtle underline accent */}
            <motion.div
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Hamburger menu - Right */}
        <motion.button
          className="flex flex-col gap-1.5 group cursor-pointer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="w-8 h-0.5 bg-foreground transition-all group-hover:bg-primary" />
          <span className="w-8 h-0.5 bg-foreground transition-all group-hover:bg-primary" />
          <span className="w-8 h-0.5 bg-foreground transition-all group-hover:bg-primary" />
        </motion.button>
      </div>
    </motion.header>
  );
}
