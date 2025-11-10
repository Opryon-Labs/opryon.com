'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Container, Section, Button } from '@/components/ui';
import ContactForm from './ContactForm';

export default function CTA() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  return (
    <Section id="contact" className="bg-background">
      <Container size={isExpanded ? 'lg' : 'md'}>
        <motion.div
          className="p-12 md:p-16 rounded-3xl bg-bg-card border border-neutral-dark/20 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          layout
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
              style={{ background: 'radial-gradient(circle, #00f0ff 0%, transparent 70%)' }}
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
              style={{ background: 'radial-gradient(circle, #00ff88 0%, transparent 70%)' }}
              animate={{
                scale: [1.2, 1, 1.2],
                x: [0, -30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          <motion.div
            layout
            className={`grid ${isExpanded ? 'grid-cols-1 lg:grid-cols-2 gap-12' : 'grid-cols-1'}`}
          >
            {/* Left side - Content */}
            <motion.div layout className={isExpanded ? 'text-left' : 'text-center'}>
              <motion.h2
                layout="position"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Ready to Create Magic?
              </motion.h2>

              <motion.p
                layout="position"
                className={`text-lg md:text-xl text-neutral mb-8 ${!isExpanded ? 'max-w-2xl mx-auto' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Let&apos;s build something amazing together. Get in touch and bring your vision to life.
              </motion.p>

              <AnimatePresence mode="wait">
                {!isExpanded && (
                  <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button variant="primary" size="lg" onClick={handleExpand} data-expand-form>
                      Start a Project
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Right side - Form (shows when expanded) */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ContactForm />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
