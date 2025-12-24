import RegistriesSection from "../../components/sections/Registries";

export default function RegistriesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
            <RegistriesSection />

            {/* Additional Registry Information */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Need a custom registry integration?
                        </h2>
                        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                            We're constantly expanding our registry support. Contact us to discuss
                            integrating with your preferred carbon registry.
                        </p>
                        <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105">
                            Contact Our Team
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
