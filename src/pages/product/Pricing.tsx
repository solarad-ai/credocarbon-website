import { Sparkles, Leaf, Zap, Building2, TrendingUp, ChevronDown, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const pricingCards = [
    {
        id: "analysis",
        name: "Free Analysis",
        description: "Evaluate feasibility before committing to registration.",
        price: "$0",
        icon: Sparkles,
        color: "violet"
    },
    {
        id: "developers",
        name: "Voluntary Carbon Projects",
        label: "DEVELOPERS",
        description: "Registration, MRV, and issuance support.",
        price: "From $12k",
        icon: Leaf,
        color: "emerald"
    },
    {
        id: "generators",
        name: "Renewable Energy Certificates",
        label: "GENERATORS",
        description: "REC registration and issuance.",
        price: "From $6k",
        icon: Zap,
        color: "amber"
    },
    {
        id: "compliance",
        name: "Compliance & ETS",
        label: "REGULATED ENTITIES",
        description: "ETS setup and ongoing compliance.",
        price: "From $15k",
        icon: Building2,
        color: "blue"
    },
    {
        id: "buyers",
        name: "Buyers",
        label: "CORPORATES & TRADERS",
        description: "Sourcing, due diligence, and transaction execution.",
        price: "From 1.0%",
        icon: TrendingUp,
        color: "pink"
    }
];

const detailedPricing: Record<string, any> = {
    analysis: {
        title: "Free Analysis",
        bullets: [
            "Digital analysis workspace",
            "Feasibility and revenue modelling",
            "Indicative credit volumes and timelines",
            "Registry, methodology, or scheme fit assessment",
            "High-level risk indicators"
        ],
        note: "Does not include registry submissions, verifier engagement, or consultant-led execution."
    },
    developers: {
        title: "Voluntary Carbon Projects — Developers",
        sections: [
            {
                subtitle: "Project Registration & Structuring",
                headers: ["Project Type", "Fee (USD)"],
                rows: [
                    { label: "Standard", value: "$12k – $25k" },
                    { label: "Premium", value: "$20k – $45k" },
                    { label: "Nature-based / REDD+", value: "$45k – $75k" }
                ]
            },
            {
                subtitle: "MRV, Verification & Issuance",
                headers: ["Project Type", "Fee", "Annual Minimum"],
                rows: [
                    { label: "Standard", value: "$0.18 – $0.30 / tCO₂e", extra: "$12k" },
                    { label: "Premium", value: "$0.25 – $0.45 / tCO₂e", extra: "$15k" },
                    { label: "Nature-based", value: "$0.60 – $1.00 / tCO₂e", extra: "$25k" }
                ]
            }
        ],
        note: "Registry and verification body (VVB) fees are charged at cost and billed separately."
    },
    generators: {
        title: "Renewable Energy Certificates (RECs)",
        sections: [
            {
                subtitle: "",
                headers: ["Service", "Fee"],
                rows: [
                    { label: "Registration & Setup (one-time)", value: "$6k – $15k" },
                    { label: "Issuance & Reporting", value: "$0.03 – $0.10 / MWh" },
                    { label: "Minimum Annual Fee", value: "$5k – $10k" }
                ]
            }
        ],
        note: "Registry membership and issuance fees are charged at cost."
    },
    compliance: {
        title: "Compliance & Emissions Trading Schemes (ETS)",
        sections: [
            {
                subtitle: "ETS Account Setup & Structuring",
                headers: ["Scheme Complexity", "Fee"],
                rows: [
                    { label: "Emerging / Regional", value: "$15k – $30k" },
                    { label: "National", value: "$25k – $45k" },
                    { label: "High-scrutiny", value: "$40k – $70k" }
                ]
            },
            {
                subtitle: "Annual MRV, Reporting & Surrender Support",
                headers: ["ETS Tier", "Annual Fee"],
                rows: [
                    { label: "Tier A", value: "$15k – $25k" },
                    { label: "Tier B", value: "$25k – $45k" },
                    { label: "Tier C", value: "$45k – $75k" }
                ]
            }
        ],
        note: "Regulator and verifier fees are charged at cost and billed separately."
    },
    buyers: {
        title: "Buyer Pricing — Sourcing & Execution",
        bullets: [
            "Curated supply sourcing based on buyer criteria",
            "Eligibility screening and documentation review",
            "Counterparty and registry coordination",
            "Settlement and transfer support"
        ],
        sections: [
            {
                subtitle: "",
                headers: ["Transaction Size", "CredoCarbon Fee"],
                rows: [
                    { label: "< $1M", value: "2.0% – 3.0%" },
                    { label: "$1M – $5M", value: "1.5% – 2.0%" },
                    { label: "> $5M", value: "1.0% – 1.5%" }
                ]
            }
        ],
        notes: [
            "Minimum execution fee: $25,000 per transaction.",
            "CredoCarbon does not take title to credits and does not trade on its own balance sheet."
        ]
    }
};

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
            },
            {
                q: "What happens if a registry or verifier asks for changes?",
                a: "Standard review cycles are included. Material scope changes are handled via change orders."
            },
            {
                q: "Can I engage CredoCarbon for only part of the process?",
                a: "Yes. Engagements can be scoped to specific stages such as registration, MRV, or issuance."
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
            },
            {
                q: "Does CredoCarbon take trading or balance-sheet risk?",
                a: "No. CredoCarbon does not take title to credits and does not trade on its own balance sheet."
            },
            {
                q: "What happens if a transaction does not complete?",
                a: "Execution fees apply only to completed transactions. Any third-party costs incurred may still be payable."
            }
        ]
    }
];

export default function Pricing() {
    const { t, i18n } = useTranslation('pages');
    const isArabic = i18n.language === 'ar';
    const pricing = t('pricing', { returnObjects: true }) as any;
    const [expandedCard, setExpandedCard] = useState<string | null>(null);
    const [openCategory, setOpenCategory] = useState<string | null>(null);
    const [openQuestion, setOpenQuestion] = useState<string | null>(null);

    useEffect(() => {
        if (expandedCard) {
            // Scroll to detailed pricing section smoothly
            setTimeout(() => {
                const detailedSection = document.getElementById('detailed-pricing');
                if (detailedSection) {
                    const yOffset = -100; // Offset from top
                    const y = detailedSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 100);
        }
    }, [expandedCard]);

    return (
        <div dir={isArabic ? 'rtl' : 'ltr'} className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-slate-50">
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-100 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-slate-100 rounded-full opacity-20 blur-3xl"></div>
                </div>

                <div className="relative mx-auto max-w-6xl px-4 text-center">
                    {/* Icon Badge */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 mb-6 shadow-lg shadow-emerald-500/20">
                        <TrendingUp className="w-8 h-8 text-white" />
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                        Pricing
                    </h1>

                    <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed mb-3">
                        Transparent, execution-based pricing for carbon projects, renewable energy certificates, and compliance obligations.
                    </p>
                    <p className="text-base text-emerald-700 font-medium">
                        Registry, verifier, and regulator fees are always charged at cost.
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="relative py-8 md:py-12 bg-slate-50">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {pricingCards.map((card) => {
                            const Icon = card.icon;
                            const hasDetails = detailedPricing[card.id];

                            return (
                                <div
                                    key={card.id}
                                    onClick={() => hasDetails && setExpandedCard(expandedCard === card.id ? null : card.id)}
                                    className={`bg-white rounded-2xl border-2 border-slate-200 p-6 transition-all duration-300 shadow-sm ${hasDetails ? 'cursor-pointer hover:border-emerald-500 hover:shadow-lg hover:scale-105' : ''
                                        }`}
                                >
                                    {card.label && (
                                        <div className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wider">
                                            {card.label}
                                        </div>
                                    )}

                                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-emerald-600" />
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                                        {card.name}
                                    </h3>

                                    <p className="text-sm text-slate-600 mb-4">
                                        {card.description}
                                    </p>

                                    <div className="text-2xl font-bold text-emerald-600 mb-4">
                                        {card.price}
                                    </div>

                                    {hasDetails && (
                                        <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
                                            <span>View Details</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Detailed Pricing Accordion */}
            <section id="detailed-pricing" className="relative py-12 md:py-16 bg-white">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="space-y-4">
                        {/* Free Analysis */}
                        <div className="rounded-xl border-2 border-slate-200 bg-white overflow-hidden">
                            <button
                                onClick={() => setExpandedCard(expandedCard === 'analysis' ? null : 'analysis')}
                                className="flex items-center justify-between w-full p-5 text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="text-lg font-semibold text-slate-900">
                                    Free Analysis
                                </span>
                                <ChevronDown
                                    className={`flex-shrink-0 w-5 h-5 text-slate-400 transition-transform ${expandedCard === 'analysis' ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${expandedCard === 'analysis' ? "max-h-[1000px]" : "max-h-0"
                                    }`}
                            >
                                <div className="p-5 pt-4 border-t border-slate-200 bg-slate-50/50">
                                    <ul className="space-y-2 mb-4">
                                        {detailedPricing.analysis.bullets.map((bullet: string, idx: number) => (
                                            <li key={idx} className="flex gap-2 text-sm text-slate-700">
                                                <span className="text-emerald-600 mt-1">•</span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-xs text-slate-500 italic">
                                        {detailedPricing.analysis.note}
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* Voluntary Carbon Projects */}
                        <div className="rounded-xl border-2 border-slate-200 bg-white overflow-hidden">
                            <button
                                onClick={() => setExpandedCard(expandedCard === 'developers' ? null : 'developers')}
                                className="flex items-center justify-between w-full p-5 text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="text-lg font-semibold text-slate-900">
                                    Voluntary Carbon Projects — Developers
                                </span>
                                <ChevronDown
                                    className={`flex-shrink-0 w-5 h-5 text-slate-400 transition-transform ${expandedCard === 'developers' ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${expandedCard === 'developers' ? "max-h-[2000px]" : "max-h-0"
                                    }`}
                            >
                                <div className="p-5 pt-4 border-t border-slate-200 bg-slate-50/50 space-y-6">
                                    {detailedPricing.developers.sections.map((section: any, idx: number) => (
                                        <div key={idx}>
                                            {section.subtitle && (
                                                <h5 className="text-sm font-semibold text-slate-900 mb-3">
                                                    {section.subtitle}
                                                </h5>
                                            )}
                                            <div className="bg-slate-100 rounded-lg overflow-hidden">
                                                <div className={`grid ${section.headers.length === 3 ? 'grid-cols-3' : 'grid-cols-2'} gap-px bg-slate-200`}>
                                                    {section.headers.map((header: string, hIdx: number) => (
                                                        <div key={hIdx} className="bg-slate-100 px-4 py-2 font-semibold text-sm text-slate-900">
                                                            {header}
                                                        </div>
                                                    ))}
                                                </div>
                                                {section.rows.map((row: any, rIdx: number) => (
                                                    <div key={rIdx} className={`grid ${section.headers.length === 3 ? 'grid-cols-3' : 'grid-cols-2'} gap-px bg-slate-200`}>
                                                        <div className="bg-white px-4 py-3 text-sm text-slate-700">
                                                            {row.label}
                                                        </div>
                                                        <div className="bg-white px-4 py-3 text-sm font-bold text-emerald-600">
                                                            {row.value}
                                                        </div>
                                                        {row.extra && (
                                                            <div className="bg-white px-4 py-3 text-sm font-bold text-emerald-600">
                                                                {row.extra}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                    <p className="text-xs text-slate-500 italic">
                                        {detailedPricing.developers.note}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Renewable Energy Certificates */}
                        <div className="rounded-xl border-2 border-slate-200 bg-white overflow-hidden">
                            <button
                                onClick={() => setExpandedCard(expandedCard === 'generators' ? null : 'generators')}
                                className="flex items-center justify-between w-full p-5 text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="text-lg font-semibold text-slate-900">
                                    Renewable Energy Certificates (RECs)
                                </span>
                                <ChevronDown
                                    className={`flex-shrink-0 w-5 h-5 text-slate-400 transition-transform ${expandedCard === 'generators' ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${expandedCard === 'generators' ? "max-h-[1000px]" : "max-h-0"
                                    }`}
                            >
                                <div className="p-5 pt-4 border-t border-slate-200 bg-slate-50/50 space-y-4">
                                    {detailedPricing.generators.sections.map((section: any, idx: number) => (
                                        <div key={idx}>
                                            <div className="bg-slate-100 rounded-lg overflow-hidden">
                                                <div className="grid grid-cols-2 gap-px bg-slate-200">
                                                    {section.headers.map((header: string, hIdx: number) => (
                                                        <div key={hIdx} className="bg-slate-100 px-4 py-2 font-semibold text-sm text-slate-900">
                                                            {header}
                                                        </div>
                                                    ))}
                                                </div>
                                                {section.rows.map((row: any, rIdx: number) => (
                                                    <div key={rIdx} className="grid grid-cols-2 gap-px bg-slate-200">
                                                        <div className="bg-white px-4 py-3 text-sm text-slate-700">
                                                            {row.label}
                                                        </div>
                                                        <div className="bg-white px-4 py-3 text-sm font-bold text-emerald-600">
                                                            {row.value}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                    <p className="text-xs text-slate-500 italic">
                                        {detailedPricing.generators.note}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Compliance & ETS */}
                        <div className="rounded-xl border-2 border-slate-200 bg-white overflow-hidden">
                            <button
                                onClick={() => setExpandedCard(expandedCard === 'compliance' ? null : 'compliance')}
                                className="flex items-center justify-between w-full p-5 text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="text-lg font-semibold text-slate-900">
                                    Compliance & Emissions Trading Schemes (ETS)
                                </span>
                                <ChevronDown
                                    className={`flex-shrink-0 w-5 h-5 text-slate-400 transition-transform ${expandedCard === 'compliance' ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${expandedCard === 'compliance' ? "max-h-[2000px]" : "max-h-0"
                                    }`}
                            >
                                <div className="p-5 pt-4 border-t border-slate-200 bg-slate-50/50 space-y-6">
                                    {detailedPricing.compliance.sections.map((section: any, idx: number) => (
                                        <div key={idx}>
                                            <h5 className="text-sm font-semibold text-slate-900 mb-3">
                                                {section.subtitle}
                                            </h5>
                                            <div className="bg-slate-100 rounded-lg overflow-hidden">
                                                <div className="grid grid-cols-2 gap-px bg-slate-200">
                                                    {section.headers.map((header: string, hIdx: number) => (
                                                        <div key={hIdx} className="bg-slate-100 px-4 py-2 font-semibold text-sm text-slate-900">
                                                            {header}
                                                        </div>
                                                    ))}
                                                </div>
                                                {section.rows.map((row: any, rIdx: number) => (
                                                    <div key={rIdx} className="grid grid-cols-2 gap-px bg-slate-200">
                                                        <div className="bg-white px-4 py-3 text-sm text-slate-700">
                                                            {row.label}
                                                        </div>
                                                        <div className="bg-white px-4 py-3 text-sm font-bold text-emerald-600">
                                                            {row.value}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                    <p className="text-xs text-slate-500 italic">
                                        {detailedPricing.compliance.note}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Buyer Pricing */}
                        <div className="rounded-xl border-2 border-slate-200 bg-white overflow-hidden">
                            <button
                                onClick={() => setExpandedCard(expandedCard === 'buyers' ? null : 'buyers')}
                                className="flex items-center justify-between w-full p-5 text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="text-lg font-semibold text-slate-900">
                                    Buyer Pricing — Sourcing & Execution
                                </span>
                                <ChevronDown
                                    className={`flex-shrink-0 w-5 h-5 text-slate-400 transition-transform ${expandedCard === 'buyers' ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${expandedCard === 'buyers' ? "max-h-[1000px]" : "max-h-0"
                                    }`}
                            >
                                <div className="p-5 pt-4 border-t border-slate-200 bg-slate-50/50 space-y-4">
                                    <ul className="space-y-2">
                                        {detailedPricing.buyers.bullets.map((bullet: string, idx: number) => (
                                            <li key={idx} className="flex gap-2 text-sm text-slate-700">
                                                <span className="text-emerald-600 mt-1">•</span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {detailedPricing.buyers.sections.map((section: any, idx: number) => (
                                        <div key={idx}>
                                            <div className="bg-slate-100 rounded-lg overflow-hidden">
                                                <div className="grid grid-cols-2 gap-px bg-slate-200">
                                                    {section.headers.map((header: string, hIdx: number) => (
                                                        <div key={hIdx} className="bg-slate-100 px-4 py-2 font-semibold text-sm text-slate-900">
                                                            {header}
                                                        </div>
                                                    ))}
                                                </div>
                                                {section.rows.map((row: any, rIdx: number) => (
                                                    <div key={rIdx} className="grid grid-cols-2 gap-px bg-slate-200">
                                                        <div className="bg-white px-4 py-3 text-sm text-slate-700">
                                                            {row.label}
                                                        </div>
                                                        <div className="bg-white px-4 py-3 text-sm font-bold text-emerald-600">
                                                            {row.value}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}

                                    {detailedPricing.buyers.notes.map((note: string, idx: number) => (
                                        <p key={idx} className="text-xs text-slate-500 italic">
                                            {note}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing FAQs */}
            <section className="relative py-12 md:py-16 bg-slate-50">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Pricing FAQs
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqCategories.map((category) => {
                            const categoryId = category.category.toLowerCase();
                            const isCategoryOpen = openCategory === categoryId;

                            return (
                                <div key={category.category} className="rounded-xl border-2 border-slate-200 bg-white overflow-hidden">
                                    {/* Category Header */}
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

                                    {/* Questions inside category */}
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
                </div>
            </section>

            {/* Contact Section */}
            <section className="relative py-16 md:py-20 bg-white">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Want to Know More?
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Get in touch with our team for detailed pricing information and custom solutions.
                    </p>
                    <a
                        href="mailto:info@credocarbon.com"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/30"
                    >
                        <span>Contact us at info@credocarbon.com</span>
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>

            {/* Bottom Note */}
            <section className="relative py-10 md:py-12 bg-slate-900">
                <div className="mx-auto max-w-5xl px-6">
                    <p className="text-base text-slate-100 leading-relaxed text-center">
                        CredoCarbon does not mark up registry, verifier, or regulator fees. We price execution and coordination — not access, subscriptions, or trading spreads.
                    </p>
                </div>
            </section>
        </div>
    );
}
