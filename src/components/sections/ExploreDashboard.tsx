import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

export default function ExploreDashboard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dashboardViews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, dashboardViews.length]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % dashboardViews.length);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + dashboardViews.length) % dashboardViews.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

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

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto mb-12 md:mb-16">
          {/* Main Display */}
          <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 shadow-2xl">
            {/* Gradient Glow */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${dashboardViews[currentIndex].gradient} opacity-20 blur-2xl transition-all duration-1000`} />

            {/* Image Container */}
            <div className="relative h-full p-3 md:p-6">
              {dashboardViews.map((view, index) => (
                <div
                  key={view.id}
                  className={`absolute inset-3 md:inset-6 transition-all duration-700 ${index === currentIndex
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

            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-slate-900/90 backdrop-blur-sm hover:bg-slate-800 text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 border border-slate-700/50 touch-manipulation"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-slate-900/90 backdrop-blur-sm hover:bg-slate-800 text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 border border-slate-700/50 touch-manipulation"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
            {dashboardViews.map((view, index) => (
              <button
                key={view.id}
                onClick={() => goToSlide(index)}
                className="group relative touch-manipulation"
              >
                <div className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'w-8 md:w-12 bg-gradient-to-r ' + view.gradient
                  : 'w-2 bg-slate-600 hover:bg-slate-500'
                  }`} />
              </button>
            ))}
          </div>

          {/* Thumbnail Preview - Hidden on Mobile */}
          <div className="hidden md:grid grid-cols-4 gap-4 mt-8">
            {dashboardViews.map((view, index) => (
              <button
                key={view.id}
                onClick={() => goToSlide(index)}
                className={`relative group rounded-xl overflow-hidden transition-all duration-300 ${index === currentIndex
                  ? 'ring-2 ring-emerald-400 scale-105'
                  : 'opacity-60 hover:opacity-100'
                  }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${view.gradient} opacity-0 group-hover:opacity-20 transition-opacity`} />
                <img
                  src={view.image}
                  alt={view.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-3">
                  <span className="text-xs font-semibold text-white">
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
            href="https://credocarbon-web-641001192587.asia-south2.run.app"
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
