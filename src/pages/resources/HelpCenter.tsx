import { HelpCircle, MessageCircle, Mail, Phone, Search, ChevronDown } from "lucide-react";

const faqCategories = [
    {
        category: "Getting Started",
        questions: [
            {
                q: "How do I create my first project?",
                a: "Navigate to the Projects dashboard and click 'New Project'. Follow the guided setup wizard to configure your project details, select a methodology, and choose your target registry."
            },
            {
                q: "What registries does CredoCarbon support?",
                a: "We support Verra VCS, Gold Standard, GCC, Plan Vivo, and several other major carbon registries. New integrations are added regularly based on customer demand."
            },
            {
                q: "How long does verification take?",
                a: "Verification timelines vary by registry and project type, typically ranging from 2-8 weeks. Our platform streamlines the process with automated validation and real-time status tracking."
            }
        ]
    },
    {
        category: "Technical",
        questions: [
            {
                q: "How do I integrate the API?",
                a: "Start by generating an API key in your account settings. Then follow our API documentation to authenticate and make your first request. We provide SDKs for JavaScript, Python, and Go."
            },
            {
                q: "What data formats are supported for import?",
                a: "We support CSV, Excel, JSON, and XML formats. Our data mapper tool helps you align your data structure with registry requirements."
            },
            {
                q: "Is my data secure?",
                a: "Yes, we use bank-grade encryption (AES-256), SOC 2 compliance, and role-based access control. All data is encrypted at rest and in transit."
            }
        ]
    },
    {
        category: "Billing",
        questions: [
            {
                q: "Can I change my plan?",
                a: "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately, and billing is prorated."
            },
            {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, wire transfers, and can set up custom invoicing for enterprise customers."
            },
            {
                q: "Is there a free trial?",
                a: "Yes, we offer a 14-day free trial on all plans with full platform access. No credit card required to start."
            }
        ]
    }
];

const supportChannels = [
    {
        icon: MessageCircle,
        title: "Live Chat",
        description: "Chat with our support team in real-time",
        availability: "Mon-Fri, 9am-6pm EST",
        action: "Start Chat"
    },
    {
        icon: Mail,
        title: "Email Support",
        description: "Send us a detailed message",
        availability: "Response within 24 hours",
        action: "Send Email"
    },
    {
        icon: Phone,
        title: "Phone Support",
        description: "Speak with a support specialist",
        availability: "Enterprise plans only",
        action: "Schedule Call"
    }
];

export default function HelpCenter() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse" />
                </div>

                <div className="relative mx-auto max-w-6xl px-4 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 mb-6">
                        <HelpCircle className="w-4 h-4 text-purple-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-400">
                            Help Center
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6">
                        How can we
                        <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            help you today?
                        </span>
                    </h1>

                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        Find answers to common questions or get in touch with our support team.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search for help..."
                                className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-purple-400/50"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Channels */}
            <section className="relative py-16 md:py-20 border-y border-slate-800">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-lg text-slate-300">
                            Choose your preferred support channel
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {supportChannels.map((channel) => {
                            const Icon = channel.icon;
                            return (
                                <div
                                    key={channel.title}
                                    className="group relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm p-8 transition-all duration-300 hover:border-purple-400/40 hover:bg-slate-800/80 text-center"
                                >
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />

                                    <div className="relative">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-7 h-7 text-purple-400" />
                                        </div>

                                        <h3 className="text-xl font-semibold text-slate-50 mb-3 group-hover:text-purple-100 transition-colors">
                                            {channel.title}
                                        </h3>

                                        <p className="text-sm text-slate-300 mb-2">
                                            {channel.description}
                                        </p>

                                        <p className="text-xs text-slate-500 mb-6">
                                            {channel.availability}
                                        </p>

                                        <button className="px-6 py-3 rounded-xl border border-purple-400/30 text-purple-400 font-semibold hover:bg-purple-500/10 transition-all duration-300">
                                            {channel.action}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="relative py-16 md:py-24">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-slate-300">
                            Quick answers to common questions
                        </p>
                    </div>

                    <div className="space-y-8">
                        {faqCategories.map((category) => (
                            <div key={category.category}>
                                <h3 className="text-xl font-semibold text-slate-50 mb-4">
                                    {category.category}
                                </h3>
                                <div className="space-y-4">
                                    {category.questions.map((faq) => (
                                        <details
                                            key={faq.q}
                                            className="group rounded-2xl border border-slate-700 bg-slate-900/60 overflow-hidden hover:border-purple-400/30 transition-colors"
                                        >
                                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                                <span className="text-lg font-medium text-slate-50 group-hover:text-purple-100 transition-colors">
                                                    {faq.q}
                                                </span>
                                                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                                            </summary>
                                            <div className="px-6 pb-6 text-slate-300 leading-relaxed">
                                                {faq.a}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="rounded-3xl border border-purple-400/30 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Still need help?
                        </h2>
                        <p className="text-lg text-slate-300 mb-8">
                            Our support team is standing by to assist you.
                        </p>
                        <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-slate-950 font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                            Contact Support
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
