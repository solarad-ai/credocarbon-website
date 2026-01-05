import { FileText } from "lucide-react";

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 md:py-24 overflow-hidden border-b border-slate-800">
                <div className="relative mx-auto max-w-4xl px-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 mb-6">
                        <FileText className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                            Legal
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
                        Terms of Service
                    </h1>

                    <p className="text-lg text-slate-400 max-w-3xl">
                        These Terms of Service govern your use of the CredoCarbon platform for carbon credit registration, validation, verification, issuance, and trading.
                    </p>
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
                                    By accessing and using the CredoCarbon platform ("Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms of Service, please do not use our Service. These Terms apply to all users, including project developers, Validation and Verification Bodies (VVBs), carbon credit buyers, and API developers.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">2. Description of Service</h2>
                                <p className="mb-4">
                                    CredoCarbon provides a unified platform for carbon credit lifecycle management across global registries. Our Service includes:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Carbon project registration and management tools</li>
                                    <li>Monitoring, Reporting, and Verification (MRV) workflows and automation</li>
                                    <li>Multi-registry integration (Verra, Gold Standard, GCC, Plan Vivo, ACR, CAR)</li>
                                    <li>Project methodology selection and baseline calculation tools</li>
                                    <li>VVB collaboration and verification management</li>
                                    <li>Carbon credit issuance, transfer, and retirement tracking</li>
                                    <li>API access for programmatic integration and data exchange</li>
                                    <li>Analytics, reporting dashboards, and carbon credit portfolio management</li>
                                    <li>Marketplace features for carbon credit trading (where applicable)</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">3. User Accounts and Roles</h2>
                                <p className="mb-4">
                                    To access certain features of the Service, you must register for an account. Different user roles have different access levels:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li><strong>Project Developers:</strong> Create and manage carbon projects, submit to registries, track credit issuance</li>
                                    <li><strong>VVBs:</strong> Access project data for validation and verification, submit reports</li>
                                    <li><strong>Buyers:</strong> Browse, purchase, and retire carbon credits</li>
                                    <li><strong>Developers:</strong> Access API for integration and automation</li>
                                </ul>
                                <p className="mb-4 mt-4">
                                    You agree to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Provide accurate, current, and complete information during registration</li>
                                    <li>Maintain the security of your password and account credentials</li>
                                    <li>Notify us immediately of any unauthorized use of your account</li>
                                    <li>Accept responsibility for all activities that occur under your account</li>
                                    <li>Ensure you have the authority to represent your organization</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">4. Carbon Project Data and Accuracy</h2>
                                <p className="mb-4">
                                    When using our Service to register and manage carbon projects, you represent and warrant that:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>All project data, baseline information, and emission reduction calculations are accurate and truthful</li>
                                    <li>You have the legal right to develop and register the carbon project</li>
                                    <li>The project complies with all applicable registry standards and methodologies</li>
                                    <li>You will not submit false or misleading information to registries</li>
                                    <li>You will maintain proper documentation and evidence for all project claims</li>
                                    <li>You will not engage in double counting or fraudulent carbon credit activities</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">5. Acceptable Use</h2>
                                <p className="mb-4">
                                    You agree not to use the Service to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Violate any applicable laws, regulations, or carbon market standards</li>
                                    <li>Submit fraudulent or misleading carbon project information</li>
                                    <li>Engage in double counting of carbon credits across registries</li>
                                    <li>Infringe upon the intellectual property rights of others</li>
                                    <li>Transmit any harmful, malicious code, or viruses</li>
                                    <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                                    <li>Interfere with or disrupt the Service, servers, or networks</li>
                                    <li>Use the Service for any fraudulent, illegal, or unethical purpose</li>
                                    <li>Scrape, harvest, or collect user data without authorization</li>
                                    <li>Reverse engineer or attempt to extract source code from our platform</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">6. Registry Integration and Submissions</h2>
                                <p className="mb-4">
                                    Our Service facilitates submissions to third-party carbon registries. You acknowledge that:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Final approval and credit issuance decisions are made by the respective registries, not CredoCarbon</li>
                                    <li>Each registry has its own terms, standards, and requirements that you must comply with</li>
                                    <li>CredoCarbon is not responsible for registry decisions, delays, or rejections</li>
                                    <li>Registry fees and requirements are separate from CredoCarbon service fees</li>
                                    <li>You are responsible for maintaining compliance with registry standards throughout the project lifecycle</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">7. Intellectual Property</h2>
                                <p className="mb-4">
                                    The Service and its original content, features, and functionality are owned by CredoCarbon and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You retain ownership of your carbon project data, but grant us a license to use it to provide the Service.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">8. Data and Privacy</h2>
                                <p className="mb-4">
                                    Your use of the Service is also governed by our <a href="/privacy" className="text-emerald-400 hover:text-emerald-300 underline">Privacy Policy</a>. We collect, use, and protect your data as described in our Privacy Policy, which is incorporated into these Terms by reference. You acknowledge that certain carbon project data may be shared with registries, VVBs, and made publicly available for transparency purposes.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">9. Payment Terms</h2>
                                <p className="mb-4">
                                    Certain aspects of the Service may be provided for a fee, including:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Subscription plans for platform access</li>
                                    <li>Project registration and management fees</li>
                                    <li>API usage fees based on call volume</li>
                                    <li>Premium features and advanced analytics</li>
                                    <li>Transaction fees for carbon credit trading (where applicable)</li>
                                </ul>
                                <p className="mb-4 mt-4">
                                    You agree to pay all fees associated with your selected plan. All fees are non-refundable unless otherwise stated. We reserve the right to change our pricing with 30 days' notice. Registry submission fees are separate and paid directly to registries.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">10. API Usage and Developer Terms</h2>
                                <p className="mb-4">
                                    If you use our API, you additionally agree to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Comply with API rate limits and usage guidelines</li>
                                    <li>Properly secure and protect your API keys</li>
                                    <li>Not use the API to create competing services</li>
                                    <li>Attribute CredoCarbon when displaying data from our API</li>
                                    <li>Comply with all applicable carbon market regulations when using API data</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">11. Warranties and Disclaimers</h2>
                                <p className="mb-4">
                                    The Service is provided "as is" and "as available" without warranties of any kind. We do not guarantee:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>That carbon projects will be approved by registries</li>
                                    <li>Specific timelines for registry approvals or credit issuance</li>
                                    <li>The accuracy of third-party data or registry information</li>
                                    <li>Uninterrupted or error-free operation of the Service</li>
                                    <li>That the Service will meet all your specific requirements</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">12. Limitation of Liability</h2>
                                <p className="mb-4">
                                    In no event shall CredoCarbon, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Loss of profits, revenue, or carbon credits</li>
                                    <li>Loss of data or project information</li>
                                    <li>Registry rejection or delays</li>
                                    <li>Market value fluctuations of carbon credits</li>
                                    <li>Business interruption or opportunity costs</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">13. Indemnification</h2>
                                <p className="mb-4">
                                    You agree to indemnify and hold harmless CredoCarbon from any claims, damages, losses, or expenses arising from:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Your violation of these Terms</li>
                                    <li>Your violation of any carbon market regulations or registry standards</li>
                                    <li>Fraudulent or inaccurate carbon project data you submit</li>
                                    <li>Your infringement of any third-party rights</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">14. Termination</h2>
                                <p className="mb-4">
                                    We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including breach of these Terms, fraudulent activity, or violation of carbon market regulations. Upon termination:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Your right to use the Service will immediately cease</li>
                                    <li>You may request an export of your project data within 30 days</li>
                                    <li>We may retain certain data as required by registries or legal obligations</li>
                                    <li>Outstanding fees remain due and payable</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">15. Governing Law</h2>
                                <p className="mb-4">
                                    These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions. Any disputes shall be resolved through binding arbitration.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">16. Changes to Terms</h2>
                                <p className="mb-4">
                                    We reserve the right to modify or replace these Terms at any time. We will provide notice of any material changes by posting the new Terms on this page and, where appropriate, sending you an email notification. Your continued use of the Service after such changes constitutes acceptance of the new Terms.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-emerald-500/10 to-slate-800/30 border border-emerald-500/20 rounded-2xl p-8">
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">17. Contact Information</h2>
                                <p className="mb-6">
                                    If you have any questions about these Terms of Service, please contact us at:
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
