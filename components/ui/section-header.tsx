'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  centered?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  icon: Icon,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      {Icon && (
        <div className={`mb-4 ${centered ? 'flex justify-center' : ''}`}>
          <div className="p-3 rounded-xl bg-primary-500/20 inline-flex">
            <Icon className="w-6 h-6 text-primary-400" />
          </div>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-display mb-4">
        <span className="gradient-text">{title ?? ''}</span>
      </h2>
      {subtitle && (
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
