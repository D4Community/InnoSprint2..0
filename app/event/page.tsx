import { DevfolioArt } from "@/components/DevfolioArt";
import { MapPin, Sparkles } from "lucide-react";

const SPRINT_SCHEDULE = [
  { time: "Oct 10 · 09:00 AM", title: "Check-in & Registration", desc: "Badge collection, Wi-Fi onboarding, and team seat allocations at CGC University." },
  { time: "Oct 10 · 10:30 AM", title: "Opening Keynote & Track Briefing", desc: "D4 Community leads & sponsors announce API credits, problem statements, and track guidelines." },
  { time: "Oct 10 · 11:00 AM", title: "24-Hour Hacking Begins ⚡", desc: "The official 24-hour countdown starts across all hacking bays." },
  { time: "Oct 10 · 02:00 PM", title: "Mentorship Round 1", desc: "Industry experts and senior engineers review architecture and tech stacks." },
  { time: "Oct 10 · 08:00 PM", title: "Dinner & Project Demos", desc: "Fuel up for the overnight sprint session." },
  { time: "Oct 11 · 02:00 AM", title: "Midnight Snacks & Gaming Break", desc: "Relax with quick gaming modules and snacks before final project polishing." },
  { time: "Oct 11 · 11:00 AM", title: "24-Hour Code Freeze 🛑", desc: "Hacking ends! Devfolio project pages, GitHub commits, and demo videos locked." },
  { time: "Oct 11 · 12:00 PM - 02:30 PM", title: "Judge Presentations & Pitching", desc: "Top teams present 3-minute live demos to our judge panel." },
  { time: "Oct 11 · 03:00 PM", title: "Valedictory & Prize Distribution", desc: "Announcing InnoSprint 2.0 winners, track bounties, and closing ceremony." },
];

export default function EventPage() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Devfolio Background Floating Art */}
      <div className="pointer-events-none absolute left-6 top-16 hidden w-20 animate-float xl:block z-20">
        <DevfolioArt.BlueFin />
      </div>
      <div className="pointer-events-none absolute right-8 top-20 hidden w-24 animate-float xl:block z-20" style={{ animationDelay: "1.2s" }}>
        <DevfolioArt.YellowSmileBadge />
      </div>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#18181B] bg-white px-4 py-1.5 text-xs font-black shadow-[4px_4px_0px_0px_#18181B] mb-8 dark:border-white dark:bg-zinc-800">
          <Sparkles size={14} className="text-[#FF3B30]" />
          24-Hour Sprint Schedule
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
          Timeline & Event{" "}
          <span className="inline-block bg-[#FDE047] text-[#18181B] px-3.5 py-1 rounded-2xl border-2 border-[#18181B] shadow-[4px_4px_0px_0px_#18181B] dark:border-white -rotate-1 hover:rotate-1">
            Schedule
          </span>{" "}
          at CGC University
        </h1>

        <p className="mt-6 text-base font-bold text-zinc-700 dark:text-zinc-300 sm:text-xl">
          October 10th & 11th, 2026 · Landran, Greater Mohali, Punjab
        </p>

        {/* Schedule List */}
        <div className="mt-14 space-y-4 text-left">
          {SPRINT_SCHEDULE.map((s, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border-2 border-[#18181B] bg-white p-6 shadow-brutal dark:border-white dark:bg-zinc-900"
            >
              <span className="rounded-lg bg-[#FDE047] px-3 py-1 text-xs font-black text-[#18181B] border border-[#18181B] shrink-0">
                {s.time}
              </span>
              <div className="flex-1">
                <h3 className="text-base font-black">{s.title}</h3>
                <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mt-0.5">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Venue Location Card */}
        <div className="mt-12 rounded-3xl border-2 border-[#18181B] bg-[#FDE047] p-8 shadow-brutal-lg dark:border-white dark:bg-zinc-900 dark:text-white text-left">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="rounded-md bg-[#18181B] px-2.5 py-0.5 text-[10px] font-black uppercase text-[#FDE047]">
                Venue Information
              </span>
              <h3 className="mt-3 text-2xl font-black text-[#18181B] dark:text-white">CGC University Campus</h3>
              <p className="mt-1 text-xs font-bold text-zinc-800 dark:text-zinc-300">
                Landran, Mohali, Sector 112, Greater Mohali, Punjab 140307
              </p>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              data-cursor-text="MAPS 📍"
              className="inline-flex shrink-0 items-center gap-2 rounded-2xl border-2 border-[#18181B] bg-white px-6 py-3 text-xs font-black text-[#18181B] shadow-brutal hover:-translate-y-0.5 transition-all dark:border-white dark:bg-zinc-800 dark:text-zinc-100"
            >
              <MapPin size={16} className="text-[#FF3B30]" /> Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}