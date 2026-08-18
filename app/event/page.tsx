"use client";

import React, { useState, useMemo } from "react";
import { DevfolioArt } from "@/components/DevfolioArt";
import {
  MapPin,
  Sparkles,
  Clock,
  Calendar,
  Utensils,
  Trophy,
  Users,
  Presentation,
  Flame,
  Search,
  Bookmark,
  Share2,
  Grid,
  List,
  Layers,
  Zap,
  Check,
  X,
  ChevronRight,
  Sliders,
  Radio,
  ArrowUpRight,
} from "lucide-react";

interface ScheduleItem {
  id: number;
  title: string;
  category: "Ceremony" | "Social" | "Mentoring" | "Presentation";
  desc: string;
  deliverables: string[];
  date: "Oct 10, 2026" | "Oct 11, 2026";
  day: "Day 1" | "Day 2";
  time: string;
  startHour: number; // 0 to 28 scale relative to 07:30 AM Oct 10
  endHour: number;
  location: string;
  badgeColor: string;
  icon: React.ElementType;
  isKeyMilestone?: boolean;
}

const SPRINT_SCHEDULE: ScheduleItem[] = [
  {
    id: 1,
    title: "Registration & Hacker Onboarding",
    category: "Ceremony",
    desc: "Check-in at the desk, collect your hacker badges, exclusive Devfolio swag kits, and food coupons.",
    deliverables: ["Collect ID Badge & Wristband", "Claim Hackathon Swag Bag", "Verify Discord Role"],
    date: "Oct 10, 2026",
    day: "Day 1",
    time: "07:30 AM - 10:00 AM",
    startHour: 0,
    endHour: 2.5,
    location: "Registration Desk (Block A)",
    badgeColor: "bg-[#FF3B30] text-white",
    icon: Sparkles,
  },
  {
    id: 2,
    title: "Grand Inauguration & Keynote",
    category: "Ceremony",
    desc: "Opening ceremony with problem statement drops, sponsor track reveals, rules briefing, and mentor intros.",
    deliverables: ["Problem Statement Release", "Track & API Key Access", "Safety & Rules Orientation"],
    date: "Oct 10, 2026",
    day: "Day 1",
    time: "10:00 AM - 10:45 AM",
    startHour: 2.5,
    endHour: 3.25,
    location: "Main Auditorium",
    badgeColor: "bg-[#FF3B30] text-white",
    icon: Flame,
    isKeyMilestone: true,
  },
  {
    id: 3,
    title: "Networking & Power Lunch",
    category: "Social",
    desc: "Buffet lunch served in the central food court. Mingle with mentors and finalize team roles.",
    deliverables: ["Refuel & Socialize", "Team Role Finalization"],
    date: "Oct 10, 2026",
    day: "Day 1",
    time: "12:45 PM - 02:00 PM",
    startHour: 5.25,
    endHour: 6.5,
    location: "Food Court (Zone C)",
    badgeColor: "bg-[#FDE047] text-[#18181B]",
    icon: Utensils,
  },
  {
    id: 4,
    title: "Mentoring Round 1: Architecture Check",
    category: "Mentoring",
    desc: "Domain experts conduct 1-on-1 desk visits to evaluate team architecture, scope, and technical viability.",
    deliverables: ["Architecture Review", "API Integration Greenlight", "Scope Boundary Lockdown"],
    date: "Oct 10, 2026",
    day: "Day 1",
    time: "02:00 PM - 05:00 PM",
    startHour: 6.5,
    endHour: 9.5,
    location: "Team Hacking Zones",
    badgeColor: "bg-[#26A192] text-white",
    icon: Users,
    isKeyMilestone: true,
  },
  {
    id: 5,
    title: "High Tea & Coffee Fuel",
    category: "Social",
    desc: "Snacks, hot tea, and energy drinks served to keep teams energized for the evening sprint.",
    deliverables: ["Caffeine & Snack Break"],
    date: "Oct 10, 2026",
    day: "Day 1",
    time: "05:00 PM - 06:00 PM",
    startHour: 9.5,
    endHour: 10.5,
    location: "Food Court (Zone C)",
    badgeColor: "bg-[#FDE047] text-[#18181B]",
    icon: Utensils,
  },
  {
    id: 6,
    title: "Mentoring Round 2: Progress & Pivot",
    category: "Mentoring",
    desc: "Mentors review live code repos, UI wireframes, and help resolve blocker bugs before nightfall.",
    deliverables: ["Live Code Sync", "UI/UX Prototype Review", "Debug & Pivot Guidance"],
    date: "Oct 10, 2026",
    day: "Day 1",
    time: "06:15 PM - 08:00 PM",
    startHour: 10.75,
    endHour: 12.5,
    location: "Team Hacking Zones",
    badgeColor: "bg-[#26A192] text-white",
    icon: Users,
  },
  {
    id: 7,
    title: "Midnight Sprint Dinner",
    category: "Social",
    desc: "Full course dinner served to hackers, mentors, and organizers.",
    deliverables: ["Dinner Feast", "Late-Night Snack Rationing"],
    date: "Oct 10, 2026",
    day: "Day 1",
    time: "08:00 PM - 09:30 PM",
    startHour: 12.5,
    endHour: 14,
    location: "Food Court (Zone C)",
    badgeColor: "bg-[#FDE047] text-[#18181B]",
    icon: Utensils,
  },
  {
    id: 8,
    title: "Midnight Jam & Side Quests",
    category: "Social",
    desc: "Acoustic music sessions, esports mini-tournaments, and mini-games to refresh tired brains.",
    deliverables: ["Mini-game Swag Wins", "Acoustic Unwind"],
    date: "Oct 10, 2026",
    day: "Day 1",
    time: "11:00 PM - 12:00 AM",
    startHour: 15.5,
    endHour: 16.5,
    location: "Main Stage Plaza",
    badgeColor: "bg-[#FDE047] text-[#18181B]",
    icon: Trophy,
  },
  {
    id: 9,
    title: "Evaluation Round 1: Midnight Blitz",
    category: "Presentation",
    desc: "Judges conduct preliminary screening at team booths. Working code and core demo required.",
    deliverables: ["Working Demo Proof", "Git Repo Verification", "Pitch Deck Draft"],
    date: "Oct 11, 2026",
    day: "Day 2",
    time: "01:00 AM - 05:00 AM",
    startHour: 17.5,
    endHour: 21.5,
    location: "Team Hacking Zones",
    badgeColor: "bg-[#81A2EF] text-[#18181B]",
    icon: Presentation,
    isKeyMilestone: true,
  },
  {
    id: 10,
    title: "Sunrise Breakfast & Final Polish",
    category: "Social",
    desc: "Fresh breakfast and coffee served. Final Devfolio project submission deadline approaches.",
    deliverables: ["Devfolio Final Code Freeze", "Demo Video Upload"],
    date: "Oct 11, 2026",
    day: "Day 2",
    time: "07:30 AM - 09:00 AM",
    startHour: 24,
    endHour: 25.5,
    location: "Food Court (Zone C)",
    badgeColor: "bg-[#FDE047] text-[#18181B]",
    icon: Utensils,
  },
  {
    id: 11,
    title: "Grand Finale: Top 15 Pitches & Award Ceremony",
    category: "Presentation",
    desc: "The top 15 shortlisted teams present live on stage to the grand jury. Winners declared!",
    deliverables: ["10-Min Live Stage Pitch", "Q&A with Jury", "Felicitation & Cash Prizes"],
    date: "Oct 11, 2026",
    day: "Day 2",
    time: "10:30 AM - 02:00 PM",
    startHour: 27,
    endHour: 30.5,
    location: "Main Auditorium",
    badgeColor: "bg-[#81A2EF] text-[#18181B]",
    icon: Trophy,
    isKeyMilestone: true,
  },
];

const CATEGORIES = ["All", "Ceremony", "Mentoring", "Presentation", "Social"] as const;

export default function EventPage() {
  const [viewMode, setViewMode] = useState<"stream" | "matrix" | "table">("stream");
  const [selectedDay, setSelectedDay] = useState<"All" | "Day 1" | "Day 2">("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [scrubberHour, setScrubberHour] = useState<number>(8); // Hour scrubber state
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]);
  const [activeModalItem, setActiveModalItem] = useState<ScheduleItem | null>(null);
  const [showBookmarkedOnly, setShowBookmarkedOnly] = useState(false);
  const [copied, setCopied] = useState(false);

  // Filtered schedule logic
  const filteredSchedule = useMemo(() => {
    return SPRINT_SCHEDULE.filter((item) => {
      const matchesDay = selectedDay === "All" || item.day === selectedDay;
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBookmark = !showBookmarkedOnly || bookmarkedIds.includes(item.id);

      return matchesDay && matchesCategory && matchesSearch && matchesBookmark;
    });
  }, [selectedDay, selectedCategory, searchQuery, showBookmarkedOnly, bookmarkedIds]);

  const toggleBookmark = (id: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleShare = (item: ScheduleItem, e?: React.MouseEvent) => {
    e?.stopPropagation();
    navigator.clipboard.writeText(
      `Join me at "${item.title}" (${item.time}) at ${item.location}!`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Scrubber percentage calculation
  const scrubberPercent = (scrubberHour / 28) * 100;

  return (
    <div className="relative min-h-screen bg-[#FAF9F5] text-[#18181B] selection:bg-[#FDE047] dark:bg-[#0A0A0D] dark:text-zinc-100 font-sans">
      {/* Devfolio Background Floating Art */}
      <div className="pointer-events-none absolute left-6 top-16 hidden w-20 animate-float xl:block z-20 opacity-80">
        <DevfolioArt.BlueFin />
      </div>
      <div
        className="pointer-events-none absolute right-8 top-20 hidden w-28 animate-float xl:block z-20 opacity-80"
        style={{ animationDelay: "1.2s" }}
      >
        <DevfolioArt.YellowSmileBadge />
      </div>
      <div
        className="pointer-events-none absolute left-10 top-[650px] hidden w-24 animate-float xl:block z-20 opacity-80"
        style={{ animationDelay: "1.6s" }}
      >
        <DevfolioArt.BeigeStar />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* HERO HEADER */}
        <header className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#18181B] bg-white px-4 py-1.5 text-xs font-black shadow-[3px_3px_0px_0px_#18181B] dark:border-white dark:bg-zinc-800 dark:shadow-[3px_3px_0px_0px_#FFF]">
            <Sparkles size={14} className="text-[#FF3B30] animate-spin" />
            24-Hour Command Center
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
            Timeline & Event{" "}
            <span className="inline-block -rotate-1 rounded-2xl border-2 border-[#18181B] bg-[#FDE047] px-3.5 py-1 text-[#18181B] shadow-[4px_4px_0px_0px_#18181B] transition-transform hover:rotate-1 dark:border-white">
              Schedule
            </span>{" "}
            at CGC University
          </h1>

          <p className="mt-4 text-base font-bold text-zinc-700 dark:text-zinc-300 sm:text-xl">
            October 10th & 11th, 2026 · Jhanjeri, Greater Mohali, Punjab
          </p>

          {/* LIVE RADAR STATS BAR */}
          <div className="mt-8 mx-auto max-w-4xl rounded-3xl border-2 border-[#18181B] bg-white p-4 shadow-[6px_6px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:shadow-[6px_6px_0px_0px_#FFF]">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              <div className="flex flex-col items-center justify-center rounded-2xl border border-[#18181B] bg-[#FF3B30]/10 p-3 dark:border-white/20">
                <span className="flex items-center gap-1 text-[10px] font-black uppercase text-[#FF3B30]">
                  <Radio size={12} className="animate-pulse" /> Sprint Status
                </span>
                <span className="mt-1 text-sm sm:text-base font-black text-[#FF3B30]">
                  Active Sprint
                </span>
              </div>

              <div className="flex flex-col items-center justify-center rounded-2xl border border-[#18181B] bg-[#FDE047]/20 p-3 dark:border-white/20">
                <span className="text-[10px] font-black uppercase text-zinc-600 dark:text-zinc-400">
                  Total Schedule
                </span>
                <span className="mt-1 text-sm sm:text-base font-black">11 Key Sessions</span>
              </div>

              <div className="flex flex-col items-center justify-center rounded-2xl border border-[#18181B] bg-[#26A192]/20 p-3 dark:border-white/20">
                <span className="text-[10px] font-black uppercase text-zinc-600 dark:text-zinc-400">
                  Mentoring Track
                </span>
                <span className="mt-1 text-sm sm:text-base font-black text-[#26A192]">2 Rounds</span>
              </div>

              <div className="flex flex-col items-center justify-center rounded-2xl border border-[#18181B] bg-[#81A2EF]/20 p-3 dark:border-white/20">
                <span className="text-[10px] font-black uppercase text-zinc-600 dark:text-zinc-400">
                  Evaluations
                </span>
                <span className="mt-1 text-sm sm:text-base font-black">2 Elimination Rounds</span>
              </div>
            </div>
          </div>
        </header>

        {/* ================= 24-HOUR INTERACTIVE SCRUBBER WITH VISIBLE PROGRESS BAR ================= */}
        <section className="mt-10 rounded-3xl border-2 border-[#18181B] bg-white p-6 shadow-[6px_6px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:shadow-[6px_6px_0px_0px_#FFF]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#18181B] bg-[#FDE047] text-[#18181B] font-black dark:border-white">
                <Sliders size={16} />
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-wider">
                  Interactive Time Scrubber
                </h3>
                <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400">
                  Drag the handle across the progress bar to highlight events happening around Hour {scrubberHour}
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-xl border-2 border-[#18181B] bg-[#FDE047] px-3.5 py-1.5 text-xs font-black text-[#18181B]">
              <Clock size={14} />
              Sprint Hour: +{scrubberHour}:00 HRS
            </div>
          </div>

          {/* NEOBRUTALIST CUSTOM RANGE SLIDER TRACK */}
          <div className="relative pt-3 pb-1">
            {/* Outer Bar Track */}
            <div className="relative h-6 w-full rounded-2xl border-2 border-[#18181B] bg-zinc-100 overflow-hidden dark:border-white dark:bg-zinc-800">
              {/* VIBRANT RED PROGRESS FILL BAR */}
              <div
                className="absolute left-0 top-0 bottom-0 bg-[#FF3B30] border-r-2 border-[#18181B] transition-all duration-75 dark:border-white"
                style={{ width: `${scrubberPercent}%` }}
              />

              {/* Tick Marks Inside Progress Bar */}
              <div className="absolute inset-0 flex justify-between px-3 items-center pointer-events-none text-[9px] font-black text-zinc-600 dark:text-zinc-300">
                <span className="z-10">0H</span>
                <span className="z-10">7H</span>
                <span className="z-10">14H</span>
                <span className="z-10">21H</span>
                <span className="z-10">28H</span>
              </div>
            </div>

            {/* Custom Draggable Handle / Thumb */}
            <div
              className="pointer-events-none absolute top-2 -translate-y-1 flex items-center justify-center h-8 w-8 rounded-xl border-2 border-[#18181B] bg-[#FDE047] text-[#18181B] font-black shadow-[2px_2px_0px_0px_#18181B] transition-all duration-75 dark:border-white"
              style={{
                left: `calc(${Math.min(96, Math.max(2, scrubberPercent))}% - 16px)`,
              }}
            >
              <Zap size={14} className="fill-current" />
            </div>

            {/* Transparent Native Input Overlay for Drag / Touch Interactions */}
            <input
              type="range"
              min="0"
              max="28"
              step="1"
              value={scrubberHour}
              onChange={(e) => setScrubberHour(Number(e.target.value))}
              className="absolute inset-0 z-20 h-full w-full opacity-0 cursor-pointer"
            />

            <div className="flex justify-between text-[10px] font-black text-zinc-500 mt-3 dark:text-zinc-400">
              <span>07:30 AM (Start)</span>
              <span>02:00 PM (Lunch)</span>
              <span>08:00 PM (Dinner)</span>
              <span>01:00 AM (Eval 1)</span>
              <span>02:00 PM (Finale)</span>
            </div>
          </div>
        </section>

        {/* CONTROLS & FILTER TOOLBAR */}
        <section className="mt-8 rounded-3xl border-2 border-[#18181B] bg-white p-4 sm:p-6 shadow-[6px_6px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:shadow-[6px_6px_0px_0px_#FFF]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* View Mode Switcher */}
            <div className="flex items-center gap-1.5 rounded-2xl border-2 border-[#18181B] bg-zinc-100 p-1.5 dark:border-white dark:bg-zinc-800">
              <button
                onClick={() => setViewMode("stream")}
                className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-black transition-all ${
                  viewMode === "stream"
                    ? "border-2 border-[#18181B] bg-[#FDE047] text-[#18181B] shadow-[2px_2px_0px_0px_#18181B] dark:border-white"
                    : "text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                }`}
              >
                <Layers size={14} /> Stream View
              </button>
              <button
                onClick={() => setViewMode("matrix")}
                className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-black transition-all ${
                  viewMode === "matrix"
                    ? "border-2 border-[#18181B] bg-[#FDE047] text-[#18181B] shadow-[2px_2px_0px_0px_#18181B] dark:border-white"
                    : "text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                }`}
              >
                <Grid size={14} /> Matrix Board
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-black transition-all ${
                  viewMode === "table"
                    ? "border-2 border-[#18181B] bg-[#FDE047] text-[#18181B] shadow-[2px_2px_0px_0px_#18181B] dark:border-white"
                    : "text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                }`}
              >
                <List size={14} /> Compact Table
              </button>
            </div>

            {/* Day Switcher */}
            <div className="flex items-center gap-1.5 rounded-2xl border-2 border-[#18181B] bg-zinc-100 p-1.5 dark:border-white dark:bg-zinc-800">
              {(["All", "Day 1", "Day 2"] as const).map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-black transition-all ${
                    selectedDay === day
                      ? "border-2 border-[#18181B] bg-[#18181B] text-white shadow-[2px_2px_0px_0px_#FF3B30] dark:bg-white dark:text-[#18181B]"
                      : "text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Search Input & Bookmarks */}
            <div className="flex items-center gap-2 flex-1 max-w-md">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search session, mentor, room..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-2xl border-2 border-[#18181B] bg-white py-2 pl-10 pr-4 text-xs font-bold text-[#18181B] placeholder-zinc-400 outline-none transition-all focus:ring-2 focus:ring-[#FDE047] dark:border-white dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-500"
                />
              </div>

              <button
                onClick={() => setShowBookmarkedOnly(!showBookmarkedOnly)}
                className={`flex items-center gap-1.5 rounded-2xl border-2 border-[#18181B] px-3 py-2 text-xs font-black shadow-[2px_2px_0px_0px_#18181B] transition-all dark:border-white dark:shadow-[2px_2px_0px_0px_#FFF] ${
                  showBookmarkedOnly
                    ? "bg-[#FF3B30] text-white"
                    : "bg-white text-[#18181B] dark:bg-zinc-800 dark:text-white"
                }`}
              >
                <Bookmark size={14} fill={showBookmarkedOnly ? "currentColor" : "none"} />
                <span>({bookmarkedIds.length})</span>
              </button>
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="mt-4 flex flex-wrap items-center gap-2 pt-4 border-t-2 border-zinc-100 dark:border-zinc-800">
            <span className="text-xs font-black text-zinc-400 uppercase tracking-wider mr-2">
              Filter Track:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl border border-[#18181B] px-3 py-1 text-xs font-black transition-all dark:border-white ${
                  selectedCategory === cat
                    ? "bg-[#FDE047] text-[#18181B] shadow-[2px_2px_0px_0px_#18181B]"
                    : "bg-zinc-50 text-zinc-700 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* MAIN SCHEDULE RENDERER */}
        <section className="mt-8">
          {filteredSchedule.length === 0 ? (
            <div className="rounded-3xl border-2 border-dashed border-[#18181B] bg-white p-12 text-center dark:border-white dark:bg-zinc-900">
              <Zap size={36} className="mx-auto text-[#FF3B30]" />
              <h3 className="mt-3 text-lg font-black">No matching events found</h3>
              <p className="mt-1 text-xs font-bold text-zinc-500">
                Try resetting your search filters or bookmarked items.
              </p>
              <button
                onClick={() => {
                  setSelectedDay("All");
                  setSelectedCategory("All");
                  setSearchQuery("");
                  setShowBookmarkedOnly(false);
                }}
                className="mt-4 rounded-xl border-2 border-[#18181B] bg-[#FDE047] px-4 py-2 text-xs font-black text-[#18181B] shadow-[2px_2px_0px_0px_#18181B]"
              >
                Clear All Filters
              </button>
            </div>
          ) : viewMode === "stream" ? (
            /* STREAM VIEW */
            <div className="relative space-y-6">
              <div className="pointer-events-none absolute left-8 top-8 bottom-8 hidden w-1 border-r-4 border-dashed border-[#18181B] dark:border-white/40 md:block" />

              {filteredSchedule.map((item) => {
                const IconComponent = item.icon;
                const isBookmarked = bookmarkedIds.includes(item.id);
                const isScrubHighlighted =
                  scrubberHour >= item.startHour && scrubberHour <= item.endHour;

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveModalItem(item)}
                    className={`group relative cursor-pointer rounded-3xl border-2 border-[#18181B] bg-white p-5 sm:p-6 shadow-[6px_6px_0px_0px_#18181B] transition-all hover:-translate-y-1 dark:border-white dark:bg-zinc-900 dark:shadow-[6px_6px_0px_0px_#FFF] ${
                      isScrubHighlighted
                        ? "ring-4 ring-[#FF3B30] bg-[#FFFDF0] dark:bg-zinc-800"
                        : ""
                    }`}
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-[#18181B] bg-[#FDE047] text-[#18181B] shadow-[3px_3px_0px_0px_#18181B] dark:border-white">
                          <IconComponent size={22} />
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`rounded-md border border-[#18181B] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider ${item.badgeColor}`}
                            >
                              {item.category}
                            </span>
                            <span className="rounded-md border border-[#18181B] bg-zinc-100 px-2 py-0.5 text-[10px] font-black text-zinc-800 dark:border-white dark:bg-zinc-800 dark:text-zinc-200">
                              {item.day}
                            </span>
                            {item.isKeyMilestone && (
                              <span className="inline-flex items-center gap-1 rounded-md bg-[#FF3B30] px-2 py-0.5 text-[10px] font-black text-white">
                                Key Milestone 🔥
                              </span>
                            )}
                          </div>

                          <h3 className="mt-1.5 text-lg sm:text-xl font-black text-[#18181B] dark:text-white flex items-center gap-2">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 pt-3 border-t-2 border-zinc-100 md:border-none md:pt-0 dark:border-zinc-800">
                        <div className="flex items-center gap-1.5 rounded-xl border-2 border-[#18181B] bg-[#FAF9F5] px-3 py-1.5 text-xs font-black text-[#FF3B30] dark:border-white dark:bg-zinc-800">
                          <Clock size={14} />
                          {item.time}
                        </div>

                        <div className="flex items-center gap-1.5 rounded-xl border-2 border-[#18181B] bg-zinc-100 px-3 py-1.5 text-xs font-black text-zinc-700 dark:border-white dark:bg-zinc-800 dark:text-zinc-300">
                          <MapPin size={14} className="text-[#26A192]" />
                          {item.location}
                        </div>

                        <button
                          onClick={(e) => toggleBookmark(item.id, e)}
                          className={`rounded-xl border-2 border-[#18181B] p-2 transition-all dark:border-white ${
                            isBookmarked
                              ? "bg-[#FF3B30] text-white"
                              : "bg-white text-[#18181B] hover:bg-zinc-100 dark:bg-zinc-800 dark:text-white"
                          }`}
                        >
                          <Bookmark size={16} fill={isBookmarked ? "currentColor" : "none"} />
                        </button>
                      </div>
                    </div>

                    <p className="mt-3 text-xs sm:text-sm font-bold text-zinc-600 dark:text-zinc-300 leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>

                    <div className="mt-4 flex items-center justify-between text-xs font-black text-[#FF3B30]">
                      <span className="flex items-center gap-1">
                        View Deliverables & Details <ChevronRight size={14} />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : viewMode === "matrix" ? (
            /* MATRIX BOARD VIEW */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CATEGORIES.filter((c) => c !== "All").map((cat) => {
                const categoryItems = filteredSchedule.filter((item) => item.category === cat);

                return (
                  <div
                    key={cat}
                    className="rounded-3xl border-2 border-[#18181B] bg-white p-5 shadow-[6px_6px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:shadow-[6px_6px_0px_0px_#FFF]"
                  >
                    <div className="flex items-center justify-between border-b-2 border-[#18181B] pb-3 dark:border-white">
                      <h4 className="font-black text-sm uppercase tracking-wider">{cat}</h4>
                      <span className="rounded-full bg-[#FDE047] px-2 py-0.5 text-xs font-black text-[#18181B]">
                        {categoryItems.length}
                      </span>
                    </div>

                    <div className="mt-4 space-y-4">
                      {categoryItems.length === 0 ? (
                        <p className="text-xs font-bold text-zinc-400 py-4 text-center">
                          No events in this category
                        </p>
                      ) : (
                        categoryItems.map((item) => {
                          const IconComponent = item.icon;
                          return (
                            <div
                              key={item.id}
                              onClick={() => setActiveModalItem(item)}
                              className="cursor-pointer rounded-2xl border-2 border-[#18181B] bg-zinc-50 p-4 transition-all hover:-translate-y-1 hover:bg-[#FDE047]/20 dark:border-white dark:bg-zinc-800"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-[10px] font-black text-[#FF3B30]">
                                  {item.time}
                                </span>
                                <span className="text-[10px] font-black uppercase text-zinc-500">
                                  {item.day}
                                </span>
                              </div>
                              <h5 className="mt-1 text-sm font-black text-[#18181B] dark:text-white flex items-center gap-1.5">
                                <IconComponent size={14} className="text-[#FF3B30]" />
                                {item.title}
                              </h5>
                              <p className="mt-2 text-[11px] font-bold text-zinc-600 dark:text-zinc-400 line-clamp-2">
                                {item.desc}
                              </p>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* COMPACT TABLE VIEW */
            <div className="overflow-x-auto rounded-3xl border-2 border-[#18181B] bg-white shadow-[6px_6px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:shadow-[6px_6px_0px_0px_#FFF]">
              <table className="w-full text-left text-xs font-bold">
                <thead className="border-b-2 border-[#18181B] bg-[#FDE047] text-[#18181B] font-black uppercase tracking-wider dark:border-white">
                  <tr>
                    <th className="p-4">Time & Day</th>
                    <th className="p-4">Event Title</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Location</th>
                    <th className="p-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-zinc-100 dark:divide-zinc-800">
                  {filteredSchedule.map((item) => (
                    <tr
                      key={item.id}
                      onClick={() => setActiveModalItem(item)}
                      className="cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                    >
                      <td className="p-4 font-black text-[#FF3B30] whitespace-nowrap">
                        {item.time} ({item.day})
                      </td>
                      <td className="p-4 font-black text-[#18181B] dark:text-white">
                        {item.title}
                      </td>
                      <td className="p-4">
                        <span
                          className={`rounded-md border border-[#18181B] px-2 py-0.5 text-[10px] font-black uppercase ${item.badgeColor}`}
                        >
                          {item.category}
                        </span>
                      </td>
                      <td className="p-4 text-zinc-600 dark:text-zinc-300">{item.location}</td>
                      <td className="p-4 text-right">
                        <button className="rounded-xl border border-[#18181B] bg-white px-3 py-1 text-[11px] font-black text-[#18181B] shadow-[2px_2px_0px_0px_#18181B] dark:border-white dark:bg-zinc-800 dark:text-white">
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* INTERACTIVE SESSION MODAL */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl rounded-3xl border-2 border-[#18181B] bg-white p-6 sm:p-8 text-left shadow-[10px_10px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:shadow-[10px_10px_0px_0px_#FFF]">
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute right-5 top-5 rounded-xl border-2 border-[#18181B] bg-zinc-100 p-2 text-[#18181B] hover:bg-[#FF3B30] hover:text-white transition-all dark:border-white dark:bg-zinc-800 dark:text-white"
              >
                <X size={18} />
              </button>

              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span
                  className={`rounded-md border border-[#18181B] px-2.5 py-0.5 text-[10px] font-black uppercase ${activeModalItem.badgeColor}`}
                >
                  {activeModalItem.category}
                </span>
                <span className="rounded-md border border-[#18181B] bg-zinc-100 px-2.5 py-0.5 text-[10px] font-black text-zinc-800 dark:border-white dark:bg-zinc-800 dark:text-zinc-200">
                  {activeModalItem.day} ({activeModalItem.date})
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#18181B] dark:text-white">
                {activeModalItem.title}
              </h2>

              <p className="mt-3 text-xs sm:text-sm font-bold text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {activeModalItem.desc}
              </p>

              {/* Deliverables Checkpoints */}
              <div className="mt-6 rounded-2xl border-2 border-[#18181B] bg-[#FAF9F5] p-4 dark:border-white dark:bg-zinc-800">
                <h4 className="text-xs font-black uppercase tracking-wider text-zinc-500 mb-2 dark:text-zinc-400">
                  Key Deliverables & Action Items:
                </h4>
                <ul className="space-y-2">
                  {activeModalItem.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-bold text-zinc-800 dark:text-zinc-200">
                      <Check size={14} className="text-[#26A192]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Actions */}
              <div className="mt-6 pt-4 border-t-2 border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-xs font-black">
                  <span className="flex items-center gap-1 text-[#FF3B30]">
                    <Clock size={15} /> {activeModalItem.time}
                  </span>
                  <span className="flex items-center gap-1 text-zinc-700 dark:text-zinc-300">
                    <MapPin size={15} className="text-[#26A192]" /> {activeModalItem.location}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShare(activeModalItem)}
                    className="inline-flex items-center gap-1.5 rounded-xl border-2 border-[#18181B] bg-white px-4 py-2 text-xs font-black text-[#18181B] shadow-[2px_2px_0px_0px_#18181B] dark:border-white dark:bg-zinc-800 dark:text-white"
                  >
                    <Share2 size={14} /> {copied ? "Copied!" : "Share"}
                  </button>

                  <button
                    onClick={() => toggleBookmark(activeModalItem.id)}
                    className={`inline-flex items-center gap-1.5 rounded-xl border-2 border-[#18181B] px-4 py-2 text-xs font-black shadow-[2px_2px_0px_0px_#18181B] dark:border-white ${
                      bookmarkedIds.includes(activeModalItem.id)
                        ? "bg-[#FF3B30] text-white"
                        : "bg-[#FDE047] text-[#18181B]"
                    }`}
                  >
                    <Bookmark size={14} fill={bookmarkedIds.includes(activeModalItem.id) ? "currentColor" : "none"} />
                    {bookmarkedIds.includes(activeModalItem.id) ? "Bookmarked" : "Bookmark"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VENUE COMMAND BOX */}
        <section className="mt-16 rounded-3xl border-2 border-[#18181B] bg-[#FDE047] p-8 text-left shadow-[8px_8px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:text-white dark:shadow-[8px_8px_0px_0px_#FFF]">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <span className="rounded-md bg-[#18181B] px-2.5 py-0.5 text-[10px] font-black uppercase text-[#FDE047]">
                Official Venue & Campus
              </span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-black text-[#18181B] dark:text-white">
                CGC University Campus
              </h3>
              <p className="mt-1 text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-300 leading-relaxed">
                Jhanjeri, Mohali, Sector 112, Greater Mohali, Punjab 140307
              </p>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-2xl border-2 border-[#18181B] bg-white px-6 py-3.5 text-xs font-black text-[#18181B] shadow-[4px_4px_0px_0px_#18181B] transition-all hover:-translate-y-0.5 dark:border-white dark:bg-zinc-800 dark:text-zinc-100 dark:shadow-[4px_4px_0px_0px_#FFF]"
            >
              <MapPin size={16} className="text-[#FF3B30]" /> Open in Google Maps <ArrowUpRight size={14} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}