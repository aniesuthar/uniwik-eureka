"use client";

import { motion } from "framer-motion";
import { Compass, Sparkles, ArrowRight, ShieldCheck, Store, Bookmark, Check } from "lucide-react";

export default function VisionSection() {
  return (
    <section className="w-full py-24 bg-slate-50 border-y border-slate-200/80 overflow-hidden" id="vision">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            We’re starting with discovery.
          </h2>
          <p className="text-lg text-slate-600 font-normal">
            Our progressive journey from personal organization to connecting with authentic brands.
          </p>
        </div>

        {/* Visual Roadmap & Bridge Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Phase 1: Today (Visual Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6 relative"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-[#0084ff] border border-blue-100">
                  Phase 1 — Today
                </span>
                <span className="text-xs font-semibold text-[#0084ff] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                  Active Product
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-950 mb-2">
                  Consumer Discovery Library
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Today, <strong className="text-slate-900 font-semibold">Uniwik</strong> helps people organize what they discover online across Instagram, YouTube, Amazon, Flipkart, and the web.
                </p>
              </div>

              {/* Visual Mockup Preview */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Your Personal Vault</span>
                  <span className="text-[#0084ff] font-bold">1-Tap Save</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                    <p className="font-bold text-slate-900 truncate">BoAt Rockerz Buds Pro</p>
                    <p className="text-[10px] text-slate-500">amazon.in • ₹ 1,200</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                    <p className="font-bold text-slate-900 truncate">ZARA Linen Overshirt</p>
                    <p className="text-[10px] text-slate-500">zara.com • ₹ 2,990</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-600">
              <Check className="w-4 h-4 text-[#0084ff]" />
              <span>Full private library with automated metadata extraction</span>
            </div>
          </motion.div>

          {/* Phase 2: Over Time (Visual Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6 relative"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  Phase 2 — Over Time
                </span>
                <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                  Future Roadmap
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-950 mb-2">
                  Trusted Brand Relationships
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Over time, we want to make it easier for consumers to discover, understand and build trusted relationships with independent brands.
                </p>
              </div>

              {/* Visual Brand Relationship Teaser */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Brand Discovery &amp; Trust</span>
                  <span className="text-slate-500">Long-term Vision</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-xs">Independent Brand Profiles</span>
                    <span className="text-[10px] font-semibold text-[#0084ff] bg-blue-50 px-2 py-0.5 rounded">
                      Direct Connection
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Brand identity, authenticity, origin stories, and consumer-brand connections.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 italic">
              * Note: These future capabilities will be introduced as the discovery platform matures.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
