import { Cookie, Calendar } from "lucide-react";

export default function CookiePolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 md:py-24 overflow-hidden border-b border-slate-800">
                <div className="relative mx-auto max-w-4xl px-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-600/30 bg-slate-700/10 px-4 py-2 mb-6">
                        <Cookie className="w-4 h-4 text-slate-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            Legal
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
                        Cookie Policy
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
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">1. What Are Cookies?</h2>
                                <p className="mb-4">
                                    Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our Service.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">2. Types of Cookies We Use</h2>

                                <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">Essential Cookies</h3>
                                <p className="mb-4">
                                    These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Authentication and session management</li>
                                    <li>Security and fraud prevention</li>
                                    <li>Load balancing</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">Functional Cookies</h3>
                                <p className="mb-4">
                                    These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Language preferences</li>
                                    <li>User interface customization</li>
                                    <li>Dashboard layout preferences</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">Analytics Cookies</h3>
                                <p className="mb-4">
                                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Page views and navigation patterns</li>
                                    <li>Feature usage statistics</li>
                                    <li>Performance metrics</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6">Marketing Cookies</h3>
                                <p className="mb-4">
                                    These cookies track your online activity to help us deliver more relevant advertising and measure the effectiveness of our campaigns.
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Advertising targeting</li>
                                    <li>Campaign performance tracking</li>
                                    <li>Retargeting</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">3. Third-Party Cookies</h2>
                                <p className="mb-4">
                                    We use services from third-party providers that may set their own cookies:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li><strong>Google Analytics:</strong> Website analytics and performance monitoring</li>
                                    <li><strong>Stripe:</strong> Payment processing</li>
                                    <li><strong>Intercom:</strong> Customer support and messaging</li>
                                    <li><strong>LinkedIn:</strong> Social media integration and advertising</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">4. Cookie Duration</h2>
                                <p className="mb-4">
                                    Cookies may be either "session" or "persistent" cookies:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
                                    <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">5. Managing Cookies</h2>
                                <p className="mb-4">
                                    You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences through:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li><strong>Cookie Consent Banner:</strong> Manage preferences when you first visit our site</li>
                                    <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies</li>
                                    <li><strong>Opt-Out Tools:</strong> Use industry opt-out tools for advertising cookies</li>
                                </ul>
                                <p className="mb-4 mt-4">
                                    Please note that blocking or deleting cookies may impact your experience and some features may not function properly.
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
                                    Some browsers include a "Do Not Track" (DNT) feature. Our Service does not currently respond to DNT signals, but we are committed to respecting your privacy preferences.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">8. Updates to This Policy</h2>
                                <p className="mb-4">
                                    We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business operations. We will notify you of any material changes.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-50 mb-4">9. Contact Us</h2>
                                <p className="mb-4">
                                    If you have questions about our use of cookies, please contact us at:
                                </p>
                                <p className="mb-2">Email: privacy@credocarbon.com</p>
                                <p>Address: 226 Haight St., San Francisco, CA 94102</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
