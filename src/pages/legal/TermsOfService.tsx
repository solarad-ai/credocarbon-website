import { FileText, Calendar } from "lucide-react";

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 md:py-24 overflow-hidden border-b border-slate-800">
                <div className="relative mx-auto max-w-4xl px-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-600/30 bg-slate-700/10 px-4 py-2 mb-6">
                        <FileText className="w-4 h-4 text-slate-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            Legal
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
                        Terms of Service
                    </h1>

                    <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Calendar className="w-4 h-4" />
                        <span>Last updated: December 1, 2024</span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="prose prose-invert prose-slate max-w-none">
                        <div className="space-y-8 text-slate-300 leading-relaxed">

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">1. Acceptance of Terms</h2>
                                <p className="mb-4">
                                    By accessing and using the CredoCarbon platform ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use our Service.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">2. Description of Service</h2>
                                <p className="mb-4">
                                    CredoCarbon provides a unified platform for carbon credit registration, validation, issuance, and trading across global registries. Our Service includes:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Project registration and management tools</li>
                                    <li>Monitoring, Reporting, and Verification (MRV) workflows</li>
                                    <li>Multi-registry integration and submission capabilities</li>
                                    <li>API access for programmatic integration</li>
                                    <li>Analytics and reporting dashboards</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">3. User Accounts</h2>
                                <p className="mb-4">
                                    To access certain features of the Service, you must register for an account. You agree to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Provide accurate, current, and complete information during registration</li>
                                    <li>Maintain the security of your password and account</li>
                                    <li>Notify us immediately of any unauthorized use of your account</li>
                                    <li>Accept responsibility for all activities that occur under your account</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">4. Acceptable Use</h2>
                                <p className="mb-4">
                                    You agree not to use the Service to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Violate any applicable laws or regulations</li>
                                    <li>Infringe upon the rights of others</li>
                                    <li>Transmit any harmful or malicious code</li>
                                    <li>Attempt to gain unauthorized access to our systems</li>
                                    <li>Interfere with or disrupt the Service or servers</li>
                                    <li>Use the Service for any fraudulent or illegal purpose</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">5. Intellectual Property</h2>
                                <p className="mb-4">
                                    The Service and its original content, features, and functionality are owned by CredoCarbon and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">6. Data and Privacy</h2>
                                <p className="mb-4">
                                    Your use of the Service is also governed by our Privacy Policy. We collect, use, and protect your data as described in our Privacy Policy, which is incorporated into these Terms by reference.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">7. Payment Terms</h2>
                                <p className="mb-4">
                                    Certain aspects of the Service may be provided for a fee. You agree to pay all fees associated with your selected plan. All fees are non-refundable unless otherwise stated. We reserve the right to change our pricing with 30 days notice.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">8. Termination</h2>
                                <p className="mb-4">
                                    We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the Service will immediately cease.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">9. Limitation of Liability</h2>
                                <p className="mb-4">
                                    In no event shall CredoCarbon, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or other intangible losses.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">10. Changes to Terms</h2>
                                <p className="mb-4">
                                    We reserve the right to modify or replace these Terms at any time. We will provide notice of any material changes by posting the new Terms on this page and updating the "Last updated" date.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">11. Contact Information</h2>
                                <p className="mb-4">
                                    If you have any questions about these Terms, please contact us at:
                                </p>
                                <p className="mb-2">Email: legal@credocarbon.com</p>
                                <p>Address: 226 Haight St., San Francisco, CA 94102</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
