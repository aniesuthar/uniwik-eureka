"use client";

import { motion } from "framer-motion";
import {
  Compass,
  BookmarkPlus,
  FolderKanban,
  RotateCw,
  ExternalLink,
  Tag,
  CheckCircle2,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      heading: "Find something interesting anywhere on the internet.",
      desc: "Browsing reels on Instagram, watching a tech review on YouTube, finding an outfit on a boutique site, or getting a recommendation on WhatsApp — you discover great things every day.",
      icon: <Compass className="w-5 h-5 text-[#0084ff]" />,
      preview: (
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0084ff]" />
              Spotted on YouTube
            </span>
            <span className="text-[11px]">Just now</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-slate-800 shrink-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=200&auto=format&fit=crop&q=80"
                alt="Keyboard"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-0.5 truncate">
              <p className="text-xs font-bold text-slate-900 truncate">Custom 75% Mechanical Keyboard</p>
              <p className="text-[10px] text-slate-500">youtube.com/watch?v=setup2026</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: "02",
      title: "Save",
      heading: "Save the link to Uniwik instead of sending it to yourself or taking another screenshot.",
      desc: "Use the share sheet or paste the URL directly. Uniwik instantly extracts the title, cover image, domain, and current price without cluttering your camera roll.",
      icon: <BookmarkPlus className="w-5 h-5 text-[#0084ff]" />,
      preview: (
        <div className="p-4 rounded-2xl bg-white border border-[#0084ff]/30 shadow-xs space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0084ff]" />
              Uniwik Save Drawer
            </span>
            <span className="text-[11px] font-semibold text-[#0084ff] bg-blue-50 px-2 py-0.5 rounded">
              Auto-Parsed
            </span>
          </div>
          <div className="p-3 rounded-xl bg-blue-50/40 border border-blue-100 text-xs space-y-1">
            <p className="font-bold text-slate-900">BoAt Rockerz Buds Pro H34GT</p>
            <p className="text-[10px] text-slate-500">amazon.in • ₹ 1,200</p>
          </div>
          <p className="text-[11px] text-slate-600 italic flex items-center gap-1">
            <Tag className="w-3 h-3 text-slate-400" />
            &ldquo;Compare with Sony WF-C500 before buying&rdquo;
          </p>
        </div>
      ),
    },
    {
      num: "03",
      title: "Organize",
      heading: "Put discoveries into personal collections such as: Wishlist, Compare Later, Gift Ideas, Home, Office, Travel, Fashion, Electronics.",
      desc: "Organize your saves into tailored folders so you can easily browse items by room, project, or recipient.",
      icon: <FolderKanban className="w-5 h-5 text-[#0084ff]" />,
      preview: (
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2.5">
          <span className="text-xs font-bold text-slate-900 block">Personal Collections</span>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {[
              { name: "Wishlist", count: "18" },
              { name: "Gift Ideas", count: "6" },
              { name: "Compare Later", count: "8" },
              { name: "Tech Setup", count: "9" },
            ].map((c, i) => (
              <div
                key={i}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 font-medium text-slate-800 flex items-center justify-between"
              >
                <span>{c.name}</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white text-[#0084ff] border border-slate-200">
                  {c.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      num: "04",
      title: "Revisit",
      heading: "Come back to your saved discoveries when you’re ready to compare, buy or explore.",
      desc: "Your entire discovery library is structured, searchable, and always accessible across all your devices.",
      icon: <RotateCw className="w-5 h-5 text-[#0084ff]" />,
      preview: (
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0084ff]" />
              Original Store Link Active
            </span>
            <span className="text-[10px] font-semibold text-[#0084ff] bg-blue-50 px-2 py-0.5 rounded">
              Ready
            </span>
          </div>
          <div className="flex items-center justify-between pt-1">
            <span className="text-xs text-slate-600">Open source with 1 tap</span>
            <span className="text-xs font-bold text-[#0084ff] flex items-center gap-1">
              Visit Store <ExternalLink className="w-3 h-3" />
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full py-24 bg-white overflow-hidden" id="how-it-works">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 font-normal">
            A simple, consistent flow from initial discovery to revisiting what matters.
          </p>
        </motion.div>

        {/* 4 Rich Step Cards in clean slate-50 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              className="p-8 rounded-3xl bg-slate-50/80 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-6 hover:border-slate-300 transition-colors"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[#0084ff]">
                    {s.num} — {s.title}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 leading-snug">
                  {s.heading}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="pt-2">
                {s.preview}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
