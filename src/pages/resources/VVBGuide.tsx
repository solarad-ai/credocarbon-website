import { Shield, LayoutDashboard, CheckCircle, ClipboardList, BarChart3 } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function VVBGuide() {
    const { t, i18n } = useTranslation('pages');
    const isRTL = i18n.language === 'ar';

    // Get translated data with type casting
    const roleTypes = t('guides.vvb.role.types', { returnObjects: true }) as Array<{ icon: string, title: string, description: string }>;
    const dashboardFeatures = t('guides.vvb.dashboard.features', { returnObjects: true }) as Array<{ icon: string, title: string, description: string }>;
    const workflowStages = t('guides.vvb.validationWorkflow.stages', { returnObjects: true }) as string[];
    const workflowSteps = t('guides.vvb.validationWorkflow.steps', { returnObjects: true }) as Array<{ title: string, description: string }>;
    const checklistItems = t('guides.vvb.checklist.items', { returnObjects: true }) as string[];
    const verificationSteps = t('guides.vvb.verification.steps', { returnObjects: true }) as Array<{ title: string, description: string }>;

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Hero Section */}
            <section className="relative py-16 md:py-20 bg-gradient-to-br from-purple-50 via-white to-slate-50">
                <div className="mx-auto max-w-6xl px-4">
                    <div className={`flex items-center gap-4 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                            <span className="text-3xl">🔍</span>
                        </div>
                        <div className={isRTL ? 'text-right' : ''}>
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                                {t('guides.vvb.title')}
                            </h1>
                            <p className="text-lg text-slate-600 mt-2">
                                {t('guides.vvb.subtitle')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Your Role */}
            <section className="relative py-16 bg-white">
                <div className="mx-auto max-w-6xl px-4">
                    <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Shield className="w-8 h-8 text-purple-600" />
                        <h2 className="text-3xl font-bold text-slate-900">{t('guides.vvb.role.title')}</h2>
                    </div>

                    <div className={`bg-purple-50 border-2 border-purple-200 rounded-xl p-6 mb-8 ${isRTL ? 'text-right' : ''}`}>
                        <p className="text-slate-700 leading-relaxed text-lg">
                            {t('guides.vvb.role.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {roleTypes.map((role, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200">
                                <div className={`text-4xl mb-3 ${isRTL ? 'text-right' : ''}`}>{role.icon}</div>
                                <h3 className={`text-xl font-bold text-slate-900 mb-2 ${isRTL ? 'text-right' : ''}`}>{role.title}</h3>
                                <p className={`text-slate-600 leading-relaxed ${isRTL ? 'text-right' : ''}`}>{role.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dashboard Overview */}
            <section className="relative py-16 bg-slate-50">
                <div className="mx-auto max-w-6xl px-4">
                    <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <LayoutDashboard className="w-8 h-8 text-purple-600" />
                        <h2 className="text-3xl font-bold text-slate-900">{t('guides.vvb.dashboard.title')}</h2>
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

            {/* Validation Workflow */}
            <section className="relative py-16 bg-white">
                <div className="mx-auto max-w-6xl px-4">
                    <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <CheckCircle className="w-8 h-8 text-purple-600" />
                        <h2 className="text-3xl font-bold text-slate-900">{t('guides.vvb.validationWorkflow.title')}</h2>
                    </div>

                    <div className={`flex flex-wrap items-center justify-center gap-4 mb-12 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        {workflowStages.map((stage, idx, arr) => (
                            <div key={idx} className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                                <div className="bg-white border-2 border-purple-500 rounded-lg px-6 py-3 font-semibold text-slate-900 shadow-sm">
                                    {stage}
                                </div>
                                {idx < arr.length - 1 && (
                                    <div className={`mx-2 text-purple-600 text-2xl ${isRTL ? 'rotate-180' : ''}`}>→</div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {workflowSteps.map((step, index) => (
                            <div key={index} className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200 hover:border-purple-400 transition-colors">
                                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                    <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
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

            {/* Validation Checklist */}
            <section className="relative py-16 bg-slate-50">
                <div className="mx-auto max-w-6xl px-4">
                    <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <ClipboardList className="w-8 h-8 text-purple-600" />
                        <h2 className="text-3xl font-bold text-slate-900">{t('guides.vvb.checklist.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {checklistItems.map((item, idx) => (
                            <div key={idx} className={`flex items-start gap-3 bg-white rounded-lg p-4 border-2 border-slate-200 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                                <div className="text-purple-600 text-xl flex-shrink-0">☐</div>
                                <p className="text-slate-700">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Verification Process */}
            <section className="relative py-16 bg-white">
                <div className="mx-auto max-w-6xl px-4">
                    <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <BarChart3 className="w-8 h-8 text-purple-600" />
                        <h2 className="text-3xl font-bold text-slate-900">{t('guides.vvb.verification.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {verificationSteps.map((step, index) => (
                            <div key={index} className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200 hover:border-purple-400 transition-colors">
                                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                    <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
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
