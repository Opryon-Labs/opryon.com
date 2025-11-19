'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WaterFillLetter = ({
  letter,
  delay,
  duration,
  hasStutter
}: {
  letter: string;
  delay: number;
  duration: number;
  hasStutter: boolean;
}) => {
  return (
    <span className="relative inline-block" style={{ fontFamily: 'Ethnocentric, sans-serif' }}>
      {/* Outline letter (always visible) */}
      <span
        className="relative z-10"
        style={{
          WebkitTextStroke: '2px white',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {letter}
      </span>

      {/* Filled letter (animates from left to right) */}
      <motion.span
        className="absolute inset-0 z-20 overflow-hidden"
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={
          hasStutter
            ? {
                clipPath: [
                  'inset(0 100% 0 0)', // Start: empty
                  'inset(0 50% 0 0)',  // Fill to 50%
                  'inset(0 50% 0 0)',  // Pause (hold at 50%)
                  'inset(0 0 0 0)'     // Complete to 100%
                ]
              }
            : { clipPath: 'inset(0 0 0 0)' } // Smooth fill for non-stutter letters
        }
        transition={
          hasStutter
            ? {
                delay: delay,
                duration: duration,
                times: [0, 0.35, 0.65, 1], // Pause at halfway
                ease: 'easeInOut',
              }
            : {
                delay: delay,
                duration: duration,
                ease: 'easeInOut',
              }
        }
      >
        <span
          style={{
            WebkitTextFillColor: 'white',
          }}
        >
          {letter}
        </span>
      </motion.span>
    </span>
  );
};

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const text = 'OPRYON';
  const letters = text.split('');

  // Generate timings: OPRY fast, O (5th) has stutter, N fast
  const [letterTimings] = useState(() => {
    let cumulativeDelay = 0.2; // Start delay
    return letters.map((letter, index) => {
      const isStutterLetter = index === 4; // 5th letter (second O)
      const isFirstFour = index < 4; // OPRY

      let duration, pause;

      if (isFirstFour) {
        // OPRY: Fast and smooth
        duration = 0.2;
        pause = 0.05; // Very small pause between letters
      } else if (isStutterLetter) {
        // O (5th): Stutter effect
        duration = 0.8; // Longer to accommodate the pause
        pause = 0.05;
      } else {
        // N: Fast finish
        duration = 0.2;
        pause = 0;
      }

      const timing = {
        delay: cumulativeDelay,
        duration: duration,
        hasStutter: isStutterLetter
      };

      cumulativeDelay += duration + pause;
      return timing;
    });
  });

  // Calculate total animation time based on generated timings
  const totalAnimationTime = letterTimings[letterTimings.length - 1].delay +
                             letterTimings[letterTimings.length - 1].duration +
                             0.5; // Extra buffer

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, totalAnimationTime * 1000);

    return () => clearTimeout(timer);
  }, [totalAnimationTime]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: '#000000' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="text-center">
            <motion.div
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-widest"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {letters.map((letter, index) => (
                <WaterFillLetter
                  key={index}
                  letter={letter}
                  delay={letterTimings[index].delay}
                  duration={letterTimings[index].duration}
                  hasStutter={letterTimings[index].hasStutter}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
