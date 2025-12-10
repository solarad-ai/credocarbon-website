import { NavLink } from "react-router-dom";
import { Leaf } from "lucide-react";

export default function Header() {
  const baseLink =
    "text-sm text-slate-300 hover:text-emerald-400 transition";
  const activeLink =
    "text-sm text-emerald-400 font-semibold";

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-emerald-500/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
            {/* ✅ LOGO WITH LEAF EFFECT */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-700 shadow-lg shadow-emerald-500/40">
            <Leaf className="h-5 w-5 text-slate-950" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-[0.18em] text-emerald-300 uppercase">
              CredoCarbon
            </span>
            <span className="text-xs text-slate-400">
              Unified MRV · Registry · Trading
            </span>
          </div>
        </NavLink>

        {/* NAV LINKS */}
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

        {/* CTA BUTTON */}
        <NavLink
          to="/platform"
          className="rounded-full bg-emerald-500/10 border border-emerald-400/30 px-5 py-2 text-xs text-emerald-300 hover:bg-emerald-500/20 transition"
        >
          Explore Platform
        </NavLink>
      </div>
    </header>
  );
}
