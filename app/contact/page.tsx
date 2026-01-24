import { Metadata } from 'next';
import ContactClient from '@/components/contact/contact-client';

export const metadata: Metadata = {
  title: 'Contact | Matt Guerra — Electric Locusts',
  description:
    'Connect with Matt Guerra for gallery inquiries, commissions, collaborations, or conversations about art and mental health. Houston, TX based visual artist.',
  keywords: [
    'contact Matt Guerra',
    'commission artist Houston',
    'mental health art inquiry',
    'cyanotype commission',
    'fine art photography inquiry',
    'gallery representation',
    'art collaboration Texas',
  ],
  openGraph: {
    title: 'Contact Matt Guerra — Electric Locusts',
    description:
      'Reach out for gallery inquiries, commissions, or conversations about art and mental health advocacy.',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
