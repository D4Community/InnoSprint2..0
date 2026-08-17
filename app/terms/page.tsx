import { DevfolioArt } from "@/components/DevfolioArt";
import { Sparkles, Shield, FileText, Scale } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Devfolio Background Floating Art */}
      <div className="pointer-events-none absolute left-6 top-16 hidden w-16 animate-float xl:block z-20">
        <DevfolioArt.BlueFin />
      </div>
      <div className="pointer-events-none absolute right-8 top-20 hidden w-10 animate-float xl:block z-20" style={{ animationDelay: "1s" }}>
        <DevfolioArt.TealOrb />
      </div>
      <div className="pointer-events-none absolute left-10 bottom-24 hidden w-20 animate-float xl:block z-20" style={{ animationDelay: "1.5s" }}>
        <DevfolioArt.BlueCrescent />
      </div>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#18181B] bg-white px-4 py-1.5 text-xs font-black shadow-[4px_4px_0px_0px_#18181B] mb-8 dark:border-white dark:bg-zinc-800">
          <Sparkles size={14} className="text-[#FF3B30]" />
          Legal & Guidelines
        </div>

        {/* Hero Heading with Two Background Highlight Pills */}
        <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
          Terms &{" "}
          <span className="inline-block bg-[#26A192] text-white px-3.5 py-1 rounded-2xl border-2 border-[#18181B] shadow-[4px_4px_0px_0px_#18181B] dark:border-white -rotate-1 hover:rotate-1">
            Conditions
          </span>{" "}
          for{" "}
          <span className="inline-block bg-[#FDE047] text-[#18181B] px-3.5 py-1 rounded-2xl border-2 border-[#18181B] shadow-[4px_4px_0px_0px_#18181B] dark:border-white rotate-1 hover:-rotate-1">
            Hackers
          </span>
        </h1>

        <p className="mt-6 text-base font-bold text-zinc-700 dark:text-zinc-300 sm:text-lg max-w-2xl mx-auto">
          Please review our rules and event policies for participating in InnoSprint 2.0 at CGC University.
        </p>

        <div className="mt-14 space-y-6 text-left">
          <div className="rounded-3xl border-2 border-[#18181B] bg-white p-7 shadow-brutal dark:border-white dark:bg-zinc-900">
            <div className="flex items-center gap-2 text-[#26A192] mb-3">
              <Shield size={20} />
              <span className="text-xs font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Clause 01</span>
            </div>
            <h2 className="text-xl font-black text-[#18181B] dark:text-white mb-2">1. Intellectual Property Rights</h2>
            <p className="text-xs font-bold text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Participants retain 100% full ownership of all intellectual property, source code, designs, and algorithms created during InnoSprint 2.0. Neither D4 Community nor CGC University claims any equity or ownership over participant projects.
            </p>
          </div>

          <div className="rounded-3xl border-2 border-[#18181B] bg-white p-7 shadow-brutal dark:border-white dark:bg-zinc-900">
            <div className="flex items-center gap-2 text-[#FF3B30] mb-3">
              <FileText size={20} />
              <span className="text-xs font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Clause 02</span>
            </div>
            <h2 className="text-xl font-black text-[#18181B] dark:text-white mb-2">2. Submission Integrity & Originality</h2>
            <p className="text-xs font-bold text-zinc-600 dark:text-zinc-400 leading-relaxed">
              All code submitted must be written during the 24-hour sprint window (October 10th - 11th, 2026). Utilizing open-source libraries, public APIs, and frameworks is permitted provided they are declared in the project submission README.
            </p>
          </div>

          <div className="rounded-3xl border-2 border-[#18181B] bg-white p-7 shadow-brutal dark:border-white dark:bg-zinc-900">
            <div className="flex items-center gap-2 text-[#81A2EF] mb-3">
              <Scale size={20} />
              <span className="text-xs font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Clause 03</span>
            </div>
            <h2 className="text-xl font-black text-[#18181B] dark:text-white mb-2">3. Disqualification Grounds</h2>
            <p className="text-xs font-bold text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Plagiarism, submission of pre-built commercial software, falsification of student credentials, or violation of campus safety rules will lead to immediate team disqualification and forfeiture of all prizes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}