import { CheckCircle, Calendar } from "lucide-react";

export default function Compliance() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 md:py-24 overflow-hidden border-b border-slate-800">
                <div className="relative mx-auto max-w-4xl px-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-600/30 bg-slate-700/10 px-4 py-2 mb-6">
                        <CheckCircle className="w-4 h-4 text-slate-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            Legal
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
                        Compliance & Certifications
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
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">Our Commitment to Compliance</h2>
                                <p className="mb-4">
                                    CredoCarbon is committed to maintaining the highest standards of security, privacy, and regulatory compliance. We continuously invest in certifications and audits to ensure our platform meets global standards.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">Security Certifications</h2>

                                <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">SOC 2 Type II</h3>
                                <p className="mb-4">
                                    We maintain SOC 2 Type II compliance, demonstrating our commitment to security, availability, processing integrity, confidentiality, and privacy. Our controls are audited annually by independent third-party auditors.
                                </p>

                                <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">ISO 27001</h3>
                                <p className="mb-4">
                                    Our Information Security Management System (ISMS) is certified to ISO 27001 standards, ensuring systematic management of sensitive information and continuous improvement of security practices.
                                </p>

                                <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">PCI DSS</h3>
                                <p className="mb-4">
                                    We comply with Payment Card Industry Data Security Standards (PCI DSS) for all payment processing activities, ensuring secure handling of payment card information.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">Privacy Regulations</h2>

                                <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">GDPR Compliance</h3>
                                <p className="mb-4">
                                    We fully comply with the European Union's General Data Protection Regulation (GDPR), including:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Lawful basis for data processing</li>
                                    <li>Data subject rights (access, rectification, erasure, portability)</li>
                                    <li>Data Protection Impact Assessments (DPIAs)</li>
                                    <li>Appointment of a Data Protection Officer (DPO)</li>
                                    <li>Breach notification procedures</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">CCPA Compliance</h3>
                                <p className="mb-4">
                                    We comply with the California Consumer Privacy Act (CCPA), providing California residents with:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Right to know what personal information is collected</li>
                                    <li>Right to delete personal information</li>
                                    <li>Right to opt-out of sale of personal information</li>
                                    <li>Right to non-discrimination for exercising CCPA rights</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">Industry Standards</h2>

                                <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">Carbon Registry Compliance</h3>
                                <p className="mb-4">
                                    Our platform is designed to comply with requirements from major carbon registries:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Verra VCS Program</li>
                                    <li>Gold Standard for the Global Goals</li>
                                    <li>Global Carbon Council (GCC)</li>
                                    <li>Plan Vivo</li>
                                    <li>American Carbon Registry (ACR)</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">Blockchain Standards</h3>
                                <p className="mb-4">
                                    We adhere to industry best practices for blockchain implementation and smart contract security, including regular security audits and formal verification processes.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">Data Security Measures</h2>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li><strong>Encryption:</strong> AES-256 encryption at rest, TLS 1.3 in transit</li>
                                    <li><strong>Access Control:</strong> Role-based access control (RBAC) and multi-factor authentication (MFA)</li>
                                    <li><strong>Network Security:</strong> Firewalls, intrusion detection/prevention systems, DDoS protection</li>
                                    <li><strong>Monitoring:</strong> 24/7 security monitoring and incident response</li>
                                    <li><strong>Backup & Recovery:</strong> Automated backups with geo-redundancy</li>
                                    <li><strong>Penetration Testing:</strong> Regular third-party security assessments</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">Employee Training</h2>
                                <p className="mb-4">
                                    All CredoCarbon employees undergo:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Security awareness training upon hire and annually</li>
                                    <li>Privacy and data protection training</li>
                                    <li>Role-specific compliance training</li>
                                    <li>Incident response training</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">Vendor Management</h2>
                                <p className="mb-4">
                                    We carefully vet all third-party vendors and service providers to ensure they meet our security and compliance standards. All vendors undergo:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Security questionnaires and assessments</li>
                                    <li>Contractual data protection obligations</li>
                                    <li>Regular compliance reviews</li>
                                    <li>Incident notification requirements</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">Incident Response</h2>
                                <p className="mb-4">
                                    We maintain a comprehensive incident response plan that includes:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>24/7 security monitoring and alerting</li>
                                    <li>Defined escalation procedures</li>
                                    <li>Breach notification protocols</li>
                                    <li>Post-incident analysis and remediation</li>
                                    <li>Regular tabletop exercises</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">Audit Reports</h2>
                                <p className="mb-4">
                                    Customers can request copies of our compliance reports and certifications by contacting our compliance team. Available reports include:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>SOC 2 Type II Report</li>
                                    <li>ISO 27001 Certificate</li>
                                    <li>Penetration Test Reports</li>
                                    <li>Security Whitepaper</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">Contact Our Compliance Team</h2>
                                <p className="mb-4">
                                    For questions about our compliance program or to request audit reports:
                                </p>
                                <p className="mb-2">Email: compliance@credocarbon.com</p>
                                <p className="mb-2">Security Issues: security@credocarbon.com</p>
                                <p>Address: 226 Haight St., San Francisco, CA 94102</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
