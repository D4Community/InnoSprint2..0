import { Award, ExternalLink, Sparkles, ArrowLeft, Clock } from "lucide-react";
import { DevfolioArt } from "@/components/DevfolioArt";
import Link from 'next/link'

const MENTORS = [
  { name: "Dr. Vikram Sethi", role: "AI Research Scientist", company: "Tech Labs India", domain: "AI / ML & Agents" },
  { name: "Neha Verma", role: "Senior Staff Engineer", company: "CloudScale Systems", domain: "Cloud & DevOps" },
  { name: "Siddharth Rao", role: "Product Manager", company: "DevScale", domain: "Product & UI/UX" },
  { name: "Pooja Malhotra", role: "Web3 Security Lead", company: "Polygon Guild", domain: "Blockchain & ZK" },
  { name: "Arjun Mehta", role: "Principal Architect", company: "AWS Community", domain: "Distributed Systems" },
  { name: "Kritika Sundaram", role: "Engineering Manager", company: "Postman", domain: "API Architecture" },
];

export default function MentorsPage() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Devfolio Floating Background Art */}
      <div className="pointer-events-none absolute left-6 top-16 hidden w-16 animate-float xl:block z-20">
        <DevfolioArt.BlueOrb />
      </div>
      <div className="pointer-events-none absolute right-8 top-20 hidden w-28 animate-float xl:block z-20" style={{ animationDelay: "1.1s" }}>
        <DevfolioArt.YellowSmileBadge />
      </div>
      <div className="pointer-events-none absolute left-10 top-[420px] hidden w-20 animate-float xl:block z-20" style={{ animationDelay: "1.5s" }}>
        <DevfolioArt.BlueFin />
      </div>
      <div className="pointer-events-none absolute right-12 bottom-16 hidden w-16 animate-float xl:block z-20" style={{ animationDelay: "1.9s" }}>
        <DevfolioArt.TealOrb />
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#18181B] bg-white px-4 py-1.5 text-xs font-black shadow-[4px_4px_0px_0px_#18181B] mb-8 dark:border-white dark:bg-zinc-800">
          <Sparkles size={14} className="text-[#FF3B30]" />
          Tech Leaders & Reviewers
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
          Mentors &{" "}
          <span className="inline-block bg-[#FDE047] text-[#18181B] px-3.5 py-1 rounded-2xl border-2 border-[#18181B] shadow-[4px_4px_0px_0px_#18181B] dark:border-white -rotate-1 hover:rotate-1">
            Judges Panel
          </span>
        </h1>

        <p className="mt-6 text-base font-bold text-zinc-700 dark:text-zinc-300 sm:text-lg max-w-xl mx-auto">
          Get direct technical guidance, code reviews, and project feedback from leaders across top technology companies.
        </p> */}

        {/* ------------ COMING SOON SECTION ----------- */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-[#18181B] bg-white px-4 py-1.5 text-xs font-black shadow-[3px_3px_0px_0px_#18181B] dark:border-white dark:bg-zinc-800 dark:shadow-[3px_3px_0px_0px_#FFF]">
          <Clock size={14} className="text-[#FF3B30] animate-pulse" />
          Under Construction
        </div>

        <h1 className="text-4xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
          Mentors & Judges Panel{" "}
          <span className="inline-block bg-[#FDE047] text-[#18181B] px-3.5 py-1 rounded-2xl border-2 border-[#18181B] shadow-[4px_4px_0px_0px_#18181B] dark:border-white dark:shadow-[4px_4px_0px_0px_#FFF] -rotate-1 mt-2 sm:mt-0">
            Coming Soon!
          </span>
        </h1>

        <p className="mt-6 text-base font-bold text-zinc-700 dark:text-zinc-300 sm:text-lg max-w-lg mx-auto leading-relaxed">
          We are currently onboarding top tech leaders, industry experts, and research scientists to guide and evaluate your projects. Official mentor reveals drop shortly!
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

        {/* <div className="mt-14 grid gap-6 md:grid-cols-3 text-left">
          {MENTORS.map((m) => (
            <div
              key={m.name}
              className="flex flex-col justify-between rounded-3xl border-2 border-[#18181B] bg-white p-7 shadow-brutal dark:border-white dark:bg-zinc-900"
            >
              <div>
                <span className="rounded-md border border-[#18181B] bg-[#FDE047] px-2.5 py-0.5 text-[10px] font-black uppercase text-[#18181B]">
                  {m.domain}
                </span>
                <h3 className="mt-4 text-2xl font-black">{m.name}</h3>
                <p className="text-xs font-bold text-[#FF3B30] mt-0.5">{m.role}</p>
                <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mt-2">@ {m.company}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-black text-[#26A192]">
                <span className="flex items-center gap-1"><Award size={14} /> Official Judge</span>
                <ExternalLink size={14} />
              </div>
            </div>
          ))}
        </div> */}
      </section>
    </div>
  );
}