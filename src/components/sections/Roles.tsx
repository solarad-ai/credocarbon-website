// src/components/sections/Roles.tsx

// Developer Illustration - Person with project dashboard
const DeveloperIllustration = () => (
  <svg viewBox="0 0 100 80" fill="none" className="w-full h-full">
    {/* Person silhouette */}
    <circle cx="25" cy="20" r="12" fill="#10b981" opacity="0.3" />
    <circle cx="25" cy="16" r="6" fill="#10b981" opacity="0.6" />
    <path d="M15 42c0-6 4-10 10-10s10 4 10 10" fill="#10b981" opacity="0.4" />

    {/* Dashboard screen */}
    <rect x="45" y="10" width="48" height="55" rx="4" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
    <rect x="50" y="16" width="20" height="4" rx="1" fill="#10b981" opacity="0.5" />

    {/* Progress bars */}
    <rect x="50" y="26" width="38" height="4" rx="1" fill="#0f172a" />
    <rect x="50" y="26" width="30" height="4" rx="1" fill="#10b981" opacity="0.7" />

    <rect x="50" y="34" width="38" height="4" rx="1" fill="#0f172a" />
    <rect x="50" y="34" width="24" height="4" rx="1" fill="#06b6d4" opacity="0.7" />

    <rect x="50" y="42" width="38" height="4" rx="1" fill="#0f172a" />
    <rect x="50" y="42" width="36" height="4" rx="1" fill="#10b981" opacity="0.7" />

    {/* Checkmarks */}
    <circle cx="55" cy="54" r="4" fill="#10b981" opacity="0.3" />
    <path d="M53 54l1.5 1.5 3-3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="68" cy="54" r="4" fill="#10b981" opacity="0.3" />
    <path d="M66 54l1.5 1.5 3-3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="81" cy="54" r="4" fill="#06b6d4" opacity="0.2" stroke="#06b6d4" strokeWidth="1" />
  </svg>
);

// VVB Illustration - Magnifying glass over document
const VVBIllustration = () => (
  <svg viewBox="0 0 100 80" fill="none" className="w-full h-full">
    {/* Document */}
    <rect x="15" y="10" width="45" height="60" rx="4" fill="#1e293b" stroke="#06b6d4" strokeWidth="1.5" />
    <rect x="22" y="18" width="25" height="3" rx="1" fill="#06b6d4" opacity="0.5" />
    <rect x="22" y="25" width="32" height="2" rx="1" fill="#475569" />
    <rect x="22" y="31" width="28" height="2" rx="1" fill="#475569" />
    <rect x="22" y="37" width="30" height="2" rx="1" fill="#475569" />
    <rect x="22" y="47" width="24" height="2" rx="1" fill="#475569" />
    <rect x="22" y="53" width="28" height="2" rx="1" fill="#475569" />
    <rect x="22" y="59" width="20" height="2" rx="1" fill="#475569" />

    {/* Magnifying glass */}
    <circle cx="70" cy="35" r="18" fill="#0f172a" stroke="#06b6d4" strokeWidth="2" />
    <circle cx="70" cy="35" r="12" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.5" />
    <line x1="82" y1="49" x2="95" y2="65" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round" />

    {/* Check inside magnifier */}
    <path d="M63 35l4 4 8-8" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Registry Illustration - Building with connected nodes
const RegistryIllustration = () => (
  <svg viewBox="0 0 100 80" fill="none" className="w-full h-full">
    {/* Central building */}
    <rect x="35" y="25" width="30" height="45" rx="2" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1.5" />
    <rect x="40" y="10" width="20" height="20" rx="2" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1.5" />
    <polygon points="50,5 65,18 35,18" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1.5" />

    {/* Windows */}
    <rect x="40" y="32" width="8" height="8" rx="1" fill="#8b5cf6" opacity="0.3" />
    <rect x="52" y="32" width="8" height="8" rx="1" fill="#8b5cf6" opacity="0.3" />
    <rect x="40" y="45" width="8" height="8" rx="1" fill="#8b5cf6" opacity="0.3" />
    <rect x="52" y="45" width="8" height="8" rx="1" fill="#8b5cf6" opacity="0.3" />

    {/* Door */}
    <rect x="46" y="58" width="8" height="12" rx="1" fill="#8b5cf6" opacity="0.5" />

    {/* Connected nodes */}
    <circle cx="12" cy="30" r="8" fill="#1e293b" stroke="#a855f7" strokeWidth="1.5" />
    <circle cx="12" cy="60" r="8" fill="#1e293b" stroke="#a855f7" strokeWidth="1.5" />
    <circle cx="88" cy="30" r="8" fill="#1e293b" stroke="#a855f7" strokeWidth="1.5" />
    <circle cx="88" cy="60" r="8" fill="#1e293b" stroke="#a855f7" strokeWidth="1.5" />

    {/* Connection lines */}
    <path d="M20 30 L35 35" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
    <path d="M20 60 L35 55" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
    <path d="M80 30 L65 35" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
    <path d="M80 60 L65 55" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
  </svg>
);

// Buyer Illustration - Portfolio charts with coins
const BuyerIllustration = () => (
  <svg viewBox="0 0 100 80" fill="none" className="w-full h-full">
    {/* Chart background */}
    <rect x="10" y="10" width="50" height="40" rx="3" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />

    {/* Bar chart */}
    <rect x="18" y="35" width="8" height="10" rx="1" fill="#f59e0b" opacity="0.5" />
    <rect x="30" y="28" width="8" height="17" rx="1" fill="#f59e0b" opacity="0.7" />
    <rect x="42" y="20" width="8" height="25" rx="1" fill="#f59e0b" />

    {/* Trend line */}
    <path d="M18 38 L30 30 L42 22 L55 15" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="55" cy="15" r="3" fill="#10b981" />

    {/* Coins stack */}
    <g transform="translate(65, 25)">
      <ellipse cx="15" cy="40" rx="14" ry="5" fill="#b45309" />
      <ellipse cx="15" cy="35" rx="14" ry="5" fill="#f59e0b" />
      <ellipse cx="15" cy="28" rx="14" ry="5" fill="#b45309" />
      <ellipse cx="15" cy="23" rx="14" ry="5" fill="#f59e0b" />
      <ellipse cx="15" cy="16" rx="14" ry="5" fill="#b45309" />
      <ellipse cx="15" cy="11" rx="14" ry="5" fill="#f59e0b" />
      <text x="9" y="15" fill="#fff" fontSize="7" fontWeight="bold">CO₂</text>
    </g>

    {/* Dollar sparkle */}
    <text x="88" y="18" fill="#f59e0b" fontSize="12" fontWeight="bold">$</text>
  </svg>
);

const roles = [
  {
    title: "Project Developers",
    subtitle: "& Asset Owners",
    desc: "End-to-end project management from onboarding to credit issuance",
    theme: "emerald",
    highlights: ["Guided onboarding", "Version-controlled docs", "Registry-ready submissions"],
    Illustration: DeveloperIllustration,
  },
  {
    title: "VVBs & Auditors",
    subtitle: "Verification Bodies",
    desc: "Professional verification with structured reviews and audit trails",
    theme: "cyan",
    highlights: ["Review queues & SLAs", "Data anomaly checks", "Signed opinions"],
    Illustration: VVBIllustration,
  },
  {
    title: "Registries",
    subtitle: "& Standard Bodies",
    desc: "Standardized submissions with automated validation",
    theme: "purple",
    highlights: ["Multi-registry support", "Hashed evidence", "Cross-registry mapping"],
    Illustration: RegistryIllustration,
  },
  {
    title: "Corporate Buyers",
    subtitle: "Brokers & Funds",
    desc: "Procurement tools with analytics and due diligence",
    theme: "amber",
    highlights: ["Portfolio filters", "Deal rooms", "Chain-of-custody"],
    Illustration: BuyerIllustration,
  },
];

const themeColors = {
  emerald: {
    border: "border-emerald-500/30",
    hoverBorder: "hover:border-emerald-400/60",
    bg: "from-emerald-500/5 to-teal-500/5",
    glow: "bg-emerald-500/10",
    accent: "text-emerald-400",
    tag: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
  },
  cyan: {
    border: "border-cyan-500/30",
    hoverBorder: "hover:border-cyan-400/60",
    bg: "from-cyan-500/5 to-blue-500/5",
    glow: "bg-cyan-500/10",
    accent: "text-cyan-400",
    tag: "bg-cyan-500/15 text-cyan-300 border-cyan-400/30",
  },
  purple: {
    border: "border-purple-500/30",
    hoverBorder: "hover:border-purple-400/60",
    bg: "from-purple-500/5 to-indigo-500/5",
    glow: "bg-purple-500/10",
    accent: "text-purple-400",
    tag: "bg-purple-500/15 text-purple-300 border-purple-400/30",
  },
  amber: {
    border: "border-amber-500/30",
    hoverBorder: "hover:border-amber-400/60",
    bg: "from-amber-500/5 to-orange-500/5",
    glow: "bg-amber-500/10",
    accent: "text-amber-400",
    tag: "bg-amber-500/15 text-amber-300 border-amber-400/30",
  },
};

export default function Roles() {
  return (
    <section
      id="roles"
      className="relative bg-gradient-to-b from-slate-950 via-[#080c14] to-slate-950 py-24 md:py-32 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-teal-400/30 bg-teal-500/10 px-5 py-2.5 mb-6 backdrop-blur-sm">
            <div className="relative">
              <div className="w-2.5 h-2.5 bg-teal-400 rounded-full animate-ping absolute" />
              <div className="w-2.5 h-2.5 bg-teal-400 rounded-full" />
            </div>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-teal-300">
              Who It's For
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-5 leading-tight">
            Built for every actor in the{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              carbon ecosystem
            </span>
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed">
            One structured project file for developers, VVBs, registries and buyers —
            verification-grade collaboration from day one
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {roles.map((role) => {
            const { Illustration } = role;
            const colors = themeColors[role.theme as keyof typeof themeColors];

            return (
              <div
                key={role.title}
                className={`group relative rounded-3xl ${colors.border} ${colors.hoverBorder} bg-slate-900/40 backdrop-blur-sm overflow-hidden transition-all duration-500`}
              >
                {/* Themed background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Corner glow */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 ${colors.glow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative p-6 md:p-8 flex flex-col md:flex-row gap-6">
                  {/* Illustration */}
                  <div className="w-full md:w-40 h-32 md:h-auto flex-shrink-0 transform group-hover:scale-105 transition-transform duration-500">
                    <Illustration />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-3">
                      <h3 className={`text-xl font-bold text-slate-50 group-hover:${colors.accent} transition-colors`}>
                        {role.title}
                      </h3>
                      <span className={`text-sm ${colors.accent}`}>{role.subtitle}</span>
                    </div>

                    <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                      {role.desc}
                    </p>

                    {/* Highlight tags */}
                    <div className="flex flex-wrap gap-2">
                      {role.highlights.map((h) => (
                        <span
                          key={h}
                          className={`text-xs px-3 py-1 rounded-full border ${colors.tag}`}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom connector */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-4">
            {roles.map((role, index) => {
              const colors = themeColors[role.theme as keyof typeof themeColors];
              return (
                <div key={role.title} className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${colors.glow} border ${colors.border}`} />
                  {index < roles.length - 1 && (
                    <div className="w-12 h-px bg-gradient-to-r from-slate-600 to-slate-700 mx-2" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Tagline */}
        <p className="text-center text-sm text-slate-500 mt-6">
          All stakeholders operate on the same structured project file
        </p>
      </div>
    </section>
  );
}
