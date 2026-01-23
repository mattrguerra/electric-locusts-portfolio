'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Share2, Tag } from 'lucide-react';
import GlassCard from '@/components/ui/glass-card';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  category: string;
  tags: string[];
  publishedAt: string | null;
  readTime: number;
  author: string;
}

interface Props {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostClient({ post, relatedPosts }: Props) {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return '';
    return new Date(dateString)?.toLocaleDateString?.('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }) ?? '';
  };

  const handleShare = async () => {
    if (navigator?.share) {
      try {
        await navigator.share({
          title: post?.title ?? '',
          text: post?.excerpt ?? '',
          url: window?.location?.href ?? '',
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      navigator?.clipboard?.writeText?.(window?.location?.href ?? '');
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary-500/20 text-primary-400 mb-4 inline-block">
            {post?.category ?? ''}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-6 leading-tight">
            {post?.title ?? ''}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post?.author ?? 'Matt Guerra'}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post?.publishedAt)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post?.readTime ?? 5} min read
            </span>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 hover:text-primary-400 transition-colors ml-auto"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </motion.header>

        {/* Cover Image */}
        {post?.coverImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="aspect-video relative rounded-2xl overflow-hidden mb-12 glass-card p-1"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src={post?.coverImage ?? ''}
                alt={post?.title ?? 'Blog post cover'}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        )}

        {/* Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-12 mb-12"
        >
          <div 
            className="prose prose-lg prose-invert max-w-none
              prose-headings:text-white prose-headings:font-display
              prose-p:text-white/70 prose-p:leading-relaxed
              prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white
              prose-ul:text-white/70 prose-ol:text-white/70
              prose-blockquote:border-primary-500 prose-blockquote:text-white/60 prose-blockquote:italic"
            dangerouslySetInnerHTML={{ __html: post?.content ?? '' }}
          />
        </motion.article>

        {/* Tags */}
        {(post?.tags?.length ?? 0) > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-white/40" />
              {post?.tags?.map?.((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm glass-light text-white/70"
                >
                  #{tag}
                </span>
              )) ?? null}
            </div>
          </motion.div>
        )}

        {/* Related Posts */}
        {(relatedPosts?.length ?? 0) > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedPosts?.map?.((relatedPost) => (
                <Link key={relatedPost?.id} href={`/blog/${relatedPost?.slug ?? ''}`}>
                  <GlassCard className="h-full group cursor-pointer p-4">
                    {relatedPost?.coverImage && (
                      <div className="aspect-video relative rounded-lg overflow-hidden mb-3">
                        <Image
                          src={relatedPost?.coverImage ?? ''}
                          alt={relatedPost?.title ?? 'Related post'}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <h3 className="font-bold text-white group-hover:text-primary-300 transition-colors line-clamp-2 text-sm">
                      {relatedPost?.title ?? ''}
                    </h3>
                  </GlassCard>
                </Link>
              )) ?? null}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
