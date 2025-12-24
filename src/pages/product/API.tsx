import { Code2, Webhook, Key, BookOpen, Zap, Shield } from "lucide-react";

const apiFeatures = [
    {
        icon: Code2,
        title: "RESTful API",
        description: "Clean, intuitive REST API with comprehensive endpoints for all platform features."
    },
    {
        icon: Webhook,
        title: "Webhooks",
        description: "Real-time event notifications for project updates, verification status, and more."
    },
    {
        icon: Key,
        title: "API Keys",
        description: "Secure authentication with role-based access control and rate limiting."
    },
    {
        icon: BookOpen,
        title: "Documentation",
        description: "Detailed API docs with code examples in multiple programming languages."
    },
    {
        icon: Zap,
        title: "High Performance",
        description: "99.9% uptime SLA with low-latency responses and global CDN distribution."
    },
    {
        icon: Shield,
        title: "Enterprise Security",
        description: "Bank-grade encryption, OAuth 2.0, and compliance with industry standards."
    }
];

const codeExample = `// Initialize CredoCarbon SDK
import { CredoCarbon } from '@credocarbon/sdk';

const client = new CredoCarbon({
  apiKey: 'your_api_key_here'
});

// Create a new project
const project = await client.projects.create({
  name: 'Solar Farm Project',
  methodology: 'ACM0002',
  registry: 'verra',
  location: {
    country: 'IN',
    coordinates: [28.6139, 77.2090]
  }
});

// Submit monitoring report
const report = await client.monitoring.submit({
  projectId: project.id,
  period: '2024-Q1',
  data: {
    energyGenerated: 150000, // kWh
    emissionsReduced: 120 // tCO2e
  }
});

console.log('Report submitted:', report.id);`;

export default function API() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse" />
                </div>

                <div className="relative mx-auto max-w-6xl px-4 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 mb-6">
                        <Code2 className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
                            Developer API
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6">
                        Build with the
                        <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            CredoCarbon API
                        </span>
                    </h1>

                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        Powerful, flexible API to integrate carbon credit workflows into your applications.
                        Full programmatic access to all platform features.
                    </p>

                    <div className="flex gap-4 justify-center">
                        <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
                            View Documentation
                        </button>
                        <button className="px-8 py-4 rounded-xl border border-cyan-400/30 text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                            Get API Key
                        </button>
                    </div>
                </div>
            </section>

            {/* API Features */}
            <section className="relative py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {apiFeatures.map((feature) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={feature.title}
                                    className="group relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm p-8 transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-800/80"
                                >
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />

                                    <div className="relative">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-7 h-7 text-cyan-400" />
                                        </div>

                                        <h3 className="text-xl font-semibold text-slate-50 mb-3 group-hover:text-cyan-100 transition-colors">
                                            {feature.title}
                                        </h3>

                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Code Example */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto max-w-5xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Quick Start Example
                        </h2>
                        <p className="text-lg text-slate-300">
                            Get started in minutes with our intuitive SDK
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-700 bg-slate-900/90 overflow-hidden">
                        <div className="flex items-center justify-between px-6 py-3 border-b border-slate-700 bg-slate-800/50">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <span className="text-xs text-slate-400 font-mono">example.js</span>
                        </div>
                        <pre className="p-6 overflow-x-auto">
                            <code className="text-sm text-slate-300 font-mono leading-relaxed">
                                {codeExample}
                            </code>
                        </pre>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Ready to start building?
                        </h2>
                        <p className="text-lg text-slate-300 mb-8">
                            Access comprehensive API documentation and get your API key today.
                        </p>
                        <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
                            Get Started Free
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
