import { useState } from "react";
import { useTranslation } from "react-i18next";
import DeveloperGuide from "./DeveloperGuide";
import BuyerGuide from "./BuyerGuide";
import VVBGuide from "./VVBGuide";
import RegistryGuide from "./RegistryGuide";

const guideComponents: Record<string, React.ComponentType> = {
    developer: DeveloperGuide,
    buyer: BuyerGuide,
    vvb: VVBGuide,
    registry: RegistryGuide
};

const guideConfigs = [
    { id: "developer", icon: "🌿", color: "from-emerald-500 to-emerald-600", hoverColor: "hover:border-emerald-400" },
    { id: "buyer", icon: "💎", color: "from-blue-500 to-blue-600", hoverColor: "hover:border-blue-400" },
    { id: "vvb", icon: "🔍", color: "from-purple-500 to-purple-600", hoverColor: "hover:border-purple-400" },
    { id: "registry", icon: "🏛️", color: "from-indigo-500 to-indigo-600", hoverColor: "hover:border-indigo-400" }
];

export default function Documentation() {
    const { t, i18n } = useTranslation('pages');
    const isArabic = i18n.language === 'ar';
    const docs = t('documentation', { returnObjects: true }) as any;
    const [selectedGuide, setSelectedGuide] = useState<string | null>(null);

    // If a guide is selected, show its component
    if (selectedGuide) {
        const GuideComponent = guideComponents[selectedGuide];
        if (GuideComponent) {
            return (
                <div dir={isArabic ? 'rtl' : 'ltr'}>
                    {/* Back button */}
                    <div className="bg-slate-900 border-b border-slate-800">
                        <div className="mx-auto max-w-6xl px-4 py-4">
                            <button
                                onClick={() => setSelectedGuide(null)}
                                className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
                            >
                                <span>{isArabic ? '→' : '←'}</span>
                                <span>{docs.back}</span>
                            </button>
                        </div>
                    </div>
                    <GuideComponent />
                </div>
            );
        }
    }

    // Show guide selection grid
    return (
        <div dir={isArabic ? 'rtl' : 'ltr'} className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
            {/* Hero Section */}
            <section className="relative py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse" />
                </div>

                <div className="relative mx-auto max-w-6xl px-4 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 mb-6">
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                            {docs.badge}
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        {docs.title}
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        {docs.subtitle}
                    </p>
                </div>
            </section>

            {/* Guide Cards */}
            <section className="relative py-12 md:py-16">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="grid md:grid-cols-2 gap-6 mb-16">
                        {guideConfigs.map((config) => {
                            const guide = docs.guides[config.id];
                            return (
                                <button
                                    key={config.id}
                                    onClick={() => setSelectedGuide(config.id)}
                                    className={`group relative overflow-hidden rounded-2xl border-2 border-slate-700 bg-slate-800/50 backdrop-blur-sm p-8 transition-all duration-300 ${config.hoverColor} hover:bg-slate-800 hover:scale-105 text-${isArabic ? 'right' : 'left'}`}
                                >
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-slate-700/20 to-slate-900/20" />

                                    <div className="relative">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${config.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <span className="text-3xl">{config.icon}</span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-3">
                                            {guide.title}
                                        </h3>

                                        <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                            {guide.description}
                                        </p>

                                        <div className={`mt-4 flex items-center gap-2 text-sm font-medium text-slate-500 group-hover:text-emerald-400 transition-colors ${isArabic ? 'flex-row-reverse' : ''}`}>
                                            <span>{docs.viewGuide}</span>
                                            <span>{isArabic ? '←' : '→'}</span>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 backdrop-blur-sm p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {docs.cta.title}
                        </h2>
                        <p className="text-lg text-slate-300 mb-8">
                            {docs.cta.subtitle}
                        </p>
                        <a
                            href="mailto:info@credocarbon.com"
                            className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 inline-block"
                        >
                            {docs.cta.contactSupport}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
