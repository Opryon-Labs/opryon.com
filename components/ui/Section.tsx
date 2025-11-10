import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  fullHeight?: boolean;
}

export default function Section({
  children,
  id,
  className = '',
  fullHeight = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative ${fullHeight ? 'min-h-screen' : 'py-20 md:py-32'} ${className}`}
    >
      {children}
    </section>
  );
}
