// src/components/sections/Lifecycle.tsx
import { useState } from "react";

// SVG Icons for each stage
const DesignIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <circle cx="32" cy="32" r="28" className="stroke-current" strokeWidth="2" strokeDasharray="4 2" />
    <rect x="20" y="18" width="24" height="28" rx="3" className="fill-current opacity-20 stroke-current" strokeWidth="1.5" />
    <path d="M24 26h16M24 32h12M24 38h8" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="44" cy="44" r="8" className="fill-current opacity-30" />
    <path d="M41 44l2 2 4-4" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MonitoringIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <rect x="8" y="12" width="48" height="32" rx="4" className="stroke-current" strokeWidth="2" />
    <path d="M16 32l8-8 8 12 8-16 8 8" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="32" r="3" className="fill-current" />
    <circle cx="24" cy="24" r="3" className="fill-current" />
    <circle cx="32" cy="36" r="3" className="fill-current" />
    <circle cx="40" cy="20" r="3" className="fill-current" />
    <circle cx="48" cy="28" r="3" className="fill-current" />
    <rect x="20" y="48" width="24" height="4" rx="2" className="fill-current opacity-40" />
  </svg>
);

const ReportingIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <path d="M16 8h24l12 12v36a4 4 0 01-4 4H16a4 4 0 01-4-4V12a4 4 0 014-4z" className="fill-current opacity-10 stroke-current" strokeWidth="2" />
    <path d="M40 8v12h12" className="stroke-current" strokeWidth="2" strokeLinejoin="round" />
    <rect x="20" y="28" width="24" height="4" rx="1" className="fill-current opacity-60" />
    <rect x="20" y="36" width="18" height="4" rx="1" className="fill-current opacity-40" />
    <rect x="20" y="44" width="20" height="4" rx="1" className="fill-current opacity-40" />
    <circle cx="50" cy="50" r="10" className="fill-emerald-500/30 stroke-emerald-400" strokeWidth="2" />
    <path d="M46 50l3 3 6-6" className="stroke-emerald-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MarketIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <circle cx="32" cy="32" r="24" className="stroke-current" strokeWidth="2" />
    <path d="M32 16v32M24 24h16M20 32h24M24 40h16" className="stroke-current opacity-30" strokeWidth="1" />
    <path d="M32 20c8 0 12 4 12 12s-4 12-12 12" className="stroke-current" strokeWidth="2" strokeLinecap="round" />
    <circle cx="32" cy="32" r="6" className="fill-current" />
    <path d="M48 48l8 8" className="stroke-emerald-400" strokeWidth="3" strokeLinecap="round" />
    <circle cx="56" cy="56" r="4" className="fill-emerald-400/30 stroke-emerald-400" strokeWidth="2" />
  </svg>
);

const stages = [
  {
    id: "01",
    title: "Design & Onboard",
    shortDesc: "Project Foundation",
    icon: DesignIcon,
    color: "emerald",
    highlights: ["PDD Setup", "Baseline Logic", "Stakeholder Mapping"],
  },
  {
    id: "02",
    title: "Monitor & Validate",
    shortDesc: "Data Integrity",
    icon: MonitoringIcon,
    color: "cyan",
    highlights: ["IoT Integration", "Anomaly Detection", "Auto-Correction"],
  },
  {
    id: "03",
    title: "Report & Submit",
    shortDesc: "Registry Ready",
    icon: ReportingIcon,
    color: "indigo",
    highlights: ["Auto-Reports", "Evidence Bundles", "Crypto Integrity"],
  },
  {
    id: "04",
    title: "Verify & Trade",
    shortDesc: "Market Access",
    icon: MarketIcon,
    color: "purple",
    highlights: ["VVB Review", "Issuance", "Deal Rooms"],
  },
];

const colorMap: Record<string, { gradient: string; bg: string; border: string; text: string; glow: string }> = {
  emerald: {
    gradient: "from-emerald-400 to-teal-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-400/40",
    text: "text-emerald-400",
    glow: "shadow-emerald-500/20",
  },
  cyan: {
    gradient: "from-cyan-400 to-blue-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-400/40",
    text: "text-cyan-400",
    glow: "shadow-cyan-500/20",
  },
  indigo: {
    gradient: "from-indigo-400 to-purple-500",
    bg: "bg-indigo-500/10",
    border: "border-indigo-400/40",
    text: "text-indigo-400",
    glow: "shadow-indigo-500/20",
  },
  purple: {
    gradient: "from-purple-400 to-pink-500",
    bg: "bg-purple-500/10",
    border: "border-purple-400/40",
    text: "text-purple-400",
    glow: "shadow-purple-500/20",
  },
};

// Animated Arrow Component
const FlowArrow = ({ className = "" }: { className?: string }) => (
  <div className={`hidden lg:flex items-center justify-center ${className}`}>
    <svg width="48" height="24" viewBox="0 0 48 24" className="text-slate-600">
      <defs>
        <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <path
        d="M0 12h36M30 6l8 6-8 6"
        stroke="url(#arrowGradient)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-pulse"
      />
    </svg>
  </div>
);

export default function Lifecycle() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  return (
    <section
      id="lifecycle"
      className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-16 pb-24 md:py-32 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-5 py-2.5 mb-6 backdrop-blur-sm">
            <div className="relative">
              <div className="w-2.5 h-2.5 bg-indigo-400 rounded-full animate-ping absolute" />
              <div className="w-2.5 h-2.5 bg-indigo-400 rounded-full" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
              Complete Lifecycle Flow
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-slate-50 mb-6 leading-tight">
            From PDD to Retirement
            <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              One Seamless Journey
            </span>
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed">
            Four interconnected stages. Complete visibility. Full traceability.
          </p>
        </div>

        {/* VISUAL FLOW DIAGRAM */}
        <div className="relative">
          {/* Main flow container */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">
            {stages.map((stage, index) => {
              const colors = colorMap[stage.color];
              const Icon = stage.icon;
              const isActive = activeStage === index;
              const isLast = index === stages.length - 1;

              return (
                <div key={stage.id} className="flex items-center">
                  {/* Stage Node */}
                  <div
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setActiveStage(index)}
                    onMouseLeave={() => setActiveStage(null)}
                  >
                    {/* Glow effect */}
                    <div
                      className={`absolute -inset-4 rounded-3xl bg-gradient-to-r ${colors.gradient} opacity-0 blur-xl transition-opacity duration-500 ${isActive ? "opacity-30" : "group-hover:opacity-20"
                        }`}
                    />

                    {/* Main card */}
                    <div
                      className={`relative w-56 md:w-64 rounded-3xl border-2 transition-all duration-500 ${isActive
                        ? `${colors.border} ${colors.bg} shadow-2xl ${colors.glow} scale-105`
                        : "border-slate-700/50 bg-slate-900/50 hover:border-slate-600"
                        }`}
                    >
                      {/* Top section with icon */}
                      <div className="p-6 text-center">
                        {/* Stage number badge */}
                        <div
                          className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${colors.gradient} text-slate-900`}
                        >
                          Stage {stage.id}
                        </div>

                        {/* Animated Icon Container */}
                        <div
                          className={`relative w-20 h-20 mx-auto mb-4 mt-2 ${colors.text} transition-transform duration-300 ${isActive ? "scale-110" : ""
                            }`}
                        >
                          {/* Rotating ring */}
                          <div
                            className={`absolute inset-0 rounded-full border-2 border-dashed ${colors.border} transition-all duration-700 ${isActive ? "rotate-180 opacity-100" : "rotate-0 opacity-50"
                              }`}
                          />
                          {/* Icon */}
                          <div className="absolute inset-2">
                            <Icon />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-slate-100 mb-1">{stage.title}</h3>
                        <p className={`text-sm font-medium ${colors.text}`}>{stage.shortDesc}</p>
                      </div>

                      {/* Expandable highlights section */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                          }`}
                      >
                        <div className="px-6 pb-6 border-t border-slate-700/50">
                          <div className="pt-4 space-y-2">
                            {stage.highlights.map((highlight, i) => (
                              <div
                                key={highlight}
                                className="flex items-center gap-2 text-sm text-slate-300"
                                style={{ animationDelay: `${i * 100}ms` }}
                              >
                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colors.gradient}`} />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Connection line (mobile) */}
                    {!isLast && (
                      <div className="lg:hidden flex justify-center my-2">
                        <svg width="24" height="32" viewBox="0 0 24 32" className="text-slate-600">
                          <path d="M12 0v24M6 18l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Connecting Arrow (desktop) */}
                  {!isLast && <FlowArrow className="mx-2" />}
                </div>
              );
            })}
          </div>

          {/* Progress bar underneath */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-400 via-cyan-400 via-indigo-400 to-purple-400 rounded-full transition-all duration-700"
                style={{ width: activeStage !== null ? `${((activeStage + 1) / 4) * 100}%` : "100%" }}
              />
              {/* Stage markers */}
              {stages.map((_, index) => (
                <div
                  key={index}
                  className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 ${activeStage !== null && activeStage >= index
                    ? "bg-slate-50 border-slate-50 scale-125"
                    : "bg-slate-700 border-slate-600"
                    }`}
                  style={{ left: `calc(${((index + 1) / 4) * 100}% - 8px)` }}
                />
              ))}
            </div>

            {/* Stage labels */}
            <div className="flex justify-between mt-4 px-4">
              {stages.map((stage, index) => (
                <span
                  key={stage.id}
                  className={`text-xs font-medium transition-colors duration-300 ${activeStage === index ? colorMap[stage.color].text : "text-slate-500"
                    }`}
                >
                  {stage.shortDesc}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: "⚡", label: "Real-time Tracking", desc: "Live status updates" },
            { icon: "🔐", label: "Crypto Integrity", desc: "Immutable records" },
            { icon: "🔗", label: "Full Traceability", desc: "End-to-end audit" },
            { icon: "🌍", label: "Multi-Registry", desc: "Global compliance" },
          ].map((feature) => (
            <div
              key={feature.label}
              className="text-center p-4 rounded-2xl border border-slate-800 bg-slate-900/30 hover:border-slate-700 transition-colors"
            >
              <div className="text-3xl mb-2">{feature.icon}</div>
              <div className="text-sm font-semibold text-slate-200">{feature.label}</div>
              <div className="text-xs text-slate-500">{feature.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
