import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

const openPositions = [
    {
        title: "Senior Full-Stack Engineer",
        department: "Engineering",
        location: "Remote / San Francisco",
        type: "Full-time",
        description: "Build scalable carbon credit infrastructure with React, Node.js, and blockchain technologies."
    },
    {
        title: "Carbon Market Analyst",
        department: "Product",
        location: "Remote / London",
        type: "Full-time",
        description: "Shape our product strategy with deep expertise in carbon markets and registry workflows."
    },
    {
        title: "DevOps Engineer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        description: "Manage cloud infrastructure, CI/CD pipelines, and ensure 99.9% platform uptime."
    },
    {
        title: "UX/UI Designer",
        department: "Design",
        location: "Remote / New York",
        type: "Full-time",
        description: "Create intuitive interfaces for complex carbon credit workflows and data visualization."
    },
    {
        title: "Customer Success Manager",
        department: "Customer Success",
        location: "Remote",
        type: "Full-time",
        description: "Help our clients maximize value from the CredoCarbon platform and achieve their climate goals."
    },
    {
        title: "Blockchain Developer",
        department: "Engineering",
        location: "Remote / Singapore",
        type: "Full-time",
        description: "Develop smart contracts and blockchain integrations for carbon credit tokenization."
    }
];

const benefits = [
    "Competitive salary and equity",
    "Comprehensive health insurance",
    "Flexible remote work",
    "Learning & development budget",
    "Unlimited PTO",
    "Home office setup",
    "Team retreats",
    "Climate impact projects"
];

export default function Careers() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl animate-pulse" />
                </div>

                <div className="relative mx-auto max-w-6xl px-4 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 mb-6">
                        <Briefcase className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                            Careers
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6">
                        Build the future of
                        <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            carbon markets
                        </span>
                    </h1>

                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Join a team of passionate innovators working to accelerate climate action
                        through transparent, verifiable carbon credit infrastructure.
                    </p>
                </div>
            </section>

            {/* Benefits */}
            <section className="relative py-16 md:py-20 border-y border-slate-800">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Why join CredoCarbon?
                        </h2>
                        <p className="text-lg text-slate-300">
                            We invest in our team's growth and well-being
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {benefits.map((benefit) => (
                            <div
                                key={benefit}
                                className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 text-center hover:border-emerald-400/30 transition-colors"
                            >
                                <div className="w-2 h-2 rounded-full bg-emerald-400 mx-auto mb-3" />
                                <p className="text-sm text-slate-300">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="relative py-16 md:py-24">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Open Positions
                        </h2>
                        <p className="text-lg text-slate-300">
                            Find your next opportunity
                        </p>
                    </div>

                    <div className="space-y-4">
                        {openPositions.map((position) => (
                            <div
                                key={position.title}
                                className="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-emerald-400/40 hover:bg-slate-800/80"
                            >
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-emerald-500/5 to-teal-500/5" />

                                <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <h3 className="text-xl font-semibold text-slate-50 group-hover:text-emerald-100 transition-colors">
                                                {position.title}
                                            </h3>
                                            <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/30">
                                                {position.department}
                                            </span>
                                        </div>

                                        <p className="text-sm text-slate-300 mb-3">
                                            {position.description}
                                        </p>

                                        <div className="flex flex-wrap gap-4 text-xs text-slate-400">
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-3.5 h-3.5" />
                                                {position.location}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3.5 h-3.5" />
                                                {position.type}
                                            </div>
                                        </div>
                                    </div>

                                    <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-emerald-400/30 text-emerald-400 font-semibold hover:bg-emerald-500/10 transition-all duration-300 group-hover:scale-105">
                                        Apply Now
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Don't see the right role?
                        </h2>
                        <p className="text-lg text-slate-300 mb-8">
                            We're always interested in hearing from talented people. Send us your resume!
                        </p>
                        <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105">
                            Get in Touch
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
