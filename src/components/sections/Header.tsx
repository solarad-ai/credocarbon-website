import { NavLink } from "react-router-dom";
import { Leaf, Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const baseLink =
    "text-sm text-slate-300 hover:text-emerald-400 transition";
  const activeLink =
    "text-sm text-emerald-400 font-semibold";

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-emerald-500/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2.5 md:px-4 md:py-4">
          {/* ✅ LOGO WITH LEAF EFFECT */}
          <NavLink to="/" className="flex items-center gap-1.5 md:gap-2 flex-shrink-0">
            <div className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-700 shadow-lg shadow-emerald-500/40">
              <Leaf className="h-4 w-4 md:h-5 md:w-5 text-slate-950" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs md:text-sm font-semibold tracking-[0.12em] md:tracking-[0.18em] text-emerald-300 uppercase">
                CredoCarbon
              </span>
              <span className="text-[10px] md:text-xs text-slate-400">
                Unified MRV · Registry · Trading
              </span>
            </div>
          </NavLink>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : baseLink)}
            >
              Home
            </NavLink>

            <NavLink
              to="/platform"
              className={({ isActive }) => (isActive ? activeLink : baseLink)}
            >
              Platform
            </NavLink>

            <NavLink
              to="/developers"
              className={({ isActive }) => (isActive ? activeLink : baseLink)}
            >
              Developers
            </NavLink>

            <NavLink
              to="/vvb"
              className={({ isActive }) => (isActive ? activeLink : baseLink)}
            >
              VVBs
            </NavLink>

            <NavLink
              to="/buyers"
              className={({ isActive }) => (isActive ? activeLink : baseLink)}
            >
              Buyers
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeLink : baseLink)}
            >
              About
            </NavLink>
          </nav>

          {/* CTA BUTTON & MOBILE MENU TOGGLE */}
          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <a
              href="https://credocarbon-web-641001192587.asia-south2.run.app"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 px-4 py-2 md:px-6 md:py-2.5 text-[11px] md:text-sm font-bold text-slate-900 transition-all duration-300 shadow-lg shadow-emerald-500/40 hover:shadow-emerald-400/60 hover:shadow-xl hover:scale-105 whitespace-nowrap overflow-hidden animate-pulse-subtle"
            >
              {/* Animated glow ring */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-400 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 animate-pulse" />

              {/* Shimmer effect */}
              <span className="absolute inset-0 rounded-full overflow-hidden">
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </span>

              {/* Pulsing border glow */}
              <span className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-300 opacity-60 blur-sm animate-pulse" />

              {/* Inner content */}
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 md:h-4 md:w-4 animate-spin-slow" />
                <span>Explore</span>
              </span>
            </a>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-emerald-300 hover:text-emerald-400 transition rounded-lg hover:bg-emerald-500/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-500"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-in Menu */}
          <div className="fixed top-0 right-0 bottom-0 w-[75%] max-w-[320px] bg-slate-950/98 backdrop-blur-xl border-l border-slate-800 z-50 md:hidden shadow-2xl transition-transform duration-500 ease-out animate-in slide-in-from-right">
            {/* Menu Content */}
            <div className="flex flex-col h-full">
              {/* Header - Just close button */}
              <div className="flex items-center justify-end px-4 py-4 animate-in fade-in slide-in-from-top-2 duration-700 delay-150">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-emerald-400 transition-colors duration-300 rounded-lg hover:bg-slate-800/50"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-4 py-6 overflow-y-auto">
                <div className="space-y-1">
                  <NavLink
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 animate-in fade-in slide-in-from-right-3 delay-200 ${isActive
                        ? "bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-400"
                        : "text-slate-300 hover:bg-slate-800/50 hover:text-emerald-400"
                      }`
                    }
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/platform"
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 animate-in fade-in slide-in-from-right-3 delay-300 ${isActive
                        ? "bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-400"
                        : "text-slate-300 hover:bg-slate-800/50 hover:text-emerald-400"
                      }`
                    }
                  >
                    Platform
                  </NavLink>

                  <NavLink
                    to="/developers"
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 animate-in fade-in slide-in-from-right-3 delay-[400ms] ${isActive
                        ? "bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-400"
                        : "text-slate-300 hover:bg-slate-800/50 hover:text-emerald-400"
                      }`
                    }
                  >
                    Developers
                  </NavLink>

                  <NavLink
                    to="/vvb"
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 animate-in fade-in slide-in-from-right-3 delay-500 ${isActive
                        ? "bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-400"
                        : "text-slate-300 hover:bg-slate-800/50 hover:text-emerald-400"
                      }`
                    }
                  >
                    VVBs
                  </NavLink>

                  <NavLink
                    to="/buyers"
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 animate-in fade-in slide-in-from-right-3 delay-[600ms] ${isActive
                        ? "bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-400"
                        : "text-slate-300 hover:bg-slate-800/50 hover:text-emerald-400"
                      }`
                    }
                  >
                    Buyers
                  </NavLink>

                  <NavLink
                    to="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 animate-in fade-in slide-in-from-right-3 delay-700 ${isActive
                        ? "bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-400"
                        : "text-slate-300 hover:bg-slate-800/50 hover:text-emerald-400"
                      }`
                    }
                  >
                    About
                  </NavLink>
                </div>
              </nav>

              {/* Footer CTA */}
              <div className="px-5 py-4 border-t border-slate-800/50 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-[800ms]">
                <a
                  href="https://credocarbon-web-641001192587.asia-south2.run.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center gap-2 w-full rounded-lg bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 px-4 py-3 text-sm font-bold text-slate-900 transition-all duration-300 shadow-lg shadow-emerald-500/40 overflow-hidden animate-pulse-subtle"
                >
                  {/* Pulsing border glow */}
                  <span className="absolute -inset-[2px] rounded-lg bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-300 opacity-60 blur-sm animate-pulse" />

                  {/* Shimmer effect */}
                  <span className="absolute inset-0 rounded-lg overflow-hidden">
                    <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  </span>

                  <span className="relative z-10 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 animate-spin-slow" />
                    <span>Explore Platform</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
