import { Shield, CheckCircle, Lock, FileCheck, Globe, Award } from "lucide-react";

export default function Compliance() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 md:py-24 overflow-hidden border-b border-slate-800">
                <div className="relative mx-auto max-w-4xl px-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 mb-6">
                        <Shield className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                            Compliance & Standards
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
                        Carbon Market Compliance & Certifications
                    </h1>

                    <p className="text-lg text-slate-400 max-w-3xl">
                        CredoCarbon maintains the highest standards of compliance across global carbon registries,
                        regulatory frameworks, and industry best practices to ensure trust and transparency in carbon markets.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="space-y-12 text-slate-300 leading-relaxed">

                        {/* Carbon Registry Compliance */}
                        <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-emerald-500/10 rounded-lg">
                                    <Globe className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-50">Global Carbon Registry Compliance</h2>
                            </div>
                            <p className="mb-6">
                                CredoCarbon is designed to seamlessly integrate with and comply with the standards and requirements
                                of all major international carbon credit registries:
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-4">
                                    <h3 className="text-lg font-semibold text-emerald-400 mb-2">Verra VCS Program</h3>
                                    <p className="text-sm text-slate-400">
                                        Full compliance with Verified Carbon Standard methodology requirements,
                                        validation and verification procedures, and credit issuance protocols.
                                    </p>
                                </div>

                                <div className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-4">
                                    <h3 className="text-lg font-semibold text-emerald-400 mb-2">Gold Standard</h3>
                                    <p className="text-sm text-slate-400">
                                        Adherence to Gold Standard for the Global Goals framework, ensuring projects
                                        deliver measurable climate and sustainable development impacts.
                                    </p>
                                </div>

                                <div className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-4">
                                    <h3 className="text-lg font-semibold text-emerald-400 mb-2">Global Carbon Council (GCC)</h3>
                                    <p className="text-sm text-slate-400">
                                        Compliance with GCC's rigorous standards for carbon offset projects in the
                                        Middle East, Africa, and Asia.
                                    </p>
                                </div>

                                <div className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-4">
                                    <h3 className="text-lg font-semibold text-emerald-400 mb-2">Plan Vivo</h3>
                                    <p className="text-sm text-slate-400">
                                        Support for Plan Vivo's community-focused approach to nature-based carbon
                                        projects and smallholder engagement.
                                    </p>
                                </div>

                                <div className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-4">
                                    <h3 className="text-lg font-semibold text-emerald-400 mb-2">American Carbon Registry (ACR)</h3>
                                    <p className="text-sm text-slate-400">
                                        Alignment with ACR's standards for carbon offset projects in North America
                                        and beyond.
                                    </p>
                                </div>

                                <div className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-4">
                                    <h3 className="text-lg font-semibold text-emerald-400 mb-2">Climate Action Reserve (CAR)</h3>
                                    <p className="text-sm text-slate-400">
                                        Compliance with CAR protocols for high-quality carbon offset projects in
                                        North America.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* MRV Standards */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-emerald-500/10 rounded-lg">
                                    <FileCheck className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-50">MRV (Monitoring, Reporting & Verification) Standards</h2>
                            </div>
                            <p className="mb-4">
                                Our platform ensures rigorous adherence to MRV best practices across all carbon credit projects:
                            </p>
                            <ul className="list-disc pl-6 space-y-3 mb-4">
                                <li>
                                    <strong className="text-slate-200">ISO 14064-2:</strong> Quantification and reporting of
                                    greenhouse gas emission reductions or removal enhancements at the project level
                                </li>
                                <li>
                                    <strong className="text-slate-200">ISO 14064-3:</strong> Validation and verification of
                                    greenhouse gas assertions
                                </li>
                                <li>
                                    <strong className="text-slate-200">Continuous Monitoring:</strong> Real-time data collection
                                    and automated reporting systems for enhanced transparency
                                </li>
                                <li>
                                    <strong className="text-slate-200">Third-Party Verification:</strong> Integration with
                                    accredited Validation and Verification Bodies (VVBs)
                                </li>
                                <li>
                                    <strong className="text-slate-200">Satellite & IoT Integration:</strong> Advanced remote
                                    sensing and IoT device data for accurate carbon accounting
                                </li>
                            </ul>
                        </div>

                        {/* Regulatory Compliance */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-emerald-500/10 rounded-lg">
                                    <Award className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-50">Regulatory & Market Compliance</h2>
                            </div>

                            <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">Article 6 of the Paris Agreement</h3>
                            <p className="mb-4">
                                CredoCarbon is designed to support compliance with Article 6 mechanisms for international
                                carbon market cooperation, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Article 6.2: Cooperative approaches with corresponding adjustments</li>
                                <li>Article 6.4: Sustainable Development Mechanism for global carbon crediting</li>
                                <li>Robust accounting to avoid double counting of emission reductions</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">EU Emissions Trading System (EU ETS)</h3>
                            <p className="mb-4">
                                Support for compliance with the world's largest carbon market, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Monitoring and reporting requirements under EU MRV Regulation</li>
                                <li>Integration with Union Registry for allowance tracking</li>
                                <li>Compliance with EU Taxonomy for sustainable activities</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">Voluntary Carbon Market Integrity (VCMI)</h3>
                            <p className="mb-4">
                                Alignment with VCMI's Code of Practice for high-integrity voluntary carbon market participation,
                                ensuring credible corporate climate claims.
                            </p>

                            <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">Integrity Council for the Voluntary Carbon Market (ICVCM)</h3>
                            <p className="mb-4">
                                Support for Core Carbon Principles (CCPs) to ensure carbon credits represent real, additional,
                                quantified, permanent, and independently verified emission reductions or removals.
                            </p>
                        </div>

                        {/* Data Security & Privacy */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-emerald-500/10 rounded-lg">
                                    <Lock className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-50">Data Security & Privacy Compliance</h2>
                            </div>

                            <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">SOC 2 Type II</h3>
                            <p className="mb-4">
                                We maintain SOC 2 Type II compliance, demonstrating our commitment to security, availability,
                                processing integrity, confidentiality, and privacy. Our controls are audited annually by
                                independent third-party auditors.
                            </p>

                            <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">ISO 27001</h3>
                            <p className="mb-4">
                                Our Information Security Management System (ISMS) is certified to ISO 27001 standards,
                                ensuring systematic management of sensitive carbon project data and continuous improvement
                                of security practices.
                            </p>

                            <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">GDPR & CCPA Compliance</h3>
                            <p className="mb-4">
                                Full compliance with global privacy regulations including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>EU General Data Protection Regulation (GDPR)</li>
                                <li>California Consumer Privacy Act (CCPA)</li>
                                <li>Data subject rights and privacy by design principles</li>
                                <li>Transparent data processing and consent management</li>
                            </ul>
                        </div>


                        {/* Anti-Fraud & Double Counting Prevention */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-50 mb-4">Anti-Fraud & Double Counting Prevention</h2>
                            <p className="mb-4">
                                CredoCarbon implements robust mechanisms to prevent fraud and ensure carbon credit integrity:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Unique serial number tracking for every carbon credit</li>
                                <li>Cross-registry verification to prevent double issuance</li>
                                <li>Automated retirement and cancellation protocols</li>
                                <li>Real-time monitoring for suspicious activities</li>
                                <li>Integration with registry databases for credit status verification</li>
                            </ul>
                        </div>

                        {/* Continuous Improvement */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-50 mb-4">Continuous Compliance Monitoring</h2>
                            <p className="mb-4">
                                We maintain a proactive approach to compliance:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Regular internal and external audits</li>
                                <li>Continuous monitoring of regulatory changes across jurisdictions</li>
                                <li>Quarterly compliance reviews and updates</li>
                                <li>Employee training on carbon market regulations and best practices</li>
                                <li>Engagement with industry working groups and standard-setting bodies</li>
                            </ul>
                        </div>

                        {/* Contact Section */}
                        <div className="bg-gradient-to-br from-emerald-500/10 to-slate-800/30 border border-emerald-500/20 rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-slate-50 mb-4">Contact Our Compliance Team</h2>
                            <p className="mb-6">
                                For questions about our compliance program, to request audit reports, or to report security concerns:
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="text-emerald-400 font-semibold min-w-[140px]">General Compliance:</div>
                                    <a href="mailto:info@credocarbon.com" className="text-slate-300 hover:text-emerald-400 transition">
                                        info@credocarbon.com
                                    </a>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="text-emerald-400 font-semibold min-w-[140px]">Security Issues:</div>
                                    <a href="mailto:admin@credocarbon.com" className="text-slate-300 hover:text-emerald-400 transition">
                                        admin@credocarbon.com
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
