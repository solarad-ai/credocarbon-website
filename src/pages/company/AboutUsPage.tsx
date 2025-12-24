import AboutUs from "../../components/sections/AboutUs";
import { Target, Users, Globe2, Award } from "lucide-react";

const values = [
    {
        icon: Target,
        title: "Mission-Driven",
        description: "Accelerating climate action through transparent, verifiable carbon markets."
    },
    {
        icon: Users,
        title: "Collaborative",
        description: "Building partnerships across the carbon credit ecosystem for collective impact."
    },
    {
        icon: Globe2,
        title: "Global Perspective",
        description: "Supporting projects worldwide with localized expertise and global standards."
    },
    {
        icon: Award,
        title: "Excellence",
        description: "Committed to the highest standards of quality, security, and innovation."
    }
];

export default function AboutUsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
            <AboutUs />

            {/* Our Values */}
            <section className="relative py-16 md:py-24">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            The principles that guide everything we do at CredoCarbon
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {values.map((value) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={value.title}
                                    className="group relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm p-8 transition-all duration-300 hover:border-emerald-400/40 hover:bg-slate-800/80"
                                >
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/10 to-teal-500/10" />

                                    <div className="relative flex gap-6">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-7 h-7 text-emerald-400" />
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold text-slate-50 mb-3 group-hover:text-emerald-100 transition-colors">
                                                {value.title}
                                            </h3>
                                            <p className="text-sm text-slate-300 leading-relaxed">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team CTA */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Join our mission
                        </h2>
                        <p className="text-lg text-slate-300 mb-8">
                            We're always looking for talented individuals passionate about climate action.
                        </p>
                        <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105">
                            View Open Positions
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
