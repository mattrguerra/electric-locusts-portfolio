import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const url = new URL(request?.url ?? 'http://localhost:3000');
    const limit = parseInt(url?.searchParams?.get?.('limit') ?? '50');
    const category = url?.searchParams?.get?.('category');

    const where: Record<string, unknown> = { published: true };
    if (category && category !== 'All') {
      where.category = category;
    }

    const posts = await prisma.blogPost.findMany({
      where,
      orderBy: { publishedAt: 'desc' },
      take: limit,
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverImage: true,
        category: true,
        tags: true,
        publishedAt: true,
        readTime: true,
        author: true,
      },
    });

    const serializedPosts = posts?.map?.((post: any) => ({
      ...(post ?? {}),
      publishedAt: post?.publishedAt?.toISOString?.() ?? null,
    })) ?? [];

    return NextResponse.json({ posts: serializedPosts });
  } catch (error) {
    console.error('Blog fetch error:', error);
    return NextResponse.json({ posts: [] }, { status: 500 });
  }
}
