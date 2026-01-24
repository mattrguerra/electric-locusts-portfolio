'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Palette, Camera, Video, PenTool, Box, Code, ArrowRight 
} from 'lucide-react';
import SectionHeader from '@/components/ui/section-header';
import GlassCard from '@/components/ui/glass-card';
import { Wand2 } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Digital Art',
    description: 'Custom digital illustrations and artwork for any project',
    color: 'text-pink-400',
    bg: 'bg-pink-500/20',
  },
  {
    icon: Camera,
    title: 'Photography',
    description: 'Professional photography for events, portraits, and products',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/20',
  },
  {
    icon: Video,
    title: 'Video Art',
    description: 'Motion graphics, video editing, and experimental visuals',
    color: 'text-purple-400',
    bg: 'bg-purple-500/20',
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    description: 'Brand identity, marketing materials, and print design',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/20',
  },
  {
    icon: Box,
    title: 'Installation Art',
    description: 'Immersive installations for galleries and public spaces',
    color: 'text-orange-400',
    bg: 'bg-orange-500/20',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built to impress',
    color: 'text-blue-400',
    bg: 'bg-blue-500/20',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/10 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={Wand2}
          title="Creative Services"
          subtitle="Professional artistic services tailored to bring creative visions to life"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services?.map?.((service, index) => (
            <GlassCard
              key={service?.title}
              className="p-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index ?? 0) * 0.1 }}
              >
                <div className={`w-12 h-12 rounded-xl ${service?.bg ?? 'bg-gray-500/20'} flex items-center justify-center mb-4`}>
                  {service?.icon && <service.icon className={`w-6 h-6 ${service?.color ?? 'text-white'}`} />}
                </div>
                <h3 className="text-xl font-display text-white mb-2">{service?.title ?? ''}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{service?.description ?? ''}</p>
              </motion.div>
            </GlassCard>
          )) ?? null}
        </div>

        <div className="text-center">
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-flex items-center gap-2 group"
            >
              View Pricing & Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
