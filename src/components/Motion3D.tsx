import React from 'react';
import { motion } from 'framer-motion';

interface Scroll3DRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  immediate?: boolean; // If true, animates on mount (ideal for above-the-fold Hero)
}

export const Scroll3DReveal: React.FC<Scroll3DRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  immediate = false,
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 40, x: 0, rotateX: 10, rotateY: 0 };
      case 'down':
        return { y: -40, x: 0, rotateX: -10, rotateY: 0 };
      case 'left':
        return { x: 40, y: 0, rotateY: -10, rotateX: 0 };
      case 'right':
        return { x: -40, y: 0, rotateY: 10, rotateX: 0 };
    }
  };

  const initialOffset = getInitialPosition();

  const animationProps = immediate
    ? {
        initial: { opacity: 0, scale: 0.96, ...initialOffset },
        animate: { opacity: 1, y: 0, x: 0, rotateX: 0, rotateY: 0, scale: 1 },
      }
    : {
        initial: { opacity: 0, scale: 0.96, ...initialOffset },
        whileInView: { opacity: 1, y: 0, x: 0, rotateX: 0, rotateY: 0, scale: 1 },
        viewport: { once: true, margin: '150px 0px -50px 0px', amount: 0.05 },
      };

  return (
    <motion.div
      {...animationProps}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.16, 1, 0.3, 1], // Smooth luxury cubic-bezier
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1200,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface Stagger3DProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

export const Stagger3D: React.FC<Stagger3DProps> = ({
  children,
  staggerDelay = 0.1,
  className = '',
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '150px 0px -50px 0px', amount: 0.05 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem3D: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 35, rotateX: 10, scale: 0.96 },
        visible: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          transition: {
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      style={{ transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface Floating3DProps {
  children: React.ReactNode;
  amplitude?: number;
  duration?: number;
  className?: string;
}

export const Floating3D: React.FC<Floating3DProps> = ({
  children,
  amplitude = 6,
  duration = 4.5,
  className = '',
}) => {
  return (
    <motion.div
      animate={{
        y: [-amplitude, amplitude, -amplitude],
        rotateZ: [-0.6, 0.6, -0.6],
      }}
      transition={{
        repeat: Infinity,
        duration,
        ease: 'easeInOut',
      }}
      style={{ transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
