// src/components/sections/ImplementationPilot.tsx
import { Rocket, Zap, TrendingUp } from "lucide-react";

const pilotPhases = [
  {
    icon: Rocket,
    phase: "Start",
    title: "Pilot Setup",
    desc: "Configure your first project with methodology selection and data source integration",
    timeline: "Week 1-2"
  },
  {
    icon: Zap,
    phase: "Execute", 
    title: "Live MRV Cycle",
    desc: "Run monitoring, reporting, and verification with real data and VVB collaboration",
    timeline: "Week 3-8"
  },
  {
    icon: TrendingUp,
    phase: "Scale",
    title: "Portfolio Expansion",
    desc: "Clone successful templates across multiple assets and methodologies",
    timeline: "Month 3+"
  }
] as const;

export default function ImplementationPilot() {
  return (
    <section
      id="pilot"
      className="relative bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-20 md:py-24 border-t border-emerald-500/10 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 mb-4">
            <Rocket className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
              Implementation
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Start with a 
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Live Pilot</span>
          </h2>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Real-world MRV workflows from setup to portfolio scaling
          </p>
        </div>

        {/* Timeline layout */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent transform -translate-y-1/2 hidden md:block" />
          
          <div className="grid gap-8 md:grid-cols-3">
            {pilotPhases.map((phase, index) => (
              <div key={phase.title} className="relative">
                {/* Timeline node */}
                {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full border-4 border-slate-950 z-10 hidden md:block" /> */}
                
                <div className="group relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-900/60 backdrop-blur-sm p-8 text-center transition-all duration-300 hover:border-emerald-400/40 hover:bg-slate-800/80">
                  {/* Animated background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className="relative mb-6 mx-auto">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-600/20 border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto">
                        <phase.icon className="w-8 h-8 text-emerald-400" />
                      </div>
                      <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-emerald-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Phase badge */}
                    <div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 px-3 py-1 mb-4">
                      <span className="text-xs font-medium text-emerald-300">{phase.phase}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-slate-50 mb-3 group-hover:text-emerald-100 transition-colors">
                      {phase.title}
                    </h3>
                    
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                      {phase.desc}
                    </p>

                    {/* Timeline */}
                    <div className="inline-flex items-center gap-2 text-xs text-slate-500">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                      <span>{phase.timeline}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 rounded-2xl border border-slate-700 bg-slate-900/50 px-8 py-4">
            <span className="text-sm font-medium text-slate-300">Ready to start your pilot?</span>
            <div className="flex items-center gap-2 text-emerald-400">
              <span className="text-sm font-medium">Talk to us</span>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
