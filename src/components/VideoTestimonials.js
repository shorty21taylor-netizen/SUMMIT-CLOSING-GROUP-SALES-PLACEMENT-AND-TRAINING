"use client";

import { motion } from "framer-motion";

const videos = Array.from({ length: 6 }, (_, i) => ({
  src: `/videos/testimonial${i + 1}.mp4`,
  poster: `/videos/testimonial${i + 1}.jpg`,
}));

export default function VideoTestimonials() {
  return (
    <section className="section bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="display uppercase text-center text-[36px] md:text-[64px] leading-tight"
        >
          Hear it from them.
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="rounded-lg overflow-hidden border border-white/10 bg-black"
            >
              <video
                controls
                preload="metadata"
                poster={v.poster}
                className="w-full h-full aspect-video object-cover bg-[#111]"
              >
                <source src={v.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
