'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const featuredProjects = [
  {
    id: '1',
    title: 'What We Were Left With',
    category: 'Documentary',
    description: 'Archive of survival from years of addiction',
    image: 'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258107/33_wng4mt.jpg',
  },
  {
    id: '2',
    title: 'Self Annihilation',
    category: 'Mixed Media',
    description:
      'Scratching and burning myself off medium format negatives—physically removing myself from the frame',
    image: 'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258735/1_plkakn.jpg',
    featured: true,
  },

  {
    id: '3',
    title: 'People Who Saved My Life',
    category: 'Cyanotype',
    description: 'Portraits of the people who kept me alive',
    image: 'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257844/Cyanotype0001_thqymg.jpg',
  },
  {
    id: '4',
    title: 'Deconstructing Masculinity',
    category: 'Portrait',
    description: 'Challenging narrow definitions of manhood',
    image: 'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257508/21_hdndtl.jpg',
  },
];

export default function FeaturedWork() {
  return (
    <section className="py-32 relative">
      {/* Background cellular shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] rounded-full blur-[120px] bg-cellular-purple/10 animate-cellular-breathe" />
        <div
          className="absolute bottom-1/4 -right-32 w-[350px] h-[350px] rounded-full blur-[100px] bg-cellular-blue/8 animate-cellular-breathe"
          style={{ animationDelay: '-10s' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header - minimal, organic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-intimate text-sm tracking-widest uppercase block mb-4">
            selected works
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-light text-white/90 tracking-tight">
            Exploring the <span className="gradient-text">Fragmented Self</span>
          </h2>
        </motion.div>

        {/* Featured project - large */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <Link href="/portfolio" className="group block">
            <div className="relative overflow-hidden rounded-3xl glass-card">
              <div className="aspect-[16/9] md:aspect-[21/9] relative">
                <Image
                  src={featuredProjects[0].image}
                  alt={featuredProjects[0].title}
                  fill
                  className="object-cover transition-all duration-1000 ease-organic group-hover:scale-105 img-atmospheric"
                />

                {/* Dark overlay - visible by default, fades on hover */}
                <div className="absolute inset-0 bg-black/70 transition-opacity duration-500 group-hover:opacity-0" />

                {/* Organic gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-bruise-deep/30 via-transparent to-cellular-purple/20 opacity-60" />

                {/* Cellular overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="cellular-overlay" />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-cellular-purple text-sm font-medium tracking-widest uppercase transition-opacity duration-500 group-hover:opacity-0">
                    {featuredProjects[0].category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-display font-light text-white mt-2 mb-3 group-hover:text-white/80 transition-opacity duration-500 group-hover:opacity-0">
                    {featuredProjects[0].title}
                  </h3>
                  <p className="text-white/40 text-xl md:text-base max-w-md transition-opacity duration-500 group-hover:opacity-0">
                    {featuredProjects[0].description}
                  </p>
                </motion.div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Secondary projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredProjects.slice(1).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href="/portfolio" className="group block">
                <div className="relative overflow-hidden rounded-2xl glass-card">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-700 ease-organic group-hover:scale-105 img-atmospheric"
                    />

                    {/* Dark overlay - visible by default, fades on hover */}
                    <div className="absolute inset-0 bg-black/70 transition-opacity duration-500 group-hover:opacity-0" />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />

                    {/* Hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-cellular-purple/20 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-white/30 text-sm tracking-widest uppercasetransition-opacity duration-500 group-hover:opacity-0">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-display font-light text-white mt-1 group-hover:text-white/80 transition-opacity duration-500 group-hover:opacity-0">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 text-white/40 hover:text-white/70 transition-colors duration-300 group"
          >
            <span className="text-sm tracking-wide">View all work</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
