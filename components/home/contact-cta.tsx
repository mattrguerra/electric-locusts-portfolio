'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-cellular-purple/20 blur-[200px]"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-cellular-blue/15 blur-[180px]"
        />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.1, 1] }}
          className="space-y-8"
        >
          {/* Intimate heading */}
          <span className="text-intimate text-md tracking-widest uppercase block text-white/50">
            let&apos;s connect
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-gray/90 tracking-tight leading-tight">
            Interested in a{' '}
            <span className="gradient-text">collaboration</span>?
          </h2>

          <p className="text-white/50 text-lg max-w-xl mx-auto font-light leading-relaxed">
            Whether it&apos;s a gallery inquiry, commission, or simply a
            conversation about art and the human experience, I&apos;d love to
            hear from you.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pt-4"
          >
            <Link href="/contact">
              <button className="btn-dissolution group inline-flex items-center gap-3">
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </motion.div>

          {/* Subtle decorative line */}
          <div className="pt-8">
            <div className="w-16 h-px mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
