import { BookOpen, Code, FileText, Video, Search } from "lucide-react";

const docSections = [
    {
        icon: BookOpen,
        title: "Getting Started",
        description: "Quick start guides and tutorials to get you up and running",
        links: [
            "Platform Overview",
            "Creating Your First Project",
            "Understanding MRV Workflows",
            "Registry Integration Guide"
        ]
    },
    {
        icon: Code,
        title: "API Reference",
        description: "Complete API documentation with code examples",
        links: [
            "Authentication",
            "Projects API",
            "Monitoring API",
            "Verification API",
            "Webhooks"
        ]
    },
    {
        icon: FileText,
        title: "Methodologies",
        description: "Comprehensive methodology library and guidance",
        links: [
            "Renewable Energy",
            "Nature-Based Solutions",
            "Industrial Efficiency",
            "Methodology Selection Tool"
        ]
    },
    {
        icon: Video,
        title: "Video Tutorials",
        description: "Step-by-step video guides for common workflows",
        links: [
            "Platform Walkthrough",
            "Project Setup",
            "Data Import",
            "Report Generation"
        ]
    }
];

const popularTopics = [
    "How to submit a monitoring report",
    "Understanding validation workflows",
    "Multi-registry project management",
    "API authentication best practices",
    "Methodology parameter configuration",
    "Data validation and error handling"
];

export default function Documentation() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse" />
                </div>

                <div className="relative mx-auto max-w-6xl px-4 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 mb-6">
                        <BookOpen className="w-4 h-4 text-blue-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
                            Documentation
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6">
                        Everything you need
                        <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            to succeed
                        </span>
                    </h1>

                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        Comprehensive guides, API references, and tutorials to help you make
                        the most of the CredoCarbon platform.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search documentation..."
                                className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-blue-400/50"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Documentation Sections */}
            <section className="relative py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {docSections.map((section) => {
                            const Icon = section.icon;
                            return (
                                <div
                                    key={section.title}
                                    className="group relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm p-8 transition-all duration-300 hover:border-blue-400/40 hover:bg-slate-800/80"
                                >
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />

                                    <div className="relative">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-7 h-7 text-blue-400" />
                                        </div>

                                        <h3 className="text-2xl font-semibold text-slate-50 mb-3 group-hover:text-blue-100 transition-colors">
                                            {section.title}
                                        </h3>

                                        <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                                            {section.description}
                                        </p>

                                        <ul className="space-y-2">
                                            {section.links.map((link) => (
                                                <li key={link}>
                                                    <a
                                                        href="#"
                                                        className="text-sm text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                                                    >
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
                                                        {link}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Popular Topics */}
            <section className="relative py-16 md:py-20 border-y border-slate-800">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Popular Topics
                        </h2>
                        <p className="text-lg text-slate-300">
                            Frequently accessed documentation
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {popularTopics.map((topic) => (
                            <a
                                key={topic}
                                href="#"
                                className="group rounded-2xl border border-slate-700 bg-slate-900/60 p-6 hover:border-blue-400/30 transition-all duration-300 hover:bg-slate-800/80"
                            >
                                <div className="flex items-start gap-3">
                                    <FileText className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-slate-300 group-hover:text-blue-100 transition-colors">
                                        {topic}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="rounded-3xl border border-blue-400/30 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Can't find what you're looking for?
                        </h2>
                        <p className="text-lg text-slate-300 mb-8">
                            Our support team is here to help you succeed.
                        </p>
                        <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-slate-950 font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                            Contact Support
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
