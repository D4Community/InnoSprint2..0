"use client";

import React, { useEffect, useState, useRef } from "react";

interface StampRipple {
  id: number;
  x: number;
  y: number;
  text: string;
}

const STAMP_TEXTS = [
  "INNO 2.0 ⚡",
  "D4 COMMUNITY!",
  "SPRINT! 🚀",
  "BUILD IT! 🛠️",
  "OCT 10-11 📅",
  "CGC UNIV! 📍",
];

export default function CursorFxLayer() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [ripples, setRipples] = useState<StampRipple[]>([]);
  const requestRef = useRef<number | null>(null);

  // Smooth trailing inertia loop
  useEffect(() => {
    const followCursor = () => {
      setTrailPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
      requestRef.current = requestAnimationFrame(followCursor);
    };

    requestRef.current = requestAnimationFrame(followCursor);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [pos]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Detect hover over interactive elements
      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest("a, button, input, [role='button']");

      if (interactiveEl) {
        setIsHovered(true);
        // Automatically fetch explicit cursor text or extract link label
        const customText = interactiveEl.getAttribute("data-cursor-text");
        const elementText = interactiveEl.textContent?.trim().replace(/\s+/g, " ");
        const fallbackText =
          elementText && elementText.length <= 16
            ? elementText.toUpperCase()
            : "OPEN 🚀";

        setHoverText(customText || fallbackText);
      } else {
        setIsHovered(false);
        setHoverText("");
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicked(true);

      // Create Neo-Brutalist Stamp Burst
      const randomText = STAMP_TEXTS[Math.floor(Math.random() * STAMP_TEXTS.length)];
      const newRipple: StampRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        text: randomText,
      };

      setRipples((prev) => [...prev.slice(-3), newRipple]);
    };

    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none">
      {/* Lagging Secondary Trail Ring */}
      <div
        className={`fixed top-0 left-0 h-10 w-10 -ml-5 -mt-5 rounded-full border-2 border-[#18181B] bg-[#FDE047]/30 transition-transform duration-150 dark:border-white dark:bg-[#FDE047]/20 ${
          isHovered ? "scale-150 border-dashed bg-[#FF3B30]/20" : "scale-100"
        }`}
        style={{
          transform: `translate3d(${trailPos.x}px, ${trailPos.y}px, 0px) rotate(${
            isHovered ? "45deg" : "0deg"
          })`,
        }}
      />

      {/* Main Cursor Pointer - Expands to show Option Label */}
      <div
        className={`fixed top-0 left-0 flex items-center justify-center border-2 border-[#18181B] text-white transition-all duration-150 ease-out dark:border-white ${
          isHovered
            ? "h-10 px-3.5 -ml-5 -mt-5 rounded-xl bg-[#FDE047] text-[#18181B] font-black text-[11px] uppercase tracking-wider shadow-[4px_4px_0px_0px_#18181B] dark:shadow-[4px_4px_0px_0px_#FFF] -rotate-3 whitespace-nowrap"
            : isClicked
            ? "h-4 w-4 -ml-2 -mt-2 bg-[#FF3B30] rounded-sm scale-90 shadow-none"
            : "h-5 w-5 -ml-2.5 -mt-2.5 bg-[#FF3B30] rounded-md shadow-[2px_2px_0px_0px_#18181B] dark:shadow-[2px_2px_0px_0px_#FFF] -rotate-6"
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0px)`,
        }}
      >
        {isHovered && <span>{hoverText}</span>}
      </div>

      {/* Neo-Brutalist Click Stamp Ripples */}
      {ripples.map((r) => (
        <div
          key={r.id}
          className="fixed top-0 left-0 rounded-2xl border-2 border-[#18181B] bg-[#FDE047] px-4 py-2 font-black text-xs text-[#18181B] shadow-[4px_4px_0px_0px_#FF3B30] dark:border-white dark:shadow-[4px_4px_0px_0px_#FFF] animate-stamp-burst whitespace-nowrap"
          style={{
            left: `${r.x}px`,
            top: `${r.y}px`,
          }}
        >
          {r.text}
        </div>
      ))}
    </div>
  );
}