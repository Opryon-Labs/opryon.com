'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container, Section } from '@/components/ui';
import FloatingObjects from '@/components/FloatingObjects';

// Scroll-aware 3D scene wrapper
function ScrollAware3DScene() {
  const { scrollY } = useScroll();
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setScrollOffset(latest);
    });
  }, [scrollY]);

  return <FloatingObjects scrollOffset={scrollOffset} />;
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax effects based on scroll
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.95]);

  // Split text animation variants
  // Delay 3 seconds to start AFTER preloader finishes (preloader = 2.5s)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 3.0, // Start after preloader
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const magicVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.8,
      filter: 'blur(20px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        delay: 3.5, // After "We create" animation
      },
    },
  };

  return (
    <Section
      id="hero"
      fullHeight
      className="flex items-center justify-center overflow-hidden relative"
    >
      {/* Top divider - Ray beam effect */}
      <div className="absolute top-0 left-0 right-0 h-px z-20">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary to-transparent opacity-50" />
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary to-transparent blur-sm opacity-30" />
      </div>

      {/* Bottom divider - Simple line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-dark/30 z-20" />

      {/* 3D Canvas - Full screen background with scroll parallax */}
      <div className="absolute inset-0 -z-10">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ alpha: true, antialias: true }}
          dpr={[1, 2]}
        >
          <Suspense fallback={null}>
            <ScrollAware3DScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Minimal dark gradient overlay for text readability */}
      <div className="absolute inset-0 -z-5 bg-linear-to-b from-background/50 via-background/30 to-background/50" />

      {/* Bottom gradient fade to show next section peek */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-background to-transparent z-0" />

      <Container>
        <motion.div
          ref={heroRef}
          className="text-center space-y-6 max-w-4xl mx-auto relative z-10"
          style={{
            opacity: heroOpacity,
            scale: heroScale,
          }}
        >
          {/* Artistic hero text with split animation */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="overflow-hidden"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-tight tracking-tight">
              {/* "We Create" - word by word animation */}
              <div className="flex justify-center gap-4 mb-2 text-3xl md:text-4xl lg:text-5xl">
                {['We', 'Create'].map((word, i) => (
                  <motion.span
                    key={i}
                    variants={wordVariants}
                    className="inline-block"
                    style={{
                      fontFamily: 'Space Grotesk',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              {/* "MAGIC" - Ethnocentric font with gradient */}
              <motion.span
                variants={magicVariants}
                className="block font-bold relative"
                style={{
                  fontFamily: 'Ethnocentric, sans-serif',
                  letterSpacing: '0.1em',
                }}
              >
                <span
                  className="relative inline-block"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #00f0ff 0%, #00ff88 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  MAGIC
                  {/* Animated glow effect */}
                  <motion.span
                    className="absolute inset-0 blur-xl opacity-50"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #00f0ff 0%, #00ff88 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </span>
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtle tagline */}
          <motion.p
            className="text-2xl md:text-3xl text-neutral/80 font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4.5 }}
            style={{
              fontFamily: "Space Grotesk"
            }}
          >
            as a service
          </motion.p>
        </motion.div>

        {/* Bottom left corner text - Company description */}
        <div className="absolute bottom-12 left-0 right-0 z-10">
          <div className="max-w-screen-2xl mx-auto px-8 md:px-12">
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 5 }}
              style={{
                fontFamily: "inter, sans-serif"
              }}
            >
              <p className="text-base md:text-lg text-foreground font-light mb-3 leading-relaxed">
                We are Opryon Labs, an{' '}
                <span
                  className="italic font-light"
                  style={{
                    fontFamily: "italic, sans-serif", 
                    letterSpacing: '0.1em',

                  }}
                >
                  engineering
                </span>{' '}
                team that designs and builds AI solutions and experiences
              </p>
              <p className="text-sm md:text-base text-neutral/70 font-light tracking-wide">
                Based in Bangalore, India. Tinkering since 2025
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
