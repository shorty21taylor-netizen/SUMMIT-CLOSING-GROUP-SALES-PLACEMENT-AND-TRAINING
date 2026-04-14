"use client";

import { motion } from "framer-motion";

export default function ProblemSection() {
  return (
    <section className="section">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="display uppercase text-[40px] md:text-[64px] leading-tight text-center"
        >
          Your sales problem is one of two things.
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="card"
          >
            <h3 className="display text-[28px] md:text-[34px] uppercase text-scgwhite">
              You don't have closers.
            </h3>
            <p className="mt-4 text-scgoff leading-relaxed">
              Your leads die in the pipeline. Your calendar is full, your bank
              account isn't.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="card"
          >
            <h3 className="display text-[28px] md:text-[34px] uppercase text-scgwhite">
              You have closers who can't close.
            </h3>
            <p className="mt-4 text-scgoff leading-relaxed">
              They need a real sales manager. Not more courses. Not another
              webinar. Coaching that ramps them in 90 days.
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 text-center display text-scgred text-[44px] md:text-[64px] uppercase tracking-tight"
        >
          We fix both.
        </motion.p>
      </div>
    </section>
  );
}
