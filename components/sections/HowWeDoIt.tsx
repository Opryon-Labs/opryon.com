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
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How We Do It
          </motion.h2>
        </div>
      </div>

      {/* Process Steps */}
      <div>
        {steps.map((step, index) => (
          <ProcessStep
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
            accordionItems={step.accordionItems}
            icon={step.icon}
            isActive={index === 0}
          />
        ))}
      </div>
    </section>
  );
}
