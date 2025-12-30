import { useState, useEffect } from "react";
import { Sparkles, X, ArrowRight, Zap, Shield, Clock } from "lucide-react";

export default function ExplorePopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Check if user has already dismissed the popup
        const dismissed = localStorage.getItem("explorePopupDismissed");
        if (dismissed) return;

        // Show popup after 5 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleDismiss = () => {
        setIsExiting(true);
        setTimeout(() => {
            setIsVisible(false);
            // Remember dismissal for 24 hours
            localStorage.setItem("explorePopupDismissed", Date.now().toString());
        }, 300);
    };

    const handleContinue = () => {
        // Remember that they clicked continue (don't show again for a week)
        localStorage.setItem("explorePopupDismissed", Date.now().toString());
        window.open("https://credocarbon-web-641001192587.asia-south2.run.app", "_blank");
        setIsExiting(true);
        setTimeout(() => setIsVisible(false), 300);
    };

    if (!isVisible) return null;

    return (
        <div
            className={`fixed bottom-4 left-4 right-4 md:left-auto md:bottom-6 md:right-6 z-50 w-auto max-w-[340px] md:max-w-[380px] md:w-[380px] mx-auto md:mx-0 transition-all duration-500 ${isExiting
                ? "opacity-0 translate-y-4 scale-95"
                : "opacity-100 translate-y-0 scale-100"
                }`}
        >
            {/* Popup Card */}
            <div className="relative bg-slate-900/95 backdrop-blur-xl border border-emerald-500/30 rounded-3xl shadow-2xl shadow-emerald-500/20 overflow-hidden">
                {/* Animated gradient border glow */}
                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-emerald-500/60 via-cyan-500/60 to-emerald-500/60 opacity-70 blur-sm animate-pulse" />

                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-2xl" />

                {/* Inner content */}
                <div className="relative bg-slate-900/98 rounded-3xl p-4 md:p-5">
                    {/* Close button */}
                    <button
                        onClick={handleDismiss}
                        className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-200 transition-colors rounded-lg hover:bg-slate-800/50"
                        aria-label="Close"
                    >
                        <X className="h-4 w-4" />
                    </button>

                    {/* Header with badge */}
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/40">
                            <Sparkles className="h-6 w-6 text-slate-900 animate-spin-slow" />
                        </div>
                        <div>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-1">
                                <Zap className="h-2.5 w-2.5" />
                                Free Access
                            </span>
                            <h4 className="text-base font-bold text-white">
                                Try CredoCarbon Platform
                            </h4>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                        Experience our unified <span className="text-emerald-400 font-medium">MRV, Registry & Trading</span> platform. See real carbon credit management in action.
                    </p>

                    {/* Feature pills */}
                    <div className="flex flex-wrap gap-2 mb-5">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/50">
                            <Shield className="h-3.5 w-3.5 text-cyan-400" />
                            <span className="text-xs text-slate-300">No Sign-up Required</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/50">
                            <Clock className="h-3.5 w-3.5 text-emerald-400" />
                            <span className="text-xs text-slate-300">Instant Access</span>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleDismiss}
                            className="flex-1 px-4 py-2.5 text-sm font-medium text-slate-400 hover:text-slate-200 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 rounded-xl transition-all duration-200"
                        >
                            Maybe Later
                        </button>
                        <button
                            onClick={handleContinue}
                            className="flex-[1.3] px-4 py-2.5 text-sm font-bold text-slate-900 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 hover:from-emerald-300 hover:via-cyan-300 hover:to-emerald-400 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.02] flex items-center justify-center gap-2 group"
                        >
                            <span>Explore Now</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
