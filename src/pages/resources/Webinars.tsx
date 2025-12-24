import { Video, Play, Clock, Users } from "lucide-react";

const webinars = [
    {
        title: "Getting Started with CredoCarbon",
        description: "A comprehensive introduction to the platform, covering project setup, MRV workflows, and registry integration.",
        duration: "45 min",
        level: "Beginner",
        attendees: "1,234",
        date: "Available Now",
        thumbnail: "from-emerald-500/20 to-teal-500/20"
    },
    {
        title: "Advanced MRV Techniques",
        description: "Deep dive into monitoring, reporting, and verification best practices for complex carbon credit projects.",
        duration: "60 min",
        level: "Advanced",
        attendees: "892",
        date: "Available Now",
        thumbnail: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "API Integration Workshop",
        description: "Hands-on workshop covering API authentication, webhooks, and building custom integrations.",
        duration: "90 min",
        level: "Intermediate",
        attendees: "567",
        date: "Available Now",
        thumbnail: "from-purple-500/20 to-pink-500/20"
    },
    {
        title: "Multi-Registry Project Management",
        description: "Learn how to efficiently manage projects across multiple carbon registries with unified workflows.",
        duration: "50 min",
        level: "Intermediate",
        attendees: "1,045",
        date: "Available Now",
        thumbnail: "from-orange-500/20 to-red-500/20"
    },
    {
        title: "Methodology Selection Guide",
        description: "Navigate the complex landscape of carbon credit methodologies and choose the right one for your project.",
        duration: "55 min",
        level: "Beginner",
        attendees: "1,567",
        date: "Available Now",
        thumbnail: "from-green-500/20 to-emerald-500/20"
    },
    {
        title: "Data Validation & Quality Assurance",
        description: "Ensure data integrity and compliance with automated validation tools and quality control processes.",
        duration: "40 min",
        level: "Intermediate",
        attendees: "723",
        date: "Available Now",
        thumbnail: "from-indigo-500/20 to-purple-500/20"
    }
];

const upcomingLive = [
    {
        title: "2025 Carbon Market Trends",
        date: "Jan 25, 2025",
        time: "2:00 PM EST",
        description: "Expert panel discussion on emerging trends and opportunities in voluntary carbon markets."
    },
    {
        title: "Platform Updates & Roadmap",
        date: "Feb 8, 2025",
        time: "11:00 AM EST",
        description: "Product team shares upcoming features and gathers community feedback."
    }
];

export default function Webinars() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-rose-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse" />
                </div>

                <div className="relative mx-auto max-w-6xl px-4 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-500/10 px-4 py-2 mb-6">
                        <Video className="w-4 h-4 text-rose-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-400">
                            Webinars
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6">
                        Learn from the
                        <span className="block bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                            experts
                        </span>
                    </h1>

                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Free webinars and workshops covering everything from platform basics
                        to advanced carbon market strategies.
                    </p>
                </div>
            </section>

            {/* Upcoming Live Webinars */}
            <section className="relative py-16 md:py-20 border-y border-slate-800">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Upcoming Live Sessions
                        </h2>
                        <p className="text-lg text-slate-300">
                            Register now to join live
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {upcomingLive.map((webinar) => (
                            <div
                                key={webinar.title}
                                className="group relative overflow-hidden rounded-3xl border border-rose-400/30 bg-gradient-to-br from-rose-500/10 to-pink-500/10 backdrop-blur-sm p-8 transition-all duration-300 hover:border-rose-400/50 hover:shadow-lg hover:shadow-rose-500/20"
                            >
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 rounded-full bg-rose-500 text-slate-950 text-xs font-bold">
                                        LIVE
                                    </span>
                                </div>

                                <h3 className="text-2xl font-semibold text-slate-50 mb-3 group-hover:text-rose-100 transition-colors">
                                    {webinar.title}
                                </h3>

                                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                                    {webinar.description}
                                </p>

                                <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
                                    <span>{webinar.date}</span>
                                    <span>•</span>
                                    <span>{webinar.time}</span>
                                </div>

                                <button className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-slate-950 font-semibold hover:shadow-lg hover:shadow-rose-500/50 transition-all duration-300 hover:scale-105">
                                    Register Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* On-Demand Webinars */}
            <section className="relative py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            On-Demand Library
                        </h2>
                        <p className="text-lg text-slate-300">
                            Watch anytime, anywhere
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {webinars.map((webinar) => (
                            <div
                                key={webinar.title}
                                className="group relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm transition-all duration-300 hover:border-rose-400/40 hover:bg-slate-800/80"
                            >
                                {/* Thumbnail */}
                                <div className={`relative h-48 bg-gradient-to-br ${webinar.thumbnail} overflow-hidden`}>
                                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-rose-500/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Play className="w-8 h-8 text-slate-950 ml-1" />
                                        </div>
                                    </div>

                                    {/* Level Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 rounded-full bg-slate-900/80 text-slate-300 text-xs font-medium">
                                            {webinar.level}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-slate-50 mb-3 group-hover:text-rose-100 transition-colors">
                                        {webinar.title}
                                    </h3>

                                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                                        {webinar.description}
                                    </p>

                                    <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3.5 h-3.5" />
                                            {webinar.duration}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Users className="w-3.5 h-3.5" />
                                            {webinar.attendees} watched
                                        </div>
                                    </div>

                                    <button className="w-full px-6 py-3 rounded-xl border border-rose-400/30 text-rose-400 font-semibold hover:bg-rose-500/10 transition-all duration-300">
                                        Watch Now
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
                    <div className="rounded-3xl border border-rose-400/30 bg-gradient-to-br from-rose-500/10 to-pink-500/10 backdrop-blur-sm p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Want to host a webinar?
                        </h2>
                        <p className="text-lg text-slate-300 mb-8">
                            Share your expertise with the CredoCarbon community.
                        </p>
                        <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-slate-950 font-semibold hover:shadow-lg hover:shadow-rose-500/50 transition-all duration-300 hover:scale-105">
                            Become a Speaker
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
