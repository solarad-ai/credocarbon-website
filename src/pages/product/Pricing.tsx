import { Check, Sparkles, Building2, Rocket } from "lucide-react";

const pricingPlans = [
    {
        name: "Starter",
        icon: Sparkles,
        price: "999",
        period: "per month",
        description: "Perfect for small projects and individual developers",
        features: [
            "Up to 5 projects",
            "Basic MRV workflows",
            "1 registry integration",
            "Email support",
            "Standard analytics",
            "API access"
        ],
        highlighted: false
    },
    {
        name: "Professional",
        icon: Building2,
        price: "2,999",
        period: "per month",
        description: "Ideal for growing organizations and VVBs",
        features: [
            "Unlimited projects",
            "Advanced MRV workflows",
            "All registry integrations",
            "Priority support",
            "Advanced analytics",
            "API access",
            "Custom methodologies",
            "White-label options"
        ],
        highlighted: true
    },
    {
        name: "Enterprise",
        icon: Rocket,
        price: "Custom",
        period: "contact us",
        description: "For large-scale operations and registries",
        features: [
            "Everything in Professional",
            "Dedicated account manager",
            "24/7 phone support",
            "Custom integrations",
            "On-premise deployment",
            "SLA guarantees",
            "Training & onboarding",
            "Custom development"
        ],
        highlighted: false
    }
];

export default function Pricing() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl animate-pulse" />
                </div>

                <div className="relative mx-auto max-w-6xl px-4 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 mb-6">
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                            Pricing Plans
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6">
                        Choose the perfect plan
                        <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            for your needs
                        </span>
                    </h1>

                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Transparent pricing with no hidden fees. Scale as you grow with flexible plans
                        designed for every stage of your carbon credit journey.
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="relative py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {pricingPlans.map((plan) => {
                            const Icon = plan.icon;
                            return (
                                <div
                                    key={plan.name}
                                    className={`relative overflow-hidden rounded-3xl border p-8 transition-all duration-300 ${plan.highlighted
                                            ? "border-emerald-400/50 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 scale-105 shadow-2xl shadow-emerald-500/20"
                                            : "border-slate-700 bg-slate-900/60 hover:border-emerald-400/30"
                                        }`}
                                >
                                    {plan.highlighted && (
                                        <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 text-xs font-bold px-4 py-1 rounded-bl-xl">
                                            POPULAR
                                        </div>
                                    )}

                                    <div className="mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 flex items-center justify-center mb-4">
                                            <Icon className="w-6 h-6 text-emerald-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-50 mb-2">{plan.name}</h3>
                                        <p className="text-sm text-slate-400">{plan.description}</p>
                                    </div>

                                    <div className="mb-8">
                                        <div className="flex items-baseline gap-2">
                                            {plan.price !== "Custom" && (
                                                <span className="text-slate-500 text-xl">$</span>
                                            )}
                                            <span className="text-5xl font-bold text-slate-50">{plan.price}</span>
                                        </div>
                                        <p className="text-sm text-slate-400 mt-1">{plan.period}</p>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex gap-3 items-start">
                                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-slate-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${plan.highlighted
                                                ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105"
                                                : "border border-emerald-400/30 text-emerald-400 hover:bg-emerald-500/10"
                                            }`}
                                    >
                                        {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Frequently asked questions
                        </h2>
                        <p className="text-lg text-slate-300">
                            Have questions? We're here to help.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "Can I change plans later?",
                                a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
                            },
                            {
                                q: "What payment methods do you accept?",
                                a: "We accept all major credit cards, wire transfers, and can set up custom billing for enterprise clients."
                            },
                            {
                                q: "Is there a free trial?",
                                a: "Yes, we offer a 14-day free trial on all plans. No credit card required."
                            }
                        ].map((faq) => (
                            <div
                                key={faq.q}
                                className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 hover:border-emerald-400/30 transition-colors"
                            >
                                <h3 className="text-lg font-semibold text-slate-50 mb-2">{faq.q}</h3>
                                <p className="text-sm text-slate-400">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
