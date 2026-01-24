'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, BookOpen } from 'lucide-react';
import SectionHeader from '@/components/ui/section-header';
import GlassCard from '@/components/ui/glass-card';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string | null;
  category: string;
  publishedAt: string | null;
  readTime: number;
}

export default function LatestPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blog?limit=3')
      .then(res => res?.json?.() ?? Promise.resolve({ posts: [] }))
      .then(data => {
        setPosts(data?.posts ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '';
    return new Date(dateString)?.toLocaleDateString?.('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }) ?? '';
  };

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={BookOpen}
          title="Latest Insights"
          subtitle="Thoughts on art, technology, and the creative process"
        />

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3]?.map?.((i) => (
              <div key={i} className="glass-card p-6 animate-pulse">
                <div className="aspect-video bg-white/10 rounded-xl mb-4" />
                <div className="h-4 bg-white/10 rounded w-1/4 mb-3" />
                <div className="h-6 bg-white/10 rounded mb-2" />
                <div className="h-4 bg-white/10 rounded w-3/4" />
              </div>
            )) ?? null}
          </div>
        ) : (posts?.length ?? 0) > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {posts?.map?.((post, index) => (
              <Link key={post?.id} href={`/blog/${post?.slug ?? ''}`}>
                <GlassCard className="h-full group cursor-pointer">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index ?? 0) * 0.1 }}
                  >
                    {post?.coverImage && (
                      <div className="aspect-video relative rounded-xl overflow-hidden mb-4">
                        <Image
                          src={post?.coverImage ?? ''}
                          alt={post?.title ?? 'Blog post'}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <span className="text-primary-400 text-sm font-medium">
                      {post?.category ?? ''}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 mb-2 group-hover:text-primary-300 transition-colors line-clamp-2">
                      {post?.title ?? ''}
                    </h3>
                    <p className="text-white/70 text-sm line-clamp-2 mb-4">
                      {post?.excerpt ?? ''}
                    </p>
                    <div className="flex items-center gap-4 text-white/50 text-xs">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post?.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post?.readTime ?? 5} min read
                      </span>
                    </div>
                  </motion.div>
                </GlassCard>
              </Link>
            )) ?? null}
          </div>
        ) : (
          <div className="text-center py-12 glass-card">
            <p className="text-white/60">No blog posts yet. Check back soon!</p>
          </div>
        )}

        {(posts?.length ?? 0) > 0 && (
          <div className="text-center">
            <Link href="/blog">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-glass inline-flex items-center gap-2 group"
              >
                Read All Articles
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
