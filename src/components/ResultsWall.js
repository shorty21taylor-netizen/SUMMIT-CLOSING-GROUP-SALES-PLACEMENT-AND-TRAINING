"use client";

import { motion } from "framer-motion";

const results = [
  { amount: "$17,000", name: "Ayah", timeframe: "In a single month", img: "/results/ayah.jpg" },
  { amount: "$16,000", name: "Jarissa", timeframe: "In one week", img: "/results/jarissa-16k.jpg" },
  { amount: "$3,300", name: "Jarissa", timeframe: "In two days", img: "/results/jarissa-3300.jpg" },
  { amount: "$3,000", name: "Ray", timeframe: "In three days", img: "/results/ray.jpg" },
  { amount: "$70,000", name: "Setter Student", timeframe: "Cash collected in one week", img: "/results/setter-70k.jpg" },
  { amount: "$4,000", name: "New Rep", timeframe: "In her first month of high ticket", img: "/results/newrep-4k.jpg" },
];

export default function ResultsWall() {
  return (
    <section className="section bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="display uppercase text-center text-[36px] md:text-[64px] leading-tight"
        >
          The results speak louder than I do.
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="card flex flex-col"
            >
              <div className="display text-scgred text-[56px] md:text-[64px] leading-none">
                {r.amount}
              </div>
              <div className="mt-2 display uppercase text-[22px] text-scgwhite">
                {r.name}
              </div>
              <div className="mt-1 text-sm uppercase tracking-widest text-scgoff">
                {r.timeframe}
              </div>
              <div className="mt-5 aspect-video bg-[#111] rounded-md overflow-hidden border border-white/10">
                <img
                  src={r.img}
                  alt={`${r.name} — ${r.amount}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
