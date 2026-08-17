import { DevfolioArt } from "@/components/DevfolioArt";

export default function CodeOfConductPage() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Devfolio Background Floating Art */}
      <div className="pointer-events-none absolute left-6 top-16 hidden w-24 animate-float xl:block z-20">
        <DevfolioArt.YellowSmileBadge />
      </div>
      <div className="pointer-events-none absolute right-8 top-20 hidden w-16 animate-float xl:block z-20" style={{ animationDelay: "1.2s" }}>
        <DevfolioArt.BlueOrb />
      </div>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <span className="rounded-lg border-2 border-[#18181B] bg-[#FF3B30] px-3.5 py-1 text-xs font-black uppercase text-white shadow-brutal dark:border-white">
          Community Standards
        </span>
        <h1 className="mt-6 text-3xl font-black sm:text-5xl">Code of Conduct</h1>

        <div className="mt-8 space-y-6 text-xs font-bold text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <div className="rounded-2xl border-2 border-[#18181B] bg-white p-6 shadow-brutal dark:border-white dark:bg-zinc-900">
            <h2 className="text-base font-black text-[#18181B] dark:text-white mb-2">Safe & Inclusive Environment</h2>
            <p>
              InnoSprint 2.0 and D4 Community are dedicated to providing a harassment-free experience for everyone regardless of gender, sexual orientation, disability, physical appearance, race, or technical experience level.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-[#18181B] bg-white p-6 shadow-brutal dark:border-white dark:bg-zinc-900">
            <h2 className="text-base font-black text-[#18181B] dark:text-white mb-2">Zero Tolerance Policy</h2>
            <p>
              Harassment of any participant, mentor, judge, or volunteer in any form (including offensive comments, deliberate intimidation, unauthorized photography, or sustained disruption of pitches) will not be tolerated.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-[#18181B] bg-white p-6 shadow-brutal dark:border-white dark:bg-zinc-900">
            <h2 className="text-base font-black text-[#18181B] dark:text-white mb-2">Incident Reporting</h2>
            <p>
              If you experience or witness unacceptable behavior, please report it immediately to the D4 Community Helpdesk on-site at CGC University or reach out via direct helpline at <strong className="text-[#FF3B30]">+91 98765 00011</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}