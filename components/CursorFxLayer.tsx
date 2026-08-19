"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

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

// Helper to reliably walk up the DOM tree to detect any interactive parent
const findInteractiveElement = (target: HTMLElement | null): HTMLElement | null => {
  let el = target;
  while (el && el !== document.body) {
    const tagName = el.tagName?.toLowerCase();
    const isLink = tagName === "a" || el.hasAttribute("href");
    const isBtn = tagName === "button" || el.getAttribute("role") === "button" || tagName === "input";
    const hasCustomText = el.hasAttribute("data-cursor-text");

    if (isLink || isBtn || hasCustomText) {
      return el;
    }

    try {
      if (window.getComputedStyle(el).cursor === "pointer") {
        return el;
      }
    } catch (_) {}

    el = el.parentElement;
  }
  return null;
};

export default function CursorFxLayer() {
  const pathname = usePathname();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [ripples, setRipples] = useState<StampRipple[]>([]);
  const requestRef = useRef<number | null>(null);

  // Clear hover badge instantly upon changing pages/routes
  useEffect(() => {
    setIsHovered(false);
    setHoverText("");
    setIsClicked(false);
  }, [pathname]);

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

      const target = e.target as HTMLElement | null;
      const interactiveEl = findInteractiveElement(target);

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

      // Instantly dismiss hover badge so it never lingers after click
      setIsHovered(false);
      setHoverText("");

      const target = e.target as HTMLElement | null;
      const interactiveEl = findInteractiveElement(target);
      let stampText = "";

      if (interactiveEl) {
        // 1. Prioritize explicit data-cursor-text attribute
        const customCursorText = interactiveEl.getAttribute("data-cursor-text");

        if (customCursorText) {
          stampText = customCursorText;
        } else {
          // 2. Extract destination route from href if it's a Link or Anchor
          const href =
            interactiveEl.getAttribute("href") ||
            interactiveEl.closest("a")?.getAttribute("href") ||
            "";

          if (href) {
            if (href === "/" || href === "#") {
              stampText = "HOME 🏠";
            } else {
              const cleanPath = href.split("?")[0].split("#")[0];
              const pathSegments = cleanPath.split("/").filter(Boolean);
              const lastSegment = pathSegments.pop() || "PAGE";
              stampText = lastSegment.replace(/[-_]/g, " ").toUpperCase();
            }
          } else {
            // 3. Fallback to button/element visible text
            const btnText = interactiveEl.textContent?.trim().replace(/\s+/g, " ") || "";
            stampText = btnText ? btnText.toUpperCase() : "ACTION ⚡";
          }
        }
      } else {
        // 4. Random STAMP_TEXTS ONLY triggers when clicking blank, non-interactive page space
        stampText = STAMP_TEXTS[Math.floor(Math.random() * STAMP_TEXTS.length)];
      }

      // Keep stamp text legible and compact
      if (stampText.length > 18) {
        stampText = `${stampText.slice(0, 15)}...`;
      }

      const rippleId = Date.now() + Math.random();
      const newRipple: StampRipple = {
        id: rippleId,
        x: e.clientX,
        y: e.clientY,
        text: stampText,
      };

      setRipples((prev) => [...prev.slice(-3), newRipple]);

      // Auto-remove ripple after 1 second animation duration
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== rippleId));
      }, 1000);
    };

    const handleMouseUp = () => setIsClicked(false);

    const handleMouseLeave = () => {
      setIsHovered(false);
      setHoverText("");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseleave", handleMouseLeave);
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