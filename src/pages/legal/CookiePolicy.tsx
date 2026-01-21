import { Cookie } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CookiePolicy() {
    const { t, i18n } = useTranslation('legal');
    const isArabic = i18n.language === 'ar';
    const cookies = t('cookies', { returnObjects: true }) as any;
    const sections = cookies.sections;

    return (
        <div dir={isArabic ? 'rtl' : 'ltr'} className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 md:py-24 overflow-hidden border-b border-slate-800">
                <div className="relative mx-auto max-w-4xl px-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 mb-6">
                        <Cookie className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                            {t('common.badge')}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
                        {cookies.title}
                    </h1>

                    <p className="text-lg text-slate-400 max-w-3xl">
                        {cookies.subtitle}
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="prose prose-invert prose-slate max-w-none">
                        <div className="space-y-8 text-slate-300 leading-relaxed">

                            {/* 1. What Are Cookies? */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.what.title}</h2>
                                <p className="mb-4">{sections.what.content}</p>
                            </div>

                            {/* 2. Types of Cookies We Use */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.types.title}</h2>

                                <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">{sections.types.essential.title}</h3>
                                <p className="mb-4">{sections.types.essential.desc}</p>
                                <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                    {sections.types.essential.items.map((item: string, idx: number) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>

                                <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">{sections.types.functional.title}</h3>
                                <p className="mb-4">{sections.types.functional.desc}</p>
                                <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                    {sections.types.functional.items.map((item: string, idx: number) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>

                                <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">{sections.types.analytics.title}</h3>
                                <p className="mb-4">{sections.types.analytics.desc}</p>
                                <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                    {sections.types.analytics.items.map((item: string, idx: number) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>

                                <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">{sections.types.marketing.title}</h3>
                                <p className="mb-4">{sections.types.marketing.desc}</p>
                                <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                    {sections.types.marketing.items.map((item: string, idx: number) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* 3. Third-Party Cookies */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.thirdParty.title}</h2>
                                <p className="mb-4">{sections.thirdParty.intro}</p>
                                <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                    {sections.thirdParty.items.map((item: any, idx: number) => (
                                        <li key={idx}><strong>{item.label}</strong> {item.desc}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* 4. Cookie Duration */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.duration.title}</h2>
                                <p className="mb-4">{sections.duration.intro}</p>
                                <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                    {sections.duration.items.map((item: any, idx: number) => (
                                        <li key={idx}><strong>{item.label}</strong> {item.desc}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* 5. Managing Cookies */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.managing.title}</h2>
                                <p className="mb-4">{sections.managing.intro}</p>
                                <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                    {sections.managing.items.map((item: any, idx: number) => (
                                        <li key={idx}><strong>{item.label}</strong> {item.desc}</li>
                                    ))}
                                </ul>
                                <p className="mb-4 mt-4"><strong>{sections.managing.important}</strong></p>
                            </div>

                            {/* 6. Browser-Specific Instructions */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.browser.title}</h2>
                                <p className="mb-4">{sections.browser.intro}</p>
                                <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                    {sections.browser.items.map((item: any, idx: number) => (
                                        <li key={idx}><strong>{item.label}</strong> {item.desc}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* 7. Do Not Track */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.dnt.title}</h2>
                                <p className="mb-4">{sections.dnt.content}</p>
                            </div>

                            {/* 8. Cookies and Carbon Credit Data */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.carbonData.title}</h2>
                                <p className="mb-4">{sections.carbonData.content}</p>
                            </div>

                            {/* 9. Updates to This Policy */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.updates.title}</h2>
                                <p className="mb-4">{sections.updates.content}</p>
                            </div>

                            {/* 10. Contact Us */}
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
