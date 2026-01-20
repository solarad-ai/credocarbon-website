import { Mail, Phone, Linkedin } from "lucide-react";
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

// Footer remains in English (LTR) for both language versions
export default function Footer() {
  const year = new Date().getFullYear();

  const navigationLinks = {
    product: [
      { label: "Pricing", href: "/pricing" },
      { label: "Registries", href: "/registries" }
    ],
    company: [
      { label: "About Us", href: "/about-us" },
      { label: "Insights", href: "/insights" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" }
    ],
    resources: [
      { label: "Documentation", href: "/docs" },
      { label: "Help Center", href: "/help" },
      { label: "FAQ", href: "/faq" }
    ],
    legal: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Compliance", href: "/compliance" }
    ]
  };

  const registries = [
    { name: "Gold Standard", logo: "/images/gold_standards.png" },
    { name: "Verra VCS", logo: "/images/verra.webp" },
    { name: "GCC", logo: "/images/Gcc.png" },
    { name: "Plan Vivo", logo: "/images/Plan_vivo.png" }
  ];

  return (
    <footer dir="ltr" className="relative border-t border-emerald-500/10 bg-slate-950/90">
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12 text-slate-400">
        {/* TOP GRID - Brand + Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8 mb-8 md:mb-12">

          {/* BRAND - Takes 2 columns on large screens, full width on mobile */}
          <div className="col-span-2 lg:col-span-2 space-y-3 md:space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-700 shadow-lg shadow-emerald-500/40">
                <Leaf className="h-4 w-4 md:h-5 md:w-5 text-slate-950" />
              </div>

              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold tracking-[0.18em] text-emerald-300 uppercase">
                  CredoCarbon
                </span>
              </div>
            </div>

            <p className="text-xs md:text-sm leading-relaxed text-slate-400 max-w-xs">
              The digital backbone for next-era carbon markets — where transparency, verification integrity and market confidence operate on a shared system of record.
            </p>

            {/* Contact Info */}
            <div className="space-y-1.5 md:space-y-2 text-xs pt-1 md:pt-2">
              <a
                href="mailto:info@credocarbon.com"
                className="flex items-center gap-2 hover:text-emerald-400 transition"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                info@credocarbon.com
              </a>

              <a
                href="tel:+919795119246"
                className="flex items-center gap-2 hover:text-emerald-400 transition"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                +91 97951 19246
              </a>

              <a
                href="https://www.linkedin.com/company/credocarbon/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition"
              >
                <Linkedin className="w-3.5 h-3.5 text-emerald-400" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* PRODUCT */}
          <div>
            <h4 className="text-xs md:text-sm font-semibold text-slate-200 mb-2 md:mb-4">
              Product
            </h4>
            <ul className="space-y-1.5 md:space-y-2.5 text-xs md:text-sm">
              {navigationLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-xs md:text-sm font-semibold text-slate-200 mb-2 md:mb-4">
              Company
            </h4>
            <ul className="space-y-1.5 md:space-y-2.5 text-xs md:text-sm">
              {navigationLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="text-xs md:text-sm font-semibold text-slate-200 mb-2 md:mb-4">
              Resources
            </h4>
            <ul className="space-y-1.5 md:space-y-2.5 text-xs md:text-sm">
              {navigationLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-xs md:text-sm font-semibold text-slate-200 mb-2 md:mb-4">
              Legal
            </h4>
            <ul className="space-y-1.5 md:space-y-2.5 text-xs md:text-sm">
              {navigationLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SUPPORTED REGISTRIES */}
        {/* <div className="mb-10 pb-10 border-b border-slate-800">
          <div className="text-center mb-6">
            <h4 className="text-sm font-semibold text-slate-300 mb-2">
              Supported Registries
            </h4>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {registries.map((registry) => (
              <div
                key={registry.name}
                className="group relative"
              >
                <img
                  src={registry.logo}
                  alt={registry.name}
                  className="h-10 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div> */}

        {/* BOTTOM BAR */}
        <div className="relative my-6">
          <div className="h-px w-full bg-slate-800" />
          <div className="absolute left-1/2 -translate-x-1/2 -top-[1px] w-24 h-px bg-emerald-400/60 blur-sm" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <p className="text-slate-500">
            © {year} CredoCarbon. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-400">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
