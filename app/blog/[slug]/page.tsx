import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/db';
import BlogPostClient from '@/components/blog/blog-post-client';

export const dynamic = 'force-dynamic';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await prisma.blogPost.findUnique({
    where: { slug: params?.slug ?? '' },
  });

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post?.title ?? 'Blog Post',
    description: post?.excerpt ?? '',
    openGraph: {
      title: post?.title ?? '',
      description: post?.excerpt ?? '',
      images: post?.coverImage ? [post?.coverImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await prisma.blogPost.findUnique({
    where: { slug: params?.slug ?? '', published: true },
  });

  if (!post) {
    notFound();
  }

  const relatedPosts = await prisma.blogPost.findMany({
    where: {
      published: true,
      category: post?.category ?? '',
      NOT: { id: post?.id ?? '' },
    },
    take: 3,
    orderBy: { publishedAt: 'desc' },
  });

  const serializedPost = {
    ...post,
    publishedAt: post?.publishedAt?.toISOString?.() ?? null,
    createdAt: post?.createdAt?.toISOString?.() ?? '',
    updatedAt: post?.updatedAt?.toISOString?.() ?? '',
  };

  const serializedRelated = relatedPosts?.map?.(p => ({
    ...p,
    publishedAt: p?.publishedAt?.toISOString?.() ?? null,
    createdAt: p?.createdAt?.toISOString?.() ?? '',
    updatedAt: p?.updatedAt?.toISOString?.() ?? '',
  })) ?? [];

  return <BlogPostClient post={serializedPost} relatedPosts={serializedRelated} />;
}
