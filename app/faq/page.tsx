import { HelpCircle, Sparkles } from "lucide-react";
import { DevfolioArt } from "@/components/DevfolioArt";

const FAQS = [
  {
    q: "When and where is InnoSprint 2.0 taking place?",
    a: "InnoSprint 2.0 takes place on October 10th & 11th, 2026 at the CGC University Campus in Greater Mohali, Punjab.",
  },
  {
    q: "Who is eligible to participate?",
    a: "Any active undergraduate, postgraduate, or diploma student enrolled in a recognized institution across India can register.",
  },
  {
    q: "Is there any registration or entry fee?",
    a: "No! Participation in InnoSprint 2.0 is 100% free. Meals, Wi-Fi, hacking space, and swags are provided at zero cost.",
  },
  {
    q: "What is the team size limit?",
    a: "Teams can consist of 2 to 4 members. Solo participation is not permitted to encourage team collaboration.",
  },
  {
    q: "Will accommodation be provided for outstation teams?",
    a: "Yes, night resting zones and basic lodging facilities inside the CGC University campus will be available for registered outstation hackers.",
  },
  {
    q: "Can I start working on my project before the hackathon?",
    a: "No. All project code, design prototypes, and assets must be developed during the official 24-hour sprint window.",
  },
];

export default function FAQPage() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Devfolio Floating Background Art */}
      <div className="pointer-events-none absolute left-6 top-16 hidden w-16 animate-float xl:block z-20">
        <DevfolioArt.BlueCrescent />
      </div>
      <div className="pointer-events-none absolute right-8 top-20 hidden w-28 animate-float xl:block z-20" style={{ animationDelay: "1.2s" }}>
        <DevfolioArt.YellowSmileBadge />
      </div>
      <div className="pointer-events-none absolute left-10 top-[380px] hidden w-24 animate-float xl:block z-20" style={{ animationDelay: "1.6s" }}>
        <DevfolioArt.BeigeStar />
      </div>
      <div className="pointer-events-none absolute right-12 bottom-16 hidden w-20 animate-float xl:block z-20" style={{ animationDelay: "2s" }}>
        <DevfolioArt.BlueFin />
      </div>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#18181B] bg-white px-4 py-1.5 text-xs font-black shadow-[4px_4px_0px_0px_#18181B] mb-8 dark:border-white dark:bg-zinc-800">
          <Sparkles size={14} className="text-[#FF3B30]" />
          Help & Knowledgebase
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
          Frequently Asked{" "}
          <span className="inline-block bg-[#FDE047] text-[#18181B] px-3.5 py-1 rounded-2xl border-2 border-[#18181B] shadow-[4px_4px_0px_0px_#18181B] dark:border-white -rotate-1 hover:rotate-2">
            Questions
          </span>
        </h1>

        <p className="mt-6 text-base font-bold text-zinc-700 dark:text-zinc-300 sm:text-lg">
          Everything you need to know about participating in InnoSprint 2.0.
        </p>

        <div className="mt-14 space-y-6 text-left">
          {FAQS.map(({ q, a }, i) => (
            <div
              key={i}
              className="rounded-3xl border-2 border-[#18181B] bg-white p-7 shadow-brutal dark:border-white dark:bg-zinc-900"
            >
              <div className="flex items-center gap-2 text-[#FF3B30] mb-2">
                <HelpCircle size={18} />
                <span className="text-[11px] font-black uppercase tracking-wider text-zinc-400">FAQ {i + 1}</span>
              </div>
              <h3 className="text-lg font-black text-[#18181B] dark:text-white leading-snug">{q}</h3>
              <p className="mt-2 text-xs font-bold text-zinc-600 dark:text-zinc-400 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}