"use client";

import React, { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target Date: October 10, 2026 at 09:00 AM IST
    const targetTime = new Date("2026-10-10T09:00:00+05:30").getTime();

    const updateTimer = () => {
      const now = Date.now();
      const diff = targetTime - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-30 mx-auto max-w-2xl rounded-3xl border-4 border-[#18181B] bg-[#FDE047] p-6 shadow-[8px_8px_0px_0px_#18181B] dark:border-white dark:bg-[#18181B] dark:shadow-[8px_8px_0px_0px_#FFF] text-[#18181B] dark:text-white">
      <p className="text-center text-xs font-black uppercase tracking-wider mb-4 flex items-center justify-center gap-2">
        <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#FF3B30] animate-ping" />
        ⚡ Event Starts In (Oct 10, 2026 · 09:00 AM IST)
      </p>

      <div className="grid grid-cols-4 gap-2 text-center sm:gap-4">
        {[
          { label: "Days", val: timeLeft.days },
          { label: "Hours", val: timeLeft.hours },
          { label: "Mins", val: timeLeft.minutes },
          { label: "Secs", val: timeLeft.seconds },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border-2 border-[#18181B] bg-white p-3 shadow-[3px_3px_0px_0px_#18181B] dark:border-white dark:bg-zinc-800 dark:shadow-[3px_3px_0px_0px_#FFF]"
          >
            <span
              suppressHydrationWarning
              className="block text-2xl font-black text-[#18181B] dark:text-white sm:text-4xl"
            >
              {String(item.val).padStart(2, "0")}
            </span>
            <span className="text-[10px] font-black uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}