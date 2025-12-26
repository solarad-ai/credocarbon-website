// src/components/sections/BuyerJourney.tsx
import { Search, DollarSign, Handshake, Award } from "lucide-react";

const buyerFlow = [
  {
    step: "Discover",
    title: "Smart Project Discovery",
    desc: "AI-powered filtering by geography, methodology, SDG alignment, and risk profiles",
    icon: Search,
    color: "from-purple-400 to-pink-400"
  },
  {
    step: "Analyze",
    title: "Due Diligence Suite",
    desc: "VVB-verified documents, risk indicators, and auto-generated procurement bundles",
    icon: DollarSign,
    color: "from-pink-400 to-orange-400"
  },
  {
    step: "Negotiate",
    title: "Professional Deal Rooms",
    desc: "Term sheets, pricing trends, and secure negotiation workflows with escrow",
    icon: Handshake,
    color: "from-orange-400 to-yellow-400"
  },
  {
    step: "Retire",
    title: "Claims & Compliance",
    desc: "Immutable retirement certificates with SDG mapping and audit trails",
    icon: Award,
    color: "from-yellow-400 to-emerald-400"
  }
] as const;

export default function BuyerJourney() {
  return (
    <section
      id="buyer"
      className="relative bg-slate-950 pt-16 pb-20 md:py-24 border-t border-emerald-500/10 overflow-hidden"
    >
      {/* Floating orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 mb-4">
            <DollarSign className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-400">
              Buyer Experience
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Transparent
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"> Procurement</span>
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Intelligent procurement with risk-adjusted pricing and provenance tracking
          </p>
        </div>

        {/* Circular flow design */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-600 flex items-center justify-center z-10">
            <div className="text-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full mx-auto mb-1" />
              <span className="text-xs font-medium text-slate-300">Buyer Hub</span>
            </div>
          </div>

          {/* Flow cards in circular arrangement */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {buyerFlow.map((item, index) => {
              const positions = [
                'md:col-start-2 md:row-start-1', // Top
                'md:col-start-4 md:row-start-2', // Right  
                'md:col-start-2 md:row-start-3', // Bottom
                'md:col-start-1 md:row-start-2'  // Left
              ];

              return (
                <div
                  key={item.title}
                  className={`group relative ${positions[index] || ''}`}
                >
                  <div className="relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-purple-400/60 hover:bg-slate-800/60 hover:shadow-xl hover:shadow-purple-500/10">
                    {/* Dynamic gradient overlay */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${item.color}`} />

                    <div className="relative text-center">
                      {/* Icon with dynamic gradient */}
                      <div className="relative mb-4 mx-auto">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} opacity-80 flex items-center justify-center group-hover:scale-110 group-hover:opacity-100 transition-all duration-300 shadow-lg`}>
                          <item.icon className="w-8 h-8 text-white drop-shadow-lg" />
                        </div>
                        <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} opacity-40 blur-xl group-hover:opacity-70 transition-opacity duration-300`} />
                      </div>

                      {/* Step indicator */}
                      <div className="inline-flex items-center gap-1 rounded-full bg-slate-800/80 border border-slate-600/50 px-3 py-1 mb-3">
                        <span className="text-xs font-medium text-slate-300">{item.step}</span>
                      </div>

                      <h3 className="text-lg font-semibold text-slate-50 mb-2 group-hover:text-white transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-sm text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Connection lines (hidden on mobile) */}
                  {index < buyerFlow.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-px bg-gradient-to-r from-purple-400/50 to-transparent transform -translate-y-1/2" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Projects Available", value: "2,500+" },
            { label: "Avg. Due Diligence Time", value: "3 days" },
            { label: "Settlement Success", value: "99.8%" },
            { label: "Retirement Certificates", value: "Instant" }
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl border border-slate-800 bg-slate-900/30">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
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
