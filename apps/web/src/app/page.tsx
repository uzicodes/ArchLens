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
} from "lucide-react";

/* ─────────────────────────────────────────────
   ArchLens Landing Page
   AI-Powered Software Architecture Discovery
   ───────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden">
      {/* ── Ambient background glow ── */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-indigo-600/[0.07] blur-[128px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[700px] rounded-full bg-emerald-600/[0.05] blur-[128px]" />
      </div>

      {/* ═══════════════════════════════════════
          NAVIGATION BAR
          ═══════════════════════════════════════ */}
      <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#030712]/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-emerald-500 shadow-[0_0_20px_-3px_rgba(99,102,241,0.4)]">
              <Network className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight">
              Arch<span className="text-indigo-400">Lens</span>
            </span>
          </a>

          {/* Nav links (desktop) */}
          <div className="hidden items-center gap-1 md:flex">
            <a href="#features" className="rounded-lg px-3.5 py-2 text-sm text-slate-400 transition-colors hover:text-white">
              Features
            </a>
            <a href="#how-it-works" className="rounded-lg px-3.5 py-2 text-sm text-slate-400 transition-colors hover:text-white">
              How It Works
            </a>
            <a href="#" className="rounded-lg px-3.5 py-2 text-sm text-slate-400 transition-colors hover:text-white">
              Docs
            </a>
          </div>

          {/* Auth buttons */}
          <div className="flex items-center gap-3">
            <button className="hidden cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white sm:inline-flex">
              Sign In
            </button>
            <button className="cursor-pointer rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_24px_-4px_rgba(99,102,241,0.5)] transition-all hover:bg-indigo-500 hover:shadow-[0_0_32px_-4px_rgba(99,102,241,0.6)]">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════ */}
      <section className="relative z-10 flex flex-col items-center px-5 pt-24 pb-10 sm:px-8 sm:pt-32 md:pt-40">
        {/* Badge */}
        <div className="animate-fade-in mb-8 flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/[0.08] px-4 py-1.5 text-sm text-indigo-300">
          <Sparkles className="h-3.5 w-3.5" />
          <span>ArchLens v1.0 is now live</span>
          <ChevronRight className="h-3.5 w-3.5 text-indigo-400" />
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up max-w-3xl text-center text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Understand{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
            Any Codebase
          </span>{" "}
          in Seconds.
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-slate-400 sm:text-lg" style={{ animationDelay: "0.15s" }}>
          Paste a GitHub URL. Automatically generate interactive architecture diagrams,
          map dependencies, and get AI-driven code explanations.
        </p>

        {/* CTA: URL input */}
        <div className="animate-fade-in-up mt-10 w-full max-w-xl" style={{ animationDelay: "0.3s" }}>
          <div className="group flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-2 shadow-[0_0_40px_-8px_rgba(99,102,241,0.15)] backdrop-blur-md transition-all focus-within:border-indigo-500/30 focus-within:shadow-[0_0_50px_-8px_rgba(99,102,241,0.3)]">
            <div className="flex flex-1 items-center gap-3 px-3">
              <Code2 className="h-5 w-5 shrink-0 text-slate-500" />
              <input
                type="text"
                placeholder="https://github.com/your-org/your-repo"
                className="min-w-0 flex-1 bg-transparent py-2.5 text-sm text-slate-200 placeholder-slate-500 outline-none sm:text-base"
                readOnly
              />
            </div>
            <button className="flex shrink-0 cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_-4px_rgba(99,102,241,0.5)] transition-all hover:from-indigo-500 hover:to-indigo-400 hover:shadow-[0_0_32px_-4px_rgba(99,102,241,0.65)] sm:px-6 sm:py-3 sm:text-base">
              <Search className="h-4 w-4" />
              Analyze
            </button>
          </div>
          <p className="mt-3 text-center text-xs text-slate-500">
            Try with any public GitHub repository — no sign-up required
          </p>
        </div>

        {/* ── Hero Mock UI ── */}
        <div className="animate-fade-in-up mt-16 w-full max-w-5xl" style={{ animationDelay: "0.45s" }}>
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a0f1a]/80 shadow-2xl shadow-indigo-900/10 backdrop-blur-md">
            {/* Mock title bar */}
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3 sm:px-5">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-green-500/60" />
              </div>
              <span className="ml-2 text-xs text-slate-500 font-mono">architecture-view.tsx</span>
            </div>

            {/* Canvas */}
            <div className="relative h-[280px] sm:h-[380px] md:h-[440px]">
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              {/* ─── SVG Connection lines ─── */}
              <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(99,102,241,0.6)" />
                    <stop offset="100%" stopColor="rgba(52,211,153,0.6)" />
                  </linearGradient>
                  <linearGradient id="line-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(99,102,241,0.5)" />
                    <stop offset="100%" stopColor="rgba(139,92,246,0.5)" />
                  </linearGradient>
                </defs>
                {/* App → Auth */}
                <line x1="22%" y1="30%" x2="50%" y2="28%" stroke="url(#line-gradient-1)" strokeWidth="2" strokeDasharray="200" className="animate-draw-line" style={{ animationDelay: "0.8s" }} />
                {/* Auth → API */}
                <line x1="50%" y1="35%" x2="78%" y2="52%" stroke="url(#line-gradient-2)" strokeWidth="2" strokeDasharray="200" className="animate-draw-line" style={{ animationDelay: "1.0s" }} />
                {/* App → Database */}
                <line x1="24%" y1="38%" x2="38%" y2="72%" stroke="url(#line-gradient-1)" strokeWidth="1.5" strokeDasharray="200" className="animate-draw-line" style={{ animationDelay: "1.2s" }} />
                {/* API → Database */}
                <line x1="76%" y1="58%" x2="46%" y2="72%" stroke="url(#line-gradient-2)" strokeWidth="1.5" strokeDasharray="200" className="animate-draw-line" style={{ animationDelay: "1.4s" }} />
              </svg>

              {/* ─── Architecture Nodes ─── */}
              {/* Node: App Entry */}
              <div className="absolute left-[10%] top-[18%] animate-node-appear" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-2.5 rounded-xl border border-indigo-500/20 bg-[#0f172a]/90 px-4 py-3 shadow-[0_0_24px_-4px_rgba(99,102,241,0.25)] backdrop-blur-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/15">
                    <Layers className="h-4 w-4 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-200">App Entry</p>
                    <p className="text-xs text-slate-500">layout.tsx</p>
                  </div>
                </div>
              </div>

              {/* Node: Auth Module */}
              <div className="absolute left-[38%] top-[16%] animate-node-appear sm:left-[42%]" style={{ animationDelay: "0.65s" }}>
                <div className="flex items-center gap-2.5 rounded-xl border border-emerald-500/20 bg-[#0f172a]/90 px-4 py-3 shadow-[0_0_24px_-4px_rgba(52,211,153,0.25)] backdrop-blur-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15">
                    <ShieldAlert className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-200">Auth Module</p>
                    <p className="text-xs text-slate-500">middleware.ts</p>
                  </div>
                </div>
              </div>

              {/* Node: API Routes */}
              <div className="absolute right-[10%] top-[40%] animate-node-appear sm:right-[14%]" style={{ animationDelay: "0.8s" }}>
                <div className="flex items-center gap-2.5 rounded-xl border border-violet-500/20 bg-[#0f172a]/90 px-4 py-3 shadow-[0_0_24px_-4px_rgba(139,92,246,0.25)] backdrop-blur-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/15">
                    <Zap className="h-4 w-4 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-200">API Routes</p>
                    <p className="text-xs text-slate-500">route.ts</p>
                  </div>
                </div>
              </div>

              {/* Node: Database */}
              <div className="absolute bottom-[12%] left-[28%] animate-node-appear sm:left-[32%]" style={{ animationDelay: "0.95s" }}>
                <div className="flex items-center gap-2.5 rounded-xl border border-amber-500/20 bg-[#0f172a]/90 px-4 py-3 shadow-[0_0_24px_-4px_rgba(245,158,11,0.2)] backdrop-blur-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/15">
                    <Cpu className="h-4 w-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-200">Database</p>
                    <p className="text-xs text-slate-500">prisma/schema</p>
                  </div>
                </div>
              </div>

              {/* ─── AI Chat Overlay Card ─── */}
              <div className="absolute right-4 bottom-4 w-[260px] animate-fade-in rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 shadow-2xl backdrop-blur-xl sm:right-6 sm:bottom-6 sm:w-[320px]" style={{ animationDelay: "1.5s" }}>
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-500/20">
                    <Bot className="h-3.5 w-3.5 text-indigo-400" />
                  </div>
                  <span className="text-xs font-semibold text-indigo-300">ArchLens AI</span>
                  <span className="ml-auto flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                  &ldquo;This application follows a <span className="font-semibold text-indigo-300">layered Next.js architecture</span>. The <span className="font-semibold text-emerald-300">Authentication module</span> acts as a central dependency.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURES — Bento Box Grid
          ═══════════════════════════════════════ */}
      <section id="features" className="relative z-10 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          {/* Section header */}
          <div className="mb-16 text-center">
            <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-indigo-500/15 bg-indigo-500/[0.06] px-4 py-1.5 text-sm text-indigo-300">
              <Eye className="h-3.5 w-3.5" />
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                understand code
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
              Powerful AI-driven tools that analyze architecture, detect issues, and accelerate onboarding.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            {/* Feature 1 — Large card: AI Architecture Explanation (spans 2 cols on lg) */}
            <div className="group relative row-span-2 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-indigo-500/20 hover:bg-white/[0.04] sm:p-8 lg:col-span-2">
              {/* Glow */}
              <div className="absolute -top-20 -right-20 h-52 w-52 rounded-full bg-indigo-600/[0.08] blur-[80px] transition-all duration-500 group-hover:bg-indigo-600/[0.15]" />

              <div className="relative">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10">
                  <Bot className="h-5 w-5 text-indigo-400" />
                </div>
                <h3 className="mb-2 text-xl font-semibold tracking-tight sm:text-2xl">
                  AI Architecture Explanation
                </h3>
                <p className="mb-6 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base">
                  Get instant, context-aware explanations of how your entire codebase is structured. Understand design patterns, data flows, and system boundaries in natural language.
                </p>

                {/* Mock chat UI */}
                <div className="space-y-3 rounded-xl border border-white/[0.06] bg-[#0a0f1a]/70 p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-500/15">
                      <Bot className="h-3.5 w-3.5 text-indigo-400" />
                    </div>
                    <div className="rounded-xl rounded-tl-none bg-white/[0.04] px-4 py-3">
                      <p className="text-sm leading-relaxed text-slate-300">
                        The project uses a <span className="font-semibold text-indigo-300">monorepo pattern</span> with <span className="font-semibold text-emerald-300">shared packages</span>. The API layer is decoupled through a tRPC router, enabling type-safe communication between the frontend and backend.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-500/15">
                      <Users className="h-3.5 w-3.5 text-slate-400" />
                    </div>
                    <div className="rounded-xl rounded-tl-none bg-white/[0.04] px-4 py-3">
                      <p className="text-sm text-slate-400">
                        How does authentication flow through the app?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 — Circular Dependency Detection */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-emerald-500/20 hover:bg-white/[0.04] sm:p-8">
              <div className="absolute -bottom-16 -right-16 h-44 w-44 rounded-full bg-emerald-600/[0.06] blur-[60px] transition-all duration-500 group-hover:bg-emerald-600/[0.12]" />
              <div className="relative">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10">
                  <CircleDot className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold tracking-tight">
                  Circular Dependency Detection
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-400">
                  Automatically detect and visualize circular imports that silently degrade your build times and runtime performance.
                </p>
                {/* Mock cycle */}
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                  <span className="rounded-md border border-red-500/20 bg-red-500/[0.08] px-2 py-1 text-red-400">
                    utils.ts
                  </span>
                  <ArrowRight className="h-3 w-3 text-red-400/50" />
                  <span className="rounded-md border border-red-500/20 bg-red-500/[0.08] px-2 py-1 text-red-400">
                    helpers.ts
                  </span>
                  <ArrowRight className="h-3 w-3 text-red-400/50" />
                  <span className="rounded-md border border-red-500/20 bg-red-500/[0.08] px-2 py-1 text-red-400">
                    utils.ts
                  </span>
                </div>
              </div>
            </div>

            {/* Feature 3 — Technical Debt Scanner */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-amber-500/20 hover:bg-white/[0.04] sm:p-8">
              <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-amber-600/[0.06] blur-[60px] transition-all duration-500 group-hover:bg-amber-600/[0.12]" />
              <div className="relative">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10">
                  <TriangleAlert className="h-5 w-5 text-amber-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold tracking-tight">
                  Technical Debt Scanner
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-400">
                  Quantify and prioritize technical debt with an AI-driven risk assessment score.
                </p>
                {/* Mock metric */}
                <div className="rounded-xl border border-white/[0.06] bg-[#0a0f1a]/60 p-4">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-400">Risk Score</span>
                    <span className="font-semibold text-amber-400">72 / 100</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-500 to-red-500"
                      style={{ width: "72%" }}
                    />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                    <span className="rounded-md bg-amber-500/10 px-2 py-0.5 text-amber-400">
                      3 God Classes
                    </span>
                    <span className="rounded-md bg-red-500/10 px-2 py-0.5 text-red-400">
                      12 Long Methods
                    </span>
                    <span className="rounded-md bg-orange-500/10 px-2 py-0.5 text-orange-400">
                      5 Dead Exports
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4 — Full-width card: New Developer Onboarding */}
          <div className="group relative mt-4 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-violet-500/20 hover:bg-white/[0.04] sm:p-8">
            <div className="absolute -top-20 left-1/2 h-52 w-[400px] -translate-x-1/2 rounded-full bg-violet-600/[0.06] blur-[80px] transition-all duration-500 group-hover:bg-violet-600/[0.12]" />
            <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-12">
              <div className="flex-1">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10">
                  <Compass className="h-5 w-5 text-violet-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold tracking-tight sm:text-xl">
                  New Developer Onboarding
                </h3>
                <p className="max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base">
                  Generate a guided &ldquo;Start Here&rdquo; path through the codebase.
                  New team members understand the architecture in minutes, not weeks.
                </p>
              </div>
              {/* Mock onboarding path */}
              <div className="flex w-full shrink-0 items-center gap-3 overflow-x-auto lg:w-auto">
                {[
                  { step: "1", label: "Project Structure", color: "indigo" },
                  { step: "2", label: "Core Modules", color: "violet" },
                  { step: "3", label: "Data Flow", color: "emerald" },
                  { step: "4", label: "Start Coding", color: "amber" },
                ].map((item, i) => (
                  <div key={i} className="flex shrink-0 items-center gap-3">
                    <div className="flex flex-col items-center gap-1.5">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-bold
                          ${item.color === "indigo" ? "border-indigo-500/30 bg-indigo-500/15 text-indigo-300" : ""}
                          ${item.color === "violet" ? "border-violet-500/30 bg-violet-500/15 text-violet-300" : ""}
                          ${item.color === "emerald" ? "border-emerald-500/30 bg-emerald-500/15 text-emerald-300" : ""}
                          ${item.color === "amber" ? "border-amber-500/30 bg-amber-500/15 text-amber-300" : ""}
                        `}
                      >
                        {item.step}
                      </div>
                      <span className="text-xs text-slate-400 whitespace-nowrap">{item.label}</span>
                    </div>
                    {i < 3 && (
                      <ChevronRight className="h-4 w-4 shrink-0 text-slate-600 mt-[-16px]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HOW IT WORKS — 3 Steps
          ═══════════════════════════════════════ */}
      <section id="how-it-works" className="relative z-10 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-5xl">
          {/* Section header */}
          <div className="mb-16 text-center">
            <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-emerald-500/15 bg-emerald-500/[0.06] px-4 py-1.5 text-sm text-emerald-300">
              <Zap className="h-3.5 w-3.5" />
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Three steps to{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
                clarity
              </span>
            </h2>
          </div>

          {/* Steps grid */}
          <div className="stagger-children grid gap-6 md:grid-cols-3">
            {/* Step 1 — Ingest */}
            <div className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center transition-all duration-300 hover:border-indigo-500/20 hover:bg-white/[0.04]">
              <div className="absolute -top-12 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-indigo-600/[0.06] blur-[50px] transition-all duration-500 group-hover:bg-indigo-600/[0.15]" />
              <div className="relative">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10">
                  <GitBranch className="h-6 w-6 text-indigo-400" />
                </div>
                <div className="mb-2 text-xs font-bold uppercase tracking-widest text-indigo-400">
                  Step 1
                </div>
                <h3 className="mb-2 text-lg font-semibold">Ingest</h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  Connect any GitHub repository. We clone and index your codebase securely in seconds.
                </p>
              </div>
            </div>

            {/* Step 2 — Analyze */}
            <div className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center transition-all duration-300 hover:border-emerald-500/20 hover:bg-white/[0.04]">
              <div className="absolute -top-12 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-emerald-600/[0.06] blur-[50px] transition-all duration-500 group-hover:bg-emerald-600/[0.15]" />
              <div className="relative">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10">
                  <ScanLine className="h-6 w-6 text-emerald-400" />
                </div>
                <div className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
                  Step 2
                </div>
                <h3 className="mb-2 text-lg font-semibold">Analyze</h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  Our AI parses AST structures, maps dependency graphs, and identifies architectural patterns.
                </p>
              </div>
            </div>

            {/* Step 3 — Discover */}
            <div className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center transition-all duration-300 hover:border-violet-500/20 hover:bg-white/[0.04]">
              <div className="absolute -top-12 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-violet-600/[0.06] blur-[50px] transition-all duration-500 group-hover:bg-violet-600/[0.15]" />
              <div className="relative">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10">
                  <Network className="h-6 w-6 text-violet-400" />
                </div>
                <div className="mb-2 text-xs font-bold uppercase tracking-widest text-violet-400">
                  Step 3
                </div>
                <h3 className="mb-2 text-lg font-semibold">Discover</h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  Explore an interactive canvas with architecture diagrams, AI explanations, and collaboration tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA SECTION
          ═══════════════════════════════════════ */}
      <section className="relative z-10 px-5 py-24 sm:px-8 sm:py-32">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] px-8 py-16 text-center sm:px-16 sm:py-20">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/[0.06] via-transparent to-emerald-600/[0.06]" />
          <div className="absolute top-[-40%] left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/[0.08] blur-[100px]" />

          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to understand your codebase?
            </h2>
            <p className="mx-auto mb-8 max-w-md text-slate-400">
              Join developers who ship faster by understanding architecture first.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button className="cursor-pointer rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-5px_rgba(99,102,241,0.5)] transition-all hover:shadow-[0_0_40px_-5px_rgba(99,102,241,0.65)]">
                Get Started — Free
              </button>
              <button className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-8 py-3 text-sm font-medium text-slate-300 transition-all hover:border-white/[0.15] hover:text-white">
                <Code2 className="h-4 w-4" />
                View on GitHub
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════ */}
      <footer className="relative z-10 border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-emerald-500">
              <Network className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-sm font-semibold tracking-tight">
              Arch<span className="text-indigo-400">Lens</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="transition-colors hover:text-slate-300">Docs</a>
            <a href="#" className="transition-colors hover:text-slate-300">Blog</a>
            <a href="#" className="transition-colors hover:text-slate-300">Changelog</a>
            <a href="#" className="transition-colors hover:text-slate-300">Privacy</a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-500 transition-colors hover:text-slate-300" aria-label="GitHub">
              <Code2 className="h-4.5 w-4.5" />
            </a>
            <a href="#" className="text-slate-500 transition-colors hover:text-slate-300" aria-label="Twitter">
              <MessageSquare className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>
        <div className="border-t border-white/[0.04] py-5 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} ArchLens. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
