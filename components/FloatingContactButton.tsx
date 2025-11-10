'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function FloatingContactButton() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Initial load delay (after preloader)
    const loadTimer = setTimeout(() => {
      setHasLoaded(true);
    }, 3500);

    const checkVisibility = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Hide button when contact section is in view (with some margin)
        const isContactVisible = rect.top < windowHeight * 0.8 && rect.bottom > 0;
        setIsVisible(!isContactVisible);
      }
    };

    // Check on scroll
    const handleScroll = () => {
      checkVisibility();
    };

    window.addEventListener('scroll', handleScroll);
    checkVisibility(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(loadTimer);
    };
  }, []);

  const handleClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Trigger form expansion after scroll
      setTimeout(() => {
        const startProjectBtn = document.querySelector('[data-expand-form]') as HTMLButtonElement;
        if (startProjectBtn) {
          startProjectBtn.click();
        }
      }, 800);
    }
  };

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-12 relative h-0">
        <motion.button
          onClick={handleClick}
          className="absolute bottom-0 right-0 px-5 py-2.5 rounded-full font-medium text-sm text-background bg-linear-to-r from-primary to-accent transition-all group overflow-visible pointer-events-auto"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: hasLoaded && isVisible ? 1 : 0,
            scale: hasLoaded && isVisible ? 1 : 0.8,
            y: hasLoaded && isVisible ? 0 : 20,
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          whileHover={hasLoaded && isVisible ? { scale: 1.05, y: -2 } : {}}
          whileTap={hasLoaded && isVisible ? { scale: 0.95 } : {}}
          style={{
            boxShadow: '0 4px 20px rgba(0, 240, 255, 0.3)',
            pointerEvents: hasLoaded && isVisible ? 'auto' : 'none',
          }}
        >
        {/* Breathing glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-linear-to-r from-primary to-accent blur-md"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            zIndex: -1,
          }}
        />

        {/* Button text */}
        <span className="relative flex items-center gap-2">
          Contact Us
          <motion.span
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            →
          </motion.span>
        </span>
        </motion.button>
      </div>
    </div>
  );
}
