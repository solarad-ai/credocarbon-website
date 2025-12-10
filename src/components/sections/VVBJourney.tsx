// src/components/sections/VVBJourney.tsx
import { Search, MessageSquare, Shield, TrendingUp } from "lucide-react";

const verificationSteps = [
  {
    phase: "Intake",
    title: "Structured Project Review",
    desc: "Receive organized dossiers with methodology alignment and version history",
    icon: Search,
    metrics: "90% faster intake"
  },
  {
    phase: "Review",
    title: "Collaborative Verification",
    desc: "Reviewer queues, comment threads, and real-time clarification cycles",
    icon: MessageSquare,
    metrics: "50% fewer cycles"
  },
  {
    phase: "Validate",
    title: "Data & Compliance Checks",
    desc: "Automated anomaly detection with methodology-specific validation",
    icon: Shield,
    metrics: "Zero missed issues"
  },
  {
    phase: "Certify",
    title: "Digital Sign-off & Tracking",
    desc: "Cryptographic verification opinions with post-issuance monitoring",
    icon: TrendingUp,
    metrics: "Full audit trail"
  }
] as const;

export default function VVBJourney() {
  return (
    <section
      id="vvb"
      className="relative bg-slate-950 py-20 md:py-24 border-t border-emerald-500/10"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 mb-4">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
              VVB Workflow
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Streamlined 
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Verification</span>
          </h2>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Audit-ready workflows with structured evidence and cryptographic integrity
          </p>
        </div>

        {/* Timeline-style layout */}
        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-px bg-gradient-to-b from-cyan-400/50 via-emerald-400/50 to-cyan-400/50 hidden md:block" />
          
          <div className="space-y-12">
            {verificationSteps.map((step, index) => (
              <div
                key={step.title}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full border-4 border-slate-950 z-10 hidden md:block" />
                
                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-800/80">
                    {/* Animated background */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10" />
                    
                    <div className="relative">
                      {/* Phase badge */}
                      <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 border border-cyan-400/30 px-3 py-1 mb-4">
                        <step.icon className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-medium text-cyan-300">{step.phase}</span>
                      </div>

                      <h3 className="text-xl font-semibold text-slate-50 mb-2 group-hover:text-cyan-100 transition-colors">
                        {step.title}
                      </h3>
                      
                      <p className="text-slate-400 mb-4 leading-relaxed">
                        {step.desc}
                      </p>

                      {/* Metrics */}
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-emerald-300">
                          {step.metrics}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/50 px-6 py-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 flex items-center justify-center">
                <span className="text-xs font-bold text-slate-900">V</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center justify-center">
                <span className="text-xs font-bold text-slate-900">V</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center">
                <span className="text-xs font-bold text-slate-900">B</span>
              </div>
            </div>
            <span className="text-sm text-slate-300">Trusted by leading verification bodies</span>
          </div>
        </div>
      </div>
    </section>
  );
}
