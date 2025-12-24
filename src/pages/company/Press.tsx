import { Newspaper, Download, Mail, Calendar } from "lucide-react";

const pressReleases = [
    {
        title: "CredoCarbon Raises $15M Series A to Scale Carbon Credit Infrastructure",
        date: "December 1, 2024",
        excerpt: "Leading climate tech investors back CredoCarbon's mission to bring transparency and efficiency to voluntary carbon markets.",
        type: "Funding"
    },
    {
        title: "Partnership Announcement: Integration with Gold Standard Registry",
        date: "November 15, 2024",
        excerpt: "CredoCarbon announces strategic partnership with Gold Standard to streamline project verification workflows.",
        type: "Partnership"
    },
    {
        title: "CredoCarbon Platform Processes 1 Million Carbon Credits",
        date: "October 20, 2024",
        excerpt: "Milestone achievement demonstrates growing adoption of digital infrastructure in carbon markets.",
        type: "Milestone"
    },
    {
        title: "New API Features Enable Real-Time MRV Integration",
        date: "September 30, 2024",
        excerpt: "Enhanced developer tools allow seamless integration of IoT sensors and monitoring devices.",
        type: "Product Launch"
    }
];

const mediaKit = [
    { name: "Company Logo (PNG)", size: "2.4 MB" },
    { name: "Company Logo (SVG)", size: "124 KB" },
    { name: "Brand Guidelines", size: "8.1 MB" },
    { name: "Product Screenshots", size: "15.3 MB" },
    { name: "Executive Headshots", size: "6.7 MB" }
];

const coverage = [
    { outlet: "TechCrunch", title: "CredoCarbon is bringing blockchain to carbon markets" },
    { outlet: "Bloomberg Green", title: "How technology is transforming carbon credit verification" },
    { outlet: "The Verge", title: "The future of climate tech infrastructure" },
    { outlet: "Forbes", title: "Top climate tech startups to watch in 2024" }
];

export default function Press() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl animate-pulse" />
                </div>

                <div className="relative mx-auto max-w-6xl px-4 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 mb-6">
                        <Newspaper className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                            Press & Media
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6">
                        CredoCarbon in
                        <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            the News
                        </span>
                    </h1>

                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        Latest press releases, media coverage, and resources for journalists.
                    </p>

                    <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105">
                        <Mail className="w-5 h-5" />
                        Contact Press Team
                    </button>
                </div>
            </section>

            {/* Press Releases */}
            <section className="relative py-16 md:py-24">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Press Releases
                        </h2>
                        <p className="text-lg text-slate-300">
                            Latest announcements and company news
                        </p>
                    </div>

                    <div className="space-y-6">
                        {pressReleases.map((release) => (
                            <article
                                key={release.title}
                                className="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm p-8 transition-all duration-300 hover:border-emerald-400/40 hover:bg-slate-800/80"
                            >
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-emerald-500/5 to-teal-500/5" />

                                <div className="relative">
                                    <div className="flex flex-wrap items-center gap-3 mb-3">
                                        <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/30">
                                            {release.type}
                                        </span>
                                        <div className="flex items-center gap-2 text-sm text-slate-400">
                                            <Calendar className="w-4 h-4" />
                                            {release.date}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-semibold text-slate-50 mb-3 group-hover:text-emerald-100 transition-colors">
                                        {release.title}
                                    </h3>

                                    <p className="text-slate-300 mb-4 leading-relaxed">
                                        {release.excerpt}
                                    </p>

                                    <button className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors">
                                        Read Full Release →
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Media Coverage */}
            <section className="relative py-16 md:py-20 border-y border-slate-800">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Media Coverage
                        </h2>
                        <p className="text-lg text-slate-300">
                            Featured in leading publications
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {coverage.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 hover:border-emerald-400/30 transition-colors"
                            >
                                <div className="text-sm font-semibold text-emerald-400 mb-2">
                                    {item.outlet}
                                </div>
                                <h3 className="text-lg text-slate-50">
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Media Kit */}
            <section className="relative py-16 md:py-24">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Media Kit
                        </h2>
                        <p className="text-lg text-slate-300">
                            Download logos, brand assets, and company information
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mediaKit.map((asset) => (
                            <div
                                key={asset.name}
                                className="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-emerald-400/40 hover:bg-slate-800/80"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 flex items-center justify-center">
                                        <Download className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <span className="text-xs text-slate-500">{asset.size}</span>
                                </div>

                                <h3 className="text-lg font-semibold text-slate-50 mb-2">
                                    {asset.name}
                                </h3>

                                <button className="text-sm text-emerald-400 font-medium hover:text-emerald-300 transition-colors">
                                    Download →
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <button className="px-8 py-4 rounded-xl border border-emerald-400/30 text-emerald-400 font-semibold hover:bg-emerald-500/10 transition-all duration-300">
                            Download Complete Media Kit
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
