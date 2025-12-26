// src/components/sections/AISection.tsx
import { Brain, Zap, TrendingUp, Shield, Eye, AlertTriangle } from "lucide-react";

const aiCapabilities = [
  {
    icon: Brain,
    title: "Developer & MRV Intelligence",
    desc: "Registry pathway suggestions, document completeness checks, and baseline validation using peer benchmarks and methodology logic.",
    keyFeatures: ["Smart onboarding guidance", "Evidence gap detection", "Baseline sanity checks"]
  },
  {
    icon: Zap,
    title: "Document & Data Intelligence",
    desc: "Contextual document analysis, parameter extraction, and conflict detection across PDDs, monitoring reports, and annexes.",
    keyFeatures: ["Document hierarchy understanding", "Version change summaries", "Citation linking"]
  },
  {
    icon: Eye,
    title: "VVB Review Assistance",
    desc: "Automated anomaly detection, review prompt generation, and structured verification notes for enhanced VVB workflows.",
    keyFeatures: ["Dataset anomaly analysis", "Review prompt generation", "Verification note automation"]
  },
  {
    icon: TrendingUp,
    title: "Market & Pricing Intelligence",
    desc: "Quality scoring, liquidity signals, and vintage predictions for informed procurement and portfolio management decisions.",
    keyFeatures: ["Batch quality scoring", "Liquidity signal generation", "Portfolio optimization"]
  },
  {
    icon: Shield,
    title: "Risk & Portfolio Management",
    desc: "Portfolio composition analysis, diversification strategies, and exposure scoring for long-term climate commitments.",
    keyFeatures: ["Portfolio diversification", "Risk exposure scoring", "ESG target alignment"]
  },
  {
    icon: AlertTriangle,
    title: "Early Warning Systems",
    desc: "Policy tracking, methodology revision alerts, and performance anomaly monitoring for proactive risk management.",
    keyFeatures: ["Policy update tracking", "Methodology change alerts", "Performance monitoring"]
  }
] as const;

export default function AISection() {
  return (
    <section
      id="ai"
      className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 md:py-24 border-t border-emerald-500/10 overflow-hidden"
    >
      {/* AI-themed background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-100" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-indigo-500/15 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* ENHANCED HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 mb-4">
            <Brain className="w-4 h-4 text-violet-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-400">
              AI Intelligence Layer
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            System-level{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              intelligence
            </span>
            {" "}for MRV & procurement
          </h2>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8 px-4">
            CredoCarbon uses contextual AI to enhance decision-making across project design,
            monitoring, verification and market operations — without overwhelming teams or
            replacing expert judgement.
          </p>
        </div>

        {/* UNIFIED AI CAPABILITIES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aiCapabilities.map((capability, index) => {
            const colors = [
              'from-violet-500/20 to-purple-600/20 border-violet-400/30',
              'from-purple-500/20 to-pink-600/20 border-purple-400/30',
              'from-pink-500/20 to-rose-600/20 border-pink-400/30',
              'from-blue-500/20 to-violet-600/20 border-blue-400/30',
              'from-indigo-500/20 to-purple-600/20 border-indigo-400/30',
              'from-cyan-500/20 to-violet-600/20 border-cyan-400/30'
            ];

            return (
              <div
                key={capability.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-violet-400/40 hover:bg-slate-800/80"
              >
                {/* Enhanced hover effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${colors[index]} opacity-10`} />

                <div className="relative">
                  {/* AI icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${colors[index]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <capability.icon className="w-6 h-6 text-violet-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-50 group-hover:text-violet-100 transition-colors">
                      {capability.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                    {capability.desc}
                  </p>

                  {/* Key features */}
                  <div className="space-y-2">
                    {capability.keyFeatures.map((feature) => (
                      <div key={feature} className="flex gap-2 items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-400 to-purple-400 animate-pulse" />
                        <span className="text-xs text-slate-400 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI PERFORMANCE METRICS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "AI Models", value: "15+", desc: "Specialized models" },
            { label: "Accuracy Rate", value: "99.2%", desc: "Anomaly detection" },
            { label: "Processing Speed", value: "Real-time", desc: "Data analysis" },
            { label: "Data Points", value: "1M+", desc: "Daily processing" }
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-slate-800 bg-slate-900/30 group hover:border-violet-400/30 transition-colors">
              <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-300 mb-1">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 rounded-2xl border border-slate-700 bg-slate-900/50 px-8 py-4">
            <Brain className="w-5 h-5 text-violet-400" />
            <span className="text-sm font-medium text-slate-300">AI-powered insights without replacing human expertise</span>
          </div>
        </div>
      </div>
    </section>
  );
}
