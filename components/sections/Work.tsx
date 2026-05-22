'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container, Section } from '@/components/ui';

const projects = [
  {
    title: 'GymPilot',
    category: 'SaaS Product',
    description:
      'Gym management software built for Indian fitness businesses. Handles member tracking, attendance, payment collection, and WhatsApp-based automated reminders — all in one dashboard.',
    tags: ['Next.js', 'TypeScript', 'WhatsApp API', 'PostgreSQL'],
    href: 'https://thegympilot.com',
    label: 'thegympilot.com',
    accent: '#00f0ff',
  },
  {
    title: 'AstraBill',
    category: 'SaaS Product',
    description:
      'Automated billing and expense management system designed for small and mid-size Indian businesses. Simplifies invoicing, GST compliance, and expense reporting in one clean interface.',
    tags: ['React', 'Node.js', 'TypeScript', 'Razorpay'],
    href: 'https://astrabill.com',
    label: 'astrabill.com',
    accent: '#00ff88',
  },
  {
    title: 'FuelPulse',
    category: 'Mobile + Web App',
    description:
      'AI-powered habit tracker and nutrition logger built specifically for Indian food. Estimates calories for dal, sabzi, biryani, and more — just type what you ate in plain text. Free forever.',
    tags: ['Next.js', 'AI/ML', 'TypeScript', 'Vercel'],
    href: 'https://fuelpulse.in',
    label: 'fuelpulse.in',
    accent: '#a855f7',
  },
  {
    title: 'Asmit Tyagi — Portfolio',
    category: 'Web Development',
    description:
      'Personal portfolio and engineering blog of Opryon Labs founder Asmit Tyagi. Full-stack developer building products with Next.js, React, and Node.js.',
    tags: ['Next.js', 'Framer Motion', 'MDX', 'Vercel'],
    href: 'https://asmittyagi.com',
    label: 'asmittyagi.com',
    accent: '#f59e0b',
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
            Products and sites we&apos;ve shipped — live in the wild
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-8 rounded-2xl bg-background overflow-hidden block border border-neutral-dark/20 hover:border-primary/50 transition-all duration-300"
                style={{
                  boxShadow: 'none',
                }}
              >
                {/* Accent glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${project.accent}10 0%, transparent 60%)`,
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-mono font-medium px-2 py-1 rounded-md"
                      style={{ color: project.accent, background: `${project.accent}15` }}
                    >
                      {project.category}
                    </span>
                    <span className="text-neutral/40 text-xs font-mono group-hover:text-primary transition-colors">
                      {project.label} ↗
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral mb-6 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-neutral-dark/10 text-neutral border border-neutral-dark/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-primary border border-primary/30 hover:border-primary hover:bg-primary/5 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
          >
            View all case studies <span>→</span>
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
