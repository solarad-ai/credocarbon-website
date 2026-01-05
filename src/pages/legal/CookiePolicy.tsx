import { Cookie } from "lucide-react";

export default function CookiePolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 md:py-24 overflow-hidden border-b border-slate-800">
                <div className="relative mx-auto max-w-4xl px-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 mb-6">
                        <Cookie className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                            Legal
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
                        Cookie Policy
                    </h1>

                    <p className="text-lg text-slate-400 max-w-3xl">
                        This Cookie Policy explains how CredoCarbon uses cookies and similar technologies to enhance your experience on our carbon credit platform.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="prose prose-invert prose-slate max-w-none">
                        <div className="space-y-8 text-slate-300 leading-relaxed">

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">1. What Are Cookies?</h2>
                                <p className="mb-4">
                                    Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, maintaining your session security, and understanding how you interact with our carbon credit platform.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">2. Types of Cookies We Use</h2>

                                <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">Essential Cookies</h3>
                                <p className="mb-4">
                                    These cookies are necessary for the platform to function properly. They enable core functionality such as secure access to your carbon project dashboard, transaction processing, and data integrity.
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>User authentication and session management</li>
                                    <li>Security and fraud prevention for carbon credit transactions</li>
                                    <li>Load balancing and platform stability</li>
                                    <li>API access token management for developers</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">Functional Cookies</h3>
                                <p className="mb-4">
                                    These cookies enable enhanced functionality and personalization specific to carbon credit management.
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Language and regional preferences</li>
                                    <li>Dashboard layout and view preferences</li>
                                    <li>Project type and registry filters</li>
                                    <li>Notification preferences for project updates and verifications</li>
                                    <li>Carbon credit portfolio display settings</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">Analytics Cookies</h3>
                                <p className="mb-4">
                                    These cookies help us understand how users interact with our platform by collecting and reporting information anonymously. This helps us improve the carbon credit registration, validation, and trading experience.
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Page views and navigation patterns within the platform</li>
                                    <li>Feature usage statistics (e.g., MRV tools, project wizard, API usage)</li>
                                    <li>Performance metrics and load times</li>
                                    <li>User journey analysis for platform optimization</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">Marketing Cookies</h3>
                                <p className="mb-4">
                                    These cookies track your online activity to help us deliver more relevant information about carbon credit opportunities and measure the effectiveness of our outreach campaigns.
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Targeted content about carbon credit methodologies and registries</li>
                                    <li>Campaign performance tracking for carbon market education</li>
                                    <li>Retargeting for platform features and updates</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">3. Third-Party Cookies</h2>
                                <p className="mb-4">
                                    We use services from trusted third-party providers that may set their own cookies to enhance platform functionality:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li><strong>Google Analytics:</strong> Website analytics and performance monitoring to improve user experience</li>
                                    <li><strong>Payment Processors:</strong> Secure payment processing for carbon credit transactions</li>
                                    <li><strong>Support Services:</strong> Customer support and messaging for technical assistance</li>
                                    <li><strong>Social Media:</strong> Social media integration for sharing carbon project updates</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">4. Cookie Duration</h2>
                                <p className="mb-4">
                                    Cookies may be either "session" or "persistent" cookies:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser. These are essential for maintaining your login session and transaction security.</li>
                                    <li><strong>Persistent Cookies:</strong> Remain on your device for a set period (typically 30 days to 2 years) or until you delete them. These remember your preferences and settings across sessions.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">5. Managing Cookies</h2>
                                <p className="mb-4">
                                    You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences through:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li><strong>Cookie Consent Banner:</strong> Manage preferences when you first visit our platform</li>
                                    <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies through their settings</li>
                                    <li><strong>Opt-Out Tools:</strong> Use industry opt-out tools for advertising cookies</li>
                                    <li><strong>Account Settings:</strong> Manage certain cookie preferences within your CredoCarbon account dashboard</li>
                                </ul>
                                <p className="mb-4 mt-4">
                                    <strong>Important:</strong> Blocking or deleting essential cookies may impact your ability to access certain features of the platform, including project management, carbon credit transactions, and API integrations.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">6. Browser-Specific Instructions</h2>
                                <p className="mb-4">
                                    To manage cookies in your browser:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                                    <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                                    <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                                    <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">7. Do Not Track</h2>
                                <p className="mb-4">
                                    Some browsers include a "Do Not Track" (DNT) feature. While our platform does not currently respond to DNT signals, we are committed to respecting your privacy preferences and complying with applicable data protection regulations.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">8. Cookies and Carbon Credit Data</h2>
                                <p className="mb-4">
                                    We want to assure you that cookies do not store sensitive carbon project data, financial information, or personally identifiable information beyond what is necessary for authentication and session management. All carbon credit transaction data and project information are stored securely in our encrypted databases, separate from cookie storage.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">9. Updates to This Policy</h2>
                                <p className="mb-4">
                                    We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business operations. We will notify you of any material changes through our platform or via email.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-emerald-500/10 to-slate-800/30 border border-emerald-500/20 rounded-2xl p-8">
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">10. Contact Us</h2>
                                <p className="mb-6">
                                    If you have questions about our use of cookies or privacy practices, please contact us at:
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
