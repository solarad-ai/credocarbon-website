import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Linkedin as LinkedInIcon } from "lucide-react";
import { Leaf } from "lucide-react";



export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-emerald-500/10 bg-slate-950/90">
      <div className="mx-auto max-w-6xl px-4 py-12 text-slate-400">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          
          {/* BRAND */}
          <div className="space-y-2">
  <div className="flex items-center gap-3">
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
  </div>

  <p className="text-xs leading-relaxed text-slate-400 max-w-xs">
    Digital infrastructure for verifiable carbon markets, MRV workflows
    and transparent climate asset operations.
  </p>
</div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">
              Get in touch
            </h4>

            <div className="space-y-3 text-xs">
              <a
                href="mailto:founders@solarad.ai"
                className="flex items-center gap-2 hover:text-emerald-400 transition"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                founders@solarad.ai
              </a>

              <a
                href="https://www.linkedin.com/company/solarad-ai/posts/?feedView=all"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition"
              >
                <Linkedin className="w-4 h-4 text-emerald-400" />
                Follow on LinkedIn
              </a>
            </div>
          </div>

          {/* OFFICES */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">
              Our Offices
            </h4>

            <div className="space-y-4 text-xs">
              {/* USA */}
              <div>
                <p className="text-slate-300 font-medium mb-1">USA</p>
                <p className="flex items-start gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-emerald-400 mt-[2px]" />
                  226 Haight St., San Francisco, CA 94102
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  +1 628 800 0056
                </p>
              </div>

              {/* INDIA */}
              <div>
                <p className="text-slate-300 font-medium mb-1">India</p>
                <p className="flex items-start gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-emerald-400 mt-[2px]" />
                  145, Sector 44, Gurugram, Haryana 122003
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  +91 97951 19246
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-t border-slate-800 pt-6 text-[11px]">
          <p>
            © {year} CredoCarbon. All rights reserved.
          </p>
          <p className="text-slate-500">
            Built by Solarad Global · MRV, registry workflows & OTC trading rails in one place.
          </p>
        </div>
      </div>
    </footer>
  );
}
