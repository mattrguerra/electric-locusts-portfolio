'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Palette, Camera, Video, PenTool, Box, Code, 
  Check, ArrowRight, Sparkles, DollarSign
} from 'lucide-react';
import SectionHeader from '@/components/ui/section-header';
import GlassCard from '@/components/ui/glass-card';

const services = [
  {
    icon: Palette,
    name: 'Digital Art',
    description: 'Custom digital illustrations, concept art, and digital paintings tailored to your vision.',
    priceRange: '$300 - $2,000+',
    features: [
      'Custom illustrations',
      'Concept art & character design',
      'Digital paintings',
      'NFT-ready artwork',
      'Commercial licensing',
    ],
    color: 'from-pink-500 to-purple-500',
    popular: false,
  },
  {
    icon: Camera,
    name: 'Photography',
    description: 'Professional photography services for events, portraits, products, and artistic projects.',
    priceRange: '$250 - $1,500+',
    features: [
      'Portrait sessions',
      'Event coverage',
      'Product photography',
      'Artistic & conceptual',
      'Photo editing & retouching',
    ],
    color: 'from-cyan-500 to-blue-500',
    popular: true,
  },
  {
    icon: Video,
    name: 'Video Art',
    description: 'Motion graphics, video editing, and experimental visual content for any platform.',
    priceRange: '$500 - $5,000+',
    features: [
      'Motion graphics',
      'Video editing & post',
      'Music videos',
      'Experimental visuals',
      'Social media content',
    ],
    color: 'from-purple-500 to-pink-500',
    popular: false,
  },
  {
    icon: PenTool,
    name: 'Graphic Design',
    description: 'Brand identity, marketing materials, and print design that makes an impact.',
    priceRange: '$200 - $3,000+',
    features: [
      'Logo & brand identity',
      'Marketing materials',
      'Print design',
      'Social media graphics',
      'Packaging design',
    ],
    color: 'from-emerald-500 to-teal-500',
    popular: true,
  },
  {
    icon: Box,
    name: 'Installation Art',
    description: 'Immersive art installations for galleries, events, and public spaces.',
    priceRange: '$2,000 - $25,000+',
    features: [
      'Gallery installations',
      'Interactive experiences',
      'Light installations',
      'Public art projects',
      'Event installations',
    ],
    color: 'from-orange-500 to-red-500',
    popular: false,
  },
  {
    icon: Code,
    name: 'Web Development',
    description: 'Custom websites and web applications built with modern technology and stunning design.',
    priceRange: '$1,500 - $15,000+',
    features: [
      'Custom websites',
      'E-commerce solutions',
      'Portfolio sites',
      'Web applications',
      'CMS integration',
    ],
    color: 'from-blue-500 to-indigo-500',
    popular: true,
  },
];

const packages = [
  {
    name: 'Starter',
    price: '$500',
    description: 'Perfect for small projects and initial collaborations',
    features: [
      'Single service project',
      '2 revision rounds',
      '7-day delivery',
      'Digital files',
      'Email support',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$1,500',
    description: 'Ideal for comprehensive creative projects',
    features: [
      'Multi-service project',
      'Unlimited revisions',
      '14-day delivery',
      'Source files included',
      'Priority support',
      'Commercial license',
    ],
    cta: 'Most Popular',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Full-scale creative solutions for businesses',
    features: [
      'Full creative suite',
      'Dedicated support',
      'Custom timeline',
      'Brand guidelines',
      'Ongoing maintenance',
      'Training & documentation',
    ],
    cta: 'Contact Us',
    highlighted: false,
  },
];

export default function ServicesClient() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={Sparkles}
          title="Services & Pricing"
          subtitle="Creative solutions tailored to bring your vision to life"
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services?.map?.((service, index) => (
            <GlassCard key={service?.name} className="relative overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index ?? 0) * 0.1 }}
              >
                {service?.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-aurora-purple text-white">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service?.color ?? 'from-gray-500 to-gray-600'} p-0.5 mb-4`}>
                  <div className="w-full h-full rounded-[10px] bg-[#0d0d0d] flex items-center justify-center">
                    {service?.icon && <service.icon className="w-7 h-7 text-white" />}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{service?.name ?? ''}</h3>
                <p className="text-white/60 text-sm mb-4 min-h-[48px]">{service?.description ?? ''}</p>
                
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="w-4 h-4 text-aurora-purple" />
                  <span className="text-lg font-bold gradient-text-aurora">{service?.priceRange ?? ''}</span>
                </div>

                <ul className="space-y-2">
                  {service?.features?.map?.((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-white/70">
                      <Check className="w-4 h-4 text-aurora-purple flex-shrink-0" />
                      {feature}
                    </li>
                  )) ?? null}
                </ul>
              </motion.div>
            </GlassCard>
          )) ?? null}
        </div>

        {/* Pricing Packages */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-aurora-purple/20 mb-4">
              <DollarSign className="w-6 h-6 text-aurora-purple" />
            </div>
            <h3 className="text-2xl font-bold text-white">Project Packages</h3>
            <p className="text-white/60 mt-2">Choose a package or request a custom quote</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages?.map?.((pkg, index) => (
              <motion.div
                key={pkg?.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index ?? 0) * 0.1 }}
                className={`relative rounded-2xl p-1 ${
                  pkg?.highlighted
                    ? 'bg-gradient-to-br from-aurora-pink via-aurora-purple to-aurora-blue'
                    : 'bg-transparent'
                }`}
              >
                <div className={`h-full rounded-[14px] p-6 ${
                  pkg?.highlighted
                    ? 'bg-[#0d0d0d]'
                    : 'glass-card'
                }`}>
                  {pkg?.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-aurora-pink to-aurora-blue text-white">
                        Recommended
                      </span>
                    </div>
                  )}

                  <h4 className="text-xl font-bold text-white mb-2">{pkg?.name ?? ''}</h4>
                  <div className="mb-4">
                    <span className="text-4xl font-bold gradient-text-aurora">{pkg?.price ?? ''}</span>
                    {pkg?.price !== 'Custom' && <span className="text-white/60 text-sm">/project</span>}
                  </div>
                  <p className="text-white/60 text-sm mb-6">{pkg?.description ?? ''}</p>

                  <ul className="space-y-3 mb-8">
                    {pkg?.features?.map?.((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-white/70">
                        <Check className="w-4 h-4 text-aurora-purple flex-shrink-0" />
                        {feature}
                      </li>
                    )) ?? null}
                  </ul>

                  <Link href="/contact" className="block">
                    <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                      pkg?.highlighted
                        ? 'btn-primary'
                        : 'btn-glass'
                    }`}>
                      {pkg?.cta ?? 'Get Started'}
                    </button>
                  </Link>
                </div>
              </motion.div>
            )) ?? null}
          </div>
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Discuss your vision and requirements' },
              { step: '02', title: 'Proposal', desc: 'Receive a detailed project proposal' },
              { step: '03', title: 'Creation', desc: 'Watch your project come to life' },
              { step: '04', title: 'Delivery', desc: 'Get final files and support' },
            ]?.map?.((item, index) => (
              <div key={item?.step} className="relative">
                <span className="text-5xl font-bold text-aurora-purple/20">{item?.step ?? ''}</span>
                <h4 className="text-lg font-bold text-white mt-2">{item?.title ?? ''}</h4>
                <p className="text-white/60 text-sm mt-1">{item?.desc ?? ''}</p>
                {(index ?? 0) < 3 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 text-white/20" />
                )}
              </div>
            )) ?? null}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-4">Ready to start your project?</p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-flex items-center gap-2 group"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
