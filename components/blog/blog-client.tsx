'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, Search, Tag, BookOpen, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/section-header';
import GlassCard from '@/components/ui/glass-card';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string | null;
  category: string;
  tags: string[];
  publishedAt: string | null;
  readTime: number;
  author: string;
}

const categories = ['All', 'Art', 'Photography', 'Technology', 'Design', 'Process'];

export default function BlogClient() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('/api/blog')
      .then(res => res?.json?.() ?? Promise.resolve({ posts: [] }))
      .then(data => {
        setPosts(data?.posts ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredPosts = posts?.filter?.(post => {
    const matchesCategory = activeCategory === 'All' || post?.category === activeCategory;
    const matchesSearch = (post?.title ?? '')?.toLowerCase?.()?.includes?.(searchQuery?.toLowerCase?.()) ||
                          (post?.excerpt ?? '')?.toLowerCase?.()?.includes?.(searchQuery?.toLowerCase?.());
    return matchesCategory && matchesSearch;
  }) ?? [];

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '';
    return new Date(dateString)?.toLocaleDateString?.('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }) ?? '';
  };

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={BookOpen}
          title="Blog & Insights"
          subtitle="Thoughts on art, technology, and the creative process"
        />

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e?.target?.value ?? '')}
              className="input-glass pl-12"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories?.map?.((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat ?? 'All')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary-500 text-white'
                    : 'glass-light text-white/70 hover:text-white hover:bg-white/15'
                }`}
              >
                {cat}
              </button>
            )) ?? null}
          </div>
        </div>

        {/* Blog Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6]?.map?.((i) => (
              <div key={i} className="glass-card p-6 animate-pulse">
                <div className="aspect-video bg-white/10 rounded-xl mb-4" />
                <div className="h-4 bg-white/10 rounded w-1/4 mb-3" />
                <div className="h-6 bg-white/10 rounded mb-2" />
                <div className="h-4 bg-white/10 rounded w-3/4" />
              </div>
            )) ?? null}
          </div>
        ) : (filteredPosts?.length ?? 0) > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts?.map?.((post, index) => (
              <Link key={post?.id} href={`/blog/${post?.slug ?? ''}`}>
                <GlassCard className="h-full group cursor-pointer">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index ?? 0) * 0.05 }}
                  >
                    {post?.coverImage && (
                      <div className="aspect-video relative rounded-xl overflow-hidden mb-4">
                        <Image
                          src={post?.coverImage ?? ''}
                          alt={post?.title ?? 'Blog post'}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/80 backdrop-blur-sm text-white">
                            {post?.category ?? ''}
                          </span>
                        </div>
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors line-clamp-2">
                      {post?.title ?? ''}
                    </h3>
                    <p className="text-white/60 text-sm line-clamp-2 mb-4">
                      {post?.excerpt ?? ''}
                    </p>

                    {(post?.tags?.length ?? 0) > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post?.tags?.slice?.(0, 3)?.map?.((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-xs text-white/50 bg-white/5"
                          >
                            #{tag}
                          </span>
                        )) ?? null}
                      </div>
                    )}

                    <div className="flex items-center justify-between text-white/40 text-xs">
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
          <div className="text-center py-16 glass-card">
            <BookOpen className="w-12 h-12 text-white/40 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No Articles Found</h3>
            <p className="text-white/60">
              {searchQuery || activeCategory !== 'All'
                ? 'Try adjusting your search or filter criteria.'
                : 'Check back soon for new content!'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
