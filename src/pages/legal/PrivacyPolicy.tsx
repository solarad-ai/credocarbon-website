import { Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
    const { t, i18n } = useTranslation('legal');
    const isArabic = i18n.language === 'ar';
    const privacy = t('privacy', { returnObjects: true }) as any;
    const sections = privacy.sections;

    return (
        <div dir={isArabic ? 'rtl' : 'ltr'} className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 md:py-24 overflow-hidden border-b border-slate-800">
                <div className="relative mx-auto max-w-4xl px-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 mb-6">
                        <Shield className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                            {t('common.badge')}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
                        {privacy.title}
                    </h1>

                    <p className="text-lg text-slate-400 max-w-3xl">
                        {privacy.subtitle}
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="prose prose-invert prose-slate max-w-none">
                        <div className="space-y-8 text-slate-300 leading-relaxed">

                            {/* 1. Introduction */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.intro.title}</h2>
                                <p className="mb-4">{sections.intro.content}</p>
                            </div>

                            {/* 2. Information We Collect */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.collection.title}</h2>
                                <p className="mb-4">{sections.collection.intro}</p>
                                <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                    {sections.collection.items.map((item: any, idx: number) => (
                                        <li key={idx}><strong>{item.label}</strong> {item.desc}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* 3. How We Use Your Information */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.usage.title}</h2>
                                <p className="mb-4">{sections.usage.intro}</p>
                                <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                    {sections.usage.items.map((item: string, idx: number) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* 4. Data Sharing and Disclosure */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.sharing.title}</h2>
                                <p className="mb-4">{sections.sharing.intro}</p>
                                <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                    {sections.sharing.items.map((item: any, idx: number) => (
                                        <li key={idx}><strong>{item.label}</strong> {item.desc}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* 5. Data Security */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.security.title}</h2>
                                <p className="mb-4">{sections.security.intro}</p>
                                <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                    {sections.security.items.map((item: string, idx: number) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* 6. Data Retention */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.retention.title}</h2>
                                <p className="mb-4">{sections.retention.intro}</p>
                                <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                    {sections.retention.items.map((item: string, idx: number) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* 7. Your Rights */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.rights.title}</h2>
                                <p className="mb-4">{sections.rights.intro}</p>
                                <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                    {sections.rights.items.map((item: string, idx: number) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                                <p className="mb-4 mt-4"><strong>{sections.rights.note}</strong></p>
                            </div>

                            {/* 8. Cookies and Tracking */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.cookies.title}</h2>
                                <p className="mb-4">{sections.cookies.content}</p>
                            </div>

                            {/* 9. International Data Transfers */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.international.title}</h2>
                                <p className="mb-4">{sections.international.intro}</p>
                                <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                    {sections.international.items.map((item: string, idx: number) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* 10. Third-Party Services */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.thirdParty.title}</h2>
                                <p className="mb-4">{sections.thirdParty.content}</p>
                            </div>

                            {/* 11. Children's Privacy */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.children.title}</h2>
                                <p className="mb-4">{sections.children.content}</p>
                            </div>

                            {/* 12. Changes to This Policy */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.changes.title}</h2>
                                <p className="mb-4">{sections.changes.content}</p>
                            </div>

                            {/* 13. Contact Us */}
                            <div className="bg-gradient-to-br from-emerald-500/10 to-slate-800/30 border border-emerald-500/20 rounded-2xl p-8">
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.contact.title}</h2>
                                <p className="mb-6">{sections.contact.content}</p>
                                <div className="space-y-3">
                                    <a href="mailto:info@credocarbon.com" className="text-emerald-400 hover:text-emerald-300 transition text-lg font-medium">
                                        info@credocarbon.com
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
