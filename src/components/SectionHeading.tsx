import React from 'react';
import { Scroll3DReveal } from './Motion3D';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  theme?: 'light' | 'dark';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  center = true,
  theme = 'light',
}) => {
  const isDark = theme === 'dark';

  return (
    <Scroll3DReveal direction="up" delay={0.05} className={`mb-12 md:mb-16 ${center ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 mb-3.5 rounded-full text-xs uppercase tracking-widestluxury font-medium border ${
          isDark
            ? 'border-gold/40 text-gold-light bg-emerald-dark/60'
            : 'border-gold/40 text-gold-dark dark:text-gold-light bg-cream/50 dark:bg-emerald-surface/60 dark:border-gold/30'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4 ${
        isDark ? 'text-ivory' : 'text-charcoal dark:text-ivory'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed font-light ${
          isDark ? 'text-beige/90' : 'text-warmgray-dark dark:text-beige/80'
        }`}>
          {subtitle}
        </p>
      )}

      {/* Decorative luxury hairline ornament */}
      <div className={`flex items-center gap-3 mt-5 ${center ? 'justify-center' : 'justify-start'}`}>
        <div className={`h-px w-10 sm:w-16 ${isDark ? 'bg-gold/30' : 'bg-gold/40 dark:bg-gold/30'}`} />
        <span className="w-1.5 h-1.5 rotate-45 border border-gold bg-gold/30" />
        <div className={`h-px w-10 sm:w-16 ${isDark ? 'bg-gold/30' : 'bg-gold/40 dark:bg-gold/30'}`} />
      </div>
    </Scroll3DReveal>
  );
};
