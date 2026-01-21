import { Sparkles, Briefcase, Heart, Zap, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Careers() {
    const { t, i18n } = useTranslation('pages');
    const isArabic = i18n.language === 'ar';
    const careers = t('careers', { returnObjects: true }) as any;
    const values = careers.values || {};

    const valuesData = [
        { Icon: Heart, ...values.missionDriven },
        { Icon: Briefcase, ...values.collaborative },
        { Icon: Zap, ...values.innovation }
    ];

    return (
        <div dir={isArabic ? 'rtl' : 'ltr'} className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.12),rgba(255,255,255,0))]" />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-emerald-500/15 rounded-full blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-4xl px-4 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2.5 mb-8 backdrop-blur-sm shadow-lg shadow-emerald-500/10">
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                            {careers.badge}
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6 leading-tight">
                        {careers.title1}{" "}
                        <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                            {careers.titleHighlight}
                        </span>
                        {" "}{careers.title2}
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        {careers.subtitle}
                    </p>
                </div>
            </section>

            {/* Values Section */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto max-w-5xl px-4">
                    <div className="grid md:grid-cols-3 gap-6">
                        {valuesData.map((value, idx) => (
                            <div
                                key={idx}
                                className="group rounded-2xl border border-slate-700/60 bg-slate-900/40 backdrop-blur-sm p-8 hover:border-emerald-400/30 hover:bg-slate-900/60 transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 flex items-center justify-center mb-6 group-hover:from-emerald-500/30 group-hover:to-cyan-500/30 transition-all">
                                    <value.Icon className="w-7 h-7 text-emerald-400" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-50 mb-3">{value.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="relative rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-teal-500/10 backdrop-blur-sm p-10 md:p-12 text-center overflow-hidden">
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 blur-2xl" />

                        <div className="relative">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                                {careers.contactTitle}
                            </h2>
                            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                                {careers.contactSubtitle}
                            </p>

                            <a
                                href={`mailto:${careers.email}`}
                                className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/30"
                            >
                                <Mail className="w-5 h-5" />
                                <span>{careers.email}</span>
                            </a>

                            <p className="mt-6 text-sm text-slate-400">
                                {careers.responseNote}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
