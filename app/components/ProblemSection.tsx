"use client";

import { motion } from "framer-motion";
import {
  Image as ImageIcon,
  MessageCircle,
  Bookmark,
  Globe,
  FileText,
  ShoppingBag,
  Search,
  XCircle,
} from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      platform: "Instagram",
      title: "Instagram saves.",
      desc: "Saved reels and posts disappear into an endless unorganized grid of thousands of mixed videos.",
      tag: "Never opened again",
      preview: (
        <div className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-xs">
          <div className="p-2.5 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
            <span className="flex items-center gap-1.5 text-slate-900 font-bold">
              <Bookmark className="w-3.5 h-3.5 text-[#0084ff] fill-[#0084ff]" />
              Saved Audio &amp; Reels
            </span>
            <span className="text-[#0084ff] font-semibold text-[10px]">1,420 items</span>
          </div>
          <div className="p-3 grid grid-cols-3 gap-1.5 bg-slate-100/60">
            <div className="aspect-square rounded-lg bg-slate-300 overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&auto=format&fit=crop&q=80" alt="Reel" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-lg bg-slate-300 overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200&auto=format&fit=crop&q=80" alt="Reel" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-lg bg-slate-200 flex items-center justify-center text-[10px] text-slate-400 font-bold">
              +1.4k
            </div>
          </div>
        </div>
      ),
    },
    {
      platform: "WhatsApp",
      title: "WhatsApp messages.",
      desc: "Links forwarded to your own chat or friend groups get buried beneath daily conversations within 48 hours.",
      tag: "Buried in chat",
      preview: (
        <div className="rounded-2xl bg-white border border-slate-200/90 p-3 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
            <span className="flex items-center gap-1.5 text-slate-900 font-bold">
              <MessageCircle className="w-3.5 h-3.5 text-[#0084ff]" />
              You (Chat to Self)
            </span>
            <span className="text-[10px]">Yesterday</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
            <p className="text-[10px] font-mono text-slate-700 truncate">
              https://amazon.in/dp/B0BoAt-Buds...
            </p>
            <p className="text-[10px] text-slate-500 italic">“Check this out for Diwali”</p>
          </div>
          <div className="text-[10px] text-slate-400 text-right">↓ Buried under 42 new messages</div>
        </div>
      ),
    },
    {
      platform: "Screenshots",
      title: "Screenshots.",
      desc: "Hundreds of random screenshots cluttering your photo roll with zero searchable text or live links.",
      tag: "Zero metadata",
      preview: (
        <div className="rounded-2xl bg-white border border-slate-200/90 p-3 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
            <span className="flex items-center gap-1.5 text-slate-900 font-bold">
              <ImageIcon className="w-3.5 h-3.5 text-[#0084ff]" />
              Camera Roll
            </span>
            <span className="text-[10px] text-slate-400">Screenshots</span>
          </div>
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-10 h-10 rounded-lg bg-slate-300 overflow-hidden shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&auto=format&fit=crop&q=80" alt="Screenshot" className="w-full h-full object-cover" />
            </div>
            <div className="truncate">
              <p className="text-xs font-bold text-slate-900 truncate">IMG_8492.PNG</p>
              <p className="text-[10px] text-slate-500 font-medium flex items-center gap-1">
                <XCircle className="w-3 h-3 text-slate-400" /> No clickable link or price
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      platform: "Bookmarks",
      title: "Browser bookmarks.",
      desc: "URLs saved across desktop and mobile Safari/Chrome tabs that gather digital dust and get forgotten.",
      tag: "Hidden away",
      preview: (
        <div className="rounded-2xl bg-white border border-slate-200/90 p-3 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
            <span className="flex items-center gap-1.5 text-slate-900 font-bold">
              <Globe className="w-3.5 h-3.5 text-[#0084ff]" />
              Safari / Chrome
            </span>
            <span className="text-[10px] text-slate-400">Bookmarks Bar</span>
          </div>
          <div className="space-y-1 text-xs">
            <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-[11px]">
              <span className="text-slate-700 truncate">📁 Summer Shopping 2024</span>
              <span className="text-slate-400 text-[10px]">62 tabs</span>
            </div>
            <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-[11px]">
              <span className="text-slate-700 truncate">📁 Desk Setup Ideas</span>
              <span className="text-slate-400 text-[10px]">38 tabs</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      platform: "Notes",
      title: "Notes.",
      desc: "Raw, unformatted link dumps with no preview images, prices, notes, or indication of what was inside.",
      tag: "Missing context",
      preview: (
        <div className="rounded-2xl bg-white border border-slate-200/90 p-3 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
            <span className="flex items-center gap-1.5 text-slate-900 font-bold">
              <FileText className="w-3.5 h-3.5 text-[#0084ff]" />
              Notes App
            </span>
            <span className="text-[10px] text-slate-400">Untitled note</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-[10px] text-slate-600 space-y-1">
            <p className="truncate text-[#0084ff] underline">https://zara.com/in/en/p1234.html</p>
            <p className="truncate text-[#0084ff] underline">https://woodlandworldwide.com/item8</p>
            <p className="text-slate-400 italic text-[9px] pt-1">What were these links for again?</p>
          </div>
        </div>
      ),
    },
    {
      platform: "Wishlists",
      title: "Amazon wishlists.",
      desc: "Trapped within single marketplace silos, completely disconnected from your YouTube or Instagram discoveries.",
      tag: "Platform silo",
      preview: (
        <div className="rounded-2xl bg-white border border-slate-200/90 p-3 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
            <span className="flex items-center gap-1.5 text-slate-900 font-bold">
              <ShoppingBag className="w-3.5 h-3.5 text-[#0084ff]" />
              Amazon Wishlist
            </span>
            <span className="text-[10px] text-[#0084ff] font-semibold">Single Silo</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
            <div>
              <p className="font-bold text-slate-900 text-[11px]">Wishlist #1</p>
              <p className="text-[10px] text-slate-500">Only contains Amazon items</p>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-semibold">
              Isolated
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full py-24 bg-white overflow-hidden" id="problem">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Your discoveries are scattered.
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 font-normal">
            You find something worth saving — but where does it go?
          </p>
        </motion.div>

        {/* 6 Problem Cards with Rich Visual Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between space-y-5 hover:border-slate-300 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-950">{p.title}</h3>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-200/80 text-slate-700">
                    {p.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>

              <div>
                {p.preview}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Concluding Statement: Visual Search Frustration Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 max-w-3xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 shadow-xs text-center space-y-6"
        >
          {/* Simulated Frustrating Search Bar */}
          <div className="max-w-md mx-auto p-3 rounded-full bg-white border border-slate-300/80 shadow-xs flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-slate-400 pl-2">
              <Search className="w-4 h-4 text-slate-400" />
              <span className="text-slate-700 font-medium font-mono text-[11px]">
                “that brown jacket from last month”
              </span>
            </div>
            <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
              0 results found
            </span>
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">
              And later, when you actually want it…
            </p>
            <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
              You can’t find it.
            </h3>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto pt-1 font-normal">
              You spend 15 minutes searching through messaging apps, bookmarks, and your photo library just to find that one link.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-[11px] text-slate-500 font-medium">
            <span className="px-3 py-1 rounded-full bg-white border border-slate-200">Lost in Instagram saves</span>
            <span className="px-3 py-1 rounded-full bg-white border border-slate-200">Buried in WhatsApp</span>
            <span className="px-3 py-1 rounded-full bg-white border border-slate-200">Missing in Safari tabs</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
