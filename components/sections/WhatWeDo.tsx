'use client';

import { motion } from 'framer-motion';
import { Container, Section } from '@/components/ui';

const services = [
  {
    title: 'AI-Powered Applications',
    description: 'Intelligent solutions that learn and adapt to your needs',
    icon: '🤖',
  },
  {
    title: 'Custom Web Development',
    description: 'Modern websites and applications built with cutting-edge tech',
    icon: '⚡',
  },
  {
    title: 'Conversational AI',
    description: 'Smart chatbots and assistants that understand your users',
    icon: '💬',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful interfaces that users love to interact with',
    icon: '🎨',
  },
  {
    title: 'Automation Solutions',
    description: 'Streamline workflows with intelligent automation',
    icon: '🔗',
  },
  {
    title: 'AI Integration',
    description: 'Seamlessly integrate AI into your existing systems',
    icon: '✨',
  },
];

export default function WhatWeDo() {
  return (
    <Section id="services" className="bg-background -mt-20 pt-32">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What We Do
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-neutral max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            We bring design, development & innovation expertise
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="p-8 rounded-2xl bg-bg-card hover:bg-bg-elevated transition-all duration-300 border border-neutral-dark/20 hover:border-primary/50 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: '0 10px 40px rgba(0, 240, 255, 0.1)' }}
            >
              <div className="text-5xl mb-4 filter group-hover:brightness-125 transition-all">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-neutral">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
