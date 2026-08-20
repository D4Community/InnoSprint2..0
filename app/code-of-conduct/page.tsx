import { DevfolioArt } from "@/components/DevfolioArt";
import {
  Sparkles,
  HeartHandshake,
  ShieldAlert,
  PhoneCall,
  Camera,
  Code2,
  Scale,
  CheckCircle2,
  XCircle,
  Mail,
  AlertOctagon,
  UserX,
  MapPin,
} from "lucide-react";

const POSITIVE_STANDARDS = [
  "Use welcoming, inclusive, and friendly language across all chats and hacking bays",
  "Be patient and helpful with first-time hackers and cross-domain builders",
  "Respect differing technical opinions, design choices, and personal boundaries",
  "Accept constructive critique gracefully and keep team feedback positive",
  "Look out for your fellow hackers—share coffee, power strips, and encouragement",
];

const UNACCEPTABLE_BEHAVIORS = [
  "Sexualized comments, jokes, imagery, or unwelcome physical or verbal advances",
  "Discriminatory insults based on gender, identity, race, disability, or experience",
  "Trolling, targeted harassment, deliberate intimidation, or online/offline stalking",
  "Photographing or recording anyone who has asked not to be filmed",
  "Publishing private personal information (doxxing) without explicit consent",
  "Sustained disruption of workshops, sponsor talks, mentorship rounds, or pitches",
];

const REPORTING_STEPS = [
  {
    step: "01",
    title: "Reach Out Immediately",
    desc: "Find any organizer in a D4 Community staff hoodie, visit the Helpdesk in the main lobby, or call our direct helpline.",
  },
  {
    step: "02",
    title: "Private & Safe Discussion",
    desc: "We will listen in a quiet, private room. Your report will be kept strictly confidential among core leadership.",
  },
  {
    step: "03",
    title: "Decisive Action",
    desc: "Organizers will investigate and take immediate corrective measures, up to campus removal or law enforcement contact.",
  },
];

export default function CodeOfConductPage() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-[#FAF9F5] text-[#18181B] dark:bg-[#0F0F12] dark:text-zinc-100">
      {/* Devfolio Background Floating Art */}
      <div className="pointer-events-none absolute left-6 top-16 hidden w-28 animate-float xl:block z-20">
        <DevfolioArt.YellowSmileBadge />
      </div>
      <div className="pointer-events-none absolute right-8 top-20 hidden w-16 animate-float xl:block z-20" style={{ animationDelay: "1.2s" }}>
        <DevfolioArt.BlueOrb />
      </div>
      <div className="pointer-events-none absolute right-12 top-[420px] hidden w-24 animate-float xl:block z-20" style={{ animationDelay: "1.5s" }}>
        <DevfolioArt.BeigeStar />
      </div>
      <div className="pointer-events-none absolute left-10 bottom-20 hidden w-20 animate-float xl:block z-20" style={{ animationDelay: "1.8s" }}>
        <DevfolioArt.BlueCrescent />
      </div>
      <div className="pointer-events-none absolute right-8 bottom-10 hidden w-16 animate-float xl:block z-20" style={{ animationDelay: "2.1s" }}>
        <DevfolioArt.TealOrb />
      </div>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#18181B] bg-white px-4 py-1.5 text-xs font-black shadow-[3px_3px_0px_0px_#18181B] mb-8 dark:border-white dark:bg-zinc-800 dark:shadow-[3px_3px_0px_0px_#FFF]">
          <Sparkles size={14} className="text-[#FF3B30]" />
          Our Safe Space Guarantee
        </div>

        {/* Hero Title */}
        <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl text-[#18181B] dark:text-white">
          Code of{" "}
          <span className="inline-block bg-[#FF3B30] text-white px-3.5 py-1 rounded-2xl border-2 border-[#18181B] shadow-[4px_4px_0px_0px_#18181B] dark:border-white dark:shadow-[4px_4px_0px_0px_#FFF] -rotate-1 hover:rotate-1">
            Conduct
          </span>{" "}
          &{" "}
          <span className="inline-block bg-[#FDE047] text-[#18181B] px-3.5 py-1 rounded-2xl border-2 border-[#18181B] shadow-[4px_4px_0px_0px_#18181B] dark:border-white dark:shadow-[4px_4px_0px_0px_#FFF] rotate-1 hover:-rotate-1">
            Culture
          </span>
        </h1>

        <p className="mt-6 text-base font-bold text-zinc-700 dark:text-zinc-300 sm:text-xl max-w-2xl mx-auto leading-relaxed">
          We built InnoSprint 2.0 so student developers can collaborate, experiment, and build cool projects safely. Here is how we ensure our campus remains welcoming for everyone.
        </p>

        {/* Policy Section Cards */}
        <div className="mt-14 space-y-8 text-left">
          
          {/* Section 1: Our Pledge */}
          <div className="rounded-3xl border-2 border-[#18181B] bg-white p-8 shadow-[6px_6px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:shadow-[6px_6px_0px_0px_#FFF]">
            <div className="flex items-center gap-2 text-[#26A192] mb-3">
              <HeartHandshake size={22} />
              <span className="text-xs font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Section 01</span>
            </div>
            <h2 className="text-2xl font-black text-[#18181B] dark:text-white sm:text-3xl mb-3">Our Pledge to Every Hacker</h2>
            <p className="text-sm font-bold text-zinc-700 dark:text-zinc-300 leading-relaxed sm:text-base mb-4">
              We pledge to make participation in InnoSprint 2.0 a harassment-free, empowering experience for everyone—regardless of age, body size, disability, ethnicity, gender identity and expression, level of programming experience, nationality, race, religion, or sexual orientation.
            </p>
            <p className="text-sm font-bold text-zinc-700 dark:text-zinc-300 leading-relaxed sm:text-base">
              This policy applies to all official physical spaces at CGC University (hacking arenas, stage halls, cafeteria, resting zones) and digital channels (Discord server, Devfolio portal, WhatsApp updates, and social media mentions).
            </p>
          </div>

          {/* Section 2: Clear Community Standards */}
          <div className="rounded-3xl border-2 border-[#18181B] bg-white p-8 shadow-[6px_6px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:shadow-[6px_6px_0px_0px_#FFF]">
            <div className="flex items-center gap-2 text-[#FF3B30] mb-3">
              <ShieldAlert size={22} />
              <span className="text-xs font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Section 02</span>
            </div>
            <h2 className="text-2xl font-black text-[#18181B] dark:text-white sm:text-3xl mb-5">Expected vs Unacceptable Behavior</h2>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Positive Behavior */}
              <div className="rounded-2xl border-2 border-[#18181B] bg-[#FAF9F5] p-6 dark:border-white dark:bg-zinc-800/60">
                <h3 className="text-base font-black text-[#26A192] flex items-center gap-2 mb-4">
                  <CheckCircle2 size={20} /> What We Love To See
                </h3>
                <ul className="space-y-3 text-sm font-bold text-zinc-700 dark:text-zinc-300">
                  {POSITIVE_STANDARDS.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#26A192] font-black shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Unacceptable Behavior */}
              <div className="rounded-2xl border-2 border-[#18181B] bg-[#FAF9F5] p-6 dark:border-white dark:bg-zinc-800/60">
                <h3 className="text-base font-black text-[#FF3B30] flex items-center gap-2 mb-4">
                  <XCircle size={20} /> Zero Tolerance Policy
                </h3>
                <ul className="space-y-3 text-sm font-bold text-zinc-700 dark:text-zinc-300">
                  {UNACCEPTABLE_BEHAVIORS.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#FF3B30] font-black shrink-0">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3: Photography & Recording Opt-Out */}
          <div className="rounded-3xl border-2 border-[#18181B] bg-white p-8 shadow-[6px_6px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:shadow-[6px_6px_0px_0px_#FFF]">
            <div className="flex items-center gap-2 text-[#81A2EF] mb-3">
              <Camera size={22} />
              <span className="text-xs font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Section 03</span>
            </div>
            <h2 className="text-2xl font-black text-[#18181B] dark:text-white sm:text-3xl mb-3">Media & Photography Opt-Out</h2>
            <p className="text-sm font-bold text-zinc-700 dark:text-zinc-300 leading-relaxed sm:text-base mb-5">
              While media teams will capture event photos and stage demos, every hacker has the absolute right to opt out of being photographed or recorded.
            </p>
            <div className="rounded-2xl border-2 border-[#18181B] bg-[#FDE047] p-5 text-[#18181B] dark:border-white mb-4 shadow-[3px_3px_0px_0px_#18181B]">
              <p className="text-sm font-black uppercase tracking-wider flex items-center gap-2">
                <Camera size={18} className="text-[#FF3B30]" /> Red Lanyard Rule
              </p>
              <p className="text-sm font-bold mt-1.5 leading-relaxed text-zinc-800">
                Prefer not to be on camera? Ask for a Red Lanyard at check-in. Our official media crew will automatically bypass anyone wearing a Red Lanyard during roving photography.
              </p>
            </div>
            <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400">
              * Flash photography is strictly forbidden inside sleeping bays and quiet rest areas.
            </p>
          </div>

          {/* Section 4: Code Integrity & Ownership */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Plagiarism & Pre-built Code */}
            <div className="rounded-3xl border-2 border-[#18181B] bg-white p-8 shadow-[6px_6px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:shadow-[6px_6px_0px_0px_#FFF]">
              <div className="flex items-center gap-2 text-[#FF3B30] mb-3">
                <Code2 size={22} />
                <span className="text-xs font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Section 04</span>
              </div>
              <h2 className="text-2xl font-black text-[#18181B] dark:text-white mb-3">Code Originality</h2>
              <p className="text-sm font-bold text-zinc-700 dark:text-zinc-300 leading-relaxed">
                All hackathon submissions must be built during the official 24-hour sprint. Open-source libraries and APIs are completely fine, but core application logic must be written on-site. Declare any pre-existing code upfront in your GitHub README to avoid disqualification.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="rounded-3xl border-2 border-[#18181B] bg-white p-8 shadow-[6px_6px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:shadow-[6px_6px_0px_0px_#FFF]">
              <div className="flex items-center gap-2 text-[#26A192] mb-3">
                <Scale size={22} />
                <span className="text-xs font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Section 05</span>
              </div>
              <h2 className="text-2xl font-black text-[#18181B] dark:text-white mb-3">100% Project IP Rights</h2>
              <p className="text-sm font-bold text-zinc-700 dark:text-zinc-300 leading-relaxed">
                You own everything you create. Neither D4 Community nor CGC University claims any ownership, equity, or licensing rights over your code, design assets, or business ideas. Your project remains entirely yours.
              </p>
            </div>
          </div>

          {/* Section 5: Step-by-Step Reporting & Consequences */}
          <div className="rounded-3xl border-2 border-[#18181B] bg-white p-8 shadow-[6px_6px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:shadow-[6px_6px_0px_0px_#FFF]">
            <div className="flex items-center gap-2 text-[#FF3B30] mb-3">
              <AlertOctagon size={22} />
              <span className="text-xs font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Section 06</span>
            </div>
            <h2 className="text-2xl font-black text-[#18181B] dark:text-white sm:text-3xl mb-3">What Happens When You Report?</h2>
            <p className="text-sm font-bold text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
              If you experience unacceptable behavior or feel unsafe, we take action immediately. Here is our transparent 3-step incident protocol:
            </p>

            <div className="grid gap-4 sm:grid-cols-3 mb-6">
              {REPORTING_STEPS.map((s) => (
                <div key={s.step} className="rounded-2xl border-2 border-[#18181B] bg-[#FAF9F5] p-5 dark:border-white dark:bg-zinc-800">
                  <span className="rounded-lg bg-[#FF3B30] px-2.5 py-0.5 text-xs font-black uppercase text-white">
                    Step {s.step}
                  </span>
                  <h3 className="text-base font-black text-[#18181B] dark:text-white mt-3 mb-1.5">{s.title}</h3>
                  <p className="text-xs font-bold text-zinc-600 dark:text-zinc-400 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border-2 border-[#18181B] bg-zinc-100 p-5 dark:border-white dark:bg-zinc-800">
              <h4 className="text-sm font-black uppercase text-[#FF3B30] flex items-center gap-1.5 mb-1.5">
                <UserX size={16} /> Enforcement Actions
              </h4>
              <p className="text-xs font-bold text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Participants asked to stop unacceptable behavior are expected to comply immediately. Violators may face formal warnings, removal from judging, permanent expulsion from CGC University campus without reimbursement, or local law enforcement involvement.
              </p>
            </div>
          </div>

          {/* On-Site Helpdesk & Contact Banner */}
          <div className="rounded-3xl border-2 border-[#18181B] bg-[#FDE047] p-8 shadow-[8px_8px_0px_0px_#18181B] text-[#18181B] dark:border-white dark:bg-zinc-900 dark:text-white dark:shadow-[8px_8px_0px_0px_#FFF]">
            <div className="flex items-center gap-2 mb-3">
              <PhoneCall size={24} className="text-[#FF3B30]" />
              <span className="rounded-md bg-[#18181B] px-3 py-1 text-xs font-black uppercase text-[#FDE047]">
                24/7 Organizer Support
              </span>
            </div>
            <h2 className="text-2xl font-black text-[#18181B] dark:text-white sm:text-3xl mb-3">Need Immediate Assistance?</h2>
            <p className="text-sm font-bold text-zinc-800 dark:text-zinc-300 leading-relaxed mb-6 sm:text-base">
              Our organizing team and campus safety officers are stationed 24 hours in the main atrium. Feel free to reach out directly:
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:help.d4community@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#18181B] bg-[#FF3B30] px-6 py-4 text-sm font-black text-white shadow-[3px_3px_0px_0px_#18181B] hover:-translate-y-0.5 active:translate-y-0 transition-all dark:border-white dark:shadow-[3px_3px_0px_0px_#FFF]"
              >
                <Mail size={18} /> Email Organizing Team
              </a>
              <div className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#18181B] bg-white px-6 py-4 text-sm font-black text-[#18181B] dark:border-white dark:bg-zinc-800 dark:text-white">
                <PhoneCall size={18} className="text-[#FF3B30]" /> Direct Hotline: +91 96936 28301
              </div>
              {/* <div className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#18181B] bg-white px-6 py-4 text-sm font-black text-[#18181B] dark:border-white dark:bg-zinc-800 dark:text-white">
                <MapPin size={18} className="text-[#26A192]" /> Helpdesk: Main Atrium
              </div> */}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}