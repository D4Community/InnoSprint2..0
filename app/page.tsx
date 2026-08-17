// import Link from "next/link";
// import { ArrowRight, Zap, Trophy, MapPin, Calendar, Sparkles, Bot, Cpu, Brain, Flame } from "lucide-react";
// import CountdownTimer from "@/components/CountdownTimer";
// import { DevfolioArt } from "@/components/DevfolioArt";

// const AI_TRACKS = [
//   {
//     title: "Autonomous Agents & LLMs",
//     desc: "Build self-orchestrating agentic workflows, function calling pipelines, and local open-weight model architectures.",
//     tag: "Agentic AI",
//     bg: "bg-brand-yellow",
//     textColor: "text-brand-dark",
//   },
//   {
//     title: "GenAI & Multi-Modal Vision",
//     desc: "Generate cross-modal media, computer vision models, video synthesis, and real-time audio AI interactions.",
//     tag: "Generative AI",
//     bg: "bg-brand-teal",
//     textColor: "text-white",
//   },
//   {
//     title: "AI for Social Good & Health",
//     desc: "Solve healthcare diagnostics, climate monitoring, smart city traffic, and agricultural challenges with AI.",
//     tag: "AI Impact",
//     bg: "bg-brand-blue",
//     textColor: "text-brand-dark",
//   },
//   {
//     title: "On-Device AI & Edge Models",
//     desc: "Quantized neural networks, WebNN, Edge TPU optimization, and ultra-low latency AI running locally.",
//     tag: "Edge AI",
//     bg: "bg-brand-red",
//     textColor: "text-white",
//   },
// ];

// const STATS = [
//   { value: "24 Hrs", label: "Non-Stop AI Sprint" },
//   { value: "₹2.5L+", label: "AI Track Bounties" },
//   { value: "500+", label: "Student AI Hackers" },
//   { value: "30+", label: "AI Experts & Mentors" },
// ];

// const LOGOS = ["D4 Community", "CGC University", "Devfolio", "GitHub Campus", "Polygon Guild", "AWS Community Hub"];

// export default function Home() {
//   return (
//     <div className="relative overflow-hidden">
//       {/* Devfolio Animated Background Graphics */}
//       <div className="pointer-events-none absolute left-6 top-16 hidden w-32 animate-float xl:block z-20">
//         <DevfolioArt.YellowCharacterFace />
//       </div>
//       <div className="pointer-events-none absolute right-8 top-20 hidden w-28 animate-float xl:block z-20" style={{ animationDelay: "1s" }}>
//         <DevfolioArt.BeigeStar />
//       </div>
//       <div className="pointer-events-none absolute left-10 top-[600px] hidden w-20 animate-float xl:block z-20" style={{ animationDelay: "1.5s" }}>
//         <DevfolioArt.BlueFin />
//       </div>
//       <div className="pointer-events-none absolute right-12 top-[800px] hidden w-20 animate-float xl:block z-20" style={{ animationDelay: "2s" }}>
//         <DevfolioArt.YellowSmileBadge />
//       </div>

//       {/* Hero Section */}
//       <section className="relative z-10 px-4 pt-12 pb-20 sm:px-6 sm:pt-20 lg:px-8">
//         <div className="mx-auto max-w-5xl text-center">
//           <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-brand-dark bg-white px-4 py-1.5 text-xs font-black shadow-brutal dark:border-white dark:bg-zinc-800">
//             <Sparkles size={14} className="text-brand-red" />
//             24-Hour Hackathon by D4 Community
//           </div>

//           <h1 className="text-4xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
//             Sprint into the Future of AI at{" "}
//             <span className="inline-block -rotate-1 rounded-2xl border-2 border-brand-dark bg-brand-red px-4 py-1 text-white shadow-brutal transition-transform hover:rotate-1 dark:border-white">
//               InnoSprint 2.0
//             </span>
//           </h1>

//           <p className="mx-auto mt-6 max-w-2xl text-base font-bold text-zinc-700 dark:text-zinc-300 sm:text-xl leading-relaxed">
//             24 hours of intense AI development, agentic workflows, and neural network prototyping. Build production-grade AI models live at CGC University.
//           </p>

//           <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-black text-brand-dark dark:text-white">
//             <span className="flex items-center gap-1.5 rounded-xl border-2 border-brand-dark bg-white px-3.5 py-2 shadow-brutal dark:border-white dark:bg-zinc-800">
//               <Calendar size={16} className="text-brand-red" /> 10th & 11th October 2026
//             </span>
//             <span className="flex items-center gap-1.5 rounded-xl border-2 border-brand-dark bg-white px-3.5 py-2 shadow-brutal dark:border-white dark:bg-zinc-800">
//               <MapPin size={16} className="text-brand-red" /> CGC University, Punjab
//             </span>
//             <span className="flex items-center gap-1.5 rounded-xl border-2 border-brand-dark bg-brand-yellow px-3.5 py-2 shadow-brutal text-brand-dark">
//               <Bot size={16} className="text-brand-red" /> 24-Hour AI Hackathon
//             </span>
//           </div>

//           {/* Countdown Timer */}
//           <div className="mt-10">
//             <CountdownTimer />
//           </div>

//           <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
//             <Link
//               href="/event"
//               className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-brand-dark bg-brand-red px-8 py-4 text-base font-black text-white shadow-brutal transition-all hover:-translate-y-1 dark:border-white sm:w-auto"
//             >
//               <Zap size={20} /> Register Team <ArrowRight size={18} />
//             </Link>
//             <Link
//               href="/about"
//               className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-brand-dark bg-white px-8 py-4 text-base font-black text-brand-dark shadow-brutal transition-all hover:-translate-y-1 dark:border-white dark:bg-zinc-800 dark:text-zinc-100 sm:w-auto"
//             >
//               Explore AI Problem Domains
//             </Link>
//           </div>

//           {/* Stats Bar */}
//           <div className="mt-16 grid grid-cols-2 gap-4 rounded-3xl border-2 border-brand-dark bg-white p-6 shadow-brutal-lg dark:border-white dark:bg-zinc-900 sm:grid-cols-4 sm:p-8">
//             {STATS.map((s) => (
//               <div key={s.label} className="text-center">
//                 <p className="text-3xl font-black sm:text-4xl">{s.value}</p>
//                 <p className="mt-1 text-xs font-black uppercase text-zinc-500">{s.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Marquee Banner */}
//       <section className="border-y-2 border-brand-dark bg-brand-dark py-6 text-white select-none dark:border-white">
//         <div className="animate-marquee-left flex items-center gap-8 font-black text-sm uppercase tracking-wider">
//           {[...LOGOS, ...LOGOS].map((logo, i) => (
//             <div key={i} className="flex items-center gap-3 rounded-xl border-2 border-white/20 bg-white/10 px-5 py-2 text-brand-yellow">
//               <Brain size={16} className="text-brand-red" /> {logo}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* AI Problem Domains Section */}
//       <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 relative">
//         <div className="pointer-events-none absolute right-6 top-10 hidden w-20 animate-float xl:block z-20">
//           <DevfolioArt.BlueCrescent />
//         </div>

//         <div className="text-center">
//           <span className="rounded-lg border-2 border-brand-dark bg-brand-yellow px-3.5 py-1 text-xs font-black uppercase shadow-brutal text-brand-dark">
//             Focused Problem Statements
//           </span>
//           <h2 className="mt-4 text-3xl font-black sm:text-5xl">AI Innovation Tracks</h2>
//           <p className="mt-3 text-sm font-bold text-zinc-600 dark:text-zinc-300 max-w-lg mx-auto">
//             Choose from 4 AI problem tracks designed for 24 hours of rapid engineering.
//           </p>
//         </div>

//         <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {AI_TRACKS.map((t) => (
//             <div
//               key={t.title}
//               className="flex flex-col justify-between rounded-3xl border-2 border-brand-dark bg-white p-7 shadow-brutal-lg transition-transform hover:-translate-y-1.5 dark:border-white dark:bg-zinc-900"
//             >
//               <div>
//                 <span className={`inline-block rounded-md border-2 border-brand-dark px-3 py-1 text-[11px] font-black uppercase ${t.bg} ${t.textColor}`}>
//                   {t.tag}
//                 </span>
//                 <h3 className="mt-4 text-xl font-black">{t.title}</h3>
//                 <p className="mt-2 text-xs font-bold text-zinc-600 dark:text-zinc-400 leading-relaxed">{t.desc}</p>
//               </div>
//               <div className="mt-6 pt-4 border-t-2 border-zinc-100 dark:border-zinc-800">
//                 <Link href="/event" className="inline-flex items-center gap-2 text-xs font-black text-brand-red">
//                   View Track Rules <ArrowRight size={14} />
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }



import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Zap,
  Trophy,
  MapPin,
  Calendar,
  Sparkles,
  Bot,
  Brain,
  Gift,
  Utensils,
  ShieldCheck,
  Award,
  HelpCircle,
  CheckCircle2,
  UserCheck,
  Clock,
  ChevronRight,
  Flame,
} from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import { DevfolioArt } from "@/components/DevfolioArt";

const AI_TRACKS = [
  {
    title: "Autonomous Agents & LLMs",
    desc: "Build self-orchestrating agentic workflows, function calling pipelines, and local open-weight model architectures.",
    tag: "Agentic AI",
    bg: "bg-[#FDE047]",
    textColor: "text-[#18181B]",
  },
  {
    title: "GenAI & Multi-Modal Vision",
    desc: "Generate cross-modal media, computer vision models, video synthesis, and real-time audio AI interactions.",
    tag: "Generative AI",
    bg: "bg-[#26A192]",
    textColor: "text-white",
  },
  {
    title: "AI for Social Good & Health",
    desc: "Solve healthcare diagnostics, climate monitoring, smart city traffic, and agricultural challenges with AI.",
    tag: "AI Impact",
    bg: "bg-[#81A2EF]",
    textColor: "text-[#18181B]",
  },
  {
    title: "On-Device AI & Edge Models",
    desc: "Quantized neural networks, WebNN, Edge TPU optimization, and ultra-low latency AI running locally.",
    tag: "Edge AI",
    bg: "bg-[#FF3B30]",
    textColor: "text-white",
  },
];

const STATS = [
  { value: "24 Hrs", label: "Non-Stop AI Sprint" },
  { value: "₹2.5L+", label: "AI Track Bounties" },
  { value: "500+", label: "Student AI Hackers" },
  { value: "30+", label: "AI Experts & Mentors" },
];

const PERKS = [
  {
    icon: Trophy,
    title: "₹2.5L+ Cash Prizes",
    desc: "Substantial cash awards for overall winners, track winners, best female team, and best freshman team.",
    bg: "bg-[#FDE047]",
    textColor: "text-[#18181B]",
  },
  {
    icon: Utensils,
    title: "Free Food & Stays",
    desc: "Hot meals, midnight snacks, unlimited caffeine, and comfortable resting zones provided throughout the 24 hours.",
    bg: "bg-[#FF3B30]",
    textColor: "text-white",
  },
  {
    icon: UserCheck,
    title: "1-on-1 Mentorship",
    desc: "Get direct code reviews, system design help, and pitch deck guidance from top industry AI engineers.",
    bg: "bg-[#26A192]",
    textColor: "text-white",
  },
  {
    icon: Gift,
    title: "Exclusive Swag Kits",
    desc: "Custom hoodies, stickers, developer badges, and API credits for all verified participants.",
    bg: "bg-[#81A2EF]",
    textColor: "text-[#18181B]",
  },
];

const PRIZES = [
  {
    rank: "1st Winner",
    title: "Grand Champion",
    amount: "₹1,00,000",
    desc: "Top overall project across all tracks + Direct interview invites & cloud credits.",
    badgeBg: "bg-[#FDE047] text-[#18181B]",
    shadow: "shadow-[6px_6px_0px_0px_#FDE047]",
  },
  {
    rank: "2nd Winner",
    title: "First Runner Up",
    amount: "₹60,000",
    desc: "Second highest scoring project + Premium software credits & mentor guidance.",
    badgeBg: "bg-[#FF3B30] text-white",
    shadow: "shadow-[6px_6px_0px_0px_#FF3B30]",
  },
  {
    rank: "3rd Winner",
    title: "Second Runner Up",
    amount: "₹40,000",
    desc: "Third place outstanding submission + Swag hampers & community passes.",
    badgeBg: "bg-[#26A192] text-white",
    shadow: "shadow-[6px_6px_0px_0px_#26A192]",
  },
];

const TIMELINE_SNAPSHOT = [
  { time: "Oct 10 · 09:00 AM", title: "Check-in & Registration", desc: "Badge distribution, Wi-Fi setup, and team seat allocations." },
  { time: "Oct 10 · 11:00 AM", title: "Hacking Starts ⚡", desc: "24-hour sprint begins across all hacking bays." },
  { time: "Oct 10 · 08:00 PM", title: "Mentorship & Dinner 🍕", desc: "System architecture reviews & late-night fuel." },
  { time: "Oct 11 · 11:00 AM", title: "Code Freeze & Pitching 🏆", desc: "Submissions close and live demos begin." },
];

const FEATURED_MENTORS = [
  { name: "Dr. Vikram Sethi", role: "AI Research Scientist", company: "Tech Labs India", domain: "AI / ML & Agents" },
  { name: "Neha Verma", role: "Senior Staff Engineer", company: "CloudScale Systems", domain: "Cloud & DevOps" },
  { name: "Pooja Malhotra", role: "Web3 Security Lead", company: "Polygon Guild", domain: "Blockchain & ZK" },
];

const HOME_FAQS = [
  {
    q: "Is there any registration fee?",
    a: "No! Participation in InnoSprint 2.0 is 100% free. Meals, Wi-Fi, sleeping bays, and swag kits are provided at zero cost.",
  },
  {
    q: "What is the team size limit?",
    a: "Teams can consist of 2 to 4 members. Solo participation is not permitted to encourage team collaboration.",
  },
  {
    q: "Do I need prior hackathon experience?",
    a: "Not at all! We welcome beginners. Experienced mentors will be available throughout 24 hours to help you build and debug.",
  },
];

const LOGOS = ["D4 Community", "CGC University", "Devfolio", "GitHub Campus", "Polygon Guild", "AWS Community Hub"];

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Devfolio Animated Background Graphics */}
      <div className="pointer-events-none absolute left-6 top-16 hidden w-32 animate-float xl:block z-20">
        <DevfolioArt.YellowCharacterFace />
      </div>
      <div className="pointer-events-none absolute right-8 top-20 hidden w-28 animate-float xl:block z-20" style={{ animationDelay: "1s" }}>
        <DevfolioArt.BeigeStar />
      </div>
      <div className="pointer-events-none absolute left-10 top-[600px] hidden w-20 animate-float xl:block z-20" style={{ animationDelay: "1.5s" }}>
        <DevfolioArt.BlueFin />
      </div>
      <div className="pointer-events-none absolute right-12 top-[850px] hidden w-24 animate-float xl:block z-20" style={{ animationDelay: "2s" }}>
        <DevfolioArt.YellowSmileBadge />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 px-4 pt-12 pb-20 sm:px-6 sm:pt-20 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-[#18181B] bg-white px-4 py-1.5 text-xs font-black shadow-brutal dark:border-white dark:bg-zinc-800">
            <Sparkles size={14} className="text-[#FF3B30]" />
            24-Hour Hackathon by D4 Community
          </div>

          <h1 className="text-4xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
            Sprint Into the Future at{" "}
            <span className="inline-block -rotate-1 rounded-2xl border-2 border-[#18181B] bg-[#FF3B30] px-4 py-1 text-white shadow-brutal transition-transform hover:rotate-1 dark:border-white">
              InnoSprint 2.0
            </span>{" "}
            by{" "}
            <span className="inline-block bg-[#FDE047] text-[#18181B] px-3.5 py-1 rounded-2xl border-2 border-[#18181B] shadow-brutal dark:border-white">
              D4 Community
            </span>{" "}
            <span className="inline-flex items-center align-middle mx-1">
              <Image
                src="/assets/smiley.webp"
                alt="Smiley"
                width={48}
                height={48}
                className="w-8 h-8 sm:w-12 sm:h-12 object-contain"
              />
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base font-bold text-zinc-700 dark:text-zinc-300 sm:text-xl leading-relaxed">
            24 hours of non-stop hacking, rapid prototyping, and high-energy engineering at CGC University.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-black text-[#18181B] dark:text-white">
            <span className="flex items-center gap-1.5 rounded-xl border-2 border-[#18181B] bg-white px-3.5 py-2 shadow-brutal dark:border-white dark:bg-zinc-800">
              <Calendar size={16} className="text-[#FF3B30]" /> 10th & 11th October 2026
            </span>
            <span className="flex items-center gap-1.5 rounded-xl border-2 border-[#18181B] bg-white px-3.5 py-2 shadow-brutal dark:border-white dark:bg-zinc-800">
              <MapPin size={16} className="text-[#FF3B30]" /> CGC University, Punjab
            </span>
            <span className="flex items-center gap-1.5 rounded-xl border-2 border-[#18181B] bg-[#FDE047] px-3.5 py-2 shadow-brutal text-[#18181B]">
              <Bot size={16} className="text-[#FF3B30]" /> 24-Hour AI & Tech Sprint
            </span>
          </div>

          {/* Countdown Timer */}
          <div className="mt-10">
            <CountdownTimer />
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/event"
              data-cursor-text="REGISTER ⚡"
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-[#18181B] bg-[#FF3B30] px-8 py-4 text-base font-black text-white shadow-brutal transition-all hover:-translate-y-1 dark:border-white sm:w-auto"
            >
              <Zap size={20} /> Register Team <ArrowRight size={18} />
            </Link>
            <Link
              href="/about"
              data-cursor-text="ABOUT US ℹ️"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-[#18181B] bg-white px-8 py-4 text-base font-black text-[#18181B] shadow-brutal transition-all hover:-translate-y-1 dark:border-white dark:bg-zinc-800 dark:text-zinc-100 sm:w-auto"
            >
              Explore Event Details
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 gap-4 rounded-3xl border-2 border-[#18181B] bg-white p-6 shadow-brutal-lg dark:border-white dark:bg-zinc-900 sm:grid-cols-4 sm:p-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-black sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-xs font-black uppercase text-zinc-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <section className="border-y-2 border-[#18181B] bg-[#18181B] py-6 text-white select-none dark:border-white">
        <div className="animate-marquee-left flex items-center gap-8 font-black text-sm uppercase tracking-wider">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl border-2 border-white/20 bg-white/10 px-5 py-2 text-[#FDE047]">
              <Brain size={16} className="text-[#FF3B30]" /> {logo}
            </div>
          ))}
        </div>
      </section>

      {/* Why Participate / Perks Grid */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 relative">
        <div className="pointer-events-none absolute left-6 top-10 hidden w-16 animate-float xl:block z-20">
          <DevfolioArt.TealOrb />
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <span className="rounded-lg border-2 border-[#18181B] bg-[#FDE047] px-3.5 py-1 text-xs font-black uppercase shadow-brutal text-[#18181B]">
            Hacker Experience
          </span>
          <h2 className="mt-4 text-3xl font-black sm:text-5xl">Why Join InnoSprint 2.0?</h2>
          <p className="mt-3 text-sm font-bold text-zinc-600 dark:text-zinc-300">
            Everything you need to turn your ambitious idea into a functioning prototype in 24 hours.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PERKS.map(({ icon: Icon, title, desc, bg, textColor }) => (
            <div
              key={title}
              className="flex flex-col justify-between rounded-3xl border-2 border-[#18181B] bg-white p-7 shadow-brutal-lg transition-transform hover:-translate-y-1.5 dark:border-white dark:bg-zinc-900"
            >
              <div>
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-[#18181B] ${bg} ${textColor} dark:border-white`}>
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-2 text-xs font-bold text-zinc-600 dark:text-zinc-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem Domains Section */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 relative">
        <div className="pointer-events-none absolute right-6 top-10 hidden w-20 animate-float xl:block z-20">
          <DevfolioArt.BlueCrescent />
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <span className="rounded-lg border-2 border-[#18181B] bg-[#26A192] px-3.5 py-1 text-xs font-black uppercase text-white shadow-brutal">
            Problem Domains
          </span>
          <h2 className="mt-4 text-3xl font-black sm:text-5xl">Hackathon Tracks</h2>
          <p className="mt-3 text-sm font-bold text-zinc-600 dark:text-zinc-300">
            Select a domain, team up, and build hardware or software solutions in 24 hours.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {AI_TRACKS.map((t) => (
            <div
              key={t.title}
              className="flex flex-col justify-between rounded-3xl border-2 border-[#18181B] bg-white p-7 shadow-brutal-lg transition-transform hover:-translate-y-1.5 dark:border-white dark:bg-zinc-900"
            >
              <div>
                <span className={`inline-block rounded-md border-2 border-[#18181B] px-3 py-1 text-[11px] font-black uppercase ${t.bg} ${t.textColor}`}>
                  {t.tag}
                </span>
                <h3 className="mt-4 text-xl font-black">{t.title}</h3>
                <p className="mt-2 text-xs font-bold text-zinc-600 dark:text-zinc-400 leading-relaxed">{t.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t-2 border-zinc-100 dark:border-zinc-800">
                <Link
                  href="/event"
                  data-cursor-text="RULES 📜"
                  className="inline-flex items-center gap-2 text-xs font-black text-[#FF3B30]"
                >
                  View Rules <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prize Pool Spotlight Section */}
      <section className="relative border-y-2 border-[#18181B] bg-[#18181B] py-20 text-white overflow-hidden dark:border-white">
        <div className="pointer-events-none absolute left-8 top-12 hidden w-16 animate-float xl:block z-20">
          <DevfolioArt.BlueFin />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block rounded-lg border-2 border-white/20 bg-white/10 px-4 py-1 text-xs font-black uppercase tracking-widest text-[#FDE047]">
              Rewards & Bounties
            </span>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
              ₹2.5 Lakh Prize Pool
            </h2>
            <p className="mt-3 text-sm sm:text-base font-bold text-zinc-300">
              Rewards distributed across overall placement, track prizes, and special sponsor bounties.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {PRIZES.map((p) => (
              <div
                key={p.rank}
                className={`rounded-3xl border-2 border-white/20 bg-white p-8 text-[#18181B] ${p.shadow} flex flex-col justify-between transition-transform hover:-translate-y-1.5`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`rounded-md px-3 py-1 text-xs font-black uppercase border border-[#18181B] ${p.badgeBg}`}>
                      {p.rank}
                    </span>
                    <Trophy size={28} className="text-[#FF3B30]" />
                  </div>
                  <h3 className="text-2xl font-black text-[#18181B]">{p.title}</h3>
                  <p className="mt-3 text-4xl font-black text-[#FF3B30]">{p.amount}</p>
                  <p className="mt-3 text-xs font-bold text-zinc-600 leading-relaxed">{p.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t-2 border-[#18181B]/10 flex items-center gap-1.5 text-xs font-black text-[#26A192]">
                  <CheckCircle2 size={16} /> Instant Prize Discard
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border-2 border-white/20 bg-white/10 p-6 text-center backdrop-blur-md">
            <p className="text-xs font-black uppercase tracking-wider text-[#FDE047]">
              + Track Bounties, Best All-Girls Team Award & Freshman Top Performer Credits
            </p>
          </div>
        </div>
      </section>

      {/* 24-Hour Timeline Snapshot */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="rounded-lg border-2 border-[#18181B] bg-[#81A2EF] px-3.5 py-1 text-xs font-black uppercase text-[#18181B] shadow-brutal">
            Sprint Flow
          </span>
          <h2 className="mt-4 text-3xl font-black sm:text-5xl">24-Hour Schedule at a Glance</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TIMELINE_SNAPSHOT.map((t, idx) => (
            <div key={idx} className="rounded-2xl border-2 border-[#18181B] bg-white p-6 shadow-brutal dark:border-white dark:bg-zinc-900">
              <span className="flex items-center gap-1 text-[11px] font-black uppercase text-[#FF3B30]">
                <Clock size={14} /> {t.time}
              </span>
              <h3 className="mt-2 text-lg font-black">{t.title}</h3>
              <p className="mt-1 text-xs font-bold text-zinc-600 dark:text-zinc-400 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/event"
            data-cursor-text="SCHEDULE 📅"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FF3B30] hover:underline"
          >
            View Detailed 24-Hour Schedule <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* Mentors Teaser */}
      <section className="relative border-t-2 border-[#18181B] bg-white py-20 dark:bg-zinc-900 dark:border-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="rounded-lg border-2 border-[#18181B] bg-[#26A192] px-3.5 py-1 text-xs font-black uppercase text-white shadow-brutal">
                Guidance
              </span>
              <h2 className="mt-4 text-3xl font-black sm:text-5xl">Learn From Mentors</h2>
            </div>
            <Link
              href="/mentors"
              data-cursor-text="MENTORS 👥"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-[#18181B] bg-[#FDE047] px-5 py-2.5 text-xs font-black text-[#18181B] shadow-brutal hover:-translate-y-0.5 transition-all dark:border-white"
            >
              Meet All Mentors & Judges <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {FEATURED_MENTORS.map((m) => (
              <div
                key={m.name}
                className="rounded-3xl border-2 border-[#18181B] bg-[#FAF9F5] p-7 shadow-brutal dark:border-white dark:bg-zinc-800"
              >
                <span className="rounded-md border border-[#18181B] bg-[#FDE047] px-2.5 py-0.5 text-[10px] font-black uppercase text-[#18181B]">
                  {m.domain}
                </span>
                <h3 className="mt-4 text-2xl font-black">{m.name}</h3>
                <p className="text-xs font-bold text-[#FF3B30] mt-0.5">{m.role}</p>
                <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mt-2">@ {m.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="rounded-lg border-2 border-[#18181B] bg-[#FDE047] px-3.5 py-1 text-xs font-black uppercase shadow-brutal text-[#18181B]">
            Questions?
          </span>
          <h2 className="mt-4 text-3xl font-black sm:text-5xl">Frequently Asked</h2>
        </div>

        <div className="space-y-4">
          {HOME_FAQS.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl border-2 border-[#18181B] bg-white p-6 shadow-brutal dark:border-white dark:bg-zinc-900"
            >
              <div className="flex items-center gap-2 text-[#FF3B30] mb-2">
                <HelpCircle size={18} />
                <span className="text-[11px] font-black uppercase tracking-wider text-zinc-400">FAQ {i + 1}</span>
              </div>
              <h3 className="text-base font-black text-[#18181B] dark:text-white leading-snug">{f.q}</h3>
              <p className="mt-2 text-xs font-bold text-zinc-600 dark:text-zinc-400 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            data-cursor-text="ALL FAQS ❓"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FF3B30] hover:underline"
          >
            Read All Frequently Asked Questions <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border-2 border-[#18181B] bg-[#FDE047] p-8 text-center sm:p-14 shadow-[8px_8px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:text-white dark:shadow-[8px_8px_0px_0px_#FFF]">
          <div className="relative z-10">
            <span className="rounded-lg border-2 border-[#18181B] bg-[#18181B] px-3.5 py-1 text-xs font-black uppercase text-[#FDE047] dark:border-white">
              Limited Seats Available
            </span>
            <h2 className="mt-4 text-3xl font-black text-[#18181B] dark:text-white sm:text-5xl">
              Ready to Sprint with D4 Community?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base font-bold text-zinc-800 dark:text-zinc-300 leading-relaxed">
              Assemble your team of 2 to 4 members and claim your spot for October 10th & 11th at CGC University.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/event"
                data-cursor-text="JOIN NOW ⚡"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-[#18181B] bg-[#FF3B30] px-8 py-4 text-base font-black text-white shadow-brutal hover:-translate-y-0.5 transition-all dark:border-white"
              >
                <Zap size={20} /> Register Your Team Now <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-black text-[#18181B] dark:text-white">
              {["100% Free Entry", "Meals Provided", "24/7 Security & Rest Bays"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-[#FF3B30]" /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}