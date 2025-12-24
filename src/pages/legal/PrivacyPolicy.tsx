import { Shield, Calendar } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 md:py-24 overflow-hidden border-b border-slate-800">
                <div className="relative mx-auto max-w-4xl px-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-600/30 bg-slate-700/10 px-4 py-2 mb-6">
                        <Shield className="w-4 h-4 text-slate-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            Legal
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
                        Privacy Policy
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
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">1. Introduction</h2>
                                <p className="mb-4">
                                    CredoCarbon ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">2. Information We Collect</h2>
                                <p className="mb-4">
                                    We collect information that you provide directly to us, including:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li><strong>Account Information:</strong> Name, email address, company name, phone number</li>
                                    <li><strong>Project Data:</strong> Carbon credit project details, monitoring data, verification reports</li>
                                    <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely by third-party providers)</li>
                                    <li><strong>Usage Data:</strong> Log data, device information, IP address, browser type</li>
                                    <li><strong>Communications:</strong> Messages, support tickets, feedback</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">3. How We Use Your Information</h2>
                                <p className="mb-4">
                                    We use the collected information for various purposes:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>To provide, maintain, and improve our services</li>
                                    <li>To process transactions and send related information</li>
                                    <li>To send technical notices, updates, and security alerts</li>
                                    <li>To respond to your comments, questions, and customer service requests</li>
                                    <li>To monitor and analyze trends, usage, and activities</li>
                                    <li>To detect, prevent, and address technical issues and fraudulent activity</li>
                                    <li>To comply with legal obligations</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">4. Data Sharing and Disclosure</h2>
                                <p className="mb-4">
                                    We may share your information in the following circumstances:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li><strong>With Your Consent:</strong> When you explicitly agree to share information</li>
                                    <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf</li>
                                    <li><strong>Registry Partners:</strong> Carbon registries for project submission and verification</li>
                                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                                    <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">5. Data Security</h2>
                                <p className="mb-4">
                                    We implement appropriate technical and organizational measures to protect your data:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>AES-256 encryption for data at rest</li>
                                    <li>TLS 1.3 encryption for data in transit</li>
                                    <li>Regular security audits and penetration testing</li>
                                    <li>SOC 2 Type II compliance</li>
                                    <li>Role-based access control</li>
                                    <li>Multi-factor authentication</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">6. Data Retention</h2>
                                <p className="mb-4">
                                    We retain your information for as long as necessary to provide our services and comply with legal obligations. Project data may be retained longer due to registry requirements and audit trails.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">7. Your Rights</h2>
                                <p className="mb-4">
                                    Depending on your location, you may have the following rights:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Access and receive a copy of your personal data</li>
                                    <li>Correct inaccurate or incomplete data</li>
                                    <li>Request deletion of your data</li>
                                    <li>Object to or restrict processing of your data</li>
                                    <li>Data portability</li>
                                    <li>Withdraw consent at any time</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">8. Cookies and Tracking</h2>
                                <p className="mb-4">
                                    We use cookies and similar tracking technologies to collect and track information about your use of our Service. You can control cookies through your browser settings. See our Cookie Policy for more details.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">9. International Data Transfers</h2>
                                <p className="mb-4">
                                    Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">10. Children's Privacy</h2>
                                <p className="mb-4">
                                    Our Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">11. Changes to This Policy</h2>
                                <p className="mb-4">
                                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">12. Contact Us</h2>
                                <p className="mb-4">
                                    If you have questions about this Privacy Policy, please contact us at:
                                </p>
                                <p className="mb-2">Email: privacy@credocarbon.com</p>
                                <p className="mb-2">Data Protection Officer: dpo@credocarbon.com</p>
                                <p>Address: 226 Haight St., San Francisco, CA 94102</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
