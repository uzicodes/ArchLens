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
  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 overflow-x-hidden">
      {/* ═══════════════════════════════════════
          NAVIGATION
          ═══════════════════════════════════════ */}
      <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-[#09090b]/90 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center border border-zinc-700 bg-zinc-900">
              <Network className="h-3.5 w-3.5 text-violet-400" />
            </div>
            <span className="font-display text-sm tracking-wide">
              ARCH-LENS
            </span>
          </a>

          {/* Nav links */}
          <div className="hidden items-center gap-0 md:flex">
            {["Features", "How It Works", "Docs"].map((item) => (
              <a
                key={item}
                href={item === "Docs" ? "#" : `#${item.toLowerCase().replace(/\s/g, "-")}`}
                className="px-4 py-1.5 text-[13px] text-zinc-500 transition-colors hover:text-zinc-100"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Auth */}
          <div className="flex items-center gap-2">
            <button className="hidden cursor-pointer px-3 py-1.5 text-[13px] text-zinc-500 transition-colors hover:text-zinc-100 sm:inline-flex">
              Sign In
            </button>
            <button className="cursor-pointer border border-zinc-100 bg-zinc-100 px-4 py-1.5 text-[13px] font-medium text-zinc-950 transition-all hover:bg-transparent hover:text-zinc-100">
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
        <div className="pointer-events-none absolute inset-0 z-0 h-[700px] sm:h-[800px] md:h-[900px] overflow-hidden">
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
          <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-[#09090b] to-transparent" />
          {/* Top subtle fade */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#09090b] to-transparent" />
        </div>

        {/* Badge — close to navbar */}
        <div className="relative z-10 animate-fade-in mb-6 flex items-center gap-2 border border-zinc-800 bg-[#09090b]/60 backdrop-blur-sm px-3 py-1 text-[12px] tracking-wide text-zinc-500 uppercase">
          <span className="h-1.5 w-1.5 bg-green-400" />
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
            className="h-20 w-auto object-contain sm:h-28"
            priority
          />
        </div>

        {/* Display Heading — ARCH-LENS */}
        <h1 className="relative z-10 animate-fade-in-up font-display text-center text-[4rem] leading-[1] tracking-normal text-zinc-100 sm:text-[6rem] md:text-[7.5rem] lg:text-[9rem]">
          ARCH-LENS
        </h1>

        {/* Subtitle — fully white, one line */}
        <p
          className="relative z-10 animate-fade-in-up mt-8 text-center text-lg whitespace-nowrap text-white sm:text-xl md:text-2xl"
          style={{ animationDelay: "0.1s" }}
        >
          Understand any codebase in seconds
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
          <div className="flex items-stretch border border-zinc-800 transition-colors focus-within:border-zinc-600">
            <div className="flex flex-1 items-center gap-3 px-4">
              <Code2 className="h-4 w-4 shrink-0 text-zinc-600" />
              <input
                type="text"
                placeholder="github.com/your-org/repo"
                className="min-w-0 flex-1 bg-transparent py-3 text-[14px] text-zinc-300 placeholder-zinc-600 outline-none"
                readOnly
              />
            </div>
            <button className="flex shrink-0 cursor-pointer items-center gap-2 border-l border-zinc-800 bg-zinc-100 px-5 text-[13px] font-semibold text-zinc-950 transition-colors hover:bg-white">
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
          className="relative z-10 animate-fade-in-up mt-48 w-full max-w-5xl"
          style={{ animationDelay: "0.35s" }}
        >
          <div className="relative overflow-hidden border border-zinc-800 bg-[#0c0c0f]">
            {/* Title bar */}
            <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2.5">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                </div>
                <span className="text-[11px] font-mono text-zinc-600">
                  architecture-view.tsx
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-zinc-600">
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 bg-emerald-500" />
                  4 modules
                </span>
                <span className="text-zinc-800">·</span>
                <span>12 connections</span>
              </div>
            </div>

            {/* Canvas */}
            <div className="relative h-[240px] sm:h-[340px] md:h-[400px]">
              {/* Dot grid */}
              <div className="absolute inset-0 dot-grid opacity-40" />

              {/* SVG Lines */}
              <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <line x1="22%" y1="32%" x2="50%" y2="28%" stroke="#3f3f46" strokeWidth="1" strokeDasharray="200" className="animate-draw-line" style={{ animationDelay: "0.6s" }} />
                <line x1="52%" y1="35%" x2="76%" y2="52%" stroke="#3f3f46" strokeWidth="1" strokeDasharray="200" className="animate-draw-line" style={{ animationDelay: "0.8s" }} />
                <line x1="22%" y1="40%" x2="36%" y2="72%" stroke="#3f3f46" strokeWidth="1" strokeDasharray="200" className="animate-draw-line" style={{ animationDelay: "1.0s" }} />
                <line x1="76%" y1="58%" x2="44%" y2="74%" stroke="#3f3f46" strokeWidth="1" strokeDasharray="200" className="animate-draw-line" style={{ animationDelay: "1.2s" }} />
              </svg>

              {/* Nodes */}
              <div className="absolute left-[8%] top-[18%] animate-node-appear" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center gap-2.5 border border-zinc-800 bg-[#0f0f12] px-3.5 py-2.5">
                  <div className="flex h-7 w-7 items-center justify-center border border-zinc-800 bg-zinc-900">
                    <Layers className="h-3.5 w-3.5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-zinc-200">App Entry</p>
                    <p className="text-[11px] font-mono text-zinc-600">layout.tsx</p>
                  </div>
                </div>
              </div>

              <div className="absolute left-[38%] top-[14%] animate-node-appear sm:left-[42%]" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-2.5 border border-zinc-800 bg-[#0f0f12] px-3.5 py-2.5">
                  <div className="flex h-7 w-7 items-center justify-center border border-zinc-800 bg-zinc-900">
                    <ShieldAlert className="h-3.5 w-3.5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-zinc-200">Auth Module</p>
                    <p className="text-[11px] font-mono text-zinc-600">middleware.ts</p>
                  </div>
                </div>
              </div>

              <div className="absolute right-[8%] top-[40%] animate-node-appear sm:right-[14%]" style={{ animationDelay: "0.6s" }}>
                <div className="flex items-center gap-2.5 border border-zinc-800 bg-[#0f0f12] px-3.5 py-2.5">
                  <div className="flex h-7 w-7 items-center justify-center border border-zinc-800 bg-zinc-900">
                    <Zap className="h-3.5 w-3.5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-zinc-200">API Routes</p>
                    <p className="text-[11px] font-mono text-zinc-600">route.ts</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[12%] left-[26%] animate-node-appear sm:left-[30%]" style={{ animationDelay: "0.7s" }}>
                <div className="flex items-center gap-2.5 border border-zinc-800 bg-[#0f0f12] px-3.5 py-2.5">
                  <div className="flex h-7 w-7 items-center justify-center border border-zinc-800 bg-zinc-900">
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
                className="absolute right-3 bottom-3 w-[240px] animate-fade-in border border-zinc-800 bg-[#0c0c0f] p-4 sm:right-5 sm:bottom-5 sm:w-[300px]"
                style={{ animationDelay: "1.4s" }}
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center border border-zinc-800 bg-zinc-900">
                    <Bot className="h-3 w-3 text-violet-400" />
                  </div>
                  <span className="font-display text-[11px] tracking-wider text-zinc-400 uppercase">
                    ARCH-LENS AI
                  </span>
                  <span className="ml-auto flex items-center gap-1 text-[10px] text-emerald-500">
                    <span className="h-1 w-1 bg-emerald-500 animate-pulse" />
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
            <p className="mb-3 text-[12px] font-medium tracking-widest text-violet-400 uppercase">
              Features
            </p>
            <h2 className="max-w-md text-3xl font-bold tracking-tight sm:text-4xl">
              Everything to understand code at scale
            </h2>
          </div>

          {/* Grid */}
          <div className="grid gap-px bg-zinc-800 border border-zinc-800 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
            {/* F1 — AI Architecture (large, spans 2 cols + 2 rows) */}
            <div className="group bg-[#09090b] p-6 transition-colors hover:bg-[#0f0f12] sm:p-8 lg:col-span-2 lg:row-span-2">
              <div className="mb-5 flex h-9 w-9 items-center justify-center border border-zinc-800 bg-zinc-900">
                <Bot className="h-4 w-4 text-violet-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold tracking-tight">
                AI Architecture Explanation
              </h3>
              <p className="mb-6 max-w-md text-[14px] leading-relaxed text-zinc-500">
                Context-aware explanations of your entire codebase.
                Design patterns, data flows, and system boundaries — in natural language.
              </p>

              {/* Mock conversation */}
              <div className="border border-zinc-800 bg-[#0c0c0f]">
                <div className="border-b border-zinc-800 px-4 py-2 text-[11px] font-mono text-zinc-600">
                  archlens-ai / conversation
                </div>
                <div className="space-y-0 divide-y divide-zinc-800/50">
                  <div className="flex items-start gap-3 p-4">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-zinc-800 bg-zinc-900">
                      <Bot className="h-3 w-3 text-violet-400" />
                    </div>
                    <p className="text-[13px] leading-relaxed text-zinc-400">
                      The project uses a <span className="text-zinc-200">monorepo pattern</span> with <span className="text-zinc-200">shared packages</span>. The API layer is decoupled through a tRPC router, enabling type-safe communication.
                    </p>
                  </div>
                  <div className="flex items-start gap-3 p-4">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-zinc-800 bg-zinc-900">
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
            <div className="group bg-[#09090b] p-6 transition-colors hover:bg-[#0f0f12] sm:p-8">
              <div className="mb-5 flex h-9 w-9 items-center justify-center border border-zinc-800 bg-zinc-900">
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
                <span className="border border-red-900/50 bg-red-950/30 px-2 py-1 text-red-400">
                  utils.ts
                </span>
                <ArrowRight className="h-3 w-3 text-zinc-700" />
                <span className="border border-red-900/50 bg-red-950/30 px-2 py-1 text-red-400">
                  helpers.ts
                </span>
                <ArrowRight className="h-3 w-3 text-zinc-700" />
                <span className="border border-red-900/50 bg-red-950/30 px-2 py-1 text-red-400">
                  utils.ts
                </span>
              </div>
            </div>

            {/* F3 — Technical Debt Scanner */}
            <div className="group bg-[#09090b] p-6 transition-colors hover:bg-[#0f0f12] sm:p-8">
              <div className="mb-5 flex h-9 w-9 items-center justify-center border border-zinc-800 bg-zinc-900">
                <TriangleAlert className="h-4 w-4 text-amber-400" />
              </div>
              <h3 className="mb-2 text-base font-semibold tracking-tight">
                Technical Debt Scanner
              </h3>
              <p className="mb-5 text-[13px] leading-relaxed text-zinc-500">
                Quantify and prioritize technical debt with AI-driven risk scoring.
              </p>

              {/* Mock metric */}
              <div className="border border-zinc-800 bg-[#0c0c0f] p-3.5">
                <div className="mb-2 flex items-baseline justify-between text-[13px]">
                  <span className="text-zinc-500">Risk Score</span>
                  <span className="font-mono font-semibold text-amber-400">72<span className="text-zinc-600">/100</span></span>
                </div>
                <div className="mb-3 h-1.5 w-full bg-zinc-800">
                  <div className="h-full bg-amber-500" style={{ width: "72%" }} />
                </div>
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono">
                  <span className="border border-zinc-800 bg-zinc-900 px-1.5 py-0.5 text-zinc-400">
                    3 god classes
                  </span>
                  <span className="border border-zinc-800 bg-zinc-900 px-1.5 py-0.5 text-zinc-400">
                    12 long methods
                  </span>
                  <span className="border border-zinc-800 bg-zinc-900 px-1.5 py-0.5 text-zinc-400">
                    5 dead exports
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* F4 — Onboarding (full width below grid) */}
          <div className="group mt-px border border-zinc-800 bg-[#09090b] p-6 transition-colors hover:bg-[#0f0f12] sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-md">
                <div className="mb-5 flex h-9 w-9 items-center justify-center border border-zinc-800 bg-zinc-900">
                  <Compass className="h-4 w-4 text-emerald-400" />
                </div>
                <h3 className="mb-2 text-base font-semibold tracking-tight sm:text-lg">
                  New Developer Onboarding
                </h3>
                <p className="text-[13px] leading-relaxed text-zinc-500 sm:text-[14px]">
                  Generate a guided &ldquo;Start Here&rdquo; path. New team members understand
                  architecture in minutes, not weeks.
                </p>
              </div>

              {/* Onboarding steps */}
              <div className="flex items-center gap-0 overflow-x-auto">
                {[
                  { n: "01", label: "Structure", active: true },
                  { n: "02", label: "Modules", active: false },
                  { n: "03", label: "Data Flow", active: false },
                  { n: "04", label: "Start Coding", active: false },
                ].map((s, i) => (
                  <div key={i} className="flex shrink-0 items-center">
                    <div className={`flex items-center gap-2.5 border px-4 py-2.5 ${s.active ? "border-violet-500/40 bg-violet-500/[0.06]" : "border-zinc-800 bg-[#0c0c0f]"}`}>
                      <span className={`font-mono text-[11px] ${s.active ? "text-violet-400" : "text-zinc-600"}`}>
                        {s.n}
                      </span>
                      <span className={`text-[13px] whitespace-nowrap ${s.active ? "text-zinc-200" : "text-zinc-500"}`}>
                        {s.label}
                      </span>
                    </div>
                    {i < 3 && (
                      <Minus className="h-4 w-6 shrink-0 text-zinc-800" />
                    )}
                  </div>
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
            <p className="mb-3 text-[12px] font-medium tracking-widest text-emerald-400 uppercase">
              How It Works
            </p>
            <h2 className="max-w-sm text-3xl font-bold tracking-tight sm:text-4xl">
              Three steps to clarity
            </h2>
          </div>

          {/* Steps */}
          <div className="stagger grid gap-px bg-zinc-800 border border-zinc-800 md:grid-cols-3">
            {[
              {
                icon: <GitBranch className="h-4 w-4 text-zinc-300" />,
                step: "01",
                title: "Ingest",
                desc: "Connect any GitHub repository. We clone and index your entire codebase securely in seconds.",
              },
              {
                icon: <Terminal className="h-4 w-4 text-zinc-300" />,
                step: "02",
                title: "Analyze",
                desc: "AI parses AST structures, maps dependency graphs, and identifies architectural patterns automatically.",
              },
              {
                icon: <Network className="h-4 w-4 text-zinc-300" />,
                step: "03",
                title: "Discover",
                desc: "Explore an interactive canvas with architecture diagrams, AI explanations, and collaboration tools.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-[#09090b] p-8 transition-colors hover:bg-[#0f0f12]"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center border border-zinc-800 bg-zinc-900 transition-colors group-hover:border-zinc-700">
                    {item.icon}
                  </div>
                  <span className="font-mono text-[12px] text-zinc-700">
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
        <div className="mx-auto max-w-6xl border border-zinc-800 bg-[#0c0c0f] p-10 sm:p-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to understand your codebase?
            </h2>
            <p className="mb-8 text-[14px] text-zinc-500">
              Join teams who ship faster by understanding architecture first.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button className="w-full cursor-pointer bg-zinc-100 px-6 py-2.5 text-[13px] font-semibold text-zinc-950 transition-colors hover:bg-white sm:w-auto">
                Get Started — Free
              </button>
              <button className="flex w-full cursor-pointer items-center justify-center gap-2 border border-zinc-800 px-6 py-2.5 text-[13px] font-medium text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-200 sm:w-auto">
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
      <footer className="relative z-10 border-t border-zinc-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-8 sm:flex-row sm:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center border border-zinc-800 bg-zinc-900">
              <Network className="h-3 w-3 text-violet-400" />
            </div>
            <span className="font-display text-[13px] tracking-wider text-zinc-500">ARCH-LENS</span>
          </div>

          <div className="flex items-center gap-5 text-[12px] text-zinc-600">
            <a href="#" className="transition-colors hover:text-zinc-300">Docs</a>
            <a href="#" className="transition-colors hover:text-zinc-300">Blog</a>
            <a href="#" className="transition-colors hover:text-zinc-300">Changelog</a>
            <a href="#" className="transition-colors hover:text-zinc-300">Privacy</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" className="text-zinc-600 transition-colors hover:text-zinc-300" aria-label="GitHub">
              <Code2 className="h-4 w-4" />
            </a>
            <a href="#" className="text-zinc-600 transition-colors hover:text-zinc-300" aria-label="Community">
              <MessageSquare className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="border-t border-zinc-900 py-4 text-center text-[11px] text-zinc-700">
          &copy; {new Date().getFullYear()} <span className="font-display tracking-wider">ARCH-LENS</span>. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
