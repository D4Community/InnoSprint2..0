import React from "react";
import { ExternalLink, Sparkles } from "lucide-react";
import { DevfolioArt } from "@/components/DevfolioArt";

const PARTNERS = [
  { name: "Devfolio", type: "Platform Partner", desc: "India's premier hackathon hosting portal." },
  { name: "GitHub Campus", type: "Ecosystem Partner", desc: "Empowering student developer communities." },
  { name: "Polygon Guild", type: "Web3 Partner", desc: "Supporting decentralized infrastructure development." },
  { name: "AWS Student Hub", type: "Cloud Partner", desc: "Providing cloud credits and technical architecture guidance." },
  { name: "GeeksforGeeks", type: "Learning Partner", desc: "Curating interview prep resources and coding modules." },
  { name: "Postman", type: "API Partner", desc: "Offering API testing and documentation tools." },
];

export default function CommunityPartnersPage() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Devfolio Floating Background Art */}
      <div className="pointer-events-none absolute left-6 top-16 hidden w-12 animate-float xl:block z-20">
        <DevfolioArt.TealOrb />
      </div>
      <div className="pointer-events-none absolute right-8 top-20 hidden w-20 animate-float xl:block z-20" style={{ animationDelay: "1.3s" }}>
        <DevfolioArt.BlueFin />
      </div>
      <div className="pointer-events-none absolute left-10 top-[380px] hidden w-28 animate-float xl:block z-20" style={{ animationDelay: "1.7s" }}>
        <DevfolioArt.YellowCharacterFace />
      </div>
      <div className="pointer-events-none absolute right-12 bottom-20 hidden w-24 animate-float xl:block z-20" style={{ animationDelay: "2.2s" }}>
        <DevfolioArt.YellowSmileBadge />
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#18181B] bg-white px-4 py-1.5 text-xs font-black shadow-[4px_4px_0px_0px_#18181B] mb-8 dark:border-white dark:bg-zinc-800">
          <Sparkles size={14} className="text-[#FF3B30]" />
          Student Ecosystem
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
          Supported by Active{" "}
          <span className="inline-block bg-[#FDE047] text-[#18181B] px-3.5 py-1 rounded-2xl border-2 border-[#18181B] shadow-[4px_4px_0px_0px_#18181B] dark:border-white -rotate-1 hover:rotate-2">
            Community Partners
          </span>
        </h1>

        <p className="mt-6 text-base font-bold text-zinc-700 dark:text-zinc-300 sm:text-lg max-w-xl mx-auto">
          InnoSprint 2.0 is supported by vibrant student communities and tech organizations.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="flex flex-col justify-between rounded-3xl border-2 border-[#18181B] bg-white p-7 shadow-brutal dark:border-white dark:bg-zinc-900"
            >
              <div>
                <span className="rounded-md border border-[#18181B] bg-[#FDE047] px-2 py-0.5 text-[10px] font-black uppercase text-[#18181B]">
                  {p.type}
                </span>
                <h3 className="mt-4 text-xl font-black">{p.name}</h3>
                <p className="mt-2 text-xs font-bold text-zinc-600 dark:text-zinc-400">{p.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-black text-[#FF3B30]">
                <span>Partnered</span>
                <ExternalLink size={14} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}