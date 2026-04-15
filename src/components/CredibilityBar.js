'use client';
import { motion } from 'framer-motion';

const stats = [
  { value: '$1.3M', label: 'CLOSED PERSONALLY IN 2025' },
  { value: '$2M+', label: 'UNDER MANAGEMENT IN 2025' },
  { value: '$280K', label: 'MY BEST WEEK CASH COLLECTED' },
  { value: '$214K', label: 'TOP CLOSER\'S BEST WEEK' },
  { value: '$28K', label: 'MY BEST WEEK IN COMMISSIONS' },
];

export default function CredibilityBar() {
  return (
    <section className="relative bg-black border-y border-neutral-900 py-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="font-bebas text-red-600 text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight">
              {stat.value}
            </div>
            <div className="mt-3 text-[10px] md:text-xs text-neutral-400 tracking-[0.15em] uppercase font-semibold max-w-[180px] mx-auto leading-tight">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
