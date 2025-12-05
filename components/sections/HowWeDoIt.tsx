'use client';

import { motion } from 'framer-motion';
import ProcessStep from './ProcessStep';
import { TelescopeIcon, LightbulbIcon, WrenchIcon } from '@/components/icons/ProcessIcons';

const steps = [
  {
    number: '1',
    title: 'Discovery',
    description:
      'Together, we dive into your world. A brainstorming session where your challenges meet our creative thinking',
    icon: <TelescopeIcon />,
    accordionItems: [
      {
        title: 'We learn from you',
        points: [
          'Identify painpoints',
          'Uncover opportunities',
          'Flag inefficiencies',
        ],
      },
      {
        title: 'We map the journey',
        points: [
          'Define target audience',
          'Map user flows',
          'Identify key features',
        ],
      },
    ],
  },
  {
    number: '2',
    title: 'Analysis',
    description:
      'We craft a tailored action plan that aligns with your budget and requirements — no guesswork, just solutions',
    icon: <LightbulbIcon />,
    accordionItems: [
      {
        title: 'We build for you',
        points: [
          'AI model integration',
          'Clean architecture',
          'Scalable solutions',
        ],
      },
      {
        title: 'We design with purpose',
        points: [
          'User-centric design',
          'Pixel-perfect interfaces',
          'Consistent branding',
        ],
      },
    ],
  },
  {
    number: '3',
    title: 'Execution',
    description:
      "It's go time. Our team gets to work, setting plans into motion, turning ideas into real-world impact",
    icon: <WrenchIcon />,
    accordionItems: [
      {
        title: 'We launch with confidence',
        points: [
          'Seamless deployment',
          'Performance testing',
          'Security audits',
        ],
      },
      {
        title: 'We support you',
        points: [
          'Documentation & training',
          'Ongoing maintenance',
          'Feature updates',
        ],
      },
    ],
  },
];

export default function HowWeDoIt() {
  return (
    <section id="process" className="bg-black">
      {/* Section Header */}
      <div className="py-20 border-b border-neutral-dark/10">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-12">
          <motion.p
            className="text-sm uppercase tracking-wider text-primary mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            OUR PROCESS
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-center text-white max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            From <span className="italic text-primary">idea</span> to{' '}
            <span className="italic">reality</span> in 3 steps
          </motion.h2>

          {/* Step Indicators */}
          <motion.div
            className="flex items-center justify-center gap-4 md:gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[1, 2, 3].map((step, index) => (
              <div key={step} className="flex items-center gap-4 md:gap-6">
                <motion.div
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-primary/40 flex items-center justify-center text-primary font-bold text-lg md:text-xl relative group hover:border-primary transition-colors">
                    <span className="relative z-10">0{step}</span>
                    <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
                {index < 2 && (
                  <motion.div
                    className="text-primary/40 text-xl md:text-2xl"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    →
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Process Steps */}
      <div>
        {steps.map((step) => (
          <ProcessStep
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
            accordionItems={step.accordionItems}
            icon={step.icon}
          />
        ))}
      </div>
    </section>
  );
}
