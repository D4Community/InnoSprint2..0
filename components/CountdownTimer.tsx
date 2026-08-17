"use client";

import React, { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date("2026-10-10T09:00:00+05:30").getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="mx-auto max-w-2xl rounded-3xl border-2 border-[#18181B] bg-[#FDE047] p-6 shadow-brutal-lg dark:border-white dark:bg-zinc-900">
        <div className="h-24 animate-pulse rounded-2xl bg-white/40 dark:bg-zinc-800/40" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl rounded-3xl border-2 border-[#18181B] bg-[#FDE047] p-6 shadow-brutal-lg dark:border-white dark:bg-zinc-900 text-[#18181B] dark:text-white">
      <p className="text-center text-xs font-black uppercase tracking-wider mb-4">
        ⚡ Countdown To Sprint Launch (Oct 10, 2026)
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
            className="rounded-2xl border-2 border-[#18181B] bg-white p-3 dark:border-white dark:bg-zinc-800"
          >
            <span className="block text-2xl font-black sm:text-4xl">
              {String(item.val).padStart(2, "0")}
            </span>
            <span className="text-[10px] font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}