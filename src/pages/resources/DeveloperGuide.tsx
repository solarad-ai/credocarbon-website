import { FileText, Rocket, LayoutDashboard, Hammer, RefreshCw, Gem } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function DeveloperGuide() {
    const { t, i18n } = useTranslation('pages');
    const isRTL = i18n.language === 'ar';

    // Get translated data with type casting
    const gettingStartedSteps = t('guides.developer.gettingStarted.steps', { returnObjects: true }) as Array<{ title: string, description: string }>;
    const dashboardFeatures = t('guides.developer.dashboard.features', { returnObjects: true }) as Array<{ icon: string, title: string, description: string }>;
    const creatingProjectSteps = t('guides.developer.creatingProject.steps', { returnObjects: true }) as Array<{ step: string, description: string }>;
    const lifecycleStages = t('guides.developer.lifecycle.stages', { returnObjects: true }) as string[];
    const managingCreditsFeatures = t('guides.developer.managingCredits.features', { returnObjects: true }) as Array<{ icon: string, title: string, description: string }>;

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Hero Section */}
            <section className="relative py-16 md:py-20 bg-gradient-to-br from-emerald-50 via-white to-slate-50">
                <div className="mx-auto max-w-6xl px-4">
                    <div className={`flex items-center gap-4 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                            <span className="text-3xl">🌿</span>
                        </div>
                        <div className={isRTL ? 'text-right' : ''}>
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                                {t('guides.developer.title')}
                            </h1>
                            <p className="text-lg text-slate-600 mt-2">
                                {t('guides.developer.subtitle')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Getting Started */}
            <section className="relative py-16 bg-white">
                <div className="mx-auto max-w-6xl px-4">
                    <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Rocket className="w-8 h-8 text-emerald-600" />
                        <h2 className="text-3xl font-bold text-slate-900">{t('guides.developer.gettingStarted.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {gettingStartedSteps.map((step, index) => (
                            <div key={index} className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200 hover:border-emerald-400 transition-colors">
                                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                    <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                                        {index + 1}
                                    </div>
                                    <div className={isRTL ? 'text-right' : ''}>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dashboard Features */}
            <section className="relative py-16 bg-slate-50">
                <div className="mx-auto max-w-6xl px-4">
                    <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <LayoutDashboard className="w-8 h-8 text-emerald-600" />
                        <h2 className="text-3xl font-bold text-slate-900">{t('guides.developer.dashboard.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {dashboardFeatures.map((feature, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className={`text-4xl mb-3 ${isRTL ? 'text-right' : ''}`}>{feature.icon}</div>
                                <h3 className={`text-xl font-bold text-slate-900 mb-2 ${isRTL ? 'text-right' : ''}`}>{feature.title}</h3>
                                <p className={`text-slate-600 leading-relaxed ${isRTL ? 'text-right' : ''}`}>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Creating a Project */}
            <section className="relative py-16 bg-white">
                <div className="mx-auto max-w-6xl px-4">
                    <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Hammer className="w-8 h-8 text-emerald-600" />
                        <h2 className="text-3xl font-bold text-slate-900">{t('guides.developer.creatingProject.title')}</h2>
                    </div>

                    <div className="bg-slate-50 rounded-xl border-2 border-slate-200 overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-slate-200">
                                    <th className={`${isRTL ? 'text-right' : 'text-left'} px-6 py-4 font-bold text-slate-900`}>
                                        {(t('guides.developer.creatingProject.tableHeaders', { returnObjects: true }) as string[])[0]}
                                    </th>
                                    <th className={`${isRTL ? 'text-right' : 'text-left'} px-6 py-4 font-bold text-slate-900`}>
                                        {(t('guides.developer.creatingProject.tableHeaders', { returnObjects: true }) as string[])[1]}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {creatingProjectSteps.map((item, idx) => (
                                    <tr key={idx} className="border-t border-slate-200">
                                        <td className={`px-6 py-4 font-semibold text-emerald-700 ${isRTL ? 'text-right' : ''}`}>{item.step}</td>
                                        <td className={`px-6 py-4 text-slate-600 ${isRTL ? 'text-right' : ''}`}>{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Project Lifecycle */}
            <section className="relative py-16 bg-slate-50">
                <div className="mx-auto max-w-6xl px-4">
                    <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <RefreshCw className="w-8 h-8 text-emerald-600" />
                        <h2 className="text-3xl font-bold text-slate-900">{t('guides.developer.lifecycle.title')}</h2>
                    </div>

                    <div className={`flex flex-wrap items-center justify-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        {lifecycleStages.map((stage, idx, arr) => (
                            <div key={idx} className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                                <div className="bg-white border-2 border-emerald-500 rounded-lg px-6 py-3 font-semibold text-slate-900 shadow-sm">
                                    {stage}
                                </div>
                                {idx < arr.length - 1 && (
                                    <div className={`mx-2 text-emerald-600 text-2xl ${isRTL ? 'rotate-180' : ''}`}>→</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Managing Credits */}
            <section className="relative py-16 bg-white">
                <div className="mx-auto max-w-6xl px-4">
                    <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Gem className="w-8 h-8 text-emerald-600" />
                        <h2 className="text-3xl font-bold text-slate-900">{t('guides.developer.managingCredits.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {managingCreditsFeatures.map((feature, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200 hover:border-emerald-400 transition-colors">
                                <div className={`text-4xl mb-3 ${isRTL ? 'text-right' : ''}`}>{feature.icon}</div>
                                <h3 className={`text-xl font-bold text-slate-900 mb-2 ${isRTL ? 'text-right' : ''}`}>{feature.title}</h3>
                                <p className={`text-slate-600 leading-relaxed ${isRTL ? 'text-right' : ''}`}>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <section className="relative py-12 bg-slate-900">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{t('guides.common.footer.title')}</h3>
                    <p className="text-slate-400 mb-4">{t('guides.common.footer.subtitle')}</p>
                    <p className="text-slate-500 text-sm">{t('guides.common.footer.copyright')}</p>
                </div>
            </section>
        </div>
    );
}
