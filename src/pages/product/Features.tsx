import { Zap, Shield, Globe, Database, LineChart, Lock } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Real-time MRV",
        description: "Automated monitoring, reporting, and verification workflows with live data integration and instant validation.",
        benefits: ["IoT sensor integration", "Automated data collection", "Real-time dashboards"]
    },
    {
        icon: Shield,
        title: "Blockchain Security",
        description: "Immutable record-keeping with cryptographic verification ensuring data integrity and transparency.",
        benefits: ["Tamper-proof records", "Cryptographic anchoring", "Audit trails"]
    },
    {
        icon: Globe,
        title: "Multi-Registry Support",
        description: "Seamless integration with Verra, Gold Standard, GCC, Plan Vivo, and other major carbon registries.",
        benefits: ["5+ registries", "Unified workflows", "Cross-registry portfolios"]
    },
    {
        icon: Database,
        title: "Smart Data Management",
        description: "Advanced data structuring, validation, and storage optimized for carbon credit lifecycle management.",
        benefits: ["Structured data models", "Automated validation", "Version control"]
    },
    {
        icon: LineChart,
        title: "Analytics & Insights",
        description: "Comprehensive analytics dashboard with predictive insights and performance tracking.",
        benefits: ["Custom reports", "Predictive analytics", "Performance metrics"]
    },
    {
        icon: Lock,
        title: "Enterprise Security",
        description: "Bank-grade security with role-based access control, encryption, and compliance certifications.",
        benefits: ["SOC 2 compliant", "End-to-end encryption", "Role-based access"]
    }
];

export default function Features() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-700" />
                </div>

                <div className="relative mx-auto max-w-6xl px-4 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 mb-6">
                        <Zap className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                            Platform Features
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6">
                        Everything you need for
                        <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            carbon credit excellence
                        </span>
                    </h1>

                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        CredoCarbon provides a comprehensive suite of tools designed to streamline
                        every aspect of carbon credit lifecycle management—from project registration
                        to issuance and trading.
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <section className="relative py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={feature.title}
                                    className="group relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm p-8 transition-all duration-300 hover:border-emerald-400/40 hover:bg-slate-800/80"
                                >
                                    {/* Hover gradient effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/10 to-teal-500/10" />

                                    <div className="relative">
                                        {/* Icon */}
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-7 h-7 text-emerald-400" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-semibold text-slate-50 mb-3 group-hover:text-emerald-100 transition-colors">
                                            {feature.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                                            {feature.description}
                                        </p>

                                        {/* Benefits */}
                                        <div className="space-y-2">
                                            {feature.benefits.map((benefit) => (
                                                <div key={benefit} className="flex gap-2 items-center">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 animate-pulse" />
                                                    <span className="text-xs text-slate-400 font-medium">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <div className="rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Ready to get started?
                        </h2>
                        <p className="text-lg text-slate-300 mb-8">
                            Join leading organizations using CredoCarbon to streamline their carbon credit operations.
                        </p>
                        <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105">
                            Request a Demo
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
