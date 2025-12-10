// src/components/sections/Roles.tsx
import { Users, CheckCircle, FileSearch, Briefcase } from "lucide-react";

const roles = [
  {
    icon: Users,
    label: "Project Developers & Asset Owners",
    desc: "Digitise the entire lifecycle — from onboarding assets to MRV, verification cycles, issuance and buyer-facing disclosures.",
    bullets: [
      "Guided onboarding for projects, assets, baselines and methodologies.",
      "Upload PDDs, monitoring evidence and annexes with version control.",
      "Resolve VVB comments via structured threads and clarification loops.",
      "Generate registry-ready submissions with auto-validation and completeness checks.",
      "Track issuance status, vintage breakdown and expected credit trajectories.",
    ],
  },
  {
    icon: FileSearch,
    label: "VVBs & Auditors",
    desc: "A structured, audit-grade workspace to manage verification cycles with clarity, traceability and cryptographic certainty.",
    bullets: [
      "Reviewer queues with SLA timers and priority breakdown.",
      "Raise comments on documents, data, annex pages or methodology parameters.",
      "Perform data checks: missing hours, anomalies, drift and baseline correctness.",
      "Lock verification opinions with cryptographic signatures.",
      "Export audit logs, comment summaries and verification reports instantly.",
    ],
  },
  {
    icon: CheckCircle,
    label: "Registries & Standard Bodies",
    desc: "Receive structured, machine-checkable submissions instead of fragmented attachments and long email chains.",
    bullets: [
      "Registry-aligned templates for baseline, monitoring and issuance files.",
      "Packet generator creates ready-to-validate submissions with hashed evidence.",
      "Coverage for Verra, Gold Standard, GCC, Plan Vivo and emerging regional standards.",
      "Cross-registry transformation engine ensures consistent field mapping.",
      "Clear provenance chain from developer → VVB → registry approvals.",
    ],
  },
  {
    icon: Briefcase,
    label: "Corporate Buyers, Brokers & Funds",
    desc: "Transparent procurement, risk scoring and lifecycle traceability — so every purchased credit is backed by real MRV context.",
    bullets: [
      "Portfolio filters by geography, methodology, SDG alignment and risk level.",
      "Deal rooms with term sheets, NDAs, data bundles and structured negotiation.",
      "Pricing signals, quality scoring and due-diligence insight layers.",
      "Track serial ranges, vintage allocation and retirement certificates.",
      "Chain-of-custody from issuance → transfer → retirement with full auditability.",
    ],
  },
];

export default function Roles() {
  return (
    <section
      id="roles"
      className="relative bg-slate-950 py-20 md:py-24 border-t border-emerald-500/10 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-300" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-2 mb-4">
            <Users className="w-4 h-4 text-teal-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-400">
              Who It's For
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Built for every actor in the 
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"> carbon ecosystem</span>
          </h2>
          
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Developers, VVBs, Registries and Buyers operate on the same structured project file —
            eliminating fragmented tools and enabling verification-grade collaboration from day one.
          </p>
        </div>

        {/* Enhanced Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {roles.map(({ icon: Icon, label, desc, bullets }, index) => {
            const colors = [
              'from-emerald-500/20 to-teal-600/20 border-emerald-400/30',
              'from-cyan-500/20 to-blue-600/20 border-cyan-400/30', 
              'from-teal-500/20 to-emerald-600/20 border-teal-400/30',
              'from-blue-500/20 to-indigo-600/20 border-blue-400/30'
            ];
            
            return (
              <div
                key={label}
                className="group relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm p-8 transition-all duration-300 hover:border-emerald-400/40 hover:bg-slate-800/80"
              >
                {/* Enhanced hover effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10" />

                <div className="relative">
                  {/* Enhanced icon section */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors[index]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-emerald-400" />
                      </div>
                      <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-emerald-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-50 mb-2 group-hover:text-emerald-100 transition-colors">
                        {label}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">{desc}</p>
                    </div>
                  </div>

                  {/* Enhanced bullet points */}
                  <div className="space-y-3">
                    {bullets.map((bullet, bulletIndex) => (
                      <div key={bullet} className="flex gap-3 items-start">
                        <div className="relative mt-2">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400" />
                          <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400/50 blur-sm animate-pulse" />
                        </div>
                        <span className="text-sm text-slate-300 leading-relaxed">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Role indicator */}
                  <div className="mt-6 pt-4 border-t border-slate-700">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                      <span className="text-xs text-slate-400 font-medium">
                        {index === 0 ? 'Project Lifecycle Management' : 
                         index === 1 ? 'Verification & Audit' :
                         index === 2 ? 'Registry & Standards' : 'Market & Trading'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Stakeholder Types", value: "4+" },
            { label: "Workflow States", value: "15+" },
            { label: "Registry Standards", value: "5+" },
            { label: "Project Types", value: "70+" }
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl border border-slate-800 bg-slate-900/30">
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
