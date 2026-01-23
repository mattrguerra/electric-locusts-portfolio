'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Instagram, Facebook } from 'lucide-react';

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
    icon: Facebook,
    href: 'https://facebook.com/electriclocusts',
    label: 'Facebook',
  },
  {
    icon: Instagram,
    href: 'https://instagram.com/electriclocusts',
    label: 'Instagram',
  },
  {
    icon: ThreadsIcon,
    href: 'https://threads.net/@electriclocusts',
    label: 'Threads',
  },
];

export default function AboutClient() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-void">
      {/* Background texture */}
      <div className="organic-texture" />

      {/* Floating cellular shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full blur-[150px] bg-cellular-purple/10 animate-cellular-breathe" />
        <div
          className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full blur-[120px] bg-cellular-blue/8 animate-cellular-breathe"
          style={{ animationDelay: '-12s' }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <span className="text-intimate text-sm tracking-widest uppercase block mb-4">
            about the artist
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-light text-white/90 tracking-tight">
            Matthew Guerra
          </h1>
        </motion.div>

        {/* Artist bio section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-24"
        >
          <div className="space-y-6 text-white/50 text-lg font-light leading-relaxed">
            <p>
              My whole life I have had an unstable sense of identity. Trying to find where I fit in
              the world has caused me tremendous strife—an obsession that has shaped everything I
              create. How can you accomplish anything meaningful when you don&apos;t even know who
              you are?
            </p>
            <p>
              I work across photography, video art, mixed media, and alternative processes like
              cyanotype printing. My practice began with medium format film and has evolved to
              include scratching and burning my own image from negatives, handmade artist books,
              video installations, and portrait series that explore gratitude, masculinity, and the
              weight of depression.
            </p>
            <p>
              Living with bipolar disorder, anxiety, OCD, and ADHD has left me broken and confused
              at times—but it has also given me something urgent to say. I believe that art has the
              power to help people feel less alone. If even one person views my work and decides to
              fight for mental health advocacy, then every painful moment of its creation will have
              been worth it.
            </p>
          </div>
        </motion.div>

        {/* Artist Statement - Featured quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 relative"
        >
          {/* Decorative lines */}
          <div className="absolute left-0 top-0 w-12 h-px bg-gradient-to-r from-cellular-purple/40 to-transparent" />
          <div className="absolute right-0 bottom-0 w-12 h-px bg-gradient-to-l from-cellular-purple/40 to-transparent" />

          <div className="py-12 px-6 md:px-12">
            <blockquote className="text-xl md:text-2xl text-white/70 font-light leading-relaxed italic text-center">
              &ldquo;Through my art, I delve into the darkest parts of my life—not to dwell there,
              but to create powerful images that speak to the importance of mental health care. What
              started as destruction became transformation.&rdquo;
            </blockquote>
          </div>
        </motion.div>

        {/* Mediums & Process */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="text-intimate text-sm tracking-widest uppercase block mb-8 text-center">
            mediums & process
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                className="glass-card p-6"
              >
                <h4 className="text-white/80 font-display font-light mb-2">{medium.title}</h4>
                <p className="text-white/40 text-sm font-light">{medium.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="text-intimate text-sm tracking-widest uppercase block mb-8 text-center">
            creative journey
          </span>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-cellular-purple/40 via-cellular-blue/30 to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content - left side on desktop for even items */}
                  <div
                    className={`flex-1 hidden md:block ${index % 2 === 0 ? 'text-right' : ''}`}
                  >
                    {index % 2 === 0 && (
                      <div className="glass-card p-6 inline-block text-left">
                        <span className="text-cellular-purple text-sm font-medium tracking-wide">
                          {item.year}
                        </span>
                        <h4 className="text-lg font-display font-light text-white mt-1">
                          {item.title}
                        </h4>
                        <p className="text-white/40 text-sm mt-2 font-light">{item.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Dot */}
                  <div className="w-3 h-3 rounded-full bg-cellular-purple/60 border-2 border-void flex-shrink-0 mt-2 z-10" />

                  {/* Content - right side on desktop for odd items, always on mobile */}
                  <div className="flex-1">
                    <div className="glass-card p-6 md:hidden">
                      <span className="text-cellular-purple text-sm font-medium tracking-wide">
                        {item.year}
                      </span>
                      <h4 className="text-lg font-display font-light text-white mt-1">
                        {item.title}
                      </h4>
                      <p className="text-white/40 text-sm mt-2 font-light">{item.description}</p>
                    </div>
                    {index % 2 !== 0 && (
                      <div className="glass-card p-6 hidden md:block">
                        <span className="text-cellular-purple text-sm font-medium tracking-wide">
                          {item.year}
                        </span>
                        <h4 className="text-lg font-display font-light text-white mt-1">
                          {item.title}
                        </h4>
                        <p className="text-white/40 text-sm mt-2 font-light">{item.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <span className="text-intimate text-sm tracking-widest uppercase block mb-6">
            connect
          </span>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                className="p-4 rounded-xl text-white/30 hover:text-white/60 hover:bg-white/5 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/contact">
            <button className="btn-dissolution group inline-flex items-center gap-3">
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
