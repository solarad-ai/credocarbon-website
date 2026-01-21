import { FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function TermsOfService() {
    const { t, i18n } = useTranslation('legal');
    const isArabic = i18n.language === 'ar';
    const terms = t('terms', { returnObjects: true }) as any;
    const sections = terms.sections;

    return (
        <div dir={isArabic ? 'rtl' : 'ltr'} className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 md:py-24 overflow-hidden border-b border-slate-800">
                <div className="relative mx-auto max-w-4xl px-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 mb-6">
                        <FileText className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                            {t('common.badge')}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
                        {terms.title}
                    </h1>

                    <p className="text-lg text-slate-400 max-w-3xl">
                        {terms.subtitle}
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="prose prose-invert prose-slate max-w-none">
                        <div className="space-y-8 text-slate-300 leading-relaxed">

                            {/* 1. Acceptance of Terms */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.acceptance.title}</h2>
                                <p className="mb-4">{sections.acceptance.content}</p>
                            </div>

                            {/* 2. Description of Service */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.description.title}</h2>
                                <p className="mb-4">{sections.description.intro}</p>
                                <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                    {sections.description.items.map((item: string, idx: number) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* 3. User Accounts and Roles */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.accounts.title}</h2>
                                <p className="mb-4">{sections.accounts.intro}</p>
                                <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                    {sections.accounts.roles.map((role: any, idx: number) => (
                                        <li key={idx}><strong>{role.role}</strong> {role.desc}</li>
                                    ))}
                                </ul>
                                <p className="mb-4 mt-4">{sections.accounts.agree}</p>
                                <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                    {sections.accounts.agreeItems.map((item: string, idx: number) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* 4. Carbon Project Data and Accuracy */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.projectData.title}</h2>
                                <p className="mb-4">{sections.projectData.intro}</p>
                                <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                    {sections.projectData.items.map((item: string, idx: number) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* 5. Acceptable Use */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.acceptableUse.title}</h2>
                                <p className="mb-4">{sections.acceptableUse.intro}</p>
                                <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                    {sections.acceptableUse.items.map((item: string, idx: number) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* 6. Registry Integration */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.registry.title}</h2>
                                <p className="mb-4">{sections.registry.intro}</p>
                                <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                    {sections.registry.items.map((item: string, idx: number) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* 7. Intellectual Property */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.ip.title}</h2>
                                <p className="mb-4">{sections.ip.content}</p>
                            </div>

                            {/* 8. Data and Privacy */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.privacy.title}</h2>
                                <p className="mb-4">{sections.privacy.content}</p>
                            </div>

                            {/* 9. Payment Terms */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.payment.title}</h2>
                                <p className="mb-4">{sections.payment.intro}</p>
                                <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                    {sections.payment.items.map((item: string, idx: number) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                                <p className="mb-4 mt-4">{sections.payment.note}</p>
                            </div>

                            {/* 10. API Usage */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.api.title}</h2>
                                <p className="mb-4">{sections.api.intro}</p>
                                <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                    {sections.api.items.map((item: string, idx: number) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* 11. Warranties and Disclaimers */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.warranties.title}</h2>
                                <p className="mb-4">{sections.warranties.intro}</p>
                                <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                    {sections.warranties.items.map((item: string, idx: number) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* 12. Limitation of Liability */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.liability.title}</h2>
                                <p className="mb-4">{sections.liability.intro}</p>
                                <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                    {sections.liability.items.map((item: string, idx: number) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* 13. Indemnification */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.indemnification.title}</h2>
                                <p className="mb-4">{sections.indemnification.intro}</p>
                                <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                    {sections.indemnification.items.map((item: string, idx: number) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* 14. Termination */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.termination.title}</h2>
                                <p className="mb-4">{sections.termination.intro}</p>
                                <ul className={`list-disc ${isArabic ? 'pr-6' : 'pl-6'} space-y-2 mb-4`}>
                                    {sections.termination.items.map((item: string, idx: number) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* 15. Governing Law */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.governing.title}</h2>
                                <p className="mb-4">{sections.governing.content}</p>
                            </div>

                            {/* 16. Changes to Terms */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">{sections.changes.title}</h2>
                                <p className="mb-4">{sections.changes.content}</p>
                            </div>

                            {/* 17. Contact Information */}
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
