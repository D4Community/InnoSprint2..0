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
  Clock,
  ChevronRight,
  Lightbulb,
  Compass,
  Code2,
  Layers,
  Cpu,
  CheckCircle2,
  Flame,
  Terminal,
  Quote,
  Wifi,
  Coffee,
  Boxes,
} from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import { DevfolioArt } from "@/components/DevfolioArt";

const OPEN_INNOVATION_DOMAINS = [
  {
    title: "Smart Cities & Urban Mobility",
    desc: "Build solutions for traffic management, intelligent transit, public safety, and smart infrastructure.",
    tag: "Urban Tech",
    bg: "bg-[#FDE047]",
    textColor: "text-[#18181B]",
    icon: Compass,
  },
  {
    title: "Healthcare & Assistive Tech",
    desc: "Develop early diagnostic tools, patient tracking systems, accessibility devices, and mental health tools.",
    tag: "MedTech & Care",
    bg: "bg-[#FF3B30]",
    textColor: "text-white",
    icon: Lightbulb,
  },
  {
    title: "EdTech & Learning Accessibility",
    desc: "Create interactive learning platforms, AI tutors, skill development tools, and digital classroom systems.",
    tag: "Future of Edu",
    bg: "bg-[#26A192]",
    textColor: "text-white",
    icon: Code2,
  },
  {
    title: "Web3, CyberSec & Open Hardware",
    desc: "Engineer decentralized protocols, security scanners, IoT sensors, or embedded system prototypes.",
    tag: "Web3 & Systems",
    bg: "bg-[#81A2EF]",
    textColor: "text-[#18181B]",
    icon: Cpu,
  },
];

const STATS = [
  { value: "24 Hrs", label: "Non-Stop Building" },
  { value: "500+", label: "Student Hackers" },
  { value: "Open", label: "Innovation Format" },
  { value: "100%", label: "Free Meals & Perks" },
];

const PERKS = [
  {
    icon: Trophy,
    title: "Exciting Prizes",
    desc: "Rewards for overall winners, track winners, best female team, and beginner hackers.",
    bg: "bg-[#FDE047]",
    textColor: "text-[#18181B]",
  },
  {
    icon: Utensils,
    title: "Free Food & Stays",
    desc: "Hot meals, midnight snacks, unlimited caffeine, and resting zones provided for 24 hours.",
    bg: "bg-[#FF3B30]",
    textColor: "text-white",
  },
  {
    icon: Gift,
    title: "Exclusive Swag Kits",
    desc: "Custom hoodies, stickers, developer badges, and software vouchers for all participants.",
    bg: "bg-[#26A192]",
    textColor: "text-white",
  },
  {
    icon: ShieldCheck,
    title: "Zero Entry Fee",
    desc: "100% free participation, hardware labs, accommodation, and food for accepted teams.",
    bg: "bg-[#81A2EF]",
    textColor: "text-[#18181B]",
  },
];

const LAB_RESOURCES = [
  { icon: Wifi, title: "Gigabit Campus Wi-Fi", desc: "Dedicated high-bandwidth router nodes for every hacking bay." },
  { icon: Terminal, title: "Cloud GPU Vouchers", desc: "Free computing credits provided by cloud sponsors for training models." },
  { icon: Boxes, title: "Hardware & IoT Station", desc: "Sensors, Raspberry Pi, Arduino boards, and 3D printing support on-site." },
  { icon: Coffee, title: "24/7 Fuel & Snacks", desc: "Continuous coffee bar, energy drinks, midnight snacks, and hot meals." },
];

const PAST_HACKER_QUOTES = [
  {
    quote: "The energy at InnoSprint was electric. Building a prototype in 24 hours alongside 500+ builders was an unforgettable experience.",
    name: "Aarav Sharma",
    role: "InnoSprint 1.0 Winner",
    bg: "bg-[#FDE047]",
    textColor: "text-[#18181B]",
  },
  {
    quote: "From mentorship round at midnight to instant hardware kit access, everything was seamlessly managed by D4 Community.",
    name: "Priya Malhotra",
    role: "Best Women-Led Team 2025",
    bg: "bg-[#FF3B30]",
    textColor: "text-white",
  },
  {
    quote: "No rigid problem limits meant our team could build a real Web3 IoT device without being forced into restrictive categories.",
    name: "Rohan Gupta",
    role: "Open Track Finalist",
    bg: "bg-[#26A192]",
    textColor: "text-white",
  },
];

const JUDGING_CRITERIA = [
  {
    title: "Innovation & Originality",
    weight: "30%",
    desc: "How creative, unique, or fresh is the approach to solving the problem?",
  },
  {
    title: "Technical Depth & Execution",
    weight: "30%",
    desc: "Quality of code, architecture choice, complexity, and working functionality during live demo.",
  },
  {
    title: "Real-World Impact & Feasibility",
    weight: "25%",
    desc: "Is the solution practical? Does it address a genuine real-world need or pain point effectively?",
  },
  {
    title: "Design & Presentation Polish",
    weight: "15%",
    desc: "User experience, UI clarity, team pitching, and how clearly the prototype is demonstrated.",
  },
];

const TIMELINE_SNAPSHOT = [
  { time: "Oct 10 · 09:00 AM", title: "Check-in & Registration", desc: "Badge distribution, Wi-Fi setup, and team seat allocations." },
  { time: "Oct 10 · 11:00 AM", title: "Hacking Starts ⚡", desc: "24-hour sprint begins across all hacking bays." },
  { time: "Oct 10 · 08:00 PM", title: "Dinner & Midnight Snacks 🍕", desc: "Late-night fuel, hot meals, and gaming breaks." },
  { time: "Oct 11 · 11:00 AM", title: "Code Freeze & Pitching 🏆", desc: "Submissions close and live demos begin." },
];

const HACKATHON_RULES = [
  "Teams can consist of 2 to 4 eligible university/diploma students.",
  "All code and design assets must be created during the official 24-hour window.",
  "Open Innovation format: You can use any tech stack, programming language, or framework.",
  "Open-source libraries and public APIs are allowed provided they are declared.",
];

const HOME_FAQS = [
  {
    q: "What is Open Innovation?",
    a: "Open Innovation means there are no strict tech stack limits! You are free to pick any real-world problem and solve it using Web, Mobile, AI, Web3, Hardware/IoT, or Cloud technologies.",
  },
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
    a: "Not at all! We welcome beginners. On-site organizers and volunteers will be available throughout 24 hours to help you out.",
  },
];

const LOGOS = ["D4 Community", "CGC University", "Devfolio", "GitHub Campus", "Polygon Guild", "AWS Community Hub"];

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-[#FAF9F5] text-[#18181B] dark:bg-[#0F0F12] dark:text-zinc-100">

      {/* SECTION 1: HERO (LIGHT BG) */}
      <section className="relative z-10 px-4 pt-12 pb-20 sm:px-6 sm:pt-20 lg:px-8 border-b-2 dark:border-white/20 bg-[#FAF9F5] dark:bg-[#0F0F12]">
        {/* MULTIPLE FLOATING DEVFOLIO SVGS */}
        <div className="pointer-events-none absolute left-4 top-12 hidden w-32 animate-float xl:block z-20">
          <DevfolioArt.YellowCharacterFace />
        </div>
        <div className="pointer-events-none absolute right-8 top-16 hidden w-28 animate-float xl:block z-20" style={{ animationDelay: "1s" }}>
          <DevfolioArt.BeigeStar />
        </div>
        <div className="pointer-events-none absolute right-16 top-[420px] hidden w-24 animate-float xl:block z-20" style={{ animationDelay: "1.8s" }}>
          <DevfolioArt.YellowSmileBadge />
        </div>
        <div className="pointer-events-none absolute left-12 top-[480px] hidden w-16 animate-float xl:block z-20" style={{ animationDelay: "2.4s" }}>
          <DevfolioArt.BlueOrb />
        </div>

        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-[#18181B] bg-white px-4 py-1.5 text-xs font-black shadow-[3px_3px_0px_0px_#18181B] dark:border-white dark:bg-zinc-800 dark:shadow-[3px_3px_0px_0px_#FFF]">
            <Sparkles size={14} className="text-[#FF3B30]" />
            24-Hour Hackathon by D4 Community
          </div>

          <h1 className="text-4xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl text-[#18181B] dark:text-white">
            Sprint Into Open Innovation at{" "}
            <span className="inline-block rotate-1 rounded-2xl border-2 border-[#18181B] bg-[#FF3B30] px-4 py-1 text-white shadow-[4px_4px_0px_0px_#18181B] transition-transform hover:-rotate-0 dark:border-white dark:shadow-[4px_4px_0px_0px_#FFF]">
              InnoSprint 2.0
            </span>{" "}
            by{" "}
            <span className="inline-block bg-[#FDE047] text-[#18181B] px-3.5 py-1 rounded-2xl border-2 border-[#18181B] shadow-[4px_4px_0px_0px_#18181B] dark:border-white dark:shadow-[4px_4px_0px_0px_#FFF] -rotate-1 hover:rotate-2">
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
            24 hours of unrestricted innovation, rapid prototyping, and hands-on engineering at CGC University.
          </p>

          {/* Main Event Logo */}
          <div className="mt-6 flex justify-center">
            <Image
              src="/assets/innosprint 2.0.png"
              alt="InnoSprint 2.0 Logo"
              width={260}
              height={75}
              className="h-12 sm:h-20 w-auto object-contain"
              priority
            />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-black text-[#18181B] dark:text-white">
            <span className="flex items-center gap-1.5 rounded-xl border-2 border-[#18181B] bg-white px-3.5 py-2 shadow-[3px_3px_0px_0px_#18181B] dark:border-white dark:bg-zinc-800 dark:shadow-[3px_3px_0px_0px_#FFF]">
              <Calendar size={16} className="text-[#FF3B30]" /> 10th & 11th October 2026
            </span>
            <span className="flex items-center gap-1.5 rounded-xl border-2 border-[#18181B] bg-white px-3.5 py-2 shadow-[3px_3px_0px_0px_#18181B] dark:border-white dark:bg-zinc-800 dark:shadow-[3px_3px_0px_0px_#FFF]">
              <MapPin size={16} className="text-[#FF3B30]" /> CGC University, Punjab
            </span>
            <span className="flex items-center gap-1.5 rounded-xl border-2 border-[#18181B] bg-[#FDE047] px-3.5 py-2 shadow-[3px_3px_0px_0px_#18181B] text-[#18181B] dark:border-white">
              <Bot size={16} className="text-[#FF3B30]" /> Open Innovation Sprint
            </span>
          </div>

          {/* Countdown Timer */}
          <div className="mt-10 relative z-30">
            <CountdownTimer />
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/event"
              data-cursor-text="REGISTER ⚡"
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-[#18181B] bg-[#FF3B30] px-8 py-4 text-base font-black text-white shadow-[4px_4px_0px_0px_#18181B] transition-all hover:-translate-y-1 active:translate-y-0 dark:border-white dark:shadow-[4px_4px_0px_0px_#FFF] sm:w-auto"
            >
              <Zap size={20} /> Register Team <ArrowRight size={18} />
            </Link>
            <Link
              href="/about"
              data-cursor-text="ABOUT US ℹ️"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-[#18181B] bg-white px-8 py-4 text-base font-black text-[#18181B] shadow-[4px_4px_0px_0px_#18181B] transition-all hover:-translate-y-1 active:translate-y-0 dark:border-white dark:bg-zinc-800 dark:text-zinc-100 dark:shadow-[4px_4px_0px_0px_#FFF] sm:w-auto"
            >
              Explore Event Details
            </Link>
          </div>

          {/* CENTER HERO ILLUSTRATION SVG */}
          <DevfolioArt.CenterIllustration />

          {/* Stats Bar */}
          <div className="mt-10 grid grid-cols-2 gap-4 rounded-3xl border-2 border-[#18181B] bg-white p-6 shadow-[6px_6px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:shadow-[6px_6px_0px_0px_#FFF] sm:grid-cols-4 sm:p-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-black sm:text-4xl text-[#18181B] dark:text-white">{s.value}</p>
                <p className="mt-1 text-xs font-black uppercase text-zinc-500 dark:text-zinc-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: MARQUEE BANNER (DARK BG) */}
      <section className="border-b-2 border-[#18181B] bg-[#18181B] py-6 text-white select-none dark:border-white">
        <div className="animate-marquee-left flex items-center gap-8 font-black text-sm uppercase tracking-wider">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl border-2 border-white/20 bg-white/10 px-5 py-2 text-[#FDE047]">
              <Brain size={16} className="text-[#FF3B30]" /> {logo}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: OPEN INNOVATION ETHOS (LIGHT BG) */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative border-b-2 dark:border-white/20 bg-[#FAF9F5] dark:bg-[#0F0F12]">
        <div className="pointer-events-none absolute left-4 top-10 hidden w-20 animate-float xl:block z-20" style={{ animationDelay: "1.2s" }}>
          <DevfolioArt.TealOrb />
        </div>
        <div className="pointer-events-none absolute right-6 bottom-10 hidden w-24 animate-float xl:block z-20" style={{ animationDelay: "2s" }}>
          <DevfolioArt.BlueCrescent />
        </div>

        <div className="rounded-3xl border-2 border-[#18181B] bg-white p-8 sm:p-12 shadow-[8px_8px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:shadow-[8px_8px_0px_0px_#FFF]">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <span className="rounded-lg border-2 border-[#18181B] bg-[#FF3B30] px-3.5 py-1 text-xs font-black uppercase text-white shadow-[2px_2px_0px_0px_#18181B] dark:border-white">
                No Domain Boundaries
              </span>
              <h2 className="mt-4 text-3xl font-black sm:text-4xl text-[#18181B] dark:text-white leading-tight">
                What is Open Innovation at InnoSprint 2.0?
              </h2>
              <p className="mt-4 text-sm font-bold text-zinc-600 dark:text-zinc-300 leading-relaxed">
                We believe great software and hardware solutions shouldn&apos;t be boxed into rigid tracks. At InnoSprint 2.0, you have 100% freedom to identify any real-world problem and build a solution using Web, AI, App Dev, Web3, Cloud, or IoT.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-black">
                <span className="rounded-md border-2 border-[#18181B] bg-[#FDE047] px-2.5 py-1 text-[#18181B] dark:border-white">
                  ✦ Any Technology Stack
                </span>
                <span className="rounded-md border-2 border-[#18181B] bg-[#26A192] px-2.5 py-1 text-white dark:border-white">
                  ✦ Hardware & Software Allowed
                </span>
                <span className="rounded-md border-2 border-[#18181B] bg-[#81A2EF] px-2.5 py-1 text-[#18181B] dark:border-white">
                  ✦ Real-World Impact
                </span>
              </div>
            </div>

            <div className="md:col-span-5 rounded-2xl border-2 border-[#18181B] bg-[#FDE047] p-6 shadow-[5px_5px_0px_0px_#18181B] text-[#18181B] dark:border-white">
              <Flame size={32} className="text-[#FF3B30] mb-2" />
              <h3 className="text-xl font-black">Build Without Constraints</h3>
              <p className="mt-2 text-xs font-bold leading-relaxed text-zinc-800">
                Whether it&apos;s an AI diagnostic assistant, an automated developer CLI tool, a smart IoT device, or a decentralized governance app, if it works and solves a problem, it belongs here!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: INNOVATION DOMAINS (DARK BG) */}
      <section className="bg-[#18181B] text-white py-20 border-b-2 border-[#18181B] dark:border-white/20 relative">
        <div className="pointer-events-none absolute left-8 top-12 hidden w-16 animate-float xl:block z-20">
          <DevfolioArt.BlueFin />
        </div>
        <div className="pointer-events-none absolute right-6 top-10 hidden w-20 animate-float xl:block z-20" style={{ animationDelay: "1.5s" }}>
          <DevfolioArt.BlueCrescent />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="rounded-lg border-2 border-white/20 bg-white/10 px-3.5 py-1 text-xs font-black uppercase text-[#FDE047]">
              Inspired Focus Areas
            </span>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">Sample Innovation Domains</h2>
            <p className="mt-3 text-sm font-bold text-zinc-300">
              Need inspiration? Explore some of the high-impact themes you can tackle during 24 hours.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {OPEN_INNOVATION_DOMAINS.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.title}
                  className="flex flex-col justify-between rounded-3xl border-2 border-white/20 bg-white/5 p-7 backdrop-blur-md shadow-[6px_6px_0px_0px_#FDE047] transition-transform hover:-translate-y-1.5"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`inline-block rounded-md border-2 border-[#18181B] px-3 py-1 text-[11px] font-black uppercase ${t.bg} ${t.textColor}`}>
                        {t.tag}
                      </span>
                      <Icon size={20} className="text-[#FDE047]" />
                    </div>
                    <h3 className="text-xl font-black text-white">{t.title}</h3>
                    <p className="mt-2 text-xs font-bold text-zinc-300 leading-relaxed">{t.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <Link
                      href="/event"
                      data-cursor-text="RULES 📜"
                      className="inline-flex items-center gap-2 text-xs font-black text-[#FDE047] hover:underline"
                    >
                      View Guidelines <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: HACKER PERKS (LIGHT BG) */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 relative border-b-2 dark:border-white/20 bg-[#FAF9F5] dark:bg-[#0F0F12]">
        <div className="pointer-events-none absolute left-6 top-10 hidden w-28 animate-float xl:block z-20">
          <DevfolioArt.YellowCharacterFace />
        </div>
        <div className="pointer-events-none absolute right-8 bottom-12 hidden w-24 animate-float xl:block z-20" style={{ animationDelay: "1.3s" }}>
          <DevfolioArt.BeigeStar />
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <span className="rounded-lg border-2 border-[#18181B] bg-[#FDE047] px-3.5 py-1 text-xs font-black uppercase shadow-[3px_3px_0px_0px_#18181B] text-[#18181B] dark:border-white">
            Hacker Experience
          </span>
          <h2 className="mt-4 text-3xl font-black sm:text-5xl text-[#18181B] dark:text-white">Why Join InnoSprint 2.0?</h2>
          <p className="mt-3 text-sm font-bold text-zinc-600 dark:text-zinc-300">
            Everything you need to turn your ambitious idea into a functioning prototype in 24 hours.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PERKS.map(({ icon: Icon, title, desc, bg, textColor }) => (
            <div
              key={title}
              className="flex flex-col justify-between rounded-3xl border-2 border-[#18181B] bg-white p-7 shadow-[6px_6px_0px_0px_#18181B] transition-transform hover:-translate-y-1.5 dark:border-white dark:bg-zinc-900 dark:shadow-[6px_6px_0px_0px_#FFF]"
            >
              <div>
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-[#18181B] ${bg} ${textColor} dark:border-white`}>
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-black text-[#18181B] dark:text-white">{title}</h3>
                <p className="mt-2 text-xs font-bold text-zinc-600 dark:text-zinc-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: HARDWARE & TECH LAB ACCESS (DARK BG) */}
      <section className="bg-[#18181B] text-white py-20 border-b-2 border-[#18181B] dark:border-white/20 relative">
        <div className="pointer-events-none absolute left-8 top-10 hidden w-20 animate-float xl:block z-20">
          <DevfolioArt.BlueOrb />
        </div>
        <div className="pointer-events-none absolute right-10 bottom-10 hidden w-20 animate-float xl:block z-20" style={{ animationDelay: "1.4s" }}>
          <DevfolioArt.TealOrb />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="rounded-lg border-2 border-white/20 bg-white/10 px-3.5 py-1 text-xs font-black uppercase text-[#FDE047]">
              Campus Infrastructure
            </span>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">On-Site Developer Resources</h2>
            <p className="mt-3 text-sm font-bold text-zinc-300">
              High-performance setup provided at CGC University to supercharge your sprint.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LAB_RESOURCES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-3xl border-2 border-white/20 bg-white/5 p-7 backdrop-blur-md shadow-[6px_6px_0px_0px_#FDE047]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-white bg-[#FDE047] text-[#18181B]">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-black text-white">{title}</h3>
                <p className="mt-2 text-xs font-bold text-zinc-300 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: UNREVEALED PRIZE TEASER (LIGHT BG) */}
      <section className="relative border-b-2 border-[#18181B] bg-[#FAF9F5] py-20 text-[#18181B] overflow-hidden dark:bg-[#0F0F12] dark:border-white/20 dark:text-white">
        <div className="pointer-events-none absolute left-8 top-12 hidden w-16 animate-float xl:block z-20">
          <DevfolioArt.BlueFin />
        </div>
        <div className="pointer-events-none absolute right-8 bottom-10 hidden w-28 animate-float xl:block z-20" style={{ animationDelay: "1.2s" }}>
          <DevfolioArt.YellowSmileBadge />
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block rounded-lg border-2 border-[#18181B] bg-[#FDE047] px-4 py-1 text-xs font-black uppercase tracking-widest text-[#18181B] shadow-[2px_2px_0px_0px_#18181B] dark:border-white">
            Rewards & Bounties
          </span>
          <h2 className="mt-4 text-3xl font-black text-[#18181B] dark:text-white sm:text-5xl">
            Prizes & Bounties To Be Revealed Soon!
          </h2>
          <p className="mt-3 text-sm sm:text-base font-bold text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto">
            We are cooking up massive rewards, track bounties, swag hampers, and direct interview opportunities. Stay tuned!
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3 text-left">
            <div className="rounded-3xl border-2 border-[#18181B] bg-white p-7 shadow-[6px_6px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:shadow-[6px_6px_0px_0px_#FFF]">
              <Trophy size={32} className="text-[#FDE047] mb-3" />
              <h3 className="text-xl font-black text-[#18181B] dark:text-white">Main Hackathon Prizes</h3>
              <p className="mt-2 text-xs font-bold text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Top overall winning teams receive trophies, cash prizes, and certificates.
              </p>
            </div>

            <div className="rounded-3xl border-2 border-[#18181B] bg-white p-7 shadow-[6px_6px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:shadow-[6px_6px_0px_0px_#FFF]">
              <Gift size={32} className="text-[#FF3B30] mb-3" />
              <h3 className="text-xl font-black text-[#18181B] dark:text-white">Track Bounties & Swags</h3>
              <p className="mt-2 text-xs font-bold text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Special category bounties for best beginner team, all-girls team, and track winners.
              </p>
            </div>

            <div className="rounded-3xl border-2 border-[#18181B] bg-white p-7 shadow-[6px_6px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:shadow-[6px_6px_0px_0px_#FFF]">
              <Award size={32} className="text-[#26A192] mb-3" />
              <h3 className="text-xl font-black text-[#18181B] dark:text-white">Perks for All Hackers</h3>
              <p className="mt-2 text-xs font-bold text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Participation certificates, stickers, sponsor credits, and free meals for every hacker.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: PAST HACKER TESTIMONIALS (DARK BG) */}
      <section className="bg-[#18181B] text-white py-20 border-b-2 border-[#18181B] dark:border-white/20 relative">
        <div className="pointer-events-none absolute right-10 top-10 hidden w-16 animate-float xl:block z-20">
          <DevfolioArt.TealOrb />
        </div>
        <div className="pointer-events-none absolute left-10 bottom-10 hidden w-20 animate-float xl:block z-20" style={{ animationDelay: "1.6s" }}>
          <DevfolioArt.BlueCrescent />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="rounded-lg border-2 border-white/20 bg-white/10 px-3.5 py-1 text-xs font-black uppercase text-[#FDE047]">
              Community Voices
            </span>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">What Past Hackers Say</h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {PAST_HACKER_QUOTES.map((q) => (
              <div
                key={q.name}
                className="rounded-3xl border-2 border-white/20 bg-white/5 p-7 backdrop-blur-md shadow-[6px_6px_0px_0px_#FDE047] flex flex-col justify-between"
              >
                <div>
                  <Quote size={28} className="text-[#FDE047] mb-4" />
                  <p className="text-xs font-bold text-zinc-300 leading-relaxed">&ldquo;{q.quote}&rdquo;</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <span className={`inline-block rounded-md border border-[#18181B] px-2 py-0.5 text-[10px] font-black uppercase ${q.bg} ${q.textColor}`}>
                    {q.role}
                  </span>
                  <h4 className="mt-2 text-base font-black text-white">{q.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: JUDGING RUBRIC (LIGHT BG) */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative border-b-2 dark:border-white/20 bg-[#FAF9F5] dark:bg-[#0F0F12]">
        <div className="pointer-events-none absolute left-6 top-10 hidden w-20 animate-float xl:block z-20">
          <DevfolioArt.BlueCrescent />
        </div>
        <div className="pointer-events-none absolute right-6 top-12 hidden w-28 animate-float xl:block z-20" style={{ animationDelay: "1.4s" }}>
          <DevfolioArt.YellowCharacterFace />
        </div>

        <div className="rounded-3xl border-2 border-[#18181B] bg-[#FAF9F5] p-8 sm:p-12 shadow-[8px_8px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:shadow-[8px_8px_0px_0px_#FFF]">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="rounded-lg border-2 border-[#18181B] bg-[#81A2EF] px-3.5 py-1 text-xs font-black uppercase text-[#18181B] shadow-[2px_2px_0px_0px_#18181B] dark:border-white">
              Public Rubric
            </span>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl text-[#18181B] dark:text-white">
              How Projects Are Judged
            </h2>
            <p className="mt-2 text-xs font-bold text-zinc-600 dark:text-zinc-400">
              Fair, multi-round evaluations based on standardized criteria.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {JUDGING_CRITERIA.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border-2 border-[#18181B] bg-white p-6 shadow-[5px_5px_0px_0px_#18181B] dark:border-white dark:bg-zinc-800 dark:shadow-[5px_5px_0px_0px_#FFF] transition-transform hover:-translate-y-1"
              >
                <span className="text-2xl font-black text-[#FF3B30]">{c.weight}</span>
                <h3 className="mt-2 text-base font-black text-[#18181B] dark:text-white">{c.title}</h3>
                <p className="mt-1.5 text-xs font-bold text-zinc-600 dark:text-zinc-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: TIMELINE SNAPSHOT & RULES (DARK BG) */}
      <section className="bg-[#18181B] text-white py-20 border-b-2 border-[#18181B] dark:border-white/20 relative">
        <div className="pointer-events-none absolute right-8 top-12 hidden w-28 animate-float xl:block z-20">
          <DevfolioArt.BeigeStar />
        </div>
        <div className="pointer-events-none absolute left-8 bottom-12 hidden w-16 animate-float xl:block z-20" style={{ animationDelay: "1.7s" }}>
          <DevfolioArt.BlueFin />
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="rounded-lg border-2 border-white/20 bg-white/10 px-3.5 py-1 text-xs font-black uppercase text-[#FDE047]">
              Sprint Flow
            </span>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">24-Hour Schedule Snapshot</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TIMELINE_SNAPSHOT.map((t, idx) => (
              <div key={idx} className="rounded-2xl border-2 border-white/20 bg-white/5 p-6 backdrop-blur-md">
                <span className="flex items-center gap-1 text-[11px] font-black uppercase text-[#FDE047]">
                  <Clock size={14} /> {t.time}
                </span>
                <h3 className="mt-2 text-lg font-black text-white">{t.title}</h3>
                <p className="mt-1 text-xs font-bold text-zinc-300 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border-2 border-white/20 bg-white/5 p-8 backdrop-blur-md">
            <div className="flex items-center gap-2 text-[#FDE047] mb-4">
              <Layers size={22} />
              <h3 className="text-xl font-black text-white">Quick Rules & Guidelines</h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {HACKATHON_RULES.map((rule, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs font-bold text-zinc-300">
                  <CheckCircle2 size={16} className="text-[#26A192] shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: FAQ TEASER (LIGHT BG) */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 relative border-b-2 dark:border-white/20 bg-[#FAF9F5] dark:bg-[#0F0F12]">
        <div className="pointer-events-none absolute left-6 top-10 hidden w-16 animate-float xl:block z-20">
          <DevfolioArt.BlueOrb />
        </div>
        <div className="pointer-events-none absolute right-8 top-16 hidden w-16 animate-float xl:block z-20" style={{ animationDelay: "1.2s" }}>
          <DevfolioArt.TealOrb />
        </div>

        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="rounded-lg border-2 border-[#18181B] bg-[#FDE047] px-3.5 py-1 text-xs font-black uppercase shadow-[3px_3px_0px_0px_#18181B] text-[#18181B] dark:border-white">
            Questions?
          </span>
          <h2 className="mt-4 text-3xl font-black sm:text-5xl text-[#18181B] dark:text-white">Frequently Asked</h2>
        </div>

        <div className="space-y-4">
          {HOME_FAQS.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl border-2 border-[#18181B] bg-white p-6 shadow-[5px_5px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:shadow-[5px_5px_0px_0px_#FFF]"
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

      {/* SECTION 12: FINAL CTA BANNER (YELLOW ACCENT BG) */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 bg-[#FAF9F5] dark:bg-[#0F0F12]">
        <div
        className="pointer-events-none absolute right-24 bottom-[440px] hidden w-24 animate-float xl:block z-20"
        style={{ animationDelay: "2.2s" }}
      >
        <DevfolioArt.NewSmileBadge />
      </div>
        <div className="relative overflow-hidden rounded-3xl border-2 border-[#18181B] bg-[#FDE047] p-8 text-center sm:p-14 shadow-[8px_8px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:text-white dark:shadow-[8px_8px_0px_0px_#FFF]">
          <div className="pointer-events-none absolute left-4 top-4 hidden sm:block w-16 animate-float opacity-80 z-0">
            <DevfolioArt.BlueFin />
          </div>
          <div className="pointer-events-none absolute right-4 bottom-4 hidden sm:block w-20 animate-float opacity-80 z-0" style={{ animationDelay: "1s" }}>
            <DevfolioArt.BeigeStar />
          </div>

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
                className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-[#18181B] bg-[#FF3B30] px-8 py-4 text-base font-black text-white shadow-[4px_4px_0px_0px_#18181B] hover:-translate-y-0.5 transition-all dark:border-white dark:shadow-[4px_4px_0px_0px_#FFF]"
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