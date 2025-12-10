// src/components/sections/Architecture.tsx
import { Database, Cog, Workflow, Globe, Shield, Layers } from "lucide-react";

const architectureModules = [
  {
    icon: Database,
    title: "Data & Evidence Layer",
    desc: "Unified ingestion of SCADA, IoT, satellite, and external datasets with immutable versioning and asset-level metadata propagation.",
    capabilities: ["Multi-source ingestion", "Immutable versioning", "Asset metadata"]
  },
  {
    icon: Cog,
    title: "MRV & Rules Engine",
    desc: "Methodology-aware calculations, registry-specific validations, and deterministic MRV flows ensuring reproducibility across submissions.",
    capabilities: ["Methodology equations", "Registry constraints", "Reproducible flows"]
  },
  {
    icon: Workflow,
    title: "Workflow & Role System",
    desc: "State-driven project transitions with reviewer queues, comment chains, and audit-logged accountability for all stakeholders.",
    capabilities: ["State transitions", "Role-based access", "Audit logging"]
  },
  {
    icon: Globe,
    title: "Market & Integration Layer",
    desc: "Deal rooms, settlement automation, and REST APIs for seamless integration with registries and enterprise systems.",
    capabilities: ["Deal room automation", "Settlement workflows", "API integrations"]
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    desc: "Enterprise-grade security with cryptographic anchoring, permission matrices, and comprehensive audit trails for regulatory compliance.",
    capabilities: ["Cryptographic security", "Permission control", "Compliance logging"]
  },
  {
    icon: Layers,
    title: "Platform Modularity",
    desc: "Independent yet integrated modules supporting horizontal scaling, multi-tenant workspaces, and plugin architecture for new methodologies.",
    capabilities: ["Modular design", "Horizontal scaling", "Plugin architecture"]
  }
] as const;

export default function Architecture() {
  return (
    <section
      id="architecture"
      className="relative bg-slate-950 py-20 md:py-24 border-t border-emerald-500/10 overflow-hidden"
    >
      {/* Architecture-themed background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-slate-500/20 to-gray-500/20 rounded-full blur-3xl animate-pulse delay-100" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* ENHANCED HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-400/30 bg-slate-500/10 px-4 py-2 mb-4">
            <Layers className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Platform Architecture
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Modular architecture for 
            <span className="bg-gradient-to-r from-slate-400 to-emerald-400 bg-clip-text text-transparent"> real-world</span>
            <br />MRV & carbon markets
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            CredoCarbon is built as a layered platform. Each module—data, MRV, workflow and market—
            functions independently yet integrates seamlessly into a unified carbon infrastructure.
          </p>
        </div>

        {/* Architecture diagram preview */}
        <div className="mb-16 flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Data Layer', 'MRV Engine', 'Workflow', 'Market'].map((layer, index) => (
              <div key={layer} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-sm text-slate-400 font-medium group-hover:text-slate-300 transition-colors">{layer}</span>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 -right-3 w-6 h-px bg-gradient-to-r from-emerald-400/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* UNIFIED ARCHITECTURE MODULES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {architectureModules.map((module, index) => {
            const colors = [
              'from-slate-500/20 to-gray-600/20 border-slate-400/30',
              'from-emerald-500/20 to-teal-600/20 border-emerald-400/30',
              'from-blue-500/20 to-indigo-600/20 border-blue-400/30',
              'from-teal-500/20 to-cyan-600/20 border-teal-400/30',
              'from-indigo-500/20 to-purple-600/20 border-indigo-400/30',
              'from-cyan-500/20 to-blue-600/20 border-cyan-400/30'
            ];
            
            return (
              <div
                key={module.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-slate-400/40 hover:bg-slate-800/80"
              >
                {/* Enhanced hover effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${colors[index]} opacity-10`} />

                <div className="relative">
                  {/* Architecture icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${colors[index]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <module.icon className="w-6 h-6 text-slate-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-50 group-hover:text-slate-100 transition-colors">
                      {module.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                    {module.desc}
                  </p>

                  {/* Key capabilities */}
                  <div className="space-y-2">
                    {module.capabilities.map((capability) => (
                      <div key={capability} className="flex gap-2 items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-slate-400 to-emerald-400 animate-pulse" />
                        <span className="text-xs text-slate-400 font-medium">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ARCHITECTURE PERFORMANCE METRICS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Platform Modules", value: "6", desc: "Independent components" },
            { label: "API Endpoints", value: "200+", desc: "Integration points" },
            { label: "Uptime SLA", value: "99.9%", desc: "Enterprise reliability" },
            { label: "Scalability", value: "Enterprise", desc: "Multi-tenant ready" }
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-slate-800 bg-slate-900/30 group hover:border-slate-400/30 transition-colors">
              <div className="text-3xl font-bold bg-gradient-to-r from-slate-400 to-emerald-400 bg-clip-text text-transparent mb-1">
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
            <Shield className="w-5 h-5 text-slate-400" />
            <span className="text-sm font-medium text-slate-300">Secure, scalable, and modular carbon infrastructure</span>
          </div>
        </div>
      </div>
    </section>
  );
}