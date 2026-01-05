import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 md:py-24 overflow-hidden border-b border-slate-800">
                <div className="relative mx-auto max-w-4xl px-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 mb-6">
                        <Shield className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                            Legal
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
                        Privacy Policy
                    </h1>

                    <p className="text-lg text-slate-400 max-w-3xl">
                        CredoCarbon is committed to protecting your privacy and ensuring the security of your carbon project data. This Privacy Policy explains how we collect, use, and safeguard your information.
                    </p>
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
                                    CredoCarbon ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our carbon credit platform and services for project registration, validation, verification, issuance, and trading.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">2. Information We Collect</h2>
                                <p className="mb-4">
                                    We collect information that you provide directly to us, including:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li><strong>Account Information:</strong> Name, email address, organization name, role, phone number, and professional credentials</li>
                                    <li><strong>Carbon Project Data:</strong> Project details, methodology selection, baseline data, monitoring reports, emission reduction calculations, geographic information, and project documentation</li>
                                    <li><strong>Verification Data:</strong> VVB reports, validation documents, verification statements, and audit trails</li>
                                    <li><strong>Transaction Information:</strong> Carbon credit issuance records, transfer history, retirement certificates, and trading activities</li>
                                    <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely by third-party providers)</li>
                                    <li><strong>Usage Data:</strong> Log data, device information, IP address, browser type, API usage patterns, and platform interactions</li>
                                    <li><strong>Communications:</strong> Messages, support tickets, feedback, and correspondence with our team</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">3. How We Use Your Information</h2>
                                <p className="mb-4">
                                    We use the collected information for various purposes specific to carbon credit operations:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>To provide, maintain, and improve our carbon credit platform and services</li>
                                    <li>To facilitate project registration, validation, verification, and issuance processes</li>
                                    <li>To process carbon credit transactions, transfers, and retirements</li>
                                    <li>To integrate with carbon registries (Verra, Gold Standard, GCC, Plan Vivo, etc.)</li>
                                    <li>To generate MRV (Monitoring, Reporting & Verification) reports and documentation</li>
                                    <li>To send technical notices, project updates, verification status alerts, and security notifications</li>
                                    <li>To respond to your comments, questions, and customer service requests</li>
                                    <li>To monitor and analyze platform usage, trends, and carbon market activities</li>
                                    <li>To detect, prevent, and address technical issues, fraudulent activity, and double counting</li>
                                    <li>To comply with carbon registry requirements and legal obligations</li>
                                    <li>To maintain audit trails for carbon credit integrity and transparency</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">4. Data Sharing and Disclosure</h2>
                                <p className="mb-4">
                                    We may share your information in the following circumstances:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li><strong>With Your Consent:</strong> When you explicitly agree to share information</li>
                                    <li><strong>Carbon Registries:</strong> Project data shared with Verra, Gold Standard, GCC, Plan Vivo, and other registries for project submission, validation, verification, and credit issuance</li>
                                    <li><strong>Validation and Verification Bodies (VVBs):</strong> Project information shared with accredited VVBs for independent verification</li>
                                    <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (cloud hosting, analytics, payment processing)</li>
                                    <li><strong>Public Carbon Credit Information:</strong> Certain carbon credit data (project details, issuance records, retirement information) may be publicly accessible for transparency and market integrity</li>
                                    <li><strong>Legal Requirements:</strong> When required by law, regulation, or to protect our rights and comply with carbon market regulations</li>
                                    <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">5. Data Security</h2>
                                <p className="mb-4">
                                    We implement robust technical and organizational measures to protect your carbon project data:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>AES-256 encryption for data at rest</li>
                                    <li>TLS 1.3 encryption for data in transit</li>
                                    <li>Regular security audits and penetration testing</li>
                                    <li>SOC 2 Type II compliance</li>
                                    <li>ISO 27001 certified Information Security Management System</li>
                                    <li>Role-based access control (RBAC) for project data</li>
                                    <li>Multi-factor authentication (MFA) for all user accounts</li>
                                    <li>Immutable audit logs for carbon credit transactions</li>
                                    <li>Geo-redundant backups and disaster recovery procedures</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">6. Data Retention</h2>
                                <p className="mb-4">
                                    We retain your information for as long as necessary to provide our services and comply with legal obligations. Carbon project data and credit transaction records may be retained for extended periods due to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Carbon registry requirements for audit trails and verification history</li>
                                    <li>Regulatory compliance and carbon market integrity standards</li>
                                    <li>Long-term project monitoring and permanence requirements</li>
                                    <li>Legal and contractual obligations</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">7. Your Rights</h2>
                                <p className="mb-4">
                                    Depending on your location, you may have the following rights regarding your personal data:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Access and receive a copy of your personal data</li>
                                    <li>Correct inaccurate or incomplete data</li>
                                    <li>Request deletion of your data (subject to carbon registry and legal retention requirements)</li>
                                    <li>Object to or restrict processing of your data</li>
                                    <li>Data portability for your carbon project information</li>
                                    <li>Withdraw consent at any time (where processing is based on consent)</li>
                                    <li>Lodge a complaint with a supervisory authority</li>
                                </ul>
                                <p className="mb-4 mt-4">
                                    <strong>Note:</strong> Some carbon project data may need to be retained for registry compliance and cannot be deleted while projects are active or credits are outstanding.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">8. Cookies and Tracking</h2>
                                <p className="mb-4">
                                    We use cookies and similar tracking technologies to collect and track information about your use of our platform. You can control cookies through your browser settings. See our <a href="/cookies" className="text-emerald-400 hover:text-emerald-300 underline">Cookie Policy</a> for more details.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">9. International Data Transfers</h2>
                                <p className="mb-4">
                                    Your information may be transferred to and processed in countries other than your country of residence to facilitate global carbon market operations. We ensure appropriate safeguards are in place for such transfers, including:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Standard contractual clauses approved by regulatory authorities</li>
                                    <li>Adequacy decisions for data transfers</li>
                                    <li>Compliance with GDPR, CCPA, and other applicable privacy regulations</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">10. Third-Party Services</h2>
                                <p className="mb-4">
                                    Our platform integrates with third-party services including carbon registries, payment processors, and analytics providers. These third parties have their own privacy policies governing their use of your information.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">11. Children's Privacy</h2>
                                <p className="mb-4">
                                    Our Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">12. Changes to This Policy</h2>
                                <p className="mb-4">
                                    We may update this Privacy Policy from time to time to reflect changes in technology, legislation, carbon market regulations, or our business operations. We will notify you of any material changes by posting the new policy on this page and, where appropriate, sending you an email notification.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-emerald-500/10 to-slate-800/30 border border-emerald-500/20 rounded-2xl p-8">
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">13. Contact Us</h2>
                                <p className="mb-6">
                                    If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us at:
                                </p>
                                <div className="space-y-3">
                                    <a href="mailto:info@credocarbon.com" className="text-emerald-400 hover:text-emerald-300 transition text-lg font-medium">
                                        info@credocarbon.com
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
