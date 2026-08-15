"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  Heart,
  Scale,
  Gift,
  Home as HomeIcon,
  Plane,
  Shirt,
  Laptop,
  Tag,
} from "lucide-react";

export default function CollectionsShowcase() {
  const [activeId, setActiveId] = useState("wishlist");

  const collections = [
    {
      id: "wishlist",
      name: "Wishlist",
      count: 18,
      icon: <Heart className="w-3.5 h-3.5" />,
      desc: "Things you plan to buy or try out later.",
      items: [
        {
          title: "BoAt Rockerz Buds Pro H34GT",
          price: "₹ 1,200",
          source: "amazon.in",
          image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80",
          note: "Wait for Diwali sale",
          category: "Audio",
        },
        {
          title: "ZARA Linen Blend Overshirt",
          price: "₹ 2,990",
          source: "zara.com",
          image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80",
          note: "Size L in Beige",
          category: "Fashion",
        },
        {
          title: "Custom 75% Mechanical Keyboard",
          price: "₹ 3,499",
          source: "youtube.com",
          image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80",
          note: "Gateron Brown switches",
          category: "Desk Setup",
        },
      ],
    },
    {
      id: "compare",
      name: "Compare Later",
      count: 8,
      icon: <Scale className="w-3.5 h-3.5" />,
      desc: "Similar options to research and compare before deciding.",
      items: [
        {
          title: "Sony WH-1000XM5 Noise Cancelling",
          price: "₹ 24,990",
          source: "amazon.in",
          image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80",
          note: "Top noise cancellation rating",
          category: "Audio",
        },
        {
          title: "Bose QuietComfort Ultra Headphones",
          price: "₹ 29,900",
          source: "croma.com",
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
          note: "Better headband comfort",
          category: "Audio",
        },
      ],
    },
    {
      id: "gifts",
      name: "Gift Ideas",
      count: 6,
      icon: <Gift className="w-3.5 h-3.5" />,
      desc: "Thoughtful gift possibilities for friends & family.",
      items: [
        {
          title: "Woodland Pro Waterproof Boots",
          price: "₹ 4,195",
          source: "woodlandworldwide.com",
          image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
          note: "Gift for Deepak's birthday",
          category: "Footwear",
        },
        {
          title: "Ceramic Pour-Over Coffee Dripper Set",
          price: "₹ 1,850",
          source: "instagram.com",
          image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80",
          note: "Housewarming gift pick",
          category: "Home",
        },
      ],
    },
    {
      id: "home",
      name: "Home",
      count: 12,
      icon: <HomeIcon className="w-3.5 h-3.5" />,
      desc: "Furniture, lighting, kitchenware, and decor.",
      items: [
        {
          title: "Solid Teak Desk Organizer & Valet Tray",
          price: "₹ 1,450",
          source: "instagram.com",
          image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&auto=format&fit=crop&q=80",
          note: "For study room desk setup",
          category: "Decor",
        },
      ],
    },
    {
      id: "travel",
      name: "Travel",
      count: 15,
      icon: <Plane className="w-3.5 h-3.5" />,
      desc: "Destinations, packing gear, and accommodation.",
      items: [
        {
          title: "Lightweight 40L Cabin Backpack",
          price: "₹ 3,299",
          source: "amazon.in",
          image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80",
          note: "Fits airline carry-on dimensions",
          category: "Gear",
        },
      ],
    },
    {
      id: "fashion",
      name: "Fashion",
      count: 22,
      icon: <Shirt className="w-3.5 h-3.5" />,
      desc: "Outfit inspiration, footwear, and summer staples.",
      items: [
        {
          title: "Relaxed Linen Blend Drawstring Pants",
          price: "₹ 2,490",
          source: "zara.com",
          image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&auto=format&fit=crop&q=80",
          note: "Off-white / Cream colorway",
          category: "Apparel",
        },
      ],
    },
    {
      id: "electronics",
      name: "Electronics",
      count: 9,
      icon: <Laptop className="w-3.5 h-3.5" />,
      desc: "Gadgets, monitors, cables, and setup accessories.",
      items: [
        {
          title: "27-inch 4K USB-C Monitor with 90W PD",
          price: "₹ 27,999",
          source: "amazon.in",
          image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80",
          note: "Check warranty duration before buying",
          category: "Display",
        },
      ],
    },
  ];

  const current = collections.find((c) => c.id === activeId) || collections[0];

  return (
    <section className="w-full py-24 bg-white overflow-hidden" id="collections">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 space-y-3"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Organize discoveries your way.
          </h2>
          <p className="text-lg text-slate-600 font-normal">
            Collections are private spaces belonging to you. Group items by project, purpose, or timeline.
          </p>
        </motion.div>

        {/* Sleek Segmented Control Tab Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-start md:justify-center mb-8 overflow-x-auto scrollbar-none px-2"
        >
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-full border border-slate-200 shrink-0">
            {collections.map((col) => {
              const isActive = activeId === col.id;
              return (
                <button
                  key={col.id}
                  onClick={() => setActiveId(col.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? "bg-white text-slate-950 shadow-xs"
                      : "text-slate-600 hover:text-slate-950 hover:bg-white/50"
                  }`}
                >
                  <span className={isActive ? "text-[#0084ff]" : "text-slate-400"}>
                    {col.icon}
                  </span>
                  <span>{col.name}</span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      isActive
                        ? "bg-slate-100 text-slate-900 font-bold"
                        : "bg-slate-200/70 text-slate-500"
                    }`}
                  >
                    {col.count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Active Collection Container with AnimatePresence */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6"
        >
          {/* Collection Top Meta Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-100 gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <h3 className="text-2xl font-bold text-slate-950">{current.name}</h3>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  {current.count} saved items
                </span>
              </div>
              <p className="text-sm text-slate-600 font-normal">{current.desc}</p>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>Private collection</span>
            </div>
          </div>

          {/* Animated Product Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {current.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all"
                >
                  <div>
                    {/* Card Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-2.5 right-2.5 text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white/90 text-slate-700 backdrop-blur-xs shadow-2xs">
                        {item.category}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 space-y-2">
                      <span className="text-[11px] font-semibold text-[#0084ff]">
                        {item.source}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-sm font-extrabold text-slate-950">
                        {item.price}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer with User Note */}
                  <div className="px-4 py-2.5 bg-slate-50/80 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-600">
                    <Tag className="w-3 h-3 text-slate-400 shrink-0" />
                    <span className="truncate italic">&ldquo;{item.note}&rdquo;</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
