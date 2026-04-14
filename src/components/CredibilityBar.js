"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "$1M+", label: "Closed personally in 2025" },
  { value: "$2M+", label: "Under management" },
  { value: "$29K", label: "My personal best week" },
  { value: "$70K", label: "Cash collected by one student in a week" },
];

export default function CredibilityBar() {
  return (
    <section className="border-y border-white/10 bg-black py-14 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.value}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <div className="display text-scgred text-[56px] md:text-[72px] leading-none">
              {s.value}
            </div>
            <div className="mt-2 uppercase tracking-widest text-[11px] md:text-xs text-scgoff">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
