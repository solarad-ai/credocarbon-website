import { HelpCircle, ChevronDown, Search, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function FAQ() {
    const { t, i18n } = useTranslation('pages');
    const isArabic = i18n.language === 'ar';
    const faq = t('faq', { returnObjects: true }) as any;
    const questions = faq.questions || [];

    const [searchQuery, setSearchQuery] = useState("");
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const filteredFAQs = questions.filter((q: any) =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

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

                <div className="relative mx-auto max-w-6xl px-4 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2.5 mb-8 backdrop-blur-sm shadow-lg shadow-emerald-500/10">
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                            {faq.badge}
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-50 mb-6 leading-tight">
                        {faq.title}
                        <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mt-2">
                            {faq.titleHighlight}
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
                        {faq.subtitle}
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative group">
                            <Search className={`absolute ${isArabic ? 'right-5' : 'left-5'} top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-400 transition-colors`} />
                            <input
                                type="text"
                                placeholder={faq.searchPlaceholder}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={`w-full ${isArabic ? 'pr-14 pl-6' : 'pl-14 pr-6'} py-5 rounded-2xl bg-slate-900/80 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-400/50 focus:bg-slate-900 transition-all duration-300 shadow-xl shadow-slate-950/50`}
                            />
                        </div>
                        <p className="mt-4 text-sm text-slate-400">
                            {faq.questionsFound.replace('{{count}}', filteredFAQs.length.toString())}
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="relative py-16 md:py-24">
                <div className="mx-auto max-w-4xl px-4">
                    {filteredFAQs.length > 0 ? (
                        <div className="space-y-4">
                            {filteredFAQs.map((faqItem: any, index: number) => {
                                const isOpen = openIndex === index;
                                return (
                                    <div
                                        key={index}
                                        className="group rounded-2xl border border-slate-700/60 bg-slate-900/40 backdrop-blur-sm overflow-hidden hover:border-emerald-400/30 hover:bg-slate-900/60 transition-all duration-300"
                                    >
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className="flex items-start justify-between w-full p-6 md:p-8 text-left"
                                        >
                                            <div className="flex items-start gap-4 flex-1">
                                                <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 flex items-center justify-center group-hover:from-emerald-500/30 group-hover:to-cyan-500/30 transition-all ${isArabic ? 'ml-4' : 'mr-4'}`}>
                                                    <HelpCircle className="w-5 h-5 text-emerald-400" />
                                                </div>
                                                <span className={`text-lg md:text-xl font-semibold text-slate-50 group-hover:text-emerald-100 transition-colors ${isArabic ? 'pl-4' : 'pr-4'}`}>
                                                    {faqItem.question}
                                                </span>
                                            </div>
                                            <ChevronDown
                                                className={`flex-shrink-0 w-6 h-6 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-400' : ''}`}
                                            />
                                        </button>

                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                                        >
                                            <div className={`px-6 md:px-8 pb-6 md:pb-8 ${isArabic ? 'pr-20 md:pr-24' : 'pl-20 md:pl-24'}`}>
                                                <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                                                    {faqItem.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-20 h-20 rounded-2xl bg-slate-800/50 border border-slate-700 flex items-center justify-center mx-auto mb-6">
                                <Search className="w-10 h-10 text-slate-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-300 mb-3">{faq.noResults}</h3>
                            <p className="text-slate-400 mb-6">{faq.noResultsSubtitle}</p>
                            <button
                                onClick={() => setSearchQuery("")}
                                className="px-6 py-3 rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 font-semibold hover:bg-emerald-500/20 transition-all"
                            >
                                {faq.clearSearch}
                            </button>
                        </div>
                    )}
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
                                {faq.ctaTitle}
                            </h2>
                            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                                {faq.ctaSubtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    to="/help"
                                    className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/30"
                                >
                                    <span>{faq.visitHelpCenter}</span>
                                    <ArrowRight className={`w-5 h-5 transition-transform ${isArabic ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
                                </Link>
                                <a
                                    href="mailto:info@credocarbon.com"
                                    className="px-8 py-4 rounded-xl border border-emerald-400/30 bg-slate-900/40 text-emerald-400 font-semibold hover:bg-emerald-500/10 transition-all duration-300"
                                >
                                    {faq.contactSupport}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
