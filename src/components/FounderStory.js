"use client";

import { motion } from "framer-motion";

export default function FounderStory() {
  return (
    <section className="section bg-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-xl overflow-hidden border border-white/10 bg-[#111] aspect-[4/5]"
        >
          <img
            src="/award.jpg"
            alt="$1M award"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="display uppercase text-[40px] md:text-[64px] leading-[0.95]">
            I'm not a guru. <span className="text-scgred">I'm a closer.</span>
          </h2>
          <p className="mt-8 text-scgoff text-lg leading-relaxed">
            I've spent the last decade on the phone. No fluff, no funnels, no
            recycled guru playbooks — just real conversations that move real
            money. I've built closer teams from zero and turned $0/mo reps into
            five-figure earners. I run the department I'm selling you.
          </p>
          <p className="mt-6 text-scgoff text-lg leading-relaxed">
            I closed over $1M in cash in 2025. I manage $2M+ in active sales
            pipelines. I've trained reps from zero to $17k/month in
            commissions. If you want someone who actually does the work — not
            just teaches it — we should talk.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
