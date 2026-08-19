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
  "BUILD IT!",
  "OCT 10-11 📅",
  "CGC UNI! 📍",
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
        const customText = interactiveEl.getAttribute("data-cursor-text");
        const elementText = interactiveEl.textContent?.trim().replace(/\s+/g, " ") || "";

        const fallbackText =
          elementText.length > 14
            ? `${elementText.slice(0, 11).toUpperCase()}...`
            : elementText.toUpperCase();

        setHoverText(customText || fallbackText || "CLICK");
      } else {
        setIsHovered(false);
        setHoverText("");
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicked(true);

      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest("a, button, input, [role='button']") as HTMLElement | null;
      let stampText = "";

      if (interactiveEl) {
        // 1. Check for custom data attribute
        const customCursorText = interactiveEl.getAttribute("data-cursor-text");

        if (customCursorText) {
          stampText = customCursorText;
        } else {
          // 2. Check if clicked element or parent is an anchor / link
          const linkEl = interactiveEl.closest("a") as HTMLAnchorElement | null;

          if (linkEl) {
            const href = linkEl.getAttribute("href") || "";
            if (href === "/" || href === "") {
              stampText = "HOME 🏠";
            } else {
              const cleanPath = href.split("?")[0].split("#")[0];
              const pathSegments = cleanPath.split("/").filter(Boolean);
              const lastSegment = pathSegments.pop() || "PAGE";
              stampText = lastSegment.replace(/[-_]/g, " ").toUpperCase();
            }
          } else {
            // 3. Extracted button / interactive element text
            const btnText = interactiveEl.textContent?.trim().replace(/\s+/g, " ") || "";
            stampText = btnText ? btnText.toUpperCase() : "ACTION ⚡";
          }
        }
      } else {
        // 4. Random stamp ONLY for clicks on blank page space
        stampText = STAMP_TEXTS[Math.floor(Math.random() * STAMP_TEXTS.length)];
      }

      // Truncate ultra-long text to maintain crisp stamp size
      if (stampText.length > 16) {
        stampText = `${stampText.slice(0, 14)}...`;
      }

      const rippleId = Date.now() + Math.random();
      const newRipple: StampRipple = {
        id: rippleId,
        x: e.clientX,
        y: e.clientY,
        text: stampText,
      };

      setRipples((prev) => [...prev.slice(-3), newRipple]);

      // Remove ripple after 1 second animation duration
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== rippleId));
      }, 1000);
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
    <>
      <style>{`
        @keyframes stampBurst {
          0% {
            transform: translate(-50%, -50%) scale(0.6) rotate(-6deg);
            opacity: 1;
          }
          70% {
            transform: translate(-50%, -50%) scale(1.05) rotate(2deg);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.15) rotate(6deg);
            opacity: 0;
          }
        }
        .animate-stamp-burst {
          animation: stampBurst 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

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

        {/* Main Cursor Pointer */}
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
            className="fixed rounded-2xl border-2 border-[#18181B] bg-[#FDE047] px-4 py-2 font-black text-xs text-[#18181B] shadow-[4px_4px_0px_0px_#FF3B30] dark:border-white dark:shadow-[4px_4px_0px_0px_#FFF] animate-stamp-burst whitespace-nowrap"
            style={{
              left: `${r.x}px`,
              top: `${r.y}px`,
            }}
          >
            {r.text}
          </div>
        ))}
      </div>
    </>
  );
}