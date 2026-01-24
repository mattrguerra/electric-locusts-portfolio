'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Instagram, Facebook } from 'lucide-react';

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

const inquiryTypes = [
  { value: '', label: 'Select inquiry type' },
  { value: 'Gallery Inquiry', label: 'Gallery Inquiry' },
  { value: 'Commission', label: 'Commission Request' },
  { value: 'Purchase', label: 'Purchase Inquiry' },
  { value: 'Collaboration', label: 'Collaboration' },
  { value: 'Press/Media', label: 'Press / Media' },
  { value: 'General', label: 'General' },
];

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message ?? 'Something went wrong');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Failed to send message');
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#0a0a0a]">
      {/* Atmospheric haze */}
      <div className="haze">
        <div className="haze-layer haze-1" />
        <div className="haze-layer haze-2" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="text-label text-gray-600 block mb-4">Get in Touch</span>
          <h1 className="font-display text-headline text-white mb-6">
            Let&apos;s Connect
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Gallery inquiries, commissions, collaborations—or simply a conversation about art and
            mental health. I read every message personally.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card p-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="font-display text-2xl text-white mb-3">Message Received</h3>
                <p className="text-gray-500 mb-8">
                  Thank you for reaching out. I&apos;ll respond within 48 hours.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-secondary">
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-label text-gray-500 block mb-3">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-label text-gray-500 block mb-3">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-label text-gray-500 block mb-3">Inquiry Type</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="select"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-label text-gray-500 block mb-3">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="input resize-none"
                    placeholder="Tell me what's on your mind..."
                  />
                </div>

                {/* Important note - now more visible */}
                <div className="bg-gray-900/50 border border-gray-800 rounded p-4">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    For project inquiries, feel free to share details about your vision, timeline, and
                    any reference material. It helps me provide the most thoughtful response.
                  </p>
                </div>

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400/80 text-sm"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errorMessage || 'Unable to send. Please try again.'}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div className="card p-6">
              <h3 className="text-label text-gray-500 mb-6">Direct Contact</h3>

              <div className="space-y-6">
                <a
                  href="mailto:mattguerra@electriclocusts.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-700 transition-colors">
                    <Mail className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs mb-1">Email</p>
                    <p className="text-gray-300 group-hover:text-white transition-colors text-sm">
                      mattguerra@electriclocusts.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs mb-1">Location</p>
                    <p className="text-gray-300 text-sm">Austin, Texas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="card p-6">
              <h3 className="text-label text-gray-500 mb-6">Follow</h3>

              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-500 hover:text-white transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
