"use client";

import { motion } from "framer-motion";

export default function Guarantee() {
  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto border-4 border-scgred rounded-xl p-10 md:p-14 text-center shadow-redglow"
      >
        <h2 className="display uppercase text-[36px] md:text-[56px] leading-tight text-scgwhite">
          The 90-Day No-BS Guarantee
        </h2>
        <p className="mt-6 text-scgoff text-lg md:text-xl leading-relaxed">
          If any rep we place doesn't perform — or you just don't vibe with them
          — we replace them free within 90 days. You take zero risk. We take
          all of it.
        </p>
      </motion.div>
    </section>
  );
}
