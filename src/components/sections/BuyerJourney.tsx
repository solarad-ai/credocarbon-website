// src/components/sections/BuyerJourney.tsx
import { Search, BarChart3, Handshake, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function BuyerJourney() {
  const { t } = useTranslation('buyers');

  const buyerFlow = [
    {
      step: t('buyerJourney.flow.discover.step'),
      title: t('buyerJourney.flow.discover.title'),
      desc: t('buyerJourney.flow.discover.desc'),
      icon: Search,
      color: "from-purple-400 to-pink-400"
    },
    {
      step: t('buyerJourney.flow.analyze.step'),
      title: t('buyerJourney.flow.analyze.title'),
      desc: t('buyerJourney.flow.analyze.desc'),
      icon: BarChart3,
      color: "from-pink-400 to-orange-400"
    },
    {
      step: t('buyerJourney.flow.negotiate.step'),
      title: t('buyerJourney.flow.negotiate.title'),
      desc: t('buyerJourney.flow.negotiate.desc'),
      icon: Handshake,
      color: "from-orange-400 to-yellow-400"
    },
    {
      step: t('buyerJourney.flow.settle.step'),
      title: t('buyerJourney.flow.settle.title'),
      desc: t('buyerJourney.flow.settle.desc'),
      icon: CheckCircle,
      color: "from-yellow-400 to-emerald-400"
    }
  ];

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
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 mb-6">
            <Search className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-400">
              {t('buyerJourney.badge')}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            {t('buyerJourney.title1')}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"> {t('buyerJourney.title2')}</span>
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t('buyerJourney.description')}
          </p>
        </div>

        {/* Circular flow design */}
        <div className="relative max-w-5xl mx-auto mb-20">
          {/* Central hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-600/50 flex items-center justify-center z-10 shadow-2xl shadow-purple-500/20">
            <div className="text-center">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full mx-auto mb-2 shadow-lg shadow-purple-500/50" />
              <span className="text-sm font-semibold text-slate-200">{t('buyerJourney.hub')}</span>
            </div>
          </div>

          {/* Flow cards in circular arrangement */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
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
                  <div className="relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-purple-400/60 hover:bg-slate-800/70 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1">
                    {/* Dynamic gradient overlay */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${item.color}`} />

                    <div className="relative text-center">
                      {/* Icon with dynamic gradient */}
                      <div className="relative mb-5 mx-auto">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} opacity-90 flex items-center justify-center group-hover:scale-110 group-hover:opacity-100 transition-all duration-300 shadow-lg`}>
                          <item.icon className="w-8 h-8 text-white drop-shadow-lg" />
                        </div>
                        <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} opacity-40 blur-xl group-hover:opacity-80 transition-opacity duration-300`} />
                      </div>

                      {/* Step indicator */}
                      <div className="inline-flex items-center gap-1 rounded-full bg-slate-800/90 border border-slate-600/50 px-3 py-1.5 mb-3">
                        <span className="text-xs font-semibold text-slate-300">{item.step}</span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-50 mb-3 group-hover:text-white transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Connection lines (hidden on mobile) */}
                  {index < buyerFlow.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-8 w-16 h-0.5 bg-gradient-to-r from-purple-400/40 to-transparent transform -translate-y-1/2" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats section with enhanced design */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: t('buyerJourney.stats.projects.label'), value: t('buyerJourney.stats.projects.value'), icon: "🌍" },
            { label: t('buyerJourney.stats.dueDiligence.label'), value: t('buyerJourney.stats.dueDiligence.value'), icon: "⚡" },
            { label: t('buyerJourney.stats.dealRooms.label'), value: t('buyerJourney.stats.dealRooms.value'), icon: "🤝" },
            { label: t('buyerJourney.stats.retirement.label'), value: t('buyerJourney.stats.retirement.value'), icon: "✓" }
          ].map((stat) => (
            <div
              key={stat.label}
              className="group text-center p-6 rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900/50 to-slate-900/30 backdrop-blur-sm hover:border-purple-400/40 hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="text-sm text-slate-500 mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-medium leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
