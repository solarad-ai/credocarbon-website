// src/components/sections/MRV.tsx

const pillars = [
  {
    id: "01",
    title: "Monitoring",
    desc: "Continuous ingestion of SCADA, IoT, meter and weather data with automated validation, anomaly detection and methodology-aware corrections.",
    bullets: [
      "Ingest high-frequency datasets: SCADA, inverter, meter, satellite & weather APIs.",
      "Detect gaps, spikes, negative values, drift, curtailment and step changes.",
      "Run plant-capacity and irradiance-based plausibility checks.",
      "Align datasets to methodology-defined monitoring period boundaries.",
      "Generate monitoring snapshots with full evidence traceability.",
    ],
  },
  {
    id: "02",
    title: "Reporting",
    desc: "Automated, methodology-aligned reporting with parameter tables, annex references, completeness checks and registry-ready packet generation.",
    bullets: [
      "Auto-create monitoring worksheets using methodology equations & parameter logic.",
      "Link annexes, datasets and evidence bundles to individual calculations.",
      "Completeness checks for missing fields, inconsistent parameters or annex gaps.",
      "Generate registry-ready reporting packets with hashed evidence lists.",
      "Version control for all reports, parameters and dataset transformations.",
    ],
  },
  {
    id: "03",
    title: "Verification",
    desc: "VVB review workflows with comment cycles, cryptographically anchored sign-off states and machine-checkable consistency checks.",
    bullets: [
      "Reviewer dashboards with queues, SLA timers and priority sorting.",
      "Raise comments on datasets, annexes, calculations and evidence sections.",
      "Resolve clarifications with version-tracked developer responses.",
      "Run automated consistency audits before verification approval.",
      "Freeze verification opinions with digital signatures and hash anchors.",
    ],
  },
];

export default function MRV() {
  return (
    <section
      id="mrv"
      className="relative bg-slate-950 py-20 md:py-24 border-t border-emerald-500/10 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-200" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-teal-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-800" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-500/10 px-4 py-2 mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-green-400">
              MRV Engine
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            MRV that feels like a 
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> product</span>
            <br />— not a process
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed">
            Every step in Monitoring, Reporting and Verification is encoded into CredoCarbon's 
            rule-based engine. Data streams, validations, methodology logic, annex structures and 
            verification cycles operate on a single, traceable system of record.
          </p>
        </div>

        {/* ENHANCED MRV PILLARS */}
        <div className="relative">
          {/* Connection arrows */}
          <div className="hidden lg:flex absolute top-1/2 left-0 right-0 items-center justify-between transform -translate-y-1/2 px-32">
            <div className="flex-1 h-px bg-gradient-to-r from-green-400/50 to-emerald-400/50" />
            <div className="mx-8 flex-1 h-px bg-gradient-to-r from-emerald-400/50 to-teal-400/50" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const colors = [
                'from-green-500/20 to-emerald-600/20 border-green-400/30',
                'from-emerald-500/20 to-teal-600/20 border-emerald-400/30',
                'from-teal-500/20 to-cyan-600/20 border-teal-400/30'
              ];
              
              const iconColors = ['text-green-400', 'text-emerald-400', 'text-teal-400'];
              
              return (
                <div key={pillar.title} className="relative">
                  {/* Flow indicators */}
                  {index < 2 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-px bg-gradient-to-r from-emerald-400/70 to-transparent" />
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-emerald-400 rounded-full" />
                    </div>
                  )}
                  
                  <div className="group relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm p-8 h-full transition-all duration-300 hover:border-emerald-400/40 hover:bg-slate-800/80">
                    {/* Enhanced hover effect */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${colors[index]} opacity-10`} />

                    <div className="relative">
                      {/* Enhanced pillar header */}
                      <div className="text-center mb-6">
                        <div className="relative mx-auto mb-4">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors[index]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <span className={`text-2xl font-bold ${iconColors[index]}`}>{pillar.id}</span>
                          </div>
                          <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-emerald-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        <h3 className="text-xl font-semibold text-slate-50 mb-3 group-hover:text-emerald-100 transition-colors">
                          {pillar.title}
                        </h3>
                        
                        <p className="text-sm text-slate-300 leading-relaxed">{pillar.desc}</p>
                      </div>

                      {/* Enhanced capabilities */}
                      <div className="space-y-3">
                        {pillar.bullets.map((bullet, bulletIndex) => (
                          <div key={bullet} className="flex gap-3 items-start">
                            <div className="relative mt-2">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${iconColors[index].replace('text-', 'from-')} to-emerald-400`} />
                              <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400/50 blur-sm animate-pulse" />
                            </div>
                            <span className="text-sm text-slate-300 leading-relaxed">{bullet}</span>
                          </div>
                        ))}
                      </div>

                      {/* Process indicator */}
                      <div className="mt-6 pt-4 border-t border-slate-700">
                        <div className="flex items-center justify-center gap-2">
                          <div className={`w-2 h-2 ${iconColors[index].replace('text-', 'bg-')} rounded-full animate-pulse`} />
                          <span className="text-xs text-slate-400 font-medium">
                            {index === 0 ? 'Data Ingestion & Validation' : 
                             index === 1 ? 'Report Generation & Compliance' : 'Review Cycles & Sign-off'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced bottom section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 rounded-2xl border border-slate-700 bg-slate-900/50 px-8 py-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-slate-300">Monitoring</span>
            </div>
            <div className="w-8 h-px bg-gradient-to-r from-green-400 to-emerald-400" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse delay-300" />
              <span className="text-sm font-medium text-slate-300">Reporting</span>
            </div>
            <div className="w-8 h-px bg-gradient-to-r from-emerald-400 to-teal-400" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse delay-600" />
              <span className="text-sm font-medium text-slate-300">Verification</span>
            </div>
          </div>
          
          <p className="mt-4 text-sm text-slate-400">
            One shared, versioned, auditable project record
          </p>
        </div>
      </div>
    </section>
  );
}