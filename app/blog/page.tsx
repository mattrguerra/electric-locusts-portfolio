import { Metadata } from 'next';
import BlogClient from '@/components/blog/blog-client';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read insights, tutorials, and thoughts on art, technology, and the creative process from Electric Locusts.',
};

export default function BlogPage() {
  return <BlogClient />;
}
