"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "next-themes";
import {
  Menu,
  X,
  ArrowRight,
  Rocket,
  ChevronRight,
  Sparkles,
  Zap,
  Sun,
  Moon,
} from "lucide-react";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/event", label: "Schedule" },
  { href: "/team", label: "Team" },
  { href: "/mentors", label: "Mentors" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/community-partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-9 sm:h-10 sm:w-10 shrink-0" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      data-cursor-text={isDark ? "LIGHT" : "DARK"}
      className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-2xl border-2 border-[#18181B] bg-[#FDE047] text-[#18181B] shadow-[2px_2px_0px_0px_#18181B] transition-all hover:-translate-y-0.5 dark:border-white dark:bg-zinc-800 dark:text-zinc-100 dark:shadow-[2px_2px_0px_0px_#FFF] active:translate-y-0 shrink-0"
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export default function MarketingNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Client-side portal mounting check
  useEffect(() => {
    setMounted(true);
  }, []);

  // Automatically close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-[100] border-b-2 border-[#18181B] bg-[#FAF9F5]/95 backdrop-blur-md select-none relative dark:border-white dark:bg-[#0F0F12]/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3.5 sm:px-6 lg:px-8 py-2.5 sm:py-3.5">
        
        {/* Logo & Brand Mark (Acts as Home) */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          data-cursor-text="HOME"
          className="flex items-center gap-2.5 transition-transform hover:-translate-y-0.5 active:translate-y-0 shrink-0 group"
          aria-label="InnoSprint 2.0 Home"
        >
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-2xl bg-[#FF3B30] text-white border-2 border-[#18181B] dark:border-white shadow-[2px_2px_0px_0px_#18181B] dark:shadow-[2px_2px_0px_0px_#FFF] transition-transform group-hover:-rotate-6">
            <Rocket className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-base sm:text-xl font-black text-[#18181B] dark:text-white tracking-tight leading-none">
                InnoSprint
              </span>
              <span className="rounded-md border border-[#18181B] bg-[#FDE047] px-1.5 py-0.5 text-[10px] font-black text-[#18181B] leading-none">
                2.0
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] font-black text-[#FF3B30] dark:text-[#FDE047] tracking-wider uppercase mt-0.5">
              D4 Community
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1.5 xl:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                data-cursor-text={link.label.toUpperCase()}
                className={`rounded-xl px-3 py-1.5 text-xs font-black transition-all ${
                  active
                    ? "bg-[#FDE047] text-[#18181B] border-2 border-[#18181B] shadow-[2px_2px_0px_0px_#18181B] -rotate-1 dark:shadow-[2px_2px_0px_0px_#FFF] dark:border-white"
                    : "text-zinc-700 dark:text-zinc-200 hover:text-[#18181B] hover:bg-white dark:hover:bg-zinc-800 dark:hover:text-white border-2 border-transparent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2.5 xl:flex">
          <ThemeToggle />
          <Link
            href="/event"
            data-cursor-text="JOIN ⚡"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#FF3B30] px-4 py-2.5 text-xs font-black text-white border-2 border-[#18181B] shadow-[3px_3px_0px_0px_#18181B] transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#18181B] active:translate-y-0 dark:border-white dark:shadow-[3px_3px_0px_0px_#FFF]"
          >
            <Zap size={15} /> Register Team <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile Quick Action & Hamburger Button */}
        <div className="flex items-center gap-2 xl:hidden">
          <ThemeToggle />

          <Link
            href="/event"
            data-cursor-text="JOIN ⚡"
            className="inline-flex items-center gap-1 rounded-xl bg-[#FF3B30] px-2.5 py-1.5 text-[11px] font-black text-white border-2 border-[#18181B] shadow-[2px_2px_0px_0px_#18181B] active:translate-y-0.5 dark:border-white dark:shadow-[2px_2px_0px_0px_#FFF] sm:hidden"
          >
            <span>Register</span>
            <Zap size={13} />
          </Link>

          <button
            type="button"
            aria-label="Open menu"
            data-cursor-text="MENU ☰"
            onClick={() => setOpen(true)}
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-2xl border-2 border-[#18181B] bg-white text-[#18181B] shadow-[2px_2px_0px_0px_#18181B] hover:bg-[#FDE047] active:translate-y-0.5 transition-all dark:border-white dark:bg-zinc-800 dark:text-zinc-100 dark:shadow-[2px_2px_0px_0px_#FFF]"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      {/* Portal Mobile Drawer Panel */}
      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-[999999] xl:hidden select-none overflow-hidden transition-all duration-300 ${
              open ? "pointer-events-auto" : "pointer-events-none"
            }`}
          >
            {/* Overlay */}
            <div
              className={`fixed inset-0 bg-[#18181B]/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
                open ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => setOpen(false)}
            />

            {/* Slide-over Content Panel */}
            <aside
              className={`fixed top-0 right-0 bottom-0 h-full w-full sm:w-80 border-l-2 border-[#18181B] bg-[#FAF9F5] dark:bg-[#0F0F12] dark:border-white p-5 sm:p-6 flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                open
                  ? "translate-x-0 shadow-[-8px_0px_0px_0px_#18181B] dark:shadow-[-8px_0px_0px_0px_#FFF]"
                  : "translate-x-full shadow-none"
              }`}
            >
              <div>
                {/* Drawer Top Header */}
                <div className="flex items-center justify-between border-b-2 border-[#18181B]/10 dark:border-white/10 pb-4 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#FF3B30] text-white border-2 border-[#18181B] dark:border-white shadow-[2px_2px_0px_0px_#18181B] dark:shadow-[2px_2px_0px_0px_#FFF]">
                      <Rocket className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1">
                        <span className="text-base font-black text-[#18181B] dark:text-white leading-none">
                          InnoSprint
                        </span>
                        <span className="rounded bg-[#FDE047] px-1 py-0.5 text-[10px] font-black text-[#18181B] leading-none">
                          2.0
                        </span>
                      </div>
                      <span className="text-[9px] font-black text-[#FF3B30] dark:text-[#FDE047] uppercase mt-0.5">
                        D4 Community
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-2xl border-2 border-[#18181B] bg-white text-[#18181B] shadow-[2px_2px_0px_0px_#18181B] hover:bg-[#FF3B30] hover:text-white active:translate-y-0.5 transition-all dark:border-white dark:bg-zinc-800 dark:text-zinc-100 dark:shadow-[2px_2px_0px_0px_#FFF]"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Section Badges */}
                <div className="mb-4 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-xl border-2 border-[#18181B] bg-[#18181B] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-[2px_2px_0px_0px_#FF3B30] dark:border-white">
                    <Sparkles size={12} className="text-[#FDE047]" />
                    Navigation
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-xl border-2 border-[#18181B] bg-[#FDE047] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#18181B] shadow-[2px_2px_0px_0px_#18181B]">
                    <Zap size={12} className="text-[#FF3B30]" />
                    Oct 10-11
                  </span>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-2">
                  {NAV_LINKS.map((link) => {
                    const active = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between rounded-2xl px-4 py-3 text-xs sm:text-sm font-black transition-all ${
                          active
                            ? "bg-[#FDE047] text-[#18181B] border-2 border-[#18181B] shadow-[3px_3px_0px_0px_#18181B] -rotate-1 dark:border-white"
                            : "text-[#18181B] dark:text-zinc-100 bg-white dark:bg-zinc-900 border-2 border-[#18181B] dark:border-white shadow-[2px_2px_0px_0px_#18181B] dark:shadow-[2px_2px_0px_0px_#FFF] hover:bg-[#FDE047]/30 hover:translate-x-1"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronRight
                          size={16}
                          className={
                            active ? "text-[#18181B]" : "text-zinc-400"
                          }
                        />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom CTA */}
              <div className="mt-8 border-t-2 border-[#18181B]/10 dark:border-white/10 pt-4 flex flex-col gap-2.5">
                <Link
                  href="/event"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FF3B30] px-4 py-3 text-center text-xs sm:text-sm font-black text-white border-2 border-[#18181B] shadow-[3px_3px_0px_0px_#18181B] active:translate-y-0.5 transition-all dark:border-white dark:shadow-[3px_3px_0px_0px_#FFF]"
                >
                  <Zap size={16} /> Register Team <ArrowRight size={15} />
                </Link>
              </div>
            </aside>
          </div>,
          document.body
        )}
    </header>
  );
}