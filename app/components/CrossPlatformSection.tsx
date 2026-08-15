"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function CrossPlatformSection() {
  const sources = [
    {
      platform: "Instagram",
      desc: "Save reels, creator recommendations, aesthetic cafes, and fashion inspo in 1 tap.",
      pill: "Reels & Posts",
    },
    {
      platform: "YouTube",
      desc: "Save video reviews, desk setup breakdowns, DIY tutorials, and gear recommendations.",
      pill: "Videos & Reviews",
    },
    {
      platform: "Amazon",
      desc: "Save electronics, home appliances, book recommendations, and daily essentials.",
      pill: "Products & Deals",
    },
    {
      platform: "Flipkart",
      desc: "Save festive sale deals, fashion finds, gadgets, and accessories with live price tracking.",
      pill: "Marketplace",
    },
    {
      platform: "Brand Websites",
      desc: "Save directly from Zara, Woodland, Nike, Apple, or independent Shopify D2C stores.",
      pill: "Direct Stores",
    },
    {
      platform: "Other Sources",
      desc: "Save WhatsApp links sent by friends, Substack newsletters, and any web article.",
      pill: "Any URL",
    },
  ];

  return (
    <section className="w-full py-24 bg-slate-50 border-y border-slate-200/80 overflow-hidden" id="platforms">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Concise 1-Line) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3.5"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            One library for every platform.
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            Uniwik gives you one common place to keep discoveries from Instagram, YouTube, Amazon, and across the web.
          </p>
        </motion.div>

        {/* 6 Clean Platform Cards in bg-white */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sources.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-950">{item.platform}</h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {item.pill}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Check className="w-4 h-4 text-[#0084ff]" />
                <span>One-tap URL extraction</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
