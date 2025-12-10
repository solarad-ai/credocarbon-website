// src/components/sections/WhatWeAre.tsx
import { Workflow, Layers, Orbit } from "lucide-react";

const pillars = [
  {
    icon: Workflow,
    title: "Unified lifecycle workspace",
    desc: "One system of record for the entire credit lifecycle — from first PDD draft and data room setup to verification, issuance, trading and retirement.",
    points: [
      "Single project file with documents, data, comments and states.",
      "No parallel spreadsheets or hidden email threads.",
      "Every update captured as a structured, auditable event.",
    ],
  },
  {
    icon: Layers,
    title: "End-to-end MRV & registry rails",
    desc: "MRV, methodologies and registry workflows are encoded as rules — so teams move faster without losing verification-grade rigour.",
    points: [
      "Monitoring, reporting and verification mapped to methodology logic.",
      "Registry-aligned submissions, packets and annex structures.",
      "Configurable rules for different standards and project types.",
    ],
  },
  {
    icon: Orbit,
    title: "Market & portfolio intelligence",
    desc: "Credits don’t disappear into static PDFs — they become programmable assets with clear provenance, risk signals and portfolio context.",
    points: [
      "Deal rooms, pricing signals and batch-level traceability.",
      "Portfolio views for buyers, brokers and funds.",
      "Chain-of-custody visibility from project to retirement.",
    ],
  },
];

export default function WhatWeAre() {
  return (
    <section
      id="overview-deep"
      className="relative py-20 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-emerald-500/10 overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Enhanced Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
              What We Are
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            The foundational 
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"> digital layer</span>
            <br />for carbon project lifecycles
          </h2>

          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            CredoCarbon is the unified system where Developers, VVBs, Registries and Buyers work off the
            same project file — documents, data, workflows and credits all tied into one
            lifecycle-aware workspace.
          </p>

          <div className="mx-auto mb-6 h-px w-32 bg-gradient-to-r from-emerald-500/0 via-emerald-400/70 to-emerald-500/0" />

          <p className="text-sm text-slate-400 max-w-3xl mx-auto">
            From first PDD and baseline modelling to MRV, issuance and OTC trades, CredoCarbon
            replaces disconnected tools with a single, registry-aligned infrastructure layer.
          </p>
        </div>

        {/* Enhanced Pillars with staggered layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map(({ icon: Icon, title, desc, points }, index) => (
            <div
              key={title}
              className={`group relative ${index === 1 ? 'md:mt-8' : ''}`}
            >
              <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-slate-900/60 backdrop-blur-sm p-8 h-full transition-all duration-300 hover:border-emerald-400/40 hover:bg-slate-800/80">
                {/* Enhanced hover effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/15 via-transparent to-teal-500/10" />

                <div className="relative">
                  {/* Enhanced icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-600/20 border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-emerald-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-50 mb-3 group-hover:text-emerald-100 transition-colors">
                    {title}
                  </h3>

                  <p className="text-sm text-slate-300 mb-4 leading-relaxed">{desc}</p>

                  <ul className="space-y-2 text-sm text-slate-300">
                    {points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced bottom section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-6 rounded-2xl border border-slate-700 bg-slate-900/50 px-8 py-6">
            <div className="flex items-center gap-2">
              <Workflow className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium text-slate-300">Developers keep projects moving</span>
            </div>
            <div className="w-px h-6 bg-slate-600" />
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium text-slate-300">VVBs & registries trust what they see</span>
            </div>
            <div className="w-px h-6 bg-slate-600" />
            <div className="flex items-center gap-2">
              <Orbit className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium text-slate-300">Buyers trust what they buy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
