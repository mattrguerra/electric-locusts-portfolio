import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { AnimatedBackground } from '@/components/animated-background';

export const dynamic = 'force-dynamic';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: {
    default: 'Matthew Guerra — Electric Locusts | Visual Artist',
    template: '%s',
  },
  description:
    'Matthew Guerra is an Austin-based visual artist exploring identity, mental health, and vulnerability through photography, mixed media, cyanotypes, and video art. Mental health advocacy through art.',
  keywords: [
    'Matthew Guerra',
    'Electric Locusts',
    'visual artist Austin',
    'mental health art',
    'cyanotype photography',
    'mixed media artist',
    'contemporary photography',
    'identity art',
    'bipolar art',
    'self portrait photography',
    'alternative process photography',
  ],
  authors: [{ name: 'Matthew Guerra' }],
  creator: 'Matthew Guerra',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Electric Locusts',
    title: 'Matthew Guerra — Electric Locusts',
    description:
      'Visual artist exploring identity, mental illness, and the human experience through photography, mixed media, and alternative processes.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matthew Guerra — Electric Locusts',
    description:
      'Visual artist exploring identity, mental health, and vulnerability through photography and mixed media.',
    images: ['/og-image.png'],
    creator: '@electriclocusts',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[#050508] text-white">
        <AnimatedBackground />
        <Navigation />
        <main className="flex-grow pt-20 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
