'use client';

import Link from 'next/link';
import { Instagram, Facebook, Mail } from 'lucide-react';

// Threads icon component
const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.33-3.022.88-.73 2.039-1.126 3.452-1.179 1.022-.038 1.972.07 2.85.283-.043-1.108-.242-1.937-.6-2.495-.46-.717-1.227-1.083-2.28-1.09-1.594.013-2.503.72-2.71 2.104l-2.012-.341c.36-2.28 2.083-3.622 4.722-3.68 1.692.013 2.996.576 3.878 1.674.752.936 1.15 2.265 1.183 3.948v.108c1.158.56 2.078 1.381 2.673 2.397.814 1.39 1.072 3.317-.033 5.398-1.407 2.647-4.033 4.108-7.39 4.108zm-.578-7.727c-.804.03-1.45.242-1.863.612-.364.328-.541.744-.512 1.204.044.707.612 1.433 1.875 1.576.33.037.658.037.986 0 .965-.053 1.69-.404 2.154-1.045.308-.427.508-.974.595-1.629-1.02-.33-2.119-.785-3.235-.718z" />
  </svg>
);

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

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="group inline-block">
              <span className="font-display text-xl text-white hover:text-gray-300 transition-colors">
                Electric Locusts
              </span>
              <span className="block w-0 h-px bg-gradient-to-r from-aurora-pink to-aurora-blue group-hover:w-full transition-all duration-300" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Visual art exploring mental illness, identity, and the evidence we leave behind.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <span className="text-xs tracking-[0.15em] uppercase text-gray-400 block">Navigate</span>
            <nav className="flex flex-col gap-2">
              <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors text-sm">
                Work
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <span className="text-xs tracking-[0.15em] uppercase text-gray-400 block">Connect</span>
            <a
              href="mailto:mattguerra@electriclocusts.com"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm group"
            >
              <Mail className="w-4 h-4" />
              <span>mattguerra@electriclocusts.com</span>
            </a>
            <div className="flex items-center gap-4 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm pt-1">Houston, Texas</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Matt Guerra. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Photography · Mixed Media · Alternative Process
          </p>
        </div>
      </div>
    </footer>
  );
}
