'use client';

import { motion } from 'framer-motion';
import { Container, Section } from '@/components/ui';

const services = [
  {
    title: 'AI-Powered Applications',
    description: 'Intelligent solutions that learn and adapt to your needs',
    number: '01',
  },
  {
    title: 'Custom Web Development',
    description: 'Modern websites and applications built with cutting-edge tech',
    number: '02',
  },
  {
    title: 'Conversational AI',
    description: 'Smart chatbots and assistants that understand your users',
    number: '03',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful interfaces that users love to interact with',
    number: '04',
  },
  {
    title: 'Automation Solutions',
    description: 'Streamline workflows with intelligent automation',
    number: '05',
  },
  {
    title: 'AI Integration',
    description: 'Seamlessly integrate AI into your existing systems',
    number: '06',
  },
];

export default function WhatWeDo() {
  return (
    <Section id="services" className="bg-background -mt-20 pt-32 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <p className="text-sm uppercase tracking-wider text-primary mb-4">WHAT WE DO</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                We bring <span className="italic text-primary">AI</span>,{' '}
                <span className="italic">engineering</span> &{' '}
                <span className="italic">design</span> expertise
              </h2>
              <p className="text-lg text-neutral max-w-xl">
                Full-stack solutions that merge cutting-edge AI with beautiful interfaces and rock-solid engineering.
              </p>
            </motion.div>

            {/* Services List */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="flex gap-4 p-4 rounded-xl hover:bg-bg-card/50 transition-all duration-300">
                    <div className="text-primary/40 font-mono text-sm mt-1 group-hover:text-primary transition-colors">
                      {service.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-neutral text-sm">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] hidden lg:block"
          >
            {/* Animated Gradient Blob */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute w-96 h-96 rounded-full bg-linear-to-r from-primary/20 to-purple-500/20 blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [90, 0, 90],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute w-80 h-80 rounded-full bg-linear-to-l from-blue-500/20 to-primary/20 blur-3xl"
              />
            </div>

            {/* Floating Grid Pattern */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-size-[50px_50px] mask-[radial-gradient(ellipse_at_center,black,transparent_70%)]" />
            </div>

            {/* Floating Elements */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/60 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + i * 10}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
