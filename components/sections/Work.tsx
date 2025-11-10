'use client';

import { motion } from 'framer-motion';
import { Container, Section } from '@/components/ui';

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'Modern online store with seamless checkout experience',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
  },
  {
    title: 'SaaS Dashboard',
    category: 'Web Application',
    description: 'Analytics platform with real-time data visualization',
    tags: ['React', 'TypeScript', 'D3.js'],
  },
  {
    title: 'Portfolio Website',
    category: 'Design & Development',
    description: 'Minimalist portfolio showcasing creative work',
    tags: ['Next.js', 'Framer Motion', 'CSS'],
  },
  {
    title: 'Booking System',
    category: 'Web Application',
    description: 'Restaurant reservation system with admin panel',
    tags: ['Next.js', 'PostgreSQL', 'Prisma'],
  },
];

export default function Work() {
  return (
    <Section id="work" className="bg-bg-elevated">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Work
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-neutral max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Projects we&apos;re proud of
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="group relative p-8 rounded-2xl bg-background overflow-hidden cursor-pointer border border-neutral-dark/20 hover:border-primary/50 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5, boxShadow: '0 10px 40px rgba(0, 240, 255, 0.1)' }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-neutral mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
