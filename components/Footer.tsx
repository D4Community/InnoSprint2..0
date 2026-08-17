import Link from 'next/link';
import { Rocket, MapPin, CalendarDays, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t-2 border-brand-dark bg-brand-dark py-12 text-white dark:border-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="flex h-9 items-center justify-center rounded-xl border-2 border-white bg-brand-red px-3 shadow-brutal-white">
                <Rocket size={16} className="text-white mr-1" />
                <span className="font-black text-white text-xs tracking-wider">INNO 2.0</span>
              </div>
            </Link>
            <p className="text-xs font-bold leading-relaxed text-zinc-400">
              National 24-hour hackathon by D4 Community. Hosted at CGC University campus on October 10th &amp; 11th, 2026.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-black uppercase tracking-wider text-brand-yellow mb-3">Navigation</p>
            <ul className="space-y-2 text-xs font-bold text-zinc-300">
              <li><Link href="/about" className="hover:text-brand-red">About Us</Link></li>
              <li><Link href="/event" className="hover:text-brand-red">Schedule</Link></li>
              <li><Link href="/team" className="hover:text-brand-red">Organizing Team</Link></li>
              <li><Link href="/mentors" className="hover:text-brand-red">Mentors &amp; Judges</Link></li>
            </ul>
          </div>

          {/* Ecosystem */}
          <div>
            <p className="text-xs font-black uppercase tracking-wider text-brand-yellow mb-3">Ecosystem</p>
            <ul className="space-y-2 text-xs font-bold text-zinc-300">
              <li><Link href="/sponsors" className="hover:text-brand-red">Sponsors</Link></li>
              <li><Link href="/community-partners" className="hover:text-brand-red">Community Partners</Link></li>
              <li><Link href="/code-of-conduct" className="hover:text-brand-red">Code of Conduct</Link></li>
              <li><Link href="/terms" className="hover:text-brand-red">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          {/* Venue & Date */}
          <div>
            <p className="text-xs font-black uppercase tracking-wider text-brand-yellow mb-3">Venue &amp; Date</p>
            <div className="space-y-2 text-xs font-bold text-zinc-300 leading-relaxed">
              <p className="flex items-start gap-1.5">
                <CalendarDays size={14} className="text-brand-red shrink-0 mt-0.5" /> 24 Hours: Oct 10–11, 2026
              </p>
              <p className="flex items-start gap-1.5">
                <MapPin size={14} className="text-brand-red shrink-0 mt-0.5" /> CGC University, Greater Mohali, Punjab
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-800 pt-6 flex flex-col items-center justify-between gap-3 sm:flex-row text-xs font-bold text-zinc-400">
          <p>© 2026 D4 Community. Built with <Heart size={12} className="inline text-brand-red fill-brand-red" /> for innovators.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/code-of-conduct" className="hover:text-white">Conduct</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}