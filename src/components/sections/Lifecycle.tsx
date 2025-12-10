// src/components/sections/Lifecycle.tsx

const stages = [
  {
    id: "01",
    title: "Project design & onboarding",
    desc: "Define the project, assets, baseline logic, methodologies and stakeholders. Establish the digital foundation for the entire carbon credit lifecycle.",
    bullets: [
      "Configure project details, commissioning year, asset metadata and technology parameters.",
      "Select methodologies and registry pathways with system intelligence recommendations.",
      "Upload PDD drafts, safeguards documentation and stakeholder consultation evidence.",
      "Map monitoring data sources (SCADA, IoT, meters, satellite, weather APIs).",
      "Initiate baseline modelling with traceable equations and parameter sources.",
    ],
  },
  {
    id: "02",
    title: "Monitoring & data integrity",
    desc: "Ingest and validate high-frequency datasets using methodology-aware rules to prepare monitoring outputs.",
    bullets: [
      "Import SCADA, IoT, inverter, meter and weather datasets at various resolutions.",
      "Detect anomalies: missing hours, negative values, drift, step changes and curtailment.",
      "Apply plausibility checks linked to plant capacity, irradiance patterns and methodology logic.",
      "Align all datasets to monitoring period boundaries with automated corrections.",
      "Generate monitoring snapshots with evidence traceability and version history.",
    ],
  },
  {
    id: "03",
    title: "Reporting & submission",
    desc: "Assemble methodology-aligned reports, evidence bundles and registry-ready data packets with completeness and validation checks.",
    bullets: [
      "Auto-generate monitoring reports using methodology formulae and parameter tables.",
      "Attach evidence files, annexes and real-time dataset references.",
      "Run completeness checks for missing annexes, fields and inconsistent parameter values.",
      "Compile registry-ready packets with structured naming and hashed evidence lists.",
      "Freeze submissions with cryptographic integrity for VVB and registry review.",
    ],
  },
  {
    id: "04",
    title: "Verification, issuance & market",
    desc: "Enable VVB review cycles, approval, issuance and buyer-facing liquidity with full traceability.",
    bullets: [
      "VVBs review monitoring sheets, data anomalies, evidence bundles and clarifications.",
      "Developers resolve comments with version-tracked updates and state transitions.",
      "Lock verification opinions with cryptographic signatures and freeze states.",
      "Submit approved packets to registry pathways for issuance.",
      "Expose issued credits to deal rooms with pricing signals, risk scores and provenance.",
    ],
  },
];

export default function Lifecycle() {
  return (
    <section
      id="lifecycle"
      className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-20 md:py-24 border-t border-emerald-500/10"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 mb-4">
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-400">
              End-to-End Lifecycle
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            From first PDD to final retirement —
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> all in one workspace</span>
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed">
            CredoCarbon structures the entire carbon credit lifecycle into predictable, 
            auditable stages — enabling Developers, VVBs, Registries and Buyers to operate 
            on one shared, verified system of record.
          </p>
        </div>

        {/* ENHANCED STAGES - Flow Layout */}
        <div className="relative">
          {/* Flow connector line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent transform -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stages.map((stage, index) => {
              const colors = [
                'from-emerald-500/20 to-teal-600/20',
                'from-cyan-500/20 to-blue-600/20', 
                'from-indigo-500/20 to-purple-600/20',
                'from-purple-500/20 to-pink-600/20'
              ];
              
              return (
                <div key={stage.title} className="relative">
                  {/* Flow node */}
                  {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full border-4 border-slate-950 z-10 hidden lg:block" /> */}
                  
                  <div className="group relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm p-6 h-full transition-all duration-300 hover:border-indigo-400/40 hover:bg-slate-800/80">
                    {/* Enhanced hover effect */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${colors[index]} opacity-10`} />

                    <div className="relative">
                      {/* Stage indicator */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${colors[index]} border border-indigo-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-sm font-bold text-indigo-300">{stage.id}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-slate-50 group-hover:text-indigo-100 transition-colors">
                            {stage.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-sm text-slate-300 mb-4 leading-relaxed">{stage.desc}</p>

                      {/* Enhanced bullets */}
                      <div className="space-y-2">
                        {stage.bullets.slice(0, 3).map((bullet, bulletIndex) => (
                          <div key={bullet} className="flex gap-2 items-start">
                            <div className="relative mt-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" />
                              <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-indigo-400/50 blur-sm animate-pulse" />
                            </div>
                            <span className="text-xs text-slate-400 leading-relaxed">{bullet}</span>
                          </div>
                        ))}
                        
                        {stage.bullets.length > 3 && (
                          <div className="flex gap-2 items-center mt-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                            <span className="text-xs text-slate-500">+{stage.bullets.length - 3} more capabilities</span>
                          </div>
                        )}
                      </div>

                      {/* Stage progress indicator */}
                      <div className="mt-4 pt-3 border-t border-slate-700">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-500">Stage {stage.id}</span>
                          <div className="flex gap-1">
                            {Array.from({ length: 4 }).map((_, i) => (
                              <div 
                                key={i} 
                                className={`w-1.5 h-1.5 rounded-full ${i <= index ? 'bg-indigo-400' : 'bg-slate-600'}`} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 rounded-2xl border border-slate-700 bg-slate-900/50 px-8 py-4">
            <span className="text-sm font-medium text-slate-300">Complete lifecycle visibility</span>
            <div className="w-px h-6 bg-slate-600" />
            <span className="text-sm font-medium text-slate-300">Predictable, auditable stages</span>
            <div className="w-px h-6 bg-slate-600" />
            <span className="text-sm font-medium text-slate-300">Shared system of record</span>
          </div>
        </div>
      </div>
    </section>
  );
}
