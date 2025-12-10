// src/components/sections/MarketOps.tsx
import { MessageSquare, TrendingUp, Shield, CreditCard, Link, BarChart3 } from "lucide-react";

const marketFeatures = [
  {
    icon: MessageSquare,
    title: "Direct Deal Rooms",
    desc: "Structured negotiation environments with term sheets, NDAs, and MRV context linking for transparent bilateral deals.",
    capabilities: ["Vetted buyer-developer spaces", "Timeline tracking", "Evidence linking"]
  },
  {
    icon: TrendingUp,
    title: "Pricing Intelligence",
    desc: "Real-time pricing signals by geography, methodology, and vintage with risk-adjusted indicators and liquidity analysis.",
    capabilities: ["Price band analysis", "Vintage premiums", "Market trend detection"]
  },
  {
    icon: Shield,
    title: "Quality & Risk Scoring",
    desc: "Comprehensive scoring based on methodology strength, safeguards, co-benefits, and verification cycle performance.",
    capabilities: ["Multi-factor scoring", "Risk flag detection", "Batch metadata analysis"]
  },
  {
    icon: CreditCard,
    title: "Settlement & Transfers",
    desc: "Escrow-style settlement workflows with automated validations, serial tracking, and full audit trails for compliance.",
    capabilities: ["Secure escrow flows", "Registry validation", "Compliance logging"]
  },
  {
    icon: Link,
    title: "Credit Provenance",
    desc: "Complete chain-of-custody tracking from issuance to retirement with hash-anchored logs and SDG impact labeling.",
    capabilities: ["Blockchain traceability", "Retirement certificates", "Impact reporting"]
  },
  {
    icon: BarChart3,
    title: "Portfolio Analytics",
    desc: "Advanced procurement insights, diversification scoring, and exposure analysis for strategic portfolio management.",
    capabilities: ["Diversification analysis", "Risk exposure scoring", "Procurement optimization"]
  }
] as const;

export default function MarketOps() {
  return (
    <section
      id="marketops"
      className="relative bg-slate-950 py-20 md:py-24 border-t border-emerald-500/10 overflow-hidden"
    >
      {/* Market-themed background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-200" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse delay-600" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* ENHANCED HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-2 mb-4">
            <TrendingUp className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">
              Market Operations
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Direct carbon credit 
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent"> trading</span>, built in
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            Structured deal rooms, pricing intelligence and secure settlement 
            flows turn verified credits into programmable, trustworthy assets.
          </p>
        </div>

        {/* UNIFIED MARKET FEATURES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {marketFeatures.map((feature, index) => {
            const colors = [
              'from-amber-500/20 to-orange-600/20 border-amber-400/30',
              'from-orange-500/20 to-red-600/20 border-orange-400/30',
              'from-emerald-500/20 to-teal-600/20 border-emerald-400/30',
              'from-teal-500/20 to-cyan-600/20 border-teal-400/30',
              'from-cyan-500/20 to-blue-600/20 border-cyan-400/30',
              'from-blue-500/20 to-indigo-600/20 border-blue-400/30'
            ];
            
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-amber-400/40 hover:bg-slate-800/80"
              >
                {/* Enhanced hover effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${colors[index]} opacity-10`} />

                <div className="relative">
                  {/* Market icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${colors[index]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-50 group-hover:text-amber-100 transition-colors">
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
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 animate-pulse" />
                        <span className="text-xs text-slate-400 font-medium">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* MARKET PERFORMANCE METRICS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Deal Rooms", value: "250+", desc: "Active negotiations" },
            { label: "Settlement Success", value: "99.8%", desc: "Transaction rate" },
            { label: "Avg. Deal Time", value: "3 days", desc: "From negotiation to close" },
            { label: "Credits Traded", value: "$50M+", desc: "Total volume" }
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-slate-800 bg-slate-900/30 group hover:border-amber-400/30 transition-colors">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-1">
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
            <CreditCard className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-medium text-slate-300">Secure, transparent, and efficient carbon credit trading</span>
          </div>
        </div>
      </div>
    </section>
  );
}
