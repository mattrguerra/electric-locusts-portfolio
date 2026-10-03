import type { Metadata } from 'next';
import { safeNext } from '@/lib/site-lock';

export const metadata: Metadata = {
  title: 'Private',
  robots: { index: false, follow: false },
};

export default async function UnlockPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>;
}) {
  const { next, error } = await searchParams;

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <form action="/api/unlock" method="POST" className="w-full max-w-sm">
        <h1 className="font-display text-4xl text-white mb-3">Electric Locusts</h1>
        <p className="text-gray-300 text-sm mb-10">
          This portfolio is private for now. Enter the password to view the work.
        </p>

        <input type="hidden" name="next" value={safeNext(next)} />
        <label htmlFor="password" className="block text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          autoComplete="current-password"
          className="w-full bg-transparent border-b border-white/20 focus:border-flesh-pale outline-none py-3 text-white text-lg transition-colors"
        />
        {error && (
          <p role="alert" className="text-sm text-flesh-warm mt-3">
            That password didn&apos;t work. Try again.
          </p>
        )}

        <button
          type="submit"
          className="mt-10 w-full border border-white/20 hover:border-white/50 hover:bg-white/[0.03] text-white text-xs uppercase tracking-[0.2em] py-4 transition-colors"
        >
          Enter
        </button>
      </form>
    </section>
  );
}
