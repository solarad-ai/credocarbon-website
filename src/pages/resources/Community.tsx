import { Users, MessageSquare, Github, Slack, Calendar, Award } from "lucide-react";

const communityChannels = [
    {
        icon: Slack,
        title: "Slack Community",
        description: "Join 2,000+ carbon market professionals in real-time discussions",
        members: "2,143 members",
        action: "Join Slack"
    },
    {
        icon: Github,
        title: "GitHub Discussions",
        description: "Technical discussions, feature requests, and open-source contributions",
        members: "856 developers",
        action: "View on GitHub"
    },
    {
        icon: MessageSquare,
        title: "Community Forum",
        description: "Ask questions, share insights, and connect with other users",
        members: "3,421 posts",
        action: "Visit Forum"
    }
];

const upcomingEvents = [
    {
        title: "Monthly Community Call",
        date: "Dec 20, 2024",
        time: "2:00 PM EST",
        type: "Virtual",
        description: "Product updates, Q&A, and community showcase"
    },
    {
        title: "Carbon Markets Workshop",
        date: "Jan 10, 2025",
        time: "10:00 AM EST",
        type: "Virtual",
        description: "Deep dive into registry workflows and best practices"
    },
    {
        title: "Developer Office Hours",
        date: "Jan 15, 2025",
        time: "3:00 PM EST",
        type: "Virtual",
        description: "Get help with API integration and technical questions"
    }
];

const topContributors = [
    { name: "Sarah Chen", contributions: 127, badge: "Carbon Expert" },
    { name: "Michael Rodriguez", contributions: 98, badge: "API Wizard" },
    { name: "Emma Thompson", contributions: 84, badge: "Community Leader" },
    { name: "David Kim", contributions: 76, badge: "Registry Pro" }
];

export default function Community() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/30 to-amber-500/30 rounded-full blur-3xl animate-pulse" />
                </div>

                <div className="relative mx-auto max-w-6xl px-4 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 mb-6">
                        <Users className="w-4 h-4 text-orange-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
                            Community
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6">
                        Join the
                        <span className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                            CredoCarbon Community
                        </span>
                    </h1>

                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Connect with carbon market professionals, developers, and climate action
                        leaders from around the world.
                    </p>
                </div>
            </section>

            {/* Community Channels */}
            <section className="relative py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Connect with Us
                        </h2>
                        <p className="text-lg text-slate-300">
                            Choose your preferred platform
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {communityChannels.map((channel) => {
                            const Icon = channel.icon;
                            return (
                                <div
                                    key={channel.title}
                                    className="group relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm p-8 transition-all duration-300 hover:border-orange-400/40 hover:bg-slate-800/80"
                                >
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-500/10 to-amber-500/10" />

                                    <div className="relative">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-400/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-7 h-7 text-orange-400" />
                                        </div>

                                        <h3 className="text-xl font-semibold text-slate-50 mb-3 group-hover:text-orange-100 transition-colors">
                                            {channel.title}
                                        </h3>

                                        <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                                            {channel.description}
                                        </p>

                                        <p className="text-xs text-slate-500 mb-6">
                                            {channel.members}
                                        </p>

                                        <button className="w-full px-6 py-3 rounded-xl border border-orange-400/30 text-orange-400 font-semibold hover:bg-orange-500/10 transition-all duration-300">
                                            {channel.action}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="relative py-16 md:py-20 border-y border-slate-800">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Upcoming Events
                        </h2>
                        <p className="text-lg text-slate-300">
                            Join us for workshops, webinars, and community calls
                        </p>
                    </div>

                    <div className="space-y-6">
                        {upcomingEvents.map((event) => (
                            <div
                                key={event.title}
                                className="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-orange-400/40 hover:bg-slate-800/80"
                            >
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-orange-500/5 to-amber-500/5" />

                                <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Calendar className="w-5 h-5 text-orange-400" />
                                            <h3 className="text-xl font-semibold text-slate-50 group-hover:text-orange-100 transition-colors">
                                                {event.title}
                                            </h3>
                                        </div>

                                        <p className="text-sm text-slate-300 mb-3">
                                            {event.description}
                                        </p>

                                        <div className="flex flex-wrap gap-4 text-xs text-slate-400">
                                            <span>{event.date}</span>
                                            <span>•</span>
                                            <span>{event.time}</span>
                                            <span>•</span>
                                            <span className="px-2 py-1 rounded bg-orange-500/20 text-orange-400">
                                                {event.type}
                                            </span>
                                        </div>
                                    </div>

                                    <button className="px-6 py-3 rounded-xl border border-orange-400/30 text-orange-400 font-semibold hover:bg-orange-500/10 transition-all duration-300 whitespace-nowrap">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Contributors */}
            <section className="relative py-16 md:py-24">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Top Contributors
                        </h2>
                        <p className="text-lg text-slate-300">
                            Recognizing our most active community members
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {topContributors.map((contributor, index) => (
                            <div
                                key={contributor.name}
                                className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm p-6 text-center hover:border-orange-400/30 transition-colors"
                            >
                                {index === 0 && (
                                    <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-bl-xl">
                                        #1
                                    </div>
                                )}

                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-400/30 flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-8 h-8 text-orange-400" />
                                </div>

                                <h3 className="text-lg font-semibold text-slate-50 mb-1">
                                    {contributor.name}
                                </h3>

                                <p className="text-xs text-orange-400 mb-2">
                                    {contributor.badge}
                                </p>

                                <p className="text-sm text-slate-400">
                                    {contributor.contributions} contributions
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="rounded-3xl border border-orange-400/30 bg-gradient-to-br from-orange-500/10 to-amber-500/10 backdrop-blur-sm p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Ready to get involved?
                        </h2>
                        <p className="text-lg text-slate-300 mb-8">
                            Join thousands of professionals building the future of carbon markets.
                        </p>
                        <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105">
                            Join the Community
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
