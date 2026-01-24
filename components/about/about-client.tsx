'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ArrowDown, Instagram, Facebook } from 'lucide-react';

// Threads icon component
const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.33-3.022.88-.73 2.039-1.126 3.452-1.179 1.022-.038 1.972.07 2.85.283-.043-1.108-.242-1.937-.6-2.495-.46-.717-1.227-1.083-2.28-1.09-1.594.013-2.503.72-2.71 2.104l-2.012-.341c.36-2.28 2.083-3.622 4.722-3.68 1.692.013 2.996.576 3.878 1.674.752.936 1.15 2.265 1.183 3.948v.108c1.158.56 2.078 1.381 2.673 2.397.814 1.39 1.072 3.317-.033 5.398-1.407 2.647-4.033 4.108-7.39 4.108zm-.578-7.727c-.804.03-1.45.242-1.863.612-.364.328-.541.744-.512 1.204.044.707.612 1.433 1.875 1.576.33.037.658.037.986 0 .965-.053 1.69-.404 2.154-1.045.308-.427.508-.974.595-1.629-1.02-.33-2.119-.785-3.235-.718z" />
  </svg>
);

const timeline = [
  {
    year: '2026',
    title: 'Electric Locusts Relaunch',
    description:
      'Relaunching as a personal artistic practice with renewed focus on mental health advocacy through visual art',
  },
  {
    year: '2024',
    title: 'Deconstructing Masculinity',
    description:
      'Portrait series challenging narrow societal definitions of manhood through vulnerability and emotional expression',
  },
  {
    year: '2022',
    title: 'Self Annihilation',
    description:
      'Mixed media exploration of identity, mental illness, and addiction—scratching and burning myself off medium format negatives',
  },
  {
    year: '2018',
    title: 'Alternative Processes',
    description:
      'Began working with cyanotypes and physical manipulation of photographic materials',
  },
];

const socialLinks = [
  {
    icon: Instagram,
    href: 'https://instagram.com/electriclocusts',
    label: 'Instagram',
  },
  {
    icon: Facebook,
    href: 'https://facebook.com/electriclocusts',
    label: 'Facebook',
  },
  {
    icon: ThreadsIcon,
    href: 'https://threads.net/@electriclocusts',
    label: 'Threads',
  },
];

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero section with self-portrait placeholder */}
      <section className="relative min-h-[80vh] flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="text-xs tracking-[0.2em] uppercase text-gray-400 block">The Artist Behind</span>
              <h1 className="font-display text-display text-white leading-none">
                Who Is<br />Electric<br />Locusts?
              </h1>
              <p className="text-gray-300 text-lg max-w-md leading-relaxed">
                Matthew Guerra. Houston-based visual artist exploring mental illness, identity,
                and the evidence we leave behind.
              </p>
            </motion.div>

            {/* Right - Self portrait placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[3/4] bg-gray-900 rounded overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769261111/matt2_h3rqdm.jpg"
                  alt="Matthew Guerra"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator - with solid background for visibility */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 bg-black/80 px-4 py-2 rounded backdrop-blur-sm"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase text-gray-300">
              Scroll to read
            </span>
            <ArrowDown className="w-4 h-4 text-gray-300" />
          </motion.div>
        </motion.div>
      </section>

      {/* Bio section - reduced padding */}
      <section className="py-16 relative z-10">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-200 text-xl leading-relaxed">
              My whole life I have had an unstable sense of identity. Trying to find where I fit in
              the world has caused me tremendous strife, an obsession that has shaped everything I
              create.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I work across photography, video art, mixed media, and alternative processes like
              cyanotype printing. My practice began with medium format film and has evolved to
              include scratching and burning my own image from negatives, handmade artist books,
              video installations, and portrait series that explore gratitude, masculinity, and the
              weight of depression.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Living with bipolar disorder, anxiety, OCD, and ADHD has left me broken and confused
              at times, but it has also given me something urgent to say. I believe that art has the
              power to help people feel less alone.
            </p>
          </motion.div>

          {/* Featured quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="my-12 py-6 border-l-2 border-gray-600 pl-6"
          >
            <p className="text-xl text-white font-display italic leading-relaxed">
              &ldquo;If even one person views my work and decides to fight for mental health
              advocacy, then every painful moment of its creation will have been worth it.&rdquo;
            </p>
          </motion.blockquote>
        </div>
      </section>

      {/* Mediums section - reduced padding */}
      <section className="py-16 border-t border-gray-800 relative z-10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-xs tracking-[0.2em] uppercase text-gray-400 block mb-3">Process</span>
            <h2 className="font-display text-3xl text-white">How I Work</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: 'Medium Format Film',
                description:
                  'The foundation of my practice—deliberate, contemplative image-making that captures detail and emotion',
              },
              {
                title: 'Alternative Processes',
                description:
                  'Cyanotypes, scratched negatives, burned emulsions—physical manipulation that mirrors internal states',
              },
              {
                title: 'Mixed Media & Installation',
                description:
                  'Combining photography, text, and objects to create immersive narrative experiences',
              },
              {
                title: 'Video Art',
                description:
                  'Time-based work exploring addiction, identity, and psychological states through moving image',
              },
            ].map((medium, index) => (
              <motion.div
                key={medium.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 border border-gray-800 rounded p-5"
              >
                <h4 className="text-white font-display text-lg mb-2">{medium.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{medium.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline section - fixed contrast, no color banding */}
      <section className="py-16 border-t border-gray-800 relative z-10">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-xs tracking-[0.2em] uppercase text-gray-400 block mb-3">Journey</span>
            <h2 className="font-display text-3xl text-white">Creative Timeline</h2>
          </motion.div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-16">
                  <span className="text-gray-400 text-sm font-medium">{item.year}</span>
                </div>
                <div className="pb-6 border-l border-gray-700 pl-6">
                  <h4 className="text-white font-display text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect section - reduced negative space */}
      <section className="py-16 border-t border-gray-800 relative z-10">
        <div className="max-w-xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-xs tracking-[0.2em] uppercase text-gray-400 block">Connect</span>
            <div className="flex justify-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="pt-4">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-3 group">
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
