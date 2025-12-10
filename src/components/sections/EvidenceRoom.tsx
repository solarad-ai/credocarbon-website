// src/components/sections/EvidenceRoom.tsx

import { FileText, Lock, Link, MessageCircle, Package } from "lucide-react";

const capabilities = [
  {
    icon: FileText,
    title: "Structured Evidence Library",
    desc: "Registry-aligned documentation with smart categorization and rapid search",
    highlight: "Thousands of files organized"
  },
  {
    icon: Lock,
    title: "Cryptographic Integrity", 
    desc: "Immutable version history with cryptographic anchoring for audit trails",
    highlight: "Tamper-proof evidence"
  },
  {
    icon: Link,
    title: "Linked Data Tracing",
    desc: "Connect documents to monitoring periods, parameters, and calculations",
    highlight: "Full data lineage"
  },
  {
    icon: MessageCircle,
    title: "Comment Workflows",
    desc: "Structured VVB-developer communication with severity tracking",
    highlight: "No email chaos"
  },
  {
    icon: Package,
    title: "Submission Snapshots",
    desc: "Registry-ready packages with completeness checks and hash IDs",
    highlight: "One-click submissions"
  }
] as const;

export default function EvidenceRoom() {
  return (
    <section
      id="evidence"
      className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-20 md:py-24 border-t border-emerald-500/10"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 mb-4">
            <FileText className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
              Evidence Engine
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Audit-Ready 
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"> Documentation</span>
          </h2>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Structured evidence management with cryptographic integrity and version control
          </p>
        </div>

        {/* Hexagonal grid layout */}
        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={capability.title}
                className={`group relative ${index === 2 ? 'md:col-start-2' : ''} ${index >= 3 ? 'md:col-span-1' : ''}`}
              >
                <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-900/60 backdrop-blur-sm p-6 h-full transition-all duration-300 hover:border-emerald-400/40 hover:bg-slate-800/80">
                  {/* Animated background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10" />
                  
                  <div className="relative text-center">
                    {/* Icon */}
                    <div className="relative mb-4 mx-auto">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-600/20 border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <capability.icon className="w-7 h-7 text-emerald-400" />
                      </div>
                      <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-emerald-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <h3 className="text-lg font-semibold text-slate-50 mb-2 group-hover:text-emerald-100 transition-colors">
                      {capability.title}
                    </h3>
                    
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                      {capability.desc}
                    </p>

                    {/* Highlight */}
                    <div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 px-3 py-1">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                      <span className="text-xs font-medium text-emerald-300">
                        {capability.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom feature highlight */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 rounded-2xl border border-slate-700 bg-slate-900/50 px-8 py-4">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium text-slate-300">Cryptographically Secured</span>
            </div>
            <div className="w-px h-6 bg-slate-600" />
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium text-slate-300">Registry-Ready Exports</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
