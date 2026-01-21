import { Shield, FileCheck, Globe, Award, Lock } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Compliance() {
    const { t, i18n } = useTranslation('legal');
    const isArabic = i18n.language === 'ar';
    const compliance = t('compliance', { returnObjects: true }) as any;
    const sections = compliance.sections;

    return (
        <div dir={isArabic ? 'rtl' : 'ltr'} className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 md:py-24 overflow-hidden border-b border-slate-800">
                <div className="relative mx-auto max-w-4xl px-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 mb-6">
                        <Shield className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                            {compliance.badge}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
                        {compliance.title}
                    </h1>

                    <p className="text-lg text-slate-400 max-w-3xl">
                        {compliance.subtitle}
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="space-y-12 text-slate-300 leading-relaxed">

                        {/* Carbon Registry Compliance */}
                        <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-emerald-500/10 rounded-lg">
                                    <Globe className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-50">{sections.registry.title}</h2>
                            </div>
                            <p className="mb-6">{sections.registry.intro}</p>

                            <div className="grid md:grid-cols-2 gap-4">
                                {Object.entries(sections.registry.registries).map(([key, registry]: [string, any]) => (
                                    <div key={key} className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-4">
                                        <h3 className="text-lg font-semibold text-emerald-400 mb-2">{registry.title}</h3>
                                        <p className="text-sm text-slate-400">{registry.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* MRV Standards */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-emerald-500/10 rounded-lg">
                                    <FileCheck className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-50">{sections.mrv.title}</h2>
                            </div>
                            <p className="mb-4">{sections.mrv.intro}</p>
                            <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-3 mb-4`}>
                                {sections.mrv.items.map((item: any, idx: number) => (
                                    <li key={idx}>
                                        <strong className="text-slate-200">{item.label}</strong> {item.desc}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Regulatory Compliance */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-emerald-500/10 rounded-lg">
                                    <Award className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-50">{sections.regulatory.title}</h2>
                            </div>

                            <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">{sections.regulatory.article6.title}</h3>
                            <p className="mb-4">{sections.regulatory.article6.intro}</p>
                            <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-6`}>
                                {sections.regulatory.article6.items.map((item: string, idx: number) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>

                            <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">{sections.regulatory.euEts.title}</h3>
                            <p className="mb-4">{sections.regulatory.euEts.intro}</p>
                            <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-6`}>
                                {sections.regulatory.euEts.items.map((item: string, idx: number) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>

                            <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">{sections.regulatory.vcmi.title}</h3>
                            <p className="mb-4">{sections.regulatory.vcmi.content}</p>

                            <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">{sections.regulatory.icvcm.title}</h3>
                            <p className="mb-4">{sections.regulatory.icvcm.content}</p>
                        </div>

                        {/* Data Security & Privacy */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-emerald-500/10 rounded-lg">
                                    <Lock className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-50">{sections.security.title}</h2>
                            </div>

                            <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">{sections.security.soc2.title}</h3>
                            <p className="mb-4">{sections.security.soc2.content}</p>

                            <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">{sections.security.iso27001.title}</h3>
                            <p className="mb-4">{sections.security.iso27001.content}</p>

                            <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">{sections.security.gdpr.title}</h3>
                            <p className="mb-4">{sections.security.gdpr.intro}</p>
                            <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                {sections.security.gdpr.items.map((item: string, idx: number) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>


                        {/* Anti-Fraud & Double Counting Prevention */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.antiFraud.title}</h2>
                            <p className="mb-4">{sections.antiFraud.intro}</p>
                            <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                {sections.antiFraud.items.map((item: string, idx: number) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Continuous Improvement */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.continuous.title}</h2>
                            <p className="mb-4">{sections.continuous.intro}</p>
                            <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                {sections.continuous.items.map((item: string, idx: number) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Section */}
                        <div className="bg-gradient-to-br from-emerald-500/10 to-slate-800/30 border border-emerald-500/20 rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.contact.title}</h2>
                            <p className="mb-6">{sections.contact.content}</p>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="text-emerald-400 font-semibold min-w-[140px]">{sections.contact.general}</div>
                                    <a href="mailto:info@credocarbon.com" className="text-slate-300 hover:text-emerald-400 transition">
                                        {sections.contact.generalEmail}
                                    </a>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="text-emerald-400 font-semibold min-w-[140px]">{sections.contact.security}</div>
                                    <a href="mailto:admin@credocarbon.com" className="text-slate-300 hover:text-emerald-400 transition">
                                        {sections.contact.securityEmail}
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
