'use client';

import { forwardRef, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  className?: string;
  variant?: 'default' | 'light' | 'dark' | 'accent';
  hover?: boolean;
  shine?: boolean;
  children?: ReactNode;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = 'default', hover = true, shine = false, children }, ref) => {
    const variants = {
      default: `
        relative overflow-hidden
        bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-aurora-purple/[0.03]
        backdrop-blur-[40px] backdrop-saturate-[1.8]
        border border-white/[0.08]
        rounded-[28px]
        shadow-[0_8px_40px_rgba(0,0,0,0.4),0_2px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.05)]
      `,
      light: `
        relative overflow-hidden
        bg-gradient-to-br from-white/[0.12] via-white/[0.06] to-white/[0.02]
        backdrop-blur-[30px] backdrop-saturate-[1.6]
        border border-white/[0.15]
        rounded-[24px]
        shadow-[0_4px_24px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]
      `,
      dark: `
        relative overflow-hidden
        bg-gradient-to-br from-black/[0.4] via-black/[0.2] to-aurora-purple/[0.1]
        backdrop-blur-[40px] backdrop-saturate-[1.4]
        border border-white/[0.06]
        rounded-[28px]
        shadow-[0_8px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]
      `,
      accent: `
        relative overflow-hidden
        bg-gradient-to-br from-aurora-purple/[0.15] via-aurora-purple/[0.05] to-aurora-blue/[0.1]
        backdrop-blur-[40px] backdrop-saturate-[1.8]
        border border-aurora-purple/[0.2]
        rounded-[28px]
        shadow-[0_8px_40px_rgba(139,92,246,0.2),0_2px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)]
      `,
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          variants[variant],
          hover && 'transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]',
          hover && 'hover:bg-gradient-to-br hover:from-white/[0.1] hover:via-white/[0.04] hover:to-aurora-purple/[0.06]',
          hover && 'hover:border-white/[0.15]',
          hover && 'hover:shadow-[0_16px_64px_rgba(0,0,0,0.5),0_4px_16px_rgba(139,92,246,0.15),inset_0_1px_0_rgba(255,255,255,0.15)]',
          hover && 'hover:-translate-y-1.5 hover:scale-[1.01]',
          className
        )}
      >
        {/* Top highlight gradient */}
        <div 
          className="absolute top-0 left-0 right-0 h-[40%] pointer-events-none rounded-t-[28px]"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)',
          }}
        />
        
        {/* Hover glow effect */}
        {hover && (
          <div 
            className="absolute inset-0 pointer-events-none rounded-[28px] opacity-0 transition-opacity duration-400 group-hover:opacity-100"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.15) 0%, transparent 60%)',
            }}
          />
        )}
        
        {/* Shine effect */}
        {shine && (
          <div 
            className="absolute top-[-50%] left-[-50%] w-[50%] h-[200%] pointer-events-none animate-[liquid-shine_4s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
              transform: 'rotate(45deg)',
            }}
          />
        )}
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    );
  }
);

GlassCard.displayName = 'GlassCard';

export default GlassCard;
export { GlassCard };