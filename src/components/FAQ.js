"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How fast can you place a rep?",
    a: "Typically 7–14 days from purchase.",
  },
  {
    q: "What industries do you work with?",
    a: "Coaching, agencies, info products, high-ticket services ($3k+ AOV).",
  },
  {
    q: "Are these commission-only reps?",
    a: "Yes. All placed reps work commission-only on your offers.",
  },
  {
    q: "What's the replacement guarantee?",
    a: "90 days. No questions. No fee.",
  },
  {
    q: "What's included in the fractional management?",
    a: "Team hiring, script building, call reviews, daily standups, outbound systems, inbound flow optimization, commission structures.",
  },
  {
    q: "Do you guarantee specific results?",
    a: "No one ethically can. I guarantee the work, the systems, and the replacements. The results come from execution.",
  },
];

function Item({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left py-6 group"
      >
        <span className="display uppercase text-[22px] md:text-[28px] text-scgwhite group-hover:text-scgred transition-colors">
          {item.q}
        </span>
        <span
          className={`display text-scgred text-3xl ml-6 transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-scgoff text-base md:text-lg leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="section bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="display uppercase text-center text-[40px] md:text-[64px] leading-tight"
        >
          Questions.
        </motion.h2>

        <div className="mt-14">
          {faqs.map((f, i) => (
            <Item
              key={i}
              item={f}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
