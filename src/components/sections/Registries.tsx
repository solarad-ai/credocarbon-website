// src/components/sections/Registries.tsx
import { Globe, Package, CheckCircle, Database, Hash, Layers } from "lucide-react";

const registryFeatures = [
  {
    icon: Globe,
    title: "Multi-Registry Compatibility",
    desc: "Unified data structure supporting Verra, Gold Standard, GCC, Plan Vivo, and emerging regional registries with cross-registry consistency.",
    capabilities: ["5+ major registries", "Unified data model", "Cross-registry portfolios"]
  },
  {
    icon: Package,
    title: "Submission Packet Generator",
    desc: "Auto-generates registry-ready digital packets with proper naming conventions, data tables, and hash-anchored evidence bundles.",
    capabilities: ["Machine-checkable format", "Integrity metadata", "Multiple submission types"]
  },
  {
    icon: CheckCircle,
    title: "Validation & Rule Engine",
    desc: "Comprehensive validation system detecting inconsistencies, ensuring completeness, and enforcing registry-specific constraints.",
    capabilities: ["Formula validation", "Completeness checks", "Anomaly detection"]
  },
  {
    icon: Database,
    title: "Project Type Coverage",
    desc: "Support for 70+ project types including renewables, RECs, nature-based solutions, and industrial efficiency projects.",
    capabilities: ["Renewable energy", "Nature-based solutions", "Industrial processes"]
  },
  {
    icon: Hash,
    title: "Serialization & Metadata",
    desc: "Advanced serial range management, vintage allocation, and cryptographically anchored provenance tracking for each credit.",
    capabilities: ["Serial range tracking", "Vintage management", "Provenance anchoring"]
  },
  {
    icon: Layers,
    title: "Template & Methodology Engine",
    desc: "Registry-specific templates with parameter libraries, baseline equations, and guided methodology selection for streamlined onboarding.",
    capabilities: ["Template versioning", "Parameter libraries", "Methodology guidance"]
  }
] as const;

export default function Registries() {
  return (
    <section
      id="registries"
      className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-20 md:py-24 border-t border-emerald-500/10 overflow-hidden"
    >
      {/* Registry-themed background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-88 h-88 bg-gradient-to-r from-sky-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-300" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* ENHANCED HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 mb-4">
            <Globe className="w-4 h-4 text-sky-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
              Registries & Standards
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Built to operate across 
            <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent"> global standards</span>
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            CredoCarbon aligns projects, methodologies and monitoring outputs
            with major registries — ensuring structured, compliant and
            machine-checkable submissions for seamless issuance & verification cycles.
          </p>
        </div>

        {/* Registry logos/badges */}
        <div className="flex justify-center items-center gap-8 mb-16">
          {['Verra', 'Gold Standard', 'GCC', 'Plan Vivo', 'Regional'].map((registry) => (
            <div key={registry} className="px-4 py-2 rounded-xl border border-slate-700 bg-slate-900/50 text-xs font-medium text-slate-400 hover:border-sky-400/30 hover:text-sky-300 transition-colors">
              {registry}
            </div>
          ))}
        </div>

        {/* UNIFIED REGISTRY FEATURES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {registryFeatures.map((feature, index) => {
            const colors = [
              'from-sky-500/20 to-blue-600/20 border-sky-400/30',
              'from-blue-500/20 to-indigo-600/20 border-blue-400/30',
              'from-indigo-500/20 to-purple-600/20 border-indigo-400/30',
              'from-purple-500/20 to-pink-600/20 border-purple-400/30',
              'from-cyan-500/20 to-sky-600/20 border-cyan-400/30',
              'from-teal-500/20 to-blue-600/20 border-teal-400/30'
            ];
            
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-sky-400/40 hover:bg-slate-800/80"
              >
                {/* Enhanced hover effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${colors[index]} opacity-10`} />

                <div className="relative">
                  {/* Registry icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${colors[index]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-sky-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-50 group-hover:text-sky-100 transition-colors">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                    {feature.desc}
                  </p>

                  {/* Key capabilities */}
                  <div className="space-y-2">
                    {feature.capabilities.map((capability) => (
                      <div key={capability} className="flex gap-2 items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-sky-400 to-blue-400 animate-pulse" />
                        <span className="text-xs text-slate-400 font-medium">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* REGISTRY PERFORMANCE METRICS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Registries", value: "5+", desc: "Major standards supported" },
            { label: "Project Types", value: "70+", desc: "Across all sectors" },
            { label: "Methodologies", value: "200+", desc: "Registry-approved" },
            { label: "Submission Success", value: "99.5%", desc: "First-time approval rate" }
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-slate-800 bg-slate-900/30 group hover:border-sky-400/30 transition-colors">
              <div className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-1">
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
            <CheckCircle className="w-5 h-5 text-sky-400" />
            <span className="text-sm font-medium text-slate-300">Compliant, structured, and machine-checkable submissions</span>
          </div>
        </div>
      </div>
    </section>
  );
}