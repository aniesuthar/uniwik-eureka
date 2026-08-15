"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200/80 py-16 text-slate-600 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/Uniwik-logo-black.svg"
                alt="Uniwik"
                width={130}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-600 max-w-sm text-sm leading-relaxed">
              Uniwik helps you save, organize and revisit the things you discover across the internet.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#how-it-works" className="hover:text-slate-900 transition-colors">How It Works</a></li>
              <li><a href="#problem" className="hover:text-slate-900 transition-colors">The Problem</a></li>
              <li><a href="#platforms" className="hover:text-slate-900 transition-colors">Platforms</a></li>
              <li><a href="#collections" className="hover:text-slate-900 transition-colors">Collections</a></li>
              <li><a href="#waitlist" className="hover:text-slate-900 transition-colors">Early Access</a></li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider">About &amp; Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#vision" className="hover:text-slate-900 transition-colors">Vision</a></li>
              <li><a href="mailto:contact@uniwik.com" className="hover:text-slate-900 transition-colors">Contact</a></li>
              <li><a href="#privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-slate-900 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Company Attribution */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            Uniwik — a product by <strong className="text-slate-800 font-semibold">Sattnava Technologies Private Limited</strong>
          </p>
          <p>© {new Date().getFullYear()} Uniwik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
