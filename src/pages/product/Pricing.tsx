import { Sparkles, Calendar, AlertTriangle, Check, X, Shield, DollarSign, FileText, Clock, ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

// Badge Components
const OneTimeBadge = ({ label = "ONE-TIME" }: { label?: string }) => (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-white text-xs font-medium">
        <Sparkles className="w-3 h-3" />
        {label}
    </span>
);

const RecurringBadge = ({ label = "RECURRING (ANNUAL)" }: { label?: string }) => (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium border border-amber-200">
        <Calendar className="w-3 h-3" />
        {label}
    </span>
);

// Alert Components
const ExclusionNotice = ({ children, label = "Exclusion" }: { children: React.ReactNode; label?: string }) => (
    <div className="flex items-start gap-3 p-4 rounded-lg bg-amber-50 border border-amber-100">
        <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-amber-800">
            <span className="font-semibold">{label}:</span> {children}
        </p>
    </div>
);

const DisclaimerNotice = ({ children, label = "Disclaimer" }: { children: React.ReactNode; label?: string }) => (
    <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border-l-4 border-red-400">
        <p className="text-sm text-red-700">
            <span className="font-semibold">{label}:</span> {children}
        </p>
    </div>
);

const InfoBar = ({ children }: { children: React.ReactNode }) => (
    <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
        <p className="text-sm font-medium text-blue-900">{children}</p>
    </div>
);

// Service Lists Component
const ServiceLists = ({
    included,
    excluded
}: {
    included: { title: string; items: string[] };
    excluded: { title: string; items: string[] };
}) => (
    <div className="grid md:grid-cols-2 gap-6">
        <div className="p-5 bg-white border border-slate-200 rounded-xl">
            <h5 className="text-sm font-semibold text-slate-900 mb-4">{included.title}</h5>
            <ul className="space-y-2.5">
                {included.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="p-5 bg-white border border-slate-200 rounded-xl">
            <h5 className="text-sm font-semibold text-slate-900 mb-4">{excluded.title}</h5>
            <ul className="space-y-2.5">
                {excluded.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <X className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

// Service Scope List Component
const ServiceScope = ({ title, items }: { title: string; items: string[] }) => (
    <div className="border-l-4 border-blue-500 pl-4 py-2 bg-slate-50 rounded-r-lg">
        <h5 className="text-sm font-semibold text-slate-900 mb-3">{title}</h5>
        <ul className="space-y-1.5">
            {items.map((item, idx) => (
                <li key={idx} className="text-sm text-slate-700">• {item}</li>
            ))}
        </ul>
    </div>
);

// Pricing Table Component
const PricingTable = ({
    headers,
    rows
}: {
    headers: string[];
    rows: (string | React.ReactNode)[][];
}) => (
    <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table className="w-full">
            <thead>
                <tr className="bg-slate-100">
                    {headers.map((header, idx) => (
                        <th key={idx} className="px-4 py-3 text-left text-sm font-semibold text-slate-900 border-b border-slate-200">
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, rowIdx) => (
                    <tr key={rowIdx} className="border-b border-slate-100 last:border-b-0">
                        {row.map((cell, cellIdx) => (
                            <td key={cellIdx} className="px-4 py-3.5 text-sm text-slate-700 bg-white">
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

// Section Divider
const SectionDivider = () => (
    <div className="border-t border-slate-200 my-16" />
);

// FAQ Data
const faqCategories = [
    {
        category: "General",
        questions: [
            {
                q: "Is CredoCarbon a software platform or a consultancy?",
                a: "CredoCarbon provides professional execution supported by structured digital workflows. We price execution time, not software access."
            },
            {
                q: "How do payments and milestones work?",
                a: "Fees are milestone-based and aligned with delivery stages. Third-party fees are passed through transparently."
            },
            {
                q: "Do you guarantee issuance or regulatory approval?",
                a: "No. Issuance and approval decisions are made by registries and regulators."
            }
        ]
    },
    {
        category: "Developers",
        questions: [
            {
                q: "Is feasibility and revenue analysis really free?",
                a: "Yes. Feasibility, registry fit assessment, and indicative revenue modelling are provided at no cost."
            },
            {
                q: "Are registry and verifier (VVB) fees included?",
                a: "No. Registry and validation or verification body fees are charged at cost and billed separately."
            },
            {
                q: "Why does pricing vary by registry or methodology?",
                a: "Different registries and methodologies have different documentation, review cycles, and audit requirements."
            }
        ]
    },
    {
        category: "Buyers",
        questions: [
            {
                q: "Does CredoCarbon sell credits directly?",
                a: "No. CredoCarbon does not act as a principal. Credits are transferred directly between buyers and sellers through the relevant registry."
            },
            {
                q: "How does CredoCarbon charge buyers?",
                a: "CredoCarbon charges a transparent, success-based execution fee on completed transactions. There are no hidden spreads."
            },
            {
                q: "Are CredoCarbon fees included in the credit price?",
                a: "No. CredoCarbon fees are disclosed separately. Registry transfer and retirement fees are charged at cost."
            }
        ]
    }
];

export default function Pricing() {
    const [openCategory, setOpenCategory] = useState<string | null>(null);
    const [openQuestion, setOpenQuestion] = useState<string | null>(null);
    const { t, i18n } = useTranslation('pages');
    const isRTL = i18n.language === 'ar';

    // Get FAQ categories from translations
    const faqCategories = t('pricing.faq.categories', { returnObjects: true }) as Array<{
        category: string;
        questions: Array<{ q: string; a: string }>;
    }>;

    return (
        <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Hero Section - Dark Theme */}
            <section className="relative py-16 md:py-20 bg-[#1a1f36]">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {t('pricing.hero.title')}
                    </h1>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-12">
                        {t('pricing.hero.subtitle')}
                    </p>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        <div className="p-5 bg-[#242b45] rounded-xl border border-slate-700">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-3 mx-auto">
                                <Shield className="w-5 h-5 text-emerald-400" />
                            </div>
                            <h3 className="text-sm font-medium text-white mb-1">{t('pricing.features.registryFees.title')}</h3>
                            <p className="text-xs text-slate-400">{t('pricing.features.registryFees.subtitle')}</p>
                        </div>
                        <div className="p-5 bg-[#242b45] rounded-xl border border-slate-700">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-3 mx-auto">
                                <DollarSign className="w-5 h-5 text-emerald-400" />
                            </div>
                            <h3 className="text-sm font-medium text-white mb-1">{t('pricing.features.noSubscriptions.title')}</h3>
                            <p className="text-xs text-slate-400">{t('pricing.features.noSubscriptions.subtitle')}</p>
                        </div>
                        <div className="p-5 bg-[#242b45] rounded-xl border border-slate-700">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-3 mx-auto">
                                <FileText className="w-5 h-5 text-emerald-400" />
                            </div>
                            <h3 className="text-sm font-medium text-white mb-1">{t('pricing.features.noHiddenFees.title')}</h3>
                            <p className="text-xs text-slate-400">{t('pricing.features.noHiddenFees.subtitle')}</p>
                        </div>
                        <div className="p-5 bg-[#242b45] rounded-xl border border-slate-700">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-3 mx-auto">
                                <Clock className="w-5 h-5 text-emerald-400" />
                            </div>
                            <h3 className="text-sm font-medium text-white mb-1">{t('pricing.features.noGuarantees.title')}</h3>
                            <p className="text-xs text-slate-400">{t('pricing.features.noGuarantees.subtitle')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="mx-auto max-w-5xl px-4 py-16">

                {/* Free Analysis Section */}
                <section>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h2 className="text-2xl font-bold text-slate-900">{t('pricing.freeAnalysis.title')}</h2>
                    </div>
                    <p className="text-3xl font-bold text-slate-900 mb-2">{t('pricing.freeAnalysis.price')}</p>
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-md mb-6">
                        {t('pricing.freeAnalysis.subtitle')}
                    </span>

                    <ServiceLists
                        included={{
                            title: t('pricing.common.included'),
                            items: t('pricing.freeAnalysis.included', { returnObjects: true }) as string[]
                        }}
                        excluded={{
                            title: t('pricing.common.notIncluded'),
                            items: t('pricing.freeAnalysis.excluded', { returnObjects: true }) as string[]
                        }}
                    />
                </section>

                <SectionDivider />

                {/* Developers Section */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">{t('pricing.developers.title')}</h2>
                    <p className="text-slate-600 mb-8">
                        {t('pricing.developers.subtitle')}
                    </p>

                    {/* A. Project Registration */}
                    <div className="mb-10">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <h3 className="text-lg font-semibold text-slate-900">{t('pricing.developers.registration.title')}</h3>
                            <OneTimeBadge label={t('pricing.badges.oneTime')} />
                        </div>

                        <PricingTable
                            headers={(t('pricing.developers.registration.table.headers', { returnObjects: true }) as string[])}
                            rows={(t('pricing.developers.registration.table.rows', { returnObjects: true }) as string[][])}
                        />

                        <div className="mt-4 space-y-4">
                            <ExclusionNotice label={t('pricing.common.exclusion')}>
                                {t('pricing.developers.registration.exclusion')}
                            </ExclusionNotice>

                            <ServiceLists
                                included={{
                                    title: t('pricing.common.includedServices'),
                                    items: t('pricing.developers.registration.included', { returnObjects: true }) as string[]
                                }}
                                excluded={{
                                    title: t('pricing.common.excludedServices'),
                                    items: t('pricing.developers.registration.excluded', { returnObjects: true }) as string[]
                                }}
                            />
                        </div>
                    </div>

                    {/* B. MRV Section */}
                    <div>
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-slate-900">{t('pricing.developers.mrv.title')}</h3>
                            <RecurringBadge label={t('pricing.badges.recurringAnnual')} />
                        </div>
                        <div className="mb-4">
                            <InfoBar>
                                <span className="font-semibold text-amber-700">{t('pricing.developers.mrv.infoBar.label')}</span>{" "}
                                <span className="text-slate-700">{t('pricing.developers.mrv.infoBar.text')}</span>
                            </InfoBar>
                        </div>

                        <PricingTable
                            headers={(t('pricing.developers.mrv.table.headers', { returnObjects: true }) as string[])}
                            rows={(t('pricing.developers.mrv.table.rows', { returnObjects: true }) as string[][])}
                        />

                        <div className="mt-4 space-y-4">
                            <ExclusionNotice label={t('pricing.common.exclusion')}>
                                {t('pricing.developers.mrv.exclusion')}
                            </ExclusionNotice>

                            <ServiceLists
                                included={{
                                    title: t('pricing.common.includedServices'),
                                    items: t('pricing.developers.mrv.included', { returnObjects: true }) as string[]
                                }}
                                excluded={{
                                    title: t('pricing.common.excludedServices'),
                                    items: t('pricing.developers.mrv.excluded', { returnObjects: true }) as string[]
                                }}
                            />
                        </div>
                    </div>
                </section>

                <SectionDivider />

                {/* Generators Section - RECs */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">{t('pricing.generators.title')}</h2>
                    <p className="text-slate-600 mb-6">
                        {t('pricing.generators.subtitle')}
                    </p>

                    {/* One-time setup info with price */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                        <p className="text-base font-semibold text-blue-900">{t('pricing.generators.setupInfo.label')}</p>
                        <span className="hidden sm:inline text-blue-300">|</span>
                        <p className="text-base font-bold text-blue-900">{t('pricing.generators.setupInfo.price')}</p>
                    </div>
                    <p className="mt-2 text-sm text-slate-600 italic pl-4 border-l-2 border-slate-200">
                        {t('pricing.generators.setupInfo.includes')}
                    </p>

                    <div className="mt-4">
                        <PricingTable
                            headers={(t('pricing.generators.table.headers', { returnObjects: true }) as string[])}
                            rows={(t('pricing.generators.table.rows', { returnObjects: true }) as string[][])}
                        />
                    </div>

                    <div className="mt-4 space-y-4">
                        <ExclusionNotice label={t('pricing.common.exclusion')}>
                            {t('pricing.generators.exclusion')}
                        </ExclusionNotice>

                        <ServiceLists
                            included={{
                                title: t('pricing.common.includedServices'),
                                items: t('pricing.generators.included', { returnObjects: true }) as string[]
                            }}
                            excluded={{
                                title: t('pricing.common.excludedServices'),
                                items: t('pricing.generators.excluded', { returnObjects: true }) as string[]
                            }}
                        />
                    </div>
                </section>

                <SectionDivider />

                {/* Regulated Entities Section */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">{t('pricing.regulated.title')}</h2>
                    <p className="text-slate-600 mb-8">
                        {t('pricing.regulated.subtitle')}
                    </p>

                    {/* ETS Setup */}
                    <div className="mb-10">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <h3 className="text-lg font-semibold text-slate-900">{t('pricing.regulated.setup.title')}</h3>
                            <OneTimeBadge label={t('pricing.badges.oneTime')} />
                        </div>

                        <PricingTable
                            headers={(t('pricing.regulated.setup.table.headers', { returnObjects: true }) as string[])}
                            rows={(t('pricing.regulated.setup.table.rows', { returnObjects: true }) as string[][])}
                        />

                        <div className="mt-4">
                            <ServiceLists
                                included={{
                                    title: t('pricing.common.includedServices'),
                                    items: t('pricing.regulated.setup.included', { returnObjects: true }) as string[]
                                }}
                                excluded={{
                                    title: t('pricing.common.excludedServices'),
                                    items: t('pricing.regulated.setup.excluded', { returnObjects: true }) as string[]
                                }}
                            />
                        </div>
                    </div>

                    {/* Annual Compliance Support */}
                    <div>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <h3 className="text-lg font-semibold text-slate-900">{t('pricing.regulated.annual.title')}</h3>
                            <RecurringBadge label={t('pricing.badges.recurringAnnual')} />
                        </div>

                        <PricingTable
                            headers={(t('pricing.regulated.annual.table.headers', { returnObjects: true }) as string[])}
                            rows={(t('pricing.regulated.annual.table.rows', { returnObjects: true }) as string[][])}
                        />

                        <div className="mt-4 space-y-4">
                            <DisclaimerNotice label={t('pricing.common.disclaimer')}>
                                {t('pricing.regulated.annual.disclaimer')}
                            </DisclaimerNotice>

                            <ServiceLists
                                included={{
                                    title: t('pricing.common.includedServices'),
                                    items: t('pricing.regulated.annual.included', { returnObjects: true }) as string[]
                                }}
                                excluded={{
                                    title: t('pricing.common.excludedServices'),
                                    items: t('pricing.regulated.annual.excluded', { returnObjects: true }) as string[]
                                }}
                            />
                        </div>
                    </div>
                </section>

                <SectionDivider />

                {/* Buyers Section */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">{t('pricing.buyers.title')}</h2>
                    <p className="text-slate-600 mb-6">
                        {t('pricing.buyers.subtitle')}
                    </p>

                    {/* A. Sourcing, Advisory & Due Diligence */}
                    <div className="mb-10">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4">{t('pricing.buyers.sourcing.title')}</h3>
                        <PricingTable
                            headers={(t('pricing.buyers.sourcing.table.headers', { returnObjects: true }) as string[])}
                            rows={(t('pricing.buyers.sourcing.table.rows', { returnObjects: true }) as string[][])}
                        />
                        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                            <p className="text-sm font-medium text-blue-900">{t('pricing.buyers.sourcing.note')}</p>
                        </div>
                    </div>

                    {/* B. Transaction Execution */}
                    <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-4">{t('pricing.buyers.transaction.title')}</h3>
                        <PricingTable
                            headers={(t('pricing.buyers.transaction.table.headers', { returnObjects: true }) as string[])}
                            rows={(t('pricing.buyers.transaction.table.rows', { returnObjects: true }) as string[][])}
                        />

                        <div className="mt-4 space-y-4">
                            <DisclaimerNotice label={t('pricing.common.disclaimer')}>
                                {t('pricing.buyers.transaction.disclaimer')}
                            </DisclaimerNotice>

                            <ServiceLists
                                included={{
                                    title: t('pricing.common.includedServices'),
                                    items: t('pricing.buyers.transaction.included', { returnObjects: true }) as string[]
                                }}
                                excluded={{
                                    title: t('pricing.common.excludedServices'),
                                    items: t('pricing.buyers.transaction.excluded', { returnObjects: true }) as string[]
                                }}
                            />
                        </div>
                    </div>
                </section>

                <SectionDivider />

                {/* Optional Add-Ons Section */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">{t('pricing.optionalAddOns.title')}</h2>
                    <p className="text-slate-600 mb-6">
                        {t('pricing.optionalAddOns.subtitle')}
                    </p>

                    <PricingTable
                        headers={(t('pricing.optionalAddOns.table.headers', { returnObjects: true }) as string[])}
                        rows={(t('pricing.optionalAddOns.table.rows', { returnObjects: true }) as string[][])}
                    />

                    <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                        <p className="text-sm text-slate-600">
                            <span className="font-semibold">{t('pricing.optionalAddOns.note')}</span> {t('pricing.optionalAddOns.noteText')}
                        </p>
                    </div>
                </section>

                <SectionDivider />

                {/* Pricing FAQs */}
                <section>
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            {t('pricing.faq.title')}
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqCategories.map((category) => {
                            const categoryId = category.category.toLowerCase();
                            const isCategoryOpen = openCategory === categoryId;

                            return (
                                <div key={category.category} className="rounded-xl border border-slate-200 bg-white overflow-hidden">
                                    <button
                                        onClick={() => {
                                            if (isCategoryOpen) {
                                                setOpenCategory(null);
                                                setOpenQuestion(null);
                                            } else {
                                                setOpenCategory(categoryId);
                                                setOpenQuestion(null);
                                            }
                                        }}
                                        className="flex items-center justify-between w-full p-5 text-left hover:bg-slate-50 transition-colors"
                                    >
                                        <span className="text-lg font-semibold text-slate-900">
                                            {category.category}
                                        </span>
                                        <ChevronDown
                                            className={`flex-shrink-0 w-5 h-5 text-slate-400 transition-transform ${isCategoryOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${isCategoryOpen ? "max-h-[2000px]" : "max-h-0"
                                            }`}
                                    >
                                        <div className="border-t border-slate-200 bg-slate-50/50">
                                            {category.questions.map((faq, idx) => {
                                                const questionId = `${categoryId}-q${idx}`;
                                                const isQuestionOpen = openQuestion === questionId;

                                                return (
                                                    <div key={idx} className="border-b border-slate-200 last:border-b-0">
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setOpenQuestion(isQuestionOpen ? null : questionId);
                                                            }}
                                                            className="flex items-center justify-between w-full p-4 pl-8 text-left hover:bg-white transition-colors"
                                                        >
                                                            <span className="text-base font-medium text-slate-800 pr-4">
                                                                {faq.q}
                                                            </span>
                                                            <ChevronDown
                                                                className={`flex-shrink-0 w-4 h-4 text-slate-400 transition-transform ${isQuestionOpen ? "rotate-180" : ""
                                                                    }`}
                                                            />
                                                        </button>
                                                        <div
                                                            className={`overflow-hidden transition-all duration-300 ${isQuestionOpen ? "max-h-96" : "max-h-0"
                                                                }`}
                                                        >
                                                            <div className="px-4 pl-8 pb-4 text-slate-600 leading-relaxed">
                                                                {faq.a}
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>

            {/* Commercial Principles Section */}
            <section className="relative py-16 md:py-20 bg-[#1a1f36]">
                <div className="mx-auto max-w-5xl px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                        {t('pricing.commercialPrinciples.title')}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        {(t('pricing.commercialPrinciples.principles', { returnObjects: true }) as string[]).map((principle, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-4 p-5 bg-[#242b45] rounded-xl border border-slate-700"
                            >
                                <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-emerald-400 flex items-center justify-center">
                                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                                </div>
                                <p className="text-sm text-slate-300 leading-relaxed">{principle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="relative py-16 md:py-20 bg-slate-50">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {t('pricing.contact.title')}
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                        {t('pricing.contact.subtitle')}
                    </p>
                    <a
                        href="mailto:info@credocarbon.com"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/30"
                    >
                        <span>{t('pricing.contact.button')}</span>
                        <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                    </a>
                </div>
            </section>

            {/* Bottom Note */}
            <section className="relative py-10 md:py-12 bg-slate-900">
                <div className="mx-auto max-w-5xl px-6">
                    <p className="text-base text-slate-100 leading-relaxed text-center">
                        {t('pricing.bottomNote')}
                    </p>
                </div>
            </section>
        </div>
    );
}

