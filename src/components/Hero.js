'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-black overflow-hidden">
      {/* Subtle red radial glow behind logo */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-12"
      >
        <Image
          src="/logo.svg"
          alt="Summit Closing Group"
          width={280}
          height={210}
          priority
          className="w-[200px] md:w-[260px] h-auto"
        />
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-10 text-center font-bebas tracking-tight leading-[0.95] text-white text-5xl md:text-7xl lg:text-8xl max-w-5xl"
      >
        WE PLACE CLOSERS IN YOUR BUSINESS.<br />
        <span className="text-red-600">OR WE TRAIN YOUR WHOLE DAMN TEAM.</span>
      </motion.h1>

      {/* Subhead */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative z-10 mt-8 text-center text-neutral-300 text-base md:text-lg max-w-2xl"
      >
        Done-for-you sales talent + fractional sales management for 7-figure coaches, agencies, and info businesses. Backed by a 90-day replacement guarantee.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="relative z-10 mt-10 flex flex-col sm:flex-row gap-4"
      >
        <a
          href="#offer-one"
          className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold tracking-wide transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
        >
          PLACE A CLOSER →
        </a>
        <a
          href="#offer-two"
          className="px-8 py-4 border-2 border-white text-white font-bold tracking-wide hover:bg-white hover:text-black transition-all hover:scale-[1.02]"
        >
          GET SALES MANAGEMENT →
        </a>
      </motion.div>

      {/* Trust line */}
      <p className="relative z-10 mt-8 text-xs text-neutral-500 tracking-wider">
        $2M+ UNDER MANAGEMENT  •  $1M+ PERSONALLY CLOSED  •  RESULTS BELOW
      </p>
    </section>
  );
}
