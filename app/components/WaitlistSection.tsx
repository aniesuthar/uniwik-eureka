"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Mail, ShieldCheck, Bookmark, Sparkles, Smartphone, Check } from "lucide-react";
import Image from "next/image";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
  };

  return (
    <section className="w-full py-24 bg-white overflow-hidden" id="waitlist">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-8 sm:p-12 lg:p-14 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Form & Copy strictly from content.md */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  Be among the first to use Uniwik.
                </h2>
                <div className="space-y-1.5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                  <p>We’re building Uniwik for people who discover more than they can remember.</p>
                  <p className="font-medium text-slate-950">Join the waitlist to get early access.</p>
                </div>
              </div>

              {/* Form / Confirmation */}
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-3 pt-2"
                  >
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <div className="relative w-full">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="w-full pl-11 pr-4 py-3.5 rounded-full border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0084ff] shadow-2xs text-sm"
                        />
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0084ff] hover:bg-[#0070d6] text-white font-semibold text-sm shrink-0 transition-colors shadow-xs disabled:opacity-50 cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        {isSubmitting ? "Joining..." : "Join the Waitlist"}
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#0084ff]" />
                      <span>Early access invites rolling out in weekly batches. Zero spam.</span>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs"
                  >
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                      <CheckCircle2 className="w-5 h-5 text-[#0084ff]" />
                      <span>You’re on the waitlist!</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600">
                      We sent a confirmation to <strong className="text-slate-900">{email}</strong>. We will notify you as soon as early access slots open up.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column: Visual Early Access Member Pass */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md space-y-5">
                {/* Pass Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <Image
                    src="/Uniwik-logo-black.svg"
                    alt="Uniwik"
                    width={90}
                    height={22}
                    className="h-5 w-auto object-contain"
                  />
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0084ff] border border-blue-100">
                    EARLY ACCESS PASS
                  </span>
                </div>

                {/* Pass Feature List */}
                <div className="space-y-3 text-xs">
                  <div className="flex items-start gap-2.5 text-slate-700">
                    <Check className="w-4 h-4 text-[#0084ff] shrink-0 mt-0.5" />
                    <span><strong>1-Tap Share Sheet</strong> for Instagram, YouTube, Amazon &amp; Safari</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-slate-700">
                    <Check className="w-4 h-4 text-[#0084ff] shrink-0 mt-0.5" />
                    <span><strong>Automated metadata parser</strong> (title, cover, domain, and price)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-slate-700">
                    <Check className="w-4 h-4 text-[#0084ff] shrink-0 mt-0.5" />
                    <span><strong>Private personal collections</strong> (Wishlists, Tech, Gifts, Travel)</span>
                  </div>
                </div>

                {/* Pass Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Queue Status: Active</span>
                  <span className="text-[#0084ff] font-bold">Limited Slots</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
