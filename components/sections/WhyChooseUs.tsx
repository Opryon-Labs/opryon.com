'use client';

import { motion } from 'framer-motion';
import { Container, Section } from '@/components/ui';

const benefits = [
  {
    title: 'Blazing Fast Performance',
    description: 'Your users will thank you for the speed',
    metric: '< 2s',
    label: 'Load Time',
  },
  {
    title: 'Modern Tech Stack',
    description: 'Built for today and tomorrow',
    metric: '100%',
    label: 'Future Ready',
  },
  {
    title: 'Code That Scales',
    description: 'From startup to enterprise',
    metric: '∞',
    label: 'Scalability',
  },
  {
    title: 'Always Experimenting',
    description: 'We stay ahead of web trends',
    metric: '24/7',
    label: 'Innovation',
  },
];

export default function WhyChooseUs() {
  return (
    <Section id="why-choose-us" className="bg-background">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-neutral max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            We build. Fast & Beautiful.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              className="text-center p-8 rounded-2xl bg-bg-card border border-neutral-dark/20 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(0, 240, 255, 0.15)' }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div
                  className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2"
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {benefit.metric}
                </div>
                <div className="text-sm text-neutral-dark mb-4">{benefit.label}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-neutral">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
