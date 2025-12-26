// src/components/sections/DeveloperJourney.tsx
import { FileText, Database, CheckCircle, Zap } from "lucide-react";

// Illustration: Project Setup - Blueprint document
const SetupIllustration = () => (
  <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
    {/* Main document */}
    <rect x="15" y="8" width="40" height="48" rx="3" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
    <rect x="20" y="14" width="24" height="3" rx="1" fill="#10b981" opacity="0.5" />
    <rect x="20" y="20" width="30" height="2" rx="1" fill="#475569" />
    <rect x="20" y="25" width="25" height="2" rx="1" fill="#475569" />
    <rect x="20" y="30" width="28" height="2" rx="1" fill="#475569" />

    {/* Checkmarks */}
    <circle cx="24" cy="40" r="4" fill="#10b981" opacity="0.2" />
    <path d="M22 40l1.5 1.5 3-3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24" cy="50" r="4" fill="#10b981" opacity="0.2" />
    <path d="M22 50l1.5 1.5 3-3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Gear */}
    <g transform="translate(52, 38)">
      <circle cx="10" cy="10" r="8" fill="#1e293b" stroke="#06b6d4" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="3" fill="#06b6d4" opacity="0.4" />
    </g>

    {/* Speed indicator */}
    <path d="M62 18 L70 10 L66 10 L66 6" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

// Illustration: Data Integration - Hub with connections
const DataIllustration = () => (
  <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
    {/* Central hub */}
    <circle cx="40" cy="30" r="12" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
    <circle cx="40" cy="30" r="5" fill="#10b981" opacity="0.4" />

    {/* Connection lines */}
    <g stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" opacity="0.5">
      <line x1="12" y1="15" x2="30" y2="22" />
      <line x1="12" y1="45" x2="30" y2="38" />
      <line x1="68" y1="15" x2="50" y2="22" />
      <line x1="68" y1="45" x2="50" y2="38" />
    </g>

    {/* Source nodes */}
    <rect x="2" y="8" width="14" height="14" rx="3" fill="#1e293b" stroke="#06b6d4" strokeWidth="1" />
    <text x="5" y="18" fill="#06b6d4" fontSize="6" fontWeight="bold">IoT</text>

    <rect x="2" y="38" width="14" height="14" rx="3" fill="#1e293b" stroke="#06b6d4" strokeWidth="1" />
    <circle cx="9" cy="45" r="3" fill="none" stroke="#06b6d4" strokeWidth="1" />

    <rect x="64" y="8" width="14" height="14" rx="3" fill="#1e293b" stroke="#10b981" strokeWidth="1" />
    <path d="M67 13h8M67 17h6" stroke="#10b981" strokeWidth="1" strokeLinecap="round" />

    <rect x="64" y="38" width="14" height="14" rx="3" fill="#1e293b" stroke="#10b981" strokeWidth="1" />
    <path d="M68 43l3 3 5-5" stroke="#10b981" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />

    {/* Pulse rings */}
    <circle cx="40" cy="30" r="18" fill="none" stroke="#10b981" strokeWidth="0.5" opacity="0.3" />
  </svg>
);

// Illustration: Verification - Clipboard with reviewer
const VerifyIllustration = () => (
  <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
    {/* Clipboard */}
    <rect x="18" y="8" width="35" height="48" rx="3" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
    <rect x="27" y="3" width="17" height="10" rx="2" fill="#10b981" opacity="0.3" />
    <rect x="31" y="6" width="9" height="4" rx="1" fill="#1e293b" />

    {/* Checklist */}
    <g transform="translate(23, 20)">
      <rect x="0" y="0" width="8" height="8" rx="2" fill="#10b981" opacity="0.2" stroke="#10b981" strokeWidth="1" />
      <path d="M2 4l1.5 1.5 3-3" stroke="#10b981" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="12" y="2" width="15" height="3" rx="1" fill="#475569" />
    </g>

    <g transform="translate(23, 32)">
      <rect x="0" y="0" width="8" height="8" rx="2" fill="#10b981" opacity="0.2" stroke="#10b981" strokeWidth="1" />
      <path d="M2 4l1.5 1.5 3-3" stroke="#10b981" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="12" y="2" width="12" height="3" rx="1" fill="#475569" />
    </g>

    <g transform="translate(23, 44)">
      <rect x="0" y="0" width="8" height="8" rx="2" fill="#06b6d4" opacity="0.2" stroke="#06b6d4" strokeWidth="1" />
      <circle cx="4" cy="4" r="1.5" fill="#06b6d4" />
      <rect x="12" y="2" width="18" height="3" rx="1" fill="#475569" />
    </g>

    {/* Reviewer */}
    <g transform="translate(55, 22)">
      <circle cx="10" cy="8" r="7" fill="#1e293b" stroke="#06b6d4" strokeWidth="1.5" />
      <circle cx="10" cy="6" r="2.5" fill="#06b6d4" opacity="0.5" />
      <path d="M5 15c0-2.5 2-4 5-4s5 1.5 5 4" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  </svg>
);

// Illustration: Credits - Coins and certificate
const CreditsIllustration = () => (
  <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
    <defs>
      <linearGradient id="coinGradDJ" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>

    {/* Stacked coins */}
    <g transform="translate(10, 18)">
      <ellipse cx="18" cy="32" rx="16" ry="5" fill="#047857" />
      <ellipse cx="18" cy="28" rx="16" ry="5" fill="url(#coinGradDJ)" />
      <ellipse cx="18" cy="22" rx="16" ry="5" fill="#047857" />
      <ellipse cx="18" cy="18" rx="16" ry="5" fill="url(#coinGradDJ)" />
      <ellipse cx="18" cy="12" rx="16" ry="5" fill="#047857" />
      <ellipse cx="18" cy="8" rx="16" ry="5" fill="url(#coinGradDJ)" />
      <text x="10" y="11" fill="#fff" fontSize="6" fontWeight="bold">CO₂</text>
    </g>

    {/* Certificate badge */}
    <g transform="translate(48, 12)">
      <circle cx="14" cy="14" r="12" fill="#1e293b" stroke="#fbbf24" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="8" fill="none" stroke="#fbbf24" strokeWidth="0.8" opacity="0.5" />
      <path d="M10 14l3 3 6-6" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Ribbon */}
      <polygon points="8,24 14,28 14,40 8,34" fill="#f59e0b" />
      <polygon points="20,24 14,28 14,40 20,34" fill="#d97706" />
    </g>

    {/* Sparkles */}
    <g fill="#fbbf24">
      <circle cx="70" cy="12" r="1.5" />
      <circle cx="74" cy="18" r="1" />
    </g>
  </svg>
);

const keyFeatures = [
  {
    icon: FileText,
    title: "Project Setup & Documentation",
    desc: "Registry-aligned templates with smart placeholders and version control",
    highlight: "60% faster setup",
    Illustration: SetupIllustration,
  },
  {
    icon: Database,
    title: "Data Integration & MRV",
    desc: "Connect SCADA, meters, and sensors with automated validation and reporting",
    highlight: "Real-time monitoring",
    Illustration: DataIllustration,
  },
  {
    icon: CheckCircle,
    title: "Verification & Submission",
    desc: "Organized VVB workflows with completeness checks and audit trails",
    highlight: "Streamlined cycles",
    Illustration: VerifyIllustration,
  },
  {
    icon: Zap,
    title: "Post-Issuance Management",
    desc: "Deal rooms, batch tracking, and retirement coordination in one workspace",
    highlight: "Complete lifecycle view",
    Illustration: CreditsIllustration,
  }
] as const;

export default function DeveloperJourney() {
  return (
    <section
      id="developer"
      className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-16 pb-20 md:py-24 border-t border-emerald-500/10 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 mb-4">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
              Developer Journey
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            From PDD to
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Credits</span>
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Streamlined project management from conception to credit issuance
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {keyFeatures.map((feature, index) => {
            const { Illustration } = feature;
            return (
              <div
                key={feature.title}
                className="group relative"
              >
                {/* Connection line to next card */}
                {index < keyFeatures.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-3 w-6 h-px bg-gradient-to-r from-emerald-400/50 to-transparent z-10" />
                )}

                <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-slate-900/60 backdrop-blur-sm h-full transition-all duration-300 group-hover:border-emerald-400/40 group-hover:bg-slate-800/80">
                  {/* Illustration area */}
                  <div className="h-24 bg-gradient-to-b from-slate-800/50 to-transparent flex items-center justify-center p-3">
                    <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                      <Illustration />
                    </div>
                  </div>

                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 pointer-events-none" />

                  <div className="relative p-5 pt-2">
                    <h3 className="text-base font-semibold text-slate-50 mb-2 group-hover:text-emerald-100 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-sm text-slate-400 mb-3 leading-relaxed">
                      {feature.desc}
                    </p>

                    {/* Highlight badge */}
                    <div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 px-3 py-1">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                      <span className="text-xs font-medium text-emerald-300">
                        {feature.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Flow indicator */}
        <div className="mt-10 flex justify-center items-center gap-2">
          {keyFeatures.map((_, index) => (
            <div key={index} className="flex items-center">
              <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                <span className="text-xs font-bold text-emerald-400">{index + 1}</span>
              </div>
              {index < keyFeatures.length - 1 && (
                <div className="w-10 h-px bg-gradient-to-r from-emerald-400/50 to-emerald-400/20 mx-1" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 text-center">
          <span className="text-sm text-slate-500">Integrated project management from PDD to credits</span>
        </div>
      </div>
    </section>
  );
}
