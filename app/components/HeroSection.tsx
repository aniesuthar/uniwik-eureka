"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const slides = [
    {
      src: "/slider-images/slide2.jpg",
      alt: "Save what you discover",
      align: "left" as const, // Slide 1: Left-oriented
      headline: (
        <>
          Save what you discover. <br />
          <span className="text-[#0084ff]">Find it when you need it.</span>
        </>
      ),
      lead: "Products and ideas found across Instagram, YouTube, and WhatsApp.",
      sub: "Uniwik gives you one place to save, organize, and revisit them.",
    },
    {
      src: "/slider-images/slide1.jpg",
      alt: "Universal cross-platform discovery",
      align: "right" as const, // Slide 2: Right-oriented
      headline: (
        <>
          Saved from any app. <br />
          <span className="text-[#0084ff]">Kept in one library.</span>
        </>
      ),
      lead: "Keep discoveries from Instagram, YouTube, Amazon, and Safari together.",
      sub: "No more lost screenshots or forwarding links to your own chat.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play slider (7.5s interval)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 7500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlide = slides[currentIndex];
  const isRightAligned = currentSlide.align === "right";
  const progressPercent = ((currentIndex + 1) / slides.length) * 100;

  return (
    <section className="relative w-full min-h-[90vh] sm:min-h-[94vh] flex flex-col justify-end overflow-hidden pt-28 pb-10 sm:pb-16 bg-slate-950">
      {/* Background Image Slider with Seamless Stacking Crossfade */}
      <div className="absolute inset-0 z-0 bg-slate-950">
        {slides.map((slide, idx) => (
          <motion.div
            key={slide.src}
            initial={false}
            animate={{
              opacity: currentIndex === idx ? 1 : 0,
              scale: currentIndex === idx ? 1 : 1.04,
              zIndex: currentIndex === idx ? 10 : 1,
            }}
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: 7.5, ease: "easeOut" },
            }}
            className="absolute inset-0 pointer-events-none"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        ))}

        {/* Dynamic Directional Scrim for Optimal Contrast on Left or Right */}
        <motion.div
          key={isRightAligned ? "scrim-right" : "scrim-left"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0 }}
          className={`absolute inset-0 z-20 pointer-events-none ${
            isRightAligned
              ? "bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-transparent sm:bg-gradient-to-tl sm:from-slate-950/90 sm:via-slate-950/45 sm:to-transparent"
              : "bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-transparent sm:bg-gradient-to-tr sm:from-slate-950/90 sm:via-slate-950/45 sm:to-transparent"
          }`}
        />
      </div>

      {/* Content Container - Exactly matches Navbar floating pill alignment */}
      <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-7 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end">
          {/* Dynamic Editorial Content */}
          <div
            className={`space-y-4 sm:space-y-6 max-w-xl ${
              isRightAligned
                ? "lg:col-span-8 lg:order-2 lg:ml-auto text-left lg:text-right"
                : "lg:col-span-8 lg:order-1 text-left"
            }`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`slide-text-${currentIndex}`}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }}
                className="space-y-4 sm:space-y-5"
              >
                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.18]"
                >
                  {currentSlide.headline}
                </motion.h1>

                {/* Supporting Copy */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
                  className={`space-y-1.5 ${isRightAligned ? "lg:ml-auto max-w-lg" : "max-w-lg"}`}
                >
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                    {currentSlide.lead}
                  </p>
                  <p className="text-sm sm:text-base text-white font-medium">
                    {currentSlide.sub}
                  </p>
                </motion.div>

                {/* Fully Rounded CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 pt-1 ${
                    isRightAligned ? "lg:justify-end" : "lg:justify-start"
                  }`}
                >
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#waitlist"
                    className="inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#0084ff] hover:bg-[#0070d6] text-white font-semibold text-sm sm:text-base transition-colors shadow-lg shadow-[#0084ff]/30 text-center"
                  >
                    Join the Waitlist
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#how-it-works"
                    className="inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md font-medium text-sm sm:text-base transition-colors border border-white/30 shadow-xs text-center"
                  >
                    See How It Works
                  </motion.a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Timeline Indicator */}
          <div
            className={`lg:col-span-4 flex items-center ${
              isRightAligned
                ? "lg:order-1 justify-start"
                : "lg:order-2 justify-start sm:justify-start lg:justify-end"
            }`}
          >
            <div className="flex items-center gap-3 bg-black/40 backdrop-blur-xl px-4 py-2 rounded-full border border-white/15 shadow-xl select-none">
              {/* Start Number */}
              <span className="text-[11px] font-mono font-semibold text-white/60">
                01
              </span>

              {/* Continuous Smooth Progress Track */}
              <div className="w-20 sm:w-28 h-1 rounded-full bg-white/20 overflow-hidden relative">
                <motion.div
                  className="absolute left-0 top-0 bottom-0 bg-[#0084ff] rounded-full"
                  initial={{ width: "50%" }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </div>

              {/* End Number */}
              <span className="text-[11px] font-mono font-semibold text-white/90">
                0{slides.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
