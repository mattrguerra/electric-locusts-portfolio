import { Metadata } from 'next';
import ContactClient from '@/components/contact/contact-client';

export const metadata: Metadata = {
  title: 'Contact | Matthew Guerra — Electric Locusts',
  description:
    'Connect with Matthew Guerra for gallery inquiries, commissions, collaborations, or conversations about art and mental health. Austin, TX based visual artist.',
  keywords: [
    'contact Matthew Guerra',
    'commission artist Austin',
    'mental health art inquiry',
    'cyanotype commission',
    'fine art photography inquiry',
    'gallery representation',
    'art collaboration Texas',
  ],
  openGraph: {
    title: 'Contact Matthew Guerra — Electric Locusts',
    description:
      'Reach out for gallery inquiries, commissions, or conversations about art and mental health advocacy.',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
