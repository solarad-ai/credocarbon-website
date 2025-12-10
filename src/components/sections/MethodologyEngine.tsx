// src/components/sections/MethodologyEngine.tsx

import { Target, Calculator, BarChart3, CheckCircle2 } from "lucide-react";

const methodologyFeatures = [
  {
    icon: Target,
    title: "Smart Methodology Mapping",
    desc: "Auto-detect eligible methodologies and generate registry-specific templates",
    registries: ["Verra", "Gold Standard", "GCC", "Plan Vivo"]
  },
  {
    icon: Calculator,
    title: "Baseline & Parameter Logic",
    desc: "Traceable calculations with emission factors and technology profiles",
    registries: ["Grid factors", "Conservative approaches", "Fallback values"]
  },
  {
    icon: BarChart3,
    title: "Monitoring Computations",
    desc: "Auto-generated monitoring sheets with anomaly detection",
    registries: ["Missing hours", "Outage adjustments", "Curtailment handling"]
  },
  {
    icon: CheckCircle2,
    title: "Compliance Validation",
    desc: "Automated rule enforcement and cross-registry compatibility",
    registries: ["Completeness checks", "Value validation", "Format conversion"]
  }
] as const;

export default function MethodologyEngine() {
  return (
    <section
      id="methodology"
      className="relative bg-slate-950 py-20 md:py-24 border-t border-emerald-500/10"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 mb-4">
            <Calculator className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
              Methodology Engine
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Registry-Aligned 
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"> Calculations</span>
          </h2>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Methodology-aware baselines and monitoring with full traceability
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {methodologyFeatures.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-slate-900/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-blue-400/40 hover:bg-slate-800/80"
            >
              {/* Animated background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10" />
              
              <div className="relative">
                {/* Icon */}
                <div className="relative mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border border-blue-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="absolute inset-0 w-12 h-12 rounded-2xl bg-blue-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="text-lg font-semibold text-slate-50 mb-2 group-hover:text-blue-100 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  {feature.desc}
                </p>

                {/* Registry tags */}
                <div className="flex flex-wrap gap-1">
                  {feature.registries.map((registry) => (
                    <span
                      key={registry}
                      className="inline-flex items-center rounded-full bg-blue-500/15 border border-blue-400/30 px-2 py-1 text-xs font-medium text-blue-300"
                    >
                      {registry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom highlight */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/50 px-6 py-4">
            <CheckCircle2 className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-slate-300">
              Full calculation traceability from parameter to output
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
