import type { Metadata } from 'next';
import { IBM_Plex_Sans, IBM_Plex_Serif } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export const dynamic = 'force-dynamic';

const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: {
    default: 'Electric Locusts',
    template: '%s | Electric Locusts',
  },
  description:
    'Visual artist exploring identity, mental health, and vulnerability through photography, mixed media, and alternative processes.',
  keywords: [
    'Electric Locusts',
    'Matthew Guerra',
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
    title: 'Electric Locusts',
    description:
      'Visual artist exploring identity, mental illness, and the human experience through photography, mixed media, and alternative processes.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electric Locusts',
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
    <html lang="en" className={`${ibmPlex.variable} ${ibmPlexSerif.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-[#0a0a0a] text-[gray]">
        <Navigation />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
