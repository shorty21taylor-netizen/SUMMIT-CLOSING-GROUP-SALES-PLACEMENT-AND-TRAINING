"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
      <div className="relative mb-10">
        <div className="pulse-ring" aria-hidden="true" />
        <img
          src="/logo.png"
          alt="Summit Closing Group"
          className="relative z-10 w-[120px] h-auto mx-auto"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="display uppercase text-[44px] leading-[0.95] sm:text-[64px] md:text-[78px] lg:text-[92px] max-w-5xl tracking-tight"
      >
        We place closers in your business.
        <br />
        <span className="text-scgred">Or we train your whole damn team.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mt-8 max-w-[600px] text-[18px] text-scgoff leading-relaxed"
      >
        Done-for-you sales talent + fractional sales management for 7-figure
        coaches, agencies, and info businesses. Backed by a 90-day replacement
        guarantee.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <button onClick={() => scrollTo("offer-one")} className="btn-red">
          Place a Closer →
        </button>
        <button onClick={() => scrollTo("offer-two")} className="btn-outline">
          Get Sales Management →
        </button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-8 text-sm text-scgoff/70"
      >
        $2M+ under management. $1M+ personally closed. Results below.
      </motion.p>
    </section>
  );
}
