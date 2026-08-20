"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Send,
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
  Clock,
  ArrowRight,
  MessageSquare,
  HelpCircle,
  Building2,
  CheckCircle2,
  RefreshCw,
  AlertCircle,
  X,
  Zap,
  UserCheck,
  ShieldCheck,
} from "lucide-react";
import { DevfolioArt } from "@/components/DevfolioArt";

const CATEGORIES = [
  "General Inquiry",
  "Sponsorship & Bounties",
  "Team Registration",
  "Mentorship / Judging",
];

const DIRECT_CONTACTS = [
  {
    type: "Official Email",
    value: "help.d4community@gmail.com",
    sub: "Responses within 2–4 hours",
    icon: Mail,
    bg: "bg-[#FDE047]",
    textColor: "text-[#18181B]",
  },
  {
    type: "Helpline Number",
    value: "+91 96936 28301",
    sub: "Live 24/7 during event days",
    icon: Phone,
    bg: "bg-[#FF3B30]",
    textColor: "text-white",
  },
  {
    type: "Event Venue Location",
    value: "CGC University, Punjab",
    sub: "Hackathon Venue (Oct 10–11)",
    icon: MapPin,
    bg: "bg-[#26A192]",
    textColor: "text-white",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "General Inquiry",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registeredAnswer, setRegisteredAnswer] = useState<null | "yes" | "no">(
    null,
  );

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(text);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to send message via mail service.",
        );
      }

      setFormStatus("success");
      setIsModalOpen(true);
    } catch (err: unknown) {
      setFormStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "An unexpected error occurred.",
      );
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      category: "General Inquiry",
      message: "",
    });
    setFormStatus("idle");
    setErrorMessage("");
    setIsModalOpen(false);
    setRegisteredAnswer(null);
  };

  return (
    <div className="relative overflow-hidden min-h-screen bg-[#FAF9F5] text-[#18181B] dark:bg-[#0F0F12] dark:text-zinc-100">
      {/* Devfolio Background Floating Art */}
      <div className="pointer-events-none absolute left-6 top-16 hidden w-28 animate-float xl:block z-20">
        <DevfolioArt.YellowSmileBadge />
      </div>
      <div
        className="pointer-events-none absolute right-8 top-20 hidden w-16 animate-float xl:block z-20"
        style={{ animationDelay: "1.2s" }}
      >
        <DevfolioArt.BlueOrb />
      </div>
      <div
        className="pointer-events-none absolute left-10 top-[520px] hidden w-20 animate-float xl:block z-20"
        style={{ animationDelay: "1.8s" }}
      >
        <DevfolioArt.BlueCrescent />
      </div>
      <div
        className="pointer-events-none absolute right-40 bottom-[420px] hidden w-24 animate-float xl:block z-20"
        style={{ animationDelay: "2.2s" }}
      >
        <DevfolioArt.NewSmileBadge />
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#18181B] bg-white px-4 py-1.5 text-xs font-black shadow-[3px_3px_0px_0px_#18181B] mb-8 dark:border-white dark:bg-zinc-800 dark:shadow-[3px_3px_0px_0px_#FFF]">
          <Sparkles size={14} className="text-[#FF3B30]" />
          24/7 Organizer Support
        </div>

        {/* Hero Title */}
        <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl text-[#18181B] dark:text-white">
          Have Questions?{" "}
          <span className="inline-block bg-[#FF3B30] text-white px-3.5 py-1 rounded-2xl border-2 border-[#18181B] shadow-[4px_4px_0px_0px_#18181B] dark:border-white dark:shadow-[4px_4px_0px_0px_#FFF] -rotate-1 hover:rotate-1">
            Let&apos;s Talk!
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

        <p className="mt-6 text-base font-bold text-zinc-700 dark:text-zinc-300 sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Need help registering your team, understanding open innovation
          guidelines, or sponsoring InnoSprint 2.0? Reach out to the D4
          Community team directly.
        </p>

        {/* Quick Contact Cards */}
        <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
          {DIRECT_CONTACTS.map((item) => {
            const Icon = item.icon;
            const isCopied = copiedItem === item.value;

            return (
              <div
                key={item.type}
                className="flex flex-col justify-between rounded-3xl border-2 border-[#18181B] bg-white p-6 shadow-[5px_5px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:shadow-[5px_5px_0px_0px_#FFF]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-[#18181B] ${item.bg} ${item.textColor} dark:border-white`}
                    >
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-[#18181B] dark:text-white break-words">
                    {item.value}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-zinc-500 dark:text-zinc-400">
                    {item.sub}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                  {item.type === "Event Venue Location" ? (
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-black text-[#FF3B30] hover:underline"
                    >
                      Open Venue Map <ArrowRight size={14} />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleCopy(item.value)}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-[#18181B] bg-zinc-100 px-3 py-1.5 text-xs font-black text-[#18181B] hover:bg-[#FDE047] active:scale-95 transition-all dark:border-white dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
                    >
                      {isCopied ? (
                        <>
                          <Check size={14} className="text-[#26A192]" /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy size={14} /> Copy Details
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Form & Venue Section Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-12 text-left">
          {/* Interactive Form Card */}
          <div className="md:col-span-7 rounded-3xl border-2 border-[#18181B] bg-white p-8 shadow-[8px_8px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:shadow-[8px_8px_0px_0px_#FFF]">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare size={20} className="text-[#FF3B30]" />
              <h2 className="text-2xl font-black text-[#18181B] dark:text-white">
                Send Direct Message
              </h2>
            </div>
            <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mb-6">
              Fill in your details below and our organizing team will get back
              to you shortly.
            </p>

            {formStatus === "success" && !isModalOpen ? (
              <div className="rounded-2xl border-2 border-[#18181B] bg-[#26A192] p-8 text-center text-white dark:border-white">
                <CheckCircle2
                  size={48}
                  className="mx-auto mb-3 text-[#FDE047]"
                />
                <h3 className="text-2xl font-black">
                  Message Sent Successfully!
                </h3>
                <p className="mt-2 text-xs font-bold leading-relaxed text-zinc-100 max-w-md mx-auto">
                  Thank you for reaching out,{" "}
                  <strong className="text-[#FDE047]">{formData.name}</strong>.
                  An organizer from D4 Community will reply to{" "}
                  <strong className="text-[#FDE047]">{formData.email}</strong>{" "}
                  shortly.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-[#18181B] bg-white px-5 py-2.5 text-xs font-black text-[#18181B] shadow-[3px_3px_0px_0px_#18181B] hover:-translate-y-0.5 transition-all dark:border-white"
                >
                  <RefreshCw size={14} /> Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {formStatus === "error" && (
                  <div className="flex items-center gap-2 rounded-xl border-2 border-[#18181B] bg-[#FF3B30] p-3 text-xs font-black text-white dark:border-white">
                    <AlertCircle size={16} /> {errorMessage}
                  </div>
                )}

                {/* Category Selection Chips */}
                <div>
                  <label className="block text-xs font-black uppercase text-zinc-500 dark:text-zinc-400 mb-2">
                    Inquiry Category
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, category: cat })
                        }
                        className={`rounded-xl border-2 px-3 py-1.5 text-xs font-black transition-all ${
                          formData.category === cat
                            ? "border-[#18181B] bg-[#FDE047] text-[#18181B] shadow-[2px_2px_0px_0px_#18181B] dark:border-white"
                            : "border-zinc-200 bg-zinc-50 text-zinc-600 hover:border-[#18181B] dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-black uppercase text-zinc-700 dark:text-zinc-300 mb-1"
                  >
                    Your Full Name <span className="text-[#FF3B30]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Aarav Sharma"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-2xl border-2 border-[#18181B] bg-[#FAF9F5] p-3.5 text-sm font-bold text-[#18181B] outline-none focus:bg-white focus:shadow-[3px_3px_0px_0px_#18181B] transition-all dark:border-white dark:bg-zinc-800 dark:text-white dark:focus:bg-zinc-900"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-black uppercase text-zinc-700 dark:text-zinc-300 mb-1"
                  >
                    Your Email Address <span className="text-[#FF3B30]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="aarav@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-2xl border-2 border-[#18181B] bg-[#FAF9F5] p-3.5 text-sm font-bold text-[#18181B] outline-none focus:bg-white focus:shadow-[3px_3px_0px_0px_#18181B] transition-all dark:border-white dark:bg-zinc-800 dark:text-white dark:focus:bg-zinc-900"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-black uppercase text-zinc-700 dark:text-zinc-300 mb-1"
                  >
                    Your Message <span className="text-[#FF3B30]">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="How can we help your team?"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full rounded-2xl border-2 border-[#18181B] bg-[#FAF9F5] p-3.5 text-sm font-bold text-[#18181B] outline-none focus:bg-white focus:shadow-[3px_3px_0px_0px_#18181B] transition-all dark:border-white dark:bg-zinc-800 dark:text-white dark:focus:bg-zinc-900 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-[#18181B] bg-[#FF3B30] px-6 py-4 text-sm font-black text-white shadow-[4px_4px_0px_0px_#18181B] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 transition-all dark:border-white dark:shadow-[4px_4px_0px_0px_#FFF]"
                >
                  {formStatus === "submitting" ? (
                    <>
                      <RefreshCw size={16} className="animate-spin" />{" "}
                      Dispatching Mail...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Email Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Venue & Event Info Sidebar */}
          <div className="md:col-span-5 space-y-6">
            {/* Venue Location Card */}
            <div className="rounded-3xl border-2 border-[#18181B] bg-[#FDE047] p-7 shadow-[6px_6px_0px_0px_#18181B] text-[#18181B] dark:border-white dark:bg-zinc-900 dark:text-white">
              <span className="rounded-md bg-[#18181B] px-2.5 py-0.5 text-[10px] font-black uppercase text-[#FDE047]">
                Hackathon Event Venue
              </span>
              <h3 className="mt-3 text-2xl font-black">
                CGC University Campus
              </h3>
              <p className="mt-2 text-xs font-bold text-zinc-800 dark:text-zinc-300 leading-relaxed">
                Jhanjeri, Mohali, Sector 112, Greater Mohali, Punjab 140307
              </p>

              <div className="mt-5 space-y-2 text-xs font-black">
                <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                  <Clock size={16} className="text-[#FF3B30]" />
                  <span>On-Site Registration: Oct 10, 09:00 AM</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                  <Building2 size={16} className="text-[#26A192]" />
                  <span>Main Auditorium & Hacking Bays</span>
                </div>
              </div>

              <Link
                href="https://maps.app.goo.gl/3wdWPg8o3wHqCYYz9"
                target="_blank"
                rel="noreferrer"
                data-cursor-text="MAPS 📍"
                className="mt-6 inline-flex items-center gap-2 rounded-2xl border-2 border-[#18181B] bg-white px-5 py-3 text-xs font-black text-[#18181B] shadow-[3px_3px_0px_0px_#18181B] transition-all hover:-translate-y-0.5 dark:border-white dark:bg-zinc-800 dark:text-white"
              >
                <MapPin size={16} className="text-[#FF3B30]" /> Directions to
                Venue
              </Link>
            </div>

            {/* Quick FAQ Link Card */}
            <div className="rounded-3xl border-2 border-[#18181B] bg-white p-7 shadow-[6px_6px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900">
              <div className="flex items-center gap-2 text-[#FF3B30] mb-2">
                <HelpCircle size={20} />
                <h3 className="text-xl font-black text-[#18181B] dark:text-white">
                  Need Immediate Answers?
                </h3>
              </div>
              <p className="text-xs font-bold text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                Check our knowledgebase for details on eligibility, outstation
                accommodation, free food, and team size limits.
              </p>
              <Link
                href="/faq"
                data-cursor-text="FAQS ❓"
                className="inline-flex items-center gap-2 text-xs font-black text-[#FF3B30] hover:underline"
              >
                Read Frequently Asked Questions <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM CTA BANNER */}
        <div className="mt-16 relative overflow-hidden rounded-3xl border-2 border-[#18181B] bg-[#FDE047] p-8 text-center sm:p-12 shadow-[8px_8px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:text-white dark:shadow-[8px_8px_0px_0px_#FFF]">
          {/* Decorative Floating Art */}
          <div className="pointer-events-none absolute left-4 top-4 hidden sm:block w-16 animate-float opacity-80 z-0">
            <DevfolioArt.BlueFin />
          </div>
          <div
            className="pointer-events-none absolute right-4 bottom-4 hidden sm:block w-20 animate-float opacity-80 z-0"
            style={{ animationDelay: "1s" }}
          >
            <DevfolioArt.BeigeStar />
          </div>

          <div className="relative z-10">
            <span className="rounded-lg border-2 border-[#18181B] bg-[#18181B] px-3.5 py-1 text-xs font-black uppercase text-[#FDE047] dark:border-white">
              Sprint With D4 Community
            </span>
            <h2 className="mt-4 text-3xl font-black text-[#18181B] dark:text-white sm:text-5xl">
              Ready to Turn Ideas Into Reality?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base font-bold text-zinc-800 dark:text-zinc-300 leading-relaxed">
              Assemble your team of 2 to 4 hackers and claim your spot for
              October 10th & 11th at CGC University.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/event"
                data-cursor-text="JOIN NOW ⚡"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl border-2 border-[#18181B] bg-[#FF3B30] px-8 py-4 text-base font-black text-white shadow-[4px_4px_0px_0px_#18181B] hover:-translate-y-0.5 transition-all dark:border-white dark:shadow-[4px_4px_0px_0px_#FFF]"
              >
                <Zap size={20} /> Register Your Team Now{" "}
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-black text-[#18181B] dark:text-white">
              {[
                "100% Free Entry",
                "Meals Provided",
                "24/7 Security & Rest Bays",
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-[#FF3B30]" /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS POP-UP MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-3xl border-4 border-[#18181B] bg-white p-6 sm:p-8 text-center shadow-[8px_8px_0px_0px_#18181B] dark:border-white dark:bg-zinc-900 dark:shadow-[8px_8px_0px_0px_#FFF] animate-in fade-in zoom-in duration-200">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 rounded-xl border-2 border-[#18181B] bg-zinc-100 p-1.5 text-[#18181B] hover:bg-[#FF3B30] hover:text-white transition-all dark:border-white dark:bg-zinc-800 dark:text-white"
            >
              <X size={18} />
            </button>

            {/* Modal Icon */}
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[#18181B] bg-[#26A192] text-[#FDE047] shadow-[3px_3px_0px_0px_#18181B] dark:border-white">
              <CheckCircle2 size={36} />
            </div>

            {/* Header */}
            <h3 className="text-2xl font-black text-[#18181B] dark:text-white">
              Message Dispatched!
            </h3>

            {/* Thank You Body */}
            <p className="mt-2 text-xs font-bold text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Thank you,{" "}
              <strong className="text-[#FF3B30]">{formData.name}</strong>! We
              have received your message regarding{" "}
              <strong className="underline">{formData.category}</strong>. Our
              team will email you back at{" "}
              <strong className="text-[#26A192]">{formData.email}</strong>{" "}
              shortly.
            </p>

            {/* Dynamic Content: "General Inquiry" vs Normal */}
            {formData.category === "General Inquiry" ? (
              <div className="mt-6 rounded-2xl border-2 border-[#18181B] bg-[#FDE047] p-5 text-[#18181B] dark:border-white text-left shadow-[3px_3px_0px_0px_#18181B]">
                <p className="text-xs font-black uppercase tracking-wider flex items-center gap-1.5 text-[#FF3B30] mb-1">
                  <Sparkles size={16} /> Quick Question
                </p>
                <p className="text-xs font-bold text-zinc-800 mb-4 leading-snug">
                  Have you registered your team for InnoSprint 2.0 by D4
                  Community yet?
                </p>

                {registeredAnswer === "yes" ? (
                  <div className="rounded-xl border-2 border-[#18181B] bg-white p-3 text-xs font-black text-[#26A192] flex items-center gap-2">
                    <UserCheck size={18} /> Awesome! We look forward to seeing
                    you on Oct 10th! 🚀
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      type="button"
                      onClick={() => setRegisteredAnswer("yes")}
                      className="flex-1 rounded-xl border-2 border-[#18181B] bg-white px-3 py-2.5 text-xs font-black text-[#18181B] shadow-[2px_2px_0px_0px_#18181B] hover:bg-zinc-50 active:translate-y-0.5 transition-all"
                    >
                      Yes, I&apos;m Registered!
                    </button>
                    <Link
                      href="/event"
                      onClick={() => setIsModalOpen(false)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border-2 border-[#18181B] bg-[#FF3B30] px-3 py-2.5 text-xs font-black text-white shadow-[2px_2px_0px_0px_#18181B] hover:-translate-y-0.5 active:translate-y-0 transition-all"
                    >
                      No, Register Now <Zap size={14} />
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full rounded-2xl border-2 border-[#18181B] bg-[#FF3B30] px-6 py-3.5 text-xs font-black text-white shadow-[3px_3px_0px_0px_#18181B] hover:-translate-y-0.5 active:translate-y-0 transition-all dark:border-white dark:shadow-[3px_3px_0px_0px_#FFF]"
                >
                  Done & Back to Page
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
