import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const url = new URL(request?.url ?? 'http://localhost:3000');
    const category = url?.searchParams?.get?.('category');
    const featured = url?.searchParams?.get?.('featured');

    const where: Record<string, unknown> = {};
    if (category && category !== 'all') {
      where.category = category;
    }
    if (featured === 'true') {
      where.featured = true;
    }

    const items = await prisma.portfolioItem.findMany({
      where,
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
    });

    const serializedItems = items?.map?.((item: any) => ({
      ...(item ?? {}),
      createdAt: item?.createdAt?.toISOString?.() ?? '',
      updatedAt: item?.updatedAt?.toISOString?.() ?? '',
    })) ?? [];

    return NextResponse.json({ items: serializedItems });
  } catch (error) {
    console.error('Portfolio fetch error:', error);
    return NextResponse.json({ items: [] }, { status: 500 });
  }
}
