'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Work' },
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
      setScrolled(window?.scrollY > 50);
    };
    window?.addEventListener?.('scroll', handleScroll);
    return () => window?.removeEventListener?.('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
          <span className="font-display text-2xl text-white/80">Electric Locusts</span>
        </div>
      </header>
    );
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/70 backdrop-blur-2xl border-b border-white/[0.06]' : ''
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="group">
              <span className="font-display text-2xl text-white/80 hover:text-white transition-colors duration-300">
                Electric Locusts
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems?.map?.((item) => (
                <Link
                  key={item?.href}
                  href={item?.href ?? '#'}
                  className={`relative text-sm tracking-wide transition-colors duration-300 ${
                    pathname === item?.href
                      ? 'text-white'
                      : 'text-gray-500 hover:text-gray-200'
                  }`}
                >
                  {item?.label}
                  {pathname === item?.href && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-aurora-pink via-aurora-purple to-aurora-blue"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              )) ?? null}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-500 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/95" onClick={() => setIsOpen(false)} />

            {/* Menu content */}
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="relative pt-24 px-6"
            >
              <div className="space-y-1">
                {navItems?.map?.((item, index) => (
                  <motion.div
                    key={item?.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={item?.href ?? '#'}
                      onClick={() => setIsOpen(false)}
                      className={`block py-4 font-display text-3xl transition-colors duration-300 ${
                        pathname === item?.href
                          ? 'text-white'
                          : 'text-gray-600 hover:text-gray-300'
                      }`}
                    >
                      {item?.label}
                    </Link>
                  </motion.div>
                )) ?? null}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
