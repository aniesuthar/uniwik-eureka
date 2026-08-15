"use client";

import { motion } from "framer-motion";
import {
  Compass,
  BookmarkPlus,
  FolderKanban,
  RotateCw,
  ArrowRight,
} from "lucide-react";

export default function SolutionFlow() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "Spot an interesting product, video, outfit, or brand anywhere on the web.",
      icon: <Compass className="w-5 h-5 text-[#0084ff]" />,
    },
    {
      num: "02",
      title: "Save",
      desc: "Tap share or paste URL. Title, high-res images, domain, and prices auto-extracted.",
      icon: <BookmarkPlus className="w-5 h-5 text-[#0084ff]" />,
    },
    {
      num: "03",
      title: "Organize",
      desc: "Sort into tailored private collections like Wishlist, Gift Ideas, or Tech.",
      icon: <FolderKanban className="w-5 h-5 text-[#0084ff]" />,
    },
    {
      num: "04",
      title: "Revisit",
      desc: "Return anytime to search, compare, review notes, and open original store pages.",
      icon: <RotateCw className="w-5 h-5 text-[#0084ff]" />,
    },
  ];

  return (
    <section className="w-full py-24 bg-slate-50 border-y border-slate-200/80 overflow-hidden" id="solution">
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
            Bring your discoveries together.
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            Uniwik turns scattered links and discoveries into <span className="text-slate-900 font-medium">one personal library</span> that you can organize and revisit whenever you need them.
          </p>
        </motion.div>

        {/* 4-Step Pipeline Cards with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 relative">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-6 hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                  0{idx + 1}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
                <span>Personal Library</span>
                {idx < 3 && (
                  <ArrowRight className="hidden md:block w-4 h-4 text-slate-400" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
