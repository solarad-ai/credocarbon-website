// src/components/sections/MethodologyEngine.tsx

// Abstract illustration: Methodology Mapping - Target with branching paths
const MappingIllustration = () => (
  <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
    {/* Target rings */}
    <circle cx="30" cy="30" r="24" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.2" />
    <circle cx="30" cy="30" r="16" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
    <circle cx="30" cy="30" r="8" fill="#3b82f6" opacity="0.3" />
    <circle cx="30" cy="30" r="4" fill="#3b82f6" />

    {/* Branching paths */}
    <path d="M30 6 L30 14" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="2 2" />
    <path d="M54 30 L46 30" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="2 2" />
    <path d="M30 54 L30 46" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="2 2" />
    <path d="M6 30 L14 30" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="2 2" />

    {/* Corner nodes */}
    <rect x="2" y="2" width="8" height="8" rx="2" fill="#1e293b" stroke="#6366f1" strokeWidth="1" />
    <rect x="50" y="2" width="8" height="8" rx="2" fill="#1e293b" stroke="#6366f1" strokeWidth="1" />
    <rect x="2" y="50" width="8" height="8" rx="2" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" />
    <rect x="50" y="50" width="8" height="8" rx="2" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" />
  </svg>
);

// Abstract illustration: Calculator - Mathematical symbols
const CalculatorIllustration = () => (
  <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
    {/* Calculator body */}
    <rect x="10" y="5" width="40" height="50" rx="4" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />

    {/* Display */}
    <rect x="14" y="10" width="32" height="12" rx="2" fill="#0f172a" stroke="#6366f1" strokeWidth="0.5" />
    <text x="38" y="19" fill="#3b82f6" fontSize="8" fontFamily="monospace" textAnchor="end">∑x</text>

    {/* Grid of buttons */}
    <g fill="none" stroke="#3b82f6" strokeWidth="0.8">
      <rect x="14" y="26" width="8" height="6" rx="1" />
      <rect x="24" y="26" width="8" height="6" rx="1" />
      <rect x="34" y="26" width="8" height="6" rx="1" />
      <rect x="14" y="34" width="8" height="6" rx="1" />
      <rect x="24" y="34" width="8" height="6" rx="1" />
      <rect x="34" y="34" width="8" height="6" rx="1" />
      <rect x="14" y="42" width="8" height="6" rx="1" />
      <rect x="24" y="42" width="8" height="6" rx="1" />
    </g>
    <rect x="34" y="42" width="8" height="6" rx="1" fill="#3b82f6" opacity="0.3" stroke="#3b82f6" />

    {/* Math symbols floating */}
    <text x="52" y="15" fill="#6366f1" fontSize="10" opacity="0.5">π</text>
    <text x="4" y="45" fill="#6366f1" fontSize="8" opacity="0.5">∫</text>
  </svg>
);

// Abstract illustration: Chart - Line graph with data points
const ChartIllustration = () => (
  <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
    {/* Grid */}
    <g stroke="#3b82f6" strokeWidth="0.3" opacity="0.3">
      <line x1="10" y1="10" x2="10" y2="50" />
      <line x1="22" y1="10" x2="22" y2="50" />
      <line x1="34" y1="10" x2="34" y2="50" />
      <line x1="46" y1="10" x2="46" y2="50" />
      <line x1="10" y1="20" x2="50" y2="20" />
      <line x1="10" y1="30" x2="50" y2="30" />
      <line x1="10" y1="40" x2="50" y2="40" />
    </g>

    {/* Axes */}
    <line x1="10" y1="50" x2="50" y2="50" stroke="#3b82f6" strokeWidth="1" />
    <line x1="10" y1="10" x2="10" y2="50" stroke="#3b82f6" strokeWidth="1" />

    {/* Line chart */}
    <path d="M10 42 L18 35 L26 38 L34 25 L42 28 L50 18" stroke="#6366f1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

    {/* Data points */}
    <circle cx="18" cy="35" r="3" fill="#3b82f6" />
    <circle cx="34" cy="25" r="3" fill="#3b82f6" />
    <circle cx="50" cy="18" r="3" fill="#6366f1" />

    {/* Trend arrow */}
    <path d="M52 12 L56 8 L52 8 M56 8 L56 12" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Abstract illustration: Compliance - Shield with checkmarks
const ComplianceIllustration = () => (
  <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
    {/* Shield */}
    <path d="M30 5 L50 12 L50 30 C50 42 40 52 30 55 C20 52 10 42 10 30 L10 12 L30 5Z" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />

    {/* Inner shield ring */}
    <path d="M30 12 L44 17 L44 30 C44 39 36 46 30 48 C24 46 16 39 16 30 L16 17 L30 12Z" fill="none" stroke="#6366f1" strokeWidth="0.8" opacity="0.5" />

    {/* Triple checkmark */}
    <g stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 28 L24 32 L32 24" />
      <path d="M24 34 L27 37 L34 30" opacity="0.6" />
      <path d="M28 40 L30 42 L36 36" opacity="0.3" />
    </g>

    {/* Glow effect */}
    <circle cx="30" cy="30" r="6" fill="#3b82f6" opacity="0.1" />
  </svg>
);

const methodologyFeatures = [
  {
    title: "Smart Methodology Mapping",
    desc: "Auto-detect eligible methodologies and generate registry-specific templates",
    tags: ["Verra", "Gold Standard", "GCC"],
    Illustration: MappingIllustration,
  },
  {
    title: "Baseline & Parameter Logic",
    desc: "Traceable calculations with emission factors and technology profiles",
    tags: ["Grid factors", "Conservative", "Fallback"],
    Illustration: CalculatorIllustration,
  },
  {
    title: "Monitoring Computations",
    desc: "Auto-generated monitoring sheets with anomaly detection",
    tags: ["Missing hours", "Outage adj.", "Curtailment"],
    Illustration: ChartIllustration,
  },
  {
    title: "Compliance Validation",
    desc: "Automated rule enforcement and cross-registry compatibility",
    tags: ["Completeness", "Validation", "Format"],
    Illustration: ComplianceIllustration,
  }
];

export default function MethodologyEngine() {
  return (
    <section
      id="methodology"
      className="relative bg-gradient-to-b from-[#0c0f1a] via-[#0f1424] to-[#0c0f1a] py-20 md:py-24 overflow-hidden"
    >
      {/* Abstract background pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-500/3 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/3 rounded-full blur-[100px]" />
        {/* Grid pattern overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 mb-4 backdrop-blur-sm">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
              Methodology Engine
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Registry-Aligned
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"> Calculations</span>
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Methodology-aware baselines and monitoring with full traceability
          </p>
        </div>

        {/* Horizontal cards with illustrations on left */}
        <div className="space-y-4">
          {methodologyFeatures.map((feature, index) => {
            const { Illustration } = feature;
            const isEven = index % 2 === 0;

            return (
              <div
                key={feature.title}
                className={`group flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-4 items-center rounded-2xl border border-blue-500/20 bg-slate-900/40 backdrop-blur-sm p-4 md:p-6 transition-all duration-300 hover:border-blue-400/40 hover:bg-slate-800/50`}
              >
                {/* Illustration */}
                <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-500">
                  <Illustration />
                </div>

                {/* Content */}
                <div className={`flex-1 ${isEven ? 'md:text-left' : 'md:text-right'} text-center`}>
                  <h3 className="text-lg font-semibold text-slate-50 mb-1 group-hover:text-blue-100 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-3">
                    {feature.desc}
                  </p>
                  <div className={`flex flex-wrap gap-1 ${isEven ? 'md:justify-start' : 'md:justify-end'} justify-center`}>
                    {feature.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300/80 border border-blue-400/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Step indicator */}
                <div className="hidden md:flex w-10 h-10 rounded-full bg-blue-500/20 border border-blue-400/30 items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-blue-400">{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom highlight */}
        <div className="mt-10 text-center">
          <span className="inline-flex items-center gap-2 text-sm text-slate-500">
            <svg className="w-4 h-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Full calculation traceability from parameter to output
          </span>
        </div>
      </div>
    </section>
  );
}
