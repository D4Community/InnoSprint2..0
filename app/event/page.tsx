import { DevfolioArt } from "@/components/DevfolioArt";
import { MapPin, Sparkles, Clock, Calendar, Utensils, Trophy, Users, Presentation, Flame } from "lucide-react";

const SPRINT_SCHEDULE = [
  {
    title: "Registration",
    category: "Ceremony",
    desc: "Registration desk is open for all participants to collect their kits and badges.",
    date: "Oct 10, 2026",
    time: "7:30 AM - 10:00 AM",
    location: "Registration Desk",
    badgeColor: "bg-[#FF3B30] text-white",
    icon: Sparkles,
  },
  {
    title: "Inauguration",
    category: "Ceremony",
    desc: "The inauguration ceremony will begin, followed by participants proceeding to their project locations.",
    date: "Oct 10, 2026",
    time: "10:00 AM - 10:45 AM",
    location: "Main Auditorium",
    badgeColor: "bg-[#FF3B30] text-white",
    icon: Flame,
  },
  {
    title: "Lunch",
    category: "Social",
    desc: "Lunch will be served for all participants.",
    date: "Oct 10, 2026",
    time: "12:45 PM - 2:00 PM",
    location: "Food Court",
    badgeColor: "bg-[#FDE047] text-[#18181B]",
    icon: Utensils,
  },
  {
    title: "First round of Mentoring",
    category: "Mentoring",
    desc: "Teams will receive initial guidance and feedback from mentors during this session.",
    date: "Oct 10, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Team Zones",
    badgeColor: "bg-[#26A192] text-white",
    icon: Users,
  },
  {
    title: "Evening Snacks",
    category: "Social",
    desc: "Light snacks and tea/coffee will be served.",
    date: "Oct 10, 2026",
    time: "5:00 PM - 6:00 PM",
    location: "Food Court",
    badgeColor: "bg-[#FDE047] text-[#18181B]",
    icon: Utensils,
  },
  {
    title: "Second round of Mentoring",
    category: "Mentoring",
    desc: "Additional guidance and project refinement feedback from mentors.",
    date: "Oct 10, 2026",
    time: "6:15 PM - 8:00 PM",
    location: "Team Zones",
    badgeColor: "bg-[#26A192] text-white",
    icon: Users,
  },
  {
    title: "Dinner",
    category: "Social",
    desc: "Dinner will be served for all participants and mentors.",
    date: "Oct 10, 2026",
    time: "8:00 PM - 9:30 PM",
    location: "Food Court",
    badgeColor: "bg-[#FDE047] text-[#18181B]",
    icon: Utensils,
  },
  {
    title: "A fun activity session",
    category: "Social",
    desc: "Cultural or musical events to refresh participants and energize them for brainstorming.",
    date: "Oct 10, 2026",
    time: "11:00 PM - 12:00 AM",
    location: "Main Stage",
    badgeColor: "bg-[#FDE047] text-[#18181B]",
    icon: Trophy,
  },
  {
    title: "First evaluation round",
    category: "Presentation",
    desc: "Teams present their progress for assessment to the mentors.",
    date: "Oct 11, 2026",
    time: "1:00 AM - 5:00 AM",
    location: "Team Zones",
    badgeColor: "bg-[#81A2EF] text-[#18181B]",
    icon: Presentation,
  },
  {
    title: "Breakfast",
    category: "Social",
    desc: "Breakfast will be served to start the second day.",
    date: "Oct 11, 2026",
    time: "7:30 AM - 9:00 AM",
    location: "Food Court",
    badgeColor: "bg-[#FDE047] text-[#18181B]",
    icon: Utensils,
  },
  {
    title: "Final round of Evaluation",
    category: "Presentation",
    desc: "The top 10 to 15 teams present their projects to the judges. Each team has 10 minutes, followed by the felicitation ceremony.",
    date: "Oct 11, 2026",
    time: "10:30 AM - 2:00 PM",
    location: "Main Auditorium",
    badgeColor: "bg-[#81A2EF] text-[#18181B]",
    icon: Trophy,
  },
];

/**
 * Builds a smooth, snaking SVG path that threads through `n` evenly-spaced
 * anchor points down the vertical center (x = 100 in a 0-200 wide viewBox),
 * bulging left/right alternately between each pair of anchors so the line
 * reads as a curve instead of a straight rule. Because the SVG is rendered
 * with preserveAspectRatio="none", it stretches to fill whatever real pixel
 * height the timeline ends up taking — the curve stays visually consistent
 * even though card heights vary slightly.
 */
function getCurvePath(n: number, bulge = 55) {
  const viewHeight = 1000;
  const centerX = 100;
  const anchors = Array.from({ length: n }, (_, i) => ({
    x: centerX,
    y: ((i + 0.5) / n) * viewHeight,
  }));

  let d = `M ${centerX} 0`;
  let prev = { x: centerX, y: 0 };

  anchors.forEach((anchor, i) => {
    const dir = i % 2 === 0 ? 1 : -1;
    const c1y = prev.y + (anchor.y - prev.y) / 3;
    const c2y = prev.y + (2 * (anchor.y - prev.y)) / 3;
    d += ` C ${centerX + dir * bulge} ${c1y}, ${centerX + dir * bulge} ${c2y}, ${anchor.x} ${anchor.y}`;
    prev = anchor;
  });

  // Taper back to center after the final node
  d += ` C ${centerX} ${prev.y + (viewHeight - prev.y) / 3}, ${centerX} ${prev.y + (2 * (viewHeight - prev.y)) / 3}, ${centerX} ${viewHeight}`;

  return d;
}

export default function EventPage() {
  const curvePath = getCurvePath(SPRINT_SCHEDULE.length);

  return (
    <div className="relative overflow-hidden min-h-screen bg-[#FAF9F5] text-[#18181B] dark:bg-[#0F0F12] dark:text-zinc-100">
      {/* Devfolio Background Floating Art */}
      <div className="pointer-events-none absolute left-6 top-16 hidden w-20 animate-float xl:block z-20">
        <DevfolioArt.BlueFin />
      </div>
      <div
        className="pointer-events-none absolute right-8 top-20 hidden w-28 animate-float xl:block z-20"
        style={{ animationDelay: "1.2s" }}
      >
        <DevfolioArt.YellowSmileBadge />
      </div>
      <div
        className="pointer-events-none absolute left-10 top-[650px] hidden w-24 animate-float xl:block z-20"
        style={{ animationDelay: "1.6s" }}
      >
        <DevfolioArt.BeigeStar />
      </div>
      <div
        className="pointer-events-none absolute right-10 bottom-24 hidden w-16 animate-float xl:block z-20"
        style={{ animationDelay: "2s" }}
      >
        <DevfolioArt.BlueOrb />
      </div>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Header Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#18181B] bg-white px-4 py-1.5 text-xs font-black shadow-[3px_3px_0px_0px_#18181B] mb-8 dark:border-white dark:bg-zinc-800 dark:shadow-[3px_3px_0px_0px_#FFF]">
          <Sparkles size={14} className="text-[#FF3B30]" />
          24-Hour Sprint Schedule
        </div>

        {/* Title */}
        <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl text-[#18181B] dark:text-white">
          Timeline & Event{" "}
          <span className="inline-block bg-[#FDE047] text-[#18181B] px-3.5 py-1 rounded-2xl border-2 border-[#18181B] shadow-[4px_4px_0px_0px_#18181B] dark:border-white -rotate-1 hover:rotate-1">
            Schedule
          </span>{" "}
          at CGC University
        </h1>

        <p className="mt-6 text-base font-bold text-zinc-700 dark:text-zinc-300 sm:text-xl">
          October 10th & 11th, 2026 · Jhanjeri, Greater Mohali, Punjab
        </p>

        {/* CURVED CONNECTED TIMELINE */}
        <div className="relative mt-20 text-left">
          {/* Mobile: simple straight dotted line (no alternating sides to curve around) */}
          <div className="absolute left-6 top-4 bottom-10 w-1 -translate-x-1/2 border-r-4 border-dashed border-[#18181B] dark:border-white/60 pointer-events-none z-0 md:hidden" />

          {/* Desktop: curvy SVG path snaking through every node */}
          <svg
            className="pointer-events-none absolute left-1/2 top-4 bottom-10 hidden w-40 -translate-x-1/2 md:block z-0"
            style={{ height: "calc(100% - 3.5rem)" }}
            viewBox="0 0 200 1000"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d={curvePath}
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="2 14"
              className="text-[#18181B] dark:text-white/60"
            />
          </svg>

          <div className="space-y-12">
            {SPRINT_SCHEDULE.map((item, idx) => {
              const IconComponent = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  } justify-between gap-8`}
                >
                  {/* Timeline Card */}
                  <div className="ml-14 md:ml-0 w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)]">
                    <div className="group relative rounded-3xl border-2 border-[#18181B] bg-white p-6 shadow-[6px_6px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:shadow-[6px_6px_0px_0px_#FFF] transition-all hover:-translate-y-1">
                      
                      {/* Top Badges Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span
                          className={`rounded-md border border-[#18181B] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ${item.badgeColor}`}
                        >
                          {item.category}
                        </span>

                        <span className="flex items-center gap-1.5 rounded-lg border border-[#18181B] bg-zinc-100 px-2.5 py-0.5 text-[11px] font-black text-[#18181B] dark:border-white dark:bg-zinc-800 dark:text-zinc-200">
                          <Calendar size={13} className="text-[#FF3B30]" />
                          {item.date}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h3 className="text-xl font-black text-[#18181B] dark:text-white flex items-center gap-2">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-xs font-bold text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {item.desc}
                      </p>

                      {/* Card Footer Info */}
                      <div className="mt-5 pt-4 border-t-2 border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs font-black">
                        <span className="flex items-center gap-1.5 text-[#FF3B30]">
                          <Clock size={15} />
                          {item.time}
                        </span>

                        <span className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300">
                          <MapPin size={15} className="text-[#26A192]" />
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Central Node Badge, sitting on top of the curvy connector */}
                  <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-[#18181B] bg-[#FDE047] text-[#18181B] shadow-[3px_3px_0px_0px_#18181B] dark:border-white dark:shadow-[3px_3px_0px_0px_#FFF] z-10">
                    <IconComponent size={20} />
                  </div>

                  {/* Empty Spacer Column for Alternating Grid Balance on Desktop */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Venue Location Card */}
        <div className="mt-16 rounded-3xl border-2 border-[#18181B] bg-[#FDE047] p-8 shadow-[8px_8px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:text-white dark:shadow-[8px_8px_0px_0px_#FFF] text-left">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="rounded-md bg-[#18181B] px-2.5 py-0.5 text-[10px] font-black uppercase text-[#FDE047]">
                Venue Information
              </span>
              <h3 className="mt-3 text-2xl font-black text-[#18181B] dark:text-white">
                CGC University Campus
              </h3>
              <p className="mt-1 text-xs font-bold text-zinc-800 dark:text-zinc-300 leading-relaxed">
                Jhanjeri, Mohali, Sector 112, Greater Mohali, Punjab 140307
              </p>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              data-cursor-text="MAPS 📍"
              className="inline-flex shrink-0 items-center gap-2 rounded-2xl border-2 border-[#18181B] bg-white px-6 py-3.5 text-xs font-black text-[#18181B] shadow-[4px_4px_0px_0px_#18181B] hover:-translate-y-0.5 transition-all dark:border-white dark:bg-zinc-800 dark:text-zinc-100 dark:shadow-[4px_4px_0px_0px_#FFF]"
            >
              <MapPin size={16} className="text-[#FF3B30]" /> Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}