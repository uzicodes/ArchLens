'use client';

import { useState } from 'react';
import {
  Search,
  GitBranch,
  Zap,
  Bot,
  CircleDot,
  ShieldAlert,
  Compass,
  ArrowRight,
  Sparkles,
  Layers,
  Network,
  Eye,
  ChevronRight,
  Cpu,
  TriangleAlert,
  Users,
  ScanLine,
  Code2,
  MessageSquare,
  ArrowUpRight,
  Terminal,
  Minus,
} from "lucide-react";
import Image from "next/image";
import PrismaticBurst from "@/components/PrismaticBurst";

/* ─────────────────────────────────────────────
   ArchLens — Landing Page
   ───────────────────────────────────────────── */

export default function Home() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const onboardingSteps = [
    {
      n: '01',
      label: 'Authentication Layer',
      description:
        'Start by reviewing NextAuth configuration, JWT session handling, and protected route middleware.',
    },
    {
      n: '02',
      label: 'Database Models',
      description:
        'Understand the core Prisma schema, entity relationships, and database migration history.',
    },
    {
      n: '03',
      label: 'Business Logic',
      description:
        'Dive into the service layer, payment integrations, and reusable backend utilities.',
    },
    {
      n: '04',
      label: 'API Endpoints',
      description:
        'Review the REST controllers and tRPC routers connecting the frontend to our backend.',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 overflow-x-hidden">
      {/* ═══════════════════════════════════════
          NAVIGATION
          ═══════════════════════════════════════ */}
      <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#09090b]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <Image
              src="/hero section logo.png"
              alt="ArchLens Logo"
              width={28}
              height={28}
              className="h-7 w-auto object-contain"
            />
            <span className="font-display text-2xl tracking-wide">
              ARCH-LENS
            </span>
          </a>

          {/* Nav links */}
          <div className="hidden items-center gap-1 md:flex">
            {["Features", "How It Works", "Docs"].map((item) => (
              <a
                key={item}
                href={item === "Docs" ? "#" : `#${item.toLowerCase().replace(/\s/g, "-")}`}
                className="nav-link px-4 py-1.5 text-[13px] text-zinc-500 transition-colors hover:text-[#5BE800]"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Auth */}
          <div className="flex items-center gap-3">
            <button className="hidden cursor-pointer px-3 py-1.5 text-[13px] text-zinc-500 transition-colors hover:text-[#5BE800] sm:inline-flex">
              Sign In
            </button>
            <button className="btn-shimmer cursor-pointer rounded-full border border-zinc-600 bg-transparent px-5 py-1.5 text-[13px] font-medium text-zinc-100 transition-all hover:border-[#5BE800] hover:bg-[#5BE800] hover:text-black hover:shadow-[0_0_20px_rgba(91,232,0,0.2)]">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════
          HERO
          ═══════════════════════════════════════ */}
      <section className="relative z-10 flex flex-col items-center px-5 pt-2 pb-8 sm:px-8 sm:pt-4 md:pt-6">
        {/* Prismatic Burst — ambient hero background */}
        <div className="pointer-events-none absolute inset-0 z-0 h-[700px] sm:h-[800px] md:h-[900px] overflow-hidden transform-gpu" style={{ willChange: "transform", transform: "translateZ(0)" }}>
          <div className="absolute inset-0 opacity-50">
            <PrismaticBurst
              animationType="rotate3d"
              intensity={1.2}
              speed={0.25}
              distort={0.6}
              paused={false}
              offset={{ x: 0, y: 0 }}
              hoverDampness={0.25}
              rayCount={0}
              mixBlendMode="lighten"
              colors={["#A855F7", "#7C3AED", "#6366F1"]}
            />
          </div>
          {/* Bottom fade to black */}
          <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-[#09090b] to-transparent transform-gpu" style={{ transform: "translateZ(0)" }} />
          {/* Top subtle fade */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#09090b] to-transparent transform-gpu" style={{ transform: "translateZ(0)" }} />
        </div>

        {/* Ambient glow orbs */}
        <div className="ambient-glow absolute left-1/4 top-[200px] h-[300px] w-[300px] bg-violet-600/20" />
        <div className="ambient-glow absolute right-1/4 top-[300px] h-[200px] w-[200px] bg-indigo-500/15" style={{ animationDelay: "1.5s" }} />

        {/* Badge — pill shape */}
        <div className="relative z-10 animate-fade-in mb-6 flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-md px-4 py-1.5 text-[12px] tracking-wide text-zinc-400 uppercase shadow-[0_0_20px_rgba(167,139,250,0.06)]">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.5)]" />
          v1.0 — Now Live
        </div>

        {/* Hero Logo */}
        <div
          className="relative z-10 animate-fade-in-up mb-4 flex justify-center"
          style={{ animationDelay: "0.05s" }}
        >
          <Image
            src="/hero section logo.png"
            alt="ArchLens Logo"
            width={120}
            height={120}
            className="h-20 w-auto object-contain sm:h-28 drop-shadow-[0_0_30px_rgba(167,139,250,0.2)]"
            priority
          />
        </div>

        {/* Display Heading — ARCH-LENS */}
        <h1 className="relative z-10 animate-fade-in-up font-display text-center text-[4rem] leading-[1] tracking-normal text-zinc-100 sm:text-[6rem] md:text-[7.5rem] lg:text-[9rem]">
          ARCH-LENS
        </h1>

        {/* Subtitle — #FF4601 color */}
        <p
          className="relative z-10 animate-fade-in-up mt-8 text-center text-lg whitespace-nowrap text-[#FF4601] sm:text-xl md:text-2xl font-medium"
          style={{ animationDelay: "0.1s" }}
        >
          understand any codebase in seconds
        </p>

        {/* Sub-description */}
        <p
          className="relative z-10 animate-fade-in-up mx-auto mt-4 max-w-xl text-center text-[14px] leading-relaxed text-zinc-500 sm:text-[15px]"
          style={{ animationDelay: "0.15s" }}
        >
          Paste a GitHub URL. Get interactive architecture diagrams,
          dependency maps, and AI-driven code explanations — instantly.
        </p>

        {/* CTA Input */}
        <div
          className="relative z-10 animate-fade-in-up mt-16 w-full max-w-lg"
          style={{ animationDelay: "0.25s" }}
        >
          <div className="input-glow flex items-stretch rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md transition-all duration-300">
            <div className="flex flex-1 items-center gap-3 px-5">
              <Code2 className="h-4 w-4 shrink-0 text-zinc-600" />
              <input
                type="text"
                placeholder="github.com/your-org/repo"
                className="min-w-0 flex-1 bg-transparent py-3.5 text-[14px] text-zinc-300 placeholder-zinc-600 outline-none"
                readOnly
              />
            </div>
            <button className="btn-shimmer flex shrink-0 cursor-pointer items-center gap-2 rounded-r-2xl border-l border-white/[0.06] bg-gradient-to-r from-zinc-100 to-white px-6 text-[13px] font-semibold text-zinc-950 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              <Search className="h-3.5 w-3.5" />
              Analyze
            </button>
          </div>
          <p className="mt-3 text-center text-[11px] tracking-wide text-zinc-600 uppercase">
            Works with any public repository · No sign-up required
          </p>
        </div>

        {/* ── Hero Mock UI ── */}
        <div
          className="relative z-10 animate-fade-in-up mt-20 w-full max-w-5xl"
          style={{ animationDelay: "0.35s" }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c0f]/80 backdrop-blur-sm shadow-[0_8px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.03)] transform-gpu" style={{ willChange: "transform", transform: "translateZ(0)" }}>
            {/* Title bar */}
            <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-700/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-700/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-700/80" />
                </div>
                <span className="text-[11px] font-mono text-zinc-600">
                  architecture-view.tsx
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-zinc-600">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
                  4 modules
                </span>
                <span className="text-zinc-800">·</span>
                <span>12 connections</span>
              </div>
            </div>

            {/* Canvas */}
            <div className="relative h-[240px] sm:h-[340px] md:h-[400px]">
              {/* Dot grid */}
              <div className="absolute inset-0 dot-grid opacity-30" />

              {/* Subtle canvas glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.02] via-transparent to-indigo-500/[0.02]" />

              {/* SVG Lines */}
              <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <line x1="20%" y1="28%" x2="50%" y2="22%" stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="1000" strokeDashoffset="1000" className="animate-draw-line" style={{ animationDelay: "0.6s" }} />
                <line x1="50%" y1="22%" x2="75%" y2="45%" stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="1000" strokeDashoffset="1000" className="animate-draw-line" style={{ animationDelay: "0.8s" }} />
                <line x1="20%" y1="28%" x2="35%" y2="70%" stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="1000" strokeDashoffset="1000" className="animate-draw-line" style={{ animationDelay: "1.0s" }} />
                <line x1="35%" y1="70%" x2="75%" y2="45%" stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="1000" strokeDashoffset="1000" className="animate-draw-line" style={{ animationDelay: "1.2s" }} />
              </svg>

              {/* Nodes */}
              <div className="absolute -translate-x-1/2 -translate-y-1/2 animate-node-appear" style={{ left: "20%", top: "28%", animationDelay: "0.4s" }}>
                <div className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-[#121214] px-3.5 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] relative z-20">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-violet-500/20 bg-violet-500/[0.08] icon-glow-violet">
                    <Layers className="h-3.5 w-3.5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-zinc-200">App Entry</p>
                    <p className="text-[11px] font-mono text-zinc-600">layout.tsx</p>
                  </div>
                </div>
              </div>

              <div className="absolute -translate-x-1/2 -translate-y-1/2 animate-node-appear" style={{ left: "50%", top: "22%", animationDelay: "0.5s" }}>
                <div className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-[#121214] px-3.5 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] relative z-20">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/[0.08] icon-glow-emerald">
                    <ShieldAlert className="h-3.5 w-3.5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-zinc-200">Auth Module</p>
                    <p className="text-[11px] font-mono text-zinc-600">middleware.ts</p>
                  </div>
                </div>
              </div>

              <div className="absolute -translate-x-1/2 -translate-y-1/2 animate-node-appear" style={{ left: "75%", top: "45%", animationDelay: "0.6s" }}>
                <div className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-[#121214] px-3.5 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] relative z-20">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-amber-500/20 bg-amber-500/[0.08] icon-glow-amber">
                    <Zap className="h-3.5 w-3.5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-zinc-200">API Routes</p>
                    <p className="text-[11px] font-mono text-zinc-600">route.ts</p>
                  </div>
                </div>
              </div>

              <div className="absolute -translate-x-1/2 -translate-y-1/2 animate-node-appear" style={{ left: "35%", top: "70%", animationDelay: "0.7s" }}>
                <div className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-[#121214] px-3.5 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] relative z-20">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/[0.08] icon-glow-blue">
                    <Cpu className="h-3.5 w-3.5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-zinc-200">Database</p>
                    <p className="text-[11px] font-mono text-zinc-600">prisma/schema</p>
                  </div>
                </div>
              </div>

              {/* AI Card */}
              <div
                className="absolute right-3 bottom-3 w-[240px] animate-fade-in rounded-xl border border-white/[0.08] bg-[#0c0c0f]/90 backdrop-blur-md p-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] sm:right-5 sm:bottom-5 sm:w-[300px]"
                style={{ animationDelay: "1.4s" }}
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-md border border-violet-500/20 bg-violet-500/[0.08]">
                    <Bot className="h-3 w-3 text-violet-400" />
                  </div>
                  <span className="font-display text-[11px] tracking-wider text-zinc-400 uppercase">
                    ARCH-LENS AI
                  </span>
                  <span className="ml-auto flex items-center gap-1 text-[10px] text-emerald-500">
                    <span className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_4px_rgba(16,185,129,0.6)]" />
                    Live
                  </span>
                </div>
                <p className="text-[12px] leading-relaxed text-zinc-400 sm:text-[13px]">
                  This app follows a{" "}
                  <span className="text-zinc-200">layered Next.js architecture</span>.
                  The <span className="text-zinc-200">Auth module</span> acts
                  as a central dependency for all protected routes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURES — Bento Grid
          ═══════════════════════════════════════ */}
      <section id="features" className="relative z-10 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-14">
            <p className="mb-3 flex items-center gap-2 text-[12px] font-medium tracking-widest text-violet-400 uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              Features
            </p>
            <h2 className="max-w-md text-3xl font-bold tracking-tight sm:text-4xl">
              Everything to understand code at scale
            </h2>
          </div>

          {/* Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
            {/* F1 — AI Architecture (large, spans 2 cols + 2 rows) */}
            <div className="card-hover glow-border group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:bg-[#5BE800]/[0.05] sm:p-8 lg:col-span-2 lg:row-span-2">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/[0.08] icon-glow-violet">
                <Bot className="h-4.5 w-4.5 text-violet-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold tracking-tight">
                AI Architecture Explanation
              </h3>
              <p className="mb-6 max-w-md text-[14px] leading-relaxed text-zinc-500">
                Context-aware explanations of your entire codebase.
                Design patterns, data flows, and system boundaries — in natural language.
              </p>

              {/* Mock conversation */}
              <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-[#0c0c0f]/60 backdrop-blur-sm">
                <div className="border-b border-white/[0.06] px-4 py-2.5 text-[11px] font-mono text-zinc-600">
                  archlens-ai / conversation
                </div>
                <div className="space-y-0 divide-y divide-white/[0.04]">
                  <div className="flex items-start gap-3 p-4">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-violet-500/20 bg-violet-500/[0.06]">
                      <Bot className="h-3 w-3 text-violet-400" />
                    </div>
                    <p className="text-[13px] leading-relaxed text-zinc-400">
                      The project uses a <span className="text-zinc-200">monorepo pattern</span> with <span className="text-zinc-200">shared packages</span>. The API layer is decoupled through a tRPC router, enabling type-safe communication.
                    </p>
                  </div>
                  <div className="flex items-start gap-3 p-4">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-white/[0.06] bg-white/[0.03]">
                      <Users className="h-3 w-3 text-zinc-500" />
                    </div>
                    <p className="text-[13px] text-zinc-500">
                      How does authentication flow through the app?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* F2 — Circular Dependency Detection */}
            <div className="card-hover glow-border group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:bg-[#5BE800]/[0.05] sm:p-8">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/[0.08] icon-glow-red">
                <CircleDot className="h-4 w-4 text-red-400" />
              </div>
              <h3 className="mb-2 text-base font-semibold tracking-tight">
                Circular Dependency Detection
              </h3>
              <p className="mb-5 text-[13px] leading-relaxed text-zinc-500">
                Detect circular imports that silently degrade build times and runtime performance.
              </p>

              {/* Mock cycle */}
              <div className="flex items-center gap-1.5 font-mono text-[11px]">
                <span className="rounded-lg border border-red-900/50 bg-red-950/30 px-2 py-1 text-red-400">
                  utils.ts
                </span>
                <ArrowRight className="h-3 w-3 text-zinc-700" />
                <span className="rounded-lg border border-red-900/50 bg-red-950/30 px-2 py-1 text-red-400">
                  helpers.ts
                </span>
                <ArrowRight className="h-3 w-3 text-zinc-700" />
                <span className="rounded-lg border border-red-900/50 bg-red-950/30 px-2 py-1 text-red-400">
                  utils.ts
                </span>
              </div>
            </div>

            {/* F3 — Technical Debt Scanner */}
            <div className="card-hover glow-border group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:bg-[#5BE800]/[0.05] sm:p-8">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/[0.08] icon-glow-amber">
                <TriangleAlert className="h-4 w-4 text-amber-400" />
              </div>
              <h3 className="mb-2 text-base font-semibold tracking-tight">
                Technical Debt Scanner
              </h3>
              <p className="mb-5 text-[13px] leading-relaxed text-zinc-500">
                Quantify and prioritize technical debt with AI-driven risk scoring.
              </p>

              {/* Mock metric */}
              <div className="rounded-xl border border-white/[0.06] bg-[#0c0c0f]/60 p-3.5">
                <div className="mb-2 flex items-baseline justify-between text-[13px]">
                  <span className="text-zinc-500">Risk Score</span>
                  <span className="font-mono font-semibold text-amber-400">72<span className="text-zinc-600">/100</span></span>
                </div>
                <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                  <div className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-400" style={{ width: "72%" }} />
                </div>
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono">
                  <span className="rounded-md border border-white/[0.06] bg-white/[0.03] px-1.5 py-0.5 text-zinc-400">
                    3 god classes
                  </span>
                  <span className="rounded-md border border-white/[0.06] bg-white/[0.03] px-1.5 py-0.5 text-zinc-400">
                    12 long methods
                  </span>
                  <span className="rounded-md border border-white/[0.06] bg-white/[0.03] px-1.5 py-0.5 text-zinc-400">
                    5 dead exports
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* F4 — Onboarding (full width below grid) */}
          <div className="card-hover glow-border group mt-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:bg-[#5BE800]/[0.05] sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-md">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/[0.08] icon-glow-emerald">
                  <Compass className="h-4 w-4 text-emerald-400" />
                </div>
                <h3 className="mb-2 text-base font-semibold tracking-tight sm:text-lg">
                  New Developer Onboarding
                </h3>
                <p className="text-[13px] leading-relaxed text-zinc-500 sm:text-[14px] transition-all duration-300">
                  {activeStep !== null
                    ? onboardingSteps[activeStep].description
                    : 'Generate a guided \u201CStart Here\u201D path. New team members understand architecture in minutes, not weeks.'}
                </p>
              </div>

              {/* Onboarding steps */}
              <div className="grid grid-cols-2 gap-2.5">
                {onboardingSteps.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(activeStep === i ? null : i)}
                    className={`flex cursor-pointer items-center gap-2.5 rounded-xl border px-4 py-2.5 transition-all duration-200 ${
                      activeStep === i
                        ? 'border-indigo-500/40 bg-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.15)]'
                        : 'border-white/[0.06] bg-slate-900/50 hover:border-white/[0.12] hover:bg-slate-900/70'
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400 shadow-[0_0_6px_rgba(129,140,248,0.6)] transition-opacity duration-200 ${activeStep === i ? 'opacity-100 animate-pulse' : 'opacity-0'}`} />
                    <span
                      className={`font-mono text-[11px] ${
                        activeStep === i ? 'text-indigo-300' : 'text-zinc-600'
                      }`}
                    >
                      {s.n}
                    </span>
                    <span
                      className={`text-[13px] whitespace-nowrap ${
                        activeStep === i ? 'text-zinc-100 font-medium' : 'text-slate-300'
                      }`}
                    >
                      {s.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HOW IT WORKS
          ═══════════════════════════════════════ */}
      <section id="how-it-works" className="relative z-10 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-14">
            <p className="mb-3 flex items-center gap-2 text-[12px] font-medium tracking-widest text-emerald-400 uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              How It Works
            </p>
            <h2 className="max-w-sm text-3xl font-bold tracking-tight sm:text-4xl">
              Three steps to clarity
            </h2>
          </div>

          {/* Steps */}
          <div className="stagger grid gap-4 md:grid-cols-3">
            {[
              {
                icon: <GitBranch className="h-4.5 w-4.5 text-zinc-300" />,
                step: "01",
                title: "Ingest",
                desc: "Connect any GitHub repository. We clone and index your entire codebase securely in seconds.",
                glowClass: "",
              },
              {
                icon: <Terminal className="h-4.5 w-4.5 text-zinc-300" />,
                step: "02",
                title: "Analyze",
                desc: "AI parses AST structures, maps dependency graphs, and identifies architectural patterns automatically.",
                glowClass: "",
              },
              {
                icon: <Network className="h-4.5 w-4.5 text-zinc-300" />,
                step: "03",
                title: "Discover",
                desc: "Explore an interactive canvas with architecture diagrams, AI explanations, and collaboration tools.",
                glowClass: "",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="card-hover glow-border group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all hover:bg-[#5BE800]/[0.05]"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] transition-colors group-hover:border-white/[0.12] group-hover:bg-white/[0.06]">
                    {item.icon}
                  </div>
                  <span className="rounded-full bg-white/[0.04] px-2.5 py-0.5 font-mono text-[12px] text-zinc-600">
                    {item.step}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-zinc-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA
          ═══════════════════════════════════════ */}
      <section className="relative z-10 px-5 py-20 sm:px-8 sm:py-28">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0c0c0f]/80 p-10 sm:p-16">
          {/* Background glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute left-1/2 top-1/2 h-full w-full min-h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5BE800]/10 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-lg text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to understand your codebase?
            </h2>
            <p className="mb-8 text-[14px] text-zinc-500">
              Join teams who ship faster by understanding architecture first.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button className="btn-shimmer w-full cursor-pointer rounded-xl bg-gradient-to-r from-[#5BE800] to-emerald-500 px-7 py-3 text-[13px] font-semibold text-zinc-950 transition-all hover:shadow-[0_0_30px_rgba(91,232,0,0.3)] hover:brightness-110 sm:w-auto">
                Get Started — Free
              </button>
              <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-7 py-3 text-[13px] font-medium text-zinc-400 backdrop-blur-sm transition-all hover:border-white/[0.15] hover:bg-white/[0.05] hover:text-zinc-200 sm:w-auto">
                <Code2 className="h-3.5 w-3.5" />
                View on GitHub
                <ArrowUpRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════ */}
      <footer className="relative z-10">
        {/* Gradient line separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" />

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-8 sm:flex-row sm:px-8">
          <div className="flex items-center gap-2.5">
            <Image
              src="/hero section logo.png"
              alt="ArchLens Logo"
              width={24}
              height={24}
              className="h-6 w-auto object-contain opacity-75"
            />
            <span className="font-display text-xl tracking-wider text-zinc-400">ARCH-LENS</span>
          </div>

          <div className="flex items-center gap-5 text-[12px] text-zinc-600">
            <a href="#" className="rounded-md px-2 py-1 transition-colors hover:text-[#5BE800] hover:bg-white/[0.03]">Docs</a>
            <a href="#" className="rounded-md px-2 py-1 transition-colors hover:text-[#5BE800] hover:bg-white/[0.03]">Blog</a>
            <a href="#" className="rounded-md px-2 py-1 transition-colors hover:text-[#5BE800] hover:bg-white/[0.03]">Changelog</a>
            <a href="#" className="rounded-md px-2 py-1 transition-colors hover:text-[#5BE800] hover:bg-white/[0.03]">Privacy</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" className="rounded-lg p-2 text-zinc-600 transition-all hover:text-[#5BE800] hover:bg-white/[0.03]" aria-label="GitHub">
              <Code2 className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-lg p-2 text-zinc-600 transition-all hover:text-[#5BE800] hover:bg-white/[0.03]" aria-label="Community">
              <MessageSquare className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="border-t border-white/[0.04] pt-4 pb-8 sm:pb-12 text-center text-[11px] text-zinc-700">
          &copy; {new Date().getFullYear()} <span className="font-display tracking-wider">ARCH-LENS</span>. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
