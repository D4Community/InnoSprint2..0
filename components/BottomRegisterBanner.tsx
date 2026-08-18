"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, Zap, Sparkles, ArrowRight } from "lucide-react";

export default function BottomRegisterBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delays pop-up entrance slightly on load/refresh
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 z-[9999] md:max-w-md animate-float select-none">
      <div className="relative rounded-2xl border-2 border-[#18181B] bg-[#FDE047] p-4 text-[#18181B] shadow-[6px_6px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:text-white dark:shadow-[6px_6px_0px_0px_#FFF]">
        {/* Top-Right Close Badge */}
        <button
          onClick={() => setIsVisible(false)}
          data-cursor-text="CLOSE ✖"
          className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-xl border-2 border-[#18181B] bg-[#FF3B30] text-white shadow-[2px_2px_0px_0px_#18181B] hover:bg-black active:translate-y-0.5 transition-all dark:border-white dark:shadow-[2px_2px_0px_0px_#FFF]"
          aria-label="Close Pop-up"
        >
          <X size={16} strokeWidth={3} />
        </button>

        {/* Content Box */}
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-[#18181B] bg-[#FF3B30] text-white shadow-[2px_2px_0px_0px_#18181B] dark:border-white">
            <Zap size={20} className="text-white" />
          </div>

          <div className="flex-1 pr-2">
            <div className="flex items-center gap-1.5">
              <span className="rounded-md border border-[#18181B] bg-white px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#18181B]">
                InnoSprint 2.0
              </span>
              <Sparkles size={14} className="text-[#FF3B30] animate-pulse" />
            </div>
            <h4 className="mt-1 text-sm font-black tracking-tight leading-snug">
              Registrations Are Open!
            </h4>
            <p className="mt-0.5 text-xs font-bold text-zinc-700 dark:text-zinc-300">
              24-Hour Sprint at CGC University · Oct 10–11, 2026.
            </p>

            {/* Action Area with Register & Close Buttons */}
            <div className="mt-3 flex items-center gap-2">
              <Link
                href="/event"
                data-cursor-text="REGISTER ⚡"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border-2 border-[#18181B] bg-[#FF3B30] px-4 py-1.5 text-xs font-black text-white shadow-[2px_2px_0px_0px_#18181B] hover:-translate-y-0.5 transition-all active:translate-y-0 dark:border-white dark:shadow-[2px_2px_0px_0px_#FFF]"
              >
                Register Now <ArrowRight size={14} />
              </Link>

              <button
                type="button"
                onClick={() => setIsVisible(false)}
                data-cursor-text="DISMISS"
                className="inline-flex items-center justify-center gap-1 rounded-xl border-2 border-[#18181B] bg-white px-3 py-1.5 text-xs font-black text-[#18181B] shadow-[2px_2px_0px_0px_#18181B] hover:-translate-y-0.5 transition-all active:translate-y-0 dark:border-white dark:bg-zinc-800 dark:text-white dark:shadow-[2px_2px_0px_0px_#FFF]"
              >
                Close 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}