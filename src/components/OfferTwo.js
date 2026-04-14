"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    name: "3 Months",
    price: "$5,000",
    desc: "Unlimited placement + 90 days of hands-on training and ramp on inbound + outbound sales.",
    href: "https://buy.stripe.com/REPLACE_MGMT3",
    popular: false,
  },
  {
    name: "6 Months",
    price: "$8,000",
    desc: "Everything in 3-month + extended ramp and team development. Recommended for teams scaling past $100k/mo.",
    href: "https://buy.stripe.com/REPLACE_MGMT6",
    popular: true,
  },
];

export default function OfferTwo() {
  return (
    <section id="offer-two" className="section scroll-anchor bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="display uppercase text-center text-[36px] md:text-[56px] leading-tight"
        >
          Offer 2 — I Run Your Sales Department
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-center text-scgoff max-w-3xl mx-auto leading-relaxed"
        >
          Unlimited rep placement + hands-on training and ramp on inbound AND
          outbound. I train with your team for the full engagement. This is the
          one if you want a real sales machine.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative card flex flex-col"
            >
              {t.popular && <span className="ribbon">Best Value</span>}
              <h3 className="display uppercase text-[32px] md:text-[40px]">
                {t.name}
              </h3>
              <div className="display text-scgred text-[56px] md:text-[72px] leading-none mt-2">
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
