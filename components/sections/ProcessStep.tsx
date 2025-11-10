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
  isActive?: boolean;
}

export default function ProcessStep({
  number,
  title,
  description,
  accordionItems,
  icon,
  isActive = false,
}: ProcessStepProps) {
  return (
    <motion.section
      className="min-h-screen flex items-center py-20 sticky top-0 bg-black border-t-2 border-neutral-dark/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-20%' }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-screen-2xl mx-auto px-12 md:px-16 lg:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: Step Number & Title */}
          <div className="lg:col-span-4">
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

          {/* Center: Description & Accordions */}
          <div className="lg:col-span-5">
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-white mb-10 leading-relaxed font-light"
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

          {/* Right: Icon */}
          <motion.div
            className="lg:col-span-3 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-32 h-32 md:w-40 md:h-40 text-foreground opacity-80">
              {icon}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
