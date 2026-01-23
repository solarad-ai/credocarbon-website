import { ShoppingCart, Rocket, LayoutDashboard, Store, Globe, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function BuyerGuide() {
    const { t, i18n } = useTranslation('pages');
    const isRTL = i18n.language === 'ar';

    // Get translated data with type casting
    const gettingStartedSteps = t('guides.buyer.gettingStarted.steps', { returnObjects: true }) as Array<{ title: string, description: string }>;
    const dashboardFeatures = t('guides.buyer.dashboard.features', { returnObjects: true }) as Array<{ icon: string, title: string, description: string }>;
    const marketplaceFilters = t('guides.buyer.marketplace.filters', { returnObjects: true }) as Array<{ filter: string, options: string }>;
    const purchasingSteps = t('guides.buyer.purchasing.steps', { returnObjects: true }) as Array<{ title: string, description: string }>;
    const retiringSteps = t('guides.buyer.retiring.steps', { returnObjects: true }) as Array<{ title: string, description: string }>;

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Hero Section */}
            <section className="relative py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-slate-50">
                <div className="mx-auto max-w-6xl px-4">
                    <div className={`flex items-center gap-4 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                            <span className="text-3xl">💎</span>
                        </div>
                        <div className={isRTL ? 'text-right' : ''}>
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                                {t('guides.buyer.title')}
                            </h1>
                            <p className="text-lg text-slate-600 mt-2">
                                {t('guides.buyer.subtitle')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Getting Started */}
            <section className="relative py-16 bg-white">
                <div className="mx-auto max-w-6xl px-4">
                    <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Rocket className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl font-bold text-slate-900">{t('guides.buyer.gettingStarted.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {gettingStartedSteps.map((step, index) => (
                            <div key={index} className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200 hover:border-blue-400 transition-colors">
                                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
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

            {/* Dashboard Overview */}
            <section className="relative py-16 bg-slate-50">
                <div className="mx-auto max-w-6xl px-4">
                    <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <LayoutDashboard className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl font-bold text-slate-900">{t('guides.buyer.dashboard.title')}</h2>
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

            {/* Browsing the Marketplace */}
            <section className="relative py-16 bg-white">
                <div className="mx-auto max-w-6xl px-4">
                    <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Store className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl font-bold text-slate-900">{t('guides.buyer.marketplace.title')}</h2>
                    </div>

                    <div className="bg-slate-50 rounded-xl border-2 border-slate-200 overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-slate-200">
                                    <th className={`${isRTL ? 'text-right' : 'text-left'} px-6 py-4 font-bold text-slate-900`}>
                                        {isRTL ? 'الفلتر' : 'Filter'}
                                    </th>
                                    <th className={`${isRTL ? 'text-right' : 'text-left'} px-6 py-4 font-bold text-slate-900`}>
                                        {isRTL ? 'الخيارات' : 'Options'}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {marketplaceFilters.map((item, idx) => (
                                    <tr key={idx} className="border-t border-slate-200">
                                        <td className={`px-6 py-4 font-semibold text-blue-700 ${isRTL ? 'text-right' : ''}`}>{item.filter}</td>
                                        <td className={`px-6 py-4 text-slate-600 ${isRTL ? 'text-right' : ''}`}>{item.options}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Purchasing Credits */}
            <section className="relative py-16 bg-slate-50">
                <div className="mx-auto max-w-6xl px-4">
                    <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <ShoppingCart className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl font-bold text-slate-900">{t('guides.buyer.purchasing.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {purchasingSteps.map((step, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-blue-400 transition-colors">
                                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
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

            {/* Retiring Credits */}
            <section className="relative py-16 bg-white">
                <div className="mx-auto max-w-6xl px-4">
                    <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Globe className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl font-bold text-slate-900">{t('guides.buyer.retiring.title')}</h2>
                    </div>

                    <div className={`bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8 ${isRTL ? 'text-right' : ''}`}>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{t('guides.buyer.retiring.infoTitle')}</h3>
                        <p className="text-slate-700 leading-relaxed">
                            {t('guides.buyer.retiring.infoText')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {retiringSteps.map((step, index) => (
                            <div key={index} className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200 hover:border-blue-400 transition-colors">
                                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
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
