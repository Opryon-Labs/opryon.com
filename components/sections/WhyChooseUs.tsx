'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Container, Section } from '@/components/ui';

const AnimatedCounter = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export default function WhyChooseUs() {
  return (
    <Section id="why-choose-us" className="bg-background">
      <Container>
        <div className="mb-16">
          <motion.p
            className="text-sm uppercase tracking-wider text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            WHY CHOOSE US
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We build <span className="italic text-primary">fast</span>, we build{' '}
            <span className="italic">beautiful</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {/* Large Stat Card - Spans 2 columns */}
          <motion.div
            className="md:col-span-2 md:row-span-2 bg-linear-to-br from-primary/10 via-bg-card to-bg-card rounded-3xl p-8 md:p-12 border border-primary/20 relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
            />

            <div className="relative z-10">
              <div className="text-7xl md:text-8xl font-bold mb-4">
                <span className="bg-linear-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  <AnimatedCounter end={99} suffix="%" />
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Client Satisfaction</h3>
              <p className="text-neutral text-lg max-w-md">
                Our clients love what we build. From startups to established businesses, we deliver excellence every time.
              </p>
            </div>

            {/* Decorative dots */}
            <div className="absolute bottom-8 right-8 grid grid-cols-3 gap-2 opacity-20">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-primary rounded-full" />
              ))}
            </div>
          </motion.div>

          {/* Fast Performance Card */}
          <motion.div
            className="md:col-span-2 bg-bg-card rounded-3xl p-8 border border-neutral-dark/20 hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">
                  &lt;<AnimatedCounter end={2} />s
                </div>
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-neutral text-sm">
                  Blazing fast load times that keep your users engaged
                </p>
              </div>

              {/* Speed indicator bars */}
              <div className="flex flex-col gap-2">
                {[100, 80, 60, 40].map((height, i) => (
                  <motion.div
                    key={i}
                    className="w-12 bg-primary/20 rounded-full"
                    style={{ height: `${height / 4}px` }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Projects Delivered Card */}
          <motion.div
            className="md:col-span-1 bg-bg-card rounded-3xl p-8 border border-neutral-dark/20 hover:border-primary/30 transition-all duration-300 relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-4xl font-bold text-primary mb-2">
              <AnimatedCounter end={50} suffix="+" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Projects Delivered</h3>
            <p className="text-neutral text-sm">Shipped to production</p>

            {/* Progress circle decoration */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-primary/20 rounded-full group-hover:border-primary/40 transition-colors" />
          </motion.div>

          {/* Modern Stack Card */}
          <motion.div
            className="md:col-span-1 bg-linear-to-br from-purple-500/10 to-bg-card rounded-3xl p-8 border border-purple-500/20 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-4xl font-bold mb-2 bg-linear-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              100%
            </div>
            <h3 className="text-lg font-semibold mb-2">Modern Stack</h3>
            <p className="text-neutral text-sm">Future-proof tech</p>

            {/* Checkmark decoration */}
            <div className="absolute top-4 right-4 w-8 h-8 border-2 border-primary/40 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-primary rounded-full" />
            </div>
          </motion.div>

          {/* 24/7 Innovation Card */}
          <motion.div
            className="md:col-span-2 bg-bg-card rounded-3xl p-8 border border-neutral-dark/20 hover:border-primary/30 transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">24/7</div>
                <h3 className="text-xl font-semibold mb-2">Always Innovating</h3>
                <p className="text-neutral text-sm">
                  We stay ahead of trends so you don't have to worry
                </p>
              </div>

              {/* Floating dots animation */}
              <div className="relative w-24 h-24 hidden md:block">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-primary/60 rounded-full"
                    style={{
                      left: `${i * 30}px`,
                      top: `${i * 20}px`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
