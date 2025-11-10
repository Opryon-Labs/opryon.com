import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center gap-2';

  const variants = {
    primary:
      'bg-primary text-background hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/50 font-medium',
    secondary:
      'bg-accent text-background hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/50 font-medium',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-background font-medium',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
