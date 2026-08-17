import Link from "next/link";
import Image from "next/image";
import { DevfolioArt } from "@/components/DevfolioArt";
import { Heart, Target, Users, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

const VALUES = [
  { icon: Heart, title: "Community First", desc: "Built by developers for developers. D4 Community brings together builders to collaborate and learn.", color: "bg-[#FF3B30]", textColor: "text-white" },
  { icon: Target, title: "Real-World Impact", desc: "Problem statements crafted with industry partners to ensure projects solve authentic challenges.", color: "bg-[#FDE047]", textColor: "text-[#18181B]" },
  { icon: ShieldCheck, title: "Fair & Transparent", desc: "Strict anti-plagiarism checks, public rubric scoring, and multi-round evaluations.", color: "bg-[#26A192]", textColor: "text-white" },
  { icon: Users, title: "Equal Opportunity", desc: "Free participation, hardware labs, accommodation, and 1-on-1 mentorship for every hacker.", color: "bg-[#81A2EF]", textColor: "text-[#18181B]" },
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Devfolio Background Floating Art */}
      <div className="pointer-events-none absolute left-6 top-16 hidden w-28 animate-float xl:block z-20">
        <DevfolioArt.YellowCharacterFace />
      </div>
      <div className="pointer-events-none absolute right-8 top-20 hidden w-24 animate-float xl:block z-20" style={{ animationDelay: "1s" }}>
        <DevfolioArt.BeigeStar />
      </div>
      <div className="pointer-events-none absolute left-10 bottom-24 hidden w-16 animate-float xl:block z-20" style={{ animationDelay: "1.6s" }}>
        <DevfolioArt.TealOrb />
      </div>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#18181B] bg-white px-4 py-1.5 text-xs font-black shadow-[4px_4px_0px_0px_#18181B] mb-8 dark:border-white dark:bg-zinc-800">
          <Sparkles size={14} className="text-[#FF3B30]" />
          Our Mission & Vision
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
          Empowering the Next Generation of{" "}
          <span className="inline-block bg-[#FDE047] text-[#18181B] px-3.5 py-1 rounded-2xl border-2 border-[#18181B] shadow-[4px_4px_0px_0px_#18181B] dark:border-white -rotate-1 transition-transform hover:rotate-1">
            Builders
          </span>{" "}
          {/* <span className="inline-flex items-center align-middle mx-1 -ml-2">
            <Image
              src="/assets/smiley.webp"
              alt="Smiley"
              width={48}
              height={48}
              className="w-8 h-8 sm:w-12 sm:h-12 object-contain"
            />
          </span>{" "} */}
          <span>
            with{" "}
            <span className="inline-block bg-[#FF3B30] text-white px-3.5 py-1 rounded-2xl border-2 border-[#18181B] shadow-[4px_4px_0px_0px_#18181B] dark:border-white rotate-1 hover:-rotate-1">
              D4 Community
            </span>
          </span>{" "}
          <Image
            alt="Pointer Cursor"
            width={112}
            height={112}
            priority
            src="/assets/pointer.webp"
            className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 inline-block align-middle -ml-1 sm:-ml-2 select-none pointer-events-none drop-shadow-[2px_2px_0px_#18181B]"
          />
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base font-bold text-zinc-700 dark:text-zinc-300 sm:text-lg leading-relaxed">
          InnoSprint 2.0 is the flagship 24-hour student hackathon organized by D4 Community. Hosted at CGC University on October 10th & 11th, 2026, it brings together 500+ participants across India.
        </p>

        <div className="mt-12 grid gap-8 text-left md:grid-cols-2">
          {VALUES.map(({ icon: Icon, title, desc, color, textColor }) => (
            <div
              key={title}
              className="group rounded-3xl border-2 border-[#18181B] bg-white p-8 shadow-brutal-lg transition-transform hover:-translate-y-1.5 dark:border-white dark:bg-zinc-900"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-[#18181B] ${color} ${textColor} dark:border-white`}>
                <Icon size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-black">{title}</h3>
              <p className="mt-2 text-sm font-bold text-zinc-600 dark:text-zinc-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border-2 border-[#18181B] bg-[#18181B] p-8 sm:p-12 text-white shadow-brutal-xl dark:border-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div>
              <span className="rounded-md bg-[#FDE047] px-2.5 py-1 text-xs font-black text-[#18181B] uppercase">
                Host Campus
              </span>
              <h2 className="mt-3 text-2xl font-black sm:text-4xl text-white">CGC University, Punjab</h2>
              <p className="mt-2 text-xs font-bold text-zinc-300 max-w-xl leading-relaxed">
                State-of-the-art auditorium, high-speed internet, dedicated hacking bays, rest zones, and 24/7 campus security provided for all registered teams.
              </p>
            </div>
            <Link
              href="/event"
              data-cursor-text="SCHEDULE 📅"
              className="inline-flex shrink-0 items-center gap-2 rounded-2xl border-2 border-white bg-[#FF3B30] px-6 py-3.5 text-sm font-black text-white shadow-brutal-white hover:-translate-y-0.5 transition-all"
            >
              View Schedule <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}