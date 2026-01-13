import { useState, useEffect, useCallback } from "react";
import { Sparkles, X, ArrowRight, Zap, Shield, Clock } from "lucide-react";

export default function ExplorePopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);

    // Check if the popup should show based on localStorage
    const shouldShowPopup = useCallback(() => {
        const dismissed = localStorage.getItem("explorePopupDismissed");
        if (!dismissed) return true;

        // Check if 24 hours have passed since dismissal
        const dismissedTime = parseInt(dismissed, 10);
        const twentyFourHours = 24 * 60 * 60 * 1000;
        return Date.now() - dismissedTime > twentyFourHours;
    }, []);

    useEffect(() => {
        // Don't set up scroll listener if already triggered or shouldn't show
        if (hasTriggered || !shouldShowPopup()) return;

        const handleScroll = () => {
            // Find the roles section (Who is it for?)
            const rolesSection = document.getElementById("roles");
            if (!rolesSection) return;

            const rect = rolesSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Trigger when the top of the section enters the viewport
            if (rect.top <= windowHeight * 0.7 && rect.bottom >= 0) {
                setIsVisible(true);
                setHasTriggered(true);
                // Lock body scroll when popup is visible
                document.body.style.overflow = "hidden";
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        // Check immediately in case user is already scrolled
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [hasTriggered, shouldShowPopup]);

    const handleDismiss = () => {
        setIsExiting(true);
        setTimeout(() => {
            setIsVisible(false);
            // Restore body scroll
            document.body.style.overflow = "";
            // Remember dismissal
            localStorage.setItem("explorePopupDismissed", Date.now().toString());
        }, 300);
    };

    const handleContinue = () => {
        // Remember that they clicked continue
        localStorage.setItem("explorePopupDismissed", Date.now().toString());
        window.open("https://dashboard.credocarbon.com", "_blank");
        setIsExiting(true);
        setTimeout(() => {
            setIsVisible(false);
            // Restore body scroll
            document.body.style.overflow = "";
        }, 300);
    };

    // Handle clicking on the overlay (prevent closing, just keep it there)
    const handleOverlayClick = (e: React.MouseEvent) => {
        // Only close if clicking directly on the overlay, not the popup content
        if (e.target === e.currentTarget) {
            // Optional: You can add a subtle shake animation here to indicate they need to interact
            return;
        }
    };

    if (!isVisible) return null;

    return (
        <>
            {/* Full-screen overlay that blocks interaction */}
            <div
                className={`fixed inset-0 z-[100] bg-slate-950/50 backdrop-blur-[2px] transition-opacity duration-300 ${isExiting ? "opacity-0" : "opacity-100"
                    }`}
                onClick={handleOverlayClick}
                aria-hidden="true"
            />

            {/* Centered Modal Popup */}
            <div
                className={`fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none transition-all duration-300 ${isExiting ? "opacity-0 scale-95" : "opacity-100 scale-100"
                    }`}
            >
                <div className="pointer-events-auto w-full max-w-md">
                    {/* Popup Card */}
                    <div className="relative bg-slate-900/95 backdrop-blur-xl border border-emerald-500/30 rounded-3xl shadow-2xl shadow-emerald-500/20 overflow-hidden">
                        {/* Animated gradient border glow */}
                        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-emerald-500/60 via-cyan-500/60 to-emerald-500/60 opacity-70 blur-sm animate-pulse" />

                        {/* Decorative background elements */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-2xl" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-2xl" />

                        {/* Inner content */}
                        <div className="relative bg-slate-900/98 rounded-3xl p-6 md:p-8">
                            {/* Close button */}
                            <button
                                onClick={handleDismiss}
                                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-200 transition-colors rounded-xl hover:bg-slate-800/50 group"
                                aria-label="Close"
                            >
                                <X className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
                            </button>

                            {/* Header with badge */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-emerald-500 flex items-center justify-center shadow-xl shadow-emerald-500/40">
                                    <Sparkles className="h-8 w-8 text-slate-900" />
                                </div>
                                <div>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                                        <Zap className="h-3 w-3" />
                                        Free Access
                                    </span>
                                    <h4 className="text-xl md:text-2xl font-bold text-white">
                                        Explore CredoCarbon
                                    </h4>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-base text-slate-300 leading-relaxed mb-6">
                                Experience our unified{" "}
                                <span className="text-emerald-400 font-semibold">
                                    MRV, Registry & Trading
                                </span>{" "}
                                platform. See real carbon credit management in action — no sign-up needed.
                            </p>

                            {/* Feature pills */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/50">
                                    <Shield className="h-4 w-4 text-cyan-400" />
                                    <span className="text-sm text-slate-300">No Sign-up Required</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/50">
                                    <Clock className="h-4 w-4 text-emerald-400" />
                                    <span className="text-sm text-slate-300">Instant Access</span>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row items-stretch gap-3">
                                <button
                                    onClick={handleDismiss}
                                    className="flex-1 px-6 py-3.5 text-sm font-medium text-slate-400 hover:text-slate-200 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 rounded-xl transition-all duration-200 order-2 sm:order-1"
                                >
                                    Maybe Later
                                </button>
                                <button
                                    onClick={handleContinue}
                                    className="flex-1 sm:flex-[1.5] px-6 py-3.5 text-base font-bold text-slate-900 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 hover:from-emerald-300 hover:via-cyan-300 hover:to-emerald-400 rounded-xl transition-all duration-300 shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.02] flex items-center justify-center gap-2 group order-1 sm:order-2"
                                >
                                    <span>Explore Platform</span>
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
