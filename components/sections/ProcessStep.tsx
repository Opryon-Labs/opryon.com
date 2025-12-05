'use client';

import { motion } from 'framer-motion';
import AccordionItem from './AccordionItem';

interface AccordionData {
  title: string;
  points: string[];
}

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  accordionItems: AccordionData[];
  icon: React.ReactNode;
}

export default function ProcessStep({
  number,
  title,
  description,
  accordionItems,
  icon,
}: ProcessStepProps) {
  return (
    <motion.section
      className="min-h-screen flex items-center py-20 sticky top-0 bg-black border-t-2 border-neutral-dark/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-20%' }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left: Step Number & Title */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm md:text-base text-neutral/60 mb-2">(Step {number})</p>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">{title}</h3>
            </motion.div>
          </div>

          {/* Right: Description, Accordions & Icon */}
          <div className="lg:col-span-3 relative">
            {/* Icon - Floating in top-right */}
            <motion.div
              className="absolute -top-8 right-0 lg:right-0"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="w-32 h-32 md:w-40 md:h-40 text-foreground opacity-80">
                {icon}
              </div>
            </motion.div>

            {/* Content */}
            <motion.p
              className="text-xl md:text-2xl text-white mb-10 leading-relaxed font-normal pr-0 md:pr-48"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {accordionItems.map((item, index) => (
                <AccordionItem key={index} title={item.title} points={item.points} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
