import { Github, Linkedin, Sparkles } from "lucide-react";
import { DevfolioArt } from "@/components/DevfolioArt";

const TEAM = [
  { name: "Aarav Sharma", role: "Lead Organizer", dept: "Core Team", bg: "bg-[#FDE047]", text: "text-[#18181B]" },
  { name: "Priya Patel", role: "Head of Tech & Infrastructure", dept: "Engineering", bg: "bg-[#FF3B30]", text: "text-white" },
  { name: "Rohan Gupta", role: "Sponsorship & Partnerships", dept: "Outreach", bg: "bg-[#26A192]", text: "text-white" },
  { name: "Ananya Roy", role: "Lead UI/UX Designer", dept: "Creative", bg: "bg-[#81A2EF]", text: "text-[#18181B]" },
  { name: "Kabir Verma", role: "Logistics & Hospitality Lead", dept: "Operations", bg: "bg-[#FDE047]", text: "text-[#18181B]" },
  { name: "Meera Deshmukh", role: "Community Lead", dept: "D4 Community", bg: "bg-[#FF3B30]", text: "text-white" },
  { name: "Siddharth Malhotra", role: "Mentorship Coordinator", dept: "Academics", bg: "bg-[#26A192]", text: "text-white" },
  { name: "Divya Kaur", role: "Media & PR Lead", dept: "Marketing", bg: "bg-[#81A2EF]", text: "text-[#18181B]" },
];

export default function TeamPage() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Devfolio Background Floating Art */}
      <div className="pointer-events-none absolute left-6 top-16 hidden w-28 animate-float xl:block z-20">
        <DevfolioArt.YellowCharacterFace />
      </div>
      <div className="pointer-events-none absolute right-8 top-20 hidden w-16 animate-float xl:block z-20" style={{ animationDelay: "1.4s" }}>
        <DevfolioArt.BlueCrescent />
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#18181B] bg-white px-4 py-1.5 text-xs font-black shadow-[4px_4px_0px_0px_#18181B] mb-8 dark:border-white dark:bg-zinc-800">
          <Sparkles size={14} className="text-[#FF3B30]" />
          D4 Community Team
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
          Meet the{" "}
          <span className="inline-block bg-[#81A2EF] text-[#18181B] px-3.5 py-1 rounded-2xl border-2 border-[#18181B] shadow-[4px_4px_0px_0px_#18181B] dark:border-white -rotate-1 hover:rotate-2">
            Organizers
          </span>{" "}
          Behind InnoSprint 2.0
        </h1>

        <p className="mt-6 text-base font-bold text-zinc-700 dark:text-zinc-300 sm:text-lg max-w-2xl mx-auto">
          The passionate organizers, designers, and engineers executing InnoSprint 2.0.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left">
          {TEAM.map((m) => (
            <div
              key={m.name}
              className="flex flex-col justify-between rounded-3xl border-2 border-[#18181B] bg-white p-6 shadow-brutal transition-transform hover:-translate-y-1.5 dark:border-white dark:bg-zinc-900"
            >
              <div>
                <span className={`inline-block rounded-md border border-[#18181B] px-2.5 py-0.5 text-[10px] font-black uppercase ${m.bg} ${m.text}`}>
                  {m.dept}
                </span>
                <h3 className="mt-4 text-xl font-black">{m.name}</h3>
                <p className="text-xs font-black text-[#FF3B30] mt-0.5">{m.role}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-zinc-500">
                <span className="text-[11px] font-bold">D4 Core Member</span>
                <div className="flex gap-2 text-[#18181B] dark:text-zinc-200">
                  <Github size={14} className="hover:text-[#FF3B30] cursor-pointer" />
                  <Linkedin size={14} className="hover:text-[#FF3B30] cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}