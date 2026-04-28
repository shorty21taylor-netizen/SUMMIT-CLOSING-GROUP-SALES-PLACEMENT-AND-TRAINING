"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    name: "1 Closer",
    price: "$1,500",
    desc: "One vetted closer placed in your business. 90-day guarantee.",
    href: "https://buy.stripe.com/REPLACE_REP1",
    popular: false,
  },
  {
    name: "2 Closers",
    price: "$2,300",
    desc: "Two vetted closers. Save $700 vs individual.",
    href: "https://buy.stripe.com/REPLACE_REP2",
    popular: true,
  },
  {
    name: "3 Closers",
    price: "$3,400",
    desc: "Full closer stack. Save $1,100. Best value.",
    href: "https://buy.stripe.com/REPLACE_REP3",
    popular: false,
  },
  {
    name: "Sales Manager",
    price: "$2,000",
    desc: "Experienced sales manager placed to lead and scale your closer team.",
    href: "https://buy.stripe.com/REPLACE_SM",
    popular: false,
  },
];

export default function OfferOne() {
  return (
    <section id="offer-one" className="section scroll-anchor bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="display uppercase text-center text-[36px] md:text-[56px] leading-tight"
        >
          Offer 1 — Place Elite Closers in Your Business
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-center text-scgoff max-w-3xl mx-auto leading-relaxed"
        >
          Vetted, trained, commission-ready closers dropped into your team.
          90-day replacement guarantee. If they don't perform or you don't like
          them, we replace them free.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative card flex flex-col"
            >
              {t.popular && <span className="ribbon">Most Popular</span>}
              <h3 className="display uppercase text-[32px] md:text-[36px]">
                {t.name}
              </h3>
              <div className="display text-scgred text-[56px] md:text-[64px] leading-none mt-2">
                {t.price}
              </div>
              <p className="mt-4 text-scgoff flex-1">{t.desc}</p>
              <a href={t.href} className="btn-red mt-8 w-full text-center">
                Buy Now →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
