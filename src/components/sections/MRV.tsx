// src/components/sections/MRV.tsx

// Monitoring Illustration - Forest with magnifying glass analyzing data
const MonitoringIllustration = () => (
  <svg viewBox="0 0 200 160" fill="none" className="w-full h-full">
    <defs>
      <linearGradient id="treeGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#059669" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
      <linearGradient id="treeGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <linearGradient id="treeGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
      <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.1" />
      </linearGradient>
    </defs>

    {/* Ground */}
    <ellipse cx="100" cy="150" rx="90" ry="10" fill="#065f46" opacity="0.3" />

    {/* Trees - Back Row */}
    <g opacity="0.5">
      <polygon points="20,145 32,95 44,145" fill="url(#treeGrad1)" />
      <polygon points="45,148 60,88 75,148" fill="url(#treeGrad1)" />
      <polygon points="75,145 92,82 109,145" fill="url(#treeGrad1)" />
      <polygon points="105,148 120,90 135,148" fill="url(#treeGrad1)" />
      <polygon points="135,145 150,92 165,145" fill="url(#treeGrad1)" />
    </g>

    {/* Trees - Middle Row */}
    <g opacity="0.7">
      <polygon points="10,150 28,100 46,150" fill="url(#treeGrad2)" />
      <polygon points="35,152 55,95 75,152" fill="url(#treeGrad2)" />
      <polygon points="90,150 112,92 134,150" fill="url(#treeGrad2)" />
      <polygon points="145,152 165,98 185,152" fill="url(#treeGrad2)" />
    </g>

    {/* Trees - Front Row */}
    <polygon points="0,155 22,105 44,155" fill="url(#treeGrad3)" />
    <rect x="20" y="148" width="4" height="10" fill="#78350f" />

    <polygon points="50,155 77,98 104,155" fill="url(#treeGrad3)" />
    <rect x="75" y="148" width="5" height="10" fill="#78350f" />

    <polygon points="115,155 142,102 169,155" fill="url(#treeGrad3)" />
    <rect x="140" y="148" width="4" height="10" fill="#78350f" />

    {/* Ruler/Scale at bottom */}
    <rect x="5" y="155" width="190" height="5" fill="#475569" rx="2" />
    <g fill="#94a3b8">
      <rect x="10" y="153" width="2" height="4" />
      <rect x="30" y="154" width="1" height="3" />
      <rect x="50" y="153" width="2" height="4" />
      <rect x="70" y="154" width="1" height="3" />
      <rect x="90" y="153" width="2" height="4" />
      <rect x="110" y="154" width="1" height="3" />
      <rect x="130" y="153" width="2" height="4" />
      <rect x="150" y="154" width="1" height="3" />
      <rect x="170" y="153" width="2" height="4" />
      <rect x="190" y="153" width="2" height="4" />
    </g>

    {/* Magnifying Glass */}
    <g transform="translate(110, 20)">
      <circle cx="32" cy="32" r="30" fill="url(#glassGrad)" stroke="#38bdf8" strokeWidth="3.5" />
      <circle cx="32" cy="32" r="24" fill="none" stroke="#0ea5e9" strokeWidth="1.5" opacity="0.5" />

      {/* Data points inside magnifier */}
      <circle cx="22" cy="28" r="4" fill="#10b981" />
      <circle cx="32" cy="38" r="4" fill="#10b981" />
      <circle cx="42" cy="24" r="4" fill="#10b981" />
      <path d="M22 28L32 38L42 24" stroke="#10b981" strokeWidth="2" strokeDasharray="4 3" />

      {/* Handle */}
      <rect x="52" y="52" width="28" height="10" rx="4" fill="#0ea5e9" transform="rotate(45 52 52)" />
    </g>

    {/* Floating data indicators */}
    <circle cx="40" cy="55" r="5" fill="#38bdf8" opacity="0.8" />
    <circle cx="80" cy="40" r="4" fill="#10b981" opacity="0.8" />
    <circle cx="55" cy="75" r="4" fill="#8b5cf6" opacity="0.8" />
  </svg>
);

// Reporting Illustration - Document with pen and data charts
const ReportingIllustration = () => (
  <svg viewBox="0 0 200 160" fill="none" className="w-full h-full">
    <defs>
      <linearGradient id="paperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#e2e8f0" />
      </linearGradient>
      <linearGradient id="penGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>

    {/* Shadow */}
    <ellipse cx="100" cy="148" rx="75" ry="8" fill="#1e293b" opacity="0.3" />

    {/* Second document behind */}
    <g transform="translate(55, 22)" opacity="0.4">
      <rect x="0" y="0" width="90" height="120" rx="4" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
    </g>

    {/* Main Document */}
    <g transform="translate(35, 12)">
      <rect x="0" y="0" width="95" height="125" rx="5" fill="url(#paperGrad)" />
      <rect x="0" y="0" width="95" height="125" rx="5" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />

      {/* Header */}
      <rect x="12" y="14" width="55" height="7" rx="2" fill="#64748b" opacity="0.5" />

      {/* Text lines */}
      <rect x="12" y="32" width="70" height="4" rx="1" fill="#94a3b8" opacity="0.5" />
      <rect x="12" y="42" width="55" height="4" rx="1" fill="#94a3b8" opacity="0.5" />
      <rect x="12" y="52" width="65" height="4" rx="1" fill="#94a3b8" opacity="0.5" />

      {/* Chart visualization */}
      <rect x="12" y="68" width="70" height="45" rx="3" fill="#1e293b" opacity="0.08" />
      <g transform="translate(18, 75)">
        <rect x="0" y="22" width="10" height="14" rx="2" fill="#10b981" />
        <rect x="14" y="14" width="10" height="22" rx="2" fill="#10b981" />
        <rect x="28" y="6" width="10" height="30" rx="2" fill="#10b981" />
        <rect x="42" y="16" width="10" height="20" rx="2" fill="#10b981" />
        <rect x="56" y="10" width="10" height="26" rx="2" fill="#34d399" />
      </g>
    </g>

    {/* Pen */}
    <g transform="translate(110, 55) rotate(40)">
      <rect x="0" y="0" width="75" height="14" rx="3" fill="url(#penGrad)" />
      <polygon points="75,0 75,14 90,7" fill="#065f46" />
      <rect x="0" y="4" width="10" height="6" rx="2" fill="#34d399" />
      <rect x="58" y="3" width="14" height="8" rx="2" fill="#a7f3d0" />
    </g>

    {/* Decorative lines from pen */}
    <g stroke="#10b981" strokeWidth="2" strokeLinecap="round" opacity="0.5">
      <path d="M160 100 Q172 118 185 106" />
      <path d="M168 106 Q178 122 192 112" />
    </g>
  </svg>
);

// Verification Illustration - Clipboard with checkmarks and approval badge
const VerificationIllustration = () => (
  <svg viewBox="0 0 200 160" fill="none" className="w-full h-full">
    <defs>
      <linearGradient id="clipGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#5eead4" />
        <stop offset="100%" stopColor="#14b8a6" />
      </linearGradient>
      <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>

    {/* Shadow */}
    <ellipse cx="100" cy="150" rx="70" ry="8" fill="#1e293b" opacity="0.3" />

    {/* Clipboard body */}
    <g transform="translate(42, 8)">
      <rect x="0" y="18" width="100" height="130" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />

      {/* Clipboard clip */}
      <rect x="32" y="6" width="36" height="22" rx="4" fill="url(#clipGrad)" />
      <rect x="40" y="14" width="20" height="8" rx="2" fill="#f8fafc" />

      {/* Title bar */}
      <rect x="14" y="38" width="60" height="6" rx="2" fill="#14b8a6" opacity="0.35" />

      {/* Checklist items */}
      <g transform="translate(14, 56)">
        {/* Item 1 - Checked */}
        <rect x="0" y="0" width="18" height="18" rx="4" fill="#10b981" opacity="0.15" stroke="#10b981" strokeWidth="2" />
        <path d="M5 9l3 3 7-7" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="26" y="13" fill="#475569" fontSize="10" fontFamily="system-ui">No Errors</text>

        {/* Item 2 - Checked */}
        <rect x="0" y="26" width="18" height="18" rx="4" fill="#10b981" opacity="0.15" stroke="#10b981" strokeWidth="2" />
        <path d="M5 35l3 3 7-7" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="26" y="39" fill="#475569" fontSize="10" fontFamily="system-ui">Consistent</text>

        {/* Item 3 - Checked */}
        <rect x="0" y="52" width="18" height="18" rx="4" fill="#10b981" opacity="0.15" stroke="#10b981" strokeWidth="2" />
        <path d="M5 61l3 3 7-7" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="26" y="65" fill="#475569" fontSize="10" fontFamily="system-ui">No Outliers</text>

        {/* Item 4 - Checked */}
        <rect x="0" y="78" width="18" height="18" rx="4" fill="#10b981" opacity="0.15" stroke="#10b981" strokeWidth="2" />
        <path d="M5 87l3 3 7-7" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="26" y="91" fill="#475569" fontSize="10" fontFamily="system-ui">Reliable</text>
      </g>
    </g>

    {/* Certificate/Badge */}
    <g transform="translate(132, 85)">
      <circle cx="28" cy="28" r="26" fill="url(#badgeGrad)" opacity="0.95" />
      <circle cx="28" cy="28" r="20" fill="none" stroke="#fef3c7" strokeWidth="2.5" />
      <path d="M20 28l6 6 12-12" stroke="#fef3c7" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Ribbon tails */}
      <polygon points="16,50 28,56 28,78 16,66" fill="#f59e0b" />
      <polygon points="40,50 28,56 28,78 40,66" fill="#d97706" />
    </g>

    {/* Sparkles */}
    <g fill="#fbbf24">
      <circle cx="168" cy="80" r="3" />
      <circle cx="155" cy="65" r="2" />
      <circle cx="178" cy="72" r="2" />
    </g>
  </svg>
);

const pillars = [
  {
    id: "01",
    title: "Monitoring",
    desc: "Tracking project success and optimizing for impact",
    Illustration: MonitoringIllustration,
  },
  {
    id: "02",
    title: "Reporting",
    desc: "Summarizing data and impacts for transparency and verification",
    Illustration: ReportingIllustration,
  },
  {
    id: "03",
    title: "Verification",
    desc: "Independent checks to ensure accuracy and standard compliance",
    Illustration: VerificationIllustration,
  },
];

export default function MRV() {
  return (
    <section
      id="mrv"
      className="relative bg-gradient-to-b from-slate-950 via-[#071a1f] to-slate-950 py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2.5 mb-6 backdrop-blur-sm">
            <div className="relative">
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping absolute" />
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full" />
            </div>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
              MRV Engine
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-5 leading-tight">
            MRV that feels like a{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">product</span>
            <br />— not a process
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed">
            Every step encoded into a rule-based engine. Data streams, validations, and verification cycles on a single, traceable system.
          </p>
        </div>

        {/* Illustrated Cards - dClimate style */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const { Illustration } = pillar;
            return (
              <div
                key={pillar.id}
                className="group relative rounded-3xl bg-slate-900/60 border border-slate-700/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-emerald-400/30 hover:bg-slate-800/60"
              >
                {/* Illustration container */}
                <div className="relative h-52 bg-gradient-to-b from-slate-800/40 to-transparent p-4 flex items-center justify-center">
                  <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                    <Illustration />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-2 text-center">
                  <h3 className="text-2xl font-semibold text-slate-100 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-emerald-500/5 to-transparent pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Flow indicator - Hidden on mobile */}
        <div className="hidden md:flex justify-center items-center mt-12 gap-4">
          {pillars.map((pillar, index) => (
            <div key={pillar.id} className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400" />
                <span className="text-sm font-medium text-slate-400">{pillar.title}</span>
              </div>
              {index < pillars.length - 1 && (
                <svg className="w-10 h-5 mx-4 text-slate-600" viewBox="0 0 40 20">
                  <path d="M0 10h30M24 5l8 5-8 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <p className="mt-8 text-center text-sm text-slate-500 px-4">
          One shared, versioned, auditable project record
        </p>
      </div>
    </section>
  );
}