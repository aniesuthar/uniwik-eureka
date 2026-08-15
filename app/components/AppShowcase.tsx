"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  Link as LinkIcon,
  Search,
  Bookmark,
  Plus,
  Compass,
  User,
  Globe,
  Tag,
} from "lucide-react";

export default function AppShowcase() {
  const [activeTab, setActiveTab] = useState<"home" | "save" | "collections">("home");

  return (
    <section className="w-full py-24 bg-slate-50 border-y border-slate-200/80 overflow-hidden" id="product-preview">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14 space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Effortless discovery and saving.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A frictionless mobile experience that captures full context — title, image, price, and personal notes — the instant you save a link.
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex items-center p-1 sm:p-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs mt-3 gap-1 max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab("home")}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "home"
                  ? "bg-slate-950 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              Home Feed
            </button>
            <button
              onClick={() => setActiveTab("save")}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "save"
                  ? "bg-slate-950 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              Save Box Drawer
            </button>
            <button
              onClick={() => setActiveTab("collections")}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "collections"
                  ? "bg-slate-950 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              Collections
            </button>
          </div>
        </motion.div>

        {/* Mockup Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Feature Description Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-4 order-2 lg:order-1"
          >
            <div
              onClick={() => setActiveTab("home")}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                activeTab === "home"
                  ? "bg-white border-slate-900 shadow-sm ring-1 ring-slate-900/10"
                  : "bg-white/60 border-slate-200 hover:bg-white"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="text-base font-bold text-slate-950">Home Discovery Feed</h3>
                <span className="text-xs font-semibold text-[#0084ff]">Overview</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Recent saves organized with clean cards, live prices, price-drop badges, and brand shortcuts.
              </p>
            </div>

            <div
              onClick={() => setActiveTab("save")}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                activeTab === "save"
                  ? "bg-white border-slate-900 shadow-sm ring-1 ring-slate-900/10"
                  : "bg-white/60 border-slate-200 hover:bg-white"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="text-base font-bold text-slate-950">Save Box Drawer</h3>
                <span className="text-xs font-semibold text-[#0084ff]">1-Tap Capture</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Paste any link from Instagram, Amazon, or Safari. Add context notes like <span className="italic text-slate-900">&ldquo;gift for Deepak&rdquo;</span>.
              </p>
            </div>

            <div
              onClick={() => setActiveTab("collections")}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                activeTab === "collections"
                  ? "bg-white border-slate-900 shadow-sm ring-1 ring-slate-900/10"
                  : "bg-white/60 border-slate-200 hover:bg-white"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="text-base font-bold text-slate-950">Personal Collections</h3>
                <span className="text-xs font-semibold text-[#0084ff]">Private Folders</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Curate your items into custom collections: Wishlists, Gift Ideas, Home, or Fashion.
              </p>
            </div>
          </motion.div>

          {/* Central Phone Mockup with Smooth Animated Screen Change */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 flex justify-center order-1 lg:order-2"
          >
            <div className="w-full max-w-[340px] bg-slate-900 rounded-[48px] p-3 shadow-xl border-4 border-slate-300">
              {/* Dynamic Island */}
              <div className="w-24 h-4 bg-black rounded-full mx-auto mb-1 z-30" />

              {/* Mobile Screen Area */}
              <div className="bg-slate-50 text-slate-900 rounded-[36px] overflow-hidden min-h-[610px] max-h-[610px] flex flex-col text-[13px] relative select-none border border-slate-200">
                {/* Status Bar */}
                <div className="pt-2 px-6 pb-2 flex items-center justify-between text-xs text-slate-900 z-20 bg-slate-50">
                  <span className="font-semibold text-[11px]">9:41</span>
                  <div className="flex items-center gap-1 text-[10px]">
                    <span className="font-semibold">5G</span>
                    <div className="w-4 h-2.5 border border-slate-900 rounded-[2px] p-[1px]">
                      <div className="w-full h-full bg-slate-900 rounded-[1px]" />
                    </div>
                  </div>
                </div>

                {/* Animated Views */}
                <AnimatePresence mode="wait">
                  {/* TAB 1: HOME FEED */}
                  {activeTab === "home" && (
                    <motion.div
                      key="home"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-1 overflow-y-auto px-3.5 pb-16 space-y-3 text-slate-900"
                    >
                      {/* App Header */}
                      <div className="flex items-center justify-between pt-1">
                        <Image
                          src="/Uniwik-logo-black.svg"
                          alt="Uniwik"
                          width={80}
                          height={20}
                          className="h-5 w-auto object-contain"
                        />
                        <div className="w-7 h-7 rounded-full bg-slate-200/80 flex items-center justify-center text-slate-700">
                          <Bell className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* Banner Card */}
                      <div className="rounded-2xl p-3.5 bg-[#0084ff] text-white space-y-2.5 shadow-xs">
                        <h3 className="text-base font-extrabold text-white leading-tight">
                          Save anything <br />
                          <span className="italic font-serif font-normal text-sky-100">you</span> discover online
                        </h3>

                        <div className="flex items-center gap-1 text-[8px] font-bold text-white/90">
                          <span className="px-1.5 py-0.5 rounded bg-white/20">Amazon</span>
                          <span className="px-1.5 py-0.5 rounded bg-white/20">Flipkart</span>
                          <span className="px-1.5 py-0.5 rounded bg-white/20">YouTube</span>
                          <span className="px-1.5 py-0.5 rounded bg-white/20">Instagram</span>
                          <span className="px-1.5 py-0.5 rounded bg-white/20">WhatsApp</span>
                        </div>

                        <div className="flex items-center gap-1 bg-white rounded-xl p-1 shadow-xs text-slate-800">
                          <div className="flex items-center gap-1.5 px-2 flex-1">
                            <LinkIcon className="w-3 h-3 text-slate-400" />
                            <span className="text-[10px] text-slate-400 truncate">Paste any URL here...</span>
                          </div>
                          <button className="px-2.5 py-1 rounded-lg bg-[#0084ff] text-white text-[10px] font-semibold">
                            Save Link
                          </button>
                        </div>
                      </div>

                      {/* Recent Saves */}
                      <div className="space-y-1.5">
                        <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                          Recent Saves
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-2 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-1.5">
                            <div className="relative h-20 rounded-lg overflow-hidden bg-slate-100">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&auto=format&fit=crop&q=80"
                                alt="BoAt Rockerz Buds Pro"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="text-[10px] font-bold text-slate-900 truncate">
                              BoAt Rockerz Buds Pro H34GT
                            </p>
                            <p className="text-[8px] text-slate-500 flex items-center justify-between">
                              <span>12, July&apos;26</span>
                              <span className="text-[#0084ff] font-medium">amazon.in</span>
                            </p>
                            <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                              <span className="text-[10px] font-bold text-[#0084ff]">₹ 1200</span>
                              <span className="text-[8px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                                Details
                              </span>
                            </div>
                          </div>

                          <div className="p-2 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-1.5">
                            <div className="relative h-20 rounded-lg overflow-hidden bg-slate-100">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&auto=format&fit=crop&q=80"
                                alt="Pet Smart Feeder"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="text-[10px] font-bold text-slate-900 truncate">
                              Pet Smart Feeder
                            </p>
                            <p className="text-[8px] text-slate-500 flex items-center justify-between">
                              <span>12, July&apos;26</span>
                              <span className="text-slate-700 font-medium">YouTube</span>
                            </p>
                            <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                              <span className="text-[8px] px-1 rounded bg-blue-50 text-[#0084ff] font-bold border border-blue-200">
                                Price Drop
                              </span>
                              <span className="text-[10px] font-bold text-[#0084ff]">₹ 1099</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Brands */}
                      <div className="space-y-1.5">
                        <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                          Brands
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-2 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-1">
                            <div className="flex items-center gap-1.5">
                              <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center font-serif text-[8px] font-bold text-white">
                                ZARA
                              </div>
                              <div>
                                <p className="text-[10px] font-bold text-slate-900">ZARA</p>
                                <p className="text-[8px] text-slate-500">Fashion</p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-[8px] text-slate-500 pt-1">
                              <span className="px-1 py-0.5 rounded bg-slate-100 font-medium">Summer Finds</span>
                              <span className="text-[#0084ff] font-semibold">Open &gt;</span>
                            </div>
                          </div>

                          <div className="p-2 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-1">
                            <div className="flex items-center gap-1.5">
                              <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-[8px] font-bold text-white">
                                W
                              </div>
                              <div>
                                <p className="text-[10px] font-bold text-slate-900">Woodland</p>
                                <p className="text-[8px] text-slate-500">Footwear</p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-[8px] text-slate-500 pt-1">
                              <span className="px-1 py-0.5 rounded bg-slate-100 font-medium">Outdoor</span>
                              <span className="text-[#0084ff] font-semibold">Open &gt;</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 2: SAVE DRAWER */}
                  {activeTab === "save" && (
                    <motion.div
                      key="save"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-1 relative flex flex-col justify-end bg-slate-900/30 pb-16"
                    >
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="relative bg-white text-slate-900 rounded-3xl p-4 space-y-3 shadow-xl mx-2.5 border border-slate-200 z-20"
                      >
                        <div className="w-8 h-1 bg-slate-300 rounded-full mx-auto" />

                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-slate-900">Save Box</h4>
                          <span className="text-[11px] font-semibold text-[#0084ff]">
                            Create Collection
                          </span>
                        </div>

                        {/* Link field */}
                        <div className="space-y-1">
                          <label className="text-[9px] uppercase font-bold text-slate-500">
                            Link<span className="text-[#0084ff]">*</span>
                          </label>
                          <div className="flex items-center gap-1.5 px-2.5 py-2 rounded-xl border border-slate-200 bg-slate-50 text-[10px] text-slate-700 font-mono truncate">
                            <LinkIcon className="w-3 h-3 text-slate-400 shrink-0" />
                            <span className="truncate">https://www.instagram.com/reel/ONQAKVD...</span>
                          </div>
                        </div>

                        {/* Collection Selector */}
                        <div className="space-y-1">
                          <label className="text-[9px] uppercase font-bold text-slate-500">
                            Collection
                          </label>
                          <div className="flex items-center justify-between px-2.5 py-2 rounded-xl border border-slate-200 bg-slate-50 text-[11px] text-slate-700">
                            <span className="text-slate-800 font-medium">Choose a collection</span>
                            <span className="text-[10px] font-semibold text-[#0084ff] flex items-center gap-0.5">
                              Create New <Plus className="w-3 h-3" />
                            </span>
                          </div>
                        </div>

                        {/* Add Note */}
                        <div className="space-y-1">
                          <label className="text-[9px] uppercase font-bold text-slate-500">
                            Add Note
                          </label>
                          <div className="px-2.5 py-2 rounded-xl border border-slate-200 bg-slate-50 text-[11px] text-slate-700">
                            <p className="text-slate-600 italic">This is for gift to Deepak</p>
                          </div>
                        </div>

                        <button className="w-full py-2.5 rounded-full bg-[#0084ff] hover:bg-[#0070d6] text-white font-bold text-xs tracking-wide shadow-xs transition-colors">
                          Save Link
                        </button>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* TAB 3: COLLECTIONS */}
                  {activeTab === "collections" && (
                    <motion.div
                      key="collections"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-1 overflow-y-auto px-3.5 pb-16 space-y-2.5 pt-2"
                    >
                      <h4 className="text-xs font-bold text-slate-900 mb-2">Your Collections</h4>

                      <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-slate-900">Wishlist 2026</p>
                          <span className="text-[9px] text-[#0084ff] font-semibold bg-blue-50 px-2 py-0.5 rounded-full">
                            18 Items
                          </span>
                        </div>
                        <p className="text-[9px] text-slate-500">Audio gear, desk setup, and fashion</p>
                      </div>

                      <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-slate-900">Gift Ideas</p>
                          <span className="text-[9px] text-[#0084ff] font-semibold bg-blue-50 px-2 py-0.5 rounded-full">
                            6 Items
                          </span>
                        </div>
                        <p className="text-[9px] text-slate-500">Curated birthday &amp; housewarming picks</p>
                      </div>

                      <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-slate-900">Compare Later</p>
                          <span className="text-[9px] text-[#0084ff] font-semibold bg-blue-50 px-2 py-0.5 rounded-full">
                            8 Items
                          </span>
                        </div>
                        <p className="text-[9px] text-slate-500">Headphones and mechanical keyboards</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom App Navigation */}
                <div className="absolute bottom-0 left-0 right-0 h-13 bg-white border-t border-slate-200 px-5 flex items-center justify-between z-10 text-[9px] shadow-xs">
                  <button
                    onClick={() => setActiveTab("home")}
                    className={`flex flex-col items-center cursor-pointer ${
                      activeTab === "home" ? "text-[#0084ff] font-bold" : "text-slate-500"
                    }`}
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>Home</span>
                  </button>
                  <div className="flex flex-col items-center text-slate-500">
                    <Search className="w-3.5 h-3.5" />
                    <span>Discover</span>
                  </div>
                  <div className="-mt-4">
                    <button
                      onClick={() => setActiveTab("save")}
                      className="w-8 h-8 rounded-full bg-[#0084ff] text-white flex items-center justify-center shadow-md cursor-pointer hover:bg-[#0070d6]"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => setActiveTab("collections")}
                    className={`flex flex-col items-center cursor-pointer ${
                      activeTab === "collections" ? "text-[#0084ff] font-bold" : "text-slate-500"
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>Saved</span>
                  </button>
                  <div className="flex flex-col items-center text-slate-500">
                    <User className="w-3.5 h-3.5" />
                    <span>Profile</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
