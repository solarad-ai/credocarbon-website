import { FileText, Calendar, Tag, ArrowRight } from "lucide-react";

const blogPosts = [
    {
        title: "The Future of Carbon Markets: Trends for 2025",
        excerpt: "Exploring emerging trends in voluntary carbon markets, from tokenization to AI-powered MRV systems.",
        category: "Industry Insights",
        date: "Dec 15, 2024",
        readTime: "5 min read",
        image: "from-emerald-500/20 to-teal-500/20"
    },
    {
        title: "How Blockchain is Transforming Carbon Credit Verification",
        excerpt: "Deep dive into how distributed ledger technology ensures transparency and prevents double-counting.",
        category: "Technology",
        date: "Dec 10, 2024",
        readTime: "7 min read",
        image: "from-cyan-500/20 to-blue-500/20"
    },
    {
        title: "Registry Integration Best Practices",
        excerpt: "A comprehensive guide to navigating multi-registry workflows and ensuring compliance across platforms.",
        category: "Best Practices",
        date: "Dec 5, 2024",
        readTime: "6 min read",
        image: "from-purple-500/20 to-pink-500/20"
    },
    {
        title: "Case Study: Scaling Renewable Energy Projects",
        excerpt: "How one developer used CredoCarbon to manage 50+ solar projects across 3 registries.",
        category: "Case Studies",
        date: "Nov 28, 2024",
        readTime: "8 min read",
        image: "from-orange-500/20 to-red-500/20"
    },
    {
        title: "Understanding MRV: A Beginner's Guide",
        excerpt: "Everything you need to know about Monitoring, Reporting, and Verification in carbon markets.",
        category: "Education",
        date: "Nov 20, 2024",
        readTime: "10 min read",
        image: "from-green-500/20 to-emerald-500/20"
    },
    {
        title: "API Updates: New Webhook Events",
        excerpt: "Announcing new webhook events for real-time project updates and verification status changes.",
        category: "Product Updates",
        date: "Nov 15, 2024",
        readTime: "4 min read",
        image: "from-indigo-500/20 to-purple-500/20"
    }
];

const categories = [
    "All Posts",
    "Industry Insights",
    "Technology",
    "Best Practices",
    "Case Studies",
    "Product Updates"
];

export default function Blog() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl animate-pulse" />
                </div>

                <div className="relative mx-auto max-w-6xl px-4 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 mb-6">
                        <FileText className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                            Blog
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6">
                        Insights & Updates
                        <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            from CredoCarbon
                        </span>
                    </h1>

                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Stay informed about carbon markets, platform updates, and industry best practices.
                    </p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="relative py-8 border-y border-slate-800">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${category === "All Posts"
                                        ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950"
                                        : "border border-slate-700 text-slate-400 hover:border-emerald-400/30 hover:text-emerald-400"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="relative py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <article
                                key={post.title}
                                className="group relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/40 hover:bg-slate-800/80"
                            >
                                {/* Featured Image Placeholder */}
                                <div className={`h-48 bg-gradient-to-br ${post.image} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors" />
                                </div>

                                <div className="p-6">
                                    {/* Meta */}
                                    <div className="flex items-center gap-3 mb-3 text-xs text-slate-400">
                                        <div className="flex items-center gap-1">
                                            <Tag className="w-3.5 h-3.5" />
                                            {post.category}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {post.date}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-semibold text-slate-50 mb-3 group-hover:text-emerald-100 transition-colors">
                                        {post.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    {/* Read More */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-slate-500">{post.readTime}</span>
                                        <button className="flex items-center gap-2 text-sm text-emerald-400 font-medium group-hover:gap-3 transition-all">
                                            Read More
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-12">
                        <button className="px-8 py-4 rounded-xl border border-emerald-400/30 text-emerald-400 font-semibold hover:bg-emerald-500/10 transition-all duration-300">
                            Load More Posts
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Subscribe to our newsletter
                        </h2>
                        <p className="text-lg text-slate-300 mb-8">
                            Get the latest insights delivered to your inbox every week.
                        </p>
                        <div className="flex gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-emerald-400/50"
                            />
                            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
