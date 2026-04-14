"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-black relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(220,38,38,0.25) 0%, rgba(0,0,0,0) 60%)",
        }}
      />
      <div className="relative max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="display uppercase text-[44px] md:text-[96px] leading-[0.95]"
        >
          Stop leaving money
          <br />
          <span className="text-scgred">on the table.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-8 text-scgoff text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Every day you don't have closers is a day your competitors are eating
          your leads.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button onClick={() => scrollTo("offer-one")} className="btn-red">
            Place a Closer →
          </button>
          <button onClick={() => scrollTo("offer-two")} className="btn-outline">
            Get Sales Management →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
