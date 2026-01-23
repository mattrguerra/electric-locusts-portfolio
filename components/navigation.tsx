'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window?.scrollY > 20);
    };
    window?.addEventListener?.('scroll', handleScroll);
    return () => window?.removeEventListener?.('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <span className="text-lg font-display font-light tracking-wide text-white/90">
              Matthew Guerra
            </span>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-organic',
        scrolled ? 'py-3' : 'py-5'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            'flex items-center justify-between transition-all duration-700 ease-organic rounded-2xl',
            scrolled ? 'h-14 px-6 glass-corrupted' : 'h-16 px-2'
          )}
        >
          {/* Logo - Artist name */}
          <Link href="/" className="group relative z-10">
            <motion.span
              whileHover={{ opacity: 0.7 }}
              transition={{ duration: 0.3 }}
              className="text-lg font-display font-light tracking-wide text-white/90"
            >
              Matthew Guerra
            </motion.span>
          </Link>

          {/* Desktop Navigation - Minimal, organic */}
          <nav className="hidden md:flex items-center gap-1 relative z-10">
            {navItems?.map?.((item) => (
              <Link
                key={item?.href}
                href={item?.href ?? '#'}
                className={cn(
                  'relative px-5 py-2.5 text-sm font-light tracking-wide transition-all duration-500 ease-organic',
                  pathname === item?.href
                    ? 'text-white'
                    : 'text-white/40 hover:text-white/70'
                )}
              >
                {/* Active indicator - subtle organic underline */}
                {pathname === item?.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-px"
                    style={{
                      background:
                        'linear-gradient(90deg, transparent 0%, rgba(107, 74, 139, 0.6) 50%, transparent 100%)',
                    }}
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{item?.label}</span>
              </Link>
            )) ?? null}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-xl text-white/60 hover:text-white transition-colors duration-300 relative z-10"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Corrupted Glass */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.1, 1] }}
            className="md:hidden mx-4 mt-3 rounded-2xl glass-corrupted overflow-hidden"
          >
            <nav className="p-3">
              {navItems?.map?.((item, index) => (
                <motion.div
                  key={item?.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, ease: [0.4, 0, 0.1, 1] }}
                >
                  <Link
                    href={item?.href ?? '#'}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'block px-4 py-4 rounded-xl text-base font-light tracking-wide transition-all duration-400 ease-organic',
                      pathname === item?.href
                        ? 'text-white bg-white/5'
                        : 'text-white/40 hover:text-white/70 hover:bg-white/[0.02]'
                    )}
                  >
                    {item?.label}
                  </Link>
                </motion.div>
              )) ?? null}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
