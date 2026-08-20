import { Trophy, Mail, Sparkles, ArrowLeft, Clock } from "lucide-react";
import { DevfolioArt } from "@/components/DevfolioArt";
import Link from 'next/link';

const SPONSORS_TIER = [
  { tier: "Title Sponsor", name: "CGC University & D4 Community", desc: "Premier hosting and infrastructure partner.", bg: "bg-[#FDE047] text-[#18181B]" },
  { tier: "Gold Sponsor", name: "Devfolio", desc: "Official hackathon platform and submission portal.", bg: "bg-[#FF3B30] text-white" },
  { tier: "Gold Sponsor", name: "GitHub Campus", desc: "Developer tools and student swags partner.", bg: "bg-[#26A192] text-white" },
  { tier: "Silver Sponsor", name: "Polygon Guild", desc: "Track bounties and Web3 mentor support.", bg: "bg-[#81A2EF] text-[#18181B]" },
  { tier: "Silver Sponsor", name: "AWS Community Hub", desc: "Cloud platform credits and hosting vouchers.", bg: "bg-[#FDE047] text-[#18181B]" },
];

export default function SponsorsPage() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Devfolio Floating Background Art */}
      <div className="pointer-events-none absolute left-6 top-16 hidden w-28 animate-float xl:block z-20">
        <DevfolioArt.BeigeStar />
      </div>
      <div className="pointer-events-none absolute right-8 top-20 hidden w-28 animate-float xl:block z-20" style={{ animationDelay: "1s" }}>
        <DevfolioArt.YellowCharacterFace />
      </div>
      <div className="pointer-events-none absolute left-10 top-[400px] hidden w-20 animate-float xl:block z-20" style={{ animationDelay: "1.5s" }}>
        <DevfolioArt.BlueCrescent />
      </div>
      <div className="pointer-events-none absolute right-12 bottom-20 hidden w-16 animate-float xl:block z-20" style={{ animationDelay: "1.8s" }}>
        <DevfolioArt.BlueOrb />
      </div>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 text-center relative z-10">
        {/* <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#18181B] bg-white px-4 py-1.5 text-xs font-black shadow-[4px_4px_0px_0px_#18181B] mb-8 dark:border-white dark:bg-zinc-800">
          <Sparkles size={14} className="text-[#FF3B30]" />
          Ecosystem Backers
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
          Backed by Leading{" "}
          <span className="inline-block bg-[#FF3B30] text-white px-3.5 py-1 rounded-2xl border-2 border-[#18181B] shadow-[4px_4px_0px_0px_#18181B] dark:border-white -rotate-1 hover:rotate-1">
            Tech Sponsors
          </span>
        </h1>

        <p className="mt-6 text-base font-bold text-zinc-700 dark:text-zinc-300 sm:text-lg max-w-2xl mx-auto">
          InnoSprint 2.0 is supported by visionary organizations committed to fostering student developer ecosystems across India.
        </p> */}

        {/* ------------ COMING SOON SECTION ----------- */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-[#18181B] bg-white px-4 py-1.5 text-xs font-black shadow-[3px_3px_0px_0px_#18181B] dark:border-white dark:bg-zinc-800 dark:shadow-[3px_3px_0px_0px_#FFF]">
          <Clock size={14} className="text-[#FF3B30] animate-pulse" />
          Under Construction
        </div>

        <h1 className="text-4xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
          Tech Sponsors{" "}
          <span className="inline-block bg-[#FDE047] text-[#18181B] px-3.5 py-1 rounded-2xl border-2 border-[#18181B] shadow-[4px_4px_0px_0px_#18181B] dark:border-white dark:shadow-[4px_4px_0px_0px_#FFF] -rotate-1 mt-2 sm:mt-0">
            Coming Soon!
          </span>
        </h1>

        <p className="mt-6 text-base font-bold text-zinc-700 dark:text-zinc-300 sm:text-lg max-w-lg mx-auto leading-relaxed">
          We are actively onboarding tech partners, cloud platforms, and developer ecosystems. Official sponsor announcements and track bounties will drop shortly!
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/"
            data-cursor-text="HOME 🏠"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#18181B] bg-[#FF3B30] px-6 py-3 text-xs font-black text-white shadow-[3px_3px_0px_0px_#18181B] transition-all hover:-translate-y-0.5 active:translate-y-0 dark:border-white dark:shadow-[3px_3px_0px_0px_#FFF]"
          >
            <ArrowLeft size={16} /> Return to Homepage
          </Link>
        </div>
        {/* --------------- END COMING SOON ------------- */}

        {/* <div className="mt-14 space-y-6 text-left">
          {SPONSORS_TIER.map((s, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-3xl border-2 border-[#18181B] bg-white p-8 shadow-brutal-lg dark:border-white dark:bg-zinc-900"
            >
              <div>
                <span className={`inline-block rounded-md border border-[#18181B] px-2.5 py-0.5 text-[10px] font-black uppercase ${s.bg}`}>
                  {s.tier}
                </span>
                <h3 className="mt-3 text-2xl font-black">{s.name}</h3>
                <p className="mt-1 text-xs font-bold text-zinc-500 dark:text-zinc-400">{s.desc}</p>
              </div>
              <Trophy size={32} className="text-[#FDE047] shrink-0 hidden sm:block" />
            </div>
          ))}
        </div> */}

        {/* Sponsor Us Callout */}
        {/* <div className="mt-16 rounded-3xl border-2 border-[#18181B] bg-[#18181B] p-8 text-white shadow-brutal-xl dark:border-white text-left">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="rounded-md bg-[#FDE047] px-2 py-0.5 text-[10px] font-black text-[#18181B] uppercase">
                Partner With Us
              </span>
              <h2 className="mt-3 text-2xl font-black sm:text-3xl text-white">Interested in Sponsoring?</h2>
              <p className="mt-1 text-xs font-bold text-zinc-300 max-w-xl">
                Connect with 500+ top student developers, offer track bounties, and recruit exceptional engineering talent.
              </p>
            </div>
            <a
              href="mailto:sponsors@d4community.org"
              data-cursor-text="MAIL US 📧"
              className="inline-flex shrink-0 items-center gap-2 rounded-2xl border-2 border-white bg-[#FF3B30] px-6 py-3.5 text-xs font-black text-white shadow-brutal-white hover:-translate-y-0.5 transition-all"
            >
              <Mail size={16} /> Contact Sponsorship Team
            </a>
          </div>
        </div> */}
      </section>
    </div>
  );
}