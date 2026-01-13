import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ExploreDashboard() {
  // null means no view selected (show video), otherwise show the selected image
  const [selectedView, setSelectedView] = useState<number | null>(null);

  const dashboardViews = [
    {
      id: "dashboard",
      title: "Unified Platform",
      subtitle: "Complete carbon credit lifecycle management",
      image: "/images/Dashbaord.png",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      id: "developer",
      title: "Developer Experience",
      subtitle: "Streamlined project development workflows",
      image: "/images/Developer.png",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: "buyer",
      title: "Buyer Intelligence",
      subtitle: "AI-powered procurement and analytics",
      image: "/images/Buyer.png",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: "features",
      title: "Advanced Features",
      subtitle: "Real-time tracking and comprehensive reporting",
      image: "/images/Features.png",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const handleViewSelect = (index: number) => {
    setSelectedView(index);
  };

  const handleBackToVideo = () => {
    setSelectedView(null);
  };

  // Get current gradient for glow effect
  const currentGradient = selectedView !== null
    ? dashboardViews[selectedView].gradient
    : "from-emerald-500 to-teal-500";

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 md:px-6 py-2 md:py-2.5 mb-4 md:mb-6 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-emerald-400" />
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.15em] md:tracking-[0.2em] text-emerald-300">
              Platform Preview
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight px-4">
            Experience{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Carbon Operations
            </span>
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            Like Never Before
          </h2>

          <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto px-4">
            One platform, infinite possibilities. See how we're transforming carbon credit management.
          </p>
        </div>

        {/* Video/Image Container */}
        <div className="relative max-w-5xl mx-auto mb-12 md:mb-16">
          {/* Main Display */}
          <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 shadow-2xl">
            {/* Gradient Glow */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${currentGradient} opacity-20 blur-2xl transition-all duration-1000`} />

            {/* Video/Image Content */}
            <div className="relative h-full p-3 md:p-6">
              {/* Dashboard Video - shown when no view is selected */}
              <div
                className={`absolute inset-3 md:inset-6 transition-all duration-700 ${selectedView === null
                  ? 'opacity-100 scale-100 z-10'
                  : 'opacity-0 scale-95 z-0'
                  }`}
              >
                <video
                  src="/videoes/dashboard.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-2xl"
                />
              </div>

              {/* Static Images - shown when a view is selected */}
              {dashboardViews.map((view, index) => (
                <div
                  key={view.id}
                  className={`absolute inset-3 md:inset-6 transition-all duration-700 ${index === selectedView
                    ? 'opacity-100 scale-100 z-10'
                    : 'opacity-0 scale-95 z-0'
                    }`}
                >
                  <img
                    src={view.image}
                    alt={view.title}
                    className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-2xl"
                  />
                </div>
              ))}
            </div>

            {/* Back to Video Button - shown when a view is selected */}
            {selectedView !== null && (
              <button
                onClick={handleBackToVideo}
                className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-slate-900/90 backdrop-blur-sm hover:bg-slate-800 text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 border border-slate-700/50"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="text-sm font-medium">Watch Video</span>
              </button>
            )}
          </div>

          {/* Thumbnail Preview - Feature Selection */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-6 md:mt-8">
            {dashboardViews.map((view, index) => (
              <button
                key={view.id}
                onClick={() => handleViewSelect(index)}
                className={`relative group rounded-xl overflow-hidden transition-all duration-300 touch-manipulation ${index === selectedView
                  ? 'ring-2 ring-emerald-400 scale-105'
                  : 'opacity-70 hover:opacity-100 hover:scale-102'
                  }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${view.gradient} opacity-0 group-hover:opacity-20 transition-opacity`} />
                <img
                  src={view.image}
                  alt={view.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex items-end p-3">
                  <span className="text-xs md:text-sm font-semibold text-white">
                    {view.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center px-4">
          <a
            href="https://dashboard.credocarbon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 hover:from-emerald-400 hover:via-blue-400 hover:to-purple-400 text-white font-bold text-base md:text-lg px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl transition-all duration-300 shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/60 hover:scale-105 group touch-manipulation"
          >
            <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
            <span>Start Exploring Now</span>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
          </a>
          <p className="text-xs md:text-sm text-slate-400 mt-4 md:mt-5">
            ✨ Full access • No credit card • Instant setup
          </p>
        </div>
      </div>
    </section>
  );
}
