// src/components/sections/DeveloperJourney.tsx
import { FileText, Database, CheckCircle, Zap } from "lucide-react";

const keyFeatures = [
  {
    icon: FileText,
    title: "Project Setup & Documentation",
    desc: "Registry-aligned templates with smart placeholders and version control",
    highlight: "60% faster setup"
  },
  {
    icon: Database,
    title: "Data Integration & MRV",
    desc: "Connect SCADA, meters, and sensors with automated validation and reporting",
    highlight: "Real-time monitoring"
  },
  {
    icon: CheckCircle,
    title: "Verification & Submission",
    desc: "Structured VVB workflows with completeness checks and audit trails",
    highlight: "Streamlined cycles"
  },
  {
    icon: Zap,
    title: "Post-Issuance Management",
    desc: "Deal rooms, batch tracking, and retirement coordination in one workspace",
    highlight: "End-to-end visibility"
  }
] as const;

export default function DeveloperJourney() {
  return (
    <section
      id="developer"
      className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 md:py-24 border-t border-emerald-500/10 overflow-hidden"
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
            One unified workspace for the entire project lifecycle
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {keyFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative"
            >
              {/* Connection line to next card */}
              {index < keyFeatures.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-4 w-8 h-px bg-gradient-to-r from-emerald-400/50 to-transparent z-10" />
              )}
              
              <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-slate-900/60 backdrop-blur-sm p-6 h-full transition-all duration-300 group-hover:border-emerald-400/40 group-hover:bg-slate-800/80">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />
                
                <div className="relative">
                  {/* Icon with glow effect */}
                  <div className="relative mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="absolute inset-0 w-12 h-12 rounded-2xl bg-emerald-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-50 mb-2 group-hover:text-emerald-100 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">
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
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-slate-400">
            <span>Complete project lifecycle in one platform</span>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
