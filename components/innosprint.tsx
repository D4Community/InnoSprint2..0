'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Code2,
  Github,
  Instagram,
  Linkedin,
  MapPin,
  Menu,
  Moon,
  Rocket,
  Sun,
  Users,
  X,
} from 'lucide-react';

export const NAV_ITEMS = [
  { href: '/about', label: 'About' },
  { href: '/event', label: 'Event' },
  { href: '/team', label: 'Team' },
  { href: '/mentors', label: 'Mentors' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/faq', label: 'FAQ' },
];

export function BrandMark() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="InnoSprint 2.0 home">
      <span className="grid h-10 w-10 place-items-center rounded-xl border-2 border-[var(--ink)] bg-[var(--yellow)] shadow-[3px_3px_0_var(--ink)] transition-transform group-hover:-rotate-6">
        <Rocket className="h-5 w-5" strokeWidth={2.5} />
      </span>
      <span className="leading-none">
        <span className="block text-[15px] font-black tracking-[-0.04em]">InnoSprint</span>
        <span className="block text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--orange)]">2.0 · D4 Community</span>
      </span>
    </Link>
  );
}

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('innosprint-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enabled = saved ? saved === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', enabled);
    setDark(enabled);
  }, []);

  function toggleTheme(): void {
    const next = !dark;
    document.documentElement.classList.toggle('dark', next);
    window.localStorage.setItem('innosprint-theme', next ? 'dark' : 'light');
    setDark(next);
  }

  return (
    <button type="button" onClick={toggleTheme} className="icon-button" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--surface)]/90 backdrop-blur-xl">
      <div className="container flex h-[76px] items-center justify-between gap-6">
        <BrandMark />
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => <Link key={item.href} href={item.href} className="nav-link">{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/event#register" className="button button-primary hidden sm:inline-flex">Register now <ArrowRight className="h-4 w-4" /></Link>
          <button type="button" className="icon-button lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && <nav className="container grid gap-1 border-t border-[var(--line)] py-4 lg:hidden">
        {NAV_ITEMS.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-bold hover:bg-[var(--tint)]">{item.label}</Link>)}
        <Link href="/event#register" onClick={() => setOpen(false)} className="button button-primary mt-2">Register now <ArrowRight className="h-4 w-4" /></Link>
      </nav>}
    </header>
  );
}

export function Footer() {
  return <footer className="border-t border-[var(--line)] bg-[var(--dark)] py-14 text-white">
    <div className="container grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
      <div><BrandMark /><p className="mt-5 max-w-xs text-sm leading-7 text-white/65">A two-day build sprint for curious minds, ambitious ideas, and the people who make technology more human.</p><div className="mt-6 flex gap-2"><a className="footer-icon" href="#" aria-label="Instagram"><Instagram className="h-4 w-4" /></a><a className="footer-icon" href="#" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a><a className="footer-icon" href="#" aria-label="GitHub"><Github className="h-4 w-4" /></a></div></div>
      <div><p className="footer-label">Explore</p><div className="footer-links">{NAV_ITEMS.slice(0, 4).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div></div>
      <div><p className="footer-label">Participate</p><div className="footer-links"><Link href="/event#register">Register</Link><Link href="/sponsors">Become a sponsor</Link><Link href="/community-partners">Community partners</Link><Link href="/faq">Help center</Link></div></div>
      <div><p className="footer-label">Find us</p><div className="space-y-4 text-sm text-white/70"><p className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--yellow)]" /> CGC University, Chandigarh</p><p className="flex gap-2"><CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-[var(--yellow)]" /> 10–11 October</p></div></div>
    </div>
    <div className="container mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row"><span>© 2026 D4 Community. Built for the next bold idea.</span><div className="flex gap-5"><Link href="/terms">Terms & conditions</Link><Link href="/code-of-conduct">Code of conduct</Link></div></div>
  </footer>;
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <><Header />{children}<Footer /></>;
}

export function Countdown() {
  const target = new Date('2026-10-10T09:00:00+05:30').getTime();
  const [time, setTime] = useState(target - Date.now());
  useEffect(() => { const timer = window.setInterval(() => setTime(Math.max(0, target - Date.now())), 1000); return () => window.clearInterval(timer); }, [target]);
  const days = Math.floor(time / 86400000);
  const hours = Math.floor((time % 86400000) / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  return <div className="grid grid-cols-4 gap-2 sm:gap-3" aria-label="Countdown to InnoSprint 2.0">
    {[['Days', days], ['Hours', hours], ['Minutes', minutes], ['Seconds', seconds]].map(([label, value]) => <div key={String(label)} className="count-card"><strong>{String(value).padStart(2, '0')}</strong><span>{label}</span></div>)}
  </div>;
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description: string }) {
  return <section className="page-hero"><div className="container max-w-4xl text-center"><span className="eyebrow">{eyebrow}</span><h1 className="mt-6 text-4xl font-black tracking-[-0.06em] sm:text-6xl">{title}</h1><p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">{description}</p></div></section>;
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: { eyebrow: string; title: string; description?: string; align?: 'left' | 'center' }) {
  return <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}><span className="eyebrow">{eyebrow}</span><h2 className="mt-4 text-3xl font-black tracking-[-0.05em] sm:text-5xl">{title}</h2>{description && <p className="mt-4 text-base leading-7 text-[var(--muted)]">{description}</p>}</div>;
}

export function Pill({ children }: { children: React.ReactNode }) { return <span className="pill">{children}</span>; }
export function CheckList({ items }: { items: string[] }) { return <ul className="grid gap-3">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--muted)]"><span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--green)] text-white"><Check className="h-3 w-3" strokeWidth={3} /></span>{item}</li>)}</ul>; }

export const iconMap = { code: Code2, users: Users, rocket: Rocket, calendar: CalendarDays };

export function AccordionItem({ question, answer }: { question: string; answer: string }) {
  return <details className="group border-b border-[var(--line)] py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold"><span>{question}</span><ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" /></summary><p className="max-w-3xl pt-4 text-sm leading-7 text-[var(--muted)]">{answer}</p></details>;
}
